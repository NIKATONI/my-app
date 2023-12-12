import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

export default function Category({ params }) {

  const data = [

    {
      title: "Creative Portfolio",
      desc: "skjfhsocfe",
      img: "https://images.pexels.com/photos/19287812/pexels-photo-19287812/free-photo-of-black-and-white-photo-of-a-cow-laying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Creative Portfolio",
      desc: "skjfhsocfe",
      img: "https://images.pexels.com/photos/19396221/pexels-photo-19396221/free-photo-of-winters-coming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1%22,"
    },
    {
      title: "Creative Portfolio",
      desc: "skjfhsocfe",
      img: "https://images.pexels.com/photos/19396221/pexels-photo-19396221/free-photo-of-winters-coming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1%22,"
    },

  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            <Button title={"see more"} url={"/"} />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              alt="portfolio img"
              fill={true}
              src={item.img}></Image>
          </div>
        </div>
      ))}

    </div>
  );
}
