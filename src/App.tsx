import "./App.css"
import Intro from "./Intro"
import Programming from "./Programming"
import ProjectCard from "./ProjectCard"
import { projects } from "./projects"
import ProjectTable from "./ProjectTable"
import Studies from "./Studies"
import Writing from "./Writing"

function App() {
    return (
        <div className="App">
            <div className="app-content">
                <div className="left-col">
                    <Intro />
                    <Writing />
                </div>
                <div className="right-col">
                    <Programming />
                    <Studies />
                </div>
            </div>
            {/* <ProjectTable /> */}
            {/* <div className="projects">
                {projects.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </div> */}
        </div>
    )
}

export default App
