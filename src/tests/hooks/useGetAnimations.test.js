import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import useGetAnimations from "../../hooks/useGetAnimations";

describe("Test GetAnimations hook", () => {
  const category = "One Punch";
  const GIPHY_IMAGES = +process.env.REACT_APP_GIPHY_IMAGES;

  test("should return init state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetAnimations(category)
    );
    const { data, isLoading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(isLoading).toBe(true);
  });

  test("should return an array with images and loading as false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetAnimations(category)
    );
    await waitForNextUpdate();

    const { data, isLoading } = result.current;

    expect(data.length).toBe(GIPHY_IMAGES);
    expect(isLoading).toBe(false);
  });
});
