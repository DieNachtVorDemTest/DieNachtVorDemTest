function frGym1InfoButton(id) {
  return `<button class="info-btn" onclick="toggleInfo('${id}')" title="Anleitung anzeigen">i</button>`;
}

function frGym1InfoBox(id, html) {
  return `
    <div id="${id}" class="info-box hidden">
      <strong>Abstrakte Anleitung:</strong>
      ${html}
    </div>
  `;
}

function render_franzoesisch_gym1() {
  window.setMaterialTitle("Französisch · GYM1 · Grammatik und Vocabulaire");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren französische Grammatik und Wortschatz auf ähnlichem Niveau, aber mit vollständig neuen Sätzen.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 1 · Les quatre modes</h3>
        ${frGym1InfoButton("fr1-info-1")}
      </div>
      ${frGym1InfoBox("fr1-info-1", `
        <ul>
          <li>Indicatif: reale Aussage oder Tatsache.</li>
          <li>Subjonctif: Wunsch, Zweifel, Gefühl, Notwendigkeit.</li>
          <li>Impératif: Befehl, Aufforderung oder Bitte.</li>
          <li>Conditionnel: Möglichkeit, Höflichkeit oder Bedingung.</li>
          <li>Schreibe pro Modus einen klaren Satz mit einem anderen Verb.</li>
        </ul>
      `)}
      <p>Écrivez quatre phrases différentes. Utilisez une fois chaque mode: indicatif, subjonctif, impératif, conditionnel.</p>
      <ol type="a">
        <li>Une phrase à l’indicatif sur une activité scolaire.</li>
        <li>Une phrase au subjonctif après une expression de nécessité.</li>
        <li>Une phrase à l’impératif pour donner un conseil.</li>
        <li>Une phrase au conditionnel pour exprimer un souhait.</li>
      </ol>
      <div class="formula">
        Exemple de structure: Il faut que ... / Fais ... / Je voudrais ... / Nous avons ...
      </div>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 2 · Questions par inversion</h3>
        ${frGym1InfoButton("fr1-info-2")}
      </div>
      ${frGym1InfoBox("fr1-info-2", `
        <ul>
          <li>Bei der Inversion steht das Verb vor dem Subjektpronomen.</li>
          <li>Zwischen Verb und Pronomen steht ein Bindestrich.</li>
          <li>Bei il/elle/on fügt man manchmal -t- ein: parle-t-il?</li>
          <li>Die Bedeutung darf sich nicht ändern.</li>
        </ul>
      `)}
      <p>Transformez les questions en langage soutenu avec inversion.</p>
      <ol>
        <li>Tu viens au cours demain?</li>
        <li>Est-ce que nous devons finir ce travail?</li>
        <li>Est-ce que cette élève comprend la consigne?</li>
        <li>Où est-ce que vous avez acheté ce livre?</li>
        <li>Quand est-ce que le train arrive?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 3 · Pronoms possessifs et démonstratifs</h3>
        ${frGym1InfoButton("fr1-info-3")}
      </div>
      ${frGym1InfoBox("fr1-info-3", `
        <ul>
          <li>Possessivpronomen ersetzen ein Nomen mit Besitzangabe: le mien, la tienne, les leurs.</li>
          <li>Demonstrativpronomen ersetzen ein Nomen mit Hinweis: celui, celle, ceux, celles.</li>
          <li>Achte auf Genus und Numerus des ersetzten Nomens.</li>
          <li>Kopiere nicht den ganzen Satz, sondern ersetze nur die markierte Gruppe.</li>
        </ul>
      `)}
      <p>Remplacez le groupe souligné par un pronom possessif ou démonstratif.</p>
      <ol>
        <li>Ce sac ressemble à <u>mon sac</u>.</li>
        <li>Je préfère <u>cette veste-ci</u> à <u>cette veste-là</u>.</li>
        <li>Vos exercices sont terminés, mais <u>nos exercices</u> ne sont pas corrigés.</li>
        <li>Il a choisi ce roman, mais sa sœur voulait lire <u>ce roman-là</u>.</li>
        <li>Ces chaussures sont trop petites; je vais prendre <u>les chaussures qui sont sur l’étagère</u>.</li>
        <li>Ton opinion est intéressante, mais <u>l’opinion de ton frère</u> est différente.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 4 · Pronoms directs, indirects, y et en</h3>
        ${frGym1InfoButton("fr1-info-4")}
      </div>
      ${frGym1InfoBox("fr1-info-4", `
        <ul>
          <li>Direktes Objekt: le, la, l’, les.</li>
          <li>Indirektes Objekt bei à + Person: lui, leur.</li>
          <li>y ersetzt meistens Ortsangaben oder à + Sache.</li>
          <li>en ersetzt de + Sache oder Mengenangaben.</li>
          <li>Im passé composé steht das Pronomen vor dem Hilfsverb.</li>
        </ul>
      `)}
      <p>Répondez en remplaçant les mots soulignés par les bons pronoms.</p>
      <ol>
        <li>Tu as vu <u>les affiches</u>? — Oui, je ...</li>
        <li>Vous parlez souvent <u>à votre professeur</u>? — Oui, nous ...</li>
        <li>Elle pense encore <u>à son examen</u>? — Oui, elle ...</li>
        <li>Ils reviennent <u>de la bibliothèque</u>? — Oui, ils ...</li>
        <li>Tu as acheté <u>trois cahiers</u>? — Oui, j’...</li>
        <li>Vous avez répondu <u>aux élèves</u>? — Non, nous ...</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 5 · Impératif avec deux pronoms</h3>
        ${frGym1InfoButton("fr1-info-5")}
      </div>
      ${frGym1InfoBox("fr1-info-5", `
        <ul>
          <li>Beim bejahten Imperativ stehen Pronomen nach dem Verb: Donne-le-moi.</li>
          <li>Beim verneinten Imperativ stehen sie vor dem Verb: Ne me le donne pas.</li>
          <li>Bei me/te wird im bejahten Imperativ oft moi/toi verwendet.</li>
          <li>Achte auf die sinnvolle Reihenfolge der Pronomen.</li>
        </ul>
      `)}
      <p>Réécrivez les phrases à l’impératif affirmatif ou négatif avec deux pronoms.</p>
      <ol>
        <li>Tu montres la photo à ta mère. (+)</li>
        <li>Vous donnez les clés aux enfants. (-)</li>
        <li>Tu expliques la règle à moi. (+)</li>
        <li>Vous envoyez ce message à votre ami. (+)</li>
        <li>Tu ne prêtes pas ton vélo à ton frère. (-)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 6 · Participe présent</h3>
        ${frGym1InfoButton("fr1-info-6")}
      </div>
      ${frGym1InfoBox("fr1-info-6", `
        <ul>
          <li>Participe présent endet meistens auf -ant.</li>
          <li>Bildung: nous-Form im Präsens ohne -ons + -ant.</li>
          <li>Beispiele: parlant, finissant, prenant.</li>
          <li>Es ersetzt oft einen Relativsatz mit qui.</li>
        </ul>
      `)}
      <p>Remplacez les propositions relatives par un participe présent.</p>
      <ol>
        <li>Les élèves qui travaillent régulièrement progressent plus vite.</li>
        <li>Les personnes qui attendent devant la salle doivent rester calmes.</li>
        <li>Les voyageurs qui prennent le premier train arrivent avant midi.</li>
        <li>Les enfants qui lisent beaucoup enrichissent leur vocabulaire.</li>
        <li>Les sportifs qui suivent un bon entraînement évitent souvent les blessures.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 7 · Gérondif</h3>
        ${frGym1InfoButton("fr1-info-7")}
      </div>
      ${frGym1InfoBox("fr1-info-7", `
        <ul>
          <li>Gérondif = en + participe présent.</li>
          <li>Er beschreibt oft Gleichzeitigkeit, Mittel oder Art und Weise.</li>
          <li>Beispiel: En écoutant bien, tu comprends mieux.</li>
          <li>Das Subjekt bleibt normalerweise dasselbe.</li>
        </ul>
      `)}
      <p>Transformez les phrases en utilisant le gérondif.</p>
      <ol>
        <li>Si tu relis ton texte, tu trouveras les fautes.</li>
        <li>Quand elle marche dans la ville, elle découvre de nouveaux cafés.</li>
        <li>Parce qu’il écoute attentivement, il comprend la consigne.</li>
        <li>Quand nous faisons du sport, nous oublions le stress.</li>
        <li>Si vous comparez les deux images, vous verrez les différences.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 8 · Actif et passif</h3>
        ${frGym1InfoButton("fr1-info-8")}
      </div>
      ${frGym1InfoBox("fr1-info-8", `
        <ul>
          <li>Passiv: être + participe passé.</li>
          <li>Das direkte Objekt des Aktivsatzes wird zum Subjekt des Passivsatzes.</li>
          <li>Der Täter kann mit par ergänzt werden.</li>
          <li>Das participe passé passt sich dem neuen Subjekt an.</li>
        </ul>
      `)}
      <p>Transformez les phrases actives en phrases passives et inversement.</p>
      <ol type="a">
        <li>Le directeur organise la réunion.</li>
        <li>Les documents sont corrigés par la professeure.</li>
        <li>Les élèves ont préparé une présentation.</li>
        <li>La fenêtre a été ouverte par le concierge.</li>
        <li>Un journaliste interviewera les joueurs.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 9 · Subjonctif ou indicatif</h3>
        ${frGym1InfoButton("fr1-info-9")}
      </div>
      ${frGym1InfoBox("fr1-info-9", `
        <ul>
          <li>Subjonctif nach Wunsch, Zweifel, Gefühl, Notwendigkeit.</li>
          <li>Indicatif bei Sicherheit, Wissen, Feststellung.</li>
          <li>Typische Auslöser: il faut que, je veux que, je suis content que.</li>
          <li>Typisch indikativisch: je pense que, je sais que, il est clair que.</li>
        </ul>
      `)}
      <p>Complétez avec le subjonctif ou l’indicatif.</p>
      <ol>
        <li>Il faut que tu ________ plus attentivement. (écouter)</li>
        <li>Je sais que vous ________ raison. (avoir)</li>
        <li>Nous sommes contents qu’elle ________ avec nous. (venir)</li>
        <li>Il est possible qu’ils ________ en retard. (être)</li>
        <li>Je pense que ce film ________ intéressant. (être)</li>
        <li>Mes parents veulent que je ________ mes devoirs avant le dîner. (finir)</li>
        <li>Il est clair que nous ________ faire un effort. (devoir)</li>
        <li>Je ne crois pas qu’il ________ la réponse. (connaître)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 10 · Phrases hypothétiques</h3>
        ${frGym1InfoButton("fr1-info-10")}
      </div>
      ${frGym1InfoBox("fr1-info-10", `
        <ul>
          <li>Irrealer Gegenwartssatz: si + imparfait, conditionnel présent.</li>
          <li>Irrealer Vergangenheitssatz: si + plus-que-parfait, conditionnel passé.</li>
          <li>Nach si steht im Französischen nie conditionnel.</li>
          <li>Die Zeiten müssen logisch zusammenpassen.</li>
        </ul>
      `)}
      <p>Complétez les phrases hypothétiques.</p>
      <ol>
        <li>Si j’avais plus de temps, je ________ davantage de livres. (lire)</li>
        <li>Si nous étions partis plus tôt, nous ________ le train. (prendre)</li>
        <li>Si elle comprenait la règle, elle ________ moins de fautes. (faire)</li>
        <li>Si vous aviez étudié régulièrement, vous ________ plus confiants. (être)</li>
        <li>Si tu me donnais ton adresse, je t’________ une carte. (envoyer)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Aufgabe 11 · Vocabulaire: synonymes, antonymes, familles de mots</h3>
        ${frGym1InfoButton("fr1-info-11")}
      </div>
      ${frGym1InfoBox("fr1-info-11", `
        <ul>
          <li>Bei Synonymen muss die Bedeutung ähnlich sein, aber nicht immer exakt gleich.</li>
          <li>Bei Antonymen suchst du das Gegenteil.</li>
          <li>Bei Wortfamilien achtest du auf denselben Wortstamm.</li>
          <li>Bei Nomen immer den Artikel dazuschreiben.</li>
        </ul>
      `)}
      <p>Complétez.</p>
      <ol type="a">
        <li>Donnez un synonyme de: difficile, rapide, célèbre, aider.</li>
        <li>Donnez un antonyme de: commencer, accepter, courageux, clair.</li>
        <li>Donnez un nom de la même famille que: décider, développer, protéger, expliquer.</li>
        <li>Traduisez: die Unterstützung, die Gefahr, plötzlich, sich erinnern, eine Lösung finden.</li>
      </ol>
    </div>
  `);
}

window.render_franzoesisch_gym1 = render_franzoesisch_gym1;
