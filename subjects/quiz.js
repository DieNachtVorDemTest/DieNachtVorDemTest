/* =========================================================
   SchoolFools – Quiz
   Datei: quiz.js

   Funktionen:
   - Lernmodus und Prüfungsmodus
   - Multiple Choice
   - Wahr oder falsch
   - Texteingabe
   - verschiedene Schwierigkeitsstufen
   - Hinweise
   - Punkte, Serien und Bonuspunkte
   - Fehlerwiederholung
   - Lernkarten
   - Tagesquiz
   - individuelle Quiz-Zusammenstellung
   - Statistiken
   - Auszeichnungen
   - Speicherung mit localStorage
   - Tastatursteuerung
   - responsives Design

   Rechtliches:
   - Keine kopierten Quizfragen
   - Keine kopierten Lehrmitteltexte
   - Keine fremden Bilder
   - Keine echten Prüfungsaufgaben
   - Alle Formulierungen eigenständig erstellt
========================================================= */


/* =========================================================
   GRUNDEINSTELLUNGEN
========================================================= */

const QUIZ_VERSION = "2.0.0";

const QUIZ_STORAGE_KEYS = {
  statistik: "schoolfools_quiz_statistik_v2",
  einstellungen: "schoolfools_quiz_einstellungen_v2",
  schwierigeFragen: "schoolfools_quiz_schwierige_fragen_v2",
  favoriten: "schoolfools_quiz_favoriten_v2",
  tagesquiz: "schoolfools_quiz_tagesquiz_v2",
  erfolge: "schoolfools_quiz_erfolge_v2"
};

const QUIZ_STANDARD_EINSTELLUNGEN = {
  modus: "lernen",
  anzahlFragen: 10,
  schwierigkeiten: ["einfach", "mittel", "schwer"],
  fragetypen: ["multiple-choice", "wahr-falsch", "texteingabe"],
  kategorien: ["wolken", "baeume-straeucher"],
  sofortigeAuswertung: true,
  hinweiseErlaubt: true,
  antwortenMischen: true,
  fragenMischen: true,
  zeitlimitAktiv: false,
  zeitProFrage: 30,
  tonAktiv: false
};


/* =========================================================
   HAUPTBEREICHE DER SEITE
========================================================= */

const QUIZ_BEREICHE = [
  {
    id: "start",
    titel: "Quiz starten",
    untertitel: "Individuelles Quiz",
    beschreibung:
      "Stelle dein eigenes Quiz zusammen und bestimme Kategorien, Fragetypen, Schwierigkeit und Modus.",
    icon: "▶"
  },
  {
    id: "tagesquiz",
    titel: "Tagesquiz",
    untertitel: "Jeden Tag neue Fragen",
    beschreibung:
      "Beantworte täglich zehn zufällig ausgewählte Fragen und baue eine Lernserie auf.",
    icon: "☀"
  },
  {
    id: "lernkarten",
    titel: "Lernkarten",
    untertitel: "Begriffe wiederholen",
    beschreibung:
      "Lerne die Inhalte mit digitalen Karteikarten und markiere schwierige Begriffe.",
    icon: "▣"
  },
  {
    id: "schwierige-fragen",
    titel: "Schwierige Fragen",
    untertitel: "Gezielt wiederholen",
    beschreibung:
      "Übe automatisch gesammelte Fragen, die du zuvor falsch beantwortet hast.",
    icon: "!"
  },
  {
    id: "favoriten",
    titel: "Favoriten",
    untertitel: "Gespeicherte Fragen",
    beschreibung:
      "Wiederhole Fragen, die du persönlich als wichtig markiert hast.",
    icon: "★"
  },
  {
    id: "statistik",
    titel: "Statistik",
    untertitel: "Fortschritt ansehen",
    beschreibung:
      "Sieh deine Resultate, Erfolgsquote, stärksten Kategorien und häufigsten Fehler.",
    icon: "▥"
  },
  {
    id: "erfolge",
    titel: "Erfolge",
    untertitel: "Auszeichnungen",
    beschreibung:
      "Schalte Auszeichnungen durch regelmässiges Lernen und gute Resultate frei.",
    icon: "◆"
  }
];


/* =========================================================
   QUIZ-KATEGORIEN
========================================================= */

const QUIZ_KATEGORIEN = [
  {
    id: "wolken",
    titel: "Wolken",
    kurzTitel: "Wolken",
    beschreibung:
      "Die zehn festgelegten Wolkenarten erkennen, unterscheiden und einordnen.",
    verfuegbar: true,
    icon: "☁"
  },
  {
    id: "baeume-straeucher",
    titel: "Bäume und Sträucher",
    kurzTitel: "Bäume",
    beschreibung:
      "Die ausgewählten Schweizer Baum- und Straucharten kennenlernen.",
    verfuegbar: true,
    icon: "♣"
  },
  {
    id: "gesteine",
    titel: "Gesteine",
    kurzTitel: "Gesteine",
    beschreibung:
      "Schweizer Gesteinsarten erkennen und unterscheiden.",
    verfuegbar: false,
    hinweis:
      "Die Kategorie wird aktiviert, sobald die verbindliche Namensliste eingefügt wurde.",
    icon: "⬟"
  },
  {
    id: "blumen",
    titel: "Blumen",
    kurzTitel: "Blumen",
    beschreibung:
      "Schweizer Blumenarten erkennen und unterscheiden.",
    verfuegbar: false,
    hinweis:
      "Die Kategorie wird aktiviert, sobald die verbindliche Namensliste eingefügt wurde.",
    icon: "✿"
  }
];


/* =========================================================
   ERLAUBTE WOLKENNAMEN

   Es werden ausschliesslich diese zehn Wolken verwendet.
========================================================= */

const QUIZ_WOLKEN_NAMEN = [
  "Cumulus",
  "Cirrostratus",
  "Nimbostratus",
  "Stratocumulus",
  "Altocumulus",
  "Cirrus",
  "Cumulonimbus",
  "Altostratus",
  "Stratus",
  "Cirrocumulus"
];


/* =========================================================
   ERLAUBTE BAUM- UND STRAUCHNAMEN

   Es werden ausschliesslich diese Namen verwendet.
========================================================= */

const QUIZ_BAUM_NAMEN = [
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
  "Elsbeerbaum"
];


/* =========================================================
   SCHWIERIGKEITSSTUFEN
========================================================= */

const QUIZ_SCHWIERIGKEITEN = {
  einfach: {
    id: "einfach",
    titel: "Einfach",
    beschreibung: "Grundlegende Erkennungs- und Zuordnungsfragen.",
    punkte: 100,
    icon: "●"
  },
  mittel: {
    id: "mittel",
    titel: "Mittel",
    beschreibung: "Genauere Unterscheidungen und Kombinationen.",
    punkte: 150,
    icon: "●●"
  },
  schwer: {
    id: "schwer",
    titel: "Schwer",
    beschreibung: "Anspruchsvolle Vergleiche und freie Eingaben.",
    punkte: 200,
    icon: "●●●"
  }
};


/* =========================================================
   FRAGETYPEN
========================================================= */

const QUIZ_FRAGETYPEN = {
  "multiple-choice": {
    id: "multiple-choice",
    titel: "Multiple Choice",
    beschreibung: "Wähle eine richtige Antwort aus.",
    icon: "A"
  },
  "mehrfachauswahl": {
    id: "mehrfachauswahl",
    titel: "Mehrfachauswahl",
    beschreibung: "Mehrere Antworten können richtig sein.",
    icon: "☑"
  },
  "wahr-falsch": {
    id: "wahr-falsch",
    titel: "Wahr oder falsch",
    beschreibung: "Entscheide, ob die Aussage stimmt.",
    icon: "✓"
  },
  "texteingabe": {
    id: "texteingabe",
    titel: "Texteingabe",
    beschreibung: "Gib den gesuchten Begriff selbst ein.",
    icon: "⌨"
  },
  "reihenfolge": {
    id: "reihenfolge",
    titel: "Reihenfolge",
    beschreibung: "Bringe Begriffe in die richtige Reihenfolge.",
    icon: "↕"
  },
  "zuordnung": {
    id: "zuordnung",
    titel: "Zuordnung",
    beschreibung: "Ordne Begriffe oder Gruppen einander zu.",
    icon: "⇄"
  }
};


/* =========================================================
   ERFOLGE
========================================================= */

const QUIZ_ERFOLGS_DEFINITIONEN = [
  {
    id: "erste-frage",
    titel: "Der Anfang",
    beschreibung: "Beantworte deine erste Quizfrage.",
    icon: "◆",
    geheim: false
  },
  {
    id: "erstes-quiz",
    titel: "Erstes Quiz",
    beschreibung: "Schliesse dein erstes vollständiges Quiz ab.",
    icon: "▶",
    geheim: false
  },
  {
    id: "perfektes-quiz",
    titel: "Fehlerfrei",
    beschreibung: "Erreiche in einem Quiz 100 Prozent.",
    icon: "★",
    geheim: false
  },
  {
    id: "zehn-serie",
    titel: "Zehnerserie",
    beschreibung: "Beantworte zehn Fragen hintereinander richtig.",
    icon: "10",
    geheim: false
  },
  {
    id: "fuenfzig-fragen",
    titel: "Fleissig",
    beschreibung: "Beantworte insgesamt 50 Fragen.",
    icon: "50",
    geheim: false
  },
  {
    id: "hundert-fragen",
    titel: "Ausdauer",
    beschreibung: "Beantworte insgesamt 100 Fragen.",
    icon: "100",
    geheim: false
  },
  {
    id: "wolkenkenner",
    titel: "Wolkenkenner",
    beschreibung: "Erreiche mindestens 80 Prozent bei den Wolken.",
    icon: "☁",
    geheim: false
  },
  {
    id: "baumkenner",
    titel: "Baumkenner",
    beschreibung:
      "Erreiche mindestens 80 Prozent bei Bäumen und Sträuchern.",
    icon: "♣",
    geheim: false
  },
  {
    id: "schwierige-gemeistert",
    titel: "Nicht aufgegeben",
    beschreibung:
      "Beantworte fünf zuvor falsche Fragen später richtig.",
    icon: "!",
    geheim: false
  },
  {
    id: "tagesquiz",
    titel: "Tagesziel",
    beschreibung: "Schliesse ein Tagesquiz ab.",
    icon: "☀",
    geheim: false
  },
  {
    id: "sieben-tage",
    titel: "Eine Woche",
    beschreibung: "Lerne an sieben aufeinanderfolgenden Tagen.",
    icon: "7",
    geheim: false
  },
  {
    id: "schnelle-antwort",
    titel: "Blitzschnell",
    beschreibung:
      "Beantworte eine Frage in weniger als drei Sekunden richtig.",
    icon: "⚡",
    geheim: true
  }
];


/* =========================================================
   GLOBALER QUIZ-ZUSTAND
========================================================= */

const quizState = {
  aktuellerBereich: "start",

  modus: "lernen",

  ausgewaehlteKategorien: [
    "wolken",
    "baeume-straeucher"
  ],

  ausgewaehlteSchwierigkeiten: [
    "einfach",
    "mittel",
    "schwer"
  ],

  ausgewaehlteFragetypen: [
    "multiple-choice",
    "wahr-falsch",
    "texteingabe"
  ],

  anzahlFragen: 10,

  fragen: [],

  aktuelleFrageIndex: 0,

  richtigeAntworten: 0,

  falscheAntworten: 0,

  beantworteteFragen: [],

  falschBeantworteteFragen: [],

  aktuelleSerie: 0,

  besteSerie: 0,

  punkte: 0,

  bonusPunkte: 0,

  hinweiseVerwendet: 0,

  quizGestartet: false,

  frageBeantwortet: false,

  frageStartzeit: null,

  quizStartzeit: null,

  quizEndzeit: null,

  zeitProFrage: 30,

  verbleibendeZeit: 30,

  zeitlimitAktiv: false,

  timerId: null,

  tagesquizAktiv: false,

  wiederholungsmodus: false,

  lernkartenIndex: 0,

  lernkarten: [],

  aktuelleLernkarteGedreht: false
};

/* =========================================================
   HILFSFUNKTIONEN
========================================================= */

function quizEscapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function quizNormalisiereText(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,;:!?()[\]{}"'`´]/g, "")
    .replace(/\s+/g, " ");
}


function quizMischeArray(array) {
  const kopie = [...array];

  for (let i = kopie.length - 1; i > 0; i--) {
    const zufallsIndex = Math.floor(Math.random() * (i + 1));

    [kopie[i], kopie[zufallsIndex]] = [
      kopie[zufallsIndex],
      kopie[i]
    ];
  }

  return kopie;
}


function quizZufaelligeElemente(array, anzahl) {
  return quizMischeArray(array).slice(
    0,
    Math.min(anzahl, array.length)
  );
}


function quizEindeutigeWerte(array) {
  return [...new Set(array)];
}


function quizBegrenzeZahl(wert, minimum, maximum) {
  return Math.min(
    maximum,
    Math.max(minimum, Number(wert))
  );
}


function quizFormatiereDatum(datum = new Date()) {
  const jahr = datum.getFullYear();
  const monat = String(datum.getMonth() + 1).padStart(2, "0");
  const tag = String(datum.getDate()).padStart(2, "0");

  return `${jahr}-${monat}-${tag}`;
}


function quizFormatiereZeit(sekunden) {
  const sichereSekunden = Math.max(0, Math.floor(sekunden));
  const minuten = Math.floor(sichereSekunden / 60);
  const restSekunden = sichereSekunden % 60;

  return `${String(minuten).padStart(2, "0")}:${String(
    restSekunden
  ).padStart(2, "0")}`;
}


function quizBerechneProzent(richtig, gesamt) {
  if (!gesamt) {
    return 0;
  }

  return Math.round((richtig / gesamt) * 100);
}


function quizErzeugeId(prefix = "frage") {
  const zeit = Date.now().toString(36);
  const zufall = Math.random().toString(36).slice(2, 9);

  return `${prefix}-${zeit}-${zufall}`;
}


function quizKopiereObjekt(objekt) {
  return JSON.parse(JSON.stringify(objekt));
}


function quizIstArrayMitInhalt(wert) {
  return Array.isArray(wert) && wert.length > 0;
}


function quizHoleKategorie(kategorieId) {
  return QUIZ_KATEGORIEN.find(
    kategorie => kategorie.id === kategorieId
  ) || null;
}


function quizHoleSchwierigkeit(schwierigkeitId) {
  return QUIZ_SCHWIERIGKEITEN[schwierigkeitId] || null;
}


function quizHoleFragetyp(fragetypId) {
  return QUIZ_FRAGETYPEN[fragetypId] || null;
}


function quizScrollNachOben(element = null) {
  if (element && typeof element.scrollIntoView === "function") {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    return;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


function quizIstHeute(datumswert) {
  return datumswert === quizFormatiereDatum(new Date());
}


function quizTageDifferenz(vonDatum, bisDatum) {
  const von = new Date(`${vonDatum}T00:00:00`);
  const bis = new Date(`${bisDatum}T00:00:00`);
  const differenz = bis.getTime() - von.getTime();

  return Math.round(differenz / 86400000);
}


/* =========================================================
   LOCALSTORAGE – SICHERES LESEN UND SCHREIBEN
========================================================= */

function quizStorageLesen(key, fallback) {
  try {
    const gespeicherterWert = localStorage.getItem(key);

    if (gespeicherterWert === null) {
      return quizKopiereObjekt(fallback);
    }

    return JSON.parse(gespeicherterWert);
  } catch (fehler) {
    console.warn(
      `Quiz: LocalStorage konnte für "${key}" nicht gelesen werden.`,
      fehler
    );

    return quizKopiereObjekt(fallback);
  }
}


function quizStorageSchreiben(key, wert) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(wert)
    );

    return true;
  } catch (fehler) {
    console.warn(
      `Quiz: LocalStorage konnte für "${key}" nicht gespeichert werden.`,
      fehler
    );

    return false;
  }
}


function quizStorageEntfernen(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (fehler) {
    console.warn(
      `Quiz: LocalStorage konnte für "${key}" nicht gelöscht werden.`,
      fehler
    );

    return false;
  }
}


/* =========================================================
   STANDARDWERTE FÜR STATISTIKEN
========================================================= */

const QUIZ_STANDARD_STATISTIK = {
  version: QUIZ_VERSION,

  insgesamtGespielteQuiz: 0,

  insgesamtBeantworteteFragen: 0,

  insgesamtRichtigeAntworten: 0,

  insgesamtFalscheAntworten: 0,

  insgesamtPunkte: 0,

  hoechstePunktzahl: 0,

  besteSerie: 0,

  perfekteQuiz: 0,

  verwendeteHinweise: 0,

  schnellsteRichtigeAntwortMs: null,

  durchschnittlicheAntwortzeitMs: 0,

  gesamteAntwortzeitMs: 0,

  letzteAktivitaet: null,

  aktuelleTagesserie: 0,

  besteTagesserie: 0,

  abgeschlosseneTagesquiz: 0,

  kategorien: {
    wolken: {
      beantwortet: 0,
      richtig: 0,
      falsch: 0,
      besteProzentzahl: 0,
      gespielteQuiz: 0
    },

    "baeume-straeucher": {
      beantwortet: 0,
      richtig: 0,
      falsch: 0,
      besteProzentzahl: 0,
      gespielteQuiz: 0
    },

    gesteine: {
      beantwortet: 0,
      richtig: 0,
      falsch: 0,
      besteProzentzahl: 0,
      gespielteQuiz: 0
    },

    blumen: {
      beantwortet: 0,
      richtig: 0,
      falsch: 0,
      besteProzentzahl: 0,
      gespielteQuiz: 0
    }
  },

  schwierigkeiten: {
    einfach: {
      beantwortet: 0,
      richtig: 0
    },

    mittel: {
      beantwortet: 0,
      richtig: 0
    },

    schwer: {
      beantwortet: 0,
      richtig: 0
    }
  },

  fragetypen: {
    "multiple-choice": {
      beantwortet: 0,
      richtig: 0
    },

    mehrfachauswahl: {
      beantwortet: 0,
      richtig: 0
    },

    "wahr-falsch": {
      beantwortet: 0,
      richtig: 0
    },

    texteingabe: {
      beantwortet: 0,
      richtig: 0
    },

    reihenfolge: {
      beantwortet: 0,
      richtig: 0
    },

    zuordnung: {
      beantwortet: 0,
      richtig: 0
    }
  },

  letzteErgebnisse: []
};


/* =========================================================
   STANDARDWERTE FÜR TAGESQUIZ
========================================================= */

const QUIZ_STANDARD_TAGESQUIZ = {
  datum: null,
  abgeschlossen: false,
  gestartet: false,
  fragenIds: [],
  richtig: 0,
  gesamt: 0,
  punkte: 0
};


/* =========================================================
   GELADENE BENUTZERDATEN
========================================================= */

let quizStatistik = quizStorageLesen(
  QUIZ_STORAGE_KEYS.statistik,
  QUIZ_STANDARD_STATISTIK
);


let quizEinstellungen = quizStorageLesen(
  QUIZ_STORAGE_KEYS.einstellungen,
  QUIZ_STANDARD_EINSTELLUNGEN
);


let quizSchwierigeFragen = quizStorageLesen(
  QUIZ_STORAGE_KEYS.schwierigeFragen,
  []
);


let quizFavoriten = quizStorageLesen(
  QUIZ_STORAGE_KEYS.favoriten,
  []
);


let quizTagesquiz = quizStorageLesen(
  QUIZ_STORAGE_KEYS.tagesquiz,
  QUIZ_STANDARD_TAGESQUIZ
);


let quizFreigeschalteteErfolge = quizStorageLesen(
  QUIZ_STORAGE_KEYS.erfolge,
  []
);


/* =========================================================
   DATENSTRUKTUREN NACH DEM LADEN REPARIEREN
========================================================= */

function quizVerschmelzeMitStandard(standard, geladen) {
  if (
    standard === null ||
    typeof standard !== "object" ||
    Array.isArray(standard)
  ) {
    return geladen === undefined
      ? standard
      : geladen;
  }

  const ergebnis = {
    ...standard
  };

  if (
    geladen === null ||
    typeof geladen !== "object" ||
    Array.isArray(geladen)
  ) {
    return ergebnis;
  }

  Object.keys(standard).forEach(key => {
    const standardWert = standard[key];
    const geladenerWert = geladen[key];

    if (
      standardWert &&
      typeof standardWert === "object" &&
      !Array.isArray(standardWert)
    ) {
      ergebnis[key] = quizVerschmelzeMitStandard(
        standardWert,
        geladenerWert
      );
    } else if (geladenerWert !== undefined) {
      ergebnis[key] = geladenerWert;
    }
  });

  Object.keys(geladen).forEach(key => {
    if (!(key in ergebnis)) {
      ergebnis[key] = geladen[key];
    }
  });

  return ergebnis;
}


function quizRepariereGespeicherteDaten() {
  quizStatistik = quizVerschmelzeMitStandard(
    QUIZ_STANDARD_STATISTIK,
    quizStatistik
  );

  quizEinstellungen = quizVerschmelzeMitStandard(
    QUIZ_STANDARD_EINSTELLUNGEN,
    quizEinstellungen
  );

  quizTagesquiz = quizVerschmelzeMitStandard(
    QUIZ_STANDARD_TAGESQUIZ,
    quizTagesquiz
  );

  if (!Array.isArray(quizSchwierigeFragen)) {
    quizSchwierigeFragen = [];
  }

  if (!Array.isArray(quizFavoriten)) {
    quizFavoriten = [];
  }

  if (!Array.isArray(quizFreigeschalteteErfolge)) {
    quizFreigeschalteteErfolge = [];
  }

  quizSchwierigeFragen = quizEindeutigeWerte(
    quizSchwierigeFragen
  );

  quizFavoriten = quizEindeutigeWerte(
    quizFavoriten
  );

  quizFreigeschalteteErfolge = quizEindeutigeWerte(
    quizFreigeschalteteErfolge
  );

  quizSpeichereAlleBenutzerdaten();
}


function quizSpeichereAlleBenutzerdaten() {
  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.statistik,
    quizStatistik
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.einstellungen,
    quizEinstellungen
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.schwierigeFragen,
    quizSchwierigeFragen
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.favoriten,
    quizFavoriten
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.tagesquiz,
    quizTagesquiz
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.erfolge,
    quizFreigeschalteteErfolge
  );
}


quizRepariereGespeicherteDaten();


/* =========================================================
   FRAGEN-BAUSTEIN

   Jede Frage verwendet möglichst dieselbe Grundstruktur.
========================================================= */

function quizErstelleFrage({
  id,
  kategorie,
  unterkategorie = "allgemein",
  schwierigkeit = "einfach",
  typ = "multiple-choice",
  frage,
  antworten = [],
  richtigeAntwort = null,
  richtigeAntworten = [],
  akzeptierteAntworten = [],
  erklaerung = "",
  hinweise = [],
  reihenfolge = [],
  zuordnungen = [],
  schlagwoerter = []
}) {
  return {
    id: id || quizErzeugeId(kategorie),
    kategorie,
    unterkategorie,
    schwierigkeit,
    typ,
    frage,
    antworten,
    richtigeAntwort,
    richtigeAntworten,
    akzeptierteAntworten,
    erklaerung,
    hinweise,
    reihenfolge,
    zuordnungen,
    schlagwoerter
  };
}


/* =========================================================
   WOLKENFRAGEN – EINFACH
========================================================= */

const QUIZ_FRAGEN_WOLKEN_EINFACH = [
  quizErstelleFrage({
    id: "wolken-e-001",
    kategorie: "wolken",
    unterkategorie: "grundformen",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke ist eine typische Haufenwolke?",
    antworten: [
      "Cumulus",
      "Stratus",
      "Cirrus",
      "Altostratus"
    ],
    richtigeAntwort: "Cumulus",
    erklaerung:
      "Cumulus ist die typische Haufenwolke mit deutlich abgegrenzten Wolkenteilen.",
    hinweise: [
      "Der Name beginnt mit C.",
      "Sie wirkt oft wie ein weisser Wattebausch."
    ],
    schlagwoerter: [
      "Haufenwolke",
      "Grundform"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-002",
    kategorie: "wolken",
    unterkategorie: "gewitter",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke ist besonders typisch für Gewitter?",
    antworten: [
      "Cumulonimbus",
      "Stratus",
      "Cirrostratus",
      "Altocumulus"
    ],
    richtigeAntwort: "Cumulonimbus",
    erklaerung:
      "Cumulonimbus ist eine mächtige Wolke mit grosser vertikaler Ausdehnung und kann Gewitter bringen.",
    hinweise: [
      "Der Name enthält den Bestandteil Cumulus.",
      "Sie kann sich bis in grosse Höhen auftürmen."
    ],
    schlagwoerter: [
      "Gewitter",
      "vertikale Ausdehnung"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-003",
    kategorie: "wolken",
    unterkategorie: "hohe-wolken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke wirkt häufig dünn, faserig oder federartig?",
    antworten: [
      "Cirrus",
      "Nimbostratus",
      "Stratus",
      "Cumulus"
    ],
    richtigeAntwort: "Cirrus",
    erklaerung:
      "Cirruswolken liegen hoch und erscheinen häufig als dünne, faserige Streifen.",
    hinweise: [
      "Es handelt sich um eine hohe Wolke.",
      "Der Name besteht aus sechs Buchstaben."
    ],
    schlagwoerter: [
      "faserig",
      "hohe Wolke"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-004",
    kategorie: "wolken",
    unterkategorie: "tiefe-wolken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke bildet häufig eine tiefe und gleichmässige Wolkenschicht?",
    antworten: [
      "Stratus",
      "Cirrocumulus",
      "Cirrus",
      "Cumulonimbus"
    ],
    richtigeAntwort: "Stratus",
    erklaerung:
      "Stratus ist eine tiefe Schichtwolke und kann wie angehobener Nebel wirken.",
    hinweise: [
      "Sie gehört zu den tiefen Wolken.",
      "Der Name beginnt mit S."
    ],
    schlagwoerter: [
      "Schichtwolke",
      "tief"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-005",
    kategorie: "wolken",
    unterkategorie: "niederschlag",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke ist häufig mit länger anhaltendem Niederschlag verbunden?",
    antworten: [
      "Nimbostratus",
      "Cirrus",
      "Cumulus",
      "Cirrocumulus"
    ],
    richtigeAntwort: "Nimbostratus",
    erklaerung:
      "Nimbostratus bildet häufig eine ausgedehnte Wolkendecke mit länger anhaltendem Regen oder Schnee.",
    hinweise: [
      "Der Wortbestandteil Nimbus weist auf Niederschlag hin.",
      "Es handelt sich um eine Schichtwolke."
    ],
    schlagwoerter: [
      "Niederschlag",
      "Schichtwolke"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-006",
    kategorie: "wolken",
    unterkategorie: "mittlere-wolken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke gehört zu den mittelhohen Haufenwolken?",
    antworten: [
      "Altocumulus",
      "Cirrus",
      "Stratus",
      "Cirrostratus"
    ],
    richtigeAntwort: "Altocumulus",
    erklaerung:
      "Altocumulus besteht aus mittelhohen Feldern oder Bänken mit rundlichen Wolkenteilen.",
    hinweise: [
      "Der Wortteil Alto weist auf eine mittlere Höhe hin.",
      "Der Wortteil Cumulus weist auf eine Haufenform hin."
    ],
    schlagwoerter: [
      "mittelhoch",
      "Haufenform"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-007",
    kategorie: "wolken",
    unterkategorie: "mittlere-wolken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke bildet eine mittelhohe, häufig graue Schicht?",
    antworten: [
      "Altostratus",
      "Cumulus",
      "Cirrocumulus",
      "Stratocumulus"
    ],
    richtigeAntwort: "Altostratus",
    erklaerung:
      "Altostratus ist eine mittelhohe Schichtwolke, die grosse Teile des Himmels bedecken kann.",
    hinweise: [
      "Der Wortteil Alto weist auf eine mittlere Höhe hin.",
      "Der Wortteil Stratus weist auf eine Schicht hin."
    ],
    schlagwoerter: [
      "mittelhoch",
      "Schicht"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-008",
    kategorie: "wolken",
    unterkategorie: "hohe-wolken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche hohe Wolke kann einen Halo um Sonne oder Mond verursachen?",
    antworten: [
      "Cirrostratus",
      "Stratocumulus",
      "Cumulus",
      "Nimbostratus"
    ],
    richtigeAntwort: "Cirrostratus",
    erklaerung:
      "Cirrostratus besteht aus einer dünnen hohen Wolkenschicht. Eiskristalle können dabei Haloerscheinungen erzeugen.",
    hinweise: [
      "Es handelt sich um eine hohe Schichtwolke.",
      "Der Name endet auf Stratus."
    ],
    schlagwoerter: [
      "Halo",
      "hohe Wolke"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-009",
    kategorie: "wolken",
    unterkategorie: "tiefe-wolken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Wolke besteht aus tiefen, grösseren Wolkenballen, die oft eine Schicht bilden?",
    antworten: [
      "Stratocumulus",
      "Cirrocumulus",
      "Altostratus",
      "Cirrus"
    ],
    richtigeAntwort: "Stratocumulus",
    erklaerung:
      "Stratocumulus verbindet schichtartige Ausdehnung mit deutlich sichtbaren Wolkenballen.",
    hinweise: [
      "Der Name enthält Stratus und Cumulus.",
      "Sie gehört meist zu den tiefen Wolken."
    ],
    schlagwoerter: [
      "tiefe Wolke",
      "Wolkenballen"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-010",
    kategorie: "wolken",
    unterkategorie: "hohe-wolken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche hohe Wolke besteht häufig aus sehr kleinen, regelmässig angeordneten Wolkenteilen?",
    antworten: [
      "Cirrocumulus",
      "Stratocumulus",
      "Nimbostratus",
      "Altostratus"
    ],
    richtigeAntwort: "Cirrocumulus",
    erklaerung:
      "Cirrocumulus liegt hoch und besteht aus kleinen, körnig oder wellenförmig angeordneten Wolkenteilen.",
    hinweise: [
      "Sie ist eine hohe Haufenwolke.",
      "Der Name beginnt mit Cirro."
    ],
    schlagwoerter: [
      "hohe Wolke",
      "kleine Wolkenteile"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-011",
    kategorie: "wolken",
    unterkategorie: "grundformen",
    schwierigkeit: "einfach",
    typ: "wahr-falsch",
    frage:
      "Cumulus ist eine Haufenwolke.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Wahr",
    erklaerung:
      "Die Aussage stimmt. Cumulus ist die klassische Haufenwolke.",
    hinweise: [
      "Cumulus bedeutet sinngemäss eine Anhäufung."
    ],
    schlagwoerter: [
      "Cumulus",
      "Haufenwolke"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-012",
    kategorie: "wolken",
    unterkategorie: "gewitter",
    schwierigkeit: "einfach",
    typ: "wahr-falsch",
    frage:
      "Cumulonimbus kann mit Blitz und Donner verbunden sein.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Wahr",
    erklaerung:
      "Cumulonimbus ist die typische Gewitterwolke.",
    hinweise: [
      "Denke an eine mächtige, hoch aufragende Wolke."
    ],
    schlagwoerter: [
      "Gewitter",
      "Blitz",
      "Donner"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-013",
    kategorie: "wolken",
    unterkategorie: "tiefe-wolken",
    schwierigkeit: "einfach",
    typ: "wahr-falsch",
    frage:
      "Stratus gehört normalerweise zu den hohen Wolken.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Falsch",
    erklaerung:
      "Stratus ist eine tiefe Schichtwolke.",
    hinweise: [
      "Stratus kann wie angehobener Nebel wirken."
    ],
    schlagwoerter: [
      "Stratus",
      "tiefe Wolke"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-014",
    kategorie: "wolken",
    unterkategorie: "hohe-wolken",
    schwierigkeit: "einfach",
    typ: "texteingabe",
    frage:
      "Wie heisst die hohe, häufig faserig aussehende Wolke?",
    akzeptierteAntworten: [
      "Cirrus"
    ],
    richtigeAntwort: "Cirrus",
    erklaerung:
      "Cirrus ist die faserige hohe Wolke.",
    hinweise: [
      "Der Begriff beginnt mit Cir.",
      "Der Name hat sechs Buchstaben."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Cirrus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-e-015",
    kategorie: "wolken",
    unterkategorie: "niederschlag",
    schwierigkeit: "einfach",
    typ: "texteingabe",
    frage:
      "Wie heisst die ausgedehnte Niederschlagswolke, die häufig länger anhaltenden Regen bringt?",
    akzeptierteAntworten: [
      "Nimbostratus"
    ],
    richtigeAntwort: "Nimbostratus",
    erklaerung:
      "Nimbostratus ist eine ausgedehnte Niederschlags-Schichtwolke.",
    hinweise: [
      "Der Name beginnt mit Nimbus.",
      "Der Name endet auf Stratus."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Niederschlag"
    ]
  })
];

/* =========================================================
   WOLKENFRAGEN – MITTEL
========================================================= */

const QUIZ_FRAGEN_WOLKEN_MITTEL = [
  quizErstelleFrage({
    id: "wolken-m-001",
    kategorie: "wolken",
    unterkategorie: "hoehenstufen",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Reihenfolge ordnet die Wolken von hoch über mittel bis tief korrekt?",
    antworten: [
      "Cirrocumulus – Altocumulus – Stratocumulus",
      "Stratocumulus – Altocumulus – Cirrocumulus",
      "Altocumulus – Cirrocumulus – Stratocumulus",
      "Cumulus – Cirrus – Stratus"
    ],
    richtigeAntwort:
      "Cirrocumulus – Altocumulus – Stratocumulus",
    erklaerung:
      "Cirrocumulus gehört zu den hohen Wolken, Altocumulus zu den mittelhohen und Stratocumulus zu den tiefen Wolken.",
    hinweise: [
      "Cirro weist auf grosse Höhe hin.",
      "Alto weist auf mittlere Höhe hin."
    ],
    schlagwoerter: [
      "Hoehenstufen",
      "Reihenfolge"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-002",
    kategorie: "wolken",
    unterkategorie: "namensbestandteile",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Wolke verbindet eine mittlere Höhenlage mit einer Haufenform?",
    antworten: [
      "Altocumulus",
      "Altostratus",
      "Cirrostratus",
      "Stratocumulus"
    ],
    richtigeAntwort: "Altocumulus",
    erklaerung:
      "Alto bezeichnet die mittlere Höhenlage und Cumulus die Haufenform.",
    hinweise: [
      "Achte auf beide Wortbestandteile.",
      "Gesucht ist keine Schichtwolke."
    ],
    schlagwoerter: [
      "Alto",
      "Cumulus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-003",
    kategorie: "wolken",
    unterkategorie: "namensbestandteile",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Wolke verbindet eine grosse Höhe mit einer Schichtform?",
    antworten: [
      "Cirrostratus",
      "Cirrocumulus",
      "Altostratus",
      "Nimbostratus"
    ],
    richtigeAntwort: "Cirrostratus",
    erklaerung:
      "Cirro weist auf eine grosse Höhe hin und Stratus auf eine Schichtform.",
    hinweise: [
      "Gesucht ist keine Haufenwolke.",
      "Der Name beginnt mit Cirro."
    ],
    schlagwoerter: [
      "Cirro",
      "Stratus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-004",
    kategorie: "wolken",
    unterkategorie: "vergleich",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Aussage unterscheidet Cumulus und Cumulonimbus am besten?",
    antworten: [
      "Cumulonimbus besitzt meist eine deutlich grössere vertikale Ausdehnung.",
      "Cumulus liegt immer höher als Cumulonimbus.",
      "Cumulus bringt immer starken Dauerregen.",
      "Cumulonimbus ist eine dünne hohe Federwolke."
    ],
    richtigeAntwort:
      "Cumulonimbus besitzt meist eine deutlich grössere vertikale Ausdehnung.",
    erklaerung:
      "Cumulonimbus kann sich sehr stark in die Höhe entwickeln und Gewitter verursachen.",
    hinweise: [
      "Denke an die Gewitterwolke.",
      "Der wichtigste Unterschied ist die Mächtigkeit."
    ],
    schlagwoerter: [
      "Vergleich",
      "vertikale Ausdehnung"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-005",
    kategorie: "wolken",
    unterkategorie: "vergleich",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Aussage unterscheidet Cirrocumulus und Stratocumulus korrekt?",
    antworten: [
      "Cirrocumulus liegt hoch, Stratocumulus meist tief.",
      "Beide liegen ausschliesslich in gleicher Höhe.",
      "Stratocumulus ist immer eine Gewitterwolke.",
      "Cirrocumulus bringt normalerweise Dauerregen."
    ],
    richtigeAntwort:
      "Cirrocumulus liegt hoch, Stratocumulus meist tief.",
    erklaerung:
      "Der Wortbestandteil Cirro weist auf eine hohe Lage hin, während Stratocumulus gewöhnlich tief liegt.",
    hinweise: [
      "Vergleiche Cirro und Strato.",
      "Gesucht ist ein Unterschied der Höhenlage."
    ],
    schlagwoerter: [
      "Cirrocumulus",
      "Stratocumulus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-006",
    kategorie: "wolken",
    unterkategorie: "niederschlag",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Kombination enthält zwei Wolkenarten, die besonders häufig mit Niederschlag verbunden sind?",
    antworten: [
      "Nimbostratus und Cumulonimbus",
      "Cirrus und Cirrocumulus",
      "Cumulus und Cirrostratus",
      "Altocumulus und Cirrus"
    ],
    richtigeAntwort:
      "Nimbostratus und Cumulonimbus",
    erklaerung:
      "Nimbostratus bringt häufig länger anhaltenden Niederschlag, Cumulonimbus kräftige Schauer und Gewitter.",
    hinweise: [
      "Eine davon enthält Nimbus im Namen.",
      "Die andere ist die Gewitterwolke."
    ],
    schlagwoerter: [
      "Niederschlag",
      "Gewitter"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-007",
    kategorie: "wolken",
    unterkategorie: "hoehenstufen",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Wolken gehören zu den hohen Wolken?",
    antworten: [
      "Cirrus",
      "Cirrostratus",
      "Cirrocumulus",
      "Altocumulus",
      "Stratus"
    ],
    richtigeAntworten: [
      "Cirrus",
      "Cirrostratus",
      "Cirrocumulus"
    ],
    erklaerung:
      "Die Vorsilbe Cirro bezeichnet hohe Wolken. Cirrus gehört ebenfalls zu dieser hohen Wolkengruppe.",
    hinweise: [
      "Drei Antworten sind richtig.",
      "Achte auf den Wortanfang Cirro."
    ],
    schlagwoerter: [
      "Mehrfachauswahl",
      "hohe Wolken"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-008",
    kategorie: "wolken",
    unterkategorie: "hoehenstufen",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Wolken gehören zu den mittelhohen Wolken?",
    antworten: [
      "Altocumulus",
      "Altostratus",
      "Cirrus",
      "Stratus",
      "Cumulonimbus"
    ],
    richtigeAntworten: [
      "Altocumulus",
      "Altostratus"
    ],
    erklaerung:
      "Die Vorsilbe Alto kennzeichnet die beiden mittelhohen Wolkenarten.",
    hinweise: [
      "Zwei Antworten sind richtig.",
      "Beide beginnen mit Alto."
    ],
    schlagwoerter: [
      "Mehrfachauswahl",
      "mittelhohe Wolken"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-009",
    kategorie: "wolken",
    unterkategorie: "grundformen",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Wolkennamen enthalten eine Haufenform?",
    antworten: [
      "Cumulus",
      "Altocumulus",
      "Cirrocumulus",
      "Stratocumulus",
      "Altostratus"
    ],
    richtigeAntworten: [
      "Cumulus",
      "Altocumulus",
      "Cirrocumulus",
      "Stratocumulus"
    ],
    erklaerung:
      "Der Wortbestandteil Cumulus bezeichnet eine Haufen- oder Ballenform.",
    hinweise: [
      "Vier Antworten sind richtig.",
      "Suche nach dem Bestandteil Cumulus."
    ],
    schlagwoerter: [
      "Haufenform",
      "Cumulus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-010",
    kategorie: "wolken",
    unterkategorie: "grundformen",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Wolkennamen enthalten eine Schichtform?",
    antworten: [
      "Stratus",
      "Altostratus",
      "Cirrostratus",
      "Nimbostratus",
      "Cirrus"
    ],
    richtigeAntworten: [
      "Stratus",
      "Altostratus",
      "Cirrostratus",
      "Nimbostratus"
    ],
    erklaerung:
      "Der Wortbestandteil Stratus weist auf eine Schichtform hin.",
    hinweise: [
      "Vier Antworten sind richtig.",
      "Achte auf die Endung Stratus."
    ],
    schlagwoerter: [
      "Schichtform",
      "Stratus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-011",
    kategorie: "wolken",
    unterkategorie: "halo",
    schwierigkeit: "mittel",
    typ: "wahr-falsch",
    frage:
      "Ein Halo um Sonne oder Mond kann ein Hinweis auf Cirrostratus sein.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Wahr",
    erklaerung:
      "Die Eiskristalle in Cirrostratus können Licht brechen und einen Halo erzeugen.",
    hinweise: [
      "Denke an dünne hohe Wolkenschichten."
    ],
    schlagwoerter: [
      "Halo",
      "Cirrostratus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-012",
    kategorie: "wolken",
    unterkategorie: "hoehenstufen",
    schwierigkeit: "mittel",
    typ: "wahr-falsch",
    frage:
      "Altocumulus liegt normalerweise höher als Cirrocumulus.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Falsch",
    erklaerung:
      "Cirrocumulus gehört zu den hohen Wolken, Altocumulus zu den mittelhohen.",
    hinweise: [
      "Cirro liegt über Alto."
    ],
    schlagwoerter: [
      "Hoehenvergleich",
      "Altocumulus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-013",
    kategorie: "wolken",
    unterkategorie: "vergleich",
    schwierigkeit: "mittel",
    typ: "wahr-falsch",
    frage:
      "Nimbostratus und Cumulonimbus bringen typischerweise dieselbe Art von Niederschlag.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Falsch",
    erklaerung:
      "Nimbostratus ist eher mit länger anhaltendem Niederschlag verbunden, Cumulonimbus eher mit kräftigen Schauern und Gewittern.",
    hinweise: [
      "Vergleiche Dauerregen mit Gewitterschauern."
    ],
    schlagwoerter: [
      "Niederschlagsart",
      "Vergleich"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-014",
    kategorie: "wolken",
    unterkategorie: "texteingabe",
    schwierigkeit: "mittel",
    typ: "texteingabe",
    frage:
      "Wie heisst die mittelhohe Haufenwolke?",
    akzeptierteAntworten: [
      "Altocumulus"
    ],
    richtigeAntwort: "Altocumulus",
    erklaerung:
      "Altocumulus ist die mittelhohe Haufenwolke.",
    hinweise: [
      "Der Name beginnt mit Alto.",
      "Der zweite Teil lautet Cumulus."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Altocumulus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-m-015",
    kategorie: "wolken",
    unterkategorie: "texteingabe",
    schwierigkeit: "mittel",
    typ: "texteingabe",
    frage:
      "Wie heisst die hohe Schichtwolke, die Haloerscheinungen verursachen kann?",
    akzeptierteAntworten: [
      "Cirrostratus"
    ],
    richtigeAntwort: "Cirrostratus",
    erklaerung:
      "Cirrostratus ist eine dünne hohe Schichtwolke.",
    hinweise: [
      "Der Name beginnt mit Cirro.",
      "Der Name endet mit Stratus."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Cirrostratus"
    ]
  })
];


/* =========================================================
   WOLKENFRAGEN – SCHWER
========================================================= */

const QUIZ_FRAGEN_WOLKEN_SCHWER = [
  quizErstelleFrage({
    id: "wolken-s-001",
    kategorie: "wolken",
    unterkategorie: "systematik",
    schwierigkeit: "schwer",
    typ: "reihenfolge",
    frage:
      "Ordne diese Wolken von der grössten zur kleinsten typischen Höhe.",
    antworten: [
      "Cirrostratus",
      "Altostratus",
      "Stratus"
    ],
    reihenfolge: [
      "Cirrostratus",
      "Altostratus",
      "Stratus"
    ],
    richtigeAntwort:
      "Cirrostratus → Altostratus → Stratus",
    erklaerung:
      "Cirrostratus liegt hoch, Altostratus mittelhoch und Stratus tief.",
    hinweise: [
      "Cirro steht über Alto.",
      "Stratus ohne Vorsilbe liegt tief."
    ],
    schlagwoerter: [
      "Reihenfolge",
      "Hoehenstufen"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-002",
    kategorie: "wolken",
    unterkategorie: "systematik",
    schwierigkeit: "schwer",
    typ: "reihenfolge",
    frage:
      "Ordne diese Haufenwolken von hoch nach tief.",
    antworten: [
      "Cirrocumulus",
      "Altocumulus",
      "Stratocumulus"
    ],
    reihenfolge: [
      "Cirrocumulus",
      "Altocumulus",
      "Stratocumulus"
    ],
    richtigeAntwort:
      "Cirrocumulus → Altocumulus → Stratocumulus",
    erklaerung:
      "Cirrocumulus liegt hoch, Altocumulus mittelhoch und Stratocumulus tief.",
    hinweise: [
      "Cirro ist am höchsten.",
      "Alto liegt in der Mitte."
    ],
    schlagwoerter: [
      "Reihenfolge",
      "Haufenwolken"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-003",
    kategorie: "wolken",
    unterkategorie: "zuordnung",
    schwierigkeit: "schwer",
    typ: "zuordnung",
    frage:
      "Ordne den Wolkennamen der passenden Beschreibung zu.",
    zuordnungen: [
      {
        links: "Cirrus",
        rechts: "hoch und faserig"
      },
      {
        links: "Nimbostratus",
        rechts: "ausgedehnter Niederschlag"
      },
      {
        links: "Cumulonimbus",
        rechts: "Gewitterwolke"
      },
      {
        links: "Stratus",
        rechts: "tiefe gleichmässige Schicht"
      }
    ],
    richtigeAntwort:
      "Cirrus = hoch und faserig; Nimbostratus = ausgedehnter Niederschlag; Cumulonimbus = Gewitterwolke; Stratus = tiefe gleichmässige Schicht",
    erklaerung:
      "Die vier Wolken unterscheiden sich klar durch Höhe, Form und typische Wetterwirkung.",
    hinweise: [
      "Nimbus weist auf Niederschlag hin.",
      "Cirrus ist die Federwolke."
    ],
    schlagwoerter: [
      "Zuordnung",
      "Merkmale"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-004",
    kategorie: "wolken",
    unterkategorie: "zuordnung",
    schwierigkeit: "schwer",
    typ: "zuordnung",
    frage:
      "Ordne die Vorsilbe oder den Wortbestandteil der passenden Bedeutung zu.",
    zuordnungen: [
      {
        links: "Cirro",
        rechts: "hoch"
      },
      {
        links: "Alto",
        rechts: "mittelhoch"
      },
      {
        links: "Cumulus",
        rechts: "Haufenform"
      },
      {
        links: "Stratus",
        rechts: "Schichtform"
      }
    ],
    richtigeAntwort:
      "Cirro = hoch; Alto = mittelhoch; Cumulus = Haufenform; Stratus = Schichtform",
    erklaerung:
      "Die Bestandteile der Wolkennamen liefern Hinweise auf Höhe und Form.",
    hinweise: [
      "Zwei Begriffe beschreiben die Höhe.",
      "Zwei Begriffe beschreiben die Form."
    ],
    schlagwoerter: [
      "Namenssystem",
      "Zuordnung"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-005",
    kategorie: "wolken",
    unterkategorie: "ausschluss",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Welche Wolke passt am wenigsten in die Gruppe der schichtartig ausgedehnten Wolken?",
    antworten: [
      "Cumulus",
      "Stratus",
      "Altostratus",
      "Cirrostratus"
    ],
    richtigeAntwort: "Cumulus",
    erklaerung:
      "Cumulus ist eine Haufenwolke, während die übrigen drei deutlich schichtartig aufgebaut sind.",
    hinweise: [
      "Drei Namen enthalten Stratus.",
      "Gesucht ist die Haufenwolke."
    ],
    schlagwoerter: [
      "Ausschluss",
      "Schichtwolken"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-006",
    kategorie: "wolken",
    unterkategorie: "ausschluss",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Welche Wolke passt am wenigsten in die Gruppe der hohen Wolken?",
    antworten: [
      "Altocumulus",
      "Cirrus",
      "Cirrostratus",
      "Cirrocumulus"
    ],
    richtigeAntwort: "Altocumulus",
    erklaerung:
      "Altocumulus ist mittelhoch, die drei übrigen Wolken gehören zu den hohen Wolken.",
    hinweise: [
      "Drei Namen gehören zur Cirro-Gruppe.",
      "Gesucht ist eine mittelhohe Wolke."
    ],
    schlagwoerter: [
      "Ausschluss",
      "hohe Wolken"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-007",
    kategorie: "wolken",
    unterkategorie: "mehrfachauswahl",
    schwierigkeit: "schwer",
    typ: "mehrfachauswahl",
    frage:
      "Welche Aussagen über Cumulonimbus sind richtig?",
    antworten: [
      "Die Wolke kann Gewitter bringen.",
      "Sie besitzt eine grosse vertikale Ausdehnung.",
      "Sie kann eine Ambossform entwickeln.",
      "Sie ist immer eine dünne hohe Wolkenschicht.",
      "Sie gehört ausschliesslich zu den Federwolken."
    ],
    richtigeAntworten: [
      "Die Wolke kann Gewitter bringen.",
      "Sie besitzt eine grosse vertikale Ausdehnung.",
      "Sie kann eine Ambossform entwickeln."
    ],
    erklaerung:
      "Cumulonimbus ist eine mächtige Gewitterwolke, die sich stark vertikal entwickelt und oben ambossförmig ausbreiten kann.",
    hinweise: [
      "Drei Aussagen sind richtig.",
      "Denke an eine hoch aufragende Gewitterwolke."
    ],
    schlagwoerter: [
      "Cumulonimbus",
      "Mehrfachauswahl"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-008",
    kategorie: "wolken",
    unterkategorie: "mehrfachauswahl",
    schwierigkeit: "schwer",
    typ: "mehrfachauswahl",
    frage:
      "Welche Aussagen über Nimbostratus sind richtig?",
    antworten: [
      "Die Wolke kann länger anhaltenden Niederschlag bringen.",
      "Sie bildet oft eine ausgedehnte Wolkendecke.",
      "Sie ist eine typische Gewitterwolke mit Amboss.",
      "Sie gehört zu den faserigen hohen Wolken.",
      "Der Bestandteil Nimbus weist auf Niederschlag hin."
    ],
    richtigeAntworten: [
      "Die Wolke kann länger anhaltenden Niederschlag bringen.",
      "Sie bildet oft eine ausgedehnte Wolkendecke.",
      "Der Bestandteil Nimbus weist auf Niederschlag hin."
    ],
    erklaerung:
      "Nimbostratus ist eine ausgedehnte Niederschlags-Schichtwolke.",
    hinweise: [
      "Drei Aussagen sind richtig.",
      "Sie ist keine Gewitterwolke."
    ],
    schlagwoerter: [
      "Nimbostratus",
      "Mehrfachauswahl"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-009",
    kategorie: "wolken",
    unterkategorie: "logik",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Eine Wolke liegt hoch und besitzt eine Haufenstruktur. Welche Wolke ist am wahrscheinlichsten gemeint?",
    antworten: [
      "Cirrocumulus",
      "Altocumulus",
      "Stratocumulus",
      "Cirrostratus"
    ],
    richtigeAntwort: "Cirrocumulus",
    erklaerung:
      "Cirro bezeichnet die grosse Höhe und Cumulus die Haufenstruktur.",
    hinweise: [
      "Kombiniere Höhe und Form.",
      "Gesucht ist keine Schichtwolke."
    ],
    schlagwoerter: [
      "Logik",
      "Namenssystem"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-010",
    kategorie: "wolken",
    unterkategorie: "logik",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Eine Wolke liegt mittelhoch und bildet eine ausgedehnte Schicht. Welche Wolke ist gemeint?",
    antworten: [
      "Altostratus",
      "Altocumulus",
      "Cirrostratus",
      "Stratus"
    ],
    richtigeAntwort: "Altostratus",
    erklaerung:
      "Alto steht für mittelhoch und Stratus für eine Schichtform.",
    hinweise: [
      "Verbinde Alto mit Stratus.",
      "Gesucht ist keine Haufenwolke."
    ],
    schlagwoerter: [
      "Logik",
      "Altostratus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-011",
    kategorie: "wolken",
    unterkategorie: "texteingabe",
    schwierigkeit: "schwer",
    typ: "texteingabe",
    frage:
      "Nenne die tiefe Wolkenart, die Schicht- und Haufenmerkmale miteinander verbindet.",
    akzeptierteAntworten: [
      "Stratocumulus"
    ],
    richtigeAntwort: "Stratocumulus",
    erklaerung:
      "Stratocumulus verbindet eine schichtartige Anordnung mit deutlich sichtbaren Wolkenballen.",
    hinweise: [
      "Der Name enthält zwei Grundformen.",
      "Er beginnt mit Strato."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Stratocumulus"
    ]
  }),

  quizErstelleFrage({
    id: "wolken-s-012",
    kategorie: "wolken",
    unterkategorie: "texteingabe",
    schwierigkeit: "schwer",
    typ: "texteingabe",
    frage:
      "Nenne die Wolke, die häufig eine Ambossform entwickelt.",
    akzeptierteAntworten: [
      "Cumulonimbus"
    ],
    richtigeAntwort: "Cumulonimbus",
    erklaerung:
      "Die Oberseite eines mächtigen Cumulonimbus kann sich ambossförmig ausbreiten.",
    hinweise: [
      "Es ist die Gewitterwolke.",
      "Der Name endet mit Nimbus."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Ambossform"
    ]
  })
];


/* =========================================================
   ALLE WOLKENFRAGEN ZUSAMMENFÜHREN
========================================================= */

const QUIZ_FRAGEN_WOLKEN = [
  ...QUIZ_FRAGEN_WOLKEN_EINFACH,
  ...QUIZ_FRAGEN_WOLKEN_MITTEL,
  ...QUIZ_FRAGEN_WOLKEN_SCHWER
];

/* =========================================================
   BÄUME UND STRÄUCHER – EINFACH
========================================================= */

const QUIZ_FRAGEN_BAUM_EINFACH = [
  quizErstelleFrage({
    id: "baum-e-001",
    kategorie: "baeume-straeucher",
    unterkategorie: "nadelbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art ist ein Nadelbaum?",
    antworten: [
      "Fichte",
      "Rotbuche",
      "Sommerlinde",
      "Bergulme"
    ],
    richtigeAntwort: "Fichte",
    erklaerung:
      "Die Fichte gehört zu den Nadelbäumen.",
    hinweise: [
      "Die gesuchte Art behält ihre Nadeln normalerweise auch im Winter.",
      "Der Name beginnt mit F."
    ],
    schlagwoerter: [
      "Nadelbaum",
      "Fichte"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-002",
    kategorie: "baeume-straeucher",
    unterkategorie: "nadelbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art ist ebenfalls ein Nadelbaum?",
    antworten: [
      "Weisstanne",
      "Esche",
      "Birke",
      "Stieleiche"
    ],
    richtigeAntwort: "Weisstanne",
    erklaerung:
      "Die Weisstanne ist ein immergrüner Nadelbaum.",
    hinweise: [
      "Der Name enthält das Wort Tanne.",
      "Die gesuchte Art ist kein Laubbaum."
    ],
    schlagwoerter: [
      "Nadelbaum",
      "Weisstanne"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-003",
    kategorie: "baeume-straeucher",
    unterkategorie: "nadelbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art gehört zu den Kiefern?",
    antworten: [
      "Waldföhre",
      "Schwarzerle",
      "Hainbuche",
      "Hasel"
    ],
    richtigeAntwort: "Waldföhre",
    erklaerung:
      "Die Waldföhre ist eine Kiefernart.",
    hinweise: [
      "Föhre ist ein anderer gebräuchlicher Ausdruck für Kiefer.",
      "Die gesuchte Art ist ein Nadelbaum."
    ],
    schlagwoerter: [
      "Kiefer",
      "Waldföhre"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-004",
    kategorie: "baeume-straeucher",
    unterkategorie: "nadelbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welcher Nadelbaum wirft im Herbst seine Nadeln ab?",
    antworten: [
      "Lärche",
      "Fichte",
      "Weisstanne",
      "Arve"
    ],
    richtigeAntwort: "Lärche",
    erklaerung:
      "Die Lärche verliert im Herbst ihre Nadeln.",
    hinweise: [
      "Diese Art ist unter den häufigen Nadelbäumen eine Besonderheit.",
      "Der Name beginnt mit L."
    ],
    schlagwoerter: [
      "Nadelverlust",
      "Lärche"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-005",
    kategorie: "baeume-straeucher",
    unterkategorie: "nadelbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art besitzt auffällige rote Samenmäntel?",
    antworten: [
      "Eibe",
      "Fichte",
      "Waldföhre",
      "Lärche"
    ],
    richtigeAntwort: "Eibe",
    erklaerung:
      "Die Samen der Eibe sind von einem roten Samenmantel umgeben.",
    hinweise: [
      "Die Pflanze ist giftig.",
      "Der Name besteht aus vier Buchstaben."
    ],
    schlagwoerter: [
      "Samenmantel",
      "Eibe"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-006",
    kategorie: "baeume-straeucher",
    unterkategorie: "laubbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art gehört zu den echten Buchen?",
    antworten: [
      "Rotbuche",
      "Hainbuche",
      "Bergahorn",
      "Sommerlinde"
    ],
    richtigeAntwort: "Rotbuche",
    erklaerung:
      "Die Rotbuche gehört botanisch zu den echten Buchen.",
    hinweise: [
      "Die andere Buche in der Auswahl ist botanisch keine echte Buche.",
      "Die gesuchte Art beginnt mit Rot."
    ],
    schlagwoerter: [
      "Buche",
      "Rotbuche"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-007",
    kategorie: "baeume-straeucher",
    unterkategorie: "laubbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art trägt zwar das Wort Buche im Namen, gehört aber nicht zu den echten Buchen?",
    antworten: [
      "Hainbuche",
      "Rotbuche",
      "Stieleiche",
      "Bergulme"
    ],
    richtigeAntwort: "Hainbuche",
    erklaerung:
      "Die Hainbuche gehört botanisch nicht zur Gattung der echten Buchen.",
    hinweise: [
      "Sie ist trotz ihres Namens keine echte Buche.",
      "Der Name beginnt mit Hain."
    ],
    schlagwoerter: [
      "Hainbuche",
      "Namensverwechslung"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-008",
    kategorie: "baeume-straeucher",
    unterkategorie: "fruechte",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art bildet Eicheln?",
    antworten: [
      "Stieleiche",
      "Esche",
      "Birke",
      "Sommerlinde"
    ],
    richtigeAntwort: "Stieleiche",
    erklaerung:
      "Die Früchte der Stieleiche sind Eicheln.",
    hinweise: [
      "Der Fruchtname steckt indirekt im Artnamen.",
      "Die gesuchte Art ist eine Eiche."
    ],
    schlagwoerter: [
      "Eichel",
      "Stieleiche"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-009",
    kategorie: "baeume-straeucher",
    unterkategorie: "laubbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art ist besonders für ihre helle bis weisse Rinde bekannt?",
    antworten: [
      "Birke",
      "Stieleiche",
      "Sommerlinde",
      "Bergulme"
    ],
    richtigeAntwort: "Birke",
    erklaerung:
      "Die Birke besitzt typischerweise eine auffällig helle Rinde.",
    hinweise: [
      "Die Rinde ist ein besonders auffälliges Merkmal.",
      "Der Name beginnt mit B."
    ],
    schlagwoerter: [
      "Rinde",
      "Birke"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-010",
    kategorie: "baeume-straeucher",
    unterkategorie: "fruechte",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art bildet Rosskastanien?",
    antworten: [
      "Rosskastanie",
      "Kirschbaum",
      "Hasel",
      "Schwarzerle"
    ],
    richtigeAntwort: "Rosskastanie",
    erklaerung:
      "Die Samen der Rosskastanie werden Rosskastanien genannt.",
    hinweise: [
      "Der Fruchtname steht direkt im Namen.",
      "Die gesuchte Art beginnt mit Ross."
    ],
    schlagwoerter: [
      "Frucht",
      "Rosskastanie"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-011",
    kategorie: "baeume-straeucher",
    unterkategorie: "laubbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art gehört zu den Erlen?",
    antworten: [
      "Schwarzerle",
      "Bergulme",
      "Sommerlinde",
      "Esche"
    ],
    richtigeAntwort: "Schwarzerle",
    erklaerung:
      "Die Schwarzerle ist eine Erlenart.",
    hinweise: [
      "Der Name endet auf Erle.",
      "Die gesuchte Art beginnt mit Schwarz."
    ],
    schlagwoerter: [
      "Erle",
      "Schwarzerle"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-012",
    kategorie: "baeume-straeucher",
    unterkategorie: "laubbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art gehört zu den Linden?",
    antworten: [
      "Sommerlinde",
      "Feldahorn",
      "Hainbuche",
      "Birke"
    ],
    richtigeAntwort: "Sommerlinde",
    erklaerung:
      "Die Sommerlinde ist eine Lindenart.",
    hinweise: [
      "Der Familienname steht direkt im Artnamen.",
      "Die gesuchte Art beginnt mit Sommer."
    ],
    schlagwoerter: [
      "Linde",
      "Sommerlinde"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-013",
    kategorie: "baeume-straeucher",
    unterkategorie: "ahorn",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art gehört zu den Ahornarten?",
    antworten: [
      "Bergahorn",
      "Sommerlinde",
      "Bergulme",
      "Schwarzerle"
    ],
    richtigeAntwort: "Bergahorn",
    erklaerung:
      "Der Bergahorn ist eine Ahornart.",
    hinweise: [
      "Der Name endet auf Ahorn.",
      "Die gesuchte Art wächst auch in höheren Lagen."
    ],
    schlagwoerter: [
      "Ahorn",
      "Bergahorn"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-014",
    kategorie: "baeume-straeucher",
    unterkategorie: "straeucher",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche zwei Arten sind Holunderarten?",
    antworten: [
      "Schwarzer Holunder und Roter Holunder",
      "Roter Hornstrauch und Kornelkirsche",
      "Gemeiner Schneeball und Wolliger Schneeball",
      "Gemeiner Weissdorn und Schwarzdorn"
    ],
    richtigeAntwort:
      "Schwarzer Holunder und Roter Holunder",
    erklaerung:
      "Schwarzer Holunder und Roter Holunder gehören beide zu den Holunderarten.",
    hinweise: [
      "Beide Namen enthalten dasselbe Grundwort.",
      "Gesucht ist das Wort Holunder."
    ],
    schlagwoerter: [
      "Holunder",
      "Artenpaar"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-015",
    kategorie: "baeume-straeucher",
    unterkategorie: "straeucher",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art trägt einen Namen, der an eine Kopfbedeckung erinnert?",
    antworten: [
      "Pfaffenhütchen",
      "Seidelbast",
      "Liguster",
      "Sauerdorn"
    ],
    richtigeAntwort: "Pfaffenhütchen",
    erklaerung:
      "Der Name Pfaffenhütchen bezieht sich auf die auffällige Form der Früchte.",
    hinweise: [
      "Das Wort Hütchen steckt im Namen.",
      "Der Name beginnt mit Pfaffen."
    ],
    schlagwoerter: [
      "Pfaffenhütchen",
      "Name"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-016",
    kategorie: "baeume-straeucher",
    unterkategorie: "giftpflanzen",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art ist stark giftig?",
    antworten: [
      "Seidelbast",
      "Hasel",
      "Kirschbaum",
      "Kornelkirsche"
    ],
    richtigeAntwort: "Seidelbast",
    erklaerung:
      "Seidelbast enthält stark giftige Stoffe.",
    hinweise: [
      "Die gesuchte Pflanze ist ein Strauch.",
      "Der Name endet auf Bast."
    ],
    schlagwoerter: [
      "giftig",
      "Seidelbast"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-017",
    kategorie: "baeume-straeucher",
    unterkategorie: "fruechte",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art bildet Haselnüsse?",
    antworten: [
      "Hasel",
      "Stieleiche",
      "Rosskastanie",
      "Birke"
    ],
    richtigeAntwort: "Hasel",
    erklaerung:
      "Haselnüsse sind die Früchte der Hasel.",
    hinweise: [
      "Die Frucht trägt fast denselben Namen.",
      "Die gesuchte Art hat fünf Buchstaben."
    ],
    schlagwoerter: [
      "Haselnuss",
      "Hasel"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-018",
    kategorie: "baeume-straeucher",
    unterkategorie: "straeucher",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art wird auch Schlehe genannt?",
    antworten: [
      "Schwarzdorn",
      "Gemeiner Weissdorn",
      "Sauerdorn",
      "Hasel"
    ],
    richtigeAntwort: "Schwarzdorn",
    erklaerung:
      "Schwarzdorn ist auch unter dem Namen Schlehe bekannt.",
    hinweise: [
      "Die Pflanze trägt dunkle Früchte.",
      "Der Name endet auf Dorn."
    ],
    schlagwoerter: [
      "Schlehe",
      "Schwarzdorn"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-019",
    kategorie: "baeume-straeucher",
    unterkategorie: "immergruen",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art besitzt immergrüne und häufig stachelig gezähnte Blätter?",
    antworten: [
      "Stechpalme",
      "Liguster",
      "Hasel",
      "Birke"
    ],
    richtigeAntwort: "Stechpalme",
    erklaerung:
      "Die Stechpalme besitzt immergrüne, ledrige und oft stachelig gezähnte Blätter.",
    hinweise: [
      "Der Name weist auf stechende Blattränder hin.",
      "Die Art ist immergrün."
    ],
    schlagwoerter: [
      "immergrün",
      "Stechpalme"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-020",
    kategorie: "baeume-straeucher",
    unterkategorie: "hecken",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art wird häufig als Heckenstrauch verwendet?",
    antworten: [
      "Liguster",
      "Lärche",
      "Esche",
      "Stieleiche"
    ],
    richtigeAntwort: "Liguster",
    erklaerung:
      "Liguster wird häufig für geschnittene Hecken verwendet.",
    hinweise: [
      "Die Pflanze ist ein Strauch.",
      "Der Name beginnt mit L."
    ],
    schlagwoerter: [
      "Hecke",
      "Liguster"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-021",
    kategorie: "baeume-straeucher",
    unterkategorie: "straeucher",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche zwei Arten gehören zu den Schneebällen?",
    antworten: [
      "Gemeiner Schneeball und Wolliger Schneeball",
      "Gemeiner Weissdorn und Schwarzdorn",
      "Schwarzer Holunder und Roter Holunder",
      "Rotbuche und Hainbuche"
    ],
    richtigeAntwort:
      "Gemeiner Schneeball und Wolliger Schneeball",
    erklaerung:
      "Beide genannten Arten gehören zu den Schneeballarten.",
    hinweise: [
      "Beide Namen enthalten Schneeball.",
      "Eine Art ist gemein, die andere wollig."
    ],
    schlagwoerter: [
      "Schneeball",
      "Artenpaar"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-022",
    kategorie: "baeume-straeucher",
    unterkategorie: "fruechte",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art bildet Kirschen?",
    antworten: [
      "Kirschbaum",
      "Elsbeerbaum",
      "Vogelbeerbaum",
      "Eibe"
    ],
    richtigeAntwort: "Kirschbaum",
    erklaerung:
      "Der Kirschbaum bildet Kirschen.",
    hinweise: [
      "Der Fruchtname steht direkt im Namen.",
      "Die gesuchte Art endet auf Baum."
    ],
    schlagwoerter: [
      "Kirsche",
      "Kirschbaum"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-023",
    kategorie: "baeume-straeucher",
    unterkategorie: "fruechte",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art trägt das Wort Kirsche im Namen, ist aber kein eigentlicher Kirschbaum?",
    antworten: [
      "Kornelkirsche",
      "Kirschbaum",
      "Vogelbeerbaum",
      "Hasel"
    ],
    richtigeAntwort: "Kornelkirsche",
    erklaerung:
      "Die Kornelkirsche gehört botanisch nicht zu den eigentlichen Kirschbäumen.",
    hinweise: [
      "Der Name beginnt mit Kornel.",
      "Die Art gehört zu den Hartriegelgewächsen."
    ],
    schlagwoerter: [
      "Kornelkirsche",
      "Namensverwechslung"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-024",
    kategorie: "baeume-straeucher",
    unterkategorie: "laubbaeume",
    schwierigkeit: "einfach",
    typ: "multiple-choice",
    frage:
      "Welche Art gehört zu den Ulmen?",
    antworten: [
      "Bergulme",
      "Bergahorn",
      "Sommerlinde",
      "Esche"
    ],
    richtigeAntwort: "Bergulme",
    erklaerung:
      "Die Bergulme ist eine Ulmenart.",
    hinweise: [
      "Der Name endet auf Ulme.",
      "Die gesuchte Art beginnt mit Berg."
    ],
    schlagwoerter: [
      "Ulme",
      "Bergulme"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-025",
    kategorie: "baeume-straeucher",
    unterkategorie: "wahr-falsch",
    schwierigkeit: "einfach",
    typ: "wahr-falsch",
    frage:
      "Die Lärche verliert im Herbst ihre Nadeln.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Wahr",
    erklaerung:
      "Die Aussage stimmt. Die Lärche ist ein sommergrüner Nadelbaum.",
    hinweise: [
      "Sie ist unter den Nadelbäumen eine Besonderheit."
    ],
    schlagwoerter: [
      "Lärche",
      "Nadelverlust"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-026",
    kategorie: "baeume-straeucher",
    unterkategorie: "wahr-falsch",
    schwierigkeit: "einfach",
    typ: "wahr-falsch",
    frage:
      "Die Hainbuche ist eine echte Buchenart.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Falsch",
    erklaerung:
      "Die Hainbuche gehört trotz ihres Namens botanisch nicht zu den echten Buchen.",
    hinweise: [
      "Der Name kann täuschen."
    ],
    schlagwoerter: [
      "Hainbuche",
      "Systematik"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-027",
    kategorie: "baeume-straeucher",
    unterkategorie: "wahr-falsch",
    schwierigkeit: "einfach",
    typ: "wahr-falsch",
    frage:
      "Die Stieleiche bildet Eicheln.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Wahr",
    erklaerung:
      "Die Früchte der Stieleiche sind Eicheln.",
    hinweise: [
      "Achte auf den Artnamen Eiche."
    ],
    schlagwoerter: [
      "Stieleiche",
      "Eichel"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-028",
    kategorie: "baeume-straeucher",
    unterkategorie: "wahr-falsch",
    schwierigkeit: "einfach",
    typ: "wahr-falsch",
    frage:
      "Die Stechpalme verliert im Winter immer alle Blätter.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Falsch",
    erklaerung:
      "Die Stechpalme ist immergrün.",
    hinweise: [
      "Die Art behält ihre Blätter normalerweise auch im Winter."
    ],
    schlagwoerter: [
      "Stechpalme",
      "immergrün"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-029",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "einfach",
    typ: "texteingabe",
    frage:
      "Wie heisst der Nadelbaum, der im Herbst seine Nadeln verliert?",
    akzeptierteAntworten: [
      "Lärche",
      "Laerche"
    ],
    richtigeAntwort: "Lärche",
    erklaerung:
      "Die Lärche ist ein sommergrüner Nadelbaum.",
    hinweise: [
      "Der Name beginnt mit L.",
      "Der Name hat sechs Buchstaben."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Lärche"
    ]
  }),

  quizErstelleFrage({
    id: "baum-e-030",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "einfach",
    typ: "texteingabe",
    frage:
      "Wie heisst die Art, die Haselnüsse bildet?",
    akzeptierteAntworten: [
      "Hasel"
    ],
    richtigeAntwort: "Hasel",
    erklaerung:
      "Haselnüsse sind die Früchte der Hasel.",
    hinweise: [
      "Der Name steckt im Wort Haselnuss.",
      "Der Name hat fünf Buchstaben."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Hasel"
    ]
  })
];


/* =========================================================
   BÄUME UND STRÄUCHER – MITTEL
========================================================= */

const QUIZ_FRAGEN_BAUM_MITTEL = [
  quizErstelleFrage({
    id: "baum-m-001",
    kategorie: "baeume-straeucher",
    unterkategorie: "gruppen",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Gruppe besteht ausschliesslich aus Nadelbäumen?",
    antworten: [
      "Fichte, Weisstanne, Waldföhre und Lärche",
      "Rotbuche, Hainbuche, Stieleiche und Esche",
      "Birke, Rosskastanie, Schwarzerle und Bergahorn",
      "Hasel, Liguster, Seidelbast und Schwarzdorn"
    ],
    richtigeAntwort:
      "Fichte, Weisstanne, Waldföhre und Lärche",
    erklaerung:
      "Alle vier Arten der ersten Gruppe sind Nadelbäume.",
    hinweise: [
      "Nur eine Gruppe enthält keine Laubbaum- oder Strauchart.",
      "Die Lärche ist trotz ihres Nadelverlusts ein Nadelbaum."
    ],
    schlagwoerter: [
      "Nadelbäume",
      "Gruppierung"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-002",
    kategorie: "baeume-straeucher",
    unterkategorie: "ahorn",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Gruppe besteht ausschliesslich aus Ahornarten?",
    antworten: [
      "Spitzahorn, Feldahorn und Bergahorn",
      "Rotbuche, Hainbuche und Bergulme",
      "Fichte, Weisstanne und Lärche",
      "Hasel, Birke und Esche"
    ],
    richtigeAntwort:
      "Spitzahorn, Feldahorn und Bergahorn",
    erklaerung:
      "Alle drei genannten Arten gehören zu den Ahornarten.",
    hinweise: [
      "Alle drei Namen enden gleich.",
      "Das gemeinsame Grundwort lautet Ahorn."
    ],
    schlagwoerter: [
      "Ahorn",
      "Artenpaar"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-003",
    kategorie: "baeume-straeucher",
    unterkategorie: "ausschluss",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Art ist keine Ahornart?",
    antworten: [
      "Sommerlinde",
      "Spitzahorn",
      "Feldahorn",
      "Bergahorn"
    ],
    richtigeAntwort: "Sommerlinde",
    erklaerung:
      "Die Sommerlinde ist eine Lindenart und kein Ahorn.",
    hinweise: [
      "Drei Namen enden auf Ahorn.",
      "Gesucht ist die Lindenart."
    ],
    schlagwoerter: [
      "Ausschluss",
      "Ahorn"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-004",
    kategorie: "baeume-straeucher",
    unterkategorie: "verwechslungen",
    schwierigkeit: "mittel",
    typ: "multiple-choice",
    frage:
      "Welche Aussage ist korrekt?",
    antworten: [
      "Die Hainbuche ist keine echte Buche.",
      "Die Rotbuche ist eine Ahornart.",
      "Die Bergulme ist eine Linde.",
      "Die Stieleiche ist ein Nadelbaum."
    ],
    richtigeAntwort:
      "Die Hainbuche ist keine echte Buche.",
    erklaerung:
      "Die Hainbuche gehört botanisch nicht zur Gattung der echten Buchen.",
    hinweise: [
      "Nur eine Aussage berücksichtigt eine bekannte Namensverwechslung.",
      "Achte auf die Hainbuche."
    ],
    schlagwoerter: [
      "Hainbuche",
      "Verwechslung"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-005",
    kategorie: "baeume-straeucher",
    unterkategorie: "artenpaare",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten gehören zu den Holundern?",
    antworten: [
      "Schwarzer Holunder",
      "Roter Holunder",
      "Roter Hornstrauch",
      "Rote Heckenkirsche",
      "Gemeiner Schneeball"
    ],
    richtigeAntworten: [
      "Schwarzer Holunder",
      "Roter Holunder"
    ],
    erklaerung:
      "Schwarzer Holunder und Roter Holunder sind Holunderarten.",
    hinweise: [
      "Zwei Antworten sind richtig.",
      "Beide Namen enthalten Holunder."
    ],
    schlagwoerter: [
      "Holunder",
      "Mehrfachauswahl"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-006",
    kategorie: "baeume-straeucher",
    unterkategorie: "artenpaare",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten gehören zu den Schneebällen?",
    antworten: [
      "Gemeiner Schneeball",
      "Wolliger Schneeball",
      "Gemeiner Weissdorn",
      "Schwarzdorn",
      "Liguster"
    ],
    richtigeAntworten: [
      "Gemeiner Schneeball",
      "Wolliger Schneeball"
    ],
    erklaerung:
      "Die beiden richtigen Antworten sind Schneeballarten.",
    hinweise: [
      "Zwei Antworten sind richtig.",
      "Beide enthalten das Wort Schneeball."
    ],
    schlagwoerter: [
      "Schneeball",
      "Mehrfachauswahl"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-007",
    kategorie: "baeume-straeucher",
    unterkategorie: "ahorn",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten gehören zu den Ahornarten?",
    antworten: [
      "Spitzahorn",
      "Feldahorn",
      "Bergahorn",
      "Bergulme",
      "Sommerlinde"
    ],
    richtigeAntworten: [
      "Spitzahorn",
      "Feldahorn",
      "Bergahorn"
    ],
    erklaerung:
      "Spitzahorn, Feldahorn und Bergahorn gehören alle zur Ahorn-Gruppe.",
    hinweise: [
      "Drei Antworten sind richtig.",
      "Achte auf die gemeinsame Endung."
    ],
    schlagwoerter: [
      "Ahorn",
      "Mehrfachauswahl"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-008",
    kategorie: "baeume-straeucher",
    unterkategorie: "dornen",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten tragen das Wort Dorn im Namen?",
    antworten: [
      "Sauerdorn",
      "Gemeiner Weissdorn",
      "Schwarzdorn",
      "Roter Hornstrauch",
      "Seidelbast"
    ],
    richtigeAntworten: [
      "Sauerdorn",
      "Gemeiner Weissdorn",
      "Schwarzdorn"
    ],
    erklaerung:
      "Alle drei richtigen Antworten enthalten das Wort Dorn.",
    hinweise: [
      "Drei Antworten sind richtig.",
      "Lies die Namen genau."
    ],
    schlagwoerter: [
      "Dorn",
      "Namensgruppen"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-009",
    kategorie: "baeume-straeucher",
    unterkategorie: "fruechte",
    schwierigkeit: "mittel",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten tragen das Wort Beere oder Beer im Namen?",
    antworten: [
      "Vogelbeerbaum",
      "Elsbeerbaum",
      "Kornelkirsche",
      "Kirschbaum",
      "Roter Holunder"
    ],
    richtigeAntworten: [
      "Vogelbeerbaum",
      "Elsbeerbaum"
    ],
    erklaerung:
      "Vogelbeerbaum und Elsbeerbaum enthalten beide den Wortbestandteil Beer.",
    hinweise: [
      "Zwei Antworten sind richtig.",
      "Achte nur auf die Namen."
    ],
    schlagwoerter: [
      "Beerbaum",
      "Namensgruppen"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-010",
    kategorie: "baeume-straeucher",
    unterkategorie: "wahr-falsch",
    schwierigkeit: "mittel",
    typ: "wahr-falsch",
    frage:
      "Rotbuche und Hainbuche gehören botanisch zur gleichen Gattung.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Falsch",
    erklaerung:
      "Die Rotbuche ist eine echte Buche, die Hainbuche gehört zu einer anderen Pflanzengruppe.",
    hinweise: [
      "Der gemeinsame Namensbestandteil kann täuschen."
    ],
    schlagwoerter: [
      "Rotbuche",
      "Hainbuche"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-011",
    kategorie: "baeume-straeucher",
    unterkategorie: "wahr-falsch",
    schwierigkeit: "mittel",
    typ: "wahr-falsch",
    frage:
      "Kornelkirsche und Kirschbaum sind botanisch dieselbe Art.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Falsch",
    erklaerung:
      "Die Kornelkirsche ist kein eigentlicher Kirschbaum.",
    hinweise: [
      "Der ähnliche Name bedeutet nicht dieselbe Art."
    ],
    schlagwoerter: [
      "Kornelkirsche",
      "Kirschbaum"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-012",
    kategorie: "baeume-straeucher",
    unterkategorie: "wahr-falsch",
    schwierigkeit: "mittel",
    typ: "wahr-falsch",
    frage:
      "Schwarzer Holunder und Roter Holunder gehören beide zur Holunder-Gruppe.",
    antworten: [
      "Wahr",
      "Falsch"
    ],
    richtigeAntwort: "Wahr",
    erklaerung:
      "Beide sind Holunderarten.",
    hinweise: [
      "Der gemeinsame Gruppenname steht direkt im Namen."
    ],
    schlagwoerter: [
      "Holunder",
      "Artenpaar"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-013",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "mittel",
    typ: "texteingabe",
    frage:
      "Nenne eine der drei vorhandenen Ahornarten.",
    akzeptierteAntworten: [
      "Spitzahorn",
      "Feldahorn",
      "Bergahorn"
    ],
    richtigeAntwort:
      "Spitzahorn, Feldahorn oder Bergahorn",
    erklaerung:
      "In der Namensliste sind Spitzahorn, Feldahorn und Bergahorn enthalten.",
    hinweise: [
      "Alle Antworten enden auf Ahorn.",
      "Eine Art beginnt mit Berg."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Ahorn"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-014",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "mittel",
    typ: "texteingabe",
    frage:
      "Wie heisst die immergrüne Art mit häufig stachelig gezähnten Blättern?",
    akzeptierteAntworten: [
      "Stechpalme"
    ],
    richtigeAntwort: "Stechpalme",
    erklaerung:
      "Die Stechpalme besitzt immergrüne und häufig stachelig gezähnte Blätter.",
    hinweise: [
      "Der Name weist auf die Blattränder hin.",
      "Der Name endet auf Palme."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Stechpalme"
    ]
  }),

  quizErstelleFrage({
    id: "baum-m-015",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "mittel",
    typ: "texteingabe",
    frage:
      "Wie heisst die Art, die auch Schlehe genannt wird?",
    akzeptierteAntworten: [
      "Schwarzdorn"
    ],
    richtigeAntwort: "Schwarzdorn",
    erklaerung:
      "Schwarzdorn ist auch als Schlehe bekannt.",
    hinweise: [
      "Der Name endet auf Dorn.",
      "Der erste Wortteil bezeichnet eine dunkle Farbe."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Schwarzdorn"
    ]
  })
];

/* =========================================================
   BÄUME UND STRÄUCHER – SCHWER
========================================================= */

const QUIZ_FRAGEN_BAUM_SCHWER = [
  quizErstelleFrage({
    id: "baum-s-001",
    kategorie: "baeume-straeucher",
    unterkategorie: "zuordnung",
    schwierigkeit: "schwer",
    typ: "zuordnung",
    frage:
      "Ordne jede Art der passenden Gruppe zu.",
    zuordnungen: [
      {
        links: "Fichte",
        rechts: "Nadelbaum"
      },
      {
        links: "Rotbuche",
        rechts: "echte Buche"
      },
      {
        links: "Bergahorn",
        rechts: "Ahornart"
      },
      {
        links: "Schwarzdorn",
        rechts: "auch Schlehe genannt"
      }
    ],
    richtigeAntwort:
      "Fichte = Nadelbaum; Rotbuche = echte Buche; Bergahorn = Ahornart; Schwarzdorn = auch Schlehe genannt",
    erklaerung:
      "Die vier Arten gehören zu unterschiedlichen Gruppen und besitzen klar unterscheidbare Merkmale.",
    hinweise: [
      "Achte auf die Namensbestandteile.",
      "Schwarzdorn besitzt zusätzlich einen gebräuchlichen Namen."
    ],
    schlagwoerter: [
      "Zuordnung",
      "Pflanzengruppen"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-002",
    kategorie: "baeume-straeucher",
    unterkategorie: "zuordnung",
    schwierigkeit: "schwer",
    typ: "zuordnung",
    frage:
      "Ordne die Art der passenden Frucht oder Eigenschaft zu.",
    zuordnungen: [
      {
        links: "Stieleiche",
        rechts: "Eicheln"
      },
      {
        links: "Hasel",
        rechts: "Haselnüsse"
      },
      {
        links: "Kirschbaum",
        rechts: "Kirschen"
      },
      {
        links: "Birke",
        rechts: "helle Rinde"
      }
    ],
    richtigeAntwort:
      "Stieleiche = Eicheln; Hasel = Haselnüsse; Kirschbaum = Kirschen; Birke = helle Rinde",
    erklaerung:
      "Die Zuordnung verbindet typische Früchte oder auffällige Merkmale mit den jeweiligen Arten.",
    hinweise: [
      "Drei Zuordnungen betreffen Früchte.",
      "Eine Zuordnung betrifft die Rinde."
    ],
    schlagwoerter: [
      "Früchte",
      "Merkmale",
      "Zuordnung"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-003",
    kategorie: "baeume-straeucher",
    unterkategorie: "reihenfolge",
    schwierigkeit: "schwer",
    typ: "reihenfolge",
    frage:
      "Ordne diese Namen alphabetisch.",
    antworten: [
      "Arve",
      "Eibe",
      "Fichte",
      "Lärche"
    ],
    reihenfolge: [
      "Arve",
      "Eibe",
      "Fichte",
      "Lärche"
    ],
    richtigeAntwort:
      "Arve → Eibe → Fichte → Lärche",
    erklaerung:
      "Alphabetisch steht Arve vor Eibe, danach folgen Fichte und Lärche.",
    hinweise: [
      "Vergleiche jeweils den ersten Buchstaben.",
      "A kommt vor E."
    ],
    schlagwoerter: [
      "Reihenfolge",
      "Alphabet"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-004",
    kategorie: "baeume-straeucher",
    unterkategorie: "reihenfolge",
    schwierigkeit: "schwer",
    typ: "reihenfolge",
    frage:
      "Ordne diese Ahornarten alphabetisch.",
    antworten: [
      "Bergahorn",
      "Feldahorn",
      "Spitzahorn"
    ],
    reihenfolge: [
      "Bergahorn",
      "Feldahorn",
      "Spitzahorn"
    ],
    richtigeAntwort:
      "Bergahorn → Feldahorn → Spitzahorn",
    erklaerung:
      "Alphabetisch kommt Bergahorn vor Feldahorn und Spitzahorn.",
    hinweise: [
      "B steht vor F.",
      "S kommt zuletzt."
    ],
    schlagwoerter: [
      "Ahorn",
      "Reihenfolge"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-005",
    kategorie: "baeume-straeucher",
    unterkategorie: "ausschluss",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Welche Art passt am wenigsten zu den übrigen drei Arten?",
    antworten: [
      "Birke",
      "Fichte",
      "Weisstanne",
      "Waldföhre"
    ],
    richtigeAntwort: "Birke",
    erklaerung:
      "Birke ist ein Laubbaum, die drei übrigen Arten sind Nadelbäume.",
    hinweise: [
      "Drei Arten tragen Nadeln.",
      "Gesucht ist der Laubbaum."
    ],
    schlagwoerter: [
      "Ausschluss",
      "Nadelbaum",
      "Laubbaum"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-006",
    kategorie: "baeume-straeucher",
    unterkategorie: "ausschluss",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Welche Art passt am wenigsten zu den übrigen drei Namen?",
    antworten: [
      "Bergulme",
      "Bergahorn",
      "Feldahorn",
      "Spitzahorn"
    ],
    richtigeAntwort: "Bergulme",
    erklaerung:
      "Bergulme ist eine Ulmenart, die drei übrigen Arten sind Ahornarten.",
    hinweise: [
      "Drei Namen enden auf Ahorn.",
      "Gesucht ist die Ulme."
    ],
    schlagwoerter: [
      "Ausschluss",
      "Ahorn",
      "Ulme"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-007",
    kategorie: "baeume-straeucher",
    unterkategorie: "ausschluss",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Welche Art gehört nicht in die Gruppe der dornigen Namen?",
    antworten: [
      "Liguster",
      "Sauerdorn",
      "Gemeiner Weissdorn",
      "Schwarzdorn"
    ],
    richtigeAntwort: "Liguster",
    erklaerung:
      "Nur Liguster enthält das Wort Dorn nicht im Namen.",
    hinweise: [
      "Lies die Namen wörtlich.",
      "Drei Namen besitzen dieselbe Endung."
    ],
    schlagwoerter: [
      "Ausschluss",
      "Dorn"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-008",
    kategorie: "baeume-straeucher",
    unterkategorie: "mehrfachauswahl",
    schwierigkeit: "schwer",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten sind Nadelbäume?",
    antworten: [
      "Fichte",
      "Weisstanne",
      "Waldföhre",
      "Arve",
      "Lärche",
      "Eibe",
      "Rotbuche"
    ],
    richtigeAntworten: [
      "Fichte",
      "Weisstanne",
      "Waldföhre",
      "Arve",
      "Lärche",
      "Eibe"
    ],
    erklaerung:
      "Fichte, Weisstanne, Waldföhre, Arve, Lärche und Eibe sind Nadelbäume. Die Rotbuche ist ein Laubbaum.",
    hinweise: [
      "Sechs Antworten sind richtig.",
      "Nur eine Auswahl ist ein Laubbaum."
    ],
    schlagwoerter: [
      "Nadelbäume",
      "Mehrfachauswahl"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-009",
    kategorie: "baeume-straeucher",
    unterkategorie: "mehrfachauswahl",
    schwierigkeit: "schwer",
    typ: "mehrfachauswahl",
    frage:
      "Welche Aussagen sind richtig?",
    antworten: [
      "Die Lärche verliert ihre Nadeln.",
      "Die Hainbuche ist keine echte Buche.",
      "Die Kornelkirsche ist kein eigentlicher Kirschbaum.",
      "Die Birke ist ein Nadelbaum.",
      "Die Stieleiche bildet Haselnüsse."
    ],
    richtigeAntworten: [
      "Die Lärche verliert ihre Nadeln.",
      "Die Hainbuche ist keine echte Buche.",
      "Die Kornelkirsche ist kein eigentlicher Kirschbaum."
    ],
    erklaerung:
      "Die ersten drei Aussagen sind korrekt. Die Birke ist ein Laubbaum und die Stieleiche bildet Eicheln.",
    hinweise: [
      "Drei Aussagen sind richtig.",
      "Achte auf bekannte Namensverwechslungen."
    ],
    schlagwoerter: [
      "Mehrfachauswahl",
      "Merkmale"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-010",
    kategorie: "baeume-straeucher",
    unterkategorie: "mehrfachauswahl",
    schwierigkeit: "schwer",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten sind durch einen Farbbegriff im Namen gekennzeichnet?",
    antworten: [
      "Rotbuche",
      "Schwarzer Holunder",
      "Roter Holunder",
      "Rote Heckenkirsche",
      "Roter Hornstrauch",
      "Schwarzdorn",
      "Weisstanne",
      "Feldahorn"
    ],
    richtigeAntworten: [
      "Rotbuche",
      "Schwarzer Holunder",
      "Roter Holunder",
      "Rote Heckenkirsche",
      "Roter Hornstrauch",
      "Schwarzdorn",
      "Weisstanne"
    ],
    erklaerung:
      "Alle richtigen Antworten enthalten einen Farbbegriff. Feldahorn enthält keinen Farbnamen.",
    hinweise: [
      "Sieben Antworten sind richtig.",
      "Suche nach Rot, Schwarz und Weiss."
    ],
    schlagwoerter: [
      "Farbnamen",
      "Mehrfachauswahl"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-011",
    kategorie: "baeume-straeucher",
    unterkategorie: "mehrfachauswahl",
    schwierigkeit: "schwer",
    typ: "mehrfachauswahl",
    frage:
      "Welche Arten enthalten einen Hinweis auf einen Standort oder Landschaftsraum im Namen?",
    antworten: [
      "Waldföhre",
      "Bergulme",
      "Bergahorn",
      "Feldahorn",
      "Sommerlinde",
      "Rotbuche"
    ],
    richtigeAntworten: [
      "Waldföhre",
      "Bergulme",
      "Bergahorn",
      "Feldahorn"
    ],
    erklaerung:
      "Wald, Berg und Feld sind Hinweise auf Landschaftsräume oder Standorte.",
    hinweise: [
      "Vier Antworten sind richtig.",
      "Achte auf Wald, Berg und Feld."
    ],
    schlagwoerter: [
      "Namensbestandteile",
      "Standort"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-012",
    kategorie: "baeume-straeucher",
    unterkategorie: "logik",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Gesucht ist eine Art, die ein Nadelbaum ist, im Herbst aber ihre Nadeln verliert. Welche Art ist gemeint?",
    antworten: [
      "Lärche",
      "Fichte",
      "Weisstanne",
      "Eibe"
    ],
    richtigeAntwort: "Lärche",
    erklaerung:
      "Die Lärche ist ein Nadelbaum, der im Herbst seine Nadeln abwirft.",
    hinweise: [
      "Die Art ist eine Ausnahme unter den häufigen Nadelbäumen.",
      "Sie beginnt mit L."
    ],
    schlagwoerter: [
      "Logik",
      "Lärche"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-013",
    kategorie: "baeume-straeucher",
    unterkategorie: "logik",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Gesucht ist eine Art, die immergrün ist und häufig stachelig gezähnte Blätter besitzt. Welche Art ist gemeint?",
    antworten: [
      "Stechpalme",
      "Liguster",
      "Hasel",
      "Schwarzer Holunder"
    ],
    richtigeAntwort: "Stechpalme",
    erklaerung:
      "Die Stechpalme ist immergrün und besitzt häufig stachelig gezähnte Blätter.",
    hinweise: [
      "Der Name weist auf das stechende Blatt hin.",
      "Die Art endet auf Palme."
    ],
    schlagwoerter: [
      "Logik",
      "Stechpalme"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-014",
    kategorie: "baeume-straeucher",
    unterkategorie: "logik",
    schwierigkeit: "schwer",
    typ: "multiple-choice",
    frage:
      "Gesucht ist eine Art, die zwar das Wort Kirsche im Namen trägt, aber nicht zu den eigentlichen Kirschbäumen gehört. Welche Art ist gemeint?",
    antworten: [
      "Kornelkirsche",
      "Kirschbaum",
      "Vogelbeerbaum",
      "Elsbeerbaum"
    ],
    richtigeAntwort: "Kornelkirsche",
    erklaerung:
      "Die Kornelkirsche gehört zu den Hartriegelgewächsen und ist kein eigentlicher Kirschbaum.",
    hinweise: [
      "Der erste Wortteil lautet Kornel.",
      "Der Name enthält Kirsche."
    ],
    schlagwoerter: [
      "Logik",
      "Kornelkirsche"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-015",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "schwer",
    typ: "texteingabe",
    frage:
      "Nenne alle drei Ahornarten aus der Namensliste. Trenne die Namen mit Kommas.",
    akzeptierteAntworten: [
      "Spitzahorn, Feldahorn, Bergahorn",
      "Spitzahorn Feldahorn Bergahorn",
      "Bergahorn, Feldahorn, Spitzahorn",
      "Bergahorn Feldahorn Spitzahorn",
      "Feldahorn, Bergahorn, Spitzahorn",
      "Feldahorn Bergahorn Spitzahorn",
      "Feldahorn, Spitzahorn, Bergahorn",
      "Feldahorn Spitzahorn Bergahorn",
      "Spitzahorn, Bergahorn, Feldahorn",
      "Spitzahorn Bergahorn Feldahorn",
      "Bergahorn, Spitzahorn, Feldahorn",
      "Bergahorn Spitzahorn Feldahorn"
    ],
    richtigeAntwort:
      "Spitzahorn, Feldahorn und Bergahorn",
    erklaerung:
      "Die drei enthaltenen Ahornarten sind Spitzahorn, Feldahorn und Bergahorn.",
    hinweise: [
      "Alle drei Namen enden auf Ahorn.",
      "Die Anfangswörter lauten Spitz, Feld und Berg."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Ahorn"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-016",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "schwer",
    typ: "texteingabe",
    frage:
      "Nenne beide Holunderarten aus der Namensliste.",
    akzeptierteAntworten: [
      "Schwarzer Holunder, Roter Holunder",
      "Schwarzer Holunder Roter Holunder",
      "Roter Holunder, Schwarzer Holunder",
      "Roter Holunder Schwarzer Holunder"
    ],
    richtigeAntwort:
      "Schwarzer Holunder und Roter Holunder",
    erklaerung:
      "Die beiden enthaltenen Holunderarten sind Schwarzer Holunder und Roter Holunder.",
    hinweise: [
      "Beide Namen enthalten Holunder.",
      "Die Farbbegriffe sind Schwarz und Rot."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Holunder"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-017",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "schwer",
    typ: "texteingabe",
    frage:
      "Nenne beide Schneeballarten aus der Namensliste.",
    akzeptierteAntworten: [
      "Gemeiner Schneeball, Wolliger Schneeball",
      "Gemeiner Schneeball Wolliger Schneeball",
      "Wolliger Schneeball, Gemeiner Schneeball",
      "Wolliger Schneeball Gemeiner Schneeball"
    ],
    richtigeAntwort:
      "Gemeiner Schneeball und Wolliger Schneeball",
    erklaerung:
      "Die enthaltenen Arten sind Gemeiner Schneeball und Wolliger Schneeball.",
    hinweise: [
      "Beide Namen enden auf Schneeball.",
      "Die Adjektive lauten Gemeiner und Wolliger."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Schneeball"
    ]
  }),

  quizErstelleFrage({
    id: "baum-s-018",
    kategorie: "baeume-straeucher",
    unterkategorie: "texteingabe",
    schwierigkeit: "schwer",
    typ: "texteingabe",
    frage:
      "Wie heisst die Art mit auffälligen roten Samenmänteln?",
    akzeptierteAntworten: [
      "Eibe"
    ],
    richtigeAntwort: "Eibe",
    erklaerung:
      "Die Eibe besitzt auffällige rote Samenmäntel.",
    hinweise: [
      "Die Pflanze ist giftig.",
      "Der Name besteht aus vier Buchstaben."
    ],
    schlagwoerter: [
      "freie Eingabe",
      "Eibe"
    ]
  })
];


/* =========================================================
   ALLE BAUM- UND STRAUCHFRAGEN ZUSAMMENFÜHREN
========================================================= */

const QUIZ_FRAGEN_BAUM = [
  ...QUIZ_FRAGEN_BAUM_EINFACH,
  ...QUIZ_FRAGEN_BAUM_MITTEL,
  ...QUIZ_FRAGEN_BAUM_SCHWER
];


/* =========================================================
   VORBEREITETE LEERE KATEGORIEN

   Diese Arrays werden später mit den verbindlichen Namen
   für Gesteine und Blumen ergänzt.
========================================================= */

const QUIZ_FRAGEN_GESTEINE = [];

const QUIZ_FRAGEN_BLUMEN = [];


/* =========================================================
   ZENTRALE FRAGENSAMMLUNG
========================================================= */

const QUIZ_ALLE_FRAGEN = [
  ...QUIZ_FRAGEN_WOLKEN,
  ...QUIZ_FRAGEN_BAUM,
  ...QUIZ_FRAGEN_GESTEINE,
  ...QUIZ_FRAGEN_BLUMEN
];


/* =========================================================
   FRAGEN VALIDIEREN
========================================================= */

function quizValidiereFrage(frage) {
  const fehler = [];

  if (!frage || typeof frage !== "object") {
    return [
      "Frage ist kein gültiges Objekt."
    ];
  }

  if (!frage.id) {
    fehler.push("Frage besitzt keine ID.");
  }

  if (!frage.kategorie) {
    fehler.push("Frage besitzt keine Kategorie.");
  }

  if (!frage.schwierigkeit) {
    fehler.push("Frage besitzt keine Schwierigkeit.");
  }

  if (!frage.typ) {
    fehler.push("Frage besitzt keinen Fragetyp.");
  }

  if (!frage.frage) {
    fehler.push("Fragetext fehlt.");
  }

  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch"
  ) {
    if (!Array.isArray(frage.antworten) || frage.antworten.length < 2) {
      fehler.push(
        "Multiple-Choice- oder Wahr-Falsch-Frage benötigt mindestens zwei Antworten."
      );
    }

    if (
      frage.richtigeAntwort === null ||
      frage.richtigeAntwort === undefined
    ) {
      fehler.push("Die richtige Antwort fehlt.");
    }
  }

  if (frage.typ === "mehrfachauswahl") {
    if (!Array.isArray(frage.antworten) || frage.antworten.length < 2) {
      fehler.push(
        "Mehrfachauswahl benötigt mindestens zwei Antworten."
      );
    }

    if (
      !Array.isArray(frage.richtigeAntworten) ||
      frage.richtigeAntworten.length === 0
    ) {
      fehler.push(
        "Mehrfachauswahl benötigt mindestens eine richtige Antwort."
      );
    }
  }

  if (frage.typ === "texteingabe") {
    if (
      !Array.isArray(frage.akzeptierteAntworten) ||
      frage.akzeptierteAntworten.length === 0
    ) {
      fehler.push(
        "Texteingabe benötigt mindestens eine akzeptierte Antwort."
      );
    }
  }

  if (frage.typ === "reihenfolge") {
    if (
      !Array.isArray(frage.reihenfolge) ||
      frage.reihenfolge.length < 2
    ) {
      fehler.push(
        "Reihenfolge-Frage benötigt mindestens zwei Elemente."
      );
    }
  }

  if (frage.typ === "zuordnung") {
    if (
      !Array.isArray(frage.zuordnungen) ||
      frage.zuordnungen.length < 2
    ) {
      fehler.push(
        "Zuordnungsfrage benötigt mindestens zwei Paare."
      );
    }
  }

  return fehler;
}


function quizValidiereAlleFragen() {
  const ids = new Set();
  const fehlerListe = [];

  QUIZ_ALLE_FRAGEN.forEach(frage => {
    const frageFehler = quizValidiereFrage(frage);

    if (ids.has(frage.id)) {
      frageFehler.push(
        `Die ID "${frage.id}" wurde mehrfach verwendet.`
      );
    }

    ids.add(frage.id);

    if (frageFehler.length > 0) {
      fehlerListe.push({
        id: frage.id || "unbekannt",
        fehler: frageFehler
      });
    }
  });

  if (fehlerListe.length > 0) {
    console.warn(
      "Quiz: Bei der Fragenvalidierung wurden Probleme gefunden.",
      fehlerListe
    );
  }

  return fehlerListe;
}


quizValidiereAlleFragen();


/* =========================================================
   FRAGEN SUCHEN UND FILTERN
========================================================= */

function quizHoleFrageNachId(frageId) {
  return QUIZ_ALLE_FRAGEN.find(
    frage => frage.id === frageId
  ) || null;
}


function quizHoleFragenNachIds(frageIds) {
  if (!Array.isArray(frageIds)) {
    return [];
  }

  return frageIds
    .map(frageId => quizHoleFrageNachId(frageId))
    .filter(Boolean);
}


function quizFiltereFragen({
  kategorien = [],
  schwierigkeiten = [],
  fragetypen = [],
  frageIds = null
} = {}) {
  let pool = [...QUIZ_ALLE_FRAGEN];

  if (Array.isArray(frageIds)) {
    const idSet = new Set(frageIds);

    pool = pool.filter(
      frage => idSet.has(frage.id)
    );
  }

  if (
    Array.isArray(kategorien) &&
    kategorien.length > 0
  ) {
    const kategorieSet = new Set(kategorien);

    pool = pool.filter(
      frage => kategorieSet.has(frage.kategorie)
    );
  }

  if (
    Array.isArray(schwierigkeiten) &&
    schwierigkeiten.length > 0
  ) {
    const schwierigkeitsSet = new Set(
      schwierigkeiten
    );

    pool = pool.filter(
      frage =>
        schwierigkeitsSet.has(
          frage.schwierigkeit
        )
    );
  }

  if (
    Array.isArray(fragetypen) &&
    fragetypen.length > 0
  ) {
    const fragetypSet = new Set(fragetypen);

    pool = pool.filter(
      frage => fragetypSet.has(frage.typ)
    );
  }

  return pool;
}


/* =========================================================
   VERFÜGBARE KATEGORIEN UND FRAGETYPEN
========================================================= */

function quizHoleVerfuegbareKategorien() {
  return QUIZ_KATEGORIEN.filter(kategorie => {
    if (!kategorie.verfuegbar) {
      return false;
    }

    return QUIZ_ALLE_FRAGEN.some(
      frage => frage.kategorie === kategorie.id
    );
  });
}


function quizHoleVerfuegbareFragetypen() {
  return Object.values(QUIZ_FRAGETYPEN).filter(
    fragetyp =>
      QUIZ_ALLE_FRAGEN.some(
        frage => frage.typ === fragetyp.id
      )
  );
}


function quizZaehleFragenProKategorie(kategorieId) {
  return QUIZ_ALLE_FRAGEN.filter(
    frage => frage.kategorie === kategorieId
  ).length;
}


function quizZaehleFragenProSchwierigkeit(
  schwierigkeitId
) {
  return QUIZ_ALLE_FRAGEN.filter(
    frage =>
      frage.schwierigkeit === schwierigkeitId
  ).length;
}


function quizZaehleFragenProFragetyp(fragetypId) {
  return QUIZ_ALLE_FRAGEN.filter(
    frage => frage.typ === fragetypId
  ).length;
}


/* =========================================================
   ANTWORTEN FÜR EINE QUIZRUNDE VORBEREITEN
========================================================= */

function quizBereiteFrageVor(frage) {
  const kopie = quizKopiereObjekt(frage);

  kopie.benutzerAntwort = null;
  kopie.istRichtig = null;
  kopie.verwendeteHinweise = 0;
  kopie.antwortzeitMs = null;

  if (
    quizEinstellungen.antwortenMischen &&
    (
      kopie.typ === "multiple-choice" ||
      kopie.typ === "wahr-falsch" ||
      kopie.typ === "mehrfachauswahl"
    )
  ) {
    kopie.antworten = quizMischeArray(
      kopie.antworten
    );
  }

  if (kopie.typ === "reihenfolge") {
    kopie.antworten = quizMischeArray(
      kopie.reihenfolge
    );
  }

  if (kopie.typ === "zuordnung") {
    kopie.zuordnungenLinks = kopie.zuordnungen.map(
      paar => paar.links
    );

    kopie.zuordnungenRechts = quizMischeArray(
      kopie.zuordnungen.map(
        paar => paar.rechts
      )
    );
  }

  return kopie;
}


function quizBereiteFragenVor(fragen) {
  const vorbereiteteFragen = fragen.map(
    frage => quizBereiteFrageVor(frage)
  );

  if (quizEinstellungen.fragenMischen) {
    return quizMischeArray(
      vorbereiteteFragen
    );
  }

  return vorbereiteteFragen;
}


/* =========================================================
   PUNKTESYSTEM
========================================================= */

function quizHoleGrundpunkte(frage) {
  const schwierigkeitsDaten = quizHoleSchwierigkeit(
    frage.schwierigkeit
  );

  if (!schwierigkeitsDaten) {
    return 100;
  }

  return schwierigkeitsDaten.punkte;
}


function quizBerechneSerienBonus(serie) {
  if (serie < 3) {
    return 0;
  }

  if (serie < 5) {
    return 25;
  }

  if (serie < 10) {
    return 50;
  }

  return 100;
}


function quizBerechneZeitbonus(
  frage,
  antwortzeitMs
) {
  if (
    !antwortzeitMs ||
    antwortzeitMs <= 0
  ) {
    return 0;
  }

  const sekunden = antwortzeitMs / 1000;

  if (sekunden <= 3) {
    return 50;
  }

  if (sekunden <= 7) {
    return 25;
  }

  if (sekunden <= 12) {
    return 10;
  }

  return 0;
}


function quizBerechneHinweisAbzug(
  verwendeteHinweise
) {
  return Math.max(
    0,
    Number(verwendeteHinweise || 0) * 25
  );
}


function quizBerechnePunkteFuerAntwort({
  frage,
  istRichtig,
  serie,
  antwortzeitMs,
  verwendeteHinweise
}) {
  if (!istRichtig) {
    return {
      grundpunkte: 0,
      serienBonus: 0,
      zeitBonus: 0,
      hinweisAbzug: 0,
      gesamt: 0
    };
  }

  const grundpunkte = quizHoleGrundpunkte(
    frage
  );

  const serienBonus =
    quizBerechneSerienBonus(serie);

  const zeitBonus =
    quizBerechneZeitbonus(
      frage,
      antwortzeitMs
    );

  const hinweisAbzug =
    quizBerechneHinweisAbzug(
      verwendeteHinweise
    );

  const gesamt = Math.max(
    25,
    grundpunkte +
      serienBonus +
      zeitBonus -
      hinweisAbzug
  );

  return {
    grundpunkte,
    serienBonus,
    zeitBonus,
    hinweisAbzug,
    gesamt
  };
}

/* =========================================================
   QUIZRUNDE ZURÜCKSETZEN
========================================================= */

function quizStoppeTimer() {
  if (quizState.timerId !== null) {
    clearInterval(quizState.timerId);
    quizState.timerId = null;
  }
}


function quizSetzeRundenstatusZurueck() {
  quizStoppeTimer();

  quizState.fragen = [];
  quizState.aktuelleFrageIndex = 0;
  quizState.richtigeAntworten = 0;
  quizState.falscheAntworten = 0;
  quizState.beantworteteFragen = [];
  quizState.falschBeantworteteFragen = [];
  quizState.aktuelleSerie = 0;
  quizState.besteSerie = 0;
  quizState.punkte = 0;
  quizState.bonusPunkte = 0;
  quizState.hinweiseVerwendet = 0;
  quizState.quizGestartet = false;
  quizState.frageBeantwortet = false;
  quizState.frageStartzeit = null;
  quizState.quizStartzeit = null;
  quizState.quizEndzeit = null;
  quizState.verbleibendeZeit =
    quizState.zeitProFrage;
  quizState.tagesquizAktiv = false;
  quizState.wiederholungsmodus = false;
}


function quizSetzeFragenstatusZurueck() {
  quizState.frageBeantwortet = false;
  quizState.frageStartzeit = Date.now();
  quizState.verbleibendeZeit =
    quizState.zeitProFrage;

  const aktuelleFrage =
    quizHoleAktuelleFrage();

  if (aktuelleFrage) {
    aktuelleFrage.benutzerAntwort = null;
    aktuelleFrage.istRichtig = null;
    aktuelleFrage.verwendeteHinweise = 0;
    aktuelleFrage.antwortzeitMs = null;
  }
}


/* =========================================================
   AKTUELLE FRAGE UND QUIZFORTSCHRITT
========================================================= */

function quizHoleAktuelleFrage() {
  return (
    quizState.fragen[
      quizState.aktuelleFrageIndex
    ] || null
  );
}


function quizHoleAktuelleFragenNummer() {
  return quizState.aktuelleFrageIndex + 1;
}


function quizHoleGesamtzahlFragen() {
  return quizState.fragen.length;
}


function quizIstLetzteFrage() {
  return (
    quizState.aktuelleFrageIndex >=
    quizState.fragen.length - 1
  );
}


function quizBerechneFortschritt() {
  const gesamt = quizHoleGesamtzahlFragen();

  if (!gesamt) {
    return 0;
  }

  return Math.round(
    (quizHoleAktuelleFragenNummer() / gesamt) *
      100
  );
}


/* =========================================================
   QUIZ AUS EINSTELLUNGEN STARTEN
========================================================= */

function quizStarteIndividuellesQuiz() {
  const kategorien =
    quizState.ausgewaehlteKategorien;

  const schwierigkeiten =
    quizState.ausgewaehlteSchwierigkeiten;

  const fragetypen =
    quizState.ausgewaehlteFragetypen;

  if (!quizIstArrayMitInhalt(kategorien)) {
    quizZeigeMeldung(
      "Bitte wähle mindestens eine Kategorie aus.",
      "fehler"
    );

    return;
  }

  if (
    !quizIstArrayMitInhalt(
      schwierigkeiten
    )
  ) {
    quizZeigeMeldung(
      "Bitte wähle mindestens eine Schwierigkeitsstufe aus.",
      "fehler"
    );

    return;
  }

  if (!quizIstArrayMitInhalt(fragetypen)) {
    quizZeigeMeldung(
      "Bitte wähle mindestens einen Fragetyp aus.",
      "fehler"
    );

    return;
  }

  const pool = quizFiltereFragen({
    kategorien,
    schwierigkeiten,
    fragetypen
  });

  if (pool.length === 0) {
    quizZeigeMeldung(
      "Für diese Auswahl sind noch keine Fragen vorhanden.",
      "fehler"
    );

    return;
  }

  const anzahl = quizBegrenzeZahl(
    quizState.anzahlFragen,
    1,
    pool.length
  );

  const ausgewaehlteFragen =
    quizZufaelligeElemente(
      pool,
      anzahl
    );

  quizStarteQuizMitFragen(
    ausgewaehlteFragen,
    {
      tagesquiz: false,
      wiederholung: false
    }
  );
}


/* =========================================================
   QUIZ MIT VORGEGEBENEN FRAGEN STARTEN
========================================================= */

function quizStarteQuizMitFragen(
  fragen,
  {
    tagesquiz = false,
    wiederholung = false
  } = {}
) {
  if (
    !Array.isArray(fragen) ||
    fragen.length === 0
  ) {
    quizZeigeMeldung(
      "Es konnten keine Fragen für dieses Quiz gefunden werden.",
      "fehler"
    );

    return;
  }

  quizSetzeRundenstatusZurueck();

  quizState.fragen =
    quizBereiteFragenVor(fragen);

  quizState.quizGestartet = true;
  quizState.quizStartzeit = Date.now();
  quizState.tagesquizAktiv = tagesquiz;
  quizState.wiederholungsmodus =
    wiederholung;

  quizState.modus =
    quizEinstellungen.modus || "lernen";

  quizState.zeitlimitAktiv =
    Boolean(
      quizEinstellungen.zeitlimitAktiv
    );

  quizState.zeitProFrage =
    quizBegrenzeZahl(
      quizEinstellungen.zeitProFrage || 30,
      5,
      300
    );

  quizSetzeFragenstatusZurueck();

  quizErfolgFreischalten(
    "erste-frage",
    false
  );

  quizRenderQuizAnsicht();

  if (quizState.zeitlimitAktiv) {
    quizStarteFragenTimer();
  }

  quizScrollNachOben(
    document.querySelector(
      ".sf-quiz-main"
    )
  );
}


/* =========================================================
   TAGESQUIZ ERSTELLEN UND STARTEN
========================================================= */

function quizErzeugeTagesquiz() {
  const heute = quizFormatiereDatum();

  if (
    quizTagesquiz.datum === heute &&
    Array.isArray(
      quizTagesquiz.fragenIds
    ) &&
    quizTagesquiz.fragenIds.length > 0
  ) {
    return quizHoleFragenNachIds(
      quizTagesquiz.fragenIds
    );
  }

  const verfuegbareKategorien =
    quizHoleVerfuegbareKategorien().map(
      kategorie => kategorie.id
    );

  const pool = quizFiltereFragen({
    kategorien: verfuegbareKategorien,
    schwierigkeiten: [
      "einfach",
      "mittel",
      "schwer"
    ],
    fragetypen: [
      "multiple-choice",
      "wahr-falsch",
      "texteingabe",
      "mehrfachauswahl"
    ]
  });

  const fragen =
    quizZufaelligeElemente(
      pool,
      Math.min(10, pool.length)
    );

  quizTagesquiz = {
    datum: heute,
    abgeschlossen: false,
    gestartet: false,
    fragenIds: fragen.map(
      frage => frage.id
    ),
    richtig: 0,
    gesamt: fragen.length,
    punkte: 0
  };

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.tagesquiz,
    quizTagesquiz
  );

  return fragen;
}


function quizStarteTagesquiz() {
  const fragen = quizErzeugeTagesquiz();

  if (quizTagesquiz.abgeschlossen) {
    quizZeigeMeldung(
      "Das heutige Tagesquiz wurde bereits abgeschlossen.",
      "info"
    );

    quizRenderTagesquizBereich();
    return;
  }

  quizTagesquiz.gestartet = true;

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.tagesquiz,
    quizTagesquiz
  );

  quizStarteQuizMitFragen(
    fragen,
    {
      tagesquiz: true,
      wiederholung: false
    }
  );
}


/* =========================================================
   SCHWIERIGE FRAGEN UND FAVORITEN STARTEN
========================================================= */

function quizStarteSchwierigeFragen() {
  const fragen = quizHoleFragenNachIds(
    quizSchwierigeFragen
  );

  if (fragen.length === 0) {
    quizZeigeMeldung(
      "Du hast derzeit keine schwierigen Fragen gespeichert.",
      "info"
    );

    return;
  }

  quizStarteQuizMitFragen(
    fragen,
    {
      tagesquiz: false,
      wiederholung: true
    }
  );
}


function quizStarteFavoritenQuiz() {
  const fragen = quizHoleFragenNachIds(
    quizFavoriten
  );

  if (fragen.length === 0) {
    quizZeigeMeldung(
      "Du hast noch keine Favoriten gespeichert.",
      "info"
    );

    return;
  }

  quizStarteQuizMitFragen(
    fragen,
    {
      tagesquiz: false,
      wiederholung: false
    }
  );
}


/* =========================================================
   FRAGENTIMER
========================================================= */

function quizStarteFragenTimer() {
  quizStoppeTimer();

  quizState.verbleibendeZeit =
    quizState.zeitProFrage;

  quizAktualisiereTimerAnzeige();

  quizState.timerId = setInterval(
    () => {
      quizState.verbleibendeZeit -= 1;

      quizAktualisiereTimerAnzeige();

      if (
        quizState.verbleibendeZeit <= 0
      ) {
        quizStoppeTimer();

        if (!quizState.frageBeantwortet) {
          quizBeantworteWegenZeitablauf();
        }
      }
    },
    1000
  );
}


function quizAktualisiereTimerAnzeige() {
  const timerElement =
    document.querySelector(
      "[data-quiz-timer]"
    );

  const timerBalken =
    document.querySelector(
      "[data-quiz-timer-balken]"
    );

  if (timerElement) {
    timerElement.textContent =
      quizFormatiereZeit(
        quizState.verbleibendeZeit
      );
  }

  if (timerBalken) {
    const prozent = Math.max(
      0,
      Math.min(
        100,
        (
          quizState.verbleibendeZeit /
          quizState.zeitProFrage
        ) * 100
      )
    );

    timerBalken.style.width =
      `${prozent}%`;

    timerBalken.setAttribute(
      "aria-valuenow",
      String(Math.round(prozent))
    );
  }
}


function quizBeantworteWegenZeitablauf() {
  const frage = quizHoleAktuelleFrage();

  if (!frage) {
    return;
  }

  quizVerarbeiteAntwort(
    null,
    {
      zeitAbgelaufen: true
    }
  );
}


/* =========================================================
   HINWEISE
========================================================= */

function quizZeigeNaechstenHinweis() {
  const frage = quizHoleAktuelleFrage();

  if (
    !frage ||
    quizState.frageBeantwortet
  ) {
    return;
  }

  if (
    !Array.isArray(frage.hinweise) ||
    frage.hinweise.length === 0
  ) {
    quizZeigeMeldung(
      "Für diese Frage ist kein Hinweis vorhanden.",
      "info"
    );

    return;
  }

  const bereitsVerwendet =
    frage.verwendeteHinweise || 0;

  if (
    bereitsVerwendet >=
    frage.hinweise.length
  ) {
    quizZeigeMeldung(
      "Es sind keine weiteren Hinweise vorhanden.",
      "info"
    );

    return;
  }

  frage.verwendeteHinweise += 1;
  quizState.hinweiseVerwendet += 1;

  const hinweis =
    frage.hinweise[
      frage.verwendeteHinweise - 1
    ];

  const hinweisContainer =
    document.querySelector(
      "[data-quiz-hinweise]"
    );

  if (hinweisContainer) {
    const hinweisElement =
      document.createElement("div");

    hinweisElement.className =
      "sf-quiz-hinweis";

    hinweisElement.innerHTML = `
      <span class="sf-quiz-hinweis-label">
        Hinweis ${frage.verwendeteHinweise}
      </span>

      <p>
        ${quizEscapeHtml(hinweis)}
      </p>
    `;

    hinweisContainer.appendChild(
      hinweisElement
    );
  }

  quizAktualisiereHinweisButton();
}


function quizAktualisiereHinweisButton() {
  const frage = quizHoleAktuelleFrage();

  const button =
    document.querySelector(
      "[data-quiz-hinweis-button]"
    );

  if (!button || !frage) {
    return;
  }

  const anzahlHinweise =
    Array.isArray(frage.hinweise)
      ? frage.hinweise.length
      : 0;

  const verwendet =
    frage.verwendeteHinweise || 0;

  button.disabled =
    quizState.frageBeantwortet ||
    verwendet >= anzahlHinweise ||
    anzahlHinweise === 0;

  button.textContent =
    anzahlHinweise > 0
      ? `Hinweis (${verwendet}/${anzahlHinweise})`
      : "Kein Hinweis";
}


/* =========================================================
   FAVORITEN UND SCHWIERIGE FRAGEN
========================================================= */

function quizIstFavorit(frageId) {
  return quizFavoriten.includes(frageId);
}


function quizIstSchwierigeFrage(frageId) {
  return quizSchwierigeFragen.includes(
    frageId
  );
}


function quizFavoritUmschalten(frageId) {
  if (!frageId) {
    return;
  }

  if (quizIstFavorit(frageId)) {
    quizFavoriten =
      quizFavoriten.filter(
        id => id !== frageId
      );
  } else {
    quizFavoriten.push(frageId);
    quizFavoriten =
      quizEindeutigeWerte(
        quizFavoriten
      );
  }

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.favoriten,
    quizFavoriten
  );

  quizAktualisiereFavoritenButton(
    frageId
  );
}


function quizAktualisiereFavoritenButton(
  frageId
) {
  const button =
    document.querySelector(
      "[data-quiz-favorit-button]"
    );

  if (!button) {
    return;
  }

  const istFavorit =
    quizIstFavorit(frageId);

  button.classList.toggle(
    "is-active",
    istFavorit
  );

  button.setAttribute(
    "aria-pressed",
    String(istFavorit)
  );

  button.innerHTML = istFavorit
    ? "★ Favorit"
    : "☆ Favorit";
}


function quizMarkiereAlsSchwierig(frageId) {
  if (
    !frageId ||
    quizSchwierigeFragen.includes(
      frageId
    )
  ) {
    return;
  }

  quizSchwierigeFragen.push(frageId);

  quizSchwierigeFragen =
    quizEindeutigeWerte(
      quizSchwierigeFragen
    );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.schwierigeFragen,
    quizSchwierigeFragen
  );
}


function quizEntferneSchwierigeFrage(
  frageId
) {
  quizSchwierigeFragen =
    quizSchwierigeFragen.filter(
      id => id !== frageId
    );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.schwierigeFragen,
    quizSchwierigeFragen
  );
}


/* =========================================================
   ANTWORTEN AUS DEM FORMULAR LESEN
========================================================= */

function quizLeseBenutzerAntwort(frage) {
  if (!frage) {
    return null;
  }

  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch"
  ) {
    const ausgewaehlt =
      document.querySelector(
        'input[name="quiz-antwort"]:checked'
      );

    return ausgewaehlt
      ? ausgewaehlt.value
      : null;
  }

  if (frage.typ === "mehrfachauswahl") {
    return [
      ...document.querySelectorAll(
        'input[name="quiz-antwort-mehrfach"]:checked'
      )
    ].map(
      input => input.value
    );
  }

  if (frage.typ === "texteingabe") {
    const input =
      document.querySelector(
        "[data-quiz-texteingabe]"
      );

    return input
      ? input.value.trim()
      : "";
  }

  if (frage.typ === "reihenfolge") {
    return [
      ...document.querySelectorAll(
        "[data-quiz-reihenfolge-element]"
      )
    ].map(
      element =>
        element.dataset.wert
    );
  }

  if (frage.typ === "zuordnung") {
    const selects = [
      ...document.querySelectorAll(
        "[data-quiz-zuordnung-select]"
      )
    ];

    return selects.map(select => ({
      links: select.dataset.links,
      rechts: select.value
    }));
  }

  return null;
}


/* =========================================================
   ANTWORT PRÜFEN
========================================================= */

function quizPruefeAntwort(
  frage,
  benutzerAntwort
) {
  if (!frage) {
    return false;
  }

  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch"
  ) {
    return (
      quizNormalisiereText(
        benutzerAntwort
      ) ===
      quizNormalisiereText(
        frage.richtigeAntwort
      )
    );
  }

  if (frage.typ === "mehrfachauswahl") {
    const benutzer = Array.isArray(
      benutzerAntwort
    )
      ? benutzerAntwort.map(
          quizNormalisiereText
        )
      : [];

    const richtig =
      frage.richtigeAntworten.map(
        quizNormalisiereText
      );

    const benutzerSortiert = [
      ...benutzer
    ].sort();

    const richtigSortiert = [
      ...richtig
    ].sort();

    return (
      benutzerSortiert.length ===
        richtigSortiert.length &&
      benutzerSortiert.every(
        (wert, index) =>
          wert ===
          richtigSortiert[index]
      )
    );
  }

  if (frage.typ === "texteingabe") {
    const normalisierteAntwort =
      quizNormalisiereText(
        benutzerAntwort
      );

    return frage.akzeptierteAntworten.some(
      antwort =>
        quizNormalisiereText(
          antwort
        ) === normalisierteAntwort
    );
  }

  if (frage.typ === "reihenfolge") {
    if (
      !Array.isArray(
        benutzerAntwort
      )
    ) {
      return false;
    }

    const benutzer =
      benutzerAntwort.map(
        quizNormalisiereText
      );

    const richtig =
      frage.reihenfolge.map(
        quizNormalisiereText
      );

    return (
      benutzer.length ===
        richtig.length &&
      benutzer.every(
        (wert, index) =>
          wert === richtig[index]
      )
    );
  }

  if (frage.typ === "zuordnung") {
    if (
      !Array.isArray(
        benutzerAntwort
      )
    ) {
      return false;
    }

    return frage.zuordnungen.every(
      korrektesPaar => {
        const benutzerPaar =
          benutzerAntwort.find(
            paar =>
              quizNormalisiereText(
                paar.links
              ) ===
              quizNormalisiereText(
                korrektesPaar.links
              )
          );

        return (
          benutzerPaar &&
          quizNormalisiereText(
            benutzerPaar.rechts
          ) ===
            quizNormalisiereText(
              korrektesPaar.rechts
            )
        );
      }
    );
  }

  return false;
}


/* =========================================================
   ANTWORT ABSENDEN
========================================================= */

function quizAntwortAbsenden() {
  if (
    quizState.frageBeantwortet
  ) {
    return;
  }

  const frage =
    quizHoleAktuelleFrage();

  if (!frage) {
    return;
  }

  const benutzerAntwort =
    quizLeseBenutzerAntwort(
      frage
    );

  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch"
  ) {
    if (!benutzerAntwort) {
      quizZeigeMeldung(
        "Bitte wähle eine Antwort aus.",
        "fehler"
      );

      return;
    }
  }

  if (
    frage.typ === "mehrfachauswahl" &&
    (
      !Array.isArray(
        benutzerAntwort
      ) ||
      benutzerAntwort.length === 0
    )
  ) {
    quizZeigeMeldung(
      "Bitte wähle mindestens eine Antwort aus.",
      "fehler"
    );

    return;
  }

  if (
    frage.typ === "texteingabe" &&
    !String(
      benutzerAntwort || ""
    ).trim()
  ) {
    quizZeigeMeldung(
      "Bitte gib eine Antwort ein.",
      "fehler"
    );

    return;
  }

  if (
    frage.typ === "zuordnung" &&
    benutzerAntwort.some(
      paar => !paar.rechts
    )
  ) {
    quizZeigeMeldung(
      "Bitte vervollständige alle Zuordnungen.",
      "fehler"
    );

    return;
  }

  quizVerarbeiteAntwort(
    benutzerAntwort
  );
}


/* =========================================================
   ANTWORT VERARBEITEN
========================================================= */

function quizVerarbeiteAntwort(
  benutzerAntwort,
  {
    zeitAbgelaufen = false
  } = {}
) {
  if (
    quizState.frageBeantwortet
  ) {
    return;
  }

  const frage =
    quizHoleAktuelleFrage();

  if (!frage) {
    return;
  }

  quizStoppeTimer();

  const antwortzeitMs =
    quizState.frageStartzeit
      ? Date.now() -
        quizState.frageStartzeit
      : 0;

  const istRichtig =
    zeitAbgelaufen
      ? false
      : quizPruefeAntwort(
          frage,
          benutzerAntwort
        );

  frage.benutzerAntwort =
    benutzerAntwort;

  frage.istRichtig =
    istRichtig;

  frage.antwortzeitMs =
    antwortzeitMs;

  quizState.frageBeantwortet =
    true;

  if (istRichtig) {
    quizState.richtigeAntworten += 1;
    quizState.aktuelleSerie += 1;

    quizState.besteSerie =
      Math.max(
        quizState.besteSerie,
        quizState.aktuelleSerie
      );

    const punkteDaten =
      quizBerechnePunkteFuerAntwort({
        frage,
        istRichtig: true,
        serie:
          quizState.aktuelleSerie,
        antwortzeitMs,
        verwendeteHinweise:
          frage.verwendeteHinweise
      });

    quizState.punkte +=
      punkteDaten.gesamt;

    quizState.bonusPunkte +=
      punkteDaten.serienBonus +
      punkteDaten.zeitBonus;

    frage.punkteDaten =
      punkteDaten;

    if (
      quizState.wiederholungsmodus &&
      quizIstSchwierigeFrage(
        frage.id
      )
    ) {
      quizEntferneSchwierigeFrage(
        frage.id
      );

      quizStatistik =
        quizVerschmelzeMitStandard(
          QUIZ_STANDARD_STATISTIK,
          quizStatistik
        );

      const bisher =
        Number(
          quizStatistik
            .schwierigeFragenGemeistert ||
            0
        );

      quizStatistik
        .schwierigeFragenGemeistert =
        bisher + 1;
    }
  } else {
    quizState.falscheAntworten += 1;
    quizState.aktuelleSerie = 0;

    quizState
      .falschBeantworteteFragen
      .push(frage.id);

    quizMarkiereAlsSchwierig(
      frage.id
    );

    frage.punkteDaten =
      quizBerechnePunkteFuerAntwort({
        frage,
        istRichtig: false,
        serie: 0,
        antwortzeitMs,
        verwendeteHinweise:
          frage.verwendeteHinweise
      });
  }

  quizState.beantworteteFragen.push({
    id: frage.id,
    kategorie: frage.kategorie,
    schwierigkeit:
      frage.schwierigkeit,
    typ: frage.typ,
    istRichtig,
    benutzerAntwort,
    richtigeAntwort:
      frage.richtigeAntwort,
    antwortzeitMs,
    verwendeteHinweise:
      frage.verwendeteHinweise,
    punkte:
      frage.punkteDaten.gesamt
  });

  quizAktualisiereLaufendeStatistik(
    frage,
    istRichtig,
    antwortzeitMs
  );

  quizPruefeErfolgeWaehrenQuiz();

  quizDeaktiviereAntwortfelder();

  if (
    quizState.modus === "lernen"
  ) {
    quizZeigeAntwortAuswertung(
      frage,
      {
        zeitAbgelaufen
      }
    );
  } else {
    quizZeigePruefungsmodusWeiter();
  }
}


/* =========================================================
   ANTWORTFELDER SPERREN
========================================================= */

function quizDeaktiviereAntwortfelder() {
  document
    .querySelectorAll(
      ".sf-quiz-frage input, .sf-quiz-frage select, .sf-quiz-frage textarea"
    )
    .forEach(element => {
      element.disabled = true;
    });

  const antwortButton =
    document.querySelector(
      "[data-quiz-antwort-button]"
    );

  if (antwortButton) {
    antwortButton.disabled = true;
  }

  quizAktualisiereHinweisButton();
}


/* =========================================================
   NÄCHSTE FRAGE
========================================================= */

function quizNaechsteFrage() {
  if (
    !quizState.frageBeantwortet
  ) {
    quizZeigeMeldung(
      "Beantworte zuerst die aktuelle Frage.",
      "fehler"
    );

    return;
  }

  if (quizIstLetzteFrage()) {
    quizBeendeQuiz();
    return;
  }

  quizState.aktuelleFrageIndex += 1;

  quizSetzeFragenstatusZurueck();

  quizRenderQuizAnsicht();

  if (quizState.zeitlimitAktiv) {
    quizStarteFragenTimer();
  }

  quizScrollNachOben(
    document.querySelector(
      ".sf-quiz-main"
    )
  );
}

/* =========================================================
   QUIZ BEENDEN
========================================================= */

function quizBeendeQuiz() {
  quizStoppeTimer();

  quizState.quizGestartet = false;
  quizState.quizEndzeit = Date.now();

  const gesamt = quizHoleGesamtzahlFragen();

  const prozent = quizBerechneProzent(
    quizState.richtigeAntworten,
    gesamt
  );

  const dauerMs =
    quizState.quizStartzeit &&
    quizState.quizEndzeit
      ? quizState.quizEndzeit -
        quizState.quizStartzeit
      : 0;

  quizAktualisiereAbschlussStatistik({
    gesamt,
    richtig:
      quizState.richtigeAntworten,
    falsch:
      quizState.falscheAntworten,
    prozent,
    punkte:
      quizState.punkte,
    besteSerie:
      quizState.besteSerie,
    dauerMs
  });

  if (quizState.tagesquizAktiv) {
    quizSchliesseTagesquizAb({
      gesamt,
      richtig:
        quizState.richtigeAntworten,
      punkte:
        quizState.punkte
    });
  }

  quizPruefeErfolgeNachQuiz({
    gesamt,
    richtig:
      quizState.richtigeAntworten,
    falsch:
      quizState.falscheAntworten,
    prozent,
    punkte:
      quizState.punkte,
    besteSerie:
      quizState.besteSerie,
    dauerMs
  });

  quizSpeichereAlleBenutzerdaten();

  quizRenderErgebnisAnsicht({
    gesamt,
    richtig:
      quizState.richtigeAntworten,
    falsch:
      quizState.falscheAntworten,
    prozent,
    punkte:
      quizState.punkte,
    bonusPunkte:
      quizState.bonusPunkte,
    besteSerie:
      quizState.besteSerie,
    dauerMs,
    hinweise:
      quizState.hinweiseVerwendet
  });

  quizScrollNachOben(
    document.querySelector(
      ".sf-quiz-main"
    )
  );
}


/* =========================================================
   LAUFENDE STATISTIK AKTUALISIEREN
========================================================= */

function quizAktualisiereLaufendeStatistik(
  frage,
  istRichtig,
  antwortzeitMs
) {
  quizStatistik =
    quizVerschmelzeMitStandard(
      QUIZ_STANDARD_STATISTIK,
      quizStatistik
    );

  quizStatistik
    .insgesamtBeantworteteFragen += 1;

  quizStatistik
    .gesamteAntwortzeitMs +=
    Math.max(
      0,
      Number(
        antwortzeitMs || 0
      )
    );

  quizStatistik
    .durchschnittlicheAntwortzeitMs =
    quizStatistik
      .insgesamtBeantworteteFragen > 0
      ? Math.round(
          quizStatistik
            .gesamteAntwortzeitMs /
            quizStatistik
              .insgesamtBeantworteteFragen
        )
      : 0;

  if (istRichtig) {
    quizStatistik
      .insgesamtRichtigeAntworten += 1;

    if (
      antwortzeitMs > 0 &&
      (
        quizStatistik
          .schnellsteRichtigeAntwortMs ===
          null ||
        antwortzeitMs <
          quizStatistik
            .schnellsteRichtigeAntwortMs
      )
    ) {
      quizStatistik
        .schnellsteRichtigeAntwortMs =
        antwortzeitMs;
    }
  } else {
    quizStatistik
      .insgesamtFalscheAntworten += 1;
  }

  quizStatistik.verwendeteHinweise +=
    Number(
      frage.verwendeteHinweise || 0
    );

  quizStatistik.besteSerie = Math.max(
    quizStatistik.besteSerie,
    quizState.besteSerie
  );

  if (
    !quizStatistik.kategorien[
      frage.kategorie
    ]
  ) {
    quizStatistik.kategorien[
      frage.kategorie
    ] = {
      beantwortet: 0,
      richtig: 0,
      falsch: 0,
      besteProzentzahl: 0,
      gespielteQuiz: 0
    };
  }

  const kategorieStatistik =
    quizStatistik.kategorien[
      frage.kategorie
    ];

  kategorieStatistik.beantwortet += 1;

  if (istRichtig) {
    kategorieStatistik.richtig += 1;
  } else {
    kategorieStatistik.falsch += 1;
  }

  if (
    !quizStatistik.schwierigkeiten[
      frage.schwierigkeit
    ]
  ) {
    quizStatistik.schwierigkeiten[
      frage.schwierigkeit
    ] = {
      beantwortet: 0,
      richtig: 0
    };
  }

  const schwierigkeitsStatistik =
    quizStatistik.schwierigkeiten[
      frage.schwierigkeit
    ];

  schwierigkeitsStatistik
    .beantwortet += 1;

  if (istRichtig) {
    schwierigkeitsStatistik.richtig += 1;
  }

  if (
    !quizStatistik.fragetypen[
      frage.typ
    ]
  ) {
    quizStatistik.fragetypen[
      frage.typ
    ] = {
      beantwortet: 0,
      richtig: 0
    };
  }

  const fragetypStatistik =
    quizStatistik.fragetypen[
      frage.typ
    ];

  fragetypStatistik.beantwortet += 1;

  if (istRichtig) {
    fragetypStatistik.richtig += 1;
  }

  quizStatistik.letzteAktivitaet =
    new Date().toISOString();

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.statistik,
    quizStatistik
  );
}


/* =========================================================
   ABSCHLUSSSTATISTIK AKTUALISIEREN
========================================================= */

function quizAktualisiereAbschlussStatistik({
  gesamt,
  richtig,
  falsch,
  prozent,
  punkte,
  besteSerie,
  dauerMs
}) {
  quizStatistik =
    quizVerschmelzeMitStandard(
      QUIZ_STANDARD_STATISTIK,
      quizStatistik
    );

  quizStatistik
    .insgesamtGespielteQuiz += 1;

  quizStatistik.insgesamtPunkte +=
    punkte;

  quizStatistik.hoechstePunktzahl =
    Math.max(
      quizStatistik.hoechstePunktzahl,
      punkte
    );

  quizStatistik.besteSerie = Math.max(
    quizStatistik.besteSerie,
    besteSerie
  );

  if (
    gesamt > 0 &&
    richtig === gesamt
  ) {
    quizStatistik.perfekteQuiz += 1;
  }

  const beteiligteKategorien =
    quizEindeutigeWerte(
      quizState.fragen.map(
        frage => frage.kategorie
      )
    );

  beteiligteKategorien.forEach(
    kategorieId => {
      const kategorieStatistik =
        quizStatistik.kategorien[
          kategorieId
        ];

      if (!kategorieStatistik) {
        return;
      }

      kategorieStatistik
        .gespielteQuiz += 1;

      const kategorieFragen =
        quizState.fragen.filter(
          frage =>
            frage.kategorie ===
            kategorieId
        );

      const kategorieRichtig =
        kategorieFragen.filter(
          frage =>
            frage.istRichtig === true
        ).length;

      const kategorieProzent =
        quizBerechneProzent(
          kategorieRichtig,
          kategorieFragen.length
        );

      kategorieStatistik
        .besteProzentzahl =
        Math.max(
          kategorieStatistik
            .besteProzentzahl,
          kategorieProzent
        );
    }
  );

  const ergebnis = {
    datum:
      new Date().toISOString(),
    modus:
      quizState.modus,
    tagesquiz:
      quizState.tagesquizAktiv,
    wiederholung:
      quizState.wiederholungsmodus,
    gesamt,
    richtig,
    falsch,
    prozent,
    punkte,
    besteSerie,
    dauerMs,
    kategorien:
      beteiligteKategorien
  };

  quizStatistik.letzteErgebnisse.unshift(
    ergebnis
  );

  quizStatistik.letzteErgebnisse =
    quizStatistik.letzteErgebnisse.slice(
      0,
      20
    );

  quizAktualisiereTagesserie();

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.statistik,
    quizStatistik
  );
}


/* =========================================================
   TAGES-SERIE
========================================================= */

function quizAktualisiereTagesserie() {
  const heute = quizFormatiereDatum();

  const letzterTag =
    quizStatistik
      .letzterAktiverTag || null;

  if (!letzterTag) {
    quizStatistik.aktuelleTagesserie = 1;
  } else if (letzterTag === heute) {
    quizStatistik.aktuelleTagesserie =
      Math.max(
        1,
        quizStatistik
          .aktuelleTagesserie
      );
  } else {
    const differenz =
      quizTageDifferenz(
        letzterTag,
        heute
      );

    if (differenz === 1) {
      quizStatistik
        .aktuelleTagesserie += 1;
    } else {
      quizStatistik
        .aktuelleTagesserie = 1;
    }
  }

  quizStatistik.besteTagesserie =
    Math.max(
      quizStatistik.besteTagesserie,
      quizStatistik
        .aktuelleTagesserie
    );

  quizStatistik.letzterAktiverTag =
    heute;
}


/* =========================================================
   TAGESQUIZ ABSCHLIESSEN
========================================================= */

function quizSchliesseTagesquizAb({
  gesamt,
  richtig,
  punkte
}) {
  quizTagesquiz = {
    ...quizTagesquiz,
    datum:
      quizFormatiereDatum(),
    abgeschlossen: true,
    gestartet: true,
    richtig,
    gesamt,
    punkte
  };

  quizStatistik
    .abgeschlosseneTagesquiz += 1;

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.tagesquiz,
    quizTagesquiz
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.statistik,
    quizStatistik
  );
}


/* =========================================================
   ERFOLGE FREISCHALTEN
========================================================= */

function quizErfolgIstFreigeschaltet(
  erfolgId
) {
  return quizFreigeschalteteErfolge.includes(
    erfolgId
  );
}


function quizErfolgFreischalten(
  erfolgId,
  meldungAnzeigen = true
) {
  if (
    !erfolgId ||
    quizErfolgIstFreigeschaltet(
      erfolgId
    )
  ) {
    return false;
  }

  const erfolg =
    QUIZ_ERFOLGE.find(
      eintrag =>
        eintrag.id === erfolgId
    );

  if (!erfolg) {
    return false;
  }

  quizFreigeschalteteErfolge.push(
    erfolgId
  );

  quizFreigeschalteteErfolge =
    quizEindeutigeWerte(
      quizFreigeschalteteErfolge
    );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.erfolge,
    quizFreigeschalteteErfolge
  );

  if (meldungAnzeigen) {
    quizZeigeErfolgMeldung(
      erfolg
    );
  }

  return true;
}


function quizZeigeErfolgMeldung(
  erfolg
) {
  if (!erfolg) {
    return;
  }

  const bestehend =
    document.querySelector(
      ".sf-quiz-erfolg-toast"
    );

  if (bestehend) {
    bestehend.remove();
  }

  const toast =
    document.createElement("div");

  toast.className =
    "sf-quiz-erfolg-toast";

  toast.setAttribute(
    "role",
    "status"
  );

  toast.innerHTML = `
    <div class="sf-quiz-erfolg-toast-icon">
      ${quizEscapeHtml(
        erfolg.icon || "🏆"
      )}
    </div>

    <div class="sf-quiz-erfolg-toast-text">
      <strong>
        Erfolg freigeschaltet
      </strong>

      <span>
        ${quizEscapeHtml(
          erfolg.titel
        )}
      </span>

      <small>
        ${quizEscapeHtml(
          erfolg.beschreibung
        )}
      </small>
    </div>
  `;

  document.body.appendChild(
    toast
  );

  requestAnimationFrame(() => {
    toast.classList.add(
      "is-visible"
    );
  });

  window.setTimeout(() => {
    toast.classList.remove(
      "is-visible"
    );

    window.setTimeout(() => {
      toast.remove();
    }, 350);
  }, 4500);
}


/* =========================================================
   ERFOLGE WÄHREND DES QUIZ PRÜFEN
========================================================= */

function quizPruefeErfolgeWaehrenQuiz() {
  if (
    quizState.aktuelleSerie >= 3
  ) {
    quizErfolgFreischalten(
      "serie-3"
    );
  }

  if (
    quizState.aktuelleSerie >= 5
  ) {
    quizErfolgFreischalten(
      "serie-5"
    );
  }

  if (
    quizState.aktuelleSerie >= 10
  ) {
    quizErfolgFreischalten(
      "serie-10"
    );
  }

  if (
    quizStatistik
      .insgesamtBeantworteteFragen >= 10
  ) {
    quizErfolgFreischalten(
      "zehn-fragen"
    );
  }

  if (
    quizStatistik
      .insgesamtBeantworteteFragen >= 50
  ) {
    quizErfolgFreischalten(
      "fuenfzig-fragen"
    );
  }

  if (
    quizStatistik
      .insgesamtBeantworteteFragen >= 100
  ) {
    quizErfolgFreischalten(
      "hundert-fragen"
    );
  }

  if (
    quizStatistik
      .insgesamtBeantworteteFragen >= 500
  ) {
    quizErfolgFreischalten(
      "fuenfhundert-fragen"
    );
  }

  const aktuelleFrage =
    quizHoleAktuelleFrage();

  if (
    aktuelleFrage &&
    aktuelleFrage.istRichtig &&
    aktuelleFrage.antwortzeitMs > 0 &&
    aktuelleFrage.antwortzeitMs <= 3000
  ) {
    quizErfolgFreischalten(
      "blitzantwort"
    );
  }

  if (
    quizFavoriten.length >= 5
  ) {
    quizErfolgFreischalten(
      "sammler"
    );
  }
}


/* =========================================================
   ERFOLGE NACH QUIZ PRÜFEN
========================================================= */

function quizPruefeErfolgeNachQuiz({
  gesamt,
  richtig,
  falsch,
  prozent,
  punkte,
  besteSerie,
  dauerMs
}) {
  if (
    quizStatistik
      .insgesamtGespielteQuiz >= 1
  ) {
    quizErfolgFreischalten(
      "erstes-quiz"
    );
  }

  if (
    quizStatistik
      .insgesamtGespielteQuiz >= 10
  ) {
    quizErfolgFreischalten(
      "zehn-quiz"
    );
  }

  if (
    quizStatistik
      .insgesamtGespielteQuiz >= 50
  ) {
    quizErfolgFreischalten(
      "fuenfzig-quiz"
    );
  }

  if (
    gesamt >= 5 &&
    richtig === gesamt
  ) {
    quizErfolgFreischalten(
      "perfektes-quiz"
    );
  }

  if (
    prozent >= 80
  ) {
    quizErfolgFreischalten(
      "achtzig-prozent"
    );
  }

  if (
    prozent >= 90
  ) {
    quizErfolgFreischalten(
      "neunzig-prozent"
    );
  }

  if (
    punkte >= 1000
  ) {
    quizErfolgFreischalten(
      "tausend-punkte"
    );
  }

  if (
    besteSerie >= 10
  ) {
    quizErfolgFreischalten(
      "serie-10"
    );
  }

  if (
    quizState.tagesquizAktiv
  ) {
    quizErfolgFreischalten(
      "erstes-tagesquiz"
    );
  }

  if (
    quizStatistik
      .abgeschlosseneTagesquiz >= 7
  ) {
    quizErfolgFreischalten(
      "sieben-tagesquiz"
    );
  }

  if (
    quizStatistik
      .aktuelleTagesserie >= 3
  ) {
    quizErfolgFreischalten(
      "tagesserie-3"
    );
  }

  if (
    quizStatistik
      .aktuelleTagesserie >= 7
  ) {
    quizErfolgFreischalten(
      "tagesserie-7"
    );
  }

  const kategorien =
    quizEindeutigeWerte(
      quizState.fragen.map(
        frage => frage.kategorie
      )
    );

  if (
    kategorien.includes("wolken")
  ) {
    quizErfolgFreischalten(
      "wolkenstarter"
    );
  }

  if (
    kategorien.includes(
      "baeume-straeucher"
    )
  ) {
    quizErfolgFreischalten(
      "baumstarter"
    );
  }

  if (
    quizState.wiederholungsmodus &&
    richtig > 0
  ) {
    quizErfolgFreischalten(
      "fehlermeister"
    );
  }

  if (
    quizState.modus === "pruefung" &&
    gesamt >= 10 &&
    prozent >= 80
  ) {
    quizErfolgFreischalten(
      "pruefungsprofi"
    );
  }
}


/* =========================================================
   ANTWORTAUSWERTUNG IM LERNMODUS
========================================================= */

function quizZeigeAntwortAuswertung(
  frage,
  {
    zeitAbgelaufen = false
  } = {}
) {
  const container =
    document.querySelector(
      "[data-quiz-auswertung]"
    );

  if (!container) {
    return;
  }

  const istRichtig =
    frage.istRichtig === true;

  const statusTitel =
    zeitAbgelaufen
      ? "Zeit abgelaufen"
      : istRichtig
        ? "Richtig"
        : "Falsch";

  const statusSymbol =
    zeitAbgelaufen
      ? "⏱"
      : istRichtig
        ? "✓"
        : "✕";

  const richtigeAntwort =
    quizFormatiereRichtigeAntwort(
      frage
    );

  const benutzerAntwort =
    quizFormatiereBenutzerAntwort(
      frage,
      frage.benutzerAntwort
    );

  const punkteHtml =
    istRichtig &&
    frage.punkteDaten
      ? `
        <div class="sf-quiz-punkte-detail">
          <span>
            Grundpunkte:
            <strong>
              ${frage.punkteDaten.grundpunkte}
            </strong>
          </span>

          ${
            frage.punkteDaten
              .serienBonus > 0
              ? `
                <span>
                  Serienbonus:
                  <strong>
                    +${frage.punkteDaten.serienBonus}
                  </strong>
                </span>
              `
              : ""
          }

          ${
            frage.punkteDaten
              .zeitBonus > 0
              ? `
                <span>
                  Zeitbonus:
                  <strong>
                    +${frage.punkteDaten.zeitBonus}
                  </strong>
                </span>
              `
              : ""
          }

          ${
            frage.punkteDaten
              .hinweisAbzug > 0
              ? `
                <span>
                  Hinweisabzug:
                  <strong>
                    −${frage.punkteDaten.hinweisAbzug}
                  </strong>
                </span>
              `
              : ""
          }

          <span class="sf-quiz-punkte-gesamt">
            Punkte:
            <strong>
              +${frage.punkteDaten.gesamt}
            </strong>
          </span>
        </div>
      `
      : "";

  container.innerHTML = `
    <div class="
      sf-quiz-auswertung
      ${
        istRichtig
          ? "is-richtig"
          : "is-falsch"
      }
    ">
      <div class="sf-quiz-auswertung-kopf">
        <span class="sf-quiz-auswertung-symbol">
          ${statusSymbol}
        </span>

        <div>
          <h3>
            ${statusTitel}
          </h3>

          <p>
            Deine Antwort:
            <strong>
              ${quizEscapeHtml(
                benutzerAntwort
              )}
            </strong>
          </p>
        </div>
      </div>

      ${
        !istRichtig
          ? `
            <div class="sf-quiz-richtige-antwort">
              <span>
                Richtige Antwort
              </span>

              <strong>
                ${quizEscapeHtml(
                  richtigeAntwort
                )}
              </strong>
            </div>
          `
          : ""
      }

      ${
        frage.erklaerung
          ? `
            <div class="sf-quiz-erklaerung">
              <h4>
                Erklärung
              </h4>

              <p>
                ${quizEscapeHtml(
                  frage.erklaerung
                )}
              </p>
            </div>
          `
          : ""
      }

      ${punkteHtml}

      <button
        type="button"
        class="sf-quiz-primary-button"
        data-quiz-weiter-button
      >
        ${
          quizIstLetzteFrage()
            ? "Quiz abschliessen"
            : "Nächste Frage"
        }
      </button>
    </div>
  `;

  const weiterButton =
    container.querySelector(
      "[data-quiz-weiter-button]"
    );

  if (weiterButton) {
    weiterButton.addEventListener(
      "click",
      quizNaechsteFrage
    );
  }
}


/* =========================================================
   PRÜFUNGSMODUS: DIREKT WEITER
========================================================= */

function quizZeigePruefungsmodusWeiter() {
  const container =
    document.querySelector(
      "[data-quiz-auswertung]"
    );

  if (!container) {
    return;
  }

  container.innerHTML = `
    <div class="
      sf-quiz-auswertung
      sf-quiz-pruefungs-weiter
    ">
      <p>
        Deine Antwort wurde gespeichert.
      </p>

      <button
        type="button"
        class="sf-quiz-primary-button"
        data-quiz-weiter-button
      >
        ${
          quizIstLetzteFrage()
            ? "Prüfung abschliessen"
            : "Nächste Frage"
        }
      </button>
    </div>
  `;

  const button =
    container.querySelector(
      "[data-quiz-weiter-button]"
    );

  if (button) {
    button.addEventListener(
      "click",
      quizNaechsteFrage
    );
  }
}


/* =========================================================
   ANTWORTEN FÜR DIE ANZEIGE FORMATIEREN
========================================================= */

function quizFormatiereRichtigeAntwort(
  frage
) {
  if (!frage) {
    return "";
  }

  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch" ||
    frage.typ === "texteingabe"
  ) {
    return String(
      frage.richtigeAntwort || ""
    );
  }

  if (
    frage.typ === "mehrfachauswahl"
  ) {
    return frage.richtigeAntworten.join(
      ", "
    );
  }

  if (
    frage.typ === "reihenfolge"
  ) {
    return frage.reihenfolge.join(
      " → "
    );
  }

  if (
    frage.typ === "zuordnung"
  ) {
    return frage.zuordnungen
      .map(
        paar =>
          `${paar.links} = ${paar.rechts}`
      )
      .join("; ");
  }

  return "";
}


function quizFormatiereBenutzerAntwort(
  frage,
  antwort
) {
  if (
    antwort === null ||
    antwort === undefined ||
    antwort === ""
  ) {
    return "Keine Antwort";
  }

  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch" ||
    frage.typ === "texteingabe"
  ) {
    return String(antwort);
  }

  if (
    frage.typ === "mehrfachauswahl"
  ) {
    return Array.isArray(antwort)
      ? antwort.join(", ")
      : "Keine Antwort";
  }

  if (
    frage.typ === "reihenfolge"
  ) {
    return Array.isArray(antwort)
      ? antwort.join(" → ")
      : "Keine Antwort";
  }

  if (
    frage.typ === "zuordnung"
  ) {
    return Array.isArray(antwort)
      ? antwort
          .map(
            paar =>
              `${paar.links} = ${
                paar.rechts ||
                "nicht gewählt"
              }`
          )
          .join("; ")
      : "Keine Antwort";
  }

  return String(antwort);
}


/* =========================================================
   MELDUNGEN
========================================================= */

function quizZeigeMeldung(
  text,
  typ = "info"
) {
  const vorhandeneMeldung =
    document.querySelector(
      ".sf-quiz-meldung"
    );

  if (vorhandeneMeldung) {
    vorhandeneMeldung.remove();
  }

  const meldung =
    document.createElement("div");

  meldung.className = `
    sf-quiz-meldung
    sf-quiz-meldung-${typ}
  `;

  meldung.setAttribute(
    "role",
    typ === "fehler"
      ? "alert"
      : "status"
  );

  meldung.innerHTML = `
    <span class="sf-quiz-meldung-text">
      ${quizEscapeHtml(text)}
    </span>

    <button
      type="button"
      class="sf-quiz-meldung-schliessen"
      aria-label="Meldung schliessen"
    >
      ×
    </button>
  `;

  document.body.appendChild(
    meldung
  );

  requestAnimationFrame(() => {
    meldung.classList.add(
      "is-visible"
    );
  });

  const schliessenButton =
    meldung.querySelector(
      ".sf-quiz-meldung-schliessen"
    );

  if (schliessenButton) {
    schliessenButton.addEventListener(
      "click",
      () => {
        meldung.remove();
      }
    );
  }

  window.setTimeout(() => {
    if (!meldung.isConnected) {
      return;
    }

    meldung.classList.remove(
      "is-visible"
    );

    window.setTimeout(() => {
      meldung.remove();
    }, 300);
  }, 4000);
}


/* =========================================================
   QUIZ ABBRECHEN
========================================================= */

function quizAbbrechen() {
  if (
    quizState.quizGestartet &&
    quizState.beantworteteFragen.length > 0
  ) {
    const bestaetigt =
      window.confirm(
        "Möchtest du das laufende Quiz wirklich abbrechen? Der aktuelle Durchgang wird nicht als abgeschlossen gespeichert."
      );

    if (!bestaetigt) {
      return;
    }
  }

  quizSetzeRundenstatusZurueck();

  quizRenderStartseite();

  quizScrollNachOben(
    document.querySelector(
      ".sf-quiz-main"
    )
  );
}


/* =========================================================
   FALSCHE FRAGEN ERNEUT STARTEN
========================================================= */

function quizStarteFalscheFragenErneut() {
  const frageIds =
    quizEindeutigeWerte(
      quizState
        .falschBeantworteteFragen
    );

  const fragen =
    quizHoleFragenNachIds(
      frageIds
    );

  if (fragen.length === 0) {
    quizZeigeMeldung(
      "In diesem Durchgang gab es keine falschen Antworten.",
      "info"
    );

    return;
  }

  quizStarteQuizMitFragen(
    fragen,
    {
      tagesquiz: false,
      wiederholung: true
    }
  );
}

/* =========================================================
   GRUNDGERÜST DER QUIZ-SEITE RENDERN
========================================================= */

function quizRenderApp() {
  const root =
    document.querySelector(
      QUIZ_CONFIG.rootSelector
    );

  if (!root) {
    console.warn(
      `Quiz: Das Root-Element "${QUIZ_CONFIG.rootSelector}" wurde nicht gefunden.`
    );

    return;
  }

  root.innerHTML = `
    <div class="sf-quiz-app">
      <aside class="sf-quiz-sidebar">
        <div class="sf-quiz-sidebar-header">
          <span class="sf-quiz-logo-icon">
            🧠
          </span>

          <div>
            <strong>
              Quiz
            </strong>

            <small>
              Lernen und prüfen
            </small>
          </div>
        </div>

        <nav
          class="sf-quiz-navigation"
          aria-label="Quiz-Navigation"
        >
          ${QUIZ_SEITEN.map(
            seite => `
              <button
                type="button"
                class="sf-quiz-nav-button ${
                  quizState.aktiveSeite === seite.id
                    ? "is-active"
                    : ""
                }"
                data-quiz-seite="${quizEscapeHtml(
                  seite.id
                )}"
              >
                <span class="sf-quiz-nav-icon">
                  ${quizEscapeHtml(
                    seite.icon
                  )}
                </span>

                <span>
                  ${quizEscapeHtml(
                    seite.titel
                  )}
                </span>
              </button>
            `
          ).join("")}
        </nav>

        <div class="sf-quiz-sidebar-footer">
          <div class="sf-quiz-sidebar-stat">
            <span>
              Punkte
            </span>

            <strong>
              ${quizFormatiereZahl(
                quizStatistik.insgesamtPunkte
              )}
            </strong>
          </div>

          <div class="sf-quiz-sidebar-stat">
            <span>
              Tagesserie
            </span>

            <strong>
              ${quizStatistik.aktuelleTagesserie}
            </strong>
          </div>
        </div>
      </aside>

      <main class="sf-quiz-main">
        <div
          class="sf-quiz-content"
          data-quiz-content
        ></div>
      </main>
    </div>
  `;

  quizBindeNavigation();

  quizRenderAktiveSeite();
}


/* =========================================================
   NAVIGATION
========================================================= */

function quizBindeNavigation() {
  document
    .querySelectorAll(
      "[data-quiz-seite]"
    )
    .forEach(button => {
      button.addEventListener(
        "click",
        () => {
          const seite =
            button.dataset.quizSeite;

          quizWechsleSeite(seite);
        }
      );
    });
}


function quizWechsleSeite(seiteId) {
  const seiteExistiert =
    QUIZ_SEITEN.some(
      seite => seite.id === seiteId
    );

  if (!seiteExistiert) {
    return;
  }

  if (
    quizState.quizGestartet &&
    seiteId !== "quiz"
  ) {
    const bestaetigt =
      window.confirm(
        "Das laufende Quiz wird abgebrochen. Möchtest du die Seite wirklich wechseln?"
      );

    if (!bestaetigt) {
      return;
    }

    quizSetzeRundenstatusZurueck();
  }

  quizState.aktiveSeite = seiteId;

  document
    .querySelectorAll(
      "[data-quiz-seite]"
    )
    .forEach(button => {
      button.classList.toggle(
        "is-active",
        button.dataset.quizSeite ===
          seiteId
      );
    });

  quizRenderAktiveSeite();

  quizScrollNachOben(
    document.querySelector(
      ".sf-quiz-main"
    )
  );
}


function quizRenderAktiveSeite() {
  switch (quizState.aktiveSeite) {
    case "quiz":
      if (quizState.quizGestartet) {
        quizRenderQuizAnsicht();
      } else {
        quizRenderStartseite();
      }
      break;

    case "lernkarten":
      quizRenderLernkarten();
      break;

    case "statistik":
      quizRenderStatistik();
      break;

    case "erfolge":
      quizRenderErfolge();
      break;

    case "einstellungen":
      quizRenderEinstellungen();
      break;

    default:
      quizRenderStartseite();
      break;
  }
}


/* =========================================================
   STARTSEITE
========================================================= */

function quizRenderStartseite() {
  const container =
    document.querySelector(
      "[data-quiz-content]"
    );

  if (!container) {
    return;
  }

  quizState.aktiveSeite = "quiz";

  quizAktualisiereNavigation();

  const verfuegbareKategorien =
    quizHoleVerfuegbareKategorien();

  const verfuegbareFragetypen =
    quizHoleVerfuegbareFragetypen();

  container.innerHTML = `
    <section class="sf-quiz-startseite">
      <header class="sf-quiz-hero">
        <div class="sf-quiz-hero-text">
          <span class="sf-quiz-kicker">
            Interaktives Lernsystem
          </span>

          <h1>
            Wissen testen und gezielt verbessern
          </h1>

          <p>
            Übe Wolken, Bäume und Sträucher mit
            unterschiedlichen Fragetypen,
            Schwierigkeitsstufen und einem
            persönlichen Lernfortschritt.
          </p>
        </div>

        <div class="sf-quiz-hero-score">
          <span>
            Gesamtpunkte
          </span>

          <strong>
            ${quizFormatiereZahl(
              quizStatistik.insgesamtPunkte
            )}
          </strong>

          <small>
            ${quizStatistik.insgesamtGespielteQuiz}
            abgeschlossene Quiz
          </small>
        </div>
      </header>

      <section
        class="sf-quiz-dashboard-grid"
      >
        <article class="sf-quiz-dashboard-card sf-quiz-tagesquiz-card">
          <div class="sf-quiz-card-icon">
            ☀️
          </div>

          <div class="sf-quiz-card-content">
            <span class="sf-quiz-card-label">
              Tagesquiz
            </span>

            <h2>
              Deine tägliche Herausforderung
            </h2>

            <p>
              Zehn gemischte Fragen aus allen
              verfügbaren Kategorien.
            </p>

            <div
              data-quiz-tagesquiz-bereich
            ></div>
          </div>
        </article>

        <article class="sf-quiz-dashboard-card">
          <div class="sf-quiz-card-icon">
            🔁
          </div>

          <div class="sf-quiz-card-content">
            <span class="sf-quiz-card-label">
              Fehlerwiederholung
            </span>

            <h2>
              Schwierige Fragen üben
            </h2>

            <p>
              Wiederhole alle Fragen, die du
              bisher falsch beantwortet hast.
            </p>

            <button
              type="button"
              class="sf-quiz-secondary-button"
              data-quiz-schwierige-starten
              ${
                quizSchwierigeFragen.length === 0
                  ? "disabled"
                  : ""
              }
            >
              ${
                quizSchwierigeFragen.length > 0
                  ? `${quizSchwierigeFragen.length} Fragen üben`
                  : "Keine schwierigen Fragen"
              }
            </button>
          </div>
        </article>

        <article class="sf-quiz-dashboard-card">
          <div class="sf-quiz-card-icon">
            ★
          </div>

          <div class="sf-quiz-card-content">
            <span class="sf-quiz-card-label">
              Favoriten
            </span>

            <h2>
              Gespeicherte Fragen
            </h2>

            <p>
              Starte ein Quiz nur mit deinen
              markierten Lieblingsfragen.
            </p>

            <button
              type="button"
              class="sf-quiz-secondary-button"
              data-quiz-favoriten-starten
              ${
                quizFavoriten.length === 0
                  ? "disabled"
                  : ""
              }
            >
              ${
                quizFavoriten.length > 0
                  ? `${quizFavoriten.length} Favoriten starten`
                  : "Noch keine Favoriten"
              }
            </button>
          </div>
        </article>
      </section>

      <section class="sf-quiz-konfigurator">
        <div class="sf-quiz-section-header">
          <div>
            <span class="sf-quiz-kicker">
              Individuelles Quiz
            </span>

            <h2>
              Stelle dein Quiz zusammen
            </h2>

            <p>
              Wähle Kategorien,
              Schwierigkeitsstufen und
              Fragetypen.
            </p>
          </div>
        </div>

        <div class="sf-quiz-konfigurator-grid">
          <div class="sf-quiz-optionengruppe">
            <div class="sf-quiz-optionengruppe-kopf">
              <h3>
                Kategorien
              </h3>

              <button
                type="button"
                class="sf-quiz-text-button"
                data-quiz-alle-kategorien
              >
                Alle auswählen
              </button>
            </div>

            <div class="sf-quiz-auswahl-grid">
              ${verfuegbareKategorien.map(
                kategorie => `
                  <label class="sf-quiz-auswahlkarte">
                    <input
                      type="checkbox"
                      name="quiz-kategorie"
                      value="${quizEscapeHtml(
                        kategorie.id
                      )}"
                      ${
                        quizState
                          .ausgewaehlteKategorien
                          .includes(kategorie.id)
                          ? "checked"
                          : ""
                      }
                    >

                    <span class="sf-quiz-auswahlkarte-inhalt">
                      <span class="sf-quiz-auswahlkarte-icon">
                        ${quizEscapeHtml(
                          kategorie.icon
                        )}
                      </span>

                      <strong>
                        ${quizEscapeHtml(
                          kategorie.titel
                        )}
                      </strong>

                      <small>
                        ${quizZaehleFragenProKategorie(
                          kategorie.id
                        )}
                        Fragen
                      </small>
                    </span>
                  </label>
                `
              ).join("")}
            </div>
          </div>

          <div class="sf-quiz-optionengruppe">
            <div class="sf-quiz-optionengruppe-kopf">
              <h3>
                Schwierigkeit
              </h3>
            </div>

            <div class="sf-quiz-auswahl-grid sf-quiz-auswahl-grid-kompakt">
              ${Object.values(
                QUIZ_SCHWIERIGKEITEN
              ).map(
                schwierigkeit => `
                  <label class="sf-quiz-auswahlkarte">
                    <input
                      type="checkbox"
                      name="quiz-schwierigkeit"
                      value="${quizEscapeHtml(
                        schwierigkeit.id
                      )}"
                      ${
                        quizState
                          .ausgewaehlteSchwierigkeiten
                          .includes(
                            schwierigkeit.id
                          )
                          ? "checked"
                          : ""
                      }
                    >

                    <span class="sf-quiz-auswahlkarte-inhalt">
                      <span class="sf-quiz-schwierigkeitspunkt sf-quiz-schwierigkeit-${quizEscapeHtml(
                        schwierigkeit.id
                      )}">
                      </span>

                      <strong>
                        ${quizEscapeHtml(
                          schwierigkeit.titel
                        )}
                      </strong>

                      <small>
                        ${quizZaehleFragenProSchwierigkeit(
                          schwierigkeit.id
                        )}
                        Fragen
                      </small>
                    </span>
                  </label>
                `
              ).join("")}
            </div>
          </div>

          <div class="sf-quiz-optionengruppe">
            <div class="sf-quiz-optionengruppe-kopf">
              <h3>
                Fragetypen
              </h3>

              <button
                type="button"
                class="sf-quiz-text-button"
                data-quiz-alle-fragetypen
              >
                Alle auswählen
              </button>
            </div>

            <div class="sf-quiz-auswahl-grid">
              ${verfuegbareFragetypen.map(
                fragetyp => `
                  <label class="sf-quiz-auswahlkarte">
                    <input
                      type="checkbox"
                      name="quiz-fragetyp"
                      value="${quizEscapeHtml(
                        fragetyp.id
                      )}"
                      ${
                        quizState
                          .ausgewaehlteFragetypen
                          .includes(fragetyp.id)
                          ? "checked"
                          : ""
                      }
                    >

                    <span class="sf-quiz-auswahlkarte-inhalt">
                      <span class="sf-quiz-auswahlkarte-icon">
                        ${quizEscapeHtml(
                          fragetyp.icon
                        )}
                      </span>

                      <strong>
                        ${quizEscapeHtml(
                          fragetyp.titel
                        )}
                      </strong>

                      <small>
                        ${quizZaehleFragenProFragetyp(
                          fragetyp.id
                        )}
                        Fragen
                      </small>
                    </span>
                  </label>
                `
              ).join("")}
            </div>
          </div>

          <div class="sf-quiz-optionengruppe">
            <div class="sf-quiz-optionengruppe-kopf">
              <h3>
                Umfang und Modus
              </h3>
            </div>

            <div class="sf-quiz-form-grid">
              <label class="sf-quiz-form-field">
                <span>
                  Anzahl Fragen
                </span>

                <input
                  type="number"
                  min="1"
                  max="50"
                  value="${quizState.anzahlFragen}"
                  data-quiz-anzahl-fragen
                >
              </label>

              <label class="sf-quiz-form-field">
                <span>
                  Modus
                </span>

                <select data-quiz-modus>
                  <option
                    value="lernen"
                    ${
                      quizEinstellungen.modus ===
                      "lernen"
                        ? "selected"
                        : ""
                    }
                  >
                    Lernmodus
                  </option>

                  <option
                    value="pruefung"
                    ${
                      quizEinstellungen.modus ===
                      "pruefung"
                        ? "selected"
                        : ""
                    }
                  >
                    Prüfungsmodus
                  </option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div class="sf-quiz-konfigurator-footer">
          <div data-quiz-pool-info>
            ${quizRenderPoolInformation()}
          </div>

          <button
            type="button"
            class="sf-quiz-primary-button sf-quiz-start-button"
            data-quiz-individuell-starten
          >
            Quiz starten
          </button>
        </div>
      </section>
    </section>
  `;

  quizRenderTagesquizBereich();

  quizBindeStartseitenEvents();
}


/* =========================================================
   TAGESQUIZ-BEREICH
========================================================= */

function quizRenderTagesquizBereich() {
  const container =
    document.querySelector(
      "[data-quiz-tagesquiz-bereich]"
    );

  if (!container) {
    return;
  }

  const heute =
    quizFormatiereDatum();

  if (quizTagesquiz.datum !== heute) {
    quizErzeugeTagesquiz();
  }

  if (quizTagesquiz.abgeschlossen) {
    const prozent =
      quizBerechneProzent(
        quizTagesquiz.richtig,
        quizTagesquiz.gesamt
      );

    container.innerHTML = `
      <div class="sf-quiz-tagesquiz-erledigt">
        <span class="sf-quiz-status-badge is-success">
          Abgeschlossen
        </span>

        <strong>
          ${quizTagesquiz.richtig}
          von
          ${quizTagesquiz.gesamt}
          richtig
        </strong>

        <span>
          ${prozent}% ·
          ${quizFormatiereZahl(
            quizTagesquiz.punkte
          )}
          Punkte
        </span>
      </div>
    `;

    return;
  }

  container.innerHTML = `
    <button
      type="button"
      class="sf-quiz-primary-button"
      data-quiz-tagesquiz-starten
    >
      Tagesquiz starten
    </button>
  `;

  const button =
    container.querySelector(
      "[data-quiz-tagesquiz-starten]"
    );

  if (button) {
    button.addEventListener(
      "click",
      quizStarteTagesquiz
    );
  }
}


/* =========================================================
   POOL-INFORMATION
========================================================= */

function quizHoleAktuellenFragenpool() {
  return quizFiltereFragen({
    kategorien:
      quizState.ausgewaehlteKategorien,
    schwierigkeiten:
      quizState
        .ausgewaehlteSchwierigkeiten,
    fragetypen:
      quizState.ausgewaehlteFragetypen
  });
}


function quizRenderPoolInformation() {
  const pool =
    quizHoleAktuellenFragenpool();

  const gewuenschteAnzahl =
    quizBegrenzeZahl(
      quizState.anzahlFragen,
      1,
      Math.max(1, pool.length)
    );

  return `
    <p class="sf-quiz-pool-info">
      <strong>
        ${pool.length}
      </strong>
      passende Fragen verfügbar.

      ${
        pool.length > 0
          ? `
            Es werden
            <strong>
              ${Math.min(
                gewuenschteAnzahl,
                pool.length
              )}
            </strong>
            Fragen verwendet.
          `
          : `
            Ändere deine Auswahl, um
            Fragen zu erhalten.
          `
      }
    </p>
  `;
}


function quizAktualisierePoolInformation() {
  const container =
    document.querySelector(
      "[data-quiz-pool-info]"
    );

  if (container) {
    container.innerHTML =
      quizRenderPoolInformation();
  }
}


/* =========================================================
   STARTSEITEN-EVENTS
========================================================= */

function quizBindeStartseitenEvents() {
  document
    .querySelectorAll(
      'input[name="quiz-kategorie"]'
    )
    .forEach(input => {
      input.addEventListener(
        "change",
        quizSynchronisiereStartauswahl
      );
    });

  document
    .querySelectorAll(
      'input[name="quiz-schwierigkeit"]'
    )
    .forEach(input => {
      input.addEventListener(
        "change",
        quizSynchronisiereStartauswahl
      );
    });

  document
    .querySelectorAll(
      'input[name="quiz-fragetyp"]'
    )
    .forEach(input => {
      input.addEventListener(
        "change",
        quizSynchronisiereStartauswahl
      );
    });

  const anzahlInput =
    document.querySelector(
      "[data-quiz-anzahl-fragen]"
    );

  if (anzahlInput) {
    anzahlInput.addEventListener(
      "input",
      () => {
        quizState.anzahlFragen =
          quizBegrenzeZahl(
            Number(
              anzahlInput.value
            ) || 1,
            1,
            50
          );

        quizAktualisierePoolInformation();
      }
    );
  }

  const modusSelect =
    document.querySelector(
      "[data-quiz-modus]"
    );

  if (modusSelect) {
    modusSelect.addEventListener(
      "change",
      () => {
        quizEinstellungen.modus =
          modusSelect.value;

        quizState.modus =
          modusSelect.value;

        quizStorageSchreiben(
          QUIZ_STORAGE_KEYS.einstellungen,
          quizEinstellungen
        );
      }
    );
  }

  const startButton =
    document.querySelector(
      "[data-quiz-individuell-starten]"
    );

  if (startButton) {
    startButton.addEventListener(
      "click",
      quizStarteIndividuellesQuiz
    );
  }

  const schwierigeButton =
    document.querySelector(
      "[data-quiz-schwierige-starten]"
    );

  if (schwierigeButton) {
    schwierigeButton.addEventListener(
      "click",
      quizStarteSchwierigeFragen
    );
  }

  const favoritenButton =
    document.querySelector(
      "[data-quiz-favoriten-starten]"
    );

  if (favoritenButton) {
    favoritenButton.addEventListener(
      "click",
      quizStarteFavoritenQuiz
    );
  }

  const alleKategorienButton =
    document.querySelector(
      "[data-quiz-alle-kategorien]"
    );

  if (alleKategorienButton) {
    alleKategorienButton.addEventListener(
      "click",
      () => {
        const inputs = [
          ...document.querySelectorAll(
            'input[name="quiz-kategorie"]'
          )
        ];

        const alleAktiv =
          inputs.every(
            input => input.checked
          );

        inputs.forEach(input => {
          input.checked =
            !alleAktiv;
        });

        quizSynchronisiereStartauswahl();
      }
    );
  }

  const alleFragetypenButton =
    document.querySelector(
      "[data-quiz-alle-fragetypen]"
    );

  if (alleFragetypenButton) {
    alleFragetypenButton.addEventListener(
      "click",
      () => {
        const inputs = [
          ...document.querySelectorAll(
            'input[name="quiz-fragetyp"]'
          )
        ];

        const alleAktiv =
          inputs.every(
            input => input.checked
          );

        inputs.forEach(input => {
          input.checked =
            !alleAktiv;
        });

        quizSynchronisiereStartauswahl();
      }
    );
  }
}


function quizSynchronisiereStartauswahl() {
  quizState.ausgewaehlteKategorien = [
    ...document.querySelectorAll(
      'input[name="quiz-kategorie"]:checked'
    )
  ].map(input => input.value);

  quizState
    .ausgewaehlteSchwierigkeiten = [
      ...document.querySelectorAll(
        'input[name="quiz-schwierigkeit"]:checked'
      )
    ].map(input => input.value);

  quizState.ausgewaehlteFragetypen = [
    ...document.querySelectorAll(
      'input[name="quiz-fragetyp"]:checked'
    )
  ].map(input => input.value);

  quizAktualisierePoolInformation();
}


/* =========================================================
   NAVIGATION AKTUALISIEREN
========================================================= */

function quizAktualisiereNavigation() {
  document
    .querySelectorAll(
      "[data-quiz-seite]"
    )
    .forEach(button => {
      button.classList.toggle(
        "is-active",
        button.dataset.quizSeite ===
          quizState.aktiveSeite
      );
    });
}


/* =========================================================
   QUIZANSICHT
========================================================= */

function quizRenderQuizAnsicht() {
  const container =
    document.querySelector(
      "[data-quiz-content]"
    );

  const frage =
    quizHoleAktuelleFrage();

  if (!container || !frage) {
    return;
  }

  quizState.aktiveSeite = "quiz";

  quizAktualisiereNavigation();

  const kategorie =
    QUIZ_KATEGORIEN.find(
      eintrag =>
        eintrag.id === frage.kategorie
    );

  const schwierigkeit =
    quizHoleSchwierigkeit(
      frage.schwierigkeit
    );

  const fragetyp =
    QUIZ_FRAGETYPEN[
      frage.typ
    ] || {
      titel: frage.typ,
      icon: "?"
    };

  const fortschritt =
    quizBerechneFortschritt();

  container.innerHTML = `
    <section class="sf-quiz-spielansicht">
      <header class="sf-quiz-spiel-kopf">
        <div class="sf-quiz-spiel-kopf-oben">
          <button
            type="button"
            class="sf-quiz-icon-button"
            data-quiz-abbrechen
            aria-label="Quiz abbrechen"
          >
            ←
          </button>

          <div class="sf-quiz-spiel-titel">
            <span>
              ${
                quizState.tagesquizAktiv
                  ? "Tagesquiz"
                  : quizState.wiederholungsmodus
                    ? "Fehlerwiederholung"
                    : quizState.modus ===
                      "pruefung"
                      ? "Prüfungsmodus"
                      : "Lernmodus"
              }
            </span>

            <strong>
              Frage
              ${quizHoleAktuelleFragenNummer()}
              von
              ${quizHoleGesamtzahlFragen()}
            </strong>
          </div>

          <div class="sf-quiz-spiel-punkte">
            <span>
              Punkte
            </span>

            <strong>
              ${quizFormatiereZahl(
                quizState.punkte
              )}
            </strong>
          </div>
        </div>

        <div class="sf-quiz-fortschritt">
          <div
            class="sf-quiz-fortschritt-balken"
            style="width: ${fortschritt}%"
          ></div>
        </div>

        ${
          quizState.zeitlimitAktiv
            ? `
              <div class="sf-quiz-timer">
                <span>
                  Verbleibende Zeit:
                </span>

                <strong data-quiz-timer>
                  ${quizFormatiereZeit(
                    quizState.verbleibendeZeit
                  )}
                </strong>

                <div class="sf-quiz-timer-track">
                  <div
                    class="sf-quiz-timer-balken"
                    data-quiz-timer-balken
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow="100"
                  ></div>
                </div>
              </div>
            `
            : ""
        }
      </header>

      <article class="sf-quiz-frage">
        <div class="sf-quiz-frage-meta">
          <span class="sf-quiz-meta-badge">
            ${quizEscapeHtml(
              kategorie
                ? kategorie.icon
                : "📚"
            )}
            ${quizEscapeHtml(
              kategorie
                ? kategorie.titel
                : frage.kategorie
            )}
          </span>

          <span class="sf-quiz-meta-badge">
            ${quizEscapeHtml(
              fragetyp.icon
            )}
            ${quizEscapeHtml(
              fragetyp.titel
            )}
          </span>

          <span class="sf-quiz-meta-badge sf-quiz-meta-${quizEscapeHtml(
            frage.schwierigkeit
          )}">
            ${quizEscapeHtml(
              schwierigkeit
                ? schwierigkeit.titel
                : frage.schwierigkeit
            )}
          </span>

          <button
            type="button"
            class="sf-quiz-favorit-button ${
              quizIstFavorit(frage.id)
                ? "is-active"
                : ""
            }"
            data-quiz-favorit-button
            aria-pressed="${
              quizIstFavorit(frage.id)
                ? "true"
                : "false"
            }"
          >
            ${
              quizIstFavorit(frage.id)
                ? "★ Favorit"
                : "☆ Favorit"
            }
          </button>
        </div>

        <div class="sf-quiz-frage-text">
          <h1>
            ${quizEscapeHtml(
              frage.frage
            )}
          </h1>
        </div>

        <div class="sf-quiz-antwortbereich">
          ${quizRenderAntwortfeld(
            frage
          )}
        </div>

        <div
          class="sf-quiz-hinweise"
          data-quiz-hinweise
        ></div>

        <div class="sf-quiz-frage-aktionen">
          <button
            type="button"
            class="sf-quiz-secondary-button"
            data-quiz-hinweis-button
          >
            Hinweis
          </button>

          <button
            type="button"
            class="sf-quiz-primary-button"
            data-quiz-antwort-button
          >
            Antwort prüfen
          </button>
        </div>

        <div
          data-quiz-auswertung
        ></div>
      </article>

      <aside class="sf-quiz-live-statistik">
        <div>
          <span>
            Richtig
          </span>

          <strong>
            ${quizState.richtigeAntworten}
          </strong>
        </div>

        <div>
          <span>
            Falsch
          </span>

          <strong>
            ${quizState.falscheAntworten}
          </strong>
        </div>

        <div>
          <span>
            Serie
          </span>

          <strong>
            ${quizState.aktuelleSerie}
          </strong>
        </div>
      </aside>
    </section>
  `;

  quizBindeQuizEvents(frage);

  quizAktualisiereHinweisButton();

  if (quizState.zeitlimitAktiv) {
    quizAktualisiereTimerAnzeige();
  }
}


/* =========================================================
   ANTWORTFELDER RENDERN
========================================================= */

function quizRenderAntwortfeld(frage) {
  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch"
  ) {
    return `
      <div class="sf-quiz-antwortliste">
        ${frage.antworten.map(
          (antwort, index) => `
            <label class="sf-quiz-antwortoption">
              <input
                type="radio"
                name="quiz-antwort"
                value="${quizEscapeHtml(
                  antwort
                )}"
              >

              <span class="sf-quiz-antwortbuchstabe">
                ${String.fromCharCode(
                  65 + index
                )}
              </span>

              <span class="sf-quiz-antworttext">
                ${quizEscapeHtml(
                  antwort
                )}
              </span>
            </label>
          `
        ).join("")}
      </div>
    `;
  }

  if (
    frage.typ === "mehrfachauswahl"
  ) {
    return `
      <p class="sf-quiz-antwort-hinweis">
        Es können mehrere Antworten richtig sein.
      </p>

      <div class="sf-quiz-antwortliste">
        ${frage.antworten.map(
          (antwort, index) => `
            <label class="sf-quiz-antwortoption">
              <input
                type="checkbox"
                name="quiz-antwort-mehrfach"
                value="${quizEscapeHtml(
                  antwort
                )}"
              >

              <span class="sf-quiz-checkbox-symbol">
                ✓
              </span>

              <span class="sf-quiz-antworttext">
                ${quizEscapeHtml(
                  antwort
                )}
              </span>
            </label>
          `
        ).join("")}
      </div>
    `;
  }

  if (frage.typ === "texteingabe") {
    return `
      <label class="sf-quiz-texteingabe-label">
        <span>
          Deine Antwort
        </span>

        <input
          type="text"
          class="sf-quiz-texteingabe"
          data-quiz-texteingabe
          autocomplete="off"
          spellcheck="false"
          placeholder="Antwort eingeben"
        >
      </label>
    `;
  }

  if (frage.typ === "reihenfolge") {
    return `
      <p class="sf-quiz-antwort-hinweis">
        Ziehe die Elemente in die richtige
        Reihenfolge oder verwende die Pfeile.
      </p>

      <div
        class="sf-quiz-reihenfolge-liste"
        data-quiz-reihenfolge-liste
      >
        ${frage.antworten.map(
          (antwort, index) => `
            <div
              class="sf-quiz-reihenfolge-element"
              data-quiz-reihenfolge-element
              data-wert="${quizEscapeHtml(
                antwort
              )}"
              draggable="true"
            >
              <span class="sf-quiz-drag-handle">
                ☰
              </span>

              <span class="sf-quiz-reihenfolge-text">
                ${quizEscapeHtml(
                  antwort
                )}
              </span>

              <div class="sf-quiz-reihenfolge-buttons">
                <button
                  type="button"
                  data-quiz-nach-oben
                  aria-label="Nach oben verschieben"
                  ${
                    index === 0
                      ? "disabled"
                      : ""
                  }
                >
                  ↑
                </button>

                <button
                  type="button"
                  data-quiz-nach-unten
                  aria-label="Nach unten verschieben"
                  ${
                    index ===
                    frage.antworten.length - 1
                      ? "disabled"
                      : ""
                  }
                >
                  ↓
                </button>
              </div>
            </div>
          `
        ).join("")}
      </div>
    `;
  }

  if (frage.typ === "zuordnung") {
    return `
      <p class="sf-quiz-antwort-hinweis">
        Wähle für jeden Begriff die passende
        Beschreibung aus.
      </p>

      <div class="sf-quiz-zuordnungsliste">
        ${frage.zuordnungenLinks.map(
          links => `
            <label class="sf-quiz-zuordnung">
              <span class="sf-quiz-zuordnung-links">
                ${quizEscapeHtml(
                  links
                )}
              </span>

              <select
                data-quiz-zuordnung-select
                data-links="${quizEscapeHtml(
                  links
                )}"
              >
                <option value="">
                  Bitte auswählen
                </option>

                ${frage.zuordnungenRechts.map(
                  rechts => `
                    <option
                      value="${quizEscapeHtml(
                        rechts
                      )}"
                    >
                      ${quizEscapeHtml(
                        rechts
                      )}
                    </option>
                  `
                ).join("")}
              </select>
            </label>
          `
        ).join("")}
      </div>
    `;
  }

  return `
    <p>
      Dieser Fragetyp kann nicht dargestellt
      werden.
    </p>
  `;
}


/* =========================================================
   QUIZ-EVENTS
========================================================= */

function quizBindeQuizEvents(frage) {
  const abbrechenButton =
    document.querySelector(
      "[data-quiz-abbrechen]"
    );

  if (abbrechenButton) {
    abbrechenButton.addEventListener(
      "click",
      quizAbbrechen
    );
  }

  const antwortButton =
    document.querySelector(
      "[data-quiz-antwort-button]"
    );

  if (antwortButton) {
    antwortButton.addEventListener(
      "click",
      quizAntwortAbsenden
    );
  }

  const hinweisButton =
    document.querySelector(
      "[data-quiz-hinweis-button]"
    );

  if (hinweisButton) {
    hinweisButton.addEventListener(
      "click",
      quizZeigeNaechstenHinweis
    );
  }

  const favoritButton =
    document.querySelector(
      "[data-quiz-favorit-button]"
    );

  if (favoritButton) {
    favoritButton.addEventListener(
      "click",
      () => {
        quizFavoritUmschalten(
          frage.id
        );
      }
    );
  }

  const texteingabe =
    document.querySelector(
      "[data-quiz-texteingabe]"
    );

  if (texteingabe) {
    texteingabe.focus();

    texteingabe.addEventListener(
      "keydown",
      event => {
        if (
          event.key === "Enter" &&
          !quizState.frageBeantwortet
        ) {
          event.preventDefault();
          quizAntwortAbsenden();
        }
      }
    );
  }

  if (frage.typ === "reihenfolge") {
    quizBindeReihenfolgeEvents();
  }
}


/* =========================================================
   REIHENFOLGE-BEDIENUNG
========================================================= */

function quizBindeReihenfolgeEvents() {
  const liste =
    document.querySelector(
      "[data-quiz-reihenfolge-liste]"
    );

  if (!liste) {
    return;
  }

  let gezogenesElement = null;

  liste
    .querySelectorAll(
      "[data-quiz-reihenfolge-element]"
    )
    .forEach(element => {
      element.addEventListener(
        "dragstart",
        () => {
          gezogenesElement = element;

          element.classList.add(
            "is-dragging"
          );
        }
      );

      element.addEventListener(
        "dragend",
        () => {
          element.classList.remove(
            "is-dragging"
          );

          gezogenesElement = null;

          quizAktualisiereReihenfolgeButtons();
        }
      );

      element.addEventListener(
        "dragover",
        event => {
          event.preventDefault();

          if (
            !gezogenesElement ||
            gezogenesElement === element
          ) {
            return;
          }

          const rect =
            element.getBoundingClientRect();

          const danach =
            event.clientY >
            rect.top +
              rect.height / 2;

          if (danach) {
            element.after(
              gezogenesElement
            );
          } else {
            element.before(
              gezogenesElement
            );
          }
        }
      );

      const nachObenButton =
        element.querySelector(
          "[data-quiz-nach-oben]"
        );

      const nachUntenButton =
        element.querySelector(
          "[data-quiz-nach-unten]"
        );

      if (nachObenButton) {
        nachObenButton.addEventListener(
          "click",
          () => {
            const vorherigesElement =
              element.previousElementSibling;

            if (vorherigesElement) {
              vorherigesElement.before(
                element
              );

              quizAktualisiereReihenfolgeButtons();
            }
          }
        );
      }

      if (nachUntenButton) {
        nachUntenButton.addEventListener(
          "click",
          () => {
            const naechstesElement =
              element.nextElementSibling;

            if (naechstesElement) {
              naechstesElement.after(
                element
              );

              quizAktualisiereReihenfolgeButtons();
            }
          }
        );
      }
    });

  quizAktualisiereReihenfolgeButtons();
}


function quizAktualisiereReihenfolgeButtons() {
  const elemente = [
    ...document.querySelectorAll(
      "[data-quiz-reihenfolge-element]"
    )
  ];

  elemente.forEach(
    (element, index) => {
      const nachObenButton =
        element.querySelector(
          "[data-quiz-nach-oben]"
        );

      const nachUntenButton =
        element.querySelector(
          "[data-quiz-nach-unten]"
        );

      if (nachObenButton) {
        nachObenButton.disabled =
          index === 0;
      }

      if (nachUntenButton) {
        nachUntenButton.disabled =
          index ===
          elemente.length - 1;
      }
    }
  );
}

/* =========================================================
   ERGEBNISANSICHT
========================================================= */

function quizRenderErgebnisAnsicht({
  gesamt,
  richtig,
  falsch,
  prozent,
  punkte,
  bonusPunkte,
  besteSerie,
  dauerMs,
  hinweise
}) {
  const container =
    document.querySelector(
      "[data-quiz-content]"
    );

  if (!container) {
    return;
  }

  let bewertung = {
    titel: "Weiter üben",
    text:
      "Wiederhole die schwierigen Fragen und verbessere dein Ergebnis.",
    symbol: "📚"
  };

  if (prozent >= 90) {
    bewertung = {
      titel: "Ausgezeichnet",
      text:
        "Du beherrschst den Stoff bereits sehr sicher.",
      symbol: "🏆"
    };
  } else if (prozent >= 75) {
    bewertung = {
      titel: "Sehr gut",
      text:
        "Du hast ein starkes Ergebnis erreicht.",
      symbol: "🌟"
    };
  } else if (prozent >= 60) {
    bewertung = {
      titel: "Gut gemacht",
      text:
        "Die Grundlagen sitzen. Einige Themen kannst du noch festigen.",
      symbol: "👍"
    };
  } else if (prozent >= 40) {
    bewertung = {
      titel: "Guter Anfang",
      text:
        "Mit einer gezielten Wiederholung kannst du dich schnell verbessern.",
      symbol: "🌱"
    };
  }

  const falscheFragen =
    quizState.beantworteteFragen.filter(
      eintrag =>
        eintrag.istRichtig === false
    );

  container.innerHTML = `
    <section class="sf-quiz-ergebnis">
      <header class="sf-quiz-ergebnis-hero">
        <div class="sf-quiz-ergebnis-symbol">
          ${bewertung.symbol}
        </div>

        <span class="sf-quiz-kicker">
          Quiz abgeschlossen
        </span>

        <h1>
          ${quizEscapeHtml(
            bewertung.titel
          )}
        </h1>

        <p>
          ${quizEscapeHtml(
            bewertung.text
          )}
        </p>

        <div class="sf-quiz-ergebnis-prozent">
          <strong>
            ${prozent}%
          </strong>

          <span>
            ${richtig} von ${gesamt}
            Fragen richtig
          </span>
        </div>
      </header>

      <section class="sf-quiz-ergebnis-grid">
        <article class="sf-quiz-ergebnis-karte">
          <span class="sf-quiz-ergebnis-icon">
            ✓
          </span>

          <div>
            <small>
              Richtig
            </small>

            <strong>
              ${richtig}
            </strong>
          </div>
        </article>

        <article class="sf-quiz-ergebnis-karte">
          <span class="sf-quiz-ergebnis-icon">
            ✕
          </span>

          <div>
            <small>
              Falsch
            </small>

            <strong>
              ${falsch}
            </strong>
          </div>
        </article>

        <article class="sf-quiz-ergebnis-karte">
          <span class="sf-quiz-ergebnis-icon">
            ⭐
          </span>

          <div>
            <small>
              Punkte
            </small>

            <strong>
              ${quizFormatiereZahl(
                punkte
              )}
            </strong>
          </div>
        </article>

        <article class="sf-quiz-ergebnis-karte">
          <span class="sf-quiz-ergebnis-icon">
            🔥
          </span>

          <div>
            <small>
              Beste Serie
            </small>

            <strong>
              ${besteSerie}
            </strong>
          </div>
        </article>

        <article class="sf-quiz-ergebnis-karte">
          <span class="sf-quiz-ergebnis-icon">
            ⏱
          </span>

          <div>
            <small>
              Dauer
            </small>

            <strong>
              ${quizFormatiereDauer(
                dauerMs
              )}
            </strong>
          </div>
        </article>

        <article class="sf-quiz-ergebnis-karte">
          <span class="sf-quiz-ergebnis-icon">
            💡
          </span>

          <div>
            <small>
              Hinweise
            </small>

            <strong>
              ${hinweise}
            </strong>
          </div>
        </article>
      </section>

      ${
        bonusPunkte > 0
          ? `
            <div class="sf-quiz-bonus-box">
              <span>
                Bonuspunkte
              </span>

              <strong>
                +${quizFormatiereZahl(
                  bonusPunkte
                )}
              </strong>

              <small>
                Durch Serien und schnelle Antworten
              </small>
            </div>
          `
          : ""
      }

      ${
        falscheFragen.length > 0
          ? `
            <section class="sf-quiz-fehlerliste">
              <div class="sf-quiz-section-header">
                <div>
                  <span class="sf-quiz-kicker">
                    Fehleranalyse
                  </span>

                  <h2>
                    Diese Fragen solltest du wiederholen
                  </h2>
                </div>
              </div>

              <div class="sf-quiz-fehlerkarten">
                ${falscheFragen.map(
                  eintrag => {
                    const frage =
                      quizHoleFrageNachId(
                        eintrag.id
                      );

                    if (!frage) {
                      return "";
                    }

                    return `
                      <article class="sf-quiz-fehlerkarte">
                        <div class="sf-quiz-fehlerkarte-kopf">
                          <span class="sf-quiz-status-badge is-error">
                            Falsch
                          </span>

                          <button
                            type="button"
                            class="sf-quiz-kleiner-favorit ${
                              quizIstFavorit(
                                frage.id
                              )
                                ? "is-active"
                                : ""
                            }"
                            data-quiz-ergebnis-favorit="${quizEscapeHtml(
                              frage.id
                            )}"
                            aria-label="Favorit umschalten"
                          >
                            ${
                              quizIstFavorit(
                                frage.id
                              )
                                ? "★"
                                : "☆"
                            }
                          </button>
                        </div>

                        <h3>
                          ${quizEscapeHtml(
                            frage.frage
                          )}
                        </h3>

                        <div class="sf-quiz-fehlerantwort">
                          <span>
                            Deine Antwort
                          </span>

                          <strong>
                            ${quizEscapeHtml(
                              quizFormatiereBenutzerAntwort(
                                frage,
                                eintrag.benutzerAntwort
                              )
                            )}
                          </strong>
                        </div>

                        <div class="sf-quiz-richtige-antwort">
                          <span>
                            Richtige Antwort
                          </span>

                          <strong>
                            ${quizEscapeHtml(
                              quizFormatiereRichtigeAntwort(
                                frage
                              )
                            )}
                          </strong>
                        </div>

                        ${
                          frage.erklaerung
                            ? `
                              <p>
                                ${quizEscapeHtml(
                                  frage.erklaerung
                                )}
                              </p>
                            `
                            : ""
                        }
                      </article>
                    `;
                  }
                ).join("")}
              </div>
            </section>
          `
          : `
            <div class="sf-quiz-perfekt-box">
              <span>
                🎉
              </span>

              <div>
                <strong>
                  Keine Fehler
                </strong>

                <p>
                  Du hast alle Fragen richtig beantwortet.
                </p>
              </div>
            </div>
          `
      }

      <div class="sf-quiz-ergebnis-aktionen">
        ${
          falscheFragen.length > 0
            ? `
              <button
                type="button"
                class="sf-quiz-primary-button"
                data-quiz-fehler-wiederholen
              >
                Falsche Fragen wiederholen
              </button>
            `
            : ""
        }

        <button
          type="button"
          class="sf-quiz-secondary-button"
          data-quiz-neues-quiz
        >
          Neues Quiz
        </button>

        <button
          type="button"
          class="sf-quiz-secondary-button"
          data-quiz-zur-statistik
        >
          Statistik ansehen
        </button>
      </div>
    </section>
  `;

  const wiederholenButton =
    container.querySelector(
      "[data-quiz-fehler-wiederholen]"
    );

  if (wiederholenButton) {
    wiederholenButton.addEventListener(
      "click",
      quizStarteFalscheFragenErneut
    );
  }

  const neuesQuizButton =
    container.querySelector(
      "[data-quiz-neues-quiz]"
    );

  if (neuesQuizButton) {
    neuesQuizButton.addEventListener(
      "click",
      () => {
        quizSetzeRundenstatusZurueck();
        quizRenderStartseite();
      }
    );
  }

  const statistikButton =
    container.querySelector(
      "[data-quiz-zur-statistik]"
    );

  if (statistikButton) {
    statistikButton.addEventListener(
      "click",
      () => {
        quizWechsleSeite(
          "statistik"
        );
      }
    );
  }

  container
    .querySelectorAll(
      "[data-quiz-ergebnis-favorit]"
    )
    .forEach(button => {
      button.addEventListener(
        "click",
        () => {
          const frageId =
            button.dataset
              .quizErgebnisFavorit;

          quizFavoritUmschalten(
            frageId
          );

          const aktiv =
            quizIstFavorit(
              frageId
            );

          button.classList.toggle(
            "is-active",
            aktiv
          );

          button.textContent =
            aktiv ? "★" : "☆";
        }
      );
    });
}


/* =========================================================
   LERNKARTEN
========================================================= */

function quizRenderLernkarten() {
  const container =
    document.querySelector(
      "[data-quiz-content]"
    );

  if (!container) {
    return;
  }

  const verfuegbareKategorien =
    quizHoleVerfuegbareKategorien();

  if (
    !quizState.lernkartenKategorie ||
    !verfuegbareKategorien.some(
      kategorie =>
        kategorie.id ===
        quizState.lernkartenKategorie
    )
  ) {
    quizState.lernkartenKategorie =
      verfuegbareKategorien[0]
        ? verfuegbareKategorien[0].id
        : null;
  }

  const lernkarten =
    quizErzeugeLernkarten(
      quizState.lernkartenKategorie
    );

  quizState.lernkarten =
    lernkarten;

  quizState.lernkartenIndex =
    quizBegrenzeZahl(
      quizState.lernkartenIndex || 0,
      0,
      Math.max(
        0,
        lernkarten.length - 1
      )
    );

  quizState.lernkarteGedreht =
    false;

  const aktuelleKarte =
    lernkarten[
      quizState.lernkartenIndex
    ] || null;

  container.innerHTML = `
    <section class="sf-quiz-lernkarten-seite">
      <header class="sf-quiz-seitenkopf">
        <div>
          <span class="sf-quiz-kicker">
            Lernkarten
          </span>

          <h1>
            Begriffe gezielt wiederholen
          </h1>

          <p>
            Drehe die Karte um und prüfe,
            ob du die Antwort bereits kennst.
          </p>
        </div>

        <label class="sf-quiz-inline-select">
          <span>
            Kategorie
          </span>

          <select data-quiz-lernkarten-kategorie>
            ${verfuegbareKategorien.map(
              kategorie => `
                <option
                  value="${quizEscapeHtml(
                    kategorie.id
                  )}"
                  ${
                    kategorie.id ===
                    quizState
                      .lernkartenKategorie
                      ? "selected"
                      : ""
                  }
                >
                  ${quizEscapeHtml(
                    kategorie.titel
                  )}
                </option>
              `
            ).join("")}
          </select>
        </label>
      </header>

      ${
        aktuelleKarte
          ? `
            <div class="sf-quiz-lernkarten-fortschritt">
              <span>
                Karte
                ${
                  quizState
                    .lernkartenIndex + 1
                }
                von
                ${lernkarten.length}
              </span>

              <div class="sf-quiz-fortschritt">
                <div
                  class="sf-quiz-fortschritt-balken"
                  style="width: ${
                    (
                      (
                        quizState
                          .lernkartenIndex +
                        1
                      ) /
                      lernkarten.length
                    ) * 100
                  }%"
                ></div>
              </div>
            </div>

            <div class="sf-quiz-lernkarte-bereich">
              <button
                type="button"
                class="sf-quiz-lernkarte"
                data-quiz-lernkarte
                aria-label="Lernkarte umdrehen"
              >
                <div class="sf-quiz-lernkarte-inner">
                  <div class="sf-quiz-lernkarte-vorne">
                    <span>
                      Frage
                    </span>

                    <h2>
                      ${quizEscapeHtml(
                        aktuelleKarte.vorne
                      )}
                    </h2>

                    <small>
                      Klicken, um die Antwort anzuzeigen
                    </small>
                  </div>

                  <div class="sf-quiz-lernkarte-hinten">
                    <span>
                      Antwort
                    </span>

                    <h2>
                      ${quizEscapeHtml(
                        aktuelleKarte.hinten
                      )}
                    </h2>

                    ${
                      aktuelleKarte
                        .erklaerung
                        ? `
                          <p>
                            ${quizEscapeHtml(
                              aktuelleKarte
                                .erklaerung
                            )}
                          </p>
                        `
                        : ""
                    }
                  </div>
                </div>
              </button>

              <div class="sf-quiz-lernkarten-bewertung">
                <p>
                  Wie gut kanntest du die Antwort?
                </p>

                <div>
                  <button
                    type="button"
                    class="sf-quiz-bewertung-button is-schwer"
                    data-quiz-lernkarte-bewertung="schwer"
                  >
                    Noch unsicher
                  </button>

                  <button
                    type="button"
                    class="sf-quiz-bewertung-button is-mittel"
                    data-quiz-lernkarte-bewertung="mittel"
                  >
                    Fast gewusst
                  </button>

                  <button
                    type="button"
                    class="sf-quiz-bewertung-button is-leicht"
                    data-quiz-lernkarte-bewertung="leicht"
                  >
                    Sicher gewusst
                  </button>
                </div>
              </div>

              <div class="sf-quiz-lernkarten-navigation">
                <button
                  type="button"
                  class="sf-quiz-secondary-button"
                  data-quiz-lernkarte-zurueck
                  ${
                    quizState
                      .lernkartenIndex === 0
                      ? "disabled"
                      : ""
                  }
                >
                  ← Zurück
                </button>

                <button
                  type="button"
                  class="sf-quiz-secondary-button"
                  data-quiz-lernkarten-mischen
                >
                  Karten mischen
                </button>

                <button
                  type="button"
                  class="sf-quiz-primary-button"
                  data-quiz-lernkarte-weiter
                >
                  ${
                    quizState
                      .lernkartenIndex ===
                    lernkarten.length - 1
                      ? "Von vorne"
                      : "Weiter →"
                  }
                </button>
              </div>
            </div>
          `
          : `
            <div class="sf-quiz-leerzustand">
              <span>
                🗂
              </span>

              <h2>
                Keine Lernkarten verfügbar
              </h2>

              <p>
                Für diese Kategorie sind noch keine
                Lernkarten vorhanden.
              </p>
            </div>
          `
      }
    </section>
  `;

  quizBindeLernkartenEvents();
}


function quizErzeugeLernkarten(
  kategorieId
) {
  const fragen =
    QUIZ_ALLE_FRAGEN.filter(
      frage =>
        frage.kategorie ===
        kategorieId
    );

  const verwendeteVorderseiten =
    new Set();

  const karten = [];

  fragen.forEach(frage => {
    const vorne =
      String(
        frage.frage || ""
      ).trim();

    const hinten =
      quizFormatiereRichtigeAntwort(
        frage
      );

    const schluessel =
      quizNormalisiereText(vorne);

    if (
      !vorne ||
      !hinten ||
      verwendeteVorderseiten.has(
        schluessel
      )
    ) {
      return;
    }

    verwendeteVorderseiten.add(
      schluessel
    );

    karten.push({
      id: `lernkarte-${frage.id}`,
      frageId: frage.id,
      vorne,
      hinten,
      erklaerung:
        frage.erklaerung || "",
      kategorie:
        frage.kategorie
    });
  });

  return karten;
}


function quizBindeLernkartenEvents() {
  const kategorieSelect =
    document.querySelector(
      "[data-quiz-lernkarten-kategorie]"
    );

  if (kategorieSelect) {
    kategorieSelect.addEventListener(
      "change",
      () => {
        quizState
          .lernkartenKategorie =
          kategorieSelect.value;

        quizState.lernkartenIndex = 0;
        quizState.lernkarteGedreht =
          false;

        quizRenderLernkarten();
      }
    );
  }

  const karte =
    document.querySelector(
      "[data-quiz-lernkarte]"
    );

  if (karte) {
    karte.addEventListener(
      "click",
      () => {
        quizState.lernkarteGedreht =
          !quizState
            .lernkarteGedreht;

        karte.classList.toggle(
          "is-gedreht",
          quizState
            .lernkarteGedreht
        );
      }
    );
  }

  const zurueckButton =
    document.querySelector(
      "[data-quiz-lernkarte-zurueck]"
    );

  if (zurueckButton) {
    zurueckButton.addEventListener(
      "click",
      () => {
        if (
          quizState
            .lernkartenIndex > 0
        ) {
          quizState
            .lernkartenIndex -= 1;

          quizState
            .lernkarteGedreht = false;

          quizRenderLernkarten();
        }
      }
    );
  }

  const weiterButton =
    document.querySelector(
      "[data-quiz-lernkarte-weiter]"
    );

  if (weiterButton) {
    weiterButton.addEventListener(
      "click",
      quizNaechsteLernkarte
    );
  }

  const mischenButton =
    document.querySelector(
      "[data-quiz-lernkarten-mischen]"
    );

  if (mischenButton) {
    mischenButton.addEventListener(
      "click",
      () => {
        quizState.lernkarten =
          quizMischeArray(
            quizState.lernkarten
          );

        quizState.lernkartenIndex = 0;
        quizState.lernkarteGedreht =
          false;

        quizRenderGemischteLernkarte();
      }
    );
  }

  document
    .querySelectorAll(
      "[data-quiz-lernkarte-bewertung]"
    )
    .forEach(button => {
      button.addEventListener(
        "click",
        () => {
          quizBewerteLernkarte(
            button.dataset
              .quizLernkarteBewertung
          );
        }
      );
    });
}


function quizRenderGemischteLernkarte() {
  const karten =
    quizState.lernkarten;

  if (!Array.isArray(karten)) {
    return;
  }

  const originalFunktion =
    quizErzeugeLernkarten;

  quizErzeugeLernkarten =
    () => karten;

  quizRenderLernkarten();

  quizErzeugeLernkarten =
    originalFunktion;
}


function quizNaechsteLernkarte() {
  const anzahl =
    quizState.lernkarten.length;

  if (anzahl === 0) {
    return;
  }

  quizState.lernkartenIndex =
    quizState.lernkartenIndex >=
    anzahl - 1
      ? 0
      : quizState.lernkartenIndex + 1;

  quizState.lernkarteGedreht =
    false;

  quizRenderLernkarten();
}


function quizBewerteLernkarte(
  bewertung
) {
  const karte =
    quizState.lernkarten[
      quizState.lernkartenIndex
    ];

  if (!karte) {
    return;
  }

  if (
    !quizLernkartenFortschritt[
      karte.id
    ]
  ) {
    quizLernkartenFortschritt[
      karte.id
    ] = {
      leicht: 0,
      mittel: 0,
      schwer: 0,
      zuletztBewertet: null
    };
  }

  const fortschritt =
    quizLernkartenFortschritt[
      karte.id
    ];

  if (
    ["leicht", "mittel", "schwer"]
      .includes(bewertung)
  ) {
    fortschritt[bewertung] += 1;
  }

  fortschritt.zuletztBewertet =
    new Date().toISOString();

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS
      .lernkartenFortschritt,
    quizLernkartenFortschritt
  );

  if (bewertung === "leicht") {
    quizErfolgFreischalten(
      "lernkartenstarter"
    );
  }

  quizNaechsteLernkarte();
}


/* =========================================================
   STATISTIK
========================================================= */

function quizRenderStatistik() {
  const container =
    document.querySelector(
      "[data-quiz-content]"
    );

  if (!container) {
    return;
  }

  const beantwortet =
    quizStatistik
      .insgesamtBeantworteteFragen;

  const richtig =
    quizStatistik
      .insgesamtRichtigeAntworten;

  const gesamtProzent =
    quizBerechneProzent(
      richtig,
      beantwortet
    );

  const kategorien =
    quizHoleVerfuegbareKategorien();

  const letzteErgebnisse =
    Array.isArray(
      quizStatistik.letzteErgebnisse
    )
      ? quizStatistik
          .letzteErgebnisse
      : [];

  container.innerHTML = `
    <section class="sf-quiz-statistik-seite">
      <header class="sf-quiz-seitenkopf">
        <div>
          <span class="sf-quiz-kicker">
            Statistik
          </span>

          <h1>
            Dein Lernfortschritt
          </h1>

          <p>
            Erkenne deine Stärken und finde
            Themen, die du noch wiederholen
            solltest.
          </p>
        </div>
      </header>

      <section class="sf-quiz-statistik-karten">
        <article class="sf-quiz-statistik-karte">
          <span>
            Beantwortete Fragen
          </span>

          <strong>
            ${quizFormatiereZahl(
              beantwortet
            )}
          </strong>
        </article>

        <article class="sf-quiz-statistik-karte">
          <span>
            Richtige Antworten
          </span>

          <strong>
            ${gesamtProzent}%
          </strong>
        </article>

        <article class="sf-quiz-statistik-karte">
          <span>
            Gesamtpunkte
          </span>

          <strong>
            ${quizFormatiereZahl(
              quizStatistik
                .insgesamtPunkte
            )}
          </strong>
        </article>

        <article class="sf-quiz-statistik-karte">
          <span>
            Beste Serie
          </span>

          <strong>
            ${quizStatistik.besteSerie}
          </strong>
        </article>

        <article class="sf-quiz-statistik-karte">
          <span>
            Tagesserie
          </span>

          <strong>
            ${quizStatistik
              .aktuelleTagesserie}
          </strong>
        </article>

        <article class="sf-quiz-statistik-karte">
          <span>
            Ø Antwortzeit
          </span>

          <strong>
            ${quizFormatiereMillisekunden(
              quizStatistik
                .durchschnittlicheAntwortzeitMs
            )}
          </strong>
        </article>
      </section>

      <section class="sf-quiz-statistik-block">
        <div class="sf-quiz-section-header">
          <div>
            <h2>
              Kategorien
            </h2>

            <p>
              Deine Trefferquote pro Bereich.
            </p>
          </div>
        </div>

        <div class="sf-quiz-kategorie-statistiken">
          ${kategorien.map(
            kategorie => {
              const daten =
                quizStatistik.kategorien[
                  kategorie.id
                ] || {
                  beantwortet: 0,
                  richtig: 0,
                  falsch: 0,
                  besteProzentzahl: 0
                };

              const prozent =
                quizBerechneProzent(
                  daten.richtig,
                  daten.beantwortet
                );

              return `
                <article class="sf-quiz-kategorie-statistik">
                  <div class="sf-quiz-kategorie-statistik-kopf">
                    <span class="sf-quiz-kategorie-icon">
                      ${quizEscapeHtml(
                        kategorie.icon
                      )}
                    </span>

                    <div>
                      <strong>
                        ${quizEscapeHtml(
                          kategorie.titel
                        )}
                      </strong>

                      <small>
                        ${daten.beantwortet}
                        beantwortet
                      </small>
                    </div>

                    <b>
                      ${prozent}%
                    </b>
                  </div>

                  <div class="sf-quiz-statistik-balken">
                    <div
                      style="width: ${prozent}%"
                    ></div>
                  </div>

                  <div class="sf-quiz-kategorie-statistik-details">
                    <span>
                      ${daten.richtig}
                      richtig
                    </span>

                    <span>
                      ${daten.falsch}
                      falsch
                    </span>

                    <span>
                      Bestwert:
                      ${daten.besteProzentzahl}%
                    </span>
                  </div>
                </article>
              `;
            }
          ).join("")}
        </div>
      </section>

      <section class="sf-quiz-statistik-block">
        <div class="sf-quiz-section-header">
          <div>
            <h2>
              Schwierigkeitsstufen
            </h2>

            <p>
              Trefferquote nach Schwierigkeit.
            </p>
          </div>
        </div>

        <div class="sf-quiz-detail-statistik-grid">
          ${Object.values(
            QUIZ_SCHWIERIGKEITEN
          ).map(
            schwierigkeit => {
              const daten =
                quizStatistik
                  .schwierigkeiten[
                    schwierigkeit.id
                  ] || {
                    beantwortet: 0,
                    richtig: 0
                  };

              const prozent =
                quizBerechneProzent(
                  daten.richtig,
                  daten.beantwortet
                );

              return `
                <article class="sf-quiz-detail-statistik">
                  <span class="sf-quiz-schwierigkeitspunkt sf-quiz-schwierigkeit-${quizEscapeHtml(
                    schwierigkeit.id
                  )}">
                  </span>

                  <strong>
                    ${quizEscapeHtml(
                      schwierigkeit.titel
                    )}
                  </strong>

                  <b>
                    ${prozent}%
                  </b>

                  <small>
                    ${daten.richtig}
                    von
                    ${daten.beantwortet}
                    richtig
                  </small>
                </article>
              `;
            }
          ).join("")}
        </div>
      </section>

      <section class="sf-quiz-statistik-block">
        <div class="sf-quiz-section-header">
          <div>
            <h2>
              Letzte Ergebnisse
            </h2>

            <p>
              Deine zuletzt abgeschlossenen Quiz.
            </p>
          </div>
        </div>

        ${
          letzteErgebnisse.length > 0
            ? `
              <div class="sf-quiz-ergebnis-tabelle-wrapper">
                <table class="sf-quiz-ergebnis-tabelle">
                  <thead>
                    <tr>
                      <th>
                        Datum
                      </th>

                      <th>
                        Modus
                      </th>

                      <th>
                        Ergebnis
                      </th>

                      <th>
                        Punkte
                      </th>

                      <th>
                        Dauer
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    ${letzteErgebnisse.map(
                      ergebnis => `
                        <tr>
                          <td>
                            ${quizFormatiereDatumLesbar(
                              ergebnis.datum
                            )}
                          </td>

                          <td>
                            ${
                              ergebnis.tagesquiz
                                ? "Tagesquiz"
                                : ergebnis
                                    .wiederholung
                                  ? "Wiederholung"
                                  : ergebnis
                                      .modus ===
                                    "pruefung"
                                    ? "Prüfung"
                                    : "Lernen"
                            }
                          </td>

                          <td>
                            <strong>
                              ${ergebnis.prozent}%
                            </strong>

                            <small>
                              ${ergebnis.richtig}
                              /
                              ${ergebnis.gesamt}
                            </small>
                          </td>

                          <td>
                            ${quizFormatiereZahl(
                              ergebnis.punkte
                            )}
                          </td>

                          <td>
                            ${quizFormatiereDauer(
                              ergebnis.dauerMs
                            )}
                          </td>
                        </tr>
                      `
                    ).join("")}
                  </tbody>
                </table>
              </div>
            `
            : `
              <div class="sf-quiz-leerzustand">
                <span>
                  📊
                </span>

                <h3>
                  Noch keine Ergebnisse
                </h3>

                <p>
                  Schliesse dein erstes Quiz ab,
                  damit hier Statistiken erscheinen.
                </p>
              </div>
            `
        }
      </section>

      <section class="sf-quiz-datenaktionen">
        <button
          type="button"
          class="sf-quiz-secondary-button"
          data-quiz-statistik-exportieren
        >
          Statistik exportieren
        </button>

        <button
          type="button"
          class="sf-quiz-danger-button"
          data-quiz-statistik-zuruecksetzen
        >
          Statistik zurücksetzen
        </button>
      </section>
    </section>
  `;

  const exportButton =
    container.querySelector(
      "[data-quiz-statistik-exportieren]"
    );

  if (exportButton) {
    exportButton.addEventListener(
      "click",
      quizExportiereStatistik
    );
  }

  const resetButton =
    container.querySelector(
      "[data-quiz-statistik-zuruecksetzen]"
    );

  if (resetButton) {
    resetButton.addEventListener(
      "click",
      quizSetzeStatistikZurueck
    );
  }
}


/* =========================================================
   STATISTIK EXPORTIEREN UND ZURÜCKSETZEN
========================================================= */

function quizExportiereStatistik() {
  const exportDaten = {
    exportiertAm:
      new Date().toISOString(),
    statistik:
      quizStatistik,
    favoriten:
      quizFavoriten,
    schwierigeFragen:
      quizSchwierigeFragen,
    erfolge:
      quizFreigeschalteteErfolge,
    lernkarten:
      quizLernkartenFortschritt
  };

  const json =
    JSON.stringify(
      exportDaten,
      null,
      2
    );

  const blob =
    new Blob(
      [json],
      {
        type:
          "application/json;charset=utf-8"
      }
    );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;
  link.download =
    `quiz-statistik-${quizFormatiereDatum()}.json`;

  document.body.appendChild(link);

  link.click();
  link.remove();

  URL.revokeObjectURL(url);

  quizZeigeMeldung(
    "Die Statistik wurde exportiert.",
    "erfolg"
  );
}


function quizSetzeStatistikZurueck() {
  const bestaetigt =
    window.confirm(
      "Möchtest du wirklich alle Statistiken, Erfolge, Favoriten und Lernfortschritte löschen? Diese Aktion kann nicht rückgängig gemacht werden."
    );

  if (!bestaetigt) {
    return;
  }

  quizStatistik =
    quizKopiereObjekt(
      QUIZ_STANDARD_STATISTIK
    );

  quizFavoriten = [];
  quizSchwierigeFragen = [];
  quizFreigeschalteteErfolge = [];
  quizLernkartenFortschritt = {};

  quizTagesquiz =
    quizKopiereObjekt(
      QUIZ_STANDARD_TAGESQUIZ
    );

  Object.values(
    QUIZ_STORAGE_KEYS
  ).forEach(key => {
    try {
      localStorage.removeItem(key);
    } catch (fehler) {
      console.warn(
        "Quiz: Speicher konnte nicht gelöscht werden.",
        fehler
      );
    }
  });

  quizSpeichereAlleBenutzerdaten();

  quizRenderApp();

  quizZeigeMeldung(
    "Alle Quizdaten wurden zurückgesetzt.",
    "erfolg"
  );
}


/* =========================================================
   ERFOLGE
========================================================= */

function quizRenderErfolge() {
  const container =
    document.querySelector(
      "[data-quiz-content]"
    );

  if (!container) {
    return;
  }

  const freigeschaltet =
    QUIZ_ERFOLGE.filter(
      erfolg =>
        quizErfolgIstFreigeschaltet(
          erfolg.id
        )
    ).length;

  const prozent =
    quizBerechneProzent(
      freigeschaltet,
      QUIZ_ERFOLGE.length
    );

  container.innerHTML = `
    <section class="sf-quiz-erfolge-seite">
      <header class="sf-quiz-seitenkopf">
        <div>
          <span class="sf-quiz-kicker">
            Erfolge
          </span>

          <h1>
            Deine Auszeichnungen
          </h1>

          <p>
            Löse Quiz, baue Serien auf und
            verbessere deine Lernstatistik.
          </p>
        </div>

        <div class="sf-quiz-erfolge-fortschritt">
          <strong>
            ${freigeschaltet}
            /
            ${QUIZ_ERFOLGE.length}
          </strong>

          <span>
            Erfolge freigeschaltet
          </span>

          <div class="sf-quiz-statistik-balken">
            <div
              style="width: ${prozent}%"
            ></div>
          </div>
        </div>
      </header>

      <div class="sf-quiz-erfolge-grid">
        ${QUIZ_ERFOLGE.map(
          erfolg => {
            const istFreigeschaltet =
              quizErfolgIstFreigeschaltet(
                erfolg.id
              );

            return `
              <article class="
                sf-quiz-erfolg-karte
                ${
                  istFreigeschaltet
                    ? "is-freigeschaltet"
                    : "is-gesperrt"
                }
              ">
                <div class="sf-quiz-erfolg-icon">
                  ${
                    istFreigeschaltet
                      ? quizEscapeHtml(
                          erfolg.icon ||
                          "🏆"
                        )
                      : "🔒"
                  }
                </div>

                <div class="sf-quiz-erfolg-inhalt">
                  <span>
                    ${
                      istFreigeschaltet
                        ? "Freigeschaltet"
                        : "Noch gesperrt"
                    }
                  </span>

                  <h2>
                    ${quizEscapeHtml(
                      erfolg.titel
                    )}
                  </h2>

                  <p>
                    ${quizEscapeHtml(
                      erfolg.beschreibung
                    )}
                  </p>
                </div>
              </article>
            `;
          }
        ).join("")}
      </div>
    </section>
  `;
}


/* =========================================================
   EINSTELLUNGEN
========================================================= */

function quizRenderEinstellungen() {
  const container =
    document.querySelector(
      "[data-quiz-content]"
    );

  if (!container) {
    return;
  }

  container.innerHTML = `
    <section class="sf-quiz-einstellungen-seite">
      <header class="sf-quiz-seitenkopf">
        <div>
          <span class="sf-quiz-kicker">
            Einstellungen
          </span>

          <h1>
            Quiz anpassen
          </h1>

          <p>
            Lege fest, wie Fragen dargestellt
            und ausgewertet werden.
          </p>
        </div>
      </header>

      <form
        class="sf-quiz-einstellungen-form"
        data-quiz-einstellungen-form
      >
        <section class="sf-quiz-einstellungen-block">
          <div>
            <h2>
              Standardmodus
            </h2>

            <p>
              Im Lernmodus erhältst du sofort
              eine Erklärung. Im Prüfungsmodus
              siehst du die Auswertung erst am
              Schluss.
            </p>
          </div>

          <label class="sf-quiz-form-field">
            <span>
              Modus
            </span>

            <select
              name="modus"
              data-quiz-einstellung-modus
            >
              <option
                value="lernen"
                ${
                  quizEinstellungen.modus ===
                  "lernen"
                    ? "selected"
                    : ""
                }
              >
                Lernmodus
              </option>

              <option
                value="pruefung"
                ${
                  quizEinstellungen.modus ===
                  "pruefung"
                    ? "selected"
                    : ""
                }
              >
                Prüfungsmodus
              </option>
            </select>
          </label>
        </section>

        <section class="sf-quiz-einstellungen-block">
          <div>
            <h2>
              Zeitlimit
            </h2>

            <p>
              Aktiviere einen Countdown für
              jede einzelne Frage.
            </p>
          </div>

          <div class="sf-quiz-einstellungen-felder">
            <label class="sf-quiz-switch">
              <input
                type="checkbox"
                name="zeitlimitAktiv"
                data-quiz-einstellung-zeitlimit
                ${
                  quizEinstellungen
                    .zeitlimitAktiv
                    ? "checked"
                    : ""
                }
              >

              <span class="sf-quiz-switch-regler">
              </span>

              <span>
                Zeitlimit aktivieren
              </span>
            </label>

            <label class="sf-quiz-form-field">
              <span>
                Sekunden pro Frage
              </span>

              <input
                type="number"
                min="5"
                max="300"
                step="5"
                name="zeitProFrage"
                value="${quizEinstellungen
                  .zeitProFrage}"
                data-quiz-einstellung-zeit
              >
            </label>
          </div>
        </section>

        <section class="sf-quiz-einstellungen-block">
          <div>
            <h2>
              Reihenfolge
            </h2>

            <p>
              Mische Fragen und Antworten für
              abwechslungsreiche Durchgänge.
            </p>
          </div>

          <div class="sf-quiz-einstellungen-felder">
            <label class="sf-quiz-switch">
              <input
                type="checkbox"
                name="fragenMischen"
                ${
                  quizEinstellungen
                    .fragenMischen
                    ? "checked"
                    : ""
                }
              >

              <span class="sf-quiz-switch-regler">
              </span>

              <span>
                Fragen mischen
              </span>
            </label>

            <label class="sf-quiz-switch">
              <input
                type="checkbox"
                name="antwortenMischen"
                ${
                  quizEinstellungen
                    .antwortenMischen
                    ? "checked"
                    : ""
                }
              >

              <span class="sf-quiz-switch-regler">
              </span>

              <span>
                Antworten mischen
              </span>
            </label>
          </div>
        </section>

        <section class="sf-quiz-einstellungen-block">
          <div>
            <h2>
              Bedienung
            </h2>

            <p>
              Zusätzliche Hilfen für eine
              angenehmere Nutzung.
            </p>
          </div>

          <div class="sf-quiz-einstellungen-felder">
            <label class="sf-quiz-switch">
              <input
                type="checkbox"
                name="animationen"
                ${
                  quizEinstellungen
                    .animationen !== false
                    ? "checked"
                    : ""
                }
              >

              <span class="sf-quiz-switch-regler">
              </span>

              <span>
                Animationen anzeigen
              </span>
            </label>

            <label class="sf-quiz-switch">
              <input
                type="checkbox"
                name="automatischWeiter"
                ${
                  quizEinstellungen
                    .automatischWeiter
                    ? "checked"
                    : ""
                }
              >

              <span class="sf-quiz-switch-regler">
              </span>

              <span>
                Automatisch zur nächsten Frage
              </span>
            </label>
          </div>
        </section>

        <div class="sf-quiz-einstellungen-aktionen">
          <button
            type="submit"
            class="sf-quiz-primary-button"
          >
            Einstellungen speichern
          </button>

          <button
            type="button"
            class="sf-quiz-secondary-button"
            data-quiz-einstellungen-standard
          >
            Standard wiederherstellen
          </button>
        </div>
      </form>
    </section>
  `;

  const formular =
    container.querySelector(
      "[data-quiz-einstellungen-form]"
    );

  if (formular) {
    formular.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        const formDaten =
          new FormData(formular);

        quizEinstellungen.modus =
          String(
            formDaten.get("modus") ||
            "lernen"
          );

        quizEinstellungen
          .zeitlimitAktiv =
          formDaten.has(
            "zeitlimitAktiv"
          );

        quizEinstellungen
          .zeitProFrage =
          quizBegrenzeZahl(
            Number(
              formDaten.get(
                "zeitProFrage"
              )
            ) || 30,
            5,
            300
          );

        quizEinstellungen
          .fragenMischen =
          formDaten.has(
            "fragenMischen"
          );

        quizEinstellungen
          .antwortenMischen =
          formDaten.has(
            "antwortenMischen"
          );

        quizEinstellungen
          .animationen =
          formDaten.has(
            "animationen"
          );

        quizEinstellungen
          .automatischWeiter =
          formDaten.has(
            "automatischWeiter"
          );

        quizState.modus =
          quizEinstellungen.modus;

        quizState.zeitlimitAktiv =
          quizEinstellungen
            .zeitlimitAktiv;

        quizState.zeitProFrage =
          quizEinstellungen
            .zeitProFrage;

        quizStorageSchreiben(
          QUIZ_STORAGE_KEYS
            .einstellungen,
          quizEinstellungen
        );

        quizAktualisiereAnimationsklasse();

        quizZeigeMeldung(
          "Die Einstellungen wurden gespeichert.",
          "erfolg"
        );
      }
    );
  }

  const standardButton =
    container.querySelector(
      "[data-quiz-einstellungen-standard]"
    );

  if (standardButton) {
    standardButton.addEventListener(
      "click",
      () => {
        quizEinstellungen =
          quizKopiereObjekt(
            QUIZ_STANDARD_EINSTELLUNGEN
          );

        quizStorageSchreiben(
          QUIZ_STORAGE_KEYS
            .einstellungen,
          quizEinstellungen
        );

        quizRenderEinstellungen();

        quizAktualisiereAnimationsklasse();

        quizZeigeMeldung(
          "Die Standardeinstellungen wurden wiederhergestellt.",
          "erfolg"
        );
      }
    );
  }
}


/* =========================================================
   ANIMATIONSKLASSE
========================================================= */

function quizAktualisiereAnimationsklasse() {
  document.documentElement
    .classList.toggle(
      "sf-quiz-ohne-animationen",
      quizEinstellungen
        .animationen === false
    );
}


/* =========================================================
   ZUSÄTZLICHE FORMATIERUNGSFUNKTIONEN
========================================================= */

function quizFormatiereDauer(
  dauerMs
) {
  const sekunden =
    Math.max(
      0,
      Math.round(
        Number(
          dauerMs || 0
        ) / 1000
      )
    );

  const minuten =
    Math.floor(
      sekunden / 60
    );

  const restSekunden =
    sekunden % 60;

  if (minuten === 0) {
    return `${restSekunden} Sek.`;
  }

  return `${minuten}:${String(
    restSekunden
  ).padStart(2, "0")} Min.`;
}


function quizFormatiereMillisekunden(
  wert
) {
  const ms =
    Number(wert || 0);

  if (ms <= 0) {
    return "–";
  }

  const sekunden =
    ms / 1000;

  return `${sekunden.toFixed(1)} Sek.`;
}


function quizFormatiereDatumLesbar(
  datum
) {
  if (!datum) {
    return "–";
  }

  const objekt =
    new Date(datum);

  if (
    Number.isNaN(
      objekt.getTime()
    )
  ) {
    return "–";
  }

  return objekt.toLocaleDateString(
    "de-CH",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }
  );
}

/* =========================================================
   AUTOMATISCHES WEITERGEHEN
========================================================= */

function quizPlaneAutomatischesWeiter() {
  if (
    !quizEinstellungen.automatischWeiter ||
    quizState.modus !== "lernen" ||
    !quizState.frageBeantwortet
  ) {
    return;
  }

  window.setTimeout(() => {
    if (
      quizState.frageBeantwortet
    ) {
      quizNaechsteFrage();
    }
  }, 2200);
}


/* =========================================================
   BESTEHENDE AUSWERTUNGSFUNKTION ERWEITERN

   Die ursprüngliche Funktion wird gespeichert und danach
   um das automatische Weitergehen ergänzt.
========================================================= */

const quizUrspruenglicheAntwortAuswertung =
  quizZeigeAntwortAuswertung;

quizZeigeAntwortAuswertung = function(
  frage,
  optionen = {}
) {
  quizUrspruenglicheAntwortAuswertung(
    frage,
    optionen
  );

  quizMarkiereAntwortenImLernmodus(
    frage
  );

  quizPlaneAutomatischesWeiter();
};


/* =========================================================
   ANTWORTEN NACH DER AUSWERTUNG MARKIEREN
========================================================= */

function quizMarkiereAntwortenImLernmodus(
  frage
) {
  if (
    !frage ||
    quizState.modus !== "lernen"
  ) {
    return;
  }

  if (
    frage.typ === "multiple-choice" ||
    frage.typ === "wahr-falsch"
  ) {
    document
      .querySelectorAll(
        'input[name="quiz-antwort"]'
      )
      .forEach(input => {
        const label =
          input.closest(
            ".sf-quiz-antwortoption"
          );

        if (!label) {
          return;
        }

        const istRichtigeAntwort =
          quizNormalisiereText(
            input.value
          ) ===
          quizNormalisiereText(
            frage.richtigeAntwort
          );

        const wurdeAusgewaehlt =
          input.checked;

        if (istRichtigeAntwort) {
          label.classList.add(
            "is-richtig"
          );
        }

        if (
          wurdeAusgewaehlt &&
          !istRichtigeAntwort
        ) {
          label.classList.add(
            "is-falsch"
          );
        }
      });

    return;
  }

  if (
    frage.typ === "mehrfachauswahl"
  ) {
    const richtigeAntworten =
      frage.richtigeAntworten.map(
        quizNormalisiereText
      );

    document
      .querySelectorAll(
        'input[name="quiz-antwort-mehrfach"]'
      )
      .forEach(input => {
        const label =
          input.closest(
            ".sf-quiz-antwortoption"
          );

        if (!label) {
          return;
        }

        const istRichtig =
          richtigeAntworten.includes(
            quizNormalisiereText(
              input.value
            )
          );

        if (istRichtig) {
          label.classList.add(
            "is-richtig"
          );
        }

        if (
          input.checked &&
          !istRichtig
        ) {
          label.classList.add(
            "is-falsch"
          );
        }
      });

    return;
  }

  if (
    frage.typ === "texteingabe"
  ) {
    const input =
      document.querySelector(
        "[data-quiz-texteingabe]"
      );

    if (!input) {
      return;
    }

    input.classList.add(
      frage.istRichtig
        ? "is-richtig"
        : "is-falsch"
    );

    return;
  }

  if (
    frage.typ === "reihenfolge"
  ) {
    const elemente = [
      ...document.querySelectorAll(
        "[data-quiz-reihenfolge-element]"
      )
    ];

    elemente.forEach(
      (element, index) => {
        const wert =
          element.dataset.wert;

        const korrekt =
          frage.reihenfolge[
            index
          ];

        element.classList.add(
          quizNormalisiereText(
            wert
          ) ===
            quizNormalisiereText(
              korrekt
            )
            ? "is-richtig"
            : "is-falsch"
        );
      }
    );

    return;
  }

  if (
    frage.typ === "zuordnung"
  ) {
    document
      .querySelectorAll(
        "[data-quiz-zuordnung-select]"
      )
      .forEach(select => {
        const zeile =
          select.closest(
            ".sf-quiz-zuordnung"
          );

        if (!zeile) {
          return;
        }

        const korrektesPaar =
          frage.zuordnungen.find(
            paar =>
              quizNormalisiereText(
                paar.links
              ) ===
              quizNormalisiereText(
                select.dataset.links
              )
          );

        const istRichtig =
          korrektesPaar &&
          quizNormalisiereText(
            select.value
          ) ===
            quizNormalisiereText(
              korrektesPaar.rechts
            );

        zeile.classList.add(
          istRichtig
            ? "is-richtig"
            : "is-falsch"
        );
      });
  }
}


/* =========================================================
   PRÜFUNGSMODUS – DETAILAUSWERTUNG AM SCHLUSS
========================================================= */

function quizRenderPruefungsAuswertung() {
  if (
    quizState.modus !== "pruefung" ||
    !Array.isArray(
      quizState.beantworteteFragen
    )
  ) {
    return "";
  }

  return `
    <section class="sf-quiz-pruefungs-auswertung">
      <div class="sf-quiz-section-header">
        <div>
          <span class="sf-quiz-kicker">
            Prüfungsauswertung
          </span>

          <h2>
            Alle Antworten im Überblick
          </h2>

          <p>
            Vergleiche deine Antworten mit den
            richtigen Lösungen.
          </p>
        </div>
      </div>

      <div class="sf-quiz-pruefungs-fragen">
        ${quizState.beantworteteFragen.map(
          (eintrag, index) => {
            const frage =
              quizHoleFrageNachId(
                eintrag.id
              );

            if (!frage) {
              return "";
            }

            return `
              <article class="
                sf-quiz-pruefungs-frage
                ${
                  eintrag.istRichtig
                    ? "is-richtig"
                    : "is-falsch"
                }
              ">
                <div class="sf-quiz-pruefungs-frage-kopf">
                  <span>
                    Frage ${index + 1}
                  </span>

                  <strong>
                    ${
                      eintrag.istRichtig
                        ? "Richtig"
                        : "Falsch"
                    }
                  </strong>
                </div>

                <h3>
                  ${quizEscapeHtml(
                    frage.frage
                  )}
                </h3>

                <div class="sf-quiz-pruefungs-antworten">
                  <div>
                    <span>
                      Deine Antwort
                    </span>

                    <strong>
                      ${quizEscapeHtml(
                        quizFormatiereBenutzerAntwort(
                          frage,
                          eintrag.benutzerAntwort
                        )
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Richtige Antwort
                    </span>

                    <strong>
                      ${quizEscapeHtml(
                        quizFormatiereRichtigeAntwort(
                          frage
                        )
                      )}
                    </strong>
                  </div>
                </div>

                ${
                  frage.erklaerung
                    ? `
                      <p class="sf-quiz-pruefungs-erklaerung">
                        ${quizEscapeHtml(
                          frage.erklaerung
                        )}
                      </p>
                    `
                    : ""
                }
              </article>
            `;
          }
        ).join("")}
      </div>
    </section>
  `;
}


/* =========================================================
   ERGEBNISANSICHT UM PRÜFUNGSAUSWERTUNG ERWEITERN
========================================================= */

const quizUrspruenglicheErgebnisAnsicht =
  quizRenderErgebnisAnsicht;

quizRenderErgebnisAnsicht = function(
  ergebnisDaten
) {
  quizUrspruenglicheErgebnisAnsicht(
    ergebnisDaten
  );

  if (
    quizState.modus !== "pruefung"
  ) {
    return;
  }

  const aktionsBereich =
    document.querySelector(
      ".sf-quiz-ergebnis-aktionen"
    );

  if (!aktionsBereich) {
    return;
  }

  aktionsBereich.insertAdjacentHTML(
    "beforebegin",
    quizRenderPruefungsAuswertung()
  );
};


/* =========================================================
   TASTATURSTEUERUNG
========================================================= */

function quizBindeGlobaleTastatursteuerung() {
  document.addEventListener(
    "keydown",
    event => {
      if (
        !quizState.quizGestartet
      ) {
        return;
      }

      const ziel =
        event.target;

      const istEingabefeld =
        ziel instanceof
          HTMLInputElement ||
        ziel instanceof
          HTMLTextAreaElement ||
        ziel instanceof
          HTMLSelectElement;

      if (
        event.key === "Escape"
      ) {
        event.preventDefault();
        quizAbbrechen();
        return;
      }

      if (
        quizState.frageBeantwortet &&
        (
          event.key === "Enter" ||
          event.key === "ArrowRight"
        ) &&
        !istEingabefeld
      ) {
        event.preventDefault();
        quizNaechsteFrage();
        return;
      }

      if (
        !quizState.frageBeantwortet &&
        event.key.toLowerCase() === "h" &&
        !istEingabefeld
      ) {
        event.preventDefault();
        quizZeigeNaechstenHinweis();
        return;
      }

      const frage =
        quizHoleAktuelleFrage();

      if (
        !frage ||
        quizState.frageBeantwortet
      ) {
        return;
      }

      if (
        (
          frage.typ ===
            "multiple-choice" ||
          frage.typ ===
            "wahr-falsch"
        ) &&
        /^[1-9]$/.test(
          event.key
        ) &&
        !istEingabefeld
      ) {
        const index =
          Number(event.key) - 1;

        const inputs = [
          ...document.querySelectorAll(
            'input[name="quiz-antwort"]'
          )
        ];

        if (inputs[index]) {
          inputs[index].checked =
            true;

          inputs[index].focus();
        }
      }
    }
  );
}


/* =========================================================
   SPEICHERDATEN BEREINIGEN
========================================================= */

function quizBereinigeGespeicherteIds() {
  const vorhandeneIds =
    new Set(
      QUIZ_ALLE_FRAGEN.map(
        frage => frage.id
      )
    );

  quizFavoriten =
    quizFavoriten.filter(
      id => vorhandeneIds.has(id)
    );

  quizSchwierigeFragen =
    quizSchwierigeFragen.filter(
      id => vorhandeneIds.has(id)
    );

  if (
    Array.isArray(
      quizTagesquiz.fragenIds
    )
  ) {
    quizTagesquiz.fragenIds =
      quizTagesquiz.fragenIds.filter(
        id => vorhandeneIds.has(id)
      );
  }

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.favoriten,
    quizFavoriten
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS
      .schwierigeFragen,
    quizSchwierigeFragen
  );

  quizStorageSchreiben(
    QUIZ_STORAGE_KEYS.tagesquiz,
    quizTagesquiz
  );
}


/* =========================================================
   STANDARD-AUSWAHL REPARIEREN
========================================================= */

function quizInitialisiereStandardauswahl() {
  const kategorien =
    quizHoleVerfuegbareKategorien().map(
      kategorie => kategorie.id
    );

  const schwierigkeiten =
    Object.keys(
      QUIZ_SCHWIERIGKEITEN
    );

  const fragetypen =
    quizHoleVerfuegbareFragetypen().map(
      fragetyp => fragetyp.id
    );

  quizState.ausgewaehlteKategorien =
    quizState.ausgewaehlteKategorien.filter(
      id => kategorien.includes(id)
    );

  quizState
    .ausgewaehlteSchwierigkeiten =
    quizState
      .ausgewaehlteSchwierigkeiten
      .filter(
        id =>
          schwierigkeiten.includes(id)
      );

  quizState.ausgewaehlteFragetypen =
    quizState.ausgewaehlteFragetypen.filter(
      id => fragetypen.includes(id)
    );

  if (
    quizState
      .ausgewaehlteKategorien
      .length === 0
  ) {
    quizState.ausgewaehlteKategorien = [
      ...kategorien
    ];
  }

  if (
    quizState
      .ausgewaehlteSchwierigkeiten
      .length === 0
  ) {
    quizState
      .ausgewaehlteSchwierigkeiten = [
      ...schwierigkeiten
    ];
  }

  if (
    quizState
      .ausgewaehlteFragetypen
      .length === 0
  ) {
    quizState.ausgewaehlteFragetypen = [
      ...fragetypen
    ];
  }
}


/* =========================================================
   SICHTBARKEIT DER SEITE
========================================================= */

function quizBindeSichtbarkeitswechsel() {
  document.addEventListener(
    "visibilitychange",
    () => {
      if (
        document.hidden &&
        quizState.timerId !== null
      ) {
        quizStoppeTimer();
        return;
      }

      if (
        !document.hidden &&
        quizState.quizGestartet &&
        quizState.zeitlimitAktiv &&
        !quizState.frageBeantwortet
      ) {
        quizStarteFragenTimer();
      }
    }
  );
}


/* =========================================================
   FENSTER VOR VERLASSEN WARNEN
========================================================= */

function quizBindeVerlassenWarnung() {
  window.addEventListener(
    "beforeunload",
    event => {
      if (
        !quizState.quizGestartet
      ) {
        return;
      }

      event.preventDefault();
      event.returnValue = "";
    }
  );
}


/* =========================================================
   QUIZ-DIAGNOSE
========================================================= */

function quizFuehreSystemdiagnoseAus() {
  const fehler = [];

  const root =
    document.querySelector(
      QUIZ_CONFIG.rootSelector
    );

  if (!root) {
    fehler.push(
      `Root-Element fehlt: ${QUIZ_CONFIG.rootSelector}`
    );
  }

  if (
    !Array.isArray(
      QUIZ_ALLE_FRAGEN
    ) ||
    QUIZ_ALLE_FRAGEN.length === 0
  ) {
    fehler.push(
      "Es wurden keine Quizfragen gefunden."
    );
  }

  const fragenFehler =
    quizValidiereAlleFragen();

  if (
    fragenFehler.length > 0
  ) {
    fehler.push(
      `${fragenFehler.length} Fragen besitzen ungültige Daten.`
    );
  }

  if (fehler.length > 0) {
    console.warn(
      "Quiz-Systemdiagnose:",
      fehler
    );

    return {
      erfolgreich: false,
      fehler
    };
  }

  console.info(
    `Quiz erfolgreich geladen: ${QUIZ_ALLE_FRAGEN.length} Fragen verfügbar.`
  );

  return {
    erfolgreich: true,
    fehler: []
  };
}


/* =========================================================
   QUIZ INITIALISIEREN
========================================================= */

function quizInitialisieren() {
  quizLadeAlleBenutzerdaten();

  quizStatistik =
    quizVerschmelzeMitStandard(
      QUIZ_STANDARD_STATISTIK,
      quizStatistik
    );

  quizEinstellungen =
    quizVerschmelzeMitStandard(
      QUIZ_STANDARD_EINSTELLUNGEN,
      quizEinstellungen
    );

  quizTagesquiz =
    quizVerschmelzeMitStandard(
      QUIZ_STANDARD_TAGESQUIZ,
      quizTagesquiz
    );

  quizState.modus =
    quizEinstellungen.modus;

  quizState.zeitlimitAktiv =
    quizEinstellungen
      .zeitlimitAktiv;

  quizState.zeitProFrage =
    quizEinstellungen
      .zeitProFrage;

  quizBereinigeGespeicherteIds();

  quizInitialisiereStandardauswahl();

  quizAktualisiereAnimationsklasse();

  const diagnose =
    quizFuehreSystemdiagnoseAus();

  if (!diagnose.erfolgreich) {
    const root =
      document.querySelector(
        QUIZ_CONFIG.rootSelector
      );

    if (root) {
      root.innerHTML = `
        <div class="sf-quiz-systemfehler">
          <span>
            ⚠️
          </span>

          <h2>
            Das Quiz konnte nicht vollständig geladen werden.
          </h2>

          <p>
            Prüfe die Browser-Konsole auf weitere Hinweise.
          </p>
        </div>
      `;
    }

    return;
  }

  quizRenderApp();

  quizBindeGlobaleTastatursteuerung();

  quizBindeSichtbarkeitswechsel();

  quizBindeVerlassenWarnung();
}


/* =========================================================
   AUTOMATISCHER START
========================================================= */

if (
  document.readyState === "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    quizInitialisieren,
    {
      once: true
    }
  );
} else {
  quizInitialisieren();
}


/* =========================================================
   ÖFFENTLICHE SCHNITTSTELLE

   Dadurch können einzelne Funktionen bei Bedarf auch aus
   anderen JavaScript-Dateien aufgerufen werden.
========================================================= */

window.SchoolFoolsQuiz = {
  starten:
    quizStarteIndividuellesQuiz,

  tagesquizStarten:
    quizStarteTagesquiz,

  schwierigeFragenStarten:
    quizStarteSchwierigeFragen,

  favoritenStarten:
    quizStarteFavoritenQuiz,

  seiteWechseln:
    quizWechsleSeite,

  neuRendern:
    quizRenderApp,

  frageNachId:
    quizHoleFrageNachId,

  fragenFiltern:
    quizFiltereFragen,

  statistik:
    () =>
      quizKopiereObjekt(
        quizStatistik
      ),

  einstellungen:
    () =>
      quizKopiereObjekt(
        quizEinstellungen
      ),

  alleFragen:
    () =>
      quizKopiereObjekt(
        QUIZ_ALLE_FRAGEN
      )
};
