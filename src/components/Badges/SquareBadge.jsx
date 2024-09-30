export default function SquareBadge({color, text}) {
    return (
        <span className={`square-badge ${color}`}>{text.length > 0 ? text : "example"}</span>
    )
}