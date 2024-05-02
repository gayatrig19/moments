import { rest } from "msw";

const baseURL = "https://djangorest-api-project-d779bee7fbda.herokuapp.com/"

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "Addy",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image:
          "https://res.cloudinary.com/dpzitpjjc/image/upload/v1/media/images/profile_avatar_fl3r9m",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];