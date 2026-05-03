import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import marble from "@/assets/lux/01-marble-gold.jpg";
import velvet from "@/assets/lux/02-velvet-noir.jpg";
import liquid from "@/assets/lux/03-liquid-gold.jpg";
import deco from "@/assets/lux/04-deco-pattern.jpg";
import aurora from "@/assets/lux/05-aurora-mesh.jpg";
import silk from "@/assets/lux/06-silk-folds.jpg";
import stardust from "@/assets/lux/07-stardust.jpg";
import metal from "@/assets/lux/08-brushed-metal.jpg";
import smoke from "@/assets/lux/09-smoke-ink.jpg";
import obsidian from "@/assets/lux/10-obsidian.jpg";

export const LUX_ASSETS = {
  marble, velvet, liquid, deco, aurora, silk, stardust, metal, smoke, obsidian,
};

/* 1. Marble background with parallax overlay */
export function MarbleBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img src={marble} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 2. Liquid gold flow */
export function LiquidGoldBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <img src={liquid} alt="" aria-hidden className="absolute -bottom-20 -right-20 w-[80%] opacity-40 blur-sm animate-lux-float" />
      <img src={liquid} alt="" aria-hidden className="absolute -top-32 -left-20 w-[60%] opacity-25 rotate-180 animate-lux-float" style={{ animationDelay: "2s" }} />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 3. Deco pattern subtle wallpaper */
export function DecoBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: `url(${deco})`, backgroundSize: "400px" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 4. Aurora animated mesh */
export function AuroraBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-lux-aurora" />
      <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-glow/20 blur-3xl animate-lux-aurora" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl animate-lux-aurora" style={{ animationDelay: "8s" }} />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 5. Stardust particles */
export function StardustBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <img src={stardust} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-screen" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 6. Brushed metal */
export function MetalBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img src={metal} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 7. Silk folds with warm glow */
export function SilkBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <img src={silk} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 8. Smoke ink reveal */
export function SmokeBg({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <img src={smoke} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* 9. Animated grain (film noise) */
export function GrainOverlay({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 animate-lux-grain"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
      }}
    />
  );
}

/* 10. Spotlight that follows cursor */
export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        background:
          "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--primary) 25%, transparent), transparent 60%)",
      }}
    />
  );
}

/* 11. Animated golden orbit rings */
export function OrbitRings({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 flex items-center justify-center", className)}>
      {[300, 460, 620, 800].map((s, i) => (
        <div
          key={s}
          className="absolute rounded-full border border-primary/20 animate-lux-spin-slow"
          style={{ width: s, height: s, animationDuration: `${30 + i * 10}s`, animationDirection: i % 2 ? "reverse" : "normal" }}
        >
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]" />
        </div>
      ))}
    </div>
  );
}

/* 12. Marquee strip */
export function MarqueeStrip({ items }: { items: string[] }) {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-6">
      <div className="flex gap-12 whitespace-nowrap animate-lux-marquee">
        {list.map((t, i) => (
          <span key={i} className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            ✦&nbsp;&nbsp;{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* 13. Tilt card */
export function TiltCard({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return <div ref={ref} className={cn("transition-transform duration-200 will-change-transform", className)}>{children}</div>;
}

/* 14. Section header */
export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary">
      <span className="h-px w-10 bg-primary/60" />
      <span>{index}</span>
      <span>· {children}</span>
    </div>
  );
}

/* 15. Gold divider */
export function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-12">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/60" />
      <div className="h-2 w-2 rotate-45 bg-primary" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  );
}

/* 16. Obsidian gem accent */
export function ObsidianAccent() {
  return (
    <div className="relative h-40 w-40 rounded-full overflow-hidden">
      <img src={obsidian} alt="" className="h-full w-full object-cover animate-lux-pulse-glow" />
    </div>
  );
}

/* 17. Velvet card surface */
export function VelvetCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-border", className)}>
      <img src={velvet} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="relative p-8">{children}</div>
    </div>
  );
}

/* 18. Animated gradient text wrapper */
export function GoldText({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("lux-text-gold", className)}>{children}</span>;
}

export const LUX_BG_GALLERY = [
  { name: "Marble Gold", src: marble, hint: "Hero · Storytelling" },
  { name: "Velvet Noir", src: velvet, hint: "Cards · Surfaces" },
  { name: "Liquid Gold", src: liquid, hint: "Decorative accents" },
  { name: "Art Deco", src: deco, hint: "Repeating wallpaper" },
  { name: "Aurora Mesh", src: aurora, hint: "Soft hero overlays" },
  { name: "Silk Folds", src: silk, hint: "Editorial sections" },
  { name: "Stardust", src: stardust, hint: "CTA glow" },
  { name: "Brushed Metal", src: metal, hint: "Premium UI surfaces" },
  { name: "Smoke Ink", src: smoke, hint: "Cinematic dividers" },
  { name: "Obsidian", src: obsidian, hint: "Logo / brand accents" },
];