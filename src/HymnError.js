import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HymnError extends Component {
  render() {
    return (
      <div className="noHymn HymnError">
        {"\u26A0"}<br />{this.props.hymnError}
      </div>
    )
  }
}
HymnError.propType = {
  hymnError: PropTypes.string.isRequired
}