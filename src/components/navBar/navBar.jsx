import React from 'react'
import styles from './navBar.module.css'

export default function Navbar() 
{

  const links = [
    {
      id:1,
      title:"Home",
      link:"#"
    },
    {
      id:2,
      title:"Portfolio",
      link:"#"
    },
    {
      id:3,
      title:"Blog",
      link:"#"
    },
    {
      id:4,
      title:"About",
      link:"#"
    },
    {
      id:5,
      title:"Contact",
      link:"#"
    },
    {
      id:6,
      title:"DashBoard",
      link:"#"
    }
  ]

  return (

    <div className={styles.container}>
        <div>Main</div>
        <div>
          {links.map((link) => (

              <div><a href={links.link}>{link.title}</a></div>

            ))}
        </div>
    </div>

  )

}