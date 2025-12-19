import { IssueRepository } from "./IssueRepository";
import { IssueType } from "@prisma/client";
import { ApiError } from "../errors/ApiError";
import { EmailService } from "../email/EmailService";
import { UserRepository } from "../users/UserRepository";

export class IssueService {
  private repo = new IssueRepository();

async createIssue(
  userId: string,
  data: {
    title: string;
    description: string;
    type: IssueType;
    priority?: string;
    status?: string;
  }
) {
  if (!data.title || !data.description || !data.type) {
    throw new ApiError("Invalid issue data", 400);
  }

  // create issue
  const issue = await this.repo.createIssue({
    ...data,
    userId,
  });

  // user email
  const userRepo = new UserRepository();
  const user = await userRepo.findById(userId);
  console.log("ISSUE EMAIL USER:", user);

  // send email 
  if (user) {
    await EmailService.sendIssueCreatedEmail(user.email, {
      title: issue.title,
      description: issue.description,
      type: issue.type,
    });
  }

  return issue;
}




  async getIssues(userId: string, type?: IssueType) {
    return this.repo.getIssuesByUser(userId, type);
  }

  async getIssueById(userId: string, issueId: string) {
    const issue = await this.repo.getIssueById(issueId);

    if (!issue) {
      throw new ApiError("Issue not found", 404);
    }

    if (issue.userId !== userId) {
      throw new ApiError("Forbidden", 403);
    }

    return issue;
  }

  async updateIssue(userId: string, issueId: string, data: {
    title?: string;
    description?: string;
    priority?: string;
    status?: string;
  }) {
    const issue = await this.repo.getIssueById(issueId);

    if (!issue) {
      throw new ApiError("Issue not found", 404);
    }

    if (issue.userId !== userId) {
      throw new ApiError("Forbidden", 403);
    }

    return this.repo.updateIssue(issueId, data);
  }

  async deleteIssue(userId: string, issueId: string) {
    const issue = await this.repo.getIssueById(issueId);

    if (!issue) {
      throw new ApiError("Issue not found", 404);
    }

    if (issue.userId !== userId) {
      throw new ApiError("Forbidden", 403);
    }

    return this.repo.deleteIssue(issueId);
  }
}
