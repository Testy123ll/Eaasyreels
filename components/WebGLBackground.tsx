'use client';

import { useEffect, useRef } from 'react';

const WebGLBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl');
    if (!gl) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Vertex shader source
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = vec4(a_position, 0, 1);
        v_texCoord = a_texCoord;
      }
    `;
    
    // Fragment shader source with animated gradient and particles
    const fragmentShaderSource = `
      precision mediump float;
      
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      
      // Random function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
      
      // Noise function
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        
        vec2 u = f*f*(3.0-2.0*f);
        
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      
      void main() {
        vec2 uv = v_texCoord;
        vec2 st = uv * 5.0;
        
        // Animated gradient background
        vec3 color1 = vec3(0.0, 0.5, 1.0); // Blue
        vec3 color2 = vec3(1.0, 0.0, 1.0); // Magenta
        vec3 color3 = vec3(0.0, 1.0, 0.0); // Green
        
        float noise1 = noise(st + u_time * 0.1);
        float noise2 = noise(st * 2.0 + u_time * 0.2);
        float noise3 = noise(st * 0.5 + u_time * 0.05);
        
        vec3 gradient = mix(color1, color2, noise1);
        gradient = mix(gradient, color3, noise2 * 0.5);
        
        // Add particles
        float particles = 0.0;
        for (float i = 0.0; i < 20.0; i++) {
          vec2 particlePos = vec2(
            sin(u_time * 0.5 + i * 0.3) * 0.4 + 0.5,
            cos(u_time * 0.3 + i * 0.7) * 0.4 + 0.5
          );
          
          float size = 0.005 + sin(u_time + i) * 0.002;
          float dist = distance(uv, particlePos);
          particles += smoothstep(size, 0.0, dist) * 0.5;
        }
        
        // Combine gradient and particles
        vec3 finalColor = gradient + particles;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;
    
    // Create shader function
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    };
    
    // Create shaders
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;
    
    // Create program
    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    
    gl.useProgram(program);
    
    // Look up attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    
    // Create a buffer for positions
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // Full screen quad
    const positions = [
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
    // Create a buffer for texture coordinates
    const texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    
    const texCoords = [
      0, 0,
      1, 0,
      0, 1,
      1, 1,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);
    
    // Render function
    const startTime = Date.now();
    const render = () => {
      resizeCanvas();
      
      gl.viewport(0, 0, canvas.width, canvas.height);
      
      // Clear the canvas
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      // Bind position buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      
      // Bind texture coordinate buffer
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.enableVertexAttribArray(texCoordLocation);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
      
      // Set uniforms
      const currentTime = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      
      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default WebGLBackground;