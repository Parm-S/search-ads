import { Router } from "express";

import { addAds, searchAds } from "../controllers/adsController";

const adsRoute = Router();

adsRoute.post("/", addAds);

adsRoute.get("/search", searchAds);

export { adsRoute };
