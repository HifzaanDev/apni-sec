import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "@/app/lib/auth/AuthService";
import { ApiError } from "@/app/lib/errors/ApiError";

const authService = new AuthService();

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { message: "Verification token is required" },
        { status: 400 }
      );
    }

    await authService.verifyEmail(token);

    return NextResponse.json(
      { message: "Email verified successfully" },
      { status: 200 }
    );
  } catch (err: any) {
    if (err instanceof ApiError) {
      return NextResponse.json(
        { message: err.message },
        { status: err.statusCode }
      );
    }

    return NextResponse.json(
      { message: err.message || "Invalid verification token" },
      { status: 400 }
    );
  }
}
