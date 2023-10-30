import React, { useState } from "react";
import "./App.css";
import Header from "./Compunent/Header";
import Data from "./FoodData";
import ItemBox from "./Compunent/ItemBox";

let list = [
  "All",
  ...new Set(
    Data.map((elem) => {
      return elem.type;
    })
  ),
];
console.log(list);
const App = () => {
  const [showData, setshowData] = useState(Data);
  const [navList, setnavList] = useState(list);
  function filterItem(cate) {
    if (cate === "All") {
      setshowData(Data);
    } else {
      let newData = Data.filter((elem) => {
        return elem.type === cate;
      });
      setshowData(newData);
    }
  }
  return (
    <>
      <Header filterItem={filterItem} navList={navList} />
      <div className="main_box">
        {showData.map((elem, index) => {
          return <ItemBox elem={elem} key={index} />;
        })}
      </div>
    </>
  );
};

export default App;
