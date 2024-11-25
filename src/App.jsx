import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Experience from "./components/Experience/Experience"
import Skill from "./components/Skill/Skill"
import Contact from "./components/Contact/contact"
import About from "./components/About/About"

function App() {

  return (
    <div className="h-screen w-full font-inter overflow-x-hidden scroll-smooth ">
      <Navbar />
      <Home />
      <About/>
      <Experience />
      <Skill />
      <Contact />
    </div>
  )
}

export default App
