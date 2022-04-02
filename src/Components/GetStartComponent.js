import React from "react";
import { withTranslation } from "react-i18next";

class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  DecreaseItem = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      return;
    }
  };

  IncrementItem = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { t } = this.props;

    return (
      <div class="counter">
        <p className="header">Counter</p>
        <div className="counter__group">
          <button onClick={this.DecreaseItem} className="btn btn__danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="counter__minus"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-shopping-cart"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>{" "}
            - {this.state.count}
          </p>
          <button onClick={this.IncrementItem} className="btn btn__success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="counter__plus"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default withTranslation()(Component);
