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

function render_chemie_gym1() {
  window.setMaterialTitle("Chemie · GYM1 · Atombau, Kräfte und Radioaktivität");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren Atombau, Coulomb-Kraft, Elektronenschalen, Ionisierungsenergie und Radioaktivität.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Aussagen zum Atombau</h3>
        ${infoButton("chem-info-1")}
      </div>
      ${infoBox("chem-info-1", `
        <ul>
          <li>Prüfe zuerst die Begriffe Proton, Neutron und Elektron.</li>
          <li>Die Ordnungszahl entspricht der Protonenzahl.</li>
          <li>Isotope haben gleiche Protonenzahl, aber unterschiedliche Neutronenzahl.</li>
          <li>Elektrisch neutrale Atome haben gleich viele Protonen wie Elektronen.</li>
        </ul>
      `)}
      <p>Entscheide, ob die Aussagen richtig oder falsch sind. Begründe falsche Aussagen kurz.</p>
      <ol type="a">
        <li>Die Ordnungszahl eines Elements entspricht der Anzahl Protonen.</li>
        <li>Alle Atome eines Elements haben immer gleich viele Neutronen.</li>
        <li>Elektronen befinden sich in der Atomhülle.</li>
        <li>Ein neutrales Atom besitzt gleich viele Protonen wie Elektronen.</li>
        <li>Neutronen tragen eine negative elektrische Ladung.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Coulomb-Kraft</h3>
        ${infoButton("chem-info-2")}
      </div>
      ${infoBox("chem-info-2", `
        <ul>
          <li>Gleichnamige Ladungen stossen sich ab.</li>
          <li>Ungleichnamige Ladungen ziehen sich an.</li>
          <li>Je grösser die Ladungen, desto grösser die Kraft.</li>
          <li>Je kleiner der Abstand, desto grösser die Kraft.</li>
          <li>Die Kraft wirkt entlang der Verbindungslinie der Ladungen.</li>
        </ul>
      `)}
      <p>Ergänze und erkläre das Coulomb-Prinzip.</p>
      <ol type="a">
        <li>Je grösser die elektrischen Ladungen, desto __________ ist die Kraft.</li>
        <li>Je grösser der Abstand zwischen zwei Ladungen, desto __________ ist die Kraft.</li>
        <li>Erkläre, warum sich zwei Elektronen abstossen.</li>
        <li>Erkläre, warum ein Proton und ein Elektron einander anziehen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Rutherford-Modell</h3>
        ${infoButton("chem-info-3")}
      </div>
      ${infoBox("chem-info-3", `
        <ul>
          <li>Erkläre zuerst den Streuversuch allgemein.</li>
          <li>Die meisten Teilchen gehen fast ungehindert durch die Folie.</li>
          <li>Wenige werden stark abgelenkt.</li>
          <li>Daraus folgt: Das Atom ist grösstenteils leer, die Masse sitzt im kleinen Kern.</li>
        </ul>
      `)}
      <p>
        Bei einem Streuversuch werden positiv geladene Teilchen auf eine sehr dünne Metallfolie geschossen.
        Die meisten Teilchen fliegen fast gerade hindurch, wenige werden stark abgelenkt.
      </p>
      <ol type="a">
        <li>Was sagt dieses Ergebnis über den Aufbau des Atoms aus?</li>
        <li>Warum werden nur wenige Teilchen stark abgelenkt?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Elektronen und Atomkern</h3>
        ${infoButton("chem-info-4")}
      </div>
      ${infoBox("chem-info-4", `
        <ul>
          <li>Erkläre die elektrische Anziehung zwischen Kern und Elektronen.</li>
          <li>Zeige, dass Elektronen nicht einfach klassisch in den Kern fallen.</li>
          <li>Verwende das Modell der Elektronenhülle oder Energieniveaus.</li>
          <li>Formuliere auf Schulniveau, nicht quantenphysikalisch zu kompliziert.</li>
        </ul>
      `)}
      <p>
        Erkläre mit einem geeigneten Atommodell, warum Elektronen zur Atomhülle gehören und nicht einfach im Atomkern sitzen.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Periodensystem und Eigenschaften</h3>
        ${infoButton("chem-info-5")}
      </div>
      ${infoBox("chem-info-5", `
        <ul>
          <li>Elemente derselben Hauptgruppe haben ähnlich viele Valenzelektronen.</li>
          <li>Valenzelektronen bestimmen stark das chemische Verhalten.</li>
          <li>Die Anzahl Protonen und Neutronen kann sich unterscheiden.</li>
          <li>Erkläre Gemeinsamkeiten über die Aussenschale.</li>
        </ul>
      `)}
      <p>
        Elemente einer Hauptgruppe unterscheiden sich in ihrer Masse und Protonenzahl.
        Trotzdem zeigen sie oft ähnliche chemische Eigenschaften. Erkläre warum.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Ionisierungsenergie</h3>
        ${infoButton("chem-info-6")}
      </div>
      ${infoBox("chem-info-6", `
        <ul>
          <li>Ionisierungsenergie ist die Energie, die nötig ist, um ein Elektron zu entfernen.</li>
          <li>Grosse Sprünge deuten auf eine neue, kernnähere Schale hin.</li>
          <li>Valenzelektronen sind leichter zu entfernen als innere Elektronen.</li>
          <li>Nutze Sprünge in der Tabelle, um Schalen zu erkennen.</li>
        </ul>
      `)}
      <p>
        Bei einem Element steigen die Ionisierungsenergien zuerst langsam, nach dem dritten entfernten Elektron aber stark an.
      </p>
      <ol type="a">
        <li>Was sagt das über die Anzahl Valenzelektronen aus?</li>
        <li>Zu welcher Hauptgruppe passt das Element wahrscheinlich?</li>
        <li>Erkläre den starken Sprung.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Elektronenkonfiguration</h3>
        ${infoButton("chem-info-7")}
      </div>
      ${infoBox("chem-info-7", `
        <ul>
          <li>Fülle die Orbitale in der richtigen Reihenfolge.</li>
          <li>Achte auf maximale Besetzung: s-Orbital 2, p-Orbital 6.</li>
          <li>Die Summe der Elektronen muss der Ordnungszahl entsprechen.</li>
          <li>Kontrolliere, ob eine Unterschale übersprungen wurde.</li>
        </ul>
      `)}
      <p>
        Bearbeite die Elektronenkonfigurationen.
      </p>
      <ol type="a">
        <li>Gib die Elektronenkonfiguration von Schwefel an.</li>
        <li>Finde den Fehler: 1s² 2s² 2p⁵ 3s².</li>
        <li>Erkläre, weshalb die Reihenfolge wichtig ist.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Radioaktivität allgemein</h3>
        ${infoButton("chem-info-8")}
      </div>
      ${infoBox("chem-info-8", `
        <ul>
          <li>Radioaktivität bedeutet Zerfall instabiler Atomkerne.</li>
          <li>Dabei wird ionisierende Strahlung abgegeben.</li>
          <li>Unterscheide Alpha-, Beta- und Gamma-Strahlung.</li>
          <li>Erkläre Wirkung und Abschirmung allgemein.</li>
        </ul>
      `)}
      <p>
        Erkläre den Begriff Radioaktivität und nenne zwei Arten radioaktiver Strahlung.
        Beschreibe kurz, wie man sich vor ionisierender Strahlung schützen kann.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 9 · Kernreaktionen</h3>
        ${infoButton("chem-info-9")}
      </div>
      ${infoBox("chem-info-9", `
        <ul>
          <li>Bei Alpha-Zerfall nimmt die Massenzahl um 4 ab und die Ordnungszahl um 2.</li>
          <li>Bei Beta-minus-Zerfall steigt die Ordnungszahl um 1, die Massenzahl bleibt gleich.</li>
          <li>Kontrolliere immer Massenzahl und Ordnungszahl auf beiden Seiten.</li>
          <li>Bestimme danach das neue Element über die Ordnungszahl.</li>
        </ul>
      `)}
      <p>Vervollständige die Kernreaktionen allgemein.</p>
      <ol type="a">
        <li>Ein Nuklid mit Massenzahl 210 und Ordnungszahl 84 zerfällt durch Alpha-Zerfall. Bestimme das Tochter-Nuklid.</li>
        <li>Ein Nuklid mit Massenzahl 90 und Ordnungszahl 38 zerfällt durch Beta-minus-Zerfall. Bestimme das Tochter-Nuklid.</li>
        <li>Erkläre, warum bei Gamma-Strahlung die Massenzahl unverändert bleibt.</li>
      </ol>
    </div>
  `);
}

window.render_chemie_gym1 = render_chemie_gym1;
