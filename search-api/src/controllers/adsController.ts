import { Request, Response } from "express";
import {
  RequestBody,
  RequestParams,
  RequestQuery,
  ResponseBody,
} from "../interfaces/services/ads";

import { createAds, getSearchAds } from "../services/adsService";

const addAds = async (request: Request, response: Response) => {
  try {
    const ads = request.body;
    const adsDetailAdded = await createAds(ads);
    response.status(201);
    response.send(adsDetailAdded);
  } catch (error) {
    response.status(404).send(error);
  }
};

const searchAds = async (
  request: Request<RequestParams, ResponseBody, RequestBody, RequestQuery>,
  response: Response
) => {
  try {
    const { searchText } = request.query;
    const searchAds = await getSearchAds(searchText);
    response.status(200);
    response.send(searchAds);
  } catch (error) {
    response.status(404).send(error);
  }
};

export { addAds, searchAds };
