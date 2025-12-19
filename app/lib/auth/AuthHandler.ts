import { AuthService } from "./AuthService";
import { AuthValidator } from "../validators/AuthValidator";
import { ApiError } from "../errors/ApiError";      


export class AuthHandler {
    private authService = new AuthService();
    private validator = new AuthValidator();

  async register(req: Request) {
    try {
      const body = await req.json();
      this.validator.validateRegister(body);
      const result = await this.authService.register(body);
      return Response.json(result);
    } catch (err: any) {
      if (err instanceof ApiError) {
        return Response.json({ message: err.message }, { status: err.statusCode });
      }
      
      if (err.message === "Email already exists") {
        return Response.json({ message: err.message }, { status: 409 });
      }

      console.error("AuthHandler Register Error:", err);
      return Response.json({ message: err.message || "Internal Server Error" }, { status: 500 });
    }
  }
}
