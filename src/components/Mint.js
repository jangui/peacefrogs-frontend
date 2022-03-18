import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

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
  mintButton: {
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
    }
  },
});

class Mint extends Component {
  render() {
    const { classes } = this.props;

    const showcaseImgs = 8;
    let rows = [[], []];
    let r = 0
    for (let i = 1; i <= showcaseImgs; ++i ) {
      if (i > showcaseImgs / 2) { r = 1 }
      rows[r].push((
        <img
          className={classes.showcaseImage}
          src={`${process.env.PUBLIC_URL}/img/mintShowcase/${i}.png`}
          alt={`mint showcase #${i}`}
          key={i}
        />
      ));
    }

    return (
      <div className={classes.mint} id='mint'>
        <h1 className={classes.mintTitle}>
          Mint
        </h1>
        <div className={classes.mintShowcase}>
          <div className={classes.showcaseRow}>
            {rows[0]}
          </div>
          <div className={classes.showcaseRow}>
            {rows[1]}
          </div>
        </div>
        <p className={classes.mintInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel quam. Odio tempor orci dapibus ultrices in. Pharetra et ultrices neque ornare. Vitae et leo duis ut diam quam nulla porttitor massa. Orci phasellus egestas tellus rutrum tellus pellentesque.
        </p>
        <a href="https://opensea.io/">
          <button className={classes.mintButton}>
            Mint
          </button>
        </a>
      </div>
    );
  }
}

export default withStyles(styles)(Mint);
