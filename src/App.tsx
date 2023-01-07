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
                    © 2021-{new Date().getFullYear()} —{" "}
                    Made with ❤️ and 🫖 by Nathan Yeung —{" "}
                    (
                    <a
                        href="https://github.com/ThatNerdSquared"
                        target="_blank"
                    >GitHub</a>) (
                    <a
                        href="https://buymeacoffee.com/nathanyeung"
                        target="_blank"
                    >Buy Me a Coffee</a>)
                </p>
            </div>
        </div>
    )
}

export default App
