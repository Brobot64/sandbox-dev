import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const genData = {
  ikorodu: [
    {
      id: 1,
      name: "Monday",
      amount: 5
    },
    {
      id: 2,
      name: "Tuesday",
      amount: 1
    },
    {
      id: 3,
      name: "Wednesday",
      amount: 20
    },
    {
      id: 4,
      name: "Thursday",
      amount: 50
    },
    {
      id: 5,
      name: "Friday",
      amount: 3
    },
    {
      id: 5,
      name: "Saturday",
      amount: 8
    },
    {
      id: 5,
      name: "Sunday",
      amount: 6
    }
  ],
  ikeja: [
    {
      id: 1,
      name: "Monday",
      amount: 20
    },
    {
      id: 2,
      name: "Tuesday",
      amount: 21
    },
    {
      id: 3,
      name: "Wednesday",
      amount: 10
    },
    {
      id: 4,
      name: "Thursday",
      amount: 7
    },
    {
      id: 5,
      name: "Friday",
      amount: 6
    }
  ],
  mokola: [
    {
      id: 1,
      name: "Monday",
      amount: 7
    },
    {
      id: 2,
      name: "Tuesday",
      amount: 2
    },
    {
      id: 3,
      name: "Wednesday",
      amount: 31
    },
    {
      id: 4,
      name: "Thursday",
      amount: 40
    },
    {
      id: 5,
      name: "Friday",
      amount: 3
    }
  ]
};

const ChartDem = ({ location, chartTitle, subTitle, TitleH, TitleV }) => {
  const optionData = (chartTitle, subTitle, TitleH, TitleV) => {
    // const options = {
    //   chart: {
    //     title: { chartTitle } || "Population of Largest U.S. Cities",
    //     subtitle:
    //       { subTitle } || "Based on most recent and previous census data"
    //   },
    //   chartArea: { width: "50%", height: "100%" },
    //   hAxis: {
    //     title: { TitleH } || "Total Population",
    //     minValue: 0
    //   },
    //   vAxis: {
    //     title: { TitleV } || "City"
    //   },
    //   bars: "horizontal",
    //   axes: {
    //     y: {
    //       0: { side: "right" }
    //     }
    //   }
    // };
    const options = {
      chart: {
        title: { chartTitle } || "Population of Largest U.S. Cities",
        subtitle:
          { subTitle } || "Based on most recent and previous census data"
      },
      chartArea: {
        width: "50%",
        height: "50%"
      },
      hAxis: {
        title: { TitleH } || "Total Population",
        minValue: 0
      },
      vAxis: {
        title: { TitleV } || "City"
      },
      bars: "horizontal",
      axes: {
        y: {
          0: { side: "left" }
        }
      }
    };
    return options;
  };
  const [checkBar, setBar] = useState([]);
  const testStuff = (checkBar) => {
    const datas = [["Weekly", "Amount"]];
    for (let i = 0; i < checkBar.length; i++) {
      const id = i;
      console.log(id);
      const changeData = [checkBar[id].name, checkBar[id].amount];
      datas.push(changeData);
    }
    console.log(datas);
    return datas;
  };
  useEffect(() => {
    setBar(genData[location]);
  }, [location, chartTitle, subTitle, TitleH, TitleV]);
  const getDate = testStuff(checkBar);
  const data1 = getDate;

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data1}
      options={optionData(chartTitle, subTitle, TitleH, TitleV)}
    />
  );
};

export default ChartDem;
