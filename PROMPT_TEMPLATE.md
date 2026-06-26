# Prompt Template — Cinematic Landing Page (5 Section)

Đây là "công thức" prompt đã sinh ra website StudyBuddy này. Dùng cho **TheNextX Workshop 3** — sau khi viết xong nội dung 5 section, dán prompt vào **Google AI Studio / v0 / Claude** để AI dựng landing page.

---

## Cách dùng (3 bước)

1. Lấy nội dung **5 section** bạn đã viết ở Phần 2 (Hero · Problem · Solution · How it Works · CTA).
2. Thay mọi `[PLACEHOLDER]` trong template bên dưới bằng nội dung của bạn.
3. Dán **toàn bộ** vào Google AI Studio (chế độ Build) → xem preview → tinh chỉnh bằng cách chat tiếp.

> Mẹo: giữ phần "Tech & Style" nguyên văn (đó là thứ tạo ra cảm giác cinematic), chỉ thay phần nội dung.

---

## TEMPLATE (copy & điền)

```
Build a cinematic, single-page landing website for [TÊN SẢN PHẨM] — a [LOẠI SẢN PHẨM] for [ĐỐI TƯỢNG NGƯỜI DÙNG].

== TECH & STYLE (giữ nguyên) ==
- Stack: React + Vite + TypeScript + Tailwind CSS + shadcn/ui.
- Smooth scrolling with Lenis.
- Scroll-triggered fade-up reveals + subtle parallax using GSAP ScrollTrigger.
- Typography: oversized editorial headings in "Instrument Serif", body in "Inter".
  In each heading, wrap 1–2 key words in a muted gray for contrast.
- Theme: dark deep-navy background, white text, one single accent, lots of whitespace.
- Atmosphere: a fixed layer with soft drifting fog glow + a few floating dust particles.
- Buttons: glassmorphic (blurred, thin gradient border), rounded-full, hover scale 1.03.
- Respect prefers-reduced-motion.

== 5 SECTIONS ==

1) HERO
- Fullscreen looping background video (autoplay, muted, loop, playsInline, object-cover).
  [DÁN URL VIDEO, hoặc ghi "use a calm abstract video placeholder"]
- Headline (serif, very large): "[CÂU HERO — công thức: Giải pháp cho Ai để Kết quả]"
- Subtext (1–2 câu): "[MÔ TẢ NGẮN]"
- One primary CTA button: "[NHÃN CTA]"
- A small "scroll down" hint at the bottom.

2) PROBLEM — heading: "[CÂU TIÊU ĐỀ NỖI ĐAU]"
- Three emotional pain points (đúng 3 câu, chạm cảm xúc):
  1. [NỖI ĐAU 1]
  2. [NỖI ĐAU 2]
  3. [NỖI ĐAU 3]

3) SOLUTION — heading: "[CÂU TIÊU ĐỀ GIẢI PHÁP]"
- Three benefits written as OUTCOMES (không phải tính năng):
  1. [LỢI ÍCH 1] — [mô tả ngắn]
  2. [LỢI ÍCH 2] — [mô tả ngắn]
  3. [LỢI ÍCH 3] — [mô tả ngắn]

4) HOW IT WORKS — heading: "[CÂU TIÊU ĐỀ, vd: Bắt đầu trong 60 giây]"
- Three simple steps, each with a big serif number:
  1. [BƯỚC 1]
  2. [BƯỚC 2]
  3. [BƯỚC 3]

5) CTA + PROOF
- Three stats: [SỐ LIỆU 1], [SỐ LIỆU 2], [SỐ LIỆU 3]
- One testimonial quote (serif, italic): "[TRÍCH DẪN]" — [TÊN NGƯỜI, bối cảnh]
- Final heading + the same CTA button: "[NHÃN CTA]"

== RULES ==
Minimalist & cinematic. One accent color only. No clutter, no rainbow of colors.
Every section is full-height and vertically centered. Mobile responsive.
```

---

## VÍ DỤ ĐÃ ĐIỀN — StudyBuddy

```
Build a cinematic, single-page landing website for StudyBuddy — an app that
matches high-school students into small study groups, for students preparing
for exams.

[ ... phần TECH & STYLE giữ nguyên như trên ... ]

1) HERO
- Background video: a calm dreamy night-study scene (abstract).
- Headline: "Nơi không ai học một mình."  (mute "không ai" và "một mình")
- Subtext: "StudyBuddy tạo ra không gian để học sinh tìm thấy nhau — học cùng,
  hỏi cùng, và không ai bỏ cuộc giữa chừng."
- CTA: "Tìm bạn học ngay"

2) PROBLEM — "Ôn thi một mình rất dễ nản."
  1. Kẹt một bài Toán cả buổi tối, không biết hỏi ai.
  2. Mở sách ra là buồn ngủ — học 20 phút lại cầm điện thoại.
  3. Lên kế hoạch ôn thi rất hăng, ba ngày sau là bỏ.

3) SOLUTION — "Có bạn học cùng, mọi thứ khác hẳn."
  1. Luôn có người hỏi bài — kẹt chỗ nào, nhắn nhóm có người giải đáp ngay.
  2. Học đều vì có người chờ — lịch học chung khiến bạn khó bỏ buổi.
  3. Đúng người, đúng môn — ghép với bạn cùng khối, cùng mục tiêu.

4) HOW IT WORKS — "Bắt đầu trong 60 giây."
  1. Chọn môn & mục tiêu
  2. Được ghép nhóm 3–5 bạn cùng môn
  3. Học chung theo lịch

5) CTA + PROOF
- Stats: 2.400+ học sinh đang học cùng nhau · 87% học đều hơn sau 2 tuần · 4.8★
- Testimonial: "Trước mình toàn học nửa chừng rồi bỏ. Có nhóm rồi tự nhiên tối
  nào cũng mở máy vì sợ các bạn chờ." — Lan Phương, lớp 12, Hà Nội
- Final heading: "Tìm bạn học của bạn — ngay hôm nay."  ·  CTA: "Tìm bạn học ngay"
```

---

## Checklist sau khi AI build xong

- [ ] Đọc Hero 5 giây có hiểu sản phẩm là gì không?
- [ ] Problem có khiến người đọc gật đầu "đúng tôi"?
- [ ] Solution nói OUTCOME (không phải feature)?
- [ ] Chỉ 1 CTA chính, nổi bật?
- [ ] Đọc tốt trên điện thoại?

Mỗi điểm chưa đạt → chat tiếp với AI để sửa (vd: *"làm Hero headline ngắn và mạnh hơn"*).
