import React from "react";

class Input extends React.Component<any, any>{

    render(){
        const { type, placeholder, name, value, handleChange } = this.props

        return (
                <input type={`${type}`}
                       placeholder={`${placeholder}`}
                       name ={`${name}`}
                       value={`${value}`}
                       onChange={handleChange}
                />
        )
    }

}

export default Input