import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  intro: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin-top': '100px',
    'margin-bottom': '200px',
  },
  introTitle: {
    'margin-bottom': '5px',
    'width': '750px',
    'height': '200px',
    'font-family': '"Motiva Sans Bold", serif bold',
    'font-size': '4.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
  },
  introText: {
    'width': 'clamp(400px, 70%, 800px)',
    'text-align': 'center',
  },
});

class Intro extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.intro}>
        <img
          className={classes.introTitle}
          src={process.env.PUBLIC_URL + '/img/title.jpg'}
          alt="Peace Frogs"
        />
        <div className={classes.introText}>
          <p> Peace Frogs NFT is a fundraising collection of 10k digital art frogs. </p>
          <p> 80% of all proceeds are donated to the Ukrainian Red Cross. </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);
