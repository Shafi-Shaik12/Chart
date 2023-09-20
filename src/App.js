import './App.css';
import Spineline from './containers/Spineline';
import BarChart from './containers/BarChart';
import { useState } from 'react';
import Speedometer from './containers/Speedometer';
import CardBody from './containers/CardBody';
import Columnbar from './containers/Columnbar';

let incoming = {
  data: {
    agx: "-12.00",
    agy: "-8.00",
    agz: "-980.00",
  },

  type: "toy",
  drone_id: "drone1",
};

function App() {
  const [data, setData] = useState({
    agx: incoming.data.vgx,
    agy: incoming.data.vgy,
    agz: incoming.data.vgz,
  });
  const [title, setTitle] = useState([
    { money: "$6621280", payee: "Total Account Receivable" },
    { money: "$16330270", payee: "Total Account Payable" },
    { money: "75.38%", payee: "Equity Ratio" },
    { money: "1.10", payee: "Debt Equity" },
  ]);

  return (
    <div className="container">
      <div className="row">
        {title.map((item, index) => (
          <div key={index} className="col-md-3 mb-3">
            <CardBody title={item.money} subtitle={item.payee} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <Spineline />
        </div>
        <div className="col-md-4 mb-3">
          <BarChart />
        </div>
        <div className="col-md-4 mb-3">
        <Columnbar />
        </div>
      </div>
      <div className="row">
  <div className="col-md-3 mb-3">
    <Speedometer id="dial5" value={"1.86"} title="Current Ratio" />
  </div>
  <div className="col-md-3 mb-3">
    <Speedometer id="dial6" value={"10.00"} title="Days Sales Inventory" />
  </div>
  <div className="col-md-3 mb-3">
    <Speedometer id="dial6" value={"7.00"} title="Days Sales Outstanding" />
  </div>
  <div className="col-md-3 mb-3">
    <Speedometer id="dial6" value={"28.00"} title="Days Payable Outstanding" />
  </div>
</div>

    </div>
  );
}

export default App;
