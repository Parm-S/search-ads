import { CompanyModel } from "../models/Company";

import { ICompany } from "../interfaces/services/company";

const createCompany = async (companyDetail: ICompany) => {
  try {
    const companyDoc = new CompanyModel(companyDetail);
    const result = await companyDoc.save();
    return result;
  } catch (error) {
    return Error("Company Detail is not saved");
  }
};

export { createCompany };
