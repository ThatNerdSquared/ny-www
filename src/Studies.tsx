import Draggable from "react-draggable"
import "./widget.css"

function Studies() {
    return (
        <Draggable>
            <div className="widget info-widget">
                <p className="header-bracket">[</p>
                <h1 className="nobr">studies</h1>
                <p className="header-bracket">]</p>
                <p>
                    I'm currently part of <strong>UTP '23</strong>, as well
                    as the <strong>Future Science Leaders: Innovate{" "}
                    (Yr 2)</strong> program. Previously, I was a part of{" "}
                    the <strong>FSL: Discover (Yr 1)</strong> program. I{" "}
                    also hold an <strong>IT Support certification from{" "}
                    Google</strong>.
                </p>
            </div>
        </Draggable>
    )
}

export default Studies