const items = [
  "Kẹt một bài Toán cả buổi tối, không biết hỏi ai.",
  "Mở sách ra là buồn ngủ — học 20 phút lại cầm điện thoại.",
  "Lên kế hoạch ôn thi rất hăng, ba ngày sau là bỏ.",
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative flex min-h-screen items-center overflow-hidden py-32"
    >
      <span className="bgword" data-parallax>
        alone
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <h2
          data-reveal
          data-delay="0.05"
          className="max-w-4xl text-5xl leading-[1.02] tracking-[-1.5px] sm:text-6xl md:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Ôn thi một mình{" "}
          <em className="not-italic text-muted-foreground">rất dễ nản.</em>
        </h2>

        <div className="mt-16 max-w-3xl">
          {items.map((t, i) => (
            <div
              key={i}
              data-reveal
              data-delay={(i * 0.08).toString()}
              className="flex items-baseline gap-8 border-t border-white/10 py-7"
            >
              <span
                className="text-2xl text-muted-foreground"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xl leading-relaxed text-foreground/90">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
