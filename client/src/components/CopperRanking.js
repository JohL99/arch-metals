import React, { PureComponent, Component } from "react";
window.onbeforeunload = function () {
  window.scrollTo(0,0);
}
class CopperRanking extends PureComponent {
    constructor(props) 
    {
        super(props);
        this.state = {
            message:"Following the launch of the Consensus Metals Forecasting Panel and the submission of forecasts by participants, a monthly ranking will be calculated and posted on this webpage."
    }
}
render() {
    return (
      <div> 
        <br/>
        <p class="alert alert-info" role="alert">
          <h3>{this.state.message}</h3>
        </p>
       </div>
    );
}
}
export default CopperRanking