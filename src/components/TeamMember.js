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
    'margin': '20px 0px',
    'display': 'flex',
    'flex-direction': 'column',
    'flex-wrap': 'wrap',
    'align-items': 'center',
    'text-align': 'center',
  },
  memberImage: {
    'height': 'auto',
    'width': 'clamp(250px, 30vw, 300px)',
    //'width': '300px',
  },
  memberDescription: {
    //'width': 'clamp(200px, 80%, 600px)',
    'width': '250px',
  },
});

class TeamMember extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.teamMember}>
        <img
          className={classes.memberImage}
          src={`${process.env.PUBLIC_URL}${this.props.img}`}
          alt={`${this.props.name}'s icon`}
        />
        <h1 className={classes.memberName}>
          {this.props.name}
        </h1>
        <div className={classes.memberDescription}>
          <p>
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TeamMember);
