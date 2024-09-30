export default function PillBadge({color, text}) {
    return (
        <span className={`pill-badge ${color}`}>{text.length > 0 ? text : "example"}</span>
    )
}