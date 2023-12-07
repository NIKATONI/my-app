import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

export default function PortFolio() {

  return (
    <div className={styles.container}>
      <h1 className={styles.sectTitle}>Choose Gallery</h1>
      <div className={styles.items}>
        <Link href={"/portFolio/illustrations"} className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href={"/portFolio/webSites"} className={styles.item}>
          <span className={styles.title}>WebSites</span>
        </Link>
        <Link href={"/portFolio/applications"} className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )

}