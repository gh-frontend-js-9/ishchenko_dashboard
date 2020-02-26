import React from "react";
import Filler from "./ProgressFiller";

class ProgressBar extends React.Component<any, any>{

    render(){
        return(
            <div className="progress-bar">
                <Filler percentage={this.props} />
            </div>
        )
    }
}

export default ProgressBar