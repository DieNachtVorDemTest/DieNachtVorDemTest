/* =========================================================
   SchoolFools – Mathematik GYM1
   Datei: mathematik-gym1.js

   Benötigte Render-Funktion:
   render_mathematik_gym1(container)
========================================================= */


/* =========================
   DATENBANK DER THEMEN
========================= */

const MATH_THEMEN = [
  {
    id: "logarithmen-potenzen",
    nummer: "1",
    titel: "Logarithmen und Potenzen",
    kurzbeschreibung:
      "Potenzen mit rationalen Exponenten, Wurzeln, Logarithmen, Exponentialgleichungen und Logarithmusgleichungen.",
    lernziele: [
      "Du kannst Potenzen mit rationalen Exponenten in Wurzeln umschreiben.",
      "Du kennst die wichtigsten Potenzgesetze.",
      "Du verstehst den Logarithmus als Umkehrung des Potenzierens.",
      "Du kannst Exponentialgleichungen mit gleicher Basis lösen.",
      "Du kannst Exponentialgleichungen durch Logarithmieren lösen.",
      "Du kannst Logarithmusgleichungen lösen und den Definitionsbereich prüfen."
    ],
    theorie: [
      {
        titel: "Potenzen mit rationalen Exponenten",
        text:
          "Ein rationaler Exponent ist ein Bruch. Der Nenner des Bruchs wird zur Wurzel, der Zähler bleibt als Potenz erhalten. Zum Beispiel gilt a^(m/n) = ⁿ√(a^m)."
      },
      {
        titel: "Negative Exponenten",
        text:
          "Ein negativer Exponent bedeutet Kehrwert. Es gilt a^(-n) = 1/a^n, sofern a nicht 0 ist."
      },
      {
        titel: "Potenzgesetze",
        text:
          "Bei gleicher Basis werden Exponenten beim Multiplizieren addiert und beim Dividieren subtrahiert. Zum Beispiel gilt x^a · x^b = x^(a+b)."
      },
      {
        titel: "Logarithmus",
        text:
          "Der Logarithmus ist die Umkehrung des Potenzierens. log_a(b) = x bedeutet genau a^x = b."
      },
      {
        titel: "Definitionsbereich beim Logarithmus",
        text:
          "Beim Logarithmus muss die Basis positiv und ungleich 1 sein. Das Argument des Logarithmus muss positiv sein."
      },
      {
        titel: "Logarithmengesetze",
        text:
          "Die wichtigsten Gesetze sind log_a(xy) = log_a(x) + log_a(y), log_a(x/y) = log_a(x) - log_a(y) und log_a(x^r) = r log_a(x)."
      }
    ],
    methoden: [
      {
        titel: "Methode: Potenzen vereinfachen",
        schritte: [
          "1. Prüfe, ob die Basen gleich sind.",
          "2. Bei Multiplikation gleicher Basen addierst du die Exponenten.",
          "3. Bei Division gleicher Basen subtrahierst du die Exponenten.",
          "4. Bei Potenz einer Potenz multiplizierst du die Exponenten.",
          "5. Schreibe negative Exponenten als Kehrwert.",
          "6. Vereinfache Brüche im Exponenten."
        ]
      },
      {
        titel: "Methode: Exponentialgleichung lösen",
        schritte: [
          "1. Prüfe zuerst, ob beide Seiten als Potenz mit gleicher Basis geschrieben werden können.",
          "2. Wenn ja, setze die Exponenten gleich.",
          "3. Wenn nein, logarithmiere beide Seiten.",
          "4. Ziehe den Exponenten mit dem Logarithmengesetz nach vorne.",
          "5. Löse nach x auf.",
          "6. Gib bei Bedarf eine Näherung mit dem Taschenrechner an."
        ]
      },
      {
        titel: "Methode: Logarithmusgleichung lösen",
        schritte: [
          "1. Bestimme zuerst den Definitionsbereich.",
          "2. Fasse Logarithmen mit Logarithmengesetzen zusammen.",
          "3. Schreibe die Logarithmusgleichung als Potenzgleichung.",
          "4. Löse die entstehende Gleichung.",
          "5. Prüfe am Schluss, ob alle Lösungen im Definitionsbereich liegen.",
          "6. Streiche ungültige Lösungen."
        ]
      }
    ],
    merksaetze: [
      "Ein Logarithmus ist ein Exponent.",
      "Bei log_a(x) muss immer x > 0 gelten.",
      "Es gibt kein Gesetz für log(x + y).",
      "Bei gleicher Basis darf man Exponenten vergleichen.",
      "Wenn keine gleiche Basis möglich ist, logarithmiert man beide Seiten."
    ],
    typischeFehler: [
      {
        fehler: "Man schreibt log(x + y) = log(x) + log(y).",
        korrektur:
          "Das ist falsch. Logarithmengesetze gelten für Produkte, Quotienten und Potenzen, aber nicht für Summen."
      },
      {
        fehler: "Man vergisst den Definitionsbereich.",
        korrektur:
          "Bei Logarithmen müssen alle Argumente positiv sein. Lösungen ausserhalb des Definitionsbereichs sind ungültig."
      },
      {
        fehler: "Man verwechselt x^(2/3) mit √(x³).",
        korrektur:
          "Richtig ist x^(2/3) = ³√(x²). Der Nenner des Exponenten bestimmt die Wurzel."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Potenzen vereinfachen",
        schwierigkeit: "einfach",
        aufgabe:
          "Vereinfache x^(2/5) · x^(3/10).",
        loesung: [
          "Die Basis ist in beiden Faktoren x.",
          "Deshalb dürfen die Exponenten addiert werden.",
          "2/5 + 3/10 = 4/10 + 3/10 = 7/10.",
          "Das Ergebnis lautet x^(7/10)."
        ]
      },
      {
        titel: "Aufgabe 2: Exponentialgleichung",
        schwierigkeit: "einfach",
        aufgabe:
          "Löse 2^(x - 3) = 32.",
        loesung: [
          "Schreibe 32 als Potenz zur Basis 2.",
          "32 = 2^5.",
          "Also gilt 2^(x - 3) = 2^5.",
          "Die Exponenten müssen gleich sein.",
          "x - 3 = 5.",
          "Also x = 8."
        ]
      },
      {
        titel: "Aufgabe 3: Logarithmusgleichung",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse log_2(x) + log_2(x - 1) = 1.",
        loesung: [
          "Definitionsbereich: x > 1.",
          "Fasse zusammen: log_2(x(x - 1)) = 1.",
          "Schreibe als Potenzgleichung: x(x - 1) = 2.",
          "Also x² - x - 2 = 0.",
          "Faktorisieren: (x - 2)(x + 1) = 0.",
          "Mögliche Lösungen: x = 2 oder x = -1.",
          "Wegen x > 1 ist nur x = 2 gültig."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist ein Logarithmus?",
        antwort:
          "Ein Logarithmus ist ein Exponent. log_a(b) fragt, mit welchem Exponenten man a potenzieren muss, um b zu erhalten."
      },
      {
        frage: "Welche Bedingungen gelten für log_a(x)?",
        antwort:
          "Die Basis a muss positiv und ungleich 1 sein. Das Argument x muss positiv sein."
      }
    ],
    nachtVorTest: [
      "Kannst du Potenzen mit rationalen Exponenten in Wurzeln umschreiben?",
      "Kennst du die Potenzgesetze?",
      "Kannst du Exponentialgleichungen mit gleicher Basis lösen?",
      "Kannst du Exponentialgleichungen durch Logarithmieren lösen?",
      "Prüfst du bei Logarithmusgleichungen den Definitionsbereich?"
    ]
  },

  {
    id: "kurvendiskussion",
    nummer: "2",
    titel: "Kurvendiskussion",
    kurzbeschreibung:
      "Nullstellen, Extremalstellen, Wendepunkte, Sattelpunkte, Monotonie und Krümmung systematisch untersuchen.",
    lernziele: [
      "Du kannst Nullstellen berechnen.",
      "Du kannst Extremalstellen mit der ersten Ableitung finden.",
      "Du kannst Hochpunkte und Tiefpunkte mit der zweiten Ableitung unterscheiden.",
      "Du kannst Wendepunkte bestimmen.",
      "Du kannst Sattelpunkte erkennen.",
      "Du kannst Monotonie und Krümmung erklären."
    ],
    theorie: [
      {
        titel: "Ziel der Kurvendiskussion",
        text:
          "Bei einer Kurvendiskussion untersucht man den Verlauf eines Graphen. Man betrachtet Nullstellen, Extrempunkte, Wendepunkte, Monotonie und Krümmung."
      },
      {
        titel: "Erste Ableitung",
        text:
          "Die erste Ableitung beschreibt die Steigung. Wenn f'(x) positiv ist, steigt der Graph. Wenn f'(x) negativ ist, fällt der Graph."
      },
      {
        titel: "Zweite Ableitung",
        text:
          "Die zweite Ableitung beschreibt die Krümmung. Sie hilft auch, Hochpunkte und Tiefpunkte zu unterscheiden."
      },
      {
        titel: "Extremalstellen",
        text:
          "Mögliche Extremalstellen findet man durch f'(x) = 0. Danach muss geprüft werden, ob ein Hochpunkt oder Tiefpunkt vorliegt."
      },
      {
        titel: "Wendepunkte",
        text:
          "Mögliche Wendepunkte findet man durch f''(x) = 0. Danach muss ein Krümmungswechsel geprüft werden."
      },
      {
        titel: "Sattelpunkt",
        text:
          "Ein Sattelpunkt ist ein Wendepunkt mit waagrechter Tangente. Es gilt dort f'(x) = 0 und ein Krümmungswechsel liegt vor."
      }
    ],
    methoden: [
      {
        titel: "Methode: Kurvendiskussion durchführen",
        schritte: [
          "1. Bestimme den Definitionsbereich.",
          "2. Berechne den y-Achsenabschnitt mit f(0).",
          "3. Berechne die Nullstellen mit f(x) = 0.",
          "4. Berechne f'(x).",
          "5. Setze f'(x) = 0 für mögliche Extremalstellen.",
          "6. Prüfe mit f'' oder Vorzeichenwechsel von f'.",
          "7. Berechne f''(x).",
          "8. Setze f''(x) = 0 für mögliche Wendepunkte.",
          "9. Prüfe den Krümmungswechsel.",
          "10. Berechne alle y-Werte durch Einsetzen in f(x)."
        ]
      }
    ],
    merksaetze: [
      "Nullstellen findet man mit f(x) = 0.",
      "Mögliche Extremalstellen findet man mit f'(x) = 0.",
      "f''(a) > 0 bedeutet Tiefpunkt.",
      "f''(a) < 0 bedeutet Hochpunkt.",
      "Mögliche Wendepunkte findet man mit f''(x) = 0.",
      "Ein Sattelpunkt ist ein Wendepunkt mit f'(a) = 0."
    ],
    typischeFehler: [
      {
        fehler: "Man setzt f'(x) = 0 und behauptet sofort, es sei ein Extrempunkt.",
        korrektur:
          "f'(x) = 0 ist nur eine notwendige Bedingung. Man muss danach prüfen."
      },
      {
        fehler: "Man vergisst die y-Werte.",
        korrektur:
          "Ein Punkt braucht immer x- und y-Koordinate. Den y-Wert erhält man durch Einsetzen in f(x)."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Extrempunkt",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme den Extrempunkt von f(x) = x² - 4x + 1.",
        loesung: [
          "Berechne f'(x) = 2x - 4.",
          "Setze f'(x) = 0.",
          "2x - 4 = 0, also x = 2.",
          "Berechne f''(x) = 2.",
          "Da f''(2) > 0, liegt ein Tiefpunkt vor.",
          "Berechne f(2) = 4 - 8 + 1 = -3.",
          "Der Tiefpunkt ist T(2 | -3)."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was zeigt die erste Ableitung?",
        antwort:
          "Die erste Ableitung zeigt die Steigung des Graphen."
      },
      {
        frage: "Was ist ein Sattelpunkt?",
        antwort:
          "Ein Sattelpunkt ist ein Wendepunkt mit waagrechter Tangente."
      }
    ],
    nachtVorTest: [
      "Kannst du Nullstellen berechnen?",
      "Kannst du f'(x) bilden?",
      "Kannst du Extremalstellen bestimmen?",
      "Kannst du Hochpunkt und Tiefpunkt unterscheiden?",
      "Kannst du Wendepunkte und Sattelpunkte erkennen?"
    ]
  },

  {
    id: "trigonometrie",
    nummer: "3",
    titel: "Trigonometrie",
    kurzbeschreibung:
      "Sinus, Kosinus, Tangens, Einheitskreis, Bogenmass, trigonometrische Gleichungen und Anwendungen.",
    lernziele: [
      "Du kannst Sinus, Kosinus und Tangens im rechtwinkligen Dreieck anwenden.",
      "Du kannst Winkel zwischen Gradmass und Bogenmass umrechnen.",
      "Du verstehst den Einheitskreis.",
      "Du kannst Vorzeichen in den Quadranten bestimmen.",
      "Du kannst einfache trigonometrische Gleichungen lösen."
    ],
    theorie: [
      {
        titel: "Sinus, Kosinus und Tangens",
        text:
          "Im rechtwinkligen Dreieck gilt sin(α) = Gegenkathete/Hypotenuse, cos(α) = Ankathete/Hypotenuse und tan(α) = Gegenkathete/Ankathete."
      },
      {
        titel: "Einheitskreis",
        text:
          "Auf dem Einheitskreis hat ein Punkt zum Winkel α die Koordinaten P(cos(α) | sin(α))."
      },
      {
        titel: "Bogenmass",
        text:
          "Es gilt 180° = π und 360° = 2π. Deshalb ist 90° = π/2 und 45° = π/4."
      },
      {
        titel: "Periodizität",
        text:
          "Sinus und Kosinus haben die Periode 2π. Tangens hat die Periode π."
      }
    ],
    methoden: [
      {
        titel: "Methode: Trigonometrische Gleichung lösen",
        schritte: [
          "1. Löse zuerst algebraisch nach sin, cos oder tan auf.",
          "2. Bestimme den Referenzwinkel.",
          "3. Nutze den Einheitskreis für die passenden Quadranten.",
          "4. Schreibe alle Lösungen im verlangten Intervall auf.",
          "5. Beachte die Periode."
        ]
      }
    ],
    merksaetze: [
      "sin²(x) + cos²(x) = 1.",
      "tan(x) = sin(x)/cos(x).",
      "Sinus und Kosinus haben Periode 2π.",
      "Tangens hat Periode π.",
      "Bei trigonometrischen Gleichungen gibt es oft mehrere Lösungen."
    ],
    typischeFehler: [
      {
        fehler: "Man findet nur eine Lösung.",
        korrektur:
          "Der Einheitskreis zeigt meistens mehrere Lösungen im Intervall."
      },
      {
        fehler: "Der Taschenrechner ist im falschen Modus.",
        korrektur:
          "Prüfe immer, ob Gradmass oder Bogenmass verlangt ist."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Bogenmass",
        schwierigkeit: "einfach",
        aufgabe:
          "Wandle 135° ins Bogenmass um.",
        loesung: [
          "Verwende die Formel Winkel · π/180.",
          "135° · π/180 = 3π/4.",
          "Also gilt 135° = 3π/4."
        ]
      },
      {
        titel: "Aufgabe 2: Sinusgleichung",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse sin(x) = 1/2 im Intervall [0°, 360°].",
        loesung: [
          "Der Referenzwinkel ist 30°.",
          "Sinus ist im 1. und 2. Quadranten positiv.",
          "Also x = 30° oder x = 150°."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was bedeutet sin(α) im rechtwinkligen Dreieck?",
        antwort:
          "Sinus ist das Verhältnis Gegenkathete durch Hypotenuse."
      }
    ],
    nachtVorTest: [
      "Kannst du sin, cos und tan im Dreieck zuordnen?",
      "Kennst du 180° = π?",
      "Kannst du den Einheitskreis benutzen?",
      "Findest du alle Lösungen einer trigonometrischen Gleichung?"
    ]
  },

  {
    id: "quadratische-funktionen",
    nummer: "4",
    titel: "Quadratische Funktionen",
    kurzbeschreibung:
      "Parabeln, Scheitelpunkt, Normalform, Scheitelpunktform, faktorisierte Form, Nullstellen und Diskriminante.",
    lernziele: [
      "Du erkennst quadratische Funktionen.",
      "Du kannst den Scheitelpunkt bestimmen.",
      "Du kannst Nullstellen berechnen.",
      "Du kannst die Diskriminante interpretieren.",
      "Du kannst zwischen Normalform, Scheitelpunktform und faktorisierter Form wechseln."
    ],
    theorie: [
      {
        titel: "Normalform",
        text:
          "Eine quadratische Funktion hat die Normalform f(x) = ax² + bx + c mit a ≠ 0."
      },
      {
        titel: "Scheitelpunktform",
        text:
          "Die Scheitelpunktform lautet f(x) = a(x - d)² + e. Der Scheitelpunkt ist S(d | e)."
      },
      {
        titel: "Nullstellen",
        text:
          "Nullstellen erhält man durch f(x) = 0. Eine Parabel kann zwei, eine doppelte oder keine reellen Nullstellen haben."
      },
      {
        titel: "Diskriminante",
        text:
          "Die Diskriminante D = b² - 4ac zeigt die Anzahl reeller Lösungen: D > 0 zwei Lösungen, D = 0 eine doppelte Lösung, D < 0 keine reelle Lösung."
      }
    ],
    methoden: [
      {
        titel: "Methode: Scheitelpunkt aus Normalform",
        schritte: [
          "1. Lies a und b aus f(x) = ax² + bx + c ab.",
          "2. Berechne x_S = -b/(2a).",
          "3. Setze x_S in f(x) ein.",
          "4. Der Scheitelpunkt lautet S(x_S | f(x_S))."
        ]
      },
      {
        titel: "Methode: Nullstellen mit Lösungsformel",
        schritte: [
          "1. Bringe die Gleichung in die Form ax² + bx + c = 0.",
          "2. Berechne D = b² - 4ac.",
          "3. Setze in x = (-b ± √D)/(2a) ein.",
          "4. Interpretiere die Anzahl Lösungen mit D."
        ]
      }
    ],
    merksaetze: [
      "a > 0 bedeutet: Parabel öffnet nach oben.",
      "a < 0 bedeutet: Parabel öffnet nach unten.",
      "x_S = -b/(2a).",
      "D = b² - 4ac.",
      "D < 0 bedeutet keine reellen Nullstellen."
    ],
    typischeFehler: [
      {
        fehler: "Man liest bei (x + 3)² den Scheitelpunkt falsch ab.",
        korrektur:
          "Bei f(x) = (x + 3)² ist der x-Wert des Scheitelpunkts -3, nicht +3."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Scheitelpunkt",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme den Scheitelpunkt von f(x) = x² - 8x + 10.",
        loesung: [
          "a = 1 und b = -8.",
          "x_S = -(-8)/(2 · 1) = 4.",
          "f(4) = 16 - 32 + 10 = -6.",
          "Der Scheitelpunkt ist S(4 | -6)."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was zeigt die Diskriminante?",
        antwort:
          "Die Diskriminante zeigt, wie viele reelle Nullstellen eine quadratische Gleichung hat."
      }
    ],
    nachtVorTest: [
      "Kannst du den Scheitelpunkt berechnen?",
      "Kannst du die Lösungsformel anwenden?",
      "Kannst du die Diskriminante interpretieren?"
    ]
  }
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_mathematik_gym1(container) {
  if (!container) {
    console.error("render_mathematik_gym1: Kein Container gefunden.");
    return;
  }

  injectMathStyles();

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
                data-topic-id="${thema.id}">
                <span>${thema.nummer}</span>
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  return `
    <ul class="sf-math-list">
      ${items.map(item => `<li>${escapeMathHTML(item)}</li>`).join("")}
    </ul>
  `;
}


function renderMathOrderedList(items) {
  return `
    <ol class="sf-math-ordered-list">
      ${items.map(item => `<li>${escapeMathHTML(item)}</li>`).join("")}
    </ol>
  `;
}


function renderMathChecklist(items) {
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
      color: white;
    }

    .sf-math-hero p {
      max-width: 780px;
      margin: 0;
      font-size: 18px;
      line-height: 1.6;
      opacity: 0.92;
      color: #e5e7eb;
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

window.render_mathematik_gym1 = render_mathematik_gym1;
