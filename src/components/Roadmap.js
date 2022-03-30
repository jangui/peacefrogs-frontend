import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';

const styles = theme => ({
  roadmap: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'width': 'clamp(200px, 90%, 1100px)',
    'margin-top': '15vh',
    'margin-bottom': '15vh',
  },
  roadmapImage: {
    'height': 'auto',
    'width': 'clamp(200px, 100%, 1100px)',
  },
});

class Roadmap extends Component {
  state = {
    visibility: false,
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
        <div className={classes.roadmap} id='roadmap' style={{
          opacity: this.state.visibility ? 1 : 0,
          transition: 'opacity 1250ms ease-in-out'
        }}>
          <h1>
            Roadmap
          </h1>
          <img
            className={classes.roadmapImage}
            src={process.env.PUBLIC_URL + '/img/roadmap.png'}
            alt="Road Map"
          />
        </div>
      </VisibilitySensor>
    );
  }
}

export default withStyles(styles)(Roadmap);
