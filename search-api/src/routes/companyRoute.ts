import { Router } from "express";

import { addCompany } from "../controllers/companyController";

const companyRoute = Router();

companyRoute.post("/",addCompany);

export { companyRoute };
