import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TeamMember from './TeamMember';

const styles = theme => ({
  team: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  },
  teamTitle: {
    'font-family': '"Motiva Sans Bold", serif bold',
    'font-size': '2.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
    'margin-top': '30px',
    'margin-bottom': '0px',
  },
  teamMembers: {
    'display': 'flex',
    'justify-content': 'space-evenly',

  },
});

class Team extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.team}>
        <h1 className={classes.teamTitle}>
          Team
        </h1>
        <div className={classes.teamMembers}>

          <TeamMember
            img='/img/frog.png'
            name='Alex'
            description='Team Manager. Entrepaneur. NFT Enthusiast. Balls to the wall.'
          />

          <TeamMember
            img='/img/frog.png'
            name='Jon'
            description='Artist. Graphic Design Wizard. Frog lover by day, peace maker by night.'
          />

          <TeamMember
            img='/img/frog.png'
            name='Jaime'
            description='Code Monkey. Tech Overlord.'
          />

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Team);
