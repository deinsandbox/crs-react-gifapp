import { useState, useEffect } from "react";

import { getAnimations } from "../helpers/animations";
import { wait } from "../helpers/wait";

const useFetchAnimations = (category) => {
  const init = {
    data: [],
    loading: true,
  };

  const [state, setState] = useState(init);

  useEffect(() => {
    getAnimations(category).then((data) => {
      function success() {
        setState({
          data,
          loading: false,
        });
      }

      wait(3, success);
    });
  }, [category]);

  return state;
};

export default useFetchAnimations;
