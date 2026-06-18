import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Tailwind class for background placeholder while loading. */
  placeholderClassName?: string;
  /** Duration of the fade-in (ms). */
  fadeMs?: number;
};

/**
 * Drop-in <img> replacement that prevents the partial-load "flash".
 *
 * - starts at opacity-0 over a solid placeholder color
 * - on load, calls img.decode() (when available), then fades in
 * - container size comes from width/height/aspect classes already on the img
 */
export function SmartImage({
  placeholderClassName = "bg-brand-muted",
  fadeMs = 350,
  className = "",
  loading = "lazy",
  decoding = "async",
  onLoad,
  style,
  ...rest
}: SmartImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  // If the image is already cached/complete on mount, reveal immediately.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.complete && el.naturalWidth > 0) {
      reveal(el);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reveal = (el: HTMLImageElement) => {
    const done = () => setLoaded(true);
    if (typeof el.decode === "function") {
      el.decode().then(done).catch(done);
    } else {
      done();
    }
  };

  return (
    <img
      ref={ref}
      {...rest}
      loading={loading}
      decoding={decoding}
      onLoad={(e) => {
        reveal(e.currentTarget);
        onLoad?.(e);
      }}
      className={`${placeholderClassName} ${className}`}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: `opacity ${fadeMs}ms ease-out`,
      }}
    />
  );
}
