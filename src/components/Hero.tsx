import { Button } from "@/components/ui/button";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden py-28">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* scrim trên cho nav dễ đọc */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background/80 to-transparent" />
      {/* hoà tan video xuống nền navy của section kế tiếp */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-b from-transparent via-background/60 to-background" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Nơi <em className="not-italic text-muted-foreground">không ai</em> học{" "}
          <em className="not-italic text-muted-foreground">một mình.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          StudyBuddy tạo ra không gian để học sinh tìm thấy nhau — học cùng, hỏi
          cùng, và không ai bỏ cuộc giữa chừng.
        </p>

        <Button
          variant="ghost"
          className="animate-fade-rise-delay-2 liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03] hover:bg-transparent"
        >
          Tìm bạn học ngay
        </Button>
      </div>

      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Cuộn xuống
      </span>
    </section>
  );
}
