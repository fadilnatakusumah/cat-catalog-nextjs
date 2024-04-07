export const BASE_URL = "https://cataas.com";
const BASE_API = `${BASE_URL}/api`;

export const ApiRequest = {
  async getCats(params: any = undefined) {
    const addedParams = params
      ? `?${new URLSearchParams(params).toString()}`
      : "";
    try {
      const response = await fetch(`${BASE_API}/cats${addedParams}`);
      return response.json();
    } catch (error) {
      throw Error("error while getting the cats");
    }
  },
};
