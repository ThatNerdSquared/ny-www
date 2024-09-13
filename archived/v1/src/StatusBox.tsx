import sbCss from "./StatusBox.module.css"

export const ActiveStatus = () => {
    return (
        <div className={`${sbCss.statusbox} ${sbCss.activeBgColour}`}>
            <div className={`${sbCss.circle} ${sbCss.activeFgColour}`} />
            <p className={`${sbCss.activeFgText}`}>Active</p>
        </div>
    )
}

export const DormantStatus = () => {
    return (
        <div className={`${sbCss.statusbox} ${sbCss.dormantBgColour}`}>
            <div className={`${sbCss.circle} ${sbCss.dormantFgColour}`} />
            <p className={`${sbCss.dormantFgText}`}>Dormant</p>
        </div>
    )
}