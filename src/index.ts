import "dotenv/config";
import express from "express";
import { makeConnection } from "./database";
import { routes } from "./mainRoutes";
import { deserializeUser } from "./middleware";
import cors from 'cors';

async function main() {
  const app = express();
  //middleware
  app.use(cors({
    origin: ['http://localhost:3000', 'https://83f4cb15.booklinev2-web.pages.dev'],
  }));
  app.use(express.json());
  app.use(deserializeUser);
  await makeConnection();

  app.listen(process.env.PORT || 1337, () => {
    console.log("Running!");
    routes(app);
  });
}

main().catch((err) => console.log("ERROR:", err));
