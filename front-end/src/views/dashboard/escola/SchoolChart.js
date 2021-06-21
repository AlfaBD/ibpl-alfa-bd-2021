import React from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";

const brandAccuracy = getStyle("accuracy") || "#4dbd74";
const brandQuickness = getStyle("quickness") || "#20a8d8";
const brandProsody = getStyle("prosody") || "#f86c6b";

const SchoolChart = (attributes) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const defaultDatasets = (() => {
    let elements = 27;
    const data1 = [];
    const data2 = [];
    const data3 = [];
    for (let i = 0; i <= elements; i++) {
      data1.push(random(50, 200));
      data2.push(random(80, 100));
      data3.push(random(80, 100));
    }
    return [
      {
        label: "Precisão",
        backgroundColor: hexToRgba(brandAccuracy, 10),
        borderColor: brandAccuracy,
        pointHoverBackgroundColor: brandAccuracy,
        borderWidth: 2,
        data: data1,
      },
      {
        label: "Velocidade",
        backgroundColor: "transparent",
        borderColor: brandQuickness,
        pointHoverBackgroundColor: brandQuickness,
        borderWidth: 2,
        data: data2,
      },
      {
        label: "Prosodia",
        backgroundColor: "transparent",
        borderColor: brandProsody,
        pointHoverBackgroundColor: brandProsody,
        borderWidth: 2,
        data: data3,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250,
            },
            gridLines: {
              display: true,
            },
          },
        ],
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3,
        },
      },
    };
  })();

  // render
  return (
    <CChartLine
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={[
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
      ]}
    />
  );
};

export default SchoolChart;
