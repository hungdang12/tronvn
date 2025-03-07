"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";

export default function Page1() {
  const router = useRouter();
  const audioRef1 = useRef<HTMLAudioElement>(null);
  const audioRef2 = useRef<HTMLAudioElement>(null);
  const [audio1Played, setAudio1Played] = useState(false);
  const [audio2Played, setAudio2Played] = useState(false);

  useEffect(() => {
    if (audioRef1.current && !audio1Played) {
      audioRef1.current.volume = 0.5; // 🎵 Chỉnh âm lượng Voice 1
      audioRef1.current.play().catch(err => console.log("Autoplay bị chặn:", err));
    }
    if (audioRef2.current && !audio2Played) {
      audioRef2.current.volume = 0.05; // 🎵 Chỉnh âm lượng Voice 2
      audioRef2.current.play().catch(err => console.log("Autoplay bị chặn:", err));
    }
  }, [audio1Played, audio2Played]);

  return (
    <div className={styles.container}>

      {/* Hai ảnh di chuyển vào giữa */}
      <div className={styles.imageContainer}>
        <img src="/huy.png" alt="Ảnh 1" className={styles.image} />
        <img src="/tung.png" alt="Ảnh 2" className={styles.image} />
      </div>

      {/* Ẩn audio nhưng vẫn chạy */}
      <audio
        ref={audioRef1}
        src="/1.mp3"
        autoPlay
        hidden
        onEnded={() => setAudio1Played(true)} // 🔹 Khi phát xong, ngăn không phát lại
      />
      <audio
        ref={audioRef2}
        src="/2.mp3"
        autoPlay
        hidden
        onEnded={() => setAudio2Played(true)} // 🔹 Khi phát xong, ngăn không phát lại
      />

      <button className={styles.nextButton} onClick={() => router.push("/page2")}>
        Next →
      </button>
    </div>
  );
}
