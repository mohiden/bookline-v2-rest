import { BaseModel } from ".";

export interface IUser extends BaseModel {
  username: string;
  password: string;
  comparePassword: (logPassword: string) => Promise<boolean>;
}
