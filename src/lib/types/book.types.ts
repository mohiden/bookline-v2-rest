import { BaseModel } from ".";

export interface IBook extends BaseModel {
  name: string;
  author?: string;
  language: string;
}
