
import React from "react"


export default class UserName extends React.Component{
    render(){
        return(
          // returns a username text field
            <label>
                Username:
                <input placeholder="Enter your Username" type="text" name="username" />
            </label>
    
        );
    }
}