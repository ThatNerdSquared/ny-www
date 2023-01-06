import { Project } from "./types"
import "./ProjectCard.css"

function ProjectCard(props: {
    project: Project
}) {
    return (
        <div className="projectcard-wrapper" key={props.project.id}>
            <div>
                <img
                    className="project-icon"
                    src={props.project.icon}
                />
                {props.project.links.map((item) => (
                    <>
                        <a
                            href={item.url}
                            target="_blank"
                        >
                            <img src={item.displayImg}/>
                        </a><br/>
                    </>
                ))}
            </div>
            <div className="project-metadata">
                <div className="project-title">
                    <h3 className="project-text">{props.project.name}</h3>
                    <props.project.status />
                </div>
                <p className="project-text">{props.project.description}</p>
                <div className="project-tag-grid">
                    {props.project.tags.map((tag) => (
                        <div className="project-tag">{tag}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard