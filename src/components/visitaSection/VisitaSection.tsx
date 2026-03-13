
import styles from "./VisitaSection.module.css"

export function VisitaSection() {

  return (
    <section className={styles.visita}>

      <img
        src="https://agenciasanluis.com/wp-content/uploads/2017/10/Collage-turismo.jpg"
        alt="San Luis"
        className={styles.imagen}
      />

      <div className={styles.overlay}>
        <h1>Visita San Luis</h1>

        <p>
          Descubrí paisajes increíbles, cultura y destinos únicos.
          ¡Te esperamos!
        </p>
      </div>

    </section>
  )
}
