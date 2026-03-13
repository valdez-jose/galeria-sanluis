
import styles from "./TurismoSection.module.css"

interface TurismoSectionProps {
  lugar: "potrero" | "trapiche" | "merlo"
}

interface Destino {
  titulo: string
  descripcion: string
  imagen: string
}

const destinos: Record<string, Destino> = {
  potrero: {
    titulo: "Potrero de los Funes",
    descripcion: "Uno de los destinos más visitados de San Luis, famoso por su lago y su circuito internacional.",
    imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/c3/89/5e/hotel-potrero-de-los.jpg?w=900&h=500&s=1"
  },

  trapiche: {
    titulo: "El Trapiche",
    descripcion: "Un hermoso lugar rodeado de ríos y naturaleza ideal para descansar.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFKpNvhW1ZNBHhu7yjHzi1cZHRpes2-tRWg&s"
  },

  merlo: {
    titulo: "Villa de Merlo",
    descripcion: "Uno de los microclimas más famosos del mundo y un destino turístico imperdible.",
    imagen: "https://agenciasanluis.com/wp-content/uploads/2024/01/filo-630x381.jpg"
  }
}

export function TurismoSection({ lugar }: TurismoSectionProps) {

  const destino = destinos[lugar]

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Destino Turístico</h2>

    <div className={styles.card}>

      <img src={destino.imagen} alt={destino.titulo} />

      <div className={styles.text}>

        <h3>{destino.titulo}</h3>

        <p>{destino.descripcion} 
        Este destino turístico de la provincia de San Luis es ideal para disfrutar de la naturaleza,
        realizar caminatas, descansar junto a ríos cristalinos y descubrir paisajes únicos que
        atraen visitantes durante todo el año.</p>

      </div>

    </div>
    </section>
  )
}
