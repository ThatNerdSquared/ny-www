import ProjectCard from "./ProjectCard"
import { projects } from "./projects"
import "./widget.css"

function ProjectTable() {
    return (
        <div className="widget projecttable-widget">
            <p className="header-bracket">[</p>
            <h1 className="nobr">projects</h1>
            <p className="header-bracket">]</p>
            <div className="project-list">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectTable