import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HymnTitle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePointerEnter = this.handlePointerEnter.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
  }
  render() {
    let titleClicked = "HymnTitle"
    const borderLeft = { borderLeft: "7px solid lightblue", cursor: "pointer" };
    if (this.props.colored) titleClicked += " HymnTitle__clicked";
    return (
      <li className={titleClicked} style={borderLeft}
        onClick={this.handleClick}
        onPointerEnter={this.handlePointerEnter}
        onPointerLeave={this.handlePointerLeave}>
        {this.props.hymnTitle}
      </li>
    )
  }
  handleClick() {
    const { showHymnBody } = this.props.taskCallback;
    this.props.clickedHymn(this.props.hymnId);
    showHymnBody(this.props.hymnId);
  }
  handlePointerEnter(event) {
    if (!event.target.classList.contains("HymnTitle__clicked"))
      event.target.classList.add("pointerEnter");
  }
  handlePointerLeave(event) {
    if (event.target.classList.contains("pointerEnter"))
      event.target.classList.remove("pointerEnter");
  }
}
HymnTitle.propTypes = {
  colored: PropTypes.bool,
  clickedHymn: PropTypes.func,
  hymnId: PropTypes.number.isRequired,
  hymnTitle: PropTypes.string.isRequired,
  taskCallback: PropTypes.object.isRequired
}