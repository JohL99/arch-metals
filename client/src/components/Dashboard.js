import React, { PureComponent, Component } from "react";
window.onbeforeunload = function () {
  window.scrollTo(0,0);
}
class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message:"Any general notifications about website fixes and changes will be posted here. If you need to send a message concerning website issues, please use the Grey communication icon in the bottom right-hand corner of the webpage."
        }
        this.chat();
    }
    render() {
        return (
        <div> 
        <br/>
        <h3>Research Expectation</h3>
        <p className="text-justify">
        An underlying premise in the decision making process for mining organizations is an expectation about future metal prices levels, based on their perceptions of emerging market dynamics and their understanding of the influencing factors. If it were possible to ask other industry experts about their expectations of future metal prices, by sharing insights, it might lead to better-informed decisions for both parties. It is possible, and probable shared deliberations are likely to be more constructive if they are conducted in a manner that allows all parties to benefit from the interaction.
        </p>
        <p className="text-justify">
        To some extent, the sharing of information does occur; for example, using the same industry research sources, information disclosed in documents such as in mineral resource declarations and feasibility studies, and naturally, market prices are visible to everyone. 
        </p>
        <p className="text-justify">
        The Consensus Metals Forecasting Panel aims to assess if more reliable decision making is possible if industry participants share their insights about expected future metal prices equitably and transparently. Two elements are entrenched in the approach taken to achieve equity and transparency:</p>
        <p className="text-justify">&bull; Participation on the Consensus Metals Forecasting Panel is anonymous, creating the freedom to exchange views to the mutual benefit of all participants.</p>
        <p className="text-justify">&bull; All participants on the Consensus Metals Forecasting Panel have equal access to all information simultaneously.
        </p>
        <br/>
        <h3>General Information</h3>
        <p className="text-justify">
        The structure for inputting forecasts is standardized to ensure the comparability of the forecasts submitted in the reporting layouts. A crucial element of the Consensus Metals Forecasting Panel participation is encouraging a brief (Max. 300 characters) justification of the forecasts submitted. The aim is to promote an exchange of insights, which will hopefully lead to more reliable consensus forecasts, to the benefit of all participants. In the reporting layouts, the data is subdivided into two groups:</p>
        <p className="text-justify">&bull; <b>RecentData:</b> These are the latest forecasts submitted by each participant.</p>
        <p className="text-justify">&bull; <b>AllData:</b> These are all the forecasts submitted by all participants.
        </p>
        <br/>
        <p class="alert alert-info" role="alert">
            <h3>{this.state.message}</h3>
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