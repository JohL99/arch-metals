import React from "react";
import ComexCu from "./Comex_Copper.png";
export default function Comex_Copper() {
  return (
    <div>
      <div>
        <td align="center">
        <h3>COMEX COPPER FUTURES - Daily Closing Prices</h3>
        </td>
      </div>
        <div> 
        <img width={960} height={400} alt="Comex_Copper" src={ComexCu} />
        <br />
      </div>
    </div>
  );
}
