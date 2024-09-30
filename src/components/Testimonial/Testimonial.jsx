import quote from "../../assets/quote-icon.png"

export default function Testimonial({text, signature, company}) {
    return (
        <section>
            <h2>Testimonials</h2>
            <p>Showcase user feedback and reviews with elegantly designed testimonial template.</p>
            <div className="testimonial">
                <img src={quote} />
                <p className="testimonial-text">{text}</p>
                <p className="testimonial-signature">{signature}</p>
                <p className="testimonial-company">{company}</p>
            </div>
        </section>
    )
}