import "dotenv/config";
import express from "express";
import config from "config";
import { makeConnection } from "./database";
import { routes } from "./mainRoutes";
import { deserializeUser } from "./middleware";

async function main() {
  const app = express();
  //middleware
  app.use(express.json());
  app.use(deserializeUser);
  await makeConnection();

  app.listen(config.get<string>("port"), () => {
    console.log("Running!");
    routes(app);
  });
}

main().catch((err) => console.log("ERROR:", err));
