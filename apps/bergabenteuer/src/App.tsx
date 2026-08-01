const route = [
  { number: "01", place: "SÃ¶lden", region: "Ã–tztal", note: "Wasserfall-Klettersteige & sportliche Reserve" },
  { number: "02", place: "Timmelsjoch", region: "Moos & Meran", note: "Passfahrt, optionale Ferrata & Eis" },
  { number: "03", place: "Pozza di Fassa", region: "Dolomiten", note: "Rosengarten, Gratwege & flexible Bergtage" },
  { number: "04", place: "Nauders", region: "Reschensee", note: "Goldgrat oder ruhiger Abschluss am See" },
];

const oetztalHighlights = [
  ["01", "Stuibenfall", "Gischt direkt neben dem Drahtseil."],
  ["02", "Lehner Wasserfall", "Originalroute und SeilbrÃ¼cke â€“ ohne E-Variante."],
  ["03", "Gaislachkogl", "Hochgebirge ohne zusÃ¤tzlichen Klettertag."],
  ["04", "Schiestl als Reserve", "Steil, sportlich und nur mit echten Reserven."],
  ["05", "Ein freier Nachmittag", "Erholung ist Teil des Plans."],
];

const dolomitesHighlights = [
  ["01", "Roda di Vael", "Der beste Einstieg â€“ technisch moderat, insgesamt ernst."],
  ["02", "Bepi Zac", "Ein langer Gratweg durch Stellungen und Tunnel."],
  ["03", "Santnerpass", "GroÃŸer Klassiker als anspruchsvolle Reserve."],
  ["04", "Val San NicolÃ²", "Wiesen, Wasser und freie Pausenwahl."],
  ["05", "HÃ¼ttenterrasse", "Ein langer Mittag darf das Wochenhighlight sein."],
];

const checklist = [
  ["Wetter", "Kein Gewitterfenster, kein starker Wind, keine Ã¼berraschenden Schneereste."],
  ["Material", "Helm, Gurt, normgerechtes Set, Handschuhe, Erste Hilfe, geladenes Telefon."],
  ["Kinder", "ZusÃ¤tzliche Seilsicherung dort, wo Empfehlung oder Situation sie nahelegt."],
  ["AbstÃ¤nde", "Nur eine Person im Seilabschnitt zwischen zwei Verankerungen."],
  ["Energie", "Wasser, Brotzeit, Sonnenschutz und warme Reservekleidung."],
  ["Abbruch", "Vorher festlegen, wann umgedreht oder ein frÃ¼her Ausstieg genommen wird."],
];

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

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Hauptnavigation">
        <a href="#start" className="brand" aria-label="Zum Anfang">
          <MountainMark />
          <span>Unsere Bergabenteuer</span>
        </a>
        <div className="navlinks">
          <a href="#route">Route</a>
          <a href="#oetztal">Ã–tztal</a>
          <a href="#dolomiten">Dolomiten</a>
          <a href="#rueckreise">RÃ¼ckreise</a>
          <a href="#praxis">Praxis</a>
        </div>
        <a
          className="download small"
          href="/bergabenteuer/downloads/Unsere_Bergabenteuer_Band1_Oetztal_Dolomiten_2026_V2.pdf"
          download
        >
          PDF
        </a>
      </nav>

      <section id="start" className="hero">
        <img
          src="/bergabenteuer/images/roda-di-vael.jpg"
          alt="Rotwand im Rosengarten der Dolomiten"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Familien-AlpenfÃ¼hrer Â· Band 1</p>
          <h1>
            Unsere
            <br />
            Bergabenteuer
          </h1>
          <p className="hero-sub">Ã–tztal & Dolomiten Â· Sommer 2026</p>
          <p className="hero-meta">2 Erwachsene Â· 2 Kinder (11 Jahre)</p>
          <div className="hero-actions">
            <a className="download" href="#route">
              Reise entdecken <span aria-hidden="true">â†“</span>
            </a>
            <a
              className="text-link light"
              href="/bergabenteuer/downloads/Unsere_Bergabenteuer_Band1_Oetztal_Dolomiten_2026_V2.pdf"
              download
            >
              BroschÃ¼re laden
            </a>
          </div>
        </div>
        <p className="photo-credit">Foto: Maurizio Ceol Â· CC BY 3.0</p>
      </section>

      <section id="route" className="section route-section">
        <div className="intro-grid">
          <SectionHead
            kicker="Ãœberblick"
            title="Drei Bergwelten, eine Reise"
            copy="Ã–tztaler Granit, SÃ¼dtiroler Ãœbergang und die hellen WÃ¤nde des Rosengartens. Der Plan bleibt bewusst flexibel: Wetter, Kraft und Lust bestimmen die Reihenfolge."
          />
          <blockquote>
            Lieber eine Tour frÃ¼her abbrechen und mit guter Stimmung zurÃ¼ckkehren,
            als den Plan um jeden Preis vollstÃ¤ndig abzuhaken.
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
            den Dolomiten entscheiden nicht nur Buchstaben: LÃ¤nge, HÃ¶he,
            Alt-Schnee und ungesicherte Passagen sind oft der eigentliche Anspruch.
          </p>
        </div>
      </section>

      <section id="oetztal" className="chapter chapter-blue">
        <div className="section">
          <div className="chapter-grid">
            <SectionHead
              kicker="Woche 1 Â· Ã–tztal"
              title="Wasser, Fels und Hochgebirge"
              copy="Zwei starke Familien-Klettersteige, eine sportliche Reserve und ein entspannter Panoramatag."
            />
            <Highlights items={oetztalHighlights} />
          </div>
        </div>
      </section>

      <section className="section tour" id="lehner">
        <div className="tour-image">
          <img
            src="/bergabenteuer/images/lehner-wasserfall.jpg"
            alt="Klettersteig am Lehner Wasserfall"
          />
          <span>Foto: Fuchs Robert Â· CC BY 3.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Kernoption 1</p>
          <h2>Lehner Wasserfall</h2>
          <p className="lead">
            Kompakt, eindrucksvoll und mit einer klaren Familienlinie. Die linke
            E-Variante bleibt bewusst auÃŸen vor.
          </p>
          <Stats
            items={[
              ["Schwierigkeit", "B/C, kurz D"],
              ["Gesamtzeit", "ca. 3â€“3,5 h"],
              ["HÃ¶henmeter", "ca. 220 hm"],
              ["Familienlinie", "Originalroute"],
            ]}
          />
          <div className="copy-columns">
            <div>
              <h3>Die richtige Linie</h3>
              <p>
                Rechts vom Wasserfall verlÃ¤uft die deutlich leichtere
                Originalroute. Der kurze D-Ãœberhang kann umgangen werden. Die
                linke Variante enthÃ¤lt eine E-Passage und ist nicht fÃ¼r Kinder
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
            rel="noreferrer"
          >
            Aktuelle Tourinfo â†—
          </a>
        </div>
      </section>

      <section className="section compact-tour">
        <div>
          <p className="eyebrow">Kernoption 2</p>
          <h2>Stuibenfall</h2>
          <p className="lead">
            Die spektakulÃ¤rste Familienoption: viel B-GelÃ¤nde, zwei kurze
            C-Stellen und Wasserfall-Panorama.
          </p>
        </div>
        <Stats
          items={[
            ["Schwierigkeit", "C, meist B"],
            ["Gesamtzeit", "ca. 3,5â€“4 h"],
            ["KletterlÃ¤nge", "ca. 450 m"],
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
              FrÃ¼h starten. Die Drahtseilquerung am Ende nur angehen, wenn alle
              konzentriert sind â€“ sie kann leicht umgangen werden.
            </p>
          </article>
          <article className="callout">
            <h3>Kinder-Sicherung</h3>
            <p>
              FÃ¼r Kinder ab etwa 10 Jahren und 1,40 m wird eine zusÃ¤tzliche
              Seilsicherung empfohlen.
            </p>
          </article>
        </div>
        <a
          className="text-link"
          href="https://www.oetztal.com/de/regionen-orte/oetztal-a-z/stuibenfall-tirols-groesster-wasserfall.i-2e167aba-7e9a-4900-997c-fb7229210867"
          target="_blank"
          rel="noreferrer"
        >
          Aktuelle Tourinfo â†—
        </a>
      </section>

      <section className="split-band">
        <div className="section split-band-inner">
          <article>
            <p className="eyebrow">Sportliche Reserve</p>
            <h2>Reinhard-Schiestl</h2>
            <p>
              Fast senkrechter Granit, C/D am Einstieg und eine D-Steilstufe:
              Armkraft und sehr gute Technik sind nÃ¶tig. Nicht als Standardtour
              fÃ¼r zwei 11-JÃ¤hrige planen.
            </p>
            <Stats
              items={[
                ["Gesamtzeit", "2,5â€“3 h"],
                ["WandhÃ¶he", "ca. 200 hm"],
              ]}
            />
            <a
              className="text-link light"
              href="https://www.oetztal.com/de/aktivitaeten/alle-routen-touren/klettersteig-reinhard-schiestl-laengenfeld.r-19600293"
              target="_blank"
              rel="noreferrer"
            >
              Offizielle Tourinfo â†—
            </a>
          </article>
          <article className="rest-card">
            <p className="eyebrow">Erholung</p>
            <h2>Gaislachkogl & Tal</h2>
            <p>
              Hochgebirge ohne Kletterdruck: ausschlafen, eine kurze HÃ¶henrunde,
              frÃ¼h zurÃ¼ck ins Tal â€“ oder gleich Bad, Museum und Spaziergang.
            </p>
            <strong>Faustregel</strong>
            <p>
              Nach zwei fordernden Tagen folgt ein leichter Tag â€“ unabhÃ¤ngig
              davon, wie gut die Wetter-App aussieht.
            </p>
          </article>
        </div>
      </section>

      <section id="transfer" className="section transfer">
        <SectionHead
          kicker="Transfertag"
          title="Ãœber den Pass, an den Fels, zum Eis"
          copy="Der Weg von SÃ¶lden nach Pozza di Fassa wird selbst zum Reisetag â€“ ohne Zeitdruck und mit einer klaren leichten Variante."
        />
        <div className="transfer-steps">
          <article>
            <span>01</span>
            <h3>Timmelsjoch</h3>
            <p>Landschaftspause statt bloÃŸer Durchfahrt. StraÃŸenstatus am Vorabend prÃ¼fen.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Stuller Wasserfall</h3>
            <p>Nur mit sauberer Variantenwahl, genÃ¼gend Zeit und idealerweise gefÃ¼hrt.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Meran</h3>
            <p>Altstadtbummel unter den Lauben â€“ und das versprochene Eis.</p>
          </article>
        </div>
        <div className="wide-callout">
          <strong>Klare Empfehlung</strong>
          <p>
            Den Stuller Wasserfall nicht als schnellen Zwischenstopp
            unterschÃ¤tzen. Wenn Zeit oder Kraft nicht passen: Moos kurz ansehen
            und direkt zum entspannten Teil nach Meran.
          </p>
        </div>
      </section>

      <section id="dolomiten" className="chapter chapter-green">
        <div className="section">
          <div className="chapter-grid">
            <SectionHead
              kicker="Woche 2 Â· Dolomiten"
              title="Gratwege, Geschichte und Ruhe"
              copy="Technisch oft moderat, insgesamt aber lang, hoch und exponiert. Roda di Vael ist der beste Einstieg."
            />
            <Highlights items={dolomitesHighlights} />
          </div>
        </div>
      </section>

      <section className="section tour reverse" id="roda">
        <div className="tour-image">
          <img
            src="/bergabenteuer/images/roda-di-vael.jpg"
            alt="Rotwand und Roda di Vael im Rosengarten"
          />
          <span>Foto: Maurizio Ceol Â· CC BY 3.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Kernoption 1</p>
          <h2>Roda di Vael Ã¼ber Vajolon</h2>
          <p className="lead">
            Technisch relativ leicht. Der Anspruch entsteht durch langen
            Zustieg, HÃ¶he und den gesamten Rundweg.
          </p>
          <Stats
            items={[
              ["Ferrata", "A/B"],
              ["Kletterzeit", "ca. 1,5 h"],
              ["Gesamttour", "ca. 4,5â€“6 h"],
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
              Mit der Paolina-Bahn den Zustieg verkÃ¼rzen. Am Vajolon-Pass
              ehrlich prÃ¼fen, ob alle konzentriert und wetterfest sind.
            </p>
          </div>
        </div>
      </section>

      <section className="section tour" id="bepi">
        <div className="tour-image">
          <img
            src="/bergabenteuer/images/bepi-zac.jpg"
            alt="Felsfenster an der Alta Via Bepi Zac"
          />
          <span>Foto: Maurizio Ceol Â· CC BY 3.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Kernoption 2 Â· lang</p>
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
                Stellungen, LaufgrÃ¤ben, Galerien und Felsfenster begleiten den
                Grat. Eine Stirnlampe gehÃ¶rt in jeden Rucksack.
              </p>
            </div>
            <div>
              <h3>Familienvariante</h3>
              <p>
                Nicht zwingend die vollstÃ¤ndige Ãœberschreitung planen. Die erste
                HÃ¤lfte bis zu einem sinnvollen Ausstieg kann die bessere Tour
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
          />
          <span>Foto: Anna Marchenkova Â· CC BY-SA 4.0</span>
        </div>
        <div className="tour-copy">
          <p className="eyebrow">Anspruchsvolle Reserve</p>
          <h2>Santnerpass</h2>
          <p className="lead">
            Ein berÃ¼hmter Klassiker mit nur teilweise gesicherten Passagen und
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
            Der Steig selbst ist relativ kurz. Die Rundtour enthÃ¤lt jedoch viele
            ungesicherte Passagen im leichten KlettergelÃ¤nde; die Eisrinne kann
            selbst im Sommer hart gefroren oder mit Altschnee gefÃ¼llt sein.
          </p>
          <div className="callout">
            <strong>Entscheidung</strong>
            <p>
              Mit zwei 11-JÃ¤hrigen nur nach lokaler Beratung und idealerweise
              gefÃ¼hrt. Eine HÃ¼ttenwanderung im Vajolet-Gebiet ist eine
              vollwertige Alternative.
            </p>
          </div>
        </div>
      </section>

      <section className="valley">
        <div className="section valley-inner">
          <p className="eyebrow light">Ruhetag</p>
          <h2>Val San NicolÃ²</h2>
          <p className="lead">Der Tag, an dem niemand etwas beweisen muss.</p>
          <div className="valley-options">
            <article>
              <span>Kurz</span>
              <p>Talspaziergang, Wasserstellen und lange Pause.</p>
            </article>
            <article>
              <span>Mittel</span>
              <p>Picknick und eine HÃ¼tte als Wendepunkt.</p>
            </article>
            <article>
              <span>Lang</span>
              <p>Nur wenn alle erholt sind â€“ weiterhin ohne Klettersteig-Ziel.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="rueckreise" className="section return">
        <SectionHead
          kicker="RÃ¼ckreise Â· Nauders"
          title="Goldgrat oder See?"
          copy="Beides ist ein guter Abschluss â€“ nur fÃ¼r unterschiedliche Energiereserven."
        />
        <div className="return-grid">
          <article className="active-card">
            <p className="eyebrow light">Aktiv</p>
            <h3>Goldgrat Nauders</h3>
            <p>
              Vier Sektionen, zwei AusstiegsmÃ¶glichkeiten, Ã¼berwiegend A/B mit
              einzelnen C-Stellen. VollstÃ¤ndig dennoch ein langer
              Hochgebirgstag.
            </p>
            <Stats
              items={[
                ["Kletterzeit", "ca. 3 h"],
                ["Gesamttour", "ca. 6â€“7 h"],
              ]}
            />
            <a
              className="text-link light"
              href="https://www.nauders.com/en/Your-Nauders/In-Summer/Climbing/Klettersteig-Goldgrat"
              target="_blank"
              rel="noreferrer"
            >
              Offizielle Tourinfo â†—
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
            copy="Die wichtigste AusrÃ¼stung ist ein Plan, der jederzeit kleiner werden darf. Alle vier mÃ¼ssen am Morgen klar Ja sagen kÃ¶nnen."
          />
          <div className="check-grid">
            {checklist.map(([title, copy]) => (
              <article key={title}>
                <span aria-hidden="true">âœ“</span>
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
              <p>Europaweit Â· In Ã–sterreich zusÃ¤tzlich Alpinnotruf 140</p>
            </div>
          </div>
        </div>
      </section>

      <section id="quellen" className="section sources">
        <div>
          <p className="eyebrow">Dokumentation</p>
          <h2>Quellen & Bildnachweise</h2>
          <p>
            Tourendaten wurden fÃ¼r diese Fassung am 29. Juli 2026 geprÃ¼ft.
            Ã–ffnungen, Sicherungen, Seilbahnbetrieb und Wege kÃ¶nnen sich Ã¤ndern.
          </p>
        </div>
        <details>
          <summary>Alle Hinweise und Bildnachweise anzeigen</summary>
          <div className="source-columns">
            <div>
              <h3>Tourenquellen</h3>
              <ul>
                <li>Ã–tztal Tourismus: Lehner Wasserfall, Stuibenfall, Reinhard-Schiestl</li>
                <li>SÃ¼dtirol Tourismus / Gemeinde Moos: Stuller Wasserfall</li>
                <li>Timmelsjoch HochalpenstraÃŸe: StraÃŸenstatus und Ã–ffnungszeiten</li>
                <li>Val di Fassa / Rosengarten: Roda di Vael und Santnerpass</li>
                <li>Ferrate365: Alta Via Bepi Zac</li>
                <li>Nauders Tourismus: Goldgrat</li>
              </ul>
            </div>
            <div>
              <h3>Verwendete Bilder</h3>
              <ul>
                <li>Lehner Wasserfall â€“ Fuchs Robert â€“ CC BY 3.0</li>
                <li>Rotwand / Roda di Vael â€“ Maurizio Ceol â€“ CC BY 3.0</li>
                <li>Bepi Zac, Felsfenster â€“ Maurizio Ceol â€“ CC BY 3.0</li>
                <li>Santnerpass â€“ Anna Marchenkova â€“ CC BY-SA 4.0</li>
              </ul>
            </div>
          </div>
        </details>
        <div className="legal-note">
          <strong>Wichtiger Hinweis</strong>
          <p>
            Dieses Projekt ersetzt keine aktuelle Zustandsmeldung, Topo oder
            lokale Beratung. FÃ¼r Kinder zÃ¤hlen nicht nur Alter, sondern auch
            KÃ¶rpergrÃ¶ÃŸe, Erfahrung, Reichweite, Kraft und Tagesform.
          </p>
        </div>
      </section>

      <footer>
        <div className="section footer-inner">
          <div className="brand">
            <MountainMark />
            <span>Unsere Bergabenteuer</span>
          </div>
          <p>Band 1 Â· Ã–tztal & Dolomiten Â· 2026</p>
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
