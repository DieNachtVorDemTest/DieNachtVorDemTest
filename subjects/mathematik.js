function render_mathematik(container) {
  container.innerHTML = `
    <div class="exercise-card">
      <h3>Mathematik</h3>
      <p>
        Wähle ein Thema aus. Die Inhalte sind als eigenes Übungs- und Erklärungsmaterial
        aufgebaut und auf prüfungsrelevante Grundlagen ausgerichtet.
      </p>

      <div class="gym-grid">
        <div class="gym-card" onclick="render_mathematik_thema1()">
          <h3>Thema 1</h3>
          <p>Logarithmen und Potenzen mit rationalen Exponenten</p>
        </div>

        <div class="gym-card" onclick="render_mathematik_thema2()">
          <h3>Thema 2</h3>
          <p>Kurvendiskussion: Nullstellen, Extremalstellen, Wendepunkte, Sattelpunkte</p>
        </div>

        <div class="gym-card" onclick="render_mathematik_thema3()">
          <h3>Thema 3</h3>
          <p>Trigonometrie: Sinus, Kosinus, Tangens, Einheitskreis und Gleichungen</p>
        </div>

        <div class="gym-card" onclick="render_mathematik_thema4()">
          <h3>Thema 4</h3>
          <p>Quadratische Funktionen: Parabeln, Scheitelpunkt, Nullstellen und Gleichungen</p>
        </div>
      </div>
    </div>
  `;
}

function backToMathematikOverview() {
  const container = document.getElementById("material-content");
  render_mathematik(container);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render_mathematik_thema1() {
  const container = document.getElementById("material-content");

  container.innerHTML = `
    <div class="exercise-card">
      <button class="secondary" onclick="backToMathematikOverview()">Zurück zu Mathematik</button>
    </div>
    
    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Thema 1: Logarithmen und Potenzen mit rationalen Exponenten</h3>
        <button class="info-btn" onclick="toggleInfo('info-math-gym1-t1')">i</button>
      </div>

      <div id="info-math-gym1-t1" class="info-box hidden">
        <strong>Prüfungsrelevanz</strong>
        <p>
          Dieses Thema ist eine Grundlage für Exponentialfunktionen, Logarithmusfunktionen,
          Wachstumsmodelle, Ableitungen, Gleichungen und Kurvendiskussionen.
          In Prüfungen geht es selten nur ums Auswendiglernen, sondern vor allem darum,
          Terme korrekt umzuschreiben, Gleichungen systematisch zu lösen und
          Definitionsbedingungen zu beachten.
        </p>
        <ul>
          <li>Potenzen mit rationalen Exponenten müssen sicher in Wurzeln umgeschrieben werden können.</li>
          <li>Logarithmen müssen als Umkehrung des Potenzierens verstanden werden.</li>
          <li>Bei Logarithmusgleichungen muss immer der Definitionsbereich geprüft werden.</li>
          <li>Bei Exponentialgleichungen ist oft Logarithmieren oder ein Basisvergleich nötig.</li>
        </ul>
      </div>

      <p class="small">
        Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      </p>

      <h3>1. Grundidee: Potenzen mit rationalen Exponenten</h3>

      <p>
        Ein rationaler Exponent ist ein Exponent, der als Bruch geschrieben werden kann.
        Zum Beispiel sind 1/2, 3/4, -2/5 rationale Exponenten.
        Solche Potenzen sind eng mit Wurzeln verbunden.
      </p>

      <div class="formula">
        a^(m/n) = ⁿ√(a^m)
      </div>

      <p>
        Dabei gilt:
      </p>

      <ul>
        <li>Der Nenner n wird zur Wurzel.</li>
        <li>Der Zähler m bleibt als Potenz erhalten.</li>
        <li>Bei negativem Exponenten bildet man zusätzlich den Kehrwert.</li>
      </ul>

      <div class="formula">
        a^(1/2) = √a<br>
        a^(1/3) = ³√a<br>
        a^(2/3) = ³√(a²)<br>
        a^(-2/3) = 1 / a^(2/3) = 1 / ³√(a²)
      </div>

      <div class="notice">
        Prüfungsfalle: x^(2/3) bedeutet nicht √(x³), sondern ³√(x²).
        Der Nenner des Exponenten bestimmt die Wurzel.
      </div>
    </div>

    <div class="exercise-card">
      <h3>2. Definitionsbedingungen bei rationalen Exponenten</h3>

      <p>
        Im Gymnasium wird oft sauber unterschieden, für welche x-Werte ein Ausdruck definiert ist.
        Besonders bei Wurzeln ist das wichtig.
      </p>

      <p>
        Für gerade Wurzeln gilt im reellen Zahlenbereich:
      </p>

      <div class="formula">
        √x ist nur definiert für x ≥ 0
      </div>

      <p>
        Für ungerade Wurzeln gilt:
      </p>

      <div class="formula">
        ³√x ist für alle reellen x definiert
      </div>

      <p>
        Beispiele:
      </p>

      <div class="formula">
        x^(1/2) = √x → definiert für x ≥ 0<br>
        x^(1/3) = ³√x → definiert für alle x ∈ ℝ<br>
        (x - 4)^(1/2) = √(x - 4) → definiert für x ≥ 4
      </div>

      <div class="notice">
        Wenn eine Aufgabe im reellen Zahlenbereich gelöst wird, darf unter einer geraden Wurzel
        kein negativer Ausdruck stehen.
      </div>
    </div>

    <div class="exercise-card">
      <h3>3. Die wichtigsten Potenzgesetze</h3>

      <p>
        Die Potenzgesetze sind die Grundlage für fast alle Umformungen.
        Sie gelten für passende Werte der Variablen und müssen mit Klammern korrekt angewendet werden.
      </p>

      <div class="formula">
        a^m · a^n = a^(m+n)<br>
        a^m : a^n = a^(m-n)<br>
        (a^m)^n = a^(m·n)<br>
        (a · b)^n = a^n · b^n<br>
        (a / b)^n = a^n / b^n<br>
        a^0 = 1, falls a ≠ 0<br>
        a^(-n) = 1 / a^n
      </div>

      <p>
        Wichtig ist: Exponenten werden nur dann addiert oder subtrahiert,
        wenn die Basis gleich ist.
      </p>

      <div class="formula">
        x^2 · x^5 = x^7<br>
        aber: x^2 · y^5 kann nicht zu einer Potenz zusammengefasst werden
      </div>
    </div>

    <div class="exercise-card">
      <h3>4. Beispiel: Term mit rationalen Exponenten vereinfachen</h3>

      <p>
        Vereinfache:
      </p>

      <div class="formula">
        x^(3/4) · x^(5/4) : x^(1/2)
      </div>

      <p>
        Da überall dieselbe Basis x vorkommt, dürfen die Exponenten verrechnet werden.
      </p>

      <div class="formula">
        x^(3/4) · x^(5/4) : x^(1/2)<br>
        = x^(3/4 + 5/4 - 1/2)
      </div>

      <p>
        Jetzt schreibt man alle Brüche mit gleichem Nenner:
      </p>

      <div class="formula">
        3/4 + 5/4 - 1/2 = 8/4 - 2/4 = 6/4 = 3/2
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x^(3/4) · x^(5/4) : x^(1/2) = x^(3/2)
      </div>

      <p>
        Als Wurzel geschrieben:
      </p>

      <div class="formula">
        x^(3/2) = √(x³)
      </div>
    </div>

    <div class="exercise-card">
      <h3>5. Beispiel: Ausdruck vollständig vereinfachen</h3>

      <p>
        Vereinfache:
      </p>

      <div class="formula">
        (a^(2/3) · a^(1/6))^2
      </div>

      <p>
        Zuerst werden die Exponenten in der Klammer addiert:
      </p>

      <div class="formula">
        a^(2/3) · a^(1/6) = a^(2/3 + 1/6)
      </div>

      <p>
        Gemeinsamer Nenner 6:
      </p>

      <div class="formula">
        2/3 = 4/6
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        a^(2/3 + 1/6) = a^(4/6 + 1/6) = a^(5/6)
      </div>

      <p>
        Jetzt wird die äussere Potenz angewendet:
      </p>

      <div class="formula">
        (a^(5/6))^2 = a^(10/6) = a^(5/3)
      </div>

      <p>
        Ergebnis:
      </p>

      <div class="formula">
        a^(5/3)
      </div>
    </div>

    <div class="exercise-card">
      <h3>6. Logarithmus: Definition</h3>

      <p>
        Der Logarithmus ist die Umkehrung des Potenzierens.
        Die Gleichung
      </p>

      <div class="formula">
        log_a(b) = x
      </div>

      <p>
        bedeutet:
      </p>

      <div class="formula">
        a^x = b
      </div>

      <p>
        Man fragt also: Mit welchem Exponenten muss ich die Basis a potenzieren,
        damit b entsteht?
      </p>

      <div class="formula">
        log_2(8) = 3, weil 2^3 = 8<br>
        log_5(25) = 2, weil 5^2 = 25<br>
        log_10(1000) = 3, weil 10^3 = 1000
      </div>

      <div class="notice">
        Merksatz: Ein Logarithmus ist ein Exponent.
      </div>
    </div>

    <div class="exercise-card">
      <h3>7. Definitionsbedingungen beim Logarithmus</h3>

      <p>
        Beim Logarithmus gibt es wichtige Bedingungen.
      </p>

      <div class="formula">
        log_a(x) ist definiert, wenn:<br>
        a > 0<br>
        a ≠ 1<br>
        x > 0
      </div>

      <p>
        Die Basis muss positiv sein und darf nicht 1 sein.
        Das Argument des Logarithmus muss positiv sein.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        log_2(x - 3)
      </div>

      <p>
        Der Ausdruck ist nur definiert, wenn:
      </p>

      <div class="formula">
        x - 3 > 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x > 3
      </div>

      <div class="notice">
        Prüfungsfalle: Bei Logarithmusgleichungen zuerst oder spätestens am Schluss
        die Definitionsmenge prüfen. Lösungen, die das Argument ≤ 0 machen, sind ungültig.
      </div>
    </div>

    <div class="exercise-card">
      <h3>8. Logarithmengesetze</h3>

      <p>
        Die drei wichtigsten Logarithmengesetze lauten:
      </p>

      <div class="formula">
        log_a(x · y) = log_a(x) + log_a(y)<br>
        log_a(x / y) = log_a(x) - log_a(y)<br>
        log_a(x^r) = r · log_a(x)
      </div>

      <p>
        Diese Gesetze gelten nur für positive Argumente.
      </p>

      <p>
        Beispiele:
      </p>

      <div class="formula">
        log_2(8 · x) = log_2(8) + log_2(x)<br>
        log_3(x / 5) = log_3(x) - log_3(5)<br>
        log_5(x^4) = 4log_5(x)
      </div>

      <div class="notice">
        Sehr wichtige Falle: log_a(x + y) kann nicht vereinfacht werden.
        Es gibt kein Gesetz für Summen im Logarithmus.
      </div>
    </div>

    <div class="exercise-card">
      <h3>9. Basiswechsel beim Logarithmus</h3>

      <p>
        Viele Taschenrechner haben nur log und ln. Deshalb braucht man manchmal den Basiswechsel.
      </p>

      <div class="formula">
        log_a(x) = log(x) / log(a)
      </div>

      <p>
        oder mit natürlichem Logarithmus:
      </p>

      <div class="formula">
        log_a(x) = ln(x) / ln(a)
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        log_2(20) = log(20) / log(2)
      </div>

      <p>
        Das ist besonders wichtig bei Exponentialgleichungen wie:
      </p>

      <div class="formula">
        2^x = 20
      </div>
    </div>

    <div class="exercise-card">
      <h3>10. Exponentialgleichungen Typ 1: gleiche Basis herstellen</h3>

      <p>
        Wenn beide Seiten als Potenzen mit gleicher Basis geschrieben werden können,
        ist der einfachste Weg der Basisvergleich.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        2^(x+1) = 16
      </div>

      <p>
        Schreibe 16 als Potenz zur Basis 2:
      </p>

      <div class="formula">
        16 = 2^4
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        2^(x+1) = 2^4
      </div>

      <p>
        Weil die Basis gleich ist, müssen die Exponenten gleich sein:
      </p>

      <div class="formula">
        x + 1 = 4
      </div>

      <p>
        Daraus folgt:
      </p>

      <div class="formula">
        x = 3
      </div>
    </div>

    <div class="exercise-card">
      <h3>11. Exponentialgleichungen Typ 2: Logarithmieren</h3>

      <p>
        Wenn man keine gleiche Basis herstellen kann, logarithmiert man beide Seiten.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        3^x = 50
      </div>

      <p>
        Beide Seiten logarithmieren:
      </p>

      <div class="formula">
        log(3^x) = log(50)
      </div>

      <p>
        Exponent nach vorne ziehen:
      </p>

      <div class="formula">
        x · log(3) = log(50)
      </div>

      <p>
        Nach x auflösen:
      </p>

      <div class="formula">
        x = log(50) / log(3)
      </div>

      <p>
        Näherungsweise:
      </p>

      <div class="formula">
        x ≈ 3.56
      </div>
    </div>

    <div class="exercise-card">
      <h3>12. Exponentialgleichung mit linearem Exponenten</h3>

      <p>
        Löse:
      </p>

      <div class="formula">
        5^(2x - 1) = 40
      </div>

      <p>
        Logarithmieren:
      </p>

      <div class="formula">
        log(5^(2x - 1)) = log(40)
      </div>

      <p>
        Exponent nach vorne ziehen:
      </p>

      <div class="formula">
        (2x - 1) · log(5) = log(40)
      </div>

      <p>
        Durch log(5) teilen:
      </p>

      <div class="formula">
        2x - 1 = log(40) / log(5)
      </div>

      <p>
        Nach x auflösen:
      </p>

      <div class="formula">
        2x = log(40) / log(5) + 1
      </div>

      <div class="formula">
        x = (log(40) / log(5) + 1) / 2
      </div>

      <p>
        Näherungsweise:
      </p>

      <div class="formula">
        x ≈ 1.65
      </div>
    </div>

    <div class="exercise-card">
      <h3>13. Logarithmusgleichungen Typ 1: direkt umformen</h3>

      <p>
        Löse:
      </p>

      <div class="formula">
        log_3(x) = 4
      </div>

      <p>
        Schreibe als Potenzgleichung:
      </p>

      <div class="formula">
        x = 3^4
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x = 81
      </div>

      <p>
        Definitionsprüfung:
      </p>

      <div class="formula">
        x > 0
      </div>

      <p>
        Da 81 > 0 ist, ist die Lösung gültig.
      </p>
    </div>

    <div class="exercise-card">
      <h3>14. Logarithmusgleichungen Typ 2: zuerst zusammenfassen</h3>

      <p>
        Löse:
      </p>

      <div class="formula">
        log_2(x) + log_2(x - 2) = 3
      </div>

      <p>
        Zuerst Definitionsbereich:
      </p>

      <div class="formula">
        x > 0 und x - 2 > 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x > 2
      </div>

      <p>
        Nun Logarithmen zusammenfassen:
      </p>

      <div class="formula">
        log_2(x · (x - 2)) = 3
      </div>

      <p>
        In Potenzform schreiben:
      </p>

      <div class="formula">
        x(x - 2) = 2^3
      </div>

      <p>
        Ausmultiplizieren:
      </p>

      <div class="formula">
        x² - 2x = 8
      </div>

      <p>
        Alles auf eine Seite:
      </p>

      <div class="formula">
        x² - 2x - 8 = 0
      </div>

      <p>
        Faktorisieren:
      </p>

      <div class="formula">
        (x - 4)(x + 2) = 0
      </div>

      <p>
        Mögliche Lösungen:
      </p>

      <div class="formula">
        x = 4 oder x = -2
      </div>

      <p>
        Definitionsprüfung: Es muss x > 2 gelten. Deshalb ist nur x = 4 gültig.
      </p>

      <div class="formula">
        Lösung: x = 4
      </div>
    </div>

    <div class="exercise-card">
      <h3>15. Logarithmusgleichung mit Quotient</h3>

      <p>
        Löse:
      </p>

      <div class="formula">
        log_3(x + 6) - log_3(x) = 2
      </div>

      <p>
        Definitionsbereich:
      </p>

      <div class="formula">
        x + 6 > 0 und x > 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x > 0
      </div>

      <p>
        Differenz von Logarithmen wird zum Logarithmus eines Quotienten:
      </p>

      <div class="formula">
        log_3((x + 6) / x) = 2
      </div>

      <p>
        In Potenzform schreiben:
      </p>

      <div class="formula">
        (x + 6) / x = 3²
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        (x + 6) / x = 9
      </div>

      <p>
        Mit x multiplizieren:
      </p>

      <div class="formula">
        x + 6 = 9x
      </div>

      <p>
        Nach x auflösen:
      </p>

      <div class="formula">
        6 = 8x
      </div>

      <div class="formula">
        x = 6/8 = 3/4
      </div>

      <p>
        Definitionsprüfung: 3/4 > 0, also gültig.
      </p>
    </div>

    <div class="exercise-card">
      <h3>16. Exponentialgleichung durch Substitution</h3>

      <p>
        Manchmal kommt eine Exponentialgleichung quadratisch vor.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        4^x - 5 · 2^x + 4 = 0
      </div>

      <p>
        Da gilt:
      </p>

      <div class="formula">
        4^x = (2²)^x = 2^(2x) = (2^x)²
      </div>

      <p>
        Setze:
      </p>

      <div class="formula">
        u = 2^x
      </div>

      <p>
        Dann wird die Gleichung:
      </p>

      <div class="formula">
        u² - 5u + 4 = 0
      </div>

      <p>
        Faktorisieren:
      </p>

      <div class="formula">
        (u - 1)(u - 4) = 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        u = 1 oder u = 4
      </div>

      <p>
        Rücksubstitution:
      </p>

      <div class="formula">
        2^x = 1 oder 2^x = 4
      </div>

      <p>
        Daraus folgt:
      </p>

      <div class="formula">
        x = 0 oder x = 2
      </div>

      <div class="notice">
        Dieser Aufgabentyp ist sehr prüfungsrelevant, weil er Potenzgesetze,
        Substitution und Gleichungslösen kombiniert.
      </div>
    </div>

    <div class="exercise-card">
      <h3>17. Logarithmen und natürliche Exponentialfunktion</h3>

      <p>
        Neben log zur Basis 10 gibt es den natürlichen Logarithmus ln.
        Dieser hat die Basis e.
      </p>

      <div class="formula">
        ln(x) = log_e(x)
      </div>

      <p>
        Das bedeutet:
      </p>

      <div class="formula">
        ln(x) = y ⇔ e^y = x
      </div>

      <p>
        Wichtige Werte:
      </p>

      <div class="formula">
        ln(e) = 1<br>
        ln(1) = 0<br>
        e^(ln(x)) = x<br>
        ln(e^x) = x
      </div>

      <p>
        Bei Wachstums- und Zerfallsaufgaben taucht häufig e auf.
        Dann löst man Gleichungen oft mit ln.
      </p>
    </div>

    <div class="exercise-card">
      <h3>18. Beispiel mit e und ln</h3>

      <p>
        Löse:
      </p>

      <div class="formula">
        e^(0.4x) = 7
      </div>

      <p>
        Beide Seiten mit ln logarithmieren:
      </p>

      <div class="formula">
        ln(e^(0.4x)) = ln(7)
      </div>

      <p>
        Da ln(e^a) = a gilt:
      </p>

      <div class="formula">
        0.4x = ln(7)
      </div>

      <p>
        Nach x auflösen:
      </p>

      <div class="formula">
        x = ln(7) / 0.4
      </div>

      <p>
        Näherungsweise:
      </p>

      <div class="formula">
        x ≈ 4.86
      </div>
    </div>

    <div class="exercise-card">
      <h3>19. Typische Prüfungsstrategie</h3>

      <p>
        Wenn du eine Aufgabe mit Potenzen oder Logarithmen bekommst, gehe so vor:
      </p>

      <ol>
        <li>Erkenne zuerst den Aufgabentyp: Vereinfachen, Exponentialgleichung oder Logarithmusgleichung.</li>
        <li>Bei Wurzeln: Schreibe sie wenn nötig als Potenzen mit rationalen Exponenten.</li>
        <li>Bei gleicher Basis: Verwende Potenzgesetze oder setze Exponenten gleich.</li>
        <li>Bei Exponentialgleichungen ohne gleiche Basis: Logarithmiere beide Seiten.</li>
        <li>Bei Logarithmusgleichungen: Bestimme den Definitionsbereich.</li>
        <li>Fasse Logarithmen mit den Logarithmengesetzen zusammen.</li>
        <li>Prüfe am Schluss, ob die Lösungen im Definitionsbereich liegen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>20. Prüfungsaufgaben mit Lösungen</h3>

      <p><strong>Aufgabe 1:</strong> Vereinfache:</p>
      <div class="formula">
        x^(2/5) · x^(3/10)
      </div>

      <p><strong>Lösung:</strong></p>
      <div class="formula">
        x^(2/5 + 3/10) = x^(4/10 + 3/10) = x^(7/10)
      </div>

      <hr>

      <p><strong>Aufgabe 2:</strong> Schreibe als Potenz:</p>
      <div class="formula">
        ⁴√(a³)
      </div>

      <p><strong>Lösung:</strong></p>
      <div class="formula">
        ⁴√(a³) = a^(3/4)
      </div>

      <hr>

      <p><strong>Aufgabe 3:</strong> Löse:</p>
      <div class="formula">
        2^(x-3) = 32
      </div>

      <p><strong>Lösung:</strong></p>
      <div class="formula">
        32 = 2^5<br>
        2^(x-3) = 2^5<br>
        x - 3 = 5<br>
        x = 8
      </div>

      <hr>

      <p><strong>Aufgabe 4:</strong> Löse:</p>
      <div class="formula">
        7^x = 30
      </div>

      <p><strong>Lösung:</strong></p>
      <div class="formula">
        x = log(30) / log(7) ≈ 1.75
      </div>

      <hr>

      <p><strong>Aufgabe 5:</strong> Löse:</p>
      <div class="formula">
        log_4(x) = 3
      </div>

      <p><strong>Lösung:</strong></p>
      <div class="formula">
        x = 4^3 = 64
      </div>

      <hr>

      <p><strong>Aufgabe 6:</strong> Löse:</p>
      <div class="formula">
        log_2(x) + log_2(x - 1) = 1
      </div>

      <p><strong>Lösung:</strong></p>
      <div class="formula">
        Definitionsbereich: x > 1<br>
        log_2(x(x - 1)) = 1<br>
        x(x - 1) = 2^1<br>
        x² - x = 2<br>
        x² - x - 2 = 0<br>
        (x - 2)(x + 1) = 0<br>
        x = 2 oder x = -1
      </div>

      <p>
        Wegen x > 1 ist nur x = 2 gültig.
      </p>

      <div class="formula">
        Lösung: x = 2
      </div>
    </div>

    <div class="exercise-card">
      <h3>21. Kontrollaufgaben ohne direkte Lösung</h3>

      <p>
        Diese Aufgaben solltest du selbst lösen können, wenn du das Thema verstanden hast.
      </p>

      <ol>
        <li>Vereinfache: a^(1/3) · a^(5/6)</li>
        <li>Vereinfache: (x^(3/4))^8</li>
        <li>Schreibe als Potenz: ⁵√(x²)</li>
        <li>Löse: 4^(x+1) = 64</li>
        <li>Löse: 3^(2x) = 20</li>
        <li>Löse: log_5(x - 2) = 2</li>
        <li>Löse: log_3(x) + log_3(x + 2) = 1</li>
        <li>Löse: e^(0.2x) = 12</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>22. Lösungen zu den Kontrollaufgaben</h3>

      <ol>
        <li>
          a^(1/3) · a^(5/6) = a^(2/6 + 5/6) = a^(7/6)
        </li>
        <li>
          (x^(3/4))^8 = x^(24/4) = x^6
        </li>
        <li>
          ⁵√(x²) = x^(2/5)
        </li>
        <li>
          4^(x+1) = 64 = 4^3, also x + 1 = 3, daher x = 2
        </li>
        <li>
          3^(2x) = 20, also 2x = log(20)/log(3), daher x = log(20)/(2log(3))
        </li>
        <li>
          log_5(x - 2) = 2, also x - 2 = 25, daher x = 27
        </li>
        <li>
          Definitionsbereich: x > 0. log_3(x(x + 2)) = 1,
          also x² + 2x = 3. Daraus x² + 2x - 3 = 0,
          also x = 1 oder x = -3. Gültig ist x = 1.
        </li>
        <li>
          e^(0.2x) = 12, also 0.2x = ln(12), daher x = ln(12)/0.2
        </li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>23. Häufige Fehler in Prüfungen</h3>

      <ul>
        <li>
          <strong>Fehler:</strong> log(x + y) = log(x) + log(y)<br>
          <strong>Richtig:</strong> Dafür gibt es kein Logarithmengesetz.
        </li>
        <li>
          <strong>Fehler:</strong> x^(2/3) = √(x³)<br>
          <strong>Richtig:</strong> x^(2/3) = ³√(x²)
        </li>
        <li>
          <strong>Fehler:</strong> Bei log(x - 5) wird x = 3 als Lösung akzeptiert.<br>
          <strong>Richtig:</strong> x - 5 muss positiv sein. x = 3 wäre ungültig.
        </li>
        <li>
          <strong>Fehler:</strong> Beim Logarithmieren wird nur eine Seite logarithmiert.<br>
          <strong>Richtig:</strong> Man muss immer beide Seiten gleich behandeln.
        </li>
        <li>
          <strong>Fehler:</strong> Aus 2^x + 2^x wird 4^x gemacht.<br>
          <strong>Richtig:</strong> 2^x + 2^x = 2 · 2^x.
        </li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>24. Kurz-Zusammenfassung für die Prüfung</h3>

      <p>
        Potenzen mit rationalen Exponenten sind Wurzeln in Potenzschreibweise.
        Logarithmen sind Exponenten und bilden die Umkehrung des Potenzierens.
        Bei Exponentialgleichungen versucht man zuerst, gleiche Basen herzustellen.
        Wenn das nicht möglich ist, logarithmiert man beide Seiten.
      </p>

      <div class="formula">
        a^(m/n) = ⁿ√(a^m)<br>
        log_a(b) = x ⇔ a^x = b<br>
        log_a(x · y) = log_a(x) + log_a(y)<br>
        log_a(x / y) = log_a(x) - log_a(y)<br>
        log_a(x^r) = rlog_a(x)
      </div>

      <p>
        Bei Logarithmusgleichungen ist der Definitionsbereich entscheidend:
        Alle Argumente von Logarithmen müssen positiv sein. Lösungen, die diese Bedingung
        verletzen, müssen gestrichen werden.
      </p>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render_mathematik_thema2() {
  const container = document.getElementById("material-content");

  container.innerHTML = `
    <div class="exercise-card">
      <button class="secondary" onclick="backToMathematikOverview()">Zurück zu Mathematik</button>
    </div>

   
    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Thema 2: Kurvendiskussion – Nullstellen, Extremalstellen, Wendepunkte, Sattelpunkte</h3>
        <button class="info-btn" onclick="toggleInfo('info-math-gym1-t2')">i</button>
      </div>

      <div id="info-math-gym1-t2" class="info-box hidden">
        <strong>Prüfungsrelevanz</strong>
        <p>
          Die Kurvendiskussion ist eines der wichtigsten Themen der Analysis.
          In Prüfungen musst du meistens nicht nur rechnen, sondern auch erklären,
          was die berechneten Werte geometrisch bedeuten.
        </p>
        <ul>
          <li>Nullstellen zeigen, wo der Graph die x-Achse schneidet oder berührt.</li>
          <li>Extremalstellen beschreiben Hochpunkte und Tiefpunkte.</li>
          <li>Wendepunkte zeigen, wo sich das Krümmungsverhalten ändert.</li>
          <li>Sattelpunkte sind spezielle Wendepunkte mit waagrechter Tangente.</li>
        </ul>
      </div>

      <p class="small">
        Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      </p>

      <h3>1. Ziel einer Kurvendiskussion</h3>

      <p>
        Bei einer Kurvendiskussion untersucht man eine Funktion möglichst vollständig.
        Man will verstehen, wie der Graph verläuft, wo er Achsen schneidet,
        wo er steigt oder fällt, wo er Hoch- und Tiefpunkte besitzt und wo sich
        die Krümmung verändert.
      </p>

      <p>
        Typische Bestandteile einer Kurvendiskussion sind:
      </p>

      <ul>
        <li>Definitionsbereich</li>
        <li>Schnittpunkte mit den Achsen</li>
        <li>Nullstellen</li>
        <li>Symmetrie</li>
        <li>Verhalten im Unendlichen</li>
        <li>erste Ableitung und Monotonie</li>
        <li>Extremalstellen</li>
        <li>zweite Ableitung und Krümmung</li>
        <li>Wendepunkte und Sattelpunkte</li>
        <li>Skizze des Graphen</li>
      </ul>

      <div class="notice">
        In Prüfungen ist wichtig, dass du nicht nur Resultate aufschreibst,
        sondern auch begründest, warum ein Punkt ein Hochpunkt, Tiefpunkt,
        Wendepunkt oder Sattelpunkt ist.
      </div>
    </div>

    <div class="exercise-card">
      <h3>2. Grundbegriffe</h3>

      <p>
        Für eine Kurvendiskussion brauchst du vor allem die Funktion selbst,
        ihre erste Ableitung und ihre zweite Ableitung.
      </p>

      <div class="formula">
        f(x) = ursprüngliche Funktion<br>
        f'(x) = erste Ableitung<br>
        f''(x) = zweite Ableitung
      </div>

      <p>
        Die Bedeutung ist:
      </p>

      <ul>
        <li><strong>f(x)</strong> gibt die y-Werte des Graphen an.</li>
        <li><strong>f'(x)</strong> beschreibt die Steigung des Graphen.</li>
        <li><strong>f''(x)</strong> beschreibt die Änderung der Steigung, also die Krümmung.</li>
      </ul>

      <div class="formula">
        f'(x) > 0 → Graph steigt<br>
        f'(x) < 0 → Graph fällt<br>
        f'(x) = 0 → mögliche Extremalstelle oder möglicher Sattelpunkt
      </div>

      <div class="formula">
        f''(x) > 0 → linksgekrümmt / konvex<br>
        f''(x) < 0 → rechtsgekrümmt / konkav<br>
        f''(x) = 0 → möglicher Wendepunkt
      </div>
    </div>

    <div class="exercise-card">
      <h3>3. Nullstellen</h3>

      <p>
        Nullstellen sind die x-Werte, bei denen der Funktionswert 0 ist.
        Geometrisch sind das die Schnittpunkte des Graphen mit der x-Achse.
      </p>

      <div class="formula">
        Nullstellen: f(x) = 0 lösen
      </div>

      <p>
        Wenn x = a eine Nullstelle ist, dann liegt der Punkt
      </p>

      <div class="formula">
        N(a | 0)
      </div>

      <p>
        auf dem Graphen.
      </p>

      <h3>Beispiel</h3>

      <p>
        Gegeben ist:
      </p>

      <div class="formula">
        f(x) = x² - 4
      </div>

      <p>
        Für die Nullstellen setzt man f(x) = 0:
      </p>

      <div class="formula">
        x² - 4 = 0
      </div>

      <p>
        Jetzt nach x auflösen:
      </p>

      <div class="formula">
        x² = 4<br>
        x = ±2
      </div>

      <p>
        Die Nullstellen sind also:
      </p>

      <div class="formula">
        N₁(-2 | 0), N₂(2 | 0)
      </div>
    </div>

    <div class="exercise-card">
      <h3>4. Unterschied: Schneiden oder Berühren der x-Achse</h3>

      <p>
        Eine Nullstelle kann den Graphen unterschiedlich beeinflussen.
        Man unterscheidet besonders zwischen einfachen und mehrfachen Nullstellen.
      </p>

      <div class="formula">
        f(x) = (x - a)^k
      </div>

      <p>
        Wenn k ungerade ist, schneidet der Graph meistens die x-Achse.
        Wenn k gerade ist, berührt der Graph meistens die x-Achse.
      </p>

      <div class="formula">
        f(x) = (x - 2) → einfache Nullstelle, Graph schneidet<br>
        f(x) = (x - 2)² → doppelte Nullstelle, Graph berührt<br>
        f(x) = (x - 2)³ → dreifache Nullstelle, Graph schneidet mit Abflachung
      </div>

      <div class="notice">
        Prüfungsfalle: Eine Nullstelle bedeutet nicht automatisch, dass der Graph
        die x-Achse schneidet. Bei gerader Vielfachheit berührt er die x-Achse nur.
      </div>
    </div>

    <div class="exercise-card">
      <h3>5. y-Achsenabschnitt</h3>

      <p>
        Der y-Achsenabschnitt ist der Punkt, an dem der Graph die y-Achse schneidet.
        Auf der y-Achse gilt immer x = 0.
      </p>

      <div class="formula">
        y-Achsenabschnitt: f(0) berechnen
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = x³ - 3x + 2
      </div>

      <p>
        Dann gilt:
      </p>

      <div class="formula">
        f(0) = 0³ - 3·0 + 2 = 2
      </div>

      <p>
        Der y-Achsenabschnitt ist:
      </p>

      <div class="formula">
        S_y(0 | 2)
      </div>
    </div>

    <div class="exercise-card">
      <h3>6. Extremalstellen: Grundidee</h3>

      <p>
        Extremalstellen sind Stellen, an denen die Funktion lokal besonders gross
        oder lokal besonders klein ist.
      </p>

      <ul>
        <li>Ein lokaler Hochpunkt liegt höher als die unmittelbare Umgebung.</li>
        <li>Ein lokaler Tiefpunkt liegt tiefer als die unmittelbare Umgebung.</li>
      </ul>

      <p>
        An einem Hochpunkt oder Tiefpunkt ist die Tangente waagrecht.
        Deshalb ist dort die Steigung 0.
      </p>

      <div class="formula">
        notwendige Bedingung für Extremalstellen:<br>
        f'(x) = 0
      </div>

      <p>
        Wichtig: Diese Bedingung ist notwendig, aber nicht immer ausreichend.
        Das bedeutet: Wenn ein Extremum vorliegt, gilt f'(x) = 0.
        Aber wenn f'(x) = 0 gilt, muss nicht zwingend ein Extremum vorliegen.
      </p>

      <div class="notice">
        Genau deshalb muss man nach dem Lösen von f'(x) = 0 noch prüfen,
        ob wirklich ein Hochpunkt oder Tiefpunkt vorliegt.
      </div>
    </div>

    <div class="exercise-card">
      <h3>7. Extremalstellen mit der zweiten Ableitung prüfen</h3>

      <p>
        Wenn du eine Stelle x = a gefunden hast mit f'(a) = 0,
        kannst du oft mit der zweiten Ableitung entscheiden, ob dort ein Hochpunkt
        oder Tiefpunkt liegt.
      </p>

      <div class="formula">
        f'(a) = 0 und f''(a) > 0 → Tiefpunkt<br>
        f'(a) = 0 und f''(a) < 0 → Hochpunkt<br>
        f'(a) = 0 und f''(a) = 0 → keine eindeutige Entscheidung
      </div>

      <p>
        Warum ist das so?
      </p>

      <ul>
        <li>Wenn f''(a) > 0, ist der Graph dort nach oben geöffnet. Das spricht für einen Tiefpunkt.</li>
        <li>Wenn f''(a) < 0, ist der Graph dort nach unten geöffnet. Das spricht für einen Hochpunkt.</li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>8. Extremalstellen mit Vorzeichenwechsel prüfen</h3>

      <p>
        Eine sehr zuverlässige Methode ist die Vorzeichenwechsel-Methode mit der ersten Ableitung.
      </p>

      <div class="formula">
        f'(x): + zu - → Hochpunkt<br>
        f'(x): - zu + → Tiefpunkt<br>
        f'(x): + zu + → kein Extremum<br>
        f'(x): - zu - → kein Extremum
      </div>

      <p>
        Die Idee ist einfach:
      </p>

      <ul>
        <li>Wenn der Graph zuerst steigt und danach fällt, entsteht ein Hochpunkt.</li>
        <li>Wenn der Graph zuerst fällt und danach steigt, entsteht ein Tiefpunkt.</li>
      </ul>

      <div class="notice">
        Diese Methode ist besonders wichtig, wenn f''(a) = 0 ist und der Test mit der zweiten Ableitung
        keine Entscheidung liefert.
      </div>
    </div>

    <div class="exercise-card">
      <h3>9. Beispiel: Extremalstellen berechnen</h3>

      <p>
        Gegeben ist:
      </p>

      <div class="formula">
        f(x) = x² - 4x + 1
      </div>

      <p>
        Schritt 1: Erste Ableitung berechnen.
      </p>

      <div class="formula">
        f'(x) = 2x - 4
      </div>

      <p>
        Schritt 2: f'(x) = 0 setzen.
      </p>

      <div class="formula">
        2x - 4 = 0
      </div>

      <p>
        Nach x auflösen:
      </p>

      <div class="formula">
        2x = 4<br>
        x = 2
      </div>

      <p>
        Schritt 3: Zweite Ableitung berechnen.
      </p>

      <div class="formula">
        f''(x) = 2
      </div>

      <p>
        Da f''(2) = 2 > 0 gilt, liegt ein Tiefpunkt vor.
      </p>

      <p>
        Schritt 4: y-Wert berechnen.
      </p>

      <div class="formula">
        f(2) = 2² - 4·2 + 1 = 4 - 8 + 1 = -3
      </div>

      <p>
        Ergebnis:
      </p>

      <div class="formula">
        Tiefpunkt T(2 | -3)
      </div>
    </div>

    <div class="exercise-card">
      <h3>10. Wendepunkte: Grundidee</h3>

      <p>
        Ein Wendepunkt ist ein Punkt, an dem der Graph sein Krümmungsverhalten ändert.
        Der Graph wechselt dort zum Beispiel von rechtsgekrümmt zu linksgekrümmt
        oder umgekehrt.
      </p>

      <p>
        Die zweite Ableitung beschreibt die Krümmung.
        Deshalb sucht man Wendepunkte zuerst mit:
      </p>

      <div class="formula">
        f''(x) = 0
      </div>

      <p>
        Das ist aber nur eine notwendige Bedingung.
        Man muss danach prüfen, ob sich die Krümmung wirklich ändert.
      </p>

      <div class="formula">
        notwendige Bedingung für Wendestelle:<br>
        f''(x) = 0
      </div>

      <div class="formula">
        hinreichende Prüfung:<br>
        f'' wechselt das Vorzeichen
      </div>
    </div>

    <div class="exercise-card">
      <h3>11. Wendepunkte mit der dritten Ableitung prüfen</h3>

      <p>
        Häufig verwendet man auch die dritte Ableitung.
        Wenn f''(a) = 0 und f'''(a) ≠ 0 gilt, liegt bei x = a ein Wendepunkt vor.
      </p>

      <div class="formula">
        f''(a) = 0 und f'''(a) ≠ 0 → Wendepunkt
      </div>

      <p>
        Diese Methode ist schnell, funktioniert aber nicht in allen Spezialfällen.
        Wenn f'''(a) = 0 ist, muss man mit dem Vorzeichenwechsel von f'' prüfen.
      </p>

      <div class="notice">
        In einer Prüfung ist die Vorzeichenwechselprüfung oft am sichersten,
        weil sie direkt zeigt, dass sich die Krümmung wirklich ändert.
      </div>
    </div>

    <div class="exercise-card">
      <h3>12. Beispiel: Wendepunkt berechnen</h3>

      <p>
        Gegeben ist:
      </p>

      <div class="formula">
        f(x) = x³ - 3x² + 2
      </div>

      <p>
        Schritt 1: Erste Ableitung.
      </p>

      <div class="formula">
        f'(x) = 3x² - 6x
      </div>

      <p>
        Schritt 2: Zweite Ableitung.
      </p>

      <div class="formula">
        f''(x) = 6x - 6
      </div>

      <p>
        Schritt 3: f''(x) = 0 setzen.
      </p>

      <div class="formula">
        6x - 6 = 0
      </div>

      <p>
        Nach x auflösen:
      </p>

      <div class="formula">
        6x = 6<br>
        x = 1
      </div>

      <p>
        Schritt 4: Dritte Ableitung.
      </p>

      <div class="formula">
        f'''(x) = 6
      </div>

      <p>
        Da f'''(1) = 6 ≠ 0 gilt, liegt ein Wendepunkt vor.
      </p>

      <p>
        Schritt 5: y-Wert berechnen.
      </p>

      <div class="formula">
        f(1) = 1³ - 3·1² + 2 = 1 - 3 + 2 = 0
      </div>

      <p>
        Ergebnis:
      </p>

      <div class="formula">
        Wendepunkt W(1 | 0)
      </div>
    </div>

    <div class="exercise-card">
      <h3>13. Sattelpunkt</h3>

      <p>
        Ein Sattelpunkt ist ein besonderer Wendepunkt.
        Er ist ein Wendepunkt mit waagrechter Tangente.
      </p>

      <div class="formula">
        Sattelpunkt:<br>
        f'(a) = 0<br>
        f''(a) = 0<br>
        Krümmungswechsel liegt vor
      </div>

      <p>
        Ein typisches Beispiel ist:
      </p>

      <div class="formula">
        f(x) = x³
      </div>

      <p>
        Für diese Funktion gilt:
      </p>

      <div class="formula">
        f'(x) = 3x²<br>
        f''(x) = 6x
      </div>

      <p>
        Bei x = 0 gilt:
      </p>

      <div class="formula">
        f'(0) = 0<br>
        f''(0) = 0
      </div>

      <p>
        Ausserdem wechselt f'' das Vorzeichen:
      </p>

      <div class="formula">
        für x < 0: f''(x) < 0<br>
        für x > 0: f''(x) > 0
      </div>

      <p>
        Also hat f(x) = x³ bei
      </p>

      <div class="formula">
        S(0 | 0)
      </div>

      <p>
        einen Sattelpunkt.
      </p>
    </div>

    <div class="exercise-card">
      <h3>14. Unterschied zwischen Extrempunkt, Wendepunkt und Sattelpunkt</h3>

      <p>
        Diese drei Begriffe werden oft verwechselt.
      </p>

      <div class="formula">
        Extrempunkt:<br>
        Graph wechselt von steigend zu fallend oder von fallend zu steigend
      </div>

      <div class="formula">
        Wendepunkt:<br>
        Graph wechselt die Krümmung
      </div>

      <div class="formula">
        Sattelpunkt:<br>
        Wendepunkt mit waagrechter Tangente
      </div>

      <p>
        Wichtig ist:
      </p>

      <ul>
        <li>Jeder Sattelpunkt ist ein Wendepunkt.</li>
        <li>Nicht jeder Wendepunkt ist ein Sattelpunkt.</li>
        <li>Ein Punkt mit f'(x) = 0 ist nicht automatisch ein Extrempunkt.</li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>15. Vollständiges Beispiel einer Kurvendiskussion</h3>

      <p>
        Gegeben ist:
      </p>

      <div class="formula">
        f(x) = x³ - 3x
      </div>

      <p>
        Wir untersuchen Nullstellen, Extremalstellen, Wendepunkt und Sattelpunkt.
      </p>

      <h3>Schritt 1: Nullstellen</h3>

      <div class="formula">
        f(x) = 0<br>
        x³ - 3x = 0
      </div>

      <p>
        x ausklammern:
      </p>

      <div class="formula">
        x(x² - 3) = 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x = 0 oder x² - 3 = 0
      </div>

      <p>
        Daraus folgt:
      </p>

      <div class="formula">
        x = 0 oder x = ±√3
      </div>

      <p>
        Nullstellen:
      </p>

      <div class="formula">
        N₁(-√3 | 0), N₂(0 | 0), N₃(√3 | 0)
      </div>

      <h3>Schritt 2: Erste Ableitung</h3>

      <div class="formula">
        f'(x) = 3x² - 3
      </div>

      <h3>Schritt 3: Extremalstellen</h3>

      <p>
        Setze f'(x) = 0:
      </p>

      <div class="formula">
        3x² - 3 = 0<br>
        3x² = 3<br>
        x² = 1<br>
        x = ±1
      </div>

      <h3>Schritt 4: Zweite Ableitung</h3>

      <div class="formula">
        f''(x) = 6x
      </div>

      <p>
        Prüfung der Extremalstellen:
      </p>

      <div class="formula">
        f''(-1) = -6 < 0 → Hochpunkt<br>
        f''(1) = 6 > 0 → Tiefpunkt
      </div>

      <p>
        y-Werte:
      </p>

      <div class="formula">
        f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2<br>
        f(1) = 1³ - 3·1 = 1 - 3 = -2
      </div>

      <p>
        Extrempunkte:
      </p>

      <div class="formula">
        H(-1 | 2)<br>
        T(1 | -2)
      </div>

      <h3>Schritt 5: Wendepunkt</h3>

      <p>
        Setze f''(x) = 0:
      </p>

      <div class="formula">
        6x = 0<br>
        x = 0
      </div>

      <p>
        Dritte Ableitung:
      </p>

      <div class="formula">
        f'''(x) = 6
      </div>

      <p>
        Da f'''(0) = 6 ≠ 0 gilt, liegt ein Wendepunkt vor.
      </p>

      <p>
        y-Wert:
      </p>

      <div class="formula">
        f(0) = 0³ - 3·0 = 0
      </div>

      <p>
        Wendepunkt:
      </p>

      <div class="formula">
        W(0 | 0)
      </div>

      <h3>Schritt 6: Ist es ein Sattelpunkt?</h3>

      <p>
        Für einen Sattelpunkt müsste zusätzlich f'(0) = 0 gelten.
      </p>

      <div class="formula">
        f'(0) = 3·0² - 3 = -3
      </div>

      <p>
        Da f'(0) ≠ 0 ist, ist W(0 | 0) kein Sattelpunkt.
      </p>
    </div>

    <div class="exercise-card">
      <h3>16. Beispiel mit Sattelpunkt</h3>

      <p>
        Gegeben ist:
      </p>

      <div class="formula">
        f(x) = x³ - 3x² + 3x
      </div>

      <p>
        Erste Ableitung:
      </p>

      <div class="formula">
        f'(x) = 3x² - 6x + 3
      </div>

      <p>
        Faktorisieren:
      </p>

      <div class="formula">
        f'(x) = 3(x² - 2x + 1) = 3(x - 1)²
      </div>

      <p>
        Mögliche Stelle mit waagrechter Tangente:
      </p>

      <div class="formula">
        3(x - 1)² = 0<br>
        x = 1
      </div>

      <p>
        Zweite Ableitung:
      </p>

      <div class="formula">
        f''(x) = 6x - 6
      </div>

      <p>
        Wendestelle:
      </p>

      <div class="formula">
        f''(x) = 0<br>
        6x - 6 = 0<br>
        x = 1
      </div>

      <p>
        Dritte Ableitung:
      </p>

      <div class="formula">
        f'''(x) = 6
      </div>

      <p>
        Da f'''(1) ≠ 0 ist, liegt ein Wendepunkt vor.
        Da zusätzlich f'(1) = 0 gilt, ist es ein Sattelpunkt.
      </p>

      <p>
        y-Wert:
      </p>

      <div class="formula">
        f(1) = 1³ - 3·1² + 3·1 = 1 - 3 + 3 = 1
      </div>

      <p>
        Ergebnis:
      </p>

      <div class="formula">
        Sattelpunkt S(1 | 1)
      </div>
    </div>

    <div class="exercise-card">
      <h3>17. Monotonie</h3>

      <p>
        Monotonie beschreibt, ob eine Funktion steigt oder fällt.
        Dafür betrachtet man das Vorzeichen der ersten Ableitung.
      </p>

      <div class="formula">
        f'(x) > 0 → f ist steigend<br>
        f'(x) < 0 → f ist fallend
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = x² - 4x + 1<br>
        f'(x) = 2x - 4
      </div>

      <p>
        Setze f'(x) = 0:
      </p>

      <div class="formula">
        2x - 4 = 0<br>
        x = 2
      </div>

      <p>
        Jetzt untersucht man das Vorzeichen von f'(x):
      </p>

      <div class="formula">
        Für x < 2: f'(x) < 0 → fallend<br>
        Für x > 2: f'(x) > 0 → steigend
      </div>

      <p>
        Also fällt die Funktion bis x = 2 und steigt danach.
        Deshalb liegt bei x = 2 ein Tiefpunkt.
      </p>
    </div>

    <div class="exercise-card">
      <h3>18. Krümmung</h3>

      <p>
        Die Krümmung beschreibt, ob der Graph nach links oder rechts gekrümmt ist.
        Dafür betrachtet man die zweite Ableitung.
      </p>

      <div class="formula">
        f''(x) > 0 → linksgekrümmt / konvex<br>
        f''(x) < 0 → rechtsgekrümmt / konkav
      </div>

      <p>
        Ein Wendepunkt liegt dort, wo die Krümmung wechselt.
      </p>

      <div class="formula">
        f'' wechselt von - zu + oder von + zu -
      </div>

      <p>
        Wichtig: Nur f''(x) = 0 reicht nicht immer.
        Es muss tatsächlich ein Vorzeichenwechsel der zweiten Ableitung stattfinden.
      </p>
    </div>

    <div class="exercise-card">
      <h3>19. Prüfungsstrategie für Kurvendiskussion</h3>

      <ol>
        <li>Bestimme den Definitionsbereich.</li>
        <li>Berechne den y-Achsenabschnitt mit f(0).</li>
        <li>Berechne die Nullstellen mit f(x) = 0.</li>
        <li>Berechne f'(x).</li>
        <li>Setze f'(x) = 0, um mögliche Extremalstellen zu finden.</li>
        <li>Prüfe Hochpunkt oder Tiefpunkt mit f'' oder Vorzeichenwechsel von f'.</li>
        <li>Berechne f''(x).</li>
        <li>Setze f''(x) = 0, um mögliche Wendestellen zu finden.</li>
        <li>Prüfe den Wendepunkt mit f''' oder Vorzeichenwechsel von f''.</li>
        <li>Prüfe bei Wendepunkten zusätzlich, ob f'(x) = 0 gilt. Dann liegt ein Sattelpunkt vor.</li>
        <li>Berechne immer die y-Werte durch Einsetzen in f(x).</li>
        <li>Formuliere die Punkte sauber als Koordinaten.</li>
      </ol>

      <div class="notice">
        Häufiger Prüfungsfehler: Man findet nur den x-Wert und vergisst den y-Wert.
        Ein Punkt braucht immer beide Koordinaten.
      </div>
    </div>

    <div class="exercise-card">
      <h3>20. Prüfungsaufgabe 1 mit vollständiger Lösung</h3>

      <p>
        Untersuche die Funktion auf Nullstellen, Extremalstellen und Wendepunkte:
      </p>

      <div class="formula">
        f(x) = x³ - 6x² + 9x
      </div>

      <h3>Nullstellen</h3>

      <div class="formula">
        x³ - 6x² + 9x = 0
      </div>

      <p>
        x ausklammern:
      </p>

      <div class="formula">
        x(x² - 6x + 9) = 0
      </div>

      <p>
        Klammer faktorisieren:
      </p>

      <div class="formula">
        x(x - 3)² = 0
      </div>

      <p>
        Nullstellen:
      </p>

      <div class="formula">
        x = 0 oder x = 3
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        N₁(0 | 0), N₂(3 | 0)
      </div>

      <p>
        Da x = 3 eine doppelte Nullstelle ist, berührt der Graph dort die x-Achse.
      </p>

      <h3>Extremalstellen</h3>

      <div class="formula">
        f'(x) = 3x² - 12x + 9
      </div>

      <p>
        Setze f'(x) = 0:
      </p>

      <div class="formula">
        3x² - 12x + 9 = 0
      </div>

      <p>
        Durch 3 teilen:
      </p>

      <div class="formula">
        x² - 4x + 3 = 0
      </div>

      <p>
        Faktorisieren:
      </p>

      <div class="formula">
        (x - 1)(x - 3) = 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x = 1 oder x = 3
      </div>

      <p>
        Zweite Ableitung:
      </p>

      <div class="formula">
        f''(x) = 6x - 12
      </div>

      <p>
        Prüfung:
      </p>

      <div class="formula">
        f''(1) = 6 - 12 = -6 < 0 → Hochpunkt<br>
        f''(3) = 18 - 12 = 6 > 0 → Tiefpunkt
      </div>

      <p>
        y-Werte:
      </p>

      <div class="formula">
        f(1) = 1³ - 6·1² + 9·1 = 1 - 6 + 9 = 4<br>
        f(3) = 27 - 54 + 27 = 0
      </div>

      <p>
        Extrempunkte:
      </p>

      <div class="formula">
        H(1 | 4)<br>
        T(3 | 0)
      </div>

      <h3>Wendepunkt</h3>

      <p>
        Setze f''(x) = 0:
      </p>

      <div class="formula">
        6x - 12 = 0<br>
        x = 2
      </div>

      <p>
        Dritte Ableitung:
      </p>

      <div class="formula">
        f'''(x) = 6
      </div>

      <p>
        Da f'''(2) ≠ 0 gilt, liegt ein Wendepunkt vor.
      </p>

      <p>
        y-Wert:
      </p>

      <div class="formula">
        f(2) = 8 - 24 + 18 = 2
      </div>

      <p>
        Wendepunkt:
      </p>

      <div class="formula">
        W(2 | 2)
      </div>

      <p>
        Prüfung auf Sattelpunkt:
      </p>

      <div class="formula">
        f'(2) = 3·2² - 12·2 + 9 = 12 - 24 + 9 = -3
      </div>

      <p>
        Da f'(2) ≠ 0 ist, ist der Wendepunkt kein Sattelpunkt.
      </p>
    </div>

    <div class="exercise-card">
      <h3>21. Prüfungsaufgabe 2 mit Sattelpunkt</h3>

      <p>
        Untersuche:
      </p>

      <div class="formula">
        f(x) = x⁴ - 4x³
      </div>

      <h3>Nullstellen</h3>

      <div class="formula">
        x⁴ - 4x³ = 0
      </div>

      <p>
        x³ ausklammern:
      </p>

      <div class="formula">
        x³(x - 4) = 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x = 0 oder x = 4
      </div>

      <p>
        Nullstellen:
      </p>

      <div class="formula">
        N₁(0 | 0), N₂(4 | 0)
      </div>

      <h3>Extremalstellen</h3>

      <div class="formula">
        f'(x) = 4x³ - 12x²
      </div>

      <p>
        Ausklammern:
      </p>

      <div class="formula">
        f'(x) = 4x²(x - 3)
      </div>

      <p>
        Setze f'(x) = 0:
      </p>

      <div class="formula">
        4x²(x - 3) = 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x = 0 oder x = 3
      </div>

      <p>
        Zweite Ableitung:
      </p>

      <div class="formula">
        f''(x) = 12x² - 24x
      </div>

      <p>
        Prüfung:
      </p>

      <div class="formula">
        f''(3) = 108 - 72 = 36 > 0 → Tiefpunkt
      </div>

      <p>
        Für x = 0 ergibt die zweite Ableitung:
      </p>

      <div class="formula">
        f''(0) = 0
      </div>

      <p>
        Deshalb kann man bei x = 0 mit der zweiten Ableitung noch nicht entscheiden.
      </p>

      <h3>Wendepunkte</h3>

      <p>
        Setze f''(x) = 0:
      </p>

      <div class="formula">
        12x² - 24x = 0
      </div>

      <p>
        Ausklammern:
      </p>

      <div class="formula">
        12x(x - 2) = 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x = 0 oder x = 2
      </div>

      <p>
        Dritte Ableitung:
      </p>

      <div class="formula">
        f'''(x) = 24x - 24
      </div>

      <p>
        Prüfung:
      </p>

      <div class="formula">
        f'''(0) = -24 ≠ 0 → Wendepunkt<br>
        f'''(2) = 24 ≠ 0 → Wendepunkt
      </div>

      <p>
        y-Werte:
      </p>

      <div class="formula">
        f(0) = 0<br>
        f(2) = 2⁴ - 4·2³ = 16 - 32 = -16
      </div>

      <p>
        Wendepunkte:
      </p>

      <div class="formula">
        W₁(0 | 0)<br>
        W₂(2 | -16)
      </div>

      <p>
        Prüfung auf Sattelpunkt:
      </p>

      <div class="formula">
        f'(0) = 0
      </div>

      <p>
        Daher ist W₁(0 | 0) ein Sattelpunkt.
      </p>

      <div class="formula">
        S(0 | 0)
      </div>

      <p>
        Für x = 2:
      </p>

      <div class="formula">
        f'(2) = 4·2²(2 - 3) = 16·(-1) = -16
      </div>

      <p>
        Also ist W₂(2 | -16) kein Sattelpunkt.
      </p>

      <p>
        Tiefpunkt:
      </p>

      <div class="formula">
        f(3) = 3⁴ - 4·3³ = 81 - 108 = -27
      </div>

      <div class="formula">
        T(3 | -27)
      </div>
    </div>

    <div class="exercise-card">
      <h3>22. Kontrollaufgaben ohne direkte Lösung</h3>

      <p>
        Löse diese Aufgaben selbstständig. Achte besonders darauf, immer die y-Werte zu berechnen
        und deine Punkte sauber zu benennen.
      </p>

      <ol>
        <li>
          Untersuche f(x) = x² - 6x + 5 auf Nullstellen und Extrempunkt.
        </li>
        <li>
          Untersuche f(x) = x³ - 3x² auf Nullstellen, Extremalstellen und Wendepunkt.
        </li>
        <li>
          Bestimme die Wendepunkte von f(x) = x⁴ - 2x².
        </li>
        <li>
          Prüfe, ob f(x) = x³ bei x = 0 einen Sattelpunkt besitzt.
        </li>
        <li>
          Untersuche f(x) = x³ - 6x² + 12x - 8 auf Sattelpunkte.
        </li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>23. Lösungen zu den Kontrollaufgaben</h3>

      <p><strong>1. f(x) = x² - 6x + 5</strong></p>

      <div class="formula">
        Nullstellen:<br>
        x² - 6x + 5 = 0<br>
        (x - 1)(x - 5) = 0<br>
        x = 1 oder x = 5
      </div>

      <div class="formula">
        f'(x) = 2x - 6<br>
        2x - 6 = 0 → x = 3<br>
        f''(x) = 2 > 0 → Tiefpunkt
      </div>

      <div class="formula">
        f(3) = 9 - 18 + 5 = -4<br>
        T(3 | -4)
      </div>

      <p><strong>2. f(x) = x³ - 3x²</strong></p>

      <div class="formula">
        Nullstellen:<br>
        x³ - 3x² = x²(x - 3)<br>
        x = 0 oder x = 3
      </div>

      <div class="formula">
        f'(x) = 3x² - 6x = 3x(x - 2)<br>
        x = 0 oder x = 2
      </div>

      <div class="formula">
        f''(x) = 6x - 6<br>
        f''(0) = -6 < 0 → Hochpunkt<br>
        f''(2) = 6 > 0 → Tiefpunkt
      </div>

      <div class="formula">
        f(0) = 0 → H(0 | 0)<br>
        f(2) = 8 - 12 = -4 → T(2 | -4)
      </div>

      <div class="formula">
        Wendepunkt:<br>
        f''(x) = 0 → 6x - 6 = 0 → x = 1<br>
        f(1) = 1 - 3 = -2<br>
        W(1 | -2)
      </div>

      <p><strong>3. f(x) = x⁴ - 2x²</strong></p>

      <div class="formula">
        f'(x) = 4x³ - 4x<br>
        f''(x) = 12x² - 4
      </div>

      <div class="formula">
        Wendestellen:<br>
        12x² - 4 = 0<br>
        12x² = 4<br>
        x² = 1/3<br>
        x = ±1/√3
      </div>

      <p>
        Die y-Werte erhält man durch Einsetzen in f(x).
      </p>

      <div class="formula">
        f(1/√3) = (1/√3)^4 - 2(1/√3)^2<br>
        = 1/9 - 2/3 = 1/9 - 6/9 = -5/9
      </div>

      <p>
        Wegen der geraden Funktion ist der y-Wert bei -1/√3 gleich.
      </p>

      <div class="formula">
        W₁(-1/√3 | -5/9)<br>
        W₂(1/√3 | -5/9)
      </div>

      <p><strong>4. f(x) = x³</strong></p>

      <div class="formula">
        f'(x) = 3x²<br>
        f''(x) = 6x
      </div>

      <div class="formula">
        f'(0) = 0<br>
        f''(0) = 0
      </div>

      <p>
        Die zweite Ableitung wechselt bei x = 0 das Vorzeichen.
        Deshalb liegt ein Wendepunkt mit waagrechter Tangente vor.
      </p>

      <div class="formula">
        S(0 | 0)
      </div>

      <p><strong>5. f(x) = x³ - 6x² + 12x - 8</strong></p>

      <div class="formula">
        f'(x) = 3x² - 12x + 12<br>
        f'(x) = 3(x² - 4x + 4) = 3(x - 2)²
      </div>

      <div class="formula">
        f'(x) = 0 → x = 2
      </div>

      <div class="formula">
        f''(x) = 6x - 12<br>
        f''(x) = 0 → x = 2
      </div>

      <div class="formula">
        f'''(x) = 6 ≠ 0
      </div>

      <p>
        Also liegt bei x = 2 ein Wendepunkt vor. Da zusätzlich f'(2) = 0 gilt,
        ist es ein Sattelpunkt.
      </p>

      <div class="formula">
        f(2) = 8 - 24 + 24 - 8 = 0
      </div>

      <div class="formula">
        S(2 | 0)
      </div>
    </div>

    <div class="exercise-card">
      <h3>24. Häufige Fehler in Prüfungen</h3>

      <ul>
        <li>
          <strong>Fehler:</strong> Man setzt f'(x) = 0 und behauptet sofort, es sei ein Extrempunkt.<br>
          <strong>Richtig:</strong> Danach muss man mit f'' oder einem Vorzeichenwechsel prüfen.
        </li>
        <li>
          <strong>Fehler:</strong> Man setzt f''(x) = 0 und behauptet sofort, es sei ein Wendepunkt.<br>
          <strong>Richtig:</strong> Es muss ein Krümmungswechsel vorliegen.
        </li>
        <li>
          <strong>Fehler:</strong> Man gibt nur x = 2 an.<br>
          <strong>Richtig:</strong> Punkte müssen als Koordinaten angegeben werden, zum Beispiel T(2 | -3).
        </li>
        <li>
          <strong>Fehler:</strong> Man verwechselt Hochpunkt und Tiefpunkt.<br>
          <strong>Richtig:</strong> f''(a) > 0 bedeutet Tiefpunkt, f''(a) < 0 bedeutet Hochpunkt.
        </li>
        <li>
          <strong>Fehler:</strong> Man nennt jeden Wendepunkt mit f''(x) = 0 automatisch Sattelpunkt.<br>
          <strong>Richtig:</strong> Ein Sattelpunkt braucht zusätzlich f'(x) = 0.
        </li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>25. Kurz-Zusammenfassung für die Prüfung</h3>

      <p>
        Bei der Kurvendiskussion untersucht man den Graphen einer Funktion systematisch.
        Nullstellen erhält man durch f(x) = 0. Extremalstellen findet man über f'(x) = 0
        und prüft sie mit f'' oder dem Vorzeichenwechsel von f'. Wendepunkte findet man
        über f''(x) = 0 und prüft sie durch f''' oder durch den Vorzeichenwechsel von f''.
      </p>

      <div class="formula">
        Nullstellen: f(x) = 0<br>
        mögliche Extremalstellen: f'(x) = 0<br>
        Hochpunkt: f'(a) = 0 und f''(a) < 0<br>
        Tiefpunkt: f'(a) = 0 und f''(a) > 0<br>
        mögliche Wendepunkte: f''(x) = 0<br>
        Wendepunkt: f'' wechselt Vorzeichen<br>
        Sattelpunkt: Wendepunkt und f'(a) = 0
      </div>

      <p>
        Entscheidend ist: Rechne nicht nur mechanisch, sondern erkläre bei jedem Punkt,
        warum er diese Bedeutung hat.
      </p>
    </div>
  
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}
function render_mathematik_thema3() {
  const container = document.getElementById("material-content");

  container.innerHTML = `
    <div class="exercise-card">
      <button class="secondary" onclick="backToMathematikOverview()">Zurück zu Mathematik</button>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Thema 3: Trigonometrie – Sinus, Kosinus, Tangens, Einheitskreis und Gleichungen</h3>
        <button class="info-btn" onclick="toggleInfo('info-math-t3')">i</button>
      </div>

      <div id="info-math-t3" class="info-box hidden">
        <strong>Prüfungsrelevanz</strong>
        <p>
          Trigonometrie ist ein zentrales Thema, weil sie Geometrie, Funktionen,
          Winkel, Dreiecke und Gleichungen miteinander verbindet. In Prüfungen
          kommen häufig Berechnungen im rechtwinkligen Dreieck, Anwendungen am
          Einheitskreis und trigonometrische Gleichungen vor.
        </p>
        <ul>
          <li>Sinus, Kosinus und Tangens müssen geometrisch verstanden werden.</li>
          <li>Der Einheitskreis erklärt Vorzeichen, Periodizität und mehrere Lösungen.</li>
          <li>Trigonometrische Gleichungen haben oft mehr als eine Lösung.</li>
          <li>Gradmass und Bogenmass müssen sicher umgerechnet werden.</li>
        </ul>
      </div>

      <p class="small">
        Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      </p>

      <h3>1. Grundidee der Trigonometrie</h3>

      <p>
        Die Trigonometrie beschreibt Zusammenhänge zwischen Winkeln und Seitenlängen.
        Besonders wichtig sind die drei Funktionen Sinus, Kosinus und Tangens.
        Im rechtwinkligen Dreieck geben sie Verhältnisse von Seitenlängen an.
      </p>

      <div class="formula">
        sin(α) = Gegenkathete / Hypotenuse<br>
        cos(α) = Ankathete / Hypotenuse<br>
        tan(α) = Gegenkathete / Ankathete
      </div>

      <p>
        Dabei betrachtet man immer einen bestimmten Winkel α. Welche Seite
        Gegenkathete oder Ankathete ist, hängt also davon ab, welchen Winkel man anschaut.
      </p>

      <div class="notice">
        Merksatz: Die Hypotenuse ist immer die längste Seite und liegt gegenüber dem rechten Winkel.
        Gegenkathete und Ankathete hängen vom gewählten Winkel ab.
      </div>
    </div>

    <div class="exercise-card">
      <h3>2. Rechtwinkliges Dreieck</h3>

      <p>
        In einem rechtwinkligen Dreieck gibt es einen Winkel von 90 Grad.
        Die Seite gegenüber dem rechten Winkel heisst Hypotenuse.
      </p>

      <p>
        Wenn ein Winkel α gegeben ist, gilt:
      </p>

      <ul>
        <li>Die Gegenkathete liegt gegenüber von α.</li>
        <li>Die Ankathete liegt direkt neben α.</li>
        <li>Die Hypotenuse liegt gegenüber dem rechten Winkel.</li>
      </ul>

      <div class="formula">
        sin(α) = Gegenkathete / Hypotenuse<br>
        cos(α) = Ankathete / Hypotenuse<br>
        tan(α) = Gegenkathete / Ankathete
      </div>

      <p>
        Mit diesen Formeln kann man fehlende Seiten oder Winkel berechnen.
      </p>
    </div>

    <div class="exercise-card">
      <h3>3. Beispiel: Seite mit Sinus berechnen</h3>

      <p>
        In einem rechtwinkligen Dreieck ist die Hypotenuse 10 cm lang.
        Der Winkel α beträgt 30 Grad. Gesucht ist die Gegenkathete.
      </p>

      <p>
        Da Gegenkathete und Hypotenuse vorkommen, verwendet man den Sinus:
      </p>

      <div class="formula">
        sin(α) = Gegenkathete / Hypotenuse
      </div>

      <p>
        Einsetzen:
      </p>

      <div class="formula">
        sin(30°) = Gegenkathete / 10
      </div>

      <p>
        Nach der Gegenkathete auflösen:
      </p>

      <div class="formula">
        Gegenkathete = 10 · sin(30°)
      </div>

      <p>
        Da sin(30°) = 0.5 gilt:
      </p>

      <div class="formula">
        Gegenkathete = 10 · 0.5 = 5
      </div>

      <p>
        Die Gegenkathete ist also 5 cm lang.
      </p>
    </div>

    <div class="exercise-card">
      <h3>4. Beispiel: Winkel mit Kosinus berechnen</h3>

      <p>
        In einem rechtwinkligen Dreieck ist die Ankathete 6 cm lang und die Hypotenuse 10 cm lang.
        Gesucht ist der Winkel α.
      </p>

      <p>
        Da Ankathete und Hypotenuse vorkommen, verwendet man den Kosinus:
      </p>

      <div class="formula">
        cos(α) = Ankathete / Hypotenuse
      </div>

      <p>
        Einsetzen:
      </p>

      <div class="formula">
        cos(α) = 6 / 10 = 0.6
      </div>

      <p>
        Jetzt verwendet man die Umkehrfunktion:
      </p>

      <div class="formula">
        α = arccos(0.6)
      </div>

      <p>
        Mit dem Taschenrechner:
      </p>

      <div class="formula">
        α ≈ 53.13°
      </div>

      <div class="notice">
        Achte darauf, ob dein Taschenrechner auf Gradmass oder Bogenmass eingestellt ist.
        Für Winkel wie 30°, 45° oder 60° muss der Rechner im Gradmodus sein.
      </div>
    </div>

    <div class="exercise-card">
      <h3>5. Tangens und Steigung</h3>

      <p>
        Der Tangens ist besonders wichtig, weil er mit der Steigung einer Geraden zusammenhängt.
        Wenn eine Gerade mit der x-Achse den Winkel α einschliesst, dann gilt:
      </p>

      <div class="formula">
        Steigung m = tan(α)
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        α = 45°<br>
        m = tan(45°) = 1
      </div>

      <p>
        Eine Gerade mit Steigung 1 steigt pro Schritt nach rechts um gleich viel nach oben.
      </p>

      <div class="notice">
        Der Tangens ist nicht für 90° definiert, weil dort die Ankathete beziehungsweise die horizontale Veränderung 0 wäre.
      </div>
    </div>

    <div class="exercise-card">
      <h3>6. Wichtige exakte Werte</h3>

      <p>
        Einige Winkelwerte sollte man im Gymnasium sicher kennen.
      </p>

      <div class="formula">
        sin(0°) = 0<br>
        sin(30°) = 1/2<br>
        sin(45°) = √2 / 2<br>
        sin(60°) = √3 / 2<br>
        sin(90°) = 1
      </div>

      <div class="formula">
        cos(0°) = 1<br>
        cos(30°) = √3 / 2<br>
        cos(45°) = √2 / 2<br>
        cos(60°) = 1/2<br>
        cos(90°) = 0
      </div>

      <div class="formula">
        tan(0°) = 0<br>
        tan(30°) = 1 / √3<br>
        tan(45°) = 1<br>
        tan(60°) = √3<br>
        tan(90°) ist nicht definiert
      </div>

      <p>
        Diese Werte helfen besonders, wenn man Aufgaben ohne Dezimalzahlen lösen soll.
      </p>
    </div>

    <div class="exercise-card">
      <h3>7. Gradmass und Bogenmass</h3>

      <p>
        Winkel können im Gradmass oder im Bogenmass angegeben werden.
        In der Analysis verwendet man häufig das Bogenmass.
      </p>

      <div class="formula">
        180° = π<br>
        360° = 2π
      </div>

      <p>
        Umrechnung von Grad in Bogenmass:
      </p>

      <div class="formula">
        Winkel im Bogenmass = Winkel in Grad · π / 180
      </div>

      <p>
        Umrechnung von Bogenmass in Grad:
      </p>

      <div class="formula">
        Winkel in Grad = Winkel im Bogenmass · 180 / π
      </div>

      <p>
        Beispiele:
      </p>

      <div class="formula">
        30° = 30 · π / 180 = π/6<br>
        45° = 45 · π / 180 = π/4<br>
        60° = 60 · π / 180 = π/3<br>
        90° = 90 · π / 180 = π/2
      </div>

      <div class="notice">
        In Funktionen wie f(x) = sin(x) wird x meistens im Bogenmass verstanden.
      </div>
    </div>

    <div class="exercise-card">
      <h3>8. Der Einheitskreis</h3>

      <p>
        Der Einheitskreis ist ein Kreis mit Radius 1 und Mittelpunkt im Ursprung.
        Er ist sehr wichtig, weil man damit Sinus und Kosinus für alle Winkel verstehen kann.
      </p>

      <div class="formula">
        Punkt auf dem Einheitskreis:<br>
        P(cos(α) | sin(α))
      </div>

      <p>
        Das bedeutet:
      </p>

      <ul>
        <li>Der x-Wert des Punktes ist cos(α).</li>
        <li>Der y-Wert des Punktes ist sin(α).</li>
      </ul>

      <p>
        Dadurch sieht man direkt, warum Sinus und Kosinus nie grösser als 1 oder kleiner als -1 werden.
      </p>

      <div class="formula">
        -1 ≤ sin(α) ≤ 1<br>
        -1 ≤ cos(α) ≤ 1
      </div>
    </div>

    <div class="exercise-card">
      <h3>9. Vorzeichen in den Quadranten</h3>

      <p>
        Der Einheitskreis ist in vier Quadranten unterteilt.
        Die Vorzeichen von Sinus und Kosinus hängen vom Quadranten ab.
      </p>

      <div class="formula">
        1. Quadrant: sin positiv, cos positiv<br>
        2. Quadrant: sin positiv, cos negativ<br>
        3. Quadrant: sin negativ, cos negativ<br>
        4. Quadrant: sin negativ, cos positiv
      </div>

      <p>
        Da tan(α) = sin(α) / cos(α) gilt, ergibt sich:
      </p>

      <div class="formula">
        1. Quadrant: tan positiv<br>
        2. Quadrant: tan negativ<br>
        3. Quadrant: tan positiv<br>
        4. Quadrant: tan negativ
      </div>

      <div class="notice">
        Die Vorzeichen helfen dir, bei trigonometrischen Gleichungen alle Lösungen zu finden.
      </div>
    </div>

    <div class="exercise-card">
      <h3>10. Periodizität</h3>

      <p>
        Sinus, Kosinus und Tangens wiederholen sich regelmässig.
        Diese Eigenschaft nennt man Periodizität.
      </p>

      <div class="formula">
        sin(x + 2π) = sin(x)<br>
        cos(x + 2π) = cos(x)<br>
        tan(x + π) = tan(x)
      </div>

      <p>
        Im Gradmass bedeutet das:
      </p>

      <div class="formula">
        sin(x + 360°) = sin(x)<br>
        cos(x + 360°) = cos(x)<br>
        tan(x + 180°) = tan(x)
      </div>

      <p>
        Deshalb können trigonometrische Gleichungen unendlich viele Lösungen haben,
        wenn kein bestimmtes Intervall gegeben ist.
      </p>
    </div>

    <div class="exercise-card">
      <h3>11. Grundidentitäten</h3>

      <p>
        Eine der wichtigsten trigonometrischen Identitäten ist:
      </p>

      <div class="formula">
        sin²(x) + cos²(x) = 1
      </div>

      <p>
        Diese Gleichung folgt direkt aus dem Einheitskreis und dem Satz von Pythagoras.
      </p>

      <p>
        Ebenfalls wichtig:
      </p>

      <div class="formula">
        tan(x) = sin(x) / cos(x)
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        Wenn sin(x) = 3/5 und x im 1. Quadranten liegt:<br>
        sin²(x) + cos²(x) = 1<br>
        (3/5)² + cos²(x) = 1<br>
        9/25 + cos²(x) = 1<br>
        cos²(x) = 16/25<br>
        cos(x) = 4/5
      </div>

      <p>
        Im 1. Quadranten ist cos(x) positiv, deshalb nimmt man 4/5.
      </p>
    </div>

    <div class="exercise-card">
      <h3>12. Trigonometrische Funktionen</h3>

      <p>
        Sinus und Kosinus können auch als Funktionen betrachtet werden.
      </p>

      <div class="formula">
        f(x) = sin(x)<br>
        g(x) = cos(x)
      </div>

      <p>
        Beide Funktionen haben Werte zwischen -1 und 1 und wiederholen sich nach 2π.
      </p>

      <div class="formula">
        Wertebereich von sin(x): [-1, 1]<br>
        Wertebereich von cos(x): [-1, 1]<br>
        Periode: 2π
      </div>

      <p>
        Der Graph der Sinusfunktion startet bei x = 0 mit dem Wert 0.
        Der Graph der Kosinusfunktion startet bei x = 0 mit dem Wert 1.
      </p>
    </div>

    <div class="exercise-card">
      <h3>13. Amplitude, Periode und Verschiebung</h3>

      <p>
        Eine allgemeine Sinusfunktion kann so aussehen:
      </p>

      <div class="formula">
        f(x) = a · sin(bx + c) + d
      </div>

      <p>
        Die Parameter haben folgende Bedeutung:
      </p>

      <ul>
        <li><strong>a</strong> verändert die Amplitude.</li>
        <li><strong>b</strong> verändert die Periode.</li>
        <li><strong>c</strong> verschiebt den Graphen horizontal.</li>
        <li><strong>d</strong> verschiebt den Graphen vertikal.</li>
      </ul>

      <div class="formula">
        Amplitude = |a|<br>
        Periode = 2π / |b|
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = 3sin(2x)
      </div>

      <p>
        Dann gilt:
      </p>

      <div class="formula">
        Amplitude = 3<br>
        Periode = 2π / 2 = π
      </div>
    </div>

    <div class="exercise-card">
      <h3>14. Trigonometrische Gleichungen: Grundidee</h3>

      <p>
        Bei trigonometrischen Gleichungen sucht man Winkel, für die eine bestimmte
        trigonometrische Funktion einen bestimmten Wert annimmt.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        sin(x) = 1/2
      </div>

      <p>
        Im Intervall von 0° bis 360° gilt:
      </p>

      <div class="formula">
        x = 30° oder x = 150°
      </div>

      <p>
        Warum zwei Lösungen? Weil Sinus im 1. und 2. Quadranten positiv ist.
      </p>

      <div class="notice">
        Prüfungsfalle: Bei sin(x) = 1/2 ist nicht nur x = 30° eine Lösung.
        Wegen des Einheitskreises gibt es im Intervall [0°, 360°] auch x = 150°.
      </div>
    </div>

    <div class="exercise-card">
      <h3>15. Gleichung sin(x) = c lösen</h3>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        sin(x) = √3 / 2
      </div>

      <p>
        Man kennt:
      </p>

      <div class="formula">
        sin(60°) = √3 / 2
      </div>

      <p>
        Sinus ist positiv im 1. und 2. Quadranten. Deshalb:
      </p>

      <div class="formula">
        x₁ = 60°<br>
        x₂ = 180° - 60° = 120°
      </div>

      <p>
        Im Intervall [0°, 360°] sind die Lösungen:
      </p>

      <div class="formula">
        x = 60° oder x = 120°
      </div>

      <p>
        Im Bogenmass:
      </p>

      <div class="formula">
        x = π/3 oder x = 2π/3
      </div>
    </div>

    <div class="exercise-card">
      <h3>16. Gleichung cos(x) = c lösen</h3>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        cos(x) = 1/2
      </div>

      <p>
        Man kennt:
      </p>

      <div class="formula">
        cos(60°) = 1/2
      </div>

      <p>
        Kosinus ist positiv im 1. und 4. Quadranten. Deshalb:
      </p>

      <div class="formula">
        x₁ = 60°<br>
        x₂ = 360° - 60° = 300°
      </div>

      <p>
        Im Intervall [0°, 360°] sind die Lösungen:
      </p>

      <div class="formula">
        x = 60° oder x = 300°
      </div>

      <p>
        Im Bogenmass:
      </p>

      <div class="formula">
        x = π/3 oder x = 5π/3
      </div>
    </div>

    <div class="exercise-card">
      <h3>17. Gleichung tan(x) = c lösen</h3>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        tan(x) = 1
      </div>

      <p>
        Man kennt:
      </p>

      <div class="formula">
        tan(45°) = 1
      </div>

      <p>
        Tangens ist positiv im 1. und 3. Quadranten. Deshalb:
      </p>

      <div class="formula">
        x₁ = 45°<br>
        x₂ = 45° + 180° = 225°
      </div>

      <p>
        Im Intervall [0°, 360°] sind die Lösungen:
      </p>

      <div class="formula">
        x = 45° oder x = 225°
      </div>

      <p>
        Im Bogenmass:
      </p>

      <div class="formula">
        x = π/4 oder x = 5π/4
      </div>
    </div>

    <div class="exercise-card">
      <h3>18. Allgemeine Lösungen</h3>

      <p>
        Wenn kein Intervall gegeben ist, gibt man oft eine allgemeine Lösung an.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        sin(x) = 1/2
      </div>

      <p>
        Im Gradmass:
      </p>

      <div class="formula">
        x = 30° + 360°k<br>
        oder<br>
        x = 150° + 360°k<br>
        mit k ∈ ℤ
      </div>

      <p>
        Im Bogenmass:
      </p>

      <div class="formula">
        x = π/6 + 2πk<br>
        oder<br>
        x = 5π/6 + 2πk<br>
        mit k ∈ ℤ
      </div>

      <p>
        Das k steht für alle ganzen Zahlen, also für beliebig viele Wiederholungen.
      </p>
    </div>

    <div class="exercise-card">
      <h3>19. Beispiel: Trigonometrische Gleichung mit Faktor</h3>

      <p>
        Löse im Intervall [0, 2π]:
      </p>

      <div class="formula">
        sin(2x) = 0
      </div>

      <p>
        Setze zuerst:
      </p>

      <div class="formula">
        u = 2x
      </div>

      <p>
        Dann:
      </p>

      <div class="formula">
        sin(u) = 0
      </div>

      <p>
        Im passenden Bereich gilt:
      </p>

      <div class="formula">
        u = 0, π, 2π, 3π, 4π
      </div>

      <p>
        Da u = 2x ist, teilt man durch 2:
      </p>

      <div class="formula">
        x = 0, π/2, π, 3π/2, 2π
      </div>

      <div class="notice">
        Wenn im Argument ein Faktor steht, zum Beispiel sin(2x), verändert sich die Anzahl Lösungen im Intervall.
      </div>
    </div>

    <div class="exercise-card">
      <h3>20. Beispiel: Gleichung mit Umformen</h3>

      <p>
        Löse im Intervall [0°, 360°]:
      </p>

      <div class="formula">
        2sin(x) - 1 = 0
      </div>

      <p>
        Zuerst nach sin(x) auflösen:
      </p>

      <div class="formula">
        2sin(x) = 1<br>
        sin(x) = 1/2
      </div>

      <p>
        Jetzt Einheitskreis verwenden:
      </p>

      <div class="formula">
        x = 30° oder x = 150°
      </div>

      <p>
        Die Lösungen im Intervall [0°, 360°] sind also:
      </p>

      <div class="formula">
        x ∈ {30°, 150°}
      </div>
    </div>

    <div class="exercise-card">
      <h3>21. Beispiel: Gleichung mit Quadratisieren vermeiden</h3>

      <p>
        Löse im Intervall [0°, 360°]:
      </p>

      <div class="formula">
        cos²(x) = 1/4
      </div>

      <p>
        Ziehe die Wurzel, aber beachte beide Vorzeichen:
      </p>

      <div class="formula">
        cos(x) = 1/2 oder cos(x) = -1/2
      </div>

      <p>
        Für cos(x) = 1/2:
      </p>

      <div class="formula">
        x = 60° oder x = 300°
      </div>

      <p>
        Für cos(x) = -1/2:
      </p>

      <div class="formula">
        x = 120° oder x = 240°
      </div>

      <p>
        Alle Lösungen:
      </p>

      <div class="formula">
        x ∈ {60°, 120°, 240°, 300°}
      </div>

      <div class="notice">
        Prüfungsfalle: Aus cos²(x) = 1/4 folgt nicht nur cos(x) = 1/2,
        sondern auch cos(x) = -1/2.
      </div>
    </div>

    <div class="exercise-card">
      <h3>22. Anwendungen: Höhe und Entfernung</h3>

      <p>
        Trigonometrie wird häufig bei Höhen- und Distanzaufgaben verwendet.
      </p>

      <p>
        Beispiel: Eine Person steht 20 m von einem Turm entfernt.
        Der Höhenwinkel zur Turmspitze beträgt 35°. Gesucht ist die Höhe des Turms.
      </p>

      <p>
        Da Gegenkathete und Ankathete vorkommen, verwendet man Tangens:
      </p>

      <div class="formula">
        tan(35°) = Höhe / 20
      </div>

      <p>
        Nach der Höhe auflösen:
      </p>

      <div class="formula">
        Höhe = 20 · tan(35°)
      </div>

      <p>
        Näherungsweise:
      </p>

      <div class="formula">
        Höhe ≈ 20 · 0.700<br>
        Höhe ≈ 14.0 m
      </div>

      <p>
        Der Turm ist ungefähr 14 m hoch.
      </p>
    </div>

    <div class="exercise-card">
      <h3>23. Prüfungsstrategie</h3>

      <p>
        Bei Trigonometrie-Aufgaben kannst du systematisch so vorgehen:
      </p>

      <ol>
        <li>Prüfe zuerst, ob es um ein rechtwinkliges Dreieck, den Einheitskreis oder eine Gleichung geht.</li>
        <li>Bei Dreiecken: Markiere Hypotenuse, Gegenkathete und Ankathete.</li>
        <li>Wähle sin, cos oder tan je nachdem, welche Seiten gegeben und gesucht sind.</li>
        <li>Bei Winkeln: Achte auf Gradmass oder Bogenmass.</li>
        <li>Bei Gleichungen: Löse zuerst algebraisch nach sin, cos oder tan auf.</li>
        <li>Verwende dann den Einheitskreis, um alle Lösungen im Intervall zu finden.</li>
        <li>Prüfe bei quadratischen trigonometrischen Gleichungen beide Vorzeichen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>24. Prüfungsaufgaben mit Lösungen</h3>

      <p><strong>Aufgabe 1:</strong> Berechne die Gegenkathete, wenn α = 40° und die Hypotenuse 12 cm beträgt.</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        sin(40°) = Gegenkathete / 12<br>
        Gegenkathete = 12 · sin(40°)<br>
        Gegenkathete ≈ 7.71 cm
      </div>

      <hr>

      <p><strong>Aufgabe 2:</strong> Berechne den Winkel α, wenn Gegenkathete = 5 cm und Hypotenuse = 13 cm.</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        sin(α) = 5 / 13<br>
        α = arcsin(5/13)<br>
        α ≈ 22.62°
      </div>

      <hr>

      <p><strong>Aufgabe 3:</strong> Wandle 135° ins Bogenmass um.</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        135° · π / 180 = 3π/4
      </div>

      <hr>

      <p><strong>Aufgabe 4:</strong> Löse im Intervall [0°, 360°]: sin(x) = 1/2</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        x = 30° oder x = 150°
      </div>

      <hr>

      <p><strong>Aufgabe 5:</strong> Löse im Intervall [0°, 360°]: cos(x) = -1/2</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        cos ist negativ im 2. und 3. Quadranten.<br>
        Referenzwinkel: 60°<br>
        x = 120° oder x = 240°
      </div>

      <hr>

      <p><strong>Aufgabe 6:</strong> Löse im Intervall [0°, 360°]: tan(x) = √3</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        tan(60°) = √3<br>
        Tangens ist positiv im 1. und 3. Quadranten.<br>
        x = 60° oder x = 240°
      </div>
    </div>

    <div class="exercise-card">
      <h3>25. Kontrollaufgaben ohne direkte Lösung</h3>

      <ol>
        <li>Berechne die Ankathete, wenn α = 50° und die Hypotenuse 18 cm beträgt.</li>
        <li>Berechne den Winkel α, wenn Ankathete = 7 cm und Hypotenuse = 10 cm.</li>
        <li>Wandle 225° ins Bogenmass um.</li>
        <li>Wandle 5π/6 ins Gradmass um.</li>
        <li>Löse im Intervall [0°, 360°]: sin(x) = √2 / 2</li>
        <li>Löse im Intervall [0°, 360°]: cos(x) = -√3 / 2</li>
        <li>Löse im Intervall [0°, 360°]: tan(x) = -1</li>
        <li>Löse im Intervall [0°, 360°]: 2cos(x) + 1 = 0</li>
        <li>Löse im Intervall [0°, 360°]: sin²(x) = 3/4</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>26. Lösungen zu den Kontrollaufgaben</h3>

      <ol>
        <li>
          cos(50°) = Ankathete / 18, also Ankathete = 18 · cos(50°) ≈ 11.57 cm.
        </li>
        <li>
          cos(α) = 7/10, also α = arccos(0.7) ≈ 45.57°.
        </li>
        <li>
          225° · π / 180 = 5π/4.
        </li>
        <li>
          5π/6 · 180 / π = 150°.
        </li>
        <li>
          sin(x) = √2 / 2. Lösungen: x = 45° oder x = 135°.
        </li>
        <li>
          cos(x) = -√3 / 2. Lösungen: x = 150° oder x = 210°.
        </li>
        <li>
          tan(x) = -1. Lösungen: x = 135° oder x = 315°.
        </li>
        <li>
          2cos(x) + 1 = 0, also cos(x) = -1/2.
          Lösungen: x = 120° oder x = 240°.
        </li>
        <li>
          sin²(x) = 3/4, also sin(x) = √3/2 oder sin(x) = -√3/2.
          Lösungen: x = 60°, 120°, 240°, 300°.
        </li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>27. Häufige Fehler in Prüfungen</h3>

      <ul>
        <li>
          Man verwechselt Gegenkathete und Ankathete, weil man den falschen Winkel betrachtet.
        </li>
        <li>
          Man benutzt den Taschenrechner im Bogenmass, obwohl die Aufgabe Winkel in Grad angibt.
        </li>
        <li>
          Man findet bei trigonometrischen Gleichungen nur eine Lösung und vergisst die zweite Lösung im Intervall.
        </li>
        <li>
          Man vergisst bei cos²(x) oder sin²(x), dass beim Wurzelziehen beide Vorzeichen möglich sind.
        </li>
        <li>
          Man verwechselt die Perioden: Sinus und Kosinus haben Periode 2π, Tangens hat Periode π.
        </li>
        <li>
          Man schreibt tan(90°), obwohl Tangens dort nicht definiert ist.
        </li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>28. Kurz-Zusammenfassung für die Prüfung</h3>

      <p>
        In der Trigonometrie geht es um Beziehungen zwischen Winkeln und Seiten.
        Im rechtwinkligen Dreieck verwendet man Sinus, Kosinus und Tangens als Seitenverhältnisse.
        Der Einheitskreis erweitert diese Begriffe auf alle Winkel und erklärt Vorzeichen,
        Periodizität und mehrere Lösungen.
      </p>

      <div class="formula">
        sin(α) = Gegenkathete / Hypotenuse<br>
        cos(α) = Ankathete / Hypotenuse<br>
        tan(α) = Gegenkathete / Ankathete<br>
        tan(x) = sin(x) / cos(x)<br>
        sin²(x) + cos²(x) = 1
      </div>

      <div class="formula">
        180° = π<br>
        360° = 2π<br>
        Periode von sin und cos: 2π<br>
        Periode von tan: π
      </div>

      <p>
        Bei trigonometrischen Gleichungen ist der Einheitskreis entscheidend:
        Du musst nicht nur eine Lösung berechnen, sondern alle Lösungen im verlangten Intervall finden.
      </p>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}
function render_mathematik_thema4() {
  const container = document.getElementById("material-content");

  container.innerHTML = `
    <div class="exercise-card">
      <button class="secondary" onclick="backToMathematikOverview()">Zurück zu Mathematik</button>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Thema 4: Quadratische Funktionen – Parabeln, Scheitelpunkt, Nullstellen und Gleichungen</h3>
        <button class="info-btn" onclick="toggleInfo('info-math-t4')">i</button>
      </div>

      <div id="info-math-t4" class="info-box hidden">
        <strong>Prüfungsrelevanz</strong>
        <p>
          Quadratische Funktionen gehören zu den wichtigsten Grundlagen der Analysis und Algebra.
          In Prüfungen musst du Parabeln erkennen, Scheitelpunkte bestimmen, Nullstellen berechnen
          und zwischen verschiedenen Darstellungsformen wechseln können.
        </p>
        <ul>
          <li>Die Normalform zeigt direkt die Koeffizienten a, b und c.</li>
          <li>Die Scheitelpunktform zeigt direkt den Scheitelpunkt.</li>
          <li>Die faktorisierte Form zeigt direkt die Nullstellen.</li>
          <li>Die Diskriminante zeigt, wie viele reelle Nullstellen existieren.</li>
        </ul>
      </div>

      <p class="small">
        Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      </p>

      <h3>1. Grundidee quadratischer Funktionen</h3>

      <p>
        Eine quadratische Funktion ist eine Funktion, bei der die höchste Potenz von x gleich 2 ist.
        Der Graph einer quadratischen Funktion heisst Parabel.
      </p>

      <div class="formula">
        f(x) = ax² + bx + c
      </div>

      <p>
        Dabei gilt:
      </p>

      <ul>
        <li><strong>a</strong> bestimmt Öffnung und Streckung der Parabel.</li>
        <li><strong>b</strong> beeinflusst die Lage des Scheitelpunkts.</li>
        <li><strong>c</strong> ist der y-Achsenabschnitt.</li>
      </ul>

      <div class="notice">
        Eine Funktion ist nur quadratisch, wenn a ≠ 0 gilt. Wenn a = 0 wäre,
        hätte man nur noch eine lineare Funktion.
      </div>
    </div>

    <div class="exercise-card">
      <h3>2. Bedeutung von a, b und c</h3>

      <p>
        In der Normalform
      </p>

      <div class="formula">
        f(x) = ax² + bx + c
      </div>

      <p>
        kann man bereits viel über die Parabel erkennen.
      </p>

      <div class="formula">
        a > 0 → Parabel öffnet sich nach oben<br>
        a < 0 → Parabel öffnet sich nach unten
      </div>

      <div class="formula">
        |a| > 1 → Parabel wird schmaler / gestreckt<br>
        0 < |a| < 1 → Parabel wird breiter / gestaucht
      </div>

      <div class="formula">
        c = y-Achsenabschnitt<br>
        Punkt auf der y-Achse: S_y(0 | c)
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = 2x² - 4x + 3
      </div>

      <p>
        Hier ist a = 2, b = -4 und c = 3.
        Die Parabel öffnet sich nach oben, ist schmaler als die Normalparabel
        und schneidet die y-Achse bei y = 3.
      </p>
    </div>

    <div class="exercise-card">
      <h3>3. Die Normalparabel</h3>

      <p>
        Die einfachste quadratische Funktion ist:
      </p>

      <div class="formula">
        f(x) = x²
      </div>

      <p>
        Diese Parabel heisst Normalparabel.
      </p>

      <div class="formula">
        Scheitelpunkt: S(0 | 0)<br>
        Öffnung: nach oben<br>
        Symmetrieachse: x = 0<br>
        y-Achsenabschnitt: 0
      </div>

      <p>
        Einige wichtige Punkte sind:
      </p>

      <div class="formula">
        f(-2) = 4<br>
        f(-1) = 1<br>
        f(0) = 0<br>
        f(1) = 1<br>
        f(2) = 4
      </div>

      <p>
        Die Normalparabel ist achsensymmetrisch zur y-Achse.
      </p>
    </div>

    <div class="exercise-card">
      <h3>4. Scheitelpunktform</h3>

      <p>
        Eine quadratische Funktion kann auch in Scheitelpunktform geschrieben werden:
      </p>

      <div class="formula">
        f(x) = a(x - d)² + e
      </div>

      <p>
        Der Scheitelpunkt ist dann direkt ablesbar:
      </p>

      <div class="formula">
        S(d | e)
      </div>

      <p>
        Wichtig: In der Klammer steht x - d. Deshalb ist das Vorzeichen beim x-Wert des Scheitelpunkts
        oft eine Fehlerquelle.
      </p>

      <p>
        Beispiele:
      </p>

      <div class="formula">
        f(x) = (x - 3)² + 2 → S(3 | 2)<br>
        f(x) = (x + 4)² - 1 → S(-4 | -1)<br>
        f(x) = -2(x - 5)² + 7 → S(5 | 7)
      </div>

      <div class="notice">
        Prüfungsfalle: Bei f(x) = (x + 4)² - 1 ist der Scheitelpunkt nicht S(4 | -1),
        sondern S(-4 | -1).
      </div>
    </div>

    <div class="exercise-card">
      <h3>5. Scheitelpunkt und Symmetrieachse</h3>

      <p>
        Der Scheitelpunkt ist der tiefste oder höchste Punkt einer Parabel.
      </p>

      <div class="formula">
        a > 0 → Scheitelpunkt ist Tiefpunkt<br>
        a < 0 → Scheitelpunkt ist Hochpunkt
      </div>

      <p>
        Die Parabel ist immer symmetrisch zur senkrechten Geraden durch den Scheitelpunkt.
      </p>

      <div class="formula">
        Wenn S(d | e), dann ist die Symmetrieachse:<br>
        x = d
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = 2(x - 3)² - 5
      </div>

      <p>
        Dann gilt:
      </p>

      <div class="formula">
        Scheitelpunkt: S(3 | -5)<br>
        Symmetrieachse: x = 3<br>
        Öffnung: nach oben<br>
        Tiefpunkt: S(3 | -5)
      </div>
    </div>

    <div class="exercise-card">
      <h3>6. Von der Scheitelpunktform zur Normalform</h3>

      <p>
        Manchmal muss man die Scheitelpunktform ausmultiplizieren.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = 2(x - 3)² + 1
      </div>

      <p>
        Zuerst binomische Formel anwenden:
      </p>

      <div class="formula">
        (x - 3)² = x² - 6x + 9
      </div>

      <p>
        Dann mit 2 multiplizieren:
      </p>

      <div class="formula">
        2(x² - 6x + 9) = 2x² - 12x + 18
      </div>

      <p>
        Am Schluss +1:
      </p>

      <div class="formula">
        f(x) = 2x² - 12x + 19
      </div>

      <p>
        Die Normalform lautet:
      </p>

      <div class="formula">
        f(x) = 2x² - 12x + 19
      </div>
    </div>

    <div class="exercise-card">
      <h3>7. Von der Normalform zur Scheitelpunktform</h3>

      <p>
        Um von der Normalform zur Scheitelpunktform zu kommen, verwendet man quadratische Ergänzung.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = x² - 6x + 11
      </div>

      <p>
        Man betrachtet zuerst x² - 6x.
        Die Hälfte von -6 ist -3. Dann quadriert man:
      </p>

      <div class="formula">
        (-3)² = 9
      </div>

      <p>
        Jetzt ergänzt man +9 und -9:
      </p>

      <div class="formula">
        x² - 6x + 11<br>
        = x² - 6x + 9 - 9 + 11
      </div>

      <p>
        Die ersten drei Terme werden zur binomischen Formel:
      </p>

      <div class="formula">
        x² - 6x + 9 = (x - 3)²
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        f(x) = (x - 3)² + 2
      </div>

      <p>
        Der Scheitelpunkt ist:
      </p>

      <div class="formula">
        S(3 | 2)
      </div>
    </div>

    <div class="exercise-card">
      <h3>8. Scheitelpunkt direkt aus der Normalform berechnen</h3>

      <p>
        Für eine Funktion
      </p>

      <div class="formula">
        f(x) = ax² + bx + c
      </div>

      <p>
        kann man die x-Koordinate des Scheitelpunkts direkt berechnen:
      </p>

      <div class="formula">
        x_S = -b / (2a)
      </div>

      <p>
        Danach setzt man x_S in f(x) ein, um y_S zu erhalten.
      </p>

      <div class="formula">
        y_S = f(x_S)
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = x² - 6x + 11
      </div>

      <p>
        Hier ist a = 1 und b = -6.
      </p>

      <div class="formula">
        x_S = -(-6) / (2 · 1) = 6 / 2 = 3
      </div>

      <p>
        y-Wert:
      </p>

      <div class="formula">
        f(3) = 3² - 6·3 + 11 = 9 - 18 + 11 = 2
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        S(3 | 2)
      </div>
    </div>

    <div class="exercise-card">
      <h3>9. Nullstellen quadratischer Funktionen</h3>

      <p>
        Nullstellen sind die x-Werte, bei denen der Funktionswert 0 ist.
      </p>

      <div class="formula">
        f(x) = 0
      </div>

      <p>
        Bei einer quadratischen Funktion bedeutet das:
      </p>

      <div class="formula">
        ax² + bx + c = 0
      </div>

      <p>
        Eine Parabel kann:
      </p>

      <ul>
        <li>zwei Nullstellen haben, wenn sie die x-Achse zweimal schneidet,</li>
        <li>eine doppelte Nullstelle haben, wenn sie die x-Achse berührt,</li>
        <li>keine reelle Nullstelle haben, wenn sie die x-Achse nicht erreicht.</li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>10. Faktorisieren einfacher quadratischer Gleichungen</h3>

      <p>
        Manche quadratische Gleichungen kann man direkt faktorisieren.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        x² - 5x + 6 = 0
      </div>

      <p>
        Man sucht zwei Zahlen, deren Produkt 6 und deren Summe -5 ist.
      </p>

      <div class="formula">
        -2 · -3 = 6<br>
        -2 + -3 = -5
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x² - 5x + 6 = (x - 2)(x - 3)
      </div>

      <p>
        Damit:
      </p>

      <div class="formula">
        (x - 2)(x - 3) = 0
      </div>

      <p>
        Ein Produkt ist 0, wenn mindestens ein Faktor 0 ist:
      </p>

      <div class="formula">
        x - 2 = 0 oder x - 3 = 0
      </div>

      <p>
        Lösungen:
      </p>

      <div class="formula">
        x = 2 oder x = 3
      </div>
    </div>

    <div class="exercise-card">
      <h3>11. Lösungsformel für quadratische Gleichungen</h3>

      <p>
        Für allgemeine quadratische Gleichungen verwendet man die Lösungsformel.
      </p>

      <div class="formula">
        ax² + bx + c = 0
      </div>

      <div class="formula">
        x = (-b ± √(b² - 4ac)) / (2a)
      </div>

      <p>
        Der Ausdruck unter der Wurzel heisst Diskriminante.
      </p>

      <div class="formula">
        D = b² - 4ac
      </div>

      <div class="notice">
        Die Lösungsformel funktioniert nur, wenn die Gleichung zuerst in die Form
        ax² + bx + c = 0 gebracht wurde.
      </div>
    </div>

    <div class="exercise-card">
      <h3>12. Diskriminante</h3>

      <p>
        Die Diskriminante zeigt, wie viele reelle Lösungen eine quadratische Gleichung hat.
      </p>

      <div class="formula">
        D = b² - 4ac
      </div>

      <div class="formula">
        D > 0 → zwei reelle Lösungen<br>
        D = 0 → eine doppelte reelle Lösung<br>
        D < 0 → keine reelle Lösung
      </div>

      <p>
        Geometrisch bedeutet das:
      </p>

      <ul>
        <li>D > 0: Die Parabel schneidet die x-Achse zweimal.</li>
        <li>D = 0: Die Parabel berührt die x-Achse.</li>
        <li>D < 0: Die Parabel hat keinen Schnittpunkt mit der x-Achse.</li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>13. Beispiel mit Lösungsformel</h3>

      <p>
        Löse:
      </p>

      <div class="formula">
        2x² - 4x - 6 = 0
      </div>

      <p>
        Koeffizienten:
      </p>

      <div class="formula">
        a = 2<br>
        b = -4<br>
        c = -6
      </div>

      <p>
        Diskriminante:
      </p>

      <div class="formula">
        D = b² - 4ac<br>
        D = (-4)² - 4·2·(-6)<br>
        D = 16 + 48 = 64
      </div>

      <p>
        Lösungsformel:
      </p>

      <div class="formula">
        x = (-b ± √D) / (2a)
      </div>

      <p>
        Einsetzen:
      </p>

      <div class="formula">
        x = (4 ± √64) / 4<br>
        x = (4 ± 8) / 4
      </div>

      <p>
        Zwei Lösungen:
      </p>

      <div class="formula">
        x₁ = (4 + 8) / 4 = 12 / 4 = 3<br>
        x₂ = (4 - 8) / 4 = -4 / 4 = -1
      </div>

      <p>
        Ergebnis:
      </p>

      <div class="formula">
        x = 3 oder x = -1
      </div>
    </div>

    <div class="exercise-card">
      <h3>14. Doppelte Nullstelle</h3>

      <p>
        Eine doppelte Nullstelle entsteht, wenn die Parabel die x-Achse nur berührt.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = (x - 2)²
      </div>

      <p>
        Nullstelle:
      </p>

      <div class="formula">
        (x - 2)² = 0<br>
        x - 2 = 0<br>
        x = 2
      </div>

      <p>
        Die Nullstelle x = 2 ist doppelt.
        Der Scheitelpunkt liegt genau auf der x-Achse.
      </p>

      <div class="formula">
        S(2 | 0)
      </div>

      <div class="notice">
        Bei einer doppelten Nullstelle berührt die Parabel die x-Achse, statt sie zu schneiden.
      </div>
    </div>

    <div class="exercise-card">
      <h3>15. Keine reelle Nullstelle</h3>

      <p>
        Eine quadratische Funktion kann auch keine reellen Nullstellen haben.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = x² + 4
      </div>

      <p>
        Nullstellenbedingung:
      </p>

      <div class="formula">
        x² + 4 = 0
      </div>

      <p>
        Nach x² auflösen:
      </p>

      <div class="formula">
        x² = -4
      </div>

      <p>
        Im reellen Zahlenbereich gibt es keine Zahl, deren Quadrat negativ ist.
      </p>

      <div class="formula">
        keine reellen Nullstellen
      </div>

      <p>
        Geometrisch liegt die Parabel vollständig oberhalb der x-Achse.
      </p>
    </div>

    <div class="exercise-card">
      <h3>16. Faktorisierte Form</h3>

      <p>
        Wenn eine quadratische Funktion zwei Nullstellen x₁ und x₂ hat,
        kann man sie oft in faktorisierter Form schreiben:
      </p>

      <div class="formula">
        f(x) = a(x - x₁)(x - x₂)
      </div>

      <p>
        In dieser Form sieht man die Nullstellen direkt.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = 2(x - 1)(x + 3)
      </div>

      <p>
        Nullstellen:
      </p>

      <div class="formula">
        x - 1 = 0 → x = 1<br>
        x + 3 = 0 → x = -3
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        N₁(1 | 0), N₂(-3 | 0)
      </div>
    </div>

    <div class="exercise-card">
      <h3>17. Von der faktorisieren Form zur Normalform</h3>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = 2(x - 1)(x + 3)
      </div>

      <p>
        Zuerst Klammern ausmultiplizieren:
      </p>

      <div class="formula">
        (x - 1)(x + 3)<br>
        = x² + 3x - x - 3<br>
        = x² + 2x - 3
      </div>

      <p>
        Dann mit 2 multiplizieren:
      </p>

      <div class="formula">
        f(x) = 2(x² + 2x - 3)
      </div>

      <p>
        Ergebnis:
      </p>

      <div class="formula">
        f(x) = 2x² + 4x - 6
      </div>
    </div>

    <div class="exercise-card">
      <h3>18. Zusammenhang der drei Formen</h3>

      <p>
        Quadratische Funktionen können in verschiedenen Formen geschrieben werden.
        Jede Form zeigt etwas anderes besonders gut.
      </p>

      <div class="formula">
        Normalform:<br>
        f(x) = ax² + bx + c
      </div>

      <div class="formula">
        Scheitelpunktform:<br>
        f(x) = a(x - d)² + e
      </div>

      <div class="formula">
        Faktorisierte Form:<br>
        f(x) = a(x - x₁)(x - x₂)
      </div>

      <p>
        Bedeutung:
      </p>

      <ul>
        <li>Normalform: gut für y-Achsenabschnitt und allgemeines Rechnen.</li>
        <li>Scheitelpunktform: gut für Scheitelpunkt und Verschiebung.</li>
        <li>Faktorisierte Form: gut für Nullstellen.</li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>19. Schnittpunkte mit der y-Achse</h3>

      <p>
        Den Schnittpunkt mit der y-Achse erhält man durch Einsetzen von x = 0.
      </p>

      <div class="formula">
        y-Achsenabschnitt: f(0)
      </div>

      <p>
        Bei der Normalform
      </p>

      <div class="formula">
        f(x) = ax² + bx + c
      </div>

      <p>
        gilt direkt:
      </p>

      <div class="formula">
        f(0) = c
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = 3x² - 5x + 7
      </div>

      <p>
        Dann ist:
      </p>

      <div class="formula">
        f(0) = 7
      </div>

      <p>
        Der Schnittpunkt mit der y-Achse ist:
      </p>

      <div class="formula">
        S_y(0 | 7)
      </div>
    </div>

    <div class="exercise-card">
      <h3>20. Schnittpunkte zweier Funktionen</h3>

      <p>
        Schnittpunkte zweier Funktionen findet man, indem man die Funktionswerte gleichsetzt.
      </p>

      <div class="formula">
        f(x) = g(x)
      </div>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        f(x) = x²<br>
        g(x) = x + 2
      </div>

      <p>
        Gleichsetzen:
      </p>

      <div class="formula">
        x² = x + 2
      </div>

      <p>
        Alles auf eine Seite:
      </p>

      <div class="formula">
        x² - x - 2 = 0
      </div>

      <p>
        Faktorisieren:
      </p>

      <div class="formula">
        (x - 2)(x + 1) = 0
      </div>

      <p>
        Also:
      </p>

      <div class="formula">
        x = 2 oder x = -1
      </div>

      <p>
        y-Werte berechnen:
      </p>

      <div class="formula">
        g(2) = 2 + 2 = 4<br>
        g(-1) = -1 + 2 = 1
      </div>

      <p>
        Schnittpunkte:
      </p>

      <div class="formula">
        P₁(2 | 4)<br>
        P₂(-1 | 1)
      </div>
    </div>

    <div class="exercise-card">
      <h3>21. Anwendungsaufgaben mit Parabeln</h3>

      <p>
        Quadratische Funktionen beschreiben oft Situationen mit einem Maximum oder Minimum.
        Beispiele sind Wurfparabeln, Gewinnfunktionen oder Flächenaufgaben.
      </p>

      <p>
        Beispiel:
      </p>

      <div class="formula">
        h(t) = -5t² + 20t + 1
      </div>

      <p>
        Diese Funktion kann die Höhe eines Balls nach t Sekunden beschreiben.
        Da a = -5 negativ ist, öffnet sich die Parabel nach unten.
        Der Scheitelpunkt ist also die maximale Höhe.
      </p>

      <p>
        x-Koordinate des Scheitelpunkts:
      </p>

      <div class="formula">
        t_S = -b / (2a)<br>
        t_S = -20 / (2 · -5)<br>
        t_S = -20 / -10 = 2
      </div>

      <p>
        Maximale Höhe:
      </p>

      <div class="formula">
        h(2) = -5·2² + 20·2 + 1<br>
        h(2) = -20 + 40 + 1 = 21
      </div>

      <p>
        Die maximale Höhe beträgt 21 m und wird nach 2 Sekunden erreicht.
      </p>
    </div>

    <div class="exercise-card">
      <h3>22. Prüfungsstrategie</h3>

      <p>
        Bei quadratischen Funktionen solltest du zuerst erkennen, welche Form gegeben ist.
      </p>

      <ol>
        <li>Normalform: f(x) = ax² + bx + c</li>
        <li>Scheitelpunktform: f(x) = a(x - d)² + e</li>
        <li>Faktorisierte Form: f(x) = a(x - x₁)(x - x₂)</li>
      </ol>

      <p>
        Danach entscheidest du, was gesucht ist:
      </p>

      <ul>
        <li>Scheitelpunkt gesucht → Scheitelpunktform oder Formel x_S = -b/(2a).</li>
        <li>Nullstellen gesucht → f(x) = 0 setzen.</li>
        <li>y-Achsenabschnitt gesucht → f(0) berechnen.</li>
        <li>Schnittpunkte gesucht → Funktionen gleichsetzen.</li>
        <li>Maximum oder Minimum gesucht → Scheitelpunkt bestimmen.</li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>23. Prüfungsaufgaben mit Lösungen</h3>

      <p><strong>Aufgabe 1:</strong> Bestimme den Scheitelpunkt von f(x) = x² - 8x + 10.</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        a = 1, b = -8<br>
        x_S = -b / (2a) = -(-8)/(2·1) = 4<br>
        f(4) = 16 - 32 + 10 = -6<br>
        S(4 | -6)
      </div>

      <hr>

      <p><strong>Aufgabe 2:</strong> Löse x² - 7x + 12 = 0.</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        x² - 7x + 12 = 0<br>
        (x - 3)(x - 4) = 0<br>
        x = 3 oder x = 4
      </div>

      <hr>

      <p><strong>Aufgabe 3:</strong> Löse 2x² + 3x - 2 = 0.</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        a = 2, b = 3, c = -2<br>
        D = 3² - 4·2·(-2) = 9 + 16 = 25<br>
        x = (-3 ± √25)/(2·2)<br>
        x = (-3 ± 5)/4
      </div>

      <div class="formula">
        x₁ = (-3 + 5)/4 = 1/2<br>
        x₂ = (-3 - 5)/4 = -2
      </div>

      <hr>

      <p><strong>Aufgabe 4:</strong> Gib den Scheitelpunkt von f(x) = -3(x + 2)² + 5 an.</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        f(x) = -3(x + 2)² + 5<br>
        S(-2 | 5)
      </div>

      <hr>

      <p><strong>Aufgabe 5:</strong> Bestimme die Nullstellen von f(x) = (x - 6)(x + 1).</p>

      <p><strong>Lösung:</strong></p>

      <div class="formula">
        x - 6 = 0 → x = 6<br>
        x + 1 = 0 → x = -1
      </div>

      <div class="formula">
        N₁(6 | 0), N₂(-1 | 0)
      </div>
    </div>

    <div class="exercise-card">
      <h3>24. Kontrollaufgaben ohne direkte Lösung</h3>

      <ol>
        <li>Bestimme den Scheitelpunkt von f(x) = x² - 10x + 21.</li>
        <li>Bestimme den Scheitelpunkt von f(x) = 2x² - 8x + 3.</li>
        <li>Löse x² - 9x + 20 = 0.</li>
        <li>Löse 3x² - 12x = 0.</li>
        <li>Löse x² + 6x + 10 = 0 im reellen Zahlenbereich.</li>
        <li>Wandle f(x) = (x - 4)² - 7 in die Normalform um.</li>
        <li>Wandle f(x) = x² + 4x + 1 in die Scheitelpunktform um.</li>
        <li>Bestimme die Schnittpunkte von f(x) = x² und g(x) = 2x + 3.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>25. Lösungen zu den Kontrollaufgaben</h3>

      <ol>
        <li>
          f(x) = x² - 10x + 21.<br>
          x_S = -(-10)/(2·1) = 5.<br>
          f(5) = 25 - 50 + 21 = -4.<br>
          S(5 | -4).
        </li>
        <li>
          f(x) = 2x² - 8x + 3.<br>
          x_S = -(-8)/(2·2) = 8/4 = 2.<br>
          f(2) = 8 - 16 + 3 = -5.<br>
          S(2 | -5).
        </li>
        <li>
          x² - 9x + 20 = 0.<br>
          (x - 4)(x - 5) = 0.<br>
          x = 4 oder x = 5.
        </li>
        <li>
          3x² - 12x = 0.<br>
          3x(x - 4) = 0.<br>
          x = 0 oder x = 4.
        </li>
        <li>
          x² + 6x + 10 = 0.<br>
          D = 6² - 4·1·10 = 36 - 40 = -4.<br>
          Da D < 0 gilt, gibt es keine reellen Lösungen.
        </li>
        <li>
          (x - 4)² - 7 = x² - 8x + 16 - 7 = x² - 8x + 9.
        </li>
        <li>
          x² + 4x + 1 = x² + 4x + 4 - 4 + 1 = (x + 2)² - 3.<br>
          Scheitelpunktform: f(x) = (x + 2)² - 3.
        </li>
        <li>
          x² = 2x + 3.<br>
          x² - 2x - 3 = 0.<br>
          (x - 3)(x + 1) = 0.<br>
          x = 3 oder x = -1.<br>
          y-Werte: g(3) = 9, g(-1) = 1.<br>
          Schnittpunkte: P₁(3 | 9), P₂(-1 | 1).
        </li>
      </ol>
    </div>

    <div class="exercise-card">
      <h3>26. Häufige Fehler in Prüfungen</h3>

      <ul>
        <li>
          Man liest bei f(x) = (x + 3)² - 2 den Scheitelpunkt falsch als S(3 | -2) statt S(-3 | -2).
        </li>
        <li>
          Man vergisst bei der Lösungsformel, zuerst alles auf eine Seite zu bringen.
        </li>
        <li>
          Man verwechselt die Anzahl Nullstellen und beachtet die Diskriminante nicht.
        </li>
        <li>
          Man berechnet nur x_S, aber vergisst den y-Wert des Scheitelpunkts.
        </li>
        <li>
          Man gibt bei Schnittpunkten nur die x-Werte an und vergisst die y-Koordinaten.
        </li>
        <li>
          Man erkennt nicht, dass a < 0 eine nach unten geöffnete Parabel bedeutet.
        </li>
      </ul>
    </div>

    <div class="exercise-card">
      <h3>27. Kurz-Zusammenfassung für die Prüfung</h3>

      <p>
        Quadratische Funktionen haben als Graph eine Parabel. Die Normalform zeigt die Koeffizienten,
        die Scheitelpunktform zeigt den Scheitelpunkt und die faktorisierte Form zeigt die Nullstellen.
        Für Prüfungen ist besonders wichtig, zwischen diesen Formen wechseln zu können.
      </p>

      <div class="formula">
        Normalform: f(x) = ax² + bx + c<br>
        Scheitelpunktform: f(x) = a(x - d)² + e<br>
        Faktorisierte Form: f(x) = a(x - x₁)(x - x₂)
      </div>

      <div class="formula">
        Scheitelpunkt aus Normalform:<br>
        x_S = -b / (2a)<br>
        y_S = f(x_S)
      </div>

      <div class="formula">
        Lösungsformel:<br>
        x = (-b ± √(b² - 4ac)) / (2a)
      </div>

      <div class="formula">
        Diskriminante:<br>
        D = b² - 4ac<br>
        D > 0 → zwei Lösungen<br>
        D = 0 → eine doppelte Lösung<br>
        D < 0 → keine reelle Lösung
      </div>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}
