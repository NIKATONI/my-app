import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() 
{

  return (

    <div className={styles.container}>
        <div>@all rights reserved</div>
        <div className={styles.socialNewtworks}>
          <Image className={styles.icon} src="/1.png" width={25} height={25} alt="facebook"/>
          <Image className={styles.icon} src="/2.png" width={25} height={25} alt="instagram"/>
          <Image className={styles.icon} src="/3.png" width={25} height={25} alt="Picture of the author"/>
          <Image className={styles.icon} src="/4.png" width={25} height={25} alt="youtube"/>
        </div>
    </div>

  )

}