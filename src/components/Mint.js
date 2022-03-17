import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({

});

class Mint extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <h1> Mint </h1>
      </>
    );
  }
}

export default withStyles(styles)(Mint);
