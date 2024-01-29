import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function BarChart({ dataset, dimension }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    const option = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: dimension,
        source: dataset
      },
      xAxis: { type: 'category' },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '547px', height: '279px' }}></div>;
};

export default BarChart;
