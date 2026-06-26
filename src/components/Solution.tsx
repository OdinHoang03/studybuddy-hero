const benefits = [
  {
    title: "Luôn có người hỏi bài",
    desc: "Kẹt chỗ nào, nhắn nhóm — có bạn cùng môn giải đáp ngay trong vài phút.",
  },
  {
    title: "Học đều vì có người chờ",
    desc: "Lịch học chung khiến bạn khó bỏ buổi hơn hẳn khi học một mình.",
  },
  {
    title: "Đúng người, đúng môn",
    desc: "Được ghép với bạn cùng khối, cùng mục tiêu — không còn lạc lõng.",
  },
];

export default function Solution() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden py-32">
      <span className="bgword" data-parallax>
        together
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <h2
          data-reveal
          data-delay="0.05"
          className="max-w-4xl text-5xl leading-[1.02] tracking-[-1.5px] sm:text-6xl md:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Có bạn học cùng,{" "}
          <em className="not-italic text-muted-foreground">mọi thứ khác hẳn.</em>
        </h2>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} data-reveal data-delay={(i * 0.1).toString()}>
              <div className="mb-5 h-px w-12 bg-foreground/40" />
              <h3
                className="mb-4 text-2xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {b.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
