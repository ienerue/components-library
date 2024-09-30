import successIcon from "../../assets/success-icon.png"
import neutralIcon from "../../assets/neutral-icon.png"
import errorIcon from "../../assets/error-icon.png"
import warningIcon from "../../assets/warning-icon.png"

export default function SingleLineBanner({status, title}) {
    let color
    let image
    if (status === "success") {
        color = "green"
        image = successIcon
    } else if (status === "warning") {
        color = "yellow"
        image = warningIcon
    } else if (status === "error") {
        color = "red"
        image = errorIcon
    } else if (status === "neutral") {
        color = "blue"
        image = neutralIcon
    }
    return (
        <div className={`single-line-banner ${color}`}>
            <img src={image} />
            <p className="banner-title">{title}</p>
        </div>
    )
}