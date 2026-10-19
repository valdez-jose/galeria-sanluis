
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./components/navbar/Navbar"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { TurismoSection } from "./components/turismoSection/TurismoSection"
import { VideosSection } from "./components/videosSection/VideosSection"
import { VisitaSection } from "./components/visitaSection/VisitaSection"

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