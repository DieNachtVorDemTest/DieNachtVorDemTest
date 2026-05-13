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
  window.setMaterialTitle("Mathematik · GYM2 · Themengebiete");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben sind thematisch passend, aber vollständig neu erstellt.
    </div>

    <div class="subjects-grid">
      <div class="subject-card" onclick="renderMatheGym2Logarithmen()">
        <h3>Exponentialfunktionen und Logarithmen</h3>
        <p>Logarithmengesetze, Halbwertszeit, Zinseszins, Wachstum, Logarithmusfunktionen.</p>
      </div>

      <div class="subject-card" onclick="renderMatheGym2Ableitung()">
        <h3>Änderungsraten und Ableitung</h3>
        <p>Graph von f und f′, Potenzregel, Differentialquotient, Tangenten und Anwendungen.</p>
      </div>

      <div class="subject-card" onclick="renderMatheGym2Symmetrie()">
        <h3>Symmetrien und Ornamente</h3>
        <p>Translation, Spiegelung, Punktspiegelung, Schubspiegelung und Symmetrieklassen.</p>
      </div>
    </div>
  `);
}

function backToMatheGym2Topics() {
  render_mathematik_gym2();
}

function renderMatheGym2Logarithmen() {
  window.setMaterialTitle("Mathematik · GYM2 · Exponentialfunktionen und Logarithmen");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToMatheGym2Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Exponentialfunktionen und Logarithmen.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Logarithmengesetze prüfen</h3>
        ${matheGym2InfoButton("mg2-log-info-1")}
      </div>
      ${matheGym2InfoBox("mg2-log-info-1", `
        <ul>
          <li>Nutze log_a(xy) = log_a(x) + log_a(y).</li>
          <li>Nutze log_a(x^r) = r · log_a(x).</li>
          <li>Nutze log_a(x/y) = log_a(x) - log_a(y).</li>
          <li>Prüfe immer die Definitionsbedingungen.</li>
        </ul>
      `)}
      <p>Entscheide, ob die Aussagen wahr oder falsch sind. Begründe jeweils kurz.</p>
      <ol type="a">
        <li>log₂(32) = 5</li>
        <li>log₃(9 · 27) = log₃(9) + log₃(27)</li>
        <li>log₅(25 + 125) = log₅(25) + log₅(125)</li>
        <li>log₇(1) = 0</li>
        <li>logₐ(a⁴) = 4 für a &gt; 0 und a ≠ 1</li>
        <li>10^(log₁₀(240)) = 240</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Halbwertszeit</h3>
        ${matheGym2InfoButton("mg2-log-info-2")}
      </div>
      ${matheGym2InfoBox("mg2-log-info-2", `
        <ul>
          <li>Bei Halbwertszeit gilt f(t) = A₀ · (1/2)^(t/T).</li>
          <li>T ist die Halbwertszeit.</li>
          <li>Wenn ein späterer Wert gegeben ist, kann man rückwärts A₀ berechnen.</li>
          <li>Bei Prozentfragen teilt man durch die Anfangsmenge.</li>
        </ul>
      `)}
      <p>Eine Substanz besitzt eine Halbwertszeit von 16 Jahren. Nach 8 Jahren sind noch 45 mg vorhanden.</p>
      <ol type="a">
        <li>Bestimme die ursprüngliche Menge.</li>
        <li>Stelle eine Funktion f(t) auf.</li>
        <li>Wie viel ist nach 30 Jahren vorhanden?</li>
        <li>Nach wie vielen Jahren sind noch 20% der Anfangsmenge vorhanden?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Zinseszins</h3>
        ${matheGym2InfoButton("mg2-log-info-3")}
      </div>
      ${matheGym2InfoBox("mg2-log-info-3", `
        <ul>
          <li>Zinseszins: K(t) = K₀ · (1+p)^t.</li>
          <li>p als Dezimalzahl einsetzen.</li>
          <li>Bei Verdopplung setzt man K(t) = 2K₀.</li>
          <li>Zum Auflösen nach t logarithmieren.</li>
        </ul>
      `)}
      <p>Ein Betrag von CHF 4200 wird zu einem festen Jahreszins angelegt.</p>
      <ol type="a">
        <li>Wie gross ist der Betrag nach 12 Jahren bei 1.8% Jahreszins?</li>
        <li>Wie lange dauert es bei 1.8%, bis sich der Betrag verdoppelt?</li>
        <li>Welcher Jahreszins ist nötig, damit sich der Betrag in 25 Jahren verdoppelt?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Exponentialfunktion aus zwei Punkten</h3>
        ${matheGym2InfoButton("mg2-log-info-4")}
      </div>
      ${matheGym2InfoBox("mg2-log-info-4", `
        <ul>
          <li>Setze f(x) = c · a^x an.</li>
          <li>Setze beide Punkte ein.</li>
          <li>Dividiere die Gleichungen, damit c verschwindet.</li>
          <li>Bestimme zuerst a, dann c.</li>
        </ul>
      `)}
      <p>Eine Exponentialfunktion f(x) = c · aˣ geht durch A(2 | 18) und B(6 | 72).</p>
      <ol type="a">
        <li>Bestimme den Wachstumsfaktor a.</li>
        <li>Bestimme c.</li>
        <li>Gib die Funktionsgleichung an.</li>
        <li>Berechne die Verdopplungszeit.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Logarithmusfunktionen beschreiben</h3>
        ${matheGym2InfoButton("mg2-log-info-5")}
      </div>
      ${matheGym2InfoBox("mg2-log-info-5", `
        <ul>
          <li>Alle Funktionen log_a(x) gehen durch (1|0).</li>
          <li>Bei a &gt; 1 ist der Graph steigend.</li>
          <li>Bei 0 &lt; a &lt; 1 ist der Graph fallend.</li>
          <li>Der Definitionsbereich ist x &gt; 0, sofern nichts verschoben wurde.</li>
        </ul>
      `)}
      <p>Beschreibe die Graphen ohne Zeichnung: Definitionsbereich, Nullstelle, steigendes/fallendes Verhalten.</p>
      <ol type="a">
        <li>f(x) = log₂(x)</li>
        <li>g(x) = log₀.₂₅(x)</li>
        <li>h(x) = log₁₀(x) + 1</li>
        <li>k(x) = log₃(x - 2)</li>
      </ol>
    </div>
  `);
}

function renderMatheGym2Ableitung() {
  window.setMaterialTitle("Mathematik · GYM2 · Änderungsraten und Ableitung");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToMatheGym2Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Änderungsraten und Ableitungen.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Graph von f und f′ verstehen</h3>
        ${matheGym2InfoButton("mg2-abl-info-1")}
      </div>
      ${matheGym2InfoBox("mg2-abl-info-1", `
        <ul>
          <li>Wo f steigt, ist f′ positiv.</li>
          <li>Wo f fällt, ist f′ negativ.</li>
          <li>Bei lokalen Hoch- oder Tiefpunkten von f gilt meistens f′ = 0.</li>
          <li>Je steiler f ist, desto grösser ist der Betrag von f′.</li>
        </ul>
      `)}
      <p>Eine Funktion f besitzt folgende Eigenschaften:</p>
      <ul>
        <li>f fällt auf dem Intervall [-2, 1].</li>
        <li>f hat bei x = 1 einen lokalen Tiefpunkt.</li>
        <li>f steigt auf dem Intervall [1, 4].</li>
        <li>f hat bei x = 4 einen lokalen Hochpunkt.</li>
        <li>f fällt danach wieder.</li>
      </ul>
      <ol type="a">
        <li>Beschreibe das Vorzeichen von f′ in den Intervallen.</li>
        <li>Bestimme die Nullstellen von f′, soweit möglich.</li>
        <li>Skizziere qualitativ einen möglichen Graphen von f′.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Funktionsgraph nach Bedingungen zeichnen</h3>
        ${matheGym2InfoButton("mg2-abl-info-2")}
      </div>
      ${matheGym2InfoBox("mg2-abl-info-2", `
        <ul>
          <li>f(x)-Werte geben Punkte des Graphen an.</li>
          <li>f′(x) = 0 bedeutet waagrechte Tangente.</li>
          <li>Positive Ableitung bedeutet steigend.</li>
          <li>Negative Ableitung bedeutet fallend.</li>
        </ul>
      `)}
      <p>Zeichne einen möglichen Graphen einer Funktion f mit folgenden Eigenschaften:</p>
      <ul>
        <li>f(-2) = 1</li>
        <li>f′(-2) = 0</li>
        <li>f(0) = -1</li>
        <li>f′(0) &lt; 0</li>
        <li>f(3) = 2</li>
        <li>f′(3) = 0</li>
        <li>f(5) = 0</li>
      </ul>
      <p>Erkläre kurz, wie du die Punkte und Steigungen verwendet hast.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Potenzregel begründen</h3>
        ${matheGym2InfoButton("mg2-abl-info-3")}
      </div>
      ${matheGym2InfoBox("mg2-abl-info-3", `
        <ul>
          <li>Die Potenzregel lautet: f(x) = x^r → f′(x) = r · x^(r-1).</li>
          <li>Für ganze positive Exponenten kann man sie mit dem Differentialquotienten zeigen.</li>
          <li>Für r = 0 ist f(x) = 1 konstant.</li>
          <li>Die Ableitung einer konstanten Funktion ist 0.</li>
        </ul>
      `)}
      <p>Gegeben ist die Potenzregel f(x) = xʳ → f′(x) = r · xʳ⁻¹.</p>
      <ol type="a">
        <li>Überprüfe die Regel für r = 4.</li>
        <li>Erkläre, weshalb die Regel für r = 0 sinnvoll ist.</li>
        <li>Erkläre, weshalb die Ableitung von f(x) = x gleich 1 ist.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Differentialquotient</h3>
        ${matheGym2InfoButton("mg2-abl-info-4")}
      </div>
      ${matheGym2InfoBox("mg2-abl-info-4", `
        <ul>
          <li>Der Differentialquotient ist der Grenzwert des Differenzenquotienten.</li>
          <li>Er beschreibt die momentane Änderungsrate.</li>
          <li>Setze f(x+h) und f(x) sorgfältig ein.</li>
          <li>Kürze h erst, bevor du h gegen 0 gehen lässt.</li>
        </ul>
      `)}
      <p>Zeige mit dem Differentialquotienten, dass die Ableitung von f(x) = 2x² - 3x gleich f′(x) = 4x - 3 ist.</p>
      <div class="formula">
        f′(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
      </div>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Tangente und Sichtlinie</h3>
        ${matheGym2InfoButton("mg2-abl-info-5")}
      </div>
      ${matheGym2InfoBox("mg2-abl-info-5", `
        <ul>
          <li>Eine Tangente berührt den Graphen lokal und hat dort die Steigung f′(x).</li>
          <li>Eine Gerade durch zwei Punkte hat Steigung m = (y₂-y₁)/(x₂-x₁).</li>
          <li>Wenn eine Sichtlinie Tangente sein soll, müssen Punkt und Steigung zusammenpassen.</li>
          <li>Setze die Tangentengleichung mit y = f′(a)(x-a)+f(a) an.</li>
        </ul>
      `)}
      <p>Gegeben ist die Funktion f(x) = -x² + 4x + 1. Ein Punkt P(5 | 3) liegt ausserhalb des Graphen.</p>
      <ol type="a">
        <li>Bestimme f′(x).</li>
        <li>Bestimme die Tangentengleichung im Punkt mit x = 1.</li>
        <li>Prüfe, ob P auf dieser Tangente liegt.</li>
        <li>Finde eine Stelle a, sodass die Tangente an f durch P geht.</li>
      </ol>
    </div>
  `);
}

function renderMatheGym2Symmetrie() {
  window.setMaterialTitle("Mathematik · GYM2 · Symmetrien und Ornamente");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToMatheGym2Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Symmetrien und periodischen Mustern.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Symmetriearten erkennen</h3>
        ${matheGym2InfoButton("mg2-sym-info-1")}
      </div>
      ${matheGym2InfoBox("mg2-sym-info-1", `
        <ul>
          <li>Translation: Verschiebung um einen festen Vektor.</li>
          <li>Achsenspiegelung: Spiegelung an einer Geraden.</li>
          <li>Punktspiegelung: Drehung um 180° um einen Punkt.</li>
          <li>Schubspiegelung: Spiegelung plus Verschiebung entlang der Spiegelachse.</li>
        </ul>
      `)}
      <p>Beschreibe für jedes Muster, welche Symmetriearten vorkommen könnten.</p>
      <ol type="a">
        <li>Ein Muster aus lauter gleichen Pfeilen zeigt immer nach rechts und wiederholt sich regelmässig.</li>
        <li>Ein Muster besteht aus abwechselnd normalen und gespiegelten Dreiecken.</li>
        <li>Ein Muster sieht nach einer halben Drehung gleich aus.</li>
        <li>Ein Muster entsteht durch Spiegeln und anschliessendes Verschieben entlang derselben Richtung.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Symmetrieklassen zuordnen</h3>
        ${matheGym2InfoButton("mg2-sym-info-2")}
      </div>
      ${matheGym2InfoBox("mg2-sym-info-2", `
        <ul>
          <li>Prüfe zuerst: Gibt es nur Verschiebung?</li>
          <li>Dann prüfe: Gibt es eine Spiegelachse?</li>
          <li>Dann prüfe: Gibt es Punktspiegelung?</li>
          <li>Zuletzt prüfe: Gibt es eine Schubspiegelung?</li>
        </ul>
      `)}
      <p>Ordne jeder Beschreibung eine passende Symmetrieklasse zu. Verwende eigene Bezeichnungen wie K1, K2, K3 usw.</p>
      <ol>
        <li>Nur Translation.</li>
        <li>Translation und vertikale Spiegelachsen.</li>
        <li>Translation und horizontale Spiegelachsen.</li>
        <li>Translation und Punktspiegelungen.</li>
        <li>Translation, vertikale Spiegelung und horizontale Spiegelung.</li>
        <li>Translation und Schubspiegelung.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Eigenes Ornament beschreiben</h3>
        ${matheGym2InfoButton("mg2-sym-info-3")}
      </div>
      ${matheGym2InfoBox("mg2-sym-info-3", `
        <ul>
          <li>Wähle zuerst ein einfaches Grundmotiv.</li>
          <li>Lege fest, ob es gespiegelt, gedreht oder verschoben wird.</li>
          <li>Beschreibe die Symmetrien eindeutig mit Fachbegriffen.</li>
          <li>Erkläre auch, welche Symmetrie nicht vorkommt.</li>
        </ul>
      `)}
      <p>Erfinde ein eindimensionales Ornament und beschreibe es mathematisch.</p>
      <ol type="a">
        <li>Beschreibe dein Grundmotiv.</li>
        <li>Beschreibe die Wiederholung.</li>
        <li>Nenne alle vorhandenen Symmetrien.</li>
        <li>Nenne eine Symmetrie, die nicht vorkommt, und begründe.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Wahr oder falsch?</h3>
        ${matheGym2InfoButton("mg2-sym-info-4")}
      </div>
      ${matheGym2InfoBox("mg2-sym-info-4", `
        <ul>
          <li>Zeichne dir ein kleines Beispiel.</li>
          <li>Prüfe, ob die Figur nach der Transformation exakt gleich aussieht.</li>
          <li>Eine Symmetrie muss für das ganze Muster gelten, nicht nur für ein einzelnes Element.</li>
        </ul>
      `)}
      <p>Entscheide, ob die Aussagen wahr oder falsch sind. Begründe kurz.</p>
      <ol type="a">
        <li>Jedes periodische Muster besitzt eine Translation.</li>
        <li>Jede Spiegelung ist gleichzeitig eine Punktspiegelung.</li>
        <li>Eine Schubspiegelung besteht aus Spiegelung und Verschiebung.</li>
        <li>Ein Muster kann mehrere verschiedene Symmetrien besitzen.</li>
        <li>Wenn ein einzelnes Zeichen symmetrisch ist, ist automatisch das ganze Ornament symmetrisch.</li>
      </ol>
    </div>
  `);
}

window.render_mathematik_gym2 = render_mathematik_gym2;
