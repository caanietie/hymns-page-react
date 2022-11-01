import "./App.css";
import React, { Component } from "react";
import HymnContainer from "./HymnContainer";

const API_URL = "http://localhost:4000/hymns/api/hymns";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      hymns: [], hymnStanzas: [], hymnTitle: "",
      hymnId: 0, hymnChorus: null, chorusType: 0,
      hymnAuthor: "", hymnError: ""};
    this.handleHymnBody = this.handleHymnBody.bind(this);
  }
  render(){
    return (
      <HymnContainer taskCallback = {{showHymnBody: this.handleHymnBody}}
          hymns = {this.state.hymns} hymnError = {this.state.hymnError}
          hymnBody = {{
            hymnStanzas: this.state.hymnStanzas,
            chorusType: this.state.chorusType,
            hymnChorus: this.state.hymnChorus,
            hymnAuthor: this.state.hymnAuthor,
            hymnTitle: this.state.hymnTitle,
            hymnId: this.state.hymnId
          }}/>
          
    )
  }
  componentDidMount(){
    fetch(API_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({hymns: responseData})
      }).catch(error => {
        console.log(error);
        this.setState({hymnError: error.message});
      })
  }
  handleHymnBody(hymnNumber){
    const hymn = this.state.hymns.find(hymn => hymn.hymn.id === hymnNumber);
    this.setState({
      chorusType: hymn.hymn.chorus_type,
      hymnStanzas: hymn.hymn.stanzas,
      hymnChorus: hymn.hymn.chorus,
      hymnAuthor: hymn.hymn.author,
      hymnTitle: hymn.hymn.title,
      hymnId: hymn.hymn.id
    });
  }
}