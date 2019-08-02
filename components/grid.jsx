import React, { Component } from "react";

export default props => (
  <div className="grid">
    {props.children}
    <style jsx global>{`
      .grid {
        display: grid;
        width: 100%;
        height: 35em;
        grid-template-areas:
          "navbar header header"
          "navbar card1 card2"
          "navbar card3 card4";
        grid-gap: 5px;
        grid-template-columns: 260px 1fr 1fr;
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
  </div>
);
