"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {

  const [blogItem, setBlogItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgCounter, setImageCounter] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setBlogItem(json);
        setLoading(false);
      })
  }, [])

  const handleNextImage = () => {
    if (imgCounter == 2) {
      return;
    } else {
      setImgCounter(imgCounter + 1);
    }
  };

  const handlePrevImage = () => {
    if (imgCounter == 0) {
      return;
    } else {
      setImgCounter(imgCounter - 1);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <div>please wait loading...</div>}
      {blogItem && (
        <div>
          <div className={styles.top}>
            <div className={styles.info}>
              <h1 className={styles.title}>{blogItem.title}</h1>
              <p className={styles.desc}>{blogItem.description}</p>
              <div className={styles.author}>
                <Image
                  src={blogItem.images[0]}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>Test Testidze</span>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={blogItem.images[imgCounter]}
                alt=""
                fill={true}
                className={styles.image}
              />
              <button
                onClick={() => {
                  setImageCounter((counter) => counter + 1)
                }}
                className={`${styles.imgButton} ${styles.nextButton}`}>next</button>
              <button
                onClick={() => {
                  setImageCounter((counter) => counter - 1)
                }}
                className={`${styles.imgButton} ${styles.prevButton}`}>prev</button>
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>{blogItem.price}$</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default BlogPost;