import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({

});

class Roadmap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <h1> Roadmap </h1>
      </>
    );
  }
}

export default withStyles(styles)(Roadmap);
