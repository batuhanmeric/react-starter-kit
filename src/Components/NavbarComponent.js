import React from "react";
import { withTranslation } from "react-i18next";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { t } = this.props;

    return <header className="header">Increase - Decrease App</header>;
  }
}

export default withTranslation()(Component);
