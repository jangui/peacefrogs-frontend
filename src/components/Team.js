import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TeamMember from './TeamMember';
import VisibilitySensor from 'react-visibility-sensor';

const styles = theme => ({
  team: {
    'display': 'flex',
    'flex-direction': 'column',
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
        <div className={classes.team} style={{
            opacity: this.state.visibility ? 1 : 0,
            transition: 'opacity 1250ms ease-in-out',
        }}>
          <h1>
            Meet The Team
          </h1>
          <div className={classes.teamMembers}>

            <TeamMember
              img='/img/alex.png'
              name='Alex'
              description='Team Manager. NFT Guru.'
            />

            <TeamMember
              img='/img/jon.png'
              name='Jon'
              description='Artist. Design Wizard.'
            />

            <TeamMember
              img='/img/jaime.png'
              name='Jaime'
              description='Developer. Tech Overlord.'
            />

          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default withStyles(styles)(Team);
