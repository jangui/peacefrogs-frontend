import React, { Component } from 'react';

const navStyle = {
    width: '100%',
    background: 'white',
};

const navFlex = {
    display: 'flex',
    'justify-content': 'space-between',
    'flex-direction': 'row',
    margin: '20px',
};

const logoStyle = {
    width: "100px",
    height: "50px",
}

const navLeft = {};

const navRight = {
    display: 'flex',
    'flex-direction': 'row',
};

const navRightItem = {

};

const navButton = {};

const navMintButton = {};

class Navbar extends Component {
    render() {
        return (
          <nav style={navStyle}>
            <div style={navFlex}>
              <div style={navLeft}>
                <img
                  style={logoStyle}
                  src={process.env.PUBLIC_URL + '/img/logo.png'}
                  alt="Logo"
                />
              </div>
              <div style={navRight}>
                <button style={navButton}>About</button>
                <button style={navButton}>Mission</button>
                <button style={navButton}>Roadmap</button>
                <button style={navMintButton}>Mint</button>
              </div>
            </div>
          </nav>
        );
    }

}

export default Navbar;
