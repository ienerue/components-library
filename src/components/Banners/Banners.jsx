import MultiLineBanner from "./MultiLineBanner"
import SingleLineBanner from "./SingleLineBanner"

export default function Banners() {
    return (
        <section>
            <h2>Banners</h2>
            <p>Draw attention to important messages with eye-catching multi and single-line banners.</p>
            <div className="banners">
                <MultiLineBanner
                    status="success" 
                    title="Congratulations!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <MultiLineBanner
                    status="warning" 
                    title="Attention"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <MultiLineBanner
                    status="error" 
                    title="There is problem with your application"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <MultiLineBanner
                    status="neutral" 
                    title="Update available"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </div>
            <div className="banners">
                <SingleLineBanner 
                    status="success" 
                    title="Congratulations!"
                
                />
                <SingleLineBanner 
                    status="warning" 
                    title="Attention"
                
                />
                <SingleLineBanner 
                    status="error" 
                    title="There is problem with your application"
                
                />
                <SingleLineBanner 
                    status="neutral" 
                    title="Update available"
                
                />
            </div>
        </section>
    )
}