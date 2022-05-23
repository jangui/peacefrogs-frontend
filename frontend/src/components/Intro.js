import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';

const styles = theme => ({
  intro: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
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
  state = {
    visibility: false
  }

  render() {
    const { classes } = this.props;
    return (
      <VisibilitySensor
        scrollCheck={true}
        partialVisibility={true}
        onChange={(isVisible) => {
          this.setState({visibility: isVisible})
        }}
      >
        <div className={classes.intro} style={{
            opacity: this.state.visibility ? 1 : 0,
            transition: 'opacity 1000ms ease-in-out',
        }}>
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
      </VisibilitySensor>
    );
  }
}

export default withStyles(styles)(Intro);
