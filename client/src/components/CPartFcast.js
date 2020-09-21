import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GraphPartCopper from "./GraphPartCopper";
class CPartFcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: [],
      sep20s: [],
      oct20s: [],
      nov20s: [],
      dec20s: [],
      mar21s: [],
      jun21s: [],
      sep21s: [],
      dec21s: [],
      recents: [],
      prixsep20: [],
      prixoct20: [],
      prixnov20: [],
      prixdec20: [],
      prixmar21: [],
      prixjun21: [],
      prixsep21: [],
      prixdec21: [],
      donnees1: [],
      evsep20: "",
      evoct20: "",
      evnov20: "",
      evdec20: "",
      evmar21: "",
      evjun21: "",
      evsep21: "",
      evdec21: "",
      comsep20: "",
      comoct20: "",
      comnov20: "",
      comdec20: "",
      commar21: "",
      comjun21: "",
      comsep21: "",
      comdec21: "",
    };
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
    };
    this.onChange = this.onChange.bind(this);
    this.fillprices = this.fillprices.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  convert_to_utc = (dateStr) => {
    //check whether time is in PM or AM
    var hours = dateStr.getHours();
    var hours = (hours + 24 - 2) % 24;
    var mid = "am";
    if (hours == 0) {
      //At 00 hours we need to show 12 am
      hours = 12;
    } else if (hours > 12) {
      hours = hours % 12;
      mid = "pm";
    }
    var newdate =
      dateStr.toUTCString().split(" ")[0] +
      dateStr.toUTCString().split(" ")[1] +
      " " +
      dateStr.toUTCString().split(" ")[2] +
      " " +
      dateStr.toUTCString().split(" ")[3] +
      " " +
      dateStr.toUTCString().split(" ")[4].split(":")[0] +
      ":" +
      dateStr.toUTCString().split(" ")[4].split(":")[1];

    return newdate + " " + mid;
  };
  componentDidMount() {
    fetch("/api/users/tous/" + "Copper" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let utilisateurFromApi = data.map((utilisateur) => {
          return { value: utilisateur.name, display: utilisateur.name };
        });
        this.setState({
          users: [{ value: "", display: "(Choose Participant)" }].concat(
            utilisateurFromApi
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
      window.scrollTo(0,0);
  }
  fillprices(utilisateur, produit) {
    let psep20FromApi = {};
    let poct20FromApi = {};
    let pnov20FromApi = {};
    let pdec20FromApi = {};
    let pmar21FromApi = {};
    let pjun21FromApi = {};
    let psep21FromApi = {};
    let pdec21FromApi = {};
    var donnees1 = [];
    fetch("/api/beyi/commois/" + "September 2020" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        psep20FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({ prixsep20: [].concat(psep20FromApi) });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/beyi/commois/" + "October 2020" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        poct20FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixoct20: [].concat(poct20FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
      fetch("/api/beyi/commois/" + "November 2020" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pnov20FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixnov20: [].concat(pnov20FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
      fetch("/api/beyi/commois/" + "December 2020" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pdec20FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixdec20: [].concat(pdec20FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/beyi/commois/" + "March 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pmar21FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixmar21: [].concat(pmar21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/beyi/commois/" + "June 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pjun21FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixjun21: [].concat(pjun21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/beyi/commois/" + "September 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        psep21FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixsep21: [].concat(psep21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/beyi/commois/" + "December 2021" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        pdec21FromApi = data.map((mutengo) => {
          return {
            pour1: mutengo.floorprice + mutengo.constant1 * 0,
            pour2: mutengo.floorprice + mutengo.constant1 * 1,
            pour3: mutengo.floorprice + mutengo.constant1 * 2,
            pour4: mutengo.floorprice + mutengo.constant1 * 3,
            pour5: mutengo.floorprice + mutengo.constant1 * 4,
            pour6: mutengo.floorprice + mutengo.constant1 * 5,
            pour7: mutengo.floorprice + mutengo.constant1 * 6,
            pour8: mutengo.floorprice + mutengo.constant1 * 7,
            pour9: mutengo.floorprice + mutengo.constant1 * 8,
          };
        });
        this.setState({
          prixdec21: [].concat(pdec21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/menji/userd/September 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let september20FromApi = data.map((september20) => {
          let xEV =
            psep20FromApi[0].pour1 * september20.price1 +
            psep20FromApi[0].pour2 * september20.price2 +
            psep20FromApi[0].pour3 * september20.price3 +
            psep20FromApi[0].pour4 * september20.price4 +
            psep20FromApi[0].pour5 * september20.price5 +
            psep20FromApi[0].pour6 * september20.price6 +
            psep20FromApi[0].pour7 * september20.price7 +
            psep20FromApi[0].pour8 * september20.price8 +
            psep20FromApi[0].pour9 * september20.price9;
          this.setState({ evsep20: xEV });
          this.setState({ comsep20: september20.generalcomments });
          return {
            EV: xEV,
            price1: september20.price1,
            price2: september20.price2,
            price3: september20.price3,
            price4: september20.price4,
            price5: september20.price5,
            price6: september20.price6,
            price7: september20.price7,
            price8: september20.price8,
            price9: september20.price9,
            lemedian: september20.lemedian,
            dateforecast: this.convert_to_utc(new Date(september20.dateforecast)),
            specificcomments: september20.specificcomments,
            generalcomments: september20.generalcomments,
          };
        });
        this.setState({
          sep20s: [].concat(september20FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/menji/userd/October 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let october20FromApi = data.map((october20) => {
          let xEV =
            poct20FromApi[0].pour1 * october20.price1 +
            poct20FromApi[0].pour2 * october20.price2 +
            poct20FromApi[0].pour3 * october20.price3 +
            poct20FromApi[0].pour4 * october20.price4 +
            poct20FromApi[0].pour5 * october20.price5 +
            poct20FromApi[0].pour6 * october20.price6 +
            poct20FromApi[0].pour7 * october20.price7 +
            poct20FromApi[0].pour8 * october20.price8 +
            poct20FromApi[0].pour9 * october20.price9;
          this.setState({ evoct20: xEV });
          this.setState({ comoct20: october20.generalcomments });
          return {
            EV: xEV,
            price1: october20.price1,
            price2: october20.price2,
            price3: october20.price3,
            price4: october20.price4,
            price5: october20.price5,
            price6: october20.price6,
            price7: october20.price7,
            price8: october20.price8,
            price9: october20.price9,
            lemedian: october20.lemedian,
            dateforecast: this.convert_to_utc(new Date(october20.dateforecast)),
            specificcomments: october20.specificcomments,
            generalcomments: october20.generalcomments,
          };
        });
        this.setState({
          oct20s: [].concat(october20FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("/api/menji/userd/November 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let november20FromApi = data.map((november20) => {
          let xEV =
            pnov20FromApi[0].pour1 * november20.price1 +
            pnov20FromApi[0].pour2 * november20.price2 +
            pnov20FromApi[0].pour3 * november20.price3 +
            pnov20FromApi[0].pour4 * november20.price4 +
            pnov20FromApi[0].pour5 * november20.price5 +
            pnov20FromApi[0].pour6 * november20.price6 +
            pnov20FromApi[0].pour7 * november20.price7 +
            pnov20FromApi[0].pour8 * november20.price8 +
            pnov20FromApi[0].pour9 * november20.price9;
          this.setState({ evnov20: xEV });
          this.setState({ comnov20: november20.generalcomments });
          return {
            EV: xEV,
            price1: november20.price1,
            price2: november20.price2,
            price3: november20.price3,
            price4: november20.price4,
            price5: november20.price5,
            price6: november20.price6,
            price7: november20.price7,
            price8: november20.price8,
            price9: november20.price9,
            lemedian: november20.lemedian,
            dateforecast: this.convert_to_utc(new Date(november20.dateforecast)),
            specificcomments: november20.specificcomments,
            generalcomments: november20.generalcomments,
          };
        });
        this.setState({
          nov20s: [].concat(november20FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    
    fetch("/api/menji/userd/December 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let december20FromApi = data.map((december20) => {
          let xEV =
            pdec20FromApi[0].pour1 * december20.price1 +
            pdec20FromApi[0].pour2 * december20.price2 +
            pdec20FromApi[0].pour3 * december20.price3 +
            pdec20FromApi[0].pour4 * december20.price4 +
            pdec20FromApi[0].pour5 * december20.price5 +
            pdec20FromApi[0].pour6 * december20.price6 +
            pdec20FromApi[0].pour7 * december20.price7 +
            pdec20FromApi[0].pour8 * december20.price8 +
            pdec20FromApi[0].pour9 * december20.price9;
          this.setState({ evdec20: xEV });
          this.setState({ comdec20: december20.generalcomments });
          return {
            EV: xEV,
            price1: december20.price1,
            price2: december20.price2,
            price3: december20.price3,
            price4: december20.price4,
            price5: december20.price5,
            price6: december20.price6,
            price7: december20.price7,
            price8: december20.price8,
            price9: december20.price9,
            lemedian: december20.lemedian,
            dateforecast: this.convert_to_utc(new Date(december20.dateforecast)),
            specificcomments: december20.specificcomments,
            generalcomments: december20.generalcomments,
          };
        });
        this.setState({
          dec20s: [].concat(december20FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/menji/userd/March 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let march21FromApi = data.map((march21) => {
          let xEV =
            pmar21FromApi[0].pour1 * march21.price1 +
            pmar21FromApi[0].pour2 * march21.price2 +
            pmar21FromApi[0].pour3 * march21.price3 +
            pmar21FromApi[0].pour4 * march21.price4 +
            pmar21FromApi[0].pour5 * march21.price5 +
            pmar21FromApi[0].pour6 * march21.price6 +
            pmar21FromApi[0].pour7 * march21.price7 +
            pmar21FromApi[0].pour8 * march21.price8 +
            pmar21FromApi[0].pour9 * march21.price9;
          this.setState({ evmar21: xEV });
          this.setState({ commar21: march21.generalcomments });
          return {
            EV: xEV,
            price1: march21.price1,
            price2: march21.price2,
            price3: march21.price3,
            price4: march21.price4,
            price5: march21.price5,
            price6: march21.price6,
            price7: march21.price7,
            price8: march21.price8,
            price9: march21.price9,
            lemedian: march21.lemedian,
            dateforecast: this.convert_to_utc(new Date(march21.dateforecast)),
            specificcomments: march21.specificcomments,
            generalcomments: march21.generalcomments,
          };
        });
        this.setState({
          mar21s: [].concat(march21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/menji/userd/June 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let june21FromApi = data.map((june21) => {
          let xEV =
            pjun21FromApi[0].pour1 * june21.price1 +
            pjun21FromApi[0].pour2 * june21.price2 +
            pjun21FromApi[0].pour3 * june21.price3 +
            pjun21FromApi[0].pour4 * june21.price4 +
            pjun21FromApi[0].pour5 * june21.price5 +
            pjun21FromApi[0].pour6 * june21.price6 +
            pjun21FromApi[0].pour7 * june21.price7 +
            pjun21FromApi[0].pour8 * june21.price8 +
            pjun21FromApi[0].pour9 * june21.price9;
          this.setState({ evjun21: xEV });
          this.setState({ comjun21: june21.generalcomments });
          return {
            EV: xEV,
            price1: june21.price1,
            price2: june21.price2,
            price3: june21.price3,
            price4: june21.price4,
            price5: june21.price5,
            price6: june21.price6,
            price7: june21.price7,
            price8: june21.price8,
            price9: june21.price9,
            lemedian: june21.lemedian,
            dateforecast: this.convert_to_utc(new Date(june21.dateforecast)),
            specificcomments: june21.specificcomments,
            generalcomments: june21.generalcomments,
          };
        });
        this.setState({
          jun21s: [].concat(june21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/menji/userd/September 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let september21FromApi = data.map((september21) => {
          let xEV =
            psep21FromApi[0].pour1 * september21.price1 +
            psep21FromApi[0].pour2 * september21.price2 +
            psep21FromApi[0].pour3 * september21.price3 +
            psep21FromApi[0].pour4 * september21.price4 +
            psep21FromApi[0].pour5 * september21.price5 +
            psep21FromApi[0].pour6 * september21.price6 +
            psep21FromApi[0].pour7 * september21.price7 +
            psep21FromApi[0].pour8 * september21.price8 +
            psep21FromApi[0].pour9 * september21.price9;
          this.setState({ evsep21: xEV });
          this.setState({ comsep21: september21.generalcomments });
          return {
            EV: xEV,
            price1: september21.price1,
            price2: september21.price2,
            price3: september21.price3,
            price4: september21.price4,
            price5: september21.price5,
            price6: september21.price6,
            price7: september21.price7,
            price8: september21.price8,
            price9: september21.price9,
            lemedian: september21.lemedian,
            dateforecast: this.convert_to_utc(new Date(september21.dateforecast)),
            specificcomments: september21.specificcomments,
            generalcomments: september21.generalcomments,
          };
        });
        this.setState({
          sep21s: [].concat(september21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

      fetch("/api/menji/userd/December 2021&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let december21FromApi = data.map((december21) => {
          let xEV =
            pdec21FromApi[0].pour1 * december21.price1 +
            pdec21FromApi[0].pour2 * december21.price2 +
            pdec21FromApi[0].pour3 * december21.price3 +
            pdec21FromApi[0].pour4 * december21.price4 +
            pdec21FromApi[0].pour5 * december21.price5 +
            pdec21FromApi[0].pour6 * december21.price6 +
            pdec21FromApi[0].pour7 * december21.price7 +
            pdec21FromApi[0].pour8 * december21.price8 +
            pdec21FromApi[0].pour9 * december21.price9;
          this.setState({ evdec21: xEV });
          this.setState({ comdec21: december21.generalcomments });
          return {
            EV: xEV,
            price1: december21.price1,
            price2: december21.price2,
            price3: december21.price3,
            price4: december21.price4,
            price5: december21.price5,
            price6: december21.price6,
            price7: december21.price7,
            price8: december21.price8,
            price9: december21.price9,
            lemedian: december21.lemedian,
            dateforecast: this.convert_to_utc(new Date(december21.dateforecast)),
            specificcomments: december21.specificcomments,
            generalcomments: december21.generalcomments,
          };
        });
        this.setState({
          dec21s: [].concat(december21FromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("/api/menji/recentdauser/" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let recentFromApi = data.map((recent) => {
          //this.setState({ evdec: xEV });
          //this.setState({ comdec: recent.generalcomments });
          return {
            price1: recent.detail.price1 * 100,
            price2: recent.detail.price2 * 100,
            price3: recent.detail.price3 * 100,
            price4: recent.detail.price4 * 100,
            price5: recent.detail.price5 * 100,
            price6: recent.detail.price6 * 100,
            price7: recent.detail.price7 * 100,
            price8: recent.detail.price8 * 100,
            price9: recent.detail.price9 * 100,
            lemois: recent.detail.mois,
          };
        });
        this.setState({
          recents: [].concat(recentFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ donnees1 });
  }
  render() {
    const renderSep20 = (sep20FromApi) => {
      return (
        <tr key={sep20FromApi.id}>
          <td align="center"><b>${sep20FromApi.EV}/mt</b>
          {"  "}
          {sep20FromApi.dateforecast}
          </td>
          <td align="center">{sep20FromApi.price1 * 100}%</td>
          <td align="center">{sep20FromApi.price2 * 100}%</td>
          <td align="center">{sep20FromApi.price3 * 100}%</td>
          <td align="center">{sep20FromApi.price4 * 100}%</td>
          <td align="center">{sep20FromApi.price5 * 100}%</td>
          <td align="center">{sep20FromApi.price6 * 100}%</td>
          <td align="center">{sep20FromApi.price7 * 100}%</td>
          <td align="center">{sep20FromApi.price8 * 100}%</td>
          <td align="center">{sep20FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{sep20FromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderOct20 = (oct20FromApi) => {
      return (
        <tr key={oct20FromApi.id}>
          <td align="center"><b>${oct20FromApi.EV}/mt</b>
          {"  "}
          {oct20FromApi.dateforecast}
          </td>
          <td align="center">{oct20FromApi.price1 * 100}%</td>
          <td align="center">{oct20FromApi.price2 * 100}%</td>
          <td align="center">{oct20FromApi.price3 * 100}%</td>
          <td align="center">{oct20FromApi.price4 * 100}%</td>
          <td align="center">{oct20FromApi.price5 * 100}%</td>
          <td align="center">{oct20FromApi.price6 * 100}%</td>
          <td align="center">{oct20FromApi.price7 * 100}%</td>
          <td align="center">{oct20FromApi.price8 * 100}%</td>
          <td align="center">{oct20FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{oct20FromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderNov20 = (nov20FromApi) => {
      return (
        <tr key={nov20FromApi.id}>
          <td align="center"><b>${nov20FromApi.EV}/mt</b>
          {"  "}
          {nov20FromApi.dateforecast}
          </td>
          <td align="center">{nov20FromApi.price1 * 100}%</td>
          <td align="center">{nov20FromApi.price2 * 100}%</td>
          <td align="center">{nov20FromApi.price3 * 100}%</td>
          <td align="center">{nov20FromApi.price4 * 100}%</td>
          <td align="center">{nov20FromApi.price5 * 100}%</td>
          <td align="center">{nov20FromApi.price6 * 100}%</td>
          <td align="center">{nov20FromApi.price7 * 100}%</td>
          <td align="center">{nov20FromApi.price8 * 100}%</td>
          <td align="center">{nov20FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{nov20FromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderDec20 = (dec20FromApi) => {
      return (
        <tr key={dec20FromApi.id}>
          <td align="center"><b>${dec20FromApi.EV}/mt</b>
          {"  "}
          {dec20FromApi.dateforecast}
          </td>
          <td align="center">{dec20FromApi.price1 * 100}%</td>
          <td align="center">{dec20FromApi.price2 * 100}%</td>
          <td align="center">{dec20FromApi.price3 * 100}%</td>
          <td align="center">{dec20FromApi.price4 * 100}%</td>
          <td align="center">{dec20FromApi.price5 * 100}%</td>
          <td align="center">{dec20FromApi.price6 * 100}%</td>
          <td align="center">{dec20FromApi.price7 * 100}%</td>
          <td align="center">{dec20FromApi.price8 * 100}%</td>
          <td align="center">{dec20FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{dec20FromApi.specificcomments}</td>
        </tr>
      );
    };

    const renderMar21 = (mar21FromApi) => {
      return (
        <tr key={mar21FromApi.id}>
          <td align="center"><b>${mar21FromApi.EV}/mt</b>
          {"  "}
          {mar21FromApi.dateforecast}
          </td>
          <td align="center">{mar21FromApi.price1 * 100}%</td>
          <td align="center">{mar21FromApi.price2 * 100}%</td>
          <td align="center">{mar21FromApi.price3 * 100}%</td>
          <td align="center">{mar21FromApi.price4 * 100}%</td>
          <td align="center">{mar21FromApi.price5 * 100}%</td>
          <td align="center">{mar21FromApi.price6 * 100}%</td>
          <td align="center">{mar21FromApi.price7 * 100}%</td>
          <td align="center">{mar21FromApi.price8 * 100}%</td>
          <td align="center">{mar21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{mar21FromApi.specificcomments}</td>
        </tr>
      );
    };

    const renderJun21 = (jun21FromApi) => {
      return (
        <tr key={jun21FromApi.id}>
          <td align="center"><b>${jun21FromApi.EV}/mt</b>
          {"  "}
          {jun21FromApi.dateforecast}
          </td>
          <td align="center">{jun21FromApi.price1 * 100}%</td>
          <td align="center">{jun21FromApi.price2 * 100}%</td>
          <td align="center">{jun21FromApi.price3 * 100}%</td>
          <td align="center">{jun21FromApi.price4 * 100}%</td>
          <td align="center">{jun21FromApi.price5 * 100}%</td>
          <td align="center">{jun21FromApi.price6 * 100}%</td>
          <td align="center">{jun21FromApi.price7 * 100}%</td>
          <td align="center">{jun21FromApi.price8 * 100}%</td>
          <td align="center">{jun21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{jun21FromApi.specificcomments}</td>
        </tr>
      );
    };

    const renderSep21 = (sep21FromApi) => {
      return (
        <tr key={sep21FromApi.id}>
          <td align="center"><b>${sep21FromApi.EV}/mt</b>
          {"  "}
          {sep21FromApi.dateforecast}
          </td>
          <td align="center">{sep21FromApi.price1 * 100}%</td>
          <td align="center">{sep21FromApi.price2 * 100}%</td>
          <td align="center">{sep21FromApi.price3 * 100}%</td>
          <td align="center">{sep21FromApi.price4 * 100}%</td>
          <td align="center">{sep21FromApi.price5 * 100}%</td>
          <td align="center">{sep21FromApi.price6 * 100}%</td>
          <td align="center">{sep21FromApi.price7 * 100}%</td>
          <td align="center">{sep21FromApi.price8 * 100}%</td>
          <td align="center">{sep21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{sep21FromApi.specificcomments}</td>
        </tr>
      );
    };

    const renderDec21 = (dec21FromApi) => {
      return (
        <tr key={dec21FromApi.id}>
          <td align="center"><b>${dec21FromApi.EV}/mt</b>
          {"  "}
          {dec21FromApi.dateforecast}
          </td>
          <td align="center">{dec21FromApi.price1 * 100}%</td>
          <td align="center">{dec21FromApi.price2 * 100}%</td>
          <td align="center">{dec21FromApi.price3 * 100}%</td>
          <td align="center">{dec21FromApi.price4 * 100}%</td>
          <td align="center">{dec21FromApi.price5 * 100}%</td>
          <td align="center">{dec21FromApi.price6 * 100}%</td>
          <td align="center">{dec21FromApi.price7 * 100}%</td>
          <td align="center">{dec21FromApi.price8 * 100}%</td>
          <td align="center">{dec21FromApi.price9 * 100}%</td>
          <td colSpan="8" align="left">{dec21FromApi.specificcomments}</td>
        </tr>
      );
    };

    const renderPrixSep20 = (psep20FromApi) => {
      return (
        <tr key={psep20FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${psep20FromApi.pour1}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour2}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour3}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour4}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour5}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour6}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour7}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour8}/mt</b></td>
          <td align="center"><b>${psep20FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    
    const renderPrixOct20 = (poct20FromApi) => {
      return (
        <tr key={poct20FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${poct20FromApi.pour1}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour2}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour3}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour4}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour5}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour6}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour7}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour8}/mt</b></td>
          <td align="center"><b>${poct20FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    
    const renderPrixNov20 = (pnov20FromApi) => {
      return (
        <tr key={pnov20FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pnov20FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pnov20FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    
    const renderPrixDec20 = (pdec20FromApi) => {
      return (
        <tr key={pdec20FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pdec20FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pdec20FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    
    const renderPrixMar21 = (pmar21FromApi) => {
      return (
        <tr key={pmar21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pmar21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pmar21FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };

    const renderPrixJun21 = (pjun21FromApi) => {
      return (
        <tr key={pjun21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pjun21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pjun21FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };

    const renderPrixSep21 = (psep21FromApi) => {
      return (
        <tr key={psep21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${psep21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${psep21FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };

    const renderPrixDec21 = (pdec21FromApi) => {
      return (
        <tr key={pdec21FromApi.id}>
          <td align="center"><b>{"Expected Value"}</b></td>
          <td align="center"><b>${pdec21FromApi.pour1}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour2}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour3}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour4}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour5}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour6}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour7}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour8}/mt</b></td>
          <td align="center"><b>${pdec21FromApi.pour9}/mt</b></td>
          <td colSpan="8" align="center"><b>{"Justifications"}</b></td>
        </tr>
      );
    };
    
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="6" align="center">
              <b>Most Recent Copper Forecasts 2020 - Expected Value</b>
              </td>
            </tr>
            <tr>
              <td align="center"><b>Participant</b></td>
              <td align="center"><b>September 2020</b></td>
              <td align="center"><b>October 2020</b></td>
              <td align="center"><b>November 2020</b></td>
              <td align="center"><b>December 2020</b></td>
            </tr>
            <tr>
              <td align="center">
                <span className="label label-primary"></span>
                <select
                  className=""
                  value={this.state.user}
                  onChange={(e) => {
                    this.setState({
                      user: e.target.value,
                      validationError:
                        e.target.value === "" ? "Choose a participant" : "",
                    });
                    this.fillprices(e.target.value, "Copper");
                  }}
                >
                  {this.state.users.map((user) => (
                    <option key={user.value} value={user.value}>
                      {user.display}
                    </option>
                  ))}
                </select>
              </td>
              <td align="center"><b>${this.state.evsep20}/mt</b></td>
              <td align="center"><b>${this.state.evoct20}/mt</b></td>
              <td align="center"><b>${this.state.evnov20}/mt</b></td>
              <td align="center"><b>${this.state.evdec20}/mt</b></td>
            </tr>
            <tr>
            <td rowSpan="12" colSpan="6" width="60%" align="center">
                <GraphPartCopper
                  mweji20={this.state.recents}
                  mweji20prix={this.state.prixsep20}
                />
              </td>
            </tr>
            </tbody>
        </table>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="6" align="center">
              <b>Most Recent Copper Forecasts 2021 - Expected Value</b>
              </td>
            </tr>
            <tr>
              <td align="center"><b>Participant</b></td>
              <td align="center"><b>March 2021</b></td>
              <td align="center"><b>June 2021</b></td>
              <td align="center"><b>September 2021</b></td>
              <td align="center"><b>December 2021</b></td>
            </tr>
            <tr>
            <td align="center"><b>${this.state.evmar21}/mt</b></td>
              <td align="center"><b>${this.state.evjun21}/mt</b></td>
              <td align="center"><b>${this.state.evsep21}/mt</b></td>
              <td align="center"><b>${this.state.evdec21}/mt</b></td>
            </tr>
            <tr>
            <td rowSpan="12" colSpan="6" width="60%" align="center">
                <GraphPartCopper
                  mweji20={this.state.recents}
                  mweji20prix={this.state.prixsep20}
                />
              </td>
            </tr>
            </tbody>
        </table>
      <table className="table table-bordered">
        <tbody>
        <tr><td align="center"><b>General Comments</b></td></tr>
        <tr><td align="left"><b>September 2020: </b>{this.state.comsep20}</td></tr>
        <tr><td align="left"><b>October 2020: </b>{this.state.comoct20}</td></tr>
        <tr><td align="left"><b>November 2020: </b>{this.state.comnov20}</td></tr>
        <tr><td align="left"><b>December 2020: </b>{this.state.comdec20}</td></tr>
        <tr><td align="left"><b>March 2021: </b>{this.state.commar21}</td></tr>
        <tr><td align="left"><b>June 2021: </b>{this.state.comjun21}</td></tr>
        <tr><td align="left"><b>September 2021: </b>{this.state.comsep21}</td></tr>
        <tr><td align="left"><b>December 202: </b>{this.state.comdec21}</td></tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - September 2020</b></td></tr>
            {this.state.prixsep20.map(renderPrixSep20)}
          </thead>
          <tbody>{this.state.sep20s.map(renderSep20)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - October 2020</b></td></tr>
            {this.state.prixoct20.map(renderPrixOct20)}
          </thead>
          <tbody>{this.state.oct20s.map(renderOct20)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - November 2020</b></td></tr>
            {this.state.prixnov20.map(renderPrixNov20)}
          </thead>
          <tbody>{this.state.nov20s.map(renderNov20)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - December 2020</b></td></tr>
            {this.state.prixdec20.map(renderPrixDec20)}
          </thead>
          <tbody>{this.state.dec20s.map(renderDec20)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - March 2021</b></td></tr>
            {this.state.prixmar21.map(renderPrixMar21)}
          </thead>
          <tbody>{this.state.mar21s.map(renderMar21)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - June 2021</b></td></tr>
            {this.state.prixjun21.map(renderPrixJun21)}
          </thead>
          <tbody>{this.state.jun21s.map(renderJun21)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - September 2021</b></td></tr>
            {this.state.prixsep21.map(renderPrixSep21)}
          </thead>
          <tbody>{this.state.sep21s.map(renderSep21)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr><td align="center" colSpan="18"><b>Forecasts - December 2021</b></td></tr>
            {this.state.prixdec21.map(renderPrixDec21)}
          </thead>
          <tbody>{this.state.dec21s.map(renderDec21)}</tbody>
        </table>
      </div>
    );
  }
}

CPartFcast.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(CPartFcast);
