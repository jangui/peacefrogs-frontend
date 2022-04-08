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
        <div style={{margin: '10vh'}}></div>
        <Intro />
        <div style={{margin: '25vh'}}></div>
        <About />
        <div style={{margin: '25vh'}}></div>
        <Dao />
        <div style={{margin: '25vh'}}></div>
        <Team />
        <div style={{margin: '20vh'}}></div>
        <Roadmap />
        <div style={{margin: '15vh'}}></div>
        <Socials />
        <div style={{margin: '10vh'}}></div>
      </div>

    return <Page content={content} />;
  }
}

export default withStyles(styles)(Landing);
