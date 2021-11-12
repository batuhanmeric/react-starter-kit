import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { NavbarContainer, FooterContainer } from "../Containers";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavbarContainer />
        <section>
          <div class="post">
            <div class="container">
              <div class="post__header">
                <div class="post__header__title">Recent posts</div>
                <a href="#" class="post__header__view">
                  View all
                </a>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 --divider">
                  <div class="post__content">
                    <div class="post__content__title">
                      Making a design system from scratch
                    </div>
                    <div class="post__content__subtitle">
                      <span class="post__content__subtitle__label post__content__subtitle__label--right">
                        12 Feb 2020
                      </span>
                      <span class="post__content__subtitle__label post__content__subtitle__label--left">
                        Design, Pattern
                      </span>
                    </div>
                    <div class="post__content__description">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div class="post__content">
                    <div class="post__content__title">
                      Creating pixel perfect icons in Figma
                    </div>
                    <div class="post__content__subtitle">
                      <span class="post__content__subtitle__label post__content__subtitle__label--right">
                        12 Feb 2020
                      </span>
                      <span class="post__content__subtitle__label post__content__subtitle__label--left">
                        Figma, Icon Design
                      </span>
                    </div>
                    <div class="post__content__description">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="feature">
            <div class="container">
              <div class="feature__title">Featured works</div>
              <div class="feature__card">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div class="feature__card__picture feature__card__picture--banner-1"></div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="feature__card__content">
                      <div class="feature__card__content__title">
                        Designing Dashboards
                      </div>
                      <div class="feature__card__content__subtitle">
                        <span class="feature__card__content__subtitle__years">
                          2020
                        </span>
                        <span class="feature__card__content__subtitle__label">
                          Dashboard
                        </span>
                      </div>
                      <div class="feature__card__content__description">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="feature__card">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div class="feature__card__picture feature__card__picture--banner-2"></div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="feature__card__content">
                      <div class="feature__card__content__title">
                        Designing Dashboards
                      </div>
                      <div class="feature__card__content__subtitle">
                        <span class="feature__card__content__subtitle__years">
                          2020
                        </span>
                        <span class="feature__card__content__subtitle__label">
                          Dashboard
                        </span>
                      </div>
                      <div class="feature__card__content__description">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="feature__card">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div class="feature__card__picture feature__card__picture--banner-3"></div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div class="feature__card__content">
                      <div class="feature__card__content__title">
                        Designing Dashboards
                      </div>
                      <div class="feature__card__content__subtitle">
                        <span class="feature__card__content__subtitle__years">
                          2020
                        </span>
                        <span class="feature__card__content__subtitle__label">
                          Dashboard
                        </span>
                      </div>
                      <div class="feature__card__content__description">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterContainer />
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
