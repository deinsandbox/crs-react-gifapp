import axios from "axios";

export const getAnimations = async (value) => {
  try {
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;
    const GIPHY_API = process.env.REACT_APP_GIPHY_API;
    const GIPHY_IMAGES = +process.env.REACT_APP_GIPHY_IMAGES;

    const options = {
      method: "get",
      url: `${GIPHY_API}/search`,
      params: {
        q: value,
        rating: "g",
        limit: GIPHY_IMAGES,
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
