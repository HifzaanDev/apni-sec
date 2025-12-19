import { ApiError } from "../errors/ApiError";

export class AuthValidator {
    validateRegister(data : any){
        if(!data.email || !data.password){
            throw new ApiError("Invalid data: email and password are required",400);
        }
    }
}