import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxDataPointValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={maxDataPointValue}
          label={dataPoint.lable}
        />
      ))}
    </div>
  );
}
export default Chart;
