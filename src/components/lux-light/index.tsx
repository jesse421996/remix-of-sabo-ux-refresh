import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import paperCotton from "@/assets/lux-light/01-paper-cotton.jpg";
import newsprint from "@/assets/lux-light/02-newsprint.jpg";
import inkStroke from "@/assets/lux-light/03-ink-stroke.jpg";
import inkBleed from "@/assets/lux-light/04-ink-bleed.jpg";
import blueprint from "@/assets/lux-light/05-blueprint-grid.jpg";
import topo from "@/assets/lux-light/06-topo-lines.jpg";
import halftone from "@/assets/lux-light/07-halftone.jpg";
import concrete from "@/assets/lux-light/08-concrete.jpg";
import paperFolds from "@/assets/lux-light/10-paper-folds.jpg";
import archShadow from "@/assets/lux-light/11-arch-shadow.jpg";
import linen from "@/assets/lux-light/12-linen.jpg";
import inkBlue from "@/assets/lux-light/13-ink-blue-stroke.jpg";
import schematic from "@/assets/lux-light/14-schematic.jpg";
import fog from "@/assets/lux-light/15-fog.jpg";
import typeSpec from "@/assets/lux-light/16-type-specimen.jpg";
import plaster from "@/assets/lux-light/17-plaster.jpg";
import risoBlue from "@/assets/lux-light/18-riso-blue.jpg";
import stillLife from "@/assets/lux-light/19-still-life.jpg";
import stairs from "@/assets/lux-light/20-stairs.jpg";

export const LIGHT_ASSETS = {
  paperCotton, newsprint, inkStroke, inkBleed, blueprint, topo, halftone,
  concrete, paperFolds, archShadow, linen, inkBlue, schematic, fog,
  typeSpec, plaster, risoBlue, stillLife, stairs,
};

/* ============ 20 IMAGE BACKGROUNDS ============ */
type BgProps = { className?: string; children?: React.ReactNode; opacity?: number; id?: string };

const ImgBg = ({ src, className, children, opacity = 1, overlay = true, id }: BgProps & { src: string; overlay?: boolean }) => (
  <div id={id} className={cn("relative overflow-hidden", className)}>
    <img src={src} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" style={{ opacity }} />
    {overlay && <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/90" />}
    <div className="relative">{children}</div>
  </div>
);

export const PaperCottonBg = (p: BgProps) => <ImgBg src={paperCotton} {...p} overlay={false} />;
export const NewsprintBg = (p: BgProps) => <ImgBg src={newsprint} {...p} overlay={false} />;
export const InkStrokeBg = (p: BgProps) => <ImgBg src={inkStroke} {...p} opacity={0.06} overlay={false} />;
export const InkBleedBg = (p: BgProps) => <ImgBg src={inkBleed} {...p} opacity={0.08} overlay={false} />;
export const BlueprintBg = (p: BgProps) => <ImgBg src={blueprint} {...p} opacity={0.18} />;
export const TopoBg = (p: BgProps) => <ImgBg src={topo} {...p} opacity={0.15} overlay={false} />;
export const HalftoneBg = (p: BgProps) => <ImgBg src={halftone} {...p} opacity={0.4} />;
export const ConcreteBg = (p: BgProps) => <ImgBg src={concrete} {...p} />;
export const PaperFoldsBg = (p: BgProps) => <ImgBg src={paperFolds} {...p} opacity={0.5} />;
export const ArchShadowBg = (p: BgProps) => <ImgBg src={archShadow} {...p} />;
export const LinenBg = (p: BgProps) => <ImgBg src={linen} {...p} overlay={false} />;
export const InkBlueBg = (p: BgProps) => <ImgBg src={inkBlue} {...p} opacity={0.12} overlay={false} />;
export const SchematicBg = (p: BgProps) => <ImgBg src={schematic} {...p} opacity={0.5} />;
export const FogBg = (p: BgProps) => <ImgBg src={fog} {...p} />;
export const TypeSpecBg = (p: BgProps) => <ImgBg src={typeSpec} {...p} />;
export const PlasterBg = (p: BgProps) => <ImgBg src={plaster} {...p} overlay={false} />;
export const RisoBlueBg = (p: BgProps) => <ImgBg src={risoBlue} {...p} opacity={0.7} overlay={false} />;
export const StillLifeBg = (p: BgProps) => <ImgBg src={stillLife} {...p} />;
export const StairsBg = (p: BgProps) => <ImgBg src={stairs} {...p} />;

/* ============ 30 CSS / SVG COMPONENTS ============ */

/* 1. Paper texture (pure CSS noise) */
export const PaperTexture = ({ className }: { className?: string }) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-[0.05]", className)}
    style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")" }} />
);

/* 2. Editorial grid lines */
export const GridLines = ({ size = 48, color = "currentColor", className }: { size?: number; color?: string; className?: string }) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-[0.04]", className)}
    style={{
      backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }} />
);

/* 3. Editorial dot grid */
export const DotGrid = ({ size = 24, className }: { size?: number; className?: string }) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-30", className)}
    style={{
      backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
      backgroundSize: `${size}px ${size}px`,
    }} />
);

/* 4. Diagonal pinstripes */
export const Pinstripes = ({ className }: { className?: string }) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-[0.06]", className)}
    style={{ backgroundImage: "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 12px)" }} />
);

/* 5. Soft vignette */
export const Vignette = ({ className }: { className?: string }) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}
    style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.08) 100%)" }} />
);

/* 6. Top spotlight (soft daylight) */
export const DaylightWash = ({ className }: { className?: string }) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}
    style={{ background: "radial-gradient(ellipse 80% 40% at 50% -10%, rgba(0,0,0,0.04), transparent 70%)" }} />
);

/* 7. Editorial corner brackets */
export const CornerBrackets = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
    {[
      "top-4 left-4 border-t border-l",
      "top-4 right-4 border-t border-r",
      "bottom-4 left-4 border-b border-l",
      "bottom-4 right-4 border-b border-r",
    ].map((c, i) => (
      <span key={i} className={`absolute ${c}`} style={{ width: size, height: size, borderColor: "currentColor" }} />
    ))}
  </div>
);

/* 8. Roman numeral index label */
export const IndexLabel = ({ index, label }: { index: string; label: string }) => (
  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
    <span className="font-serif italic text-base">{index}</span>
    <span className="h-px w-8 bg-current opacity-40" />
    <span>{label}</span>
  </div>
);

/* 9. Hairline divider with diamond */
export const HairlineDivider = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-3 my-10 text-foreground/40", className)}>
    <div className="h-px flex-1 bg-current opacity-30" />
    <span className="font-serif italic text-sm">§</span>
    <div className="h-px flex-1 bg-current opacity-30" />
  </div>
);

/* 10. Drop cap (editorial first letter) */
export const DropCap = ({ children, char }: { children: React.ReactNode; char: string }) => (
  <p className="text-base leading-relaxed">
    <span className="float-left mr-3 mt-1 font-serif text-6xl leading-[0.85] text-foreground">{char}</span>
    {children}
  </p>
);

/* 11. Pullquote */
export const Pullquote = ({ children, cite }: { children: React.ReactNode; cite?: string }) => (
  <blockquote className="my-12 border-l border-foreground/30 pl-8">
    <p className="font-serif text-3xl md:text-4xl leading-tight italic">"{children}"</p>
    {cite && <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">— {cite}</footer>}
  </blockquote>
);

/* 12. Numbered chapter heading */
export const ChapterHeading = ({ no, title, kicker }: { no: string; title: string; kicker?: string }) => (
  <header className="mb-10">
    {kicker && <div className="mb-3 text-[10px] uppercase tracking-[0.5em] text-muted-foreground">{kicker}</div>}
    <div className="flex items-baseline gap-6">
      <span className="font-serif italic text-5xl md:text-6xl text-foreground/30">{no}</span>
      <h2 className="font-serif text-4xl md:text-6xl tracking-tight">{title}</h2>
    </div>
  </header>
);

/* 13. Stamp / seal */
export const Stamp = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center justify-center rounded-full border-2 border-current px-5 py-2 text-[10px] uppercase tracking-[0.3em] rotate-[-4deg]">
    {children}
  </div>
);

/* 14. Spec list (k/v pairs editorial) */
export const SpecList = ({ items }: { items: { k: string; v: string }[] }) => (
  <dl className="divide-y divide-foreground/10">
    {items.map((it, i) => (
      <div key={i} className="grid grid-cols-3 py-3 gap-4">
        <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{it.k}</dt>
        <dd className="col-span-2 text-sm">{it.v}</dd>
      </div>
    ))}
  </dl>
);

/* 15. Marquee strip light */
export const Marquee = ({ items }: { items: string[] }) => {
  const list = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-foreground/10 py-5">
      <div className="flex gap-10 whitespace-nowrap animate-lux-marquee">
        {list.map((t, i) => (
          <span key={i} className="font-serif italic text-2xl text-foreground/70">
            {t} <span className="not-italic mx-3 text-foreground/30">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* 16. Magnetic cursor follower (subtle ink dot) */
export const InkCursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} aria-hidden className="pointer-events-none fixed top-0 left-0 z-[100] h-4 w-4 rounded-full mix-blend-multiply opacity-30"
    style={{ background: "var(--foreground)" }} />;
};

/* 17. Magnetic ink hover wrapper */
export const Magnetic = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.2;
      const y = (e.clientY - r.top - r.height / 2) * 0.2;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const reset = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", reset); };
  }, []);
  return <div ref={ref} className={cn("inline-block transition-transform duration-200", className)}>{children}</div>;
};

/* 18. Rule frame (1-line border with brand) */
export const RuleFrame = ({ children, className, label }: { children: React.ReactNode; className?: string; label?: string }) => (
  <div className={cn("relative border border-foreground/20 p-8", className)}>
    {label && <span className="absolute -top-2.5 left-6 bg-background px-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>}
    {children}
  </div>
);

/* 19. Editorial number badge */
export const NumBadge = ({ n }: { n: string | number }) => (
  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-foreground/30 font-serif italic text-xl">
    {n}
  </div>
);

/* 20. Crosshair marker */
export const Crosshair = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 40 40" aria-hidden className={cn("h-4 w-4", className)}>
    <circle cx="20" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="0" x2="20" y2="14" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="26" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
    <line x1="0" y1="20" x2="14" y2="20" stroke="currentColor" strokeWidth="1" />
    <line x1="26" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" />
  </svg>
);

/* 21. SVG ornament (deco diamond) */
export const Ornament = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" aria-hidden className={cn("h-4 w-24", className)}>
    <line x1="0" y1="10" x2="40" y2="10" stroke="currentColor" />
    <path d="M 50 4 L 56 10 L 50 16 L 44 10 Z" fill="none" stroke="currentColor" />
    <line x1="60" y1="10" x2="100" y2="10" stroke="currentColor" />
  </svg>
);

/* 22. Annotated arrow (editorial) */
export const AnnotArrow = ({ label, className }: { label: string; className?: string }) => (
  <div className={cn("inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em]", className)}>
    <span>{label}</span>
    <svg width="40" height="8" viewBox="0 0 40 8"><path d="M0 4 H35 M30 1 L35 4 L30 7" stroke="currentColor" fill="none" /></svg>
  </div>
);

/* 23. Reveal on scroll wrapper */
export const Reveal = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("opacity-100", "translate-y-0"); el.classList.remove("opacity-0", "translate-y-6"); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={cn("opacity-0 translate-y-6 transition-all duration-700 ease-out", className)}>{children}</div>;
};

/* 24. Tag pill */
export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
    <span className="h-1 w-1 rounded-full bg-current" /> {children}
  </span>
);

/* 25. Stat block (editorial) */
export const Stat = ({ value, label, suffix }: { value: string; label: string; suffix?: string }) => (
  <div>
    <div className="font-serif text-5xl md:text-6xl tracking-tight">
      {value}<span className="text-foreground/40">{suffix}</span>
    </div>
    <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
  </div>
);

/* 26. Underline link (story-link) */
export const StoryLink = ({ children, href, className }: { children: React.ReactNode; href?: string; className?: string }) => (
  <a href={href} className={cn("relative inline-block text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100", className)}>
    {children}
  </a>
);

/* 27. Inline serif heading */
export const SerifHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("font-serif text-4xl md:text-6xl tracking-tight leading-[1.05]", className)}>{children}</h2>
);

/* 28. Ink blue underline accent */
export const InkAccent = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block">
    {children}
    <svg className="absolute left-0 -bottom-2 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden>
      <path d="M0 4 Q25 0 50 4 T100 4" fill="none" stroke="var(--ink-accent)" strokeWidth="2" />
    </svg>
  </span>
);

/* 29. Card surface */
export const PaperCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative overflow-hidden border border-foreground/10 bg-background p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]", className)}>
    <PaperTexture />
    <div className="relative">{children}</div>
  </div>
);

/* 30. Footer rule */
export const FooterRule = () => (
  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
    <span className="h-px flex-1 bg-current opacity-30" />
    <span>SABO M&T · Studio</span>
    <span className="h-px flex-1 bg-current opacity-30" />
  </div>
);

/* ============ Gallery metadata ============ */
export const LIGHT_BG_GALLERY = [
  { name: "Paper Cotton", src: paperCotton, hint: "Hero · default" },
  { name: "Newsprint", src: newsprint, hint: "Editorial body" },
  { name: "Ink Stroke", src: inkStroke, hint: "Section break" },
  { name: "Ink Bleed", src: inkBleed, hint: "Decorative ribbon" },
  { name: "Blueprint", src: blueprint, hint: "Tech / Build pages" },
  { name: "Topography", src: topo, hint: "Process / depth" },
  { name: "Halftone", src: halftone, hint: "Editorial gradient" },
  { name: "Concrete", src: concrete, hint: "Architecture / studio" },
  { name: "Paper Folds", src: paperFolds, hint: "Sculptural surface" },
  { name: "Arch Shadow", src: archShadow, hint: "Hero · architectural" },
  { name: "Linen", src: linen, hint: "Soft warm surface" },
  { name: "Ink Blue Stroke", src: inkBlue, hint: "Brand accent" },
  { name: "Schematic", src: schematic, hint: "Patent / tech" },
  { name: "Fog", src: fog, hint: "Quiet luxury hero" },
  { name: "Type Specimen", src: typeSpec, hint: "Typography section" },
  { name: "Plaster", src: plaster, hint: "Subtle wall" },
  { name: "Riso Blue", src: risoBlue, hint: "Bold accent" },
  { name: "Still Life", src: stillLife, hint: "Editorial photo" },
  { name: "Stairs", src: stairs, hint: "Architectural detail" },
];