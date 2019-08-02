import React, { Component } from 'react';
import Head from 'next/head';
import Grid from '../components/grid.jsx'

class Index extends Component {
  render() {
    return (
      <Grid>
          <div id="navbar" style={{background:'red'}}>.</div>
          <div id="header" style={{background:'green'}}>.</div>
          <div id="card1" style={{background:'grey'}}>.</div>
          <div id="card2" style={{background:'blue'}}>.</div>
          <div id="card3" style={{background:'pink'}}>.</div>
          <div id="card4" style={{background:'violet'}}>.</div>
      </Grid>
    )
  }
}

export default Index;
