import { AuthRepository } from "./AuthRepository";
import bcrypt from "bcrypt";
import { JwtService } from "./JwtService";
import { EmailService } from "../email/EmailService";
import crypto from "crypto";

export class AuthService {
  private repo = new AuthRepository();
    
  async register(data: any) {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) {
      throw new Error("Email already exists");
    }
    
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");
    
    const user = await this.repo.createUser({ 
      email: data.email, 
      password: hashedPassword,
      verificationToken
    });

    // Send verification email instead of welcome email
    try {
      await EmailService.sendVerificationEmail(user.email, verificationToken);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      // We might want to throw here if email is strictly required, 
      // or just log it and let the user know to request a new one.
      // For now, let's rethrow with a user-friendly message
      throw new Error("Account created, but failed to send verification email. Please contact support.");
    }

    return {
      id: user.id,
      email: user.email,
      // Do not return token, user must verify first
      requiresVerification: true 
    };
  }

  async login(data: any) {
    const user = await this.repo.findByEmail(data.email);
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const ok = await bcrypt.compare(data.password, user.password);
    if (!ok) {
      throw new Error("Invalid credentials");
    }

    if (!user.emailVerified) {
      throw new Error("Please verify your email address before logging in.");
    }

    const token = JwtService.sign({
      id: user.id,
    });

    return { token };
  }

  async verifyEmail(token: string) {
    const user = await this.repo.findByVerificationToken(token);
    
    if (!user) {
      throw new Error("Invalid or expired verification token");
    }

    await this.repo.markEmailAsVerified(user.id);
    
    // Optionally send welcome email AFTER verification
    await EmailService.sendWelcomeEmail(user.email);
    
    return true;
  }
  async changePassword(userId: string, data: any) {
    console.log("🔄 CHANGE PASSWORD ATTEMPT", { userId });
    const user = await this.repo.findById(userId);
    if (!user) throw new Error("User not found");

    console.log("🔑 Verifying password...");
    // console.log("Input:", data.currentPassword); // DON'T LOG REAL PASSWORDS IN PROD
    // console.log("Hash:", user.password);

    const ok = await bcrypt.compare(data.currentPassword, user.password);
    console.log("✅ Password Match:", ok);

    if (!ok) {
      console.log("❌ PASSWORD MISMATCH");
      throw new Error("Current password is incorrect");
    }

    const hashedPassword = await bcrypt.hash(data.newPassword, 10);
    await this.repo.updatePassword(userId, hashedPassword);
    
    return { message: "Password updated successfully" };
  }
}
