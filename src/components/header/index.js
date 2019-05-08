import PropTypes from 'prop-types';
import React from 'react';
import Styles from './header.module.css';
import Logo from '../logo';
import Nav from '../nav';
import Media from 'react-media';
import { slide as Menu } from 'react-burger-menu'
import { runInThisContext } from 'vm';

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '26px',
      height: '20px',
      right: '20px',
      top: '20px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '20px'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#fff',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      color: '#fff',
      textDecoration: 'none',
      margin: '20px 0px',
   },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false,
            siteTitle: props.siteTitle,
        }
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen});
    }

    closeMenu() {
        this.setState({menuOpen: false});
    }

    toggleMenu() {
        this.setState(state => ({menuOpen: !state.isOpen}));
    }

    render () {
        return (
            <header className={Styles.header}>
                <Logo siteTitle={this.state.siteTitle} />
                <Media query="(max-width: 600px)">
                    {matches => 
                        matches ? (
                            <Menu 
                                isOpen={this.state.menuOpen}
                                styles={styles}
                                onStateChange={(state) => this.handleStateChange(state)}    
                            >
                                    
                                <a onClick={() => this.closeMenu()} className="menu-item" href="#whatWeDo">What we do</a>
                                <a onClick={() => this.closeMenu()} className="menu-item" href="#whoWeAre">Who we are</a>
                                <a onClick={() => this.closeMenu()} className="menu-item" href="#letsTalk">Lets talk</a>
                            </Menu>
                        ) : (
                            <Nav />
                        )
                    }
                </Media>
            </header>
        );
    }
};

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header;
