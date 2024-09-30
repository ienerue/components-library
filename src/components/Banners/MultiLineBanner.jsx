import successIcon from "../../assets/success-icon.png"
import neutralIcon from "../../assets/neutral-icon.png"
import errorIcon from "../../assets/error-icon.png"
import warningIcon from "../../assets/warning-icon.png"

export default function MultiLineBanner({status, title, text}) {
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
        <div className={`multi-line-banner ${color}`}>
            <img src={image} />
            <div>
                <p className="banner-title">{title}</p>
                <p className={`${status}-text`}>{text}</p>
            </div>
        </div>
    )
}