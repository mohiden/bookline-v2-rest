import "dotenv/config";
import express from "express";
import { makeConnection } from "./database";
import { routes } from "./mainRoutes";
import { deserializeUser } from "./middleware";

async function main() {
  const app = express();
  //middleware
  app.use(express.json());
  app.use(deserializeUser);
  await makeConnection();

  app.listen(process.env.PORT || 1337, () => {
    console.log("Running!");
    routes(app);
  });
}

main().catch((err) => console.log("ERROR:", err));
