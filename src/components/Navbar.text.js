import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Divide as Hamburger } from 'hamburger-react';

const styles = theme => ({
  navStyle: {
    'width': '100%',
    'background': 'white',
  },
  },
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <nav className={classes.navStyle}>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
