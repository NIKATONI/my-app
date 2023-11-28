import React from 'react'
import styles from './navBar.module.css'
import Link from "next/link"

export default function Navbar() 
{

  const links = [
    {
      id:1,
      title:"Home",
      url:"/"
    },
    {
      id:2,
      title:"Portfolio",
      url:"/portFolio"
    },
    {
      id:3,
      title:"Blog",
      url:"/blog"
    },
    {
      id:4,
      title:"About",
      url:"/about"
    },
    {
      id:5,
      title:"Contact",
      url:"/contact"
    },
    {
      id:6,
      title:"DashBoard",
      url:"/dashBoard"
    }
  ]

  return (
    <div className={styles.container}>
        <div>Main</div>
        <div>
          {links.map((link) => (

              <div><Link href={link.url}>{link.title}</Link></div>

            ))}
        </div>
    </div>

  )

}