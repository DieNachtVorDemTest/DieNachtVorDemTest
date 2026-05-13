window.contentRenderers = window.contentRenderers || {};

window.contentRenderers["Mathematik-GYM3"] = function(materialTitle, materialContent) {
  materialTitle.textContent = "Mathematik · GYM3 · Themengebiete";

  materialContent.innerHTML = `
    <div class="notice">
      Alle Inhalte sind eigenständig erstellte Übungsaufgaben. Sie sind keine Originalprüfungen,
      keine Scans und kein offizielles Schulmaterial.
    </div>

    <div class="subjects-grid">
      <div class="subject-card" onclick="renderMatheGym3Differentialrechnung()">
        <h3>Differentialrechnung</h3>
        <p>Ableitungen, Tangenten, Extremstellen, Wendestellen und Kurvendiskussion.</p>
      </div>

      <div class="subject-card" onclick="renderMatheGym3Taylor()">
        <h3>Taylorpolynome</h3>
        <p>Entwicklung um eine Stelle, erste Terme, Interpretation.</p>
      </div>

      <div class="subject-card" onclick="renderMatheGym3Folgen()">
        <h3>Zahlenfolgen und Grenzwerte</h3>
        <p>Rekursive und explizite Darstellung, Grenzwerte und ε-Idee.</p>
      </div>
    </div>
  `;
};

function backToMatheGym3Topics() {
  window.contentRenderers["Mathematik-GYM3"](
    document.getElementById("material-title"),
    document.getElementById("material-content")
  );
}

function renderMatheGym3Differentialrechnung() {
  const materialTitle = document.getElementById("material-title");
  const materialContent = document.getElementById("material-content");

  materialTitle.textContent = "Mathematik · GYM3 · Differentialrechnung";

  materialContent.innerHTML = `
    <button class="secondary" onclick="backToMatheGym3Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zur Differentialrechnung. Die Aufgaben trainieren Ableitung, Tangente,
      Kurvendiskussion und Interpretation.
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 1 · Ableitungen berechnen</h3>
      <p>Berechne jeweils f'(x).</p>
      <ol type="a">
        <li>f(x) = cos²(x)</li>
        <li>f(x) = x² · e<sup>-x</sup></li>
        <li>f(x) = 1 / x²</li>
        <li>f(x) = √x</li>
      </ol>
      <div class="hint">
        Anleitung: Verwende Kettenregel bei Potenzen von trigonometrischen Funktionen, Produktregel bei Produkten und schreibe Wurzeln oder Brüche als Potenzen.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        a) f'(x) = -2cos(x)sin(x)<br>
        b) f'(x) = 2x e<sup>-x</sup> - x² e<sup>-x</sup> = e<sup>-x</sup>(2x - x²)<br>
        c) f(x)=x<sup>-2</sup> → f'(x)=-2x<sup>-3</sup> = -2/x³<br>
        d) f(x)=x<sup>1/2</sup> → f'(x)=1/(2√x)
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 2 · Ableitung von aˣ</h3>
      <p>Begründe mit der Identität aˣ = e<sup>ln(a)·x</sup>, dass gilt:</p>
      <div class="formula">d/dx (aˣ) = ln(a) · aˣ</div>
      <div class="hint">
        Anleitung: Schreibe aˣ zuerst als e-Funktion. Danach leitest du mit der Kettenregel ab.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        aˣ = e<sup>ln(a)x</sup><br>
        Ableitung: e<sup>ln(a)x</sup> · ln(a)<br>
        Da e<sup>ln(a)x</sup> = aˣ gilt: (aˣ)' = ln(a) · aˣ.
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 3 · Identität erkennen</h3>
      <p>Gegeben ist:</p>
      <div class="formula">f(x) = sin²(x) + cos²(x)</div>
      <ol type="a">
        <li>Berechne f'(x).</li>
        <li>Interpretiere das Resultat.</li>
      </ol>
      <div class="hint">
        Anleitung: Du kannst entweder direkt ableiten oder zuerst die trigonometrische Identität erkennen.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        f(x)=1 für alle x.<br>
        Deshalb f'(x)=0.<br>
        Interpretation: Die Funktion ist konstant.
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 4 · Kurvendiskussion</h3>
      <p>Gegeben ist:</p>
      <div class="formula">f(x) = x³ - 6x</div>
      <ol type="a">
        <li>Bestimme alle Nullstellen.</li>
        <li>Bestimme die Extremstellen.</li>
        <li>Bestimme die Wendestelle.</li>
        <li>Bestimme die Tangente im Punkt P(1 | f(1)).</li>
      </ol>
      <div class="hint">
        Anleitung: Nullstellen erhältst du mit Faktorisieren. Für Extremstellen setzt du f'(x)=0. Für Wendestellen setzt du f''(x)=0. Für die Tangente brauchst du Punkt und Steigung.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        f(x)=x(x²-6) → Nullstellen: x=0, x=±√6<br>
        f'(x)=3x²-6 → x=±√2<br>
        f''(x)=6x<br>
        Bei x=-√2: lokales Maximum. Bei x=√2: lokales Minimum.<br>
        Wendestelle: x=0, also W(0 | 0).<br>
        P(1 | -5), f'(1)=-3 → Tangente: y = -3(x-1)-5 = -3x-2
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 5 · Tangente und Achsenschnitt</h3>
      <p>Gegeben ist f(x)=x³-3x²+2. Bestimme die Tangente bei x=2 und ihren Schnittpunkt mit der x-Achse.</p>
      <div class="hint">
        Anleitung: Berechne zuerst f(2), dann f'(x), dann f'(2). Stelle die Tangentengleichung auf und setze y=0.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        f(2)=8-12+2=-2<br>
        f'(x)=3x²-6x<br>
        f'(2)=0<br>
        Tangente: y=-2<br>
        Sie schneidet die x-Achse nicht, weil y konstant -2 ist.
      </div>
    </div>
  `;
}

function renderMatheGym3Taylor() {
  const materialTitle = document.getElementById("material-title");
  const materialContent = document.getElementById("material-content");

  materialTitle.textContent = "Mathematik · GYM3 · Taylorpolynome";

  materialContent.innerHTML = `
    <button class="secondary" onclick="backToMatheGym3Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Taylorpolynomen.
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 1 · Taylorpolynom von ln(1+x)</h3>
      <p>Bestimme die ersten vier nicht verschwindenden Terme der Entwicklung um a = 0.</p>
      <div class="hint">
        Anleitung: Leite ln(1+x) mehrfach ab und setze x=0 ein. Alternativ kann man die bekannte Reihe verwenden.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        ln(1+x) = x - x²/2 + x³/3 - x⁴/4 + ...
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 2 · Taylorpolynom von eˣ</h3>
      <p>Bestimme das Taylorpolynom 4. Grades von f(x)=eˣ um a=0.</p>
      <div class="hint">
        Anleitung: Bei eˣ sind alle Ableitungen wieder eˣ. Bei a=0 ist jeder Ableitungswert gleich 1.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        p₄(x)=1+x+x²/2+x³/6+x⁴/24
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 3 · Taylorpolynom interpretieren</h3>
      <p>Erkläre kurz, wozu ein Taylorpolynom dient.</p>
      <div class="hint">
        Anleitung: Denke daran, dass komplizierte Funktionen in der Nähe eines Punktes durch Polynome angenähert werden.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        Ein Taylorpolynom approximiert eine Funktion in der Umgebung eines Entwicklungspunktes durch ein Polynom. Je höher der Grad, desto besser ist die lokale Näherung, sofern die Funktion genügend oft differenzierbar ist.
      </div>
    </div>
  `;
}

function renderMatheGym3Folgen() {
  const materialTitle = document.getElementById("material-title");
  const materialContent = document.getElementById("material-content");

  materialTitle.textContent = "Mathematik · GYM3 · Zahlenfolgen und Grenzwerte";

  materialContent.innerHTML = `
    <button class="secondary" onclick="backToMatheGym3Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Folgen, Grenzwerten und expliziter Darstellung.
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 1 · Grenzwert bestimmen</h3>
      <p>Bestimme den Grenzwert der Folge:</p>
      <div class="formula">aₙ = (3n² - 5n + 1) / (2n² + 7)</div>
      <div class="hint">
        Anleitung: Teile Zähler und Nenner durch n². Danach lässt du n gegen unendlich gehen.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        aₙ = (3 - 5/n + 1/n²) / (2 + 7/n²)<br>
        Grenzwert = 3/2
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 2 · ε-Idee</h3>
      <p>Für die Folge aₙ = 2 + 1/n sei ε = 0.0001. Wie gross muss n mindestens sein, damit |aₙ - 2| &lt; ε gilt?</p>
      <div class="hint">
        Anleitung: Berechne zuerst |aₙ - 2|. Danach löst du die Ungleichung nach n auf.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        |aₙ - 2| = 1/n<br>
        1/n < 0.0001<br>
        n > 10000<br>
        Also mindestens n = 10001.
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 3 · Rekursiv zu explizit</h3>
      <p>Gegeben ist die Folge:</p>
      <div class="formula">a₁ = 5, &nbsp;&nbsp; aₙ₊₁ = aₙ + 4</div>
      <ol type="a">
        <li>Bestimme die explizite Darstellung.</li>
        <li>Berechne a₅.</li>
      </ol>
      <div class="hint">
        Anleitung: Es handelt sich um eine arithmetische Folge. Der Startwert ist a₁ und die Differenz ist 4.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        aₙ = 5 + (n-1)·4 = 4n + 1<br>
        a₅ = 21
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 4 · Geometrische Folge</h3>
      <p>Gegeben ist:</p>
      <div class="formula">b₁ = 3, &nbsp;&nbsp; bₙ₊₁ = 2bₙ</div>
      <ol type="a">
        <li>Bestimme die explizite Darstellung.</li>
        <li>Berechne b₅.</li>
      </ol>
      <div class="hint">
        Anleitung: Es handelt sich um eine geometrische Folge. Der Faktor ist 2.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        bₙ = 3 · 2ⁿ⁻¹<br>
        b₅ = 3 · 2⁴ = 48
      </div>
    </div>

    <div class="exercise-card">
      <button class="info-btn" onclick="toggleHint(this)">i</button>
      <h3>Aufgabe 5 · Aussage beurteilen</h3>
      <p>
        Jemand behauptet: Wenn f'(x) drei verschiedene Nullstellen hat, dann besitzt f(x) mindestens ein lokales Minimum.
        Stimmt diese Aussage immer? Begründe.
      </p>
      <div class="hint">
        Anleitung: Überlege, ob jede Nullstelle von f'(x) automatisch ein Extrempunkt ist. Entscheidend ist ein Vorzeichenwechsel von f'.
      </div>
      <button class="solution-btn" onclick="toggleSolution(this)">Lösung anzeigen</button>
      <div class="solution">
        Die Aussage ist nicht automatisch garantiert. Eine Nullstelle von f' kann auch eine Terrassenstelle sein. Für ein lokales Minimum braucht es einen Vorzeichenwechsel von f' von negativ zu positiv. Ohne weitere Informationen reicht die Anzahl der Nullstellen von f' allein nicht sicher aus.
      </div>
    </div>
  `;
}
