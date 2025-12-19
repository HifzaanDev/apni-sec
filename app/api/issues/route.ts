import { NextRequest, NextResponse } from "next/server";
import { AuthMiddleware } from "@/app/lib/auth/AuthMiddleware";
import { RateLimiter } from "@/app/lib/core/RateLimiter";
import { IssueService } from "@/app/lib/issues/IssueService";
import { ApiError } from "@/app/lib/errors/ApiError";

// for all issues operations

const issueService = new IssueService();

export async function POST(req: NextRequest) {
  try {
    // JWT
    const user = AuthMiddleware.authenticate(req);

    // Rate limit by user
    RateLimiter.check(req, user.id);

    const body = await req.json();
    const issue = await issueService.createIssue(user.id, body);

    return NextResponse.json(issue, { status: 201 });
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

    if (err.message === "Invalid or expired token" || err.message === "Authorization header missing") {
      return NextResponse.json(
        { message: err.message },
        { status: 401 }
      );
    }

    console.error("Issues API Error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {

    const user = AuthMiddleware.authenticate(req);


    RateLimiter.check(req, user.id);

    const type = req.nextUrl.searchParams.get("type") || undefined;

    const issues = await issueService.getIssues(
      user.id,
      type as any
    );

    return NextResponse.json(issues, { status: 200 });
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

    if (err.message === "Invalid or expired token" || err.message === "Authorization header missing") {
      return NextResponse.json(
        { message: err.message },
        { status: 401 }
      );
    }

    console.error("Issues API Error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
