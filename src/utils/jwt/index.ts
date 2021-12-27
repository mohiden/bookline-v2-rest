import jwt from "jsonwebtoken";
import config from "config";

const token_secret = config.get<string>("token_secret");

export function signJwt(payload: Object, options?: jwt.SignOptions) {
  return jwt.sign(payload, token_secret, { ...(options && options) });
}

export function verifyJwt<T>(token: string): T | null {
  try {
    const decoded = jwt.verify(token, token_secret) as T;
    return decoded;
  } catch (e) {
    return null;
    console.log(e);
  }
}
