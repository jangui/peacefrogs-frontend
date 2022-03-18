import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  mission: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin-bottom': '300px',
  },
  missionTitle: {
    'font-family': '"Motiva Sans", serif Bold',
    'font-size': '3.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
    'margin-bottom': '0px',
  },
  missionContent: {
    'display': 'flex',
    'align-items': 'center',
  },
  missionStatement: {
    'height': '100%',
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'width': '400px',
    'font-family': '"Motiva Sans", serif light',
    'font-size': '1.2rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '600',
    'text-indent': '20px',
  },
  missionImage: {
    'height': '300px',
    'width': '300px',
    'padding': '40px 20px',
  },
});

class Mission extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mission} id='mission'>
        <h1 className={classes.missionTitle}>
          Mission
        </h1>
        <div className={classes.missionContent}>
          <div className={classes.missionStatement}>
            <p>
              Suspendisse elementum lacus eget tellus convallis varius. Suspendisse sit amet lorem sed erat consequat convallis. Sed neque tellus, laoreet ut suscipit eget, cursus eu leo. Duis eu felis augue.
            </p>
            <p className={classes.missionStatement}>
              Sed sollicitudin eleifend elit sit amet volutpat. Cras ultrices tortor a ante condimentum condimentum. Maecenas a augue a neque ultricies fermentum.
            </p>
          </div>
          <img
            className={classes.missionImage}
            src={`${process.env.PUBLIC_URL}/img/frog.png`}
            alt={'Mission Icon'}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Mission);
