import { User } from "./user";

export type Car = {
  id: string,
  make: string,
  model: string,
  color: string,
  year: number,
  author: User,
  picture: ImageData
}
