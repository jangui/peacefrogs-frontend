import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Divide as Hamburger } from 'hamburger-react';

const styles = theme => ({
  navStyle: {
    'width': '100%',
    'background': 'white',
  },

  navFlex: {
    'display': 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    'margin': '25px 20px',
  },

  logoStyle: {
    'width': "120px",
    'height': "70px",
  },

  navLeft: {
    'display:': 'flex',
    'align-items': 'center',
    'margin': '0px 35px',
  },

  navRight: {
    'display': 'flex',
    'justify-content': 'right',
    'flex-grow': '2',
  },

  navRightItems: {
    'display': 'flex',
    'margin': '0px 50px',
    'justify-content': 'space-evenly',
  },

  navButton: {
    'background': 'white',
    'color': 'rgb(24, 33, 109)',
    'font-family': '"Motiva Sans Light", sans-serif',
    'font-size': '1.2rem',
    'font-weight': '400',
    'border': 'none',
    'margin': '0px 30px',
    'transition': 'all 0.3s ease-in-out 0s',
    '&:hover': {
      'color': 'orange',
      'text-decoration': 'wavy underline',
    },
  },

  navMintButton: {
    'background': 'rgb(46, 24, 106)',
    'color': 'white',
    'font-family': '"Motiva Sans Light", sans-serif',
    'font-size': '1.2rem',
    'font-weight': 'bold',
    'cursor': 'pointer',
    'box-shadow': 'rgba(23, 31, 114, 0.2) 0px 16px 30px',
    'padding': '13px 50px',
    'margin': '0px 10px',
    'border': '1px solid rgb(237, 243, 245)',
    'border-radius': '7px',
    'transition': 'all 0.3s ease-in-out 0s',
    '&:hover': {
      'background': 'orange',
    },
  },

  hamburger: {},
});

class Navbar extends Component {
  state = { size: "small" }
  sizeThreshold = 800

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    if (window.innerWidth >= this.sizeThreshold) {
      this.setState({size: "large"});
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    if (this.state.size === "small") {
      if (window.innerWidth > this.sizeThreshold) {
        this.setState({size: "large"});
      }
    } else if (this.state.size  === "large") {
      if (window.innerWidth <= this.sizeThreshold) {
        this.setState({size: "small"});
      }
    }
  }

  render() {
    const { classes } = this.props;

    let rightContent =
      <div className={classes.navRightItems}>
        <button className={classes.navButton}>About</button>
        <button className={classes.navButton}>Mission</button>
        <button className={classes.navButton}>Roadmap</button>
        <button className={classes.navMintButton}>Mint</button>
      </div>

    // display hambuger if screen is small
    if (this.state.size === "small") {
      rightContent =
        <>
          <div className={classes.hamburger}>
            <Hamburger
              size={25}
              color='rgb(24, 33, 109)'
              easing="ease-in"
              onToggle={this.props.burgerClickHandler}
            />
          </div>
        </>
    }


    return (
      <nav className={classes.navStyle}>
        <div className={classes.navFlex}>
          <div className={classes.navLeft}>
            <img
              className={classes.logoStyle}
              src={process.env.PUBLIC_URL + '/img/logo.png'}
              alt="Logo"
            />
          </div>
          <div className={classes.navRight}>
            {rightContent}
          </div>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
