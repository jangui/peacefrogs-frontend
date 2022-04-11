import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Page from './Page';
import Intro from './Intro';
import About from './About';
import Dao from './Dao';
import Team from './Team';
import Roadmap from './Roadmap';
import Mint from './Mint';
import Socials from './Socials';

const styles = theme => ({
  mainColumn: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'flex-direction': 'column',
    'overflow-x': 'hidden',
  },
});

class Landing extends Component {
  render() {
    const { classes }  = this.props;
    let content =
      <div className={classes.mainColumn}>
        <div style={{margin: 'clamp(20px, 3vw, 100px)'}}></div>
        <Intro />
        <div style={{margin: 'clamp(150px, 20vw, 300px)'}}></div>
        <About />
        <div style={{margin: 'clamp(150px, 20vw, 300px)'}}></div>
        <Dao />
        <div style={{margin: 'clamp(150px, 20vw, 300px)'}}></div>
        <Team />
        <div style={{margin: 'clamp(150px, 20vw, 300px)'}}></div>
        <Roadmap />
        <div style={{margin: 'clamp(150px, 15vw, 300px)'}}></div>
        <Mint />
        <div style={{margin: 'clamp(50px, 10vw, 150px)'}}></div>
      </div>

    return <Page content={content} />;
  }
}

export default withStyles(styles)(Landing);
