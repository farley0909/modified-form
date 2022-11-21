import { responseModel } from "../responseModel";

export interface responseInterface{
    model:responseModel
    createAnswer():Promise<void>

}