import axios from "axios";

export const getAnimations = async (value) => {
  try {
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
    const GIPHY_API = process.env.REACT_APP_GIPHY_API;

    const options = {
      method: "get",
      url: `${GIPHY_API}/search`,
      params: {
        q: value,
        rating: "g",
        limit: 10,
        api_key: GIPHY_KEY,
      },
    };
    const result = await axios.request(options);
    const {
      data: { data },
      status,
      statusText,
    } = result;
    if (status === 200) {
      const images = data.map(({ id, title, images }) => ({
        id,
        title,
        url: images?.downsized_medium.url,
      }));
      return images;
    } else {
      throw new Error(`${status} - ${statusText}`);
    }
  } catch (error) {
    console.log(error);
  }
};
