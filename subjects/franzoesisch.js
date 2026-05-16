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
},
   
{
  id: "gym3",
  titel: "GYM3",
  untertitel: "Zeiten und Verwendung",
  beschreibung:
    "Alle wichtigen französischen Zeiten mit Erklärung, Bildung, Verwendung und Beispielen: Présent, Futur composé, Futur simple, Passé composé, Imparfait, Plus-que-parfait, Conditionnel und Subjonctif.",
  html: `
    <section class="sf-fr-section">
      <h2>GYM3 – Zeiten und Verwendung</h2>
      <p class="sf-fr-lead">
        In GYM3 geht es nicht nur darum, Zeiten zu bilden. Entscheidend ist, dass du verstehst,
        <strong>wann</strong> du welche Zeit verwendest. Besonders wichtig sind die Unterschiede zwischen
        <strong>Passé composé</strong>, <strong>Imparfait</strong> und <strong>Plus-que-parfait</strong>,
        weil dort sehr viele Fehler passieren.
      </p>

      <div class="sf-fr-rule">
        <h4>Grundidee</h4>
        <p>
          Eine Zeitform beantwortet immer eine Frage:
          Passiert etwas jetzt, früher, später, regelmässig, abgeschlossen, als Hintergrund
          oder sogar vor einer anderen vergangenen Handlung?
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>1. Überblick über die wichtigsten Zeiten</h3>
      <p>
        Diese Übersicht zeigt dir, welche Zeit wofür gebraucht wird.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Zeit</th>
              <th>Wofür?</th>
              <th>Beispiel</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Présent</td>
              <td>Gegenwart, Gewohnheit, allgemeine Aussage</td>
              <td>Je lis un texte.</td>
              <td>Ich lese einen Text.</td>
            </tr>
            <tr>
              <td>Futur composé</td>
              <td>nahe Zukunft, geplanter Vorgang</td>
              <td>Je vais lire un texte.</td>
              <td>Ich werde gleich / demnächst einen Text lesen.</td>
            </tr>
            <tr>
              <td>Futur simple</td>
              <td>Zukunft, Vorhersage, formeller Stil</td>
              <td>Je lirai un texte.</td>
              <td>Ich werde einen Text lesen.</td>
            </tr>
            <tr>
              <td>Passé composé</td>
              <td>abgeschlossene Handlung in der Vergangenheit</td>
              <td>J'ai lu un texte.</td>
              <td>Ich habe einen Text gelesen.</td>
            </tr>
            <tr>
              <td>Imparfait</td>
              <td>Beschreibung, Zustand, Gewohnheit, Hintergrund</td>
              <td>Je lisais souvent.</td>
              <td>Ich las oft / ich habe oft gelesen.</td>
            </tr>
            <tr>
              <td>Plus-que-parfait</td>
              <td>Vorvergangenheit</td>
              <td>J'avais lu le texte.</td>
              <td>Ich hatte den Text gelesen.</td>
            </tr>
            <tr>
              <td>Conditionnel présent</td>
              <td>Wunsch, Höflichkeit, Möglichkeit</td>
              <td>Je voudrais lire.</td>
              <td>Ich würde gerne lesen.</td>
            </tr>
            <tr>
              <td>Subjonctif présent</td>
              <td>Wunsch, Gefühl, Zweifel, Notwendigkeit</td>
              <td>Il faut que je lise.</td>
              <td>Es ist nötig, dass ich lese.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>2. Présent</h3>
      <p>
        Das <strong>Présent</strong> benutzt man für Handlungen in der Gegenwart,
        für regelmässige Handlungen und für allgemeine Aussagen.
      </p>

      <div class="sf-fr-rule">
        <h4>Verwendung</h4>
        <p>
          <strong>1. Jetzt:</strong> Je travaille maintenant.<br>
          <strong>2. Gewohnheit:</strong> Chaque jour, je prends le bus.<br>
          <strong>3. Allgemeine Aussage:</strong> L'eau est importante pour la vie.
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiele</h4>
        <p>
          <strong>Elle écrit une lettre.</strong><br>
          Sie schreibt einen Brief.
        </p>
        <p>
          <strong>Nous parlons français en classe.</strong><br>
          Wir sprechen Französisch im Unterricht.
        </p>
        <p>
          <strong>Le texte montre un conflit entre deux personnages.</strong><br>
          Der Text zeigt einen Konflikt zwischen zwei Figuren.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Wichtig für Textanalysen</h4>
        <p>
          In einer französischen Textanalyse verwendest du meistens das Présent:
          <strong>L'auteur montre...</strong>, <strong>Le narrateur décrit...</strong>,
          <strong>Ce passage souligne...</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>3. Futur composé</h3>
      <p>
        Das <strong>Futur composé</strong> benutzt man für eine nahe oder geplante Zukunft.
        Es ist im Alltag sehr häufig.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          <strong>aller im Présent + Infinitiv</strong>
        </p>
        <p>
          Je vais travailler.<br>
          Tu vas partir.<br>
          Elle va écrire.<br>
          Nous allons regarder.
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiele</h4>
        <p>
          <strong>Je vais réviser pour l'examen.</strong><br>
          Ich werde für die Prüfung lernen.
        </p>
        <p>
          <strong>Nous allons écrire une synthèse.</strong><br>
          Wir werden eine Synthèse schreiben.
        </p>
        <p>
          <strong>Elle va expliquer son opinion.</strong><br>
          Sie wird ihre Meinung erklären.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Wann benutzt man es?</h4>
        <p>
          Wenn etwas bald oder konkret geplant ist:
          <strong>Ce soir, je vais finir mes devoirs.</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>4. Futur simple</h3>
      <p>
        Das <strong>Futur simple</strong> benutzt man für zukünftige Handlungen,
        besonders in schriftlicher oder etwas formellerer Sprache.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          Bei vielen Verben nimmt man den Infinitiv und hängt diese Endungen an:
        </p>
        <p>
          <strong>-ai, -as, -a, -ons, -ez, -ont</strong>
        </p>
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
              <td>je parlerai</td>
              <td>je finirai</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu parleras</td>
              <td>tu finiras</td>
            </tr>
            <tr>
              <td>il / elle</td>
              <td>il parlera</td>
              <td>elle finira</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous parlerons</td>
              <td>nous finirons</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous parlerez</td>
              <td>vous finirez</td>
            </tr>
            <tr>
              <td>ils / elles</td>
              <td>ils parleront</td>
              <td>elles finiront</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>Wichtige unregelmässige Stämme</h4>
        <p>
          <strong>être</strong> → ser- : je serai<br>
          <strong>avoir</strong> → aur- : j'aurai<br>
          <strong>aller</strong> → ir- : j'irai<br>
          <strong>faire</strong> → fer- : je ferai<br>
          <strong>venir</strong> → viendr- : je viendrai<br>
          <strong>voir</strong> → verr- : je verrai<br>
          <strong>pouvoir</strong> → pourr- : je pourrai<br>
          <strong>vouloir</strong> → voudr- : je voudrai<br>
          <strong>devoir</strong> → devr- : je devrai
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiele</h4>
        <p>
          <strong>Demain, nous parlerons de ce problème.</strong><br>
          Morgen werden wir über dieses Problem sprechen.
        </p>
        <p>
          <strong>Elle fera plus attention.</strong><br>
          Sie wird besser aufpassen.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>5. Passé composé</h3>
      <p>
        Das <strong>Passé composé</strong> benutzt man für abgeschlossene Handlungen in der Vergangenheit.
        Es erzählt, was passiert ist.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          <strong>avoir oder être im Présent + participe passé</strong>
        </p>
        <p>
          <strong>J'ai travaillé.</strong><br>
          <strong>Elle est partie.</strong>
        </p>
      </div>

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
              <td>einmalige Handlung</td>
              <td>Hier, j'ai vu Marie.</td>
              <td>Gestern habe ich Marie gesehen.</td>
            </tr>
            <tr>
              <td>abgeschlossene Handlung</td>
              <td>Il a fini ses devoirs.</td>
              <td>Er hat seine Hausaufgaben beendet.</td>
            </tr>
            <tr>
              <td>Handlungskette</td>
              <td>Elle est entrée, elle a regardé autour d'elle et elle a souri.</td>
              <td>Mehrere Ereignisse passieren nacheinander.</td>
            </tr>
            <tr>
              <td>plötzliches Ereignis</td>
              <td>Je dormais quand le téléphone a sonné.</td>
              <td>Das Klingeln unterbricht die Hintergrundhandlung.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiel in einem kurzen Text</h4>
        <p>
          <strong>Hier, j'ai rencontré un ami. Nous avons parlé pendant une heure, puis nous sommes allés au café.</strong>
        </p>
        <p>
          Hier werden einzelne abgeschlossene Ereignisse erzählt.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>6. Imparfait</h3>
      <p>
        Das <strong>Imparfait</strong> benutzt man nicht für einzelne abgeschlossene Ereignisse,
        sondern für Beschreibungen, Zustände, Gewohnheiten und Hintergrundhandlungen.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          <strong>nous-Form im Présent ohne -ons + Endungen</strong>
        </p>
        <p>
          Endungen: <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong>
        </p>
      </div>

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
              <td>La ville était calme.</td>
              <td>Die Stadt war ruhig.</td>
            </tr>
            <tr>
              <td>Zustand</td>
              <td>J'étais fatigué.</td>
              <td>Ich war müde.</td>
            </tr>
            <tr>
              <td>Gewohnheit</td>
              <td>Chaque été, nous allions au lac.</td>
              <td>Jeden Sommer gingen wir an den See.</td>
            </tr>
            <tr>
              <td>Hintergrundhandlung</td>
              <td>Il pleuvait quand elle est sortie.</td>
              <td>Es regnete, als sie hinausging.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Typische Signalwörter</h4>
        <p>
          <strong>souvent</strong> – oft<br>
          <strong>toujours</strong> – immer<br>
          <strong>d'habitude</strong> – gewöhnlich<br>
          <strong>chaque jour</strong> – jeden Tag<br>
          <strong>quand j'étais petit</strong> – als ich klein war
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>7. Passé composé oder Imparfait?</h3>
      <p>
        Das ist einer der wichtigsten Unterschiede im Französischen.
        Merke dir:
      </p>

      <div class="sf-fr-compare">
        <div>
          <h4>Passé composé</h4>
          <p>
            <strong>Was ist passiert?</strong>
          </p>
          <p>
            Einzelne, abgeschlossene Ereignisse.
          </p>
          <p>
            <strong>J'ai ouvert la porte.</strong><br>
            Ich habe die Tür geöffnet.
          </p>
        </div>
        <div>
          <h4>Imparfait</h4>
          <p>
            <strong>Wie war die Situation?</strong>
          </p>
          <p>
            Hintergrund, Beschreibung, Zustand, Gewohnheit.
          </p>
          <p>
            <strong>La maison était sombre.</strong><br>
            Das Haus war dunkel.
          </p>
        </div>
      </div>

      <div class="sf-fr-rule">
        <h4>Merksatz</h4>
        <p>
          <strong>Passé composé</strong> = Handlung / Ereignis<br>
          <strong>Imparfait</strong> = Hintergrund / Zustand / Beschreibung
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiel mit Erklärung</h4>
        <p>
          <strong>Il faisait froid et je marchais dans la rue quand j'ai entendu un bruit.</strong>
        </p>
        <p>
          <strong>Il faisait froid</strong> = Beschreibung<br>
          <strong>je marchais</strong> = Hintergrundhandlung<br>
          <strong>j'ai entendu</strong> = plötzliches Ereignis
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>8. Plus-que-parfait</h3>
      <p>
        Das <strong>Plus-que-parfait</strong> benutzt man für eine Handlung,
        die schon vor einer anderen vergangenen Handlung passiert ist.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          <strong>avoir oder être im Imparfait + participe passé</strong>
        </p>
        <p>
          <strong>J'avais terminé.</strong><br>
          <strong>Elle était partie.</strong>
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Situation</th>
              <th>Beispiel</th>
              <th>Erklärung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>eine Handlung passiert früher</td>
              <td>Quand je suis arrivé, le cours avait déjà commencé.</td>
              <td>Der Kurs hatte schon begonnen, bevor ich ankam.</td>
            </tr>
            <tr>
              <td>Grund für einen Zustand</td>
              <td>Elle était triste parce qu'elle avait perdu son téléphone.</td>
              <td>Der Verlust war vorher passiert.</td>
            </tr>
            <tr>
              <td>Rückblick</td>
              <td>Il a compris qu'il avait oublié son livre.</td>
              <td>Er hatte das Buch schon vorher vergessen.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Zeitlinie</h4>
        <p>
          <strong>Le film avait commencé</strong> → früher<br>
          <strong>je suis arrivé</strong> → später
        </p>
        <p>
          Satz: <strong>Quand je suis arrivé, le film avait commencé.</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>9. Conditionnel présent</h3>
      <p>
        Das <strong>Conditionnel présent</strong> entspricht oft dem deutschen „würde“.
        Man benutzt es für Wünsche, höfliche Bitten, Möglichkeiten oder Bedingungen.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          Stamm des Futur simple + Imparfait-Endungen:
        </p>
        <p>
          <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong>
        </p>
      </div>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>parler</th>
              <th>être</th>
              <th>avoir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>je</td>
              <td>je parlerais</td>
              <td>je serais</td>
              <td>j'aurais</td>
            </tr>
            <tr>
              <td>tu</td>
              <td>tu parlerais</td>
              <td>tu serais</td>
              <td>tu aurais</td>
            </tr>
            <tr>
              <td>il / elle</td>
              <td>il parlerait</td>
              <td>elle serait</td>
              <td>il aurait</td>
            </tr>
            <tr>
              <td>nous</td>
              <td>nous parlerions</td>
              <td>nous serions</td>
              <td>nous aurions</td>
            </tr>
            <tr>
              <td>vous</td>
              <td>vous parleriez</td>
              <td>vous seriez</td>
              <td>vous auriez</td>
            </tr>
            <tr>
              <td>ils / elles</td>
              <td>ils parleraient</td>
              <td>elles seraient</td>
              <td>ils auraient</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiele</h4>
        <p>
          <strong>Je voudrais expliquer mon opinion.</strong><br>
          Ich würde gerne meine Meinung erklären.
        </p>
        <p>
          <strong>À sa place, je parlerais avec le professeur.</strong><br>
          An seiner Stelle würde ich mit dem Lehrer sprechen.
        </p>
        <p>
          <strong>Ce serait une bonne solution.</strong><br>
          Das wäre eine gute Lösung.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>10. Conditionnel passé</h3>
      <p>
        Das <strong>Conditionnel passé</strong> benutzt man für etwas, das in der Vergangenheit
        möglich gewesen wäre, aber nicht passiert ist.
      </p>

      <div class="sf-fr-rule">
        <h4>Bildung</h4>
        <p>
          <strong>avoir oder être im Conditionnel présent + participe passé</strong>
        </p>
        <p>
          <strong>J'aurais parlé.</strong><br>
          <strong>Elle serait partie.</strong>
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiele</h4>
        <p>
          <strong>J'aurais aidé mon ami, mais je n'avais pas le temps.</strong><br>
          Ich hätte meinem Freund geholfen, aber ich hatte keine Zeit.
        </p>
        <p>
          <strong>Elle serait venue si elle avait su.</strong><br>
          Sie wäre gekommen, wenn sie es gewusst hätte.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>11. Si-Sätze mit Zeiten</h3>
      <p>
        Bei <strong>si</strong>-Sätzen ist besonders wichtig, welche Zeit im Bedingungssatz
        und welche Zeit im Hauptsatz steht.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Bedingung</th>
              <th>Folge</th>
              <th>Beispiel</th>
              <th>Bedeutung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>si + présent</td>
              <td>futur simple / présent</td>
              <td>Si j'ai le temps, je viendrai.</td>
              <td>Wenn ich Zeit habe, werde ich kommen.</td>
            </tr>
            <tr>
              <td>si + imparfait</td>
              <td>conditionnel présent</td>
              <td>Si j'avais le temps, je viendrais.</td>
              <td>Wenn ich Zeit hätte, würde ich kommen.</td>
            </tr>
            <tr>
              <td>si + plus-que-parfait</td>
              <td>conditionnel passé</td>
              <td>Si j'avais eu le temps, je serais venu.</td>
              <td>Wenn ich Zeit gehabt hätte, wäre ich gekommen.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Si j'aurai le temps, je viendrai.</p>
        <p><strong>Richtig:</strong> Si j'ai le temps, je viendrai.</p>
        <p><strong>Erklärung:</strong> Nach <strong>si</strong> steht hier kein Futur simple.</p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>12. Subjonctif présent</h3>
      <p>
        Der <strong>Subjonctif</strong> ist keine normale Zeit wie Passé composé oder Imparfait,
        sondern ein Modus. Er steht oft nach Ausdrücken von Wunsch, Gefühl, Zweifel,
        Notwendigkeit oder Bewertung.
      </p>

      <div class="sf-fr-rule">
        <h4>Typische Auslöser</h4>
        <p>
          <strong>Il faut que</strong> – es ist nötig, dass<br>
          <strong>Je veux que</strong> – ich will, dass<br>
          <strong>Je suis content que</strong> – ich bin froh, dass<br>
          <strong>Il est important que</strong> – es ist wichtig, dass<br>
          <strong>Je doute que</strong> – ich bezweifle, dass<br>
          <strong>Bien que</strong> – obwohl
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiele</h4>
        <p>
          <strong>Il faut que tu comprennes ce texte.</strong><br>
          Es ist nötig, dass du diesen Text verstehst.
        </p>
        <p>
          <strong>Je suis content qu'elle soit ici.</strong><br>
          Ich bin froh, dass sie hier ist.
        </p>
        <p>
          <strong>Bien qu'il soit fatigué, il continue.</strong><br>
          Obwohl er müde ist, macht er weiter.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Indicatif oder Subjonctif?</h4>
        <p>
          <strong>Je pense qu'il vient.</strong> = Indicatif, eher Feststellung<br>
          <strong>Je veux qu'il vienne.</strong> = Subjonctif, Wunsch
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>13. Zeiten in einer Erzählung</h3>
      <p>
        In einer Erzählung kombiniert man oft mehrere Zeiten. Jede Zeit hat dabei eine bestimmte Aufgabe.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Funktion</th>
              <th>Zeit</th>
              <th>Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hintergrund beschreiben</td>
              <td>Imparfait</td>
              <td>Il faisait nuit et la rue était vide.</td>
            </tr>
            <tr>
              <td>Handlung erzählen</td>
              <td>Passé composé</td>
              <td>Soudain, elle a entendu un bruit.</td>
            </tr>
            <tr>
              <td>Noch frühere Handlung erklären</td>
              <td>Plus-que-parfait</td>
              <td>Elle avait oublié ses clés.</td>
            </tr>
            <tr>
              <td>Spätere Folge ankündigen</td>
              <td>Futur simple / Futur composé</td>
              <td>Elle va demander de l'aide.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Kurzer Beispieltext</h4>
        <p>
          <strong>Il faisait déjà sombre quand Léa est rentrée. Elle était fatiguée parce qu'elle avait travaillé toute la journée.
          Soudain, elle a remarqué que son sac n'était plus là. Elle va maintenant appeler son amie.</strong>
        </p>
        <p>
          <strong>Il faisait</strong> = Hintergrund<br>
          <strong>est rentrée</strong> = Ereignis<br>
          <strong>avait travaillé</strong> = Vorvergangenheit<br>
          <strong>va appeler</strong> = nahe Zukunft
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>14. Zeiten in einer Textanalyse</h3>
      <p>
        In einer Textanalyse verwendet man meistens das <strong>Présent</strong>,
        weil der Text beim Analysieren als gegenwärtig betrachtet wird.
      </p>

      <div class="sf-fr-rule">
        <h4>Gute Analyseformulierungen im Présent</h4>
        <p>
          <strong>Le texte montre que...</strong><br>
          <strong>L'auteur critique...</strong><br>
          <strong>Le narrateur décrit...</strong><br>
          <strong>Ce passage souligne...</strong><br>
          <strong>Cette phrase révèle...</strong><br>
          <strong>Le personnage semble...</strong>
        </p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Schwach:</strong> L'auteur a montré que le personnage était triste.</p>
        <p><strong>Besser:</strong> L'auteur montre que le personnage est triste.</p>
        <p><strong>Erklärung:</strong> In einer Textanalyse benutzt man normalerweise das Présent.</p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>15. Häufige Fehler bei Zeiten</h3>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Hier, je vais au cinéma.</p>
        <p><strong>Richtig:</strong> Hier, je suis allé au cinéma.</p>
        <p><strong>Erklärung:</strong> <strong>hier</strong> zeigt Vergangenheit. Deshalb braucht man hier Passé composé.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Quand j'étais petit, je suis allé souvent au parc.</p>
        <p><strong>Richtig:</strong> Quand j'étais petit, j'allais souvent au parc.</p>
        <p><strong>Erklärung:</strong> Eine Gewohnheit in der Vergangenheit steht meistens im Imparfait.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Quand je suis arrivé, le cours a déjà commencé.</p>
        <p><strong>Besser:</strong> Quand je suis arrivé, le cours avait déjà commencé.</p>
        <p><strong>Erklärung:</strong> Der Kurs begann vor dem Ankommen. Deshalb braucht man Plus-que-parfait.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Si j'aurai le temps, je t'aiderai.</p>
        <p><strong>Richtig:</strong> Si j'ai le temps, je t'aiderai.</p>
        <p><strong>Erklärung:</strong> Nach <strong>si</strong> steht hier kein Futur simple.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Il faut que tu viens.</p>
        <p><strong>Richtig:</strong> Il faut que tu viennes.</p>
        <p><strong>Erklärung:</strong> Nach <strong>il faut que</strong> steht der Subjonctif.</p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>16. Mini-Training für GYM3</h3>
      <p>
        Löse zuerst selbst. Danach kannst du die Lösung anzeigen.
      </p>

      <div class="sf-fr-task">
        <h4>Aufgabe 1 – Passé composé oder Imparfait?</h4>
        <p>Setze die richtige Zeit ein:</p>
        <p><strong>Il ___ froid quand nous ___ la maison.</strong></p>
        <p>faire / quitter</p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym3-l1')">Lösung anzeigen</button>
        <div id="fr-gym3-l1" class="sf-fr-hidden-box">
          <p><strong>Il faisait froid quand nous avons quitté la maison.</strong></p>
          <p><strong>faisait</strong> beschreibt den Hintergrund. <strong>avons quitté</strong> ist eine abgeschlossene Handlung.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 2 – Plus-que-parfait</h4>
        <p>Setze die frühere Handlung ins Plus-que-parfait:</p>
        <p><strong>Quand elle est arrivée, le train déjà partir.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym3-l2')">Lösung anzeigen</button>
        <div id="fr-gym3-l2" class="sf-fr-hidden-box">
          <p><strong>Quand elle est arrivée, le train était déjà parti.</strong></p>
          <p>Der Zug war schon vorher abgefahren. Deshalb braucht man <strong>était parti</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 3 – Futur simple</h4>
        <p>Setze ins Futur simple:</p>
        <p><strong>Nous faisons attention.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym3-l3')">Lösung anzeigen</button>
        <div id="fr-gym3-l3" class="sf-fr-hidden-box">
          <p><strong>Nous ferons attention.</strong></p>
          <p><strong>faire</strong> hat im Futur simple den Stamm <strong>fer-</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 4 – Conditionnel</h4>
        <p>Übersetze:</p>
        <p><strong>Ich würde gerne meine Meinung erklären.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym3-l4')">Lösung anzeigen</button>
        <div id="fr-gym3-l4" class="sf-fr-hidden-box">
          <p><strong>Je voudrais expliquer mon opinion.</strong></p>
          <p><strong>Je voudrais</strong> ist eine höfliche und sehr nützliche Form.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 5 – Si-Satz</h4>
        <p>Korrigiere:</p>
        <p><strong>Si j'aurai le temps, je viendrai.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym3-l5')">Lösung anzeigen</button>
        <div id="fr-gym3-l5" class="sf-fr-hidden-box">
          <p><strong>Si j'ai le temps, je viendrai.</strong></p>
          <p>Nach <strong>si</strong> steht hier Präsens, nicht Futur simple.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 6 – Subjonctif</h4>
        <p>Korrigiere:</p>
        <p><strong>Il est important que vous faites attention.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym3-l6')">Lösung anzeigen</button>
        <div id="fr-gym3-l6" class="sf-fr-hidden-box">
          <p><strong>Il est important que vous fassiez attention.</strong></p>
          <p>Nach <strong>il est important que</strong> steht der Subjonctif. Von <strong>faire</strong>: <strong>que vous fassiez</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 7 – Textanalyse im Présent</h4>
        <p>Verbessere:</p>
        <p><strong>L'auteur a montré que la situation était injuste.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym3-l7')">Lösung anzeigen</button>
        <div id="fr-gym3-l7" class="sf-fr-hidden-box">
          <p><strong>L'auteur montre que la situation est injuste.</strong></p>
          <p>In einer Textanalyse verwendet man normalerweise das Présent.</p>
        </div>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>17. Das Wichtigste für GYM3</h3>

      <div class="sf-fr-rule">
        <h4>Présent</h4>
        <p>
          Gegenwart, allgemeine Aussage und Textanalyse.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Passé composé</h4>
        <p>
          Abgeschlossene Handlung, Ereignis, Handlungskette.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Imparfait</h4>
        <p>
          Beschreibung, Zustand, Gewohnheit, Hintergrund.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Plus-que-parfait</h4>
        <p>
          Handlung, die vor einer anderen vergangenen Handlung passiert ist.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Conditionnel</h4>
        <p>
          Wunsch, Höflichkeit, Möglichkeit oder hypothetische Aussage.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Subjonctif</h4>
        <p>
          Nach Wunsch, Gefühl, Zweifel, Notwendigkeit oder Bewertung.
        </p>
      </div>
    </section>
  `
},
   
{
  id: "gym4",
  titel: "GYM4",
  untertitel: "Aufsatz und Synthèse",
  beschreibung:
    "Anleitung für französische Aufsätze und Synthèses: Aufbau, Einleitung, Hauptteil, Schluss, typische Fehler, gute Satzanfänge und nützliche Formulierungen.",
  html: `
    <section class="sf-fr-section">
      <h2>GYM4 – Aufsatz und Synthèse schreiben</h2>
      <p class="sf-fr-lead">
        In GYM4 geht es darum, längere französische Texte klar, korrekt und überzeugend zu schreiben.
        Besonders wichtig sind der Aufbau, gute Übergänge, genaue Formulierungen und typische Fehler,
        die man vermeiden muss.
      </p>

      <div class="sf-fr-rule">
        <h4>Grundregel</h4>
        <p>
          Ein guter französischer Text ist nicht möglichst kompliziert, sondern klar aufgebaut.
          Jeder Absatz braucht eine klare Funktion: einführen, erklären, begründen, vergleichen,
          zusammenfassen oder beurteilen.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>1. Der französische Aufsatz</h3>
      <p>
        Ein französischer Aufsatz ist meistens ein argumentativer Text. Du musst eine Frage beantworten,
        deine Meinung begründen und deine Gedanken logisch ordnen.
      </p>

      <div class="sf-fr-rule">
        <h4>Typische Themen</h4>
        <p>
          Les réseaux sociaux sont-ils dangereux pour les jeunes ?<br>
          Faut-il interdire les téléphones portables à l'école ?<br>
          Est-ce que les devoirs sont encore utiles ?<br>
          La lecture est-elle encore importante aujourd'hui ?<br>
          Les jeunes ont-ils trop de pression à l'école ?
        </p>
      </div>

      <div class="sf-fr-compare">
        <div>
          <h4>Schwach</h4>
          <p>
            Je pense que les téléphones sont bons parce que tout le monde les utilise.
          </p>
        </div>
        <div>
          <h4>Besser</h4>
          <p>
            À mon avis, les téléphones portables peuvent être utiles à l'école s'ils sont utilisés de manière responsable.
            Ils permettent de chercher rapidement des informations, mais ils peuvent aussi distraire les élèves.
          </p>
        </div>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>2. Aufbau eines Aufsatzes</h3>
      <p>
        Ein guter Aufsatz besteht aus drei Hauptteilen: Einleitung, Hauptteil und Schluss.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Teil</th>
              <th>Inhalt</th>
              <th>Nützliche Formulierung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Introduction</td>
              <td>Thema einführen und Fragestellung nennen</td>
              <td>Aujourd'hui, la question de ... est souvent discutée.</td>
            </tr>
            <tr>
              <td>Développement</td>
              <td>Argumente erklären, Beispiele geben, eventuell Gegenargumente nennen</td>
              <td>Un premier argument est que ...</td>
            </tr>
            <tr>
              <td>Conclusion</td>
              <td>Gedanken zusammenfassen und eigene Position klar nennen</td>
              <td>En conclusion, on peut dire que ...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-rule">
        <h4>Wichtig</h4>
        <p>
          Schreibe nicht einfach eine Liste von Meinungen. Jeder Gedanke braucht eine Begründung
          und möglichst ein Beispiel.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>3. Eine gute Einleitung schreiben</h3>
      <p>
        Die Einleitung soll das Thema verständlich einführen. Sie darf nicht zu lang sein.
        Wichtig ist, dass am Ende klar wird, worüber du schreiben wirst.
      </p>

      <div class="sf-fr-rule">
        <h4>Aufbau der Einleitung</h4>
        <p>
          <strong>1. Allgemeiner Einstieg:</strong> Thema nennen<br>
          <strong>2. Problem zeigen:</strong> Warum ist das Thema wichtig?<br>
          <strong>3. Fragestellung:</strong> Welche Frage wird diskutiert?
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiel</h4>
        <p>
          <strong>
            Aujourd'hui, les réseaux sociaux jouent un rôle important dans la vie des jeunes.
            Ils permettent de communiquer rapidement, mais ils peuvent aussi créer de la pression.
            Il faut donc se demander si les réseaux sociaux sont plutôt utiles ou dangereux pour les adolescents.
          </strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Gute Einleitungssätze</h4>
        <p>
          <strong>Aujourd'hui, le thème de ... est très important.</strong><br>
          <strong>De nos jours, beaucoup de jeunes utilisent ...</strong><br>
          <strong>La question de ... est souvent discutée.</strong><br>
          <strong>Il faut se demander si ...</strong><br>
          <strong>Dans cette rédaction, je vais discuter la question suivante : ...</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>4. Einen guten Hauptteil schreiben</h3>
      <p>
        Im Hauptteil entwickelst du deine Argumente. Ein gutes Argument besteht aus Behauptung,
        Erklärung und Beispiel.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Teil</th>
              <th>Funktion</th>
              <th>Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Argument</td>
              <td>Was ist dein Punkt?</td>
              <td>Les réseaux sociaux peuvent aider les jeunes à rester en contact.</td>
            </tr>
            <tr>
              <td>Explication</td>
              <td>Warum ist das so?</td>
              <td>Ils permettent de communiquer rapidement avec des amis ou la famille.</td>
            </tr>
            <tr>
              <td>Exemple</td>
              <td>Woran sieht man das konkret?</td>
              <td>Par exemple, un élève peut demander de l'aide à un camarade après l'école.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-fr-example">
        <h4>Guter Argumentationsabsatz</h4>
        <p>
          <strong>
            Un premier avantage des réseaux sociaux est qu'ils facilitent la communication.
            Les jeunes peuvent rester en contact avec leurs amis, même s'ils n'habitent pas dans la même ville.
            Par exemple, un élève peut poser une question à un camarade lorsqu'il ne comprend pas un devoir.
            Ainsi, les réseaux sociaux peuvent aussi avoir une fonction pratique.
          </strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>5. Gegenargumente einbauen</h3>
      <p>
        Ein guter Aufsatz zeigt oft beide Seiten. Dadurch wirkt dein Text reifer und überzeugender.
      </p>

      <div class="sf-fr-rule">
        <h4>Nützliche Formulierungen</h4>
        <p>
          <strong>D'un côté, ...</strong> – Einerseits ...<br>
          <strong>D'un autre côté, ...</strong> – Andererseits ...<br>
          <strong>Il est vrai que ...</strong> – Es stimmt, dass ...<br>
          <strong>Cependant, ...</strong> – Jedoch ...<br>
          <strong>Malgré cet argument, ...</strong> – Trotz dieses Arguments ...<br>
          <strong>On peut aussi dire que ...</strong> – Man kann auch sagen, dass ...
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiel</h4>
        <p>
          <strong>
            Il est vrai que les téléphones portables peuvent distraire les élèves pendant les cours.
            Cependant, cela ne signifie pas qu'ils doivent être complètement interdits.
            Avec des règles claires, ils peuvent aussi devenir un outil utile pour apprendre.
          </strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>6. Einen guten Schluss schreiben</h3>
      <p>
        Im Schluss fasst du deine wichtigsten Gedanken kurz zusammen und gibst eine klare Antwort
        auf die Fragestellung.
      </p>

      <div class="sf-fr-rule">
        <h4>Aufbau des Schlusses</h4>
        <p>
          <strong>1. Zusammenfassen:</strong> Was waren die wichtigsten Punkte?<br>
          <strong>2. Urteil:</strong> Was ist deine Position?<br>
          <strong>3. Ausblick:</strong> Was könnte in Zukunft wichtig sein?
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiel</h4>
        <p>
          <strong>
            En conclusion, les réseaux sociaux ont des avantages et des inconvénients.
            Ils peuvent faciliter la communication, mais ils peuvent aussi créer de la pression.
            À mon avis, il ne faut pas les interdire, mais apprendre aux jeunes à les utiliser de manière responsable.
          </strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Gute Schlusssätze</h4>
        <p>
          <strong>En conclusion, on peut dire que ...</strong><br>
          <strong>Pour conclure, je pense que ...</strong><br>
          <strong>Finalement, il est important de ...</strong><br>
          <strong>À mon avis, la meilleure solution serait de ...</strong><br>
          <strong>Il faudrait donc ...</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>7. Die Synthèse: Was ist das?</h3>
      <p>
        Eine <strong>synthèse</strong> ist keine normale Zusammenfassung und auch kein persönlicher Aufsatz.
        Du bekommst meistens mehrere Texte oder Dokumente und musst die wichtigsten Informationen
        geordnet zusammenführen.
      </p>

      <div class="sf-fr-rule">
        <h4>Wichtigster Unterschied</h4>
        <p>
          In einer Synthèse geht es nicht zuerst um deine persönliche Meinung.
          Du sollst zeigen, was die Dokumente gemeinsam sagen, wo sie sich unterscheiden
          und welche Hauptideen daraus entstehen.
        </p>
      </div>

      <div class="sf-fr-compare">
        <div>
          <h4>Résumé</h4>
          <p>
            Du fasst einen Text kurz zusammen.
          </p>
        </div>
        <div>
          <h4>Synthèse</h4>
          <p>
            Du verbindest mehrere Informationen aus mehreren Dokumenten zu einem geordneten Text.
          </p>
        </div>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>8. Aufbau einer Synthèse</h3>
      <p>
        Eine Synthèse braucht einen klaren, sachlichen Aufbau.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Teil</th>
              <th>Inhalt</th>
              <th>Formulierung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Introduction</td>
              <td>Thema und zentrale Fragestellung nennen</td>
              <td>Les documents traitent du thème de ...</td>
            </tr>
            <tr>
              <td>Partie 1</td>
              <td>Erste Hauptidee erklären</td>
              <td>Tout d'abord, les documents montrent que ...</td>
            </tr>
            <tr>
              <td>Partie 2</td>
              <td>Zweite Hauptidee erklären</td>
              <td>Ensuite, on constate que ...</td>
            </tr>
            <tr>
              <td>Partie 3</td>
              <td>Unterschiede oder weitere Perspektive erklären</td>
              <td>Enfin, les documents soulignent aussi que ...</td>
            </tr>
            <tr>
              <td>Conclusion</td>
              <td>Hauptaussage knapp zusammenfassen</td>
              <td>Pour conclure, les documents mettent en évidence que ...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>9. Gute Formulierungen für eine Synthèse</h3>

      <div class="sf-fr-rule">
        <h4>Einleitung</h4>
        <p>
          <strong>Les documents abordent le thème de ...</strong><br>
          <strong>Le corpus traite de la question de ...</strong><br>
          <strong>Les textes présentent différentes perspectives sur ...</strong><br>
          <strong>Il s'agit donc de comprendre comment ...</strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Dokumente verbinden</h4>
        <p>
          <strong>Le premier document montre que ...</strong><br>
          <strong>Le deuxième document souligne ...</strong><br>
          <strong>Ces deux documents mettent en évidence ...</strong><br>
          <strong>Contrairement au premier texte, le deuxième insiste sur ...</strong><br>
          <strong>Les documents se complètent, car ...</strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Vergleichen</h4>
        <p>
          <strong>Alors que ...</strong> – Während ...<br>
          <strong>En revanche, ...</strong> – Hingegen ...<br>
          <strong>Contrairement à ...</strong> – Im Gegensatz zu ...<br>
          <strong>De même, ...</strong> – Ebenso ...<br>
          <strong>Les deux textes montrent que ...</strong> – Beide Texte zeigen, dass ...
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Schluss</h4>
        <p>
          <strong>Pour conclure, les documents montrent que ...</strong><br>
          <strong>En résumé, le corpus met en évidence ...</strong><br>
          <strong>La synthèse des documents permet de comprendre que ...</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>10. Was du in einer Synthèse vermeiden solltest</h3>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Fehler</th>
              <th>Warum schlecht?</th>
              <th>Besser</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ich-Form benutzen</td>
              <td>Eine Synthèse ist sachlich.</td>
              <td>Les documents montrent que ...</td>
            </tr>
            <tr>
              <td>Nur Dokument 1, dann Dokument 2, dann Dokument 3 nacherzählen</td>
              <td>Das ist eher eine Zusammenfassung als eine Synthèse.</td>
              <td>Nach Hauptideen ordnen.</td>
            </tr>
            <tr>
              <td>Eigene Meinung zu früh einbauen</td>
              <td>Die Dokumente stehen im Zentrum.</td>
              <td>Zuerst die Dokumente darstellen.</td>
            </tr>
            <tr>
              <td>Lange Zitate kopieren</td>
              <td>Eine Synthèse soll zusammenführen, nicht abschreiben.</td>
              <td>Kurz paraphrasieren.</td>
            </tr>
            <tr>
              <td>Keine Übergänge verwenden</td>
              <td>Der Text wirkt unverbunden.</td>
              <td>Connecteurs logiques verwenden.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>11. Connecteurs logiques: Einleitungswörter und Übergänge</h3>
      <p>
        Gute Verbindungswörter machen deinen Text strukturierter und gymnasialer.
      </p>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Funktion</th>
              <th>Französisch</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beginnen</td>
              <td>tout d'abord, premièrement, au début</td>
              <td>zuerst, erstens, am Anfang</td>
            </tr>
            <tr>
              <td>Ergänzen</td>
              <td>de plus, en outre, aussi, également</td>
              <td>ausserdem, zusätzlich, auch, ebenfalls</td>
            </tr>
            <tr>
              <td>Begründen</td>
              <td>car, parce que, puisque, en effet</td>
              <td>denn, weil, da, tatsächlich</td>
            </tr>
            <tr>
              <td>Folge zeigen</td>
              <td>donc, ainsi, c'est pourquoi, par conséquent</td>
              <td>also, somit, deshalb, folglich</td>
            </tr>
            <tr>
              <td>Gegensatz</td>
              <td>mais, cependant, pourtant, en revanche, toutefois</td>
              <td>aber, jedoch, dennoch, hingegen, allerdings</td>
            </tr>
            <tr>
              <td>Beispiel geben</td>
              <td>par exemple, notamment, comme le montre ...</td>
              <td>zum Beispiel, insbesondere, wie ... zeigt</td>
            </tr>
            <tr>
              <td>Zusammenfassen</td>
              <td>en résumé, en somme, pour conclure</td>
              <td>zusammenfassend, insgesamt, abschliessend</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>12. Gute Sätze für einen Aufsatz</h3>

      <div class="sf-fr-rule">
        <h4>Meinung ausdrücken</h4>
        <p>
          <strong>À mon avis, ...</strong><br>
          <strong>Selon moi, ...</strong><br>
          <strong>Je pense que ...</strong><br>
          <strong>Je suis convaincu que ...</strong><br>
          <strong>Il me semble que ...</strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Argumente einführen</h4>
        <p>
          <strong>Un premier argument est que ...</strong><br>
          <strong>Un autre aspect important est ...</strong><br>
          <strong>Il faut aussi prendre en compte que ...</strong><br>
          <strong>On ne doit pas oublier que ...</strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Beispiele geben</h4>
        <p>
          <strong>Par exemple, ...</strong><br>
          <strong>On peut penser à ...</strong><br>
          <strong>Cela se voit surtout quand ...</strong><br>
          <strong>Un exemple concret est ...</strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Abwägen</h4>
        <p>
          <strong>D'un côté ..., mais de l'autre côté ...</strong><br>
          <strong>Il est vrai que ..., cependant ...</strong><br>
          <strong>Même si cet argument est important, ...</strong><br>
          <strong>Malgré ces avantages, il existe aussi des problèmes.</strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>13. Gute Sätze für eine Textanalyse</h3>
      <p>
        In einer Analyse verwendest du meistens das Présent und formulierst sachlich.
      </p>

      <div class="sf-fr-rule">
        <h4>Nützliche Analyseformulierungen</h4>
        <p>
          <strong>Le texte montre que ...</strong><br>
          <strong>L'auteur critique ...</strong><br>
          <strong>Le narrateur décrit ...</strong><br>
          <strong>Ce passage souligne ...</strong><br>
          <strong>Cette phrase met en évidence ...</strong><br>
          <strong>Le personnage semble ...</strong><br>
          <strong>La situation révèle ...</strong><br>
          <strong>Le choix des mots crée une atmosphère ...</strong>
        </p>
      </div>

      <div class="sf-fr-example">
        <h4>Beispiel</h4>
        <p>
          <strong>
            Ce passage montre que le personnage se sent isolé.
            Le choix des mots crée une atmosphère triste et souligne son sentiment de solitude.
          </strong>
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>14. Häufige Fehler im französischen Schreiben</h3>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> cet passage montre que...</p>
        <p><strong>Richtig:</strong> ce passage montre que...</p>
        <p><strong>Erklärung:</strong> <strong>passage</strong> ist maskulin und beginnt mit einem Konsonanten. Deshalb braucht man <strong>ce</strong>.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> cette problème est important.</p>
        <p><strong>Richtig:</strong> ce problème est important.</p>
        <p><strong>Erklärung:</strong> <strong>problème</strong> ist maskulin.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> les jeunes sont beaucoup stressés.</p>
        <p><strong>Besser:</strong> les jeunes sont très stressés.</p>
        <p><strong>Erklärung:</strong> Bei Adjektiven benutzt man meistens <strong>très</strong>, nicht <strong>beaucoup</strong>.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Je suis agree avec cette opinion.</p>
        <p><strong>Richtig:</strong> Je suis d'accord avec cette opinion.</p>
        <p><strong>Erklärung:</strong> Französisch benutzt hier nicht das englische <strong>agree</strong>, sondern <strong>être d'accord</strong>.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Je pense, que les devoirs sont utiles.</p>
        <p><strong>Richtig:</strong> Je pense que les devoirs sont utiles.</p>
        <p><strong>Erklärung:</strong> Im Französischen steht normalerweise kein Komma vor <strong>que</strong>.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Beaucoup des élèves utilisent leur téléphone.</p>
        <p><strong>Richtig:</strong> Beaucoup d'élèves utilisent leur téléphone.</p>
        <p><strong>Erklärung:</strong> Nach <strong>beaucoup</strong> steht meistens <strong>de</strong>.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> À la fin, je can dire que...</p>
        <p><strong>Richtig:</strong> Pour conclure, je peux dire que...</p>
        <p><strong>Erklärung:</strong> Nicht Englisch und Französisch mischen. <strong>can</strong> ist Englisch; Französisch: <strong>je peux</strong>.</p>
      </div>

      <div class="sf-fr-correction">
        <p><strong>Falsch:</strong> Le texte est écrit très good.</p>
        <p><strong>Richtig:</strong> Le texte est bien écrit.</p>
        <p><strong>Erklärung:</strong> <strong>good</strong> ist Englisch. Im Französischen sagt man hier <strong>bien écrit</strong>.</p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>15. Häufige deutsche Denkfehler im Französischen</h3>

      <div class="sf-fr-table-wrap">
        <table class="sf-fr-table">
          <thead>
            <tr>
              <th>Deutsch gedacht</th>
              <th>Falsch auf Französisch</th>
              <th>Richtig</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ich bin einverstanden</td>
              <td>Je suis agree</td>
              <td>Je suis d'accord.</td>
            </tr>
            <tr>
              <td>Ich habe 16 Jahre</td>
              <td>Je suis 16 ans</td>
              <td>J'ai 16 ans.</td>
            </tr>
            <tr>
              <td>Ich mache meine Hausaufgaben</td>
              <td>Je fais mes devoir</td>
              <td>Je fais mes devoirs.</td>
            </tr>
            <tr>
              <td>Viele Schüler</td>
              <td>beaucoup des élèves</td>
              <td>beaucoup d'élèves</td>
            </tr>
            <tr>
              <td>Dieser Abschnitt</td>
              <td>cet passage</td>
              <td>ce passage</td>
            </tr>
            <tr>
              <td>Meiner Meinung nach</td>
              <td>Dans mon opinion</td>
              <td>À mon avis</td>
            </tr>
            <tr>
              <td>Ich interessiere mich für</td>
              <td>Je suis intéressé pour</td>
              <td>Je m'intéresse à</td>
            </tr>
            <tr>
              <td>Ich warte auf</td>
              <td>J'attends pour</td>
              <td>J'attends</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>16. Mini-Muster: Aufsatzabschnitt</h3>
      <p>
        So könnte ein guter Abschnitt in einem französischen Aufsatz aussehen:
      </p>

      <div class="sf-fr-example">
        <h4>Beispielabsatz</h4>
        <p>
          <strong>
            Un argument important contre l'utilisation excessive des réseaux sociaux est la pression sociale.
            Beaucoup de jeunes comparent leur vie avec celle des autres et pensent qu'ils doivent toujours être parfaits.
            Par exemple, les photos publiées en ligne montrent souvent seulement les meilleurs moments.
            Cela peut créer un sentiment d'insécurité et de frustration.
            C'est pourquoi il est important d'apprendre à utiliser les réseaux sociaux avec distance.
          </strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Warum ist dieser Abschnitt gut?</h4>
        <p>
          Er beginnt mit einem klaren Argument, erklärt den Gedanken, gibt ein Beispiel
          und zieht eine logische Schlussfolgerung.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>17. Mini-Muster: Synthèse-Abschnitt</h3>
      <p>
        In einer Synthèse sollst du sachlich schreiben und mehrere Dokumente miteinander verbinden.
      </p>

      <div class="sf-fr-example">
        <h4>Beispielabsatz</h4>
        <p>
          <strong>
            Tout d'abord, les documents montrent que les réseaux sociaux occupent une place importante dans la vie des jeunes.
            Le premier document insiste sur leur rôle dans la communication quotidienne,
            tandis que le deuxième document souligne les risques liés à la comparaison sociale.
            Ainsi, le corpus présente les réseaux sociaux comme un outil utile, mais aussi comme une source possible de pression.
          </strong>
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Warum ist dieser Abschnitt gut?</h4>
        <p>
          Er nennt eine Hauptidee, verbindet zwei Dokumente und formuliert eine gemeinsame Aussage,
          ohne einfach nur nachzuerzählen.
        </p>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>18. Mini-Training für GYM4</h3>
      <p>
        Löse zuerst selbst. Danach kannst du die Lösung anzeigen.
      </p>

      <div class="sf-fr-task">
        <h4>Aufgabe 1 – Einleitung verbessern</h4>
        <p>Verbessere diese Einleitung:</p>
        <p><strong>Je vais parler des téléphones. Les téléphones sont bien et mauvais.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym4-l1')">Lösung anzeigen</button>
        <div id="fr-gym4-l1" class="sf-fr-hidden-box">
          <p>
            <strong>
              Aujourd'hui, les téléphones portables jouent un rôle important dans la vie des jeunes.
              Ils peuvent être utiles pour communiquer et apprendre, mais ils peuvent aussi distraire.
              Il faut donc se demander s'ils devraient être autorisés à l'école.
            </strong>
          </p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 2 – Fehler korrigieren</h4>
        <p>Korrigiere:</p>
        <p><strong>Cet passage montre que les jeunes sont beaucoup stressés.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym4-l2')">Lösung anzeigen</button>
        <div id="fr-gym4-l2" class="sf-fr-hidden-box">
          <p><strong>Ce passage montre que les jeunes sont très stressés.</strong></p>
          <p><strong>passage</strong> braucht <strong>ce</strong>. Bei Adjektiven benutzt man meistens <strong>très</strong>.</p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 3 – Argument ausbauen</h4>
        <p>Baue dieses Argument aus:</p>
        <p><strong>Les devoirs sont utiles.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym4-l3')">Lösung anzeigen</button>
        <div id="fr-gym4-l3" class="sf-fr-hidden-box">
          <p>
            <strong>
              Les devoirs sont utiles parce qu'ils permettent aux élèves de revoir ce qu'ils ont appris en classe.
              En travaillant seuls, ils peuvent vérifier s'ils ont vraiment compris la matière.
              Par exemple, en mathématiques ou en langues, il faut souvent s'entraîner régulièrement pour progresser.
            </strong>
          </p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 4 – Synthèse-Satz verbessern</h4>
        <p>Verbessere:</p>
        <p><strong>Document 1 dit ça et document 2 dit autre chose.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym4-l4')">Lösung anzeigen</button>
        <div id="fr-gym4-l4" class="sf-fr-hidden-box">
          <p>
            <strong>
              Le premier document met en avant les avantages de cette situation,
              tandis que le deuxième document insiste davantage sur ses conséquences négatives.
            </strong>
          </p>
        </div>
      </div>

      <div class="sf-fr-task">
        <h4>Aufgabe 5 – Schluss formulieren</h4>
        <p>Schreibe einen besseren Schluss für das Thema soziale Medien:</p>
        <p><strong>Donc les réseaux sociaux sont bien mais aussi pas bien.</strong></p>
        <button class="sf-fr-toggle" onclick="toggleFranzoesischBox('fr-gym4-l5')">Lösung anzeigen</button>
        <div id="fr-gym4-l5" class="sf-fr-hidden-box">
          <p>
            <strong>
              En conclusion, les réseaux sociaux présentent à la fois des avantages et des risques.
              Ils facilitent la communication, mais ils peuvent aussi créer de la pression.
              À mon avis, il est donc essentiel d'apprendre à les utiliser de manière responsable.
            </strong>
          </p>
        </div>
      </div>
    </section>

    <section class="sf-fr-section">
      <h3>19. Das Wichtigste für GYM4</h3>

      <div class="sf-fr-rule">
        <h4>Aufsatz</h4>
        <p>
          Einleitung, Hauptteil, Schluss. Jedes Argument braucht Erklärung und Beispiel.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Synthèse</h4>
        <p>
          Nicht deine Meinung steht im Zentrum, sondern die Verbindung der Dokumente.
          Ordne nach Hauptideen, nicht einfach nach Dokument 1, 2 und 3.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Stil</h4>
        <p>
          Benutze klare Übergänge wie <strong>tout d'abord</strong>, <strong>de plus</strong>,
          <strong>cependant</strong>, <strong>ainsi</strong> und <strong>pour conclure</strong>.
        </p>
      </div>

      <div class="sf-fr-rule">
        <h4>Fehler vermeiden</h4>
        <p>
          Nicht: <strong>cet passage</strong>, sondern <strong>ce passage</strong>.<br>
          Nicht: <strong>beaucoup des élèves</strong>, sondern <strong>beaucoup d'élèves</strong>.<br>
          Nicht: <strong>Je suis agree</strong>, sondern <strong>Je suis d'accord</strong>.
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
