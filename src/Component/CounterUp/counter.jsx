import React from "react";

/*import counterUp from "./counterUp";*/

import CounterUp from "react-countup";

function Counter() {
  return (
    <section id="counter">
      <div className="box-1">
        <p className="fa fa-users"></p>
        <div className="counter" data-count="110">
          <CounterUp end={110} duration={5} />
        </div>
        <p>Volunteers</p>
      </div>
      <div className="box-2">
        <p className="fa fa-pagelines"></p>
        <div className="counter" data-count="41">
          <CounterUp end={41} duration={5} />
        </div>
        <p>Tree Planted</p>
      </div>
      <div className="box-3">
        <p className="fa fa-cutlery"></p>
        <div className="counter" data-count="174">
          <CounterUp end={174} duration={5} />
        </div>
        <p>Food Kits</p>
      </div>
    </section>
  );
}

export default Counter;
