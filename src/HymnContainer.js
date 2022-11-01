import React, { Component } from "react";
import PropTypes from "prop-types";
import HymnBoard from "./HymnBoard";
import HymnHeader from "./HymnHeader";
import HymnNavigation from "./HymnNavigation";
import HymnError from "./HymnError";
import HymnFooter from "./HymnFooter";

export default class HymnContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "", selectValue: "title" };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  render() {
    const hymnsInfo = this.props.hymns.map(hymn => ({
      id: hymn.hymn.id, title: hymn.hymn.title,
      topic: hymn.hymn.topic, author: hymn.hymn.author,
      chorus: hymn.hymn.chorus, stanzas: hymn.hymn.stanzas
    }));
    return (
      <div className="HymnContainer" data-testid="HymnContainer">
        <HymnHeader searchCallback={{
          searchValue: this.state.searchValue,
          searchChangeFunc: this.handleSearchChange
        }}
          selectCallback={{
            selectValue: this.state.selectValue,
            selectChangeFunc: this.handleSelectChange
          }} />
        {
          this.props.hymnError ?
            (<HymnError hymnError={this.props.hymnError} />) : (
              <div>
                <HymnNavigation hymnsInfo={hymnsInfo}
                  searchValue={this.state.searchValue}
                  selectValue={this.state.selectValue}
                  taskCallback={this.props.taskCallback} />
                <HymnBoard hymnBody={this.props.hymnBody} />
              </div>
            )
        }
        <HymnFooter />
      </div>
    )
  }
  handleSearchChange(searchText) {
    this.setState({ searchValue: searchText });
  }
  handleSelectChange(selectText) {
    this.setState({ selectValue: selectText });
  }
}
HymnContainer.propTypes = {
  hymnError: PropTypes.string,
  hymnBody: PropTypes.object.isRequired,
  taskCallback: PropTypes.object.isRequired,
  hymns: PropTypes.arrayOf(PropTypes.object).isRequired
}