import React, { PureComponent } from "react";
/* import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; */

import GraphCG from "./GraphCG";

class CPartFcast extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      users: [],
      augusts: [],
      septembers: [],
      octobers: [],
      novembers: [],
      decembers: [],
      prixaug: [],
      prixsept: [],
      prixoct: [],
      prixnov: [],
      prixdec: [],
      donnees1: [],
      evaug: "",
      evsep: "",
      evoct: "",
      evnov: "",
      evdec: "",
      comaug: "",
      comsep: "",
      comoct: "",
      comnov: "",
      comdec: "",
    };
    this.onChange = this.onChange.bind(this);
    this.fillprices = this.fillprices.bind(this);
    this.graphi = this.graphi.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    fetch("/api/users/tous")
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
  }
  fillprices(utilisateur, produit) {
    let paugFromApi = {};
    let psepFromApi = {};
    let poctFromApi = {};
    let pnovFromApi = {};
    let pdecFromApi = {};
    fetch("/api/beyi/commois/" + "August 2020" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        paugFromApi = data.map((mutengo) => {
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
          prixaug: [].concat(paugFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("/api/beyi/commois/" + "September 2020" + "&Copper")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let yx = data;
        psepFromApi = data.map((mutengo) => {
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
          prixsept: [].concat(psepFromApi),
        });
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
        poctFromApi = data.map((mutengo) => {
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
          prixoct: [].concat(poctFromApi),
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
        pnovFromApi = data.map((mutengo) => {
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
          prixnov: [].concat(pnovFromApi),
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
        pdecFromApi = data.map((mutengo) => {
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
          prixdec: [].concat(pdecFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    let averif = 0;
    fetch("/api/menji/userd/August 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let augustFromApi = data.map((august) => {
          let xEV =
            paugFromApi[0].pour1 * august.price1 +
            paugFromApi[0].pour2 * august.price2 +
            paugFromApi[0].pour3 * august.price3 +
            paugFromApi[0].pour4 * august.price4 +
            paugFromApi[0].pour5 * august.price5 +
            paugFromApi[0].pour6 * august.price6 +
            paugFromApi[0].pour7 * august.price7 +
            paugFromApi[0].pour8 * august.price8 +
            paugFromApi[0].pour9 * august.price9;

          this.setState({ evaug: xEV });
          this.setState({ comaug: august.generalcomments });

          //console.log(august);
          return {
            EV: xEV,
            price1: august.price1,
            price2: august.price2,
            price3: august.price3,
            price4: august.price4,
            price5: august.price5,
            price6: august.price6,
            price7: august.price7,
            price8: august.price8,
            price9: august.price9,
            lemedian: august.lemedian,
            dateforecast: august.dateforecast,
            specificcomments: august.specificcomments,
            generalcomments: august.generalcomments,
          };
        });

        this.setState({
          augusts: [].concat(augustFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    averif = 0;

    fetch("/api/menji/userd/September 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let septemberFromApi = data.map((september) => {
          let xEV =
            psepFromApi[0].pour1 * september.price1 +
            psepFromApi[0].pour2 * september.price2 +
            psepFromApi[0].pour3 * september.price3 +
            psepFromApi[0].pour4 * september.price4 +
            psepFromApi[0].pour5 * september.price5 +
            psepFromApi[0].pour6 * september.price6 +
            psepFromApi[0].pour7 * september.price7 +
            psepFromApi[0].pour8 * september.price8 +
            psepFromApi[0].pour9 * september.price9;

          this.setState({ evsep: xEV });
          this.setState({ comsep: september.generalcomments });

          return {
            EV: xEV,
            price1: september.price1,
            price2: september.price2,
            price3: september.price3,
            price4: september.price4,
            price5: september.price5,
            price6: september.price6,
            price7: september.price7,
            price8: september.price8,
            price9: september.price9,
            lemedian: september.lemedian,
            dateforecast: september.dateforecast,
            specificcomments: september.specificcomments,
            generalcomments: september.generalcomments,
          };
        });

        this.setState({
          septembers: [].concat(septemberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    averif = 0;

    fetch("/api/menji/userd/October 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let octoberFromApi = data.map((october) => {
          let xEV =
            poctFromApi[0].pour1 * october.price1 +
            poctFromApi[0].pour2 * october.price2 +
            poctFromApi[0].pour3 * october.price3 +
            poctFromApi[0].pour4 * october.price4 +
            poctFromApi[0].pour5 * october.price5 +
            poctFromApi[0].pour6 * october.price6 +
            poctFromApi[0].pour7 * october.price7 +
            poctFromApi[0].pour8 * october.price8 +
            poctFromApi[0].pour9 * october.price9;

          this.setState({ evoct: xEV });
          this.setState({ comoct: october.generalcomments });

          return {
            EV: xEV,
            price1: october.price1,
            price2: october.price2,
            price3: october.price3,
            price4: october.price4,
            price5: october.price5,
            price6: october.price6,
            price7: october.price7,
            price8: october.price8,
            price9: october.price9,
            lemedian: october.lemedian,
            dateforecast: october.dateforecast,
            specificcomments: october.specificcomments,
            generalcomments: october.generalcomments,
          };
        });
        this.setState({
          octobers: [].concat(octoberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    averif = 0;
    fetch("/api/menji/userd/November 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let novemberFromApi = data.map((november) => {
          let xEV =
            pnovFromApi[0].pour1 * november.price1 +
            pnovFromApi[0].pour2 * november.price2 +
            pnovFromApi[0].pour3 * november.price3 +
            pnovFromApi[0].pour4 * november.price4 +
            pnovFromApi[0].pour5 * november.price5 +
            pnovFromApi[0].pour6 * november.price6 +
            pnovFromApi[0].pour7 * november.price7 +
            pnovFromApi[0].pour8 * november.price8 +
            pnovFromApi[0].pour9 * november.price9;

          this.setState({ evnov: xEV });
          this.setState({ comnov: november.generalcomments });

          return {
            EV: xEV,
            price1: november.price1,
            price2: november.price2,
            price3: november.price3,
            price4: november.price4,
            price5: november.price5,
            price6: november.price6,
            price7: november.price7,
            price8: november.price8,
            price9: november.price9,
            lemedian: november.lemedian,
            dateforecast: november.dateforecast,
            specificcomments: november.specificcomments,
            generalcomments: november.generalcomments,
          };
        });
        this.setState({
          novembers: [].concat(novemberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
    averif = 0;

    fetch("/api/menji/userd/December 2020&" + produit + "&" + utilisateur)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let decemberFromApi = data.map((december) => {
          let xEV =
            pdecFromApi[0].pour1 * december.price1 +
            pdecFromApi[0].pour2 * december.price2 +
            pdecFromApi[0].pour3 * december.price3 +
            pdecFromApi[0].pour4 * december.price4 +
            pdecFromApi[0].pour5 * december.price5 +
            pdecFromApi[0].pour6 * december.price6 +
            pdecFromApi[0].pour7 * december.price7 +
            pdecFromApi[0].pour8 * december.price8 +
            pdecFromApi[0].pour9 * december.price9;

          this.setState({ evdec: xEV });
          this.setState({ comdec: december.generalcomments });

          return {
            EV: xEV,
            price1: december.price1,
            price2: december.price2,
            price3: december.price3,
            price4: december.price4,
            price5: december.price5,
            price6: december.price6,
            price7: december.price7,
            price8: december.price8,
            price9: december.price9,
            lemedian: december.lemedian,
            dateforecast: december.dateforecast,
            specificcomments: december.specificcomments,
            generalcomments: december.generalcomments,
          };
        });
        this.setState({
          decembers: [].concat(decemberFromApi),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  graphi() {
    //graphique

    var donnees1 = [];
    //donnees = { ...this.state.donnees1 };
    donnees1.push({
      price: this.state.prixaug.price1,
      August20: this.state.augusts.price1,
      Sept20: this.state.septembers.price1,
      October20: this.state.octobers.price1,
      November20: this.state.novembers.price1,
      December20: this.state.decembers.price1,
    });
    donnees1.push({
      price: this.state.prixaug.price2,
      August20: this.state.augusts.price2,
      Sept20: this.state.septembers.price2,
      October20: this.state.octobers.price2,
      November20: this.state.novembers.price2,
      December20: this.state.decembers.price2,
    });
    donnees1.push({
      price: this.state.prixaug.price3,
      August20: this.state.augusts.price3,
      Sept20: this.state.septembers.price3,
      October20: this.state.octobers.price3,
      November20: this.state.novembers.price3,
      December20: this.state.decembers.price3,
    });
    donnees1.push({
      price: this.state.prixaug.price4,
      August20: this.state.augusts.price4,
      Sept20: this.state.septembers.price4,
      October20: this.state.octobers.price4,
      November20: this.state.novembers.price4,
      December20: this.state.decembers.price4,
    });
    donnees1.push({
      price: this.state.prixaug.price5,
      August20: this.state.augusts.price5,
      Sept20: this.state.septembers.price5,
      October20: this.state.octobers.price5,
      November20: this.state.novembers.price5,
      December20: this.state.decembers.price5,
    });
    donnees1.push({
      price: this.state.prixaug.price6,
      August20: this.state.augusts.price6,
      Sept20: this.state.septembers.price6,
      October20: this.state.octobers.price6,
      November20: this.state.novembers.price6,
      December20: this.state.decembers.price6,
    });
    donnees1.push({
      price: this.state.prixaug.price7,
      August20: this.state.augusts.price7,
      Sept20: this.state.septembers.price7,
      October20: this.state.octobers.price7,
      November20: this.state.novembers.price7,
      December20: this.state.decembers.price7,
    });
    donnees1.push({
      price: this.state.prixaug.price8,
      August20: this.state.augusts.price8,
      Sept20: this.state.septembers.price8,
      October20: this.state.octobers.price8,
      November20: this.state.novembers.price8,
      December20: this.state.decembers.price8,
    });
    donnees1.push({
      price: this.state.prixaug.price9,
      August20: this.state.augusts.price9,
      Sept20: this.state.septembers.price9,
      October20: this.state.octobers.price9,
      November20: this.state.novembers.price9,
      December20: this.state.decembers.price9,
    });
    this.setState({ donnees1 });
    //console.log(donnees1);
  }

  render() {
    const renderAugust = (augustFromApi) => {
      return (
        <tr key={augustFromApi.id}>
          <td align="center">{augustFromApi.user}</td>
          <td align="center">{augustFromApi.EV}</td>
          <td align="center">{augustFromApi.dateforecast}</td>
          <td align="center">{augustFromApi.price1 * 100}%%</td>
          <td align="center">{augustFromApi.price2 * 100}%</td>
          <td align="center">{augustFromApi.price3 * 100}%</td>
          <td align="center">{augustFromApi.price4 * 100}%</td>
          <td align="center">{augustFromApi.price5 * 100}%</td>
          <td align="center">{augustFromApi.price6 * 100}%</td>
          <td align="center">{augustFromApi.price7 * 100}%</td>
          <td align="center">{augustFromApi.price8 * 100}%</td>
          <td align="center">{augustFromApi.price9 * 100}%</td>
          <td align="center">{augustFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderSeptember = (septemberFromApi) => {
      return (
        <tr key={septemberFromApi.id}>
          <td align="center">{septemberFromApi.user}</td>
          <td align="center">{septemberFromApi.EV}</td>
          <td align="center">{septemberFromApi.dateforecast}</td>
          <td align="center">{septemberFromApi.price1 * 100}%</td>
          <td align="center">{septemberFromApi.price2 * 100}%</td>
          <td align="center">{septemberFromApi.price3 * 100}%</td>
          <td align="center">{septemberFromApi.price4 * 100}%</td>
          <td align="center">{septemberFromApi.price5 * 100}%</td>
          <td align="center">{septemberFromApi.price6 * 100}%</td>
          <td align="center">{septemberFromApi.price7 * 100}%</td>
          <td align="center">{septemberFromApi.price8 * 100}%</td>
          <td align="center">{septemberFromApi.price9 * 100}%</td>
          <td align="center">{septemberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderOctober = (octoberFromApi) => {
      return (
        <tr key={octoberFromApi.id}>
          <td align="center">{octoberFromApi.user}</td>
          <td align="center">{octoberFromApi.EV}</td>
          <td align="center">{octoberFromApi.dateforecast}</td>
          <td align="center">{octoberFromApi.price1 * 100}%</td>
          <td align="center">{octoberFromApi.price2 * 100}%</td>
          <td align="center">{octoberFromApi.price3 * 100}%</td>
          <td align="center">{octoberFromApi.price4 * 100}%</td>
          <td align="center">{octoberFromApi.price5 * 100}%</td>
          <td align="center">{octoberFromApi.price6 * 100}%</td>
          <td align="center">{octoberFromApi.price7 * 100}%</td>
          <td align="center">{octoberFromApi.price8 * 100}%</td>
          <td align="center">{octoberFromApi.price9 * 100}%</td>
          <td align="center">{octoberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderNovember = (novemberFromApi) => {
      return (
        <tr key={novemberFromApi.id}>
          <td align="center">{novemberFromApi.user}</td>
          <td align="center">{novemberFromApi.EV}</td>
          <td align="center">{novemberFromApi.dateforecast}</td>
          <td align="center">{novemberFromApi.price1 * 100}%</td>
          <td align="center">{novemberFromApi.price2 * 100}%</td>
          <td align="center">{novemberFromApi.price3 * 100}%</td>
          <td align="center">{novemberFromApi.price4 * 100}%</td>
          <td align="center">{novemberFromApi.price5 * 100}%</td>
          <td align="center">{novemberFromApi.price6 * 100}%</td>
          <td align="center">{novemberFromApi.price7 * 100}%</td>
          <td align="center">{novemberFromApi.price8 * 100}%</td>
          <td align="center">{novemberFromApi.price9 * 100}%</td>
          <td align="center">{novemberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderDecember = (decemberFromApi) => {
      return (
        <tr key={decemberFromApi.id}>
          <td align="center">{decemberFromApi.user}</td>
          <td align="center">{decemberFromApi.EV}</td>
          <td align="center">{decemberFromApi.dateforecast}</td>
          <td align="center">{decemberFromApi.price1 * 100}%</td>
          <td align="center">{decemberFromApi.price2 * 100}%</td>
          <td align="center">{decemberFromApi.price3 * 100}%</td>
          <td align="center">{decemberFromApi.price4 * 100}%</td>
          <td align="center">{decemberFromApi.price5 * 100}%</td>
          <td align="center">{decemberFromApi.price6 * 100}%</td>
          <td align="center">{decemberFromApi.price7 * 100}%</td>
          <td align="center">{decemberFromApi.price8 * 100}%</td>
          <td align="center">{decemberFromApi.price9 * 100}%</td>
          <td align="center">{decemberFromApi.specificcomments}</td>
        </tr>
      );
    };
    const renderPrixAug = (paugFromApi) => {
      return (
        <tr key={paugFromApi.id}>
          <td align="center">{"August 2020"}</td>
          <td align="center">{"EV"}</td>
          <td align="center">{"Date"}</td>
          <td align="center">{paugFromApi.pour1}</td>
          <td align="center">{paugFromApi.pour2}</td>
          <td align="center">{paugFromApi.pour3}</td>
          <td align="center">{paugFromApi.pour4}</td>
          <td align="center">{paugFromApi.pour5}</td>
          <td align="center">{paugFromApi.pour6}</td>
          <td align="center">{paugFromApi.pour7}</td>
          <td align="center">{paugFromApi.pour8}</td>
          <td align="center">{paugFromApi.pour9}</td>
          <td align="center">{"Justifications"}</td>
        </tr>
      );
    };
    const renderPrixSept = (psepFromApi) => {
      return (
        <tr key={psepFromApi.id}>
          <td align="center">{"September 2020"}</td>
          <td align="center">{"EV"}</td>
          <td align="center">{"Date"}</td>
          <td align="center">{psepFromApi.pour1}</td>
          <td align="center">{psepFromApi.pour2}</td>
          <td align="center">{psepFromApi.pour3}</td>
          <td align="center">{psepFromApi.pour4}</td>
          <td align="center">{psepFromApi.pour5}</td>
          <td align="center">{psepFromApi.pour6}</td>
          <td align="center">{psepFromApi.pour7}</td>
          <td align="center">{psepFromApi.pour8}</td>
          <td align="center">{psepFromApi.pour9}</td>
          <td align="center">{"Jusifications"}</td>
        </tr>
      );
    };
    const renderPrixOct = (poctFromApi) => {
      return (
        <tr key={poctFromApi.id}>
          <td align="center">{"October 2020"}</td>
          <td align="center">{"EV"}</td>
          <td align="center">{"Date"}</td>
          <td align="center">{poctFromApi.pour1}</td>
          <td align="center">{poctFromApi.pour2}</td>
          <td align="center">{poctFromApi.pour3}</td>
          <td align="center">{poctFromApi.pour4}</td>
          <td align="center">{poctFromApi.pour5}</td>
          <td align="center">{poctFromApi.pour6}</td>
          <td align="center">{poctFromApi.pour7}</td>
          <td align="center">{poctFromApi.pour8}</td>
          <td align="center">{poctFromApi.pour9}</td>
          <td align="center">{"Justifications"}</td>
        </tr>
      );
    };
    const renderPrixNov = (pnovFromApi) => {
      return (
        <tr key={pnovFromApi.id}>
          <td align="center">{"November 2020"}</td>
          <td align="center">{"EV"}</td>
          <td align="center">{"Date"}</td>
          <td align="center">{pnovFromApi.pour1}</td>
          <td align="center">{pnovFromApi.pour2}</td>
          <td align="center">{pnovFromApi.pour3}</td>
          <td align="center">{pnovFromApi.pour4}</td>
          <td align="center">{pnovFromApi.pour5}</td>
          <td align="center">{pnovFromApi.pour6}</td>
          <td align="center">{pnovFromApi.pour7}</td>
          <td align="center">{pnovFromApi.pour8}</td>
          <td align="center">{pnovFromApi.pour9}</td>
          <td align="center">{"Justifications"}</td>
        </tr>
      );
    };
    const renderPrixDec = (pdecFromApi) => {
      return (
        <tr key={pdecFromApi.id}>
          <td align="center">{"December 2020"}</td>
          <td align="center">{"EV"}</td>
          <td align="center">{"Date"}</td>
          <td align="center">{pdecFromApi.pour1}</td>
          <td align="center">{pdecFromApi.pour2}</td>
          <td align="center">{pdecFromApi.pour3}</td>
          <td align="center">{pdecFromApi.pour4}</td>
          <td align="center">{pdecFromApi.pour5}</td>
          <td align="center">{pdecFromApi.pour6}</td>
          <td align="center">{pdecFromApi.pour7}</td>
          <td align="center">{pdecFromApi.pour8}</td>
          <td align="center">{pdecFromApi.pour9}</td>
          <td align="center">{"Justifications"}</td>
        </tr>
      );
    };
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td colSpan="6" align="center">
                Forecasts
              </td>
            </tr>
            <tr>
              <td align="center">EV</td>
              <td align="center">August 2020</td>
              <td align="center">September 2020</td>
              <td align="center">October 2020</td>
              <td align="center">November 2020</td>
              <td align="center">December 2020</td>
              <td align="center">General Comments</td>
            </tr>
            <tr>
              <td align="center">
                <span className="label label-primary">Participant:</span>
                <select
                  className="form-control form-control-lg"
                  value={this.state.user}
                  onChange={(e) => {
                    this.setState({
                      user: e.target.value,
                      validationError:
                        e.target.value === ""
                          ? "You need to choose a participant"
                          : "",
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
              <td align="center">{this.state.evaug}</td>
              <td align="center">{this.state.evsep}</td>
              <td align="center">{this.state.evoct}</td>
              <td align="center">{this.state.evnov}</td>
              <td align="center">{this.state.evdec}</td>
              <td rowSpan="2" align="center">
                {this.state.comaug}{" "}
              </td>
            </tr>
            <tr>
              <td rowSpan="12" align="center" colSpan="6">
                <GraphCG mambo={this.state.donnees1} />
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comsep}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comoct}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comnov}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comdec}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2" align="center"></td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2" align="center"></td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td align="center" colSpan="13">
                Forecasts August 2020
              </td>
            </tr>
            {this.state.prixaug.map(renderPrixAug)}
          </thead>
          <tbody>{this.state.augusts.map(renderAugust)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td align="center" colSpan="13">
                Forecasts September 2020
              </td>
            </tr>
            {this.state.prixsept.map(renderPrixSept)}
          </thead>
          <tbody>{this.state.septembers.map(renderSeptember)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td align="center" colSpan="13">
                Forecasts October 2020
              </td>
            </tr>
            {this.state.prixoct.map(renderPrixOct)}
          </thead>
          <tbody>{this.state.octobers.map(renderOctober)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td align="center" colSpan="13">
                Forecasts November 2020
              </td>
            </tr>
            {this.state.prixnov.map(renderPrixNov)}
          </thead>
          <tbody>{this.state.novembers.map(renderNovember)}</tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td align="center" colSpan="13">
                Forecasts December 2020
              </td>
            </tr>
            {this.state.prixdec.map(renderPrixDec)}
          </thead>
          <tbody>{this.state.decembers.map(renderDecember)}</tbody>
        </table>
      </div>
    );
  }
}
export default CPartFcast;
