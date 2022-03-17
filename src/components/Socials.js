import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({

});

class Socials extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <h1> Socials </h1>
      </>
    );
  }
}

export default withStyles(styles)(Socials);
