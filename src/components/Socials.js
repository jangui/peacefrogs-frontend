import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  socials: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin-bottom': '200px',
  },
  socialsTitle: {
    'font-family': '"Motiva Sans", serif Bold',
    'font-size': '2.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
    'margin-bottom': '0px',
  },
  socialsRow: {
    'display': 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
  },
  iconDiv: {
    'margin': '50px 60px',
  },
  socialsIcon: {
    'height': '125px',
    'width': '125px',
  },
});

class Socials extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.socials}>
        <h1 className={classes.socialsTitle}>
          Follow our socials!
        </h1>
        <div className={classes.socialsRow}>
          <div className={classes.iconDiv}>
            <a href='https://discord.gg/8bTePQ7aQp'>
              <img
                className={classes.socialsIcon}
                src={`${process.env.PUBLIC_URL}/img/socials/discord.svg`}
                alt={'discord'}
              />
            </a>
          </div>
          <div className={classes.iconDiv}>
            <a href='https://instagram.com/peacefrogs_nft'>
              <img
                className={classes.socialsIcon}
                src={`${process.env.PUBLIC_URL}/img/socials/instagram.png`}
                alt={'twitter'}
              />
            </a>
          </div>
          <div className={classes.iconDiv}>
            <a href='https://twitter.com/peace_frogs'>
              <img
                className={classes.socialsIcon}
                src={`${process.env.PUBLIC_URL}/img/socials/twitter.png`}
                alt={'twitter'}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Socials);
