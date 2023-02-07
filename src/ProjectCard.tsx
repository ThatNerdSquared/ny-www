import { Project } from "./types"
import pcardCss from "./ProjectCard.module.css"

function ProjectCard(props: {
    project: Project
}) {
    return (
        <div className={pcardCss.projectcard}>
            <div className={pcardCss.projectcardWrapper} key={props.project.id}>
                <div>
                    <img
                        className={pcardCss.projectIcon}
                        src={props.project.icon}
                    />
                </div>
                <div className={pcardCss.projectMetadata}>
                    <div className={pcardCss.projectTitle}>
                        <h3 className={pcardCss.projectText}>
                            {props.project.name}
                        </h3>
                        <props.project.status />
                    </div>
                    <p className={pcardCss.projectText}>
                        {props.project.description}
                    </p>
                    <div className={pcardCss.projectTagGrid}>
                        {props.project.tags.map((tag) => (
                            <div className={pcardCss.projectTag} key={tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={pcardCss.linksPane}>
                {props.project.links.map((item) => (
                    <a
                        key={item.url}
                        href={item.url}
                        target="_blank"
                    >
                        <img src={item.displayImg} title={item.hoverText}/>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard