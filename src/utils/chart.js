export const chartData = ({ labels, data, backgroundColor, borderColor }) => ({
  labels: labels,
  datasets: [
    {
      data: data,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
    },
  ],
});

export const chartOptions = ({ showLegend }) => ({
  title: {
    display: false,
  },
  legend: {
    display: showLegend ? true : false,
    position: 'bottom',
  },
});
