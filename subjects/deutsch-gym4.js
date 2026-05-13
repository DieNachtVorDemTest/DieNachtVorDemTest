function deutschGym4InfoButton(id) {
  return `<button class="info-btn" onclick="toggleInfo('${id}')" title="Anleitung anzeigen">i</button>`;
}

function deutschGym4InfoBox(id, html) {
  return `
    <div id="${id}" class="info-box hidden">
      <strong>Abstrakte Anleitung:</strong>
      ${html}
    </div>
  `;
}

function render_deutsch_gym4() {
  window.setMaterialTitle("Deutsch · GYM4 · Literaturgeschichte");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren Literaturepochen, Epochenmerkmale und literaturgeschichtliche Einordnung.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Grundwissen Literaturgeschichte</h3>
        ${deutschGym4InfoButton("dg4-info-1")}
      </div>
      ${deutschGym4InfoBox("dg4-info-1", `
        <ul>
          <li>Bei Wissensfragen kurz und präzise antworten.</li>
          <li>Definiere Fachbegriffe nicht nur mit einem Wort, sondern mit einem klaren Merkmal.</li>
          <li>Bei Epochen immer Zeit, Menschenbild, Themen und Stil mitdenken.</li>
        </ul>
      `)}
      <p>Beantworte die Fragen in Stichworten.</p>
      <ol type="a">
        <li>Was versteht man unter einer Literaturepoche?</li>
        <li>Was bedeutet literarische Moderne?</li>
        <li>Was versteht man unter Montage in literarischen Texten?</li>
        <li>Weshalb ist Literaturgeschichte nicht immer streng in Jahreszahlen einteilbar?</li>
        <li>Was bedeutet Epochenumbruch?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Epochen zuordnen</h3>
        ${deutschGym4InfoButton("dg4-info-2")}
      </div>
      ${deutschGym4InfoBox("dg4-info-2", `
        <ul>
          <li>Ordne nicht nur nach Jahreszahlen, sondern nach Merkmalen.</li>
          <li>Romantik: Sehnsucht, Natur, Fantasie, Nacht, Innerlichkeit.</li>
          <li>Realismus: Wirklichkeitsnähe, bürgerliche Welt, genaue Darstellung, Verklärung.</li>
          <li>Expressionismus: Krise, Grossstadt, Ich-Zerfall, starke Bilder.</li>
          <li>Aufklärung: Vernunft, Kritik, Bildung, Selbstdenken.</li>
        </ul>
      `)}
      <p>Ordne die Merkmale den passenden Epochen zu: Aufklärung, Sturm und Drang, Klassik, Romantik, Realismus, Naturalismus, Expressionismus, Moderne.</p>
      <ol>
        <li>Vernunft, Erziehung und Kritik an Autoritäten.</li>
        <li>Gefühl, Genie, Freiheit und Auflehnung.</li>
        <li>Harmonie, Humanität und Mass.</li>
        <li>Sehnsucht, Traum, Natur und Fantasie.</li>
        <li>Bürgerliches Leben, Wirklichkeitsnähe und poetische Verklärung.</li>
        <li>Exakte Darstellung sozialer Wirklichkeit.</li>
        <li>Sprachliche Zuspitzung, Krise, Grossstadt und Ich-Verlust.</li>
        <li>Formexperimente, Brüche, Montage und neue Erzählweisen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Realismus erkennen</h3>
        ${deutschGym4InfoButton("dg4-info-3")}
      </div>
      ${deutschGym4InfoBox("dg4-info-3", `
        <ul>
          <li>Realismus bildet nicht einfach alles brutal wirklich ab.</li>
          <li>Typisch ist eine geordnete, erzählerisch gestaltete Wirklichkeit.</li>
          <li>Oft stehen bürgerliche Figuren und gesellschaftliche Normen im Zentrum.</li>
          <li>Die Darstellung wirkt glaubwürdig, aber nicht dokumentarisch roh.</li>
        </ul>
      `)}
      <p>Erkläre, was den literarischen Realismus auszeichnet. Gehe auf folgende Punkte ein:</p>
      <ol type="a">
        <li>Themen</li>
        <li>Figuren</li>
        <li>Erzählweise</li>
        <li>Unterschied zum Naturalismus</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Romantik und ihre Merkmale</h3>
        ${deutschGym4InfoButton("dg4-info-4")}
      </div>
      ${deutschGym4InfoBox("dg4-info-4", `
        <ul>
          <li>Romantik richtet den Blick oft auf Innerlichkeit, Sehnsucht und Geheimnis.</li>
          <li>Natur ist häufig mehr als Kulisse: Sie spiegelt Gefühle oder Transzendenz.</li>
          <li>Das Unendliche, Traumhafte und Wunderbare spielt eine wichtige Rolle.</li>
          <li>Romantik kritisiert oft eine rein rationale Weltsicht.</li>
        </ul>
      `)}
      <p>Entscheide, welche Aussagen zur Romantik passen. Begründe jeweils kurz.</p>
      <ol type="a">
        <li>Die Welt soll nur durch Vernunft erklärt werden.</li>
        <li>Nacht, Traum und Sehnsucht sind wichtige Motive.</li>
        <li>Das Wunderbare kann Teil der Wirklichkeit sein.</li>
        <li>Die Sprache ist immer nüchtern und dokumentarisch.</li>
        <li>Die Natur kann als Spiegel der Seele erscheinen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Weimarer Klassik</h3>
        ${deutschGym4InfoButton("dg4-info-5")}
      </div>
      ${deutschGym4InfoBox("dg4-info-5", `
        <ul>
          <li>Klassik betont Harmonie, Humanität und Bildung.</li>
          <li>Der Mensch soll sich moralisch und geistig entwickeln.</li>
          <li>Form, Mass und Ausgleich sind wichtig.</li>
          <li>Typisch ist nicht extreme Gefühlssteigerung, sondern Balance.</li>
        </ul>
      `)}
      <p>Erkläre die Weimarer Klassik anhand von vier zentralen Begriffen:</p>
      <ol>
        <li>Humanität</li>
        <li>Bildung</li>
        <li>Harmonie</li>
        <li>Mass</li>
      </ol>
      <p>Schreibe danach einen kurzen Vergleich zwischen Klassik und Sturm und Drang.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Naturalismus und Realismus vergleichen</h3>
        ${deutschGym4InfoButton("dg4-info-6")}
      </div>
      ${deutschGym4InfoBox("dg4-info-6", `
        <ul>
          <li>Beide Epochen interessieren sich für Wirklichkeit.</li>
          <li>Der Realismus gestaltet Wirklichkeit literarisch und oft gemässigt.</li>
          <li>Der Naturalismus will genauer, schonungsloser und sozialkritischer darstellen.</li>
          <li>Beim Vergleich immer Gemeinsamkeiten und Unterschiede nennen.</li>
        </ul>
      `)}
      <p>Vergleiche Realismus und Naturalismus in einer Tabelle mit mindestens fünf Zeilen.</p>
      <p>Vergleichspunkte: Menschenbild, Themen, Sprache, Wirklichkeitsdarstellung, soziale Probleme.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Expressionismus</h3>
        ${deutschGym4InfoButton("dg4-info-7")}
      </div>
      ${deutschGym4InfoBox("dg4-info-7", `
        <ul>
          <li>Expressionismus zeigt oft Krise, Angst, Beschleunigung und Entfremdung.</li>
          <li>Grossstadt, Technik, Krieg und Ich-Zerfall sind häufige Themen.</li>
          <li>Die Sprache ist oft stark verdichtet, bildhaft und emotional.</li>
          <li>Es geht nicht um ruhige Abbildung, sondern um inneren Ausdruck.</li>
        </ul>
      `)}
      <p>Erkläre, warum der folgende erfundene Textauszug expressionistisch wirken könnte:</p>
      <p>
        Die Strassen schrien im Licht der Reklamen. Menschen hasteten ohne Gesichter aneinander vorbei.
        Über den Dächern zitterte der Himmel wie Metall, und in mir zerbrach ein stiller Spiegel.
      </p>
      <ol type="a">
        <li>Nenne drei sprachliche Merkmale.</li>
        <li>Nenne zwei inhaltliche Merkmale.</li>
        <li>Erkläre die Wirkung des Textes.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Epochen-Multiple-Choice</h3>
        ${deutschGym4InfoButton("dg4-info-8")}
      </div>
      ${deutschGym4InfoBox("dg4-info-8", `
        <ul>
          <li>Streiche zuerst offensichtlich falsche Antworten.</li>
          <li>Achte auf Schlüsselbegriffe: Vernunft, Genie, Sehnsucht, Wirklichkeit, Krise.</li>
          <li>Begründe auch bei Multiple Choice kurz, damit du sicher bist.</li>
        </ul>
      `)}
      <p>Wähle jeweils die passende Antwort und begründe kurz.</p>
      <ol type="a">
        <li>Welche Epoche betont besonders Vernunft und Selbstdenken?  
          <br>Aufklärung / Romantik / Expressionismus / Naturalismus
        </li>
        <li>Welche Epoche arbeitet häufig mit Sehnsucht, Nacht und Traum?  
          <br>Realismus / Klassik / Romantik / Nachkriegsliteratur
        </li>
        <li>Welche Epoche zeigt oft Grossstadt, Krise und Ich-Zerfall?  
          <br>Expressionismus / Barock / Aufklärung / Biedermeier
        </li>
        <li>Welche Epoche stellt soziale Wirklichkeit besonders genau und schonungslos dar?  
          <br>Naturalismus / Klassik / Romantik / Sturm und Drang
        </li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 9 · Epochenanalyse an einem erfundenen Text</h3>
        ${deutschGym4InfoButton("dg4-info-9")}
      </div>
      ${deutschGym4InfoBox("dg4-info-9", `
        <ul>
          <li>Beginne mit einer These: Der Text passt vermutlich zu Epoche X.</li>
          <li>Belege die These mit konkreten Merkmalen.</li>
          <li>Trenne Inhalt, Sprache und Menschenbild.</li>
          <li>Erwähne auch, wenn Merkmale nicht eindeutig sind.</li>
        </ul>
      `)}
      <p>Ordne den erfundenen Textauszug einer Epoche zu und begründe deine Entscheidung.</p>
      <p>
        Der Beamte legte den Hut sorgfältig auf den Stuhl, strich die Ärmel glatt und prüfte,
        ob die Uhr noch ging. Draussen fuhr ein Wagen vorbei, doch im Zimmer blieb alles an seinem Platz.
        Nur sein Blick verriet, dass er längst an ein anderes Leben dachte.
      </p>
      <ol type="a">
        <li>Welche Epoche passt am ehesten?</li>
        <li>Nenne drei passende Merkmale.</li>
        <li>Welche Textstelle zeigt einen inneren Konflikt?</li>
      </ol>
    </div>
  `);
}

window.render_deutsch_gym4 = render_deutsch_gym4;
