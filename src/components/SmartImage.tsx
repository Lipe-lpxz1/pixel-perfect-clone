import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  
  placeholderClassName?: string;
  
  fadeMs?: number;
};

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

  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.complete && el.naturalWidth > 0) {
      reveal(el);
    }
    
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
