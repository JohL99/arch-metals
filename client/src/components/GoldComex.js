import React from "react";
import ComexAu from "./Comex_Gold.png";
export default function Comex_Gold() {
  return (
    <div>
      <div>
        <td align="center">
        <h3>COMEX GOLD FUTURES - Daily Closing Prices</h3>
        </td>
      </div>
        <div> 
        <img width={960} height={400} alt="Comex_Gold" src={ComexAu} />
        <br />
      </div>
    </div>
  );
}
