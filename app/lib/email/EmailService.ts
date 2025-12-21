import { Resend } from "resend";
import { ApiError } from "@/app/lib/errors/ApiError";

console.log("📧 EMAIL SERVICE INIT");
console.log("EMAIL_FROM USED:", process.env.EMAIL_FROM);
console.log("RESEND API KEY EXISTS:", !!process.env.RESEND_API_KEY);

export class EmailService {
  private static resend = new Resend(process.env.RESEND_API_KEY!);
  private static from = process.env.EMAIL_FROM!;


  // WELCOME EMAIL
  
  static async sendWelcomeEmail(email: string) {
    console.log("🚀 SEND WELCOME EMAIL CALLED");
    console.log("➡️ To:", email);
    console.log("➡️ From:", this.from);

    try {
      const res = await this.resend.emails.send({
        from: this.from,
        to: email,
        subject: "Welcome to ApniSec",
        html: `
          <h2>Welcome to ApniSec 👋</h2>
          <p>Your account has been successfully created.</p>
          <p>We’re glad to have you on board.</p>
        `,
      });

      console.log(" WELCOME EMAIL SENT SUCCESSFULLY");
      console.log(" Resend Response:", res);
    } catch (err) {
      console.error(" FAILED TO SEND WELCOME EMAIL");
      console.error(" Error:", err);
      throw new ApiError("Failed to send welcome email", 500);
    }
  }


  // VERIFICATION EMAIL
  
  static async sendVerificationEmail(email: string, token: string) {
    console.log(" SEND VERIFICATION EMAIL CALLED");
    console.log("To:", email);
    
    // In local dev, we might not have a real domain, so use localhost
    // In production, use the actual domain
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const verificationLink = `${baseUrl}/verify?token=${token}`;
    
    console.log("➡️ Link:", verificationLink);

    try {
      await this.resend.emails.send({
        from: this.from,
        to: email,
        subject: "Verify your email - ApniSec",
        html: `
          <h2>Welcome to ApniSec!</h2>
          <p>Please click the link below to verify your email address:</p>
          <a href="${verificationLink}" style="display:inline-block;background:#10b981;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;font-weight:bold;">Verify Email</a>
          <p>Or copy this link: ${verificationLink}</p>
          <p>This link expires in 24 hours.</p>
        `,
      });

      console.log(" VERIFICATION EMAIL SENT SUCCESSFULLY");
    } catch (err) {
      console.error("FAILED TO SEND VERIFICATION EMAIL");
      console.error(" Error:", err);
      // Don't throw here, just log it. We don't want to break registration if email fails 
      
    }
  }

 
  // ISSUE CREATED EMAIL

  static async sendIssueCreatedEmail(
    email: string,
    issue: {
      title: string;
      description: string;
      type: string;
    }
  ) {
    console.log("🚨 SEND ISSUE EMAIL CALLED", {
      to: email,
      title: issue.title,
    });

    console.log("➡️ From:", this.from);
    console.log("➡️ Issue payload:", issue);

    try {
      const res = await this.resend.emails.send({
        from: this.from,
        to: email,
        subject: `Issue Created: ${issue.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #10b981; margin-top: 0;">New Issue Created</h2>
            <p style="color: #555;">A new issue has been created in your ApniSec dashboard.</p>
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Type:</strong> <span style="background-color: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 12px;">${issue.type}</span></p>
              <p style="margin: 5px 0;"><strong>Title:</strong> ${issue.title}</p>
              <p style="margin: 5px 0;"><strong>Description:</strong> ${issue.description}</p>
            </div>

            <p style="color: #555;">You can view and manage this issue in your dashboard.</p>
            
            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard" style="display: inline-block; background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Go to Dashboard</a>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 15px;" />
            <p style="font-size: 12px; color: #999; text-align: center;">
              ApniSec Inc. • Security Automation<br>
              This is an automated notification.
            </p>
          </div>
        `,
      });

      console.log("✅ ISSUE EMAIL SENT SUCCESSFULLY");
      console.log("📨 Resend Response:", res);
    } catch (err) {
      console.error("❌ FAILED TO SEND ISSUE EMAIL");
      console.error("🧨 Error:", err);
      throw new ApiError("Failed to send issue email", 500);
    }
  }
}
