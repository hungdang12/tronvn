"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export default function Page3() {
  const router = useRouter();
  const audioRef1 = useRef<HTMLAudioElement>(null);
  const [audio1Played, setAudio1Played] = useState(false);

  useEffect(() => {
    if (audioRef1.current && !audio1Played) {
      audioRef1.current.volume = 0.5; // Chỉnh âm lượng Voice 1
      audioRef1.current.play().catch((err) =>
        console.log("Autoplay bị chặn:", err)
      );
    }
  }, [audio1Played]);

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
      {/* Hiệu ứng pháo hoa */}
      <h1 className={styles.centerText}>🌹 8/3 Zui zẻ 🌹</h1>

      {/* Ảnh giữa màn hình */}
      <div className={styles.centerImages}>
        <img src="/tung.png" alt="Tung" className={styles.centerImage} />
        <img src="/huy.png" alt="Huy" className={styles.centerImage} />
      </div>

      {/* Ảnh hai bên phía dưới */}
      <div className={styles.bottomImages}>
        <div className={styles.leftImages}>
          <img src="/hung.png" alt="Hung" />
          <img src="/khanh.png" alt="Khanh" />
        </div>

        <div className={styles.rightImages}>
          <img src="/tuan.png" alt="Tuan" />
          <img src="/son.png" alt="Son" />
          <img src="/da.png" alt="Da" />
        </div>
      </div>

      <audio
        ref={audioRef1}
        src="/4.mp3"
        autoPlay
        hidden
        onEnded={() => setAudio1Played(true)} // Khi phát xong, ngăn không phát lại
      />

      <button className={styles.nextButton} onClick={() => router.push("/")}>
        Next →
      </button>
    </div>
  );
}
