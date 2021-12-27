import { DocumentDefinition } from "mongoose";
import { IUser } from "../../lib";
import { signJwt } from "../../utils";
import { UserModel } from ".";
import { omit } from "lodash";

export const createUser = (
  input: DocumentDefinition<
    Omit<IUser, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  return UserModel.create(input);
};

export const loginUser = async (
  input: DocumentDefinition<
    Omit<IUser, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  const e = "Invalid username/password";
  //validate if user exists
  const user = await UserModel.findOne({ username: input.username });
  if (!user) throw new Error(e);
  //compare password
  const isMatch = await user.comparePassword(input.password);
  if (!isMatch) throw new Error(e);
  //sign jwt
  const token = signJwt(omit(user.toJSON(), "password"), {
    expiresIn: "365d",
  });
  //   console.log("TOKEN:", token);
  //send back the token
  return token;
};
