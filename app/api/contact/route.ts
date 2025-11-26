import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Function to send email using Nodemailer
async function sendEmail(data: { name: string; brand: string; budget: number; projectType: string }) {
  // Check if environment variables are set
  const emailUser = process.env.EMAIL_USER || 'Ogundipeayomide70@gmail.com';
  const emailPass = process.env.EMAIL_PASSWORD;
  
  console.log('📧 Environment variables check:');
  console.log('EMAIL_USER:', emailUser ? 'Set' : 'Not set');
  console.log('EMAIL_PASSWORD:', emailPass ? 'Set' : 'Not set');
  
  // Don't proceed if no password is set
  if (!emailPass) {
    console.error('📧 Email password not configured in environment variables');
    return { success: false, error: 'Email service not properly configured' };
  }

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log('📧 Email transporter verified successfully');
  } catch (error) {
    console.error('📧 Email transporter verification failed:', error);
    return { success: false, error: 'Email service configuration error' };
  }

  // Define email content
  const mailOptions = {
    from: `"EASYREELS Portfolio" <${emailUser}>`,
    to: emailUser,
    replyTo: data.name,
    subject: 'New Booking Inquiry from EASYREELS Portfolio',
    text: `
New Booking Inquiry:

Name: ${data.name}
Brand/Project: ${data.brand}
Budget: $${data.budget.toLocaleString()}
Project Type: ${data.projectType}

This message was sent from the contact form on your EASYREELS portfolio website.
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Booking Inquiry</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong style="color: #333;">Name:</strong> <span style="color: #666;">${data.name}</span></p>
          <p><strong style="color: #333;">Brand/Project:</strong> <span style="color: #666;">${data.brand}</span></p>
          <p><strong style="color: #333;">Budget:</strong> <span style="color: #666;">$${data.budget.toLocaleString()}</span></p>
          <p><strong style="color: #333;">Project Type:</strong> <span style="color: #666;">${data.projectType}</span></p>
        </div>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #999; font-size: 14px;"><em>This message was sent from the contact form on your EASYREELS portfolio website.</em></p>
      </div>
    `,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully:', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('📧 Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log incoming request for debugging
    console.log('📧 Contact form submission received:', body);
    
    // Validate required fields
    const { name, brand, budget, projectType } = body;
    
    if (!name || !brand || !budget || !projectType) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'All fields are required' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Send email with form data
    const emailResult = await sendEmail({ name, brand, budget, projectType });
    
    if (emailResult.success) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Thank you for your inquiry! We will contact you within 24 hours.' 
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    } else {
      throw new Error(emailResult.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Something went wrong. Please try again.' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Add GET method to handle form access
export async function GET() {
  return new Response(
    JSON.stringify({ 
      success: true, 
      message: 'Contact API endpoint is active' 
    }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}