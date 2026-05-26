import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Vitamins from "./components/Vitamins"
import Foods from "./components/Foods"
import Contact from "./components/Contact"
import Benefits from "./components/Benefits"
import BackgroundEffects from "./components/BackgroundEffects"

function App() {
  return (
    <div>
      <BackgroundEffects/>

      <Navbar />
      <Hero />
      <Vitamins />
      <Foods />
      <Benefits/>
      <Contact />

    </div>
  )
}

export default App