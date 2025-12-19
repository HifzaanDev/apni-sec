import { prisma } from "@/app/lib/core/prisma";

export class UserRepository {
  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async updateUser(
    id: string,
    data: { email?: string }
  ) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }
}
