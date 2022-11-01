import PropTypes from "prop-types";
import HymnTitle from "./HymnTitle";
import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default class HymnNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { colorHymnNumber: 0 };
    this.handleRandomHymn = this.handleRandomHymn.bind(this);
    this.handleClickedHymn = this.handleClickedHymn.bind(this);
  }
  render() {
    if (!this.props.hymnError) {
      var selectValue = this.props.selectValue;
      var searchValue = this.props.searchValue.trim().toLowerCase();
      var hymnTitles = this.props.hymnsInfo
        .filter(hymn => hymn[selectValue] &&
          (Array.isArray(hymn[selectValue]) ?
            hymn[selectValue].join("\n") : hymn[selectValue]
          ).toLowerCase().indexOf(searchValue) !== -1)
        .map(hymn => (
          <HymnTitle taskCallback={this.props.taskCallback}
            key={hymn.id} hymnId={hymn.id} hymnTitle={hymn.title}
            clickedHymn={this.handleClickedHymn}
            colored={parseInt(hymn.id) === this.state.colorHymnNumber} />
        ));
    }
    return (
      <div className="HymnNavigation">
        <CSSTransitionGroup component="ul"
          transitionName="HymnTitle_clicked"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
          <li className="HymnTitle randomHymn"
            onClick={this.handleRandomHymn}
          >
            Random Hymns
          </li>
          {hymnTitles}
        </CSSTransitionGroup>
      </div>
    )
  }
  handleClickedHymn(hymnNumber) {
    this.setState({ colorHymnNumber: hymnNumber });
  }
  handleRandomHymn() {
    const hymnId = parseInt(Math.random() * this.props.hymnsInfo.length);
    const { showHymnBody } = this.props.taskCallback;
    this.handleClickedHymn(hymnId);
    showHymnBody(hymnId);
  }
}
HymnNavigation.propTypes = {
  searchValue: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  taskCallback: PropTypes.object.isRequired,
  hymnsInfo: PropTypes.arrayOf(PropTypes.object).isRequired
}