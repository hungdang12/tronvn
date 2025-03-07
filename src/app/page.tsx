"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./page.module.css"; // Import CSS module

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const numStars = 100;
    const body = document.body;

    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.classList.add(styles.star); // Dùng class từ CSS module
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      body.appendChild(star);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.centerText}>✨ Ngày xửa, ngày xưa ✨</h1>
      <button className={styles.nextButton} onClick={() => router.push("/page1")}>
        Next →
      </button>
    </div>
  );
}
