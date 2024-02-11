import "../scss/App.scss";
import DataFlowers from "../data/flowers.json";
import { useState } from "react";

import Filter from "./Filter";
import Gallery from "./Gallery";
import Header from "./Header";

function App() {
  const [flowers] = useState(DataFlowers);

  const [filterTitle, setFilterTitle] = useState("");

  const handleFilterTitle = (filterValue) => {
    setFilterTitle(filterValue);
  };

  const filteredFlowers = flowers.filter((flower) =>
    flower.name.toLowerCase().includes(filterTitle.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main>
        <Filter handleFilterTitle={handleFilterTitle} />
        <Gallery flowers={filteredFlowers} />
      </main>
    </div>
  );
}

export default App;
