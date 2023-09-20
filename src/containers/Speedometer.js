import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = ({ id, value, title }) => {
  return (
    <div>
         <div className="card" style={{ width: "100%" }}>
  <div className="card-body">
  <ReactSpeedometer
        maxValue={120}
        minValue={-100}
        height={190}
        width={290}
        value={value}
        needleTransition="easeQuadIn"
        needleTransitionDuration={1000}
        needleColor="red"
        startColor="green"
        segments={10}
        endColor="blue"
      />
      <h5>{title}</h5>
  </div>
</div>
    </div>
  );
};

export default Speedometer;