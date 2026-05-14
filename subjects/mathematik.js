/* =========================================================
   SchoolFools – Mathematik
   Datei: mathematik.js

   Zweck:
   - Mathematik ist NICHT mehr nach GYM1/GYM2/GYM3/GYM4 organisiert
   - Mathematik ist wie Anwendung der Mathematik direkt nach Themen aufgebaut
   - Alle Themen werden später nur in MATH_THEMEN ergänzt
   - Keine echten Prüfungsaufgaben
   - Keine kopierten Inhalte
   - Alles selbst erstellte Lerninhalte

   Benötigte Render-Funktion:
   render_mathematik(container)
========================================================= */


/* =========================
   DATENBANK DER THEMEN
   HIER SPÄTER DEINE THEMEN EINFÜGEN
========================= */

const MATH_THEMEN = [
  /*
  Beispiel-Aufbau:

  {
    id: "logarithmen-potenzen",
    nummer: "1",
    titel: "Logarithmen und Potenzen",
    kurzbeschreibung:
      "Potenzen mit rationalen Exponenten, Logarithmengesetze und Exponentialgleichungen verständlich erklärt.",
    lernziele: [
      "Du kannst Potenzen mit rationalen Exponenten umformen.",
      "Du verstehst Logarithmen als Umkehrung des Potenzierens."
    ],
    theorie: [
      {
        titel: "Was ist ein Logarithmus?",
        text:
          "Ein Logarithmus ist ein Exponent. Die Gleichung log_a(b) = x bedeutet a^x = b."
      }
    ],
    methoden: [
      {
        titel: "Methode: Exponentialgleichung lösen",
        schritte: [
          "1. Prüfe, ob gleiche Basen hergestellt werden können.",
          "2. Wenn nicht, logarithmiere beide Seiten.",
          "3. Ziehe den Exponenten nach vorne.",
          "4. Löse nach der gesuchten Variable auf."
        ]
      }
    ],
    merksaetze: [
      "Ein Logarithmus ist ein Exponent.",
      "Bei Logarithmusgleichungen müssen die Argumente positiv sein."
    ],
    typischeFehler: [
      {
        fehler: "Man schreibt log(x + y) = log(x) + log(y).",
        korrektur:
          "Für Summen gibt es kein Logarithmengesetz."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Logarithmusgleichung",
        schwierigkeit: "einfach",
        aufgabe:
          "Löse log_2(x) = 3.",
        loesung: [
          "Schreibe die Gleichung als Potenzgleichung.",
          "x = 2^3.",
          "Also ist x = 8."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist ein Logarithmus?",
        antwort:
          "Ein Logarithmus ist der Exponent, mit dem man eine Basis potenzieren muss, um eine bestimmte Zahl zu erhalten."
      }
    ],
    nachtVorTest: [
      "Kannst du Potenzgesetze anwenden?",
      "Kannst du Logarithmusgleichungen lösen?",
      "Prüfst du den Definitionsbereich?"
    ]
  }
  */
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_mathematik(container) {
  if (!container) {
    console.error("render_mathematik: Kein Container gefunden.");
    return;
  }

  injectMathStyles();

  if (!Array.isArray(MATH_THEMEN) || MATH_THEMEN.length === 0) {
    container.innerHTML = `
      <section class="sf-math-page">
        <div class="sf-math-hero">
          <h1>Mathematik</h1>
          <p>
            Prüfungsvorbereitung mit selbst erstellten Erklärungen, Methoden,
            Aufgaben, Lösungen und mündlichen Prüfungsfragen.
          </p>
        </div>

        <div class="sf-math-empty">
          <h2>Noch keine Themen eingefügt</h2>
          <p>
            Füge deine Mathematik-Themen in die Konstante
            <strong>MATH_THEMEN</strong> ein. Danach erscheinen sie automatisch
            links in der Themenliste.
          </p>
        </div>
      </section>
    `;
    return;
  }

  container.innerHTML = `
    <section class="sf-math-page">
      <div class="sf-math-hero">
        <h1>Mathematik</h1>
        <p>
          Prüfungsvorbereitung mit selbst erstellten Erklärungen, Methoden,
          Aufgaben, Lösungen und mündlichen Prüfungsfragen.
        </p>
      </div>

      <div class="sf-math-layout">
        <aside class="sf-math-sidebar">
          <h2>Themen</h2>
          <div class="sf-math-topic-list">
            ${MATH_THEMEN.map((thema, index) => `
              <button
                class="sf-math-topic-button ${index === 0 ? "active" : ""}"
                data-topic-id="${escapeMathHTML(thema.id)}">
                <span>${escapeMathHTML(thema.nummer)}</span>
                ${escapeMathHTML(thema.titel)}
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-math-content" id="sf-math-content"></main>
      </div>
    </section>
  `;

  const content = container.querySelector("#sf-math-content");
  const buttons = container.querySelectorAll(".sf-math-topic-button");

  function showTopic(topicId) {
    const thema = MATH_THEMEN.find(t => t.id === topicId);
    if (!thema) return;

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.topicId === topicId);
    });

    content.innerHTML = renderMathTopic(thema);
    attachMathInteractions(content);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      showTopic(button.dataset.topicId);
    });
  });

  showTopic(MATH_THEMEN[0].id);
}


/* =========================
   EINZELNES THEMA RENDERN
========================= */

function renderMathTopic(thema) {
  return `
    <article class="sf-math-topic">
      <div class="sf-math-topic-header">
        <p class="sf-math-kicker">Thema ${escapeMathHTML(thema.nummer)}</p>
        <h2>${escapeMathHTML(thema.titel)}</h2>
        <p>${escapeMathHTML(thema.kurzbeschreibung)}</p>
      </div>

      ${renderMathSection("Lernziele", renderMathList(thema.lernziele))}
      ${renderMathTheory(thema.theorie)}
      ${renderMathMethods(thema.methoden)}
      ${renderMathSection("Merksätze", renderMathList(thema.merksaetze))}
      ${renderMathErrors(thema.typischeFehler)}
      ${renderMathExercises(thema.aufgaben)}
      ${renderMathOral(thema.muendlich)}
      ${renderMathSection("Nacht-vor-dem-Test-Check", renderMathChecklist(thema.nachtVorTest))}

      <div class="sf-math-disclaimer">
        <strong>Hinweis:</strong>
        Alle Inhalte und Aufgaben auf dieser Seite sind selbst erstellt und dienen
        der Prüfungsvorbereitung. Es handelt sich nicht um kopierte Originalprüfungen
        oder fremde Schulunterlagen.
      </div>
    </article>
  `;
}


function renderMathSection(title, content) {
  return `
    <section class="sf-math-card">
      <h3>${escapeMathHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderMathTheory(items) {
  if (!items || items.length === 0) return "";

  return `
    <section class="sf-math-card">
      <h3>Theorie einfach erklärt</h3>
      <div class="sf-math-grid">
        ${items.map(item => `
          <div class="sf-math-mini-card">
            <h4>${escapeMathHTML(item.titel)}</h4>
            <p>${escapeMathHTML(item.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathMethods(methoden) {
  if (!methoden || methoden.length === 0) return "";

  return `
    <section class="sf-math-card">
      <h3>Methoden</h3>
      <div class="sf-math-accordion">
        ${methoden.map(methode => `
          <div class="sf-math-accordion-item">
            <button class="sf-math-accordion-toggle" type="button">
              <span>${escapeMathHTML(methode.titel)}</span>
              <span class="sf-math-plus">+</span>
            </button>
            <div class="sf-math-accordion-body">
              ${renderMathOrderedList(methode.schritte)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathErrors(errors) {
  if (!errors || errors.length === 0) return "";

  return `
    <section class="sf-math-card">
      <h3>Typische Fehler</h3>
      <div class="sf-math-error-list">
        ${errors.map(item => `
          <div class="sf-math-error-card">
            <h4>Fehler</h4>
            <p>${escapeMathHTML(item.fehler)}</p>
            <h4>Korrektur</h4>
            <p>${escapeMathHTML(item.korrektur)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathExercises(exercises) {
  if (!exercises || exercises.length === 0) return "";

  return `
    <section class="sf-math-card">
      <h3>Eigene Übungsaufgaben mit Lösung</h3>
      <div class="sf-math-exercises">
        ${exercises.map(exercise => `
          <div class="sf-math-exercise">
            <div class="sf-math-exercise-top">
              <h4>${escapeMathHTML(exercise.titel)}</h4>
              <span>${escapeMathHTML(exercise.schwierigkeit)}</span>
            </div>
            <p>${escapeMathHTML(exercise.aufgabe)}</p>
            <button class="sf-math-solution-button" type="button">
              Lösung anzeigen
            </button>
            <div class="sf-math-solution">
              ${renderMathOrderedList(exercise.loesung)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathOral(items) {
  if (!items || items.length === 0) return "";

  return `
    <section class="sf-math-card">
      <h3>Mündliche Prüfungsfragen</h3>
      <div class="sf-math-oral-list">
        ${items.map(item => `
          <div class="sf-math-oral-card">
            <h4>${escapeMathHTML(item.frage)}</h4>
            <p>${escapeMathHTML(item.antwort)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


/* =========================
   HILFSFUNKTIONEN
========================= */

function renderMathList(items) {
  if (!items || items.length === 0) {
    return `<p class="sf-math-muted">Noch keine Inhalte eingefügt.</p>`;
  }

  return `
    <ul class="sf-math-list">
      ${items.map(item => `<li>${escapeMathHTML(item)}</li>`).join("")}
    </ul>
  `;
}


function renderMathOrderedList(items) {
  if (!items || items.length === 0) {
    return `<p class="sf-math-muted">Noch keine Lösungsschritte eingefügt.</p>`;
  }

  return `
    <ol class="sf-math-ordered-list">
      ${items.map(item => `<li>${escapeMathHTML(item)}</li>`).join("")}
    </ol>
  `;
}


function renderMathChecklist(items) {
  if (!items || items.length === 0) {
    return `<p class="sf-math-muted">Noch keine Checkliste eingefügt.</p>`;
  }

  return `
    <div class="sf-math-checklist">
      ${items.map(item => `
        <label>
          <input type="checkbox">
          <span>${escapeMathHTML(item)}</span>
        </label>
      `).join("")}
    </div>
  `;
}


function attachMathInteractions(root) {
  const accordionButtons = root.querySelectorAll(".sf-math-accordion-toggle");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".sf-math-accordion-item");
      item.classList.toggle("open");
    });
  });

  const solutionButtons = root.querySelectorAll(".sf-math-solution-button");

  solutionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const solution = button.nextElementSibling;
      const isOpen = solution.classList.toggle("open");
      button.textContent = isOpen ? "Lösung ausblenden" : "Lösung anzeigen";
    });
  });
}


function escapeMathHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================
   CSS EINMALIG EINFÜGEN
========================= */

function injectMathStyles() {
  if (document.getElementById("sf-math-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-math-styles";
  style.textContent = `
    .sf-math-page {
      width: 100%;
      background: #f6f7fb;
      color: #172033;
      font-family: Arial, Helvetica, sans-serif;
      padding: 24px;
      box-sizing: border-box;
      border-radius: 18px;
    }

    .sf-math-hero {
      background: linear-gradient(135deg, #111827, #273449);
      color: white;
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    }

    .sf-math-kicker {
      margin: 0 0 8px 0;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.75;
      font-weight: 700;
    }

    .sf-math-hero h1 {
      margin: 0 0 12px 0;
      font-size: clamp(32px, 5vw, 56px);
      line-height: 1;
    }

    .sf-math-hero p {
      max-width: 780px;
      margin: 0;
      font-size: 18px;
      line-height: 1.6;
      opacity: 0.92;
      color: rgba(255, 255, 255, 0.92);
    }

    .sf-math-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 24px;
      align-items: start;
    }

    .sf-math-sidebar {
      position: sticky;
      top: 20px;
      background: white;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-math-sidebar h2 {
      margin: 0 0 16px 0;
      font-size: 22px;
      color: #172033;
    }

    .sf-math-topic-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-math-topic-button {
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      color: #172033;
      border-radius: 14px;
      padding: 12px 14px;
      text-align: left;
      cursor: pointer;
      font-weight: 700;
      display: flex;
      gap: 10px;
      align-items: center;
      transition: 0.2s ease;
      width: 100%;
      font-size: 15px;
    }

    .sf-math-topic-button span {
      display: inline-flex;
      width: 28px;
      height: 28px;
      align-items: center;
      justify-content: center;
      background: #e5e7eb;
      border-radius: 999px;
      font-size: 13px;
      flex-shrink: 0;
    }

    .sf-math-topic-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
    }

    .sf-math-topic-button.active {
      background: #172033;
      color: white;
      border-color: #172033;
    }

    .sf-math-topic-button.active span {
      background: white;
      color: #172033;
    }

    .sf-math-content {
      min-width: 0;
    }

    .sf-math-topic-header {
      background: white;
      border-radius: 20px;
      padding: 26px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-math-topic-header h2 {
      margin: 0 0 10px 0;
      font-size: 34px;
      color: #172033;
    }

    .sf-math-topic-header p {
      margin: 0;
      font-size: 17px;
      line-height: 1.6;
      color: #4b5563;
    }

    .sf-math-card {
      background: white;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-math-card h3 {
      margin: 0 0 18px 0;
      font-size: 24px;
      color: #172033;
    }

    .sf-math-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .sf-math-mini-card,
    .sf-math-error-card,
    .sf-math-oral-card,
    .sf-math-exercise {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
      background: #f9fafb;
    }

    .sf-math-mini-card h4,
    .sf-math-error-card h4,
    .sf-math-oral-card h4,
    .sf-math-exercise h4 {
      margin: 0 0 8px 0;
      font-size: 18px;
      color: #172033;
    }

    .sf-math-mini-card p,
    .sf-math-error-card p,
    .sf-math-oral-card p,
    .sf-math-exercise p {
      margin: 0;
      line-height: 1.6;
      color: #374151;
    }

    .sf-math-list,
    .sf-math-ordered-list {
      margin: 0;
      padding-left: 22px;
      line-height: 1.8;
      color: #374151;
    }

    .sf-math-list li,
    .sf-math-ordered-list li {
      margin-bottom: 6px;
    }

    .sf-math-accordion {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .sf-math-accordion-item {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      background: #f9fafb;
    }

    .sf-math-accordion-toggle {
      width: 100%;
      border: 0;
      background: transparent;
      padding: 16px 18px;
      cursor: pointer;
      font-weight: 800;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #172033;
      text-align: left;
    }

    .sf-math-plus {
      font-size: 24px;
      line-height: 1;
      transition: 0.2s ease;
    }

    .sf-math-accordion-body {
      display: none;
      padding: 0 18px 18px 18px;
    }

    .sf-math-accordion-item.open .sf-math-accordion-body {
      display: block;
    }

    .sf-math-accordion-item.open .sf-math-plus {
      transform: rotate(45deg);
    }

    .sf-math-error-list,
    .sf-math-oral-list,
    .sf-math-exercises {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .sf-math-error-card h4:nth-of-type(1) {
      color: #991b1b;
    }

    .sf-math-error-card h4:nth-of-type(2) {
      margin-top: 14px;
      color: #166534;
    }

    .sf-math-exercise-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 12px;
      margin-bottom: 10px;
    }

    .sf-math-exercise-top span {
      background: #e5e7eb;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 13px;
      font-weight: 700;
      color: #374151;
      white-space: nowrap;
    }

    .sf-math-solution-button {
      margin-top: 14px;
      border: 0;
      background: #172033;
      color: white;
      border-radius: 12px;
      padding: 10px 14px;
      font-weight: 700;
      cursor: pointer;
      font-size: 15px;
    }

    .sf-math-solution-button:hover {
      background: #273449;
    }

    .sf-math-solution {
      display: none;
      margin-top: 14px;
      padding: 16px;
      border-radius: 14px;
      background: white;
      border: 1px solid #e5e7eb;
    }

    .sf-math-solution.open {
      display: block;
    }

    .sf-math-checklist {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .sf-math-checklist label {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 12px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      cursor: pointer;
      line-height: 1.5;
      color: #374151;
    }

    .sf-math-checklist input {
      margin-top: 3px;
    }

    .sf-math-disclaimer {
      background: #fff7ed;
      border: 1px solid #fed7aa;
      color: #7c2d12;
      border-radius: 18px;
      padding: 18px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .sf-math-empty {
      background: white;
      border-radius: 20px;
      padding: 26px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-math-empty h2 {
      margin: 0 0 10px 0;
      color: #172033;
    }

    .sf-math-empty p {
      margin: 0;
      color: #374151;
      line-height: 1.6;
    }

    .sf-math-muted {
      color: #6b7280;
      margin: 0;
      line-height: 1.6;
    }

    @media (max-width: 900px) {
      .sf-math-layout {
        grid-template-columns: 1fr;
      }

      .sf-math-sidebar {
        position: static;
      }

      .sf-math-grid {
        grid-template-columns: 1fr;
      }

      .sf-math-page {
        padding: 14px;
      }

      .sf-math-hero {
        padding: 24px;
      }

      .sf-math-topic-header h2 {
        font-size: 28px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_mathematik = render_mathematik;
