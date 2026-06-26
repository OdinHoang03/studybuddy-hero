import { useMemo } from "react";

export default function Atmosphere() {
  const dust = useMemo(
    () =>
      Array.from({ length: 42 }, () => ({
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        dur: Math.random() * 16 + 14,
        delay: -Math.random() * 30,
        bottom: -(Math.random() * 25),
      })),
    []
  );

  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="fog" />
      <div className="dust">
        {dust.map((d, i) => (
          <span
            key={i}
            style={{
              left: `${d.left}%`,
              bottom: `${d.bottom}%`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              animationDuration: `${d.dur}s`,
              animationDelay: `${d.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
