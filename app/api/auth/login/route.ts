import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "@/app/lib/auth/AuthService";
import { RateLimiter } from "@/app/lib/core/RateLimiter";
import { getClientKey } from "@/app/lib/core/getClientKey";
import { ApiError } from "@/app/lib/errors/ApiError";

const authService = new AuthService();

export async function POST(req: NextRequest) {
  try {
    // rate limit by IP 
    const key = getClientKey(req);
    RateLimiter.check(req, key);

    const body = await req.json();
    const result = await authService.login(body);

    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    //  ApiError 
    if (err instanceof ApiError) {
      return NextResponse.json(
        { message: err.message },
        { status: err.statusCode }
      );
    }

    //  Rate limit
    if (err.message === "Rate limit exceeded") {
      return NextResponse.json(
        { message: err.message },
        { status: 429 }
      );
    }

    //  Known Auth Errors
    if (
      err.message.includes("Invalid credentials") || 
      err.message.includes("Please verify your email address")
    ) {
      return NextResponse.json(
        { message: err.message },
        { status: 401 }
      );
    }

    // server bug
    console.error("Login API Error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
