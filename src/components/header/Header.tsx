
import { useState, useEffect } from "react"
import styles from "./Header.module.css"

import { sanluis1, sanluis2, sanluis3, sanluis4 } from "../../assets/imagenes"

export function Header() {

  const images = [sanluis1, sanluis2, sanluis3, sanluis4]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }
  {/* useEffect*/}

useEffect(() => {

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, 4000)

  return () => clearInterval(interval)

}, [images.length])

  return (
    <header className={styles.header}>

      <div className={styles.slider}>

        <img
          src={images[current]}
          alt="San Luis Capital"
          className={styles.image}
        />

        <button className={styles.prev} onClick={prevSlide}>
          ❮
        </button>

        <button className={styles.next} onClick={nextSlide}>
          ❯
        </button>

        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === current ? styles.active : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>

      <div className={styles.text}>
        <h1>San Luis Capital</h1>
        <p>
          Descubra paisajes increíbles y destinos turísticos únicos.
        </p>
      </div>

    </header>
  )
}