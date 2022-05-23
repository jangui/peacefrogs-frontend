import React, { Component } from 'react';
import Navbar from './Navbar';

class Page extends Component {
  render() {
    return (
      <>
        <Navbar />
        {this.props.content}
      </>
    );
  }
}

export default Page;
