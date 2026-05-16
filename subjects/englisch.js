/* =========================================================
   SchoolFools – Englisch
   Datei: englisch.js

   Aufbau:
   - Links nur GYM1, GYM2, GYM3, GYM4
   - Rechts jeweils der ganze Inhalt dieser Stufe
   - Keine kopierten Inhalte
   - Keine echten Prüfungsaufgaben
   - Alle Erklärungen, Beispiele und Übungen selbst erstellt
========================================================= */

const ENGLISCH_BEREICHE = [
  {
    id: "gym1",
    titel: "GYM1",
    untertitel: "Grammar Basics and Rules",
    beschreibung:
      "Die wichtigsten englischen Grammatikregeln mit Erklärungen, Beispielen und typischen Fehlern: Satzbau, Zeiten, Fragen, Verneinung, Pronomen, Artikel, Adjektive, Adverbien, Modalverben, Relativsätze und mehr.",
    html: `
      <section class="sf-en-section">
        <h2>GYM1 – English Grammar</h2>
        <p class="sf-en-lead">
          English grammar is not about learning random rules by heart. It is about understanding how sentences are built.
          If you know sentence order, verb forms, questions, negation and the most important word types,
          you can write much more clearly and avoid the most common mistakes.
        </p>

        <div class="sf-en-rule">
          <h4>Basic idea</h4>
          <p>
            In English, word order is very important. A normal sentence usually follows this structure:
          </p>
          <p>
            <strong>Subject + verb + object / complement</strong>
          </p>
          <p>
            <strong>She reads a book.</strong><br>
            <strong>They play football.</strong><br>
            <strong>The text shows a conflict.</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>1. Basic sentence structure</h3>
        <p>
          A normal English statement usually starts with the subject, followed by the verb.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Part</th>
                <th>Example</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subject</td>
                <td>The student</td>
                <td>Who or what does something?</td>
              </tr>
              <tr>
                <td>Verb</td>
                <td>writes</td>
                <td>What happens?</td>
              </tr>
              <tr>
                <td>Object</td>
                <td>an essay</td>
                <td>Who or what is affected?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-example">
          <h4>Example</h4>
          <p>
            <strong>The student writes an essay.</strong>
          </p>
          <p>
            Subject: <strong>The student</strong><br>
            Verb: <strong>writes</strong><br>
            Object: <strong>an essay</strong>
          </p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> Writes the student an essay.</p>
          <p><strong>Correct:</strong> The student writes an essay.</p>
          <p><strong>Explanation:</strong> In a normal statement, the subject comes before the verb.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>2. Word order in statements</h3>
        <p>
          English word order is stricter than German word order. You cannot move words around freely.
        </p>

        <div class="sf-en-rule">
          <h4>Normal order</h4>
          <p>
            <strong>Subject + verb + object + place + time</strong>
          </p>
          <p>
            <strong>She reads a book in her room every evening.</strong>
          </p>
        </div>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Part</th>
                <th>Example part</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subject</td>
                <td>She</td>
              </tr>
              <tr>
                <td>Verb</td>
                <td>reads</td>
              </tr>
              <tr>
                <td>Object</td>
                <td>a book</td>
              </tr>
              <tr>
                <td>Place</td>
                <td>in her room</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>every evening</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-rule">
          <h4>Place before time</h4>
          <p>
            Usually, place comes before time:
          </p>
          <p>
            <strong>We met at school yesterday.</strong><br>
            <strong>They played football in the park after lunch.</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>3. The verb “to be”</h3>
        <p>
          The verb <strong>to be</strong> is one of the most important verbs in English.
          It is used for identity, descriptions, age, feelings, location and states.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Person</th>
                <th>Present</th>
                <th>Past</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>am</td>
                <td>was</td>
                <td>I am tired. / I was tired.</td>
              </tr>
              <tr>
                <td>you</td>
                <td>are</td>
                <td>were</td>
                <td>You are right. / You were right.</td>
              </tr>
              <tr>
                <td>he / she / it</td>
                <td>is</td>
                <td>was</td>
                <td>She is nervous. / She was nervous.</td>
              </tr>
              <tr>
                <td>we</td>
                <td>are</td>
                <td>were</td>
                <td>We are ready. / We were ready.</td>
              </tr>
              <tr>
                <td>they</td>
                <td>are</td>
                <td>were</td>
                <td>They are friendly. / They were friendly.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-rule">
          <h4>Negation with “to be”</h4>
          <p>
            You put <strong>not</strong> after the verb.
          </p>
          <p>
            <strong>I am not ready.</strong><br>
            <strong>She is not at home.</strong><br>
            <strong>They were not interested.</strong>
          </p>
        </div>

        <div class="sf-en-rule">
          <h4>Questions with “to be”</h4>
          <p>
            You put the verb before the subject.
          </p>
          <p>
            <strong>Are you ready?</strong><br>
            <strong>Is he your brother?</strong><br>
            <strong>Were they at school?</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>4. The verb “to have”</h3>
        <p>
          The verb <strong>to have</strong> is used for possession, relationships, experiences and many fixed expressions.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Person</th>
                <th>Present</th>
                <th>Past</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>have</td>
                <td>had</td>
                <td>I have a question.</td>
              </tr>
              <tr>
                <td>you</td>
                <td>have</td>
                <td>had</td>
                <td>You have time.</td>
              </tr>
              <tr>
                <td>he / she / it</td>
                <td>has</td>
                <td>had</td>
                <td>She has a brother.</td>
              </tr>
              <tr>
                <td>we</td>
                <td>have</td>
                <td>had</td>
                <td>We have homework.</td>
              </tr>
              <tr>
                <td>they</td>
                <td>have</td>
                <td>had</td>
                <td>They have a problem.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> She have a dog.</p>
          <p><strong>Correct:</strong> She has a dog.</p>
          <p><strong>Explanation:</strong> With <strong>he, she, it</strong>, use <strong>has</strong>.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>5. Present Simple</h3>
        <p>
          The <strong>Present Simple</strong> is used for habits, facts, routines and general truths.
        </p>

        <div class="sf-en-rule">
          <h4>Use</h4>
          <p>
            <strong>Habits:</strong> I play tennis every Saturday.<br>
            <strong>Facts:</strong> Water freezes at zero degrees.<br>
            <strong>Routines:</strong> She goes to school by bus.<br>
            <strong>General statements:</strong> The text shows a conflict.
          </p>
        </div>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Person</th>
                <th>Verb: work</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>I work</td>
              </tr>
              <tr>
                <td>you</td>
                <td>you work</td>
              </tr>
              <tr>
                <td>he / she / it</td>
                <td>he works</td>
              </tr>
              <tr>
                <td>we</td>
                <td>we work</td>
              </tr>
              <tr>
                <td>they</td>
                <td>they work</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-rule">
          <h4>Important rule</h4>
          <p>
            In the Present Simple, add <strong>-s</strong> with <strong>he, she, it</strong>.
          </p>
          <p>
            <strong>He plays.</strong><br>
            <strong>She reads.</strong><br>
            <strong>It works.</strong>
          </p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> He play football.</p>
          <p><strong>Correct:</strong> He plays football.</p>
          <p><strong>Explanation:</strong> He, she, it: the verb gets <strong>-s</strong>.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>6. Present Simple: questions and negation</h3>
        <p>
          For questions and negation in the Present Simple, you usually need <strong>do</strong> or <strong>does</strong>.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Example</th>
                <th>Explanation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Positive</td>
                <td>She likes music.</td>
                <td>Verb with -s.</td>
              </tr>
              <tr>
                <td>Negative</td>
                <td>She does not like music.</td>
                <td>does not + basic verb.</td>
              </tr>
              <tr>
                <td>Question</td>
                <td>Does she like music?</td>
                <td>Does + subject + basic verb?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-rule">
          <h4>Very important</h4>
          <p>
            After <strong>does</strong>, the main verb has no <strong>-s</strong>.
          </p>
          <p>
            <strong>Does she like it?</strong> not <strong>Does she likes it?</strong>
          </p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> Does he plays football?</p>
          <p><strong>Correct:</strong> Does he play football?</p>
          <p><strong>Explanation:</strong> The <strong>-s</strong> is already inside <strong>does</strong>.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>7. Present Continuous</h3>
        <p>
          The <strong>Present Continuous</strong> is used for actions happening right now or around now.
        </p>

        <div class="sf-en-rule">
          <h4>Formation</h4>
          <p>
            <strong>am / is / are + verb-ing</strong>
          </p>
          <p>
            <strong>I am reading.</strong><br>
            <strong>She is writing.</strong><br>
            <strong>They are studying.</strong>
          </p>
        </div>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Use</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Right now</td>
                <td>She is talking to her friend.</td>
              </tr>
              <tr>
                <td>Around now</td>
                <td>We are working on a project this week.</td>
              </tr>
              <tr>
                <td>Temporary situation</td>
                <td>He is staying with his aunt.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> She is write an essay.</p>
          <p><strong>Correct:</strong> She is writing an essay.</p>
          <p><strong>Explanation:</strong> After <strong>is</strong>, use the <strong>-ing</strong> form.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>8. Present Simple or Present Continuous?</h3>
        <p>
          This difference is very important.
        </p>

        <div class="sf-en-compare">
          <div>
            <h4>Present Simple</h4>
            <p>
              Habits, routines, facts.
            </p>
            <p>
              <strong>She usually reads in the evening.</strong>
            </p>
          </div>
          <div>
            <h4>Present Continuous</h4>
            <p>
              Something happening now or temporarily.
            </p>
            <p>
              <strong>She is reading right now.</strong>
            </p>
          </div>
        </div>

        <div class="sf-en-rule">
          <h4>Signal words</h4>
          <p>
            <strong>Present Simple:</strong> always, usually, often, sometimes, never, every day<br>
            <strong>Present Continuous:</strong> now, right now, at the moment, today, this week
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>9. Past Simple</h3>
        <p>
          The <strong>Past Simple</strong> is used for completed actions in the past.
        </p>

        <div class="sf-en-rule">
          <h4>Regular verbs</h4>
          <p>
            Add <strong>-ed</strong>:
          </p>
          <p>
            <strong>work → worked</strong><br>
            <strong>play → played</strong><br>
            <strong>visit → visited</strong>
          </p>
        </div>

        <div class="sf-en-rule">
          <h4>Irregular verbs</h4>
          <p>
            Some verbs have special past forms:
          </p>
          <p>
            <strong>go → went</strong><br>
            <strong>see → saw</strong><br>
            <strong>take → took</strong><br>
            <strong>write → wrote</strong><br>
            <strong>have → had</strong>
          </p>
        </div>

        <div class="sf-en-example">
          <h4>Examples</h4>
          <p>
            <strong>Yesterday, I watched a film.</strong><br>
            <strong>Last week, she wrote an essay.</strong><br>
            <strong>They went home after school.</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>10. Past Simple: questions and negation</h3>
        <p>
          In questions and negation, you usually need <strong>did</strong>.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Example</th>
                <th>Rule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Positive</td>
                <td>She went home.</td>
                <td>Past form.</td>
              </tr>
              <tr>
                <td>Negative</td>
                <td>She did not go home.</td>
                <td>did not + basic verb.</td>
              </tr>
              <tr>
                <td>Question</td>
                <td>Did she go home?</td>
                <td>Did + subject + basic verb?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> Did she went home?</p>
          <p><strong>Correct:</strong> Did she go home?</p>
          <p><strong>Explanation:</strong> After <strong>did</strong>, use the basic form of the verb.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>11. Past Continuous</h3>
        <p>
          The <strong>Past Continuous</strong> describes an action that was in progress at a specific moment in the past.
        </p>

        <div class="sf-en-rule">
          <h4>Formation</h4>
          <p>
            <strong>was / were + verb-ing</strong>
          </p>
          <p>
            <strong>I was reading.</strong><br>
            <strong>They were playing.</strong>
          </p>
        </div>

        <div class="sf-en-example">
          <h4>Example with Past Simple</h4>
          <p>
            <strong>I was walking home when I saw my teacher.</strong>
          </p>
          <p>
            <strong>was walking</strong> = background action<br>
            <strong>saw</strong> = sudden completed action
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>12. Present Perfect</h3>
        <p>
          The <strong>Present Perfect</strong> connects the past with the present.
          It is used for experiences, results and unfinished time periods.
        </p>

        <div class="sf-en-rule">
          <h4>Formation</h4>
          <p>
            <strong>have / has + past participle</strong>
          </p>
          <p>
            <strong>I have finished.</strong><br>
            <strong>She has written a text.</strong><br>
            <strong>They have visited London.</strong>
          </p>
        </div>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Use</th>
                <th>Example</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Experience</td>
                <td>I have been to London.</td>
                <td>At some point in my life.</td>
              </tr>
              <tr>
                <td>Result</td>
                <td>She has lost her keys.</td>
                <td>The keys are missing now.</td>
              </tr>
              <tr>
                <td>Unfinished time</td>
                <td>We have learned a lot this week.</td>
                <td>This week is not finished yet.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-rule">
          <h4>Signal words</h4>
          <p>
            <strong>already, yet, just, ever, never, since, for, recently</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>13. Present Perfect or Past Simple?</h3>
        <p>
          This is one of the most common problems in English.
        </p>

        <div class="sf-en-compare">
          <div>
            <h4>Past Simple</h4>
            <p>
              Finished time in the past.
            </p>
            <p>
              <strong>I visited London last year.</strong>
            </p>
          </div>
          <div>
            <h4>Present Perfect</h4>
            <p>
              Past connected to the present.
            </p>
            <p>
              <strong>I have visited London.</strong>
            </p>
          </div>
        </div>

        <div class="sf-en-rule">
          <h4>Rule</h4>
          <p>
            Use <strong>Past Simple</strong> with a finished time:
            <strong>yesterday, last week, in 2020, two days ago</strong>.
          </p>
          <p>
            Use <strong>Present Perfect</strong> when the exact time is not important or when the result matters now.
          </p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> I have seen him yesterday.</p>
          <p><strong>Correct:</strong> I saw him yesterday.</p>
          <p><strong>Explanation:</strong> <strong>yesterday</strong> is finished time, so use Past Simple.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>14. Future forms</h3>
        <p>
          English has several ways to talk about the future.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Future form</th>
                <th>Use</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>will</td>
                <td>spontaneous decision, prediction</td>
                <td>I will help you.</td>
              </tr>
              <tr>
                <td>going to</td>
                <td>plan or intention</td>
                <td>I am going to study tonight.</td>
              </tr>
              <tr>
                <td>Present Continuous</td>
                <td>fixed arrangement</td>
                <td>I am meeting Tom tomorrow.</td>
              </tr>
              <tr>
                <td>Present Simple</td>
                <td>timetable</td>
                <td>The train leaves at six.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-example">
          <h4>Examples</h4>
          <p>
            <strong>I think it will rain.</strong><br>
            <strong>She is going to start a new project.</strong><br>
            <strong>We are visiting our grandparents on Saturday.</strong><br>
            <strong>The lesson starts at eight.</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>15. Modal verbs</h3>
        <p>
          Modal verbs express ability, permission, obligation, possibility or advice.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Modal verb</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>can</td>
                <td>ability / possibility</td>
                <td>I can speak English.</td>
              </tr>
              <tr>
                <td>could</td>
                <td>past ability / polite possibility</td>
                <td>Could you help me?</td>
              </tr>
              <tr>
                <td>must</td>
                <td>strong obligation</td>
                <td>You must be quiet.</td>
              </tr>
              <tr>
                <td>have to</td>
                <td>external obligation</td>
                <td>We have to wear uniforms.</td>
              </tr>
              <tr>
                <td>should</td>
                <td>advice</td>
                <td>You should revise.</td>
              </tr>
              <tr>
                <td>may / might</td>
                <td>possibility</td>
                <td>It might be true.</td>
              </tr>
              <tr>
                <td>would</td>
                <td>conditional / polite form</td>
                <td>I would like to explain my opinion.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-rule">
          <h4>Important rule</h4>
          <p>
            After a modal verb, use the basic form of the verb:
          </p>
          <p>
            <strong>She can swim.</strong><br>
            <strong>He must study.</strong><br>
            <strong>They should listen.</strong>
          </p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> He can speaks English.</p>
          <p><strong>Correct:</strong> He can speak English.</p>
          <p><strong>Explanation:</strong> After <strong>can</strong>, use the basic verb.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>16. Articles: a, an, the, zero article</h3>
        <p>
          Articles are small words, but they are very important in English.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Article</th>
                <th>Use</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>one unspecified thing before consonant sound</td>
                <td>a book, a student</td>
              </tr>
              <tr>
                <td>an</td>
                <td>one unspecified thing before vowel sound</td>
                <td>an apple, an idea</td>
              </tr>
              <tr>
                <td>the</td>
                <td>specific thing known to speaker and listener</td>
                <td>the book on the table</td>
              </tr>
              <tr>
                <td>zero article</td>
                <td>general plural or uncountable nouns</td>
                <td>Students need practice. Water is important.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> She has a idea.</p>
          <p><strong>Correct:</strong> She has an idea.</p>
          <p><strong>Explanation:</strong> Use <strong>an</strong> before a vowel sound.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>17. Countable and uncountable nouns</h3>
        <p>
          Some nouns can be counted. Others are used as a mass or general idea.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Examples</th>
                <th>Possible words</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Countable</td>
                <td>book, idea, student, question</td>
                <td>a, an, many, few, several</td>
              </tr>
              <tr>
                <td>Uncountable</td>
                <td>information, advice, homework, money, water</td>
                <td>much, little, some, a lot of</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> I need an information.</p>
          <p><strong>Correct:</strong> I need some information.</p>
          <p><strong>Explanation:</strong> <strong>Information</strong> is uncountable in English.</p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> The teacher gave me many advices.</p>
          <p><strong>Correct:</strong> The teacher gave me a lot of advice.</p>
          <p><strong>Explanation:</strong> <strong>Advice</strong> is uncountable.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>18. Pronouns</h3>
        <p>
          Pronouns replace nouns. They help you avoid repetition.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Subject pronoun</th>
                <th>Object pronoun</th>
                <th>Possessive adjective</th>
                <th>Possessive pronoun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>me</td>
                <td>my</td>
                <td>mine</td>
              </tr>
              <tr>
                <td>you</td>
                <td>you</td>
                <td>your</td>
                <td>yours</td>
              </tr>
              <tr>
                <td>he</td>
                <td>him</td>
                <td>his</td>
                <td>his</td>
              </tr>
              <tr>
                <td>she</td>
                <td>her</td>
                <td>her</td>
                <td>hers</td>
              </tr>
              <tr>
                <td>it</td>
                <td>it</td>
                <td>its</td>
                <td>-</td>
              </tr>
              <tr>
                <td>we</td>
                <td>us</td>
                <td>our</td>
                <td>ours</td>
              </tr>
              <tr>
                <td>they</td>
                <td>them</td>
                <td>their</td>
                <td>theirs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-example">
          <h4>Examples</h4>
          <p>
            <strong>She likes him.</strong><br>
            <strong>This is my book. It is mine.</strong><br>
            <strong>They forgot their homework.</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>19. Adjectives and adverbs</h3>
        <p>
          Adjectives describe nouns. Adverbs describe verbs, adjectives or whole sentences.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Function</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adjective</td>
                <td>describes a noun</td>
                <td>She is a careful driver.</td>
              </tr>
              <tr>
                <td>Adverb</td>
                <td>describes a verb</td>
                <td>She drives carefully.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-rule">
          <h4>Formation</h4>
          <p>
            Many adverbs are formed with <strong>-ly</strong>:
          </p>
          <p>
            <strong>careful → carefully</strong><br>
            <strong>quick → quickly</strong><br>
            <strong>clear → clearly</strong>
          </p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> She speaks English very good.</p>
          <p><strong>Correct:</strong> She speaks English very well.</p>
          <p><strong>Explanation:</strong> Use the adverb <strong>well</strong> to describe the verb <strong>speaks</strong>.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>20. Relative clauses</h3>
        <p>
          Relative clauses give more information about a noun.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Relative pronoun</th>
                <th>Use</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>who</td>
                <td>people</td>
                <td>The girl who speaks is my sister.</td>
              </tr>
              <tr>
                <td>which</td>
                <td>things / animals</td>
                <td>The book which I bought is interesting.</td>
              </tr>
              <tr>
                <td>that</td>
                <td>people or things</td>
                <td>The film that we watched was exciting.</td>
              </tr>
              <tr>
                <td>where</td>
                <td>places</td>
                <td>This is the school where I study.</td>
              </tr>
              <tr>
                <td>whose</td>
                <td>possession</td>
                <td>The boy whose bike was stolen is angry.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> The man which lives next door is friendly.</p>
          <p><strong>Correct:</strong> The man who lives next door is friendly.</p>
          <p><strong>Explanation:</strong> For people, use <strong>who</strong>.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>21. Conditional sentences</h3>
        <p>
          Conditional sentences describe conditions and results.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Structure</th>
                <th>Example</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zero conditional</td>
                <td>If + Present Simple, Present Simple</td>
                <td>If water freezes, it becomes ice.</td>
                <td>general truth</td>
              </tr>
              <tr>
                <td>First conditional</td>
                <td>If + Present Simple, will + verb</td>
                <td>If I study, I will pass.</td>
                <td>real future possibility</td>
              </tr>
              <tr>
                <td>Second conditional</td>
                <td>If + Past Simple, would + verb</td>
                <td>If I had more time, I would read more.</td>
                <td>unreal or unlikely present/future</td>
              </tr>
              <tr>
                <td>Third conditional</td>
                <td>If + Past Perfect, would have + past participle</td>
                <td>If I had studied, I would have passed.</td>
                <td>unreal past</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>22. Passive voice</h3>
        <p>
          In the passive voice, the focus is on what happens to someone or something,
          not on who does it.
        </p>

        <div class="sf-en-rule">
          <h4>Formation</h4>
          <p>
            <strong>be + past participle</strong>
          </p>
        </div>

        <div class="sf-en-compare">
          <div>
            <h4>Active</h4>
            <p>
              <strong>The teacher explains the rule.</strong>
            </p>
          </div>
          <div>
            <h4>Passive</h4>
            <p>
              <strong>The rule is explained by the teacher.</strong>
            </p>
          </div>
        </div>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Tense</th>
                <th>Passive example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Present Simple</td>
                <td>The text is analysed.</td>
              </tr>
              <tr>
                <td>Past Simple</td>
                <td>The letter was written.</td>
              </tr>
              <tr>
                <td>Present Perfect</td>
                <td>The work has been finished.</td>
              </tr>
              <tr>
                <td>Future with will</td>
                <td>The results will be discussed.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>23. Reported speech</h3>
        <p>
          Reported speech is used when you report what someone said.
        </p>

        <div class="sf-en-compare">
          <div>
            <h4>Direct speech</h4>
            <p>
              <strong>She said, “I am tired.”</strong>
            </p>
          </div>
          <div>
            <h4>Reported speech</h4>
            <p>
              <strong>She said that she was tired.</strong>
            </p>
          </div>
        </div>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Direct speech</th>
                <th>Reported speech</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>am / is</td>
                <td>was</td>
              </tr>
              <tr>
                <td>are</td>
                <td>were</td>
              </tr>
              <tr>
                <td>Present Simple</td>
                <td>Past Simple</td>
              </tr>
              <tr>
                <td>Past Simple</td>
                <td>Past Perfect</td>
              </tr>
              <tr>
                <td>will</td>
                <td>would</td>
              </tr>
              <tr>
                <td>can</td>
                <td>could</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-example">
          <h4>Examples</h4>
          <p>
            <strong>He said, “I like English.”</strong><br>
            → <strong>He said that he liked English.</strong>
          </p>
          <p>
            <strong>She said, “I will help you.”</strong><br>
            → <strong>She said that she would help me.</strong>
          </p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>24. Prepositions</h3>
        <p>
          Prepositions are often difficult because they do not always translate directly from German.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Preposition</th>
                <th>Typical use</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>in</td>
                <td>months, years, rooms, countries</td>
                <td>in May, in 2025, in Switzerland</td>
              </tr>
              <tr>
                <td>on</td>
                <td>days, surfaces</td>
                <td>on Monday, on the table</td>
              </tr>
              <tr>
                <td>at</td>
                <td>specific times and places</td>
                <td>at six o'clock, at school</td>
              </tr>
              <tr>
                <td>for</td>
                <td>duration</td>
                <td>for two hours</td>
              </tr>
              <tr>
                <td>since</td>
                <td>starting point</td>
                <td>since Monday</td>
              </tr>
              <tr>
                <td>by</td>
                <td>agent, deadline, transport</td>
                <td>by the author, by Friday, by train</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> I am good in English.</p>
          <p><strong>Correct:</strong> I am good at English.</p>
          <p><strong>Explanation:</strong> The correct expression is <strong>good at</strong>.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>25. Linking words</h3>
        <p>
          Linking words help you connect ideas clearly.
        </p>

        <div class="sf-en-table-wrap">
          <table class="sf-en-table">
            <thead>
              <tr>
                <th>Function</th>
                <th>Linking words</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Addition</td>
                <td>also, furthermore, moreover, in addition</td>
              </tr>
              <tr>
                <td>Contrast</td>
                <td>but, however, although, nevertheless, on the other hand</td>
              </tr>
              <tr>
                <td>Reason</td>
                <td>because, since, as, due to</td>
              </tr>
              <tr>
                <td>Result</td>
                <td>therefore, thus, as a result, consequently</td>
              </tr>
              <tr>
                <td>Example</td>
                <td>for example, for instance, such as</td>
              </tr>
              <tr>
                <td>Conclusion</td>
                <td>in conclusion, to sum up, overall</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>26. Typical grammar mistakes</h3>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> He don't like school.</p>
          <p><strong>Correct:</strong> He doesn't like school.</p>
          <p><strong>Explanation:</strong> With he, she, it, use <strong>doesn't</strong>.</p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> She can speaks French.</p>
          <p><strong>Correct:</strong> She can speak French.</p>
          <p><strong>Explanation:</strong> After modal verbs, use the basic verb.</p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> I have seen him yesterday.</p>
          <p><strong>Correct:</strong> I saw him yesterday.</p>
          <p><strong>Explanation:</strong> Use Past Simple with finished time expressions like <strong>yesterday</strong>.</p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> I am agree with you.</p>
          <p><strong>Correct:</strong> I agree with you.</p>
          <p><strong>Explanation:</strong> In English, <strong>agree</strong> is a verb. Do not use <strong>am</strong>.</p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> The people is angry.</p>
          <p><strong>Correct:</strong> The people are angry.</p>
          <p><strong>Explanation:</strong> <strong>People</strong> is plural.</p>
        </div>

        <div class="sf-en-correction">
          <p><strong>Wrong:</strong> I have 16 years.</p>
          <p><strong>Correct:</strong> I am 16 years old.</p>
          <p><strong>Explanation:</strong> In English, age is expressed with <strong>be</strong>, not <strong>have</strong>.</p>
        </div>
      </section>

      <section class="sf-en-section">
        <h3>27. Mini-Training for GYM1</h3>
        <p>
          Try to solve the exercises first. Then open the solution.
        </p>

        <div class="sf-en-task">
          <h4>Exercise 1 – Present Simple</h4>
          <p>Correct the sentence:</p>
          <p><strong>She play football every week.</strong></p>
          <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym1-l1')">Lösung anzeigen</button>
          <div id="en-gym1-l1" class="sf-en-hidden-box">
            <p><strong>She plays football every week.</strong></p>
            <p>With <strong>she</strong>, the verb gets <strong>-s</strong>.</p>
          </div>
        </div>

        <div class="sf-en-task">
          <h4>Exercise 2 – Question</h4>
          <p>Make a question:</p>
          <p><strong>You like English.</strong></p>
          <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym1-l2')">Lösung anzeigen</button>
          <div id="en-gym1-l2" class="sf-en-hidden-box">
            <p><strong>Do you like English?</strong></p>
            <p>In the Present Simple, questions often need <strong>do</strong>.</p>
          </div>
        </div>

        <div class="sf-en-task">
          <h4>Exercise 3 – Past Simple</h4>
          <p>Correct the sentence:</p>
          <p><strong>Did she went home?</strong></p>
          <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym1-l3')">Lösung anzeigen</button>
          <div id="en-gym1-l3" class="sf-en-hidden-box">
            <p><strong>Did she go home?</strong></p>
            <p>After <strong>did</strong>, use the basic form of the verb.</p>
          </div>
        </div>

        <div class="sf-en-task">
          <h4>Exercise 4 – Present Perfect or Past Simple</h4>
          <p>Correct the sentence:</p>
          <p><strong>I have watched the film yesterday.</strong></p>
          <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym1-l4')">Lösung anzeigen</button>
          <div id="en-gym1-l4" class="sf-en-hidden-box">
            <p><strong>I watched the film yesterday.</strong></p>
            <p><strong>Yesterday</strong> is finished time, so use Past Simple.</p>
          </div>
        </div>

        <div class="sf-en-task">
          <h4>Exercise 5 – Modal verb</h4>
          <p>Correct the sentence:</p>
          <p><strong>He must studies more.</strong></p>
          <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym1-l5')">Lösung anzeigen</button>
          <div id="en-gym1-l5" class="sf-en-hidden-box">
            <p><strong>He must study more.</strong></p>
            <p>After <strong>must</strong>, use the basic verb.</p>
          </div>
        </div>

        <div class="sf-en-task">
          <h4>Exercise 6 – Article</h4>
          <p>Correct the sentence:</p>
          <p><strong>She has a interesting idea.</strong></p>
          <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym1-l6')">Lösung anzeigen</button>
          <div id="en-gym1-l6" class="sf-en-hidden-box">
            <p><strong>She has an interesting idea.</strong></p>
            <p>Use <strong>an</strong> before a vowel sound.</p>
          </div>
        </div>
      </section>
    `
  },



{
  id: "gym2",
  titel: "GYM2",
  untertitel: "Verb Conjugation and Key Tenses",
  beschreibung:
    "Englische Verben konjugieren: Present Simple, Past Simple und Present Perfect mit grosser Tabelle, Beispielen und interaktiver Lückentabelle zum Korrigieren und Neu-Anordnen.",
  html: `
    <section class="sf-en-section">
      <h2>GYM2 – Verb Conjugation and Key Tenses</h2>
      <p class="sf-en-lead">
        In GYM2 geht es um die wichtigsten englischen Verbformen. Besonders wichtig sind drei Zeitformen:
        <strong>Present Simple</strong>, <strong>Past Simple</strong> und <strong>Present Perfect</strong>.
        Wenn du diese drei Formen sicher kannst, vermeidest du sehr viele typische Fehler.
      </p>

      <div class="sf-en-rule">
        <h4>Die drei wichtigsten Formen</h4>
        <p>
          <strong>Present Simple:</strong> I write / he writes<br>
          <strong>Past Simple:</strong> I wrote<br>
          <strong>Present Perfect:</strong> I have written
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>1. Was bedeutet „ein Verb konjugieren“?</h3>
      <p>
        Ein Verb zu konjugieren bedeutet, dass du die Verbform an Person und Zeit anpasst.
        Im Englischen ist die Konjugation einfacher als in Französisch, aber es gibt wichtige Fallen:
        <strong>he/she/it -s</strong>, unregelmässige Vergangenheitsformen und das <strong>Past Participle</strong>.
      </p>

      <div class="sf-en-example">
        <h4>Beispiel mit „to write“</h4>
        <p>
          <strong>I write.</strong> – ich schreibe<br>
          <strong>He writes.</strong> – er schreibt<br>
          <strong>I wrote.</strong> – ich schrieb / ich habe geschrieben<br>
          <strong>I have written.</strong> – ich habe geschrieben
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>2. Present Simple</h3>
      <p>
        Das <strong>Present Simple</strong> benutzt man für Gewohnheiten, Fakten, Routinen und allgemeine Aussagen.
      </p>

      <div class="sf-en-rule">
        <h4>Bildung</h4>
        <p>
          Bei <strong>I, you, we, they</strong> benutzt du die Grundform.<br>
          Bei <strong>he, she, it</strong> kommt meistens ein <strong>-s</strong> oder <strong>-es</strong> dazu.
        </p>
      </div>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>to work</th>
              <th>to go</th>
              <th>to study</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>I work</td>
              <td>I go</td>
              <td>I study</td>
            </tr>
            <tr>
              <td>you</td>
              <td>you work</td>
              <td>you go</td>
              <td>you study</td>
            </tr>
            <tr>
              <td>he / she / it</td>
              <td>he works</td>
              <td>she goes</td>
              <td>he studies</td>
            </tr>
            <tr>
              <td>we</td>
              <td>we work</td>
              <td>we go</td>
              <td>we study</td>
            </tr>
            <tr>
              <td>they</td>
              <td>they work</td>
              <td>they go</td>
              <td>they study</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> He go to school.</p>
        <p><strong>Correct:</strong> He goes to school.</p>
        <p><strong>Explanation:</strong> With <strong>he, she, it</strong>, the verb usually gets <strong>-s</strong> or <strong>-es</strong>.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>3. Past Simple</h3>
      <p>
        Das <strong>Past Simple</strong> benutzt man für abgeschlossene Handlungen in der Vergangenheit.
        Bei regelmässigen Verben hängt man meistens <strong>-ed</strong> an.
        Viele wichtige Verben sind aber unregelmässig.
      </p>

      <div class="sf-en-rule">
        <h4>Regelmässige Verben</h4>
        <p>
          <strong>work → worked</strong><br>
          <strong>play → played</strong><br>
          <strong>visit → visited</strong><br>
          <strong>watch → watched</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Unregelmässige Verben</h4>
        <p>
          Diese musst du lernen:
          <strong>go → went</strong>,
          <strong>see → saw</strong>,
          <strong>write → wrote</strong>,
          <strong>take → took</strong>.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Beispiele</h4>
        <p>
          <strong>Yesterday, I visited my friend.</strong><br>
          <strong>Last week, she wrote an essay.</strong><br>
          <strong>They went home after school.</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>4. Present Perfect</h3>
      <p>
        Das <strong>Present Perfect</strong> verbindet Vergangenheit und Gegenwart.
        Es wird mit <strong>have / has + past participle</strong> gebildet.
      </p>

      <div class="sf-en-rule">
        <h4>Bildung</h4>
        <p>
          <strong>I have worked.</strong><br>
          <strong>She has gone.</strong><br>
          <strong>They have written.</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Wann benutzt man Present Perfect?</h4>
        <p>
          <strong>Experience:</strong> I have been to London.<br>
          <strong>Result now:</strong> She has lost her keys.<br>
          <strong>Unfinished time:</strong> We have learned a lot this week.
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> I have seen him yesterday.</p>
        <p><strong>Correct:</strong> I saw him yesterday.</p>
        <p><strong>Explanation:</strong> With finished time words like <strong>yesterday</strong>, use Past Simple.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>5. Riesige Verb-Tabelle: Present Simple, Past Simple, Present Perfect</h3>
      <p>
        Diese Tabelle zeigt wichtige englische Verben mit Grundform, Present Simple bei he/she/it,
        Past Simple und Present Perfect.
      </p>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Base form</th>
              <th>he/she/it Present Simple</th>
              <th>Past Simple</th>
              <th>Past Participle</th>
              <th>Present Perfect example</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>be</td><td>is</td><td>was / were</td><td>been</td><td>has been</td><td>sein</td></tr>
            <tr><td>have</td><td>has</td><td>had</td><td>had</td><td>has had</td><td>haben</td></tr>
            <tr><td>do</td><td>does</td><td>did</td><td>done</td><td>has done</td><td>tun / machen</td></tr>
            <tr><td>go</td><td>goes</td><td>went</td><td>gone</td><td>has gone</td><td>gehen</td></tr>
            <tr><td>make</td><td>makes</td><td>made</td><td>made</td><td>has made</td><td>machen</td></tr>
            <tr><td>take</td><td>takes</td><td>took</td><td>taken</td><td>has taken</td><td>nehmen</td></tr>
            <tr><td>come</td><td>comes</td><td>came</td><td>come</td><td>has come</td><td>kommen</td></tr>
            <tr><td>see</td><td>sees</td><td>saw</td><td>seen</td><td>has seen</td><td>sehen</td></tr>
            <tr><td>know</td><td>knows</td><td>knew</td><td>known</td><td>has known</td><td>wissen / kennen</td></tr>
            <tr><td>give</td><td>gives</td><td>gave</td><td>given</td><td>has given</td><td>geben</td></tr>
            <tr><td>find</td><td>finds</td><td>found</td><td>found</td><td>has found</td><td>finden</td></tr>
            <tr><td>think</td><td>thinks</td><td>thought</td><td>thought</td><td>has thought</td><td>denken</td></tr>
            <tr><td>say</td><td>says</td><td>said</td><td>said</td><td>has said</td><td>sagen</td></tr>
            <tr><td>tell</td><td>tells</td><td>told</td><td>told</td><td>has told</td><td>erzählen</td></tr>
            <tr><td>speak</td><td>speaks</td><td>spoke</td><td>spoken</td><td>has spoken</td><td>sprechen</td></tr>
            <tr><td>write</td><td>writes</td><td>wrote</td><td>written</td><td>has written</td><td>schreiben</td></tr>
            <tr><td>read</td><td>reads</td><td>read</td><td>read</td><td>has read</td><td>lesen</td></tr>
            <tr><td>eat</td><td>eats</td><td>ate</td><td>eaten</td><td>has eaten</td><td>essen</td></tr>
            <tr><td>drink</td><td>drinks</td><td>drank</td><td>drunk</td><td>has drunk</td><td>trinken</td></tr>
            <tr><td>begin</td><td>begins</td><td>began</td><td>begun</td><td>has begun</td><td>beginnen</td></tr>
            <tr><td>break</td><td>breaks</td><td>broke</td><td>broken</td><td>has broken</td><td>brechen</td></tr>
            <tr><td>choose</td><td>chooses</td><td>chose</td><td>chosen</td><td>has chosen</td><td>wählen</td></tr>
            <tr><td>drive</td><td>drives</td><td>drove</td><td>driven</td><td>has driven</td><td>fahren</td></tr>
            <tr><td>fall</td><td>falls</td><td>fell</td><td>fallen</td><td>has fallen</td><td>fallen</td></tr>
            <tr><td>forget</td><td>forgets</td><td>forgot</td><td>forgotten</td><td>has forgotten</td><td>vergessen</td></tr>
            <tr><td>leave</td><td>leaves</td><td>left</td><td>left</td><td>has left</td><td>verlassen</td></tr>
            <tr><td>lose</td><td>loses</td><td>lost</td><td>lost</td><td>has lost</td><td>verlieren</td></tr>
            <tr><td>meet</td><td>meets</td><td>met</td><td>met</td><td>has met</td><td>treffen</td></tr>
            <tr><td>run</td><td>runs</td><td>ran</td><td>run</td><td>has run</td><td>rennen</td></tr>
            <tr><td>sleep</td><td>sleeps</td><td>slept</td><td>slept</td><td>has slept</td><td>schlafen</td></tr>
            <tr><td>understand</td><td>understands</td><td>understood</td><td>understood</td><td>has understood</td><td>verstehen</td></tr>
            <tr><td>win</td><td>wins</td><td>won</td><td>won</td><td>has won</td><td>gewinnen</td></tr>
            <tr><td>work</td><td>works</td><td>worked</td><td>worked</td><td>has worked</td><td>arbeiten</td></tr>
            <tr><td>play</td><td>plays</td><td>played</td><td>played</td><td>has played</td><td>spielen</td></tr>
            <tr><td>study</td><td>studies</td><td>studied</td><td>studied</td><td>has studied</td><td>lernen</td></tr>
            <tr><td>try</td><td>tries</td><td>tried</td><td>tried</td><td>has tried</td><td>versuchen</td></tr>
            <tr><td>watch</td><td>watches</td><td>watched</td><td>watched</td><td>has watched</td><td>anschauen</td></tr>
            <tr><td>finish</td><td>finishes</td><td>finished</td><td>finished</td><td>has finished</td><td>beenden</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>6. Interaktive Übung: Verb-Tabelle mit Lücken</h3>
      <p>
        Fülle die Lücken aus. Klicke danach auf <strong>Korrigieren</strong>.
        Mit <strong>Neu anordnen</strong> werden andere Felder versteckt und du bekommst eine neue Lücken-Version.
      </p>

      <div class="sf-en-rule">
        <h4>So funktioniert es</h4>
        <p>
          Manche Felder sind sichtbar, andere sind Lücken. Du ergänzt die fehlenden Formen.
          Die Korrektur zeigt dir sofort, welche Antworten richtig oder falsch sind.
        </p>
      </div>

      <div class="sf-en-actions">
        <button id="en-gym2-check-btn" class="sf-en-toggle" type="button">Korrigieren</button>
        <button id="en-gym2-shuffle-btn" class="sf-en-toggle" type="button">Neu anordnen</button>
      </div>

      <div id="en-gym2-verb-feedback" class="sf-en-feedback"></div>

      <div id="en-gym2-verb-table-area" class="sf-en-table-wrap">
        <p class="sf-en-loading-note">Tabelle wird geladen...</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>7. Typische Fehler bei englischen Verben</h3>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> He go to school every day.</p>
        <p><strong>Correct:</strong> He goes to school every day.</p>
        <p><strong>Explanation:</strong> Present Simple with he/she/it needs <strong>-s</strong> or <strong>-es</strong>.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> Did she went home?</p>
        <p><strong>Correct:</strong> Did she go home?</p>
        <p><strong>Explanation:</strong> After <strong>did</strong>, use the base form.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> I have saw the film.</p>
        <p><strong>Correct:</strong> I have seen the film.</p>
        <p><strong>Explanation:</strong> Present Perfect needs the <strong>past participle</strong>, not the Past Simple form.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> She has went to London.</p>
        <p><strong>Correct:</strong> She has gone to London.</p>
        <p><strong>Explanation:</strong> The past participle of <strong>go</strong> is <strong>gone</strong>.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> He study every evening.</p>
        <p><strong>Correct:</strong> He studies every evening.</p>
        <p><strong>Explanation:</strong> With consonant + y, change <strong>y</strong> to <strong>ies</strong>: study → studies.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>8. Mini-Training für GYM2</h3>

      <div class="sf-en-task">
        <h4>Exercise 1 – Present Simple</h4>
        <p>Correct the sentence:</p>
        <p><strong>She watch TV every evening.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym2-l1')">Lösung anzeigen</button>
        <div id="en-gym2-l1" class="sf-en-hidden-box">
          <p><strong>She watches TV every evening.</strong></p>
          <p>With <strong>she</strong>, use <strong>watches</strong>.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 2 – Past Simple</h4>
        <p>Put into the Past Simple:</p>
        <p><strong>They go home.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym2-l2')">Lösung anzeigen</button>
        <div id="en-gym2-l2" class="sf-en-hidden-box">
          <p><strong>They went home.</strong></p>
          <p>The Past Simple of <strong>go</strong> is <strong>went</strong>.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 3 – Present Perfect</h4>
        <p>Put into the Present Perfect:</p>
        <p><strong>She writes an essay.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym2-l3')">Lösung anzeigen</button>
        <div id="en-gym2-l3" class="sf-en-hidden-box">
          <p><strong>She has written an essay.</strong></p>
          <p>Present Perfect: <strong>has + past participle</strong>.</p>
        </div>
      </div>
    </section>
  `
},

{
  id: "gym3",
  titel: "GYM3",
  untertitel: "Tenses and Use",
  beschreibung:
    "Alle wichtigen englischen Zeiten mit Bildung, Verwendung, Signalwörtern, Beispielen und typischen Fehlern: Present Simple, Present Continuous, Past Simple, Past Continuous, Present Perfect, Past Perfect, Future Forms und Conditional Forms.",
  html: `
    <section class="sf-en-section">
      <h2>GYM3 – Tenses and Use</h2>
      <p class="sf-en-lead">
        In GYM3 geht es nicht nur darum, englische Zeiten zu bilden. Entscheidend ist,
        dass du verstehst, <strong>wann</strong> du welche Zeit brauchst.
        Besonders wichtig sind die Unterschiede zwischen <strong>Present Simple</strong>,
        <strong>Present Continuous</strong>, <strong>Past Simple</strong>,
        <strong>Present Perfect</strong> und den Zukunftsformen.
      </p>

      <div class="sf-en-rule">
        <h4>Grundidee</h4>
        <p>
          Jede englische Zeit beantwortet eine bestimmte Frage:
          Ist etwas eine Gewohnheit? Passiert es gerade? Ist es abgeschlossen?
          Hat es eine Verbindung zur Gegenwart? Oder geht es um die Zukunft?
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>1. Overview of the most important tenses</h3>
      <p>
        Diese Tabelle gibt dir einen Überblick über die wichtigsten englischen Zeiten.
      </p>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Tense</th>
              <th>Formation</th>
              <th>Use</th>
              <th>Example</th>
              <th>Deutsch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Present Simple</td>
              <td>base form / he works</td>
              <td>habits, facts, routines</td>
              <td>She reads every evening.</td>
              <td>Sie liest jeden Abend.</td>
            </tr>
            <tr>
              <td>Present Continuous</td>
              <td>am / is / are + -ing</td>
              <td>now, temporary actions</td>
              <td>She is reading now.</td>
              <td>Sie liest gerade.</td>
            </tr>
            <tr>
              <td>Past Simple</td>
              <td>past form</td>
              <td>finished past actions</td>
              <td>She read the book yesterday.</td>
              <td>Sie las das Buch gestern.</td>
            </tr>
            <tr>
              <td>Past Continuous</td>
              <td>was / were + -ing</td>
              <td>background action in the past</td>
              <td>She was reading when I called.</td>
              <td>Sie las gerade, als ich anrief.</td>
            </tr>
            <tr>
              <td>Present Perfect</td>
              <td>have / has + past participle</td>
              <td>past connected to present</td>
              <td>She has read the book.</td>
              <td>Sie hat das Buch gelesen.</td>
            </tr>
            <tr>
              <td>Past Perfect</td>
              <td>had + past participle</td>
              <td>something happened before another past action</td>
              <td>She had read the book before the lesson started.</td>
              <td>Sie hatte das Buch gelesen, bevor die Stunde begann.</td>
            </tr>
            <tr>
              <td>will-future</td>
              <td>will + base form</td>
              <td>prediction, spontaneous decision</td>
              <td>I will help you.</td>
              <td>Ich werde dir helfen.</td>
            </tr>
            <tr>
              <td>going-to future</td>
              <td>am / is / are going to + base form</td>
              <td>plan, intention</td>
              <td>I am going to study tonight.</td>
              <td>Ich werde heute Abend lernen.</td>
            </tr>
            <tr>
              <td>Conditional</td>
              <td>would + base form</td>
              <td>would-form, hypothetical situations</td>
              <td>I would help you.</td>
              <td>Ich würde dir helfen.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>2. Present Simple</h3>
      <p>
        Das <strong>Present Simple</strong> benutzt man für Gewohnheiten, Routinen,
        Fakten und allgemeine Aussagen.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          <strong>I / you / we / they + base form</strong><br>
          <strong>he / she / it + verb-s</strong>
        </p>
        <p>
          I work.<br>
          You work.<br>
          He works.<br>
          She studies.<br>
          They play.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Use</h4>
        <p>
          <strong>Habits:</strong> I play football every week.<br>
          <strong>Routines:</strong> She goes to school by bus.<br>
          <strong>Facts:</strong> Water boils at 100 degrees.<br>
          <strong>General statements:</strong> The novel shows the conflict between freedom and control.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Signal words</h4>
        <p>
          <strong>always, usually, often, sometimes, rarely, never, every day, every week, on Mondays</strong>
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> He go to school every day.</p>
        <p><strong>Correct:</strong> He goes to school every day.</p>
        <p><strong>Explanation:</strong> With <strong>he, she, it</strong>, the verb needs <strong>-s</strong> or <strong>-es</strong>.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>3. Present Continuous</h3>
      <p>
        Das <strong>Present Continuous</strong> benutzt man für Handlungen,
        die gerade jetzt passieren oder nur vorübergehend sind.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          <strong>am / is / are + verb-ing</strong>
        </p>
        <p>
          I am working.<br>
          She is reading.<br>
          They are studying.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Use</h4>
        <p>
          <strong>Right now:</strong> She is writing an essay at the moment.<br>
          <strong>Temporary situation:</strong> He is staying with his uncle this week.<br>
          <strong>Changing situation:</strong> The problem is becoming more serious.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Signal words</h4>
        <p>
          <strong>now, right now, at the moment, today, this week, currently</strong>
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> She is write a text.</p>
        <p><strong>Correct:</strong> She is writing a text.</p>
        <p><strong>Explanation:</strong> Present Continuous needs <strong>am/is/are + -ing</strong>.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>4. Present Simple or Present Continuous?</h3>
      <p>
        Diese Unterscheidung ist sehr wichtig.
      </p>

      <div class="sf-en-compare">
        <div>
          <h4>Present Simple</h4>
          <p>
            Für Gewohnheiten, Fakten und Routinen.
          </p>
          <p>
            <strong>She usually studies in the evening.</strong>
          </p>
        </div>
        <div>
          <h4>Present Continuous</h4>
          <p>
            Für Handlungen, die gerade jetzt oder vorübergehend passieren.
          </p>
          <p>
            <strong>She is studying right now.</strong>
          </p>
        </div>
      </div>

      <div class="sf-en-example">
        <h4>Vergleich</h4>
        <p>
          <strong>He works in a café.</strong><br>
          Er arbeitet allgemein in einem Café.
        </p>
        <p>
          <strong>He is working in a café this week.</strong><br>
          Er arbeitet nur diese Woche in einem Café.
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>5. Past Simple</h3>
      <p>
        Das <strong>Past Simple</strong> benutzt man für abgeschlossene Handlungen
        in einer abgeschlossenen Vergangenheit.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          Regelmässige Verben: <strong>verb + -ed</strong><br>
          Unregelmässige Verben: eigene Form
        </p>
        <p>
          work → worked<br>
          play → played<br>
          go → went<br>
          see → saw<br>
          write → wrote
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Use</h4>
        <p>
          <strong>Finished action:</strong> I finished my homework yesterday.<br>
          <strong>Specific past time:</strong> She visited London in 2022.<br>
          <strong>Story sequence:</strong> He opened the door, looked inside and smiled.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Signal words</h4>
        <p>
          <strong>yesterday, last week, last year, in 2020, two days ago, when I was younger</strong>
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> I have seen him yesterday.</p>
        <p><strong>Correct:</strong> I saw him yesterday.</p>
        <p><strong>Explanation:</strong> <strong>Yesterday</strong> is finished time, so use Past Simple.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>6. Past Continuous</h3>
      <p>
        Das <strong>Past Continuous</strong> beschreibt eine Handlung,
        die zu einem bestimmten Zeitpunkt in der Vergangenheit gerade im Verlauf war.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          <strong>was / were + verb-ing</strong>
        </p>
        <p>
          I was reading.<br>
          She was writing.<br>
          They were playing.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Use</h4>
        <p>
          <strong>Background action:</strong> I was walking home when I saw her.<br>
          <strong>Parallel actions:</strong> She was reading while he was cooking.<br>
          <strong>Interrupted action:</strong> They were talking when the teacher entered.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Past Simple + Past Continuous</h4>
        <p>
          <strong>I was studying when my phone rang.</strong>
        </p>
        <p>
          <strong>was studying</strong> = Hintergrundhandlung<br>
          <strong>rang</strong> = plötzliches Ereignis
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>7. Present Perfect</h3>
      <p>
        Das <strong>Present Perfect</strong> verbindet Vergangenheit und Gegenwart.
        Es sagt nicht einfach nur, dass etwas früher passiert ist, sondern dass es noch eine Bedeutung für jetzt hat.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          <strong>have / has + past participle</strong>
        </p>
        <p>
          I have finished.<br>
          She has written a text.<br>
          They have visited London.
        </p>
      </div>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Use</th>
              <th>Example</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Experience</td>
              <td>I have been to London.</td>
              <td>Ich war irgendwann einmal in London.</td>
            </tr>
            <tr>
              <td>Result now</td>
              <td>She has lost her keys.</td>
              <td>Die Schlüssel sind jetzt weg.</td>
            </tr>
            <tr>
              <td>Unfinished time</td>
              <td>We have learned a lot this week.</td>
              <td>Diese Woche ist noch nicht abgeschlossen.</td>
            </tr>
            <tr>
              <td>Recent event</td>
              <td>He has just arrived.</td>
              <td>Er ist gerade angekommen.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-en-example">
        <h4>Signal words</h4>
        <p>
          <strong>already, yet, just, ever, never, since, for, recently, so far</strong>
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> She has went home.</p>
        <p><strong>Correct:</strong> She has gone home.</p>
        <p><strong>Explanation:</strong> Present Perfect needs the <strong>past participle</strong>: go → went → gone.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>8. Past Simple or Present Perfect?</h3>
      <p>
        Das ist einer der häufigsten Fehler im Englischen.
      </p>

      <div class="sf-en-compare">
        <div>
          <h4>Past Simple</h4>
          <p>
            Abgeschlossene Zeit in der Vergangenheit.
          </p>
          <p>
            <strong>I visited London last year.</strong>
          </p>
          <p>
            Die Zeit ist klar vorbei: <strong>last year</strong>.
          </p>
        </div>
        <div>
          <h4>Present Perfect</h4>
          <p>
            Vergangenheit mit Verbindung zur Gegenwart.
          </p>
          <p>
            <strong>I have visited London.</strong>
          </p>
          <p>
            Die Erfahrung zählt, nicht der genaue Zeitpunkt.
          </p>
        </div>
      </div>

      <div class="sf-en-rule">
        <h4>Merksatz</h4>
        <p>
          <strong>Past Simple</strong> = When did it happen?<br>
          <strong>Present Perfect</strong> = What is the present result or experience?
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> I have finished the project two days ago.</p>
        <p><strong>Correct:</strong> I finished the project two days ago.</p>
        <p><strong>Explanation:</strong> <strong>Two days ago</strong> is finished time.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>9. Past Perfect</h3>
      <p>
        Das <strong>Past Perfect</strong> benutzt man, wenn etwas schon vor einer anderen vergangenen Handlung passiert war.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          <strong>had + past participle</strong>
        </p>
        <p>
          I had finished.<br>
          She had left.<br>
          They had written the text.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Example</h4>
        <p>
          <strong>When I arrived, the lesson had already started.</strong>
        </p>
        <p>
          <strong>had already started</strong> = früher<br>
          <strong>I arrived</strong> = später
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Use</h4>
        <p>
          Das Past Perfect zeigt die Vorvergangenheit:
          Eine Handlung ist schon abgeschlossen, bevor eine andere Handlung in der Vergangenheit passiert.
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Weak:</strong> When I arrived, the lesson already started.</p>
        <p><strong>Better:</strong> When I arrived, the lesson had already started.</p>
        <p><strong>Explanation:</strong> The lesson started before I arrived.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>10. Future with will</h3>
      <p>
        Das <strong>will-future</strong> benutzt man oft für Vorhersagen,
        spontane Entscheidungen, Versprechen oder Vermutungen.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          <strong>will + base form</strong>
        </p>
        <p>
          I will help.<br>
          She will call.<br>
          They will understand.
        </p>
      </div>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Use</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prediction</td>
              <td>I think it will rain tomorrow.</td>
            </tr>
            <tr>
              <td>Spontaneous decision</td>
              <td>I will help you with your homework.</td>
            </tr>
            <tr>
              <td>Promise</td>
              <td>I will not forget it.</td>
            </tr>
            <tr>
              <td>Opinion about the future</td>
              <td>People will use more digital tools in the future.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>11. Going-to future</h3>
      <p>
        Das <strong>going-to future</strong> benutzt man für Pläne, Absichten
        oder wenn es klare Anzeichen für etwas Zukünftiges gibt.
      </p>

      <div class="sf-en-rule">
        <h4>Formation</h4>
        <p>
          <strong>am / is / are going to + base form</strong>
        </p>
        <p>
          I am going to study.<br>
          She is going to write an essay.<br>
          They are going to visit us.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Examples</h4>
        <p>
          <strong>I am going to revise for the test tonight.</strong><br>
          Ich habe vor, heute Abend für den Test zu lernen.
        </p>
        <p>
          <strong>Look at those clouds. It is going to rain.</strong><br>
          Es gibt sichtbare Anzeichen.
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>12. Will or going to?</h3>
      <p>
        Beide Formen drücken Zukunft aus, aber sie werden nicht genau gleich verwendet.
      </p>

      <div class="sf-en-compare">
        <div>
          <h4>will</h4>
          <p>
            Spontane Entscheidung oder Vorhersage.
          </p>
          <p>
            <strong>I will help you.</strong>
          </p>
          <p>
            Entscheidung passiert im Moment des Sprechens.
          </p>
        </div>
        <div>
          <h4>going to</h4>
          <p>
            Plan, Absicht oder klares Anzeichen.
          </p>
          <p>
            <strong>I am going to study tonight.</strong>
          </p>
          <p>
            Der Plan besteht schon.
          </p>
        </div>
      </div>

      <div class="sf-en-example">
        <h4>Comparison</h4>
        <p>
          <strong>I forgot my book. I will borrow one.</strong><br>
          Spontane Entscheidung.
        </p>
        <p>
          <strong>I am going to borrow a book after school.</strong><br>
          Geplanter Vorgang.
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>13. Present Continuous for future arrangements</h3>
      <p>
        Das <strong>Present Continuous</strong> kann auch für fest geplante Zukunft verwendet werden,
        besonders bei Abmachungen.
      </p>

      <div class="sf-en-rule">
        <h4>Use</h4>
        <p>
          Wenn ein Termin, Treffen oder Plan schon organisiert ist.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Examples</h4>
        <p>
          <strong>I am meeting my teacher tomorrow.</strong><br>
          <strong>We are visiting the museum on Friday.</strong><br>
          <strong>She is taking the train at seven.</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>14. Present Simple for timetables</h3>
      <p>
        Das <strong>Present Simple</strong> kann auch Zukunft ausdrücken,
        wenn es um feste Fahrpläne, Stundenpläne oder Programme geht.
      </p>

      <div class="sf-en-example">
        <h4>Examples</h4>
        <p>
          <strong>The train leaves at 8:15.</strong><br>
          <strong>The lesson starts at 9 o'clock.</strong><br>
          <strong>The film begins at 7:30.</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Merke</h4>
        <p>
          Bei offiziellen Zeiten und Programmen wird oft das Present Simple verwendet,
          obwohl die Bedeutung zukünftig ist.
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>15. Conditional forms</h3>
      <p>
        Conditional forms benutzt man für Bedingungen, Möglichkeiten und hypothetische Situationen.
      </p>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Structure</th>
              <th>Example</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zero conditional</td>
              <td>If + Present Simple, Present Simple</td>
              <td>If water freezes, it becomes ice.</td>
              <td>allgemeine Wahrheit</td>
            </tr>
            <tr>
              <td>First conditional</td>
              <td>If + Present Simple, will + verb</td>
              <td>If I study, I will pass.</td>
              <td>reale Möglichkeit in der Zukunft</td>
            </tr>
            <tr>
              <td>Second conditional</td>
              <td>If + Past Simple, would + verb</td>
              <td>If I had more time, I would read more.</td>
              <td>unrealistisch oder hypothetisch</td>
            </tr>
            <tr>
              <td>Third conditional</td>
              <td>If + Past Perfect, would have + past participle</td>
              <td>If I had studied, I would have passed.</td>
              <td>unwirkliche Vergangenheit</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> If I will have time, I will help you.</p>
        <p><strong>Correct:</strong> If I have time, I will help you.</p>
        <p><strong>Explanation:</strong> In the first conditional, use Present Simple after <strong>if</strong>.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>16. Tenses in text analysis</h3>
      <p>
        In einer englischen Textanalyse benutzt man meistens das <strong>Present Simple</strong>,
        weil man über den Text als gegenwärtiges Objekt spricht.
      </p>

      <div class="sf-en-rule">
        <h4>Useful analysis phrases</h4>
        <p>
          <strong>The text shows that...</strong><br>
          <strong>The author criticises...</strong><br>
          <strong>The narrator describes...</strong><br>
          <strong>This passage suggests...</strong><br>
          <strong>The character represents...</strong><br>
          <strong>The scene illustrates...</strong>
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Weak:</strong> The author showed that the character was lonely.</p>
        <p><strong>Better:</strong> The author shows that the character is lonely.</p>
        <p><strong>Explanation:</strong> In text analysis, use Present Simple.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>17. Tenses in storytelling</h3>
      <p>
        In einer Geschichte kombiniert man mehrere Zeiten.
        Jede Zeit hat eine andere Aufgabe.
      </p>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Function</th>
              <th>Tense</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Background</td>
              <td>Past Continuous</td>
              <td>It was raining and the streets were getting darker.</td>
            </tr>
            <tr>
              <td>Main event</td>
              <td>Past Simple</td>
              <td>Suddenly, she heard a strange noise.</td>
            </tr>
            <tr>
              <td>Earlier event</td>
              <td>Past Perfect</td>
              <td>She had forgotten her phone at school.</td>
            </tr>
            <tr>
              <td>Future consequence</td>
              <td>going to / will</td>
              <td>She was going to ask her friend for help.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-en-example">
        <h4>Short example</h4>
        <p>
          <strong>
            It was getting dark when Anna left the library. She was tired because she had studied all afternoon.
            Suddenly, she noticed that she had forgotten her phone. She decided that she would go back immediately.
          </strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>18. Typical tense mistakes</h3>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> He go to school every day.</p>
        <p><strong>Correct:</strong> He goes to school every day.</p>
        <p><strong>Explanation:</strong> Present Simple with he/she/it needs <strong>-s</strong>.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> I am knowing the answer.</p>
        <p><strong>Correct:</strong> I know the answer.</p>
        <p><strong>Explanation:</strong> Some state verbs are usually not used in the continuous form.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> Yesterday, I have visited my friend.</p>
        <p><strong>Correct:</strong> Yesterday, I visited my friend.</p>
        <p><strong>Explanation:</strong> With finished time, use Past Simple.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> She has wrote an essay.</p>
        <p><strong>Correct:</strong> She has written an essay.</p>
        <p><strong>Explanation:</strong> Present Perfect needs the past participle.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> When I arrived, the lesson already started.</p>
        <p><strong>Better:</strong> When I arrived, the lesson had already started.</p>
        <p><strong>Explanation:</strong> The lesson started before I arrived, so use Past Perfect.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> If I will study, I will pass.</p>
        <p><strong>Correct:</strong> If I study, I will pass.</p>
        <p><strong>Explanation:</strong> In first conditional sentences, use Present Simple after <strong>if</strong>.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>19. Mini-Training for GYM3</h3>
      <p>
        Try to solve the exercises first. Then open the solution.
      </p>

      <div class="sf-en-task">
        <h4>Exercise 1 – Present Simple or Present Continuous?</h4>
        <p>Choose the correct form:</p>
        <p><strong>She usually ___ to school by bus, but today she ___.</strong></p>
        <p>go / walk</p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym3-l1')">Lösung anzeigen</button>
        <div id="en-gym3-l1" class="sf-en-hidden-box">
          <p><strong>She usually goes to school by bus, but today she is walking.</strong></p>
          <p><strong>Usually</strong> → Present Simple. <strong>Today</strong> as temporary situation → Present Continuous.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 2 – Past Simple or Past Continuous?</h4>
        <p>Choose the correct forms:</p>
        <p><strong>I ___ home when I ___ an accident.</strong></p>
        <p>walk / see</p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym3-l2')">Lösung anzeigen</button>
        <div id="en-gym3-l2" class="sf-en-hidden-box">
          <p><strong>I was walking home when I saw an accident.</strong></p>
          <p><strong>was walking</strong> = background action. <strong>saw</strong> = sudden event.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 3 – Present Perfect</h4>
        <p>Correct the sentence:</p>
        <p><strong>She has wrote three texts.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym3-l3')">Lösung anzeigen</button>
        <div id="en-gym3-l3" class="sf-en-hidden-box">
          <p><strong>She has written three texts.</strong></p>
          <p>Present Perfect needs <strong>has + past participle</strong>.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 4 – Past Simple or Present Perfect?</h4>
        <p>Correct the sentence:</p>
        <p><strong>I have seen him last Friday.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym3-l4')">Lösung anzeigen</button>
        <div id="en-gym3-l4" class="sf-en-hidden-box">
          <p><strong>I saw him last Friday.</strong></p>
          <p><strong>Last Friday</strong> is finished time, so use Past Simple.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 5 – Past Perfect</h4>
        <p>Complete the sentence:</p>
        <p><strong>When we arrived, the film already ___.</strong></p>
        <p>start</p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym3-l5')">Lösung anzeigen</button>
        <div id="en-gym3-l5" class="sf-en-hidden-box">
          <p><strong>When we arrived, the film had already started.</strong></p>
          <p>The film started before we arrived, so use Past Perfect.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 6 – Future</h4>
        <p>Choose a good future form:</p>
        <p><strong>Look at the sky. It ___ rain.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym3-l6')">Lösung anzeigen</button>
        <div id="en-gym3-l6" class="sf-en-hidden-box">
          <p><strong>Look at the sky. It is going to rain.</strong></p>
          <p>There is visible evidence, so <strong>going to</strong> fits well.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 7 – Conditional</h4>
        <p>Correct the sentence:</p>
        <p><strong>If I will have time, I will call you.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym3-l7')">Lösung anzeigen</button>
        <div id="en-gym3-l7" class="sf-en-hidden-box">
          <p><strong>If I have time, I will call you.</strong></p>
          <p>In the first conditional, use Present Simple after <strong>if</strong>.</p>
        </div>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>20. Das Wichtigste für GYM3</h3>

      <div class="sf-en-rule">
        <h4>Present Simple</h4>
        <p>
          Für Gewohnheiten, Routinen, Fakten und Textanalyse.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Present Continuous</h4>
        <p>
          Für Handlungen, die gerade passieren oder vorübergehend sind.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Past Simple</h4>
        <p>
          Für abgeschlossene Handlungen in abgeschlossener Vergangenheit.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Present Perfect</h4>
        <p>
          Für Erfahrungen, Resultate jetzt und nicht abgeschlossene Zeiträume.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Past Perfect</h4>
        <p>
          Für etwas, das vor einer anderen vergangenen Handlung passiert war.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Future forms</h4>
        <p>
          <strong>will</strong> für spontane Entscheidungen/Vorhersagen,
          <strong>going to</strong> für Pläne/Anzeichen,
          <strong>Present Continuous</strong> für feste Abmachungen.
        </p>
      </div>
    </section>
  `
},

{
  id: "gym4",
  titel: "GYM4",
  untertitel: "Essay Writing, Speeches and Eulogies",
  beschreibung:
    "Englische Aufsätze, typische Fehler, gute Satzanfänge, Aufbau eines Essays, Analyseformulierungen und eine Anleitung, wie man eine Todesrede bzw. Eulogy hält.",
  html: `
    <section class="sf-en-section">
      <h2>GYM4 – Essay Writing, Speeches and Eulogies</h2>
      <p class="sf-en-lead">
        In GYM4 geht es darum, längere englische Texte klar, korrekt und überzeugend zu schreiben.
        Du lernst den Aufbau eines Essays, gute Formulierungen, typische Fehler und wie man eine
        persönliche, respektvolle Todesrede auf Englisch hält.
      </p>

      <div class="sf-en-rule">
        <h4>Basic idea</h4>
        <p>
          A good English text is clear, structured and focused. You do not need overly complicated sentences.
          You need a clear argument, logical paragraphs and precise language.
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>1. What is an essay?</h3>
      <p>
        An essay is a structured text in which you discuss a topic, develop arguments and answer a central question.
        In school, essays are often argumentative, analytical or reflective.
      </p>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Essay type</th>
              <th>Purpose</th>
              <th>Example topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Argumentative essay</td>
              <td>You discuss a question and defend a position.</td>
              <td>Should students use phones at school?</td>
            </tr>
            <tr>
              <td>Analytical essay</td>
              <td>You analyse a text, character, theme or technique.</td>
              <td>How does the author present power?</td>
            </tr>
            <tr>
              <td>Reflective essay</td>
              <td>You reflect on an experience, idea or problem.</td>
              <td>What does success mean to young people?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-en-rule">
        <h4>Important</h4>
        <p>
          An essay is not just a list of opinions. Every point should be explained and supported with an example,
          reason or reference to the text.
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>2. Basic essay structure</h3>
      <p>
        A strong essay normally has three main parts: introduction, body and conclusion.
      </p>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Part</th>
              <th>Function</th>
              <th>Useful sentence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Introduction</td>
              <td>Introduce the topic and state the main question or thesis.</td>
              <td>This essay discusses whether...</td>
            </tr>
            <tr>
              <td>Body paragraph 1</td>
              <td>Develop the first main argument.</td>
              <td>One important argument is that...</td>
            </tr>
            <tr>
              <td>Body paragraph 2</td>
              <td>Develop another argument or perspective.</td>
              <td>Another aspect to consider is...</td>
            </tr>
            <tr>
              <td>Body paragraph 3</td>
              <td>Include contrast, counterargument or deeper analysis.</td>
              <td>However, one should also consider...</td>
            </tr>
            <tr>
              <td>Conclusion</td>
              <td>Summarise the main points and answer the question clearly.</td>
              <td>In conclusion, it can be said that...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="sf-en-rule">
        <h4>Simple formula</h4>
        <p>
          <strong>Introduction:</strong> What is the topic?<br>
          <strong>Body:</strong> What are your arguments?<br>
          <strong>Conclusion:</strong> What is your final answer?
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>3. Writing a strong introduction</h3>
      <p>
        The introduction should lead the reader into the topic. It should not be too long.
        It should make clear what the essay is about.
      </p>

      <div class="sf-en-rule">
        <h4>Structure of an introduction</h4>
        <p>
          <strong>1. General opening:</strong> Introduce the topic.<br>
          <strong>2. Problem or relevance:</strong> Explain why it matters.<br>
          <strong>3. Thesis or guiding question:</strong> State what you will discuss.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Example introduction</h4>
        <p>
          <strong>
            In modern society, social media plays an important role in the lives of young people.
            It allows them to communicate quickly, but it can also create pressure and unrealistic expectations.
            Therefore, it is important to discuss whether social media is more helpful or harmful for teenagers.
          </strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Useful introduction phrases</h4>
        <p>
          <strong>Nowadays, many people believe that...</strong><br>
          <strong>In recent years, the question of ... has become increasingly important.</strong><br>
          <strong>This topic is relevant because...</strong><br>
          <strong>The following essay will discuss whether...</strong><br>
          <strong>It is important to consider both the advantages and the disadvantages of...</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>4. Writing body paragraphs</h3>
      <p>
        Each body paragraph should focus on one main idea. Do not mix too many different ideas in one paragraph.
      </p>

      <div class="sf-en-rule">
        <h4>PEE structure</h4>
        <p>
          <strong>Point:</strong> State your main idea.<br>
          <strong>Evidence / Example:</strong> Give proof, an example or a reference.<br>
          <strong>Explanation:</strong> Explain why this supports your argument.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Example body paragraph</h4>
        <p>
          <strong>
            One important advantage of social media is that it helps young people stay connected.
            For example, students can communicate with classmates after school and ask questions about homework.
            This shows that social media can support learning when it is used responsibly.
          </strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Better than simple opinions</h4>
        <p>
          Weak: <strong>Phones are good because everyone uses them.</strong><br>
          Better: <strong>Phones can be useful because they allow students to access information quickly and organise their work more efficiently.</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>5. Counterarguments</h3>
      <p>
        A strong essay often includes a counterargument. This shows that you understand both sides of the issue.
      </p>

      <div class="sf-en-rule">
        <h4>Useful phrases for counterarguments</h4>
        <p>
          <strong>On the one hand, ... On the other hand, ...</strong><br>
          <strong>It is true that...</strong><br>
          <strong>However, this does not necessarily mean that...</strong><br>
          <strong>Although this argument is convincing, one must also consider...</strong><br>
          <strong>Despite these disadvantages, ...</strong>
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Example</h4>
        <p>
          <strong>
            It is true that mobile phones can distract students during lessons.
            However, this does not mean that they should be completely banned.
            With clear rules, they can also become useful learning tools.
          </strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>6. Writing a conclusion</h3>
      <p>
        The conclusion should not introduce completely new arguments.
        It should summarise the main points and give a clear final answer.
      </p>

      <div class="sf-en-rule">
        <h4>Structure of a conclusion</h4>
        <p>
          <strong>1. Summary:</strong> Briefly repeat the main ideas.<br>
          <strong>2. Final position:</strong> State your answer clearly.<br>
          <strong>3. Optional outlook:</strong> Mention what might be important in the future.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Example conclusion</h4>
        <p>
          <strong>
            In conclusion, social media has both advantages and disadvantages.
            It can help young people communicate, but it can also create pressure.
            In my opinion, it should not be banned, but students should learn how to use it responsibly.
          </strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Useful conclusion phrases</h4>
        <p>
          <strong>In conclusion, it can be said that...</strong><br>
          <strong>To sum up, ...</strong><br>
          <strong>Overall, the advantages outweigh the disadvantages.</strong><br>
          <strong>From my point of view, the best solution would be to...</strong><br>
          <strong>Therefore, it is important to...</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>7. Useful linking words</h3>
      <p>
        Linking words make your essay more structured and more mature.
      </p>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Function</th>
              <th>Useful words and phrases</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starting</td>
              <td>firstly, first of all, to begin with</td>
              <td>First of all, education should prepare students for real life.</td>
            </tr>
            <tr>
              <td>Adding</td>
              <td>moreover, furthermore, in addition, also</td>
              <td>Moreover, online tools can support independent learning.</td>
            </tr>
            <tr>
              <td>Contrasting</td>
              <td>however, nevertheless, on the other hand, although</td>
              <td>However, too much screen time can be harmful.</td>
            </tr>
            <tr>
              <td>Giving examples</td>
              <td>for example, for instance, such as</td>
              <td>For example, students can use apps to organise homework.</td>
            </tr>
            <tr>
              <td>Explaining reasons</td>
              <td>because, since, as, due to the fact that</td>
              <td>Many students feel stressed because they compare themselves to others.</td>
            </tr>
            <tr>
              <td>Showing results</td>
              <td>therefore, thus, consequently, as a result</td>
              <td>Therefore, schools should teach responsible media use.</td>
            </tr>
            <tr>
              <td>Concluding</td>
              <td>in conclusion, to sum up, overall</td>
              <td>Overall, the issue is more complex than it first appears.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>8. Useful essay sentences</h3>

      <div class="sf-en-rule">
        <h4>Expressing an opinion</h4>
        <p>
          <strong>In my opinion, ...</strong><br>
          <strong>From my point of view, ...</strong><br>
          <strong>I believe that...</strong><br>
          <strong>It seems to me that...</strong><br>
          <strong>I am convinced that...</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Introducing arguments</h4>
        <p>
          <strong>One important argument is that...</strong><br>
          <strong>Another aspect to consider is...</strong><br>
          <strong>It should also be mentioned that...</strong><br>
          <strong>A further reason is that...</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Giving examples</h4>
        <p>
          <strong>For example, ...</strong><br>
          <strong>For instance, ...</strong><br>
          <strong>This can be seen when...</strong><br>
          <strong>A clear example of this is...</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Analysing</h4>
        <p>
          <strong>This shows that...</strong><br>
          <strong>This suggests that...</strong><br>
          <strong>This highlights the fact that...</strong><br>
          <strong>The author uses this to emphasise...</strong><br>
          <strong>The reader gets the impression that...</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>9. Text analysis phrases</h3>
      <p>
        In a text analysis, you should usually use the Present Simple.
      </p>

      <div class="sf-en-rule">
        <h4>Useful analysis phrases</h4>
        <p>
          <strong>The text shows that...</strong><br>
          <strong>The author criticises...</strong><br>
          <strong>The narrator describes...</strong><br>
          <strong>This passage suggests...</strong><br>
          <strong>The character represents...</strong><br>
          <strong>The scene illustrates...</strong><br>
          <strong>The choice of words creates...</strong><br>
          <strong>The atmosphere is...</strong>
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Example</h4>
        <p>
          <strong>
            This passage shows that the character feels isolated.
            The choice of words creates a sad atmosphere and highlights his loneliness.
          </strong>
        </p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Weak:</strong> The author showed that the character was afraid.</p>
        <p><strong>Better:</strong> The author shows that the character is afraid.</p>
        <p><strong>Explanation:</strong> In text analysis, use the Present Simple.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>10. Typical mistakes in English essays</h3>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> In my opinion social media is good, because it is useful.</p>
        <p><strong>Better:</strong> In my opinion, social media can be useful because it helps people communicate quickly.</p>
        <p><strong>Explanation:</strong> Be precise. Do not just say something is “good”. Explain why.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> I am agree with this statement.</p>
        <p><strong>Correct:</strong> I agree with this statement.</p>
        <p><strong>Explanation:</strong> <strong>Agree</strong> is already a verb. Do not use <strong>am</strong>.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> The people is angry.</p>
        <p><strong>Correct:</strong> The people are angry.</p>
        <p><strong>Explanation:</strong> <strong>People</strong> is plural.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> He has many informations.</p>
        <p><strong>Correct:</strong> He has a lot of information.</p>
        <p><strong>Explanation:</strong> <strong>Information</strong> is uncountable in English.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> The author wants to say us that...</p>
        <p><strong>Correct:</strong> The author wants to show that...</p>
        <p><strong>Explanation:</strong> In analysis, <strong>the author shows/suggests/criticises</strong> sounds better.</p>
      </div>

      <div class="sf-en-correction">
        <p><strong>Wrong:</strong> At the end, I can say that...</p>
        <p><strong>Better:</strong> In conclusion, it can be said that...</p>
        <p><strong>Explanation:</strong> <strong>In conclusion</strong> is more formal for essays.</p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>11. Weak vs strong essay style</h3>

      <div class="sf-en-compare">
        <div>
          <h4>Weak style</h4>
          <p>
            <strong>
              Social media is bad. Many people use it too much. I think it is not good for students.
            </strong>
          </p>
        </div>
        <div>
          <h4>Stronger style</h4>
          <p>
            <strong>
              Social media can have negative effects on students because it often distracts them from schoolwork.
              In addition, constant comparison with others may increase stress and insecurity.
            </strong>
          </p>
        </div>
      </div>

      <div class="sf-en-rule">
        <h4>Why is the second version better?</h4>
        <p>
          It is more precise, gives reasons and uses better linking words.
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>12. How to write a speech</h3>
      <p>
        A speech is meant to be spoken. Therefore, it should sound natural, direct and clear.
        You can address the audience directly.
      </p>

      <div class="sf-en-rule">
        <h4>Basic speech structure</h4>
        <p>
          <strong>1. Greeting:</strong> Address the audience.<br>
          <strong>2. Opening:</strong> Introduce the topic or occasion.<br>
          <strong>3. Main part:</strong> Develop your message with examples or stories.<br>
          <strong>4. Ending:</strong> Finish with a strong final thought.
        </p>
      </div>

      <div class="sf-en-example">
        <h4>Useful speech phrases</h4>
        <p>
          <strong>Ladies and gentlemen, ...</strong><br>
          <strong>Dear classmates, ...</strong><br>
          <strong>Today, I would like to talk about...</strong><br>
          <strong>Let me begin with a simple question...</strong><br>
          <strong>What we should remember is...</strong><br>
          <strong>Thank you for listening.</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>13. How to write and hold a eulogy</h3>
      <p>
        A <strong>eulogy</strong> is a speech given in memory of someone who has died.
        In German, this is often called a <strong>Todesrede</strong> or <strong>Trauerrede</strong>.
        A eulogy should be respectful, personal and calm.
      </p>

      <div class="sf-en-rule">
        <h4>Purpose of a eulogy</h4>
        <p>
          A eulogy is not a normal biography. It should honour the person, remember meaningful moments
          and give comfort to the people who are listening.
        </p>
      </div>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Part</th>
              <th>Function</th>
              <th>Useful phrase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Opening</td>
              <td>Address the audience and name the occasion.</td>
              <td>We are gathered here today to remember...</td>
            </tr>
            <tr>
              <td>Personal memory</td>
              <td>Share a meaningful story or quality.</td>
              <td>One thing I will always remember is...</td>
            </tr>
            <tr>
              <td>Character</td>
              <td>Describe what made the person special.</td>
              <td>He / She was a person who...</td>
            </tr>
            <tr>
              <td>Meaning</td>
              <td>Explain what the person gave to others.</td>
              <td>Through his / her kindness, he / she taught us...</td>
            </tr>
            <tr>
              <td>Closing</td>
              <td>End with gratitude, farewell and comfort.</td>
              <td>We will carry his / her memory with us.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>14. Structure of a eulogy</h3>

      <div class="sf-en-rule">
        <h4>1. Opening</h4>
        <p>
          Start calmly and respectfully. Do not begin too dramatically.
        </p>
        <p>
          <strong>Dear family and friends, we are gathered here today to remember a person who meant a great deal to us.</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>2. Personal memory</h4>
        <p>
          Tell a short story that shows something important about the person.
        </p>
        <p>
          <strong>One memory that stays with me is the way she always listened carefully when someone needed help.</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>3. Character</h4>
        <p>
          Describe the person's values or qualities.
        </p>
        <p>
          <strong>He was patient, generous and honest. He did not need many words to show that he cared.</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>4. Meaning for others</h4>
        <p>
          Explain what people can remember or learn from this person.
        </p>
        <p>
          <strong>Through her kindness, she showed us how powerful small acts of care can be.</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>5. Closing</h4>
        <p>
          End with gratitude and a respectful farewell.
        </p>
        <p>
          <strong>We are grateful for the time we had with him, and we will carry his memory with us.</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>15. Useful eulogy phrases</h3>

      <div class="sf-en-rule">
        <h4>Opening</h4>
        <p>
          <strong>We are gathered here today to remember...</strong><br>
          <strong>Today, we say goodbye to someone who was deeply loved.</strong><br>
          <strong>It is difficult to find the right words on a day like this.</strong><br>
          <strong>We are here not only to mourn, but also to remember and honour...</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Memories</h4>
        <p>
          <strong>One thing I will always remember is...</strong><br>
          <strong>I remember the way he / she...</strong><br>
          <strong>Many of us knew him / her as someone who...</strong><br>
          <strong>He / She had a special way of making people feel...</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Character</h4>
        <p>
          <strong>He / She was kind, patient and generous.</strong><br>
          <strong>He / She always tried to help others.</strong><br>
          <strong>What made him / her special was...</strong><br>
          <strong>He / She taught us the importance of...</strong>
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Closing</h4>
        <p>
          <strong>We will miss him / her deeply.</strong><br>
          <strong>His / Her memory will remain with us.</strong><br>
          <strong>We are thankful for the time we shared.</strong><br>
          <strong>May we honour him / her by remembering what he / she stood for.</strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>16. Example: short eulogy</h3>
      <p>
        This is an example of a respectful, simple eulogy. It is completely fictional.
      </p>

      <div class="sf-en-example">
        <h4>Example eulogy</h4>
        <p>
          <strong>
            Dear family and friends,<br><br>
            We are gathered here today to remember a person who meant a great deal to all of us.
            It is difficult to find the right words on a day like this, but perhaps the most important thing
            we can do is remember the kindness, warmth and quiet strength that he brought into our lives.<br><br>
            One thing I will always remember is the way he listened. He did not need to speak loudly to make people feel understood.
            He had a calm presence and a generous heart. Whether someone needed advice, help or simply a moment of attention,
            he was there.<br><br>
            He taught us that kindness does not have to be dramatic. Sometimes it appears in small gestures,
            in patience, in honesty and in the willingness to care for others. These are the things that remain with us.<br><br>
            Today, we say goodbye, but we also say thank you. Thank you for the memories, the love and the example you gave us.
            We will miss you deeply, and we will carry your memory with us.
          </strong>
        </p>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>17. What to avoid in a eulogy</h3>

      <div class="sf-en-table-wrap">
        <table class="sf-en-table">
          <thead>
            <tr>
              <th>Avoid</th>
              <th>Why?</th>
              <th>Better</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Too many private details</td>
              <td>The audience may not need or want them.</td>
              <td>Choose respectful, meaningful memories.</td>
            </tr>
            <tr>
              <td>Trying to sound too dramatic</td>
              <td>It can feel unnatural.</td>
              <td>Use simple, honest language.</td>
            </tr>
            <tr>
              <td>Listing facts like a biography</td>
              <td>A eulogy should feel personal.</td>
              <td>Focus on character and meaning.</td>
            </tr>
            <tr>
              <td>Making jokes that may hurt people</td>
              <td>The situation is sensitive.</td>
              <td>Use warmth, not careless humour.</td>
            </tr>
            <tr>
              <td>Speaking too quickly</td>
              <td>The audience needs time to listen.</td>
              <td>Speak slowly and pause.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>18. Mini-Training for GYM4</h3>
      <p>
        Try to solve the exercises first. Then open the solution.
      </p>

      <div class="sf-en-task">
        <h4>Exercise 1 – Improve an introduction</h4>
        <p>Improve this weak introduction:</p>
        <p><strong>I write about phones. Phones are good and bad.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym4-l1')">Lösung anzeigen</button>
        <div id="en-gym4-l1" class="sf-en-hidden-box">
          <p>
            <strong>
              Nowadays, mobile phones play an important role in students' everyday lives.
              They can be useful tools for communication and learning, but they can also distract students during lessons.
              Therefore, it is important to discuss whether phones should be allowed at school.
            </strong>
          </p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 2 – Correct a typical mistake</h4>
        <p>Correct the sentence:</p>
        <p><strong>I am agree with this opinion.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym4-l2')">Lösung anzeigen</button>
        <div id="en-gym4-l2" class="sf-en-hidden-box">
          <p><strong>I agree with this opinion.</strong></p>
          <p><strong>Agree</strong> is a verb. Do not use <strong>am</strong>.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 3 – Build an argument</h4>
        <p>Improve this argument:</p>
        <p><strong>Homework is useful.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym4-l3')">Lösung anzeigen</button>
        <div id="en-gym4-l3" class="sf-en-hidden-box">
          <p>
            <strong>
              Homework is useful because it helps students revise what they have learned in class.
              By working independently, they can find out whether they have really understood the topic.
              For example, regular practice is especially important in languages and mathematics.
            </strong>
          </p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 4 – Improve an analysis sentence</h4>
        <p>Improve this sentence:</p>
        <p><strong>The author wants to say us that the boy is sad.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym4-l4')">Lösung anzeigen</button>
        <div id="en-gym4-l4" class="sf-en-hidden-box">
          <p><strong>The author shows that the boy feels sad.</strong></p>
          <p>This is shorter, more natural and better for text analysis.</p>
        </div>
      </div>

      <div class="sf-en-task">
        <h4>Exercise 5 – Eulogy opening</h4>
        <p>Improve this opening:</p>
        <p><strong>Hello. Today I speak about a dead person.</strong></p>
        <button class="sf-en-toggle" onclick="toggleEnglischBox('en-gym4-l5')">Lösung anzeigen</button>
        <div id="en-gym4-l5" class="sf-en-hidden-box">
          <p>
            <strong>
              Dear family and friends, we are gathered here today to remember a person who meant a great deal to us.
            </strong>
          </p>
          <p>This is more respectful and appropriate for a eulogy.</p>
        </div>
      </div>
    </section>

    <section class="sf-en-section">
      <h3>19. Das Wichtigste für GYM4</h3>

      <div class="sf-en-rule">
        <h4>Essay</h4>
        <p>
          Use a clear structure: introduction, body paragraphs and conclusion.
          Each argument needs explanation and an example.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Style</h4>
        <p>
          Use precise language. Avoid vague words like <strong>good</strong>, <strong>bad</strong> or <strong>nice</strong>
          without explanation.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Text analysis</h4>
        <p>
          Use phrases like <strong>The author shows...</strong>, <strong>This suggests...</strong>,
          <strong>The passage highlights...</strong>.
        </p>
      </div>

      <div class="sf-en-rule">
        <h4>Eulogy</h4>
        <p>
          A eulogy should be respectful, personal and calm. Focus on memories, character and gratitude.
        </p>
      </div>
    </section>
  `
}

 
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_englisch(container) {
  if (!container) {
    console.error("render_englisch: Kein Container gefunden.");
    return;
  }

  injectEnglischStyles();

  container.innerHTML = `
    <section class="sf-en-page">
      <div class="sf-en-layout">
        <aside class="sf-en-sidebar">
          <h2>Englisch</h2>
          <p>
            Wähle die Stufe aus.
          </p>

          <div class="sf-en-gym-list">
            ${ENGLISCH_BEREICHE.map((bereich, index) => `
              <button
                class="sf-en-gym-button ${index === 0 ? "active" : ""}"
                data-gym-id="${bereich.id}">
                <strong>${bereich.titel}</strong>
                <span>${bereich.untertitel}</span>
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-en-content">
          <div id="sf-en-content-inner"></div>
        </main>
      </div>
    </section>
  `;

  const contentInner = container.querySelector("#sf-en-content-inner");
  const buttons = container.querySelectorAll(".sf-en-gym-button");

  function showBereich(id, shouldScroll) {
    const bereich = ENGLISCH_BEREICHE.find(item => item.id === id);
    if (!bereich) return;

    buttons.forEach(button => {
      button.classList.toggle("active", button.dataset.gymId === id);
    });

    contentInner.innerHTML = `
      <article class="sf-en-topic">
        <header class="sf-en-topic-header">
          <p>${bereich.titel}</p>
          <h1>${bereich.untertitel}</h1>
          <span>${bereich.beschreibung}</span>
        </header>

        ${bereich.html}

        <div class="sf-en-legal">
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

function toggleEnglischBox(id) {
  const box = document.getElementById(id);
  if (!box) return;
  box.classList.toggle("open");
}

window.toggleEnglischBox = toggleEnglischBox;


/* =========================
   CSS
========================= */

function injectEnglischStyles() {
  if (document.getElementById("sf-en-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-en-styles";

  style.textContent = `
    .sf-en-page {
      width: 100%;
      color: #111827;
      font-family: Arial, Helvetica, sans-serif;
    }

    .sf-en-layout {
      display: grid;
      grid-template-columns: 260px minmax(0, 1fr);
      gap: 22px;
      align-items: start;
    }

    .sf-en-sidebar {
      position: sticky;
      top: 18px;
      background: #ffffff;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 18px 40px rgba(0,0,0,0.18);
      border: 1px solid #e5e7eb;
    }

    .sf-en-sidebar h2 {
      margin: 0 0 6px;
      font-size: 26px;
      color: #111827;
    }

    .sf-en-sidebar p {
      margin: 0 0 18px;
      color: #6b7280;
      line-height: 1.5;
      font-size: 14px;
    }

    .sf-en-gym-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-en-gym-button {
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

    .sf-en-gym-button strong {
      display: block;
      font-size: 18px;
      margin-bottom: 3px;
    }

    .sf-en-gym-button span {
      display: block;
      font-size: 13px;
      line-height: 1.35;
      color: #6b7280;
    }

    .sf-en-gym-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
      border-color: #818cf8;
    }

    .sf-en-gym-button.active {
      background: #111827;
      color: #ffffff;
      border-color: #111827;
    }

    .sf-en-gym-button.active span {
      color: #d1d5db;
    }

    .sf-en-content {
      min-width: 0;
    }

    .sf-en-topic {
      background: #f3f4f6;
      border-radius: 24px;
      padding: 22px;
      border: 1px solid #e5e7eb;
    }

    .sf-en-topic-header {
      background: linear-gradient(135deg, #111827, #334155);
      color: #ffffff;
      border-radius: 22px;
      padding: 30px;
      margin-bottom: 18px;
      box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
    }

    .sf-en-topic-header p {
      margin: 0 0 8px;
      color: #cbd5e1;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
    }

    .sf-en-topic-header h1 {
      margin: 0 0 12px;
      font-size: clamp(32px, 5vw, 52px);
      line-height: 1.05;
    }

    .sf-en-topic-header span {
      display: block;
      color: #e5e7eb;
      line-height: 1.6;
      max-width: 900px;
      font-size: 17px;
    }

    .sf-en-section {
      background: #ffffff;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
    }

    .sf-en-section h2 {
      margin: 0 0 12px;
      font-size: 32px;
      color: #111827;
    }

    .sf-en-section h3 {
      margin: 0 0 14px;
      font-size: 26px;
      color: #111827;
    }

    .sf-en-section h4 {
      margin: 0 0 10px;
      font-size: 18px;
      color: #111827;
    }

    .sf-en-section p {
      color: #374151;
      line-height: 1.7;
      margin: 0 0 14px;
      font-size: 16px;
    }

    .sf-en-lead {
      font-size: 18px !important;
      color: #374151 !important;
      line-height: 1.75 !important;
    }

    .sf-en-table-wrap {
      overflow-x: auto;
      margin: 18px 0;
    }

    .sf-en-table {
      width: 100%;
      border-collapse: collapse;
      overflow: hidden;
      border-radius: 14px;
      font-size: 15px;
    }

    .sf-en-table th {
      background: #111827;
      color: #ffffff;
      text-align: left;
      padding: 13px;
      border: 1px solid #1f2937;
      vertical-align: top;
    }

    .sf-en-table td {
      padding: 13px;
      border: 1px solid #e5e7eb;
      color: #374151;
      vertical-align: top;
      line-height: 1.55;
    }

    .sf-en-table tr:nth-child(even) td {
      background: #f9fafb;
    }

    .sf-en-rule,
    .sf-en-example,
    .sf-en-task,
    .sf-en-correction {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-left: 5px solid #6366f1;
      border-radius: 16px;
      padding: 18px;
      margin: 16px 0;
    }

    .sf-en-example {
      border-left-color: #16a34a;
    }

    .sf-en-task {
      border-left-color: #f59e0b;
    }

    .sf-en-correction {
      border-left-color: #dc2626;
    }

    .sf-en-compare {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin: 18px 0;
    }

    .sf-en-compare > div {
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
    }

    .sf-en-toggle {
      margin-top: 6px;
      border: 0;
      background: #111827;
      color: #ffffff;
      padding: 10px 14px;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
    }

    .sf-en-toggle:hover {
      background: #374151;
    }

    .sf-en-hidden-box {
      display: none;
      margin-top: 14px;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 16px;
    }

    .sf-en-hidden-box.open {
      display: block;
    }

    .sf-en-legal {
      background: #fff7ed;
      color: #7c2d12;
      border: 1px solid #fed7aa;
      border-radius: 16px;
      padding: 16px;
      line-height: 1.6;
      font-size: 14px;
    }

    @media (max-width: 900px) {
      .sf-en-layout {
        grid-template-columns: 1fr;
      }

      .sf-en-sidebar {
        position: static;
      }

      .sf-en-compare {
        grid-template-columns: 1fr;
      }

      .sf-en-topic {
        padding: 14px;
      }

      .sf-en-section {
        padding: 18px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_englisch = render_englisch;
