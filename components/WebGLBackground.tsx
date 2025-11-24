'use client';

import { useEffect, useRef } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const timeUniformLocationRef = useRef<WebGLUniformLocation | null>(null);
  const resolutionUniformLocationRef = useRef<WebGLUniformLocation | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!context || !(context instanceof WebGLRenderingContext)) {
      console.warn('WebGL not supported');
      return;
    }
    
    const gl: WebGLRenderingContext = context;
    glRef.current = gl;
    
    // Vertex shader source
    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;
    
    // Fragment shader source for a simple fluid effect
    const fragmentShaderSource = `
      precision mediump float;
      
      uniform float uTime;
      uniform vec2 uResolution;
      
      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        uv.x *= uResolution.x / uResolution.y;
        
        // Create a moving gradient with multiple color waves
        vec3 color = 0.5 + 0.5 * cos(uTime * 0.5 + uv.xyx * 2.0 + vec3(0, 2, 4));
        
        // Add some noise-like effect
        float noise = sin(uv.x * 10.0 + uTime) * cos(uv.y * 8.0 + uTime * 1.3);
        color += noise * 0.1;
        
        // Add subtle pulsing effect
        float pulse = sin(uTime * 0.3) * 0.05;
        color += pulse;
        
        gl_FragColor = vec4(color, 0.3);
      }
    `;
    
    // Compile shader function
    function compileShader(source: string, type: number): WebGLShader | null {
      const gl = glRef.current;
      if (!gl) return null;
      
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }
    
    // Initialize WebGL resources
    function initWebGL() {
      const gl = glRef.current;
      if (!gl) return false;
      
      // Clean up existing program if it exists
      if (programRef.current) {
        gl.deleteProgram(programRef.current);
        programRef.current = null;
      }
      
      // Create shaders
      const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
      const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
      
      if (!vertexShader || !fragmentShader) return false;
      
      // Create program
      const program = gl.createProgram();
      if (!program) return false;
      
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return false;
      }
      
      gl.useProgram(program);
      programRef.current = program;
      
      // Set up geometry (full screen quad)
      const positions = new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
         1.0,  1.0,
      ]);
      
      const positionBuffer = gl.createBuffer();
      if (!positionBuffer) return false;
      
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      
      const positionAttributeLocation = gl.getAttribLocation(program, 'aPosition');
      gl.enableVertexAttribArray(positionAttributeLocation);
      gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
      
      // Get uniform locations
      timeUniformLocationRef.current = gl.getUniformLocation(program, 'uTime');
      resolutionUniformLocationRef.current = gl.getUniformLocation(program, 'uResolution');
      
      // Clean up shaders
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      
      return true;
    }
    
    // Set canvas size
    function resizeCanvas() {
      const gl = glRef.current;
      const canvas = canvasRef.current;
      if (!gl || !canvas) return;
      
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    
    // Animation loop
    function render() {
      const gl = glRef.current;
      const canvas = canvasRef.current;
      if (!gl || !canvas || !programRef.current || !timeUniformLocationRef.current || !resolutionUniformLocationRef.current) return;
      
      const currentTime = (Date.now() - startTimeRef.current) / 1000;
      
      // Set uniforms
      gl.uniform1f(timeUniformLocationRef.current, currentTime);
      gl.uniform2f(resolutionUniformLocationRef.current, canvas.width, canvas.height);
      
      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationRef.current = requestAnimationFrame(render);
    }
    
    // Handle WebGL context loss
    function handleContextLost(event: Event) {
      event.preventDefault();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    
    function handleContextRestored() {
      if (initWebGL()) {
        startTimeRef.current = Date.now();
        animationRef.current = requestAnimationFrame(render);
      }
    }
    
    // Initialize
    resizeCanvas();
    startTimeRef.current = Date.now();
    
    if (initWebGL()) {
      animationRef.current = requestAnimationFrame(render);
    }
    
    // Event listeners
    const resizeHandler = () => resizeCanvas();
    window.addEventListener('resize', resizeHandler);
    
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeHandler);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      const gl = glRef.current;
      if (programRef.current && gl) {
        gl.deleteProgram(programRef.current);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
}