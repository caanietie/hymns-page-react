import React, { Component } from "react";
import header from "./assets/header.png";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

export default class HymnHeader extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  render() {
    const { searchValue } = this.props.searchCallback;
    const { selectValue } = this.props.selectCallback;
    return (
      <div className="HymnHeader" data-testid="HymnHeader">
        <img src={header} alt="logo"
          className="header" data-testid="header"
        />
        <CSSTransitionGroup transitionName="Header"
          data-testid="transition1"
          transitionAppear={true}
          transitionEnter={false}
          transitionLeave={false}
          transitionAppearTimeout={300}
        >
          <h1>GOSPEL HYMNS AND SONGS</h1>
          <h2>for church use</h2>
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="SearchHymns"
          data-testid="transition2"
          transitionAppear={true}
          transitionEnter={false}
          transitionLeave={false}
          transitionAppearTimeout={500}
        >
          <div className="searchHymnsGroup"
            data-testid="searchHymnsGroup"
          >
            <select onChange={this.handleSelectChange}>
              <option data-testid="selectOptions" value="title">Title</option>
              <option data-testid="selectOptions" value="topic">Topic</option>
              <option data-testid="selectOptions" value="stanzas">Stanza</option>
              <option data-testid="selectOptions" value="chorus">Chorus</option>
              <option data-testid="selectOptions" value="author">Author</option>
            </select>
            <input type="text" value={searchValue}
              onChange={this.handleSearchChange}
              onKeyDown={this.handleKeyDown}
              placeholder={`Search hymns by ${selectValue}`}
              className="searchHymnsInput"
              data-testid="searchHymnsInput"
            />
          </div>
        </CSSTransitionGroup>
      </div>
    )
  }
  handleSearchChange(event) {
    const { searchChangeFunc } = this.props.searchCallback;
    searchChangeFunc(event.target.value);
  }
  handleKeyDown(event) {
    if (event.key.toLowerCase() === "enter") {
      const { searchChangeFunc } = this.props.searchCallback;
      searchChangeFunc("");
    }
  }
  handleSelectChange(event) {
    const { selectChangeFunc } = this.props.selectCallback;
    selectChangeFunc(event.target.value);
  }
}
HymnHeader.propTypes = {
  searchCallback: PropTypes.object.isRequired,
  selectCallback: PropTypes.object.isRequired
}