import React, { Component } from "react";
import Head from "next/head";
import Grid from "../components/grid.jsx";
import Navbar from "../components/navbar";
import Header from "../components/header";
import List from "../components/custom-list";
import Weather from "../components/weather";

class Index extends Component {
  componentDidMount() {
    document.body.style.margin = 0;
    document.body.style.fontFamily = "arial";
  }

  render() {
    return (
      <Grid>
        <Head>
          <title>TanamKota - Dashboard</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
            integrity="sha256-UzFD2WYH2U1dQpKDjjZK72VtPeWP50NoJjd26rnAdUI="
            crossorigin="anonymous"
          />
        </Head>
        <Header id="header" />
        <Navbar id="navbar" />
        <List id="card1" />
        <Weather id="card2" />
        <div id="card3" style={{ background: "pink" }}>
          .
        </div>
        <div id="card4" style={{ background: "violet" }}>
          .
        </div>
      </Grid>
    );
  }
}

export default Index;
