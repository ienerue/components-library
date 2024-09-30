import PillBadge from "./PillBadge"
import SquareBadge from "./SquareBadge"

export default function Badges() {
    return (
        <section>
            <h2>Badges</h2>
            <p>Highlight key information with customisable pill or square badges.</p>
            <div className="badges">
                <PillBadge 
                    color="gray"
                    text=""
                />
                <PillBadge 
                    color="red"
                    text=""
                />
                <PillBadge 
                    color="yellow"
                    text=""
                />
                <PillBadge 
                    color="green"
                    text=""
                />
                <PillBadge 
                    color="blue"
                    text=""
                />
                <PillBadge 
                    color="indigo"
                    text=""
                />
                <PillBadge 
                    color="purple"
                    text=""
                />
                <PillBadge 
                    color="pink"
                    text=""
                />
            </div>
            <div className="badges">
                <SquareBadge 
                    color="gray"
                    text=""
                />
                <SquareBadge 
                    color="red"
                    text=""
                />
                <SquareBadge 
                    color="yellow"
                    text=""
                />
                <SquareBadge 
                    color="green"
                    text=""
                />
                <SquareBadge 
                    color="blue"
                    text=""
                />
                <SquareBadge 
                    color="indigo"
                    text=""
                />
                <SquareBadge 
                    color="purple"
                    text=""
                />
                <SquareBadge 
                    color="pink"
                    text=""
                />
            </div>
        </section>
    )
}