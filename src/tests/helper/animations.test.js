const { getAnimations } = require("../../helpers/animations");

describe('Test on "animation" helper when category exists', () => {
  test("should return 10 element", async () => {
    const GIPHY_IMAGES = +process.env.REACT_APP_GIPHY_IMAGES;
    const elements = await getAnimations("One Punch Man");
    expect(elements.length).toBe(GIPHY_IMAGES);
  });

  test("should return 0 element when category not found result", async () => {
    const elements = await getAnimations("dfdfdfdf");
    expect(elements.length).toBe(0);
  });

  test("should return an empty array when category is empty", async () => {
    const elements = await getAnimations("");
    expect(elements.length).toBe(0);
  });
});
