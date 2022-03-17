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
    'font-family': '"Motiva Sans Bold", serif bold',
    'font-size': '4.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
  },
  introText: {
    'width': 'clamp(400px, 70%, 800px)',
    'text-align': 'center',
    'font-family': '"Motiva Sans Bold", serif light',
    'font-size': '1.3rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '300',
  },
});

class Intro extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.intro}>
        <h1 className={classes.introTitle}>
          Peace Frogs
        </h1>
        <p className={classes.introText}>
          Peace Frogs NFT is a hand drawn collection of digital art frogs. Owning one of these frogs is a symbol of solidarity. 80% of all proceeds are donated to the Ukrainian Red Cross.
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Intro);
