import React from 'react';

export default class Password extends React.Component{
    render() {
        return(
            <label>
                Password:
                <input placeHolder="Enter your Password" type="password" name="password"/>
            </label>
        );
    }
}