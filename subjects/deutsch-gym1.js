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
  window.setMaterialTitle("Deutsch · GYM1 · Themengebiete");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben sind neutral formuliert und vollständig neu erstellt.
    </div>

    <div class="subjects-grid">
      <div class="subject-card" onclick="renderDeutschGym1WortartenTexte()">
        <h3>Wortarten und Textsorten</h3>
        <p>Wortarten, Pronomen, Epik, Dramatik, Lyrik, Sage, Fabel, Parabel, Kurzgeschichte.</p>
      </div>

      <div class="subject-card" onclick="renderDeutschGym1Syntax()">
        <h3>Syntax und Satzglieder</h3>
        <p>Prädikatsteile, Attribute, Satzglieder, Objekte, Adverbiale, Appositionen und Nebensätze.</p>
      </div>
    </div>
  `);
}

function backToDeutschGym1Topics() {
  render_deutsch_gym1();
}

function renderDeutschGym1WortartenTexte() {
  window.setMaterialTitle("Deutsch · GYM1 · Wortarten und Textsorten");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToDeutschGym1Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Wortarten und literarischen Grundformen.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Wortarten bestimmen</h3>
        ${deutschGym1InfoButton("dg1-wort-info-1")}
      </div>
      ${deutschGym1InfoBox("dg1-wort-info-1", `
        <ul>
          <li>Nomen bezeichnen Dinge, Personen, Begriffe und haben oft einen Artikel.</li>
          <li>Verben kann man konjugieren.</li>
          <li>Adjektive beschreiben Eigenschaften und sind oft steigerbar.</li>
          <li>Pronomen ersetzen oder begleiten Nomen.</li>
          <li>Partikeln sind unveränderlich.</li>
        </ul>
      `)}
      <p>Bestimme die Wortart der markierten Wörter.</p>
      <p>
        <strong>Viele</strong> Menschen reisen heute bewusster. 
        Sie <strong>vergleichen</strong> Angebote genauer und wählen manchmal <strong>ruhigere</strong> Orte. 
        <strong>Trotzdem</strong> entstehen in beliebten Regionen neue Probleme. 
        Die <strong>Verantwortung</strong> liegt nicht nur bei den Gästen, sondern auch bei den Anbietern.
      </p>
      <ol>
        <li>Viele</li>
        <li>reisen</li>
        <li>vergleichen</li>
        <li>ruhigere</li>
        <li>Trotzdem</li>
        <li>Probleme</li>
        <li>Verantwortung</li>
        <li>auch</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Pronomen erkennen</h3>
        ${deutschGym1InfoButton("dg1-wort-info-2")}
      </div>
      ${deutschGym1InfoBox("dg1-wort-info-2", `
        <ul>
          <li>Personalpronomen: ich, du, er, sie, es, wir, ihr, sie.</li>
          <li>Possessivpronomen: mein, dein, sein, ihr, unser, euer.</li>
          <li>Demonstrativpronomen: dieser, diese, dieses.</li>
          <li>Relativpronomen: der, die, das, welcher.</li>
        </ul>
      `)}
      <p>Unterstreiche alle Pronomen und bestimme bei fünf davon die genaue Art.</p>
      <p>
        Eine Schülerin brachte ihr Heft mit, das sie gestern vergessen hatte. 
        Einige fanden diese Situation lustig, andere verstanden sie gut. 
        Der Lehrer sagte, dass jeder seine Unterlagen selbst kontrollieren müsse.
      </p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Epik, Dramatik, Lyrik</h3>
        ${deutschGym1InfoButton("dg1-wort-info-3")}
      </div>
      ${deutschGym1InfoBox("dg1-wort-info-3", `
        <ul>
          <li>Epik erzählt eine Handlung.</li>
          <li>Dramatik ist für die Bühne gedacht und arbeitet stark mit Dialogen.</li>
          <li>Lyrik verwendet oft Verse, Bilder, Rhythmus und Klang.</li>
          <li>Nenne immer Merkmale und Beispiele.</li>
        </ul>
      `)}
      <p>Erkläre die Unterschiede zwischen Epik, Dramatik und Lyrik. Verwende pro Gattung mindestens zwei Merkmale und ein eigenes Beispiel.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Sage, Fabel, Parabel, Kurzgeschichte</h3>
        ${deutschGym1InfoButton("dg1-wort-info-4")}
      </div>
      ${deutschGym1InfoBox("dg1-wort-info-4", `
        <ul>
          <li>Sage: oft Ortsbezug, Überlieferung, teilweise übernatürlich.</li>
          <li>Fabel: Tiere mit menschlichen Eigenschaften und Lehre.</li>
          <li>Parabel: konkrete Bildebene mit abstrakter Sachebene.</li>
          <li>Kurzgeschichte: kurzer Ausschnitt, offener Anfang oder Schluss, Alltagsnähe.</li>
        </ul>
      `)}
      <p>Ordne die Merkmale der passenden Textsorte zu und begründe kurz.</p>
      <ol>
        <li>Tiere sprechen und zeigen menschliche Schwächen.</li>
        <li>Ein kurzer Alltagstext beginnt mitten in einer Situation.</li>
        <li>Eine einfache Handlung verweist auf eine tiefere allgemeine Aussage.</li>
        <li>Eine Erzählung ist an einen Ort gebunden und wurde angeblich überliefert.</li>
      </ol>
    </div>
  `);
}

function renderDeutschGym1Syntax() {
  window.setMaterialTitle("Deutsch · GYM1 · Syntax und Satzglieder");

  window.setMaterialContent(`
    <button class="secondary" onclick="backToDeutschGym1Topics()">Zurück zu den Themengebieten</button>

    <div class="notice">
      Eigenes Übungsset zu Syntax. Die Beispiele sind neu erfunden und neutral formuliert.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Prädikatsteile erkennen</h3>
        ${deutschGym1InfoButton("dg1-syn-info-1")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-1", `
        <ul>
          <li>Das Prädikat enthält die konjugierte Verbform.</li>
          <li>Bei mehrteiligen Prädikaten gehören auch Infinitive, Partizipien und Verbzusätze dazu.</li>
          <li>Frage: Was geschieht? Was wird getan?</li>
          <li>Markiere alle Teile des Prädikats, auch wenn sie getrennt stehen.</li>
        </ul>
      `)}
      <p>Unterstreiche sämtliche Prädikatsteile.</p>
      <ol>
        <li>Am Morgen hat die Klasse den Versuch sorgfältig vorbereitet.</li>
        <li>Einige Schülerinnen wollten ihre Ergebnisse später noch vergleichen.</li>
        <li>Der Bericht wird morgen im Unterricht besprochen werden.</li>
        <li>Nach der Pause stellte der Lehrer eine neue Frage.</li>
        <li>Die Gruppe konnte die Aufgabe ohne Hilfe lösen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Attribute erweitern</h3>
        ${deutschGym1InfoButton("dg1-syn-info-2")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-2", `
        <ul>
          <li>Attribute bestimmen ein Nomen genauer.</li>
          <li>Adjektivattribut: ein spannendes Buch.</li>
          <li>Genitivattribut: das Fahrrad des Nachbarn.</li>
          <li>Präpositionalattribut: das Haus am See.</li>
          <li>Pronominalattribut: mein Heft.</li>
        </ul>
      `)}
      <p>Erweitere die unterstrichenen Satzglieder mit dem verlangten Attribut.</p>
      <ol type="a">
        <li>Adjektivattribut: Wir lesen ein <u>Buch</u>.</li>
        <li>Präpositionalattribut: Die Gruppe untersucht ein <u>Problem</u>.</li>
        <li>Genitivattribut: Der Vortrag <u>beginnt</u> pünktlich. Ergänze ein passendes Genitivattribut zu „Vortrag“.</li>
        <li>Pronominalattribut: Eine <u>Tasche</u> liegt im Klassenzimmer.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Satzglieder bestimmen</h3>
        ${deutschGym1InfoButton("dg1-syn-info-3")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-3", `
        <ul>
          <li>Subjekt: Wer oder was?</li>
          <li>Akkusativobjekt: Wen oder was?</li>
          <li>Dativobjekt: Wem?</li>
          <li>Genitivobjekt: Wessen?</li>
          <li>Präpositionalobjekt: feste Präposition vom Verb abhängig.</li>
          <li>Adverbiale: wann, wo, wie, warum?</li>
        </ul>
      `)}
      <p>Trenne die Satzglieder mit senkrechten Strichen ab und bestimme Subjekt, Objekte und Adverbiale.</p>
      <ol>
        <li>Nach dem Unterricht erklärt die Lehrerin den Schülern die neue Aufgabe.</li>
        <li>Wegen des Regens verschob die Klasse den Ausflug auf nächste Woche.</li>
        <li>Im Labor beobachteten die Gruppen das Experiment sehr genau.</li>
        <li>Der Schüler erinnerte sich an die wichtige Regel.</li>
        <li>Am Abend schrieb sie ihrer Freundin eine kurze Nachricht.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Adverbiale unterscheiden</h3>
        ${deutschGym1InfoButton("dg1-syn-info-4")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-4", `
        <ul>
          <li>Temporaladverbial: Wann? Wie lange?</li>
          <li>Lokaladverbial: Wo? Wohin? Woher?</li>
          <li>Modaladverbial: Wie? Auf welche Weise?</li>
          <li>Kausaladverbial: Warum? Weshalb?</li>
        </ul>
      `)}
      <p>Bestimme die Art des Adverbials.</p>
      <ol>
        <li>Am Nachmittag treffen wir uns in der Bibliothek.</li>
        <li>Wegen der Hitze blieb die Klasse im Schatten.</li>
        <li>Mit grosser Konzentration löste er die Aufgabe.</li>
        <li>Vor dem Schulhaus warteten viele Schülerinnen.</li>
        <li>Seit zwei Wochen arbeitet die Gruppe an der Präsentation.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Appositionen und Kommas</h3>
        ${deutschGym1InfoButton("dg1-syn-info-5")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-5", `
        <ul>
          <li>Eine Apposition erklärt ein Nomen genauer.</li>
          <li>Lockere Appositionen werden meist mit Kommas abgetrennt.</li>
          <li>Enge Appositionen stehen ohne Komma.</li>
          <li>Prüfe, ob die Zusatzinformation eingeschoben ist.</li>
        </ul>
      `)}
      <p>Setze die Kommas richtig und bestimme, ob eine Apposition vorliegt.</p>
      <ol>
        <li>Die Autorin Clara Meier besucht unsere Schule.</li>
        <li>Herr Keller unser Klassenlehrer erklärt die Aufgabe.</li>
        <li>Die Stadt Bern die Hauptstadt der Schweiz liegt an der Aare.</li>
        <li>Der Schüler Jonas schreibt einen Bericht.</li>
        <li>Meine Schwester eine begeisterte Leserin empfiehlt mir oft Bücher.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Nebensätze unterstreichen</h3>
        ${deutschGym1InfoButton("dg1-syn-info-6")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-6", `
        <ul>
          <li>Nebensätze erkennt man oft an der Konjunktion oder am Relativpronomen.</li>
          <li>Das konjugierte Verb steht meist am Ende.</li>
          <li>Ein Nebensatz kann Subjekt, Objekt, Attribut oder Adverbiale ersetzen.</li>
          <li>Unterstreiche immer den ganzen Nebensatz.</li>
        </ul>
      `)}
      <p>Unterstreiche alle Nebensätze.</p>
      <ol>
        <li>Ich hoffe, dass du die Aufgabe verstanden hast.</li>
        <li>Der Text, den wir gelesen haben, war anspruchsvoll.</li>
        <li>Nachdem die Gruppe fertig war, verglich sie ihre Lösung.</li>
        <li>Sie weiss nicht, ob die Antwort richtig ist.</li>
        <li>Der Schüler bleibt ruhig, obwohl die Aufgabe schwierig wirkt.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Nebensätze formal und funktional bestimmen</h3>
        ${deutschGym1InfoButton("dg1-syn-info-7")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-7", `
        <ul>
          <li>Formal fragt man nach der Form: Konjunktionalsatz, Relativsatz, indirekter Fragesatz.</li>
          <li>Funktional fragt man nach der Satzgliedfunktion: Subjektsatz, Objektsatz, Attributsatz, Adverbialsatz.</li>
          <li>Relativsätze sind oft Attributsätze.</li>
          <li>Konjunktionalsätze können verschiedene Funktionen haben.</li>
        </ul>
      `)}
      <p>Bestimme die unterstrichenen Nebensätze formal und funktional.</p>
      <ol>
        <li><u>Dass die Prüfung verschoben wurde</u>, überraschte die Klasse.</li>
        <li>Die Aufgabe, <u>die wir gestern besprochen haben</u>, kommt im Test vor.</li>
        <li>Ich frage mich, <u>warum die Lösung so funktioniert</u>.</li>
        <li><u>Obwohl sie müde war</u>, lernte sie weiter.</li>
        <li>Er erklärte, <u>dass er den Fehler gefunden habe</u>.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Uneingeleiteten Nebensatz umformen</h3>
        ${deutschGym1InfoButton("dg1-syn-info-8")}
      </div>
      ${deutschGym1InfoBox("dg1-syn-info-8", `
        <ul>
          <li>Uneingeleitete Nebensätze haben keine Konjunktion.</li>
          <li>Man kann sie oft mit dass, wenn oder falls einleiten.</li>
          <li>Die Aussage muss gleich bleiben.</li>
          <li>Nach der Umformung steht das konjugierte Verb im Nebensatz am Ende.</li>
        </ul>
      `)}
      <p>Unterstreiche den uneingeleiteten Nebensatz und forme ihn in einen eingeleiteten Nebensatz um.</p>
      <ol>
        <li>Ich glaube, er hat die Lösung verstanden.</li>
        <li>Wäre das Wetter besser gewesen, hätten wir draussen gearbeitet.</li>
        <li>Sie sagte, sie komme später.</li>
        <li>Hätte ich mehr Zeit, würde ich die Aufgabe nochmals lösen.</li>
      </ol>
    </div>
  `);
}

window.render_deutsch_gym1 = render_deutsch_gym1;
