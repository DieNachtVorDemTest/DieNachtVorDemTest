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

function render_geschichte_gym1() {
  window.setMaterialTitle("Geschichte · GYM1 · Römische Republik");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren Grundbegriffe zur römischen Republik und römischen Expansion.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Politische Gruppen in der Republik</h3>
        ${infoButton("ges-info-1")}
      </div>
      ${infoBox("ges-info-1", `
        <ul>
          <li>Erkläre zuerst, wer in der römischen Politik Macht hatte.</li>
          <li>Unterscheide zwischen konservativ-senatorischen Interessen und volksnaher Politik.</li>
          <li>Vermeide moderne Parteibegriffe.</li>
          <li>Zeige, welche sozialen Gruppen jeweils angesprochen wurden.</li>
        </ul>
      `)}
      <p>
        Erkläre den Unterschied zwischen zwei politischen Richtungen der späten römischen Republik:
        einer senatorisch-konservativen Richtung und einer stärker volksorientierten Richtung.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Vom Stadtstaat zur Grossmacht</h3>
        ${infoButton("ges-info-2")}
      </div>
      ${infoBox("ges-info-2", `
        <ul>
          <li>Beginne mit Rom als Stadtstaat in Mittelitalien.</li>
          <li>Erwähne militärische Expansion und Bündnispolitik.</li>
          <li>Beschreibe die Kontrolle über Italien und später über den Mittelmeerraum.</li>
          <li>Zeige Folgen: Reichtum, Sklaven, Machtkämpfe und soziale Spannungen.</li>
        </ul>
      `)}
      <p>
        Beschreibe in einem zusammenhängenden Abschnitt, wie Rom von einem regionalen Stadtstaat
        zu einer Grossmacht im Mittelmeerraum wurde.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Ämterlaufbahn</h3>
        ${infoButton("ges-info-3")}
      </div>
      ${infoBox("ges-info-3", `
        <ul>
          <li>Erkläre, dass politische Ämter in einer bestimmten Reihenfolge durchlaufen wurden.</li>
          <li>Nenne den Zweck: Kontrolle, Erfahrung, Begrenzung von Macht.</li>
          <li>Verknüpfe die Ämterlaufbahn mit der römischen Aristokratie.</li>
          <li>Erkläre die Bedeutung für politische Karriere und Ansehen.</li>
        </ul>
      `)}
      <p>
        Erkläre den Begriff <strong>cursus honorum</strong> und seine Bedeutung für die politische Ordnung der römischen Republik.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Ständekämpfe</h3>
        ${infoButton("ges-info-4")}
      </div>
      ${infoBox("ges-info-4", `
        <ul>
          <li>Unterscheide Patrizier und Plebejer.</li>
          <li>Erkläre, weshalb politische und rechtliche Gleichstellung gefordert wurde.</li>
          <li>Nenne mögliche Ergebnisse: Volkstribunen, Zwölftafelgesetz, Zugang zu Ämtern.</li>
          <li>Ordne das Thema in die frühe Republik ein.</li>
        </ul>
      `)}
      <p>
        Erkläre die Ständekämpfe in der römischen Republik. Gehe auf Ursachen, Beteiligte und Folgen ein.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Grenze und Herrschaft</h3>
        ${infoButton("ges-info-5")}
      </div>
      ${infoBox("ges-info-5", `
        <ul>
          <li>Beschreibe zuerst den Begriff Limes als Grenz- und Sicherungssystem.</li>
          <li>Erkläre, dass Grenzen nicht nur Mauern, sondern auch Kontrollräume waren.</li>
          <li>Nenne Funktionen: Militär, Handel, Überwachung, Machtdemonstration.</li>
          <li>Ordne das Thema eher in die Kaiserzeit ein.</li>
        </ul>
      `)}
      <p>
        Erkläre den Begriff <strong>Limes</strong> und seine Bedeutung für das Römische Reich.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Begriffe zuordnen</h3>
        ${infoButton("ges-info-6")}
      </div>
      ${infoBox("ges-info-6", `
        <ul>
          <li>Definiere jeden Begriff zuerst knapp.</li>
          <li>Ordne ihn dann einer passenden Phase zu: frühe Republik, späte Republik oder Kaiserzeit.</li>
          <li>Begründe die Zuordnung mit einem Merkmal.</li>
        </ul>
      `)}
      <p>Definiere und ordne historisch ein:</p>
      <ol type="a">
        <li>Volkstribun</li>
        <li>Senat</li>
        <li>Provinz</li>
        <li>Bürgerrecht</li>
        <li>Heerführer</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Ursache und Folge</h3>
        ${infoButton("ges-info-7")}
      </div>
      ${infoBox("ges-info-7", `
        <ul>
          <li>Unterscheide zwischen politischer, sozialer und wirtschaftlicher Folge.</li>
          <li>Zeige, wie Expansion neue Ressourcen brachte.</li>
          <li>Erkläre aber auch Probleme: Ungleichheit, Machtkämpfe, Abhängigkeit von Heerführern.</li>
          <li>Formuliere als Kausalkette: Ursache → Entwicklung → Folge.</li>
        </ul>
      `)}
      <p>
        Erstelle eine Kausalkette zur römischen Expansion:
        Wie konnte militärischer Erfolg innenpolitische Probleme verstärken?
      </p>
    </div>
  `);
}

window.render_geschichte_gym1 = render_geschichte_gym1;
