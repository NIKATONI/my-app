import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {

  const res = await fetch("https://api.escuelajs.co/api/v1/products", {cache: "force-cache"});

  if (!res.ok) {

    throw new Error("There is no data");

  }

  return res.json();

}

async function Blog() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item.id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={item.images[0]}
              alt="Blog Image"
              width={400}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;