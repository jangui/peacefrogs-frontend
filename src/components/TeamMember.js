import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  memberName: {
    'font-family': '"Motiva Sans Bold", serif bold',
    'text-align': 'center',
    'font-size': '1.2rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
    'margin-top': '10px',
  },
  teamMember: {
    'margin': '20px 50px',
    'display': 'flex',
    'flex-direction': 'column',
    'flex-wrap': 'wrap',
  },
  memberImage: {
    'height': '150px',
    'width': '150px',
  },
  memberDescription: {
    'width': '150px',
    'font-family': '"Motiva Sans", serif light',
    'font-size': '0.6rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '300',
  },
});

class TeamMember extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.teamMember}>
        <h1 className={classes.memberName}>
          {this.props.name}
        </h1>
        <img
          className={classes.memberImage}
          src={`${process.env.PUBLIC_URL}${this.props.img}`}
          alt={`${this.props.name}'s icon`}
        />
        <p className={classes.memberDescription}>
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(TeamMember);
