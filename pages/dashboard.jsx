import React, { Component } from "react";
import Head from "next/head";
import Grid from "../components/grid.jsx";
import Navbar from "../components/navbar";
import Header from "../components/header";
import List from "../components/custom-list";
import Weather from "../components/weather";
import PieChart from "../components/pie-chart";
import LineChart from "../components/line-chart";

class Index extends Component {
  componentDidMount() {
    document.body.style.margin = 0;
    document.body.style.fontFamily = "'Nunito', sans-serif";
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
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:300,400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0" />
        </Head>
        <Header id="header" />
        <Navbar id="navbar" />
        <List id="card1" />
        <Weather id="card2" />
        <PieChart id="card3" />
        <LineChart id="card4" />
      </Grid>
    );
  }
}

export default Index;
