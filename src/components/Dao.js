import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  dao: {
    'display': 'flex',
    'margin-bottom': '300px',
    'width': 'clamp(300px, 800px, 800px)',
    'justify-content': 'center',
    'flex-wrap': 'wrap',
  },
  daoLeft: {
    'display': 'flex',
    'flex-grow': '0',
    'flex-shrink': '1',
    'flex-direction': 'column',
    'align-items': 'center',
    'text-align': 'center',
    'width': '70%',
  },
  daoImage: {
    'height': '300px',
    'flex-grow': '1',
    'width': '300px',
    'padding': '40px 20px',
  },
});

class Dao extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dao} id='dao'>
        <div>
          <img
            className={classes.daoImage}
            src={`${process.env.PUBLIC_URL}/img/peaceDAO.png`}
            alt={'Dao Icon'}
          />
        </div>
        <div className={classes.daoLeft}>
          <h1> Peace DAO </h1>
           <p>
                Peace DAO is on track to be the first philanthropic DAO that utilizes NFT artwork to help make the world a better place. It will create a community of like-minded individuals that will collaborate to conduct future fundraising projects.
          </p>
          <div style={{"margin-bottom": "10px"}}> </div>
          <p>
              Owning a PeaceFrog will grant you a vote on future projects proposed by the Peace DAO. This DAO will have a communal wallet used to fund future projects around the world. To kickstart this community, all the income generated from royalties post-mint will be directed to the DAOs wallet.
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Dao);
