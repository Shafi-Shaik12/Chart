import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Columnbar = () => {
  // Sample data with positive and negative values
  const data = [
    { name: 'Jan', value: 5 },
    { name: 'Jan', value: -3 },
    { name: 'Feb', value: 8 },
    { name: 'Feb', value: -2 },
    { name: 'March', value: 4 },
    { name: 'March', value: -1 },
    { name: 'April', value: 7 },
    { name: 'April', value: -4 },
    { name: 'May', value: 14 },
    { name: 'May', value: -6 },
    { name: 'June', value: 15 }
  ];

  // Transform data into a format suitable for Highcharts
  const chartData = data.map(item => ({
    name: item.name,
    y: item.value,
  }));

  // Configure the chart options
  const options = {
    chart: {
      type: 'column', // You can use 'bar' for a bar chart
    },
    title: {
      text: 'Profit and Loss summary',
    },
    xAxis: {
      categories: data.map(item => item.name),
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Data',
        data: chartData,
      },
    ],
  };

  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Columnbar;
