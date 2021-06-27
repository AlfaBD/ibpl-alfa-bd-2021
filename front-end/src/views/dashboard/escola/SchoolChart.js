import React from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";
import moment from "moment";

const low = getStyle("low") || "#f86c6b";
const middle = getStyle("middle") || "#20a8d8";
const high = getStyle("high") || "#4dbd74";

const SchoolChart = (attributes) => {
  const { data } = attributes;
  const baixo = data.date ? data.date.baixo : [];
  const medio = data.date ? data.date.medio : [];
  const alto = data.date ? data.date.alto : [];
  const labels = data.date
    ? data.date.labels.map((data) => moment(data).format("DD/MM/yyyy"))
    : [];
  const defaultDatasets = (() => {
    return [
      {
        label: "Baixo",
        backgroundColor: "transparent",
        borderColor: low,
        pointHoverBackgroundColor: low,
        borderWidth: 2,
        data: baixo,
      },
      {
        label: "Médio",
        backgroundColor: "transparent",
        borderColor: middle,
        pointHoverBackgroundColor: middle,
        borderWidth: 2,
        data: medio,
      },
      {
        label: "Alto",
        backgroundColor: hexToRgba(high, 10),
        borderColor: high,
        pointHoverBackgroundColor: high,
        borderWidth: 2,
        data: alto,
      },
    ];
  })();

  const defaultOptions = (() => {
    return {
      width: "600",
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
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
      labels={labels}
    />
  );
};

export default SchoolChart;
