import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  roadmap: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin-bottom': '300px',
  },
  roadmapTitle: {
    'font-family': '"Motiva Sans", serif Bold',
    'font-size': '3.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
    'margin-bottom': '0px',
  },
  roadmapText: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'font-family': '"Motiva Sans", serif Light',
    'font-size': '1.2rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '400',
  },
  mapItem: {
    'margin': '20px 50px',
  },
});

class Roadmap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.roadmap} id='roadmap'>
        <h1 className={classes.roadmapTitle}>
          Roadmap
        </h1>
        <div className={classes.roadmapText}>
          <ol>
            <li className={classes.mapItem}>
              Begin Whitelist recruit
            </li>

            <li className={classes.mapItem}>
              Whitelist pre-sale (Date: tbh) (price: tba approx 0.25SOL)
            </li>

            <li className={classes.mapItem}>
              Official mint (Date: tbh) (Price: tba approx 1 SOL)
            </li>

            <li className={classes.mapItem}>
              25% sold. 25 Rare, hand drawn pieces airdropped to users.
            </li>

            <li className={classes.mapItem}>
              50% sold. 25 Rare, hand drawn pieces airdropped to users
            </li>

            <li className={classes.mapItem}>
              75% sold. 25 Rare, hand drawn pieces airdropped to users
            </li>

            <li className={classes.mapItem}>
              <p style={{'marginBottom': '2px'}}>
                100% sold. Sold out! All proceeds donated.
              </p>
              <p style={{'marginTop': '2px'}}>
                25 Rare, hand drawn pieces airdropped to users.
              </p>
            </li>

            <li className={classes.mapItem}>
              Create a community wallet for the DAO
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Roadmap);
