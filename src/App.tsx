
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { TurismoSection } from "./components/TurismoSection"
import { VideosSection } from "./components/VideosSection"
import { VisitaSection } from "./components/VisitaSection"

function App() {
  return (
    <div className="layout">

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Header />} />

          <Route
            path="/potrero"
            element={<TurismoSection lugar="potrero" />}
          />

          <Route
            path="/trapiche"
            element={<TurismoSection lugar="trapiche" />}
          />

          <Route
            path="/villa-merlo"
            element={<TurismoSection lugar="merlo" />}
          />

          <Route path="/ver-videos" element={<VideosSection />} />

          <Route path="/visita" element={<VisitaSection />} />

        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App