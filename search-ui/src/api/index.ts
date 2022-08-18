import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL_ADS_SEARCH as string;

const searchAdBaseUrl = `${baseUrl}/ads`;

const getSearchAds = async (search: string) => {
  const params = { searchText: search };

  const URL = `${searchAdBaseUrl}/search`;

  try {
    const response = await axios.get(URL, { params });
    return response;
  } catch (error) {
    return error;
  }
};

export { getSearchAds };
