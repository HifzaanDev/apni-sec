import { NextRequest } from "next/server";

type RateLimitEntry = {
  count: number;
  resetTime: number;
};

export class RateLimiter {
  private static store = new Map<string, RateLimitEntry>();

  static LIMIT = 100;
  static WINDOW = 15 * 60 * 1000; // 15 minutes

  static check(req: NextRequest, key: string) {
    const now = Date.now();
    const entry = this.store.get(key);

    if (!entry || now > entry.resetTime) {
      this.store.set(key, {
        count: 1,
        resetTime: now + this.WINDOW,
      });
      return;
    }

    if (entry.count >= this.LIMIT) {
      throw new Error("Rate limit exceeded");
    }

    entry.count++;
  }
}
