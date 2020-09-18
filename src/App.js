import React, { useState } from "react";
import "./App.css";
import "animate.css";

import { removeSpaces } from "./helpers/strings";

import AddCategory from "./components/AddCategory";
import Grid from "./components/Grid";

function App({ categories = [] }) {
  const [category, setCategory] = useState(categories);

  return (
    <>
      <h2>Gif Expert App</h2>

      <AddCategory setCategory={setCategory} />

      <hr />

      <ol>
        {category.map((item, index) => (
          <Grid key={`${removeSpaces(item)}`} category={item} />
        ))}
      </ol>
    </>
  );
}

export default App;
