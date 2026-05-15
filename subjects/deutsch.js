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
      "Hier wird ausführlich erklärt, wie man Erörterung, Textanalyse und Gedichtanalyse schreibt.",
    html: `
      <section class="sf-de-section">
        <h2>GYM4 – Analyse und Aufsatzformen</h2>
        <p class="sf-de-lead">
          Dieser Bereich wird danach sehr ausführlich ausgearbeitet:
          Erörterung, Textanalyse, Gedichtanalyse, Aufbau, Zitieren, Satzanfänge und Formulierungen.
        </p>
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
