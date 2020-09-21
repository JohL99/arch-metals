//test
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Consent from "./components/auth/Consent";
import CopperInput from "./components/CopperInput";
import { MonthPrices } from "./components/MonthPrices";
import GoldInput from "./components/GoldInput";
import About from "./components/About";
import TetCs from "./components/TetCs";
import Contacts from "./components/Contacts";
import PConsent from "./components/PConsent";
import RMethod from "./components/RMethod";
import CopperComex from "./components/CopperComex";
import GoldComex from "./components/GoldComex";
import CForecast from "./components/CForecast";
import CSummary from "./components/CSummary";
import CSumFcast from "./components/CSumFcast";
import CPartFcast from "./components/CPartFcast";
import GForecast from "./components/GForecast";
import GSummary from "./components/GSummary";
import GSumFcast from "./components/GSumFcast";
import GPartFcast from "./components/GPartFcast";
import GraphPartCopper from "./components/GraphPartCopper";
import GraphPartCopper21 from "./components/GraphPartCopper21";
import GraphPartGold from "./components/GraphPartGold";
import GraphPartGold21 from "./components/GraphPartGold21";
import Dashboard from "./components/Dashboard";
//import Graph1 from "./components/Graph1";
// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
 // if (decoded.exp < currentTime) {
    // Logout user
  //  store.dispatch(logoutUser());
      
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    
 // }
}
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/About" component={About} />
            <Route exact path="/TetCs" component={TetCs} />
            <Route exact path="/Contacts" component={Contacts} />
            <Route exact path="/PConsent" component={PConsent} />
            <Route exact path="/RMethod" component={RMethod} />
            <Route exact path="/CopperComex" component={CopperComex} />
            <Route exact path="/GoldComex" component={GoldComex} />
            <Route exact path="/CForecast" component={CForecast} />
            <Route exact path="/CSummary" component={CSummary} />
            <Route exact path="/CSumFcast" component={CSumFcast} />
            <Route exact path="/CPartFcast" component={CPartFcast} />
            <Route exact path="/GForecast" component={GForecast} />
            <Route exact path="/GSummary" component={GSummary} />
            <Route exact path="/GSumFcast" component={GSumFcast} />
            <Route exact path="/GPartFcast" component={GPartFcast} />
            <Route exact path="/GraphPartCopper" component={GraphPartCopper} />
            <Route exact path="/GraphPartCopper21" component={GraphPartCopper21} />
            <Route exact path="/GraphPartGold" component={GraphPartGold} />
            <Route exact path="/GraphPartGold21" component={GraphPartGold21} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Logout" component={Landing} />
            <Route exact path="/consent" component={Consent} />
            <Route exact path="/CopperInput" component={CopperInput} />
            <Route exact path="/GoldInput" component={GoldInput} />
            <Route exact path="/MonthPrices" component={MonthPrices} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
export default App;
