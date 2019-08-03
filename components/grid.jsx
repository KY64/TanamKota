import React, { Component } from "react";
import Media from "react-responsive";

export default props => (
  <React.Fragment>
    <Media query="(min-width: 769px)">
      <div className="grid">{props.children}</div>
    </Media>
    <Media query="(max-width: 768px)">
      <div className="grid-m">{props.children}</div>
    </Media>
    <style jsx global>{`
      .grid, .grid-m {
        display: grid;
        width: 100%;
        grid-template-areas:
          "navbar header header"
          "navbar card1 card2"
          "navbar card3 card4";
        grid-template-columns: 65px 1fr 1fr;
      }
      .grid-m {
        grid-template-columns: 1fr;
        grid-template-areas:
          "card1"
          "card2"
          "card3"
          "card4"
          "navbar";
      }
      #header {
        grid-area: header;
      }
      #navbar {
        grid-area: navbar;
      }
      #card1 {
        grid-area: card1;
      }
      #card2 {
        grid-area: card2;
      }
      #card3 {
        grid-area: card3;
      }
      #card4 {
        grid-area: card4;
      }
    `}</style>
  </React.Fragment>
);
