import React from 'react';

export default class Password extends React.Component{
    render() {
        return(
            // returns a password text field
            <label>
                Password:
                <input placeholder="Enter your Password" type="password" name="password"/>
            </label>
        );
    }
}