import React, { Component } from "react";
import withTooltip from "./withToolTip";

class Movies extends Component {
  render() {
    return (
      <div>
        Movies
        {this.props.showTooltip && <p>Some tooltip</p>}
      </div>
    );
  }
}

export default withTooltip(Movies);
