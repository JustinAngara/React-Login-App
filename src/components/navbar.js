import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav class="New-nav">
                Navigation
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#">Sign up</a>
                </li>
            </nav>
        );
    }
}