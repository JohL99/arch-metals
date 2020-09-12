import React, { PureComponent, Component } from "react";

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message:"Welcome to the dashboard"
        }
        this.chat();
    }
    render() {
        return <div class="alert alert-info" role="alert">
            <h1>{this.state.message}</h1>
      </div>
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