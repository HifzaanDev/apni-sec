import { prisma } from "../core/prisma";
import { IssueType } from "@prisma/client";
export class IssueRepository {
  async createIssue(data: {
    title: string;
    description: string;
    type: IssueType;
    priority?: string;
    status?: string;
    userId: string;
  }) {
    return prisma.issue.create({
      data,
    });
  }

  async getIssuesByUser(userId: string, type?: IssueType) {
    return prisma.issue.findMany({
      where: {
        userId,
        ...(type ? { type } : {}),
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getIssueById(id: string) {
    return prisma.issue.findUnique({
      where: { id },
    });
  }

  async updateIssue(
    id: string,
    data: {
      title?: string;
      description?: string;
      priority?: string;
      status?: string;
    }
  ) {
    return prisma.issue.update({
      where: { id },
      data,
    });
  }

  async deleteIssue(id: string) {
    return prisma.issue.delete({
      where: { id },
    });
  }
}
