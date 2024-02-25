import ProjectCard from "./ProjectCard"
import { projects } from "./projects"
import widgetCss from "./widget.module.css"

function ProjectTable() {
    return (
        <div>
            <div className={widgetCss.projectPane}>
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