import React from "react";

import Rank from "./RankingCalculation.png";

export default function RMethod() {
  return (
    <div>
      <div>
        <h3>Ranking Methodology</h3>

        <p class="text-justify">
          Scoring percentage accuracy is based on the average of all forecasts
          submitted compared to the comparable LME monthly average reported
          price for the relevant month. The differences between the forecasts
          and the actual average monthly market price are ranked, and the
          percentile rank distribution calculated. The percentile rank
          distribution calculated is subtracted from 100% to yield a percentage
          rank accuracy grade. To take into consideration the timing of
          forecasts and to make the grading fairer, the calculated grades are
          moderated by the time difference between the day of the forecast and
          the LME reported average date. In effect, each forecast is multiplied
          by the ratio of days since the forecast divided by the number of days
          since the first forecast for the relevant month was made.
        </p>

        <p class="text-justify">
          The purpose of the research project is twofold: &bull; Encouraging
          participants to participate in establishing a shared consensus
          forecast. &bull; Encouraging participants to deliberate and make
          revised forecasts because of the insights gained from other
          participants' forecasts.
        </p>

        <p class="text-justify">
          By grading the forecasts, it is hoped participants will be motivated
          to deliberate the estimates of other participants and revise their
          previous forecasts accordingly. Ideally, participation will occur
          throughout the duration of each month. So, to avoid having some
          participants "gaming" the process by only submitting forecasts right
          at the end of the month when the outcome is more discernible, the
          timing moderation is utilized to balance the playing field. The
          following is an indicative example of the ranking.
        </p>
      </div>
      <div>
        Example calculation
        <br />
        <img width={600} height={1379} alt="Ranking Calculation" src={Rank} />
        <br />
      </div>
    </div>
  );
}
