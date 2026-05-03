import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  PaperCottonBg, NewsprintBg, ArchShadowBg, FogBg, BlueprintBg, HalftoneBg,
  ConcreteBg, PaperFoldsBg, LinenBg, StillLifeBg, StairsBg, RisoBlueBg, InkBlueBg,
  PaperTexture, GridLines, DotGrid, Pinstripes, Vignette, DaylightWash,
  CornerBrackets, IndexLabel, HairlineDivider, DropCap, Pullquote,
  ChapterHeading, Stamp, SpecList, Marquee, Magnetic, RuleFrame,
  NumBadge, Crosshair, Ornament, AnnotArrow, Reveal, Tag, Stat,
  StoryLink, SerifHeading, InkAccent, PaperCard, FooterRule,
  LIGHT_BG_GALLERY,
} from "@/components/lux-light";

export const Route = createFileRoute("/light")({
  component: LightPage,
  head: () => ({
    meta: [
      { title: "SABO M&T — Light Edition · Editorial Library" },
      { name: "description", content: "Editorial monochrome light library. 19 backgrounds + 30 components — paper, ink, blueprint and architecture, calibrated for SABO M&T." },
    ],
  }),
});

function LightPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 [--background:white] [--foreground:#171717] [--muted-foreground:#737373]">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] font-medium">
            <Crosshair className="h-3 w-3" />
            SABO M&T
          </Link>
          <ul className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <li><a href="#manifesto" className="hover:text-foreground transition">Manifesto</a></li>
            <li><a href="#library" className="hover:text-foreground transition">Library</a></li>
            <li><a href="#components" className="hover:text-foreground transition">Components</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
          <Link to="/" className="text-[11px] uppercase tracking-[0.3em] hover:underline">
            Noir edition →
          </Link>
        </nav>
      </header>

      {/* HERO — fog + serif headline */}
      <FogBg className="relative min-h-[92vh]">
        <DaylightWash />
        <GridLines size={96} />
        <CornerBrackets className="text-foreground/30" />
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <IndexLabel index="I" label="Studio · Light edition · 2026" />
          <h1 className="mt-10 font-serif text-[14vw] md:text-[10vw] leading-[0.92] tracking-tight">
            Build.<br />
            Automate.<br />
            <InkAccent>Create.</InkAccent>
          </h1>
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl">
            <p className="md:col-span-2 text-base md:text-lg leading-relaxed text-foreground/80">
              SABO Media & Technology — một Custom AI Solutions Studio tại TP. Hồ Chí Minh.
              Phiên bản light editorial của bộ nhận diện: chữ serif, mực in, không gian giấy, kỷ luật Thuỵ Sĩ.
            </p>
            <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <div className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span>Edition</span><span className="text-foreground">Nº 02</span>
              </div>
              <div className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span>Palette</span><span className="text-foreground">Paper · Ink</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Year</span><span className="text-foreground">MMXXVI</span>
              </div>
            </div>
          </div>
        </div>
      </FogBg>

      {/* MARQUEE */}
      <Marquee items={["Build", "Automate", "Create", "Custom AI", "Web app", "Mobile app", "AI Pipeline", "Vietnam"]} />

      {/* MANIFESTO — drop cap + pullquote */}
      <NewsprintBg id="manifesto" className="py-32">
        <PaperTexture />
        <div className="relative max-w-4xl mx-auto px-6">
          <ChapterHeading no="II" kicker="Manifesto" title="Đã xây — không phải lời hứa." />
          <Reveal>
            <DropCap char="S">
              ABO M&T xây dựng phần mềm tuỳ chỉnh, tự động hoá quy trình bằng AI agents, và sản xuất hình ảnh + video với AI pipeline.
              Ba dịch vụ trong một studio. Code ownership 100% — không vendor lock-in. Thời gian trung bình: phần mềm 8–16 tuần,
              automation 2–6 tuần, media 3–4 tuần. Chúng tôi tin rằng bằng chứng quan trọng hơn lời hứa.
            </DropCap>
          </Reveal>
          <Pullquote cite="SABO M&T">
            Studios are measured by what they ship, not by what they promise.
          </Pullquote>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            <Stat value="15" suffix="+" label="Sản phẩm đã ship" />
            <Stat value="04" label="Lĩnh vực" />
            <Stat value="03" suffix="+" label="Năm làm AI" />
          </div>
        </div>
      </NewsprintBg>

      {/* SERVICES — 3 columns architectural */}
      <section className="relative py-32 bg-background">
        <GridLines size={64} />
        <div className="relative max-w-7xl mx-auto px-6">
          <IndexLabel index="III" label="Năng lực" />
          <SerifHeading className="mt-6 max-w-3xl">Ba dịch vụ. Một studio.</SerifHeading>
          <div className="grid md:grid-cols-3 gap-px mt-16 border border-foreground/10 bg-foreground/10">
            {[
              { no: "01", t: "Build", d: "Phần mềm tuỳ chỉnh — web app, mobile app, backend systems.", bg: BlueprintBg, items: ["Web app", "Mobile app", "Backend"] },
              { no: "02", t: "Automate", d: "AI agents tự động hoá quy trình kinh doanh.", bg: HalftoneBg, items: ["AI Agents", "Workflow", "Integrations"] },
              { no: "03", t: "Create", d: "Pipeline sản xuất hình ảnh và video bằng AI.", bg: ConcreteBg, items: ["AI Image", "AI Video", "Pipeline"] },
            ].map(({ no, t, d, bg: Bg, items }) => (
              <Bg key={no} className="group min-h-[480px] bg-background">
                <div className="relative h-full p-10 flex flex-col">
                  <div className="flex items-center justify-between">
                    <NumBadge n={no} />
                    <Crosshair />
                  </div>
                  <h3 className="mt-12 font-serif text-5xl">{t}</h3>
                  <p className="mt-4 text-foreground/70 text-sm leading-relaxed">{d}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-10">
                    {items.map((i) => <Tag key={i}>{i}</Tag>)}
                  </div>
                  <AnnotArrow className="mt-6 text-foreground" label="Khám phá" />
                </div>
              </Bg>
            ))}
          </div>
        </div>
      </section>

      {/* WORK — bento with arch + still life */}
      <section className="relative py-32">
        <PaperTexture />
        <div className="relative max-w-7xl mx-auto px-6">
          <ChapterHeading no="IV" kicker="Case studies" title="Bằng chứng năng lực." />
          <div className="grid md:grid-cols-12 gap-6 mt-12">
            <ArchShadowBg className="md:col-span-7 aspect-[4/3] rounded-sm">
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-foreground">
                <Tag>Mobile · Sports</Tag>
                <h3 className="mt-3 font-serif text-4xl">SABO Arena</h3>
              </div>
            </ArchShadowBg>
            <StillLifeBg className="md:col-span-5 aspect-[4/3] rounded-sm">
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Tag>Hospitality</Tag>
                <h3 className="mt-3 font-serif text-4xl">SaboHub</h3>
              </div>
            </StillLifeBg>
            <StairsBg className="md:col-span-5 aspect-[4/3] rounded-sm">
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Tag>AI · Education</Tag>
                <h3 className="mt-3 font-serif text-4xl">AI Newbie</h3>
              </div>
            </StairsBg>
            <PaperFoldsBg className="md:col-span-7 aspect-[4/3] rounded-sm">
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <Tag>Real estate</Tag>
                <h3 className="mt-3 font-serif text-4xl">RealEstate.vn</h3>
              </div>
            </PaperFoldsBg>
          </div>
        </div>
      </section>

      {/* LIBRARY — 19 backgrounds gallery */}
      <NewsprintBg id="library" className="py-32">
        <div className="relative max-w-7xl mx-auto px-6">
          <IndexLabel index="V" label="Background library" />
          <SerifHeading className="mt-6">19 nền cảnh editorial.</SerifHeading>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Bộ texture & ảnh nền lấy cảm hứng từ giấy in, mực sumi-e, blueprint, kiến trúc minimalism. Tất cả calibrated cho aesthetic SABO.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {LIGHT_BG_GALLERY.map((b, i) => (
              <Reveal key={b.name}>
                <figure className="group">
                  <div className="relative aspect-[3/4] overflow-hidden border border-foreground/10">
                    <img src={b.src} alt={b.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between">
                    <span className="text-xs text-foreground">{b.name}</span>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </figcaption>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{b.hint}</p>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </NewsprintBg>

      {/* COMPONENTS showcase */}
      <section id="components" className="relative py-32 bg-background">
        <Pinstripes />
        <div className="relative max-w-7xl mx-auto px-6">
          <IndexLabel index="VI" label="Components · 30 thành phần" />
          <SerifHeading className="mt-6 max-w-3xl">Bộ thành phần editorial.</SerifHeading>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <PaperCard>
              <Tag>01 · Drop Cap</Tag>
              <div className="mt-6">
                <DropCap char="A">
                  Dùng làm chữ cái đầu cho bài viết editorial dài. Serif italic, kích thước 6xl.
                </DropCap>
              </div>
            </PaperCard>

            <PaperCard>
              <Tag>02 · Stat Block</Tag>
              <div className="mt-6 space-y-6">
                <Stat value="15" suffix="+" label="Ship" />
                <Stat value="98" suffix="%" label="On time" />
              </div>
            </PaperCard>

            <PaperCard>
              <Tag>03 · Spec List</Tag>
              <div className="mt-6">
                <SpecList items={[
                  { k: "Engine", v: "TanStack Start" },
                  { k: "Theme", v: "Editorial Light" },
                  { k: "Year", v: "MMXXVI" },
                ]} />
              </div>
            </PaperCard>

            <PaperCard>
              <Tag>04 · Pullquote</Tag>
              <div className="mt-2">
                <Pullquote cite="Studio">Less, but considered.</Pullquote>
              </div>
            </PaperCard>

            <PaperCard>
              <Tag>05 · Stamp & Tag</Tag>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Stamp>Approved</Stamp>
                <Stamp>Edition Nº 2</Stamp>
                <Tag>Build</Tag>
                <Tag>Automate</Tag>
              </div>
            </PaperCard>

            <PaperCard>
              <Tag>06 · Numbered Heading</Tag>
              <div className="mt-6">
                <ChapterHeading no="01" kicker="Section" title="Manifesto" />
              </div>
            </PaperCard>

            <RuleFrame label="07 · Rule Frame">
              Khung viền hairline với label nhỏ ở góc trên — thường dùng cho callout editorial.
              <HairlineDivider />
              <Ornament className="text-foreground/60" />
            </RuleFrame>

            <PaperCard>
              <Tag>08 · Crosshair & Ornament</Tag>
              <div className="mt-8 flex items-center gap-6">
                <Crosshair className="h-8 w-8" />
                <Ornament className="h-3 w-32" />
                <NumBadge n="N" />
              </div>
              <div className="mt-6">
                <AnnotArrow label="Annotated arrow" />
              </div>
            </PaperCard>

            <PaperCard>
              <Tag>09 · Magnetic & Story Link</Tag>
              <div className="mt-8 space-y-4">
                <Magnetic className="cursor-pointer">
                  <span className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2 text-xs uppercase tracking-[0.3em]">
                    Hover me <ArrowUpRight className="h-3 w-3" />
                  </span>
                </Magnetic>
                <div><StoryLink>Underline animated link</StoryLink></div>
                <div className="text-2xl font-serif">Có <InkAccent>điểm nhấn</InkAccent> mực xanh.</div>
              </div>
            </PaperCard>
          </div>

          <HairlineDivider />

          <h3 className="font-serif text-2xl mb-6">Backgrounds in situ</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <BlueprintBg className="aspect-[16/10] rounded-sm">
              <div className="absolute inset-0 p-8 flex items-end">
                <div>
                  <Tag>Background · Blueprint</Tag>
                  <h4 className="mt-3 font-serif text-3xl">Technical surfaces</h4>
                </div>
              </div>
            </BlueprintBg>
            <RisoBlueBg className="aspect-[16/10] rounded-sm">
              <div className="absolute inset-0 p-8 flex items-end">
                <div>
                  <Tag>Background · Riso Blue</Tag>
                  <h4 className="mt-3 font-serif text-3xl text-white mix-blend-difference">Bold accent</h4>
                </div>
              </div>
            </RisoBlueBg>
            <LinenBg className="aspect-[16/10] rounded-sm">
              <div className="absolute inset-0 p-8 flex items-end">
                <div>
                  <Tag>Background · Linen</Tag>
                  <h4 className="mt-3 font-serif text-3xl">Soft warmth</h4>
                </div>
              </div>
            </LinenBg>
            <InkBlueBg className="aspect-[16/10] rounded-sm bg-background">
              <div className="absolute inset-0 p-8 flex items-end">
                <div>
                  <Tag>Background · Ink Blue</Tag>
                  <h4 className="mt-3 font-serif text-3xl">Brand accent wash</h4>
                </div>
              </div>
            </InkBlueBg>
          </div>
        </div>
      </section>

      {/* CONTACT — paper card + cornerbrackets */}
      <PaperCottonBg id="contact" className="py-32">
        <Vignette />
        <CornerBrackets className="text-foreground/40" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <IndexLabel index="VII" label="Contact" />
          <h2 className="mt-8 font-serif text-5xl md:text-7xl tracking-tight">
            Có một ý tưởng <InkAccent>đáng làm</InkAccent>?
          </h2>
          <p className="mt-6 text-foreground/70">Trả lời trong vòng 1 ngày làm việc, kèm kế hoạch rõ ràng.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <a href="mailto:hello@sabo.com.vn" className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 h-12 text-background text-xs uppercase tracking-[0.3em]">
                hello@sabo.com.vn <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <a href="#" className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-8 h-12 text-foreground text-xs uppercase tracking-[0.3em]">
              Đặt lịch tư vấn
            </a>
          </div>
        </div>
      </PaperCottonBg>

      {/* FOOTER */}
      <footer className="border-t border-foreground/10 py-10">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <FooterRule />
          <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>© MMXXVI · TP. Hồ Chí Minh</span>
            <div className="flex items-center gap-2">
              <DotGrid className="!relative h-4 w-12 opacity-60" size={4} />
              <span>Light edition · Nº 02</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}