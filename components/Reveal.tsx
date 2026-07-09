"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      const timeout = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timeout);
    }

    if (typeof IntersectionObserver === "undefined") {
      const timeout = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -18% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  const style = {
    "--reveal-delay": `${delayMs}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
