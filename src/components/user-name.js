
import React from "react"


export default class UserName extends React.Component{
    render(){
        return(
          
            <label>
                Username:
                <input placeHolder="Enter your Username" type="text" name="username" />
            </label>
    
        );
    }
}