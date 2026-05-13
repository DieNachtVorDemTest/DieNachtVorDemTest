function matheGym2InfoButton(id) {
  return `<button class="info-btn" onclick="toggleInfo('${id}')" title="Anleitung anzeigen">i</button>`;
}

function matheGym2InfoBox(id, html) {
  return `
    <div id="${id}" class="info-box hidden">
      <strong>Abstrakte Anleitung:</strong>
      ${html}
    </div>
  `;
}

function render_mathematik_gym2() {
  window.setMaterialTitle("Mathematik · GYM2 · Exponentialfunktionen und Logarithmen");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren Exponentialfunktionen, Logarithmen, Halbwertszeit, Verzinsung und exponentielle Modelle.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Logarithmengesetze prüfen</h3>
        ${matheGym2InfoButton("mg2-info-1")}
      </div>
      ${matheGym2InfoBox("mg2-info-1", `
        <ul>
          <li>Verwende die Definition: log_a(b) = x bedeutet a^x = b.</li>
          <li>Produktregel: log_a(xy) = log_a(x) + log_a(y).</li>
          <li>Potenzregel: log_a(x^r) = r · log_a(x).</li>
          <li>Quotientenregel: log_a(x/y) = log_a(x) - log_a(y).</li>
          <li>Achte auf Definitionsbedingungen: Basis positiv und ungleich 1, Argument positiv.</li>
        </ul>
      `)}
      <p>Entscheide, ob die Aussagen wahr oder falsch sind. Begründe kurz.</p>
      <ol type="a">
        <li>log₂(8) = 3</li>
        <li>log₃(9 · 27) = log₃(9) + log₃(27)</li>
        <li>log₅(25) · log₅(5) = log₅(125)</li>
        <li>log₄(1) = 0</li>
        <li>logₐ(a⁵) = 5 für a &gt; 0 und a ≠ 1</li>
        <li>log₂(16 + 16) = log₂(16) + log₂(16)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Exponentialgleichungen lösen</h3>
        ${matheGym2InfoButton("mg2-info-2")}
      </div>
      ${matheGym2InfoBox("mg2-info-2", `
        <ul>
          <li>Wenn beide Seiten als Potenz derselben Basis geschrieben werden können, vergleiche die Exponenten.</li>
          <li>Wenn das nicht geht, logarithmiere beide Seiten.</li>
          <li>Bei Gleichungen der Form a · b^x = c zuerst durch a teilen.</li>
          <li>Danach mit log oder ln nach x auflösen.</li>
        </ul>
      `)}
      <p>Löse die Gleichungen nach x. Runde, falls nötig, auf zwei Nachkommastellen.</p>
      <ol type="a">
        <li>2ˣ = 64</li>
        <li>3 · 1.4ˣ = 18</li>
        <li>0.75ˣ = 0.2</li>
        <li>5 · 2ˣ⁺¹ = 80</li>
        <li>12 · 0.9ˣ = 4</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Halbwertszeit</h3>
        ${matheGym2InfoButton("mg2-info-3")}
      </div>
      ${matheGym2InfoBox("mg2-info-3", `
        <ul>
          <li>Bei Halbwertszeit halbiert sich die Menge in gleichen Zeitabständen.</li>
          <li>Modell: f(t) = A₀ · (1/2)^(t/T), wobei T die Halbwertszeit ist.</li>
          <li>Wenn ein Zeitpunkt gegeben ist, setze ihn in die Funktion ein.</li>
          <li>Für Prozentanteile kannst du mit f(t)/A₀ arbeiten.</li>
        </ul>
      `)}
      <p>Eine Substanz hat eine Halbwertszeit von 12 Jahren. Zu Beginn sind 80 mg vorhanden.</p>
      <ol type="a">
        <li>Stelle eine Funktion f(t) auf, welche die Menge nach t Jahren beschreibt.</li>
        <li>Wie viel ist nach 18 Jahren noch vorhanden?</li>
        <li>Nach wie vielen Jahren sind nur noch 10 mg vorhanden?</li>
        <li>Nach wie vielen Jahren sind noch 30% der Anfangsmenge vorhanden?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Verzinsung</h3>
        ${matheGym2InfoButton("mg2-info-4")}
      </div>
      ${matheGym2InfoBox("mg2-info-4", `
        <ul>
          <li>Bei jährlichem Zinseszins gilt K(t) = K₀ · (1 + p)^t.</li>
          <li>p muss als Dezimalzahl eingesetzt werden, also 3% = 0.03.</li>
          <li>Für Verdopplung setzt man K(t) = 2K₀.</li>
          <li>Dann kürzt sich K₀ weg und man löst mit Logarithmen.</li>
        </ul>
      `)}
      <p>Ein Kapital von CHF 2500 wird mit jährlichem Zinseszins angelegt.</p>
      <ol type="a">
        <li>Wie gross ist das Kapital nach 8 Jahren bei 2.5% Jahreszins?</li>
        <li>Nach wie vielen Jahren hat sich das Kapital bei 2.5% Jahreszins verdoppelt?</li>
        <li>Welcher Jahreszins wäre nötig, damit sich das Kapital in 20 Jahren verdoppelt?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Logarithmusfunktionen zuordnen</h3>
        ${matheGym2InfoButton("mg2-info-5")}
      </div>
      ${matheGym2InfoBox("mg2-info-5", `
        <ul>
          <li>Logarithmusfunktionen haben bei x = 0 eine senkrechte Asymptote.</li>
          <li>Alle log_a(x) gehen durch den Punkt (1|0).</li>
          <li>Für a &gt; 1 ist der Graph steigend.</li>
          <li>Für 0 &lt; a &lt; 1 ist der Graph fallend.</li>
          <li>Je grösser die Basis bei a &gt; 1, desto flacher wächst der Graph.</li>
        </ul>
      `)}
      <p>Beschreibe ohne Zeichnung, wie die folgenden Graphen verlaufen. Entscheide jeweils: steigend oder fallend, Definitionsbereich, Nullstelle.</p>
      <ol type="a">
        <li>f(x) = log₂(x)</li>
        <li>g(x) = log₀.₅(x)</li>
        <li>h(x) = log₁₀(x)</li>
        <li>k(x) = log₃(x) + 2</li>
        <li>m(x) = log₂(x - 1)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Exponentielles Wachstum bestimmen</h3>
        ${matheGym2InfoButton("mg2-info-6")}
      </div>
      ${matheGym2InfoBox("mg2-info-6", `
        <ul>
          <li>Eine Exponentialfunktion hat die Form f(x) = c · a^x.</li>
          <li>Wenn zwei Punkte gegeben sind, setze beide Punkte ein.</li>
          <li>Dividiere die Gleichungen, damit c verschwindet.</li>
          <li>Bestimme zuerst a und danach c.</li>
          <li>Die Verdopplungszeit erhält man mit a^T = 2.</li>
        </ul>
      `)}
      <p>Eine exponentielle Funktion f(x) = c · aˣ geht durch die Punkte A(2 | 9) und B(6 | 45).</p>
      <ol type="a">
        <li>Bestimme a.</li>
        <li>Bestimme c.</li>
        <li>Gib die Funktionsgleichung an.</li>
        <li>Berechne die Verdopplungszeit.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Werte aus einer Tabelle modellieren</h3>
        ${matheGym2InfoButton("mg2-info-7")}
      </div>
      ${matheGym2InfoBox("mg2-info-7", `
        <ul>
          <li>Prüfe zuerst, ob die Werte eher linear oder exponentiell abnehmen.</li>
          <li>Bei exponentiellem Verlauf sind die Quotienten ähnlicher als die Differenzen.</li>
          <li>Wähle zwei Punkte und bestimme daraus eine Funktion.</li>
          <li>Interpretiere das Resultat immer im Sachzusammenhang.</li>
        </ul>
      `)}
      <p>Die Helligkeit einer Lampe nimmt mit der Entfernung ab. Es werden folgende Werte gemessen:</p>
      <div class="formula">
        Entfernung in m: 1 | 2 | 4 | 8<br>
        Helligkeit: 120 | 60 | 30 | 15
      </div>
      <ol type="a">
        <li>Begründe, warum ein exponentielles Modell passen könnte.</li>
        <li>Stelle eine passende Funktion auf.</li>
        <li>Berechne die Helligkeit bei 6 m.</li>
        <li>Bei welcher Entfernung beträgt die Helligkeit ungefähr 10?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Grosse Zahlen und Zweierpotenzen</h3>
        ${matheGym2InfoButton("mg2-info-8")}
      </div>
      ${matheGym2InfoBox("mg2-info-8", `
        <ul>
          <li>Ein System mit n Bits kann 2ⁿ verschiedene Zustände darstellen.</li>
          <li>Wenn bei 0 begonnen wird, ist die grösste Zahl 2ⁿ - 1.</li>
          <li>Für die Anzahl Dezimalstellen verwendest du log₁₀(N).</li>
          <li>Die Stellenzahl ist floor(log₁₀(N)) + 1.</li>
        </ul>
      `)}
      <p>Ein digitales System arbeitet mit 128 Bits.</p>
      <ol type="a">
        <li>Wie viele verschiedene Zustände kann es darstellen?</li>
        <li>Was ist die grösste natürliche Zahl, wenn bei 0 begonnen wird?</li>
        <li>Wie viele Dezimalstellen hat diese grösste Zahl ungefähr?</li>
        <li>Erkläre, warum Logarithmen bei solchen Fragen nützlich sind.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 9 · Logarithmusgleichung</h3>
        ${matheGym2InfoButton("mg2-info-9")}
      </div>
      ${matheGym2InfoBox("mg2-info-9", `
        <ul>
          <li>Bringe zuerst alle Logarithmen auf eine Seite.</li>
          <li>Nutze Logarithmengesetze, um Terme zusammenzufassen.</li>
          <li>Wandle danach in eine Exponentialgleichung um.</li>
          <li>Prüfe am Ende die Definitionsbedingungen.</li>
        </ul>
      `)}
      <p>Löse die Gleichungen und prüfe die Lösungen.</p>
      <ol type="a">
        <li>log₂(x) = 5</li>
        <li>log₃(x - 1) = 2</li>
        <li>log₅(x) + log₅(2) = 3</li>
        <li>log₂(x + 3) - log₂(x) = 2</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 10 · Gemischte Abschlussaufgabe</h3>
        ${matheGym2InfoButton("mg2-info-10")}
      </div>
      ${matheGym2InfoBox("mg2-info-10", `
        <ul>
          <li>Erkenne zuerst den Aufgabentyp: Wachstum, Zerfall, Zins oder Logarithmus.</li>
          <li>Schreibe die passende Grundformel auf.</li>
          <li>Setze die gegebenen Werte sorgfältig ein.</li>
          <li>Löse erst am Schluss mit Logarithmen nach der gesuchten Variable auf.</li>
        </ul>
      `)}
      <p>Eine Bakterienkultur wächst exponentiell. Zu Beginn sind 4000 Bakterien vorhanden. Nach 6 Stunden sind es 11200.</p>
      <ol type="a">
        <li>Bestimme eine Funktion N(t) = N₀ · aᵗ.</li>
        <li>Wie viele Bakterien sind nach 10 Stunden vorhanden?</li>
        <li>Nach wie vielen Stunden sind 50000 Bakterien vorhanden?</li>
        <li>Bestimme die Verdopplungszeit.</li>
      </ol>
    </div>
  `);
}

window.render_mathematik_gym2 = render_mathematik_gym2;
