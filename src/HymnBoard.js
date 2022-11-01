import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
import HymnBody from "./HymnBody";

export default class HymnBoard extends Component {
  render() {
    const { hymnStanzas, hymnTitle, hymnChorus,
      chorusType, hymnAuthor, hymnId } = this.props.hymnBody;
    return (
      <div className="HymnTitle HymnNavigation HymnBoard">
        {
          hymnStanzas.length === 0 ?
            (<div className="noHymn HymnSelect">Select hymn</div>) : (
              <>
                <div>
                  <CSSTransitionGroup transitionName="BoardHeader"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={500}>
                    <div key={hymnTitle} className="HymnBoard__title">{hymnTitle}</div>
                    <div key={hymnId} className="HymnBoard__author">{hymnAuthor}</div>
                  </CSSTransitionGroup>
                </div>
                <HymnBody hymnStanzas={hymnStanzas} hymnId={hymnId}
                  hymnChorus={hymnChorus} chorusType={chorusType} />
              </>
            )
        }
      </div>
    )
  }
}
HymnBoard.propType = {
  hymnBody: PropTypes.object.isRequired
}