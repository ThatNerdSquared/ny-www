import widgetCss from "./widget.module.css"

function Intro() {
    return (
        <div>
            <div className={`${widgetCss.widget} ${widgetCss.infoWidget}`}>
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
                <p>
                    If you enjoy my work, feel free to 🫖{" "}
                    <a
                        href="https://www.buymeacoffee.com/nathanyeung"
                        target="_blank"
                    >
                        buy me some tea
                    </a> :)
                </p>
            </div>
        </div>
    )
}

export default Intro
