"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  }, [url]);

  return (
    <div>
      <button
        onClick={() => {
          setUrl("https://jsonplaceholder.typicode.com/posts");
        }}
      >
        პირველი
      </button>

      <button
        onClick={() => {
          setUrl(" https://api.escuelajs.co/api/v1/products");
        }}
      >
        მეორე
      </button>
      <Link href={"/dashBoard/crud"}>Go to crud operations</Link>
    </div>
  );
}

export default Dashboard;