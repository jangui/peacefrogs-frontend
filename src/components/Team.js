import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TeamMember from './TeamMember';

const styles = theme => ({
  team: {
    'display': 'flex',
    'flex-direction': 'column',
    'margin-bottom': '300px',
    'flex-wrap': 'wrap',
    'width': 'clamp(200px, 90%, 1100px)',
    'justify-content': 'center',
    'align-items': 'center',
  },
  teamMembers: {
    'display': 'flex',
    'justify-content': 'center',
    'flex-wrap': 'wrap',
  },
});

class Team extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.team}>
        <h1>
          Meet The Team
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
