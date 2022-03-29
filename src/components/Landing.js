import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Page from './Page';
import Intro from './Intro';
import About from './About';
import Dao from './Dao';
import Team from './Team';
import Roadmap from './Roadmap';
import Mint from './Mint';
import Socials from './Socials';

const styles = theme => ({
  mainColumn: {
    'display': 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
  },
});

class Landing extends Component {
  state = {
    visibleIntro: true,
    visibleAbout: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleVisibilities);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleVisibilities);
  }

  toggleVisibilities = () => {
      if (window.scrollY < 400) {
        this.setState({visibleIntro: true})
      } else {
        this.setState({visibleIntro: false})
      }
      if (window.scrollY < 800) {
        this.setState({visibleAbout: true})
      } else {
        this.setState({visibleAbout: false})
      }
  }

  toggleIntro = (visibility) => {
    if (visibility === null) { visibility = !this.state.visibleIntro }
    this.setState({visibleIntro: visibility});
  }
  toggleAbout = (visibility) => {
    if (visibility === null) { visibility = !this.state.visibleIntro }
    this.setState({visibleAbout: visibility});
  }

  render() {
    const { classes }  = this.props;

    let content =
      <div className={classes.mainColumn}>
        <div style={{'margin': '100px'}}></div>
        <Intro
          visible={this.state.visibleIntro}
          toggle={this.toggleIntro}
        />
        <div style={{'margin': '150px'}}></div>
        <About
          visible={this.state.visibleAbout}
          toggle={this.toggleAbout}
        />
        <div style={{'margin': '150px'}}></div>
        <Dao />
        <div style={{'margin': '150px'}}></div>
        <Team />
        <div style={{'margin': '150px'}}></div>
        <Roadmap />
        <div style={{'margin': '150px'}}></div>
        <Socials />
        <div style={{'margin': '150px'}}></div>
      </div>

    return <Page content={content} />;
  }
}

export default withStyles(styles)(Landing);
