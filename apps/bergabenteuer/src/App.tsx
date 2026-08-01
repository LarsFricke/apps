import { useEffect, useState } from "react";

const topbarLinks = [
  { href: "#route", label: "Route" },
  { href: "#oetztal", label: "Ötztal" },
  { href: "#dolomiten", label: "Dolomiten" },
  { href: "#rueckreise", label: "Rückreise" },
  { href: "#praxis", label: "Praxis" },
];

const route = [
  { number: "01", place: "Sölden", region: "Ötztal", note: "Wasserfall-Klettersteige & sportliche Reserve" },
  { number: "02", place: "Timmelsjoch", region: "Moos & Meran", note: "Passfahrt, optionale Ferrata & Eis" },
  { number: "03", place: "Pozza di Fassa", region: "Dolomiten", note: "Rosengarten, Gratwege & flexible Bergtage" },
  { number: "04", place: "Nauders", region: "Reschensee", note: "Goldgrat oder ruhiger Abschluss am See" },
];

const oetztalHighlights = [
  ["01", "Stuibenfall", "Gischt direkt neben dem Drahtseil."],
  ["02", "Lehner Wasserfall", "Originalroute und Seilbrücke – ohne E-Variante."],
  ["03", "Gaislachkogl", "Hochgebirge ohne zusätzlichen Klettertag."],
  ["04", "Schiestl als Reserve", "Steil, sportlich und nur mit echten Reserven."],
  ["05", "Ein freier Nachmittag", "Erholung ist Teil des Plans."],
];

const dolomitesHighlights = [
  ["01", "Roda di Vael", "Der beste Einstieg – technisch moderat, insgesamt ernst."],
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

const oetztalCompare = [
  { tour: "Lehner Wasserfall", difficulty: "B/C, kurz D", duration: "3–3,5 h", concern: "E-Variante vermeiden", status: "empfohlen" },
  { tour: "Stuibenfall", difficulty: "C, meist B", duration: "3,5–4 h", concern: "Mind. 1,40 m · Seilsicherung", status: "empfohlen" },
  { tour: "Reinhard-Schiestl", difficulty: "C/D · D-Steilstufe", duration: "2,5–3 h", concern: "Nicht mit Kindern planen", status: "reserve" },
  { tour: "Gaislachkogl", difficulty: "–", duration: "halber Tag", concern: "Erholung ohne Druck", status: "ruhetag" },
];

const dolomitesCompare = [
  { tour: "Roda di Vael", difficulty: "A/B", duration: "4,5–6 h", concern: "Höhe · langer Rundweg", status: "empfohlen" },
  { tour: "Bepi Zac", difficulty: "moderat, B", duration: "6,5 h · 12 km", concern: "Sehr lang · Familie: Teilüberschreitung", status: "mit-Variante" },
  { tour: "Santnerpass", difficulty: "B/C", duration: "6 h · 950 hm", concern: "Eisrinne · ungesichert", status: "reserve" },
  { tour: "Val San Nicolò", difficulty: "–", duration: "nach Wahl", concern: "Niemand muss etwas beweisen", status: "ruhetag" },
];

const statusLabels: Record<string, string> = {
  empfohlen: "Empfohlen",
  reserve: "Nur als Reserve",
  ruhetag: "Ruhetag",
  "mit-Variante": "Mit Variante",
};

function MountainMark() {
  return (
    <span className="mountain-mark" aria-hidden="true">
      <i />
      <b />
    </span>
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

function SectionHead({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <header className="section-head">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </header>
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

function ComparisonTable({
  items,
  statusLabel,
}: {
  items: Array<{ tour: string; difficulty: string; duration: string; concern: string; status: string }>;
  statusLabel: Record<string, string>;
}) {
  return (
    <details className="compare">
      <summary>Alle Touren im Vergleich</summary>
      <div className="compare-scroll">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Tour</th>
              <th>Schwierigkeit</th>
              <th>Dauer</th>
              <th>Zu beachten</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((t) => (
              <tr key={t.tour} className={`row-${t.status}`}>
                <td className="col-tour">{t.tour}</td>
                <td>{t.difficulty}</td>
                <td>{t.duration}</td>
                <td>{t.concern}</td>
                <td className={`status status-${t.status}`}>
                  {statusLabel[t.status] ?? t.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="topbar" aria-label="Hauptnavigation">
        <a href="#start" className="brand" aria-label="Zum Anfang">
          <MountainMark />
          <span>Unsere Bergabenteuer</span>
        </a>
        <div className="navlinks">
          {topbarLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span />
          <span />
          <span />
        </button>
        <a
          className="download small"
          href="/bergabenteuer/downloads/Unsere_Bergabenteuer_Band1_Oetztal_Dolomiten_2026_V2.pdf"
          download
        >
          PDF
        </a>
        <div
          className="progress-bar"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </nav>

      <div
        className={`drawer-backdrop${menuOpen ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <aside
        className={`mobile-drawer${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <button
          className="drawer-close"
          onClick={closeMenu}
          aria-label="Menü schließen"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <line x1="3" y1="3" x2="17" y2="17" />
            <line x1="17" y1="3" x2="3" y2="17" />
          </svg>
        </button>
        <nav aria-label="Seitennavigation">
          {topbarLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={activeSection === link.href.slice(1) ? "active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      <section id="start" className="hero">
        <img
          src="/bergabenteuer/images/roda-di-vael.jpg"
          alt="Rotwand im Rosengarten der Dolomiten"
          className="hero-image"
          width="1800"
          height="1350"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Familien-Alpenführer · Band 1</p>
          <h1>
            Unsere
            <br />
            Bergabenteuer
          </h1>
          <p className="hero-sub">Ötztal & Dolomiten · Sommer 2026</p>
          <p className="hero-meta">2 Erwachsene · 2 Kinder (11 Jahre)</p>
          <div className="hero-actions">
            <a className="download" href="#route">
              Reise entdecken <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link light"
              href="/bergabenteuer/downloads/Unsere_Bergabenteuer_Band1_Oetztal_Dolomiten_2026_V2.pdf"
              download
            >
              Broschüre laden
            </a>
          </div>
        </div>
        <p className="photo-credit">Foto: Maurizio Ceol · CC BY 3.0</p>
      </section>

      <section id="route" className="section route-section">
        <div className="intro-grid">
          <SectionHead
            kicker="Überblick"
            title="Drei Bergwelten, eine Reise"
            copy="Ötztaler Granit, Südtiroler Übergang und die hellen Wände des Rosengartens. Der Plan bleibt bewusst flexibel: Wetter, Kraft und Lust bestimmen die Reihenfolge."
          />
          <blockquote>
            Lieber eine Tour früher abbrechen und mit guter Stimmung zurückkehren,
            als den Plan um jeden Preis vollständig abzuhaken.
          </blockquote>
        </div>
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
          <p>
            Nach zwei fordernden Tagen folgt idealerweise ein leichterer Tag. In
            den Dolomiten entscheiden nicht nur Buchstaben: Länge, Höhe,
            Alt-Schnee und ungesicherte Passagen sind oft der eigentliche Anspruch.
          </p>
        </div>
      </section>

      <section id="oetztal" className="chapter chapter-blue">
        <div className="section">
          <div className="chapter-grid">
            <SectionHead
              kicker="Woche 1 · Ötztal"
              title="Wasser, Fels und Hochgebirge"
              copy="Zwei starke Familien-Klettersteige, eine sportliche Reserve und ein entspannter Panoramatag."
            />
            <Highlights items={oetztalHighlights} />
            <ComparisonTable items={oetztalCompare} statusLabel={statusLabels} />
          </div>
        </div>
      </section>

      <section className="section tour" id="lehner">
        <div className="tour-image">
          <img
            src="/bergabenteuer/images/lehner-wasserfall.jpg"
            alt="Klettersteig am Lehner Wasserfall"
            width="1800"
            height="1350"
            loading="lazy"
            decoding="async"
          />
          <span>Foto: Fuchs Robert · CC BY 3.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Kernoption 1</p>
          <h2>Lehner Wasserfall</h2>
          <p className="lead">
            Kompakt, eindrucksvoll und mit einer klaren Familienlinie. Die linke
            E-Variante bleibt bewusst außen vor.
          </p>
          <Stats
            items={[
              ["Schwierigkeit", "B/C, kurz D"],
              ["Gesamtzeit", "ca. 3–3,5 h"],
              ["Höhenmeter", "ca. 220 hm"],
              ["Familienlinie", "Originalroute"],
            ]}
          />
          <div className="copy-columns">
            <div>
              <h3>Die richtige Linie</h3>
              <p>
                Rechts vom Wasserfall verläuft die deutlich leichtere
                Originalroute. Der kurze D-Überhang kann umgangen werden. Die
                linke Variante enthält eine E-Passage und ist nicht für Kinder
                geeignet.
              </p>
            </div>
            <div className="callout">
              <strong>Familien-Tipp</strong>
              <p>
                Vor dem Einstieg klar vereinbaren: Originalroute, D-Stelle
                umgehen, keine E-Variante.
              </p>
            </div>
          </div>
          <a
            className="text-link"
            href="https://www.oetztal.com/de/aktivitaeten/alle-routen-touren/klettersteig-lehner-wasserfall-laengenfeld.r-19600795"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aktuelle Tourinfo ↗
          </a>
        </div>
      </section>

      <section className="section compact-tour">
        <div>
          <p className="eyebrow">Kernoption 2</p>
          <h2>Stuibenfall</h2>
          <p className="lead">
            Die spektakulärste Familienoption: viel B-Gelände, zwei kurze
            C-Stellen und Wasserfall-Panorama.
          </p>
        </div>
        <Stats
          items={[
            ["Schwierigkeit", "C, meist B"],
            ["Gesamtzeit", "ca. 3,5–4 h"],
            ["Kletterlänge", "ca. 450 m"],
            ["Voraussetzung", "mind. 1,40 m"],
          ]}
        />
        <div className="compact-cards">
          <article>
            <h3>Warum diese Tour?</h3>
            <p>
              Familienfreundlich, aber nicht banal: Erfahrung, Trittsicherheit,
              Schwindelfreiheit und Fitness bleiben Voraussetzung.
            </p>
          </article>
          <article>
            <h3>Tagesstrategie</h3>
            <p>
              Früh starten. Die Drahtseilquerung am Ende nur angehen, wenn alle
              konzentriert sind – sie kann leicht umgangen werden.
            </p>
          </article>
          <article className="callout">
            <h3>Kinder-Sicherung</h3>
            <p>
              Für Kinder ab etwa 10 Jahren und 1,40 m wird eine zusätzliche
              Seilsicherung empfohlen.
            </p>
          </article>
        </div>
        <a
          className="text-link"
          href="https://www.oetztal.com/de/regionen-orte/oetztal-a-z/stuibenfall-tirols-groesster-wasserfall.i-2e167aba-7e9a-4900-997c-fb7229210867"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aktuelle Tourinfo ↗
        </a>
      </section>

      <section className="split-band">
        <div className="section split-band-inner">
          <article>
            <p className="eyebrow">Sportliche Reserve</p>
            <h2>Reinhard-Schiestl</h2>
            <p>
              Fast senkrechter Granit, C/D am Einstieg und eine D-Steilstufe:
              Armkraft und sehr gute Technik sind nötig. Nicht als Standardtour
              für zwei 11-Jährige planen.
            </p>
            <Stats
              items={[
                ["Gesamtzeit", "2,5–3 h"],
                ["Wandhöhe", "ca. 200 hm"],
              ]}
            />
            <a
              className="text-link light"
              href="https://www.oetztal.com/de/aktivitaeten/alle-routen-touren/klettersteig-reinhard-schiestl-laengenfeld.r-19600293"
              target="_blank"
              rel="noopener noreferrer"
            >
              Offizielle Tourinfo ↗
            </a>
          </article>
          <article className="rest-card">
            <p className="eyebrow">Erholung</p>
            <h2>Gaislachkogl & Tal</h2>
            <p>
              Hochgebirge ohne Kletterdruck: ausschlafen, eine kurze Höhenrunde,
              früh zurück ins Tal – oder gleich Bad, Museum und Spaziergang.
            </p>
            <strong>Faustregel</strong>
            <p>
              Nach zwei fordernden Tagen folgt ein leichter Tag – unabhängig
              davon, wie gut die Wetter-App aussieht.
            </p>
          </article>
        </div>
      </section>

      <section id="transfer" className="section transfer">
        <SectionHead
          kicker="Transfertag"
          title="Über den Pass, an den Fels, zum Eis"
          copy="Der Weg von Sölden nach Pozza di Fassa wird selbst zum Reisetag – ohne Zeitdruck und mit einer klaren leichten Variante."
        />
        <div className="transfer-steps">
          <article>
            <span>01</span>
            <h3>Timmelsjoch</h3>
            <p>Landschaftspause statt bloßer Durchfahrt. Straßenstatus am Vorabend prüfen.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Stuller Wasserfall</h3>
            <p>Nur mit sauberer Variantenwahl, genügend Zeit und idealerweise geführt.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Meran</h3>
            <p>Altstadtbummel unter den Lauben – und das versprochene Eis.</p>
          </article>
        </div>
        <div className="wide-callout">
          <strong>Klare Empfehlung</strong>
          <p>
            Den Stuller Wasserfall nicht als schnellen Zwischenstopp
            unterschätzen. Wenn Zeit oder Kraft nicht passen: Moos kurz ansehen
            und direkt zum entspannten Teil nach Meran.
          </p>
        </div>
      </section>

      <section id="dolomiten" className="chapter chapter-green">
        <div className="section">
          <div className="chapter-grid">
            <SectionHead
              kicker="Woche 2 · Dolomiten"
              title="Gratwege, Geschichte und Ruhe"
              copy="Technisch oft moderat, insgesamt aber lang, hoch und exponiert. Roda di Vael ist der beste Einstieg."
            />
            <Highlights items={dolomitesHighlights} />
            <ComparisonTable items={dolomitesCompare} statusLabel={statusLabels} />
          </div>
        </div>
      </section>

      <section className="section tour reverse" id="roda">
        <div className="tour-image">
          <img
            src="/bergabenteuer/images/roda-di-vael.jpg"
            alt="Rotwand und Roda di Vael im Rosengarten"
            width="1800"
            height="1350"
            loading="lazy"
            decoding="async"
          />
          <span>Foto: Maurizio Ceol · CC BY 3.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Kernoption 1</p>
          <h2>Roda di Vael über Vajolon</h2>
          <p className="lead">
            Technisch relativ leicht. Der Anspruch entsteht durch langen
            Zustieg, Höhe und den gesamten Rundweg.
          </p>
          <Stats
            items={[
              ["Ferrata", "A/B"],
              ["Kletterzeit", "ca. 1,5 h"],
              ["Gesamttour", "ca. 4,5–6 h"],
              ["Gipfel", "2.806 m"],
            ]}
          />
          <div className="sequence" aria-label="Tourablauf">
            {["Paolina", "Vajolon-Pass", "Ferrata", "Roda di Vael", "Abstieg"].map(
              (step, index) => (
                <span key={step}>
                  <b>{index + 1}</b>
                  {step}
                </span>
              ),
            )}
          </div>
          <div className="callout">
            <strong>Familien-Tipp</strong>
            <p>
              Mit der Paolina-Bahn den Zustieg verkürzen. Am Vajolon-Pass
              ehrlich prüfen, ob alle konzentriert und wetterfest sind.
            </p>
          </div>
        </div>
      </section>

      <section className="section tour" id="bepi">
        <div className="tour-image">
          <img
            src="/bergabenteuer/images/bepi-zac.jpg"
            alt="Felsfenster an der Alta Via Bepi Zac"
            width="1800"
            height="1350"
            loading="lazy"
            decoding="async"
          />
          <span>Foto: Maurizio Ceol · CC BY 3.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Kernoption 2 · lang</p>
          <h2>Alta Via Bepi Zac</h2>
          <p className="lead">
            Technisch oft moderat, aber lang, exponiert und historisch
            eindrucksvoll.
          </p>
          <Stats
            items={[
              ["Mit Lift", "ca. 6,5 h"],
              ["Distanz", "ca. 12 km"],
              ["Kletterteil", "ca. 4 h"],
              ["Charakter", "Grat & Tunnel"],
            ]}
          />
          <div className="copy-columns">
            <div>
              <h3>Offenes Geschichtsbuch</h3>
              <p>
                Stellungen, Laufgräben, Galerien und Felsfenster begleiten den
                Grat. Eine Stirnlampe gehört in jeden Rucksack.
              </p>
            </div>
            <div>
              <h3>Familienvariante</h3>
              <p>
                Nicht zwingend die vollständige Überschreitung planen. Die erste
                Hälfte bis zu einem sinnvollen Ausstieg kann die bessere Tour
                sein.
              </p>
            </div>
          </div>
          <div className="callout danger">
            <strong>Abbruchkriterien</strong>
            <p>
              Wolkenaufbau, starker Wind, Restschnee, Unsicherheit auf
              ungesicherten Passagen oder nachlassende Konzentration.
            </p>
          </div>
        </div>
      </section>

      <section className="section tour reverse" id="santner">
        <div className="tour-image">
          <img
            src="/bergabenteuer/images/santnerpass.jpg"
            alt="Felslandschaft am Santnerpass"
            width="1800"
            height="1202"
            loading="lazy"
            decoding="async"
          />
          <span>Foto: Anna Marchenkova · CC BY-SA 4.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Anspruchsvolle Reserve</p>
          <h2>Santnerpass</h2>
          <p className="lead">
            Ein berühmter Klassiker mit nur teilweise gesicherten Passagen und
            alpinem Gesamtcharakter.
          </p>
          <Stats
            items={[
              ["Schwierigkeit", "B/C"],
              ["Rundtour", "ca. 6 h"],
              ["Aufstieg", "ca. 950 hm"],
              ["Besonderheit", "Eisrinne"],
            ]}
          />
          <p>
            Der Steig selbst ist relativ kurz. Die Rundtour enthält jedoch viele
            ungesicherte Passagen im leichten Klettergelände; die Eisrinne kann
            selbst im Sommer hart gefroren oder mit Altschnee gefüllt sein.
          </p>
          <div className="callout">
            <strong>Entscheidung</strong>
            <p>
              Mit zwei 11-Jährigen nur nach lokaler Beratung und idealerweise
              geführt. Eine Hüttenwanderung im Vajolet-Gebiet ist eine
              vollwertige Alternative.
            </p>
          </div>
        </div>
      </section>

      <section className="valley">
        <div className="section valley-inner">
          <p className="eyebrow light">Ruhetag</p>
          <h2>Val San Nicolò</h2>
          <p className="lead">Der Tag, an dem niemand etwas beweisen muss.</p>
          <div className="valley-options">
            <article>
              <span>Kurz</span>
              <p>Talspaziergang, Wasserstellen und lange Pause.</p>
            </article>
            <article>
              <span>Mittel</span>
              <p>Picknick und eine Hütte als Wendepunkt.</p>
            </article>
            <article>
              <span>Lang</span>
              <p>Nur wenn alle erholt sind – weiterhin ohne Klettersteig-Ziel.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="rueckreise" className="section return">
        <SectionHead
          kicker="Rückreise · Nauders"
          title="Goldgrat oder See?"
          copy="Beides ist ein guter Abschluss – nur für unterschiedliche Energiereserven."
        />
        <div className="return-grid">
          <article className="active-card">
            <p className="eyebrow light">Aktiv</p>
            <h3>Goldgrat Nauders</h3>
            <p>
              Vier Sektionen, zwei Ausstiegsmöglichkeiten, überwiegend A/B mit
              einzelnen C-Stellen. Vollständig dennoch ein langer
              Hochgebirgstag.
            </p>
            <Stats
              items={[
                ["Kletterzeit", "ca. 3 h"],
                ["Gesamttour", "ca. 6–7 h"],
              ]}
            />
            <a
              className="text-link light"
              href="https://www.nauders.com/en/Your-Nauders/In-Summer/Climbing/Klettersteig-Goldgrat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Offizielle Tourinfo ↗
            </a>
          </article>
          <article className="lake-card">
            <p className="eyebrow">Ruhig</p>
            <h3>Reschensee</h3>
            <p>
              Spaziergang am See und der bekannte Kirchturm als letztes
              Fotomotiv. Die bessere Wahl, wenn die Beine bereits viele Touren
              hinter sich haben.
            </p>
            <blockquote>
              Ein leichter Abschluss macht die Heimfahrt angenehmer.
            </blockquote>
          </article>
        </div>
      </section>

      <section id="praxis" className="practice">
        <div className="section">
          <SectionHead
            kicker="Vor jedem Start"
            title="Sicher klettern, entspannt bleiben"
            copy="Die wichtigste Ausrüstung ist ein Plan, der jederzeit kleiner werden darf. Alle vier müssen am Morgen klar Ja sagen können."
          />
          <div className="check-grid">
            {checklist.map(([title, copy]) => (
              <article key={title}>
                <span aria-hidden="true">✓</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="practice-bottom">
            <div>
              <h3>Immer im Rucksack</h3>
              <p className="tags">
                <span>Wasser</span><span>Brotzeit</span><span>Erste Hilfe</span>
                <span>Sonnenschutz</span><span>Warme Schicht</span><span>Stirnlampe</span>
              </p>
            </div>
            <div className="emergency">
              <strong>Notruf</strong>
              <b>112</b>
              <p>Europaweit · In Österreich zusätzlich Alpinnotruf 140</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quellen" className="section sources">
        <div>
          <p className="eyebrow">Dokumentation</p>
          <h2>Quellen & Bildnachweise</h2>
          <p>
            Tourendaten wurden für diese Fassung am 29. Juli 2026 geprüft.
            Öffnungen, Sicherungen, Seilbahnbetrieb und Wege können sich ändern.
          </p>
        </div>
        <details>
          <summary>Alle Hinweise und Bildnachweise anzeigen</summary>
          <div className="source-columns">
            <div>
              <h3>Tourenquellen</h3>
              <ul>
                <li>Ötztal Tourismus: Lehner Wasserfall, Stuibenfall, Reinhard-Schiestl</li>
                <li>Südtirol Tourismus / Gemeinde Moos: Stuller Wasserfall</li>
                <li>Timmelsjoch Hochalpenstraße: Straßenstatus und Öffnungszeiten</li>
                <li>Val di Fassa / Rosengarten: Roda di Vael und Santnerpass</li>
                <li>Ferrate365: Alta Via Bepi Zac</li>
                <li>Nauders Tourismus: Goldgrat</li>
              </ul>
            </div>
            <div>
              <h3>Verwendete Bilder</h3>
              <ul>
                <li>Lehner Wasserfall – Fuchs Robert – CC BY 3.0</li>
                <li>Rotwand / Roda di Vael – Maurizio Ceol – CC BY 3.0</li>
                <li>Bepi Zac, Felsfenster – Maurizio Ceol – CC BY 3.0</li>
                <li>Santnerpass – Anna Marchenkova – CC BY-SA 4.0</li>
              </ul>
            </div>
          </div>
        </details>
        <div className="legal-note">
          <strong>Wichtiger Hinweis</strong>
          <p>
            Dieses Projekt ersetzt keine aktuelle Zustandsmeldung, Topo oder
            lokale Beratung. Für Kinder zählen nicht nur Alter, sondern auch
            Körpergröße, Erfahrung, Reichweite, Kraft und Tagesform.
          </p>
        </div>
      </section>

      <footer>
        <div className="section footer-inner">
          <div className="brand">
            <MountainMark />
            <span>Unsere Bergabenteuer</span>
          </div>
          <p>Band 1 · Ötztal & Dolomiten · 2026</p>
          <a
            href="/bergabenteuer/downloads/Unsere_Bergabenteuer_Band1_Oetztal_Dolomiten_2026_V2.pdf"
            download
          >
            PDF herunterladen
          </a>
        </div>
      </footer>
    </main>
  );
}
