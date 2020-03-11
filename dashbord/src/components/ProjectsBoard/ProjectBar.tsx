import React from "react"
import './../../styles/style.css'
import ProgressBar from "../common/ProgressBar";

function ProjectBar(props: any): any {
    let { project } = props;
    /*let color;

    if(project.progress == 0){
        return color = '#fff'
    }
    if(project.progress >= 99){
        return color = '#2e50a5'
    }
    else {
        return color = '159E0A'
    }*/

    return (
        <div className={'flx-container project-bar'}>
            <div className={'flx-container__elem'}>
                <span>{project.title}</span>
                <span className={'name-block'}>{project.company}</span>
            </div>
            <div>
                <span>{project.cost}</span>
            </div>
            <div>
                <span>{project.deadline}</span>
            </div>
            <div>
                <span>{project.timeSpent} hours</span>
            </div>
            <div>
                <span>{project.progress}%</span>
                <ProgressBar props={project}/>
            </div>
            <div>
                <span>{project.status}</span>
            </div>
            <div className={'flx-container__elem'}>
                <span>{project.assigned.name}</span>
                <span className={'name-block'}>{project.assigned.position}</span>
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