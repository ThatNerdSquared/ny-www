import "./StatusBox.css"

export const ActiveStatus = () => {
    return (
        <div className="statusbox active-bg-colour">
            <div className="circle active-fg-colour" />
            <p className="active-fg-text">Active</p>
        </div>
    )
}

export const DormantStatus = () => {
    return (
        <div className="statusbox dormant-bg-colour">
            <div className="circle dormant-fg-colour" />
            <p className="dormant-fg-text">Dormant</p>
        </div>
    )
}