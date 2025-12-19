import { NextRequest } from "next/server";
import { JwtService } from "./JwtService";

export class AuthMiddleware {
  static authenticate(req: NextRequest) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      throw new Error("Authorization header missing");
    }

    const token = authHeader.replace("Bearer ", "");

    try {
      const payload = JwtService.verify(token);
      return payload; // { id, email, iat, exp }
    } catch {
      throw new Error("Invalid or expired token");
    }
  }
}
