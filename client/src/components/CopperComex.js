import React from "react";
import ComexCu from "./Comex_Copper.png";
window.onbeforeunload = function () {
  window.scrollTo(0,0);
}
export default function Comex_Copper() {
  return (
    <div>
      <div>
        <td align="center">
        <h3>COMEX COPPER FUTURES - Daily Closing Prices</h3>
        </td>
      </div>
        <div> 
        <img width={960} height={600} alt="Comex_Copper" src={ComexCu} />
        <br />
      </div>
    </div>
  );
}
