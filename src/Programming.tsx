import widgetCss from "./widget.module.css"

function Programming() {
    return (
        <div>
            <div className={`${widgetCss.widget} ${widgetCss.infoWidget}`}>
                <p className={widgetCss.headerBracket}>[</p>
                <h1 className={widgetCss.nobr}>programming</h1>
                <p className={widgetCss.headerBracket}>]</p>
                <p>
                    I mainly work with TypeScript, Python, and C++, as well as
                    technologies such as React, PySide, Flask, PostgreSQL, and
                    Cloudflare Workers. I've worked with teams of engineers and
                    built projects with over eight thousand users.
                </p>
                <p>
                    My work mainly comprises of tools that expand the way we
                    think, often utilizing spatial interfaces. I'm also
                    interested in computational biology and bioinformatics, and
                    am shifting my work into that space over time as I hope to
                    pursue it professionally.
                </p>
            </div>
        </div>
    )
}

export default Programming
