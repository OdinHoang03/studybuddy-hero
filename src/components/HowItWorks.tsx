const steps = [
  {
    n: "1",
    title: "Chọn môn & mục tiêu",
    desc: "Cho biết bạn đang ôn môn gì và muốn đạt mức nào.",
  },
  {
    n: "2",
    title: "Được ghép nhóm",
    desc: "Nhận ngay 3–5 bạn học cùng môn, cùng trình độ.",
  },
  {
    n: "3",
    title: "Học chung theo lịch",
    desc: "Vào phòng học online, hỏi bài và nhắc nhau mỗi ngày.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-32">
      <span className="bgword" data-parallax>
        60s
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <h2
          data-reveal
          data-delay="0.05"
          className="max-w-4xl text-5xl leading-[1.02] tracking-[-1.5px] sm:text-6xl md:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Bắt đầu trong{" "}
          <em className="not-italic text-muted-foreground">60 giây.</em>
        </h2>

        <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} data-reveal data-delay={(i * 0.1).toString()}>
              <div
                className="mb-6 text-7xl leading-none text-foreground/15 md:text-8xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.n}
              </div>
              <h3
                className="mb-3 text-2xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
