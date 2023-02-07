import widgetCss from "./widget.module.css"

function Studies() {
    return (
        <div className={`${widgetCss.widget} ${widgetCss.infoWidget}`}>
            <p className={widgetCss.headerBracket}>[</p>
            <h1 className={widgetCss.nobr}>studies</h1>
            <p className={widgetCss.headerBracket}>]</p>
            <p>
                I'm currently part of <strong>UTP '23</strong>, as well
                as the <strong>Future Science Leaders: Innovate{" "}
                (Yr 2)</strong> program. Previously, I was a part of{" "}
                the <strong>FSL: Discover (Yr 1)</strong> program. I{" "}
                also hold an <strong>IT Support certification from{" "}
                Google</strong>.
            </p>
        </div>
    )
}

export default Studies