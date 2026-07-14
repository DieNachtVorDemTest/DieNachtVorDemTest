/* =========================================================
   SchoolFools – Quiz
   Datei: quiz.js

   Rechtlich saubere Umsetzung:
   - Alle Fragen und Erklärungen wurden neu formuliert.
   - Keine Fragen oder Texte aus ITheorie übernommen.
   - Keine Bilder oder Zeichnungen aus fremden Dossiers.
   - Verwendet werden nur allgemeine Sachinformationen
     und die vom Betreiber festgelegten Artnamen.
   - Später nur eigene oder passend lizenzierte Bilder nutzen.

   Aufbau:
   - Links: Quiz-Kategorien
   - Rechts: Startseite oder aktives Quiz
   - Zufällige Reihenfolge
   - Vier Antwortmöglichkeiten
   - Sofortige Auswertung
   - Erklärungen nach jeder Antwort
   - Fortschrittsanzeige
   - Ergebnisübersicht
   - Wiederholung falsch beantworteter Fragen
========================================================= */

const QUIZ_BEREICHE = [
  {
    id: "wolken",
    titel: "Wolken",
    icon: "☁️",
    untertitel: "10 Wolkenarten erkennen",
    beschreibung:
      "Trainiere die wichtigsten Merkmale der zehn ausgewählten Wolkenarten.",
  },
  {
    id: "baeume-straeucher",
    titel: "Bäume & Sträucher",
    icon: "🌳",
    untertitel: "36 ausgewählte Arten",
    beschreibung:
      "Lerne die Namen und die grundlegende Einteilung der ausgewählten Bäume und Sträucher.",
  },
  {
    id: "gemischt",
    titel: "Gemischtes Quiz",
    icon: "🎯",
    untertitel: "Alle vorhandenen Fragen",
    beschreibung:
      "Beantworte zufällig ausgewählte Fragen aus allen verfügbaren Kategorien.",
  },
];

/* =========================================================
   FESTGELEGTE ARTEN
========================================================= */

const QUIZ_WOLKENARTEN = [
  "Cumulus",
  "Cirrostratus",
  "Nimbostratus",
  "Stratocumulus",
  "Altocumulus",
  "Cirrus",
  "Cumulonimbus",
  "Altostratus",
  "Stratus",
  "Cirrocumulus",
];

const QUIZ_BAUM_STRAUCH_ARTEN = [
  "Fichte",
  "Weisstanne",
  "Waldföhre",
  "Arve",
  "Lärche",
  "Eibe",
  "Rotbuche",
  "Hainbuche",
  "Stieleiche",
  "Esche",
  "Bergulme",
  "Sommerlinde",
  "Birke",
  "Rosskastanie",
  "Schwarzerle",
  "Spitzahorn",
  "Feldahorn",
  "Bergahorn",
  "Schwarzer Holunder",
  "Roter Holunder",
  "Rote Heckenkirsche",
  "Pfaffenhütchen",
  "Seidelbast",
  "Roter Hornstrauch",
  "Vogelbeerbaum",
  "Hasel",
  "Sauerdorn",
  "Gemeiner Weissdorn",
  "Schwarzdorn",
  "Stechpalme",
  "Liguster",
  "Gemeiner Schneeball",
  "Wolliger Schneeball",
  "Kirschbaum",
  "Kornelkirsche",
  "Elsbeerbaum",
];

/* =========================================================
   FRAGEN – WOLKEN

   Alle Formulierungen sind eigenständig erstellt.
========================================================= */

const QUIZ_FRAGEN_WOLKEN = [
  {
    id: "wolke-001",
    kategorie: "wolken",
    frage: "Welche Wolkenart erscheint häufig als einzelne, klar abgegrenzte Haufenwolke?",
    antworten: ["Cumulus", "Stratus", "Cirrus", "Altostratus"],
    richtig: "Cumulus",
    erklaerung:
      "Cumuluswolken bilden deutlich erkennbare Haufen mit meist flacher Unterseite.",
  },
  {
    id: "wolke-002",
    kategorie: "wolken",
    frage: "Welche Wolkenart kann sich zu einer mächtigen Gewitterwolke entwickeln?",
    antworten: [
      "Cumulonimbus",
      "Cirrostratus",
      "Stratocumulus",
      "Cirrocumulus",
    ],
    richtig: "Cumulonimbus",
    erklaerung:
      "Cumulonimbus ist eine stark aufgetürmte Wolke, die Gewitter, starken Regen und Hagel bringen kann.",
  },
  {
    id: "wolke-003",
    kategorie: "wolken",
    frage: "Welche Wolkenart besteht häufig aus feinen, faserigen Streifen in grosser Höhe?",
    antworten: ["Cirrus", "Stratus", "Nimbostratus", "Cumulus"],
    richtig: "Cirrus",
    erklaerung:
      "Cirruswolken befinden sich hoch am Himmel und wirken oft federartig oder faserig.",
  },
  {
    id: "wolke-004",
    kategorie: "wolken",
    frage: "Bei welcher Wolkenart kann um Sonne oder Mond ein heller Ring entstehen?",
    antworten: [
      "Cirrostratus",
      "Cumulus",
      "Stratocumulus",
      "Nimbostratus",
    ],
    richtig: "Cirrostratus",
    erklaerung:
      "Cirrostratus besteht aus einer dünnen hohen Wolkenschicht. Eiskristalle können dabei eine Haloerscheinung erzeugen.",
  },
  {
    id: "wolke-005",
    kategorie: "wolken",
    frage: "Welche Wolkenart bildet oft eine dunkle, ausgedehnte Niederschlagsschicht?",
    antworten: [
      "Nimbostratus",
      "Cirrocumulus",
      "Cumulus",
      "Altocumulus",
    ],
    richtig: "Nimbostratus",
    erklaerung:
      "Nimbostratus ist typischerweise eine geschlossene, dunkle Wolkendecke mit länger anhaltendem Niederschlag.",
  },
  {
    id: "wolke-006",
    kategorie: "wolken",
    frage: "Welche Wolkenart liegt sehr tief und kann wie angehobener Nebel wirken?",
    antworten: ["Stratus", "Cirrus", "Altocumulus", "Cumulonimbus"],
    richtig: "Stratus",
    erklaerung:
      "Stratus ist eine tiefe, gleichmässige Wolkenschicht und ähnelt häufig Hochnebel.",
  },
  {
    id: "wolke-007",
    kategorie: "wolken",
    frage: "Welche Wolkenart besteht aus tiefen, grösseren Wolkenballen, die oft eine Schicht bilden?",
    antworten: [
      "Stratocumulus",
      "Cirrocumulus",
      "Cirrostratus",
      "Altostratus",
    ],
    richtig: "Stratocumulus",
    erklaerung:
      "Stratocumulus liegt tief und besteht aus vergleichsweise grossen, zusammenhängenden Wolkenelementen.",
  },
  {
    id: "wolke-008",
    kategorie: "wolken",
    frage: "Welche Wolkenart zeigt mittelhohe Felder aus mehreren rundlichen Wolkenteilen?",
    antworten: [
      "Altocumulus",
      "Stratus",
      "Cirrus",
      "Nimbostratus",
    ],
    richtig: "Altocumulus",
    erklaerung:
      "Altocumulus besteht aus mittelhohen Wolkengruppen oder Wolkenfeldern mit erkennbaren Einzelelementen.",
  },
  {
    id: "wolke-009",
    kategorie: "wolken",
    frage: "Welche Wolkenart bildet eine mittelhohe, meist gleichmässige graue Schicht?",
    antworten: [
      "Altostratus",
      "Cumulus",
      "Cirrocumulus",
      "Stratocumulus",
    ],
    richtig: "Altostratus",
    erklaerung:
      "Altostratus bedeckt häufig einen grossen Teil des Himmels als graue oder bläuliche Schicht.",
  },
  {
    id: "wolke-010",
    kategorie: "wolken",
    frage: "Welche Wolkenart besteht aus sehr kleinen, hohen Wolkenelementen?",
    antworten: [
      "Cirrocumulus",
      "Stratocumulus",
      "Cumulonimbus",
      "Nimbostratus",
    ],
    richtig: "Cirrocumulus",
    erklaerung:
      "Cirrocumulus liegt hoch und besteht aus kleinen weissen Wolkenteilen, die in Feldern angeordnet sein können.",
  },
  {
    id: "wolke-011",
    kategorie: "wolken",
    frage: "Welche der folgenden Wolken gehört zu den stark vertikal entwickelten Wolken?",
    antworten: [
      "Cumulonimbus",
      "Cirrostratus",
      "Altostratus",
      "Stratus",
    ],
    richtig: "Cumulonimbus",
    erklaerung:
      "Cumulonimbus kann sich über einen sehr grossen Höhenbereich erstrecken.",
  },
  {
    id: "wolke-012",
    kategorie: "wolken",
    frage: "Welche Wolke ist am ehesten mit einer Ambossform verbunden?",
    antworten: [
      "Cumulonimbus",
      "Cumulus",
      "Cirrocumulus",
      "Stratocumulus",
    ],
    richtig: "Cumulonimbus",
    erklaerung:
      "Der obere Teil einer vollständig entwickelten Gewitterwolke kann sich seitlich ausbreiten und wie ein Amboss aussehen.",
  },
  {
    id: "wolke-013",
    kategorie: "wolken",
    frage: "Welche Wolkenart ist dünn genug, dass Sonne oder Mond häufig noch erkennbar bleiben?",
    antworten: [
      "Cirrostratus",
      "Nimbostratus",
      "Cumulonimbus",
      "Stratus",
    ],
    richtig: "Cirrostratus",
    erklaerung:
      "Cirrostratus bildet einen dünnen hohen Schleier, durch den Sonne oder Mond häufig sichtbar bleiben.",
  },
  {
    id: "wolke-014",
    kategorie: "wolken",
    frage: "Welche Wolkenart bringt eher länger anhaltenden Regen als kurze Gewitterschauer?",
    antworten: [
      "Nimbostratus",
      "Cumulonimbus",
      "Cirrus",
      "Cirrocumulus",
    ],
    richtig: "Nimbostratus",
    erklaerung:
      "Nimbostratus ist typischerweise mit ausgedehntem und länger anhaltendem Niederschlag verbunden.",
  },
  {
    id: "wolke-015",
    kategorie: "wolken",
    frage: "Welche Reihenfolge geht von hohen kleinen zu mittleren und danach tiefen grossen Wolkenelementen?",
    antworten: [
      "Cirrocumulus – Altocumulus – Stratocumulus",
      "Stratocumulus – Cirrocumulus – Altocumulus",
      "Altocumulus – Stratocumulus – Cirrocumulus",
      "Cumulus – Cirrus – Stratus",
    ],
    richtig: "Cirrocumulus – Altocumulus – Stratocumulus",
    erklaerung:
      "Cirrocumulus liegt hoch, Altocumulus auf mittlerer Höhe und Stratocumulus vergleichsweise tief.",
  },
  {
    id: "wolke-016",
    kategorie: "wolken",
    frage: "Welche Wolkenart ist eine tiefe Schichtwolke ohne deutlich getrennte Haufen?",
    antworten: ["Stratus", "Cumulus", "Altocumulus", "Cirrocumulus"],
    richtig: "Stratus",
    erklaerung:
      "Stratus erscheint als tiefe, weitgehend gleichmässige Wolkendecke.",
  },
  {
    id: "wolke-017",
    kategorie: "wolken",
    frage: "Welche Wolke hat meist eine deutlich flache Unterseite und einen aufgequollenen oberen Bereich?",
    antworten: ["Cumulus", "Cirrus", "Altostratus", "Cirrostratus"],
    richtig: "Cumulus",
    erklaerung:
      "Bei einer typischen Cumuluswolke ist die Basis relativ eben, während der obere Teil aufquillt.",
  },
  {
    id: "wolke-018",
    kategorie: "wolken",
    frage: "Welche Wolkenart gehört zur mittleren Höhenstufe und besitzt keine klar getrennten Haufen?",
    antworten: [
      "Altostratus",
      "Altocumulus",
      "Cirrocumulus",
      "Cumulus",
    ],
    richtig: "Altostratus",
    erklaerung:
      "Altostratus ist eine mittelhohe Schichtwolke. Altocumulus besitzt dagegen erkennbare Einzelelemente.",
  },
  {
    id: "wolke-019",
    kategorie: "wolken",
    frage: "Welche zwei Wolkenarten bestehen typischerweise aus einer ausgedehnten Schicht?",
    antworten: [
      "Stratus und Altostratus",
      "Cumulus und Cumulonimbus",
      "Cirrus und Cumulus",
      "Altocumulus und Cumulus",
    ],
    richtig: "Stratus und Altostratus",
    erklaerung:
      "Stratus bildet eine tiefe Schicht, Altostratus eine mittelhohe Schicht.",
  },
  {
    id: "wolke-020",
    kategorie: "wolken",
    frage: "Welche der folgenden Wolken ist keine reine Schichtwolke?",
    antworten: ["Cumulus", "Stratus", "Altostratus", "Cirrostratus"],
    richtig: "Cumulus",
    erklaerung:
      "Cumulus ist eine Haufenwolke. Die anderen Antworten beschreiben typische Schichtwolken.",
  },
];

/* =========================================================
   FRAGEN – BÄUME UND STRÄUCHER

   Hier werden keine Beschreibungen aus dem Dossier kopiert.
   Die Fragen beruhen auf allgemeinen botanischen Merkmalen
   und eigenständigen Formulierungen.

   Hinweis:
   Ohne Bilder sind Namens- und Einteilungsfragen möglich.
   Für ein echtes Erkennungsquiz später eigene Fotos ergänzen.
========================================================= */

const QUIZ_FRAGEN_BAUM_STRAUCH = [
  {
    id: "baum-001",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist ein Nadelbaum?",
    antworten: ["Fichte", "Rotbuche", "Sommerlinde", "Bergulme"],
    richtig: "Fichte",
    erklaerung:
      "Die Fichte trägt Nadeln. Rotbuche, Sommerlinde und Bergulme sind Laubgehölze.",
  },
  {
    id: "baum-002",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist ebenfalls ein Nadelbaum?",
    antworten: ["Weisstanne", "Esche", "Birke", "Stieleiche"],
    richtig: "Weisstanne",
    erklaerung:
      "Die Weisstanne gehört zu den Nadelbäumen.",
  },
  {
    id: "baum-003",
    kategorie: "baeume-straeucher",
    frage: "Welche Art wird auch den Kiefern zugeordnet?",
    antworten: ["Waldföhre", "Schwarzerle", "Hainbuche", "Hasel"],
    richtig: "Waldföhre",
    erklaerung:
      "Die Waldföhre ist eine Kiefernart.",
  },
  {
    id: "baum-004",
    kategorie: "baeume-straeucher",
    frage: "Welcher der folgenden Bäume wirft im Herbst seine Nadeln ab?",
    antworten: ["Lärche", "Fichte", "Weisstanne", "Arve"],
    richtig: "Lärche",
    erklaerung:
      "Die Lärche ist ein sommergrüner Nadelbaum und verliert im Herbst ihre Nadeln.",
  },
  {
    id: "baum-005",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist für ihre roten Samenmäntel bekannt?",
    antworten: ["Eibe", "Fichte", "Waldföhre", "Lärche"],
    richtig: "Eibe",
    erklaerung:
      "Bei der Eibe ist der Samen von einem auffälligen roten Samenmantel umgeben.",
  },
  {
    id: "baum-006",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten gehört zu den Buchen?",
    antworten: ["Rotbuche", "Bergahorn", "Esche", "Sommerlinde"],
    richtig: "Rotbuche",
    erklaerung:
      "Die Rotbuche ist eine Buchenart.",
  },
  {
    id: "baum-007",
    kategorie: "baeume-straeucher",
    frage: "Welche Art trägt den Begriff „Buche“ im Namen, ist botanisch aber keine echte Buche?",
    antworten: ["Hainbuche", "Rotbuche", "Stieleiche", "Bergulme"],
    richtig: "Hainbuche",
    erklaerung:
      "Die Hainbuche gehört nicht zur gleichen botanischen Familie wie die Rotbuche.",
  },
  {
    id: "baum-008",
    kategorie: "baeume-straeucher",
    frage: "Welche Art bildet Eicheln?",
    antworten: ["Stieleiche", "Esche", "Birke", "Sommerlinde"],
    richtig: "Stieleiche",
    erklaerung:
      "Die Früchte der Stieleiche sind Eicheln.",
  },
  {
    id: "baum-009",
    kategorie: "baeume-straeucher",
    frage: "Welche Art ist an ihrem Namen als Ahorn erkennbar?",
    antworten: ["Spitzahorn", "Esche", "Bergulme", "Schwarzerle"],
    richtig: "Spitzahorn",
    erklaerung:
      "Der Spitzahorn gehört zu den Ahornarten.",
  },
  {
    id: "baum-010",
    kategorie: "baeume-straeucher",
    frage: "Welche Gruppe besteht ausschliesslich aus Ahornarten?",
    antworten: [
      "Spitzahorn, Feldahorn und Bergahorn",
      "Rotbuche, Hainbuche und Bergulme",
      "Fichte, Weisstanne und Lärche",
      "Hasel, Birke und Esche",
    ],
    richtig: "Spitzahorn, Feldahorn und Bergahorn",
    erklaerung:
      "Diese drei Namen bezeichnen die ausgewählten Ahornarten.",
  },
  {
    id: "baum-011",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten gehört nicht zu den drei ausgewählten Ahornarten?",
    antworten: ["Sommerlinde", "Spitzahorn", "Feldahorn", "Bergahorn"],
    richtig: "Sommerlinde",
    erklaerung:
      "Sommerlinde ist eine Lindenart und kein Ahorn.",
  },
  {
    id: "baum-012",
    kategorie: "baeume-straeucher",
    frage: "Welche Art trägt typischerweise auffällig weisse Rinde?",
    antworten: ["Birke", "Stieleiche", "Sommerlinde", "Bergulme"],
    richtig: "Birke",
    erklaerung:
      "Die helle bis weisse Rinde ist ein auffälliges Merkmal vieler Birken.",
  },
  {
    id: "baum-013",
    kategorie: "baeume-straeucher",
    frage: "Welche Art bildet Rosskastanien?",
    antworten: ["Rosskastanie", "Kirschbaum", "Hasel", "Schwarzerle"],
    richtig: "Rosskastanie",
    erklaerung:
      "Die grossen braunen Samen der Rosskastanie werden Rosskastanien genannt.",
  },
  {
    id: "baum-014",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist eine Erlenart?",
    antworten: ["Schwarzerle", "Bergulme", "Sommerlinde", "Esche"],
    richtig: "Schwarzerle",
    erklaerung:
      "Die Schwarzerle gehört zu den Erlen.",
  },
  {
    id: "baum-015",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist eine Lindenart?",
    antworten: ["Sommerlinde", "Feldahorn", "Hainbuche", "Birke"],
    richtig: "Sommerlinde",
    erklaerung:
      "Die Sommerlinde gehört zur Gattung der Linden.",
  },
  {
    id: "baum-016",
    kategorie: "baeume-straeucher",
    frage: "Welche zwei ausgewählten Arten gehören zu den Holundern?",
    antworten: [
      "Schwarzer Holunder und Roter Holunder",
      "Roter Hornstrauch und Kornelkirsche",
      "Gemeiner Schneeball und Wolliger Schneeball",
      "Gemeiner Weissdorn und Schwarzdorn",
    ],
    richtig: "Schwarzer Holunder und Roter Holunder",
    erklaerung:
      "Im Quiz kommen zwei Holunderarten vor: Schwarzer Holunder und Roter Holunder.",
  },
  {
    id: "baum-017",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten gehört zu den Holundern?",
    antworten: [
      "Schwarzer Holunder",
      "Schwarzdorn",
      "Stechpalme",
      "Liguster",
    ],
    richtig: "Schwarzer Holunder",
    erklaerung:
      "Der Schwarze Holunder ist eine der beiden ausgewählten Holunderarten.",
  },
  {
    id: "baum-018",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist keine Holunderart?",
    antworten: [
      "Rote Heckenkirsche",
      "Roter Holunder",
      "Schwarzer Holunder",
      "Keine der Antworten",
    ],
    richtig: "Rote Heckenkirsche",
    erklaerung:
      "Die Rote Heckenkirsche gehört nicht zu den Holundern.",
  },
  {
    id: "baum-019",
    kategorie: "baeume-straeucher",
    frage: "Welche Art besitzt einen Namen, der an eine kirchliche Kopfbedeckung erinnert?",
    antworten: ["Pfaffenhütchen", "Seidelbast", "Liguster", "Sauerdorn"],
    richtig: "Pfaffenhütchen",
    erklaerung:
      "Der Name Pfaffenhütchen bezieht sich auf die auffällige Form der Früchte.",
  },
  {
    id: "baum-020",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist stark giftig und sollte nicht gegessen werden?",
    antworten: ["Seidelbast", "Hasel", "Kirschbaum", "Kornelkirsche"],
    richtig: "Seidelbast",
    erklaerung:
      "Seidelbast enthält giftige Stoffe. Pflanzenteile dürfen nicht verzehrt werden.",
  },
  {
    id: "baum-021",
    kategorie: "baeume-straeucher",
    frage: "Welche zwei Namen gehören zu Hornsträuchern?",
    antworten: [
      "Roter Hornstrauch und Kornelkirsche",
      "Schwarzer Holunder und Roter Holunder",
      "Gemeiner Schneeball und Wolliger Schneeball",
      "Spitzahorn und Feldahorn",
    ],
    richtig: "Roter Hornstrauch und Kornelkirsche",
    erklaerung:
      "Der Rote Hornstrauch und die Kornelkirsche gehören zur Gattung Cornus.",
  },
  {
    id: "baum-022",
    kategorie: "baeume-straeucher",
    frage: "Welche Art wird auch mit Vogelbeeren verbunden?",
    antworten: ["Vogelbeerbaum", "Elsbeerbaum", "Kirschbaum", "Hasel"],
    richtig: "Vogelbeerbaum",
    erklaerung:
      "Der Vogelbeerbaum trägt die als Vogelbeeren bekannten Früchte.",
  },
  {
    id: "baum-023",
    kategorie: "baeume-straeucher",
    frage: "Welche Art bildet Haselnüsse?",
    antworten: ["Hasel", "Stieleiche", "Rosskastanie", "Birke"],
    richtig: "Hasel",
    erklaerung:
      "Haselnüsse sind die Früchte der Hasel.",
  },
  {
    id: "baum-024",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten trägt bereits im Namen einen Hinweis auf Dornen?",
    antworten: ["Sauerdorn", "Sommerlinde", "Esche", "Bergulme"],
    richtig: "Sauerdorn",
    erklaerung:
      "Der Sauerdorn ist ein dorniger Strauch.",
  },
  {
    id: "baum-025",
    kategorie: "baeume-straeucher",
    frage: "Welche zwei ausgewählten Arten tragen „Dorn“ im Namen?",
    antworten: [
      "Gemeiner Weissdorn und Schwarzdorn",
      "Sauerdorn und Stechpalme",
      "Roter Hornstrauch und Kornelkirsche",
      "Liguster und Seidelbast",
    ],
    richtig: "Gemeiner Weissdorn und Schwarzdorn",
    erklaerung:
      "Gemeiner Weissdorn und Schwarzdorn enthalten beide den Bestandteil „Dorn“ im Namen.",
  },
  {
    id: "baum-026",
    kategorie: "baeume-straeucher",
    frage: "Welche Art wird auch Schlehe genannt?",
    antworten: ["Schwarzdorn", "Gemeiner Weissdorn", "Sauerdorn", "Hasel"],
    richtig: "Schwarzdorn",
    erklaerung:
      "Der Schwarzdorn ist auch unter dem Namen Schlehe bekannt.",
  },
  {
    id: "baum-027",
    kategorie: "baeume-straeucher",
    frage: "Welche Art besitzt immergrüne, häufig dornig gezähnte Blätter?",
    antworten: ["Stechpalme", "Liguster", "Hasel", "Birke"],
    richtig: "Stechpalme",
    erklaerung:
      "Die Stechpalme trägt ledrige immergrüne Blätter, die häufig stachelige Ränder besitzen.",
  },
  {
    id: "baum-028",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten wird häufig als Heckenstrauch verwendet?",
    antworten: ["Liguster", "Lärche", "Esche", "Stieleiche"],
    richtig: "Liguster",
    erklaerung:
      "Liguster wird wegen seines dichten Wuchses häufig für Hecken verwendet.",
  },
  {
    id: "baum-029",
    kategorie: "baeume-straeucher",
    frage: "Welche beiden ausgewählten Arten gehören zu den Schneebällen?",
    antworten: [
      "Gemeiner Schneeball und Wolliger Schneeball",
      "Gemeiner Weissdorn und Schwarzdorn",
      "Schwarzer Holunder und Roter Holunder",
      "Rotbuche und Hainbuche",
    ],
    richtig: "Gemeiner Schneeball und Wolliger Schneeball",
    erklaerung:
      "Im Quiz kommen der Gemeine Schneeball und der Wollige Schneeball vor.",
  },
  {
    id: "baum-030",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist keine Schneeballart?",
    antworten: [
      "Rote Heckenkirsche",
      "Gemeiner Schneeball",
      "Wolliger Schneeball",
      "Keine der Antworten",
    ],
    richtig: "Rote Heckenkirsche",
    erklaerung:
      "Die Rote Heckenkirsche gehört nicht zu den Schneebällen.",
  },
  {
    id: "baum-031",
    kategorie: "baeume-straeucher",
    frage: "Welche Art bildet Kirschen?",
    antworten: ["Kirschbaum", "Elsbeerbaum", "Vogelbeerbaum", "Eibe"],
    richtig: "Kirschbaum",
    erklaerung:
      "Der Kirschbaum bildet Steinfrüchte, die als Kirschen bezeichnet werden.",
  },
  {
    id: "baum-032",
    kategorie: "baeume-straeucher",
    frage: "Welche Art trägt zwar „Kirsche“ im Namen, ist aber kein eigentlicher Kirschbaum?",
    antworten: ["Kornelkirsche", "Kirschbaum", "Vogelbeerbaum", "Hasel"],
    richtig: "Kornelkirsche",
    erklaerung:
      "Die Kornelkirsche gehört zu den Hartriegelgewächsen und nicht zu den eigentlichen Kirschen.",
  },
  {
    id: "baum-033",
    kategorie: "baeume-straeucher",
    frage: "Welche Art trägt „Beere“ bereits im Namen?",
    antworten: ["Elsbeerbaum", "Kirschbaum", "Hainbuche", "Feldahorn"],
    richtig: "Elsbeerbaum",
    erklaerung:
      "Der Name Elsbeerbaum enthält den Hinweis auf seine Früchte.",
  },
  {
    id: "baum-034",
    kategorie: "baeume-straeucher",
    frage: "Welche Gruppe besteht ausschliesslich aus Nadelbäumen?",
    antworten: [
      "Fichte, Weisstanne, Waldföhre und Lärche",
      "Rotbuche, Hainbuche, Stieleiche und Esche",
      "Birke, Rosskastanie, Schwarzerle und Bergahorn",
      "Hasel, Liguster, Seidelbast und Schwarzdorn",
    ],
    richtig: "Fichte, Weisstanne, Waldföhre und Lärche",
    erklaerung:
      "Alle vier Arten in dieser Antwort gehören zu den Nadelbäumen.",
  },
  {
    id: "baum-035",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist kein Nadelbaum?",
    antworten: ["Rotbuche", "Arve", "Eibe", "Fichte"],
    richtig: "Rotbuche",
    erklaerung:
      "Die Rotbuche ist ein Laubbaum.",
  },
  {
    id: "baum-036",
    kategorie: "baeume-straeucher",
    frage: "Welche Art gehört zu den Ulmen?",
    antworten: ["Bergulme", "Bergahorn", "Sommerlinde", "Esche"],
    richtig: "Bergulme",
    erklaerung:
      "Die Bergulme ist eine Ulmenart.",
  },
  {
    id: "baum-037",
    kategorie: "baeume-straeucher",
    frage: "Welche Art gehört zu den Eschen?",
    antworten: ["Esche", "Schwarzerle", "Bergulme", "Birke"],
    richtig: "Esche",
    erklaerung:
      "Die Esche ist die ausgewählte Vertreterin der Eschen.",
  },
  {
    id: "baum-038",
    kategorie: "baeume-straeucher",
    frage: "Welche der folgenden Arten ist im Namen ausdrücklich als Heckengehölz erkennbar?",
    antworten: [
      "Rote Heckenkirsche",
      "Kornelkirsche",
      "Kirschbaum",
      "Elsbeerbaum",
    ],
    richtig: "Rote Heckenkirsche",
    erklaerung:
      "Der Name Rote Heckenkirsche enthält den Begriff „Hecke“.",
  },
  {
    id: "baum-039",
    kategorie: "baeume-straeucher",
    frage: "Welche zwei Namen enthalten das Wort „Holunder“?",
    antworten: [
      "Schwarzer Holunder und Roter Holunder",
      "Roter Hornstrauch und Rote Heckenkirsche",
      "Schwarzdorn und Schwarzerle",
      "Gemeiner Weissdorn und Gemeiner Schneeball",
    ],
    richtig: "Schwarzer Holunder und Roter Holunder",
    erklaerung:
      "Diese beiden Arten sind die Holunderarten der Liste.",
  },
  {
    id: "baum-040",
    kategorie: "baeume-straeucher",
    frage: "Welche zwei Namen enthalten das Wort „Schneeball“?",
    antworten: [
      "Gemeiner Schneeball und Wolliger Schneeball",
      "Gemeiner Weissdorn und Schwarzdorn",
      "Roter Holunder und Schwarzer Holunder",
      "Feldahorn und Bergahorn",
    ],
    richtig: "Gemeiner Schneeball und Wolliger Schneeball",
    erklaerung:
      "Beide gehören zu den im Quiz ausgewählten Schneeballarten.",
  },
];

/* =========================================================
   GESAMTE FRAGENSAMMLUNG
========================================================= */

const ALLE_QUIZ_FRAGEN = [
  ...QUIZ_FRAGEN_WOLKEN,
  ...QUIZ_FRAGEN_BAUM_STRAUCH,
];

/* =========================================================
   QUIZ-ZUSTAND
========================================================= */

const quizState = {
  bereich: null,
  fragen: [],
  aktuelleFrageIndex: 0,
  richtigeAntworten: 0,
  beantwortet: false,
  ausgewaehlteAntwort: null,
  falscheFragen: [],
  anzahlFragen: 10,
};

/* =========================================================
   HILFSFUNKTIONEN
========================================================= */

function quizMischen(array) {
  const kopie = [...array];

  for (let i = kopie.length - 1; i > 0; i -= 1) {
    const zufallsIndex = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[zufallsIndex]] = [kopie[zufallsIndex], kopie[i]];
  }

  return kopie;
}

function quizTextSichern(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function quizFragenFuerBereich(bereichId) {
  if (bereichId === "wolken") {
    return QUIZ_FRAGEN_WOLKEN;
  }

  if (bereichId === "baeume-straeucher") {
    return QUIZ_FRAGEN_BAUM_STRAUCH;
  }

  return ALLE_QUIZ_FRAGEN;
}

function quizBereichFinden(bereichId) {
  return QUIZ_BEREICHE.find((bereich) => bereich.id === bereichId);
}

function quizProzentwert() {
  if (quizState.fragen.length === 0) {
    return 0;
  }

  return Math.round(
    (quizState.richtigeAntworten / quizState.fragen.length) * 100
  );
}

/* =========================================================
   HAUPTANSICHT ERSTELLEN
========================================================= */

function quizInitialisieren() {
  const container = document.getElementById("quiz-app");

  if (!container) {
    console.error(
      'Quiz konnte nicht geladen werden: Element mit ID "quiz-app" fehlt.'
    );
    return;
  }

  container.innerHTML = `
    <div class="sf-quiz-layout">
      <aside class="sf-quiz-sidebar">
        <div class="sf-quiz-sidebar-header">
          <span class="sf-quiz-kicker">LERNBEREICH</span>
          <h2>Quiz</h2>
          <p>
            Teste dein Wissen über Natur und Umwelt.
          </p>
        </div>

        <nav
          id="quiz-navigation"
          class="sf-quiz-navigation"
          aria-label="Quiz-Kategorien"
        ></nav>
      </aside>

      <main
        id="quiz-inhalt"
        class="sf-quiz-content"
        aria-live="polite"
      ></main>
    </div>
  `;

  quizNavigationRendern();
  quizStartseiteRendern();
}

/* =========================================================
   NAVIGATION
========================================================= */

function quizNavigationRendern() {
  const navigation = document.getElementById("quiz-navigation");

  if (!navigation) {
    return;
  }

  navigation.innerHTML = QUIZ_BEREICHE.map(
    (bereich) => `
      <button
        type="button"
        class="sf-quiz-nav-button"
        data-quiz-bereich="${quizTextSichern(bereich.id)}"
      >
        <span class="sf-quiz-nav-icon" aria-hidden="true">
          ${bereich.icon}
        </span>

        <span class="sf-quiz-nav-text">
          <strong>${quizTextSichern(bereich.titel)}</strong>
          <small>${quizTextSichern(bereich.untertitel)}</small>
        </span>
      </button>
    `
  ).join("");

  navigation
    .querySelectorAll("[data-quiz-bereich]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const bereichId = button.dataset.quizBereich;
        quizBereichsseiteRendern(bereichId);
        quizAktiveNavigationSetzen(bereichId);
      });
    });
}

function quizAktiveNavigationSetzen(bereichId) {
  document
    .querySelectorAll("[data-quiz-bereich]")
    .forEach((button) => {
      const istAktiv = button.dataset.quizBereich === bereichId;
      button.classList.toggle("ist-aktiv", istAktiv);
      button.setAttribute("aria-current", istAktiv ? "page" : "false");
    });
}

/* =========================================================
   STARTSEITE
========================================================= */

function quizStartseiteRendern() {
  const inhalt = document.getElementById("quiz-inhalt");

  if (!inhalt) {
    return;
  }

  inhalt.innerHTML = `
    <section class="sf-quiz-hero">
      <span class="sf-quiz-kicker">QUIZ</span>
      <h1>Naturwissen spielerisch trainieren</h1>

      <p class="sf-quiz-lead">
        Wähle links eine Kategorie. Nach jeder Antwort erhältst du
        sofort eine Rückmeldung und eine kurze Erklärung.
      </p>

      <div class="sf-quiz-info-grid">
        <article class="sf-quiz-info-card">
          <span aria-hidden="true">☁️</span>
          <h3>Wolken</h3>
          <p>
            ${QUIZ_FRAGEN_WOLKEN.length} selbst formulierte Fragen
            zu den zehn festgelegten Wolkenarten.
          </p>
        </article>

        <article class="sf-quiz-info-card">
          <span aria-hidden="true">🌳</span>
          <h3>Bäume & Sträucher</h3>
          <p>
            ${QUIZ_FRAGEN_BAUM_STRAUCH.length} selbst formulierte
            Fragen zu den 36 ausgewählten Arten.
          </p>
        </article>

        <article class="sf-quiz-info-card">
          <span aria-hidden="true">🔁</span>
          <h3>Gezielt wiederholen</h3>
          <p>
            Falsch beantwortete Fragen können nach dem Ergebnis
            erneut geübt werden.
          </p>
        </article>
      </div>
    </section>
  `;
}

/* =========================================================
   KATEGORIESEITE
========================================================= */

function quizBereichsseiteRendern(bereichId) {
  const inhalt = document.getElementById("quiz-inhalt");
  const bereich = quizBereichFinden(bereichId);
  const verfuegbareFragen = quizFragenFuerBereich(bereichId);

  if (!inhalt || !bereich) {
    return;
  }

  const maximaleAnzahl = verfuegbareFragen.length;
  const standardAnzahl = Math.min(10, maximaleAnzahl);

  inhalt.innerHTML = `
    <section class="sf-quiz-category">
      <div class="sf-quiz-category-icon" aria-hidden="true">
        ${bereich.icon}
      </div>

      <span class="sf-quiz-kicker">QUIZ-KATEGORIE</span>
      <h1>${quizTextSichern(bereich.titel)}</h1>

      <p class="sf-quiz-lead">
        ${quizTextSichern(bereich.beschreibung)}
      </p>

      <div class="sf-quiz-settings">
        <label for="quiz-anzahl">
          Anzahl Fragen
        </label>

        <select id="quiz-anzahl">
          ${quizAnzahlOptionenErstellen(maximaleAnzahl, standardAnzahl)}
        </select>

        <button
          type="button"
          class="sf-quiz-primary-button"
          id="quiz-start-button"
        >
          Quiz starten
        </button>
      </div>

      <div class="sf-quiz-category-details">
        <div>
          <strong>${maximaleAnzahl}</strong>
          <span>verfügbare Fragen</span>
        </div>

        <div>
          <strong>4</strong>
          <span>Antwortmöglichkeiten</span>
        </div>

        <div>
          <strong>sofort</strong>
          <span>Erklärung und Rückmeldung</span>
        </div>
      </div>
    </section>
  `;

  const startButton = document.getElementById("quiz-start-button");

  startButton?.addEventListener("click", () => {
    const auswahl = document.getElementById("quiz-anzahl");
    const anzahl = Number(auswahl?.value || standardAnzahl);

    quizStarten(bereichId, anzahl);
  });
}

function quizAnzahlOptionenErstellen(maximum, standardAnzahl) {
  const moeglicheAnzahlen = [5, 10, 15, 20, maximum]
    .filter((wert) => wert <= maximum)
    .filter((wert, index, array) => array.indexOf(wert) === index)
    .sort((a, b) => a - b);

  return moeglicheAnzahlen
    .map(
      (anzahl) => `
        <option
          value="${anzahl}"
          ${anzahl === standardAnzahl ? "selected" : ""}
        >
          ${anzahl === maximum ? `Alle ${maximum}` : anzahl}
        </option>
      `
    )
    .join("");
}

/* =========================================================
   QUIZ STARTEN
========================================================= */

function quizStarten(bereichId, anzahl) {
  const pool = quizFragenFuerBereich(bereichId);
  const sichereAnzahl = Math.max(1, Math.min(anzahl, pool.length));

  quizState.bereich = bereichId;
  quizState.fragen = quizMischen(pool)
    .slice(0, sichereAnzahl)
    .map((frage) => ({
      ...frage,
      antworten: quizMischen(frage.antworten),
    }));

  quizState.aktuelleFrageIndex = 0;
  quizState.richtigeAntworten = 0;
  quizState.beantwortet = false;
  quizState.ausgewaehlteAntwort = null;
  quizState.falscheFragen = [];
  quizState.anzahlFragen = sichereAnzahl;

  quizFrageRendern();
}

/* =========================================================
   EINZELNE FRAGE
========================================================= */

function quizFrageRendern() {
  const inhalt = document.getElementById("quiz-inhalt");
  const frage = quizState.fragen[quizState.aktuelleFrageIndex];

  if (!inhalt || !frage) {
    quizErgebnisRendern();
    return;
  }

  const nummer = quizState.aktuelleFrageIndex + 1;
  const gesamt = quizState.fragen.length;
  const fortschritt = Math.round((nummer / gesamt) * 100);

  inhalt.innerHTML = `
    <section class="sf-quiz-question-page">
      <header class="sf-quiz-progress-header">
        <div>
          <span>
            Frage ${nummer} von ${gesamt}
          </span>

          <strong>
            ${quizState.richtigeAntworten} richtig
          </strong>
        </div>

        <div
          class="sf-quiz-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="${fortschritt}"
        >
          <span style="width: ${fortschritt}%"></span>
        </div>
      </header>

      <article class="sf-quiz-question-card">
        <span class="sf-quiz-question-category">
          ${frage.kategorie === "wolken" ? "☁️ Wolken" : "🌳 Bäume & Sträucher"}
        </span>

        <h2>${quizTextSichern(frage.frage)}</h2>

        <div
          class="sf-quiz-answers"
          id="quiz-antworten"
        >
          ${frage.antworten
            .map(
              (antwort, index) => `
                <button
                  type="button"
                  class="sf-quiz-answer"
                  data-quiz-antwort="${quizTextSichern(antwort)}"
                >
                  <span class="sf-quiz-answer-letter">
                    ${String.fromCharCode(65 + index)}
                  </span>

                  <span>
                    ${quizTextSichern(antwort)}
                  </span>
                </button>
              `
            )
            .join("")}
        </div>

        <div
          id="quiz-rueckmeldung"
          class="sf-quiz-feedback"
          hidden
        ></div>
      </article>
    </section>
  `;

  document
    .querySelectorAll("[data-quiz-antwort]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        quizAntwortPruefen(button.dataset.quizAntwort);
      });
    });
}

/* =========================================================
   ANTWORT PRÜFEN
========================================================= */

function quizAntwortPruefen(antwort) {
  if (quizState.beantwortet) {
    return;
  }

  const frage = quizState.fragen[quizState.aktuelleFrageIndex];
  const istRichtig = antwort === frage.richtig;

  quizState.beantwortet = true;
  quizState.ausgewaehlteAntwort = antwort;

  if (istRichtig) {
    quizState.richtigeAntworten += 1;
  } else {
    quizState.falscheFragen.push(frage);
  }

  document
    .querySelectorAll("[data-quiz-antwort]")
    .forEach((button) => {
      const buttonAntwort = button.dataset.quizAntwort;

      button.disabled = true;

      if (buttonAntwort === frage.richtig) {
        button.classList.add("ist-richtig");
      }

      if (buttonAntwort === antwort && !istRichtig) {
        button.classList.add("ist-falsch");
      }
    });

  quizRueckmeldungRendern(istRichtig, frage);
}

function quizRueckmeldungRendern(istRichtig, frage) {
  const rueckmeldung = document.getElementById("quiz-rueckmeldung");

  if (!rueckmeldung) {
    return;
  }

  const istLetzteFrage =
    quizState.aktuelleFrageIndex === quizState.fragen.length - 1;

  rueckmeldung.hidden = false;
  rueckmeldung.classList.toggle("ist-richtig", istRichtig);
  rueckmeldung.classList.toggle("ist-falsch", !istRichtig);

  rueckmeldung.innerHTML = `
    <div class="sf-quiz-feedback-heading">
      <span aria-hidden="true">
        ${istRichtig ? "✓" : "✕"}
      </span>

      <strong>
        ${istRichtig ? "Richtig!" : "Leider falsch"}
      </strong>
    </div>

    ${
      istRichtig
        ? ""
        : `
          <p>
            Richtige Antwort:
            <strong>${quizTextSichern(frage.richtig)}</strong>
          </p>
        `
    }

    <p>
      ${quizTextSichern(frage.erklaerung)}
    </p>

    <button
      type="button"
      class="sf-quiz-primary-button"
      id="quiz-weiter-button"
    >
      ${istLetzteFrage ? "Ergebnis anzeigen" : "Nächste Frage"}
    </button>
  `;

  document
    .getElementById("quiz-weiter-button")
    ?.addEventListener("click", quizNaechsteFrage);
}

/* =========================================================
   NÄCHSTE FRAGE
========================================================= */

function quizNaechsteFrage() {
  const istLetzteFrage =
    quizState.aktuelleFrageIndex >= quizState.fragen.length - 1;

  if (istLetzteFrage) {
    quizErgebnisRendern();
    return;
  }

  quizState.aktuelleFrageIndex += 1;
  quizState.beantwortet = false;
  quizState.ausgewaehlteAntwort = null;

  quizFrageRendern();
}

/* =========================================================
   ERGEBNIS
========================================================= */

function quizErgebnisRendern() {
  const inhalt = document.getElementById("quiz-inhalt");

  if (!inhalt) {
    return;
  }

  const prozent = quizProzentwert();
  const bewertung = quizBewertungErmitteln(prozent);
  const anzahlFalsch = quizState.fragen.length - quizState.richtigeAntworten;

  inhalt.innerHTML = `
    <section class="sf-quiz-result">
      <div class="sf-quiz-result-icon" aria-hidden="true">
        ${bewertung.icon}
      </div>

      <span class="sf-quiz-kicker">ERGEBNIS</span>
      <h1>${quizTextSichern(bewertung.titel)}</h1>

      <div class="sf-quiz-score-circle">
        <strong>${prozent}%</strong>
        <span>richtig</span>
      </div>

      <p class="sf-quiz-result-summary">
        Du hast
        <strong>${quizState.richtigeAntworten}</strong>
        von
        <strong>${quizState.fragen.length}</strong>
        Fragen richtig beantwortet.
      </p>

      <div class="sf-quiz-result-stats">
        <div>
          <strong>${quizState.richtigeAntworten}</strong>
          <span>richtig</span>
        </div>

        <div>
          <strong>${anzahlFalsch}</strong>
          <span>falsch</span>
        </div>

        <div>
          <strong>${prozent}%</strong>
          <span>Ergebnis</span>
        </div>
      </div>

      <div class="sf-quiz-result-actions">
        <button
          type="button"
          class="sf-quiz-primary-button"
          id="quiz-nochmals-button"
        >
          Neues Quiz starten
        </button>

        ${
          quizState.falscheFragen.length > 0
            ? `
              <button
                type="button"
                class="sf-quiz-secondary-button"
                id="quiz-fehler-wiederholen-button"
              >
                ${quizState.falscheFragen.length}
                falsche Fragen wiederholen
              </button>
            `
            : ""
        }
      </div>
    </section>
  `;

  document
    .getElementById("quiz-nochmals-button")
    ?.addEventListener("click", () => {
      quizBereichsseiteRendern(quizState.bereich || "gemischt");
    });

  document
    .getElementById("quiz-fehler-wiederholen-button")
    ?.addEventListener("click", quizFehlerWiederholen);
}

function quizBewertungErmitteln(prozent) {
  if (prozent === 100) {
    return {
      icon: "🏆",
      titel: "Perfekt!",
    };
  }

  if (prozent >= 80) {
    return {
      icon: "🌟",
      titel: "Sehr stark!",
    };
  }

  if (prozent >= 60) {
    return {
      icon: "👍",
      titel: "Gut gemacht!",
    };
  }

  if (prozent >= 40) {
    return {
      icon: "📚",
      titel: "Schon eine gute Grundlage",
    };
  }

  return {
    icon: "🔁",
    titel: "Weiter üben",
  };
}

/* =========================================================
   FALSCHE FRAGEN WIEDERHOLEN
========================================================= */

function quizFehlerWiederholen() {
  if (quizState.falscheFragen.length === 0) {
    return;
  }

  quizState.fragen = quizMischen(quizState.falscheFragen).map(
    (frage) => ({
      ...frage,
      antworten: quizMischen(frage.antworten),
    })
  );

  quizState.aktuelleFrageIndex = 0;
  quizState.richtigeAntworten = 0;
  quizState.beantwortet = false;
  quizState.ausgewaehlteAntwort = null;
  quizState.falscheFragen = [];

  quizFrageRendern();
}

/* =========================================================
   AUTOMATISCH STARTEN
========================================================= */

document.addEventListener("DOMContentLoaded", quizInitialisieren);