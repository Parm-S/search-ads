import express, { Express } from "express";

import { connection } from "./database/connection";

import { DB_URL } from "./configuration/config";

const app: Express = express();

connection(DB_URL);

app.use(express.json());

export { app };
