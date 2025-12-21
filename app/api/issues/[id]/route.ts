import { NextRequest, NextResponse } from "next/server";
import { AuthMiddleware } from "@/app/lib/auth/AuthMiddleware";
import { RateLimiter } from "@/app/lib/core/RateLimiter";
import { IssueService } from "@/app/lib/issues/IssueService";
import { ApiError } from "@/app/lib/errors/ApiError";

const issueService = new IssueService();

type Params = {
  params: Promise<{
    id: string;
  }>;
};

// GET /api/issues/[id]
export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const user = AuthMiddleware.authenticate(req);
    RateLimiter.check(req, user.id);

    const issue = await issueService.getIssueById(user.id, id);

    return NextResponse.json(issue, { status: 200 });
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

// PUT /api/issues/[id]
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const user = AuthMiddleware.authenticate(req);
    RateLimiter.check(req, user.id);

    const body = await req.json();

    const updated = await issueService.updateIssue(
      user.id,
      id,
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

// DELETE /api/issues/[id]
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    const user = AuthMiddleware.authenticate(req);
    RateLimiter.check(req, user.id);

    await issueService.deleteIssue(user.id, id);

    return NextResponse.json(
      { message: "Issue deleted successfully" },
      { status: 200 }
    );
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
