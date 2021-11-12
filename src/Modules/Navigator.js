import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeScreen } from "../Screens";

class Component extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}

export default Component;
