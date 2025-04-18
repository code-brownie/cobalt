import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './sections/Profile'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Interests from './sections/Interests'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Interests />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}