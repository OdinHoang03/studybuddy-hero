import type Lenis from "lenis";

let lenisRef: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  lenisRef = l;
}

export function scrollToId(target: string) {
  const el = document.querySelector(target) as HTMLElement | null;
  if (!el) return;
  if (lenisRef) {
    lenisRef.scrollTo(el, { offset: -72, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
