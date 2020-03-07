import React from "react";
import '../../styles/style.css';

class Button extends React.Component<any, any> {
    render() {
        let { text }  = this.props
        return (
            <div className={'pd-s1'}>
                <span>{ text }</span>
            </div>
        );
    }
}

export default Button