import React from "react";
import ComexCu from "./Comex_Copper.png";
export default function Comex_Copper() {
  return (
    <div>
      <div>
        <td align="center">
        <h3>COMEX COPPER FUTURES PRICES</h3>
        <h4>Closing Daily Prices</h4>
        </td>
      </div>
        <br />
       <div> 
        <img width={960} height={400} alt="Comex_Copper" src={ComexCu} />
        <br />
      </div>
    </div>
  );
}
