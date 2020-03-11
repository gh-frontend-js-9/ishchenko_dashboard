import React from "react";
import ProjectBar from "./ProjectBar";
import getAllProjects from "../../scripts/requests/getProjects";
import './../../styles/style.css'
import 'normalize.css'


class ProjectsContainer extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {projects: []}
    }

    componentDidMount(): void {
        getAllProjects().then((response: any) => {
            this.setState({projects: response.data})
        })
    }

    render(){
        return (
            <div className={'projects-container'}>
                <div className={'projects-container__panel'}>
                    <span>Project title</span>
                    <span>Value</span>
                    <span>Deadline</span>
                    <span>Time spent</span>
                    <span>Progress</span>
                    <span>Status</span>
                    <span>Assigned to</span>
                </div>
                {this.state.projects.map((project: any) => <ProjectBar project={project} />)}
            </div>
        )
    }
}


export default ProjectsContainer