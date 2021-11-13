import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import {
  NavbarComponent,
  FooterComponent,
  GetStartComponent,
} from "../Components";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <main className="main">
          <GetStartComponent />
        </main>
        <FooterComponent />
      </div>
    );
  }
}

function dispatcher(dispatch) {
  return {
    core: (key, value) =>
      dispatch({
        type: "CORE",
        key: key,
        value: value,
      }),
  };
}

function map(state) {
  return {
    redux: state,
  };
}

const Translated = withTranslation()(Component);
export default connect(map, dispatcher)(Translated);
