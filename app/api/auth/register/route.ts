import { NextRequest } from "next/server";
import { AuthHandler } from "@/app/lib/auth/AuthHandler";
import { RateLimiter } from "@/app/lib/core/RateLimiter";
import { getClientKey } from "@/app/lib/core/getClientKey";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const key = getClientKey(req);
  RateLimiter.check(req, key);

  try {
    const handler = new AuthHandler();
    return await handler.register(req);
  } catch (err: any) {
    if (err.message === "Email already exists") {
      return NextResponse.json(
        { message: err.message },
        { status: 409 } // Conflict
      );
    }
    
    // Pass other errors to standard handler or return 500
    return NextResponse.json(
      { message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
