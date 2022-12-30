import Draggable from "react-draggable"
import "./widget.css"

function Intro() {
    return (
        <Draggable>
            <div className="widget info-widget">
                <h1>nathan yeung.</h1>
                <p>Hey there! 👋</p>
                <p>
                    I'm a student, programmer, and writer
                    on the west coast of Canada.
                    I have a wide range of interests and ideas -
                    feel free to scroll around!
                    {/* My main areas of interest include spatial interfaces,
                    tools for thought, ethics,
                    Canadian, student, TS/Python
                    developer, aspiring bioinformaticist, and professional
                    nerd.
                    Also interested in poetry, science communication,
                    bioinformatics, music, and watches. */}
                </p>
            </div>
        </Draggable>
    )
}

export default Intro