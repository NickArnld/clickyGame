import React from 'react';
import './styles.css';

class NavBar extends React.Component{
    state = {

    }

    render() {
        return (
            <nav className="navbar sticky-top">                
                <h4 className="nav-item navTitle">Clicky-Game</h4>
                <h4 className="nav-item">Current Score: {this.props.currentScore}</h4>
                <h4 className="nav-item">Top Score: {this.props.topScore}</h4>                
            </nav>
        )
    }
}

export default NavBar;