import React from "react";
import Filler from "./ProgressFiller";

class ProgressBar extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

    }


    render(){
        let project = this.props
        return(
        <div className="progress-bar">
            <Filler percentage={project.props} />
        </div>
        )
    }
}


export default ProgressBar