function infoButton(id) {
  return `<button class="info-btn" onclick="toggleInfo('${id}')" title="Anleitung anzeigen">i</button>`;
}

function infoBox(id, html) {
  return `
    <div id="${id}" class="info-box hidden">
      <strong>Abstract guide:</strong>
      ${html}
    </div>
  `;
}

function render_englisch_gym1() {
  window.setMaterialTitle("Englisch · GYM1 · Vocabulary and Grammar");

  window.setMaterialContent(`
    <div class="notice">
      Eigenes Übungsmaterial. Keine Originalprüfung, kein Scan und kein offizielles Schulmaterial.
      Die Aufgaben trainieren Wortschatz, Wortfamilien, Ausdrücke, Present Perfect, Past Simple und Comparatives.
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 1 · Opposites</h3>
        ${infoButton("eng-info-1")}
      </div>
      ${infoBox("eng-info-1", `
        <ul>
          <li>First identify the part of speech: adjective, verb or noun.</li>
          <li>Then think of the exact opposite meaning.</li>
          <li>Check whether the opposite needs a prefix such as un-, in-, dis- or im-.</li>
          <li>Use the same word class as the original word.</li>
        </ul>
      `)}
      <p>Write an opposite for each word. Use the same word class.</p>
      <ol type="a">
        <li>careful</li>
        <li>to accept</li>
        <li>polite</li>
        <li>hopeful</li>
        <li>to connect</li>
        <li>comfortable</li>
        <li>honest</li>
        <li>to remember</li>
        <li>interesting</li>
        <li>generous</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 2 · Word families</h3>
        ${infoButton("eng-info-2")}
      </div>
      ${infoBox("eng-info-2", `
        <ul>
          <li>Look at the base word and decide which word class is required.</li>
          <li>For nouns, think of endings such as -ment, -ness, -tion or -ity.</li>
          <li>For verbs, check the infinitive and the past forms.</li>
          <li>For adjectives, check endings such as -ful, -less, -ive or -ous.</li>
        </ul>
      `)}
      <p>Complete the table with suitable words from the same word family.</p>

      <div class="formula">
        example: to decide → decision → decisive
      </div>

      <ol type="a">
        <li>to explain → noun: __________</li>
        <li>danger → adjective: __________</li>
        <li>to succeed → noun: __________</li>
        <li>safe → noun: __________</li>
        <li>to improve → noun: __________</li>
        <li>energy → adjective: __________</li>
        <li>to choose → noun: __________</li>
        <li>kind → noun: __________</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 3 · Explaining expressions</h3>
        ${infoButton("eng-info-3")}
      </div>
      ${infoBox("eng-info-3", `
        <ul>
          <li>Do not repeat the expression itself in your explanation.</li>
          <li>Explain the meaning in one clear sentence.</li>
          <li>Add a short example if it helps.</li>
          <li>Use simple but accurate English.</li>
        </ul>
      `)}
      <p>Explain each expression in one or two sentences. Do not use the expression itself in your explanation.</p>
      <ol type="a">
        <li>to feel left out</li>
        <li>to cheer someone up</li>
        <li>to get on someone's nerves</li>
        <li>to be in a hurry</li>
        <li>to change one's mind</li>
        <li>to take something seriously</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 4 · Time expressions</h3>
        ${infoButton("eng-info-4")}
      </div>
      ${infoBox("eng-info-4", `
        <ul>
          <li>Use since for a starting point in time.</li>
          <li>Use for for a duration.</li>
          <li>Use yet mostly in negative sentences and questions.</li>
          <li>Use already when something happened earlier than expected.</li>
          <li>Use ever/never with life experience.</li>
        </ul>
      `)}
      <p>Complete the sentences with one suitable expression.</p>

      <div class="formula">
        since · for · yet · already · ever · never · when · as soon as · once · a long time ago
      </div>

      <ol>
        <li>I haven't finished my project __________.</li>
        <li>We have lived in this town __________ six years.</li>
        <li>She has known her best friend __________ primary school.</li>
        <li>Have you __________ tried windsurfing?</li>
        <li>He has __________ been to Canada, but he would like to go.</li>
        <li>Please call me __________ you arrive.</li>
        <li>I met him __________ I was younger.</li>
        <li>They have __________ cleaned the classroom, so it looks nice now.</li>
        <li>My grandparents moved here __________.</li>
        <li>__________ you understand the rule, the exercise becomes easier.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 5 · Present Perfect or Past Simple?</h3>
        ${infoButton("eng-info-5")}
      </div>
      ${infoBox("eng-info-5", `
        <ul>
          <li>Use the present perfect for life experience, unfinished time periods or results now.</li>
          <li>Use the past simple for finished actions at a definite time in the past.</li>
          <li>Words like yesterday, last week and in 2020 usually point to past simple.</li>
          <li>Words like already, yet, ever, never and since often point to present perfect.</li>
        </ul>
      `)}
      <p>Choose the correct tense and complete the sentences.</p>
      <ol>
        <li>I __________ never __________ to Ireland. (be)</li>
        <li>She __________ her bike yesterday afternoon. (repair)</li>
        <li>They __________ already __________ lunch. (have)</li>
        <li>We __________ this film last month. (watch)</li>
        <li>He __________ not __________ his homework yet. (finish)</li>
        <li>My aunt __________ to Australia in 2018. (move)</li>
        <li>How long __________ you __________ your guitar? (have)</li>
        <li>I __________ three messages this morning. (write)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 6 · Present Perfect Simple or Continuous?</h3>
        ${infoButton("eng-info-6")}
      </div>
      ${infoBox("eng-info-6", `
        <ul>
          <li>Use the present perfect simple to focus on the result or completed number.</li>
          <li>Use the present perfect continuous to focus on the activity and its duration.</li>
          <li>How many often points to the simple form.</li>
          <li>How long often points to the continuous form.</li>
          <li>Some verbs are normally not used in continuous forms.</li>
        </ul>
      `)}
      <p>Use the present perfect simple or continuous.</p>
      <ol>
        <li>She __________ for the test all evening. (study)</li>
        <li>They __________ five chapters so far. (read)</li>
        <li>How long __________ you __________ here? (wait)</li>
        <li>I __________ my keys. I can't find them. (lose)</li>
        <li>He __________ football since he was seven. (play)</li>
        <li>We __________ the kitchen, and now it looks much better. (clean)</li>
        <li>How many photos __________ you __________ today? (take)</li>
        <li>It __________ all morning. (rain)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 7 · Translation into English</h3>
        ${infoButton("eng-info-7")}
      </div>
      ${infoBox("eng-info-7", `
        <ul>
          <li>First decide whether the German sentence describes a finished past action or a connection to now.</li>
          <li>Use past simple for clearly finished past time.</li>
          <li>Use present perfect when the result or experience matters now.</li>
          <li>Use continuous forms if the duration or ongoing activity is emphasised.</li>
        </ul>
      `)}
      <p>Translate into English. Use suitable tenses.</p>
      <ol>
        <li>Seit drei Jahren wohnt sie in dieser Stadt.</li>
        <li>Ich habe meine Tasche verloren. Hast du sie gesehen?</li>
        <li>Letzten Sommer besuchten wir unsere Verwandten.</li>
        <li>Wie lange lernst du schon Englisch?</li>
        <li>Er hat den Bericht noch nicht fertig geschrieben.</li>
        <li>Als ich jünger war, spielte ich oft draussen.</li>
        <li>Sie arbeitet seit zwei Monaten an diesem Projekt.</li>
        <li>Wir haben diesen Film bereits gesehen.</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 8 · Comparatives and superlatives</h3>
        ${infoButton("eng-info-8")}
      </div>
      ${infoBox("eng-info-8", `
        <ul>
          <li>Short adjectives usually take -er and -est.</li>
          <li>Longer adjectives usually use more and most.</li>
          <li>Use than for comparisons between two things.</li>
          <li>Use as ... as for equality.</li>
          <li>Watch out for irregular forms such as good, bad and far.</li>
        </ul>
      `)}
      <p>Complete the sentences with comparative or superlative forms.</p>
      <ol>
        <li>This route is __________ than the old one. (safe)</li>
        <li>My room is not as __________ as my sister's room. (large)</li>
        <li>This is the __________ exercise in the unit. (difficult)</li>
        <li>Today the weather is __________ than yesterday. (bad)</li>
        <li>That was the __________ explanation I have heard. (clear)</li>
        <li>The second text is __________ than the first one. (interesting)</li>
        <li>He arrived __________ than expected. (early)</li>
        <li>This book is much __________ than the film. (good)</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 9 · Comparing two places</h3>
        ${infoButton("eng-info-9")}
      </div>
      ${infoBox("eng-info-9", `
        <ul>
          <li>First collect visible differences: size, buildings, traffic, nature, atmosphere.</li>
          <li>Write full sentences, not only keywords.</li>
          <li>Use a different comparative in each sentence if possible.</li>
          <li>Include at least one sentence with as ... as.</li>
          <li>Check spelling of comparative forms.</li>
        </ul>
      `)}
      <p>
        Imagine two places: one is a busy modern city centre, the other is a quiet coastal town.
        Write 8 comparison sentences. Use comparative forms in every sentence.
      </p>
      <p>Example: The city centre is noisier than the coastal town.</p>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 10 · Error correction</h3>
        ${infoButton("eng-info-10")}
      </div>
      ${infoBox("eng-info-10", `
        <ul>
          <li>Look for wrong tense forms first.</li>
          <li>Then check time expressions such as since, for, already and yet.</li>
          <li>Check word order in questions.</li>
          <li>Check whether a comparative or superlative form is correct.</li>
        </ul>
      `)}
      <p>Correct the mistakes in the sentences.</p>
      <ol>
        <li>I live here since five years.</li>
        <li>She has went to the library.</li>
        <li>Did you ever been to London?</li>
        <li>This test is more easy than the last one.</li>
        <li>He hasn't finished already.</li>
        <li>We have seen him yesterday.</li>
        <li>My brother is more tall than me.</li>
        <li>How long do you have known her?</li>
      </ol>
    </div>

    <div class="exercise-card">
      <div class="exercise-top">
        <h3>Exercise 11 · Short writing task</h3>
        ${infoButton("eng-info-11")}
      </div>
      ${infoBox("eng-info-11", `
        <ul>
          <li>Use a clear structure: introduction, details, conclusion.</li>
          <li>Include present perfect for experience or recent results.</li>
          <li>Use past simple for specific past events.</li>
          <li>Use at least three linking words such as however, because, although or therefore.</li>
          <li>Check grammar before finishing.</li>
        </ul>
      `)}
      <p>
        Write a short text of 90–120 words about a hobby, a trip or an event.
        Use at least:
      </p>
      <ul>
        <li>3 sentences in the present perfect</li>
        <li>3 sentences in the past simple</li>
        <li>2 comparative forms</li>
        <li>4 vocabulary words from this unit</li>
      </ul>
    </div>
  `);
}

window.render_englisch_gym1 = render_englisch_gym1;
