import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  roadmap: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'width': 'clamp(200px, 90%, 1100px)',
  },
  roadmapImage: {
    'height': 'auto',
    'width': 'clamp(200px, 100%, 1100px)',
  },
});

class Roadmap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.roadmap} id='roadmap'>
        <h1>
          Roadmap
        </h1>
        <img
          className={classes.roadmapImage}
          src={process.env.PUBLIC_URL + '/img/roadmap.png'}
          alt="Road Map"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Roadmap);
