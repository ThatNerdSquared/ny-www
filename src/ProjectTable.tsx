import ProjectCard from "./ProjectCard"
import { projects } from "./projects"
import "./widget.css"

function ProjectTable() {
    return (
        <div className="projects">
            <div className="project-pane">
                <h1>projects</h1>
            </div>
            <div>
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectTable