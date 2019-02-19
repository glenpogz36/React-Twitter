import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Components/Navigation";
import Error404 from "./Components/Error404";
import NewTwitterForm from "./Components/TwitterForm";
import TwitterList from "./Components/TwitterList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitts: []
    };
  }

  addTwitt = twitt => {
    const twitts = [...this.state.twitts];
    twitts.push(twitt);
    this.setState({ twitts });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Navigation />
            </div>
          </div>
          <div className="col-md-6">
            <NewTwitterForm addTwitt={this.addTwitt} />
          </div>
          <div className="col-md-6">
            <TwitterList twitts={this.state.twitts} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
