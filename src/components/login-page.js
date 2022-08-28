import React from "react";
import Username from './user-name';
import Password from './password';
import LoginButton from './login-button'
import Navbar from "./navbar";
export default class LoginPage extends React.Component{
    render(){
        // containts the components lsited together
        return(
            <div className="container">
                <Navbar/>
            
                <div className="container cool-border shrink">
                    
                    <h3>Log In</h3>
                    <Username/>
                    <br/>
                    <Password/>
                    <br/>
                    <LoginButton/>
                </div>
            </div>
        );
    }
}