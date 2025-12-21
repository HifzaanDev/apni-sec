import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "@/app/lib/auth/AuthService";
import { AuthMiddleware } from "@/app/lib/auth/AuthMiddleware";
import { ApiError } from "@/app/lib/errors/ApiError";

const authService = new AuthService();

export async function PUT(req: NextRequest) {
  try {
    const user = AuthMiddleware.authenticate(req);
    const body = await req.json();

    if (!body.currentPassword || !body.newPassword) {
      return NextResponse.json(
        { message: "Current and new password are required" },
        { status: 400 }
      );
    }

    if (body.newPassword.length < 6) {
      return NextResponse.json(
        { message: "New password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const result = await authService.changePassword(user.id, body);

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    if (err instanceof ApiError) {
      return NextResponse.json(
        { message: err.message },
        { status: err.statusCode }
      );
    }

    if (err.message === "Invalid or expired token") {
      return NextResponse.json(
        { message: err.message },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 400 } // Often 400 is better than 500 for business logic errors
    );
  }
}
