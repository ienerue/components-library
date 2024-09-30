export default function Card({icon, title, text}) {
    return (
        <section>
            <h2>Cards</h2>
            <p className="card-section-text">Present content in visually appealing and organized manner with a card template.</p>
            <div className="card">
                <img src={icon} className="card-icon" />
                <h3  className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
            </div>
        </section>
    )
}