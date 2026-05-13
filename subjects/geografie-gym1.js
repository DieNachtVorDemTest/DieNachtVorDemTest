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

function render_geografie_gym1() {
  window.setMaterialTitle("Geografie · GYM1 · Atmosphäre, Klima und Wetter");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren Atmosphäre, Strahlung, Klima, Wind, Luftfeuchtigkeit und Wolken.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Atmosphäre und Strahlung</h3>
        ${infoButton("geo-info-1")}
      </div>
      ${infoBox("geo-info-1", `
        <ul>
          <li>Unterscheide zwischen Atmosphäre, Stockwerken der Atmosphäre und Strahlungsarten.</li>
          <li>Prüfe, ob eine Aussage fachlich korrekt ist.</li>
          <li>Achte besonders auf UV-Strahlung, Infrarotstrahlung, Ozon und Treibhauseffekt.</li>
          <li>Begründe bei falschen Aussagen kurz, was korrekt wäre.</li>
        </ul>
      `)}
      <p>Entscheide, ob die Aussagen richtig oder falsch sind. Begründe falsche Aussagen kurz.</p>
      <ol type="a">
        <li>Die Ozonschicht absorbiert einen Teil der energiereichen UV-Strahlung.</li>
        <li>Infrarotstrahlung ist für das menschliche Auge sichtbar.</li>
        <li>Die Troposphäre ist für Wettervorgänge besonders wichtig.</li>
        <li>Der natürliche Treibhauseffekt macht die Erde lebensfreundlicher.</li>
        <li>Alle Sonnenstrahlung wird an der Erdoberfläche vollständig absorbiert.</li>
        <li>Helle Oberflächen reflektieren in der Regel mehr Strahlung als dunkle Oberflächen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Klimaelemente und Klimafaktoren</h3>
        ${infoButton("geo-info-2")}
      </div>
      ${infoBox("geo-info-2", `
        <ul>
          <li>Klimaelemente sind messbare Grössen wie Temperatur oder Niederschlag.</li>
          <li>Klimafaktoren beeinflussen diese Elemente, z. B. Höhenlage oder Meeresnähe.</li>
          <li>Ordne zuerst jeden Begriff einer Kategorie zu.</li>
          <li>Begründe danach mit einem klaren Gegensatz.</li>
        </ul>
      `)}
      <p>Ordne die Begriffe richtig zu: Klimaelement oder Klimafaktor.</p>
      <ol type="a">
        <li>Temperatur</li>
        <li>Höhenlage</li>
        <li>Niederschlag</li>
        <li>Meeresnähe</li>
        <li>Wind</li>
        <li>Exposition eines Hangs</li>
        <li>Luftfeuchtigkeit</li>
        <li>geografische Breite</li>
      </ol>
      <p>Erkläre danach in zwei Sätzen den Unterschied zwischen Klimaelement und Klimafaktor.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Albedo und Oberflächen</h3>
        ${infoButton("geo-info-3")}
      </div>
      ${infoBox("geo-info-3", `
        <ul>
          <li>Albedo beschreibt das Rückstrahlvermögen einer Oberfläche.</li>
          <li>Helle Flächen haben meist eine hohe Albedo.</li>
          <li>Dunkle Flächen absorbieren mehr Energie.</li>
          <li>Verbinde die Erklärung mit Temperaturunterschieden.</li>
        </ul>
      `)}
      <p>
        In einem heissen Küstenort werden Hausfassaden häufig hell gestrichen.
        Erkläre mit den Fachbegriffen Albedo, Reflexion und Absorption, warum das sinnvoll sein kann.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Wind um Hoch- und Tiefdruckgebiete</h3>
        ${infoButton("geo-info-4")}
      </div>
      ${infoBox("geo-info-4", `
        <ul>
          <li>Luft bewegt sich grundsätzlich vom Hochdruckgebiet zum Tiefdruckgebiet.</li>
          <li>Auf der Nordhalbkugel wird die Bewegung durch die Corioliskraft nach rechts abgelenkt.</li>
          <li>Beim Tiefdruckgebiet strömt Luft bodennah hinein.</li>
          <li>Beim Hochdruckgebiet strömt Luft bodennah hinaus.</li>
          <li>Beschreibe zuerst die Gradientkraft, dann die Ablenkung.</li>
        </ul>
      `)}
      <p>
        Beschreibe die bodennahe Windbewegung auf der Nordhalbkugel bei einem Hochdruckgebiet und bei einem Tiefdruckgebiet.
        Nenne dabei die beteiligten Kräfte und die Ablenkungsrichtung.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Relative und absolute Luftfeuchtigkeit</h3>
        ${infoButton("geo-info-5")}
      </div>
      ${infoBox("geo-info-5", `
        <ul>
          <li>Absolute Luftfeuchtigkeit ist die tatsächliche Wasserdampfmenge in g/m³.</li>
          <li>Relative Luftfeuchtigkeit vergleicht die tatsächliche Menge mit der maximal möglichen Menge.</li>
          <li>Formel: relative Feuchtigkeit = absolut / maximal · 100.</li>
          <li>Warme Luft kann mehr Wasserdampf aufnehmen als kalte Luft.</li>
        </ul>
      `)}
      <p>
        Bei 25°C kann Luft maximal 23 g/m³ Wasserdampf aufnehmen.
        Ein Luftpaket enthält tatsächlich 11.5 g/m³ Wasserdampf.
      </p>
      <ol type="a">
        <li>Berechne die relative Luftfeuchtigkeit.</li>
        <li>Erkläre, was passiert, wenn das Luftpaket stark abgekühlt wird.</li>
        <li>Nenne den Fachbegriff für den Zustand, bei dem die Luft vollständig gesättigt ist.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Klimadiagramme vergleichen</h3>
        ${infoButton("geo-info-6")}
      </div>
      ${infoBox("geo-info-6", `
        <ul>
          <li>Vergleiche zuerst die Temperaturkurve: Jahresmittel und Jahresamplitude.</li>
          <li>Betrachte danach die Niederschläge: Menge und Verteilung im Jahr.</li>
          <li>Erkläre Unterschiede mit Meeresnähe, Kontinentalität, Breitenlage und Höhenlage.</li>
          <li>Verwende Fachbegriffe wie maritim, kontinental, Jahresamplitude und Niederschlagsmaximum.</li>
        </ul>
      `)}
      <p>
        Ort A liegt an einer westlichen Meeresküste. Ort B liegt weit im Inneren eines Kontinents.
        Beide Orte liegen ungefähr auf ähnlicher geografischer Breite.
      </p>
      <ol type="a">
        <li>Beschreibe, wie sich die Temperaturverläufe wahrscheinlich unterscheiden.</li>
        <li>Erkläre den Unterschied mit Fachbegriffen.</li>
        <li>Nenne zwei mögliche Unterschiede beim Niederschlag.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Wolkenstockwerke</h3>
        ${infoButton("geo-info-7")}
      </div>
      ${infoBox("geo-info-7", `
        <ul>
          <li>Ordne Wolken nach ihrer Höhe: unteres, mittleres oder oberes Stockwerk.</li>
          <li>Schichtwolken deuten oft auf flächige Bedeckung hin.</li>
          <li>Haufenwolken entstehen häufig durch aufsteigende Luft.</li>
          <li>Gewitterwolken können sich über mehrere Stockwerke erstrecken.</li>
        </ul>
      `)}
      <p>
        Ordne die folgenden Wolkenarten einem typischen Stockwerk zu und beschreibe ihr Aussehen kurz:
      </p>
      <ol type="a">
        <li>Cirrus</li>
        <li>Stratus</li>
        <li>Altocumulus</li>
        <li>Cumulonimbus</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Gewitterwolke erklären</h3>
        ${infoButton("geo-info-8")}
      </div>
      ${infoBox("geo-info-8", `
        <ul>
          <li>Beginne mit starker Erwärmung am Boden.</li>
          <li>Warme Luft steigt auf und kühlt sich ab.</li>
          <li>Wasserdampf kondensiert, Wolken entstehen.</li>
          <li>Bei starker vertikaler Entwicklung entsteht eine mächtige Gewitterwolke.</li>
          <li>Beschreibe Aufwinde, Abwinde und Niederschlag allgemein.</li>
        </ul>
      `)}
      <p>
        Erkläre, wie eine Gewitterwolke entstehen kann. Verwende die Begriffe:
        Erwärmung, Aufsteigen, Abkühlung, Kondensation, Aufwind, Niederschlag.
      </p>
    </div>
  `);
}

window.render_geografie_gym1 = render_geografie_gym1;
