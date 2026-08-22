interface PhoneFrameProps {
  base: string;          // имя файла без расширения в assets/screens
  alt: string;
  eager?: boolean;
  className?: string;
}

/** Лёгкая CSS-рамка телефона вместо тяжёлого PNG-мокапа. */
export const PhoneFrame = ({ base, alt, eager = false, className = "" }: PhoneFrameProps) => (
  <div className={`phone-frame ${className}`}>
    <picture>
      <source type="image/webp" srcSet={new URL(`../assets/screens/${base}.webp`, import.meta.url).href} />
      <img
        src={new URL(`../assets/screens/${base}.jpg`, import.meta.url).href}
        alt={alt}
        width={960}
        height={1946}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        {...(eager ? { fetchPriority: "high" as const } : {})}
      />
    </picture>
  </div>
);
