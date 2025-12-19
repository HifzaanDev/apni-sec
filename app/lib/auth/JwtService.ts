import jwt from "jsonwebtoken";
import { JwtUserPayload } from "./types";

export class JwtService {
  private static SECRET = process.env.JWT_SECRET!;

  static sign(payload: JwtUserPayload): string {
    return jwt.sign(payload, this.SECRET, {
      expiresIn: "1h",
    });
  }

  static verify(token: string): JwtUserPayload {
    return jwt.verify(token, this.SECRET) as JwtUserPayload;
  }
}
