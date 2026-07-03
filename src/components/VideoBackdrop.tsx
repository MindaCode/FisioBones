"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Video fijo detrás de toda la página. El scroll del documento completo
 * controla el tiempo del video (adelante = FF, atrás = REW), con un HUD
 * de videocasetera siempre visible.
 */
export default function VideoBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const modeRef = useRef<HTMLSpanElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    let raf = 0;
    let smooth = 0;
    let lastP = 0;

    const tick = () => {
      const video = videoRef.current;
      if (video) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = Math.min(1, Math.max(0, window.scrollY / Math.max(1, max)));

        smooth += (p - smooth) * 0.12;

        const dur = video.duration;
        if (dur && video.readyState >= 1) {
          const want = smooth * Math.max(0, dur - 0.05);
          if (Math.abs(video.currentTime - want) > 0.033) {
            video.currentTime = want;
          }
        }

        const secs = Math.floor(smooth * (dur || 10));
        if (counterRef.current) {
          counterRef.current.textContent = `SP 0:00:${String(secs).padStart(2, "0")}`;
        }
        if (modeRef.current) {
          const delta = p - lastP;
          modeRef.current.textContent =
            delta > 0.0003 ? "FF ▶▶" : delta < -0.0003 ? "◀◀ REW" : "PLAY ▶";
        }
        lastP = p;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* Capa de video + tratamiento CRT, detrás de todo */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <video
          ref={videoRef}
          src="/images/video_scrolll.mp4"
          muted
          playsInline
          preload="auto"
          className="vhs-jitter h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="vhs-scanlines absolute inset-0" />
        <div className="vhs-noise absolute inset-0 opacity-[0.06]" />
        <div className="vhs-vignette absolute inset-0" />
      </div>

      {/* HUD de videocasetera, siempre visible */}
      {!reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-[4.75rem] z-40 flex items-center justify-between px-5 font-vhs text-xl text-cream/90 sm:px-8 sm:text-2xl"
        >
          <span className="vhs-chroma flex items-center gap-2.5">
            <span className="vhs-blink h-3 w-3 rounded-full bg-[#ff3b30]" />
            REC
          </span>
          <span ref={modeRef} className="vhs-chroma">
            PLAY ▶
          </span>
          <span ref={counterRef} className="vhs-chroma tabular-nums">
            SP 0:00:00
          </span>
        </div>
      )}
    </>
  );
}
