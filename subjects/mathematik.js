/* =========================================================
   SchoolFools – Mathematik
   Datei: mathematik.js

   Zweck:
   - Mathematik wird wie Anwendung der Mathematik direkt nach Themen organisiert
   - Keine GYM1/GYM2/GYM3/GYM4-Unterteilung mehr
   - Alle Themen werden später nur in MATHEMATIK_THEMEN ergänzt
   - Keine echten Prüfungsaufgaben
   - Keine kopierten Inhalte
   - Alles selbst erstellte Lerninhalte

   Benötigte Render-Funktion:
   render_mathematik(container)
========================================================= */


/* =========================
   DATENBANK DER THEMEN
========================= */

const MATHEMATIK_THEMEN = [
  {
    id: "logarithmen-potenzen",
    nummer: "1",
    titel: "Logarithmen und Potenzen",
    kurzbeschreibung:
      "Potenzen mit rationalen Exponenten, Wurzeln, Potenzgesetze, Logarithmen, Logarithmengesetze und Exponentialgleichungen verständlich erklärt.",
    lernziele: [
      "Du kannst Potenzen mit rationalen Exponenten als Wurzeln schreiben.",
      "Du kannst Wurzeln in Potenzschreibweise umformen.",
      "Du beherrschst die wichtigsten Potenzgesetze.",
      "Du verstehst den Logarithmus als Umkehrung des Potenzierens.",
      "Du kannst Logarithmusgleichungen lösen.",
      "Du kannst Exponentialgleichungen lösen.",
      "Du beachtest Definitionsbedingungen bei Wurzeln und Logarithmen.",
      "Du erkennst typische Prüfungsfallen bei Logarithmen und Potenzen."
    ],
    theorie: [
      {
        titel: "Potenzen mit rationalen Exponenten",
        text:
          "Ein rationaler Exponent ist ein Exponent, der als Bruch geschrieben werden kann. Zum Beispiel sind 1/2, 3/4 und -2/5 rationale Exponenten. Solche Potenzen hängen direkt mit Wurzeln zusammen."
      },
      {
        titel: "Grundregel für rationale Exponenten",
        text:
          "Für positive a gilt: a hoch m/n entspricht der n-ten Wurzel aus a hoch m. Der Nenner des Bruchs bestimmt also die Wurzel, der Zähler bestimmt die Potenz."
      },
      {
        titel: "Beispiele für rationale Exponenten",
        text:
          "a hoch 1/2 ist die Quadratwurzel aus a. a hoch 1/3 ist die dritte Wurzel aus a. a hoch 2/3 ist die dritte Wurzel aus a²."
      },
      {
        titel: "Negative Exponenten",
        text:
          "Ein negativer Exponent bedeutet Kehrwertbildung. Zum Beispiel gilt a hoch -n gleich 1 durch a hoch n. Auch bei rationalen Exponenten gilt diese Regel."
      },
      {
        titel: "Definitionsbedingungen bei Wurzeln",
        text:
          "Im reellen Zahlenbereich darf unter einer geraden Wurzel kein negativer Ausdruck stehen. Deshalb ist √x nur für x ≥ 0 definiert. Ungerade Wurzeln wie die dritte Wurzel sind hingegen für alle reellen Zahlen definiert."
      },
      {
        titel: "Potenzgesetze",
        text:
          "Potenzgesetze erlauben es, Terme mit gleicher Basis zu vereinfachen. Wichtig ist: Exponenten werden nur addiert oder subtrahiert, wenn die Basis gleich ist."
      },
      {
        titel: "Was ist ein Logarithmus?",
        text:
          "Der Logarithmus ist die Umkehrung des Potenzierens. Die Aussage logₐ(b) = x bedeutet: aˣ = b. Ein Logarithmus fragt also nach dem Exponenten."
      },
      {
        titel: "Definitionsbedingungen beim Logarithmus",
        text:
          "Bei logₐ(x) muss die Basis a positiv sein, sie darf nicht 1 sein, und das Argument x muss positiv sein. Besonders das Argument wird in Prüfungen oft vergessen."
      },
      {
        titel: "Logarithmengesetze",
        text:
          "Logarithmengesetze helfen beim Umformen von Produkten, Quotienten und Potenzen. Es gibt aber kein Gesetz für logₐ(x + y). Summen im Logarithmus dürfen also nicht einfach getrennt werden."
      },
      {
        titel: "Exponentialgleichungen",
        text:
          "Bei Exponentialgleichungen steht die Variable im Exponenten. Wenn möglich, stellt man zuerst gleiche Basen her. Wenn das nicht geht, logarithmiert man beide Seiten."
      }
    ],
    methoden: [
      {
        titel: "Methode: Potenz mit rationalem Exponenten umschreiben",
        schritte: [
          "1. Betrachte den Exponenten als Bruch.",
          "2. Der Nenner wird zum Wurzelexponenten.",
          "3. Der Zähler bleibt als Potenz erhalten.",
          "4. Bei negativem Exponenten bildest du zusätzlich den Kehrwert.",
          "5. Prüfe bei geraden Wurzeln den Definitionsbereich."
        ]
      },
      {
        titel: "Methode: Potenzterme vereinfachen",
        schritte: [
          "1. Prüfe zuerst, ob die Basen gleich sind.",
          "2. Bei gleicher Basis und Multiplikation addierst du die Exponenten.",
          "3. Bei gleicher Basis und Division subtrahierst du die Exponenten.",
          "4. Bei einer Potenz von einer Potenz multiplizierst du die Exponenten.",
          "5. Vereinfache Brüche in den Exponenten vollständig."
        ]
      },
      {
        titel: "Methode: Exponentialgleichung mit gleicher Basis lösen",
        schritte: [
          "1. Schreibe beide Seiten als Potenzen mit gleicher Basis.",
          "2. Wenn die Basen gleich sind, müssen die Exponenten gleich sein.",
          "3. Setze die Exponenten gleich.",
          "4. Löse die entstehende Gleichung nach x.",
          "5. Kontrolliere das Ergebnis durch Einsetzen."
        ]
      },
      {
        titel: "Methode: Exponentialgleichung durch Logarithmieren lösen",
        schritte: [
          "1. Prüfe, ob sich gleiche Basen herstellen lassen.",
          "2. Wenn nicht, logarithmiere beide Seiten.",
          "3. Ziehe den Exponenten mit dem Logarithmengesetz nach vorne.",
          "4. Löse nach x auf.",
          "5. Gib das Ergebnis exakt oder als Näherungswert an."
        ]
      },
      {
        titel: "Methode: Logarithmusgleichung lösen",
        schritte: [
          "1. Bestimme zuerst den Definitionsbereich.",
          "2. Fasse Logarithmen mit Logarithmengesetzen zusammen, falls möglich.",
          "3. Schreibe die Logarithmusgleichung als Potenzgleichung.",
          "4. Löse die entstehende Gleichung.",
          "5. Prüfe am Schluss, ob alle Lösungen im Definitionsbereich liegen."
        ]
      }
    ],
    merksaetze: [
      "Der Nenner eines rationalen Exponenten bestimmt die Wurzel.",
      "Ein negativer Exponent bedeutet Kehrwert.",
      "Exponenten werden nur bei gleicher Basis addiert oder subtrahiert.",
      "Ein Logarithmus ist ein Exponent.",
      "logₐ(b) = x bedeutet dasselbe wie aˣ = b.",
      "Das Argument eines Logarithmus muss immer positiv sein.",
      "Es gibt kein Logarithmengesetz für Summen.",
      "Bei Exponentialgleichungen ohne gleiche Basis logarithmiert man beide Seiten."
    ],
    typischeFehler: [
      {
        fehler: "Man schreibt x hoch 2/3 fälschlicherweise als √(x³).",
        korrektur:
          "Richtig ist: x hoch 2/3 bedeutet dritte Wurzel aus x². Der Nenner des Exponenten bestimmt die Wurzel."
      },
      {
        fehler: "Man addiert Exponenten, obwohl die Basen verschieden sind.",
        korrektur:
          "Exponenten darf man bei der Multiplikation nur addieren, wenn die Basis gleich ist. x² · y³ kann nicht zu einer einzigen Potenz zusammengefasst werden."
      },
      {
        fehler: "Man schreibt logₐ(x + y) = logₐ(x) + logₐ(y).",
        korrektur:
          "Das ist falsch. Logarithmengesetze gelten für Produkte, Quotienten und Potenzen, aber nicht für Summen."
      },
      {
        fehler: "Man vergisst die Definitionsbedingung beim Logarithmus.",
        korrektur:
          "Das Argument eines Logarithmus muss positiv sein. Lösungen, die das Argument negativ oder 0 machen, sind ungültig."
      },
      {
        fehler: "Man logarithmiert nur eine Seite einer Gleichung.",
        korrektur:
          "Bei Gleichungen muss man immer beide Seiten gleich behandeln. Wenn du logarithmierst, dann beide Seiten."
      },
      {
        fehler: "Man vergisst bei negativen Exponenten den Kehrwert.",
        korrektur:
          "a hoch -n bedeutet 1 durch a hoch n. Das Minus im Exponenten macht den Wert nicht einfach negativ."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Potenz als Wurzel schreiben",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe x hoch 3/4 als Wurzelausdruck.",
        loesung: [
          "Der Exponent ist 3/4.",
          "Der Nenner 4 wird zum Wurzelexponenten.",
          "Der Zähler 3 bleibt als Potenz erhalten.",
          "Also gilt: x hoch 3/4 ist die vierte Wurzel aus x³."
        ]
      },
      {
        titel: "Aufgabe 2: Wurzel als Potenz schreiben",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe die fünfte Wurzel aus a² als Potenz.",
        loesung: [
          "Eine n-te Wurzel entspricht einem Exponenten mit Nenner n.",
          "Hier ist der Wurzelexponent 5.",
          "Unter der Wurzel steht a².",
          "Also ist die fünfte Wurzel aus a² gleich a hoch 2/5."
        ]
      },
      {
        titel: "Aufgabe 3: Potenzterm vereinfachen",
        schwierigkeit: "einfach",
        aufgabe:
          "Vereinfache x hoch 2/5 mal x hoch 3/10.",
        loesung: [
          "Die Basis ist in beiden Faktoren x.",
          "Bei gleicher Basis werden die Exponenten addiert.",
          "Also rechnet man 2/5 + 3/10.",
          "Schreibe 2/5 als 4/10.",
          "Dann ergibt sich 4/10 + 3/10 = 7/10.",
          "Das Ergebnis ist x hoch 7/10."
        ]
      },
      {
        titel: "Aufgabe 4: Negative Exponenten",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe a hoch -3 als Bruch.",
        loesung: [
          "Ein negativer Exponent bedeutet Kehrwert.",
          "a hoch -3 ist deshalb 1 durch a hoch 3.",
          "Also gilt: a hoch -3 = 1/a³."
        ]
      },
      {
        titel: "Aufgabe 5: Logarithmus als Potenzgleichung",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe log₂(32) = 5 als Potenzgleichung.",
        loesung: [
          "Ein Logarithmus ist ein Exponent.",
          "log₂(32) = 5 bedeutet: Die Basis 2 muss mit 5 potenziert werden.",
          "Also lautet die Potenzgleichung: 2⁵ = 32."
        ]
      },
      {
        titel: "Aufgabe 6: Einfache Logarithmusgleichung",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse log₃(x) = 4.",
        loesung: [
          "Schreibe die Gleichung als Potenzgleichung.",
          "log₃(x) = 4 bedeutet 3⁴ = x.",
          "3⁴ = 81.",
          "Also ist x = 81.",
          "Da x positiv ist, ist die Lösung gültig."
        ]
      },
      {
        titel: "Aufgabe 7: Exponentialgleichung mit gleicher Basis",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse 2 hoch x+1 = 16.",
        loesung: [
          "Schreibe 16 als Potenz zur Basis 2.",
          "Es gilt 16 = 2⁴.",
          "Damit steht 2 hoch x+1 = 2⁴.",
          "Bei gleicher Basis müssen die Exponenten gleich sein.",
          "Also gilt x + 1 = 4.",
          "Daraus folgt x = 3."
        ]
      },
      {
        titel: "Aufgabe 8: Exponentialgleichung durch Logarithmieren",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse 3 hoch x = 50.",
        loesung: [
          "Es lässt sich keine einfache gleiche Basis herstellen.",
          "Deshalb logarithmiert man beide Seiten.",
          "Aus 3 hoch x = 50 wird log(3ˣ) = log(50).",
          "Mit dem Logarithmengesetz wird daraus x · log(3) = log(50).",
          "Teile durch log(3).",
          "Also gilt x = log(50) / log(3).",
          "Näherungsweise ist x ≈ 3.56."
        ]
      },
      {
        titel: "Aufgabe 9: Logarithmusgleichung mit Definitionsbereich",
        schwierigkeit: "schwer",
        aufgabe:
          "Löse log₂(x) + log₂(x - 2) = 3.",
        loesung: [
          "Zuerst bestimmt man den Definitionsbereich.",
          "Es muss x > 0 und x - 2 > 0 gelten.",
          "Also ist x > 2.",
          "Fasse die Logarithmen zusammen.",
          "log₂(x) + log₂(x - 2) = log₂(x(x - 2)).",
          "Damit gilt log₂(x(x - 2)) = 3.",
          "Schreibe als Potenzgleichung: x(x - 2) = 2³.",
          "Also x² - 2x = 8.",
          "Bringe alles auf eine Seite: x² - 2x - 8 = 0.",
          "Faktorisieren ergibt (x - 4)(x + 2) = 0.",
          "Die möglichen Lösungen sind x = 4 und x = -2.",
          "Wegen x > 2 ist nur x = 4 gültig."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was bedeutet ein rationaler Exponent?",
        antwort:
          "Ein rationaler Exponent ist ein Exponent in Bruchform. Der Nenner beschreibt die Wurzel, der Zähler beschreibt die Potenz."
      },
      {
        frage: "Was bedeutet ein negativer Exponent?",
        antwort:
          "Ein negativer Exponent bedeutet, dass man den Kehrwert bildet. Zum Beispiel ist a hoch -n gleich 1 durch a hoch n."
      },
      {
        frage: "Was ist ein Logarithmus?",
        antwort:
          "Ein Logarithmus ist ein Exponent. logₐ(b) = x bedeutet, dass a hoch x gleich b ist."
      },
      {
        frage: "Welche Bedingungen gelten für logₐ(x)?",
        antwort:
          "Die Basis a muss positiv sein und darf nicht 1 sein. Das Argument x muss positiv sein."
      },
      {
        frage: "Warum ist log(x + y) nicht gleich log(x) + log(y)?",
        antwort:
          "Weil es kein Logarithmengesetz für Summen gibt. Logarithmengesetze gelten für Produkte, Quotienten und Potenzen."
      },
      {
        frage: "Wann logarithmiert man bei Exponentialgleichungen?",
        antwort:
          "Man logarithmiert, wenn die Variable im Exponenten steht und man keine gleiche Basis herstellen kann."
      }
    ],
    nachtVorTest: [
      "Kannst du a hoch m/n als Wurzel schreiben?",
      "Weisst du, dass der Nenner des Exponenten die Wurzel bestimmt?",
      "Kannst du negative Exponenten als Kehrwert schreiben?",
      "Kennst du die Potenzgesetze für gleiche Basen?",
      "Kannst du erklären, warum ein Logarithmus ein Exponent ist?",
      "Kannst du logₐ(b) = x in aˣ = b umschreiben?",
      "Prüfst du bei Logarithmusgleichungen den Definitionsbereich?",
      "Weisst du, dass log(x + y) nicht aufgeteilt werden darf?",
      "Kannst du Exponentialgleichungen mit gleicher Basis lösen?",
      "Kannst du Exponentialgleichungen durch Logarithmieren lösen?"
    ]
  }
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_mathematik(container) {
  if (!container) {
    console.error("render_mathematik: Kein Container gefunden.");
    return;
  }

  injectMathematikStyles();

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
            ${MATHEMATIK_THEMEN.map((thema, index) => `
              <button
                class="sf-math-topic-button ${index === 0 ? "active" : ""}"
                data-topic-id="${thema.id}">
                <span>${thema.nummer}</span>
                ${escapeHTML(thema.titel)}
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
    const thema = MATHEMATIK_THEMEN.find(t => t.id === topicId);
    if (!thema) return;

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.topicId === topicId);
    });

    content.innerHTML = renderMathematikTopic(thema);
    attachMathematikInteractions(content);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      showTopic(button.dataset.topicId);
    });
  });

  showTopic(MATHEMATIK_THEMEN[0].id);
}


/* =========================
   EINZELNES THEMA RENDERN
========================= */

function renderMathematikTopic(thema) {
  return `
    <article class="sf-math-topic">
      <div class="sf-math-topic-header">
        <p class="sf-math-kicker">Thema ${escapeHTML(thema.nummer)}</p>
        <h2>${escapeHTML(thema.titel)}</h2>
        <p>${escapeHTML(thema.kurzbeschreibung)}</p>
      </div>

      ${renderMathematikSection("Lernziele", renderMathematikList(thema.lernziele))}
      ${renderMathematikTheory(thema.theorie)}
      ${renderMathematikMethods(thema.methoden)}
      ${renderMathematikSection("Merksätze", renderMathematikList(thema.merksaetze))}
      ${renderMathematikErrors(thema.typischeFehler)}
      ${renderMathematikExercises(thema.aufgaben)}
      ${renderMathematikOral(thema.muendlich)}
      ${renderMathematikSection("Nacht-vor-dem-Test-Check", renderMathematikChecklist(thema.nachtVorTest))}

      <div class="sf-math-disclaimer">
        <strong>Hinweis:</strong>
        Alle Inhalte und Aufgaben auf dieser Seite sind selbst erstellt und dienen
        der Prüfungsvorbereitung. Es handelt sich nicht um kopierte Originalprüfungen
        oder fremde Schulunterlagen.
      </div>
    </article>
  `;
}


function renderMathematikSection(title, content) {
  return `
    <section class="sf-math-card">
      <h3>${escapeHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderMathematikTheory(items) {
  return `
    <section class="sf-math-card">
      <h3>Theorie einfach erklärt</h3>
      <div class="sf-math-grid">
        ${items.map(item => `
          <div class="sf-math-mini-card">
            <h4>${escapeHTML(item.titel)}</h4>
            <p>${escapeHTML(item.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathematikMethods(methoden) {
  return `
    <section class="sf-math-card">
      <h3>Methoden</h3>
      <div class="sf-math-accordion">
        ${methoden.map(methode => `
          <div class="sf-math-accordion-item">
            <button class="sf-math-accordion-toggle" type="button">
              <span>${escapeHTML(methode.titel)}</span>
              <span class="sf-math-plus">+</span>
            </button>
            <div class="sf-math-accordion-body">
              ${renderMathematikOrderedList(methode.schritte)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathematikErrors(errors) {
  return `
    <section class="sf-math-card">
      <h3>Typische Fehler</h3>
      <div class="sf-math-error-list">
        ${errors.map(item => `
          <div class="sf-math-error-card">
            <h4>Fehler</h4>
            <p>${escapeHTML(item.fehler)}</p>
            <h4>Korrektur</h4>
            <p>${escapeHTML(item.korrektur)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathematikExercises(exercises) {
  return `
    <section class="sf-math-card">
      <h3>Eigene Übungsaufgaben mit Lösung</h3>
      <div class="sf-math-exercises">
        ${exercises.map(exercise => `
          <div class="sf-math-exercise">
            <div class="sf-math-exercise-top">
              <h4>${escapeHTML(exercise.titel)}</h4>
              <span>${escapeHTML(exercise.schwierigkeit)}</span>
            </div>
            <p>${escapeHTML(exercise.aufgabe)}</p>
            <button class="sf-math-solution-button" type="button">
              Lösung anzeigen
            </button>
            <div class="sf-math-solution">
              ${renderMathematikOrderedList(exercise.loesung)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathematikOral(items) {
  return `
    <section class="sf-math-card">
      <h3>Mündliche Prüfungsfragen</h3>
      <div class="sf-math-oral-list">
        ${items.map(item => `
          <div class="sf-math-oral-card">
            <h4>${escapeHTML(item.frage)}</h4>
            <p>${escapeHTML(item.antwort)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


/* =========================
   HILFSFUNKTIONEN
========================= */

function renderMathematikList(items) {
  return `
    <ul class="sf-math-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}


function renderMathematikOrderedList(items) {
  return `
    <ol class="sf-math-ordered-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ol>
  `;
}


function renderMathematikChecklist(items) {
  return `
    <div class="sf-math-checklist">
      ${items.map(item => `
        <label>
          <input type="checkbox">
          <span>${escapeHTML(item)}</span>
        </label>
      `).join("")}
    </div>
  `;
}


function attachMathematikInteractions(root) {
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


function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================
   CSS EINMALIG EINFÜGEN
========================= */

function injectMathematikStyles() {
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
      color: white;
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
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_mathematik = render_mathematik;
