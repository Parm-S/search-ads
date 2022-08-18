interface IAds {
  companyId: number;
  primaryText?: string;
  headline?: string;
  description?: string;
  cta: string;
  imageUrl: string;
}

interface RequestParams {}

interface ResponseBody {}

interface RequestBody {}

interface RequestQuery {
  searchText: string;
}

export { IAds, RequestParams, ResponseBody, RequestBody, RequestQuery };
