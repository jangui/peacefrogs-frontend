import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  dao: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'margin-bottom': '300px',
    'flex-wrap': 'wrap',
    'width': 'clamp(100px, 80%, 1000px)',
  },
  daoRight: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'text-align': 'center',
    'width': 'clamp(300px, 50%, 350px)',
  },
  daoImage: {
    'height': 'auto',
    'width': 'clamp(370px, 50%, 650px)',
    'margin-bottom': '0px',
  },
});

class Dao extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dao} id='dao'>
        <img
          className={classes.daoImage}
          src={`${process.env.PUBLIC_URL}/img/peaceDAO.png`}
          alt={'Dao Icon'}
        />
        <div className={classes.daoRight}>
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
