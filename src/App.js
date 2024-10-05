
import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
import Card from "./components/Card/Card"
import Testimonial from "./components/Testimonial/Testimonial"
import PlaceholderIcon from "./assets/placeholder-icon.png"

export default function App() {
  return (
    <main>
      <h1>Components library</h1>
      <Badges />
      <Banners />
      <Card 
        icon={PlaceholderIcon}
        title="Hover over me"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Testimonial 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed placerat purus. Donec in justo eu quam pulvinar malesuada. Nullam nec risus hendrerit, egestas lacus sit amet, rutrum risus. Cras sit amet sapien sit amet justo congue scelerisque. Donec pharetra ante eget dui gravida, vitae pellentesque quam eleifend."
        signature="Jane Doe"
        company="Lorem ipsum, CTO"
      />
    </main>
  )
}