import ParticularAd from "./ParticularAd";

interface ICompany {
  _id: number;
  name: string;
  url: string;
}

interface ISearchAds {
  _id: number;
  companyId: number;
  primaryText?: string;
  description?: string;
  cta: string;
  imageUrl: string;
  companyData : ICompany
}

export type { ICompany, ISearchAds };

export default ParticularAd;
