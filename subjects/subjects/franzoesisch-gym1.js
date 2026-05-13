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

function render_franzoesisch_gym1() {
  window.setMaterialTitle("Französisch · GYM1 · Vocabulaire, pronoms relatifs et passé");

  window.setMaterialContent(`
    <div class="notice">
      Matériel d'entraînement original. Aucun exercice original, aucun scan et aucun matériel officiel.
      Les exercices travaillent le vocabulaire, les pronoms relatifs et les temps du passé.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 1 · Vocabulaire en contexte</h3>
        ${infoButton("fr-info-1")}
      </div>
      ${infoBox("fr-info-1", `
        <ul>
          <li>Lis toute la phrase avant de choisir le mot.</li>
          <li>Observe le contexte: personne, action, objet ou sentiment.</li>
          <li>Vérifie le genre et le nombre.</li>
          <li>Si c'est un verbe, vérifie la conjugaison.</li>
        </ul>
      `)}
      <p>Complétez les phrases avec un mot approprié en français.</p>
      <ol>
        <li>Quand on ne veut pas oublier quelque chose, on essaie de s'en __________.</li>
        <li>Une personne qui dirige un pays peut être appelée un __________.</li>
        <li>Quand une chose arrive très vite, on peut dire qu'elle arrive __________.</li>
        <li>Quand on n'est pas content parce qu'on espérait mieux, on ressent une __________.</li>
        <li>Une odeur très agréable peut venir d'un __________.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 2 · Synonymes et antonymes</h3>
        ${infoButton("fr-info-2")}
      </div>
      ${infoBox("fr-info-2", `
        <ul>
          <li>Un synonyme a un sens proche.</li>
          <li>Un antonyme a un sens contraire.</li>
          <li>Pour les adjectifs, écris la forme masculine et féminine.</li>
          <li>Fais attention aux accords.</li>
        </ul>
      `)}
      <p>Donnez un synonyme ou un antonyme selon l'indication.</p>
      <ol type="a">
        <li>Synonyme de <strong>conduire</strong>:</li>
        <li>Antonyme de <strong>vide</strong>:</li>
        <li>Synonyme de <strong>extraordinaire</strong>:</li>
        <li>Antonyme de <strong>faux</strong>:</li>
        <li>Nom de la même famille que <strong>découvrir</strong>:</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 3 · Traduction de phrases</h3>
        ${infoButton("fr-info-3")}
      </div>
      ${infoBox("fr-info-3", `
        <ul>
          <li>Repère d'abord le sujet et le verbe.</li>
          <li>Traduis le sens, pas mot à mot.</li>
          <li>Vérifie les temps verbaux.</li>
          <li>Contrôle les articles, les adjectifs et les prépositions.</li>
        </ul>
      `)}
      <p>Traduisez en français.</p>
      <ol>
        <li>Die Erfinderin hat eine neue Idee entwickelt.</li>
        <li>Der Minister vermeidet schwierige Fragen.</li>
        <li>Er findet nicht, dass diese Lösung geeignet ist.</li>
        <li>Die Stadt und das Land unterscheiden sich stark.</li>
        <li>Der Wettbewerb ist abgeschlossen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 4 · Pronoms relatifs</h3>
        ${infoButton("fr-info-4")}
      </div>
      ${infoBox("fr-info-4", `
        <ul>
          <li>qui ist meistens Subjekt des Relativsatzes.</li>
          <li>que ist meistens direktes Objekt.</li>
          <li>où bezieht sich auf Ort oder Zeit.</li>
          <li>dont ersetzt oft de + Nomen oder de + Verb.</li>
          <li>Prüfe immer, welche Funktion die Lücke im Relativsatz hat.</li>
        </ul>
      `)}
      <p>Complétez avec <strong>qui, que, où, dont</strong>.</p>
      <ol>
        <li>C'est une ville __________ j'aimerais habiter.</li>
        <li>Le livre __________ tu m'as prêté est intéressant.</li>
        <li>La personne __________ parle est ma voisine.</li>
        <li>Voici le sujet __________ nous avons discuté.</li>
        <li>Je me souviens du jour __________ nous sommes arrivés.</li>
        <li>C'est une décision __________ je ne comprends pas.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 5 · Relier avec un pronom relatif</h3>
        ${infoButton("fr-info-5")}
      </div>
      ${infoBox("fr-info-5", `
        <ul>
          <li>Identifie le nom répété dans les deux phrases.</li>
          <li>Remplace ce nom par un pronom relatif.</li>
          <li>Choisis qui, que, où ou dont selon la fonction.</li>
          <li>Évite de répéter le même nom deux fois.</li>
        </ul>
      `)}
      <p>Reliez les phrases avec un pronom relatif.</p>
      <ol>
        <li>C'est une amie. Je lui fais confiance.</li>
        <li>Voici le film. Nous avons regardé ce film hier.</li>
        <li>C'est un quartier. Beaucoup d'étudiants habitent dans ce quartier.</li>
        <li>Je connais une personne. Cette personne parle trois langues.</li>
        <li>Voilà le problème. Nous avons peur de ce problème.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 6 · Imparfait ou passé composé?</h3>
        ${infoButton("fr-info-6")}
      </div>
      ${infoBox("fr-info-6", `
        <ul>
          <li>L'imparfait décrit une situation, une habitude ou un arrière-plan.</li>
          <li>Le passé composé raconte une action ponctuelle ou terminée.</li>
          <li>Demande-toi: description ou événement?</li>
          <li>Fais attention aux auxiliaires être et avoir.</li>
        </ul>
      `)}
      <p>Conjuguez les verbes au temps correct: imparfait ou passé composé.</p>
      <ol>
        <li>Quand je __________ (être) petit, je __________ (jouer) souvent dehors.</li>
        <li>Hier, nous __________ (prendre) le train pour visiter une ville.</li>
        <li>Il __________ (pleuvoir) quand elle __________ (sortir).</li>
        <li>Mes amis __________ (attendre) devant le cinéma.</li>
        <li>Tout à coup, le téléphone __________ (sonner).</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 7 · Plus-que-parfait</h3>
        ${infoButton("fr-info-7")}
      </div>
      ${infoBox("fr-info-7", `
        <ul>
          <li>Le plus-que-parfait exprime une action antérieure à une autre action passée.</li>
          <li>Forme: imparfait de avoir/être + participe passé.</li>
          <li>Cherche deux actions dans le passé.</li>
          <li>L'action la plus ancienne est au plus-que-parfait.</li>
        </ul>
      `)}
      <p>Complétez avec le plus-que-parfait.</p>
      <ol>
        <li>Elle était fatiguée parce qu'elle __________ beaucoup __________. (travailler)</li>
        <li>Nous avons trouvé les clés que nous __________ __________. (perdre)</li>
        <li>Il a réussi parce qu'il __________ bien __________. (réviser)</li>
        <li>J'ai reconnu la rue où je __________ déjà __________. (passer)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercice 8 · Petit texte au passé</h3>
        ${infoButton("fr-info-8")}
      </div>
      ${infoBox("fr-info-8", `
        <ul>
          <li>Planifie d'abord 5 à 7 phrases.</li>
          <li>Utilise l'imparfait pour le contexte et les habitudes.</li>
          <li>Utilise le passé composé pour les actions principales.</li>
          <li>Utilise au moins une fois le plus-que-parfait pour une action antérieure.</li>
          <li>Contrôle les accords et les auxiliaires.</li>
        </ul>
      `)}
      <p>
        Écrivez un petit texte de 70 à 90 mots sur une journée importante.
        Utilisez au moins:
      </p>
      <ul>
        <li>3 verbes à l'imparfait</li>
        <li>3 verbes au passé composé</li>
        <li>1 verbe au plus-que-parfait</li>
      </ul>
    </div>
  `);
}

window.render_franzoesisch_gym1 = render_franzoesisch_gym1;
