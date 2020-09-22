import React from "react";
import ComexAu from "./Comex_Gold.png";
window.onbeforeunload = function () {
  window.scrollTo(0,0);
}
export default function Comex_Gold() {
  return (
    <div>
      <div>
        <td align="center">
        <h3>COMEX GOLD FUTURES - Daily Closing Prices</h3>
        </td>
      </div>
        <div> 
        <img width={960} height={600} alt="Comex_Gold" src={ComexAu} />
        <br />
      </div>
    </div>
  );
}
