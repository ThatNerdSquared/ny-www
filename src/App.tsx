import "./App.css"
import Intro from "./Intro"
import Programming from "./Programming"
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
            <ProjectTable />
            <div className="footer">
                <p>
                    © 2021-{new Date().getFullYear()}{' '}
                    || Made with ❤️ and 🫖 by Nathan Yeung
                </p>
            </div>
        </div>
    )
}

export default App
