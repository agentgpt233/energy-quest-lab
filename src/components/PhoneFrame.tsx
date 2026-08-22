import { useEffect, useRef, useState } from "react";

interface PhoneFrameProps {
  base: string;          // имя файла без расширения в assets/screens
  alt: string;
  eager?: boolean;
  className?: string;
}

/** Пропорция исходников v1.6.3 — под неё резервируется место, чтобы не было сдвига макета. */
const RATIO = "960 / 1946";

/**
 * Лёгкая CSS-рамка телефона вместо тяжёлого PNG-мокапа.
 * Не-eager экраны подключаются только при подходе к вьюпорту: нативный
 * loading="lazy" тянет их слишком рано и грузил бы 5 лишних картинок
 * на первом экране.
 */
export const PhoneFrame = ({ base, alt, eager = false, className = "" }: PhoneFrameProps) => {
  const holderRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(eager);

  useEffect(() => {
    if (show || !holderRef.current) return;
    if (!("IntersectionObserver" in window)) { setShow(true); return; }
    const el = holderRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setShow(true); io.disconnect(); }
      },
      { rootMargin: "80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  return (
    <div className={`phone-frame ${className}`} ref={holderRef}>
      {show ? (
        <picture>
          <source type="image/webp" srcSet={new URL(`../assets/screens/${base}.webp`, import.meta.url).href} />
          <img
            src={new URL(`../assets/screens/${base}.jpg`, import.meta.url).href}
            alt={alt}
            width={960}
            height={1946}
            decoding={eager ? "sync" : "async"}
            {...(eager ? { fetchPriority: "high" as const } : {})}
          />
        </picture>
      ) : (
        <div className="phone-frame__placeholder" style={{ aspectRatio: RATIO }} aria-hidden="true" />
      )}
    </div>
  );
};
