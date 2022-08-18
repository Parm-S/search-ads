import { IAds } from "../interfaces/services/ads";

import { AdsModel } from "../models/Ads";
import { CompanyModel } from "../models/Company";

const createAds = async (adsDetail: IAds) => {
  try {
    const adsDoc = new AdsModel(adsDetail);
    const result = await adsDoc.save();
    return result;
  } catch (error) {
    return Error("Ads Detail is not saved");
  }
};

const getSearchAds = async (searchText: string) => {
  try {
    const rgx = (pattern : string) => new RegExp(`.*${pattern}.*`);
    const searchRgx = rgx(searchText);
    const resultData = await AdsModel.find({
      $or: [
        { primaryText: { $regex: searchRgx, $options: "i" } },
        { headline: { $regex: searchRgx, $options: "i" } },
        { description: { $regex: searchRgx, $options: "i" } },    
      ],
    }).populate('companyId');
    return resultData;
  } catch (error) {
    return Error("No team Found");
  }
};

export { createAds, getSearchAds };
