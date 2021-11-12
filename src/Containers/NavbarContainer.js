import React from "react";
import { withTranslation } from "react-i18next";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { t } = this.props;

    return (
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="nav__link">
              Works
            </a>
            <a href="#" className="nav__link">
              Blog
            </a>
            <a href="#" className="nav__link">
              Contact
            </a>
          </nav>
          <br />
          <div className="header__content">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 --divider">
                <div className="header__content__title">
                  Hi, I am John, Creative Technologist
                </div>
                <div className="header__content__description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
                <div className="header__content__footer">
                  <button className="button">Download Resume</button>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div className="header__content__picture"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withTranslation()(Component);
