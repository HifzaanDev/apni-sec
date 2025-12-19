import { ApiError } from "@/app/lib/errors/ApiError";
import { UserRepository } from "@/app/lib/users/UserRepository";

export class ProfileService {
  private repo = new UserRepository();

  async getProfile(userId: string) {
    const user = await this.repo.findById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }

    return {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    };
  }

  async updateProfile(
    userId: string,
    data: { email?: string }
  ) {
    if (!data.email) {
      throw new ApiError("Nothing to update", 400);
    }

    return this.repo.updateUser(userId, data);
  }
}
