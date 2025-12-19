import { prisma } from "../core/prisma";

export class AuthRepository {
  async createUser(data: any) {
    return prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
        verificationToken: data.verificationToken,
        emailVerified: false,
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findByVerificationToken(token: string) {
    return prisma.user.findFirst({
      where: {
        verificationToken: token,
      },
    });
  }

  async findById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  async markEmailAsVerified(id: string) {
    return prisma.user.update({
      where: { id },
      data: {
        emailVerified: true,
        verificationToken: null, // clear token
      },
    });
  }

  async updatePassword(id: string, passwordHash: string) {
    return prisma.user.update({
      where: { id },
      data: {
        password: passwordHash,
      },
    });
  }
}