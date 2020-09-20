import React, { PureComponent, Component } from "react";
window.onbeforeunload = function () {
  window.scrollTo(0,0);
}
class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message:"Any general notifications about website fixes and changes will be posted here. If you need to send a message concerning website issues, please use the Grey communication icon in the bottom righthand corner of the webpage."
        }
        this.chat();
    }
    render() {
        return (
        <div> 
        <br/>
        <h3>Research Expectation</h3>
        <p className="text-justify">
        It is not possible to have perfect foresight into what future metal prices are going to be, but for mining organizations, they need to make commercial decision based on future expected metal prices prior to selling their production at the subsequent prevailing market prices. An underlying premise in the decision making process for mining organizations, is an expectation about future metal prices, based on their perceptions of emerging market dynamics. 
        </p>
        <p className="text-justify">
        Conceptually, if one could ask other industry experts their expectations about future metal prices, the shared insights might lead to better informed decisions for all parties. The motivation to participate in such deliberations are likely to be more constructive, if they are conducted in a transparent manner, allowing all parties to benefit equally from the interaction.
        </p>
        <p className="text-justify">
        The Consensus Metals Panel is aimed at trying to achieve the objective of better informed decision making, by allowing participants to share insights about expected metal prices. Two core considerations are entrenched in the consensus panle approach being taken:
        - No participant is to be compromised through participation through making all Consensus Metals panel  interactions anonymous.
        - All participants on the Consensus Metals panle, will have access to the all same information, at the same time as other participants.
        </p>
        <br/>
        <h3>General Information</h3>
        <p className="text-justify">
        The structure for inputting forecasts is aimed at making it as easy as possible to submit forecasts, and  ensuring comparability of the forecasts submitted in the reporting layouts. A crucial element of the Consensus Metals panel participation is not only to submit your forecast, but to briefly (Max. 300 characters) provide some justification for your view. Without an understanding of the basis for your  forecast, it limits the value of interacting, and the ability to evolve a more reliable consensus forecast. In the reporting layouts, the data is subdivided into two groups:
        - RecentData: These are the last forecasts submitted by each participant.
        - AllData: These are all the forecasts submitted by all participants for the respective months.
        </p>
        <br/>
        <p class="alert alert-info" role="alert">
            <h1>{this.state.message}</h1>
        </p>
        </div>
      );
    }
    chat(){
      (function(d,t) {
        var BASE_URL = "https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src= BASE_URL + "/packs/js/sdk.js";
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 's6p8vqywRP8ouGyMuSpBQdSC',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
    }
}
export default Dashboard