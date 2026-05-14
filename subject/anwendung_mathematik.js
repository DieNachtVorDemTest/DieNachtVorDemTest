/* =========================================================
   SchoolFools – Anwendung der Mathematik
   Datei: anwendung_mathematik.js

   Zweck:
   - Ein einziger Bereich für Anwendung der Mathematik
   - Alle Themen werden später nur in AM_THEMEN ergänzt
   - Keine echten Prüfungsaufgaben
   - Keine kopierten Inhalte
   - Alles selbst erstellte Lerninhalte

   Benötigte Render-Funktion:
   render_anwendung_mathematik(container)

   Beispiel-Aufruf:
   render_anwendung_mathematik(document.getElementById("content"));
========================================================= */


/* =========================
   DATENBANK DER THEMEN
========================= */

const AM_THEMEN = [
  {
    id: "gruppentheorie",
    nummer: "1",
    titel: "Gruppentheorie",
    kurzbeschreibung:
      "Gruppenaxiome, Gruppentafeln, Untergruppen, Normalteiler, Nebenklassen und Faktorgruppen verständlich erklärt.",
    lernziele: [
      "Du kannst prüfen, ob eine Menge mit einer Verknüpfung eine Gruppe bildet.",
      "Du kennst die vier Gruppenaxiome: Abgeschlossenheit, Assoziativität, neutrales Element und inverse Elemente.",
      "Du kannst eine Gruppentafel lesen und selbst erstellen.",
      "Du kannst Untergruppen erkennen.",
      "Du verstehst den Unterschied zwischen Untergruppe und Normalteiler.",
      "Du kannst Nebenklassen bilden.",
      "Du verstehst die Grundidee einer Faktorgruppe."
    ],
    theorie: [
      {
        titel: "Was ist eine Gruppe?",
        text:
          "Eine Gruppe ist eine Menge zusammen mit einer Verknüpfung, bei der vier Bedingungen erfüllt sind. Die Verknüpfung kann zum Beispiel eine Addition, Multiplikation oder eine Verkettung von Abbildungen sein."
      },
      {
        titel: "Die vier Gruppenaxiome",
        text:
          "Erstens muss die Verknüpfung abgeschlossen sein. Das bedeutet: Wenn man zwei Elemente der Menge verknüpft, muss das Ergebnis wieder in derselben Menge liegen. Zweitens muss die Verknüpfung assoziativ sein. Drittens braucht es ein neutrales Element. Viertens muss jedes Element ein inverses Element besitzen."
      },
      {
        titel: "Neutrales Element",
        text:
          "Das neutrale Element verändert ein anderes Element bei der Verknüpfung nicht. Bei der Addition ist 0 neutral, weil a + 0 = a gilt. Bei der Multiplikation ist 1 neutral, weil a · 1 = a gilt."
      },
      {
        titel: "Inverses Element",
        text:
          "Das inverse Element macht ein Element rückgängig. Bei der Addition ist das Inverse von a die Zahl -a. Bei der Multiplikation ist das Inverse von a die Zahl 1/a, sofern a nicht 0 ist."
      },
      {
        titel: "Gruppentafel",
        text:
          "Eine Gruppentafel zeigt alle möglichen Verknüpfungen der Elemente. Links und oben stehen die Gruppenelemente. Im Schnittpunkt liest man das Ergebnis der Verknüpfung ab."
      },
      {
        titel: "Untergruppe",
        text:
          "Eine Untergruppe ist eine Teilmenge einer Gruppe, die selbst wieder eine Gruppe ist. Sie muss also das neutrale Element enthalten, abgeschlossen sein und zu jedem enthaltenen Element auch das inverse Element enthalten."
      },
      {
        titel: "Normalteiler",
        text:
          "Ein Normalteiler ist eine spezielle Untergruppe. Er ist so stabil in der Gruppe eingebettet, dass linke und rechte Nebenklassen übereinstimmen. Bei kommutativen Gruppen ist jede Untergruppe automatisch ein Normalteiler."
      },
      {
        titel: "Nebenklassen",
        text:
          "Nebenklassen entstehen, wenn man eine Untergruppe mit einem Element der Gruppe verknüpft. Man kann sie sich als Pakete vorstellen, in welche die Gruppe aufgeteilt wird."
      },
      {
        titel: "Faktorgruppe",
        text:
          "Eine Faktorgruppe entsteht, wenn man nicht mehr einzelne Elemente betrachtet, sondern ganze Nebenklassen als neue Elemente. Das funktioniert sauber, wenn die verwendete Untergruppe ein Normalteiler ist."
      }
    ],
    methoden: [
      {
        titel: "Methode: Prüfen, ob eine Gruppe vorliegt",
        schritte: [
          "1. Bestimme zuerst die Menge und die Verknüpfung.",
          "2. Prüfe die Abgeschlossenheit: Kommt immer wieder ein Element der Menge heraus?",
          "3. Prüfe die Assoziativität: Darf man Klammern beliebig verschieben?",
          "4. Suche das neutrale Element.",
          "5. Prüfe, ob jedes Element ein inverses Element besitzt.",
          "6. Wenn alle vier Punkte erfüllt sind, liegt eine Gruppe vor."
        ]
      },
      {
        titel: "Methode: Untergruppe prüfen",
        schritte: [
          "1. Prüfe, ob die Teilmenge nicht leer ist.",
          "2. Prüfe, ob das neutrale Element enthalten ist.",
          "3. Prüfe, ob die Verknüpfung innerhalb der Teilmenge bleibt.",
          "4. Prüfe, ob zu jedem Element auch sein inverses Element enthalten ist.",
          "5. Wenn alles erfüllt ist, ist die Teilmenge eine Untergruppe."
        ]
      },
      {
        titel: "Methode: Normalteiler prüfen",
        schritte: [
          "1. Prüfe zuerst, ob die Teilmenge überhaupt eine Untergruppe ist.",
          "2. Bilde linke Nebenklassen.",
          "3. Bilde rechte Nebenklassen.",
          "4. Vergleiche linke und rechte Nebenklassen.",
          "5. Wenn sie für alle Elemente gleich sind, ist die Untergruppe ein Normalteiler."
        ]
      }
    ],
    merksaetze: [
      "Eine Gruppe ist eine Menge mit einer Verknüpfung, die sich algebraisch sauber verhält.",
      "Das neutrale Element verändert nichts.",
      "Das inverse Element macht die Wirkung eines Elements rückgängig.",
      "Eine Untergruppe ist eine kleinere Gruppe innerhalb einer grösseren Gruppe.",
      "Ein Normalteiler ist eine Untergruppe, mit der man eine Faktorgruppe bilden kann.",
      "In einer kommutativen Gruppe ist jede Untergruppe ein Normalteiler."
    ],
    typischeFehler: [
      {
        fehler: "Man prüft nur die Abgeschlossenheit und vergisst die anderen Gruppenaxiome.",
        korrektur:
          "Abgeschlossenheit allein reicht nicht. Eine Gruppe braucht zusätzlich Assoziativität, ein neutrales Element und inverse Elemente."
      },
      {
        fehler: "Man verwechselt neutrales Element und inverses Element.",
        korrektur:
          "Das neutrale Element bleibt immer dasselbe. Das inverse Element hängt vom jeweiligen Element ab."
      },
      {
        fehler: "Man denkt, jede Untergruppe sei automatisch ein Normalteiler.",
        korrektur:
          "Das stimmt nur sicher bei kommutativen Gruppen. In nicht kommutativen Gruppen muss man linke und rechte Nebenklassen vergleichen."
      },
      {
        fehler: "Man bildet Nebenklassen mit einzelnen zufälligen Elementen und vergisst die ganze Untergruppe.",
        korrektur:
          "Eine Nebenklasse entsteht, indem man ein Gruppenelement mit allen Elementen der Untergruppe verknüpft."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Gruppe erkennen",
        schwierigkeit: "einfach",
        aufgabe:
          "Betrachte die Menge der ganzen Zahlen Z mit der Addition. Prüfe, ob diese Menge mit der Addition eine Gruppe bildet.",
        loesung: [
          "Die Verknüpfung ist die Addition.",
          "Abgeschlossenheit: Die Summe zweier ganzer Zahlen ist wieder eine ganze Zahl.",
          "Assoziativität: Für ganze Zahlen gilt a + (b + c) = (a + b) + c.",
          "Neutrales Element: Die Zahl 0 ist neutral, weil a + 0 = a gilt.",
          "Inverses Element: Zu jeder ganzen Zahl a gibt es die ganze Zahl -a.",
          "Also bilden die ganzen Zahlen mit der Addition eine Gruppe."
        ]
      },
      {
        titel: "Aufgabe 2: Keine Gruppe",
        schwierigkeit: "einfach",
        aufgabe:
          "Betrachte die natürlichen Zahlen N mit der Addition. Erkläre, warum dies keine Gruppe ist, wenn N = {1, 2, 3, ...} gilt.",
        loesung: [
          "Die Addition natürlicher Zahlen ist zwar abgeschlossen.",
          "Aber es gibt kein neutrales Element in dieser Menge, weil 0 nicht enthalten ist.",
          "Ausserdem besitzt zum Beispiel 3 kein additives Inverses in N, denn -3 ist keine natürliche Zahl.",
          "Darum bilden diese natürlichen Zahlen mit der Addition keine Gruppe."
        ]
      },
      {
        titel: "Aufgabe 3: Untergruppe prüfen",
        schwierigkeit: "mittel",
        aufgabe:
          "Betrachte die ganzen Zahlen Z mit der Addition. Prüfe, ob die geraden ganzen Zahlen eine Untergruppe bilden.",
        loesung: [
          "Die geraden ganzen Zahlen enthalten 0.",
          "Die Summe zweier gerader Zahlen ist wieder gerade.",
          "Das inverse Element einer geraden Zahl ist wieder gerade.",
          "Also bilden die geraden ganzen Zahlen eine Untergruppe von Z."
        ]
      },
      {
        titel: "Aufgabe 4: Nebenklassen verstehen",
        schwierigkeit: "mittel",
        aufgabe:
          "Betrachte die ganzen Zahlen Z mit der Addition und die Untergruppe der Vielfachen von 3. Beschreibe die Nebenklassen.",
        loesung: [
          "Die Untergruppe besteht aus allen Zahlen, die durch 3 teilbar sind.",
          "Eine Nebenklasse enthält alle Zahlen mit gleichem Rest bei Division durch 3.",
          "Es gibt drei Nebenklassen: Zahlen mit Rest 0, Zahlen mit Rest 1 und Zahlen mit Rest 2.",
          "Die Gruppe wird dadurch in drei Pakete aufgeteilt."
        ]
      },
      {
        titel: "Aufgabe 5: Normalteiler-Idee",
        schwierigkeit: "mittel",
        aufgabe:
          "Erkläre, warum in einer kommutativen Gruppe jede Untergruppe ein Normalteiler ist.",
        loesung: [
          "In einer kommutativen Gruppe darf man die Reihenfolge der Verknüpfung vertauschen.",
          "Dadurch macht es keinen Unterschied, ob man ein Gruppenelement links oder rechts mit der Untergruppe verknüpft.",
          "Die linken und rechten Nebenklassen stimmen deshalb überein.",
          "Also ist jede Untergruppe einer kommutativen Gruppe ein Normalteiler."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine Gruppe?",
        antwort:
          "Eine Gruppe ist eine Menge mit einer Verknüpfung, bei der Abgeschlossenheit, Assoziativität, ein neutrales Element und inverse Elemente erfüllt sind."
      },
      {
        frage: "Was ist der Unterschied zwischen neutralem und inversem Element?",
        antwort:
          "Das neutrale Element verändert kein anderes Element. Das inverse Element hängt vom jeweiligen Element ab und führt zusammen mit diesem zum neutralen Element."
      },
      {
        frage: "Was ist eine Untergruppe?",
        antwort:
          "Eine Untergruppe ist eine Teilmenge einer Gruppe, die mit derselben Verknüpfung selbst wieder eine Gruppe bildet."
      },
      {
        frage: "Was ist ein Normalteiler?",
        antwort:
          "Ein Normalteiler ist eine Untergruppe, bei der linke und rechte Nebenklassen übereinstimmen. Nur damit kann man sauber eine Faktorgruppe bilden."
      },
      {
        frage: "Warum sind Nebenklassen wichtig?",
        antwort:
          "Nebenklassen teilen eine Gruppe in gleichartige Pakete ein. Dadurch kann man die Struktur der Gruppe gröber betrachten."
      }
    ],
    nachtVorTest: [
      "Kannst du die vier Gruppenaxiome aufzählen?",
      "Kannst du erklären, was das neutrale Element macht?",
      "Kannst du zu einem Element das inverse Element bestimmen?",
      "Kannst du eine Gruppentafel lesen?",
      "Kannst du eine Untergruppe prüfen?",
      "Kannst du erklären, warum Normalteiler für Faktorgruppen wichtig sind?"
    ]
  }
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_anwendung_mathematik(container) {
  if (!container) {
    console.error("render_anwendung_mathematik: Kein Container gefunden.");
    return;
  }

  injectAMStyles();

  container.innerHTML = `
    <section class="sf-am-page">
      <div class="sf-am-hero">
        <p class="sf-am-kicker">SchoolFools</p>
        <h1>Anwendung der Mathematik</h1>
        <p>
          Prüfungsvorbereitung mit selbst erstellten Erklärungen, Methoden,
          Aufgaben, Lösungen und mündlichen Prüfungsfragen.
        </p>
      </div>

      <div class="sf-am-layout">
        <aside class="sf-am-sidebar">
          <h2>Themen</h2>
          <div class="sf-am-topic-list">
            ${AM_THEMEN.map((thema, index) => `
              <button
                class="sf-am-topic-button ${index === 0 ? "active" : ""}"
                data-topic-id="${thema.id}">
                <span>${thema.nummer}</span>
                ${escapeHTML(thema.titel)}
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-am-content" id="sf-am-content"></main>
      </div>
    </section>
  `;

  const content = container.querySelector("#sf-am-content");
  const buttons = container.querySelectorAll(".sf-am-topic-button");

  function showTopic(topicId) {
    const thema = AM_THEMEN.find(t => t.id === topicId);
    if (!thema) return;

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.topicId === topicId);
    });

    content.innerHTML = renderAMTopic(thema);
    attachAMInteractions(content);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      showTopic(button.dataset.topicId);
    });
  });

  showTopic(AM_THEMEN[0].id);
}


/* =========================
   EINZELNES THEMA RENDERN
========================= */

function renderAMTopic(thema) {
  return `
    <article class="sf-am-topic">
      <div class="sf-am-topic-header">
        <p class="sf-am-kicker">Thema ${escapeHTML(thema.nummer)}</p>
        <h2>${escapeHTML(thema.titel)}</h2>
        <p>${escapeHTML(thema.kurzbeschreibung)}</p>
      </div>

      ${renderAMSection("Lernziele", renderList(thema.lernziele))}
      ${renderAMTheory(thema.theorie)}
      ${renderAMMethods(thema.methoden)}
      ${renderAMSection("Merksätze", renderList(thema.merksaetze))}
      ${renderAMErrors(thema.typischeFehler)}
      ${renderAMExercises(thema.aufgaben)}
      ${renderAMOral(thema.muendlich)}
      ${renderAMSection("Nacht-vor-dem-Test-Check", renderChecklist(thema.nachtVorTest))}

      <div class="sf-am-disclaimer">
        <strong>Hinweis:</strong>
        Alle Inhalte und Aufgaben auf dieser Seite sind selbst erstellt und dienen
        der Prüfungsvorbereitung. Es handelt sich nicht um kopierte Originalprüfungen
        oder fremde Schulunterlagen.
      </div>
    </article>
  `;
}


function renderAMSection(title, content) {
  return `
    <section class="sf-am-card">
      <h3>${escapeHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderAMTheory(items) {
  return `
    <section class="sf-am-card">
      <h3>Theorie einfach erklärt</h3>
      <div class="sf-am-grid">
        ${items.map(item => `
          <div class="sf-am-mini-card">
            <h4>${escapeHTML(item.titel)}</h4>
            <p>${escapeHTML(item.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderAMMethods(methoden) {
  return `
    <section class="sf-am-card">
      <h3>Methoden</h3>
      <div class="sf-am-accordion">
        ${methoden.map((methode, index) => `
          <div class="sf-am-accordion-item">
            <button class="sf-am-accordion-toggle" type="button">
              <span>${escapeHTML(methode.titel)}</span>
              <span class="sf-am-plus">+</span>
            </button>
            <div class="sf-am-accordion-body">
              ${renderOrderedList(methode.schritte)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderAMErrors(errors) {
  return `
    <section class="sf-am-card">
      <h3>Typische Fehler</h3>
      <div class="sf-am-error-list">
        ${errors.map(item => `
          <div class="sf-am-error-card">
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


function renderAMExercises(exercises) {
  return `
    <section class="sf-am-card">
      <h3>Eigene Übungsaufgaben mit Lösung</h3>
      <div class="sf-am-exercises">
        ${exercises.map((exercise, index) => `
          <div class="sf-am-exercise">
            <div class="sf-am-exercise-top">
              <h4>${escapeHTML(exercise.titel)}</h4>
              <span>${escapeHTML(exercise.schwierigkeit)}</span>
            </div>
            <p>${escapeHTML(exercise.aufgabe)}</p>
            <button class="sf-am-solution-button" type="button">
              Lösung anzeigen
            </button>
            <div class="sf-am-solution">
              ${renderOrderedList(exercise.loesung)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderAMOral(items) {
  return `
    <section class="sf-am-card">
      <h3>Mündliche Prüfungsfragen</h3>
      <div class="sf-am-oral-list">
        ${items.map(item => `
          <div class="sf-am-oral-card">
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

function renderList(items) {
  return `
    <ul class="sf-am-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}


function renderOrderedList(items) {
  return `
    <ol class="sf-am-ordered-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ol>
  `;
}


function renderChecklist(items) {
  return `
    <div class="sf-am-checklist">
      ${items.map(item => `
        <label>
          <input type="checkbox">
          <span>${escapeHTML(item)}</span>
        </label>
      `).join("")}
    </div>
  `;
}


function attachAMInteractions(root) {
  const accordionButtons = root.querySelectorAll(".sf-am-accordion-toggle");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".sf-am-accordion-item");
      item.classList.toggle("open");
    });
  });

  const solutionButtons = root.querySelectorAll(".sf-am-solution-button");

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

function injectAMStyles() {
  if (document.getElementById("sf-am-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-am-styles";
  style.textContent = `
    .sf-am-page {
      width: 100%;
      min-height: 100vh;
      background: #f6f7fb;
      color: #172033;
      font-family: Arial, Helvetica, sans-serif;
      padding: 24px;
      box-sizing: border-box;
    }

    .sf-am-hero {
      background: linear-gradient(135deg, #111827, #273449);
      color: white;
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    }

    .sf-am-kicker {
      margin: 0 0 8px 0;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.75;
      font-weight: 700;
    }

    .sf-am-hero h1 {
      margin: 0 0 12px 0;
      font-size: clamp(32px, 5vw, 56px);
      line-height: 1;
    }

    .sf-am-hero p {
      max-width: 780px;
      margin: 0;
      font-size: 18px;
      line-height: 1.6;
      opacity: 0.92;
    }

    .sf-am-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 24px;
      align-items: start;
    }

    .sf-am-sidebar {
      position: sticky;
      top: 20px;
      background: white;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-am-sidebar h2 {
      margin: 0 0 16px 0;
      font-size: 22px;
    }

    .sf-am-topic-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-am-topic-button {
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

    .sf-am-topic-button span {
      display: inline-flex;
      width: 28px;
      height: 28px;
      align-items: center;
      justify-content: center;
      background: #e5e7eb;
      border-radius: 999px;
      font-size: 13px;
    }

    .sf-am-topic-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
    }

    .sf-am-topic-button.active {
      background: #172033;
      color: white;
      border-color: #172033;
    }

    .sf-am-topic-button.active span {
      background: white;
      color: #172033;
    }

    .sf-am-content {
      min-width: 0;
    }

    .sf-am-topic-header {
      background: white;
      border-radius: 20px;
      padding: 26px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-am-topic-header h2 {
      margin: 0 0 10px 0;
      font-size: 34px;
    }

    .sf-am-topic-header p {
      margin: 0;
      font-size: 17px;
      line-height: 1.6;
      color: #4b5563;
    }

    .sf-am-card {
      background: white;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-am-card h3 {
      margin: 0 0 18px 0;
      font-size: 24px;
    }

    .sf-am-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .sf-am-mini-card,
    .sf-am-error-card,
    .sf-am-oral-card,
    .sf-am-exercise {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
      background: #f9fafb;
    }

    .sf-am-mini-card h4,
    .sf-am-error-card h4,
    .sf-am-oral-card h4,
    .sf-am-exercise h4 {
      margin: 0 0 8px 0;
      font-size: 18px;
    }

    .sf-am-mini-card p,
    .sf-am-error-card p,
    .sf-am-oral-card p,
    .sf-am-exercise p {
      margin: 0;
      line-height: 1.6;
      color: #374151;
    }

    .sf-am-list,
    .sf-am-ordered-list {
      margin: 0;
      padding-left: 22px;
      line-height: 1.8;
      color: #374151;
    }

    .sf-am-list li,
    .sf-am-ordered-list li {
      margin-bottom: 6px;
    }

    .sf-am-accordion {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .sf-am-accordion-item {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      background: #f9fafb;
    }

    .sf-am-accordion-toggle {
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
    }

    .sf-am-plus {
      font-size: 24px;
      line-height: 1;
    }

    .sf-am-accordion-body {
      display: none;
      padding: 0 18px 18px 18px;
    }

    .sf-am-accordion-item.open .sf-am-accordion-body {
      display: block;
    }

    .sf-am-accordion-item.open .sf-am-plus {
      transform: rotate(45deg);
    }

    .sf-am-error-list,
    .sf-am-oral-list,
    .sf-am-exercises {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .sf-am-error-card h4:nth-of-type(1) {
      color: #991b1b;
    }

    .sf-am-error-card h4:nth-of-type(2) {
      margin-top: 14px;
      color: #166534;
    }

    .sf-am-exercise-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 12px;
      margin-bottom: 10px;
    }

    .sf-am-exercise-top span {
      background: #e5e7eb;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 13px;
      font-weight: 700;
      color: #374151;
      white-space: nowrap;
    }

    .sf-am-solution-button {
      margin-top: 14px;
      border: 0;
      background: #172033;
      color: white;
      border-radius: 12px;
      padding: 10px 14px;
      font-weight: 700;
      cursor: pointer;
    }

    .sf-am-solution {
      display: none;
      margin-top: 14px;
      padding: 16px;
      border-radius: 14px;
      background: white;
      border: 1px solid #e5e7eb;
    }

    .sf-am-solution.open {
      display: block;
    }

    .sf-am-checklist {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .sf-am-checklist label {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 12px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      cursor: pointer;
      line-height: 1.5;
    }

    .sf-am-checklist input {
      margin-top: 3px;
    }

    .sf-am-disclaimer {
      background: #fff7ed;
      border: 1px solid #fed7aa;
      color: #7c2d12;
      border-radius: 18px;
      padding: 18px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    @media (max-width: 900px) {
      .sf-am-layout {
        grid-template-columns: 1fr;
      }

      .sf-am-sidebar {
        position: static;
      }

      .sf-am-grid {
        grid-template-columns: 1fr;
      }

      .sf-am-page {
        padding: 14px;
      }

      .sf-am-hero {
        padding: 24px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_anwendung_mathematik = render_anwendung_mathematik;
