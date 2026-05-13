function deutschGym1InfoButton(id) {
  return `<button class="info-btn" onclick="toggleInfo('${id}')" title="Anleitung anzeigen">i</button>`;
}

function deutschGym1InfoBox(id, html) {
  return `
    <div id="${id}" class="info-box hidden">
      <strong>Abstrakte Anleitung:</strong>
      ${html}
    </div>
  `;
}

function render_deutsch_gym1() {
  window.setMaterialTitle("Deutsch · GYM1 · Sprache und Erzählformen");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren Wortarten, Pronomen, literarische Grundbegriffe, Sage, Fabel, Parabel und Kurzgeschichte.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Wortarten bestimmen</h3>
        ${deutschGym1InfoButton("dg1-info-1")}
      </div>
      ${deutschGym1InfoBox("dg1-info-1", `
        <ul>
          <li>Frage zuerst: Bezeichnet das Wort eine Sache, Handlung, Eigenschaft oder Beziehung?</li>
          <li>Nomen haben oft einen Artikel und können dekliniert werden.</li>
          <li>Verben kann man konjugieren.</li>
          <li>Adjektive beschreiben Eigenschaften und können oft gesteigert werden.</li>
          <li>Pronomen ersetzen oder begleiten Nomen.</li>
          <li>Partikeln sind unveränderlich und haben keine Flexion.</li>
        </ul>
      `)}
      <p>Bestimme die Wortart der markierten Wörter. Verwende die Kategorien: Nomen, Verb, Adjektiv, Pronomen, Partikel.</p>
      <p>
        In vielen Städten <strong>steigen</strong> die Preise für Wohnungen. 
        <strong>Einige</strong> Familien ziehen deshalb in kleinere Gemeinden. 
        Dort finden sie <strong>ruhigere</strong> Quartiere, aber oft auch längere Wege. 
        <strong>Trotzdem</strong> möchten viele Menschen in der Nähe ihrer Arbeit bleiben. 
        Diese Entwicklung <strong>verändert</strong> das Leben in den Regionen deutlich.
      </p>
      <ol>
        <li>steigen</li>
        <li>Einige</li>
        <li>ruhigere</li>
        <li>Trotzdem</li>
        <li>verändert</li>
        <li>Entwicklung</li>
        <li>viele</li>
        <li>deutlich</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Pronomen erkennen</h3>
        ${deutschGym1InfoButton("dg1-info-2")}
      </div>
      ${deutschGym1InfoBox("dg1-info-2", `
        <ul>
          <li>Suche Wörter, die für Personen, Dinge oder Besitz stehen.</li>
          <li>Personalpronomen: ich, du, er, sie, es, wir, ihr, sie.</li>
          <li>Possessivpronomen: mein, dein, sein, ihr, unser, euer.</li>
          <li>Demonstrativpronomen: dieser, jener, solche.</li>
          <li>Relativpronomen: der, die, das, welcher.</li>
        </ul>
      `)}
      <p>Unterstreiche alle Pronomen im Text und bestimme bei fünf davon die genauere Art.</p>
      <p>
        Die Klasse besuchte ein Museum, das erst vor Kurzem eröffnet worden war. 
        Einige Schülerinnen fanden die Ausstellung spannend, andere hielten sie für zu kurz. 
        Der Führer erklärte ihnen, weshalb bestimmte Gegenstände für diese Region wichtig sind. 
        Danach schrieb jede Person ihre Eindrücke in ein kleines Heft.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Epik, Dramatik und Lyrik unterscheiden</h3>
        ${deutschGym1InfoButton("dg1-info-3")}
      </div>
      ${deutschGym1InfoBox("dg1-info-3", `
        <ul>
          <li>Epik erzählt eine Handlung meistens durch eine Erzählinstanz.</li>
          <li>Dramatik ist für die Bühne geschrieben und besteht oft aus Dialogen und Regieanweisungen.</li>
          <li>Lyrik ist meist verdichtet, rhythmisch und arbeitet oft mit Bildern, Versen und Klang.</li>
          <li>Nenne immer formale und inhaltliche Merkmale.</li>
        </ul>
      `)}
      <p>Erkläre die Unterschiede zwischen Epik, Dramatik und Lyrik. Verwende für jede Gattung mindestens zwei Merkmale und ein eigenes Beispiel.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Merkmale einer Sage</h3>
        ${deutschGym1InfoButton("dg1-info-4")}
      </div>
      ${deutschGym1InfoBox("dg1-info-4", `
        <ul>
          <li>Eine Sage wirkt oft teilweise glaubwürdig, obwohl Übernatürliches vorkommen kann.</li>
          <li>Sie ist häufig an einen Ort, eine historische Figur oder ein Ereignis gebunden.</li>
          <li>Sie wurde oft mündlich überliefert.</li>
          <li>Sie erklärt manchmal, warum etwas so ist, wie es ist.</li>
        </ul>
      `)}
      <p>Beantworte die Fragen zur Sage.</p>
      <ol type="a">
        <li>Nenne vier typische Merkmale einer Sage.</li>
        <li>Erkläre den Unterschied zwischen Sage und Märchen.</li>
        <li>Erfinde einen kurzen Sagenanfang von 4–5 Sätzen, ohne bekannte Figuren oder Orte zu verwenden.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Fabel und Lehre</h3>
        ${deutschGym1InfoButton("dg1-info-5")}
      </div>
      ${deutschGym1InfoBox("dg1-info-5", `
        <ul>
          <li>Fabeln haben oft Tiere mit menschlichen Eigenschaften.</li>
          <li>Die Handlung ist kurz und zugespitzt.</li>
          <li>Am Ende steht oft eine Lehre oder moralische Aussage.</li>
          <li>Die Figuren verkörpern häufig gegensätzliche Eigenschaften.</li>
        </ul>
      `)}
      <p>Lies den erfundenen Kurztext und erkläre, warum er als Fabel gelesen werden kann.</p>
      <p>
        Eine Krähe fand einen glänzenden Ring und trug ihn stolz durch den Wald. 
        Der Fuchs lobte sie so lange für ihren Geschmack, bis sie den Ring fallen liess, um sich zu bedanken. 
        Der Fuchs nahm den Ring und verschwand. 
        Die Krähe merkte zu spät, dass leere Komplimente oft einen Zweck haben.
      </p>
      <ol type="a">
        <li>Nenne die tierischen Figuren.</li>
        <li>Welche menschlichen Eigenschaften zeigen sie?</li>
        <li>Formuliere die Lehre in einem Satz.</li>
        <li>Erkläre, weshalb die Handlung typisch für eine Fabel ist.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Parabel erkennen</h3>
        ${deutschGym1InfoButton("dg1-info-6")}
      </div>
      ${deutschGym1InfoBox("dg1-info-6", `
        <ul>
          <li>Eine Parabel erzählt eine konkrete Beispielhandlung.</li>
          <li>Die eigentliche Bedeutung liegt auf einer abstrakten Ebene.</li>
          <li>Man muss die Bildebene auf eine Sachebene übertragen.</li>
          <li>Die Aussage ist oft offen, belehrend oder gesellschaftlich deutbar.</li>
        </ul>
      `)}
      <p>Zeige, warum der folgende Text als Parabel verstanden werden kann.</p>
      <p>
        Ein Wanderer trug jeden Tag einen schweren Stein in seinem Rucksack. 
        Als ihn jemand fragte, warum er ihn nicht wegwerfe, antwortete er: 
        „Ich habe ihn schon so lange getragen, dass ich ohne ihn nicht mehr weiss, wer ich bin.“
      </p>
      <ol type="a">
        <li>Was ist die Bildebene?</li>
        <li>Was könnte die Sachebene sein?</li>
        <li>Welche allgemeine Aussage lässt sich daraus ableiten?</li>
        <li>Warum ist der Text mehr als nur eine kleine Alltagsszene?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Kurzgeschichte</h3>
        ${deutschGym1InfoButton("dg1-info-7")}
      </div>
      ${deutschGym1InfoBox("dg1-info-7", `
        <ul>
          <li>Kurzgeschichten beginnen oft unvermittelt.</li>
          <li>Sie zeigen meist einen kleinen Ausschnitt aus dem Leben.</li>
          <li>Das Ende ist häufig offen oder deutet eine Veränderung an.</li>
          <li>Die Sprache ist oft knapp und alltäglich.</li>
          <li>Es gibt oft wenige Figuren und einen inneren Konflikt.</li>
        </ul>
      `)}
      <p>Nenne fünf Merkmale einer Kurzgeschichte und erkläre jedes Merkmal kurz.</p>
      <p>Schreibe danach einen möglichen Anfang einer Kurzgeschichte von 5–7 Sätzen.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Kontiguität erklären</h3>
        ${deutschGym1InfoButton("dg1-info-8")}
      </div>
      ${deutschGym1InfoBox("dg1-info-8", `
        <ul>
          <li>Kontiguität bedeutet Nachbarschaft oder Zusammenhang durch Nähe.</li>
          <li>Ein Begriff kann auf einen anderen verweisen, weil beide sachlich zusammengehören.</li>
          <li>Beispiel: Krone kann für König oder Herrschaft stehen.</li>
          <li>Wichtig ist: Die Beziehung entsteht nicht durch Ähnlichkeit, sondern durch Zusammenhang.</li>
        </ul>
      `)}
      <p>Erkläre den Begriff Kontiguität mit eigenen Worten und gib drei eigene Beispiele.</p>
      <ol type="a">
        <li>Ein Beispiel aus Politik oder Gesellschaft.</li>
        <li>Ein Beispiel aus dem Alltag.</li>
        <li>Ein Beispiel aus Literatur oder Medien.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 9 · Mythologische Figuren und Redensarten</h3>
        ${deutschGym1InfoButton("dg1-info-9")}
      </div>
      ${deutschGym1InfoBox("dg1-info-9", `
        <ul>
          <li>Lerne nicht nur Namen, sondern Funktionen und typische Attribute.</li>
          <li>Bei Redensarten musst du den übertragenen Sinn erklären.</li>
          <li>Vermeide reine Nacherzählung: Entscheidend ist die heutige Bedeutung.</li>
        </ul>
      `)}
      <p>Bearbeite die Aufgaben.</p>
      <ol type="a">
        <li>Nenne drei Figuren aus der griechisch-römischen Mythologie und ordne ihnen je zwei typische Merkmale oder Zuständigkeitsbereiche zu.</li>
        <li>Erkläre die Bedeutung der Redensart „eine unlösbare Aufgabe vor sich haben“ mithilfe eines selbst erfundenen mythologischen Vergleichs.</li>
        <li>Erfinde eine kurze moderne Redensart, die aus einer mythologischen Geschichte stammen könnte, und erkläre sie.</li>
      </ol>
    </div>
  `);
}

window.render_deutsch_gym1 = render_deutsch_gym1;
