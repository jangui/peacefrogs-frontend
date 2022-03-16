import React, { Component } from 'react';
import Page from "./Page"

class Landing extends Component {
  render() {
    let content =
      <>
        <h1> hello world </h1>
      </>
    return (
      <>
      <Page content={content} />
      </>
    );
  }
}

export default Landing;
