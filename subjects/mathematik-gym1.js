function render_mathematik_gym1() {
  injectMatheGym1Styles();
  renderMathematikGym1Topics();
}

function injectMatheGym1Styles() {
  if (document.getElementById("mathe-gym1-extra-styles")) return;

  const style = document.createElement("style");
  style.id = "mathe-gym1-extra-styles";
  style.textContent = `
    .exercise-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 10px;
    }

    .exercise-top h3 {
      margin: 0;
      flex: 1;
    }

    .info-btn {
      width: 34px;
      height: 34px;
      min-width: 34px;
      border-radius: 999px;
      border: 1px solid rgba(129, 140, 248, 0.6);
      background: rgba(99, 102, 241, 0.18);
      color: #e0e7ff;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      padding: 0;
      margin: 0;
      line-height: 1;
    }

    .info-btn:hover {
      background: rgba(99, 102, 241, 0.35);
    }

    .info-box {
      margin: 14px 0 18px;
      padding: 14px 16px;
      border-radius: 14px;
      background: rgba(14, 165, 233, 0.12);
      border: 1px solid rgba(125, 211, 252, 0.35);
      color: #bae6fd;
      line-height: 1.65;
      font-size: 14px;
    }

    .info-box strong {
      color: #ffffff;
    }

    .info-box ul {
      margin: 8px 0 0 18px;
      padding: 0;
    }
  `;
  document.head.appendChild(style);
}

function toggleInfo(id) {
  const box = document.getElementById(id);
  if (!box) return;
  box.classList.toggle("hidden");
}

function infoButton(id) {
  return `<button class="info-btn" onclick="toggleInfo('${id}')" title="Anleitung anzeigen">i</button>`;
}

function infoBox(id, html) {
  return `
    <div id="${id}" class="info-box hidden">
      <strong>Abstrakte Anleitung:</strong>
      ${html}
    </div>
  `;
}

function renderMathematikGym1Topics() {
  window.setMaterialTitle("Mathematik · GYM1 · Themengebiete");

  window.setMaterialContent(`
    <div class="notice">
      Alle Inhalte sind eigenständig erstellte Übungsaufgaben. Sie sind keine Originalprüfungen,
      keine Scans und kein offizielles Schulmaterial. Die Übungen orientieren sich nur allgemein am Stoffgebiet.
    </div>

    <div class="subjects-grid">
      <div class="subject-card" onclick="renderTrigonometrieGym1()">
        <h3>Trigonometrie am allgemeinen Dreieck</h3>
        <p>Sinussatz, Kosinussatz, Höhenwinkel, Vermessung und Raumgeometrie.</p>
      </div>

      <div class="subject-card" onclick="renderQuadratischeFunktionenGym1()">
        <h3>Quadratische Funktionen und Gleichungen</h3>
        <p>Parabeln, Scheitelpunkt, Nullstellen, Schnittpunkte, Parameter und Anwendungen.</p>
      </div>
    </div>
  `);
}

function backToMatheGym1Topics() {
  renderMathematikGym1Topics();
}

/* ============================================================
   THEMA 1: TRIGONOMETRIE
   ============================================================ */

function renderTrigonometrieGym1() {
  window.setMaterialTitle("Mathematik · GYM1 · Trigonometrie am allgemeinen Dreieck");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToMatheGym1Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Dieses Übungsset ist eigenständig erstellt. Es trainiert Sinussatz, Kosinussatz,
      Höhenwinkel, Vermessung und Raumgeometrie. Es enthält keine Originalaufgaben und keine Originaldiagramme.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Winkel im Bereich 0° bis 180°</h3>
        ${infoButton("tri-info-1")}
      </div>
      ${infoBox("tri-info-1", `
        <ul>
          <li>Benutze zuerst die Umkehrfunktion: sin⁻¹ oder cos⁻¹.</li>
          <li>Prüfe danach den erlaubten Winkelbereich von 0° bis 180°.</li>
          <li>Beim Sinus kann zusätzlich der Winkel 180° - α entstehen.</li>
          <li>Beim Kosinus entscheidet das Vorzeichen, ob der Winkel spitz oder stumpf ist.</li>
        </ul>
      `)}
      <p>Bestimme alle Winkel zwischen 0° und 180°. Runde auf eine Dezimalstelle.</p>
      <ol type="a">
        <li>sin(α) = 0.58</li>
        <li>sin(β) = 0.83</li>
        <li>cos(γ) = -0.42</li>
        <li>cos(δ) = 0.31</li>
      </ol>
      <div class="formula">Hinweis: Bei Sinus gibt es im Bereich 0° bis 180° oft zwei mögliche Winkel.</div>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Sinussatz anwenden</h3>
        ${infoButton("tri-info-2")}
      </div>
      ${infoBox("tri-info-2", `
        <ul>
          <li>Suche zuerst ein bekanntes Gegenüber-Paar, also Seite und gegenüberliegenden Winkel.</li>
          <li>Stelle den Sinussatz auf: a/sin(α) = b/sin(β).</li>
          <li>Forme nach dem gesuchten Winkel oder der gesuchten Seite um.</li>
          <li>Wenn du einen Winkel mit sin⁻¹ berechnest, prüfe immer eine zweite mögliche Lösung.</li>
        </ul>
      `)}
      <p>
        In einem Dreieck gilt: Seite a liegt gegenüber von α, Seite b gegenüber von β,
        Seite c gegenüber von γ.
      </p>
      <ol type="a">
        <li>Gegeben: a = 10.4, b = 15.2, β = 68°. Berechne α.</li>
        <li>Gegeben: a = 18.0, b = 11.5, β = 26°. Berechne α und prüfe, ob mehrere Lösungen möglich sind.</li>
        <li>Gegeben: α = 52°, β = 64°, a = 12.8. Berechne γ, b und c.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Entscheidung: Sinussatz oder Kosinussatz?</h3>
        ${infoButton("tri-info-3")}
      </div>
      ${infoBox("tri-info-3", `
        <ul>
          <li>Wenn eine Seite mit ihrem Gegenwinkel bekannt ist, ist oft der Sinussatz geeignet.</li>
          <li>Wenn zwei Seiten und der eingeschlossene Winkel bekannt sind, nutze den Kosinussatz.</li>
          <li>Wenn drei Seiten bekannt sind, berechnet man Winkel meistens mit dem Kosinussatz.</li>
          <li>Skizziere das Dreieck grob und markiere gegebene Grössen.</li>
        </ul>
      `)}
      <p>
        Entscheide jeweils zuerst, ob man eher den Sinussatz oder den Kosinussatz verwendet.
        Berechne danach die gesuchte Grösse.
      </p>
      <ol type="a">
        <li>a = 9, b = 14, γ = 47°. Berechne c.</li>
        <li>a = 7.5, α = 38°, β = 81°. Berechne b.</li>
        <li>a = 13, b = 16, c = 19. Berechne α.</li>
        <li>β = 72°, γ = 41°, c = 8.6. Berechne b.</li>
      </ol>
      <div class="formula">Tipp: Zwei Seiten und eingeschlossener Winkel → Kosinussatz. Seite-Winkel-Gegenpaar → Sinussatz.</div>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Mehrdeutiger Fall beim Sinussatz</h3>
        ${infoButton("tri-info-4")}
      </div>
      ${infoBox("tri-info-4", `
        <ul>
          <li>Berechne zuerst mit dem Sinussatz den Sinus des gesuchten Winkels.</li>
          <li>Wenn der Sinuswert grösser als 1 ist, gibt es kein Dreieck.</li>
          <li>Wenn ein Winkel α möglich ist, prüfe auch 180° - α.</li>
          <li>Kontrolliere danach, ob die Winkelsumme kleiner als 180° bleibt.</li>
        </ul>
      `)}
      <p>
        Untersuche, ob kein Dreieck, ein Dreieck oder zwei Dreiecke möglich sind.
        Berechne die möglichen Winkel.
      </p>
      <ol type="a">
        <li>a = 8.2, b = 13.4, α = 35°</li>
        <li>a = 14.7, b = 9.6, α = 105°</li>
        <li>a = 9.4, b = 11.8, α = 49°</li>
      </ol>
      <div class="formula">Idee: Prüfe beim Sinussatz, ob der berechnete Sinuswert möglich ist und ob ein zweiter Winkel entsteht.</div>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Höhenmessung eines Masts</h3>
        ${infoButton("tri-info-5")}
      </div>
      ${infoBox("tri-info-5", `
        <ul>
          <li>Zeichne zwei rechtwinklige Dreiecke mit derselben Höhe.</li>
          <li>Setze x als Entfernung vom näheren Punkt zum Mast.</li>
          <li>Vom weiter entfernten Punkt ist die Entfernung dann x + AB.</li>
          <li>Verwende tan(Winkel) = Höhe / waagrechte Entfernung.</li>
          <li>Stelle zwei Gleichungen auf und setze die Höhen gleich.</li>
        </ul>
      `)}
      <p>
        Zwei Messpunkte A und B liegen auf einer geraden horizontalen Linie. Punkt B liegt näher beim Mast.
        Die Distanz AB beträgt 640 m. Von A aus sieht man die Mastspitze unter einem Höhenwinkel von 12.4°,
        von B aus unter einem Höhenwinkel von 19.7°.
      </p>
      <ol type="a">
        <li>Stelle zwei Gleichungen mit Tangens auf.</li>
        <li>Berechne die horizontale Entfernung von B zum Mast.</li>
        <li>Berechne die Höhe des Masts.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Drohne zwischen zwei Beobachtern</h3>
        ${infoButton("tri-info-6")}
      </div>
      ${infoBox("tri-info-6", `
        <ul>
          <li>Setze AD = x und BD = 180 - x.</li>
          <li>Beide rechtwinkligen Dreiecke haben dieselbe Höhe.</li>
          <li>Nutze tan(Winkel) = Höhe / Bodenstrecke.</li>
          <li>Erstelle zwei Terme für die Höhe und setze sie gleich.</li>
          <li>Wenn x bekannt ist, berechnest du die Höhe mit einem der beiden Tangens-Terme.</li>
        </ul>
      `)}
      <p>
        Eine Drohne befindet sich senkrecht über einem Punkt D am Boden.
        Zwei Beobachter stehen bei A und B. Die Strecke AB ist 180 m lang.
        D liegt zwischen A und B. Von A aus beträgt der Höhenwinkel 34°,
        von B aus beträgt der Höhenwinkel 57°.
      </p>
      <ol type="a">
        <li>Berechne die Entfernung AD.</li>
        <li>Berechne die Entfernung BD.</li>
        <li>Berechne die Höhe der Drohne.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Raumgeometrie mit Pythagoras und Kosinussatz</h3>
        ${infoButton("tri-info-7")}
      </div>
      ${infoBox("tri-info-7", `
        <ul>
          <li>Berechne Raumdiagonalen schrittweise mit Pythagoras.</li>
          <li>Manchmal braucht man zuerst eine Diagonale einer Rechtecksfläche.</li>
          <li>Wenn alle drei Seiten des Dreiecks bekannt sind, nutze den Kosinussatz für die Winkel.</li>
          <li>Achte darauf, welche Punkte wirklich miteinander verbunden werden.</li>
        </ul>
      `)}
      <p>
        Ein rechteckiger Raum ist 8 m lang, 5 m breit und 3 m hoch.
        Es werden drei Eckpunkte betrachtet:
      </p>
      <ul>
        <li>A: unten vorne links</li>
        <li>B: unten hinten rechts</li>
        <li>C: oben vorne rechts</li>
      </ul>
      <ol type="a">
        <li>Berechne die Länge AB.</li>
        <li>Berechne die Länge AC.</li>
        <li>Berechne die Länge BC.</li>
        <li>Berechne einen Innenwinkel des Dreiecks ABC.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Vermessung eines Geländepunkts</h3>
        ${infoButton("tri-info-8")}
      </div>
      ${infoBox("tri-info-8", `
        <ul>
          <li>Berechne zuerst den dritten Winkel mit der Winkelsumme 180°.</li>
          <li>Dann hast du ein Seite-Winkel-Gegenpaar: AB liegt gegenüber von ∠C.</li>
          <li>Benutze den Sinussatz, um AC und BC zu berechnen.</li>
          <li>Runde erst am Schluss, sonst entstehen Rundungsfehler.</li>
        </ul>
      `)}
      <p>
        Eine Grundlinie AB ist 1.6 km lang. Von A und B aus wird ein Punkt C angepeilt.
        Die gemessenen Winkel lauten:
      </p>
      <ul>
        <li>∠CAB = 57.8°</li>
        <li>∠CBA = 69.4°</li>
      </ul>
      <ol type="a">
        <li>Berechne ∠ACB.</li>
        <li>Berechne AC.</li>
        <li>Berechne BC.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 9 · Theoriefrage</h3>
        ${infoButton("tri-info-9")}
      </div>
      ${infoBox("tri-info-9", `
        <ul>
          <li>Nenne zuerst typische Erkennungsmerkmale für Sinussatz und Kosinussatz.</li>
          <li>Erkläre dann, warum der Sinussatz mit Gegenpaaren arbeitet.</li>
          <li>Beim mehrdeutigen Fall geht es darum, dass zwei verschiedene Winkel denselben Sinuswert haben können.</li>
          <li>Formuliere die Antwort allgemein, ohne konkrete Rechnung.</li>
        </ul>
      `)}
      <p>Erkläre in eigenen Worten:</p>
      <ol type="a">
        <li>Wann verwendet man den Sinussatz?</li>
        <li>Wann verwendet man den Kosinussatz?</li>
        <li>Warum kann der Sinussatz manchmal zwei Lösungen liefern?</li>
      </ol>
    </div>
  `);
}

/* ============================================================
   THEMA 2: QUADRATISCHE FUNKTIONEN
   ============================================================ */

function renderQuadratischeFunktionenGym1() {
  window.setMaterialTitle("Mathematik · GYM1 · Quadratische Funktionen und Gleichungen");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToMatheGym1Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Dieses Übungsset wurde eigenständig erstellt. Es trainiert quadratische Funktionen,
      Parabeln und Gleichungen, ohne Originalaufgaben, Originalzahlen oder Originaldiagramme zu übernehmen.
      Einige prüfungsnahe Aufgabenformate wurden bewusst weggelassen und durch eigene Aufgabenformen ersetzt.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Parabeln verschieben</h3>
        ${infoButton("quad-info-1")}
      </div>
      ${infoBox("quad-info-1", `
        <ul>
          <li>Starte mit der Normalparabel y = x².</li>
          <li>Verschiebung nach rechts: (x - Zahl)².</li>
          <li>Verschiebung nach links: (x + Zahl)².</li>
          <li>Verschiebung nach oben/unten wird ausserhalb der Klammer addiert oder subtrahiert.</li>
          <li>Der Scheitelpunkt kann direkt aus der Scheitelpunktform gelesen werden.</li>
        </ul>
      `)}
      <p>Gegeben ist die Normalparabel y = x².</p>
      <ol type="a">
        <li>Verschiebe die Parabel 5 Einheiten nach rechts und 2 Einheiten nach oben. Gib die Funktionsgleichung an.</li>
        <li>Verschiebe die Parabel 3 Einheiten nach links und 4 Einheiten nach unten. Gib die Funktionsgleichung an.</li>
        <li>Bestimme jeweils den Scheitelpunkt.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Strecken, Stauchen und Spiegeln</h3>
        ${infoButton("quad-info-2")}
      </div>
      ${infoBox("quad-info-2", `
        <ul>
          <li>Betrachte den Faktor a vor x² oder vor der Klammer.</li>
          <li>Ist |a| > 1, wird die Parabel schmaler.</li>
          <li>Ist 0 < |a| < 1, wird die Parabel breiter.</li>
          <li>Ist a negativ, ist die Parabel nach unten geöffnet.</li>
          <li>Zusätzliche Klammerausdrücke zeigen Verschiebungen.</li>
        </ul>
      `)}
      <p>Beschreibe jeweils, wie die Parabel im Vergleich zur Normalparabel verändert wurde.</p>
      <ol type="a">
        <li>f(x) = 3x²</li>
        <li>g(x) = 0.4x²</li>
        <li>h(x) = -2x²</li>
        <li>p(x) = -0.5(x - 1)² + 3</li>
      </ol>
      <div class="formula">Achte auf Öffnungsrichtung, Streckfaktor und Scheitelpunkt.</div>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Scheitelpunktform lesen</h3>
        ${infoButton("quad-info-3")}
      </div>
      ${infoBox("quad-info-3", `
        <ul>
          <li>Die Scheitelpunktform lautet f(x) = a(x - s)² + t.</li>
          <li>Der Scheitelpunkt ist S(s | t).</li>
          <li>Die Symmetrieachse ist x = s.</li>
          <li>Den y-Achsenabschnitt erhält man mit f(0).</li>
          <li>Das Vorzeichen von a zeigt die Öffnungsrichtung.</li>
        </ul>
      `)}
      <p>Bestimme jeweils Scheitelpunkt, Symmetrieachse, Öffnungsrichtung und y-Achsenabschnitt.</p>
      <ol type="a">
        <li>f(x) = 2(x - 4)² - 6</li>
        <li>g(x) = -1.5(x + 2)² + 5</li>
        <li>h(x) = 0.25(x - 1)² - 3</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · In die allgemeine Form umwandeln</h3>
        ${infoButton("quad-info-4")}
      </div>
      ${infoBox("quad-info-4", `
        <ul>
          <li>Multipliziere zuerst die binomische Formel aus.</li>
          <li>Danach multiplizierst du mit dem Streckfaktor vor der Klammer.</li>
          <li>Fasse alle Terme zusammen.</li>
          <li>Sortiere am Schluss nach x², x und konstantem Term.</li>
        </ul>
      `)}
      <p>Forme in die allgemeine Form ax² + bx + c um.</p>
      <ol type="a">
        <li>f(x) = (x - 5)² + 2</li>
        <li>g(x) = -2(x + 3)² + 7</li>
        <li>h(x) = 0.5(x - 4)² - 8</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Nullstellen berechnen</h3>
        ${infoButton("quad-info-5")}
      </div>
      ${infoBox("quad-info-5", `
        <ul>
          <li>Setze die Funktion gleich 0.</li>
          <li>Prüfe, ob man faktorisieren kann.</li>
          <li>Wenn nicht, verwende Mitternachtsformel oder quadratische Ergänzung.</li>
          <li>Bei doppelten Nullstellen berührt die Parabel die x-Achse nur.</li>
          <li>Kontrolliere die Lösungen durch Einsetzen.</li>
        </ul>
      `)}
      <p>Berechne die Nullstellen der folgenden Funktionen.</p>
      <ol type="a">
        <li>f(x) = x² - 7x + 10</li>
        <li>g(x) = 2x² - 8x</li>
        <li>h(x) = x² + 4x + 4</li>
        <li>p(x) = -x² + 6x - 5</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Schnittpunkte von Parabel und Gerade</h3>
        ${infoButton("quad-info-6")}
      </div>
      ${infoBox("quad-info-6", `
        <ul>
          <li>Schnittpunkte haben bei beiden Funktionen denselben y-Wert.</li>
          <li>Setze deshalb Parabel = Gerade.</li>
          <li>Löse die entstehende quadratische Gleichung.</li>
          <li>Setze die x-Werte danach in eine der beiden Funktionen ein.</li>
          <li>Gib die Ergebnisse als Punkte S(x | y) an.</li>
        </ul>
      `)}
      <p>Gegeben sind:</p>
      <div class="formula">p(x) = x² - 5x + 2</div>
      <div class="formula">g(x) = -x + 4</div>
      <ol type="a">
        <li>Setze p(x) = g(x).</li>
        <li>Berechne die x-Koordinaten der Schnittpunkte.</li>
        <li>Berechne die y-Koordinaten.</li>
        <li>Gib die Schnittpunkte als Koordinatenpaare an.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Parameter und Anzahl Lösungen</h3>
        ${infoButton("quad-info-7")}
      </div>
      ${infoBox("quad-info-7", `
        <ul>
          <li>Betrachte die Diskriminante D = b² - 4ac.</li>
          <li>D > 0 bedeutet zwei verschiedene reelle Lösungen.</li>
          <li>D = 0 bedeutet genau eine doppelte Lösung.</li>
          <li>D < 0 bedeutet keine reelle Lösung.</li>
          <li>Setze die Diskriminante mit k ein und löse die Ungleichungen.</li>
        </ul>
      `)}
      <p>Gegeben ist die Gleichung:</p>
      <div class="formula">x² - 2kx + 9 = 0</div>
      <ol type="a">
        <li>Für welche Werte von k hat die Gleichung genau eine Lösung?</li>
        <li>Für welche Werte von k hat die Gleichung zwei Lösungen?</li>
        <li>Für welche Werte von k hat die Gleichung keine reelle Lösung?</li>
      </ol>
      <div class="formula">Tipp: Verwende die Diskriminante.</div>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Anwendungsaufgabe: Ballwurf</h3>
        ${infoButton("quad-info-8")}
      </div>
      ${infoBox("quad-info-8", `
        <ul>
          <li>Der y-Achsenabschnitt f(0) ist die Anfangshöhe.</li>
          <li>Die maximale Höhe liegt beim Scheitelpunkt.</li>
          <li>Berechne die x-Koordinate des Scheitelpunkts mit -b/(2a).</li>
          <li>Setze diese x-Koordinate in f(x) ein.</li>
          <li>Der Boden wird erreicht, wenn f(x) = 0 ist.</li>
        </ul>
      `)}
      <p>Die Höhe eines geworfenen Balls wird beschrieben durch:</p>
      <div class="formula">f(x) = -0.04x² + 1.6x + 1.2</div>
      <p>x ist die horizontale Entfernung in Metern, f(x) die Höhe in Metern.</p>
      <ol type="a">
        <li>Aus welcher Höhe wird der Ball geworfen?</li>
        <li>Nach welcher Entfernung erreicht der Ball seine maximale Höhe?</li>
        <li>Wie gross ist die maximale Höhe?</li>
        <li>Nach welcher Entfernung trifft der Ball ungefähr den Boden?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 9 · Funktion aus Eigenschaften bestimmen</h3>
        ${infoButton("quad-info-9")}
      </div>
      ${infoBox("quad-info-9", `
        <ul>
          <li>Verwende die Scheitelpunktform f(x) = a(x - s)² + t.</li>
          <li>Setze den Scheitelpunkt direkt für s und t ein.</li>
          <li>Setze danach den zusätzlichen Punkt P(x | y) ein.</li>
          <li>Löse die Gleichung nach a.</li>
          <li>Das Vorzeichen von a gibt die Öffnungsrichtung an.</li>
        </ul>
      `)}
      <p>Eine Parabel hat den Scheitelpunkt S(-1 | 4) und geht durch den Punkt P(2 | -5).</p>
      <ol type="a">
        <li>Setze die Scheitelpunktform an.</li>
        <li>Bestimme den Streckfaktor a.</li>
        <li>Gib die Funktionsgleichung an.</li>
        <li>Entscheide, ob die Parabel nach oben oder unten geöffnet ist.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 10 · Fehleranalyse</h3>
        ${infoButton("quad-info-10")}
      </div>
      ${infoBox("quad-info-10", `
        <ul>
          <li>Prüfe, ob eine Umformung mathematisch erlaubt ist.</li>
          <li>Aus x(x - 8) = -12 darf man nicht direkt x = -12 oder x - 8 = -12 folgern.</li>
          <li>Das Produkt-Null-Gesetz gilt nur, wenn rechts 0 steht.</li>
          <li>Bringe deshalb zuerst alles auf eine Seite.</li>
          <li>Löse dann durch Faktorisieren oder mit der Lösungsformel.</li>
        </ul>
      `)}
      <p>Eine Schülerin löst die Gleichung x² - 8x + 12 = 0 so:</p>
      <div class="formula">
        x² - 8x + 12 = 0<br>
        x² - 8x = -12<br>
        x(x - 8) = -12<br>
        also x = -12 oder x - 8 = -12
      </div>
      <ol type="a">
        <li>Erkläre, warum dieser Lösungsweg falsch ist.</li>
        <li>Löse die Gleichung korrekt.</li>
        <li>Welche Methode wäre hier besonders schnell?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 11 · Modellieren mit einem Brückenbogen</h3>
        ${infoButton("quad-info-11")}
      </div>
      ${infoBox("quad-info-11", `
        <ul>
          <li>Der höchste Punkt ist der Scheitelpunkt.</li>
          <li>Wenn die Breite am Boden bekannt ist, liegen die Nullstellen symmetrisch um die Mitte.</li>
          <li>Setze die Scheitelpunktform mit S(0 | 6) an.</li>
          <li>Verwende eine Nullstelle, um den Faktor a zu bestimmen.</li>
          <li>Setze danach x = 2 ein, um die Höhe dort zu berechnen.</li>
        </ul>
      `)}
      <p>
        Ein Brückenbogen wird näherungsweise durch eine Parabel beschrieben.
        Der höchste Punkt liegt bei S(0 | 6). Die Breite am Boden beträgt 12 m.
      </p>
      <ol type="a">
        <li>Welche Nullstellen hat die Parabel?</li>
        <li>Bestimme eine mögliche Funktionsgleichung in Scheitelpunktform.</li>
        <li>Berechne die Höhe des Bogens 2 m rechts von der Mitte.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 12 · Reflexion</h3>
        ${infoButton("quad-info-12")}
      </div>
      ${infoBox("quad-info-12", `
        <ul>
          <li>Beschreibe den Scheitelpunkt als höchsten oder tiefsten Punkt der Parabel.</li>
          <li>Erkläre die Diskriminante über die Anzahl Schnittpunkte mit der x-Achse.</li>
          <li>Begründe die maximale Anzahl Lösungen über den Grad 2 der Gleichung.</li>
          <li>Verwende Fachbegriffe: Nullstelle, Symmetrieachse, Diskriminante, Scheitelpunkt.</li>
        </ul>
      `)}
      <p>Beantworte kurz:</p>
      <ol type="a">
        <li>Was bedeutet der Scheitelpunkt einer Parabel geometrisch?</li>
        <li>Was bedeutet es, wenn die Diskriminante negativ ist?</li>
        <li>Warum kann eine quadratische Gleichung höchstens zwei Lösungen haben?</li>
      </ol>
    </div>
  `);
}

window.render_mathematik_gym1 = render_mathematik_gym1;
window.renderTrigonometrieGym1 = renderTrigonometrieGym1;
window.renderQuadratischeFunktionenGym1 = renderQuadratischeFunktionenGym1;
window.backToMatheGym1Topics = backToMatheGym1Topics;
window.toggleInfo = toggleInfo;
