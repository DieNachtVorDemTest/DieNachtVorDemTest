function render_mathematik_gym1() {
  renderMathematikGym1Topics();
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
   Eigenes Übungsset, keine Originalprüfung.
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
      <h3>Aufgabe 1 · Winkel im Bereich 0° bis 180°</h3>
      <p>
        Bestimme alle Winkel zwischen 0° und 180°. Runde auf eine Dezimalstelle.
      </p>
      <ol type="a">
        <li>sin(α) = 0.58</li>
        <li>sin(β) = 0.83</li>
        <li>cos(γ) = -0.42</li>
        <li>cos(δ) = 0.31</li>
      </ol>
      <div class="formula">
        Hinweis: Bei Sinus gibt es im Bereich 0° bis 180° oft zwei mögliche Winkel.
      </div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 2 · Sinussatz anwenden</h3>
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
      <h3>Aufgabe 3 · Entscheidung: Sinussatz oder Kosinussatz?</h3>
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
      <div class="formula">
        Tipp: Zwei Seiten und eingeschlossener Winkel → Kosinussatz. Seite-Winkel-Gegenpaar → Sinussatz.
      </div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 4 · Mehrdeutiger Fall beim Sinussatz</h3>
      <p>
        Untersuche, ob kein Dreieck, ein Dreieck oder zwei Dreiecke möglich sind.
        Berechne die möglichen Winkel.
      </p>
      <ol type="a">
        <li>a = 8.2, b = 13.4, α = 35°</li>
        <li>a = 14.7, b = 9.6, α = 105°</li>
        <li>a = 9.4, b = 11.8, α = 49°</li>
      </ol>
      <div class="formula">
        Idee: Prüfe beim Sinussatz, ob der berechnete Sinuswert möglich ist und ob ein zweiter Winkel entsteht.
      </div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 5 · Höhenmessung eines Masts</h3>
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
      <h3>Aufgabe 6 · Drohne zwischen zwei Beobachtern</h3>
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
      <h3>Aufgabe 7 · Raumgeometrie mit Pythagoras und Kosinussatz</h3>
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
      <h3>Aufgabe 8 · Vermessung eines Geländepunkts</h3>
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
      <h3>Aufgabe 9 · Theoriefrage</h3>
      <p>
        Erkläre in eigenen Worten:
      </p>
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
   Eigenes Übungsset, bewusst nicht als Nachbau einer Prüfung.
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
      <h3>Aufgabe 1 · Parabeln verschieben</h3>
      <p>
        Gegeben ist die Normalparabel y = x².
      </p>
      <ol type="a">
        <li>Verschiebe die Parabel 5 Einheiten nach rechts und 2 Einheiten nach oben. Gib die Funktionsgleichung an.</li>
        <li>Verschiebe die Parabel 3 Einheiten nach links und 4 Einheiten nach unten. Gib die Funktionsgleichung an.</li>
        <li>Bestimme jeweils den Scheitelpunkt.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 2 · Strecken, Stauchen und Spiegeln</h3>
      <p>
        Beschreibe jeweils, wie die Parabel im Vergleich zur Normalparabel verändert wurde.
      </p>
      <ol type="a">
        <li>f(x) = 3x²</li>
        <li>g(x) = 0.4x²</li>
        <li>h(x) = -2x²</li>
        <li>p(x) = -0.5(x - 1)² + 3</li>
      </ol>
      <div class="formula">
        Achte auf Öffnungsrichtung, Streckfaktor und Scheitelpunkt.
      </div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 3 · Scheitelpunktform lesen</h3>
      <p>
        Bestimme jeweils Scheitelpunkt, Symmetrieachse, Öffnungsrichtung und y-Achsenabschnitt.
      </p>
      <ol type="a">
        <li>f(x) = 2(x - 4)² - 6</li>
        <li>g(x) = -1.5(x + 2)² + 5</li>
        <li>h(x) = 0.25(x - 1)² - 3</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 4 · In die allgemeine Form umwandeln</h3>
      <p>
        Forme in die allgemeine Form ax² + bx + c um.
      </p>
      <ol type="a">
        <li>f(x) = (x - 5)² + 2</li>
        <li>g(x) = -2(x + 3)² + 7</li>
        <li>h(x) = 0.5(x - 4)² - 8</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 5 · Nullstellen berechnen</h3>
      <p>
        Berechne die Nullstellen der folgenden Funktionen.
      </p>
      <ol type="a">
        <li>f(x) = x² - 7x + 10</li>
        <li>g(x) = 2x² - 8x</li>
        <li>h(x) = x² + 4x + 4</li>
        <li>p(x) = -x² + 6x - 5</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 6 · Schnittpunkte von Parabel und Gerade</h3>
      <p>
        Gegeben sind:
      </p>
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
      <h3>Aufgabe 7 · Parameter und Anzahl Lösungen</h3>
      <p>
        Gegeben ist die Gleichung:
      </p>
      <div class="formula">x² - 2kx + 9 = 0</div>
      <ol type="a">
        <li>Für welche Werte von k hat die Gleichung genau eine Lösung?</li>
        <li>Für welche Werte von k hat die Gleichung zwei Lösungen?</li>
        <li>Für welche Werte von k hat die Gleichung keine reelle Lösung?</li>
      </ol>
      <div class="formula">
        Tipp: Verwende die Diskriminante.
      </div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 8 · Anwendungsaufgabe: Ballwurf</h3>
      <p>
        Die Höhe eines geworfenen Balls wird beschrieben durch:
      </p>
      <div class="formula">f(x) = -0.04x² + 1.6x + 1.2</div>
      <p>
        x ist die horizontale Entfernung in Metern, f(x) die Höhe in Metern.
      </p>
      <ol type="a">
        <li>Aus welcher Höhe wird der Ball geworfen?</li>
        <li>Nach welcher Entfernung erreicht der Ball seine maximale Höhe?</li>
        <li>Wie gross ist die maximale Höhe?</li>
        <li>Nach welcher Entfernung trifft der Ball ungefähr den Boden?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 9 · Funktion aus Eigenschaften bestimmen</h3>
      <p>
        Eine Parabel hat den Scheitelpunkt S(-1 | 4) und geht durch den Punkt P(2 | -5).
      </p>
      <ol type="a">
        <li>Setze die Scheitelpunktform an.</li>
        <li>Bestimme den Streckfaktor a.</li>
        <li>Gib die Funktionsgleichung an.</li>
        <li>Entscheide, ob die Parabel nach oben oder unten geöffnet ist.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 10 · Fehleranalyse</h3>
      <p>
        Eine Schülerin löst die Gleichung x² - 8x + 12 = 0 so:
      </p>
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
      <h3>Aufgabe 11 · Modellieren mit einem Brückenbogen</h3>
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
      <h3>Aufgabe 12 · Reflexion</h3>
      <p>
        Beantworte kurz:
      </p>
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
