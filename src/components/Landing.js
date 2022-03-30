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
        <Intro />
        <About />
        <Dao />
        <Team />
        <Roadmap />
        <Socials />
      </div>

    return <Page content={content} />;
  }
}

export default withStyles(styles)(Landing);
