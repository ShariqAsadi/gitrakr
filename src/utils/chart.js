export const chartData = ({ labels, data, backgroundColor, borderColor }) => ({
  labels: labels,
  datasets: [
    {
      data: data,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 2,
    },
  ],
});

export const chartOptions = {
  title: {
    display: true,
    text: 'Most used languages',
  },
  legend: {
    display: true,
    position: 'right',
  },
};
