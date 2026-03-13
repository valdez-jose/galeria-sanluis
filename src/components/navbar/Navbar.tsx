
import { NavLink } from "react-router-dom"
import { useState } from "react"
import styles from "./Navbar.module.css"

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>

      <div className={styles.logo}>
        San Luis
      </div>

      <div className={`${styles.links} ${isOpen ? styles.active : ""}`}>

        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>

        <NavLink to="/potrero" onClick={() => setIsOpen(false)}>Potrero</NavLink>

        <NavLink to="/trapiche" onClick={() => setIsOpen(false)}>El Trapiche</NavLink>

        <NavLink to="/villa-merlo" onClick={() => setIsOpen(false)}>Villa Merlo</NavLink>

        <NavLink to="/ver-videos" onClick={() => setIsOpen(false)}>Videos</NavLink>

        <NavLink to="/visita" onClick={() => setIsOpen(false)}>Visita San Luis</NavLink>

      </div>

      <div
        className={styles.menu}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

    </nav>
  )
}

