import React from "react";
import './../../styles/style.css';

class Button extends React.Component {
    render() {
        const text  = this.props.children;
        return (
            <div>
                <span>{ text }</span>
            </div>
        );
    }
}

export default Button