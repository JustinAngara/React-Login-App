import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            // gives out a navbar 
            <nav className="New-nav">
                Navigation
                <li className="nav-item">
                    <a className="nav-link">Contact</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link">Sign up</a>
                </li>
            </nav>
        );
    }
}