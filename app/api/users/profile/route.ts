import { NextRequest, NextResponse } from "next/server";
import { AuthMiddleware } from "@/app/lib/auth/AuthMiddleware";
import { RateLimiter } from "@/app/lib/core/RateLimiter";
import { ProfileService } from "@/app/lib/users/ProfileService";
import { ApiError } from "@/app/lib/errors/ApiError";

const profileService = new ProfileService();

export async function GET(req: NextRequest) {
  try {
    const user = AuthMiddleware.authenticate(req);
    RateLimiter.check(req, user.id);

    const profile = await profileService.getProfile(user.id);
    return NextResponse.json(profile, { status: 200 });
  } catch (err: any) {
    if (err instanceof ApiError) {
      return NextResponse.json(
        { message: err.message },
        { status: err.statusCode }
      );
    }

    if (err.message === "Rate limit exceeded") {
      return NextResponse.json(
        { message: err.message },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = AuthMiddleware.authenticate(req);
    RateLimiter.check(req, user.id);

    const body = await req.json();
    const updated = await profileService.updateProfile(
      user.id,
      body
    );

    return NextResponse.json(updated, { status: 200 });
  } catch (err: any) {
    if (err instanceof ApiError) {
      return NextResponse.json(
        { message: err.message },
        { status: err.statusCode }
      );
    }

    if (err.message === "Rate limit exceeded") {
      return NextResponse.json(
        { message: err.message },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
