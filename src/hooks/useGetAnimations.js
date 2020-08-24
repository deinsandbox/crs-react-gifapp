import { useState, useEffect } from "react";

import { getAnimations } from "../helpers/animations";
import { wait } from "../helpers/wait";

const useGetAnimations = (category) => {
  const init = {
    data: [],
    isLoading: true,
  };
  const [state, setState] = useState(init);

  useEffect(() => {
    const response = getAnimations(category);
    response.then((images) => {
      const result = {
        data: images,
        isLoading: false,
      };

      wait(1, () => setState(result));
    });
  }, [category]);

  return state;
};

export default useGetAnimations;
