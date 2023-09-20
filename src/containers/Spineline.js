import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Splineline = () => {
  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Network capital vs gross working capital',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Network capital',
        data: [13, 16, 12, 18, 15],

      },
      {
        name: 'Grosswork capital',
        data: [13, 13, 11, 16, 15],
        
      },
    ],
  };

  return (
         <div className="card" style={{ width: "100%" }}>
  <div className="card-body">
      <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
</div>
  );
};

export default Splineline;
