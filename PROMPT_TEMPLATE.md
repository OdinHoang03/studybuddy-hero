# Prompt — Cinematic 5-Section Landing (bản gộp)

Bản gộp đầy đủ của prompt gốc (vốn được chỉnh qua nhiều turn) thành **một prompt liền mạch**.
Phần kỹ thuật giữ **nguyên văn**; chỉ `[BRAND]` và nội dung là chỗ cần điền. Dùng cho **TheNextX Workshop 3** — dán vào Google AI Studio / v0 / Claude.

---

## PROMPT (copy toàn bộ phần dưới, điền `[PLACEHOLDER]`)

```
Create a single-page, scroll-driven landing site with a fullscreen looping background
video, glassmorphic navigation, cinematic editorial typography, and a buttery-smooth
immersive scroll experience.

Stack: React + Vite + Tailwind CSS + TypeScript with shadcn/ui.
GSAP + ScrollTrigger for cinematic scroll reveals & parallax. Lenis for smooth scrolling.

=== VIDEO BACKGROUND (Hero) ===
- Fullscreen <video> element with autoPlay, loop, muted, playsInline
- Source URL: [VIDEO_URL]
- Positioned absolute inset-0 w-full h-full object-cover z-0

=== FONTS ===
- Import from Google Fonts: Playfair Display (display serif, load italic too) and Inter weights 400/500 (body)
- CSS variables: --font-display: 'Playfair Display', serif  and  --font-body: 'Inter', sans-serif
- Body uses var(--font-body); headings use inline fontFamily: "'Playfair Display', serif"
- ⚠️ VIETNAMESE: the content is in Vietnamese, so EVERY font must include the `vietnamese`
  Google Fonts subset. Do NOT use Instrument Serif, Almarai, Cormorant, EB Garamond — they
  lack Vietnamese glyphs, so accented chars (ế, ữ, ậ, ầ, ă…) fall back mid-word and look broken.
  Safe picks: Inter, Be Vietnam Pro, Plus Jakarta Sans (sans) · Playfair Display, Lora,
  Noto Serif (serif). Verify the font's Google Fonts page lists "Vietnamese" before using it.

=== COLOR THEME (dark, HSL values for CSS variables) ===
--background: 201 100% 13%        (deep navy blue)
--foreground: 0 0% 100%           (white)
--muted-foreground: 240 4% 66%    (muted gray)
--primary: 0 0% 100%  --primary-foreground: 0 0% 4%
--secondary: 0 0% 10%  --muted: 0 0% 10%  --accent: 0 0% 10%
--border: 0 0% 18%  --input: 0 0% 18%

=== NAVIGATION BAR ===
- fixed top, z-50, flex row, justify-between, px-8 py-6, max-w-7xl mx-auto
- Logo: "[BRAND]®" (® as <sup className="text-xs">), text-3xl tracking-tight, Playfair Display, text-foreground
- Nav links (hidden on mobile, md:flex): [LINK_1] (active, text-foreground), [LINK_2], [LINK_3], [LINK_4]
  — all text-sm text-muted-foreground with hover:text-foreground transition-colors
  — each link smooth-scrolls (Lenis) to its matching section id
- CTA button: "[NAV_CTA]", liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground, hover:scale-[1.03]

=== HERO SECTION ===
- min-h-screen, flex column, centered, text-center, px-6, generous vertical padding
- H1: "[HERO_HEADLINE]" — text-5xl sm:text-7xl md:text-8xl, leading-[0.95], tracking-[-2.46px],
  max-w-7xl, font-normal, Playfair Display. Wrap [KEY_WORDS] in
  <em className="not-italic text-muted-foreground"> for color contrast.
- Subtext: text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed — "[SUBTEXT]"
- CTA button: "[HERO_CTA]", liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12,
  hover:scale-[1.03] cursor-pointer
- A subtle "scroll down" hint at the bottom
- At the bottom of the hero, fade the video into the page background color with a gradient
  (so there is NO hard seam between the video and the sections below).

=== LIQUID GLASS EFFECT (CSS class .liquid-glass) ===
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

=== ANIMATIONS (CSS keyframes + classes) ===
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-rise         { animation: fade-rise 0.8s ease-out both; }
.animate-fade-rise-delay   { animation: fade-rise 0.8s ease-out 0.2s both; }
.animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }
- H1 gets animate-fade-rise ; Subtext gets animate-fade-rise-delay ; Hero CTA gets animate-fade-rise-delay-2

=== CINEMATIC SCROLL EXPERIENCE ===
- Use Lenis for buttery smooth scrolling so the experience feels like drifting through a digital museum.
- Use GSAP + ScrollTrigger for cinematic transitions: each section's content fades/rises in on enter.
- Oversized editorial typography + elegant serif fonts for a luxury campaign aesthetic; in each heading,
  wrap 1–2 key words in muted gray for contrast.
- Use parallax depth + floating foreground/background assets so every scroll section feels immersive:
  give each section a giant faint serif word in the background that drifts on scroll.
- Layer subtle particles + atmospheric fog (a fixed background layer) to make it feel dreamy and alive.
- Fine-tune easing + transition timing to give every movement that premium cinematic feel.
- Respect prefers-reduced-motion (disable animations).

=== SECTIONS — the standard 5-section landing (besides the Hero) ===
2) PROBLEM — heading "[PROBLEM_HEADLINE]"
   Three emotional pain points: [PAIN_1] / [PAIN_2] / [PAIN_3]
3) SOLUTION — heading "[SOLUTION_HEADLINE]"
   Three benefits written as OUTCOMES (not features): [BENEFIT_1] / [BENEFIT_2] / [BENEFIT_3]
4) HOW IT WORKS — heading "[HOW_HEADLINE]"
   Three simple steps, each with a big serif number: [STEP_1] / [STEP_2] / [STEP_3]
5) CTA + PROOF
   Three stats: [STAT_1] / [STAT_2] / [STAT_3]
   One testimonial (serif, italic): "[QUOTE]" — [AUTHOR]
   Final heading + the same CTA button: "[HERO_CTA]"

=== LAYOUT RULES ===
No decorative blobs, radial gradients, or heavy overlays. Minimalist, cinematic, vertically-centered
sections. One accent color only. The video + typography + atmosphere provide all visual depth.
```

---

## Ghi chú: phần renaissance / 3D (đã điều chỉnh)

Prompt gốc còn có hướng **"renaissance digital museum"** với Three.js + WebGL + GLTF (sneakers / skateboard / shopping bag trôi trong tranh Phục Hưng, bloom lighting…). Bản build này **giữ tinh thần** — cinematic, parallax chiều sâu, atmosphere fog/particles, typography serif khổ lớn, smooth scroll Lenis — nhưng **không dùng Three.js/GLTF**, vì:
- Cần **model 3D thật** (Blender/Spline) mà ta không có sẵn.
- Theme "tranh Phục Hưng + streetwear" là vibe thời trang, **lệch** với sản phẩm thực tế.

Muốn bản 3D đúng nghĩa → cần dựng cảnh WebGL riêng + chuẩn bị file GLTF.

---

## Ví dụ đã điền — StudyBuddy (chính là site này)

```
[BRAND]        = StudyBuddy
[VIDEO_URL]    = https://d8j0ntlcm91z4.cloudfront.net/.../hf_20260314_131748_...mp4
[LINK_1..4]    = Trang chủ (active) · Tính năng · Cách hoạt động · Đánh giá
[NAV_CTA]      = Bắt đầu
[HERO_HEADLINE]= "Nơi không ai học một mình."   (KEY_WORDS = "không ai", "một mình.")
[SUBTEXT]      = "StudyBuddy tạo ra không gian để học sinh tìm thấy nhau — học cùng, hỏi cùng,
                  và không ai bỏ cuộc giữa chừng."
[HERO_CTA]     = Tìm bạn học ngay

PROBLEM  — "Ôn thi một mình rất dễ nản."
  1. Kẹt một bài Toán cả buổi tối, không biết hỏi ai.
  2. Mở sách ra là buồn ngủ — học 20 phút lại cầm điện thoại.
  3. Lên kế hoạch ôn thi rất hăng, ba ngày sau là bỏ.

SOLUTION — "Có bạn học cùng, mọi thứ khác hẳn."
  1. Luôn có người hỏi bài
  2. Học đều vì có người chờ
  3. Đúng người, đúng môn

HOW IT WORKS — "Bắt đầu trong 60 giây."
  1. Chọn môn & mục tiêu   2. Được ghép nhóm   3. Học chung theo lịch

CTA + PROOF
  Stats: 2.400+ học sinh · 87% học đều hơn sau 2 tuần · 4.8★
  Quote: "Trước mình toàn học nửa chừng rồi bỏ. Có nhóm rồi tự nhiên tối nào cũng mở máy
          vì sợ các bạn chờ." — Lan Phương, lớp 12, Hà Nội
  Final CTA: Tìm bạn học ngay
```
