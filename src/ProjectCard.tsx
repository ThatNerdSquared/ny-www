import { Project, STATUSES } from "./types"
import "./ProjectCard.css"

function ProjectCard(props: {
    project: Project
}) {
    return (
        <div className="projectcard-wrapper">
            <img
                className="project-icon"
                src={props.project.icon}
            />
            <div className="project-metadata">
                <div className="project-title">
                    <h3 className="project-text">{props.project.name}</h3>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "auto auto",
                        columnGap: "0.5em",
                        borderRadius: "5px",
                        backgroundColor: STATUSES[props.project.status].background,
                        padding: "0.3em",
                        alignItems: "center",
                    }}>
                        <div style={{
                            borderRadius: "50%",
                            backgroundColor: STATUSES[props.project.status].foreground,
                            height: "0.8em",
                            width: "0.8em",
                            display: "inline-block",
                            margin: "0"
                        }}/>
                        <p style={{
                            color: STATUSES[props.project.status].foreground,
                            margin: "0"
                        }}>{props.project.status}</p>
                    </div>
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