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
  introImage: {
    'margin-bottom': '5px',
    'width': 'clamp(100px, 90%, 1000px)',
    'height': 'auto',
  },
  introText: {
    'width': 'clamp(100px, 80%, 600px)',
    'text-align': 'center',
  },
});

class Intro extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.intro}>
        <img
          className={classes.introImage}
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
