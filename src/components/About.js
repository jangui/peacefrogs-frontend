import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  about: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'margin-bottom': '300px',
    'flex-wrap': 'wrap-reverse',
    'width': 'clamp(100px, 80%, 1000px)',
  },
  aboutLeft: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'text-align': 'center',
    'width': 'clamp(300px, 35%, 350px)',
  },
  aboutImage: {
    'margin-top': '60px',
    'height': 'auto',
    'width': 'clamp(370px, 65%, 650px)',
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.about} id='about'>
        <div className={classes.aboutLeft}>
            <h1> About </h1>
            <p> The mission of this project is to create a large-scale fundraiser to <a href="https://mobile.twitter.com/search?q=%23HelpUkrain">#HelpUkraine</a>.
            </p>

            <p> We believe that introducing fund-raising efforts into the NFT ecosystem will challenge the meaning of an NFT and serve as a precedent project for future fund-raising endeavors. </p>

            <p> Owning a Peace Frog will also grant you membership to the Peace DAO, philanthropic organization that will organize future fund-raiser projects. </p>

        </div>
        <img
          className={classes.aboutImage}
          src={process.env.PUBLIC_URL + '/img/about.png'}
          alt="About Banner"
        />
      </div>
    );
  }
}

export default withStyles(styles)(About);
