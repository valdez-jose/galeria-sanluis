
import styles from "./VideosSection.module.css"

interface Video {
  id: number
  titulo: string
  youtubeId: string
}

const videosTurismo: Video[] = [
  { id: 1, titulo: "12 lugares turísticos de San Luis", youtubeId: "2umxrOPs_s0" },
  { id: 2, titulo: "Villa de Merlo", youtubeId: "YcdEQ4JStAA" },
  { id: 3, titulo: "Potrero y El Trapiche", youtubeId: "GpXi0iyfo04" }
]

export function VideosSection() {

  return (
    <section className={styles.videos}>

      <h2>Videos de San Luis</h2>

      <div className={styles.container}>

        {videosTurismo.map(video => (

          <div key={video.id} className={styles.card}>

            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >

              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={video.titulo}
              />

            </a>

            <h3>{video.titulo}</h3>

          </div>

        ))}

      </div>

    </section>
  )
}

