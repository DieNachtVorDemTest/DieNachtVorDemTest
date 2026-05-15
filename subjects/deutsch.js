/* =========================================================
   SchoolFools – Deutsch
   Datei: deutsch.js

   Neuer Aufbau:
   - Links nur GYM1, GYM2, GYM3, GYM4
   - Rechts jeweils der ganze Inhalt dieser Stufe
   - Keine künstlichen Lernziele/Merksätze-Boxen
   - Fokus auf wirklich nutzbares Wissen
   - Alle Inhalte selbst erstellt
========================================================= */

const DEUTSCH_BEREICHE = [
  {
    id: "gym1",
    titel: "GYM1",
    untertitel: "Grammatik und Stil",
    beschreibung:
      "Hier lernst du die wichtigsten Grammatikregeln und wie du Sätze sauber, korrekt und gymnasial formulierst.",
    html: `
      <section class="sf-de-section">
        <h2>GYM1 – Grammatik und Stil</h2>
        <p class="sf-de-lead">
          In Deutsch bringt dir Grammatik nur dann etwas, wenn du dadurch besser schreiben kannst.
          Deshalb geht es hier nicht nur um Begriffe, sondern darum, wie du Sätze wirklich verstehst,
          korrigierst und besser formulierst.
        </p>
      </section>

      <section class="sf-de-section">
        <h3>1. Die wichtigsten Wortarten</h3>
        <p>
          Wortarten zeigen dir, welche Aufgabe ein Wort im Satz hat. Wenn du Wortarten erkennst,
          verstehst du Sätze schneller und machst weniger Fehler bei Kommas, Fällen und Satzbau.
        </p>

        <div class="sf-de-table-wrap">
          <table class="sf-de-table">
            <thead>
              <tr>
                <th>Wortart</th>
                <th>Erklärung</th>
                <th>Beispiele</th>
                <th>Woran du sie erkennst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nomen</td>
                <td>Bezeichnet Personen, Dinge, Gefühle, Zustände oder Begriffe.</td>
                <td>Schüler, Haus, Angst, Freiheit, Sprache</td>
                <td>Meist mit Artikel: der, die, das, ein, eine.</td>
              </tr>
              <tr>
                <td>Verb</td>
                <td>Beschreibt eine Handlung, einen Vorgang oder einen Zustand.</td>
                <td>gehen, schreiben, denken, sein, werden</td>
                <td>Kann konjugiert werden: ich gehe, du gehst, er geht.</td>
              </tr>
              <tr>
                <td>Adjektiv</td>
                <td>Beschreibt eine Eigenschaft.</td>
                <td>gross, dunkel, schwierig, präzise</td>
                <td>Kann meistens gesteigert werden: gross, grösser, am grössten.</td>
              </tr>
              <tr>
                <td>Pronomen</td>
                <td>Ersetzt oder begleitet ein Nomen.</td>
                <td>ich, du, er, sie, mein, dieser, jemand</td>
                <td>Steht oft anstelle einer Person oder Sache.</td>
              </tr>
              <tr>
                <td>Präposition</td>
                <td>Zeigt ein Verhältnis an: Ort, Zeit, Grund oder Art.</td>
                <td>in, auf, unter, wegen, trotz, mit, für</td>
                <td>Steht häufig vor einem Nomen oder Pronomen.</td>
              </tr>
              <tr>
                <td>Konjunktion</td>
                <td>Verbindet Wörter, Satzteile oder ganze Sätze.</td>
                <td>und, oder, aber, weil, obwohl, dass</td>
                <td>Leitet oft einen Nebensatz ein.</td>
              </tr>
              <tr>
                <td>Adverb</td>
                <td>Gibt genauere Umstände an.</td>
                <td>heute, dort, deshalb, gern, oft</td>
                <td>Beschreibt wann, wo, warum oder wie etwas geschieht.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-de-example">
          <h4>Beispiel</h4>
          <p>
            <strong>Der müde Schüler schreibt heute einen kurzen Text.</strong>
          </p>
          <ul>
            <li><strong>Der</strong> = Artikel</li>
            <li><strong>müde</strong> = Adjektiv</li>
            <li><strong>Schüler</strong> = Nomen</li>
            <li><strong>schreibt</strong> = Verb</li>
            <li><strong>heute</strong> = Adverb</li>
            <li><strong>einen kurzen Text</strong> = Ergänzung zum Verb</li>
          </ul>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>2. Satzglieder: Wie ein Satz gebaut ist</h3>
        <p>
          Satzglieder sind grössere Bausteine im Satz. Sie können aus einem Wort oder aus mehreren
          Wörtern bestehen. Der wichtigste Trick: Satzglieder kann man meistens verschieben.
        </p>

        <div class="sf-de-rule">
          <h4>Verschiebeprobe</h4>
          <p>
            Was zusammen verschoben werden kann, bildet meistens ein Satzglied.
          </p>
          <p>
            <strong>Am Abend</strong> liest <strong>die Schülerin</strong> <strong>ein Buch</strong>.<br>
            <strong>Die Schülerin</strong> liest <strong>am Abend</strong> <strong>ein Buch</strong>.<br>
            <strong>Ein Buch</strong> liest <strong>die Schülerin</strong> <strong>am Abend</strong>.
          </p>
        </div>

        <div class="sf-de-table-wrap">
          <table class="sf-de-table">
            <thead>
              <tr>
                <th>Satzglied</th>
                <th>Frage</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subjekt</td>
                <td>Wer oder was?</td>
                <td>Die Schülerin liest.</td>
              </tr>
              <tr>
                <td>Prädikat</td>
                <td>Was geschieht?</td>
                <td>Die Schülerin liest.</td>
              </tr>
              <tr>
                <td>Akkusativobjekt</td>
                <td>Wen oder was?</td>
                <td>Sie liest ein Buch.</td>
              </tr>
              <tr>
                <td>Dativobjekt</td>
                <td>Wem?</td>
                <td>Sie gibt dem Freund ein Buch.</td>
              </tr>
              <tr>
                <td>Genitivobjekt</td>
                <td>Wessen?</td>
                <td>Er erinnert sich des Vorfalls.</td>
              </tr>
              <tr>
                <td>Adverbiale der Zeit</td>
                <td>Wann?</td>
                <td>Am Abend liest sie.</td>
              </tr>
              <tr>
                <td>Adverbiale des Ortes</td>
                <td>Wo?</td>
                <td>Im Zimmer liest sie.</td>
              </tr>
              <tr>
                <td>Adverbiale des Grundes</td>
                <td>Warum?</td>
                <td>Wegen des Tests lernt sie.</td>
              </tr>
              <tr>
                <td>Adverbiale der Art und Weise</td>
                <td>Wie?</td>
                <td>Konzentriert liest sie den Text.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-de-example">
          <h4>Beispielanalyse</h4>
          <p>
            <strong>Wegen des schlechten Wetters schreibt der Schüler am Nachmittag einen Bericht.</strong>
          </p>
          <ul>
            <li><strong>Wegen des schlechten Wetters</strong> = Adverbiale des Grundes</li>
            <li><strong>schreibt</strong> = Prädikat</li>
            <li><strong>der Schüler</strong> = Subjekt</li>
            <li><strong>am Nachmittag</strong> = Adverbiale der Zeit</li>
            <li><strong>einen Bericht</strong> = Akkusativobjekt</li>
          </ul>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>3. Die vier Fälle</h3>
        <p>
          Die Fälle zeigen, welche Funktion ein Nomen oder Pronomen im Satz hat.
          Viele Fehler entstehen, weil man nicht merkt, welchen Fall ein Verb oder eine Präposition verlangt.
        </p>

        <div class="sf-de-table-wrap">
          <table class="sf-de-table">
            <thead>
              <tr>
                <th>Fall</th>
                <th>Frage</th>
                <th>Beispiel</th>
                <th>Funktion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominativ</td>
                <td>Wer oder was?</td>
                <td>Der Schüler liest.</td>
                <td>Meist Subjekt</td>
              </tr>
              <tr>
                <td>Akkusativ</td>
                <td>Wen oder was?</td>
                <td>Er liest den Text.</td>
                <td>Direktes Objekt</td>
              </tr>
              <tr>
                <td>Dativ</td>
                <td>Wem?</td>
                <td>Er hilft dem Freund.</td>
                <td>Indirektes Objekt</td>
              </tr>
              <tr>
                <td>Genitiv</td>
                <td>Wessen?</td>
                <td>Die Aussage des Textes ist klar.</td>
                <td>Besitz, Zugehörigkeit oder Bezug</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-de-rule">
          <h4>Typische Verben mit Dativ</h4>
          <p>
            helfen, danken, folgen, gefallen, gehören, vertrauen, antworten, begegnen
          </p>
          <p>
            Richtig: <strong>Ich helfe dem Schüler.</strong><br>
            Falsch: <strong>Ich helfe den Schüler.</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Typische Verben mit Akkusativ</h4>
          <p>
            sehen, lesen, schreiben, fragen, besuchen, suchen, brauchen, kaufen
          </p>
          <p>
            Richtig: <strong>Ich sehe den Schüler.</strong><br>
            Falsch: <strong>Ich sehe dem Schüler.</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Präpositionen mit Dativ</h4>
          <p>
            aus, bei, mit, nach, seit, von, zu
          </p>
          <p>
            Beispiel: <strong>mit dem Freund</strong>, <strong>nach der Schule</strong>, <strong>bei dem Lehrer</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Präpositionen mit Akkusativ</h4>
          <p>
            durch, für, gegen, ohne, um
          </p>
          <p>
            Beispiel: <strong>für den Freund</strong>, <strong>gegen den Vorschlag</strong>, <strong>ohne die Hilfe</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Wechselpräpositionen</h4>
          <p>
            an, auf, hinter, in, neben, über, unter, vor, zwischen
          </p>
          <p>
            Bei Ort/Ruhe steht der Dativ: <strong>Das Buch liegt auf dem Tisch.</strong><br>
            Bei Richtung/Bewegung steht der Akkusativ: <strong>Ich lege das Buch auf den Tisch.</strong>
          </p>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>4. Hauptsatz und Nebensatz</h3>
        <p>
          Der Unterschied zwischen Hauptsatz und Nebensatz ist extrem wichtig, weil viele Kommas davon abhängen.
        </p>

        <div class="sf-de-compare">
          <div>
            <h4>Hauptsatz</h4>
            <p>
              Ein Hauptsatz kann allein stehen. Das konjugierte Verb steht meistens an zweiter Stelle.
            </p>
            <p>
              <strong>Der Schüler liest den Text.</strong>
            </p>
          </div>
          <div>
            <h4>Nebensatz</h4>
            <p>
              Ein Nebensatz kann nicht sinnvoll allein stehen. Das konjugierte Verb steht meistens am Ende.
            </p>
            <p>
              <strong>weil der Schüler den Text liest</strong>
            </p>
          </div>
        </div>

        <div class="sf-de-rule">
          <h4>Häufige Nebensatz-Einleitungen</h4>
          <p>
            weil, dass, obwohl, wenn, als, während, nachdem, bevor, damit, sodass, ob, falls
          </p>
        </div>

        <div class="sf-de-example">
          <h4>Beispiele</h4>
          <p>
            <strong>Ich lerne Deutsch, weil ich meine Texte verbessern möchte.</strong>
          </p>
          <p>
            Hauptsatz: <strong>Ich lerne Deutsch</strong><br>
            Nebensatz: <strong>weil ich meine Texte verbessern möchte</strong>
          </p>
          <p>
            Das Komma steht zwischen Hauptsatz und Nebensatz.
          </p>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>5. Kommaregeln, die du wirklich brauchst</h3>

        <div class="sf-de-rule">
          <h4>Regel 1: Komma zwischen Hauptsatz und Nebensatz</h4>
          <p>
            <strong>Ich gehe nach Hause, weil ich müde bin.</strong><br>
            <strong>Obwohl es spät ist, schreibt sie weiter.</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 2: Komma bei eingeschobenem Nebensatz</h4>
          <p>
            Wenn ein Nebensatz mitten in einem Hauptsatz steht, braucht er vorne und hinten ein Komma.
          </p>
          <p>
            <strong>Der Schüler, der den Text gelesen hat, beantwortet die Frage.</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 3: Komma bei Aufzählungen</h4>
          <p>
            Bei Aufzählungen setzt man Kommas, wenn kein und/oder steht.
          </p>
          <p>
            <strong>Der Text wirkt sachlich, klar, überzeugend und gut strukturiert.</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 4: Komma vor aber, sondern, doch, jedoch</h4>
          <p>
            <strong>Der Satz ist lang, aber verständlich.</strong><br>
            <strong>Die Figur wirkt nicht mutig, sondern unsicher.</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 5: Komma bei Infinitivgruppen mit zu</h4>
          <p>
            Ein Komma steht häufig bei erweiterten Infinitivgruppen mit <strong>zu</strong>, besonders bei Signalwörtern wie
            <strong>um</strong>, <strong>ohne</strong>, <strong>statt</strong>, <strong>anstatt</strong>, <strong>ausser</strong>.
          </p>
          <p>
            <strong>Sie lernt, um den Test zu bestehen.</strong><br>
            <strong>Er schreibt weiter, ohne lange nachzudenken.</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 6: Kein Komma zwischen Subjekt und Prädikat</h4>
          <p>
            Falsch: <strong>Der Schüler, schreibt einen Text.</strong><br>
            Richtig: <strong>Der Schüler schreibt einen Text.</strong>
          </p>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>6. Gross- und Kleinschreibung</h3>
        <p>
          Im Deutschen schreibt man Nomen gross. Schwieriger wird es, wenn Verben oder Adjektive wie Nomen gebraucht werden.
        </p>

        <div class="sf-de-rule">
          <h4>Regel 1: Nomen schreibt man gross</h4>
          <p>
            <strong>der Text</strong>, <strong>die Sprache</strong>, <strong>das Argument</strong>, <strong>eine Analyse</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 2: Nominalisierte Verben schreibt man gross</h4>
          <p>
            Wenn vor einem Verb ein Artikel oder eine Präposition mit Artikel steht, wird es oft wie ein Nomen gebraucht.
          </p>
          <p>
            <strong>das Lesen</strong>, <strong>beim Schreiben</strong>, <strong>zum Lernen</strong>, <strong>nach dem Essen</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 3: Nominalisierte Adjektive schreibt man gross</h4>
          <p>
            <strong>das Gute</strong>, <strong>etwas Wichtiges</strong>, <strong>nichts Neues</strong>, <strong>viel Interessantes</strong>
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Regel 4: Adjektive vor Nomen schreibt man klein</h4>
          <p>
            <strong>ein guter Text</strong>, <strong>eine schwierige Aufgabe</strong>, <strong>eine klare Aussage</strong>
          </p>
        </div>

        <div class="sf-de-example">
          <h4>Vergleich</h4>
          <p>
            <strong>Das schnelle Lesen hilft beim Lernen.</strong>
          </p>
          <ul>
            <li><strong>schnelle</strong> klein, weil es das Nomen Lesen beschreibt.</li>
            <li><strong>Lesen</strong> gross, weil das Verb nominalisiert ist.</li>
            <li><strong>Lernen</strong> gross, weil es nach beim steht.</li>
          </ul>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>7. Zeiten richtig verwenden</h3>
        <p>
          In der Schule ist besonders wichtig, dass du in Analysen, Inhaltsangaben und Interpretationen
          die richtige Zeitform verwendest.
        </p>

        <div class="sf-de-table-wrap">
          <table class="sf-de-table">
            <thead>
              <tr>
                <th>Textsorte</th>
                <th>Normalerweise verwendete Zeit</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inhaltsangabe</td>
                <td>Präsens</td>
                <td>Die Figur verlässt das Haus.</td>
              </tr>
              <tr>
                <td>Textanalyse</td>
                <td>Präsens</td>
                <td>Der Autor verwendet eine rhetorische Frage.</td>
              </tr>
              <tr>
                <td>Gedichtanalyse</td>
                <td>Präsens</td>
                <td>Das lyrische Ich beschreibt eine einsame Landschaft.</td>
              </tr>
              <tr>
                <td>Erörterung</td>
                <td>Präsens</td>
                <td>Ein späterer Schulbeginn kann die Konzentration verbessern.</td>
              </tr>
              <tr>
                <td>Erzählung</td>
                <td>Präteritum oder Präsens, aber einheitlich</td>
                <td>Er ging nach Hause. / Er geht nach Hause.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-de-rule">
          <h4>Vorzeitigkeit</h4>
          <p>
            Wenn etwas vor dem eigentlichen Geschehen passiert ist, kann Perfekt oder Plusquamperfekt nötig sein.
          </p>
          <p>
            <strong>Die Figur ist misstrauisch, weil sie zuvor enttäuscht worden ist.</strong>
          </p>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>8. Stil: So klingt dein Text gymnasialer</h3>
        <p>
          Ein guter Deutschtext ist nicht künstlich kompliziert. Er ist klar, genau und sachlich.
          Der wichtigste Unterschied ist: Du schreibst nicht irgendwie, sondern du benennst genau, was du meinst.
        </p>

        <div class="sf-de-table-wrap">
          <table class="sf-de-table">
            <thead>
              <tr>
                <th>Schwach</th>
                <th>Besser</th>
                <th>Warum besser?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Der Text ist irgendwie spannend.</td>
                <td>Der Text erzeugt Spannung durch kurze Sätze und bedrohliche Verben.</td>
                <td>Die Wirkung wird erklärt.</td>
              </tr>
              <tr>
                <td>Der Autor macht viele Sachen mit Sprache.</td>
                <td>Der Autor verwendet Wiederholungen, um die Aussage zu verstärken.</td>
                <td>Das sprachliche Mittel wird konkret genannt.</td>
              </tr>
              <tr>
                <td>Die Figur ist schlecht.</td>
                <td>Die Figur wirkt moralisch fragwürdig, weil sie bewusst lügt.</td>
                <td>Die Bewertung wird begründet.</td>
              </tr>
              <tr>
                <td>Ich finde, das Gedicht ist traurig.</td>
                <td>Das Gedicht wirkt melancholisch, weil dunkle Naturbilder dominieren.</td>
                <td>Es klingt sachlicher und analytischer.</td>
              </tr>
              <tr>
                <td>Das Zitat zeigt, dass es so ist.</td>
                <td>Die Formulierung verdeutlicht die Unsicherheit der Figur.</td>
                <td>Die Aussage ist genauer.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-de-rule">
          <h4>Gute Verben für Analysen</h4>
          <p>
            zeigt, verdeutlicht, betont, verstärkt, erzeugt, veranschaulicht, kritisiert,
            stellt dar, verweist auf, legt nahe, macht sichtbar, kontrastiert, problematisiert
          </p>
        </div>

        <div class="sf-de-rule">
          <h4>Gute Adjektive für Wirkungen</h4>
          <p>
            sachlich, emotional, kritisch, distanziert, ironisch, bedrohlich, melancholisch,
            nüchtern, eindringlich, dramatisch, ruhig, angespannt, abwertend, feierlich
          </p>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>9. Häufige Schreibfehler und bessere Varianten</h3>

        <div class="sf-de-correction">
          <p><strong>Falsch:</strong> Wegen dem Wetter blieb er zu Hause.</p>
          <p><strong>Besser:</strong> Wegen des Wetters blieb er zu Hause.</p>
          <p><strong>Erklärung:</strong> Wegen steht standardsprachlich mit Genitiv.</p>
        </div>

        <div class="sf-de-correction">
          <p><strong>Falsch:</strong> Der Text, zeigt die Angst der Figur.</p>
          <p><strong>Besser:</strong> Der Text zeigt die Angst der Figur.</p>
          <p><strong>Erklärung:</strong> Zwischen Subjekt und Prädikat steht kein Komma.</p>
        </div>

        <div class="sf-de-correction">
          <p><strong>Falsch:</strong> Ich helfe den Freund.</p>
          <p><strong>Besser:</strong> Ich helfe dem Freund.</p>
          <p><strong>Erklärung:</strong> Helfen verlangt den Dativ.</p>
        </div>

        <div class="sf-de-correction">
          <p><strong>Falsch:</strong> Der Autor will uns sagen, dass...</p>
          <p><strong>Besser:</strong> Der Text legt nahe, dass...</p>
          <p><strong>Erklärung:</strong> In Analysen sollte man vorsichtig formulieren und nicht unbelegt die Absicht des Autors behaupten.</p>
        </div>

        <div class="sf-de-correction">
          <p><strong>Falsch:</strong> Die Person ist traurig und so.</p>
          <p><strong>Besser:</strong> Die Figur wirkt traurig, weil ihre Sprache kurz und resigniert ist.</p>
          <p><strong>Erklärung:</strong> Umgangssprache wird durch genaue Analyse ersetzt.</p>
        </div>
      </section>

      <section class="sf-de-section">
        <h3>10. Mini-Training für GYM1</h3>
        <p>
          Diese kurzen Aufgaben prüfen, ob du die Regeln wirklich anwenden kannst.
        </p>

        <div class="sf-de-task">
          <h4>Aufgabe 1: Kommas setzen</h4>
          <p>
            Setze die Kommas:
          </p>
          <p>
            <strong>Obwohl der Text einfach wirkt enthält er viele sprachliche Feinheiten die man genau untersuchen muss.</strong>
          </p>
          <button class="sf-de-toggle" onclick="toggleDeutschBox('gym1-loesung-1')">Lösung anzeigen</button>
          <div id="gym1-loesung-1" class="sf-de-hidden-box">
            <p>
              <strong>Obwohl der Text einfach wirkt, enthält er viele sprachliche Feinheiten, die man genau untersuchen muss.</strong>
            </p>
            <p>
              Erstes Komma: Nebensatz mit obwohl. Zweites Komma: Relativsatz mit die.
            </p>
          </div>
        </div>

        <div class="sf-de-task">
          <h4>Aufgabe 2: Fall bestimmen</h4>
          <p>
            Bestimme den Fall von <strong>dem Schüler</strong>:
          </p>
          <p>
            <strong>Die Lehrerin erklärt dem Schüler die Aufgabe.</strong>
          </p>
          <button class="sf-de-toggle" onclick="toggleDeutschBox('gym1-loesung-2')">Lösung anzeigen</button>
          <div id="gym1-loesung-2" class="sf-de-hidden-box">
            <p>
              <strong>dem Schüler</strong> steht im Dativ.
            </p>
            <p>
              Frage: Wem erklärt die Lehrerin die Aufgabe? Antwort: dem Schüler.
            </p>
          </div>
        </div>

        <div class="sf-de-task">
          <h4>Aufgabe 3: Stil verbessern</h4>
          <p>
            Verbessere den Satz:
          </p>
          <p>
            <strong>Der Text ist irgendwie komisch und der Autor macht viele Sachen.</strong>
          </p>
          <button class="sf-de-toggle" onclick="toggleDeutschBox('gym1-loesung-3')">Lösung anzeigen</button>
          <div id="gym1-loesung-3" class="sf-de-hidden-box">
            <p>
              Eine bessere Variante:
            </p>
            <p>
              <strong>Der Text wirkt irritierend, weil die Handlung sprunghaft erzählt wird und die Wortwahl zunehmend bedrohlich erscheint.</strong>
            </p>
            <p>
              Diese Version ist besser, weil sie die Wirkung erklärt und konkrete sprachliche Beobachtungen nennt.
            </p>
          </div>
        </div>

        <div class="sf-de-task">
          <h4>Aufgabe 4: Gross- und Kleinschreibung</h4>
          <p>
            Korrigiere:
          </p>
          <p>
            <strong>Beim schnellen lesen übersieht man oft das wichtige.</strong>
          </p>
          <button class="sf-de-toggle" onclick="toggleDeutschBox('gym1-loesung-4')">Lösung anzeigen</button>
          <div id="gym1-loesung-4" class="sf-de-hidden-box">
            <p>
              <strong>Beim schnellen Lesen übersieht man oft das Wichtige.</strong>
            </p>
            <p>
              Lesen wird grossgeschrieben, weil es nominalisiert ist. Wichtige wird grossgeschrieben, weil es nach das wie ein Nomen gebraucht wird.
            </p>
          </div>
        </div>
      </section>
    `
  },

  {
  id: "gym2",
  titel: "GYM2",
  untertitel: "Schreibtraining und Rechtschreibübungen",
  beschreibung:
    "50 konkrete Übungen zu Kommasetzung, Gross-/Kleinschreibung, Fällen, Satzbau, Stil und Rechtschreibung – mit Lösungen.",
  html: `
    <section class="sf-de-section">
      <h2>GYM2 – Schreibtraining und Rechtschreibung</h2>
      <p class="sf-de-lead">
        In diesem Bereich übst du nicht theoretisch, sondern praktisch. Jede Übung trainiert eine Regel,
        die in Deutschtests, Aufsätzen und Analysen ständig vorkommt. Die Übungen sind nach Themen geordnet:
        Kommasetzung, Gross-/Kleinschreibung, Fälle, Satzbau, dass/das, Zeitformen, Stil und typische Rechtschreibfehler.
      </p>
    </section>

    <section class="sf-de-section">
      <h3>A. Kommasetzung – 10 Übungen</h3>
      <p>
        Kommas sind nicht einfach Gefühlssache. Meistens musst du zuerst erkennen, ob ein Nebensatz,
        eine Aufzählung, ein Einschub oder eine Infinitivgruppe vorliegt.
      </p>

      <div class="sf-de-task">
        <h4>Übung 1 – Nebensatz mit weil</h4>
        <p>Setze das Komma:</p>
        <p><strong>Ich lerne Deutsch weil ich meine Texte verbessern möchte.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k1')">Lösung anzeigen</button>
        <div id="gym2-k1" class="sf-de-hidden-box">
          <p><strong>Ich lerne Deutsch, weil ich meine Texte verbessern möchte.</strong></p>
          <p>Vor <strong>weil</strong> beginnt ein Nebensatz. Deshalb steht ein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 2 – Nebensatz am Anfang</h4>
        <p>Setze das Komma:</p>
        <p><strong>Obwohl der Text kurz ist enthält er viele wichtige Aussagen.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k2')">Lösung anzeigen</button>
        <div id="gym2-k2" class="sf-de-hidden-box">
          <p><strong>Obwohl der Text kurz ist, enthält er viele wichtige Aussagen.</strong></p>
          <p>Der Nebensatz steht am Anfang. Nach dem Nebensatz folgt ein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 3 – Relativsatz</h4>
        <p>Setze die Kommas:</p>
        <p><strong>Die Figur die am Anfang unsicher wirkt verändert sich im Verlauf der Handlung.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k3')">Lösung anzeigen</button>
        <div id="gym2-k3" class="sf-de-hidden-box">
          <p><strong>Die Figur, die am Anfang unsicher wirkt, verändert sich im Verlauf der Handlung.</strong></p>
          <p>Der Relativsatz <strong>die am Anfang unsicher wirkt</strong> ist eingeschoben und wird mit zwei Kommas abgetrennt.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 4 – Aufzählung</h4>
        <p>Setze die Kommas:</p>
        <p><strong>Der Text wirkt sachlich ruhig klar und überzeugend.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k4')">Lösung anzeigen</button>
        <div id="gym2-k4" class="sf-de-hidden-box">
          <p><strong>Der Text wirkt sachlich, ruhig, klar und überzeugend.</strong></p>
          <p>Bei einer Aufzählung setzt man Kommas. Vor <strong>und</strong> steht normalerweise kein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 5 – Komma vor aber</h4>
        <p>Setze das Komma:</p>
        <p><strong>Die Aussage ist verständlich aber sprachlich ungenau.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k5')">Lösung anzeigen</button>
        <div id="gym2-k5" class="sf-de-hidden-box">
          <p><strong>Die Aussage ist verständlich, aber sprachlich ungenau.</strong></p>
          <p>Vor <strong>aber</strong> steht in solchen Satzverbindungen ein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 6 – Infinitivgruppe mit um zu</h4>
        <p>Setze das Komma:</p>
        <p><strong>Sie liest den Text mehrmals um die Aussage genauer zu verstehen.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k6')">Lösung anzeigen</button>
        <div id="gym2-k6" class="sf-de-hidden-box">
          <p><strong>Sie liest den Text mehrmals, um die Aussage genauer zu verstehen.</strong></p>
          <p>Bei Infinitivgruppen mit <strong>um zu</strong> steht ein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 7 – dass-Satz</h4>
        <p>Setze das Komma:</p>
        <p><strong>Der Erzähler zeigt dass die Figur innerlich unsicher ist.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k7')">Lösung anzeigen</button>
        <div id="gym2-k7" class="sf-de-hidden-box">
          <p><strong>Der Erzähler zeigt, dass die Figur innerlich unsicher ist.</strong></p>
          <p>Vor einem Nebensatz mit <strong>dass</strong> steht ein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 8 – Kein Komma zwischen Subjekt und Prädikat</h4>
        <p>Korrigiere den Satz:</p>
        <p><strong>Der Autor, verwendet viele Wiederholungen.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k8')">Lösung anzeigen</button>
        <div id="gym2-k8" class="sf-de-hidden-box">
          <p><strong>Der Autor verwendet viele Wiederholungen.</strong></p>
          <p>Zwischen Subjekt und Prädikat steht kein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 9 – Eingeschobener Nebensatz</h4>
        <p>Setze die Kommas:</p>
        <p><strong>Der Text obwohl er einfach formuliert ist enthält eine kritische Botschaft.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k9')">Lösung anzeigen</button>
        <div id="gym2-k9" class="sf-de-hidden-box">
          <p><strong>Der Text, obwohl er einfach formuliert ist, enthält eine kritische Botschaft.</strong></p>
          <p>Der Nebensatz ist eingeschoben. Deshalb braucht er vorne und hinten ein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 10 – Zwei Nebensätze</h4>
        <p>Setze die Kommas:</p>
        <p><strong>Wenn man genau liest erkennt man dass die Figur ihre Angst versteckt.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-k10')">Lösung anzeigen</button>
        <div id="gym2-k10" class="sf-de-hidden-box">
          <p><strong>Wenn man genau liest, erkennt man, dass die Figur ihre Angst versteckt.</strong></p>
          <p>Nach dem Nebensatz mit <strong>wenn</strong> steht ein Komma. Vor dem Nebensatz mit <strong>dass</strong> steht ebenfalls ein Komma.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>B. Gross- und Kleinschreibung – 8 Übungen</h3>
      <p>
        Grossgeschrieben werden Nomen und Wörter, die wie Nomen gebraucht werden. Besonders wichtig sind nominalisierte Verben und Adjektive.
      </p>

      <div class="sf-de-task">
        <h4>Übung 11 – Nominalisiertes Verb</h4>
        <p>Korrigiere:</p>
        <p><strong>Beim lesen muss man auf die Wortwahl achten.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g1')">Lösung anzeigen</button>
        <div id="gym2-g1" class="sf-de-hidden-box">
          <p><strong>Beim Lesen muss man auf die Wortwahl achten.</strong></p>
          <p><strong>Lesen</strong> wird grossgeschrieben, weil es nach <strong>beim</strong> wie ein Nomen gebraucht wird.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 12 – Nominalisiertes Adjektiv</h4>
        <p>Korrigiere:</p>
        <p><strong>Der Text zeigt etwas wichtiges.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g2')">Lösung anzeigen</button>
        <div id="gym2-g2" class="sf-de-hidden-box">
          <p><strong>Der Text zeigt etwas Wichtiges.</strong></p>
          <p>Nach <strong>etwas</strong> wird ein nominalisiertes Adjektiv grossgeschrieben.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 13 – Das Gute</h4>
        <p>Korrigiere:</p>
        <p><strong>Das gute an der Argumentation ist ihre klare Struktur.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g3')">Lösung anzeigen</button>
        <div id="gym2-g3" class="sf-de-hidden-box">
          <p><strong>Das Gute an der Argumentation ist ihre klare Struktur.</strong></p>
          <p><strong>Gute</strong> wird grossgeschrieben, weil es nach <strong>das</strong> als Nomen verwendet wird.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 14 – Adjektiv vor Nomen</h4>
        <p>Korrigiere:</p>
        <p><strong>Eine Klare Aussage ist für eine Analyse wichtig.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g4')">Lösung anzeigen</button>
        <div id="gym2-g4" class="sf-de-hidden-box">
          <p><strong>Eine klare Aussage ist für eine Analyse wichtig.</strong></p>
          <p><strong>klare</strong> beschreibt das Nomen <strong>Aussage</strong> und wird deshalb klein geschrieben.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 15 – Zum Schreiben</h4>
        <p>Korrigiere:</p>
        <p><strong>Zum schreiben braucht man Konzentration.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g5')">Lösung anzeigen</button>
        <div id="gym2-g5" class="sf-de-hidden-box">
          <p><strong>Zum Schreiben braucht man Konzentration.</strong></p>
          <p><strong>Schreiben</strong> wird grossgeschrieben, weil es nach <strong>zum</strong> nominalisiert ist.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 16 – Nichts Neues</h4>
        <p>Korrigiere:</p>
        <p><strong>Die Aussage enthält nichts neues.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g6')">Lösung anzeigen</button>
        <div id="gym2-g6" class="sf-de-hidden-box">
          <p><strong>Die Aussage enthält nichts Neues.</strong></p>
          <p>Nach <strong>nichts</strong> wird ein nominalisiertes Adjektiv grossgeschrieben.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 17 – Beim genauen Lesen</h4>
        <p>Korrigiere:</p>
        <p><strong>Beim genauen lesen erkennt man die Absicht des Textes.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g7')">Lösung anzeigen</button>
        <div id="gym2-g7" class="sf-de-hidden-box">
          <p><strong>Beim genauen Lesen erkennt man die Absicht des Textes.</strong></p>
          <p><strong>Lesen</strong> ist nominalisiert. <strong>genauen</strong> bleibt klein, weil es Lesen näher beschreibt.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 18 – Viel Interessantes</h4>
        <p>Korrigiere:</p>
        <p><strong>In der Szene passiert viel interessantes.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-g8')">Lösung anzeigen</button>
        <div id="gym2-g8" class="sf-de-hidden-box">
          <p><strong>In der Szene passiert viel Interessantes.</strong></p>
          <p>Nach <strong>viel</strong> kann ein nominalisiertes Adjektiv stehen. Deshalb wird <strong>Interessantes</strong> grossgeschrieben.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>C. Fälle und Kasus – 8 Übungen</h3>
      <p>
        Viele Sätze klingen falsch, weil Dativ, Akkusativ oder Genitiv verwechselt werden.
        Frage immer: Wer? Wen? Wem? Wessen?
      </p>

      <div class="sf-de-task">
        <h4>Übung 19 – Helfen mit Dativ</h4>
        <p>Korrigiere:</p>
        <p><strong>Ich helfe den Schüler bei der Aufgabe.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f1')">Lösung anzeigen</button>
        <div id="gym2-f1" class="sf-de-hidden-box">
          <p><strong>Ich helfe dem Schüler bei der Aufgabe.</strong></p>
          <p><strong>helfen</strong> verlangt den Dativ: Wem helfe ich? Dem Schüler.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 20 – Fragen mit Akkusativ</h4>
        <p>Korrigiere:</p>
        <p><strong>Die Lehrerin fragt dem Schüler.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f2')">Lösung anzeigen</button>
        <div id="gym2-f2" class="sf-de-hidden-box">
          <p><strong>Die Lehrerin fragt den Schüler.</strong></p>
          <p><strong>fragen</strong> verlangt hier den Akkusativ: Wen fragt sie? Den Schüler.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 21 – Wegen mit Genitiv</h4>
        <p>Korrigiere standardsprachlich:</p>
        <p><strong>Wegen dem Test lernt sie länger.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f3')">Lösung anzeigen</button>
        <div id="gym2-f3" class="sf-de-hidden-box">
          <p><strong>Wegen des Tests lernt sie länger.</strong></p>
          <p>Standardsprachlich steht <strong>wegen</strong> mit Genitiv.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 22 – Dativ nach mit</h4>
        <p>Korrigiere:</p>
        <p><strong>Sie spricht mit den Lehrer.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f4')">Lösung anzeigen</button>
        <div id="gym2-f4" class="sf-de-hidden-box">
          <p><strong>Sie spricht mit dem Lehrer.</strong></p>
          <p><strong>mit</strong> verlangt den Dativ.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 23 – Akkusativ nach für</h4>
        <p>Korrigiere:</p>
        <p><strong>Der Text ist für dem Leser verständlich.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f5')">Lösung anzeigen</button>
        <div id="gym2-f5" class="sf-de-hidden-box">
          <p><strong>Der Text ist für den Leser verständlich.</strong></p>
          <p><strong>für</strong> verlangt den Akkusativ.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 24 – Wechselpräposition Ort</h4>
        <p>Korrigiere:</p>
        <p><strong>Das Heft liegt auf den Tisch.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f6')">Lösung anzeigen</button>
        <div id="gym2-f6" class="sf-de-hidden-box">
          <p><strong>Das Heft liegt auf dem Tisch.</strong></p>
          <p>Bei Ort/Ruhe steht bei Wechselpräpositionen der Dativ: Wo liegt es? Auf dem Tisch.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 25 – Wechselpräposition Richtung</h4>
        <p>Korrigiere:</p>
        <p><strong>Ich lege das Heft auf dem Tisch.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f7')">Lösung anzeigen</button>
        <div id="gym2-f7" class="sf-de-hidden-box">
          <p><strong>Ich lege das Heft auf den Tisch.</strong></p>
          <p>Bei Richtung/Bewegung steht der Akkusativ: Wohin lege ich es? Auf den Tisch.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 26 – Genitiv bei Zugehörigkeit</h4>
        <p>Korrigiere:</p>
        <p><strong>Die Aussage von dem Text ist kritisch.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-f8')">Lösung anzeigen</button>
        <div id="gym2-f8" class="sf-de-hidden-box">
          <p><strong>Die Aussage des Textes ist kritisch.</strong></p>
          <p>In schulischen Texten klingt der Genitiv oft präziser und schriftsprachlicher.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>D. Dass oder das – 6 Übungen</h3>
      <p>
        Der einfachste Test: Wenn du <strong>das</strong> durch <strong>dieses</strong>, <strong>jenes</strong> oder <strong>welches</strong> ersetzen kannst, schreibt man <strong>das</strong>.
        Wenn es einen Nebensatz einleitet, schreibt man meistens <strong>dass</strong>.
      </p>

      <div class="sf-de-task">
        <h4>Übung 27</h4>
        <p>Setze <strong>dass</strong> oder <strong>das</strong> ein:</p>
        <p><strong>Ich denke ___ der Text eine klare Aussage hat.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-d1')">Lösung anzeigen</button>
        <div id="gym2-d1" class="sf-de-hidden-box">
          <p><strong>Ich denke, dass der Text eine klare Aussage hat.</strong></p>
          <p><strong>dass</strong> leitet einen Nebensatz ein.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 28</h4>
        <p>Setze ein:</p>
        <p><strong>Das Argument, ___ sie nennt, ist überzeugend.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-d2')">Lösung anzeigen</button>
        <div id="gym2-d2" class="sf-de-hidden-box">
          <p><strong>Das Argument, das sie nennt, ist überzeugend.</strong></p>
          <p>Hier kann man sagen: <strong>welches sie nennt</strong>. Deshalb schreibt man <strong>das</strong>.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 29</h4>
        <p>Setze ein:</p>
        <p><strong>Es fällt auf ___ die Figur kaum spricht.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-d3')">Lösung anzeigen</button>
        <div id="gym2-d3" class="sf-de-hidden-box">
          <p><strong>Es fällt auf, dass die Figur kaum spricht.</strong></p>
          <p><strong>dass</strong> leitet einen Nebensatz ein. Vor dem Nebensatz steht ein Komma.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 30</h4>
        <p>Setze ein:</p>
        <p><strong>Das Bild, ___ im Gedicht verwendet wird, wirkt düster.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-d4')">Lösung anzeigen</button>
        <div id="gym2-d4" class="sf-de-hidden-box">
          <p><strong>Das Bild, das im Gedicht verwendet wird, wirkt düster.</strong></p>
          <p>Man kann ersetzen: <strong>welches im Gedicht verwendet wird</strong>.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 31</h4>
        <p>Setze ein:</p>
        <p><strong>Der Autor zeigt ___ die Situation gefährlich ist.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-d5')">Lösung anzeigen</button>
        <div id="gym2-d5" class="sf-de-hidden-box">
          <p><strong>Der Autor zeigt, dass die Situation gefährlich ist.</strong></p>
          <p><strong>dass</strong> leitet den Inhalt dessen ein, was gezeigt wird.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 32</h4>
        <p>Setze ein:</p>
        <p><strong>Ich verstehe ___ nicht.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-d6')">Lösung anzeigen</button>
        <div id="gym2-d6" class="sf-de-hidden-box">
          <p><strong>Ich verstehe das nicht.</strong></p>
          <p>Hier steht <strong>das</strong> als Pronomen. Man könnte sagen: <strong>Ich verstehe dieses nicht.</strong></p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>E. Satzbau – 6 Übungen</h3>
      <p>
        Gute Sätze sind nicht möglichst lang, sondern klar. Viele Texte werden besser, wenn du lange Satzketten
        aufteilst und die Reihenfolge sauber machst.
      </p>

      <div class="sf-de-task">
        <h4>Übung 33 – Satz entwirren</h4>
        <p>Verbessere den Satz:</p>
        <p><strong>Der Text der von einem Jugendlichen handelt der sich unverstanden fühlt zeigt viele Probleme.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-s1')">Lösung anzeigen</button>
        <div id="gym2-s1" class="sf-de-hidden-box">
          <p><strong>Der Text handelt von einem Jugendlichen, der sich unverstanden fühlt, und zeigt verschiedene Probleme des Erwachsenwerdens.</strong></p>
          <p>Der Satz ist klarer, weil die Relativsätze sauber abgetrennt und die Aussage genauer formuliert wird.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 34 – Zu langer Satz</h4>
        <p>Verbessere:</p>
        <p><strong>Die Figur ist traurig und sie spricht wenig und man merkt dass sie Probleme hat und der Text zeigt das.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-s2')">Lösung anzeigen</button>
        <div id="gym2-s2" class="sf-de-hidden-box">
          <p><strong>Die Figur wirkt traurig, weil sie nur wenig spricht. Ihre knappen Antworten zeigen, dass sie innerlich belastet ist.</strong></p>
          <p>Die neue Version ist präziser und trennt zwei Gedanken sauber.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 35 – Wortstellung</h4>
        <p>Verbessere:</p>
        <p><strong>Weil sie Angst hat, sie schweigt.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-s3')">Lösung anzeigen</button>
        <div id="gym2-s3" class="sf-de-hidden-box">
          <p><strong>Weil sie Angst hat, schweigt sie.</strong></p>
          <p>Nach einem vorangestellten Nebensatz folgt im Hauptsatz zuerst das konjugierte Verb.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 36 – Wiederholung vermeiden</h4>
        <p>Verbessere:</p>
        <p><strong>Der Text zeigt die Angst der Figur und die Angst der Figur wird durch die Sprache gezeigt.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-s4')">Lösung anzeigen</button>
        <div id="gym2-s4" class="sf-de-hidden-box">
          <p><strong>Der Text verdeutlicht die Angst der Figur vor allem durch die sprachliche Gestaltung.</strong></p>
          <p>Die Wiederholung wird entfernt und die Aussage wird knapper.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 37 – Unklare Bezüge</h4>
        <p>Verbessere:</p>
        <p><strong>Sie sagt zu ihr dass sie traurig ist.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-s5')">Lösung anzeigen</button>
        <div id="gym2-s5" class="sf-de-hidden-box">
          <p><strong>Anna sagt zu Lea, dass sie traurig ist.</strong></p>
          <p>Noch klarer wäre: <strong>Anna sagt zu Lea, dass Anna traurig ist.</strong> oder <strong>Anna sagt zu Lea, dass Lea traurig wirkt.</strong></p>
          <p>Pronomen wie <strong>sie</strong> können unklar sein, wenn mehrere weibliche Figuren vorkommen.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 38 – Präziser Hauptsatz</h4>
        <p>Verbessere:</p>
        <p><strong>Es wird im Text irgendwie gezeigt dass Schule stressig ist.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-s6')">Lösung anzeigen</button>
        <div id="gym2-s6" class="sf-de-hidden-box">
          <p><strong>Der Text zeigt den schulischen Leistungsdruck durch die wiederholte Beschreibung von Müdigkeit, Zeitmangel und Angst vor Fehlern.</strong></p>
          <p>Die Formulierung ist genauer, weil sie benennt, wodurch die Aussage entsteht.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>F. Stil verbessern – 6 Übungen</h3>
      <p>
        Stil bedeutet: Deine Sprache soll zur Aufgabe passen. In einer Analyse brauchst du keine Alltagssprache,
        sondern genaue und sachliche Formulierungen.
      </p>

      <div class="sf-de-task">
        <h4>Übung 39 – Umgangssprache ersetzen</h4>
        <p>Verbessere:</p>
        <p><strong>Die Figur ist voll komisch.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-st1')">Lösung anzeigen</button>
        <div id="gym2-st1" class="sf-de-hidden-box">
          <p><strong>Die Figur wirkt widersprüchlich, weil ihr Verhalten nicht zu ihren Aussagen passt.</strong></p>
          <p><strong>voll komisch</strong> ist umgangssprachlich und ungenau.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 40 – Genauere Wirkung</h4>
        <p>Verbessere:</p>
        <p><strong>Das macht den Text interessanter.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-st2')">Lösung anzeigen</button>
        <div id="gym2-st2" class="sf-de-hidden-box">
          <p><strong>Dadurch wirkt der Text eindringlicher und lenkt die Aufmerksamkeit stärker auf die innere Anspannung der Figur.</strong></p>
          <p><strong>interessanter</strong> ist meistens zu allgemein. Besser ist eine genaue Wirkung.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 41 – Nicht unbelegt Autorabsicht behaupten</h4>
        <p>Verbessere:</p>
        <p><strong>Der Autor will sagen dass Menschen schlecht sind.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-st3')">Lösung anzeigen</button>
        <div id="gym2-st3" class="sf-de-hidden-box">
          <p><strong>Der Text legt nahe, dass menschliches Verhalten unter Druck moralisch fragwürdig werden kann.</strong></p>
          <p>Diese Formulierung ist vorsichtiger und analytischer.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 42 – Ich-Form vermeiden</h4>
        <p>Verbessere:</p>
        <p><strong>Ich finde das Gedicht sehr traurig.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-st4')">Lösung anzeigen</button>
        <div id="gym2-st4" class="sf-de-hidden-box">
          <p><strong>Das Gedicht wirkt melancholisch, weil dunkle Naturbilder und eine ruhige Sprache dominieren.</strong></p>
          <p>In Analysen sollte man nicht nur die eigene Meinung nennen, sondern die Wirkung begründen.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 43 – Präziser Ausdruck</h4>
        <p>Verbessere:</p>
        <p><strong>Die Sprache ist gut.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-st5')">Lösung anzeigen</button>
        <div id="gym2-st5" class="sf-de-hidden-box">
          <p><strong>Die Sprache ist präzise und sachlich, wodurch die Argumentation klar und überzeugend wirkt.</strong></p>
          <p><strong>gut</strong> ist zu allgemein. Sage genauer, was gut ist.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 44 – Analyse statt Nacherzählung</h4>
        <p>Verbessere:</p>
        <p><strong>Dann geht die Figur weg und danach ist sie traurig.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-st6')">Lösung anzeigen</button>
        <div id="gym2-st6" class="sf-de-hidden-box">
          <p><strong>Der Weggang markiert einen Wendepunkt, weil die Figur danach zunehmend isoliert und emotional erschöpft erscheint.</strong></p>
          <p>Die bessere Version erklärt die Bedeutung des Geschehens.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>G. Zeitformen und Analyse-Präsens – 3 Übungen</h3>

      <div class="sf-de-task">
        <h4>Übung 45 – Inhaltsangabe im Präsens</h4>
        <p>Korrigiere:</p>
        <p><strong>In der Geschichte ging die Figur nach Hause und sprach mit ihrer Mutter.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-z1')">Lösung anzeigen</button>
        <div id="gym2-z1" class="sf-de-hidden-box">
          <p><strong>In der Geschichte geht die Figur nach Hause und spricht mit ihrer Mutter.</strong></p>
          <p>Inhaltsangaben schreibt man normalerweise im Präsens.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 46 – Analyse im Präsens</h4>
        <p>Korrigiere:</p>
        <p><strong>Der Autor verwendete eine Metapher und erzeugte dadurch Spannung.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-z2')">Lösung anzeigen</button>
        <div id="gym2-z2" class="sf-de-hidden-box">
          <p><strong>Der Autor verwendet eine Metapher und erzeugt dadurch Spannung.</strong></p>
          <p>Textanalysen schreibt man normalerweise im Präsens.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 47 – Vorzeitigkeit</h4>
        <p>Verbessere:</p>
        <p><strong>Die Figur ist misstrauisch, weil sie früher enttäuscht wird.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-z3')">Lösung anzeigen</button>
        <div id="gym2-z3" class="sf-de-hidden-box">
          <p><strong>Die Figur ist misstrauisch, weil sie früher enttäuscht worden ist.</strong></p>
          <p>Die Enttäuschung liegt vor dem aktuellen Zustand. Deshalb braucht man eine Form der Vorzeitigkeit.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>H. Typische Rechtschreib- und Ausdrucksfehler – 3 Übungen</h3>

      <div class="sf-de-task">
        <h4>Übung 48 – seid oder seit</h4>
        <p>Setze richtig ein:</p>
        <p><strong>___ dem Morgen ___ ihr konzentriert am Arbeiten.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-r1')">Lösung anzeigen</button>
        <div id="gym2-r1" class="sf-de-hidden-box">
          <p><strong>Seit dem Morgen seid ihr konzentriert am Arbeiten.</strong></p>
          <p><strong>seit</strong> bezieht sich auf Zeit. <strong>seid</strong> ist eine Form von <strong>sein</strong>.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 49 – wieder oder wider</h4>
        <p>Setze richtig ein:</p>
        <p><strong>Die Figur versucht ___ aufzustehen, obwohl alles ___ sie spricht.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-r2')">Lösung anzeigen</button>
        <div id="gym2-r2" class="sf-de-hidden-box">
          <p><strong>Die Figur versucht wieder aufzustehen, obwohl alles wider sie spricht.</strong></p>
          <p><strong>wieder</strong> bedeutet nochmals. <strong>wider</strong> bedeutet gegen.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Übung 50 – Standardsprachlich formulieren</h4>
        <p>Verbessere:</p>
        <p><strong>Der Text ist halt so geschrieben dass man merkt es ist traurig.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym2-r3')">Lösung anzeigen</button>
        <div id="gym2-r3" class="sf-de-hidden-box">
          <p><strong>Der Text erzeugt eine traurige Stimmung, weil die Wortwahl von Verlust, Dunkelheit und Einsamkeit geprägt ist.</strong></p>
          <p>Die bessere Version vermeidet Umgangssprache und nennt konkrete sprachliche Hinweise.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>So solltest du mit diesen Übungen lernen</h3>
      <p>
        Lies nicht nur die Lösung. Schreibe zuerst deine eigene Lösung auf. Erst danach öffnest du die Musterlösung.
        Wenn deine Lösung falsch war, schreibst du den korrigierten Satz nochmals sauber ab. Genau dadurch lernst du die Regel.
      </p>

      <div class="sf-de-rule">
        <h4>Die beste Lernmethode</h4>
        <p>
          1. Aufgabe lösen, ohne Lösung anzuschauen.<br>
          2. Lösung öffnen und vergleichen.<br>
          3. Regel in einem Satz erklären.<br>
          4. Den richtigen Satz nochmals abschreiben.<br>
          5. Am nächsten Tag dieselbe Übung nochmals kurz wiederholen.
        </p>
      </div>
    </section>
  `
},

  {
  id: "gym3",
  titel: "GYM3",
  untertitel: "Rhetorische Mittel",
  beschreibung:
    "Eine grosse, klare Liste rhetorischer Mittel mit Erklärung, Beispiel und Wirkung – so, dass man sie in Text- und Gedichtanalysen wirklich verwenden kann.",
  html: `
    <section class="sf-de-section">
      <h2>GYM3 – Rhetorische Mittel</h2>
      <p class="sf-de-lead">
        Rhetorische Mittel bringen dir nur dann etwas, wenn du sie nicht nur auswendig kennst,
        sondern ihre Wirkung erklären kannst. In einer Analyse reicht es nicht zu schreiben:
        „Das ist eine Metapher.“ Du musst zeigen, was die Formulierung im Text bewirkt.
      </p>

      <div class="sf-de-rule">
        <h4>Grundformel für jede Analyse</h4>
        <p>
          <strong>1. Stelle nennen:</strong> Wo steht das sprachliche Mittel?<br>
          <strong>2. Mittel benennen:</strong> Was ist es?<br>
          <strong>3. Wirkung erklären:</strong> Was macht es mit der Aussage, Stimmung oder Figur?
        </p>
        <p>
          Beispiel: Die Metapher <strong>„auf dünnem Eis stehen“</strong> verdeutlicht,
          dass sich eine Person in einer unsicheren oder gefährlichen Lage befindet.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>1. Bildhafte Mittel</h3>
      <p>
        Bildhafte Mittel machen Sprache anschaulich. Sie übersetzen eine abstrakte Aussage in ein Bild.
        Genau deshalb sind sie in Gedichten, Reden, Kommentaren und literarischen Texten besonders wichtig.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Metapher</td>
              <td>Ein Ausdruck wird bildlich gebraucht, ohne Vergleichswort.</td>
              <td>Er steht auf dünnem Eis.</td>
              <td>Die Situation wirkt unsicher, gefährlich oder instabil.</td>
            </tr>
            <tr>
              <td>Vergleich</td>
              <td>Zwei Bereiche werden mit wie oder als verbunden.</td>
              <td>Sie schweigt wie eine Mauer.</td>
              <td>Eine Eigenschaft wird anschaulich und leicht verständlich gemacht.</td>
            </tr>
            <tr>
              <td>Personifikation</td>
              <td>Etwas Nicht-Menschliches erhält menschliche Eigenschaften.</td>
              <td>Die Angst kroch durch den Raum.</td>
              <td>Ein Gefühl oder Zustand wirkt lebendig, greifbar oder bedrohlich.</td>
            </tr>
            <tr>
              <td>Symbol</td>
              <td>Ein konkreter Gegenstand steht für eine tiefere Bedeutung.</td>
              <td>Eine zerbrochene Uhr steht für Stillstand.</td>
              <td>Ein abstrakter Gedanke wird durch einen Gegenstand dargestellt.</td>
            </tr>
            <tr>
              <td>Allegorie</td>
              <td>Ein ganzer Gedanke wird durch ein ausgebautes Bild dargestellt.</td>
              <td>Ein Schiff im Sturm als Bild für einen Staat in Krise.</td>
              <td>Komplexe Zusammenhänge werden bildlich verständlich gemacht.</td>
            </tr>
            <tr>
              <td>Chiffre</td>
              <td>Ein rätselhaftes Bild, das nicht eindeutig auflösbar ist.</td>
              <td>Schwarze Milch der Frühe.</td>
              <td>Die Aussage wirkt verdichtet, fremd, vieldeutig oder verstörend.</td>
            </tr>
            <tr>
              <td>Synästhesie</td>
              <td>Verschiedene Sinneseindrücke werden vermischt.</td>
              <td>Ein grelles Schweigen.</td>
              <td>Die Wahrnehmung wirkt intensiv, ungewöhnlich oder poetisch.</td>
            </tr>
            <tr>
              <td>Metonymie</td>
              <td>Ein Begriff wird durch einen sachlich nahen Begriff ersetzt.</td>
              <td>Das Weisse Haus entscheidet.</td>
              <td>Die Aussage wird verkürzt und prägnanter.</td>
            </tr>
            <tr>
              <td>Synekdoche</td>
              <td>Ein Teil steht für das Ganze oder das Ganze für einen Teil.</td>
              <td>Alle Hände an Deck.</td>
              <td>Die Aussage wird verdichtet und bildlicher.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>So formulierst du es in einer Analyse</h4>
        <p>
          <strong>Schwach:</strong> Hier gibt es eine Metapher.
        </p>
        <p>
          <strong>Besser:</strong> Die Metapher <strong>„auf dünnem Eis stehen“</strong>
          macht die Unsicherheit der Figur anschaulich. Sie zeigt, dass die Figur sich in einer Lage befindet,
          in der bereits ein kleiner Fehler schwerwiegende Folgen haben kann.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>2. Wiederholungsfiguren</h3>
      <p>
        Wiederholungen erzeugen Nachdruck. Sie sind besonders wichtig in Reden, Gedichten und dramatischen Texten.
        Meistens zeigen sie, dass ein Gedanke besonders wichtig ist.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wiederholung</td>
              <td>Ein Wort oder Ausdruck erscheint mehrfach.</td>
              <td>Nie wieder. Nie wieder Krieg.</td>
              <td>Die Aussage wirkt eindringlicher und bleibt besser im Gedächtnis.</td>
            </tr>
            <tr>
              <td>Anapher</td>
              <td>Wiederholung am Anfang mehrerer Sätze oder Verse.</td>
              <td>Wir warten. Wir hoffen. Wir kämpfen.</td>
              <td>Erzeugt Rhythmus, Nachdruck und Zusammenhalt.</td>
            </tr>
            <tr>
              <td>Epipher</td>
              <td>Wiederholung am Ende mehrerer Sätze oder Verse.</td>
              <td>Ich will Freiheit. Du willst Freiheit. Wir alle wollen Freiheit.</td>
              <td>Der Schlussgedanke wird besonders betont.</td>
            </tr>
            <tr>
              <td>Symploke</td>
              <td>Kombination aus Anapher und Epipher.</td>
              <td>Was ist der Mensch? Was kann der Mensch?</td>
              <td>Die Aussage wirkt stark strukturiert und rhetorisch zugespitzt.</td>
            </tr>
            <tr>
              <td>Parallelismus</td>
              <td>Gleicher oder sehr ähnlicher Satzbau.</td>
              <td>Heisse Tage, kalte Nächte.</td>
              <td>Die Aussage wirkt geordnet, rhythmisch und einprägsam.</td>
            </tr>
            <tr>
              <td>Chiasmus</td>
              <td>Überkreuzstellung von Satzteilen.</td>
              <td>Ich schlafe am Tag, nachts wache ich.</td>
              <td>Erzeugt eine kunstvolle, oft gegensätzliche Struktur.</td>
            </tr>
            <tr>
              <td>Refrain</td>
              <td>Wiederkehrender Vers oder Satzteil.</td>
              <td>Und immer wieder fällt der Regen.</td>
              <td>Verstärkt ein zentrales Motiv oder eine Stimmung.</td>
            </tr>
            <tr>
              <td>Leitmotiv</td>
              <td>Wiederkehrendes Motiv, Bild oder Thema.</td>
              <td>Ein Fenster erscheint immer wieder als Bild für Sehnsucht.</td>
              <td>Verbindet verschiedene Textstellen und vertieft die Bedeutung.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Die Anapher <strong>„Wir warten. Wir hoffen. Wir kämpfen.“</strong> erzeugt einen klaren Rhythmus.
          Durch die Wiederholung des Pronomens <strong>„wir“</strong> entsteht ein Gemeinschaftsgefühl.
          Gleichzeitig steigert sich die Aussage von passivem Warten zu aktivem Kämpfen.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>3. Gegensätze und Steigerungen</h3>
      <p>
        Gegensätze und Steigerungen helfen, Spannungen sichtbar zu machen.
        Sie zeigen oft Konflikte, innere Widersprüche oder eine dramatische Entwicklung.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Antithese</td>
              <td>Gegensätzliche Begriffe oder Gedanken werden gegenübergestellt.</td>
              <td>Er besitzt alles und hat doch nichts.</td>
              <td>Ein innerer oder äusserer Widerspruch wird deutlich.</td>
            </tr>
            <tr>
              <td>Oxymoron</td>
              <td>Zwei widersprüchliche Begriffe stehen direkt zusammen.</td>
              <td>beredtes Schweigen</td>
              <td>Die Aussage wirkt spannungsvoll, paradox oder tiefgründig.</td>
            </tr>
            <tr>
              <td>Paradoxon</td>
              <td>Scheinbar widersprüchliche Aussage mit tieferem Sinn.</td>
              <td>Weniger ist mehr.</td>
              <td>Regt zum Nachdenken an und bricht Erwartungen.</td>
            </tr>
            <tr>
              <td>Klimax</td>
              <td>Steigerung von schwächer zu stärker.</td>
              <td>Ich kam, sah und siegte.</td>
              <td>Die Aussage wird intensiver und dramatischer.</td>
            </tr>
            <tr>
              <td>Antiklimax</td>
              <td>Abfall von stärker zu schwächer.</td>
              <td>Er verlor sein Haus, sein Geld, seinen Stift.</td>
              <td>Kann Enttäuschung, Ironie oder Lächerlichkeit erzeugen.</td>
            </tr>
            <tr>
              <td>Kontrast</td>
              <td>Zwei unterschiedliche Bereiche werden deutlich gegenübergestellt.</td>
              <td>Die helle Stadt und der dunkle Wald.</td>
              <td>Unterschiede werden sichtbar und oft symbolisch aufgeladen.</td>
            </tr>
            <tr>
              <td>Ironie</td>
              <td>Das Gegenteil des Gemeinten wird gesagt.</td>
              <td>Das hast du ja grossartig gemacht. nach einem Fehler</td>
              <td>Kann Kritik, Spott oder Distanz ausdrücken.</td>
            </tr>
            <tr>
              <td>Sarkasmus</td>
              <td>Beissende, verletzende Form von Ironie.</td>
              <td>Natürlich, du bist wie immer perfekt vorbereitet.</td>
              <td>Wirkt scharf, abwertend oder verletzend.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Die Antithese <strong>„Er besitzt alles und hat doch nichts“</strong> stellt äusseren Besitz und innere Leere gegenüber.
          Dadurch wird deutlich, dass materieller Erfolg nicht mit seelischer Erfüllung gleichgesetzt werden kann.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>4. Übertreibung, Abschwächung und Auslassung</h3>
      <p>
        Diese Mittel verändern die Stärke einer Aussage. Sie können etwas dramatisieren,
        verharmlosen, höflicher machen oder bewusst offenlassen.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hyperbel</td>
              <td>Starke Übertreibung.</td>
              <td>Ich habe dir das tausendmal gesagt.</td>
              <td>Verstärkt eine Aussage emotional oder dramatisch.</td>
            </tr>
            <tr>
              <td>Litotes</td>
              <td>Abschwächung durch Verneinung des Gegenteils.</td>
              <td>Das ist nicht schlecht.</td>
              <td>Wirkt zurückhaltend, ironisch oder vorsichtig.</td>
            </tr>
            <tr>
              <td>Euphemismus</td>
              <td>Beschönigende Formulierung.</td>
              <td>entschlafen statt sterben</td>
              <td>Eine harte Aussage wird milder oder angenehmer gemacht.</td>
            </tr>
            <tr>
              <td>Ellipse</td>
              <td>Unvollständiger Satz, bei dem etwas ausgelassen wird.</td>
              <td>Je schneller, desto besser.</td>
              <td>Die Aussage wirkt knapp, direkt oder dynamisch.</td>
            </tr>
            <tr>
              <td>Aposiopese</td>
              <td>Ein Satz wird abgebrochen.</td>
              <td>Wenn du das noch einmal machst...</td>
              <td>Erzeugt Spannung, Drohung oder emotionale Überforderung.</td>
            </tr>
            <tr>
              <td>Pleonasmus</td>
              <td>Überflüssige Dopplung ähnlicher Bedeutung.</td>
              <td>weisser Schimmel</td>
              <td>Kann unbeabsichtigt falsch wirken oder bewusst verstärken.</td>
            </tr>
            <tr>
              <td>Tautologie</td>
              <td>Gleiche Bedeutung wird mit anderen Worten wiederholt.</td>
              <td>immer und ewig</td>
              <td>Verstärkt eine Aussage oder wirkt formelhaft.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Die Hyperbel <strong>„Ich habe dir das tausendmal gesagt“</strong> übertreibt die tatsächliche Anzahl.
          Dadurch wird nicht eine genaue Zahl genannt, sondern die Verärgerung und Ungeduld der sprechenden Person betont.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>5. Satzfiguren und rhetorische Fragen</h3>
      <p>
        Satzfiguren verändern den Aufbau eines Satzes. Sie sind besonders wichtig, wenn ein Text appelliert,
        provoziert oder besonders eindringlich wirken soll.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rhetorische Frage</td>
              <td>Frage, auf die keine echte Antwort erwartet wird.</td>
              <td>Wollen wir wirklich so weiterleben?</td>
              <td>Spricht Leser direkt an und erzeugt Druck oder Nachdenklichkeit.</td>
            </tr>
            <tr>
              <td>Ausruf</td>
              <td>Emotional verstärkte Aussage.</td>
              <td>Was für ein Tag!</td>
              <td>Wirkt emotional, spontan oder dramatisch.</td>
            </tr>
            <tr>
              <td>Inversion</td>
              <td>Ungewöhnliche Umstellung der normalen Wortfolge.</td>
              <td>Dunkel war die Nacht.</td>
              <td>Hebt bestimmte Wörter hervor und wirkt poetisch oder betont.</td>
            </tr>
            <tr>
              <td>Parenthese</td>
              <td>Einschub in einen Satz.</td>
              <td>Der Text zeigt – und das ist entscheidend – die innere Unsicherheit.</td>
              <td>Ein Gedanke wird nachträglich ergänzt oder hervorgehoben.</td>
            </tr>
            <tr>
              <td>Asyndeton</td>
              <td>Reihung ohne Bindewörter.</td>
              <td>Er kam, sah, siegte.</td>
              <td>Wirkt schnell, knapp, entschlossen oder dramatisch.</td>
            </tr>
            <tr>
              <td>Polysyndeton</td>
              <td>Viele Bindewörter werden wiederholt.</td>
              <td>Und es regnete und es stürmte und es wurde dunkel.</td>
              <td>Wirkt schwer, langsam, aufzählend oder überwältigend.</td>
            </tr>
            <tr>
              <td>Imperativ</td>
              <td>Befehlsform.</td>
              <td>Hört endlich zu!</td>
              <td>Wirkt auffordernd, direkt oder autoritär.</td>
            </tr>
            <tr>
              <td>Exclamatio</td>
              <td>Rhetorischer Ausruf.</td>
              <td>Welch ein Unglück!</td>
              <td>Verstärkt Emotionalität oder Betroffenheit.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Die rhetorische Frage <strong>„Wollen wir wirklich so weiterleben?“</strong> richtet sich direkt an die Leserinnen und Leser.
          Sie zwingt sie, die eigene Haltung zu überprüfen, und verstärkt dadurch den appellativen Charakter des Textes.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>6. Klangliche Mittel</h3>
      <p>
        Klangliche Mittel sind vor allem in Gedichten wichtig. Sie beeinflussen, wie ein Text klingt:
        weich, hart, ruhig, aggressiv, fliessend oder stockend.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alliteration</td>
              <td>Mehrere Wörter beginnen mit demselben Laut.</td>
              <td>Milch macht müde Männer munter.</td>
              <td>Wirkt einprägsam, rhythmisch oder werbend.</td>
            </tr>
            <tr>
              <td>Assonanz</td>
              <td>Gleiche oder ähnliche Vokale wiederholen sich.</td>
              <td>Der See steht schwer und leer.</td>
              <td>Erzeugt Klangwirkung und verbindet Wörter atmosphärisch.</td>
            </tr>
            <tr>
              <td>Lautmalerei / Onomatopoesie</td>
              <td>Ein Wort ahmt ein Geräusch nach.</td>
              <td>Es knallt, zischt und rauscht.</td>
              <td>Der Text wirkt sinnlicher und unmittelbarer.</td>
            </tr>
            <tr>
              <td>Reim</td>
              <td>Gleicher oder ähnlicher Klang am Versende.</td>
              <td>Haus – Maus</td>
              <td>Erzeugt Ordnung, Rhythmus oder Geschlossenheit.</td>
            </tr>
            <tr>
              <td>Innenreim</td>
              <td>Reim innerhalb eines Verses.</td>
              <td>Er rennt und kennt keine Angst.</td>
              <td>Verstärkt den Rhythmus innerhalb der Zeile.</td>
            </tr>
            <tr>
              <td>Enjambement</td>
              <td>Satz läuft über das Versende hinaus.</td>
              <td>Ich ging hinaus / in die kalte Nacht.</td>
              <td>Der Lesefluss wird beschleunigt oder Spannung entsteht.</td>
            </tr>
            <tr>
              <td>Zäsur</td>
              <td>Deutlicher Einschnitt im Vers.</td>
              <td>Ich ging hinaus – und alles schwieg.</td>
              <td>Erzeugt Pause, Betonung oder Nachdenklichkeit.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Die Alliteration <strong>„schwer und still“</strong> verbindet die beiden Begriffe klanglich miteinander.
          Dadurch wird die ruhige, bedrückende Stimmung des Gedichts verstärkt.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>7. Stilmittel der Wortwahl</h3>
      <p>
        Nicht nur einzelne rhetorische Figuren sind wichtig. Auch die Wortwahl insgesamt kann sachlich,
        emotional, abwertend, gehoben, umgangssprachlich oder aggressiv wirken.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel / Begriff</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wertende Wortwahl</td>
              <td>Wörter enthalten bereits eine Bewertung.</td>
              <td>rücksichtslos, mutig, lächerlich</td>
              <td>Lenkt die Haltung der Leserinnen und Leser.</td>
            </tr>
            <tr>
              <td>Abwertende Wortwahl</td>
              <td>Wörter stellen etwas negativ dar.</td>
              <td>Geschwätz, Hetze, Versagen</td>
              <td>Erzeugt Kritik, Distanz oder Ablehnung.</td>
            </tr>
            <tr>
              <td>Aufwertende Wortwahl</td>
              <td>Wörter stellen etwas positiv dar.</td>
              <td>mutig, verantwortungsvoll, wegweisend</td>
              <td>Erzeugt Zustimmung oder Sympathie.</td>
            </tr>
            <tr>
              <td>Fachsprache</td>
              <td>Begriffe aus einem bestimmten Fachgebiet.</td>
              <td>Analyse, Argumentationsstruktur, Symbolik</td>
              <td>Wirkt sachlich, genau und kompetent.</td>
            </tr>
            <tr>
              <td>Umgangssprache</td>
              <td>Alltagssprachliche Ausdrücke.</td>
              <td>krass, voll, mega, halt</td>
              <td>Wirkt locker, mündlich oder unpräzise.</td>
            </tr>
            <tr>
              <td>Neologismus</td>
              <td>Wortneuschöpfung.</td>
              <td>Gedankensturm, Bildschirmmensch</td>
              <td>Kann kreativ, modern oder irritierend wirken.</td>
            </tr>
            <tr>
              <td>Archaismus</td>
              <td>Veraltetes Wort.</td>
              <td>hold, Antlitz, Gemach</td>
              <td>Wirkt altertümlich, feierlich oder distanziert.</td>
            </tr>
            <tr>
              <td>Anglizismus</td>
              <td>Aus dem Englischen übernommener Ausdruck.</td>
              <td>Update, Lifestyle, Feedback</td>
              <td>Kann modern, global oder werblich wirken.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Die abwertende Wortwahl <strong>„Geschwätz“</strong> zeigt, dass der Sprecher die Aussage der anderen Figur nicht ernst nimmt.
          Dadurch entsteht eine herablassende und konfliktreiche Gesprächssituation.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>8. Sprachliche Mittel in Argumentationen und Reden</h3>
      <p>
        In Reden und Kommentaren geht es oft darum, Leser oder Zuhörer zu überzeugen.
        Deshalb sind direkte Anrede, Wiederholungen, Fragen und starke Wertungen besonders wichtig.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Mittel</th>
              <th>Erklärung</th>
              <th>Beispiel</th>
              <th>Wirkung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Direkte Anrede</td>
              <td>Leser oder Zuhörer werden direkt angesprochen.</td>
              <td>Stellen Sie sich vor...</td>
              <td>Erzeugt Nähe und bindet das Publikum ein.</td>
            </tr>
            <tr>
              <td>Appell</td>
              <td>Aufforderung zum Denken oder Handeln.</td>
              <td>Wir müssen jetzt handeln.</td>
              <td>Wirkt aktivierend und handlungsorientiert.</td>
            </tr>
            <tr>
              <td>Wir-Form</td>
              <td>Der Sprecher schliesst sich mit dem Publikum zusammen.</td>
              <td>Wir tragen Verantwortung.</td>
              <td>Erzeugt Gemeinschaftsgefühl und Verantwortung.</td>
            </tr>
            <tr>
              <td>These</td>
              <td>Klare Behauptung.</td>
              <td>Hausaufgaben sollten reduziert werden.</td>
              <td>Gibt der Argumentation eine klare Richtung.</td>
            </tr>
            <tr>
              <td>Beispiel</td>
              <td>Konkreter Fall zur Veranschaulichung.</td>
              <td>Viele Jugendliche schlafen weniger als sieben Stunden.</td>
              <td>Macht eine Aussage nachvollziehbarer.</td>
            </tr>
            <tr>
              <td>Gegenüberstellung</td>
              <td>Zwei Positionen werden verglichen.</td>
              <td>Während die einen profitieren, geraten andere unter Druck.</td>
              <td>Macht Unterschiede und Konflikte sichtbar.</td>
            </tr>
            <tr>
              <td>Emotionalisierung</td>
              <td>Gefühle werden gezielt angesprochen.</td>
              <td>Niemand sollte mit Angst zur Schule gehen.</td>
              <td>Erzeugt Betroffenheit und Zustimmung.</td>
            </tr>
            <tr>
              <td>Autoritätsargument</td>
              <td>Berufung auf Experten oder Institutionen.</td>
              <td>Fachleute weisen darauf hin, dass...</td>
              <td>Kann die Glaubwürdigkeit einer Aussage stärken.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Die Wir-Form <strong>„Wir tragen Verantwortung“</strong> bindet das Publikum direkt ein.
          Der Sprecher stellt das Problem dadurch nicht als fremdes Thema dar, sondern als gemeinsame Aufgabe.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>9. Sehr nützliche Formulierungen für Analysen</h3>
      <p>
        Diese Sätze kannst du fast direkt in Textanalysen und Gedichtanalysen verwenden.
        Wichtig ist nur, dass du sie mit einem konkreten Beispiel aus dem Text verbindest.
      </p>

      <div class="sf-de-rule">
        <h4>Wenn du ein sprachliches Mittel benennst</h4>
        <p>
          Der Text verwendet eine Metapher, um ... zu verdeutlichen.<br>
          Die Wiederholung von ... verstärkt ...<br>
          Die rhetorische Frage richtet sich direkt an die Leserinnen und Leser.<br>
          Die Personifikation lässt ... lebendig und bedrohlich erscheinen.<br>
          Der Vergleich macht ... anschaulich.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Wenn du die Wirkung erklärst</h4>
        <p>
          Dadurch wirkt die Aussage eindringlicher.<br>
          Dadurch entsteht eine bedrohliche Stimmung.<br>
          Die Formulierung lenkt die Aufmerksamkeit auf ...<br>
          Die Wortwahl zeigt, dass ...<br>
          Die sprachliche Gestaltung verstärkt den Eindruck von ...
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Wenn du vorsichtig deuten willst</h4>
        <p>
          Dies legt nahe, dass ...<br>
          Die Formulierung kann als Hinweis auf ... verstanden werden.<br>
          Daraus lässt sich schliessen, dass ...<br>
          Im Zusammenhang mit ... wirkt die Stelle ...<br>
          Die Stelle deutet darauf hin, dass ...
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Wenn du nicht künstlich klingen willst</h4>
        <p>
          Schreib nicht: <strong>Das Stilmittel macht den Text schöner.</strong><br>
          Schreib besser: <strong>Die Metapher macht die Unsicherheit der Figur anschaulich.</strong>
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>10. Mini-Training: Rhetorische Mittel erkennen</h3>
      <p>
        Versuche zuerst selbst, das Mittel zu erkennen. Danach öffnest du die Lösung.
      </p>

      <div class="sf-de-task">
        <h4>Aufgabe 1</h4>
        <p><strong>Die Hoffnung klopfte leise an die Tür.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l1')">Lösung anzeigen</button>
        <div id="gym3-l1" class="sf-de-hidden-box">
          <p><strong>Personifikation.</strong></p>
          <p>Die Hoffnung wird wie ein Mensch dargestellt, der an eine Tür klopfen kann. Dadurch wirkt das abstrakte Gefühl lebendig und vorsichtig.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 2</h4>
        <p><strong>Er kämpfte wie ein Löwe.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l2')">Lösung anzeigen</button>
        <div id="gym3-l2" class="sf-de-hidden-box">
          <p><strong>Vergleich.</strong></p>
          <p>Das Wort <strong>wie</strong> zeigt den Vergleich. Die Person wirkt mutig, stark und entschlossen.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 3</h4>
        <p><strong>Ein Meer aus Stimmen erfüllte den Platz.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l3')">Lösung anzeigen</button>
        <div id="gym3-l3" class="sf-de-hidden-box">
          <p><strong>Metapher.</strong></p>
          <p>Die Stimmen werden als Meer dargestellt. Dadurch wirkt die Menge gross, mächtig und kaum überschaubar.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 4</h4>
        <p><strong>Wir fordern Gerechtigkeit. Wir fordern Verantwortung. Wir fordern Veränderung.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l4')">Lösung anzeigen</button>
        <div id="gym3-l4" class="sf-de-hidden-box">
          <p><strong>Anapher und Parallelismus.</strong></p>
          <p>Die Wiederholung von <strong>Wir fordern</strong> am Satzanfang ist eine Anapher. Der ähnliche Satzbau erzeugt Nachdruck und Rhythmus.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 5</h4>
        <p><strong>Er hat alles gewonnen und doch alles verloren.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l5')">Lösung anzeigen</button>
        <div id="gym3-l5" class="sf-de-hidden-box">
          <p><strong>Antithese / Paradoxon.</strong></p>
          <p>Gewinnen und Verlieren stehen im Gegensatz. Die Aussage zeigt einen Widerspruch zwischen äusserem Erfolg und innerem Verlust.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 6</h4>
        <p><strong>Das hast du ja grossartig gemacht.</strong> nach einem klaren Fehler</p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l6')">Lösung anzeigen</button>
        <div id="gym3-l6" class="sf-de-hidden-box">
          <p><strong>Ironie.</strong></p>
          <p>Gemeint ist das Gegenteil des Gesagten. Die Aussage kritisiert den Fehler indirekt.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 7</h4>
        <p><strong>Ich habe dir das tausendmal erklärt.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l7')">Lösung anzeigen</button>
        <div id="gym3-l7" class="sf-de-hidden-box">
          <p><strong>Hyperbel.</strong></p>
          <p>Die Zahl ist übertrieben. Dadurch wird Ungeduld oder Ärger verstärkt.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 8</h4>
        <p><strong>Wollen wir wirklich weiter schweigen?</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l8')">Lösung anzeigen</button>
        <div id="gym3-l8" class="sf-de-hidden-box">
          <p><strong>Rhetorische Frage.</strong></p>
          <p>Die Frage erwartet keine echte Antwort. Sie fordert indirekt zum Handeln auf.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 9</h4>
        <p><strong>Leise lachte das Licht.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l9')">Lösung anzeigen</button>
        <div id="gym3-l9" class="sf-de-hidden-box">
          <p><strong>Alliteration und Personifikation.</strong></p>
          <p>Die Wörter beginnen mit ähnlichem Laut. Gleichzeitig wird das Licht vermenschlicht, weil es lachen kann.</p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 10</h4>
        <p><strong>Der Regen fiel und fiel und fiel.</strong></p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym3-l10')">Lösung anzeigen</button>
        <div id="gym3-l10" class="sf-de-hidden-box">
          <p><strong>Wiederholung / Polysyndeton.</strong></p>
          <p>Die Wiederholung verstärkt den Eindruck von Dauer. Durch das wiederholte <strong>und</strong> wirkt die Situation langgezogen und belastend.</p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>11. Das Wichtigste für Prüfungen</h3>
      <div class="sf-de-rule">
        <h4>Was Lehrpersonen wirklich sehen wollen</h4>
        <p>
          Nicht: <strong>„Es hat eine Metapher.“</strong><br>
          Sondern: <strong>„Die Metapher zeigt, dass die Figur sich in einer unsicheren Lage befindet.“</strong>
        </p>
        <p>
          Nicht: <strong>„Die Wiederholung macht es spannender.“</strong><br>
          Sondern: <strong>„Die Wiederholung verstärkt den Druck und zeigt, dass der Gedanke die Figur nicht loslässt.“</strong>
        </p>
        <p>
          Nicht: <strong>„Die rhetorische Frage ist interessant.“</strong><br>
          Sondern: <strong>„Die rhetorische Frage spricht die Leser direkt an und macht sie moralisch mitverantwortlich.“</strong>
        </p>
      </div>
    </section>
  `
},

  {
  id: "gym4",
  titel: "GYM4",
  untertitel: "Erörterung, Textanalyse und Gedichtanalyse",
  beschreibung:
    "Sehr konkrete Anleitung, wie man Erörterungen, Textanalysen und Gedichtanalysen schreibt: Aufbau, Satzanfänge, Zitieren, Absätze und Formulierungen.",
  html: `
    <section class="sf-de-section">
      <h2>GYM4 – Erörterung, Textanalyse und Gedichtanalyse</h2>
      <p class="sf-de-lead">
        In GYM4 geht es nicht mehr darum, einzelne Begriffe zu kennen. Du musst ganze Texte schreiben können.
        Entscheidend ist: Du brauchst einen klaren Aufbau, gute Übergänge, genaue Formulierungen und Belege.
        Diese Seite zeigt dir deshalb ganz praktisch, wie du eine Erörterung, eine Textanalyse und eine Gedichtanalyse aufbaust.
      </p>

      <div class="sf-de-rule">
        <h4>Grundregel für gute Deutschaufsätze</h4>
        <p>
          Ein guter Aufsatz besteht nicht aus schönen Sätzen, sondern aus klaren Gedanken.
          Jeder Absatz muss eine Aufgabe erfüllen: erklären, belegen, analysieren, abwägen oder zusammenfassen.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>1. Erörterung – Was ist das?</h3>
      <p>
        Eine Erörterung ist ein argumentativer Text. Du bekommst eine Streitfrage und musst dazu eine begründete Position entwickeln.
        Es geht nicht darum, einfach deine Meinung aufzuschreiben. Du musst zeigen, warum deine Meinung überzeugend ist.
      </p>

      <div class="sf-de-rule">
        <h4>Typische Streitfragen</h4>
        <p>
          Sollte die Schule später beginnen?<br>
          Sollten Hausaufgaben abgeschafft werden?<br>
          Sollte die Handynutzung an Schulen stärker eingeschränkt werden?<br>
          Ist Lesen in Zeiten von Social Media noch wichtig?<br>
          Sollte man Prüfungen durch Projekte ersetzen?
        </p>
      </div>

      <div class="sf-de-compare">
        <div>
          <h4>Schwach</h4>
          <p>
            Ich finde, Handys sollten erlaubt sein, weil alle eins haben und es praktisch ist.
          </p>
        </div>
        <div>
          <h4>Besser</h4>
          <p>
            Smartphones können im Unterricht sinnvoll sein, wenn sie gezielt als Lernwerkzeug eingesetzt werden.
            Sie ermöglichen schnelle Recherche, digitale Zusammenarbeit und den Zugriff auf Lernplattformen.
            Gleichzeitig braucht es klare Regeln, damit sie nicht zur Ablenkung werden.
          </p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>2. Lineare und dialektische Erörterung</h3>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Form</th>
              <th>Was bedeutet das?</th>
              <th>Wann benutzt man sie?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lineare Erörterung</td>
              <td>Du argumentierst hauptsächlich in eine Richtung.</td>
              <td>Wenn die Frage nicht ausdrücklich Pro und Contra verlangt.</td>
            </tr>
            <tr>
              <td>Dialektische Erörterung</td>
              <td>Du stellst Pro- und Contra-Argumente gegenüber.</td>
              <td>Wenn eine Streitfrage zwei Seiten hat und du abwägen sollst.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-rule">
        <h4>Merke</h4>
        <p>
          In der Schule ist meistens die dialektische Erörterung wichtiger, weil du zeigen musst,
          dass du beide Seiten verstanden hast und trotzdem zu einem eigenen Urteil kommst.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>3. Aufbau einer dialektischen Erörterung</h3>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Teil</th>
              <th>Was gehört hinein?</th>
              <th>Beispielformulierung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Einleitung</td>
              <td>Thema einführen und Streitfrage nennen.</td>
              <td>Die Frage, ob ..., wird heute zunehmend diskutiert.</td>
            </tr>
            <tr>
              <td>Hauptteil Contra</td>
              <td>Argumente gegen deine spätere Position.</td>
              <td>Gegen diese Forderung spricht zunächst, dass ...</td>
            </tr>
            <tr>
              <td>Überleitung</td>
              <td>Zur anderen Seite wechseln.</td>
              <td>Dennoch gibt es gewichtige Gründe, die für ... sprechen.</td>
            </tr>
            <tr>
              <td>Hauptteil Pro</td>
              <td>Argumente für deine Position, meistens stärker als Contra.</td>
              <td>Besonders überzeugend ist das Argument, dass ...</td>
            </tr>
            <tr>
              <td>Schluss</td>
              <td>Abwägen und klare Antwort geben.</td>
              <td>Insgesamt überwiegen die Argumente für ..., weil ...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-rule">
        <h4>Reihenfolge bei der dialektischen Erörterung</h4>
        <p>
          Wenn du am Schluss dafür bist, beginnst du meistens mit den Gegenargumenten und endest mit den Pro-Argumenten.
          So bleibt deine eigene Position stärker im Gedächtnis.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>4. Ein vollständiges Argument schreiben</h3>
      <p>
        Viele Schüler schreiben nur Behauptungen. Ein gutes Argument besteht aber aus drei Teilen:
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Teil</th>
              <th>Funktion</th>
              <th>Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Behauptung</td>
              <td>Was ist dein Punkt?</td>
              <td>Ein späterer Schulbeginn kann die Konzentration verbessern.</td>
            </tr>
            <tr>
              <td>Begründung</td>
              <td>Warum ist das plausibel?</td>
              <td>Viele Jugendliche sind früh am Morgen noch wenig leistungsfähig.</td>
            </tr>
            <tr>
              <td>Beispiel</td>
              <td>Woran sieht man das konkret?</td>
              <td>Wenn Prüfungen sehr früh stattfinden, fällt es vielen schwerer, konzentriert zu arbeiten.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Guter Argumentationsabsatz</h4>
        <p>
          Ein späterer Schulbeginn könnte die Konzentration vieler Schülerinnen und Schüler verbessern.
          Gerade Jugendliche sind früh am Morgen häufig noch müde und weniger aufnahmefähig.
          Wenn wichtige Prüfungen bereits in der ersten Lektion stattfinden, kann dies dazu führen,
          dass nicht nur Wissen, sondern auch der Schlafrhythmus über die Leistung entscheidet.
          Deshalb wäre ein moderat späterer Beginn aus pädagogischer Sicht sinnvoll.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>5. Gute Satzanfänge für Erörterungen</h3>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Funktion</th>
              <th>Satzanfänge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ein Argument beginnen</td>
              <td>Ein wichtiger Grund ist, dass ...<br>Für diese Position spricht zunächst, dass ...<br>Ein weiteres Argument besteht darin, dass ...</td>
            </tr>
            <tr>
              <td>Begründen</td>
              <td>Dies lässt sich damit erklären, dass ...<br>Der Grund dafür ist ...<br>Dies ist besonders relevant, weil ...</td>
            </tr>
            <tr>
              <td>Beispiel geben</td>
              <td>Das zeigt sich zum Beispiel daran, dass ...<br>Ein konkretes Beispiel dafür ist ...<br>Im Schulalltag erkennt man dies etwa daran, dass ...</td>
            </tr>
            <tr>
              <td>Gegenargument einführen</td>
              <td>Gegen diese Sichtweise lässt sich einwenden, dass ...<br>Allerdings muss berücksichtigt werden, dass ...<br>Kritisch ist jedoch, dass ...</td>
            </tr>
            <tr>
              <td>Abwägen</td>
              <td>Dieses Argument ist zwar nachvollziehbar, dennoch ...<br>Im Vergleich dazu wiegt schwerer, dass ...<br>Trotz dieses Einwands überwiegt ...</td>
            </tr>
            <tr>
              <td>Fazit ziehen</td>
              <td>Insgesamt zeigt sich, dass ...<br>Zusammenfassend lässt sich sagen, dass ...<br>Aus diesen Gründen erscheint ... überzeugender.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>6. Textanalyse – Was ist das?</h3>
      <p>
        Bei einer Textanalyse erklärst du nicht nur, was im Text steht. Du erklärst, wie der Text gemacht ist
        und welche Wirkung dadurch entsteht. Du untersuchst Inhalt, Aufbau, Sprache, Argumentation und Aussage.
      </p>

      <div class="sf-de-compare">
        <div>
          <h4>Inhaltsangabe</h4>
          <p>
            Der Text handelt von Jugendlichen, die unter Leistungsdruck stehen.
          </p>
        </div>
        <div>
          <h4>Analyse</h4>
          <p>
            Der Text stellt schulischen Leistungsdruck kritisch dar. Durch wertende Begriffe wie
            „ständiger Druck“ und „Angst vor Fehlern“ entsteht ein problematisches Bild des Schulalltags.
          </p>
        </div>
      </div>

      <div class="sf-de-rule">
        <h4>Wichtig</h4>
        <p>
          Eine Textanalyse steht normalerweise im Präsens:
          <strong>Der Text zeigt...</strong>, <strong>Der Autor verwendet...</strong>, <strong>Die Wortwahl verdeutlicht...</strong>
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>7. Aufbau einer Textanalyse</h3>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Teil</th>
              <th>Inhalt</th>
              <th>Beispielformulierung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Einleitung</td>
              <td>Titel, Autor, Textsorte, Thema, Erscheinungsjahr falls bekannt.</td>
              <td>Der Kommentar „...“ von ... beschäftigt sich mit ...</td>
            </tr>
            <tr>
              <td>Kurze Inhaltsangabe</td>
              <td>Worum geht es? Nur knapp.</td>
              <td>Der Text thematisiert ..., indem er ...</td>
            </tr>
            <tr>
              <td>Aufbau</td>
              <td>Wie ist der Text gegliedert?</td>
              <td>Zu Beginn wird ..., anschliessend ..., am Ende ...</td>
            </tr>
            <tr>
              <td>Sprache</td>
              <td>Wortwahl, Satzbau, rhetorische Mittel.</td>
              <td>Die wiederholte Verwendung von ... verstärkt ...</td>
            </tr>
            <tr>
              <td>Wirkung / Aussage</td>
              <td>Was erreicht der Text dadurch?</td>
              <td>Dadurch wirkt der Text ... und legt nahe, dass ...</td>
            </tr>
            <tr>
              <td>Schluss</td>
              <td>Gesamtaussage zusammenfassen.</td>
              <td>Insgesamt kritisiert der Text ..., indem ...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>8. Einen Analyseabsatz schreiben</h3>
      <p>
        Ein guter Analyseabsatz hat fast immer denselben Aufbau:
      </p>

      <div class="sf-de-rule">
        <h4>Analyseabsatz-Bauplan</h4>
        <p>
          <strong>1. Beobachtung:</strong> Was fällt auf?<br>
          <strong>2. Beleg:</strong> Welche Stelle zeigt das?<br>
          <strong>3. Erklärung:</strong> Was bedeutet das?<br>
          <strong>4. Wirkung:</strong> Wie wirkt es?<br>
          <strong>5. Verbindung:</strong> Wie passt es zur Gesamtaussage?
        </p>
      </div>

      <div class="sf-de-example">
        <h4>Beispiel</h4>
        <p>
          Die wiederholte Verwendung des Begriffs <strong>„Druck“</strong> prägt die Darstellung des Schulalltags.
          Der Ausdruck verweist nicht nur auf eine einzelne Belastung, sondern auf einen dauerhaften Zustand.
          Dadurch wirkt die Schule im Text nicht als Ort des Lernens, sondern als Raum ständiger Anspannung.
          Die Wortwahl unterstützt somit die kritische Haltung des Textes gegenüber übermässigem Leistungsdruck.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Schlechte Analyse-Sätze vermeiden</h4>
        <p>
          Nicht schreiben: <strong>Das macht den Text interessanter.</strong><br>
          Besser: <strong>Dadurch wirkt die Aussage eindringlicher und die Kritik am Leistungsdruck wird verstärkt.</strong>
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>9. Richtig zitieren</h3>
      <p>
        Zitate sollen deine Aussage belegen. Sie dürfen aber nicht einfach in den Text geworfen werden.
        Ein Zitat muss immer eingebettet und erklärt werden.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Art</th>
              <th>Beispiel</th>
              <th>Wann sinnvoll?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Direktes Zitat</td>
              <td>Der Text spricht von „ständigem Druck“.</td>
              <td>Wenn die genaue Formulierung wichtig ist.</td>
            </tr>
            <tr>
              <td>Kurzes eingebettetes Zitat</td>
              <td>Die Formulierung „ständiger Druck“ verdeutlicht die dauerhafte Belastung.</td>
              <td>Meistens die beste Variante.</td>
            </tr>
            <tr>
              <td>Indirekter Verweis</td>
              <td>Zu Beginn beschreibt der Text den Schulalltag als belastend.</td>
              <td>Wenn der genaue Wortlaut nicht entscheidend ist.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-rule">
        <h4>Zitat-Regeln</h4>
        <p>
          Zitiere kurz.<br>
          Erkläre jedes Zitat.<br>
          Baue Zitate grammatisch in deinen Satz ein.<br>
          Verwende keine langen Zitatblöcke, wenn ein kurzer Ausdruck reicht.<br>
          Ein Zitat ersetzt nie deine Analyse.
        </p>
      </div>

      <div class="sf-de-compare">
        <div>
          <h4>Schwach</h4>
          <p>
            Der Text sagt „ständiger Druck“. Das zeigt Stress.
          </p>
        </div>
        <div>
          <h4>Besser</h4>
          <p>
            Die Formulierung <strong>„ständiger Druck“</strong> verdeutlicht,
            dass die Belastung nicht als Ausnahme, sondern als dauerhafter Zustand dargestellt wird.
          </p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>10. Gute Formulierungen für Textanalysen</h3>

      <div class="sf-de-rule">
        <h4>Für den Einstieg</h4>
        <p>
          Der Text beschäftigt sich mit ...<br>
          Im Zentrum des Textes steht ...<br>
          Der Text setzt sich kritisch mit ... auseinander.<br>
          Die Autorin / der Autor thematisiert ...
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Für den Aufbau</h4>
        <p>
          Zu Beginn wird ... dargestellt.<br>
          Im weiteren Verlauf verschiebt sich der Fokus auf ...<br>
          Anschliessend wird ... genauer ausgeführt.<br>
          Am Ende mündet der Text in ...
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Für Sprache und Wirkung</h4>
        <p>
          Die Wortwahl wirkt ...<br>
          Die Formulierung verdeutlicht ...<br>
          Die Wiederholung verstärkt ...<br>
          Der Satzbau erzeugt ...<br>
          Die rhetorische Frage spricht die Lesenden direkt an.<br>
          Dadurch entsteht der Eindruck, dass ...
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Für Deutung und Schluss</h4>
        <p>
          Insgesamt legt der Text nahe, dass ...<br>
          Die sprachliche Gestaltung unterstützt die Aussage, dass ...<br>
          Der Text kritisiert somit ...<br>
          Zusammenfassend zeigt sich, dass ...
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>11. Gedichtanalyse – Was ist das?</h3>
      <p>
        Bei einer Gedichtanalyse untersuchst du Inhalt, Form, Sprache und Wirkung eines Gedichts.
        Ziel ist eine Gesamtdeutung: Was zeigt das Gedicht eigentlich?
      </p>

      <div class="sf-de-rule">
        <h4>Wichtig</h4>
        <p>
          Schreibe nicht einfach: <strong>Das Gedicht hat drei Strophen und einen Kreuzreim.</strong><br>
          Das ist nur Beschreibung. Du musst erklären, was diese Form bewirkt.
        </p>
      </div>

      <div class="sf-de-compare">
        <div>
          <h4>Schwach</h4>
          <p>
            Das Gedicht hat vier Strophen und einen Kreuzreim.
          </p>
        </div>
        <div>
          <h4>Besser</h4>
          <p>
            Die regelmässige Strophenform erzeugt zunächst einen geordneten Eindruck.
            Dieser steht jedoch im Kontrast zur inneren Unruhe des lyrischen Ichs.
          </p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>12. Aufbau einer Gedichtanalyse</h3>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Teil</th>
              <th>Was gehört hinein?</th>
              <th>Beispielformulierung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Einleitung</td>
              <td>Titel, Autor, Gedichtart falls bekannt, Thema.</td>
              <td>Das Gedicht „...“ von ... thematisiert ...</td>
            </tr>
            <tr>
              <td>Inhalt</td>
              <td>Kurze Zusammenfassung, am besten strophenweise.</td>
              <td>In der ersten Strophe beschreibt das lyrische Ich ...</td>
            </tr>
            <tr>
              <td>Sprechsituation</td>
              <td>Wer spricht? Zu wem? In welcher Lage?</td>
              <td>Das lyrische Ich wirkt ...</td>
            </tr>
            <tr>
              <td>Form</td>
              <td>Strophen, Verse, Reim, Metrum, Rhythmus.</td>
              <td>Die regelmässige Form steht im Gegensatz zu ...</td>
            </tr>
            <tr>
              <td>Sprache</td>
              <td>Metaphern, Symbole, Wortfelder, Klang.</td>
              <td>Die dunkle Bildsprache erzeugt ...</td>
            </tr>
            <tr>
              <td>Deutung</td>
              <td>Was bedeutet das Gedicht insgesamt?</td>
              <td>Insgesamt kann das Gedicht als Darstellung von ... verstanden werden.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>13. Inhalt eines Gedichts richtig zusammenfassen</h3>
      <p>
        Du musst den Inhalt knapp zusammenfassen, aber nicht jede Zeile nacherzählen.
        Am besten erklärst du, was in den einzelnen Strophen passiert oder dargestellt wird.
      </p>

      <div class="sf-de-rule">
        <h4>Gute Strophen-Formulierungen</h4>
        <p>
          In der ersten Strophe wird ... beschrieben.<br>
          Die zweite Strophe erweitert dieses Bild, indem ...<br>
          In der dritten Strophe verändert sich die Stimmung, weil ...<br>
          Die letzte Strophe führt zu einer Art Erkenntnis / Zuspitzung / Resignation.
        </p>
      </div>

      <div class="sf-de-example">
        <h4>Beispiel</h4>
        <p>
          In der ersten Strophe beschreibt das lyrische Ich eine dunkle und stille Landschaft.
          In der zweiten Strophe verschiebt sich der Fokus stärker auf die innere Wahrnehmung des Sprechers.
          Dadurch wird deutlich, dass die Natur nicht nur äusserlich beschrieben wird, sondern den seelischen Zustand spiegelt.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>14. Form eines Gedichts deuten</h3>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Formmerkmal</th>
              <th>Was du nicht tun solltest</th>
              <th>Was du stattdessen schreiben kannst</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Strophen</td>
              <td>Das Gedicht hat vier Strophen.</td>
              <td>Die vier regelmässigen Strophen geben dem Gedicht eine äussere Ordnung.</td>
            </tr>
            <tr>
              <td>Reim</td>
              <td>Es hat einen Kreuzreim.</td>
              <td>Der Kreuzreim erzeugt eine regelmässige Struktur und verbindet die Verse klanglich.</td>
            </tr>
            <tr>
              <td>Kein Reim</td>
              <td>Es reimt sich nicht.</td>
              <td>Der fehlende Reim lässt das Gedicht freier und unruhiger wirken.</td>
            </tr>
            <tr>
              <td>Kurze Verse</td>
              <td>Die Verse sind kurz.</td>
              <td>Die kurzen Verse verlangsamen den Lesefluss und lassen die Aussagen isoliert wirken.</td>
            </tr>
            <tr>
              <td>Enjambement</td>
              <td>Der Satz geht in der nächsten Zeile weiter.</td>
              <td>Das Enjambement beschleunigt den Lesefluss und verbindet die beiden Verse eng miteinander.</td>
            </tr>
            <tr>
              <td>Zäsur</td>
              <td>Da ist ein Strich.</td>
              <td>Die Zäsur unterbricht den Lesefluss und betont den folgenden Gedanken.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>15. Sprache eines Gedichts deuten</h3>
      <p>
        In Gedichten ist fast jedes auffällige Wort wichtig. Achte besonders auf Wortfelder, Bilder, Gegensätze und Wiederholungen.
      </p>

      <div class="sf-de-rule">
        <h4>Wortfelder</h4>
        <p>
          Wenn mehrere Wörter zu demselben Bereich gehören, spricht man von einem Wortfeld.
          Wörter wie <strong>Nacht, Schatten, dunkel, kalt, still</strong> können zum Beispiel ein Wortfeld der Dunkelheit oder Einsamkeit bilden.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Bildsprache</h4>
        <p>
          Metaphern, Symbole und Personifikationen sind in Gedichten besonders wichtig,
          weil sie innere Zustände sichtbar machen können.
        </p>
      </div>

      <div class="sf-de-example">
        <h4>Analysebeispiel</h4>
        <p>
          Das Wortfeld der Dunkelheit mit Begriffen wie <strong>„Nacht“</strong>, <strong>„Schatten“</strong> und <strong>„kalt“</strong>
          erzeugt eine bedrückende Atmosphäre. Die Natur wirkt dadurch nicht nur äusserlich dunkel,
          sondern spiegelt die innere Einsamkeit des lyrischen Ichs.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>16. Gute Formulierungen für Gedichtanalysen</h3>

      <div class="sf-de-rule">
        <h4>Für die Einleitung</h4>
        <p>
          Das Gedicht „...“ von ... thematisiert ...<br>
          Im Zentrum des Gedichts steht ...<br>
          Das Gedicht gestaltet die Erfahrung von ...<br>
          Das Gedicht kann als Auseinandersetzung mit ... verstanden werden.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Für das lyrische Ich</h4>
        <p>
          Das lyrische Ich wirkt ...<br>
          Die Sprechsituation ist geprägt von ...<br>
          Die Aussagen des lyrischen Ichs lassen auf ... schliessen.<br>
          Das lyrische Ich befindet sich offenbar in einer Situation von ...
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Für Form und Wirkung</h4>
        <p>
          Die regelmässige Form erzeugt ...<br>
          Der fehlende Reim verstärkt ...<br>
          Die kurzen Verse lassen ...<br>
          Das Enjambement beschleunigt ...<br>
          Die Zäsur hebt ... besonders hervor.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Für Bildsprache</h4>
        <p>
          Die Metapher verdeutlicht ...<br>
          Das Symbol kann als Hinweis auf ... verstanden werden.<br>
          Die Personifikation lässt ... lebendig erscheinen.<br>
          Das Wortfeld der ... erzeugt eine ... Stimmung.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Für die Gesamtdeutung</h4>
        <p>
          Insgesamt zeigt das Gedicht ...<br>
          Das Gedicht kann als Darstellung von ... verstanden werden.<br>
          Die Verbindung von Form und Sprache verdeutlicht ...<br>
          Am Ende entsteht der Eindruck, dass ...
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>17. Mini-Muster: Gedichtanalyse-Absatz</h3>

      <div class="sf-de-example">
        <h4>Beispielabsatz</h4>
        <p>
          Die Naturbeschreibung ist stark von dunklen Bildern geprägt. Begriffe wie <strong>„Nacht“</strong>,
          <strong>„Schatten“</strong> und <strong>„kalt“</strong> erzeugen eine bedrückende Atmosphäre.
          Diese Wortwahl lässt die Landschaft nicht nur als äusseren Ort erscheinen, sondern als Spiegel des inneren Zustands
          des lyrischen Ichs. Die Dunkelheit kann daher als Ausdruck von Einsamkeit und Orientierungslosigkeit verstanden werden.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Warum ist dieser Absatz gut?</h4>
        <p>
          Er nennt eine Beobachtung, gibt kurze Belege, erklärt die Wirkung und verbindet alles mit einer Deutung.
          Genau das braucht eine gute Gedichtanalyse.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>18. Was du in Prüfungen vermeiden solltest</h3>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <thead>
            <tr>
              <th>Schwach</th>
              <th>Besser</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ich finde den Text gut.</td>
              <td>Der Text wirkt überzeugend, weil die Argumentation klar aufgebaut ist.</td>
            </tr>
            <tr>
              <td>Der Autor will sagen...</td>
              <td>Der Text legt nahe, dass...</td>
            </tr>
            <tr>
              <td>Das Zitat zeigt das.</td>
              <td>Die Formulierung verdeutlicht...</td>
            </tr>
            <tr>
              <td>Das Gedicht hat einen Kreuzreim.</td>
              <td>Der Kreuzreim erzeugt eine regelmässige, geordnete Wirkung.</td>
            </tr>
            <tr>
              <td>Die Metapher macht es schöner.</td>
              <td>Die Metapher macht die Unsicherheit der Figur anschaulich.</td>
            </tr>
            <tr>
              <td>Man merkt, dass es traurig ist.</td>
              <td>Die melancholische Stimmung entsteht durch dunkle Bildsprache und langsamen Rhythmus.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>19. Mini-Training GYM4</h3>

      <div class="sf-de-task">
        <h4>Aufgabe 1 – Erörterung</h4>
        <p>
          Baue dieses Argument vollständig aus:
        </p>
        <p>
          <strong>Hausaufgaben können sinnvoll sein.</strong>
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym4-l1')">Lösung anzeigen</button>
        <div id="gym4-l1" class="sf-de-hidden-box">
          <p>
            Hausaufgaben können sinnvoll sein, weil sie Schülerinnen und Schülern ermöglichen,
            den Unterrichtsstoff selbstständig zu wiederholen. Gerade in Fächern wie Mathematik oder Sprachen
            reicht das reine Verstehen im Unterricht oft nicht aus; man muss Inhalte anwenden und festigen.
            Wenn Hausaufgaben gezielt gestellt werden und nicht zu umfangreich sind, können sie den Lernprozess unterstützen.
          </p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 2 – Textanalyse</h4>
        <p>
          Verbessere den Satz:
        </p>
        <p>
          <strong>Der Text ist spannend, weil der Autor gute Wörter benutzt.</strong>
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym4-l2')">Lösung anzeigen</button>
        <div id="gym4-l2" class="sf-de-hidden-box">
          <p>
            Der Text erzeugt Spannung durch kurze Hauptsätze und bedrohliche Verben wie <strong>„zittern“</strong>,
            <strong>„fliehen“</strong> und <strong>„verstummen“</strong>. Dadurch entsteht eine angespannte Atmosphäre,
            in der die Unsicherheit der Figur deutlich wird.
          </p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 3 – Gedichtanalyse</h4>
        <p>
          Deute diese Formulierung:
        </p>
        <p>
          <strong>Der Abend legt ein graues Tuch über die Stadt.</strong>
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym4-l3')">Lösung anzeigen</button>
        <div id="gym4-l3" class="sf-de-hidden-box">
          <p>
            Die Formulierung ist eine Personifikation, weil der Abend wie ein handelndes Wesen dargestellt wird.
            Das <strong>„graue Tuch“</strong> kann als Metapher für Dunkelheit, Schwere oder Melancholie verstanden werden.
            Dadurch wirkt die Stadt gedämpft und traurig. Die Bildsprache erzeugt also eine ruhige, aber bedrückende Stimmung.
          </p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 4 – Zitieren</h4>
        <p>
          Verbessere:
        </p>
        <p>
          <strong>Da steht „ständig müde“ und das zeigt, dass es schlecht ist.</strong>
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('gym4-l4')">Lösung anzeigen</button>
        <div id="gym4-l4" class="sf-de-hidden-box">
          <p>
            Die Formulierung <strong>„ständig müde“</strong> verdeutlicht,
            dass die Erschöpfung der Figur nicht nur vorübergehend ist, sondern ihren Alltag dauerhaft prägt.
            Dadurch entsteht der Eindruck einer anhaltenden Überforderung.
          </p>
        </div>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>20. Das Wichtigste für GYM4</h3>

      <div class="sf-de-rule">
        <h4>Erörterung</h4>
        <p>
          Behauptung, Begründung, Beispiel. Ohne Begründung ist es nur Meinung.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Textanalyse</h4>
        <p>
          Inhalt, Sprache und Wirkung verbinden. Nicht nur sagen, was passiert.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Gedichtanalyse</h4>
        <p>
          Form, Sprache und Deutung verbinden. Nicht nur Reim und Strophen aufzählen.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Zitieren</h4>
        <p>
          Kurz zitieren, sauber einbauen, danach erklären. Ein Zitat ist kein Ersatz für Analyse.
        </p>
      </div>
    </section>
  `
},
   {
  id: "literaturepochen",
  titel: "Zusatz",
  untertitel: "Literaturepochen",
  beschreibung:
    "Zusatzbereich zu GYM4: Die wichtigsten Literaturepochen einfach erklärt, mit Merkmalen, typischen Themen und Formulierungen für Analysen.",
  html: `
    <section class="sf-de-section">
      <h2>Zusatz: Literaturepochen</h2>
      <p class="sf-de-lead">
        Literaturepochen helfen dir, Texte historisch einzuordnen. Wichtig ist aber:
        Du darfst eine Epoche nicht einfach nur nennen. Du musst immer zeigen,
        welches Merkmal im Text sichtbar wird und warum es für die Deutung wichtig ist.
      </p>

      <div class="sf-de-rule">
        <h4>Die wichtigste Regel</h4>
        <p>
          Schreibe nie nur: <strong>Das Gedicht gehört zur Romantik.</strong><br>
          Schreibe besser: <strong>Das Gedicht weist romantische Merkmale auf, weil die Natur als Spiegel innerer Sehnsucht erscheint.</strong>
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>3-Schritt-Methode für Epochen</h4>
        <p>
          <strong>1. Merkmal nennen:</strong> Welche Eigenschaft der Epoche erkennst du?<br>
          <strong>2. Textbeleg nennen:</strong> Woran sieht man das im Text?<br>
          <strong>3. Wirkung erklären:</strong> Was bedeutet das für die Deutung?
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>1. Barock</h3>
      <p>
        Der Barock ist stark geprägt vom Dreissigjährigen Krieg, religiösem Denken und der Erfahrung von Tod,
        Leid und Vergänglichkeit. Viele Texte zeigen den Gegensatz zwischen Lebensfreude und Todesbewusstsein.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1600–1720</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>Vergänglichkeit, Tod, religiöse Orientierung, starke Gegensätze, kunstvolle Sprache, feste Formen</td>
            </tr>
            <tr>
              <th>Typische Begriffe</th>
              <td>Vanitas, Memento mori, Carpe diem, Diesseits, Jenseits</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>Bilder von Verfall, Tod, Sanduhr, verwelkenden Blumen, Grab, Staub, kurzer Lebenszeit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Das Gedicht weist typische Merkmale des Barock auf, da es die Vergänglichkeit des menschlichen Lebens betont.
          Bilder von Verfall und Tod verdeutlichen, dass irdischer Besitz und Schönheit nur vorübergehend sind.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>2. Aufklärung</h3>
      <p>
        Die Aufklärung stellt die Vernunft ins Zentrum. Menschen sollen selbstständig denken,
        Vorurteile prüfen und Autoritäten nicht blind folgen.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1720–1785</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>Vernunft, Bildung, Toleranz, Kritik an Vorurteilen, Kritik an absoluter Autorität</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Mündigkeit, Erziehung, Freiheit des Denkens, moralisches Handeln</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>sachliche Argumentation, moralische Botschaft, Kritik an Unwissenheit oder Unterdrückung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text lässt sich mit Gedanken der Aufklärung verbinden, weil er selbstständiges Denken fordert
          und blinde Autoritätsgläubigkeit kritisiert. Die Argumentation zielt darauf, Vorurteile durch Vernunft zu überwinden.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>3. Sturm und Drang</h3>
      <p>
        Der Sturm und Drang betont Gefühl, Freiheit und Individualität. Viele Texte zeigen Figuren,
        die sich gegen gesellschaftliche Regeln oder Autoritäten auflehnen.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1765–1785</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>starke Gefühle, Natur, Geniegedanke, Rebellion, Freiheit, Leidenschaft</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Konflikt mit Autoritäten, Selbstverwirklichung, Liebe, innere Zerrissenheit</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>Ausrufe, leidenschaftliche Sprache, starke Naturbilder, emotionale Zuspitzung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text zeigt Merkmale des Sturm und Drang, weil die Figur stark von Gefühl und Freiheitsdrang bestimmt ist.
          Die leidenschaftliche Sprache und der Konflikt mit gesellschaftlichen Erwartungen verdeutlichen den Wunsch nach Selbstbestimmung.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>4. Klassik</h3>
      <p>
        Die Klassik sucht nach Harmonie, Mass und Humanität. Im Mittelpunkt steht oft die Idee,
        dass der Mensch sich moralisch bilden und zu innerer Ausgeglichenheit gelangen soll.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1786–1832</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>Harmonie, Humanität, Bildung, Mass, Ausgleich zwischen Gefühl und Vernunft</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>moralische Reifung, Verantwortung, Schönheit, idealer Mensch</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>klare Form, ausgewogene Sprache, moralische Entwicklung, ruhiger Ton</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text erinnert an klassische Ideale, weil er nicht einseitig Gefühl oder Vernunft betont,
          sondern nach einem Ausgleich sucht. Die ruhige Sprache und die klare Form unterstützen den Eindruck von Ordnung und Mass.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>5. Romantik</h3>
      <p>
        Die Romantik interessiert sich für Sehnsucht, Traum, Nacht, Natur, Fantasie und das Geheimnisvolle.
        Die Wirklichkeit wird oft nicht als nüchterne Realität gezeigt, sondern als etwas Tieferes und Rätselhaftes.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1795–1840</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>Sehnsucht, Natur, Nacht, Traum, Fantasie, Geheimnis, Innerlichkeit</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Fernweh, Liebe, Einsamkeit, Flucht aus dem Alltag, Überschreitung der Wirklichkeit</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>Nachtmotive, Natur als Spiegel der Seele, Traumhaftes, Märchenhaftes, Ferne</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Das Gedicht weist romantische Merkmale auf, weil die Natur nicht nur als Landschaft,
          sondern als Spiegel innerer Sehnsucht erscheint. Motive wie Nacht, Ferne und Traum verstärken den Eindruck
          einer geheimnisvollen Welt jenseits des Alltags.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>6. Biedermeier</h3>
      <p>
        Das Biedermeier ist geprägt vom Rückzug ins Private. Statt grosser politischer Umbrüche stehen Familie,
        Häuslichkeit, Ordnung und stille Innerlichkeit im Vordergrund.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1815–1848</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>Rückzug ins Private, Familie, Ordnung, Häuslichkeit, Bescheidenheit</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Alltag, Natur, Sicherheit, kleine Lebenswelt, stille Melancholie</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>ruhige Sprache, private Szenen, Naturbetrachtung, wenig offene Politik</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text lässt sich mit dem Biedermeier verbinden, weil er nicht den grossen politischen Konflikt,
          sondern eine private und überschaubare Lebenswelt darstellt. Die ruhige Sprache verstärkt den Eindruck von Rückzug und Innerlichkeit.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>7. Vormärz / Junges Deutschland</h3>
      <p>
        Der Vormärz ist politisch. Texte dieser Zeit kritisieren Unterdrückung, Zensur und soziale Ungerechtigkeit.
        Literatur soll nicht nur schön sein, sondern gesellschaftlich wirken.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1815–1848</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>politische Kritik, Forderung nach Freiheit, soziale Gerechtigkeit, Kritik an Zensur</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Armut, Revolution, Bürgerrechte, Unterdrückung, politische Veränderung</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>anklagender Ton, politische Begriffe, Kritik an Machtverhältnissen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text zeigt Merkmale des Vormärz, da er gesellschaftliche Missstände nicht nur beschreibt,
          sondern deutlich kritisiert. Der anklagende Ton und die Forderung nach Veränderung machen die politische Funktion des Textes sichtbar.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>8. Realismus</h3>
      <p>
        Der Realismus stellt die Wirklichkeit nicht übertrieben dramatisch dar, sondern beobachtet genau.
        Häufig geht es um bürgerliches Leben, soziale Erwartungen und Konflikte im Alltag.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1848–1890</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>wirklichkeitsnahe Darstellung, genaue Beobachtung, bürgerliche Welt, soziale Zwänge</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Familie, Stand, Ehe, Gesellschaft, Alltag, Konflikte im bürgerlichen Leben</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>genaue Beschreibungen, sachlicher Ton, realistische Figuren, gesellschaftliche Normen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text weist realistische Merkmale auf, weil er eine alltägliche Situation genau beobachtet
          und die Figuren in ihren sozialen Abhängigkeiten zeigt. Die nüchterne Darstellung lässt den Konflikt glaubwürdig wirken.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>9. Naturalismus</h3>
      <p>
        Der Naturalismus will die Wirklichkeit noch ungeschönter zeigen als der Realismus.
        Besonders soziale Not, Armut, Krankheit, Milieu und Vererbung stehen im Zentrum.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1880–1900</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>radikale Wirklichkeitsnähe, soziale Probleme, Milieu, Vererbung, Sekundenstil</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Armut, Alkoholismus, soziale Not, Krankheit, Determination</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>ungeschönte Darstellung, Dialekt, genaue Alltagssprache, Elend, soziale Enge</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text zeigt naturalistische Merkmale, weil er soziale Not ungeschönt darstellt.
          Die genaue Wiedergabe von Sprache und Milieu verdeutlicht, wie stark die Figur durch ihre Lebensumstände geprägt ist.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>10. Expressionismus</h3>
      <p>
        Der Expressionismus zeigt die Welt oft als bedrohlich, chaotisch und zerfallen.
        Typisch sind Grossstadt, Krieg, Angst, Ich-Zerfall und starke, manchmal schockierende Bilder.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1910–1925</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>starke Bilder, Krise, Grossstadt, Angst, Zerfall, Verfremdung</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Entfremdung, Weltuntergang, Krieg, Technik, Einsamkeit, Ich-Zerfall</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>düstere Stimmung, harte Metaphern, chaotische Stadtbilder, extreme Wahrnehmung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text weist expressionistische Merkmale auf, da die Grossstadt als chaotischer und bedrohlicher Raum erscheint.
          Harte Bilder von Lärm, Enge und Dunkelheit machen die innere Überforderung des modernen Menschen sichtbar.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>11. Neue Sachlichkeit</h3>
      <p>
        Die Neue Sachlichkeit reagiert auf Pathos und extreme Gefühlsdarstellung mit Nüchternheit.
        Texte wirken oft kühl, beobachtend und gesellschaftskritisch.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1920–1933</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>nüchterner Stil, klare Beobachtung, wenig Pathos, gesellschaftliche Realität</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Grossstadt, Arbeit, Politik, moderne Gesellschaft, soziale Rollen</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>knappe Sprache, sachlicher Ton, distanzierte Darstellung, Alltagsnähe</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text erinnert an die Neue Sachlichkeit, weil er gesellschaftliche Wirklichkeit nüchtern und ohne starke Emotionalisierung darstellt.
          Der knappe Stil lässt die beschriebenen Zustände besonders kühl und sachlich wirken.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>12. Exilliteratur</h3>
      <p>
        Exilliteratur entsteht durch politische Verfolgung und Flucht. Viele Texte handeln von Heimatverlust,
        Diktatur, Widerstand und der Erfahrung, nicht mehr frei schreiben oder leben zu können.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1933–1945</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>Kritik an Diktatur, Flucht, Heimatverlust, politische Bedrohung, Widerstand</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Faschismus, Exil, Sprache, Identität, Verlust, Verfolgung</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>politische Warnung, Erfahrung von Vertreibung, Fremde, Verlust von Heimat</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text lässt sich mit Exilliteratur verbinden, weil Heimat nicht als sicherer Ort erscheint,
          sondern als verlorener Raum. Die Erfahrung von Flucht und politischer Bedrohung prägt die Darstellung.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>13. Trümmerliteratur / Nachkriegsliteratur</h3>
      <p>
        Nach dem Zweiten Weltkrieg zeigt Literatur oft zerstörte Städte, Schuld, Hunger, Heimkehrer und sprachliche Kargheit.
        Viele Texte sind bewusst schlicht geschrieben.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>ca. 1945–1950er-Jahre</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>knappe Sprache, zerstörte Welt, moralischer Neuanfang, Schweigen, Schuld</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Krieg, Heimkehr, Hunger, zerstörte Städte, Schuld, Neubeginn</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>kurze Sätze, nüchterne Darstellung, kaputte Räume, schweigende Figuren</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text weist Merkmale der Nachkriegsliteratur auf, weil er eine zerstörte Lebenswelt in knapper Sprache beschreibt.
          Die Schlichtheit der Darstellung verstärkt den Eindruck von Verlust, Sprachlosigkeit und moralischer Erschütterung.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>14. Moderne und Gegenwartsliteratur</h3>
      <p>
        Moderne und Gegenwartsliteratur arbeiten oft mit offenen Formen, Perspektivwechseln,
        unsicheren Identitäten und gesellschaftlichen Krisen. Es gibt nicht immer eine eindeutige Lösung.
      </p>

      <div class="sf-de-table-wrap">
        <table class="sf-de-table">
          <tbody>
            <tr>
              <th>Zeit</th>
              <td>20. und 21. Jahrhundert</td>
            </tr>
            <tr>
              <th>Typische Merkmale</th>
              <td>offene Formen, fragmentarischer Aufbau, Perspektivwechsel, Sprachkritik, offene Enden</td>
            </tr>
            <tr>
              <th>Typische Themen</th>
              <td>Identität, Migration, Erinnerung, Medien, Gesellschaft, Krise, Einsamkeit</td>
            </tr>
            <tr>
              <th>Woran du es erkennst</th>
              <td>wechselnde Perspektiven, Alltagssprache, Brüche, offene Deutung, unsicheres Erzählen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-de-example">
        <h4>Gute Analyseformulierung</h4>
        <p>
          Der Text wirkt modern, weil er keine geschlossene Deutung vorgibt.
          Der fragmentarische Aufbau und die wechselnde Perspektive spiegeln eine unsichere und komplexe Wirklichkeit.
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>15. Wie du Epochen in einer Prüfung verwendest</h3>

      <div class="sf-de-rule">
        <h4>Gute Formulierungen</h4>
        <p>
          Der Text weist Merkmale der ... auf.<br>
          Das Gedicht lässt sich teilweise der ... zuordnen.<br>
          Besonders auffällig ist das für die ... typische Motiv der ...<br>
          Die Darstellung erinnert an zentrale Themen der ...<br>
          Dies zeigt sich besonders an ...
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Vorsichtig formulieren</h4>
        <p>
          Schreibe lieber <strong>weist Merkmale der Romantik auf</strong> statt <strong>ist eindeutig romantisch</strong>.
          Viele Texte enthalten nämlich Merkmale verschiedener Epochen.
        </p>
      </div>

      <div class="sf-de-rule">
        <h4>Prüfungsformel</h4>
        <p>
          <strong>Epoche + Merkmal + Textbeleg + Wirkung</strong>
        </p>
        <p>
          Beispiel: <strong>Das Gedicht weist romantische Merkmale auf, weil die Nacht als geheimnisvoller Raum dargestellt wird.
          Dadurch entsteht eine Atmosphäre der Sehnsucht und Weltflucht.</strong>
        </p>
      </div>
    </section>

    <section class="sf-de-section">
      <h3>16. Mini-Training: Epochen erkennen</h3>

      <div class="sf-de-task">
        <h4>Aufgabe 1</h4>
        <p>
          Ein Gedicht spricht ständig von Tod, Staub, Vergänglichkeit und davon,
          dass der Mensch sein Leben nutzen soll. Welche Epoche passt?
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('epochen-l1')">Lösung anzeigen</button>
        <div id="epochen-l1" class="sf-de-hidden-box">
          <p>
            <strong>Barock.</strong> Typisch sind Vergänglichkeit, Tod, Vanitas und Carpe diem.
          </p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 2</h4>
        <p>
          Ein Text fordert, dass Menschen selbstständig denken und sich nicht blind Autoritäten unterwerfen.
          Welche Epoche passt?
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('epochen-l2')">Lösung anzeigen</button>
        <div id="epochen-l2" class="sf-de-hidden-box">
          <p>
            <strong>Aufklärung.</strong> Typisch sind Vernunft, Mündigkeit, Bildung und Kritik an Vorurteilen.
          </p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 3</h4>
        <p>
          Ein Gedicht enthält Nacht, Traum, Ferne, Sehnsucht und eine geheimnisvolle Natur.
          Welche Epoche passt?
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('epochen-l3')">Lösung anzeigen</button>
        <div id="epochen-l3" class="sf-de-hidden-box">
          <p>
            <strong>Romantik.</strong> Typisch sind Sehnsucht, Nacht, Traum, Natur, Ferne und das Geheimnisvolle.
          </p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 4</h4>
        <p>
          Ein Gedicht beschreibt eine laute Grossstadt mit Bildern von Angst, Enge, Dunkelheit und Zerfall.
          Welche Epoche passt?
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('epochen-l4')">Lösung anzeigen</button>
        <div id="epochen-l4" class="sf-de-hidden-box">
          <p>
            <strong>Expressionismus.</strong> Typisch sind Grossstadt, Krise, Ich-Zerfall, Angst und starke Bilder.
          </p>
        </div>
      </div>

      <div class="sf-de-task">
        <h4>Aufgabe 5</h4>
        <p>
          Ein Text beschreibt Armut und soziale Not sehr ungeschönt. Auch Dialekt und genaue Alltagssprache kommen vor.
          Welche Epoche passt?
        </p>
        <button class="sf-de-toggle" onclick="toggleDeutschBox('epochen-l5')">Lösung anzeigen</button>
        <div id="epochen-l5" class="sf-de-hidden-box">
          <p>
            <strong>Naturalismus.</strong> Typisch sind soziale Not, Milieu, ungeschönte Darstellung und genaue Alltagssprache.
          </p>
        </div>
      </div>
    </section>
  `
}
   
   
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_deutsch(container) {
  if (!container) {
    console.error("render_deutsch: Kein Container gefunden.");
    return;
  }

  injectDeutschStyles();

  container.innerHTML = `
    <section class="sf-de-page">
      <div class="sf-de-layout">
        <aside class="sf-de-sidebar">
          <h2>Deutsch</h2>
          <p>
            Wähle die Stufe aus.
          </p>

          <div class="sf-de-gym-list">
            ${DEUTSCH_BEREICHE.map((bereich, index) => `
              <button
                class="sf-de-gym-button ${index === 0 ? "active" : ""}"
                data-gym-id="${bereich.id}">
                <strong>${bereich.titel}</strong>
                <span>${bereich.untertitel}</span>
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-de-content">
          <div id="sf-de-content-inner"></div>
        </main>
      </div>
    </section>
  `;

  const contentInner = container.querySelector("#sf-de-content-inner");
  const buttons = container.querySelectorAll(".sf-de-gym-button");

  function showBereich(id, shouldScroll) {
    const bereich = DEUTSCH_BEREICHE.find(item => item.id === id);
    if (!bereich) return;

    buttons.forEach(button => {
      button.classList.toggle("active", button.dataset.gymId === id);
    });

    contentInner.innerHTML = `
      <article class="sf-de-topic">
        <header class="sf-de-topic-header">
          <p>${bereich.titel}</p>
          <h1>${bereich.untertitel}</h1>
          <span>${bereich.beschreibung}</span>
        </header>

        ${bereich.html}

        <div class="sf-de-legal">
          Alle Inhalte, Beispiele und Übungen sind selbst erstellt und dienen der Prüfungsvorbereitung.
          Es handelt sich nicht um kopierte Prüfungsaufgaben oder fremde Lehrmittelinhalte.
        </div>
      </article>
    `;

    if (shouldScroll) {
      window.setTimeout(() => {
        contentInner.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 0);
    }
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      showBereich(button.dataset.gymId, true);
    });
  });

  showBereich("gym1", false);
}


/* =========================
   INTERAKTIONEN
========================= */

function toggleDeutschBox(id) {
  const box = document.getElementById(id);
  if (!box) return;
  box.classList.toggle("open");
}

window.toggleDeutschBox = toggleDeutschBox;


/* =========================
   CSS
========================= */

function injectDeutschStyles() {
  if (document.getElementById("sf-de-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-de-styles";

  style.textContent = `
    .sf-de-page {
      width: 100%;
      color: #111827;
      font-family: Arial, Helvetica, sans-serif;
    }

    .sf-de-layout {
      display: grid;
      grid-template-columns: 260px minmax(0, 1fr);
      gap: 22px;
      align-items: start;
    }

    .sf-de-sidebar {
      position: sticky;
      top: 18px;
      background: #ffffff;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 18px 40px rgba(0,0,0,0.18);
      border: 1px solid #e5e7eb;
    }

    .sf-de-sidebar h2 {
      margin: 0 0 6px;
      font-size: 26px;
      color: #111827;
    }

    .sf-de-sidebar p {
      margin: 0 0 18px;
      color: #6b7280;
      line-height: 1.5;
      font-size: 14px;
    }

    .sf-de-gym-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-de-gym-button {
      width: 100%;
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      color: #111827;
      border-radius: 16px;
      padding: 14px;
      cursor: pointer;
      text-align: left;
      transition: 0.15s ease;
    }

    .sf-de-gym-button strong {
      display: block;
      font-size: 18px;
      margin-bottom: 3px;
    }

    .sf-de-gym-button span {
      display: block;
      font-size: 13px;
      line-height: 1.35;
      color: #6b7280;
    }

    .sf-de-gym-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
      border-color: #818cf8;
    }

    .sf-de-gym-button.active {
      background: #111827;
      color: #ffffff;
      border-color: #111827;
    }

    .sf-de-gym-button.active span {
      color: #d1d5db;
    }

    .sf-de-content {
      min-width: 0;
    }

    .sf-de-topic {
      background: #f3f4f6;
      border-radius: 24px;
      padding: 22px;
      border: 1px solid #e5e7eb;
    }

    .sf-de-topic-header {
      background: linear-gradient(135deg, #111827, #334155);
      color: #ffffff;
      border-radius: 22px;
      padding: 30px;
      margin-bottom: 18px;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
    }

    .sf-de-topic-header p {
      margin: 0 0 8px;
      color: #cbd5e1;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
    }

    .sf-de-topic-header h1 {
      margin: 0 0 12px;
      font-size: clamp(32px, 5vw, 52px);
      line-height: 1.05;
    }

    .sf-de-topic-header span {
      display: block;
      color: #e5e7eb;
      line-height: 1.6;
      max-width: 900px;
      font-size: 17px;
    }

    .sf-de-section {
      background: #ffffff;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
    }

    .sf-de-section h2 {
      margin: 0 0 12px;
      font-size: 32px;
      color: #111827;
    }

    .sf-de-section h3 {
      margin: 0 0 14px;
      font-size: 26px;
      color: #111827;
    }

    .sf-de-section h4 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #111827;
    }

    .sf-de-section p {
      color: #374151;
      line-height: 1.7;
      margin: 0 0 14px;
      font-size: 16px;
    }

    .sf-de-lead {
      font-size: 18px !important;
      color: #374151 !important;
      line-height: 1.75 !important;
    }

    .sf-de-table-wrap {
      overflow-x: auto;
      margin: 18px 0;
    }

    .sf-de-table {
      width: 100%;
      border-collapse: collapse;
      overflow: hidden;
      border-radius: 14px;
      font-size: 15px;
    }

    .sf-de-table th {
      background: #111827;
      color: #ffffff;
      text-align: left;
      padding: 13px;
      border: 1px solid #1f2937;
      vertical-align: top;
    }

    .sf-de-table td {
      padding: 13px;
      border: 1px solid #e5e7eb;
      color: #374151;
      vertical-align: top;
      line-height: 1.55;
    }

    .sf-de-table tr:nth-child(even) td {
      background: #f9fafb;
    }

    .sf-de-rule,
    .sf-de-example,
    .sf-de-task,
    .sf-de-correction {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-left: 5px solid #6366f1;
      border-radius: 16px;
      padding: 18px;
      margin: 16px 0;
    }

    .sf-de-example {
      border-left-color: #16a34a;
    }

    .sf-de-task {
      border-left-color: #f59e0b;
    }

    .sf-de-correction {
      border-left-color: #dc2626;
    }

    .sf-de-rule ul,
    .sf-de-example ul,
    .sf-de-task ul {
      color: #374151;
      line-height: 1.7;
      margin: 8px 0 0 20px;
      padding: 0;
    }

    .sf-de-compare {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin: 18px 0;
    }

    .sf-de-compare > div {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
    }

    .sf-de-toggle {
      margin-top: 6px;
      border: 0;
      background: #111827;
      color: #ffffff;
      padding: 10px 14px;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
    }

    .sf-de-toggle:hover {
      background: #374151;
    }

    .sf-de-hidden-box {
      display: none;
      margin-top: 14px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 16px;
    }

    .sf-de-hidden-box.open {
      display: block;
    }

    .sf-de-legal {
      background: #fff7ed;
      color: #7c2d12;
      border: 1px solid #fed7aa;
      border-radius: 16px;
      padding: 16px;
      line-height: 1.6;
      font-size: 14px;
    }

    @media (max-width: 900px) {
      .sf-de-layout {
        grid-template-columns: 1fr;
      }

      .sf-de-sidebar {
        position: static;
      }

      .sf-de-compare {
        grid-template-columns: 1fr;
      }

      .sf-de-topic {
        padding: 14px;
      }

      .sf-de-section {
        padding: 18px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_deutsch = render_deutsch;
