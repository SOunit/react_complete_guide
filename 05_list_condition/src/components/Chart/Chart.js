import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // max expect numbers like 1, 2, 3, 4
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
