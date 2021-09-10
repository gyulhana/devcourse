const API_URL = "https://free-quotes-api.herokuapp.com";

export const request = async () => {
  try {
    const res = await fetch(API_URL);
    const result = await res.json();

    if (!res.ok) {
      throw new Error("api error!");
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
