import { Request, Response } from "express";

const addCompany = async (request: Request, response: Response) => {
  try {
    const company = request.body;
    const createCompany = await createCompany(company);
    response.status(201);
    response.send(createCompany);
  } catch (error) {
    response.status(404).send(error);
  }
};

export { addCompany };
