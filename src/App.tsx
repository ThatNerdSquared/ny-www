import "./App.css"
import Intro from "./Intro"
import Programming from "./Programming"
import ProjectTable from "./ProjectTable"
import Studies from "./Studies"
import Writing from "./Writing"

function App() {
    return (
        <div className="App">
            <Intro />
            <Programming />
            <Studies />
            <Writing />
            <ProjectTable />
        </div>
    )
}

export default App
