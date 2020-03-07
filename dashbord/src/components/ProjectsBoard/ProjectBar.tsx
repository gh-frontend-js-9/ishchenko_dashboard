import React from "react"
import './../../styles/style.css'
import ProgressBar from "../common/ProgressBar";

function ProjectBar(props: any): any {
    let { project } = props;

    return (
        <div className={'flx-container'}>
            <div>
                <span>{project.title}</span>
                <span>{project.company}</span>
            </div>
            <div>
                <span>{project.cost}</span>
            </div>
            <div>
                <span>{project.deadline}</span>
            </div>
            <div>
                <span>{project.timeSpent}</span>
            </div>
            <div>
                {/*<span>{project.progress}</span>
                <progress max={100} value={project.progress} ></progress>*/}
            </div>
            <div>
                <span>{project.status}</span>
            </div>
            <div>
                {/*<span>{project.assigned.phone}</span>
                <span>{project.assigned.position}</span>*/}
            </div>
            <div>
                <span>
                    <i>+</i>
                </span>
            </div>
        </div>
    );
}


export default ProjectBar