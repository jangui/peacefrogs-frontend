import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import VisibilitySensor from 'react-visibility-sensor';

const styles = theme => ({
  main: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  },
  about: {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'flex-wrap': 'wrap-reverse',
    'width': 'clamp(100px, 90%, 1100px)',
  },
  aboutLeft: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'text-align': 'center',
    'width': 'clamp(300px, 35%, 350px)',
  },
  aboutImage: {
    'height': 'auto',
    'width': 'clamp(370px, 55%, 650px)',
  },
});

class About extends Component {
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
        <div className={classes.main} id='about'>
          <div className={classes.about}>
            <div className={classes.aboutLeft} style={{
              transform: this.state.visibility ? 'translate(0%)' : 'translate(-250%)',
              transition: 'transform 700ms ease-out',
            }}>
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
              style={{
                transform: this.state.visibility ? 'translate(0%)' : 'translate(150%)',
                transition: 'transform 700ms ease-out',
              }}
            />
          </div>
        </div>
      </VisibilitySensor>
    );
/*
    return (
      <VisibilitySensor
        onChange={(isVisible) => {
          this.setState({visibility: isVisible})
        }}
      >
        <CSSTransition
          in={this.state.visibility}
          appear={true}
          timeout={{enter: 700, exit: 500}}
          classNames="aboutAnimation"
        >
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
        </CSSTransition>
      </VisibilitySensor>
    );
       */
  }
}

export default withStyles(styles)(About);
