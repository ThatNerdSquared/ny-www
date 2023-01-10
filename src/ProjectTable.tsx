import ProjectCard from "./ProjectCard"
import { projects } from "./projects"
import "./widget.css"

function ProjectTable() {
    return (
        <div>
            <div className="project-pane">
                <h1>projects</h1>
            </div>
            <div>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectTable