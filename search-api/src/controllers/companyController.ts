import { Request, Response } from "express";

import { createCompany } from "../services/companyServices";

const addCompany = async (request: Request, response: Response) => {
  try {
    const company = request.body;
    const companyDetailAdded = await createCompany(company);
    response.status(201);
    response.send(companyDetailAdded);
  } catch (error) {
    response.status(404).send(error);
  }
};

export { addCompany };
