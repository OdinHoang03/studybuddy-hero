import { Button } from "@/components/ui/button";

const links = [
  { label: "Trang chủ", active: true },
  { label: "Tính năng", active: false },
  { label: "Về chúng tôi", active: false },
  { label: "Cộng đồng", active: false },
  { label: "Liên hệ", active: false },
];

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
      <a
        href="#"
        className="text-3xl tracking-tight text-foreground"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        StudyBuddy<sup className="text-xs">®</sup>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href="#"
            className={
              "text-sm transition-colors hover:text-foreground " +
              (link.active ? "text-foreground" : "text-muted-foreground")
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button
        variant="ghost"
        className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] hover:bg-transparent"
      >
        Bắt đầu
      </Button>
    </nav>
  );
}
