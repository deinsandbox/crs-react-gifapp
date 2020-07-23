import React, { useState } from "react";
import Category from "./components/Category";
import Grid from "./components/Grid";

import { removeSpaces } from "./helpers/strings";

const GifExpertApp = () => {
  const init = ["Samuray X"];
  const [categories, setCategories] = useState(init);

  const handleAdd = (value) => {
    const categoryExists = categories.includes((item) => item === value);
    !categoryExists && setCategories([value, ...categories]);
  };

  return (
    <div>
      <h2>Gif Expert App</h2>

      <Category handleAdd={handleAdd} />
      <hr />

      <ol>
        {!!categories.length &&
          categories.map((category, index) => {
            return (
              <Grid
                key={`${removeSpaces(category)}-${index}`}
                category={category}
              />
            );
          })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
