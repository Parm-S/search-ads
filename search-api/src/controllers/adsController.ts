import { Request, Response } from "express";

const addAds = async (request: Request, response: Response) => {
  try {
    const ads = request.body;
    const createAds = await createAds(ads);
    response.status(201);
    response.send(createAds);
  } catch (error) {
    response.status(404).send(error);
  }
};

const searchAds = async (request: Request, response) => {
  try {
    const searchParm = request.params;
    const getSearchAds = await getSearchAds(searchParm);
    response.status(200);
    response.send(getSearchAds);
  } catch (error) {
    response.status(404).send(error);
  }
};

export { addAds, searchAds };
