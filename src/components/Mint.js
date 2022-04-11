import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';

const styles = theme => ({
  mint: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'margin-bottom': '200px',
  },
  mintTitle: {
    'font-family': '"Motiva Sans", serif Bold',
    'font-size': '3.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '700',
    'margin-bottom': '15px',
  },
  mintShowcase: {
    'display': 'flex',
    'justify-content': 'center',
    'flex-direction': 'column',
    'align-items': 'center',
  },
  showcaseImage: {
    'padding': '10px 20px',
    'height': '110px',
    'width': '110px',
  },
  showcaseRow: {
    'display': 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
  },
  mintInfo: {
    'width': '550px',
    'text-align': 'center',
    'font-family': '"Motiva Sans", serif light',
    'font-size': '1.0rem',
    'color': 'rgb(24, 33, 109)',
    'font-weight': '300',
    'margin-bottom': '30px',
  },
  mintImage: {
    'height': 'auto',
    'width': 'clamp(300px, 50vw, 800px)',
    'transition': 'all 0.3s ease-in-out 0s',
    '&:hover': {
      'transform': 'scale(1.2)',
    }
  },
});

class Mint extends Component {
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
        <div className={classes.mint} style={{
            opacity: this.state.visibility ? 1 : 0,
            transition: 'opacity 1500ms ease-in-out',
        }}>
          <a href="https://opensea.io/">
            <img
              className={classes.mintImage}
              src={process.env.PUBLIC_URL + '/img/mint.png'}
              alt="Mint"
            />
          </a>
        </div>
      </VisibilitySensor>
    );
  }
}

export default withStyles(styles)(Mint);
