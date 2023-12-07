import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {

  const socials = [
    {
      src: "/1.png",
      alt: "facebook"
    },
    {
      src: "/2.png",
      alt: "instagram"
    },
    {
      src: "/3.png",
      alt: "Picture of the author"
    },
    {
      src: "/4.png",
      alt: "youtube"
    }
  ]

  return (

    <div className={styles.container}>
      <div>@all rights reserved</div>
      <div className={styles.socialNewtworks}>
        {socials.map((item) => (

          <Image className={styles.icon} src={item.src} width={25} height={25} alt={item.alt} />

        ))}
      </div>
    </div>

  )

}