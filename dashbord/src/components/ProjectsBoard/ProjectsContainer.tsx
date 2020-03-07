import React from "react";
import ProjectBar from "./ProjectBar";
import getAllProjects from "../../scripts/requests/getProjects";


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
            <div >
                {this.state.projects.map((project: any) => <ProjectBar project={project} />)}
            </div>
        )
    }
}


export default ProjectsContainer