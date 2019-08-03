import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react';
import Head from 'next/head';
import Grid from '../components/grid.jsx'
import Navbar from '../components/navbar'
import Header from '../components/header'

class Index extends Component {

  componentDidMount() {
    document.body.style.margin = 0
    document.body.style.fontFamily = 'arial'
  }

  render() {
    return (
      <Grid>
        <Head>
          <title>TanamKota - Dashboard</title>
        </Head>
          <Header id="header" />
          <Navbar id="navbar" />
          <div id="card1" style={{background:'grey'}}>.</div>
          <div id="card2" style={{background:'blue'}}>.</div>
          <div id="card3" style={{background:'pink'}}>.</div>
          <div id="card4" style={{background:'violet'}}>.</div>
      </Grid>
    )
  }
}

export default Index;
