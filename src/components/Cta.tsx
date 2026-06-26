import { Button } from "@/components/ui/button";

const stats = [
  { big: "2.400+", label: "học sinh đang học cùng nhau" },
  { big: "87%", label: "học đều hơn sau 2 tuần" },
  { big: "4.8★", label: "đánh giá trên CH Play" },
];

export default function Cta() {
  return (
    <section
      id="cta"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-32 text-center"
    >
      <span className="bgword" data-parallax>
        join
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} data-reveal data-delay={(i * 0.08).toString()}>
              <div
                className="text-5xl md:text-6xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.big}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <blockquote
          data-reveal
          data-delay="0.1"
          className="mx-auto mt-20 max-w-3xl text-3xl italic leading-snug md:text-4xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          “Trước mình toàn học nửa chừng rồi bỏ. Có nhóm rồi tự nhiên tối nào
          cũng mở máy vì sợ các bạn chờ.”
        </blockquote>
        <p data-reveal className="mt-5 text-sm text-muted-foreground">
          — Lan Phương, lớp 12, Hà Nội
        </p>

        <h2
          data-reveal
          data-delay="0.05"
          className="mx-auto mt-24 max-w-4xl text-5xl leading-[1.02] tracking-[-1.5px] sm:text-6xl md:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Tìm bạn học của bạn —{" "}
          <em className="not-italic text-muted-foreground">ngay hôm nay.</em>
        </h2>

        <div data-reveal data-delay="0.1">
          <Button
            variant="ghost"
            className="liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03] hover:bg-transparent"
          >
            Tìm bạn học ngay
          </Button>
        </div>

        <p className="mt-24 text-xs text-muted-foreground">
          StudyBuddy® — Học cùng nhau, đi thật xa.
        </p>
      </div>
    </section>
  );
}
