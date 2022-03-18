import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Team from './Team';

const styles = theme => ({
  about: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin-bottom': '300px',
  },
  aboutTitle: {
    'font-family': '"Motiva Sans Bold", serif bold',
    'font-size': '3.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
  },
  aboutBanner: {
    'height': 'clamp(50px, 200px, 200px)',
    'width':  'clamp(175px, 700px, 700px)',
  },
  aboutTextContainer: {
    'width': 'clamp(50px, 650px, 700px)',
    'justify-content': 'flex-start',
    'display': 'flex',
  },
  aboutText: {
    'font-family': '"Motiva Sans Bold", serif light',
    'font-size': '1.1rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '400',
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.about} id='about'>
        <h1 className={classes.aboutTitle}>
          About
        </h1>
        <img
          className={classes.aboutBanner}
          src={process.env.PUBLIC_URL + '/img/aboutBanner.jpg'}
          alt="About Banner"
        />
        <div className={classes.aboutTextContainer}>
          <div className={classes.aboutText}>
            <p>• 10k hand draw unique  ...... </p>
            <p>• 80% of proceeds donated ...... </p>
            <p>• Each frog = DAO membership ...... </p>
          </div>
        </div>
        <Team />
      </div>
    );
  }
}

export default withStyles(styles)(About);
