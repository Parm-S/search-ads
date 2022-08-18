import express, { Express } from "express";

import { connection } from "./database/connection";

import { DB_URL } from "./configuration/config";

import { adsRoute, companyRoute, notFoundRoute } from "./routes";

const app: Express = express();

connection(DB_URL);

app.use(express.json());

//Routes
app.use("/company", companyRoute);
app.use("/ads", adsRoute);
app.use("*", notFoundRoute);

export { app };
