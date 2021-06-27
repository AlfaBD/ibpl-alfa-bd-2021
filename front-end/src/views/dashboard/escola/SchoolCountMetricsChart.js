import React from "react";
import { CChartPie } from "@coreui/react-chartjs";
import { getStyle, hexToRgba } from "@coreui/utils";

const low = getStyle("low") || "#f86c6b";
const middle = getStyle("middle") || "#20a8d8";
const high = getStyle("high") || "#4dbd74";

const CountMetricsChart = (attributes) => {
  const { data } = attributes;
  const count = data.count ? data.count : [];
  const defaultDatasets = (() => {
    return [
      {
        backgroundColor: [
          hexToRgba(low, 50),
          hexToRgba(middle, 50),
          hexToRgba(high, 50),
        ],
        pointHoverBackgroundColor: high,
        borderWidth: 2,
        data: count,
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
    <CChartPie
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={["Baixo", "Médio", "Alto"]}
    />
  );
};

export default CountMetricsChart;
