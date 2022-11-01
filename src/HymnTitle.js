import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HymnTitle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    let titleClicked = "HymnTitle pointerEvent";
    if (this.props.colored) titleClicked += " HymnTitle__clicked";
    return (
      <li className={titleClicked}
        onClick={this.handleClick}
        style={{
          cursor: "pointer",
          borderLeft: "7px solid lightblue"
        }}
      >
        {this.props.hymnTitle}
      </li>
    )
  }
  handleClick() {
    const { showHymnBody } = this.props.taskCallback;
    this.props.clickedHymn(this.props.hymnId);
    showHymnBody(this.props.hymnId);
  }
}
HymnTitle.propTypes = {
  colored: PropTypes.bool,
  clickedHymn: PropTypes.func,
  hymnId: PropTypes.number.isRequired,
  hymnTitle: PropTypes.string.isRequired,
  taskCallback: PropTypes.object.isRequired
}