/* =========================================================
   SchoolFools – Französisch
   Datei: franzoesisch.js

   Aufbau:
   - Links nur GYM1, GYM2, GYM3, GYM4
   - Rechts jeweils der ganze Inhalt dieser Stufe
   - Keine kopierten Inhalte
   - Keine echten Prüfungsaufgaben
   - Alle Erklärungen, Beispiele und Übungen selbst erstellt
========================================================= */

const FRANZOESISCH_BEREICHE = [
  {
    id: "gym1",
    titel: "GYM1",
    untertitel: "Grammatikregeln",
    beschreibung:
      "Alle wichtigen französischen Grammatikregeln einfach erklärt: Satzbau, Artikel, Pronomen, Verneinung, Fragen, Adjektive, Subjonctif, Aktiv und Passiv – mit Beispielen.",
    html: `
      <section class="sf-fr-section">
        <h2>GYM1 – Grammatikregeln Französisch</h2>
        <p class="sf-fr-lead">
          In Französisch ist Grammatik besonders wichtig, weil kleine Fehler sofort auffallen:
          falsche Artikel, falsche Zeiten, falsche Pronomen oder falsche Satzstellung.
          In diesem Bereich lernst du die wichtigsten Regeln mit einfachen Erklärungen und Beispielen.
        </p>

        <div class="sf-fr-rule">
          <h4>Grundidee</h4>
          <p>
            Französisch funktioniert oft genauer als Deutsch. Du musst besonders auf Geschlecht,
            Zahl, Pronomen, Verbform und Satzstellung achten.
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>1. Der einfache französische Satz</h3>
        <p>
          Ein normaler französischer Aussagesatz hat meistens diese Reihenfolge:
        </p>

        <div class="sf-fr-rule">
          <h4>Grundformel</h4>
          <p>
            <strong>Subjekt + Verb + Ergänzung</strong>
          </p>
          <p>
            <strong>Je lis un livre.</strong><br>
            Ich lese ein Buch.
          </p>
        </div>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Teil</th>
                <th>Französisch</th>
                <th>Deutsch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subjekt</td>
                <td>Je</td>
                <td>Ich</td>
              </tr>
              <tr>
                <td>Verb</td>
                <td>lis</td>
                <td>lese</td>
              </tr>
              <tr>
                <td>Ergänzung</td>
                <td>un livre</td>
                <td>ein Buch</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-example">
          <h4>Weitere Beispiele</h4>
          <p>
            <strong>Nous regardons un film.</strong> – Wir schauen einen Film.<br>
            <strong>Elle écrit une lettre.</strong> – Sie schreibt einen Brief.<br>
            <strong>Ils aiment la musique.</strong> – Sie mögen Musik.
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>2. Artikel: le, la, les, un, une, des</h3>
        <p>
          Im Französischen hat jedes Nomen ein grammatisches Geschlecht:
          maskulin oder feminin. Der Artikel muss dazu passen.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Art</th>
                <th>Maskulin</th>
                <th>Feminin</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bestimmter Artikel</td>
                <td>le garçon</td>
                <td>la fille</td>
                <td>les élèves</td>
              </tr>
              <tr>
                <td>unbestimmter Artikel</td>
                <td>un livre</td>
                <td>une table</td>
                <td>des livres</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>le und la vor Vokal</h4>
          <p>
            Vor einem Vokal oder stummen h wird <strong>le</strong> oder <strong>la</strong> zu <strong>l'</strong>.
          </p>
          <p>
            <strong>l'école</strong>, <strong>l'homme</strong>, <strong>l'idée</strong>
          </p>
        </div>

        <div class="sf-fr-example">
          <h4>Typischer Fehler</h4>
          <p>
            Falsch: <strong>le école</strong><br>
            Richtig: <strong>l'école</strong>
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>3. Adjektive: Stellung und Anpassung</h3>
        <p>
          Französische Adjektive stehen meistens nach dem Nomen und passen sich in Geschlecht und Zahl an.
        </p>

        <div class="sf-fr-rule">
          <h4>Grundregel</h4>
          <p>
            <strong>maskulin Singular:</strong> un garçon intelligent<br>
            <strong>feminin Singular:</strong> une fille intelligente<br>
            <strong>maskulin Plural:</strong> des garçons intelligents<br>
            <strong>feminin Plural:</strong> des filles intelligentes
          </p>
        </div>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Form</th>
                <th>Beispiel</th>
                <th>Erklärung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>maskulin Singular</td>
                <td>un texte court</td>
                <td>Grundform</td>
              </tr>
              <tr>
                <td>feminin Singular</td>
                <td>une phrase courte</td>
                <td>meistens + e</td>
              </tr>
              <tr>
                <td>maskulin Plural</td>
                <td>des textes courts</td>
                <td>meistens + s</td>
              </tr>
              <tr>
                <td>feminin Plural</td>
                <td>des phrases courtes</td>
                <td>meistens + es</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>Adjektive vor dem Nomen</h4>
          <p>
            Einige häufige Adjektive stehen meistens vor dem Nomen:
            <strong>petit, grand, bon, mauvais, beau, vieux, jeune, nouveau</strong>.
          </p>
          <p>
            <strong>un bon livre</strong><br>
            <strong>une petite maison</strong><br>
            <strong>un vieux professeur</strong>
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>4. Die Verneinung: ne ... pas</h3>
        <p>
          Die normale Verneinung im Französischen besteht aus zwei Teilen:
          <strong>ne</strong> und <strong>pas</strong>. Das konjugierte Verb steht dazwischen.
        </p>

        <div class="sf-fr-rule">
          <h4>Grundformel</h4>
          <p>
            <strong>Subjekt + ne + Verb + pas + Ergänzung</strong>
          </p>
          <p>
            <strong>Je ne comprends pas la question.</strong><br>
            Ich verstehe die Frage nicht.
          </p>
        </div>

        <div class="sf-fr-example">
          <h4>Beispiele</h4>
          <p>
            <strong>Elle ne parle pas.</strong> – Sie spricht nicht.<br>
            <strong>Nous ne mangeons pas.</strong> – Wir essen nicht.<br>
            <strong>Ils ne regardent pas le film.</strong> – Sie schauen den Film nicht.
          </p>
        </div>

        <div class="sf-fr-rule">
          <h4>ne wird vor Vokal zu n'</h4>
          <p>
            <strong>Je n'aime pas ce livre.</strong><br>
            <strong>Il n'écoute pas.</strong>
          </p>
        </div>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Verneinung</th>
                <th>Bedeutung</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ne ... pas</td>
                <td>nicht</td>
                <td>Je ne sais pas.</td>
              </tr>
              <tr>
                <td>ne ... plus</td>
                <td>nicht mehr</td>
                <td>Il ne travaille plus.</td>
              </tr>
              <tr>
                <td>ne ... jamais</td>
                <td>nie</td>
                <td>Elle ne ment jamais.</td>
              </tr>
              <tr>
                <td>ne ... rien</td>
                <td>nichts</td>
                <td>Nous ne voyons rien.</td>
              </tr>
              <tr>
                <td>ne ... personne</td>
                <td>niemanden</td>
                <td>Je ne connais personne.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>5. Fragen stellen</h3>
        <p>
          Im Französischen gibt es mehrere Arten, Fragen zu stellen. In der Schule solltest du vor allem
          die Frage mit <strong>est-ce que</strong> und die Fragewörter kennen.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Form</th>
                <th>Beispiel</th>
                <th>Verwendung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Intonation</td>
                <td>Tu viens ?</td>
                <td>mündlich, einfach</td>
              </tr>
              <tr>
                <td>est-ce que</td>
                <td>Est-ce que tu viens ?</td>
                <td>standardsprachlich und sehr nützlich</td>
              </tr>
              <tr>
                <td>Inversion</td>
                <td>Viens-tu ?</td>
                <td>schriftlicher, formeller</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>Wichtige Fragewörter</h4>
          <p>
            <strong>qui</strong> – wer<br>
            <strong>que / quoi</strong> – was<br>
            <strong>où</strong> – wo<br>
            <strong>quand</strong> – wann<br>
            <strong>pourquoi</strong> – warum<br>
            <strong>comment</strong> – wie<br>
            <strong>combien</strong> – wie viel<br>
            <strong>quel / quelle / quels / quelles</strong> – welcher / welche
          </p>
        </div>

        <div class="sf-fr-example">
          <h4>Beispiele</h4>
          <p>
            <strong>Pourquoi est-ce que tu apprends le français ?</strong><br>
            Warum lernst du Französisch?
          </p>
          <p>
            <strong>Où est-ce qu'elle habite ?</strong><br>
            Wo wohnt sie?
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>6. Personalpronomen</h3>
        <p>
          Personalpronomen ersetzen Personen oder Dinge. Sie sind wichtig, weil französische Verben immer
          zur Person passen müssen.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Französisch</th>
                <th>Deutsch</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>je</td>
                <td>ich</td>
                <td>je parle</td>
              </tr>
              <tr>
                <td>tu</td>
                <td>du</td>
                <td>tu parles</td>
              </tr>
              <tr>
                <td>il / elle / on</td>
                <td>er / sie / man</td>
                <td>il parle</td>
              </tr>
              <tr>
                <td>nous</td>
                <td>wir</td>
                <td>nous parlons</td>
              </tr>
              <tr>
                <td>vous</td>
                <td>ihr / Sie</td>
                <td>vous parlez</td>
              </tr>
              <tr>
                <td>ils / elles</td>
                <td>sie</td>
                <td>ils parlent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>je vor Vokal</h4>
          <p>
            Vor einem Vokal wird <strong>je</strong> zu <strong>j'</strong>.
          </p>
          <p>
            <strong>J'aime le français.</strong><br>
            <strong>J'habite à Genève.</strong>
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>7. Objektpronomen</h3>
        <p>
          Objektpronomen ersetzen ein Objekt. Sie stehen meistens vor dem konjugierten Verb.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Pronomen</th>
                <th>Bedeutung</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>me / m'</td>
                <td>mich / mir</td>
                <td>Il me regarde.</td>
              </tr>
              <tr>
                <td>te / t'</td>
                <td>dich / dir</td>
                <td>Je te comprends.</td>
              </tr>
              <tr>
                <td>le / l'</td>
                <td>ihn / es</td>
                <td>Je le vois.</td>
              </tr>
              <tr>
                <td>la / l'</td>
                <td>sie / es</td>
                <td>Il la connaît.</td>
              </tr>
              <tr>
                <td>lui</td>
                <td>ihm / ihr</td>
                <td>Je lui parle.</td>
              </tr>
              <tr>
                <td>nous</td>
                <td>uns</td>
                <td>Elle nous aide.</td>
              </tr>
              <tr>
                <td>vous</td>
                <td>euch / Ihnen</td>
                <td>Je vous écoute.</td>
              </tr>
              <tr>
                <td>les</td>
                <td>sie</td>
                <td>Nous les voyons.</td>
              </tr>
              <tr>
                <td>leur</td>
                <td>ihnen</td>
                <td>Il leur écrit.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>Direktes und indirektes Objekt</h4>
          <p>
            Direktes Objekt: Wen oder was? → <strong>le, la, les</strong><br>
            Indirektes Objekt: Wem? / à qui? → <strong>lui, leur</strong>
          </p>
        </div>

        <div class="sf-fr-example">
          <h4>Beispiele</h4>
          <p>
            <strong>Je vois Marie.</strong> → <strong>Je la vois.</strong><br>
            Ich sehe Marie. → Ich sehe sie.
          </p>
          <p>
            <strong>Je parle à Marie.</strong> → <strong>Je lui parle.</strong><br>
            Ich spreche mit Marie. → Ich spreche mit ihr.
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>8. y und en</h3>
        <p>
          <strong>y</strong> und <strong>en</strong> sind sehr typisch für Französisch und kommen oft in Tests vor.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Pronomen</th>
                <th>Ersetzt meistens</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>y</td>
                <td>à + Sache / Ort</td>
                <td>Je vais à Paris. → J'y vais.</td>
              </tr>
              <tr>
                <td>en</td>
                <td>de + Sache / Mengenangaben</td>
                <td>Je parle de ce livre. → J'en parle.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-example">
          <h4>Beispiele</h4>
          <p>
            <strong>Tu penses à ton examen ?</strong><br>
            <strong>Oui, j'y pense.</strong>
          </p>
          <p>
            <strong>Tu as des stylos ?</strong><br>
            <strong>Oui, j'en ai trois.</strong>
          </p>
        </div>

        <div class="sf-fr-rule">
          <h4>Merke</h4>
          <p>
            <strong>y</strong> antwortet oft auf die Frage: wohin, wo oder woran?<br>
            <strong>en</strong> antwortet oft auf die Frage: wovon oder wie viele?
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>9. Possessivbegleiter</h3>
        <p>
          Possessivbegleiter zeigen Besitz oder Zugehörigkeit. Sie richten sich nach dem Nomen,
          das danach kommt – nicht nach der Person im Deutschen.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Deutsch</th>
                <th>maskulin Singular</th>
                <th>feminin Singular</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>mein/e</td>
                <td>mon frère</td>
                <td>ma sœur</td>
                <td>mes parents</td>
              </tr>
              <tr>
                <td>dein/e</td>
                <td>ton frère</td>
                <td>ta sœur</td>
                <td>tes parents</td>
              </tr>
              <tr>
                <td>sein/ihr</td>
                <td>son frère</td>
                <td>sa sœur</td>
                <td>ses parents</td>
              </tr>
              <tr>
                <td>unser/e</td>
                <td>notre frère</td>
                <td>notre sœur</td>
                <td>nos parents</td>
              </tr>
              <tr>
                <td>euer/Ihr</td>
                <td>votre frère</td>
                <td>votre sœur</td>
                <td>vos parents</td>
              </tr>
              <tr>
                <td>ihr/e</td>
                <td>leur frère</td>
                <td>leur sœur</td>
                <td>leurs parents</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>Wichtige Sonderregel</h4>
          <p>
            Vor femininen Nomen mit Vokal benutzt man <strong>mon, ton, son</strong> statt <strong>ma, ta, sa</strong>.
          </p>
          <p>
            <strong>mon amie</strong>, nicht <strong>ma amie</strong><br>
            <strong>son idée</strong>, nicht <strong>sa idée</strong>
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>10. Demonstrativbegleiter: ce, cet, cette, ces</h3>
        <p>
          Demonstrativbegleiter bedeuten dieser, diese, dieses oder diese im Plural.
          Sie müssen zum Nomen passen.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Form</th>
                <th>Wann?</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ce</td>
                <td>maskulin Singular vor Konsonant</td>
                <td>ce passage</td>
              </tr>
              <tr>
                <td>cet</td>
                <td>maskulin Singular vor Vokal oder stummem h</td>
                <td>cet homme, cet exercice</td>
              </tr>
              <tr>
                <td>cette</td>
                <td>feminin Singular</td>
                <td>cette phrase</td>
              </tr>
              <tr>
                <td>ces</td>
                <td>Plural</td>
                <td>ces textes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> cet passage</p>
          <p><strong>Richtig:</strong> ce passage</p>
          <p><strong>Erklärung:</strong> passage ist maskulin und beginnt mit einem Konsonanten. Deshalb braucht man <strong>ce</strong>, nicht <strong>cet</strong>.</p>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> ce idée</p>
          <p><strong>Richtig:</strong> cette idée</p>
          <p><strong>Erklärung:</strong> idée ist feminin. Deshalb braucht man <strong>cette</strong>.</p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>11. Relativpronomen: qui, que, où, dont</h3>
        <p>
          Relativpronomen verbinden zwei Sätze und vermeiden Wiederholungen.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Pronomen</th>
                <th>Funktion</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>qui</td>
                <td>Subjekt im Relativsatz</td>
                <td>C'est une fille qui parle beaucoup.</td>
              </tr>
              <tr>
                <td>que</td>
                <td>direktes Objekt im Relativsatz</td>
                <td>C'est un livre que j'aime.</td>
              </tr>
              <tr>
                <td>où</td>
                <td>Ort oder Zeit</td>
                <td>C'est la ville où j'habite.</td>
              </tr>
              <tr>
                <td>dont</td>
                <td>ersetzt de + Nomen</td>
                <td>C'est le sujet dont je parle.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>qui oder que?</h4>
          <p>
            <strong>qui</strong> ist im Relativsatz selbst das Subjekt.<br>
            <strong>que</strong> ist im Relativsatz das Objekt.
          </p>
        </div>

        <div class="sf-fr-example">
          <h4>Vergleich</h4>
          <p>
            <strong>La fille qui lit est ma sœur.</strong><br>
            Das Mädchen, das liest, ist meine Schwester.
          </p>
          <p>
            <strong>Le livre que je lis est intéressant.</strong><br>
            Das Buch, das ich lese, ist interessant.
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>12. Präpositionen à und de</h3>
        <p>
          <strong>à</strong> und <strong>de</strong> sind sehr häufig und wichtig, weil viele Verben und Ausdrücke
          fest mit ihnen verbunden sind.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Präposition</th>
                <th>Typische Bedeutung</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>à</td>
                <td>in, nach, an, bei, zu</td>
                <td>Je vais à l'école.</td>
              </tr>
              <tr>
                <td>de</td>
                <td>von, aus, über</td>
                <td>Je parle de mon projet.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>Zusammenziehungen mit à</h4>
          <p>
            <strong>à + le = au</strong> → Je vais au cinéma.<br>
            <strong>à + les = aux</strong> → Je parle aux élèves.
          </p>
        </div>

        <div class="sf-fr-rule">
          <h4>Zusammenziehungen mit de</h4>
          <p>
            <strong>de + le = du</strong> → Je viens du collège.<br>
            <strong>de + les = des</strong> → Le cahier des élèves.
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>13. Der Teilungsartikel: du, de la, de l', des</h3>
        <p>
          Den Teilungsartikel benutzt man, wenn man von einer unbestimmten Menge spricht.
          Auf Deutsch sagt man oft gar keinen Artikel.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Form</th>
                <th>Wann?</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>du</td>
                <td>maskulin Singular</td>
                <td>Je mange du pain.</td>
              </tr>
              <tr>
                <td>de la</td>
                <td>feminin Singular</td>
                <td>Elle boit de la limonade.</td>
              </tr>
              <tr>
                <td>de l'</td>
                <td>vor Vokal</td>
                <td>Nous buvons de l'eau.</td>
              </tr>
              <tr>
                <td>des</td>
                <td>Plural</td>
                <td>Ils mangent des pommes.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>Nach Verneinung meistens de</h4>
          <p>
            <strong>Je mange du pain.</strong><br>
            <strong>Je ne mange pas de pain.</strong>
          </p>
          <p>
            <strong>Elle a des idées.</strong><br>
            <strong>Elle n'a pas d'idées.</strong>
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>14. Mengenangaben</h3>
        <p>
          Nach Mengenangaben steht meistens <strong>de</strong>.
        </p>

        <div class="sf-fr-rule">
          <h4>Beispiele</h4>
          <p>
            <strong>beaucoup de devoirs</strong> – viele Hausaufgaben<br>
            <strong>peu de temps</strong> – wenig Zeit<br>
            <strong>assez d'argent</strong> – genug Geld<br>
            <strong>trop de bruit</strong> – zu viel Lärm<br>
            <strong>un kilo de pommes</strong> – ein Kilo Äpfel
          </p>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> beaucoup des élèves</p>
          <p><strong>Richtig:</strong> beaucoup d'élèves</p>
          <p><strong>Erklärung:</strong> Nach beaucoup steht normalerweise <strong>de</strong>.</p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>15. Steigerung und Vergleich</h3>
        <p>
          Mit Vergleichsformen kannst du sagen, dass etwas grösser, kleiner, besser oder gleich ist.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Form</th>
                <th>Bedeutung</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>plus ... que</td>
                <td>mehr ... als</td>
                <td>Paul est plus grand que Marc.</td>
              </tr>
              <tr>
                <td>moins ... que</td>
                <td>weniger ... als</td>
                <td>Ce texte est moins difficile que l'autre.</td>
              </tr>
              <tr>
                <td>aussi ... que</td>
                <td>genauso ... wie</td>
                <td>Elle est aussi rapide que lui.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-rule">
          <h4>Gut und besser</h4>
          <p>
            <strong>bon</strong> = gut<br>
            <strong>meilleur</strong> = besser
          </p>
          <p>
            <strong>Ce livre est bon.</strong><br>
            <strong>Ce livre est meilleur que l'autre.</strong>
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>16. Aktiv und Passiv</h3>
        <p>
          Im Aktiv handelt das Subjekt selbst. Im Passiv geschieht etwas mit dem Subjekt.
        </p>

        <div class="sf-fr-compare">
          <div>
            <h4>Aktiv</h4>
            <p>
              <strong>Le professeur explique la règle.</strong><br>
              Der Lehrer erklärt die Regel.
            </p>
          </div>
          <div>
            <h4>Passiv</h4>
            <p>
              <strong>La règle est expliquée par le professeur.</strong><br>
              Die Regel wird vom Lehrer erklärt.
            </p>
          </div>
        </div>

        <div class="sf-fr-rule">
          <h4>Bildung des Passivs</h4>
          <p>
            <strong>être + participe passé</strong>
          </p>
          <p>
            Das Partizip passt sich an das Subjekt an:
          </p>
          <p>
            <strong>Le texte est lu.</strong><br>
            <strong>La lettre est écrite.</strong><br>
            <strong>Les règles sont expliquées.</strong>
          </p>
        </div>

        <div class="sf-fr-example">
          <h4>Beispiele</h4>
          <p>
            Aktiv: <strong>Les élèves corrigent les phrases.</strong><br>
            Passiv: <strong>Les phrases sont corrigées par les élèves.</strong>
          </p>
          <p>
            Aktiv: <strong>Marie écrit une lettre.</strong><br>
            Passiv: <strong>Une lettre est écrite par Marie.</strong>
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>17. Der Subjonctif</h3>
        <p>
          Der Subjonctif ist eine Verbform, die oft nach Ausdrücken des Wunsches, der Notwendigkeit,
          des Gefühls, des Zweifels oder der Bewertung steht.
        </p>

        <div class="sf-fr-rule">
          <h4>Wann benutzt man den Subjonctif?</h4>
          <p>
            Nach Ausdrücken wie:
          </p>
          <p>
            <strong>Il faut que</strong> – es ist nötig, dass<br>
            <strong>Je veux que</strong> – ich will, dass<br>
            <strong>Je suis content que</strong> – ich bin froh, dass<br>
            <strong>Il est important que</strong> – es ist wichtig, dass<br>
            <strong>Je doute que</strong> – ich bezweifle, dass<br>
            <strong>Bien que</strong> – obwohl
          </p>
        </div>

        <div class="sf-fr-rule">
          <h4>Bildung bei regelmässigen Verben</h4>
          <p>
            Meistens nimmt man die <strong>ils</strong>-Form im Präsens, streicht <strong>-ent</strong> weg und hängt die Endungen an:
          </p>
          <p>
            <strong>-e, -es, -e, -ions, -iez, -ent</strong>
          </p>
        </div>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>parler</th>
                <th>Subjonctif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>que je</td>
                <td>parle</td>
              </tr>
              <tr>
                <td>que tu</td>
                <td>parles</td>
              </tr>
              <tr>
                <td>qu'il / qu'elle</td>
                <td>parle</td>
              </tr>
              <tr>
                <td>que nous</td>
                <td>parlions</td>
              </tr>
              <tr>
                <td>que vous</td>
                <td>parliez</td>
              </tr>
              <tr>
                <td>qu'ils / qu'elles</td>
                <td>parlent</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-example">
          <h4>Beispiele</h4>
          <p>
            <strong>Il faut que tu travailles.</strong><br>
            Es ist nötig, dass du arbeitest.
          </p>
          <p>
            <strong>Je suis content que vous soyez ici.</strong><br>
            Ich bin froh, dass ihr hier seid.
          </p>
          <p>
            <strong>Bien qu'il soit fatigué, il continue.</strong><br>
            Obwohl er müde ist, macht er weiter.
          </p>
        </div>

        <div class="sf-fr-rule">
          <h4>Sehr wichtige unregelmässige Formen</h4>
          <p>
            <strong>être:</strong> que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient<br>
            <strong>avoir:</strong> que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient<br>
            <strong>aller:</strong> que j'aille, que tu ailles, qu'il aille, que nous allions, que vous alliez, qu'ils aillent<br>
            <strong>faire:</strong> que je fasse, que tu fasses, qu'il fasse, que nous fassions, que vous fassiez, qu'ils fassent
          </p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>18. Indicatif oder Subjonctif?</h3>
        <p>
          Der Indicatif beschreibt eher Wirklichkeit, Sicherheit oder Feststellung.
          Der Subjonctif steht eher bei Wunsch, Gefühl, Zweifel, Notwendigkeit oder Bewertung.
        </p>

        <div class="sf-fr-compare">
          <div>
            <h4>Indicatif</h4>
            <p>
              <strong>Je pense qu'il vient.</strong><br>
              Ich denke, dass er kommt.
            </p>
            <p>
              Der Sprecher stellt etwas als wahrscheinlich oder real dar.
            </p>
          </div>
          <div>
            <h4>Subjonctif</h4>
            <p>
              <strong>Je veux qu'il vienne.</strong><br>
              Ich will, dass er kommt.
            </p>
            <p>
              Es geht um Wunsch, nicht um eine sichere Tatsache.
            </p>
          </div>
        </div>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Ausdruck</th>
                <th>Modus</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Je pense que</td>
                <td>meist Indicatif</td>
                <td>Je pense qu'il comprend.</td>
              </tr>
              <tr>
                <td>Je veux que</td>
                <td>Subjonctif</td>
                <td>Je veux qu'il comprenne.</td>
              </tr>
              <tr>
                <td>Il est clair que</td>
                <td>Indicatif</td>
                <td>Il est clair qu'elle a raison.</td>
              </tr>
              <tr>
                <td>Il faut que</td>
                <td>Subjonctif</td>
                <td>Il faut qu'elle fasse attention.</td>
              </tr>
              <tr>
                <td>Je suis sûr que</td>
                <td>Indicatif</td>
                <td>Je suis sûr qu'il vient.</td>
              </tr>
              <tr>
                <td>Je doute que</td>
                <td>Subjonctif</td>
                <td>Je doute qu'il vienne.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>19. Si-Sätze</h3>
        <p>
          Si-Sätze drücken Bedingungen aus. Wichtig ist, dass nach <strong>si</strong> nicht jede Zeitform möglich ist.
        </p>

        <div class="sf-fr-table-wrap">
          <table class="sf-fr-table">
            <thead>
              <tr>
                <th>Bedingung</th>
                <th>Folge</th>
                <th>Beispiel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>si + présent</td>
                <td>futur simple / présent / impératif</td>
                <td>Si j'ai le temps, je viendrai.</td>
              </tr>
              <tr>
                <td>si + imparfait</td>
                <td>conditionnel présent</td>
                <td>Si j'avais le temps, je viendrais.</td>
              </tr>
              <tr>
                <td>si + plus-que-parfait</td>
                <td>conditionnel passé</td>
                <td>Si j'avais eu le temps, je serais venu.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> Si j'aurai le temps, je viendrai.</p>
          <p><strong>Richtig:</strong> Si j'ai le temps, je viendrai.</p>
          <p><strong>Erklärung:</strong> Nach <strong>si</strong> steht für reale Bedingungen normalerweise Präsens, nicht Futur.</p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>20. Häufige Grammatikfehler</h3>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> cet passage montre que...</p>
          <p><strong>Richtig:</strong> ce passage montre que...</p>
          <p><strong>Erklärung:</strong> <strong>passage</strong> ist maskulin und beginnt mit einem Konsonanten.</p>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> beaucoup des personnes pensent que...</p>
          <p><strong>Richtig:</strong> beaucoup de personnes pensent que...</p>
          <p><strong>Erklärung:</strong> Nach Mengenangaben steht meistens <strong>de</strong>.</p>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> Je suis allé à le cinéma.</p>
          <p><strong>Richtig:</strong> Je suis allé au cinéma.</p>
          <p><strong>Erklärung:</strong> <strong>à + le</strong> wird zu <strong>au</strong>.</p>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> Je ne mange pas du pain.</p>
          <p><strong>Richtig:</strong> Je ne mange pas de pain.</p>
          <p><strong>Erklärung:</strong> Nach einer Verneinung wird der Teilungsartikel meistens zu <strong>de</strong>.</p>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> Il faut que tu fais attention.</p>
          <p><strong>Richtig:</strong> Il faut que tu fasses attention.</p>
          <p><strong>Erklärung:</strong> Nach <strong>il faut que</strong> steht der Subjonctif.</p>
        </div>

        <div class="sf-fr-correction">
          <p><strong>Falsch:</strong> Si j'aurai plus de temps, je finirai le texte.</p>
          <p><strong>Richtig:</strong> Si j'ai plus de temps, je finirai le texte.</p>
          <p><strong>Erklärung:</strong> Nach <strong>si</strong> steht hier Präsens, nicht Futur.</p>
        </div>
      </section>

      <section class="sf-fr-section">
        <h3>21. Mini-Training für GYM1</h3>
        <p>
          Löse zuerst selbst. Danach kannst du die Lösung anzeigen.
        </p>

        <div class="sf-fr-task">
          <h4>Aufgabe 1 – Demonstrativbegleiter</h4>
          <p>Korrigiere:</p>
          <p><strong>Cet passage est important.</strong></p>
          <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym1-l1')">Lösung anzeigen</button>
          <div id="fr-gym1-l1" class="sf-fr-hidden-box">
            <p><strong>Ce passage est important.</strong></p>
            <p><strong>passage</strong> ist maskulin und beginnt mit einem Konsonanten. Deshalb braucht man <strong>ce</strong>.</p>
          </div>
        </div>

        <div class="sf-fr-task">
          <h4>Aufgabe 2 – Verneinung</h4>
          <p>Verneine den Satz:</p>
          <p><strong>Je comprends la règle.</strong></p>
          <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym1-l2')">Lösung anzeigen</button>
          <div id="fr-gym1-l2" class="sf-fr-hidden-box">
            <p><strong>Je ne comprends pas la règle.</strong></p>
            <p><strong>ne ... pas</strong> umklammert das konjugierte Verb.</p>
          </div>
        </div>

        <div class="sf-fr-task">
          <h4>Aufgabe 3 – Relativpronomen</h4>
          <p>Setze <strong>qui</strong> oder <strong>que</strong> ein:</p>
          <p><strong>C'est un livre ___ j'aime beaucoup.</strong></p>
          <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym1-l3')">Lösung anzeigen</button>
          <div id="fr-gym1-l3" class="sf-fr-hidden-box">
            <p><strong>C'est un livre que j'aime beaucoup.</strong></p>
            <p><strong>que</strong> ist hier das direkte Objekt: Ich mag das Buch.</p>
          </div>
        </div>

        <div class="sf-fr-task">
          <h4>Aufgabe 4 – Subjonctif</h4>
          <p>Korrigiere:</p>
          <p><strong>Il faut que nous travaillons plus.</strong></p>
          <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym1-l4')">Lösung anzeigen</button>
          <div id="fr-gym1-l4" class="sf-fr-hidden-box">
            <p><strong>Il faut que nous travaillions plus.</strong></p>
            <p>Nach <strong>il faut que</strong> steht der Subjonctif. Bei <strong>nous</strong> lautet die Endung <strong>-ions</strong>.</p>
          </div>
        </div>

        <div class="sf-fr-task">
          <h4>Aufgabe 5 – Passiv</h4>
          <p>Forme ins Passiv um:</p>
          <p><strong>Les élèves corrigent les phrases.</strong></p>
          <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym1-l5')">Lösung anzeigen</button>
          <div id="fr-gym1-l5" class="sf-fr-hidden-box">
            <p><strong>Les phrases sont corrigées par les élèves.</strong></p>
            <p>Passiv: <strong>être + participe passé</strong>. Das Partizip passt sich an <strong>les phrases</strong> an.</p>
          </div>
        </div>

        <div class="sf-fr-task">
          <h4>Aufgabe 6 – y oder en</h4>
          <p>Ersetze den Ausdruck:</p>
          <p><strong>Je parle de ce problème.</strong></p>
          <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym1-l6')">Lösung anzeigen</button>
          <div id="fr-gym1-l6" class="sf-fr-hidden-box">
            <p><strong>J'en parle.</strong></p>
            <p><strong>en</strong> ersetzt hier <strong>de ce problème</strong>.</p>
          </div>
        </div>
      </section>
    `
  },
   ,
{
  id: "gym2",
  titel: "GYM2",
  untertitel: "Verben und Konjugation",
  beschreibung:
    "Die wichtigsten französischen Verben und ihre Konjugation im Présent, Passé composé, Imparfait und Plus-que-parfait – mit Regeln, Beispielen und typischen Fehlern.",
  html: `
    <section class="sf-fr-section">
      <h2>GYM2 – Verben und Konjugation</h2>
      <p class="sf-fr-lead">
        Französische Verben sind der Kern fast jedes Satzes. Wenn du die wichtigsten Verbgruppen,
        Hilfsverben und Zeiten beherrschst, kannst du deutlich sicherer schreiben und sprechen.
        In diesem Bereich lernst du, wie man regelmässige und wichtige unregelmässige Verben im
        Présent, Passé composé, Imparfait und Plus-que-parfait bildet.
      </p>

      <div class="sf-fr-rule">
        <h4>Grundidee</h4>
        <p>
          Bei jedem französischen Verb musst du drei Dinge prüfen:
          <strong>Wer handelt?</strong>, <strong>in welcher Zeit?</strong> und <strong>braucht das Verb avoir oder être?</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>1. Die drei regelmässigen Verbgruppen</h3>
      <p>
        Französische Verben werden oft nach ihrer Endung im Infinitiv geordnet:
        <strong>-er</strong>, <strong>-ir</strong> und <strong>-re</strong>.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Gruppe</th>
              <th>Infinitiv</th>
              <th>Stamm</th>
              <th>Typische Bedeutung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-er-Verben</td>
              <td>parler</td>
              <td>parl-</td>
              <td>sprechen</td>
            </tr>
            <tr>
              <td>-ir-Verben</td>
              <td>finir</td>
              <td>fin-</td>
              <td>beenden</td>
            </tr>
            <tr>
              <td>-re-Verben</td>
              <td>vendre</td>
              <td>vend-</td>
              <td>verkaufen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>So findest du den Stamm</h4>
        <p>
          Du nimmst den Infinitiv und streichst die Endung weg:
        </p>
        <p>
          <strong>parler</strong> → parl-<br>
          <strong>finir</strong> → fin-<br>
          <strong>vendre</strong> → vend-
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>2. Présent: regelmässige -er-Verben</h3>
      <p>
        Die meisten französischen Verben gehören zur Gruppe der <strong>-er-Verben</strong>.
        Sie sind deshalb besonders wichtig.
      </p>

      <div class="sf-fr-rule">
        <h4>Endungen im Présent</h4>
        <p>
          <strong>-e, -es, -e, -ons, -ez, -ent</strong>
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>parler</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>je parle</td>
              <td>ich spreche</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu parles</td>
              <td>du sprichst</td>
            </tr>
            <tr>
              <td>il / elle / on</td>
              <td>il parle</td>
              <td>er spricht</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous parlons</td>
              <td>wir sprechen</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous parlez</td>
              <td>ihr sprecht / Sie sprechen</td>
            </tr>
            <tr>
              <td>ils / elles</td>
              <td>ils parlent</td>
              <td>sie sprechen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Weitere -er-Verben</h4>
        <p>
          <strong>aimer</strong> – mögen / lieben<br>
          <strong>regarder</strong> – anschauen<br>
          <strong>écouter</strong> – zuhören<br>
          <strong>travailler</strong> – arbeiten<br>
          <strong>chercher</strong> – suchen<br>
          <strong>trouver</strong> – finden
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>3. Présent: regelmässige -ir-Verben</h3>
      <p>
        Viele regelmässige <strong>-ir-Verben</strong> bilden im Plural eine Erweiterung mit <strong>-iss-</strong>.
      </p>

      <div class="sf-fr-rule">
        <h4>Endungen im Présent</h4>
        <p>
          <strong>-is, -is, -it, -issons, -issez, -issent</strong>
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>finir</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>je finis</td>
              <td>ich beende</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu finis</td>
              <td>du beendest</td>
            </tr>
            <tr>
              <td>il / elle / on</td>
              <td>il finit</td>
              <td>er beendet</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous finissons</td>
              <td>wir beenden</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous finissez</td>
              <td>ihr beendet / Sie beenden</td>
            </tr>
            <tr>
              <td>ils / elles</td>
              <td>ils finissent</td>
              <td>sie beenden</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Weitere regelmässige -ir-Verben</h4>
        <p>
          <strong>choisir</strong> – wählen<br>
          <strong>réussir</strong> – Erfolg haben / bestehen<br>
          <strong>grandir</strong> – wachsen<br>
          <strong>réfléchir</strong> – nachdenken<br>
          <strong>remplir</strong> – ausfüllen
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>4. Présent: regelmässige -re-Verben</h3>
      <p>
        Bei regelmässigen <strong>-re-Verben</strong> streicht man <strong>-re</strong> weg und hängt die Endungen an.
      </p>

      <div class="sf-fr-rule">
        <h4>Endungen im Présent</h4>
        <p>
          <strong>-s, -s, -, -ons, -ez, -ent</strong>
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>vendre</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>je vends</td>
              <td>ich verkaufe</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu vends</td>
              <td>du verkaufst</td>
            </tr>
            <tr>
              <td>il / elle / on</td>
              <td>il vend</td>
              <td>er verkauft</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous vendons</td>
              <td>wir verkaufen</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous vendez</td>
              <td>ihr verkauft / Sie verkaufen</td>
            </tr>
            <tr>
              <td>ils / elles</td>
              <td>ils vendent</td>
              <td>sie verkaufen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Weitere -re-Verben</h4>
        <p>
          <strong>attendre</strong> – warten<br>
          <strong>répondre</strong> – antworten<br>
          <strong>perdre</strong> – verlieren<br>
          <strong>entendre</strong> – hören<br>
          <strong>rendre</strong> – zurückgeben / machen
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>5. Die wichtigsten unregelmässigen Verben im Présent</h3>
      <p>
        Einige Verben kommen so oft vor, dass du sie sicher können musst. Sie sind unregelmässig
        und folgen nicht vollständig den normalen Verbgruppen.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>je</th>
              <th>tu</th>
              <th>il / elle</th>
              <th>nous</th>
              <th>vous</th>
              <th>ils / elles</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>être</td>
              <td>suis</td>
              <td>es</td>
              <td>est</td>
              <td>sommes</td>
              <td>êtes</td>
              <td>sont</td>
            </tr>
            <tr>
              <td>avoir</td>
              <td>ai</td>
              <td>as</td>
              <td>a</td>
              <td>avons</td>
              <td>avez</td>
              <td>ont</td>
            </tr>
            <tr>
              <td>aller</td>
              <td>vais</td>
              <td>vas</td>
              <td>va</td>
              <td>allons</td>
              <td>allez</td>
              <td>vont</td>
            </tr>
            <tr>
              <td>faire</td>
              <td>fais</td>
              <td>fais</td>
              <td>fait</td>
              <td>faisons</td>
              <td>faites</td>
              <td>font</td>
            </tr>
            <tr>
              <td>prendre</td>
              <td>prends</td>
              <td>prends</td>
              <td>prend</td>
              <td>prenons</td>
              <td>prenez</td>
              <td>prennent</td>
            </tr>
            <tr>
              <td>venir</td>
              <td>viens</td>
              <td>viens</td>
              <td>vient</td>
              <td>venons</td>
              <td>venez</td>
              <td>viennent</td>
            </tr>
            <tr>
              <td>pouvoir</td>
              <td>peux</td>
              <td>peux</td>
              <td>peut</td>
              <td>pouvons</td>
              <td>pouvez</td>
              <td>peuvent</td>
            </tr>
            <tr>
              <td>vouloir</td>
              <td>veux</td>
              <td>veux</td>
              <td>veut</td>
              <td>voulons</td>
              <td>voulez</td>
              <td>veulent</td>
            </tr>
            <tr>
              <td>devoir</td>
              <td>dois</td>
              <td>dois</td>
              <td>doit</td>
              <td>devons</td>
              <td>devez</td>
              <td>doivent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>Sehr wichtig</h4>
        <p>
          <strong>être</strong> und <strong>avoir</strong> brauchst du nicht nur als normale Verben,
          sondern auch als Hilfsverben für zusammengesetzte Zeiten.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>6. Passé composé: Bildung</h3>
      <p>
        Das <strong>Passé composé</strong> benutzt man meistens für abgeschlossene Handlungen in der Vergangenheit.
        Es besteht aus einem Hilfsverb und dem Participe passé.
      </p>

      <div class="sf-fr-rule">
        <h4>Grundformel</h4>
        <p>
          <strong>avoir oder être im Présent + participe passé</strong>
        </p>
        <p>
          <strong>J'ai parlé.</strong> – Ich habe gesprochen.<br>
          <strong>Elle est allée.</strong> – Sie ist gegangen.
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Infinitiv</th>
              <th>Participe passé</th>
              <th>Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>parler</td>
              <td>parlé</td>
              <td>j'ai parlé</td>
            </tr>
            <tr>
              <td>finir</td>
              <td>fini</td>
              <td>j'ai fini</td>
            </tr>
            <tr>
              <td>vendre</td>
              <td>vendu</td>
              <td>j'ai vendu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>Participe passé bei regelmässigen Verben</h4>
        <p>
          <strong>-er</strong> → <strong>-é</strong>: parler → parlé<br>
          <strong>-ir</strong> → <strong>-i</strong>: finir → fini<br>
          <strong>-re</strong> → <strong>-u</strong>: vendre → vendu
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>7. Passé composé mit avoir</h3>
      <p>
        Die meisten Verben bilden das Passé composé mit <strong>avoir</strong>.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>parler</th>
              <th>finir</th>
              <th>vendre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>j'</td>
              <td>j'ai parlé</td>
              <td>j'ai fini</td>
              <td>j'ai vendu</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu as parlé</td>
              <td>tu as fini</td>
              <td>tu as vendu</td>
            </tr>
            <tr>
              <td>il / elle</td>
              <td>il a parlé</td>
              <td>elle a fini</td>
              <td>il a vendu</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous avons parlé</td>
              <td>nous avons fini</td>
              <td>nous avons vendu</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous avez parlé</td>
              <td>vous avez fini</td>
              <td>vous avez vendu</td>
            </tr>
            <tr>
              <td>ils / elles</td>
              <td>ils ont parlé</td>
              <td>elles ont fini</td>
              <td>ils ont vendu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiele</h4>
        <p>
          <strong>J'ai regardé un film.</strong> – Ich habe einen Film geschaut.<br>
          <strong>Nous avons fini les devoirs.</strong> – Wir haben die Hausaufgaben beendet.<br>
          <strong>Elle a vendu son vélo.</strong> – Sie hat ihr Fahrrad verkauft.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>8. Passé composé mit être</h3>
      <p>
        Einige Verben bilden das Passé composé mit <strong>être</strong>. Das sind vor allem Verben der Bewegung
        oder Zustandsveränderung.
      </p>

      <div class="sf-fr-rule">
        <h4>Wichtige être-Verben</h4>
        <p>
          <strong>aller</strong> – gehen<br>
          <strong>venir</strong> – kommen<br>
          <strong>arriver</strong> – ankommen<br>
          <strong>partir</strong> – weggehen<br>
          <strong>entrer</strong> – eintreten<br>
          <strong>sortir</strong> – hinausgehen<br>
          <strong>monter</strong> – hinaufgehen<br>
          <strong>descendre</strong> – hinuntergehen<br>
          <strong>naître</strong> – geboren werden<br>
          <strong>mourir</strong> – sterben<br>
          <strong>rester</strong> – bleiben<br>
          <strong>tomber</strong> – fallen<br>
          <strong>retourner</strong> – zurückkehren
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>aller</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>je suis allé / allée</td>
              <td>ich bin gegangen</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu es allé / allée</td>
              <td>du bist gegangen</td>
            </tr>
            <tr>
              <td>il</td>
              <td>il est allé</td>
              <td>er ist gegangen</td>
            </tr>
            <tr>
              <td>elle</td>
              <td>elle est allée</td>
              <td>sie ist gegangen</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous sommes allés / allées</td>
              <td>wir sind gegangen</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous êtes allé / allée / allés / allées</td>
              <td>ihr seid / Sie sind gegangen</td>
            </tr>
            <tr>
              <td>ils</td>
              <td>ils sont allés</td>
              <td>sie sind gegangen</td>
            </tr>
            <tr>
              <td>elles</td>
              <td>elles sont allées</td>
              <td>sie sind gegangen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>Angleichung bei être</h4>
        <p>
          Bei <strong>être</strong> passt sich das Participe passé an das Subjekt an:
        </p>
        <p>
          maskulin Singular: <strong>allé</strong><br>
          feminin Singular: <strong>allée</strong><br>
          maskulin Plural: <strong>allés</strong><br>
          feminin Plural: <strong>allées</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>9. Reflexive Verben im Passé composé</h3>
      <p>
        Reflexive Verben stehen mit einem Reflexivpronomen wie <strong>me, te, se, nous, vous, se</strong>.
        Im Passé composé werden sie normalerweise mit <strong>être</strong> gebildet.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>se lever</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>je me suis levé / levée</td>
              <td>ich bin aufgestanden</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu t'es levé / levée</td>
              <td>du bist aufgestanden</td>
            </tr>
            <tr>
              <td>il</td>
              <td>il s'est levé</td>
              <td>er ist aufgestanden</td>
            </tr>
            <tr>
              <td>elle</td>
              <td>elle s'est levée</td>
              <td>sie ist aufgestanden</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous nous sommes levés / levées</td>
              <td>wir sind aufgestanden</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous vous êtes levé / levée / levés / levées</td>
              <td>ihr seid / Sie sind aufgestanden</td>
            </tr>
            <tr>
              <td>ils</td>
              <td>ils se sont levés</td>
              <td>sie sind aufgestanden</td>
            </tr>
            <tr>
              <td>elles</td>
              <td>elles se sont levées</td>
              <td>sie sind aufgestanden</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Weitere reflexive Verben</h4>
        <p>
          <strong>se laver</strong> – sich waschen<br>
          <strong>se préparer</strong> – sich vorbereiten<br>
          <strong>se souvenir de</strong> – sich erinnern an<br>
          <strong>s'intéresser à</strong> – sich interessieren für<br>
          <strong>se dépêcher</strong> – sich beeilen
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>10. Wichtige Participe-passé-Formen</h3>
      <p>
        Viele häufige Verben haben ein unregelmässiges Participe passé. Diese Formen musst du auswendig können.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Infinitiv</th>
              <th>Participe passé</th>
              <th>Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>être</td>
              <td>été</td>
              <td>j'ai été</td>
            </tr>
            <tr>
              <td>avoir</td>
              <td>eu</td>
              <td>j'ai eu</td>
            </tr>
            <tr>
              <td>faire</td>
              <td>fait</td>
              <td>j'ai fait</td>
            </tr>
            <tr>
              <td>prendre</td>
              <td>pris</td>
              <td>j'ai pris</td>
            </tr>
            <tr>
              <td>mettre</td>
              <td>mis</td>
              <td>j'ai mis</td>
            </tr>
            <tr>
              <td>dire</td>
              <td>dit</td>
              <td>j'ai dit</td>
            </tr>
            <tr>
              <td>écrire</td>
              <td>écrit</td>
              <td>j'ai écrit</td>
            </tr>
            <tr>
              <td>voir</td>
              <td>vu</td>
              <td>j'ai vu</td>
            </tr>
            <tr>
              <td>vouloir</td>
              <td>voulu</td>
              <td>j'ai voulu</td>
            </tr>
            <tr>
              <td>pouvoir</td>
              <td>pu</td>
              <td>j'ai pu</td>
            </tr>
            <tr>
              <td>devoir</td>
              <td>dû</td>
              <td>j'ai dû</td>
            </tr>
            <tr>
              <td>lire</td>
              <td>lu</td>
              <td>j'ai lu</td>
            </tr>
            <tr>
              <td>boire</td>
              <td>bu</td>
              <td>j'ai bu</td>
            </tr>
            <tr>
              <td>venir</td>
              <td>venu</td>
              <td>je suis venu</td>
            </tr>
            <tr>
              <td>naître</td>
              <td>né</td>
              <td>je suis né</td>
            </tr>
            <tr>
              <td>mourir</td>
              <td>mort</td>
              <td>il est mort</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>11. Imparfait: Bildung</h3>
      <p>
        Das <strong>Imparfait</strong> benutzt man für Beschreibungen, Gewohnheiten und Zustände in der Vergangenheit.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          Man nimmt die <strong>nous</strong>-Form im Présent, streicht <strong>-ons</strong> weg und hängt die Imparfait-Endungen an.
        </p>
        <p>
          Endungen: <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong>
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Verb</th>
              <th>nous-Form im Présent</th>
              <th>Stamm fürs Imparfait</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>parler</td>
              <td>nous parlons</td>
              <td>parl-</td>
            </tr>
            <tr>
              <td>finir</td>
              <td>nous finissons</td>
              <td>finiss-</td>
            </tr>
            <tr>
              <td>prendre</td>
              <td>nous prenons</td>
              <td>pren-</td>
            </tr>
            <tr>
              <td>faire</td>
              <td>nous faisons</td>
              <td>fais-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>parler</th>
              <th>finir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>je parlais</td>
              <td>je finissais</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu parlais</td>
              <td>tu finissais</td>
            </tr>
            <tr>
              <td>il / elle</td>
              <td>il parlait</td>
              <td>elle finissait</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous parlions</td>
              <td>nous finissions</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous parliez</td>
              <td>vous finissiez</td>
            </tr>
            <tr>
              <td>ils / elles</td>
              <td>ils parlaient</td>
              <td>elles finissaient</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>Einzige sehr wichtige Ausnahme</h4>
        <p>
          <strong>être</strong> hat im Imparfait den Stamm <strong>ét-</strong>:
        </p>
        <p>
          <strong>j'étais, tu étais, il était, nous étions, vous étiez, ils étaient</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>12. Imparfait: Verwendung</h3>
      <p>
        Das Imparfait beschreibt meistens Hintergrund, Gewohnheit oder Zustand.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Verwendung</th>
              <th>Beispiel</th>
              <th>Erklärung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beschreibung</td>
              <td>Il faisait froid.</td>
              <td>Es war kalt.</td>
            </tr>
            <tr>
              <td>Gewohnheit</td>
              <td>Chaque soir, elle lisait.</td>
              <td>Jeden Abend las sie.</td>
            </tr>
            <tr>
              <td>Zustand</td>
              <td>J'étais fatigué.</td>
              <td>Ich war müde.</td>
            </tr>
            <tr>
              <td>Hintergrundhandlung</td>
              <td>Je dormais quand le téléphone a sonné.</td>
              <td>Ich schlief, als das Telefon klingelte.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Typische Signalwörter</h4>
        <p>
          <strong>toujours</strong> – immer<br>
          <strong>souvent</strong> – oft<br>
          <strong>chaque jour</strong> – jeden Tag<br>
          <strong>d'habitude</strong> – gewöhnlich<br>
          <strong>quand j'étais petit</strong> – als ich klein war
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>13. Passé composé oder Imparfait?</h3>
      <p>
        Diese Unterscheidung ist sehr wichtig. Das Passé composé erzählt abgeschlossene Ereignisse.
        Das Imparfait beschreibt Hintergrund, Gewohnheit oder Zustand.
      </p>

      <div class="sf-fr-compare">
        <div>
          <h4>Passé composé</h4>
          <p>
            <strong>Hier ist etwas passiert.</strong>
          </p>
          <p>
            Eine Handlung ist abgeschlossen oder bringt die Geschichte weiter.
          </p>
          <p>
            <strong>Hier, j'ai rencontré un ami.</strong><br>
            Gestern habe ich einen Freund getroffen.
          </p>
        </div>
        <div>
          <h4>Imparfait</h4>
          <p>
            <strong>So war die Situation.</strong>
          </p>
          <p>
            Es geht um Beschreibung, Zustand, Gewohnheit oder Hintergrund.
          </p>
          <p>
            <strong>Il faisait beau et les rues étaient calmes.</strong><br>
            Es war schönes Wetter und die Strassen waren ruhig.
          </p>
        </div>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiel mit beiden Zeiten</h4>
        <p>
          <strong>Je marchais dans la rue quand j'ai vu Marie.</strong>
        </p>
        <p>
          <strong>Je marchais</strong> = Hintergrundhandlung im Imparfait.<br>
          <strong>j'ai vu</strong> = plötzliches Ereignis im Passé composé.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>14. Plus-que-parfait: Bildung</h3>
      <p>
        Das <strong>Plus-que-parfait</strong> beschreibt eine Handlung, die schon vor einer anderen
        vergangenen Handlung passiert ist.
      </p>

      <div class="sf-fr-rule">
        <h4>Grundformel</h4>
        <p>
          <strong>avoir oder être im Imparfait + participe passé</strong>
        </p>
        <p>
          <strong>J'avais parlé.</strong> – Ich hatte gesprochen.<br>
          <strong>Elle était partie.</strong> – Sie war weggegangen.
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>parler mit avoir</th>
              <th>aller mit être</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>j'avais parlé</td>
              <td>j'étais allé / allée</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu avais parlé</td>
              <td>tu étais allé / allée</td>
            </tr>
            <tr>
              <td>il</td>
              <td>il avait parlé</td>
              <td>il était allé</td>
            </tr>
            <tr>
              <td>elle</td>
              <td>elle avait parlé</td>
              <td>elle était allée</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous avions parlé</td>
              <td>nous étions allés / allées</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous aviez parlé</td>
              <td>vous étiez allé / allée / allés / allées</td>
            </tr>
            <tr>
              <td>ils</td>
              <td>ils avaient parlé</td>
              <td>ils étaient allés</td>
            </tr>
            <tr>
              <td>elles</td>
              <td>elles avaient parlé</td>
              <td>elles étaient allées</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>Merke</h4>
        <p>
          Das Plus-que-parfait ist eigentlich das Passé composé, aber das Hilfsverb steht nicht im Présent,
          sondern im Imparfait.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>15. Plus-que-parfait: Verwendung</h3>
      <p>
        Man benutzt das Plus-que-parfait, wenn man zeigen will, dass etwas noch früher passiert ist
        als eine andere vergangene Handlung.
      </p>

      <div class="sf-fr-example">
        <h4>Beispiel</h4>
        <p>
          <strong>Quand je suis arrivé, le film avait déjà commencé.</strong>
        </p>
        <p>
          Als ich angekommen bin, hatte der Film schon begonnen.
        </p>
        <p>
          <strong>je suis arrivé</strong> = späteres Ereignis im Passé composé<br>
          <strong>avait commencé</strong> = frühere Handlung im Plus-que-parfait
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Weiteres Beispiel</h4>
        <p>
          <strong>Elle était fatiguée parce qu'elle avait beaucoup travaillé.</strong>
        </p>
        <p>
          Sie war müde, weil sie viel gearbeitet hatte.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>16. Häufige Fehler bei Verben</h3>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Je suis parlé avec mon ami.</p>
        <p><strong>Richtig:</strong> J'ai parlé avec mon ami.</p>
        <p><strong>Erklärung:</strong> <strong>parler</strong> bildet das Passé composé mit <strong>avoir</strong>.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Elle est allé à l'école.</p>
        <p><strong>Richtig:</strong> Elle est allée à l'école.</p>
        <p><strong>Erklärung:</strong> Bei <strong>être</strong> passt sich das Participe passé an das Subjekt an.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Nous avons arrivé trop tard.</p>
        <p><strong>Richtig:</strong> Nous sommes arrivés trop tard.</p>
        <p><strong>Erklärung:</strong> <strong>arriver</strong> wird im Passé composé mit <strong>être</strong> gebildet.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Quand j'étais petit, je suis allé souvent au parc.</p>
        <p><strong>Richtig:</strong> Quand j'étais petit, j'allais souvent au parc.</p>
        <p><strong>Erklärung:</strong> Bei einer Gewohnheit in der Vergangenheit benutzt man meistens das Imparfait.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Quand je suis arrivé, le film a déjà commencé.</p>
        <p><strong>Besser:</strong> Quand je suis arrivé, le film avait déjà commencé.</p>
        <p><strong>Erklärung:</strong> Der Film begann vor dem Ankommen. Deshalb braucht man das Plus-que-parfait.</p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>17. Mini-Training für GYM2</h3>
      <p>
        Löse zuerst selbst. Danach kannst du die Lösung anzeigen.
      </p>

      <div class="sf-fr-task">
        <h4>Aufgabe 1 – Présent</h4>
        <p>Konjugiere <strong>parler</strong> mit <strong>nous</strong> im Présent.</p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l1')">Lösung anzeigen</button>
        <div id="fr-gym2-l1" class="sf-fr-hidden-box">
          <p><strong>nous parlons</strong></p>
          <p>Bei -er-Verben lautet die nous-Endung im Présent <strong>-ons</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 2 – Passé composé mit avoir</h4>
        <p>Setze ins Passé composé:</p>
        <p><strong>Je regarde un film.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l2')">Lösung anzeigen</button>
        <div id="fr-gym2-l2" class="sf-fr-hidden-box">
          <p><strong>J'ai regardé un film.</strong></p>
          <p><strong>regarder</strong> wird mit <strong>avoir</strong> gebildet. Das Participe passé lautet <strong>regardé</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 3 – Passé composé mit être</h4>
        <p>Setze ins Passé composé:</p>
        <p><strong>Elle va à la maison.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l3')">Lösung anzeigen</button>
        <div id="fr-gym2-l3" class="sf-fr-hidden-box">
          <p><strong>Elle est allée à la maison.</strong></p>
          <p><strong>aller</strong> wird mit <strong>être</strong> gebildet. Weil das Subjekt feminin Singular ist, schreibt man <strong>allée</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 4 – Imparfait</h4>
        <p>Setze ins Imparfait:</p>
        <p><strong>Nous finissons les exercices.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l4')">Lösung anzeigen</button>
        <div id="fr-gym2-l4" class="sf-fr-hidden-box">
          <p><strong>Nous finissions les exercices.</strong></p>
          <p>Stamm: <strong>finiss-</strong>. Die nous-Endung im Imparfait ist <strong>-ions</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 5 – Passé composé oder Imparfait?</h4>
        <p>Setze die richtige Zeit ein:</p>
        <p><strong>Je ___ dans la rue quand j'___ Marie.</strong></p>
        <p>marcher / voir</p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l5')">Lösung anzeigen</button>
        <div id="fr-gym2-l5" class="sf-fr-hidden-box">
          <p><strong>Je marchais dans la rue quand j'ai vu Marie.</strong></p>
          <p><strong>marchais</strong> beschreibt die Hintergrundhandlung. <strong>ai vu</strong> ist das plötzliche Ereignis.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 6 – Plus-que-parfait</h4>
        <p>Setze ins Plus-que-parfait:</p>
        <p><strong>Le film commence.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l6')">Lösung anzeigen</button>
        <div id="fr-gym2-l6" class="sf-fr-hidden-box">
          <p><strong>Le film avait commencé.</strong></p>
          <p>Plus-que-parfait: <strong>avoir im Imparfait + participe passé</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 7 – Fehler korrigieren</h4>
        <p>Korrigiere:</p>
        <p><strong>Nous avons partis tôt.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l7')">Lösung anzeigen</button>
        <div id="fr-gym2-l7" class="sf-fr-hidden-box">
          <p><strong>Nous sommes partis tôt.</strong></p>
          <p><strong>partir</strong> wird mit <strong>être</strong> gebildet. Bei <strong>nous</strong> braucht man meistens die Pluralendung <strong>-s</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 8 – Reflexives Verb</h4>
        <p>Setze ins Passé composé:</p>
        <p><strong>Elle se prépare.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym2-l8')">Lösung anzeigen</button>
        <div id="fr-gym2-l8" class="sf-fr-hidden-box">
          <p><strong>Elle s'est préparée.</strong></p>
          <p>Reflexive Verben werden meistens mit <strong>être</strong> gebildet. Das Participe passé passt sich hier an <strong>elle</strong> an.</p>
        </div>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>18. Das Wichtigste für GYM2</h3>

      <div class="sf-fr-rule">
        <h4>Présent</h4>
        <p>
          Lerne zuerst die regelmässigen Endungen und dann die wichtigsten unregelmässigen Verben:
          <strong>être, avoir, aller, faire, prendre, venir, pouvoir, vouloir, devoir</strong>.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Passé composé</h4>
        <p>
          Meistens: <strong>avoir + participe passé</strong>.<br>
          Bei Bewegungsverben und reflexiven Verben meistens: <strong>être + participe passé</strong>.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Imparfait</h4>
        <p>
          Benutze das Imparfait für Beschreibungen, Zustände, Gewohnheiten und Hintergrundhandlungen.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Plus-que-parfait</h4>
        <p>
          Benutze das Plus-que-parfait für das, was schon vor einer anderen vergangenen Handlung passiert war.
        </p>
      </div>
    </section>
  `
}

  
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_franzoesisch(container) {
  if (!container) {
    console.error("render_franzoesisch: Kein Container gefunden.");
    return;
  }

  injectFranzoesischStyles();

  container.innerHTML = `
    <section class="sf-fr-page">
      <div class="sf-fr-layout">
        <aside class="sf-fr-sidebar">
          <h2>Französisch</h2>
          <p>
            Wähle die Stufe aus.
          </p>

          <div class="sf-fr-gym-list">
            ${FRANZOESISCH_BEREICHE.map((bereich, index) => `
              <button
                class="sf-fr-gym-button ${index === 0 ? "active" : ""}"
                data-gym-id="${bereich.id}">
                <strong>${bereich.titel}</strong>
                <span>${bereich.untertitel}</span>
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-fr-content">
          <div id="sf-fr-content-inner"></div>
        </main>
      </div>
    </section>
  `;

  const contentInner = container.querySelector("#sf-fr-content-inner");
  const buttons = container.querySelectorAll(".sf-fr-gym-button");

  function showBereich(id, shouldScroll) {
    const bereich = FRANZOESISCH_BEREICHE.find(item => item.id === id);
    if (!bereich) return;

    buttons.forEach(button => {
      button.classList.toggle("active", button.dataset.gymId === id);
    });

    contentInner.innerHTML = `
      <article class="sf-fr-topic">
        <header class="sf-fr-topic-header">
          <p>${bereich.titel}</p>
          <h1>${bereich.untertitel}</h1>
          <span>${bereich.beschreibung}</span>
        </header>

        ${bereich.html}

        <div class="sf-fr-legal">
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

function toggleFranzoesischBox(id) {
  const box = document.getElementById(id);
  if (!box) return;
  box.classList.toggle("open");
}

window.toggleFranzoesischBox = toggleFranzoesischBox;


/* =========================
   CSS
========================= */

function injectFranzoesischStyles() {
  if (document.getElementById("sf-fr-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-fr-styles";

  style.textContent = `
    .sf-fr-page {
      width: 100%;
      color: #111827;
      font-family: Arial, Helvetica, sans-serif;
    }

    .sf-fr-layout {
      display: grid;
      grid-template-columns: 260px minmax(0, 1fr);
      gap: 22px;
      align-items: start;
    }

    .sf-fr-sidebar {
      position: sticky;
      top: 18px;
      background: #ffffff;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 18px 40px rgba(0,0,0,0.18);
      border: 1px solid #e5e7eb;
    }

    .sf-fr-sidebar h2 {
      margin: 0 0 6px;
      font-size: 26px;
      color: #111827;
    }

    .sf-fr-sidebar p {
      margin: 0 0 18px;
      color: #6b7280;
      line-height: 1.5;
      font-size: 14px;
    }

    .sf-fr-gym-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-fr-gym-button {
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

    .sf-fr-gym-button strong {
      display: block;
      font-size: 18px;
      margin-bottom: 3px;
    }

    .sf-fr-gym-button span {
      display: block;
      font-size: 13px;
      line-height: 1.35;
      color: #6b7280;
    }

    .sf-fr-gym-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
      border-color: #818cf8;
    }

    .sf-fr-gym-button.active {
      background: #111827;
      color: #ffffff;
      border-color: #111827;
    }

    .sf-fr-gym-button.active span {
      color: #d1d5db;
    }

    .sf-fr-content {
      min-width: 0;
    }

    .sf-fr-topic {
      background: #f3f4f6;
      border-radius: 24px;
      padding: 22px;
      border: 1px solid #e5e7eb;
    }

    .sf-fr-topic-header {
  background: linear-gradient(135deg, #111827, #334155);
  color: #ffffff;
  border-radius: 22px;
  padding: 30px;
  margin-bottom: 18px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
}

    .sf-fr-topic-header p {
      margin: 0 0 8px;
      color: #cbd5e1;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
    }

    .sf-fr-topic-header h1 {
      margin: 0 0 12px;
      font-size: clamp(32px, 5vw, 52px);
      line-height: 1.05;
    }

    .sf-fr-topic-header span {
      display: block;
      color: #e5e7eb;
      line-height: 1.6;
      max-width: 900px;
      font-size: 17px;
    }

    .sf-fr-section {
      background: #ffffff;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
    }

    .sf-fr-section h2 {
      margin: 0 0 12px;
      font-size: 32px;
      color: #111827;
    }

    .sf-fr-section h3 {
      margin: 0 0 14px;
      font-size: 26px;
      color: #111827;
    }

    .sf-fr-section h4 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #111827;
    }

    .sf-fr-section p {
      color: #374151;
      line-height: 1.7;
      margin: 0 0 14px;
      font-size: 16px;
    }

    .sf-fr-lead {
      font-size: 18px !important;
      color: #374151 !important;
      line-height: 1.75 !important;
    }

    .sf-fr-table-wrap {
      overflow-x: auto;
      margin: 18px 0;
    }

    .sf-fr-table {
      width: 100%;
      border-collapse: collapse;
      overflow: hidden;
      border-radius: 14px;
      font-size: 15px;
    }

    .sf-fr-table th {
      background: #111827;
      color: #ffffff;
      text-align: left;
      padding: 13px;
      border: 1px solid #1f2937;
      vertical-align: top;
    }

    .sf-fr-table td {
      padding: 13px;
      border: 1px solid #e5e7eb;
      color: #374151;
      vertical-align: top;
      line-height: 1.55;
    }

    .sf-fr-table tr:nth-child(even) td {
      background: #f9fafb;
    }

    .sf-fr-rule,
    .sf-fr-example,
    .sf-fr-task,
    .sf-fr-correction {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-left: 5px solid #2563eb;
      border-radius: 16px;
      padding: 18px;
      margin: 16px 0;
    }

    .sf-fr-example {
      border-left-color: #16a34a;
    }

    .sf-fr-task {
      border-left-color: #f59e0b;
    }

    .sf-fr-correction {
      border-left-color: #dc2626;
    }

    .sf-fr-rule ul,
    .sf-fr-example ul,
    .sf-fr-task ul {
      color: #374151;
      line-height: 1.7;
      margin: 8px 0 0 20px;
      padding: 0;
    }

    .sf-fr-compare {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin: 18px 0;
    }

    .sf-fr-compare > div {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
    }

    .sf-fr-toggle {
      margin-top: 6px;
      border: 0;
      background: #111827;
      color: #ffffff;
      padding: 10px 14px;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
    }

    .sf-fr-toggle:hover {
      background: #374151;
    }

    .sf-fr-hidden-box {
      display: none;
      margin-top: 14px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 16px;
    }

    .sf-fr-hidden-box.open {
      display: block;
    }

    .sf-fr-legal {
      background: #fff7ed;
      color: #7c2d12;
      border: 1px solid #fed7aa;
      border-radius: 16px;
      padding: 16px;
      line-height: 1.6;
      font-size: 14px;
    }

    @media (max-width: 900px) {
      .sf-fr-layout {
        grid-template-columns: 1fr;
      }

      .sf-fr-sidebar {
        position: static;
      }

      .sf-fr-compare {
        grid-template-columns: 1fr;
      }

      .sf-fr-topic {
        padding: 14px;
      }

      .sf-fr-section {
        padding: 18px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_franzoesisch = render_franzoesisch;
