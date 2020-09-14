import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
} from "recharts";
 */
//import GraphCG from "./GraphCG";
import GraphPartGold from "./GraphPartGold";

class GPartFcast extends PureComponent {
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
      recents: [],
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
    var donnees1 = [];

    fetch("/api/beyi/commois/" + "August 2020" + "&Gold")
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
    fetch("/api/beyi/commois/" + "September 2020" + "&Gold")
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
    fetch("/api/beyi/commois/" + "October 2020" + "&Gold")
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
    fetch("/api/beyi/commois/" + "November 2020" + "&Gold")
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
    fetch("/api/beyi/commois/" + "December 2020" + "&Gold")
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
            lemois: recent.detail.month,
          };
        });
        let sept1 = [];
        let octo1 = [];
        let novem1 = [];
        let decem1 = [];

        var y = 0;
        for (y == 0; y < 4 /* recentFromApi.length */; y++) {
          if (recentFromApi[y].lemois == "September 2020") {
            sept1[1] = recentFromApi[y].price1;
            sept1[2] = recentFromApi[y].price2;
            sept1[3] = recentFromApi[y].price3;
            sept1[4] = recentFromApi[y].price4;
            sept1[5] = recentFromApi[y].price5;
            sept1[6] = recentFromApi[y].price6;
            sept1[7] = recentFromApi[y].price7;
            sept1[8] = recentFromApi[y].price8;
            sept1[9] = recentFromApi[y].price9;
          }

          if (recentFromApi[y].lemois == "October 2020") {
            octo1[1] = recentFromApi[y].price1;
            octo1[2] = recentFromApi[y].price2;
            octo1[3] = recentFromApi[y].price3;
            octo1[4] = recentFromApi[y].price4;
            octo1[5] = recentFromApi[y].price5;
            octo1[6] = recentFromApi[y].price6;
            octo1[7] = recentFromApi[y].price7;
            octo1[8] = recentFromApi[y].price8;
            octo1[9] = recentFromApi[y].price9;
          }

          if (recentFromApi[y].lemois == "November 2020") {
            novem1[1] = recentFromApi[y].price1;
            novem1[2] = recentFromApi[y].price2;
            novem1[3] = recentFromApi[y].price3;
            novem1[4] = recentFromApi[y].price4;
            novem1[5] = recentFromApi[y].price5;
            novem1[6] = recentFromApi[y].price6;
            novem1[7] = recentFromApi[y].price7;
            novem1[8] = recentFromApi[y].price8;
            novem1[9] = recentFromApi[y].price9;
          }

          if (recentFromApi[y].lemois == "December 2020") {
            decem1[1] = recentFromApi[y].price1;
            decem1[2] = recentFromApi[y].price2;
            decem1[3] = recentFromApi[y].price3;
            decem1[4] = recentFromApi[y].price4;
            decem1[5] = recentFromApi[y].price5;
            decem1[6] = recentFromApi[y].price6;
            decem1[7] = recentFromApi[y].price7;
            decem1[8] = recentFromApi[y].price8;
            decem1[9] = recentFromApi[y].price9;
          }
        }

        // console.log(donnees1);
        // console.log(recentFromApi);
        let leprix = [];

        leprix[1] = this.state.prixsept[0].pour1;
        leprix[2] = this.state.prixsept[0].pour2;
        leprix[3] = this.state.prixsept[0].pour3;
        leprix[4] = this.state.prixsept[0].pour4;
        leprix[5] = this.state.prixsept[0].pour5;
        leprix[6] = this.state.prixsept[0].pour6;
        leprix[7] = this.state.prixsept[0].pour7;
        leprix[8] = this.state.prixsept[0].pour8;
        leprix[9] = this.state.prixsept[0].pour9;
        var yy = 1;
        for (yy == 1; yy < 10; yy++) {
          donnees1.push({
            price: leprix[yy],
            Sep20: sept1[yy],
            Oct20: octo1[yy],
            Nov20: novem1[yy],
            Dec20: decem1[yy],
          });
        }

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
    const renderAugust = (augustFromApi) => {
      return (
        <tr key={augustFromApi.id}>
          <td align="center">{augustFromApi.user}</td>
          <td align="center">{augustFromApi.EV}</td>
          <td align="center">{augustFromApi.dateforecast}</td>
          <td align="center">{augustFromApi.price1 * 100}%</td>
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
          <td align="center">{"EV ($/MT)"}</td>
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
          <td align="center">{"EV ($/oz)"}</td>
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
          <td align="center">{"EV ($/MT)"}</td>
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
          <td align="center">{"EV ($/MT)"}</td>
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
          <td align="center">{"EV ($/MT)"}</td>
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
              <td align="center">EV ($/MT)</td>
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
                        e.target.value === "" ? "Choose a participant" : "",
                    });
                    this.fillprices(e.target.value, "Gold");
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
                <GraphPartGold mweji={this.state.donnees1} />

                {/*  <ResponsiveContainer>
                  <BarChart
                    layout="horizontal"
                    width={500}
                    height={300}
                    data={this.state.donnees1}
                    margin={{
                      top: 5,
                      right: 5,
                      left: 5,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="price" type="category" />
                    <YAxis type="number" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Sep20" fill="#00CC00" />
                    <Bar dataKey="Oct20" fill="#7F6000" />
                    <Bar dataKey="Nov20" fill="#00B050" />
                    <Bar dataKey="Dec20" fill="#FF0000" />
                  </BarChart>
                </ResponsiveContainer> */}
              </td>
            </tr>
            <tr></tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comsep}
              </td>
            </tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comoct}
              </td>
            </tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comnov}
              </td>
            </tr>
            <tr>
              <td rowSpan="2" align="center">
                {this.state.comdec}
              </td>
            </tr>
            <tr>
              <td rowSpan="2" align="center"></td>
            </tr>
            <tr>
              <td rowSpan="2" align="center"></td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td align="center" colSpan="13">
                Forecasts - August 2020
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
                Forecasts - September 2020
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
                Forecasts - October 2020
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
                Forecasts - November 2020
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
                Forecasts - December 2020
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

GPartFcast.propTypes = {
  //logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(GPartFcast);
