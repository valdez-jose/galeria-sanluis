
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>

      <h3>Turismo San Luis</h3>

      <p>
        Descubrí paisajes únicos, cultura y naturaleza en la provincia de San Luis.
      </p>

      <div className={styles.redes}>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
      </div>

      <p className={styles.copy}>
        © 2026 Hecho por José Valdez con React y TypeScript.
      </p>

    </footer>
  )
}

