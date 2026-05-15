/* =========================
   DATENBANK DER GYM-STUFEN
========================= */

const DEUTSCH_GYM_STUFEN = [
  {
    id: "gym1",
    titel: "GYM1",
    beschreibung:
      "Grundlagen der deutschen Sprache: Grammatik, Satzbau, Ausdruck und stilistische Sicherheit.",
    themen: [
      {
        id: "grammatik-stil",
        nummer: "1",
        titel: "Grammatik und Stil",
        kurzbeschreibung:
          "Satzbau, Wortarten, Fälle, Zeiten, Kommasetzung und präziser Ausdruck als Grundlage für gute schulische Texte.",
        lernziele: [
          "Du kannst Wortarten wie Nomen, Verb, Adjektiv, Pronomen, Präposition und Konjunktion sicher unterscheiden.",
          "Du kannst Subjekt, Prädikat, Objekt und adverbiale Bestimmungen in einem Satz erkennen.",
          "Du verstehst, wie Hauptsätze und Nebensätze aufgebaut sind.",
          "Du kannst Kommas bei Nebensätzen, Aufzählungen und Einschüben korrekt setzen.",
          "Du kannst zwischen Umgangssprache, Standardsprache und gehobener Schriftsprache unterscheiden.",
          "Du kannst ungenaue, zu lange oder holprige Sätze sprachlich verbessern.",
          "Du kannst Tempusformen bewusst verwenden und Zeitwechsel vermeiden.",
          "Du kannst deinen Ausdruck an die Textsorte anpassen."
        ],
        theorie: [
          {
            titel: "Warum Grammatik im Gymnasium wichtig ist",
            text:
              "Grammatik ist nicht nur Fehlervermeidung. Sie ist die Grundlage dafür, Gedanken präzise, logisch und überzeugend auszudrücken. Wer Satzstrukturen versteht, kann eigene Texte besser planen, fremde Texte genauer analysieren und sprachliche Wirkungen bewusster beschreiben."
          },
          {
            titel: "Wortarten",
            text:
              "Wortarten beschreiben die Funktion einzelner Wörter. Nomen bezeichnen Dinge, Personen, Gefühle oder Begriffe. Verben drücken Handlungen, Vorgänge oder Zustände aus. Adjektive beschreiben Eigenschaften. Pronomen ersetzen oder begleiten Nomen. Präpositionen stellen Beziehungen her, zum Beispiel räumlich, zeitlich oder kausal. Konjunktionen verbinden Wörter, Satzteile oder ganze Sätze."
          },
          {
            titel: "Satzglieder",
            text:
              "Satzglieder sind funktionale Einheiten im Satz. Das Subjekt nennt meistens die handelnde oder betroffene Person oder Sache. Das Prädikat ist der verbale Kern des Satzes. Objekte ergänzen das Verb. Adverbiale Bestimmungen geben genauere Informationen zu Ort, Zeit, Grund, Art und Weise oder Zweck."
          },
          {
            titel: "Hauptsatz und Nebensatz",
            text:
              "Ein Hauptsatz kann grammatisch selbstständig stehen. In einem Nebensatz steht das konjugierte Verb im Deutschen meistens am Ende. Nebensätze werden häufig durch Wörter wie weil, obwohl, dass, wenn, während oder nachdem eingeleitet."
          },
          {
            titel: "Kommasetzung",
            text:
              "Kommas dienen der Strukturierung. Besonders wichtig sind Kommas zwischen Haupt- und Nebensätzen, bei Aufzählungen, bei Einschüben und bei Infinitivgruppen mit zu, wenn sie erweitert sind oder von bestimmten Signalwörtern abhängen."
          },
          {
            titel: "Tempus und Zeitlogik",
            text:
              "Die Wahl der Zeitform muss zur Aussage passen. In Inhaltsangaben verwendet man meistens Präsens. Bei Vorzeitigkeit kann Perfekt oder Plusquamperfekt nötig sein. Unbegründete Zeitwechsel wirken unsauber und stören den Textfluss."
          },
          {
            titel: "Stil und Ausdruck",
            text:
              "Stil bedeutet, wie ein Text sprachlich wirkt. Ein guter schulischer Stil ist präzise, sachlich, klar und der Textsorte angemessen. Umgangssprachliche Formulierungen, unnötige Füllwörter und vage Aussagen schwächen einen Text."
          },
          {
            titel: "Präzision statt Allgemeinheit",
            text:
              "Formulierungen wie Der Autor macht viele Sachen mit Sprache oder Der Text ist irgendwie spannend sind zu ungenau. Besser ist es, genau zu benennen, wodurch eine Wirkung entsteht, zum Beispiel durch kurze Hauptsätze, düstere Bildsprache oder rhetorische Fragen."
          }
        ],
        methoden: [
          {
            titel: "Methode: Einen Satz grammatisch untersuchen",
            schritte: [
              "1. Suche zuerst das konjugierte Verb, weil es den Satz grammatisch organisiert.",
              "2. Frage nach dem Subjekt: Wer oder was tut etwas oder befindet sich in einem Zustand?",
              "3. Prüfe, welche Ergänzungen das Verb verlangt, zum Beispiel Akkusativobjekt, Dativobjekt oder Präpositionalobjekt.",
              "4. Bestimme adverbiale Angaben: Wann? Wo? Warum? Wie? Wozu?",
              "5. Prüfe, ob Hauptsatz und Nebensatz korrekt verbunden sind.",
              "6. Kontrolliere die Kommasetzung.",
              "7. Lies den Satz abschliessend auf Verständlichkeit und Stil."
            ]
          },
          {
            titel: "Methode: Einen schlechten Satz verbessern",
            schritte: [
              "1. Markiere unklare Wörter wie irgendwie, Sachen, gut, schlecht oder interessant.",
              "2. Frage dich: Was genau ist gemeint?",
              "3. Ersetze allgemeine Wörter durch präzisere Begriffe.",
              "4. Teile überlange Sätze in sinnvolle Einheiten.",
              "5. Streiche Wiederholungen und Füllwörter.",
              "6. Achte auf eine sachliche und schulisch passende Sprache.",
              "7. Prüfe, ob der neue Satz inhaltlich genauer ist als der alte."
            ]
          },
          {
            titel: "Methode: Kommas bei Nebensätzen setzen",
            schritte: [
              "1. Suche nach typischen Einleitewörtern wie weil, dass, obwohl, wenn, als, während oder nachdem.",
              "2. Prüfe, ob ein Nebensatz vorliegt.",
              "3. Beachte: Im Nebensatz steht das konjugierte Verb meist am Ende.",
              "4. Trenne Hauptsatz und Nebensatz durch ein Komma.",
              "5. Wenn der Nebensatz eingeschoben ist, setzt du am Anfang und am Ende ein Komma.",
              "6. Lies den Satz noch einmal und kontrolliere, ob die Satzstruktur klar ist."
            ]
          },
          {
            titel: "Methode: Stil einer schulischen Antwort verbessern",
            schritte: [
              "1. Vermeide Ich finde, wenn eine sachliche Analyse verlangt ist.",
              "2. Verwende präzise Fachbegriffe.",
              "3. Begründe deine Aussagen.",
              "4. Verknüpfe Beobachtung und Wirkung.",
              "5. Schreibe nicht: Der Autor will zeigen, wenn du es nicht belegen kannst.",
              "6. Formuliere vorsichtiger: Der Text legt nahe, dass ... oder Die Formulierung wirkt ..."
            ]
          }
        ],
        merksaetze: [
          "Grammatik ist die Architektur eines Satzes.",
          "Ein guter Satz ist nicht möglichst lang, sondern möglichst klar.",
          "Das Verb ist der Kern des Satzes.",
          "Nebensätze erkennt man oft daran, dass das konjugierte Verb am Ende steht.",
          "Kommas machen die Struktur eines Satzes sichtbar.",
          "Präziser Ausdruck ist wichtiger als komplizierte Formulierungen.",
          "In einer Analyse ersetzt man Alltagssprache durch Fachsprache.",
          "Guter Stil bedeutet: klar, passend, präzise und nicht unnötig überladen."
        ],
        typischeFehler: [
          {
            fehler: "Man schreibt sehr lange Sätze mit mehreren Gedanken ohne klare Ordnung.",
            korrektur:
              "Teile den Satz in mehrere klare Einheiten. Jeder Satz sollte einen Hauptgedanken tragen."
          },
          {
            fehler: "Man verwendet Wörter wie irgendwie, halt, Sachen, gut oder schlecht.",
            korrektur:
              "Ersetze solche Wörter durch präzisere Begriffe, zum Beispiel spannungsvoll, widersprüchlich, sachlich, emotional oder abwertend."
          },
          {
            fehler: "Man setzt Kommas nur nach Gefühl.",
            korrektur:
              "Bestimme zuerst die Satzstruktur. Besonders Hauptsatz-Nebensatz-Gefüge brauchen Kommas."
          },
          {
            fehler: "Man wechselt ohne Grund zwischen Präsens, Präteritum und Perfekt.",
            korrektur:
              "Entscheide dich passend zur Textsorte. Inhaltsangaben und Analysen stehen normalerweise im Präsens."
          },
          {
            fehler: "Man verwechselt Autor, Erzähler und Sprecher.",
            korrektur:
              "In literarischen Texten ist die sprechende Instanz nicht automatisch der reale Autor."
          }
        ],
        aufgaben: [
          {
            titel: "Aufgabe 1: Ungenaue Formulierung verbessern",
            schwierigkeit: "einfach",
            aufgabe:
              "Verbessere den Satz: Der Text ist irgendwie spannend und der Autor macht viele Sachen mit Sprache.",
            loesung: [
              "Der Satz ist zu ungenau und enthält Umgangssprache.",
              "Irgendwie sollte gestrichen werden.",
              "Viele Sachen mit Sprache muss durch konkrete Beobachtungen ersetzt werden.",
              "Eine bessere Version wäre: Der Text erzeugt Spannung, weil kurze Hauptsätze, bedrohliche Verben und düstere Bildsprache verwendet werden.",
              "Diese Version ist genauer, weil sie die sprachlichen Mittel benennt und mit ihrer Wirkung verbindet."
            ]
          },
          {
            titel: "Aufgabe 2: Hauptsatz und Nebensatz erkennen",
            schwierigkeit: "mittel",
            aufgabe:
              "Setze die Kommas und erkläre die Satzstruktur: Obwohl der Erzähler ruhig wirkt zeigt seine Wortwahl dass er innerlich verunsichert ist.",
            loesung: [
              "Richtig lautet der Satz: Obwohl der Erzähler ruhig wirkt, zeigt seine Wortwahl, dass er innerlich verunsichert ist.",
              "Obwohl der Erzähler ruhig wirkt ist ein Nebensatz.",
              "zeigt seine Wortwahl ist der Hauptsatz.",
              "dass er innerlich verunsichert ist ist ein weiterer Nebensatz.",
              "Die Kommas trennen die Nebensätze vom Hauptsatz."
            ]
          },
          {
            titel: "Aufgabe 3: Stilistisch verbessern",
            schwierigkeit: "mittel",
            aufgabe:
              "Verbessere den Satz: Die Figur ist schlecht, weil sie lügt und so.",
            loesung: [
              "Der Satz ist wertend, unpräzise und umgangssprachlich.",
              "Schlecht ist zu allgemein.",
              "und so ist ungeeignet für einen schulischen Text.",
              "Besser: Die Figur wirkt moralisch fragwürdig, weil sie bewusst die Wahrheit verschweigt und dadurch das Vertrauen der anderen Figuren missbraucht.",
              "Die neue Formulierung ist präziser und begründet die Bewertung."
            ]
          },
          {
            titel: "Aufgabe 4: Satzglieder bestimmen",
            schwierigkeit: "mittel",
            aufgabe:
              "Bestimme die wichtigsten Satzglieder: Der alte Mann erzählt dem Kind am Abend eine rätselhafte Geschichte.",
            loesung: [
              "Prädikat: erzählt.",
              "Subjekt: Der alte Mann.",
              "Dativobjekt: dem Kind.",
              "Akkusativobjekt: eine rätselhafte Geschichte.",
              "Adverbiale Bestimmung der Zeit: am Abend.",
              "Der Satz ist klar aufgebaut, weil das Verb erzählen mehrere Ergänzungen verlangt."
            ]
          }
        ],
        muendlich: [
          {
            frage: "Warum ist Grammatik für das Fach Deutsch wichtig?",
            antwort:
              "Grammatik ermöglicht präzises Verstehen und Formulieren. Sie hilft, Satzstrukturen zu erkennen, Fehler zu vermeiden und sprachliche Wirkungen genauer zu beschreiben."
          },
          {
            frage: "Was unterscheidet Umgangssprache von schulischer Standardsprache?",
            antwort:
              "Umgangssprache ist oft spontaner, ungenauer und alltagsnah. Schulische Standardsprache ist sachlicher, präziser und stärker an klarer Argumentation oder Analyse orientiert."
          },
          {
            frage: "Warum sollte man in einer Analyse präzise Fachbegriffe verwenden?",
            antwort:
              "Fachbegriffe zeigen genau, was beobachtet wurde. Sie machen eine Analyse nachvollziehbarer und vermeiden vage Aussagen."
          }
        ],
        nachtVorTest: [
          "Kannst du Subjekt, Prädikat und Objekt bestimmen?",
          "Kannst du Hauptsatz und Nebensatz unterscheiden?",
          "Kannst du Kommas bei Nebensätzen setzen?",
          "Kannst du ungenaue Wörter durch präzise Begriffe ersetzen?",
          "Vermeidest du Umgangssprache in schulischen Texten?",
          "Schreibst du Analysen im Präsens?",
          "Kannst du deine Formulierungen sachlich und genau halten?"
        ]
      }
    ]
  },

  {
    id: "gym2",
    titel: "GYM2",
    beschreibung:
      "Schreibtraining: Texte planen, strukturieren, argumentieren, formulieren und überarbeiten.",
    themen: [
      {
        id: "schreibtraining",
        nummer: "1",
        titel: "Schreibtraining",
        kurzbeschreibung:
          "Von der Aufgabenstellung zum fertigen Text: Ideen sammeln, gliedern, Absätze aufbauen, sprachlich präzise formulieren und systematisch überarbeiten.",
        lernziele: [
          "Du kannst eine Aufgabenstellung genau lesen und den Operator erkennen.",
          "Du kannst zwischen beschreiben, analysieren, interpretieren, erklären, beurteilen und erörtern unterscheiden.",
          "Du kannst vor dem Schreiben eine sinnvolle Gliederung erstellen.",
          "Du kannst Absätze mit klarer Funktion schreiben.",
          "Du kannst Einleitung, Hauptteil und Schluss passend zur Textsorte gestalten.",
          "Du kannst Gedanken logisch miteinander verbinden.",
          "Du kannst deinen Text sprachlich und inhaltlich überarbeiten.",
          "Du kannst Behauptungen begründen und mit Beispielen stützen."
        ],
        theorie: [
          {
            titel: "Schreiben als Denkprozess",
            text:
              "Gutes Schreiben ist nicht nur das Aufschreiben fertiger Gedanken. Beim Schreiben ordnet, prüft und entwickelt man Gedanken. Deshalb gehören Planung, Formulierung und Überarbeitung zusammen."
          },
          {
            titel: "Die Aufgabenstellung",
            text:
              "Die Aufgabenstellung entscheidet, was du tun musst. Der Operator ist besonders wichtig. Analysiere verlangt eine Untersuchung der Gestaltung und Wirkung. Erörtere verlangt Argumente. Beurteile verlangt ein begründetes Urteil."
          },
          {
            titel: "Der rote Faden",
            text:
              "Ein Text hat einen roten Faden, wenn alle Teile logisch miteinander verbunden sind. Der Leser soll jederzeit verstehen, warum ein Gedanke auf den nächsten folgt."
          },
          {
            titel: "Absätze",
            text:
              "Ein Absatz ist keine zufällige optische Unterbrechung. Jeder Absatz sollte einen klaren Teilgedanken enthalten. Beginnt ein neuer Gedanke, ein neues Argument oder ein neuer Analyseschritt, ist ein neuer Absatz sinnvoll."
          },
          {
            titel: "Einleitung",
            text:
              "Die Einleitung führt zum Thema hin. Je nach Textsorte nennt sie Titel, Autor, Textsorte, Erscheinungsjahr, Thema oder Fragestellung. Sie sollte nicht zu allgemein sein und keine leeren Floskeln enthalten."
          },
          {
            titel: "Hauptteil",
            text:
              "Der Hauptteil ist der argumentative oder analytische Kern des Textes. Hier werden Gedanken entfaltet, belegt, erklärt und miteinander verbunden."
          },
          {
            titel: "Schluss",
            text:
              "Der Schluss fasst nicht einfach alles mechanisch zusammen, sondern zieht ein Fazit. Er sollte zur Fragestellung zurückführen und den Text gedanklich abrunden."
          },
          {
            titel: "Überarbeitung",
            text:
              "Überarbeitung ist ein eigener Arbeitsschritt. Dabei prüft man zuerst Inhalt und Struktur, danach Stil, Grammatik, Rechtschreibung und Zeichensetzung."
          }
        ],
        methoden: [
          {
            titel: "Methode: Eine Schreibaufgabe erschliessen",
            schritte: [
              "1. Lies die Aufgabenstellung zweimal.",
              "2. Markiere den Operator.",
              "3. Kläre, welche Textsorte verlangt ist.",
              "4. Bestimme das Thema und die genaue Fragestellung.",
              "5. Notiere, welches Material verwendet werden muss.",
              "6. Überlege, welche Leistung erwartet wird: Zusammenfassung, Analyse, Deutung, Argumentation oder Urteil.",
              "7. Plane erst danach deinen Text."
            ]
          },
          {
            titel: "Methode: Eine Gliederung erstellen",
            schritte: [
              "1. Sammle zuerst ungeordnet Ideen.",
              "2. Streiche Gedanken, die nicht zur Fragestellung passen.",
              "3. Ordne die übrigen Gedanken nach logischer Reihenfolge.",
              "4. Gruppiere verwandte Gedanken zu Abschnitten.",
              "5. Formuliere für jeden Abschnitt eine klare Funktion.",
              "6. Prüfe, ob Einleitung, Hauptteil und Schluss zusammenpassen.",
              "7. Schreibe erst danach den Fliesstext."
            ]
          },
          {
            titel: "Methode: Einen starken Absatz schreiben",
            schritte: [
              "1. Beginne mit einem klaren Teilgedanken.",
              "2. Erkläre diesen Gedanken genauer.",
              "3. Füge ein Beispiel, einen Beleg oder eine Begründung hinzu.",
              "4. Erkläre, warum dieser Punkt wichtig ist.",
              "5. Verbinde den Absatz mit der Fragestellung.",
              "6. Vermeide, mehrere unverbundene Gedanken in einen Absatz zu packen."
            ]
          },
          {
            titel: "Methode: Text überarbeiten",
            schritte: [
              "1. Prüfe zuerst: Beantwortet der Text die Aufgabenstellung?",
              "2. Prüfe den Aufbau: Gibt es einen roten Faden?",
              "3. Prüfe die Absätze: Hat jeder Absatz eine klare Funktion?",
              "4. Prüfe die Sprache: Gibt es ungenaue oder umgangssprachliche Formulierungen?",
              "5. Prüfe die Satzstruktur: Sind Sätze zu lang oder unklar?",
              "6. Prüfe Grammatik, Rechtschreibung und Kommas.",
              "7. Lies den Text zuletzt noch einmal als Ganzes."
            ]
          }
        ],
        merksaetze: [
          "Wer die Aufgabenstellung nicht genau versteht, schreibt am Thema vorbei.",
          "Ein guter Text beginnt mit einer klaren Planung.",
          "Jeder Absatz braucht eine erkennbare Funktion.",
          "Ein roter Faden entsteht durch logische Ordnung und passende Verknüpfungen.",
          "Behauptungen werden erst durch Begründungen überzeugend.",
          "Ein Beispiel ersetzt keine Begründung, sondern unterstützt sie.",
          "Überarbeitung ist kein Zusatz, sondern Teil des Schreibprozesses.",
          "Gute Sprache ist präzise, nicht künstlich kompliziert."
        ],
        typischeFehler: [
          {
            fehler: "Man beginnt sofort zu schreiben, ohne den Operator zu beachten.",
            korrektur:
              "Markiere zuerst den Operator und kläre, welche Denkhandlung verlangt wird."
          },
          {
            fehler: "Der Text hat keine erkennbare Struktur.",
            korrektur:
              "Erstelle vor dem Schreiben eine Gliederung mit klaren Abschnitten."
          },
          {
            fehler: "Absätze werden zufällig gesetzt.",
            korrektur:
              "Setze Absätze dort, wo ein neuer Teilgedanke beginnt."
          },
          {
            fehler: "Man schreibt viele Behauptungen, begründet sie aber nicht.",
            korrektur:
              "Jede wichtige Behauptung braucht eine Begründung oder ein Beispiel."
          },
          {
            fehler: "Der Schluss wiederholt nur die Einleitung.",
            korrektur:
              "Der Schluss soll ein Ergebnis formulieren und zur Fragestellung zurückführen."
          }
        ],
        aufgaben: [
          {
            titel: "Aufgabe 1: Operator erkennen",
            schwierigkeit: "einfach",
            aufgabe:
              "Erkläre den Unterschied zwischen den Operatoren beschreiben, analysieren und beurteilen.",
            loesung: [
              "Beschreiben bedeutet, sachlich wiederzugeben, was erkennbar ist.",
              "Analysieren bedeutet, etwas in Bestandteile zu zerlegen und deren Funktion oder Wirkung zu erklären.",
              "Beurteilen bedeutet, auf Grundlage von Argumenten ein begründetes Urteil zu formulieren.",
              "Die Operatoren verlangen also unterschiedlich anspruchsvolle Denkhandlungen."
            ]
          },
          {
            titel: "Aufgabe 2: Gliederung erstellen",
            schwierigkeit: "mittel",
            aufgabe:
              "Erstelle eine Gliederung zur Frage: Sollte die Schule später beginnen?",
            loesung: [
              "Einleitung: Kurze Hinführung zum Thema Schlaf, Konzentration und Schulalltag.",
              "Hauptteil 1: Argument für späteren Schulbeginn: Jugendliche sind morgens oft weniger leistungsfähig.",
              "Hauptteil 2: Weiteres Pro-Argument: Mehr Schlaf kann Konzentration und Gesundheit fördern.",
              "Hauptteil 3: Gegenargument: Späterer Beginn kann Freizeit, Sport und Familienorganisation erschweren.",
              "Hauptteil 4: Abwägung: Ein späterer Beginn wäre sinnvoll, müsste aber organisatorisch gut geplant werden.",
              "Schluss: Begründetes Fazit zur Ausgangsfrage."
            ]
          },
          {
            titel: "Aufgabe 3: Absatz verbessern",
            schwierigkeit: "mittel",
            aufgabe:
              "Verbessere diesen Absatzanfang: Handys sind gut. Viele benutzen sie. In der Schule kann man auch Sachen machen.",
            loesung: [
              "Der Absatz ist zu ungenau und argumentiert nicht.",
              "Eine bessere Version wäre: Smartphones können im Unterricht sinnvoll eingesetzt werden, wenn sie gezielt für Lernzwecke genutzt werden. Sie ermöglichen schnelle Recherche, digitale Zusammenarbeit und den Zugriff auf Lernplattformen. Entscheidend ist jedoch, dass klare Regeln verhindern, dass sie zur Ablenkung werden.",
              "Die verbesserte Version enthält eine klare These, Begründungen und eine Einschränkung."
            ]
          },
          {
            titel: "Aufgabe 4: Text überarbeiten",
            schwierigkeit: "schwer",
            aufgabe:
              "Formuliere den Satz schulisch präziser: Ich finde, der Text zeigt halt, dass die Person traurig ist.",
            loesung: [
              "Ich finde ist für eine Analyse meist zu subjektiv.",
              "halt ist umgangssprachlich.",
              "die Person ist ungenau, falls Figur oder Erzähler gemeint ist.",
              "Besser: Der Text verdeutlicht die Traurigkeit der Figur durch ihre einsilbigen Antworten und die wiederholte Beschreibung ihrer körperlichen Erschöpfung.",
              "Die neue Version benennt konkrete Hinweise und verbindet sie mit der Wirkung."
            ]
          }
        ],
        muendlich: [
          {
            frage: "Warum ist der Operator in einer Aufgabenstellung so wichtig?",
            antwort:
              "Der Operator zeigt, welche Denkhandlung verlangt wird. Ohne ihn besteht die Gefahr, dass man nur zusammenfasst, obwohl eine Analyse, Beurteilung oder Erörterung erwartet wird."
          },
          {
            frage: "Was macht einen guten Absatz aus?",
            antwort:
              "Ein guter Absatz enthält einen klaren Teilgedanken, entfaltet ihn mit Begründung oder Beleg und verbindet ihn mit der übergeordneten Fragestellung."
          },
          {
            frage: "Was bedeutet roter Faden?",
            antwort:
              "Der rote Faden ist die logische Verbindung der Gedanken. Er sorgt dafür, dass der Text nicht wie eine Sammlung einzelner Ideen wirkt."
          }
        ],
        nachtVorTest: [
          "Hast du den Operator verstanden?",
          "Hast du eine klare Gliederung?",
          "Hat jeder Absatz eine Funktion?",
          "Begründest du deine Aussagen?",
          "Verwendest du passende Beispiele oder Belege?",
          "Ist dein Schluss mehr als eine Wiederholung?",
          "Hast du Sprache, Grammatik und Kommas kontrolliert?"
        ]
      }
    ]
  },

  {
    id: "gym3",
    titel: "GYM3",
    beschreibung:
      "Literatur verstehen und sprachliche Gestaltungsmittel sicher erkennen, benennen und deuten.",
    themen: [
      {
        id: "literaturverstaendnis",
        nummer: "1",
        titel: "Literaturverständnis",
        kurzbeschreibung:
          "Literarische Texte nicht nur nacherzählen, sondern Figuren, Konflikte, Motive, Erzählweise und Deutung systematisch untersuchen.",
        lernziele: [
          "Du kannst Handlung und Deutung eines literarischen Textes unterscheiden.",
          "Du kannst Figuren anhand von Verhalten, Sprache, Gedanken und Beziehungen charakterisieren.",
          "Du kannst zentrale Konflikte erkennen und erklären.",
          "Du kannst Motive, Symbole und Themen eines Textes benennen.",
          "Du kannst Erzählperspektive und Erzählverhalten untersuchen.",
          "Du kannst direkte und indirekte Charakterisierung unterscheiden.",
          "Du kannst literarische Aussagen mit Textbelegen stützen.",
          "Du kannst eine begründete Gesamtdeutung formulieren."
        ],
        theorie: [
          {
            titel: "Literatur verstehen heisst mehr als nacherzählen",
            text:
              "Eine Inhaltsangabe beantwortet die Frage, was passiert. Literaturverständnis geht weiter: Es fragt, warum etwas passiert, wie es dargestellt wird und welche Bedeutung daraus entsteht. Entscheidend ist die Verbindung von Handlung, Sprache, Figuren und Deutung."
          },
          {
            titel: "Figurenanalyse",
            text:
              "Figuren werden durch ihr Verhalten, ihre Sprache, ihre Gedanken, ihr Verhältnis zu anderen Figuren und durch Erzählerkommentare charakterisiert. Eine gute Figurenanalyse beschreibt nicht nur Eigenschaften, sondern begründet sie am Text."
          },
          {
            titel: "Direkte und indirekte Charakterisierung",
            text:
              "Bei direkter Charakterisierung wird eine Eigenschaft ausdrücklich genannt. Bei indirekter Charakterisierung muss man aus Verhalten, Sprache oder Reaktionen anderer Figuren auf Eigenschaften schliessen."
          },
          {
            titel: "Konflikt",
            text:
              "Ein Konflikt ist eine Spannung zwischen gegensätzlichen Kräften. Das kann ein äusserer Konflikt zwischen Figuren sein oder ein innerer Konflikt innerhalb einer Figur, zum Beispiel zwischen Pflicht und Wunsch, Angst und Mut oder Anpassung und Widerstand."
          },
          {
            titel: "Motiv und Thema",
            text:
              "Ein Thema ist ein übergeordneter Gegenstand, etwa Liebe, Schuld, Macht oder Freiheit. Ein Motiv ist ein wiederkehrendes Element, das dieses Thema konkretisiert, zum Beispiel ein Fenster als Motiv für Sehnsucht oder Grenze."
          },
          {
            titel: "Symbol",
            text:
              "Ein Symbol ist ein konkretes Zeichen, das über sich hinausweist. Eine zerbrochene Uhr kann zum Beispiel für Stillstand, Verlust oder das Ende einer Lebensphase stehen. Die Bedeutung ergibt sich aus dem Textzusammenhang."
          },
          {
            titel: "Erzählperspektive",
            text:
              "Die Erzählperspektive bestimmt, was Leserinnen und Leser wissen. Ein Ich-Erzähler wirkt subjektiv und begrenzt. Ein personaler Erzähler bleibt nahe bei einer Figur. Ein auktorialer Erzähler kann Überblick, Kommentare und Vorausdeutungen geben."
          },
          {
            titel: "Deutung",
            text:
              "Eine Deutung ist eine begründete Erklärung der Bedeutung eines Textes. Sie darf nicht beliebig sein, sondern muss durch Textbeobachtungen gestützt werden."
          }
        ],
        methoden: [
          {
            titel: "Methode: Literarischen Text erschliessen",
            schritte: [
              "1. Lies den Text zuerst ohne Markieren, um Handlung und Stimmung zu erfassen.",
              "2. Kläre unbekannte Wörter und schwierige Stellen.",
              "3. Fasse die Handlung knapp zusammen.",
              "4. Markiere wichtige Figuren, Konflikte und Wendepunkte.",
              "5. Achte auf auffällige Sprache, Bilder und Wiederholungen.",
              "6. Bestimme Erzählperspektive und Erzählverhalten.",
              "7. Frage: Welche zentrale Spannung oder Aussage trägt der Text?",
              "8. Formuliere eine Deutung, die du mit Textstellen begründen kannst."
            ]
          },
          {
            titel: "Methode: Figur charakterisieren",
            schritte: [
              "1. Sammle alle wichtigen Informationen zur Figur.",
              "2. Unterscheide äussere Merkmale, soziale Rolle und innere Eigenschaften.",
              "3. Untersuche, wie die Figur spricht.",
              "4. Untersuche, wie sie handelt und worauf sie reagiert.",
              "5. Beachte, wie andere Figuren über sie sprechen.",
              "6. Unterscheide direkte und indirekte Charakterisierung.",
              "7. Formuliere Eigenschaften nicht nur als Adjektive, sondern begründe sie.",
              "8. Erkläre, welche Funktion die Figur im Text hat."
            ]
          },
          {
            titel: "Methode: Konflikt analysieren",
            schritte: [
              "1. Bestimme, zwischen welchen Personen, Werten oder Zielen eine Spannung besteht.",
              "2. Unterscheide inneren und äusseren Konflikt.",
              "3. Suche Textstellen, an denen der Konflikt sichtbar wird.",
              "4. Erkläre, wie der Konflikt die Handlung antreibt.",
              "5. Prüfe, ob der Konflikt gelöst, verschärft oder offen gelassen wird.",
              "6. Verbinde den Konflikt mit dem Thema des Textes."
            ]
          }
        ],
        merksaetze: [
          "Literatur muss nicht nur verstanden, sondern gedeutet werden.",
          "Eine Deutung ohne Textbeleg bleibt Behauptung.",
          "Figuren erkennt man vor allem an Verhalten, Sprache und Beziehungen.",
          "Ein Konflikt ist oft der Motor der Handlung.",
          "Motive wiederholen sich und tragen zur Bedeutung bei.",
          "Der Erzähler ist nicht automatisch der Autor.",
          "Die Erzählperspektive steuert das Wissen und die Sympathie der Lesenden.",
          "Gute Literaturinterpretation verbindet Inhalt, Form und Wirkung."
        ],
        typischeFehler: [
          {
            fehler: "Man erzählt nur die Handlung nach.",
            korrektur:
              "Erkläre zusätzlich, was die Handlung bedeutet und wie sie sprachlich dargestellt wird."
          },
          {
            fehler: "Man beschreibt eine Figur mit Adjektiven, ohne Belege zu nennen.",
            korrektur:
              "Begründe Eigenschaften durch Verhalten, Sprache oder konkrete Textstellen."
          },
          {
            fehler: "Man verwechselt Autor und Erzähler.",
            korrektur:
              "Der Erzähler ist eine Textinstanz. Der Autor ist die reale Person ausserhalb des Textes."
          },
          {
            fehler: "Man deutet Symbole völlig frei.",
            korrektur:
              "Symboldeutungen müssen aus dem Textzusammenhang hervorgehen."
          },
          {
            fehler: "Man ignoriert die Erzählperspektive.",
            korrektur:
              "Frage immer, wer erzählt, was diese Instanz weiss und wie zuverlässig sie wirkt."
          }
        ],
        aufgaben: [
          {
            titel: "Aufgabe 1: Direkte und indirekte Charakterisierung",
            schwierigkeit: "mittel",
            aufgabe:
              "Eine Figur sagt kaum etwas, hilft aber einer anderen Figur heimlich und verzichtet auf Anerkennung. Charakterisiere sie begründet.",
            loesung: [
              "Die Figur wirkt zurückhaltend, weil sie kaum spricht.",
              "Ihr heimliches Helfen zeigt Hilfsbereitschaft.",
              "Dass sie auf Anerkennung verzichtet, deutet auf Bescheidenheit hin.",
              "Man könnte sie als still, verantwortungsbewusst und uneigennützig charakterisieren.",
              "Wichtig ist: Diese Eigenschaften werden indirekt aus Verhalten erschlossen."
            ]
          },
          {
            titel: "Aufgabe 2: Konflikt erkennen",
            schwierigkeit: "mittel",
            aufgabe:
              "Eine Figur möchte ihre Familie nicht enttäuschen, will aber gleichzeitig ihren eigenen Lebensweg gehen. Welcher Konflikt liegt vor?",
            loesung: [
              "Es handelt sich um einen inneren Konflikt.",
              "Die Figur steht zwischen familiärer Erwartung und persönlicher Selbstbestimmung.",
              "Der Konflikt betrifft Werte wie Pflicht, Zugehörigkeit, Freiheit und Identität.",
              "Ein solcher Konflikt kann die Handlung stark prägen, weil jede Entscheidung einen Verlust bedeutet."
            ]
          },
          {
            titel: "Aufgabe 3: Symbol deuten",
            schwierigkeit: "schwer",
            aufgabe:
              "In einer Erzählung blickt eine Figur wiederholt durch ein geschlossenes Fenster nach draussen. Deute dieses Motiv.",
            loesung: [
              "Das Fenster trennt Innenraum und Aussenwelt.",
              "Der Blick nach draussen kann Sehnsucht, Hoffnung oder den Wunsch nach Veränderung zeigen.",
              "Dass das Fenster geschlossen ist, kann auf Begrenzung oder Gefangensein hinweisen.",
              "Die Wiederholung macht das Fenster zu einem Motiv.",
              "Eine mögliche Deutung: Die Figur sehnt sich nach Freiheit, bleibt aber in ihrer aktuellen Lebenssituation eingeschlossen."
            ]
          }
        ],
        muendlich: [
          {
            frage: "Was ist der Unterschied zwischen Inhaltsangabe und Interpretation?",
            antwort:
              "Eine Inhaltsangabe fasst zusammen, was geschieht. Eine Interpretation erklärt, welche Bedeutung das Geschehen, die Figuren und die sprachliche Gestaltung haben."
          },
          {
            frage: "Wie charakterisiert man eine Figur überzeugend?",
            antwort:
              "Man untersucht Verhalten, Sprache, Gedanken, Beziehungen und Erzählerkommentare und belegt daraus abgeleitete Eigenschaften am Text."
          },
          {
            frage: "Warum ist die Erzählperspektive wichtig?",
            antwort:
              "Sie bestimmt, was die Lesenden wissen, wie nah sie an Figuren herankommen und wie zuverlässig die Darstellung wirkt."
          }
        ],
        nachtVorTest: [
          "Kannst du Handlung und Deutung unterscheiden?",
          "Kannst du direkte und indirekte Charakterisierung erklären?",
          "Kannst du innere und äussere Konflikte unterscheiden?",
          "Kannst du Motive und Symbole im Textzusammenhang deuten?",
          "Kannst du Erzähler und Autor auseinanderhalten?",
          "Kannst du eine Deutung mit Textbelegen stützen?"
        ]
      },

      {
        id: "rhetorische-mittel",
        nummer: "2",
        titel: "Rhetorische Mittel",
        kurzbeschreibung:
          "Die wichtigsten rhetorischen und sprachlichen Mittel erkennen, korrekt benennen und ihre Wirkung im Textzusammenhang erklären.",
        lernziele: [
          "Du kannst zentrale rhetorische Mittel sicher erkennen.",
          "Du kannst zwischen Metapher, Vergleich, Personifikation und Symbol unterscheiden.",
          "Du kannst Wiederholung, Anapher, Parallelismus, Klimax und Antithese erklären.",
          "Du kannst Klangmittel und Satzfiguren benennen.",
          "Du kannst die Wirkung eines sprachlichen Mittels präzise formulieren.",
          "Du kannst rhetorische Mittel in Gedichten, Reden, Kommentaren und literarischen Texten analysieren.",
          "Du vermeidest reine Aufzählungen ohne Deutung.",
          "Du kannst Form, Inhalt und Wirkung miteinander verbinden."
        ],
        theorie: [
          {
            titel: "Was sind rhetorische Mittel?",
            text:
              "Rhetorische Mittel sind sprachliche Gestaltungsmittel. Sie beeinflussen, wie eine Aussage wirkt. Sie können betonen, veranschaulichen, emotionalisieren, zuspitzen, strukturieren oder einen Text rhythmisch gestalten."
          },
          {
            titel: "Benennen reicht nicht",
            text:
              "In einer Analyse genügt es nicht, ein sprachliches Mittel nur zu finden. Entscheidend ist die Wirkung. Man muss erklären, warum dieses Mittel an genau dieser Stelle wichtig ist."
          },
          {
            titel: "Metapher",
            text:
              "Eine Metapher ist eine Bedeutungsübertragung ohne Vergleichswort. Beispiel: ein Meer aus Stimmen. Die Metapher macht eine Aussage bildhaft und verdichtet Bedeutung."
          },
          {
            titel: "Vergleich",
            text:
              "Ein Vergleich verbindet zwei Bereiche mit einem Vergleichswort wie wie oder als. Beispiel: Er schweigt wie eine Mauer. Der Vergleich macht eine Eigenschaft anschaulich."
          },
          {
            titel: "Personifikation",
            text:
              "Eine Personifikation gibt Dingen, Naturerscheinungen oder abstrakten Begriffen menschliche Eigenschaften. Beispiel: Die Angst kroch durch den Raum. Dadurch wirkt etwas lebendig oder bedrohlich."
          },
          {
            titel: "Anapher",
            text:
              "Eine Anapher ist die Wiederholung eines Wortes oder einer Wortgruppe am Anfang aufeinanderfolgender Sätze oder Verse. Sie erzeugt Nachdruck, Rhythmus und Struktur."
          },
          {
            titel: "Parallelismus",
            text:
              "Ein Parallelismus ist ein gleichartiger Satzbau. Er macht Aussagen geordnet, einprägsam und rhythmisch."
          },
          {
            titel: "Antithese",
            text:
              "Eine Antithese stellt Gegensätze einander gegenüber. Sie verschärft einen Konflikt oder macht eine Spannung deutlich."
          },
          {
            titel: "Klimax",
            text:
              "Eine Klimax ist eine Steigerung. Sie führt von einem schwächeren zu einem stärkeren Ausdruck und erhöht die Intensität."
          },
          {
            titel: "Rhetorische Frage",
            text:
              "Eine rhetorische Frage erwartet keine echte Antwort. Sie lenkt die Aufmerksamkeit und kann Zustimmung, Zweifel oder Druck erzeugen."
          },
          {
            titel: "Hyperbel",
            text:
              "Eine Hyperbel ist eine starke Übertreibung. Sie kann etwas besonders emotional, dramatisch oder ironisch wirken lassen."
          },
          {
            titel: "Alliteration",
            text:
              "Eine Alliteration ist die Wiederholung gleicher Anfangslaute. Sie kann einen Ausdruck einprägsamer, klangvoller oder pointierter machen."
          }
        ],
        methoden: [
          {
            titel: "Methode: Rhetorisches Mittel analysieren",
            schritte: [
              "1. Suche eine sprachlich auffällige Stelle.",
              "2. Zitiere nur so viel wie nötig.",
              "3. Benenne das rhetorische Mittel korrekt.",
              "4. Erkläre kurz, wie das Mittel funktioniert.",
              "5. Beschreibe die Wirkung an dieser konkreten Stelle.",
              "6. Verbinde die Wirkung mit Thema, Figur, Stimmung oder Aussage des Textes.",
              "7. Vermeide die Formulierung: Das macht den Text schöner. Sie ist zu ungenau."
            ]
          },
          {
            titel: "Methode: Wirkung präzise formulieren",
            schritte: [
              "1. Frage: Wird etwas betont, veranschaulicht oder emotionalisiert?",
              "2. Frage: Entsteht Spannung, Ironie, Dramatik, Nähe oder Distanz?",
              "3. Frage: Unterstützt das Mittel eine Figurendarstellung oder ein Argument?",
              "4. Frage: Passt die sprachliche Form zur Gesamtaussage?",
              "5. Formuliere die Wirkung mit Begriffen wie eindringlich, bedrohlich, abwertend, feierlich, distanziert, dynamisch oder widersprüchlich."
            ]
          }
        ],
        merksaetze: [
          "Rhetorische Mittel sind kein Selbstzweck.",
          "Die Wirkung ist wichtiger als das blosse Benennen.",
          "Ein Mittel kann je nach Kontext unterschiedliche Wirkungen haben.",
          "Metapher bedeutet Bedeutungsübertragung ohne wie.",
          "Ein Vergleich enthält meistens wie oder als.",
          "Eine Personifikation macht Nicht-Menschliches menschlich.",
          "Anaphern und Parallelismen schaffen Nachdruck und Rhythmus.",
          "Eine gute Analyse verbindet sprachliche Form mit inhaltlicher Aussage."
        ],
        typischeFehler: [
          {
            fehler: "Man zählt viele rhetorische Mittel auf, erklärt aber keine Wirkung.",
            korrektur:
              "Wähle wenige wichtige Mittel und analysiere sie genau."
          },
          {
            fehler: "Man nennt jedes sprachliche Bild eine Metapher.",
            korrektur:
              "Prüfe, ob ein Vergleichswort vorhanden ist oder ob eine Personifikation vorliegt."
          },
          {
            fehler: "Man schreibt: Das macht den Text interessanter.",
            korrektur:
              "Erkläre genauer: Erzeugt es Spannung, Emotionalität, Anschaulichkeit, Ironie oder Nachdruck?"
          },
          {
            fehler: "Man trennt Sprache und Inhalt.",
            korrektur:
              "Zeige, wie die sprachliche Gestaltung die Aussage des Textes unterstützt."
          }
        ],
        aufgaben: [
          {
            titel: "Aufgabe 1: Metapher analysieren",
            schwierigkeit: "einfach",
            aufgabe:
              "Analysiere die Formulierung: Ein Sturm aus Vorwürfen brach über ihn herein.",
            loesung: [
              "Die Formulierung ist eine Metapher.",
              "Vorwürfe werden mit einem Sturm verglichen, ohne dass das Wort wie verwendet wird.",
              "Dadurch wirken die Vorwürfe heftig, unkontrollierbar und bedrohlich.",
              "Die Figur erscheint ihnen ausgeliefert.",
              "Die Metapher verstärkt also die emotionale Gewalt der Situation."
            ]
          },
          {
            titel: "Aufgabe 2: Anapher und Parallelismus",
            schwierigkeit: "mittel",
            aufgabe:
              "Analysiere: Wir warten auf Gerechtigkeit. Wir warten auf Antworten. Wir warten auf Veränderung.",
            loesung: [
              "Die Wiederholung von Wir warten am Satzanfang ist eine Anapher.",
              "Der ähnliche Satzbau bildet zusätzlich einen Parallelismus.",
              "Die Wiederholung erzeugt Nachdruck und Rhythmus.",
              "Die Aussage wirkt eindringlich und kollektiv.",
              "Inhaltlich wird die lange Dauer des Wartens betont."
            ]
          },
          {
            titel: "Aufgabe 3: Antithese deuten",
            schwierigkeit: "mittel",
            aufgabe:
              "Analysiere die Aussage: Er besitzt alles und hat doch nichts.",
            loesung: [
              "Die Formulierung enthält eine Antithese.",
              "Alles und nichts stehen im Gegensatz.",
              "Der Gegensatz zeigt eine Spannung zwischen äusserem Besitz und innerer Leere.",
              "Die Aussage wirkt zugespitzt und nachdenklich.",
              "Sie legt nahe, dass materieller Reichtum nicht automatisch Sinn oder Erfüllung bedeutet."
            ]
          },
          {
            titel: "Aufgabe 4: Rhetorische Frage",
            schwierigkeit: "schwer",
            aufgabe:
              "Erkläre die Wirkung der Frage in einer Rede: Wie lange wollen wir noch schweigen?",
            loesung: [
              "Es handelt sich um eine rhetorische Frage.",
              "Die Frage erwartet keine sachliche Antwort.",
              "Sie übt moralischen Druck auf die Zuhörenden aus.",
              "Das Schweigen wird indirekt als problematisch dargestellt.",
              "Die Formulierung ruft zum Handeln auf und steigert die Dringlichkeit der Rede."
            ]
          }
        ],
        muendlich: [
          {
            frage: "Warum reicht es nicht, rhetorische Mittel nur zu benennen?",
            antwort:
              "Weil die Analyse zeigen muss, welche Funktion das Mittel im Text hat. Entscheidend ist die Wirkung im konkreten Zusammenhang."
          },
          {
            frage: "Was ist der Unterschied zwischen Metapher und Vergleich?",
            antwort:
              "Ein Vergleich verwendet ein Vergleichswort wie wie oder als. Eine Metapher überträgt Bedeutung direkt, ohne Vergleichswort."
          },
          {
            frage: "Was bewirken Wiederholungen?",
            antwort:
              "Wiederholungen können Nachdruck, Rhythmus, Eindringlichkeit, Struktur oder emotionale Intensität erzeugen."
          }
        ],
        nachtVorTest: [
          "Kannst du Metapher, Vergleich und Personifikation unterscheiden?",
          "Kannst du Anapher und Parallelismus erkennen?",
          "Kannst du Antithese, Klimax und rhetorische Frage erklären?",
          "Kannst du Wirkung präzise formulieren?",
          "Vermeidest du blosse Aufzählungen?",
          "Verbindest du sprachliche Mittel mit Thema und Aussage?"
        ]
      }
    ]
  },

  {
    id: "gym4",
    titel: "GYM4",
    beschreibung:
      "Prüfungsvorbereitung auf gymnasialem Niveau: Textanalyse, Gedichtanalyse und Erörterung.",
    themen: [
      {
        id: "textanalyse",
        nummer: "1",
        titel: "Textanalyse",
        kurzbeschreibung:
          "Sachtexte, literarische Texte und argumentative Texte systematisch untersuchen: Inhalt, Aufbau, Sprache, Wirkung und Aussage.",
        lernziele: [
          "Du kannst Thema, Hauptaussage und Intention eines Textes bestimmen.",
          "Du kannst Inhaltsangabe und Analyse klar unterscheiden.",
          "Du kannst den Aufbau eines Textes untersuchen.",
          "Du kannst sprachliche Mittel und Argumentationsstrategien erkennen.",
          "Du kannst Textbelege korrekt und sinnvoll einbauen.",
          "Du kannst die Wirkung sprachlicher Gestaltung erklären.",
          "Du kannst eine geschlossene Analyse mit Einleitung, Hauptteil und Schluss schreiben.",
          "Du kannst sachlich, präzise und im Präsens formulieren."
        ],
        theorie: [
          {
            titel: "Was ist eine Textanalyse?",
            text:
              "Eine Textanalyse untersucht nicht nur, was ein Text sagt, sondern wie er seine Aussage erzeugt. Sie verbindet Inhalt, Aufbau, Sprache, Perspektive, Wirkung und mögliche Intention."
          },
          {
            titel: "Inhaltsangabe vs. Analyse",
            text:
              "Eine Inhaltsangabe fasst den Text knapp und sachlich zusammen. Eine Analyse erklärt zusätzlich, wie der Text aufgebaut ist, welche sprachlichen Mittel verwendet werden und welche Wirkung dadurch entsteht."
          },
          {
            titel: "Thema und Aussage",
            text:
              "Das Thema ist der Gegenstand des Textes, zum Beispiel soziale Medien, Leistungsdruck oder Freiheit. Die Aussage ist das, was der Text über dieses Thema vermittelt."
          },
          {
            titel: "Aufbau",
            text:
              "Der Aufbau zeigt, wie der Text seine Gedanken ordnet. Bei Sachtexten kann dies eine Problemstellung, Argumentation, Gegenargumentation und Schlussfolgerung sein. Bei literarischen Texten können Exposition, Wendepunkt oder Steigerung wichtig sein."
          },
          {
            titel: "Sprache",
            text:
              "Zur sprachlichen Analyse gehören Wortwahl, Satzbau, rhetorische Mittel, Bildlichkeit, Ton, Register und Wiederholungen. Entscheidend ist immer die Wirkung."
          },
          {
            titel: "Intention",
            text:
              "Die Intention beschreibt, worauf der Text abzielt. Er kann informieren, kritisieren, überzeugen, provozieren, warnen, emotionalisieren oder zum Nachdenken anregen."
          },
          {
            titel: "Belege",
            text:
              "Eine Analyse braucht Belege. Kurze Zitate oder genaue Verweise zeigen, dass deine Aussagen aus dem Text abgeleitet sind. Ein Zitat muss immer erklärt werden."
          },
          {
            titel: "Analysesprache",
            text:
              "Eine gute Analyse verwendet sachliche Formulierungen: Der Text verdeutlicht, Die Metapher betont, Die Wortwahl erzeugt, Die Argumentation legt nahe, Die Wiederholung verstärkt."
          }
        ],
        methoden: [
          {
            titel: "Methode: Textanalyse schreiben",
            schritte: [
              "1. Lies den Text vollständig und kläre die Textsorte.",
              "2. Bestimme Thema, Hauptaussage und mögliche Intention.",
              "3. Fasse den Inhalt knapp zusammen.",
              "4. Untersuche den Aufbau: Wie entwickelt sich der Gedankengang?",
              "5. Analysiere zentrale sprachliche Mittel.",
              "6. Erkläre die Wirkung der sprachlichen Gestaltung.",
              "7. Verwende kurze, passende Textbelege.",
              "8. Verbinde Einzelbeobachtungen mit der Gesamtaussage.",
              "9. Formuliere ein abschliessendes Fazit."
            ]
          },
          {
            titel: "Methode: Einen Analyseabschnitt aufbauen",
            schritte: [
              "1. Beginne mit einer Beobachtung.",
              "2. Nenne ein passendes Textbeispiel oder Zitat.",
              "3. Benenne gegebenenfalls das sprachliche Mittel.",
              "4. Erkläre die Wirkung.",
              "5. Verbinde die Beobachtung mit Thema, Aussage oder Intention.",
              "6. Achte darauf, nicht beim blossen Zitieren stehenzubleiben."
            ]
          }
        ],
        merksaetze: [
          "Analyse bedeutet: zeigen, wie ein Text wirkt und wodurch diese Wirkung entsteht.",
          "Inhalt und Form müssen gemeinsam betrachtet werden.",
          "Ein Zitat ersetzt keine Erklärung.",
          "Nicht jedes Detail ist wichtig; wähle zentrale Beobachtungen.",
          "Die Analyse steht normalerweise im Präsens.",
          "Die Intention muss aus dem Text abgeleitet werden.",
          "Gute Analyse ist sachlich, präzise und belegt.",
          "Am stärksten sind Abschnitte, die Beobachtung, Beleg und Deutung verbinden."
        ],
        typischeFehler: [
          {
            fehler: "Man schreibt fast nur eine Inhaltsangabe.",
            korrektur:
              "Erkläre zusätzlich Aufbau, Sprache, Wirkung und Aussage."
          },
          {
            fehler: "Man verwendet lange Zitate ohne Erklärung.",
            korrektur:
              "Zitiere kurz und erkläre genau, warum die Stelle wichtig ist."
          },
          {
            fehler: "Man behauptet eine Intention, ohne sie am Text zu zeigen.",
            korrektur:
              "Leite die Intention aus Wortwahl, Aufbau, Argumentation und Wirkung ab."
          },
          {
            fehler: "Man analysiert jedes kleine Detail gleich ausführlich.",
            korrektur:
              "Konzentriere dich auf zentrale Beobachtungen, die zur Gesamtdeutung beitragen."
          }
        ],
        aufgaben: [
          {
            titel: "Aufgabe 1: Analyse statt Inhaltsangabe",
            schwierigkeit: "mittel",
            aufgabe:
              "Verbessere diese Aussage: Der Text handelt von Jugendlichen und Social Media.",
            loesung: [
              "Die Aussage nennt nur grob das Thema.",
              "Eine analytischere Formulierung wäre: Der Text setzt sich kritisch mit dem Einfluss sozialer Medien auf das Selbstbild Jugendlicher auseinander.",
              "Noch genauer: Durch wertende Wortwahl und kontrastierende Beispiele verdeutlicht der Text, dass soziale Medien einerseits Austausch ermöglichen, andererseits aber Leistungsdruck und Vergleichsdenken verstärken.",
              "Diese Version enthält Thema, Haltung und erste Hinweise auf die Gestaltung."
            ]
          },
          {
            titel: "Aufgabe 2: Wirkung erklären",
            schwierigkeit: "mittel",
            aufgabe:
              "Ein Kommentar beginnt mit der Frage: Wollen wir wirklich in einer Welt leben, in der jede freie Minute bewertet wird? Erkläre die Wirkung.",
            loesung: [
              "Die Frage ist rhetorisch.",
              "Sie richtet sich direkt an die Lesenden.",
              "Dadurch werden diese in die Problematik hineingezogen.",
              "Die Formulierung wirklich verstärkt den kritischen Ton.",
              "Die Frage legt nahe, dass die beschriebene Entwicklung problematisch ist.",
              "Sie eignet sich als zugespitzter Einstieg in einen kritischen Kommentar."
            ]
          },
          {
            titel: "Aufgabe 3: Analyseabschnitt formulieren",
            schwierigkeit: "schwer",
            aufgabe:
              "Formuliere einen kurzen Analyseabschnitt zur Aussage: Die ständige Wiederholung des Wortes leer prägt die Stimmung des Textes.",
            loesung: [
              "Mögliche Lösung:",
              "Die wiederholte Verwendung des Wortes leer prägt die Atmosphäre des Textes entscheidend. Der Begriff verweist nicht nur auf einen äusseren Zustand, sondern deutet auch auf innere Orientierungslosigkeit und emotionale Erschöpfung hin. Durch die Wiederholung entsteht ein monotoner, bedrückender Eindruck, der die Ausweglosigkeit der Figur sprachlich erfahrbar macht.",
              "Der Abschnitt verbindet Beobachtung, Wirkung und Deutung."
            ]
          }
        ],
        muendlich: [
          {
            frage: "Was unterscheidet eine Textanalyse von einer Inhaltsangabe?",
            antwort:
              "Eine Inhaltsangabe fasst zusammen, was im Text steht. Eine Textanalyse erklärt, wie der Text aufgebaut ist, wie Sprache eingesetzt wird und welche Wirkung oder Aussage daraus entsteht."
          },
          {
            frage: "Wie verwendet man Zitate richtig?",
            antwort:
              "Zitate sollten kurz, passend und in den eigenen Satz eingebettet sein. Danach muss erklärt werden, was sie zeigen und warum sie für die Analyse wichtig sind."
          },
          {
            frage: "Was bedeutet Intention eines Textes?",
            antwort:
              "Die Intention beschreibt, worauf der Text abzielt, zum Beispiel informieren, kritisieren, überzeugen, warnen oder emotionalisieren."
          }
        ],
        nachtVorTest: [
          "Kannst du Thema und Aussage unterscheiden?",
          "Kannst du Inhalt knapp zusammenfassen?",
          "Kannst du Aufbau und Gedankengang beschreiben?",
          "Kannst du sprachliche Mittel mit Wirkung erklären?",
          "Verwendest du kurze Belege?",
          "Schreibst du im Präsens?",
          "Verbindest du Einzelbeobachtungen mit der Gesamtaussage?"
        ]
      },

      {
        id: "gedichtanalyse",
        nummer: "2",
        titel: "Gedichtanalyse",
        kurzbeschreibung:
          "Gedichte auf gymnasialem Niveau analysieren: Inhalt, lyrisches Ich, Form, Sprache, Klang, Stimmung und Gesamtdeutung.",
        lernziele: [
          "Du kannst Thema und Stimmung eines Gedichts bestimmen.",
          "Du kannst das lyrische Ich und die Sprechsituation beschreiben.",
          "Du kannst Strophen, Verse, Reimschema, Metrum und Rhythmus untersuchen.",
          "Du kannst sprachliche Bilder, Symbole und Klangmittel deuten.",
          "Du kannst Form und Inhalt miteinander verbinden.",
          "Du kannst eine schlüssige Gesamtdeutung formulieren.",
          "Du kannst Gedichtanalysen sachlich und strukturiert schreiben.",
          "Du kannst vermeiden, nur formale Merkmale aufzuzählen."
        ],
        theorie: [
          {
            titel: "Was ist eine Gedichtanalyse?",
            text:
              "Eine Gedichtanalyse untersucht, wie ein Gedicht durch Inhalt, Form, Sprache und Klang Bedeutung erzeugt. Ziel ist nicht eine blosse Beschreibung, sondern eine begründete Gesamtdeutung."
          },
          {
            titel: "Lyrisches Ich",
            text:
              "Das lyrische Ich ist die Stimme im Gedicht. Es kann ausdrücklich als Ich auftreten, muss aber nicht. Es ist nicht automatisch mit der Autorin oder dem Autor gleichzusetzen."
          },
          {
            titel: "Sprechsituation",
            text:
              "Die Sprechsituation fragt danach, wer spricht, zu wem gesprochen wird, in welcher Lage gesprochen wird und welche Haltung dabei sichtbar wird."
          },
          {
            titel: "Form",
            text:
              "Zur Form gehören Strophenzahl, Verszahl, Reimschema, Metrum und Rhythmus. Diese Merkmale sollten nicht isoliert genannt, sondern in ihrer Wirkung erklärt werden."
          },
          {
            titel: "Metrum und Rhythmus",
            text:
              "Das Metrum beschreibt ein regelmässiges Muster betonter und unbetonter Silben. Der Rhythmus beschreibt den tatsächlichen Sprachfluss. Abweichungen vom Metrum können besondere Stellen hervorheben."
          },
          {
            titel: "Reim",
            text:
              "Reime können Ordnung, Geschlossenheit, Harmonie oder auch Künstlichkeit erzeugen. Ein fehlender Reim kann Freiheit, Unruhe oder Modernität signalisieren."
          },
          {
            titel: "Bildsprache",
            text:
              "Gedichte arbeiten oft mit Metaphern, Vergleichen, Symbolen und Personifikationen. Diese verdichten Bedeutung und erzeugen Atmosphäre."
          },
          {
            titel: "Gesamtdeutung",
            text:
              "Die Gesamtdeutung beantwortet die Frage, was das Gedicht im Kern ausdrückt. Sie entsteht aus dem Zusammenspiel von Inhalt, Form und Sprache."
          }
        ],
        methoden: [
          {
            titel: "Methode: Gedicht analysieren",
            schritte: [
              "1. Lies das Gedicht mehrmals laut oder innerlich.",
              "2. Bestimme das Thema und die Grundstimmung.",
              "3. Kläre die Sprechsituation und das lyrische Ich.",
              "4. Fasse den Inhalt strophenweise kurz zusammen.",
              "5. Untersuche Form: Strophen, Verse, Reim, Metrum und Rhythmus.",
              "6. Analysiere auffällige sprachliche Mittel.",
              "7. Erkläre die Wirkung von Form und Sprache.",
              "8. Verbinde deine Beobachtungen zu einer Gesamtdeutung.",
              "9. Schreibe einen klar strukturierten Analyseaufsatz."
            ]
          },
          {
            titel: "Methode: Form und Inhalt verbinden",
            schritte: [
              "1. Nenne ein formales Merkmal, zum Beispiel regelmässiger Reim.",
              "2. Frage, welche Wirkung dieses Merkmal erzeugt.",
              "3. Prüfe, ob diese Wirkung zur Stimmung oder Aussage passt.",
              "4. Vermeide reine Aussagen wie Das Gedicht hat vier Strophen.",
              "5. Formuliere stattdessen: Die regelmässige Form steht im Kontrast zur inneren Unruhe des lyrischen Ichs."
            ]
          }
        ],
        merksaetze: [
          "Eine Gedichtanalyse braucht eine Gesamtdeutung.",
          "Das lyrische Ich ist nicht automatisch der Autor.",
          "Formmerkmale müssen gedeutet werden.",
          "Reim und Metrum sind nur wichtig, wenn ihre Wirkung erklärt wird.",
          "Bildsprache verdichtet Bedeutung.",
          "Klang kann Stimmung erzeugen.",
          "Auffällige Abweichungen sind oft besonders deutungsrelevant.",
          "Eine gute Gedichtanalyse verbindet Inhalt, Form, Sprache und Wirkung."
        ],
        typischeFehler: [
          {
            fehler: "Man zählt nur Reimschema und Metrum auf.",
            korrektur:
              "Erkläre, welche Wirkung diese Formmerkmale haben und wie sie zur Aussage passen."
          },
          {
            fehler: "Man setzt das lyrische Ich mit dem Autor gleich.",
            korrektur:
              "Sprich vom lyrischen Ich oder von der Sprecherinstanz, nicht automatisch vom Autor."
          },
          {
            fehler: "Man deutet jedes Bild einzeln, ohne Gesamtzusammenhang.",
            korrektur:
              "Verbinde sprachliche Bilder mit Thema, Stimmung und Gesamtdeutung."
          },
          {
            fehler: "Man formuliert die Deutung zu allgemein.",
            korrektur:
              "Stütze deine Deutung auf konkrete Beobachtungen zu Inhalt, Form und Sprache."
          }
        ],
        aufgaben: [
          {
            titel: "Aufgabe 1: Bildsprache deuten",
            schwierigkeit: "mittel",
            aufgabe:
              "Deute die Formulierung: Der Abend legt ein graues Tuch über die Stadt.",
            loesung: [
              "Der Abend wird personifiziert, weil er wie ein handelndes Wesen dargestellt wird.",
              "Das graue Tuch ist eine Metapher für Dunkelheit, Schwere oder Melancholie.",
              "Die Stadt wirkt dadurch gedämpft und bedrückt.",
              "Die Formulierung erzeugt eine ruhige, aber auch schwermütige Stimmung.",
              "Sie könnte auf Einsamkeit, Müdigkeit oder ein Ende hinweisen."
            ]
          },
          {
            titel: "Aufgabe 2: Form deuten",
            schwierigkeit: "mittel",
            aufgabe:
              "Ein Gedicht über innere Unruhe hat unregelmässig lange Verse und kein festes Reimschema. Welche Wirkung kann das haben?",
            loesung: [
              "Die unregelmässige Form kann die innere Unruhe spiegeln.",
              "Das fehlende Reimschema erzeugt Offenheit oder Instabilität.",
              "Die Form passt damit zum Inhalt.",
              "Wenn ein Gedicht über Unordnung auch formal ungeordnet wirkt, unterstützt die Form die Aussage.",
              "Wichtig ist, diesen Zusammenhang im Text konkret zu belegen."
            ]
          },
          {
            titel: "Aufgabe 3: Gesamtdeutung formulieren",
            schwierigkeit: "schwer",
            aufgabe:
              "Ein Gedicht beschreibt einen Wanderer, der nachts allein durch eine kalte Landschaft geht. Immer wieder erscheinen Wörter wie still, fern und dunkel. Formuliere eine mögliche Gesamtdeutung.",
            loesung: [
              "Eine mögliche Gesamtdeutung lautet:",
              "Das Gedicht gestaltet den Weg des Wanderers als Bild innerer Einsamkeit und Orientierungslosigkeit.",
              "Die kalte Landschaft spiegelt nicht nur eine äussere Umgebung, sondern auch den seelischen Zustand des lyrischen Ichs.",
              "Die wiederholten Wörter still, fern und dunkel verstärken die Distanz zur Welt und erzeugen eine melancholische Atmosphäre.",
              "Die Naturdarstellung wird dadurch zum Ausdruck einer inneren Erfahrung."
            ]
          }
        ],
        muendlich: [
          {
            frage: "Was ist das Ziel einer Gedichtanalyse?",
            antwort:
              "Ziel ist eine begründete Deutung des Gedichts durch die Untersuchung von Inhalt, Form, Sprache, Klang und Stimmung."
          },
          {
            frage: "Warum darf man das lyrische Ich nicht einfach mit dem Autor gleichsetzen?",
            antwort:
              "Weil das lyrische Ich eine gestaltete Stimme im Gedicht ist. Es kann eine Rolle, Perspektive oder erfundene Sprecherinstanz sein."
          },
          {
            frage: "Wie verbindet man Form und Inhalt?",
            antwort:
              "Man erklärt, wie formale Merkmale wie Reim, Rhythmus oder Strophenbau die Aussage, Stimmung oder Entwicklung des Gedichts unterstützen oder kontrastieren."
          }
        ],
        nachtVorTest: [
          "Kannst du Thema und Stimmung benennen?",
          "Kannst du das lyrische Ich beschreiben?",
          "Kannst du Reim, Metrum und Rhythmus untersuchen?",
          "Erklärst du die Wirkung der Form?",
          "Kannst du Metaphern und Symbole deuten?",
          "Formulierst du eine Gesamtdeutung?",
          "Verbindest du Inhalt, Form und Sprache?"
        ]
      },

      {
        id: "eroerterung",
        nummer: "3",
        titel: "Erörterung",
        kurzbeschreibung:
          "Eine Streitfrage differenziert bearbeiten: Argumente entwickeln, ordnen, abwägen und zu einem begründeten Urteil gelangen.",
        lernziele: [
          "Du kannst eine Streitfrage genau erfassen.",
          "Du kannst These, Argument, Begründung und Beispiel unterscheiden.",
          "Du kannst lineare und dialektische Erörterung unterscheiden.",
          "Du kannst Pro- und Contra-Argumente sammeln und ordnen.",
          "Du kannst Argumente nach Stärke gewichten.",
          "Du kannst Gegenargumente fair darstellen.",
          "Du kannst ein begründetes Fazit formulieren.",
          "Du kannst sachlich, strukturiert und überzeugend schreiben."
        ],
        theorie: [
          {
            titel: "Was ist eine Erörterung?",
            text:
              "Eine Erörterung ist ein argumentativer Aufsatz. Sie untersucht eine Frage, entfaltet Argumente, wägt Positionen ab und kommt zu einem begründeten Urteil."
          },
          {
            titel: "Streitfrage",
            text:
              "Eine Erörterung beginnt mit einer strittigen Frage. Sie darf nicht nur eine einfache Wissensfrage sein. Typisch sind Fragen wie: Sollte..., Ist es sinnvoll..., Inwiefern..."
          },
          {
            titel: "These",
            text:
              "Eine These ist eine klare Behauptung oder Position. Sie muss begründet werden, sonst bleibt sie eine blosse Meinung."
          },
          {
            titel: "Argument",
            text:
              "Ein vollständiges Argument besteht aus Behauptung, Begründung und Beispiel. Die Begründung erklärt, warum die Behauptung plausibel ist. Das Beispiel macht sie anschaulich."
          },
          {
            titel: "Lineare Erörterung",
            text:
              "Bei einer linearen Erörterung wird eine Position entfaltet. Die Argumente führen in eine Richtung und werden meistens steigernd angeordnet."
          },
          {
            titel: "Dialektische Erörterung",
            text:
              "Bei einer dialektischen Erörterung werden Pro- und Contra-Argumente gegenübergestellt. Ziel ist eine abgewogene Entscheidung."
          },
          {
            titel: "Argumentationsordnung",
            text:
              "Argumente sollten nicht zufällig angeordnet sein. Häufig beginnt man mit einem schwächeren Argument und steigert sich zum stärksten. Bei dialektischen Erörterungen muss die Ordnung besonders klar sein."
          },
          {
            titel: "Fazit",
            text:
              "Das Fazit beantwortet die Ausgangsfrage. Es soll nicht einfach eine Meinung behaupten, sondern aus der vorherigen Argumentation hervorgehen."
          }
        ],
        methoden: [
          {
            titel: "Methode: Erörterung planen",
            schritte: [
              "1. Formuliere die Streitfrage mit eigenen Worten.",
              "2. Kläre, ob eine lineare oder dialektische Erörterung verlangt ist.",
              "3. Sammle Pro- und Contra-Argumente.",
              "4. Streiche schwache oder doppelte Argumente.",
              "5. Ordne die Argumente nach Gewicht.",
              "6. Ergänze zu jedem Argument eine Begründung und ein Beispiel.",
              "7. Überlege dir dein Fazit vor dem Schreiben.",
              "8. Schreibe danach den Text strukturiert aus."
            ]
          },
          {
            titel: "Methode: Argument ausbauen",
            schritte: [
              "1. Formuliere eine klare Behauptung.",
              "2. Begründe, warum diese Behauptung plausibel ist.",
              "3. Füge ein konkretes Beispiel hinzu.",
              "4. Erkläre, was das Beispiel zeigt.",
              "5. Verbinde das Argument mit der Streitfrage.",
              "6. Vermeide unbelegte Behauptungen."
            ]
          },
          {
            titel: "Methode: Dialektisch abwägen",
            schritte: [
              "1. Stelle zuerst eine Seite sachlich dar.",
              "2. Stelle danach die Gegenseite ebenfalls fair dar.",
              "3. Vergleiche die Stärke der Argumente.",
              "4. Zeige, welches Argument unter welchen Bedingungen stärker wiegt.",
              "5. Vermeide Schwarz-Weiss-Denken.",
              "6. Formuliere ein differenziertes Fazit."
            ]
          }
        ],
        merksaetze: [
          "Eine Erörterung ist kein ungeordneter Meinungstext.",
          "Ein Argument braucht Behauptung, Begründung und Beispiel.",
          "Ein Beispiel allein ist noch kein Argument.",
          "Gute Argumentation ist sachlich und nachvollziehbar.",
          "Gegenargumente müssen fair dargestellt werden.",
          "Das stärkste Argument sollte besonders überzeugend ausgeführt werden.",
          "Ein Fazit muss aus der Argumentation hervorgehen.",
          "Differenziert zu urteilen ist stärker als extreme Vereinfachung."
        ],
        typischeFehler: [
          {
            fehler: "Man schreibt nur persönliche Meinungen auf.",
            korrektur:
              "Formuliere Argumente mit Begründungen und Beispielen."
          },
          {
            fehler: "Pro und Contra werden durcheinander vermischt.",
            korrektur:
              "Ordne die Argumente sichtbar und logisch."
          },
          {
            fehler: "Das Fazit passt nicht zur Argumentation.",
            korrektur:
              "Das Fazit muss aus den vorherigen Argumenten folgen."
          },
          {
            fehler: "Man verwendet Beispiele ohne Erklärung.",
            korrektur:
              "Erkläre immer, was das Beispiel für die Streitfrage beweist oder veranschaulicht."
          },
          {
            fehler: "Man stellt die Gegenseite unfair oder lächerlich dar.",
            korrektur:
              "Eine gute Erörterung zeigt, dass man beide Seiten ernsthaft verstanden hat."
          }
        ],
        aufgaben: [
          {
            titel: "Aufgabe 1: Argument vollständig ausbauen",
            schwierigkeit: "einfach",
            aufgabe:
              "Baue das Argument aus: Smartphones können im Unterricht sinnvoll sein.",
            loesung: [
              "Behauptung: Smartphones können im Unterricht sinnvoll sein.",
              "Begründung: Sie ermöglichen schnellen Zugriff auf Informationen und digitale Lernwerkzeuge.",
              "Beispiel: Schülerinnen und Schüler können unbekannte Begriffe recherchieren, Lernapps verwenden oder gemeinsam an einem digitalen Dokument arbeiten.",
              "Erklärung: Dadurch kann der Unterricht interaktiver und eigenständiger werden.",
              "Einschränkung: Voraussetzung ist jedoch, dass klare Regeln gegen Ablenkung bestehen."
            ]
          },
          {
            titel: "Aufgabe 2: Gegenargument formulieren",
            schwierigkeit: "mittel",
            aufgabe:
              "Formuliere ein starkes Gegenargument zur These: Hausaufgaben sollten abgeschafft werden.",
            loesung: [
              "Ein mögliches Gegenargument lautet:",
              "Hausaufgaben sollten nicht vollständig abgeschafft werden, weil sie selbstständiges Üben ermöglichen.",
              "Im Unterricht bleibt oft wenig Zeit, um neue Inhalte ausreichend zu festigen.",
              "Wenn Schülerinnen und Schüler zu Hause Aufgaben lösen, erkennen sie, ob sie den Stoff wirklich verstanden haben.",
              "Allerdings müssten Hausaufgaben sinnvoll dosiert und klar auf den Unterricht bezogen sein."
            ]
          },
          {
            titel: "Aufgabe 3: Fazit formulieren",
            schwierigkeit: "mittel",
            aufgabe:
              "Formuliere ein differenziertes Fazit zur Frage: Sollte die Schule später beginnen?",
            loesung: [
              "Ein mögliches Fazit lautet:",
              "Ein späterer Schulbeginn wäre grundsätzlich sinnvoll, weil er dem Schlafrhythmus vieler Jugendlicher entgegenkommen und die Konzentration verbessern könnte.",
              "Gleichzeitig müssten organisatorische Probleme wie Stundenplan, Freizeitaktivitäten und Betreuung berücksichtigt werden.",
              "Deshalb erscheint kein radikaler Wechsel, sondern ein moderat späterer Beginn an besonders frühen Tagen als überzeugender Kompromiss."
            ]
          },
          {
            titel: "Aufgabe 4: Argumentationsfehler erkennen",
            schwierigkeit: "schwer",
            aufgabe:
              "Erkläre den Fehler: Alle benutzen soziale Medien, also können sie nicht schädlich sein.",
            loesung: [
              "Das Argument ist logisch schwach.",
              "Aus der Häufigkeit einer Nutzung folgt nicht automatisch, dass etwas unschädlich ist.",
              "Viele Menschen können etwas verwenden, obwohl es Risiken hat.",
              "Ein besseres Argument müsste erklären, unter welchen Bedingungen soziale Medien nützlich oder problematisch sind.",
              "Der Fehler besteht also in einer vorschnellen Schlussfolgerung."
            ]
          }
        ],
        muendlich: [
          {
            frage: "Was ist eine Erörterung?",
            antwort:
              "Eine Erörterung ist ein argumentativer Text, der eine Streitfrage untersucht, Argumente entfaltet, abwägt und zu einem begründeten Urteil kommt."
          },
          {
            frage: "Wie ist ein vollständiges Argument aufgebaut?",
            antwort:
              "Ein vollständiges Argument besteht aus Behauptung, Begründung und Beispiel. Zusätzlich sollte erklärt werden, was das Beispiel zeigt."
          },
          {
            frage: "Was ist der Unterschied zwischen linearer und dialektischer Erörterung?",
            antwort:
              "Eine lineare Erörterung entfaltet eine Position. Eine dialektische Erörterung stellt Pro- und Contra-Argumente gegenüber und wägt sie ab."
          },
          {
            frage: "Was macht ein gutes Fazit aus?",
            antwort:
              "Ein gutes Fazit beantwortet die Ausgangsfrage, greift die wichtigsten Argumente auf und formuliert ein begründetes, differenziertes Urteil."
          }
        ],
        nachtVorTest: [
          "Kannst du die Streitfrage genau formulieren?",
          "Kennst du den Unterschied zwischen These und Argument?",
          "Hat jedes Argument eine Begründung und ein Beispiel?",
          "Kannst du Pro und Contra klar ordnen?",
          "Kannst du Argumente nach Stärke gewichten?",
          "Stellst du Gegenargumente fair dar?",
          "Ist dein Fazit aus der Argumentation ableitbar?",
          "Vermeidest du reine Meinungen ohne Begründung?"
        ]
      }
    ]
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

  const deutschThemen = getAllDeutschTopics();

  container.innerHTML = `
    <section class="sf-de-page">
      <div class="sf-de-hero">
        <h1>Deutsch</h1>
        <p>
          Prüfungsvorbereitung mit selbst erstellten Erklärungen, Methoden,
          Aufgaben, Lösungen und mündlichen Prüfungsfragen.
        </p>
      </div>

      <div class="sf-de-layout">
        <aside class="sf-de-sidebar">
          <h2>Themen</h2>
          <div class="sf-de-topic-list">
            ${deutschThemen.map((item, index) => `
              <button
                class="sf-de-topic-button ${index === 0 ? "active" : ""}"
                data-topic-id="${escapeHTML(item.thema.id)}">
                <span>${escapeHTML(item.stufe.titel)}</span>
                ${escapeHTML(item.thema.titel)}
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-de-content" id="sf-de-content"></main>
      </div>
    </section>
  `;

  const content = container.querySelector("#sf-de-content");
  const buttons = container.querySelectorAll(".sf-de-topic-button");

  function showTopic(topicId, shouldScroll = true) {
    const found = findDeutschTopic(topicId);
    if (!found) return;

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.topicId === topicId);
    });

    content.innerHTML = renderDeutschTopic(found.thema, found.stufe);
    attachDeutschInteractions(content);

    if (shouldScroll) {
      window.setTimeout(() => {
        content.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 0);
    }
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      showTopic(button.dataset.topicId, true);
    });
  });

  if (deutschThemen.length > 0) {
    showTopic(deutschThemen[0].thema.id, false);
  }
}


/* =========================
   SUCHFUNKTIONEN
========================= */

function getAllDeutschTopics() {
  const result = [];

  DEUTSCH_GYM_STUFEN.forEach(stufe => {
    stufe.themen.forEach(thema => {
      result.push({ stufe, thema });
    });
  });

  return result;
}


function findDeutschTopic(topicId) {
  for (const stufe of DEUTSCH_GYM_STUFEN) {
    const thema = stufe.themen.find(t => t.id === topicId);
    if (thema) {
      return { stufe, thema };
    }
  }

  return null;
}


/* =========================
   EINZELNES THEMA RENDERN
========================= */

function renderDeutschTopic(thema, stufe) {
  return `
    <article class="sf-de-topic">
      <div class="sf-de-topic-header">
        <p class="sf-de-kicker">${escapeHTML(stufe.titel)} · Thema ${escapeHTML(thema.nummer)}</p>
        <h2>${escapeHTML(thema.titel)}</h2>
        <p>${escapeHTML(thema.kurzbeschreibung)}</p>
      </div>

      ${renderDeutschSection("Lernziele", renderDeutschList(thema.lernziele))}
      ${renderDeutschTheory(thema.theorie)}
      ${renderDeutschMethods(thema.methoden)}
      ${renderDeutschSection("Merksätze", renderDeutschList(thema.merksaetze))}
      ${renderDeutschErrors(thema.typischeFehler)}
      ${renderDeutschExercises(thema.aufgaben)}
      ${renderDeutschOral(thema.muendlich)}
      ${renderDeutschSection("Nacht-vor-dem-Test-Check", renderDeutschChecklist(thema.nachtVorTest))}

      <div class="sf-de-disclaimer">
        <strong>Hinweis:</strong>
        Alle Inhalte und Aufgaben auf dieser Seite sind selbst erstellt und dienen
        der Prüfungsvorbereitung. Es handelt sich nicht um kopierte Originalprüfungen,
        fremde Lehrmittel oder offizielle Schulunterlagen.
      </div>
    </article>
  `;
}


function renderDeutschSection(title, content) {
  return `
    <section class="sf-de-card">
      <h3>${escapeHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderDeutschTheory(items) {
  return `
    <section class="sf-de-card">
      <h3>Theorie einfach erklärt</h3>
      <div class="sf-de-grid">
        ${items.map(item => `
          <div class="sf-de-mini-card">
            <h4>${escapeHTML(item.titel)}</h4>
            <p>${escapeHTML(item.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderDeutschMethods(methoden) {
  return `
    <section class="sf-de-card">
      <h3>Methoden</h3>
      <div class="sf-de-accordion">
        ${methoden.map(methode => `
          <div class="sf-de-accordion-item">
            <button class="sf-de-accordion-toggle" type="button">
              <span>${escapeHTML(methode.titel)}</span>
              <span class="sf-de-plus">+</span>
            </button>
            <div class="sf-de-accordion-body">
              ${renderDeutschOrderedList(methode.schritte)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderDeutschErrors(errors) {
  return `
    <section class="sf-de-card">
      <h3>Typische Fehler</h3>
      <div class="sf-de-error-list">
        ${errors.map(item => `
          <div class="sf-de-error-card">
            <h4>Fehler</h4>
            <p>${escapeHTML(item.fehler)}</p>
            <h4>Korrektur</h4>
            <p>${escapeHTML(item.korrektur)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderDeutschExercises(exercises) {
  return `
    <section class="sf-de-card">
      <h3>Eigene Übungsaufgaben mit Lösung</h3>
      <div class="sf-de-exercises">
        ${exercises.map(exercise => `
          <div class="sf-de-exercise">
            <div class="sf-de-exercise-top">
              <h4>${escapeHTML(exercise.titel)}</h4>
              <span>${escapeHTML(exercise.schwierigkeit)}</span>
            </div>
            <p>${escapeHTML(exercise.aufgabe)}</p>
            <button class="sf-de-solution-button" type="button">
              Lösung anzeigen
            </button>
            <div class="sf-de-solution">
              ${renderDeutschOrderedList(exercise.loesung)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderDeutschOral(items) {
  return `
    <section class="sf-de-card">
      <h3>Mündliche Prüfungsfragen</h3>
      <div class="sf-de-oral-list">
        ${items.map(item => `
          <div class="sf-de-oral-card">
            <h4>${escapeHTML(item.frage)}</h4>
            <p>${escapeHTML(item.antwort)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


/* =========================
   HILFSFUNKTIONEN
========================= */

function renderDeutschList(items) {
  return `
    <ul class="sf-de-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}


function renderDeutschOrderedList(items) {
  return `
    <ol class="sf-de-ordered-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ol>
  `;
}


function renderDeutschChecklist(items) {
  return `
    <div class="sf-de-checklist">
      ${items.map(item => `
        <label>
          <input type="checkbox">
          <span>${escapeHTML(item)}</span>
        </label>
      `).join("")}
    </div>
  `;
}


function attachDeutschInteractions(root) {
  const accordionButtons = root.querySelectorAll(".sf-de-accordion-toggle");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".sf-de-accordion-item");
      item.classList.toggle("open");
    });
  });

  const solutionButtons = root.querySelectorAll(".sf-de-solution-button");

  solutionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const solution = button.nextElementSibling;
      const isOpen = solution.classList.toggle("open");
      button.textContent = isOpen ? "Lösung ausblenden" : "Lösung anzeigen";
    });
  });
}


function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================
   CSS EINMALIG EINFÜGEN
========================= */

function injectDeutschStyles() {
  if (document.getElementById("sf-de-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-de-styles";
  style.textContent = `
    .sf-de-page {
      width: 100%;
      background: #f6f7fb;
      color: #172033;
      font-family: Arial, Helvetica, sans-serif;
      padding: 24px;
      box-sizing: border-box;
      border-radius: 18px;
    }

    .sf-de-hero {
      background: linear-gradient(135deg, #111827, #273449);
      color: white;
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    }

    .sf-de-kicker {
      margin: 0 0 8px 0;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.75;
      font-weight: 700;
    }

    .sf-de-hero h1 {
      margin: 0 0 12px 0;
      font-size: clamp(32px, 5vw, 56px);
      line-height: 1;
    }

    .sf-de-hero p {
      max-width: 780px;
      margin: 0;
      font-size: 18px;
      line-height: 1.6;
      opacity: 0.92;
    }

    .sf-de-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 24px;
      align-items: start;
    }

    .sf-de-sidebar {
      position: sticky;
      top: 20px;
      background: white;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-de-sidebar h2 {
      margin: 0 0 16px 0;
      font-size: 22px;
    }

    .sf-de-topic-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-de-topic-button {
      border: 1px solid #e5e7eb;
      background: #f9fafb;
      color: #172033;
      border-radius: 14px;
      padding: 12px 14px;
      text-align: left;
      cursor: pointer;
      font-weight: 700;
      display: flex;
      gap: 10px;
      align-items: center;
      transition: 0.2s ease;
    }

    .sf-de-topic-button span {
      display: inline-flex;
      min-width: 42px;
      height: 28px;
      align-items: center;
      justify-content: center;
      background: #e5e7eb;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 800;
    }

    .sf-de-topic-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
    }

    .sf-de-topic-button.active {
      background: #172033;
      color: white;
      border-color: #172033;
    }

    .sf-de-topic-button.active span {
      background: white;
      color: #172033;
    }

    .sf-de-content {
      min-width: 0;
    }

    .sf-de-topic-header {
      background: white;
      border-radius: 20px;
      padding: 26px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-de-topic-header h2 {
      margin: 0 0 10px 0;
      font-size: 34px;
    }

    .sf-de-topic-header p {
      margin: 0;
      font-size: 17px;
      line-height: 1.6;
      color: #4b5563;
    }

    .sf-de-card {
      background: white;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-de-card h3 {
      margin: 0 0 18px 0;
      font-size: 24px;
    }

    .sf-de-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .sf-de-mini-card,
    .sf-de-error-card,
    .sf-de-oral-card,
    .sf-de-exercise {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
      background: #f9fafb;
    }

    .sf-de-mini-card h4,
    .sf-de-error-card h4,
    .sf-de-oral-card h4,
    .sf-de-exercise h4 {
      margin: 0 0 8px 0;
      font-size: 18px;
    }

    .sf-de-mini-card p,
    .sf-de-error-card p,
    .sf-de-oral-card p,
    .sf-de-exercise p {
      margin: 0;
      line-height: 1.6;
      color: #374151;
    }

    .sf-de-list,
    .sf-de-ordered-list {
      margin: 0;
      padding-left: 22px;
      line-height: 1.8;
      color: #374151;
    }

    .sf-de-list li,
    .sf-de-ordered-list li {
      margin-bottom: 6px;
    }

    .sf-de-accordion {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .sf-de-accordion-item {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      background: #f9fafb;
    }

    .sf-de-accordion-toggle {
      width: 100%;
      border: 0;
      background: transparent;
      padding: 16px 18px;
      cursor: pointer;
      font-weight: 800;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #172033;
    }

    .sf-de-plus {
      font-size: 24px;
      line-height: 1;
      transition: 0.2s ease;
    }

    .sf-de-accordion-body {
      display: none;
      padding: 0 18px 18px 18px;
    }

    .sf-de-accordion-item.open .sf-de-accordion-body {
      display: block;
    }

    .sf-de-accordion-item.open .sf-de-plus {
      transform: rotate(45deg);
    }

    .sf-de-error-list,
    .sf-de-oral-list,
    .sf-de-exercises {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .sf-de-error-card h4:nth-of-type(1) {
      color: #991b1b;
    }

    .sf-de-error-card h4:nth-of-type(2) {
      margin-top: 14px;
      color: #166534;
    }

    .sf-de-exercise-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 12px;
      margin-bottom: 10px;
    }

    .sf-de-exercise-top span {
      background: #e5e7eb;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 13px;
      font-weight: 700;
      color: #374151;
      white-space: nowrap;
    }

    .sf-de-solution-button {
      margin-top: 14px;
      border: 0;
      background: #172033;
      color: white;
      border-radius: 12px;
      padding: 10px 14px;
      font-weight: 700;
      cursor: pointer;
    }

    .sf-de-solution {
      display: none;
      margin-top: 14px;
      padding: 16px;
      border-radius: 14px;
      background: white;
      border: 1px solid #e5e7eb;
    }

    .sf-de-solution.open {
      display: block;
    }

    .sf-de-checklist {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .sf-de-checklist label {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 12px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      cursor: pointer;
      line-height: 1.5;
    }

    .sf-de-checklist input {
      margin-top: 3px;
    }

    .sf-de-disclaimer {
      background: #fff7ed;
      border: 1px solid #fed7aa;
      color: #7c2d12;
      border-radius: 18px;
      padding: 18px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    @media (max-width: 900px) {
      .sf-de-layout {
        grid-template-columns: 1fr;
      }

      .sf-de-sidebar {
        position: static;
      }

      .sf-de-grid {
        grid-template-columns: 1fr;
      }

      .sf-de-page {
        padding: 14px;
      }

      .sf-de-hero {
        padding: 24px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_deutsch = render_deutsch;
