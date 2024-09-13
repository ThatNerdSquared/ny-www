import widgetCss from "./widget.module.css"

function Studies() {
    return (
        <div className={`${widgetCss.widget} ${widgetCss.infoWidget}`}>
            <p className={widgetCss.headerBracket}>[</p>
            <h1 className={widgetCss.nobr}>studies</h1>
            <p className={widgetCss.headerBracket}>]</p>
            <p>
				I'm currently a student at <strong>UBC</strong>. I also{" "}
                hold an{" "}
                <strong>IT Support certification from Google</strong>.
            </p>
        </div>
    )
}

export default Studies
