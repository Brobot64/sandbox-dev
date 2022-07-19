import React from "react";
import ChartDem from "./components/Chart";

const App = () => {
  return (
    <>
      <ChartDem
        location="ikeja"
        chartTitle="myTitle"
        subTitle="subTitle"
        TitleH="horizontal"
        TitleV="vertical"
      />
    </>
  );
};
export default App;
