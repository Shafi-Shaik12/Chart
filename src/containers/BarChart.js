import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Total accounts and recivable and payable aging',
    },
    xAxis: {
      categories: ['Current', '1-30', '30-60', '60-90', '90-120'],
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Account Recivable',
        data: [5, 10, 15, 20, 25],
      },
      {
        name: 'Account Payable',
        data: [1, 3, 5, 10, 15],
      }
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

export default BarChart;
