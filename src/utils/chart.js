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

export const chartOptions = {
  title: {
    display: false,
  },
  legend: {
    display: true,
    position: 'right',
  },
};
