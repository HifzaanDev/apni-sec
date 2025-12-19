import { NextRequest, NextResponse } from "next/server";
import { AuthMiddleware } from "../../../lib/auth/AuthMiddleware";
import { RateLimiter } from "@/app/lib/core/RateLimiter";

export async function GET(req: NextRequest) {
  try {
    const user = AuthMiddleware.authenticate(req);
    RateLimiter.check(req, user.id);

    return NextResponse.json(
      { user },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message },
      { status: 401 }
    );
  }
}
