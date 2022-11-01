import React, { Component } from "react";
import header from "./assets/header.png";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

export default class HymnHeader extends Component{
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  render(){
    const {searchValue} = this.props.searchCallback;
    const {selectValue} = this.props.selectCallback;
    return (
      <div className = "HymnHeader">
        <img src = {header} className = "header" alt = "logo"/>
        <CSSTransitionGroup transitionName = "Header"
                            transitionAppear = {true}
                            transitionEnter = {false}
                            transitionLeave = {false}
                            transitionAppearTimeout = {300}>
          <h1>GOSPEL HYMNS AND SONGS</h1>
          <h2>for church use</h2>
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName = "SearchHymns"
                            transitionAppear = {true}
                            transitionEnter = {false}
                            transitionLeave = {false}
                            transitionAppearTimeout = {500}>
          <div className = "searchHymnsGroup">
            <select onChange = {this.handleSelectChange}>
              <option value = "title">Title</option>
              <option value = "topic">Topic</option>
              <option value = "stanzas">Stanza</option>
              <option value = "chorus">Chorus</option>
              <option value = "author">Author</option>
            </select>
            <input type = "text" value = {searchValue}
              onChange = {this.handleSearchChange}
              onKeyDown = {this.handleKeyDown}
              placeholder = {`Search hymns by ${selectValue}`}
              className = "searchHymnsInput"/>
          </div>
        </CSSTransitionGroup>
      </div>
    )
  }
  handleSearchChange(event){
    const {searchChangeFunc} = this.props.searchCallback;
    searchChangeFunc(event.target.value);
  }
  handleKeyDown(event){
    if(event.key.toLowerCase() === "enter"){
      const {searchChangeFunc} = this.props.searchCallback;
      searchChangeFunc("");
    }
  }
  handleSelectChange(event){
    const {selectChangeFunc} = this.props.selectCallback;
    selectChangeFunc(event.target.value);
  }
}
HymnHeader.propTypes = {
  searchCallback: PropTypes.object.isRequired,
  selectCallback: PropTypes.object.isRequired
}