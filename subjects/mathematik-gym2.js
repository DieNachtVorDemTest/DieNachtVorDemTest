window.contentRenderers = window.contentRenderers || {};

window.contentRenderers["Mathematik-GYM2"] = function(materialTitle, materialContent) {
  materialTitle.textContent = "Mathematik · GYM2 · Themengebiete";

  materialContent.innerHTML = `
    <div class="notice">
      Alle Inhalte sind eigenständig erstellte Übungsaufgaben. Sie sind keine Originalprüfungen,
      keine Scans und kein offizielles Schulmaterial.
    </div>

    <div class="subjects-grid">
      <div class="subject-card" onclick="renderMatheGym2Logarithmen()">
        <h3>Exponentialfunktionen und Logarithmen</h3>
        <p>Logarithmengesetze, Wachstum, Zerfall, Verdoppelungszeit.</p>
      </div>

      <div class="subject-card" onclick="renderMatheGym2Aenderungsraten()">
        <h3>Änderungsraten und Ableitungsbegriff</h3>
        <p>Steigungen, Ableitungsskizzen, Tangenten und erste Ableitungsregeln.</p>
      </div>
    </div>
  `;
};

function backToMatheGym2Topics() {
  window.contentRenderers["Mathematik-GYM2"](
    document.getElementById("material-title"),
    document.getElementById("material-content")
  );
}

function renderMatheGym2Logarithmen() {
  const materialTitle = document.getElementById("material-title");
  const materialContent = document.getElementById("material-content");

  materialTitle.textContent = "Mathematik · GYM2 · Exponentialfunktionen und Logarithmen";

  materialContent.innerHTML = `
    <button class="secondary" onclick="backToMatheGym2Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Logarithmen und Exponentialfunktionen.
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 1 · Logarithmengesetze prüfen</h3>
      <p>Entscheide, ob die Aussagen richtig oder falsch sind. Begründe kurz.</p>
      <ol type="a">
        <li>log₂(8 · 4) = log₂(8) + log₂(4)</li>
        <li>log₅(25 + 125) = log₅(25) + log₅(125)</li>
        <li>10<sup>log₁₀(37)</sup> = 37</li>
        <li>log₃(3⁷) = 7</li>
        <li>log₄(16²) = 4</li>
      </ol>
      <div class="hint">
        Anleitung: Produkte werden beim Logarithmus zu Summen. Summen im Argument darf man aber nicht auseinanderziehen.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        a) richtig<br>
        b) falsch<br>
        c) richtig<br>
        d) richtig<br>
        e) richtig, denn 16² = 256 = 4⁴
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 2 · Radioaktiver Zerfall</h3>
      <p>
        Eine Substanz hat eine Halbwertszeit von 12 Jahren. Nach 6 Jahren sind noch 18 mg vorhanden.
      </p>
      <ol type="a">
        <li>Stelle eine Zerfallsfunktion f(t) auf.</li>
        <li>Wie viel war am Anfang vorhanden?</li>
        <li>Nach wie vielen Jahren sind nur noch 5 mg vorhanden?</li>
      </ol>
      <div class="hint">
        Anleitung: Bei Halbwertszeit verwendet man f(t) = A · (1/2)<sup>t/T</sup>. Setze den bekannten Punkt ein, um A zu bestimmen.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        f(t) = A · (1/2)<sup>t/12</sup><br>
        18 = A · (1/2)<sup>6/12</sup> = A / √2<br>
        A ≈ 25.46 mg<br>
        5 = 25.46 · (1/2)<sup>t/12</sup> → t ≈ 28.2 Jahre
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 3 · Verdoppelungszeit</h3>
      <p>
        Ein Guthaben wächst jährlich um 2.4 %. Nach wie vielen Jahren hat es sich verdoppelt?
      </p>
      <div class="hint">
        Anleitung: Setze 2 = 1.024<sup>t</sup> und löse mit dem Logarithmus nach t auf.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        2 = 1.024<sup>t</sup><br>
        t = log(2) / log(1.024) ≈ 29.23 Jahre
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 4 · Graphen von Logarithmusfunktionen</h3>
      <p>Ordne den Beschreibungen passende Funktionen zu.</p>
      <ol type="A">
        <li>Wächst langsam und geht durch (1 | 0), Basis grösser als 1.</li>
        <li>Fällt und geht durch (1 | 0), Basis zwischen 0 und 1.</li>
        <li>Wächst stärker als log₁₀(x).</li>
      </ol>
      <p>Funktionen:</p>
      <ol>
        <li>f(x) = log₂(x)</li>
        <li>g(x) = log₁₀(x)</li>
        <li>h(x) = log₀.₅(x)</li>
      </ol>
      <div class="hint">
        Anleitung: Logarithmen mit Basis grösser als 1 wachsen. Mit Basis zwischen 0 und 1 fallen sie.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        A → g(x) = log₁₀(x)<br>
        B → h(x) = log₀.₅(x)<br>
        C → f(x) = log₂(x)
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 5 · Exponentielles Wachstum aus zwei Punkten</h3>
      <p>
        Eine Funktion hat die Form f(x) = A · bˣ. Sie geht durch P(2 | 9) und Q(5 | 72).
      </p>
      <ol type="a">
        <li>Bestimme b.</li>
        <li>Bestimme A.</li>
        <li>Gib die Funktionsgleichung an.</li>
      </ol>
      <div class="hint">
        Anleitung: Teile die beiden Gleichungen. Dadurch fällt A weg. Danach kannst du b bestimmen.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        9 = A · b², 72 = A · b⁵<br>
        72/9 = b³ → 8 = b³ → b = 2<br>
        9 = A · 4 → A = 2.25<br>
        f(x) = 2.25 · 2ˣ
      </div>
    </div>
  `;
}

function renderMatheGym2Aenderungsraten() {
  const materialTitle = document.getElementById("material-title");
  const materialContent = document.getElementById("material-content");

  materialTitle.textContent = "Mathematik · GYM2 · Änderungsraten";

  materialContent.innerHTML = `
    <button class="secondary" onclick="backToMatheGym2Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zum Ableitungsbegriff und Änderungsraten.
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 1 · Ableitung aus Graph verstehen</h3>
      <p>
        Eine Funktion steigt auf dem Intervall [0,2], fällt auf [2,5] und steigt danach wieder.
        Skizziere grob den Graphen der Ableitungsfunktion f'(x).
      </p>
      <div class="hint">
        Anleitung: Wo f steigt, ist f' positiv. Wo f fällt, ist f' negativ. Bei lokalen Hoch- oder Tiefpunkten von f ist f' = 0.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        f'(x) ist positiv auf [0,2], ungefähr 0 bei x = 2, negativ auf [2,5], ungefähr 0 bei x = 5 und danach wieder positiv.
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 2 · Potenzregel begründen</h3>
      <p>Zeige mit dem Differentialquotienten, dass für f(x) = x² gilt: f'(x) = 2x.</p>
      <div class="hint">
        Anleitung: Starte mit lim h→0 [f(x+h)-f(x)]/h. Setze f(x)=x² ein und vereinfache.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        f'(x)=lim h→0 [(x+h)²-x²]/h<br>
        =lim h→0 [x²+2xh+h²-x²]/h<br>
        =lim h→0 [2xh+h²]/h<br>
        =lim h→0 (2x+h)=2x
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 3 · Tangente</h3>
      <p>Gegeben ist f(x)=x²-4x+1. Bestimme die Tangente im Punkt mit x=3.</p>
      <div class="hint">
        Anleitung: Berechne zuerst f(3). Dann berechne f'(x). Die Tangentensteigung ist f'(3). Danach verwende y = m(x - x₀) + y₀.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        f(3)=9-12+1=-2<br>
        f'(x)=2x-4<br>
        f'(3)=2<br>
        Tangente: y = 2(x-3)-2 = 2x-8
      </div>
    </div>
  `;
}
