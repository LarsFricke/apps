import { useEffect, useRef, useState } from "react";

/* ── Content (reused from original) ─────────────────── */

const route = [
  { number: "01", place: "Sölden", region: "Ötztal", note: "Wasserfall-Klettersteige & sportliche Reserve" },
  { number: "02", place: "Timmelsjoch", region: "Moos & Meran", note: "Passfahrt, optionale Ferrata & Eis" },
  { number: "03", place: "Pozza di Fassa", region: "Dolomiten", note: "Rosengarten, Gratwege & flexible Bergtage" },
  { number: "04", place: "Nauders", region: "Reschensee", note: "Goldgrat oder ruhiger Abschluss am See" },
];

const oetztalHighlights = [
  ["01", "Stuibenfall", "Gischt direkt neben dem Drahtseil."],
  ["02", "Lehner Wasserfall", "Originalroute und Seilbrücke — ohne E-Variante."],
  ["03", "Gaislachkogl", "Hochgebirge ohne zusätzlichen Klettertag."],
  ["04", "Schiestl als Reserve", "Steil, sportlich und nur mit echten Reserven."],
  ["05", "Ein freier Nachmittag", "Erholung ist Teil des Plans."],
];

const dolomitesHighlights = [
  ["01", "Roda di Vael", "Der beste Einstieg — technisch moderat, insgesamt ernst."],
  ["02", "Bepi Zac", "Ein langer Gratweg durch Stellungen und Tunnel."],
  ["03", "Santnerpass", "Großer Klassiker als anspruchsvolle Reserve."],
  ["04", "Val San Nicolò", "Wiesen, Wasser und freie Pausenwahl."],
  ["05", "Hüttenterrasse", "Ein langer Mittag darf das Wochenhighlight sein."],
];

const checklist = [
  ["Wetter", "Kein Gewitterfenster, kein starker Wind, keine überraschenden Schneereste."],
  ["Material", "Helm, Gurt, normgerechtes Set, Handschuhe, Erste Hilfe, geladenes Telefon."],
  ["Kinder", "Zusätzliche Seilsicherung dort, wo Empfehlung oder Situation sie nahelegt."],
  ["Abstände", "Nur eine Person im Seilabschnitt zwischen zwei Verankerungen."],
  ["Energie", "Wasser, Brotzeit, Sonnenschutz und warme Reservekleidung."],
  ["Abbruch", "Vorher festlegen, wann umgedreht oder ein früher Ausstieg genommen wird."],
];

const sectionIds = [
  "hero", "route", "oetztal", "lehner", "stuiben", "reserve",
  "transfer", "dolomiten", "roda", "bepi", "santner", "valley",
  "rueckreise", "praxis",
];

/* ── Components ──────────────────────────────────────── */

function DotNav({ active }: { active: string | null }) {
  return (
    <nav className="dot-nav" aria-label="Abschnitte">
      {sectionIds.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? "active" : ""}
          aria-label={`Zu ${id}`}
        />
      ))}
    </nav>
  );
}

function Stats({ items }: { items: Array<[string, string]> }) {
  return (
    <dl className="stats">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Highlights({ items }: { items: string[][] }) {
  return (
    <div className="highlights">
      {items.map(([number, title, copy]) => (
        <article key={number}>
          <span>{number}</span>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ── App ─────────────────────────────────────────────── */

export default function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id || null);
        }
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 },
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* scroll-driven custom property for parallax */
  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (scrollRef.current) {
        scrollRef.current.style.setProperty(
          "--scroll",
          String(window.scrollY),
        );
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={scrollRef} className="immersive-scroll">
      <DotNav active={activeSection} />

      {/* ── Hero ──────────────────────────────────────── */}
      <section id="hero" className="hero-section">
        <div className="hero-parallax">
          <img src="/bergabenteuer-scroll/images/roda-di-vael.jpg" alt="" className="hero-bg" />
        </div>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="eyebrow">Familien-Alpenführer · Band 1</p>
          <h1>Unsere<br />Bergabenteuer</h1>
          <p className="hero-sub">Ötztal & Dolomiten · Sommer 2026</p>
          <p className="hero-meta">2 Erwachsene · 2 Kinder (11 Jahre)</p>
          <div className="hero-actions">
            <a className="download" href="#route">Reise entdecken <span aria-hidden="true">↓</span></a>
            <a className="text-link light" href="/bergabenteuer-scroll/downloads/Unsere_Bergabenteuer_Band1_Oetztal_Dolomiten_2026_V2.pdf" download>Broschüre laden</a>
          </div>
        </div>
        <p className="photo-credit">Foto: Maurizio Ceol · CC BY 3.0</p>
      </section>

      {/* ── Route Overview ────────────────────────────── */}
      <section id="route" className="panel-section">
        <div className="panel">
          <p className="eyebrow">Überblick</p>
          <h2>Drei Bergwelten,<br />eine Reise</h2>
          <p className="lead">Ötztaler Granit, Südtiroler Übergang und die hellen Wände des Rosengartens. Der Plan bleibt bewusst flexibel: Wetter, Kraft und Lust bestimmen die Reihenfolge.</p>
          <blockquote>Lieber eine Tour früher abbrechen und mit guter Stimmung zurückkehren, als den Plan um jeden Preis vollständig abzuhaken.</blockquote>
          <div className="route-line">
            {route.map((stop) => (
              <article key={stop.number}>
                <span className="route-number">{stop.number}</span>
                <p>{stop.region}</p>
                <h3>{stop.place}</h3>
                <small>{stop.note}</small>
              </article>
            ))}
          </div>
          <div className="principle">
            <strong>Planungsprinzip</strong>
            <p>Nach zwei fordernden Tagen folgt idealerweise ein leichterer Tag. In den Dolomiten entscheiden nicht nur Buchstaben: Länge, Höhe, Alt-Schnee und ungesicherte Passagen sind oft der eigentliche Anspruch.</p>
          </div>
        </div>
      </section>

      {/* ── Ötztal Cinematic ──────────────────────────── */}
      <section id="oetztal" className="cinematic-section cinematic-blue">
        <div className="cinematic-panel">
          <p className="eyebrow">Woche 1 · Ötztal</p>
          <h2>Wasser, Fels und Hochgebirge</h2>
          <p className="lead">Zwei starke Familien-Klettersteige, eine sportliche Reserve und ein entspannter Panoramatag.</p>
          <Highlights items={oetztalHighlights} />
        </div>
      </section>

      {/* ── Lehner ────────────────────────────────────── */}
      <section id="lehner" className="tour-section">
        <div className="tour-bg">
          <img src="/bergabenteuer-scroll/images/lehner-wasserfall.jpg" alt="" className="tour-bg-img" />
        </div>
        <div className="tour-card">
          <p className="eyebrow">Kernoption 1</p>
          <h2>Lehner Wasserfall</h2>
          <p className="lead">Kompakt, eindrucksvoll und mit einer klaren Familienlinie. Die linke E-Variante bleibt bewusst außen vor.</p>
          <Stats items={[["Schwierigkeit", "B/C, kurz D"], ["Gesamtzeit", "ca. 3–3,5 h"], ["Höhenmeter", "ca. 220 hm"], ["Familienlinie", "Originalroute"]]} />
          <div className="copy-columns">
            <div>
              <h3>Die richtige Linie</h3>
              <p>Rechts vom Wasserfall verläuft die deutlich leichtere Originalroute. Der kurze D-Überhang kann umgangen werden. Die linke Variante enthält eine E-Passage und ist nicht für Kinder geeignet.</p>
            </div>
            <div className="callout">
              <strong>Familien-Tipp</strong>
              <p>Vor dem Einstieg klar vereinbaren: Originalroute, D-Stelle umgehen, keine E-Variante.</p>
            </div>
          </div>
          <a className="text-link" href="https://www.oetztal.com/de/aktivitaeten/alle-routen-touren/klettersteig-lehner-wasserfall-laengenfeld.r-19600795" target="_blank" rel="noopener noreferrer">Aktuelle Tourinfo ↗</a>
          <span className="photo-tag">Foto: Fuchs Robert · CC BY 3.0</span>
        </div>
      </section>

      {/* ── Stuibenfall ───────────────────────────────── */}
      <section id="stuiben" className="panel-section panel-alt">
        <div className="panel">
          <p className="eyebrow">Kernoption 2</p>
          <h2>Stuibenfall</h2>
          <p className="lead">Die spektakulärste Familienoption: viel B-Gelände, zwei kurze C-Stellen und Wasserfall-Panorama.</p>
          <Stats items={[["Schwierigkeit", "C, meist B"], ["Gesamtzeit", "ca. 3,5–4 h"], ["Kletterlänge", "ca. 450 m"], ["Voraussetzung", "mind. 1,40 m"]]} />
          <div className="compact-cards">
            <article><h3>Warum diese Tour?</h3><p>Familienfreundlich, aber nicht banal: Erfahrung, Trittsicherheit, Schwindelfreiheit und Fitness bleiben Voraussetzung.</p></article>
            <article><h3>Tagesstrategie</h3><p>Früh starten. Die Drahtseilquerung am Ende nur angehen, wenn alle konzentriert sind — sie kann leicht umgangen werden.</p></article>
            <article className="callout"><h3>Kinder-Sicherung</h3><p>Für Kinder ab etwa 10 Jahren und 1,40 m wird eine zusätzliche Seilsicherung empfohlen.</p></article>
          </div>
          <a className="text-link" href="https://www.oetztal.com/de/regionen-orte/oetztal-a-z/stuibenfall-tirols-groesster-wasserfall.i-2e167aba-7e9a-4900-997c-fb7229210867" target="_blank" rel="noopener noreferrer">Aktuelle Tourinfo ↗</a>
        </div>
      </section>

      {/* ── Split Reserve ──────────────────────────────── */}
      <section id="reserve" className="split-section">
        <article className="split-dark">
          <p className="eyebrow">Sportliche Reserve</p>
          <h2>Reinhard-Schiestl</h2>
          <p>Fast senkrechter Granit, C/D am Einstieg und eine D-Steilstufe: Armkraft und sehr gute Technik sind nötig. Nicht als Standardtour für zwei 11-Jährige planen.</p>
          <Stats items={[["Gesamtzeit", "2,5–3 h"], ["Wandhöhe", "ca. 200 hm"]]} />
          <a className="text-link light" href="https://www.oetztal.com/de/aktivitaeten/alle-routen-touren/klettersteig-reinhard-schiestl-laengenfeld.r-19600293" target="_blank" rel="noopener noreferrer">Offizielle Tourinfo ↗</a>
        </article>
        <article className="split-rest">
          <p className="eyebrow">Erholung</p>
          <h2>Gaislachkogl &amp; Tal</h2>
          <p>Hochgebirge ohne Kletterdruck: ausschlafen, eine kurze Höhenrunde, früh zurück ins Tal — oder gleich Bad, Museum und Spaziergang.</p>
          <strong>Faustregel</strong>
          <p>Nach zwei fordernden Tagen folgt ein leichter Tag — unabhängig davon, wie gut die Wetter-App aussieht.</p>
        </article>
      </section>

      {/* ── Transition Quote ───────────────────────────── */}
      <section id="transfer" className="quote-section">
        <div className="quote-panel">
          <p className="eyebrow">Transfertag</p>
          <h2>Über den Pass,<br />an den Fels,<br />zum Eis</h2>
          <div className="transfer-steps">
            <article><span>01</span><h3>Timmelsjoch</h3><p>Landschaftspause statt bloßer Durchfahrt. Straßenstatus am Vorabend prüfen.</p></article>
            <article><span>02</span><h3>Stuller Wasserfall</h3><p>Nur mit sauberer Variantenwahl, genügend Zeit und idealerweise geführt.</p></article>
            <article><span>03</span><h3>Meran</h3><p>Altstadtbummel unter den Lauben — und das versprochene Eis.</p></article>
          </div>
          <div className="wide-callout">
            <strong>Klare Empfehlung</strong>
            <p>Den Stuller Wasserfall nicht als schnellen Zwischenstopp unterschätzen. Wenn Zeit oder Kraft nicht passen: Moos kurz ansehen und direkt zum entspannten Teil nach Meran.</p>
          </div>
        </div>
      </section>

      {/* ── Dolomites Cinematic ────────────────────────── */}
      <section id="dolomiten" className="cinematic-section cinematic-green">
        <div className="cinematic-panel">
          <p className="eyebrow">Woche 2 · Dolomiten</p>
          <h2>Gratwege, Geschichte<br />und Ruhe</h2>
          <p className="lead">Technisch oft moderat, insgesamt aber lang, hoch und exponiert. Roda di Vael ist der beste Einstieg.</p>
          <Highlights items={dolomitesHighlights} />
        </div>
      </section>

      {/* ── Roda di Vael ──────────────────────────────── */}
      <section id="roda" className="tour-section tour-reverse">
        <div className="tour-bg">
          <img src="/bergabenteuer-scroll/images/roda-di-vael.jpg" alt="" className="tour-bg-img" />
        </div>
        <div className="tour-card">
          <p className="eyebrow">Kernoption 1</p>
          <h2>Roda di Vael über Vajolon</h2>
          <p className="lead">Technisch relativ leicht. Der Anspruch entsteht durch langen Zustieg, Höhe und den gesamten Rundweg.</p>
          <Stats items={[["Ferrata", "A/B"], ["Kletterzeit", "ca. 1,5 h"], ["Gesamttour", "ca. 4,5–6 h"], ["Gipfel", "2.806 m"]]} />
          <div className="sequence" aria-label="Tourablauf">
            {["Paolina", "Vajolon-Pass", "Ferrata", "Roda di Vael", "Abstieg"].map((step, i) => (
              <span key={step}><b>{i + 1}</b>{step}</span>
            ))}
          </div>
          <div className="callout">
            <strong>Familien-Tipp</strong>
            <p>Mit der Paolina-Bahn den Zustieg verkürzen. Am Vajolon-Pass ehrlich prüfen, ob alle konzentriert und wetterfest sind.</p>
          </div>
          <span className="photo-tag">Foto: Maurizio Ceol · CC BY 3.0</span>
        </div>
      </section>

      {/* ── Bepi Zac ──────────────────────────────────── */}
      <section id="bepi" className="tour-section">
        <div className="tour-bg">
          <img src="/bergabenteuer-scroll/images/bepi-zac.jpg" alt="" className="tour-bg-img" />
        </div>
        <div className="tour-card">
          <p className="eyebrow">Kernoption 2 · lang</p>
          <h2>Alta Via Bepi Zac</h2>
          <p className="lead">Technisch oft moderat, aber lang, exponiert und historisch eindrucksvoll.</p>
          <Stats items={[["Mit Lift", "ca. 6,5 h"], ["Distanz", "ca. 12 km"], ["Kletterteil", "ca. 4 h"], ["Charakter", "Grat & Tunnel"]]} />
          <div className="copy-columns">
            <div>
              <h3>Offenes Geschichtsbuch</h3>
              <p>Stellungen, Laufgräben, Galerien und Felsfenster begleiten den Grat. Eine Stirnlampe gehört in jeden Rucksack.</p>
            </div>
            <div>
              <h3>Familienvariante</h3>
              <p>Nicht zwingend die vollständige Überschreitung planen. Die erste Hälfte bis zu einem sinnvollen Ausstieg kann die bessere Tour sein.</p>
            </div>
          </div>
          <div className="callout danger">
            <strong>Abbruchkriterien</strong>
            <p>Wolkenaufbau, starker Wind, Restschnee, Unsicherheit auf ungesicherten Passagen oder nachlassende Konzentration.</p>
          </div>
          <span className="photo-tag">Foto: Maurizio Ceol · CC BY 3.0</span>
        </div>
      </section>

      {/* ── Santnerpass ────────────────────────────────── */}
      <section id="santner" className="tour-section tour-reverse">
        <div className="tour-bg">
          <img src="/bergabenteuer-scroll/images/santnerpass.jpg" alt="" className="tour-bg-img" />
        </div>
        <div className="tour-card">
          <p className="eyebrow">Anspruchsvolle Reserve</p>
          <h2>Santnerpass</h2>
          <p className="lead">Ein berühmter Klassiker mit nur teilweise gesicherten Passagen und alpinem Gesamtcharakter.</p>
          <Stats items={[["Schwierigkeit", "B/C"], ["Rundtour", "ca. 6 h"], ["Aufstieg", "ca. 950 hm"], ["Besonderheit", "Eisrinne"]]} />
          <p>Der Steig selbst ist relativ kurz. Die Rundtour enthält jedoch viele ungesicherte Passagen im leichten Klettergelände; die Eisrinne kann selbst im Sommer hart gefroren oder mit Altschnee gefüllt sein.</p>
          <div className="callout">
            <strong>Entscheidung</strong>
            <p>Mit zwei 11-Jährigen nur nach lokaler Beratung und idealerweise geführt. Eine Hüttenwanderung im Vajolet-Gebiet ist eine vollwertige Alternative.</p>
          </div>
          <span className="photo-tag">Foto: Anna Marchenkova · CC BY-SA 4.0</span>
        </div>
      </section>

      {/* ── Valley Cinematic ────────────────────────────── */}
      <section id="valley" className="cinematic-section cinematic-green">
        <div className="cinematic-panel">
          <p className="eyebrow">Ruhetag</p>
          <h2>Val San Nicolò</h2>
          <p className="lead">Der Tag, an dem niemand etwas beweisen muss.</p>
          <div className="valley-options">
            <article><span>Kurz</span><p>Talspaziergang, Wasserstellen und lange Pause.</p></article>
            <article><span>Mittel</span><p>Picknick und eine Hütte als Wendepunkt.</p></article>
            <article><span>Lang</span><p>Nur wenn alle erholt sind — weiterhin ohne Klettersteig-Ziel.</p></article>
          </div>
        </div>
      </section>

      {/* ── Return ──────────────────────────────────────── */}
      <section id="rueckreise" className="panel-section">
        <div className="panel">
          <p className="eyebrow">Rückreise · Nauders</p>
          <h2>Goldgrat oder See?</h2>
          <p className="lead">Beides ist ein guter Abschluss — nur für unterschiedliche Energiereserven.</p>
          <div className="return-grid">
            <article className="active-card">
              <p className="eyebrow light">Aktiv</p>
              <h3>Goldgrat Nauders</h3>
              <p>Vier Sektionen, zwei Ausstiegsmöglichkeiten, überwiegend A/B mit einzelnen C-Stellen. Vollständig dennoch ein langer Hochgebirgstag.</p>
              <Stats items={[["Kletterzeit", "ca. 3 h"], ["Gesamttour", "ca. 6–7 h"]]} />
              <a className="text-link light" href="https://www.nauders.com/en/Your-Nauders/In-Summer/Climbing/Klettersteig-Goldgrat" target="_blank" rel="noopener noreferrer">Offizielle Tourinfo ↗</a>
            </article>
            <article className="lake-card">
              <p className="eyebrow">Ruhig</p>
              <h3>Reschensee</h3>
              <p>Spaziergang am See und der bekannte Kirchturm als letztes Fotomotiv. Die bessere Wahl, wenn die Beine bereits viele Touren hinter sich haben.</p>
              <blockquote>Ein leichter Abschluss macht die Heimfahrt angenehmer.</blockquote>
            </article>
          </div>
        </div>
      </section>

      {/* ── Practice ────────────────────────────────────── */}
      <section id="praxis" className="panel-section panel-practice">
        <div className="panel">
          <p className="eyebrow">Vor jedem Start</p>
          <h2>Sicher klettern,<br />entspannt bleiben</h2>
          <p className="lead">Die wichtigste Ausrüstung ist ein Plan, der jederzeit kleiner werden darf. Alle vier müssen am Morgen klar Ja sagen können.</p>
          <div className="check-grid">
            {checklist.map(([title, copy]) => (
              <article key={title}>
                <span aria-hidden="true">✓</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
          <div className="practice-bottom">
            <div>
              <h3>Immer im Rucksack</h3>
              <p className="tags"><span>Wasser</span><span>Brotzeit</span><span>Erste Hilfe</span><span>Sonnenschutz</span><span>Warme Schicht</span><span>Stirnlampe</span></p>
            </div>
            <div className="emergency">
              <strong>Notruf</strong>
              <b>112</b>
              <p>Europaweit · In Österreich zusätzlich Alpinnotruf 140</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer>
        <div className="footer-inner">
          <p>Band 1 · Ötztal & Dolomiten · 2026</p>
          <a href="/bergabenteuer-scroll/downloads/Unsere_Bergabenteuer_Band1_Oetztal_Dolomiten_2026_V2.pdf" download>PDF herunterladen</a>
        </div>
      </footer>
    </div>
  );
}
