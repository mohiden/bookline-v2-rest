import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    username: string({
      required_error: "username must not be empty",
    })
      .min(5, "username too short!")
      .max(100, { message: "too large" }),
    password: string({
      required_error: "password must not be empty",
    }).min(5, "password too short!"),
    passwordConfirmation: string({
      required_error: "passwordConfirmation must not be empty",
    }),
  }).refine(
    (data) => {
      //   console.log(data);
      return data.password === data.passwordConfirmation;
    },
    {
      message: "Password doesn't match",
      path: ["password Confirmation"],
    }
  ),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

export const loginUserSchema = object({
  body: object({
    username: string({
      required_error: "username must not be empty",
    })
      .min(5, "username too short!")
      .max(100, { message: "too large" }),
    password: string({
      required_error: "password must not be empty",
    }).min(5, "password too short!"),
  }),
});

export type LoginUserInput = TypeOf<typeof loginUserSchema>;
