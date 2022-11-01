import React, { Component } from "react"
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

const validateChorusType = function(props, propName, componentName){
  if(props[propName]){
    let propValue = props[propName];
    if(typeof propValue !== "number" || propValue < 0)
      return new Error(`${propName} in ${componentName} should be >= 0`);
  }
}

export default class HymnBody extends Component{
  render(){
    return (
      <div className = "HymnBody">
        <CSSTransitionGroup transitionName = "HymnTitle_clicked"
                            transitionEnterTimeout = {500}
                            transitionLeaveTimeout = {500}
                            transitionAppear = {true}
                            transitionAppearTimeout = {500}>
          {
            this.props.chorusType === 0 ? this.ZeroChorus() :
            this.props.chorusType === 1 ? this.OneChorus() : this.ManyChorus()
          }
        </CSSTransitionGroup>
      </div>
    )
  }
  ZeroChorus(){
    const id = this.props.hymnId.toString();
    return this.props.hymnStanzas.map((stanza, index) => (
      <div key = {id+index} className = "stanzaChorus">
        {this.Hymnify(stanza, "stanza")}
      </div>
    ));
  }
  OneChorus(){
    const id = this.props.hymnId.toString();
    const hymnifyChorus = this.Hymnify(this.props.hymnChorus, "chorus");
    return this.props.hymnStanzas.map((stanza, index) => {
      return (
        <div key = {id+index} className = "stanzaChorus">
          {this.Hymnify(stanza, "stanza")}
          {hymnifyChorus}
        </div>
      )
    })
  }
  ManyChorus(){
    const chorus = this.props.hymnChorus;
    const stanzas = this.props.hymnStanzas;
    const id = this.props.hymnId.toString();
    let result = [];
    for(let index = 0; index < this.props.hymnStanzas.length; index++){
      result.push(
        <div key = {id+index} className = "stanzaChorus">
          {this.Hymnify(stanzas[index], "stanza")}
          {this.Hymnify(chorus[index], "chorus")}
        </div>
      )
    }
    return result;
  }
  Hymnify(stanzaOrChorus, styles){
    return (
      <div className = {styles}>
        {
          stanzaOrChorus.trim().split("\n").map((line, index) => (
            <div key={index} className = "line">{line.trim()}</div>
          ))
        }
      </div>
    )
  }
}
HymnBody.propType = {
  hymnChorus: PropTypes.any,
  chorusType: validateChorusType,
  hymnId: PropTypes.number.isRequired,
  hymnStanzas: PropTypes.arrayOf(PropTypes.string).isRequired
};