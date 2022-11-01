import React, { Component } from "react";
import github from "./assets/github.png";
import twitter from "./assets/twitter.png";

export default class HymnFooter extends Component {
  render() {
    return (
      <div className="HymnFooter" data-testid="HymnFooter">
        <small style={{ textAlign: "center" }}>
          Developed by Anietie
          <div style={{
            display: "flex", justifyContent: "center", gap: "4%"
          }}>
            <a href="https://www.twitter.com/caanietie">
              <img src={twitter} width={20} height={20}
                alt="twitter handle" data-testid="socialHandle"
              />
            </a>
            <span>|</span>
            <a href="https://www.github.com/caanietie">
              <img src={github} width={20} height={20}
                alt="github handle" data-testid="socialHandle"
              />
            </a>
          </div>
        </small>
      </div>
    );
  }
}