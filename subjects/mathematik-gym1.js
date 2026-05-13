function render_mathematik_gym1() {
  renderMathematikGym1Topics();
}

function renderMathematikGym1Topics() {
  window.setMaterialTitle("Mathematik · GYM1 · Themengebiete");

  window.setMaterialContent(`
    <div class="notice">
      Alle Inhalte sind eigenständig erstellte Übungsaufgaben. Sie sind keine Originalprüfungen,
      keine Scans und kein offizielles Schulmaterial.
    </div>

    <div class="subjects-grid">
      <div class="subject-card" onclick="renderTrigonometrieGym1()">
        <h3>Trigonometrie am allgemeinen Dreieck</h3>
        <p>Sinussatz, Kosinussatz, Höhenmessungen und Vermessungsaufgaben.</p>
      </div>

      <div class="subject-card" onclick="renderQuadratischeFunktionenGym1()">
        <h3>Quadratische Funktionen und Gleichungen</h3>
        <p>Parabeln, Scheitelpunkt, Nullstellen, Gleichungen und Anwendungsaufgaben.</p>
      </div>
    </div>
  `);
}

function backToMatheGym1Topics() {
  renderMathematikGym1Topics();
}

function renderTrigonometrieGym1() {
  window.setMaterialTitle("Mathematik · GYM1 · Trigonometrie am allgemeinen Dreieck");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToMatheGym1Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Dieses Übungsset wurde eigenständig erstellt. Es trainiert Sinussatz, Kosinussatz,
      Höhenmessung, Raumgeometrie und Vermessung. Es enthält keine Originalaufgaben und keine Originaldiagramme.
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 1 · Winkel aus Sinus und Kosinus</h3>
      <p>Bestimme alle Winkel zwischen 0° und 180°. Runde auf eine Dezimalstelle.</p>
      <ol type="a">
        <li>sin(α) = 0.64</li>
        <li>sin(β) = 0.91</li>
        <li>cos(γ) = -0.38</li>
        <li>cos(δ) = 0.27</li>
      </ol>
      <div class="formula">Tipp: Achte darauf, in welchem Quadranten der Winkel liegt.</div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 2 · Sinussatz im allgemeinen Dreieck</h3>
      <p>In einem Dreieck gilt: Seite a liegt gegenüber von α, b gegenüber von β und c gegenüber von γ.</p>
      <ol type="a">
        <li>Gegeben: a = 9.5, b = 12.8, β = 61°. Berechne α.</li>
        <li>Gegeben: a = 16.2, b = 10.4, β = 28°. Berechne α. Prüfe, ob mehrere Lösungen möglich sind.</li>
        <li>Gegeben: α = 47°, β = 73°, a = 11.6. Berechne γ, b und c.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 3 · Mehrdeutiger Fall beim Sinussatz</h3>
      <p>Entscheide jeweils, ob null, eine oder zwei Lösungen möglich sind.</p>
      <ol type="a">
        <li>a = 7.2, b = 13.0, α = 31°</li>
        <li>a = 15.5, b = 9.8, α = 102°</li>
        <li>a = 8.6, b = 10.1, α = 54°</li>
      </ol>
      <div class="formula">Tipp: Vergleiche zuerst die mögliche Höhe h = b · sin(α).</div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 4 · Kosinussatz: Drei Seiten gegeben</h3>
      <p>Berechne die Innenwinkel des Dreiecks.</p>
      <ol type="a">
        <li>a = 6.4, b = 8.7, c = 10.2</li>
        <li>a = 12.0, b = 12.0, c = 7.5</li>
        <li>a = 5.8, b = 9.1, c = 11.3</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 5 · Höhe eines Leuchtturms</h3>
      <p>
        Zwei Beobachtungspunkte P und Q liegen auf einer geraden Strandlinie.
        Q liegt näher beim Leuchtturm als P. Die Distanz zwischen P und Q beträgt 720 m.
        Von P aus beträgt der Höhenwinkel zur Spitze 11.8°, von Q aus 18.9°.
      </p>
      <p>Berechne die Höhe des Leuchtturms über der Strandlinie.</p>
      <div class="formula">Tipp: Setze x als horizontale Distanz von Q zum Leuchtturm und stelle zwei Tangensgleichungen auf.</div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 6 · Drohne über einem Sportplatz</h3>
      <p>
        Eine Drohne schwebt senkrecht über einem Punkt D auf dem Boden.
        Zwei Schüler stehen an den Punkten A und B. Die Distanz AB beträgt 150 m.
        Von A aus sieht man die Drohne unter 38°, von B aus unter 52°.
        D liegt zwischen A und B.
      </p>
      <ol type="a">
        <li>Berechne die Höhe der Drohne.</li>
        <li>Berechne die Entfernung von A zu D und von B zu D.</li>
      </ol>
    </div>
  `);
}

function renderQuadratischeFunktionenGym1() {
  window.setMaterialTitle("Mathematik · GYM1 · Quadratische Funktionen und Gleichungen");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToMatheGym1Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Dieses Übungsset wurde eigenständig erstellt. Es übernimmt keine Originalaufgaben, keine Originaldiagramme,
      keine Zahlenwerte und keine Formulierungen aus einer Schulprüfung. Es trainiert nur dasselbe Stoffgebiet.
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 1 · Parabel verschieben und spiegeln</h3>
      <p>Gegeben ist die Normalparabel y = x².</p>
      <ol type="a">
        <li>Verschiebe die Parabel 4 Einheiten nach links und 3 Einheiten nach oben. Gib die Funktionsgleichung an.</li>
        <li>Spiegle diese neue Parabel an der x-Achse. Gib die neue Funktionsgleichung an.</li>
        <li>Bestimme den Scheitelpunkt der gespiegelten Parabel.</li>
        <li>Entscheide, ob die Parabel nach oben oder nach unten geöffnet ist.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 2 · Scheitelpunktform verstehen</h3>
      <p>Eine quadratische Funktion ist gegeben durch:</p>
      <div class="formula">f(x) = 2(x - 3)² - 5</div>
      <ol type="a">
        <li>Bestimme den Scheitelpunkt.</li>
        <li>Bestimme die Symmetrieachse.</li>
        <li>Berechne f(0).</li>
        <li>Untersuche, ob die Funktion Nullstellen besitzt.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 3 · Von der Scheitelpunktform zur allgemeinen Form</h3>
      <p>Forme die Funktion in die allgemeine Form ax² + bx + c um:</p>
      <div class="formula">g(x) = -1.5(x + 2)² + 6</div>
      <ol type="a">
        <li>Multipliziere die Klammer aus.</li>
        <li>Gib a, b und c an.</li>
        <li>Bestimme den y-Achsenabschnitt.</li>
        <li>Beschreibe die Lage des Scheitelpunkts.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 4 · Gerade und Parabel schneiden sich</h3>
      <p>Gegeben sind die Parabel und die Gerade:</p>
      <div class="formula">p(x) = x² - 4x + 1</div>
      <div class="formula">h(x) = 2x - 7</div>
      <ol type="a">
        <li>Stelle eine Gleichung auf, mit der man die Schnittpunkte berechnet.</li>
        <li>Berechne die x-Koordinaten der Schnittpunkte.</li>
        <li>Berechne die zugehörigen y-Koordinaten.</li>
        <li>Gib die Schnittpunkte als Koordinatenpaare an.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 5 · Quadratische Gleichungen lösen</h3>
      <p>Löse die folgenden Gleichungen mit einem geeigneten Verfahren.</p>
      <ol type="a">
        <li>x² - 9x + 20 = 0</li>
        <li>3x² = 27</li>
        <li>2x² + 5x - 3 = 0</li>
        <li>(x - 4)(x + 1) = 12</li>
        <li>x² + 6x + 9 = 0</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 6 · Wahr oder falsch?</h3>
      <p>Entscheide, ob die Aussagen wahr oder falsch sind. Begründe kurz.</p>
      <ol type="a">
        <li>Jede quadratische Funktion hat genau zwei Nullstellen.</li>
        <li>Eine Parabel mit negativem Streckfaktor ist nach unten geöffnet.</li>
        <li>Die Symmetrieachse einer Parabel verläuft immer durch den Scheitelpunkt.</li>
        <li>Wenn eine quadratische Gleichung genau eine Lösung hat, berührt der Graph die x-Achse.</li>
        <li>Jede Parabel ist symmetrisch zur y-Achse.</li>
        <li>Eine Funktion in der Form f(x) = a(x - s)² + t hat den Scheitelpunkt S(s | t).</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 7 · Parameteraufgabe</h3>
      <p>Gegeben ist die Gleichung:</p>
      <div class="formula">x² - 2kx + 16 = 0</div>
      <ol type="a">
        <li>Für welche Werte von k hat die Gleichung genau eine Lösung?</li>
        <li>Für welche Werte von k hat die Gleichung zwei verschiedene Lösungen?</li>
        <li>Für welche Werte von k hat die Gleichung keine reelle Lösung?</li>
      </ol>
      <div class="formula">Tipp: Verwende die Diskriminante.</div>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 8 · Flugbahn eines Balls</h3>
      <p>Die Höhe eines Balls wird näherungsweise beschrieben durch:</p>
      <div class="formula">f(x) = -0.03x² + 1.2x + 1.5</div>
      <p>Dabei ist x die horizontale Entfernung in Metern und f(x) die Höhe in Metern.</p>
      <ol type="a">
        <li>Aus welcher Höhe wird der Ball geworfen?</li>
        <li>Nach welcher horizontalen Entfernung erreicht der Ball seine maximale Höhe?</li>
        <li>Wie hoch ist der Ball maximal?</li>
        <li>Bei welcher Entfernung trifft der Ball ungefähr wieder auf den Boden?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 9 · Parabel aus Eigenschaften bestimmen</h3>
      <p>Eine Parabel hat den Scheitelpunkt S(2 | -3) und geht durch den Punkt P(4 | 5).</p>
      <ol type="a">
        <li>Setze die Scheitelpunktform f(x) = a(x - s)² + t an.</li>
        <li>Bestimme den Streckfaktor a.</li>
        <li>Gib die Funktionsgleichung an.</li>
        <li>Berechne die Nullstellen der Funktion.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>Aufgabe 10 · Modellieren mit einer Parabel</h3>
      <p>Ein Torbogen wird durch eine Parabel beschrieben. Der höchste Punkt liegt bei S(0 | 4). Am Boden ist der Bogen 6 m breit.</p>
      <ol type="a">
        <li>Welche Nullstellen hat die Parabel?</li>
        <li>Bestimme eine passende Funktionsgleichung in Scheitelpunktform.</li>
        <li>Berechne die Höhe des Bogens 1 m neben der Mitte.</li>
      </ol>
    </div>
  `);
}

window.render_mathematik_gym1 = render_mathematik_gym1;
window.renderTrigonometrieGym1 = renderTrigonometrieGym1;
window.renderQuadratischeFunktionenGym1 = renderQuadratischeFunktionenGym1;
window.backToMatheGym1Topics = backToMatheGym1Topics;
