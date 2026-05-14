/* =========================================================
   SchoolFools – Anwendung der Mathematik
   Datei: anwendung_mathematik.js

   Zweck:
   - Ein einziger Bereich für Anwendung der Mathematik
   - Alle Themen werden später nur in AM_THEMEN ergänzt
   - Keine echten Prüfungsaufgaben
   - Keine kopierten Inhalte
   - Alles selbst erstellte Lerninhalte

   Benötigte Render-Funktion:
   render_anwendung_mathematik(container)

   Beispiel-Aufruf:
   render_anwendung_mathematik(document.getElementById("content"));
========================================================= */


/* =========================
   DATENBANK DER THEMEN
========================= */

const AM_THEMEN = [
  {
    id: "gruppentheorie",
    nummer: "1",
    titel: "Gruppentheorie",
    kurzbeschreibung:
      "Gruppenaxiome, Gruppentafeln, Untergruppen, Normalteiler, Nebenklassen und Faktorgruppen verständlich erklärt.",
    lernziele: [
      "Du kannst prüfen, ob eine Menge mit einer Verknüpfung eine Gruppe bildet.",
      "Du kennst die vier Gruppenaxiome: Abgeschlossenheit, Assoziativität, neutrales Element und inverse Elemente.",
      "Du kannst eine Gruppentafel lesen und selbst erstellen.",
      "Du kannst Untergruppen erkennen.",
      "Du verstehst den Unterschied zwischen Untergruppe und Normalteiler.",
      "Du kannst Nebenklassen bilden.",
      "Du verstehst die Grundidee einer Faktorgruppe."
    ],
    theorie: [
      {
        titel: "Was ist eine Gruppe?",
        text:
          "Eine Gruppe ist eine Menge zusammen mit einer Verknüpfung, bei der vier Bedingungen erfüllt sind. Die Verknüpfung kann zum Beispiel eine Addition, Multiplikation oder eine Verkettung von Abbildungen sein."
      },
      {
        titel: "Die vier Gruppenaxiome",
        text:
          "Erstens muss die Verknüpfung abgeschlossen sein. Das bedeutet: Wenn man zwei Elemente der Menge verknüpft, muss das Ergebnis wieder in derselben Menge liegen. Zweitens muss die Verknüpfung assoziativ sein. Drittens braucht es ein neutrales Element. Viertens muss jedes Element ein inverses Element besitzen."
      },
      {
        titel: "Neutrales Element",
        text:
          "Das neutrale Element verändert ein anderes Element bei der Verknüpfung nicht. Bei der Addition ist 0 neutral, weil a + 0 = a gilt. Bei der Multiplikation ist 1 neutral, weil a · 1 = a gilt."
      },
      {
        titel: "Inverses Element",
        text:
          "Das inverse Element macht ein Element rückgängig. Bei der Addition ist das Inverse von a die Zahl -a. Bei der Multiplikation ist das Inverse von a die Zahl 1/a, sofern a nicht 0 ist."
      },
      {
        titel: "Gruppentafel",
        text:
          "Eine Gruppentafel zeigt alle möglichen Verknüpfungen der Elemente. Links und oben stehen die Gruppenelemente. Im Schnittpunkt liest man das Ergebnis der Verknüpfung ab."
      },
      {
        titel: "Untergruppe",
        text:
          "Eine Untergruppe ist eine Teilmenge einer Gruppe, die selbst wieder eine Gruppe ist. Sie muss also das neutrale Element enthalten, abgeschlossen sein und zu jedem enthaltenen Element auch das inverse Element enthalten."
      },
      {
        titel: "Normalteiler",
        text:
          "Ein Normalteiler ist eine spezielle Untergruppe. Er ist so stabil in der Gruppe eingebettet, dass linke und rechte Nebenklassen übereinstimmen. Bei kommutativen Gruppen ist jede Untergruppe automatisch ein Normalteiler."
      },
      {
        titel: "Nebenklassen",
        text:
          "Nebenklassen entstehen, wenn man eine Untergruppe mit einem Element der Gruppe verknüpft. Man kann sie sich als Pakete vorstellen, in welche die Gruppe aufgeteilt wird."
      },
      {
        titel: "Faktorgruppe",
        text:
          "Eine Faktorgruppe entsteht, wenn man nicht mehr einzelne Elemente betrachtet, sondern ganze Nebenklassen als neue Elemente. Das funktioniert sauber, wenn die verwendete Untergruppe ein Normalteiler ist."
      }
    ],
    methoden: [
      {
        titel: "Methode: Prüfen, ob eine Gruppe vorliegt",
        schritte: [
          "1. Bestimme zuerst die Menge und die Verknüpfung.",
          "2. Prüfe die Abgeschlossenheit: Kommt immer wieder ein Element der Menge heraus?",
          "3. Prüfe die Assoziativität: Darf man Klammern beliebig verschieben?",
          "4. Suche das neutrale Element.",
          "5. Prüfe, ob jedes Element ein inverses Element besitzt.",
          "6. Wenn alle vier Punkte erfüllt sind, liegt eine Gruppe vor."
        ]
      },
      {
        titel: "Methode: Untergruppe prüfen",
        schritte: [
          "1. Prüfe, ob die Teilmenge nicht leer ist.",
          "2. Prüfe, ob das neutrale Element enthalten ist.",
          "3. Prüfe, ob die Verknüpfung innerhalb der Teilmenge bleibt.",
          "4. Prüfe, ob zu jedem Element auch sein inverses Element enthalten ist.",
          "5. Wenn alles erfüllt ist, ist die Teilmenge eine Untergruppe."
        ]
      },
      {
        titel: "Methode: Normalteiler prüfen",
        schritte: [
          "1. Prüfe zuerst, ob die Teilmenge überhaupt eine Untergruppe ist.",
          "2. Bilde linke Nebenklassen.",
          "3. Bilde rechte Nebenklassen.",
          "4. Vergleiche linke und rechte Nebenklassen.",
          "5. Wenn sie für alle Elemente gleich sind, ist die Untergruppe ein Normalteiler."
        ]
      }
    ],
    merksaetze: [
      "Eine Gruppe ist eine Menge mit einer Verknüpfung, die sich algebraisch sauber verhält.",
      "Das neutrale Element verändert nichts.",
      "Das inverse Element macht die Wirkung eines Elements rückgängig.",
      "Eine Untergruppe ist eine kleinere Gruppe innerhalb einer grösseren Gruppe.",
      "Ein Normalteiler ist eine Untergruppe, mit der man eine Faktorgruppe bilden kann.",
      "In einer kommutativen Gruppe ist jede Untergruppe ein Normalteiler."
    ],
    typischeFehler: [
      {
        fehler: "Man prüft nur die Abgeschlossenheit und vergisst die anderen Gruppenaxiome.",
        korrektur:
          "Abgeschlossenheit allein reicht nicht. Eine Gruppe braucht zusätzlich Assoziativität, ein neutrales Element und inverse Elemente."
      },
      {
        fehler: "Man verwechselt neutrales Element und inverses Element.",
        korrektur:
          "Das neutrale Element bleibt immer dasselbe. Das inverse Element hängt vom jeweiligen Element ab."
      },
      {
        fehler: "Man denkt, jede Untergruppe sei automatisch ein Normalteiler.",
        korrektur:
          "Das stimmt nur sicher bei kommutativen Gruppen. In nicht kommutativen Gruppen muss man linke und rechte Nebenklassen vergleichen."
      },
      {
        fehler: "Man bildet Nebenklassen mit einzelnen zufälligen Elementen und vergisst die ganze Untergruppe.",
        korrektur:
          "Eine Nebenklasse entsteht, indem man ein Gruppenelement mit allen Elementen der Untergruppe verknüpft."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Gruppe erkennen",
        schwierigkeit: "einfach",
        aufgabe:
          "Betrachte die Menge der ganzen Zahlen Z mit der Addition. Prüfe, ob diese Menge mit der Addition eine Gruppe bildet.",
        loesung: [
          "Die Verknüpfung ist die Addition.",
          "Abgeschlossenheit: Die Summe zweier ganzer Zahlen ist wieder eine ganze Zahl.",
          "Assoziativität: Für ganze Zahlen gilt a + (b + c) = (a + b) + c.",
          "Neutrales Element: Die Zahl 0 ist neutral, weil a + 0 = a gilt.",
          "Inverses Element: Zu jeder ganzen Zahl a gibt es die ganze Zahl -a.",
          "Also bilden die ganzen Zahlen mit der Addition eine Gruppe."
        ]
      },
      {
        titel: "Aufgabe 2: Keine Gruppe",
        schwierigkeit: "einfach",
        aufgabe:
          "Betrachte die natürlichen Zahlen N mit der Addition. Erkläre, warum dies keine Gruppe ist, wenn N = {1, 2, 3, ...} gilt.",
        loesung: [
          "Die Addition natürlicher Zahlen ist zwar abgeschlossen.",
          "Aber es gibt kein neutrales Element in dieser Menge, weil 0 nicht enthalten ist.",
          "Ausserdem besitzt zum Beispiel 3 kein additives Inverses in N, denn -3 ist keine natürliche Zahl.",
          "Darum bilden diese natürlichen Zahlen mit der Addition keine Gruppe."
        ]
      },
      {
        titel: "Aufgabe 3: Untergruppe prüfen",
        schwierigkeit: "mittel",
        aufgabe:
          "Betrachte die ganzen Zahlen Z mit der Addition. Prüfe, ob die geraden ganzen Zahlen eine Untergruppe bilden.",
        loesung: [
          "Die geraden ganzen Zahlen enthalten 0.",
          "Die Summe zweier gerader Zahlen ist wieder gerade.",
          "Das inverse Element einer geraden Zahl ist wieder gerade.",
          "Also bilden die geraden ganzen Zahlen eine Untergruppe von Z."
        ]
      },
      {
        titel: "Aufgabe 4: Nebenklassen verstehen",
        schwierigkeit: "mittel",
        aufgabe:
          "Betrachte die ganzen Zahlen Z mit der Addition und die Untergruppe der Vielfachen von 3. Beschreibe die Nebenklassen.",
        loesung: [
          "Die Untergruppe besteht aus allen Zahlen, die durch 3 teilbar sind.",
          "Eine Nebenklasse enthält alle Zahlen mit gleichem Rest bei Division durch 3.",
          "Es gibt drei Nebenklassen: Zahlen mit Rest 0, Zahlen mit Rest 1 und Zahlen mit Rest 2.",
          "Die Gruppe wird dadurch in drei Pakete aufgeteilt."
        ]
      },
      {
        titel: "Aufgabe 5: Normalteiler-Idee",
        schwierigkeit: "mittel",
        aufgabe:
          "Erkläre, warum in einer kommutativen Gruppe jede Untergruppe ein Normalteiler ist.",
        loesung: [
          "In einer kommutativen Gruppe darf man die Reihenfolge der Verknüpfung vertauschen.",
          "Dadurch macht es keinen Unterschied, ob man ein Gruppenelement links oder rechts mit der Untergruppe verknüpft.",
          "Die linken und rechten Nebenklassen stimmen deshalb überein.",
          "Also ist jede Untergruppe einer kommutativen Gruppe ein Normalteiler."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine Gruppe?",
        antwort:
          "Eine Gruppe ist eine Menge mit einer Verknüpfung, bei der Abgeschlossenheit, Assoziativität, ein neutrales Element und inverse Elemente erfüllt sind."
      },
      {
        frage: "Was ist der Unterschied zwischen neutralem und inversem Element?",
        antwort:
          "Das neutrale Element verändert kein anderes Element. Das inverse Element hängt vom jeweiligen Element ab und führt zusammen mit diesem zum neutralen Element."
      },
      {
        frage: "Was ist eine Untergruppe?",
        antwort:
          "Eine Untergruppe ist eine Teilmenge einer Gruppe, die mit derselben Verknüpfung selbst wieder eine Gruppe bildet."
      },
      {
        frage: "Was ist ein Normalteiler?",
        antwort:
          "Ein Normalteiler ist eine Untergruppe, bei der linke und rechte Nebenklassen übereinstimmen. Nur damit kann man sauber eine Faktorgruppe bilden."
      },
      {
        frage: "Warum sind Nebenklassen wichtig?",
        antwort:
          "Nebenklassen teilen eine Gruppe in gleichartige Pakete ein. Dadurch kann man die Struktur der Gruppe gröber betrachten."
      }
    ],
    nachtVorTest: [
      "Kannst du die vier Gruppenaxiome aufzählen?",
      "Kannst du erklären, was das neutrale Element macht?",
      "Kannst du zu einem Element das inverse Element bestimmen?",
      "Kannst du eine Gruppentafel lesen?",
      "Kannst du eine Untergruppe prüfen?",
      "Kannst du erklären, warum Normalteiler für Faktorgruppen wichtig sind?"
    ]
  },

  {
    id: "komplexe-zahlen",
    nummer: "2",
    titel: "Komplexe Zahlen",
    kurzbeschreibung:
      "Normalform, Polarform, Betrag, Argument, Grundoperationen und einfache Gleichungen mit komplexen Zahlen.",
    lernziele: [
      "Du kannst komplexe Zahlen in der Form a + bi darstellen.",
      "Du kannst Realteil und Imaginärteil bestimmen.",
      "Du kannst den Betrag einer komplexen Zahl berechnen.",
      "Du kannst das Argument einer komplexen Zahl bestimmen.",
      "Du kannst komplexe Zahlen in Polarform schreiben.",
      "Du kannst komplexe Zahlen addieren, subtrahieren, multiplizieren und dividieren.",
      "Du kannst einfache Gleichungen mit komplexen Zahlen lösen.",
      "Du verstehst die geometrische Bedeutung von komplexen Zahlen in der Zahlenebene."
    ],
    theorie: [
      {
        titel: "Was ist eine komplexe Zahl?",
        text:
          "Eine komplexe Zahl hat die Form a + bi. Dabei ist a der Realteil und b der Imaginärteil. Die Zahl i ist die imaginäre Einheit mit der Eigenschaft i² = -1."
      },
      {
        titel: "Normalform",
        text:
          "Die Normalform einer komplexen Zahl lautet a + bi. Beispiel: 3 - 2i hat den Realteil 3 und den Imaginärteil -2."
      },
      {
        titel: "Komplexe Zahlenebene",
        text:
          "Eine komplexe Zahl kann als Punkt oder Vektor in einer Ebene dargestellt werden. Die waagrechte Achse beschreibt den Realteil, die senkrechte Achse beschreibt den Imaginärteil."
      },
      {
        titel: "Betrag",
        text:
          "Der Betrag einer komplexen Zahl ist ihr Abstand vom Ursprung. Für z = a + bi gilt |z| = √(a² + b²)."
      },
      {
        titel: "Argument",
        text:
          "Das Argument ist der Winkel, den der Vektor der komplexen Zahl mit der positiven reellen Achse einschliesst. Der Quadrant ist wichtig, weil gleiche Tangenswerte zu verschiedenen Winkeln gehören können."
      },
      {
        titel: "Polarform",
        text:
          "In Polarform schreibt man eine komplexe Zahl mit Betrag und Winkel. Statt a + bi beschreibt man die Zahl also durch Länge und Richtung."
      },
      {
        titel: "Addition und Subtraktion",
        text:
          "Beim Addieren und Subtrahieren komplexer Zahlen rechnet man Realteile mit Realteilen und Imaginärteile mit Imaginärteilen."
      },
      {
        titel: "Multiplikation",
        text:
          "In Normalform multipliziert man komplexe Zahlen wie Klammern aus. Danach ersetzt man i² durch -1. In Polarform werden Beträge multipliziert und Winkel addiert."
      },
      {
        titel: "Division",
        text:
          "Bei der Division in Normalform erweitert man meistens mit der konjugiert komplexen Zahl des Nenners. Dadurch wird der Nenner reell."
      },
      {
        titel: "Konjugiert komplexe Zahl",
        text:
          "Zur Zahl a + bi gehört die konjugiert komplexe Zahl a - bi. Das Vorzeichen des Imaginärteils wird also geändert."
      }
    ],
    methoden: [
      {
        titel: "Methode: Betrag berechnen",
        schritte: [
          "1. Schreibe die komplexe Zahl in der Form a + bi.",
          "2. Lies den Realteil a ab.",
          "3. Lies den Imaginärteil b ab.",
          "4. Setze in die Formel |z| = √(a² + b²) ein.",
          "5. Vereinfache den Wurzelausdruck, wenn möglich."
        ]
      },
      {
        titel: "Methode: Argument bestimmen",
        schritte: [
          "1. Zeichne oder denke dir den Punkt (a, b) in der komplexen Zahlenebene.",
          "2. Bestimme zuerst den Quadranten mithilfe der Vorzeichen von a und b.",
          "3. Berechne den Referenzwinkel mit tan(α) = |b/a|, falls a nicht 0 ist.",
          "4. Passe den Winkel an den richtigen Quadranten an.",
          "5. Gib das Argument in Grad oder im Bogenmass an, je nachdem was verlangt ist."
        ]
      },
      {
        titel: "Methode: Von Normalform zu Polarform",
        schritte: [
          "1. Bestimme den Betrag r = |z|.",
          "2. Bestimme das Argument φ.",
          "3. Schreibe die Zahl als r · cis(φ) oder als r(cos(φ) + i sin(φ)).",
          "4. Kontrolliere, ob der Winkel zum richtigen Quadranten passt."
        ]
      },
      {
        titel: "Methode: Komplexe Zahlen multiplizieren",
        schritte: [
          "1. Schreibe beide Zahlen in Normalform.",
          "2. Multipliziere die Klammern aus.",
          "3. Ersetze i² durch -1.",
          "4. Fasse Realteil und Imaginärteil zusammen.",
          "5. Schreibe das Resultat wieder als a + bi."
        ]
      },
      {
        titel: "Methode: Komplexe Zahlen dividieren",
        schritte: [
          "1. Schreibe den Bruch mit komplexem Nenner auf.",
          "2. Bestimme die konjugiert komplexe Zahl des Nenners.",
          "3. Multipliziere Zähler und Nenner mit dieser konjugierten Zahl.",
          "4. Vereinfache den Nenner zu einer reellen Zahl.",
          "5. Schreibe das Ergebnis in der Form a + bi."
        ]
      },
      {
        titel: "Methode: Gleichung z^n = w lösen",
        schritte: [
          "1. Schreibe w in Polarform.",
          "2. Ziehe die n-te Wurzel aus dem Betrag.",
          "3. Teile den Winkel durch n.",
          "4. Addiere vor dem Teilen alle möglichen Vollwinkel.",
          "5. Setze k = 0, 1, ..., n - 1 ein.",
          "6. Schreibe alle Lösungen in Polarform oder Normalform."
        ]
      }
    ],
    merksaetze: [
      "i² = -1 ist die wichtigste Rechenregel bei komplexen Zahlen.",
      "In der Normalform rechnet man mit Realteil und Imaginärteil.",
      "In der Polarform rechnet man mit Betrag und Winkel.",
      "Beim Multiplizieren in Polarform werden die Beträge multipliziert und die Winkel addiert.",
      "Beim Potenzieren in Polarform wird der Betrag potenziert und der Winkel multipliziert.",
      "Beim Wurzelziehen komplexer Zahlen entstehen meistens mehrere Lösungen.",
      "Die Vorzeichen von Realteil und Imaginärteil bestimmen den Quadranten.",
      "Die konjugiert komplexe Zahl macht den Nenner bei Brüchen reell."
    ],
    typischeFehler: [
      {
        fehler: "Man vergisst, dass i² = -1 gilt.",
        korrektur:
          "Immer wenn i² entsteht, muss es durch -1 ersetzt werden. Sonst bleibt das Ergebnis falsch."
      },
      {
        fehler: "Man bestimmt den Winkel nur mit dem Taschenrechner und beachtet den Quadranten nicht.",
        korrektur:
          "Der Taschenrechner liefert oft nur einen Referenzwinkel. Der richtige Winkel hängt vom Quadranten ab."
      },
      {
        fehler: "Man verwechselt Realteil und Imaginärteil.",
        korrektur:
          "Bei z = a + bi ist a der Realteil und b der Imaginärteil. Das i gehört nicht zum Imaginärteil, sondern zeigt nur die imaginäre Richtung."
      },
      {
        fehler: "Man addiert beim Addieren komplexer Zahlen die Beträge.",
        korrektur:
          "In Normalform addiert man Realteile mit Realteilen und Imaginärteile mit Imaginärteilen. Beträge addiert man nicht einfach."
      },
      {
        fehler: "Man nimmt bei z^n = w nur eine Lösung.",
        korrektur:
          "Komplexe Wurzelgleichungen haben meistens mehrere Lösungen. Bei z^n = w gibt es normalerweise n verschiedene Lösungen."
      },
      {
        fehler: "Man vergisst beim Dividieren die konjugiert komplexe Zahl.",
        korrektur:
          "Bei einem komplexen Nenner erweitert man mit der konjugierten Zahl des Nenners, damit der Nenner reell wird."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Realteil und Imaginärteil",
        schwierigkeit: "einfach",
        aufgabe:
          "Gegeben ist z = 5 - 7i. Bestimme Realteil und Imaginärteil.",
        loesung: [
          "Die Normalform lautet a + bi.",
          "Bei z = 5 - 7i ist der Realteil a = 5.",
          "Der Imaginärteil ist b = -7.",
          "Also gilt: Re(z) = 5 und Im(z) = -7."
        ]
      },
      {
        titel: "Aufgabe 2: Betrag berechnen",
        schwierigkeit: "einfach",
        aufgabe:
          "Berechne den Betrag der komplexen Zahl z = -3 + 4i.",
        loesung: [
          "Der Realteil ist a = -3.",
          "Der Imaginärteil ist b = 4.",
          "Die Formel lautet |z| = √(a² + b²).",
          "Also gilt |z| = √((-3)² + 4²).",
          "Das ergibt |z| = √(9 + 16) = √25 = 5."
        ]
      },
      {
        titel: "Aufgabe 3: Addition und Subtraktion",
        schwierigkeit: "einfach",
        aufgabe:
          "Berechne (2 + 5i) + (7 - 3i) und (2 + 5i) - (7 - 3i).",
        loesung: [
          "Bei der Addition rechnet man Realteile und Imaginärteile getrennt.",
          "(2 + 5i) + (7 - 3i) = 9 + 2i.",
          "Bei der Subtraktion muss man die zweite Klammer vollständig abziehen.",
          "(2 + 5i) - (7 - 3i) = 2 + 5i - 7 + 3i.",
          "Das ergibt -5 + 8i."
        ]
      },
      {
        titel: "Aufgabe 4: Multiplikation",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne (3 + 2i)(1 - 4i) in der Form a + bi.",
        loesung: [
          "Multipliziere die Klammern aus.",
          "(3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i².",
          "Fasse zusammen: 3 - 10i - 8i².",
          "Da i² = -1 gilt, wird -8i² zu +8.",
          "Das Ergebnis ist 11 - 10i."
        ]
      },
      {
        titel: "Aufgabe 5: Division",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne (4 + i) / (2 - i) in der Form a + bi.",
        loesung: [
          "Der Nenner ist 2 - i.",
          "Die konjugiert komplexe Zahl dazu ist 2 + i.",
          "Erweitere den Bruch mit 2 + i.",
          "Zähler: (4 + i)(2 + i) = 8 + 4i + 2i + i² = 7 + 6i.",
          "Nenner: (2 - i)(2 + i) = 4 - i² = 5.",
          "Also ist das Ergebnis (7 + 6i) / 5 = 7/5 + 6/5 i."
        ]
      },
      {
        titel: "Aufgabe 6: Polarform",
        schwierigkeit: "mittel",
        aufgabe:
          "Schreibe z = 1 + i in Polarform.",
        loesung: [
          "Der Betrag ist |z| = √(1² + 1²) = √2.",
          "Der Punkt liegt im ersten Quadranten.",
          "Der Winkel ist 45° beziehungsweise π/4.",
          "Also lautet die Polarform z = √2 · cis(45°).",
          "Alternativ: z = √2(cos(π/4) + i sin(π/4))."
        ]
      },
      {
        titel: "Aufgabe 7: Argument im zweiten Quadranten",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme Betrag und Argument von z = -√3 + i.",
        loesung: [
          "Der Realteil ist negativ und der Imaginärteil positiv.",
          "Der Punkt liegt also im zweiten Quadranten.",
          "Der Betrag ist |z| = √((-√3)² + 1²) = √(3 + 1) = 2.",
          "Der Referenzwinkel ist 30°, weil tan(30°) = 1/√3.",
          "Im zweiten Quadranten ist der Winkel 180° - 30° = 150°.",
          "Also gilt: |z| = 2 und arg(z) = 150°."
        ]
      },
      {
        titel: "Aufgabe 8: Einfache komplexe Gleichung",
        schwierigkeit: "schwer",
        aufgabe:
          "Löse z² = -4.",
        loesung: [
          "Gesucht sind Zahlen, deren Quadrat -4 ergibt.",
          "Da i² = -1 gilt, ist (2i)² = 4i² = -4.",
          "Auch (-2i)² = 4i² = -4.",
          "Also sind die Lösungen z = 2i und z = -2i."
        ]
      },
      {
        titel: "Aufgabe 9: Dritte Wurzeln",
        schwierigkeit: "schwer",
        aufgabe:
          "Löse z³ = 8 in der komplexen Zahlenebene.",
        loesung: [
          "Die Zahl 8 liegt auf der positiven reellen Achse.",
          "In Polarform hat 8 den Betrag 8 und den Winkel 0°.",
          "Beim Ziehen der dritten Wurzel wird der Betrag zu 2.",
          "Die Winkel erhält man durch (0° + 360°k) / 3.",
          "Für k = 0 erhält man 0°.",
          "Für k = 1 erhält man 120°.",
          "Für k = 2 erhält man 240°.",
          "Die drei Lösungen sind 2 cis(0°), 2 cis(120°) und 2 cis(240°)."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine komplexe Zahl?",
        antwort:
          "Eine komplexe Zahl ist eine Zahl der Form a + bi. Dabei ist a der Realteil, b der Imaginärteil und i die imaginäre Einheit mit i² = -1."
      },
      {
        frage: "Was bedeutet der Betrag einer komplexen Zahl?",
        antwort:
          "Der Betrag ist der Abstand der komplexen Zahl vom Ursprung in der komplexen Zahlenebene."
      },
      {
        frage: "Was bedeutet das Argument einer komplexen Zahl?",
        antwort:
          "Das Argument ist der Winkel, den der zugehörige Vektor mit der positiven reellen Achse einschliesst."
      },
      {
        frage: "Warum ist die Polarform nützlich?",
        antwort:
          "Die Polarform ist besonders nützlich beim Multiplizieren, Dividieren, Potenzieren und Wurzelziehen, weil man dann mit Betrag und Winkel arbeiten kann."
      },
      {
        frage: "Was macht die konjugiert komplexe Zahl?",
        antwort:
          "Sie ändert das Vorzeichen des Imaginärteils. Beim Dividieren hilft sie, einen komplexen Nenner in einen reellen Nenner umzuwandeln."
      },
      {
        frage: "Warum gibt es bei komplexen Wurzeln mehrere Lösungen?",
        antwort:
          "Weil Winkel, die sich um ganze Umdrehungen unterscheiden, dieselbe komplexe Zahl beschreiben. Beim Teilen des Winkels entstehen dadurch mehrere verschiedene Lösungen."
      }
    ],
    nachtVorTest: [
      "Kannst du Realteil und Imaginärteil sicher bestimmen?",
      "Kennst du die Regel i² = -1?",
      "Kannst du den Betrag mit |z| = √(a² + b²) berechnen?",
      "Kannst du den Quadranten anhand der Vorzeichen erkennen?",
      "Kannst du eine Zahl von Normalform in Polarform umwandeln?",
      "Kannst du komplexe Zahlen multiplizieren und i² ersetzen?",
      "Kannst du durch eine komplexe Zahl dividieren, indem du mit der konjugierten Zahl erweiterst?",
      "Kannst du erklären, warum zⁿ = w mehrere Lösungen haben kann?"
    ]
  }
  {
    id: "partialbruchzerlegung",
    nummer: "3",
    titel: "Partialbruchzerlegung",
    kurzbeschreibung:
      "Gebrochen rationale Funktionen zerlegen, Nenner faktorisieren, Ansatz wählen und Koeffizienten bestimmen.",
    lernziele: [
      "Du erkennst, wann eine Partialbruchzerlegung sinnvoll ist.",
      "Du kannst einen gebrochen rationalen Ausdruck in einfachere Brüche zerlegen.",
      "Du kannst den Nenner faktorisieren.",
      "Du kannst den richtigen Ansatz für einfache Linearfaktoren wählen.",
      "Du kannst den richtigen Ansatz für doppelte oder mehrfache Faktoren wählen.",
      "Du kannst Koeffizienten durch Einsetzen oder Koeffizientenvergleich bestimmen.",
      "Du kannst unechte gebrochen rationale Funktionen zuerst mit Polynomdivision vorbereiten.",
      "Du verstehst die Grundidee komplexer Faktoren bei der Partialbruchzerlegung."
    ],
    theorie: [
      {
        titel: "Was ist Partialbruchzerlegung?",
        text:
          "Bei der Partialbruchzerlegung zerlegt man einen komplizierten Bruch aus Polynomen in mehrere einfachere Brüche. Dadurch kann man den Ausdruck leichter integrieren, in Reihen entwickeln oder algebraisch untersuchen."
      },
      {
        titel: "Gebrochen rationale Funktion",
        text:
          "Eine gebrochen rationale Funktion ist ein Bruch, bei dem Zähler und Nenner Polynome sind. Beispiel: (x + 1) / (x² - x - 6)."
      },
      {
        titel: "Echte und unechte Brüche",
        text:
          "Ein Bruch ist echt, wenn der Grad des Zählers kleiner ist als der Grad des Nenners. Ist der Zählergrad gleich gross oder grösser, muss man zuerst eine Polynomdivision durchführen."
      },
      {
        titel: "Nenner faktorisieren",
        text:
          "Der wichtigste Vorbereitungsschritt ist das Faktorisieren des Nenners. Aus x² - x - 6 wird zum Beispiel (x - 3)(x + 2). Erst danach kann man den passenden Partialbruchansatz aufstellen."
      },
      {
        titel: "Einfache Linearfaktoren",
        text:
          "Bei verschiedenen einfachen Linearfaktoren bekommt jeder Faktor einen eigenen Bruch mit einer unbekannten Konstanten im Zähler."
      },
      {
        titel: "Mehrfache Linearfaktoren",
        text:
          "Wenn ein Faktor mehrfach vorkommt, braucht man mehrere Brüche. Bei (x - a)² braucht man zum Beispiel A/(x - a) + B/(x - a)²."
      },
      {
        titel: "Irreduzible quadratische Faktoren",
        text:
          "Wenn ein quadratischer Faktor über den reellen Zahlen nicht weiter zerfällt, verwendet man im Zähler meistens einen linearen Ausdruck wie Ax + B."
      },
      {
        titel: "Koeffizienten bestimmen",
        text:
          "Die unbekannten Zahlen im Ansatz kann man bestimmen, indem man geeignete x-Werte einsetzt oder einen Koeffizientenvergleich macht."
      },
      {
        titel: "Warum macht man das?",
        text:
          "Die Zerlegung macht komplizierte Ausdrücke übersichtlicher. Besonders beim Integrieren, bei Potenzreihen und bei Differentialgleichungen kann sie sehr hilfreich sein."
      }
    ],
    methoden: [
      {
        titel: "Methode: Standardvorgehen",
        schritte: [
          "1. Prüfe, ob der Bruch echt ist.",
          "2. Falls der Bruch unecht ist, führe zuerst Polynomdivision durch.",
          "3. Faktorisiere den Nenner vollständig, soweit es für die Aufgabe sinnvoll ist.",
          "4. Stelle den passenden Partialbruchansatz auf.",
          "5. Multipliziere die Gleichung mit dem gesamten Nenner.",
          "6. Bestimme die unbekannten Koeffizienten durch Einsetzen oder Koeffizientenvergleich.",
          "7. Setze die Koeffizienten in den Ansatz ein.",
          "8. Kontrolliere kurz, ob die Zerlegung plausibel ist."
        ]
      },
      {
        titel: "Methode: Ansatz bei einfachen Linearfaktoren",
        schritte: [
          "1. Faktorisiere den Nenner in verschiedene Faktoren.",
          "2. Schreibe für jeden Faktor einen eigenen Bruch.",
          "3. Setze über jeden Faktor eine unbekannte Konstante.",
          "4. Beispiel: Bei (x - 2)(x + 5) lautet der Ansatz A/(x - 2) + B/(x + 5).",
          "5. Bestimme A und B durch Einsetzen geeigneter x-Werte."
        ]
      },
      {
        titel: "Methode: Ansatz bei mehrfachen Faktoren",
        schritte: [
          "1. Prüfe, ob ein Faktor mehrfach vorkommt.",
          "2. Bei einem Faktor der Potenz 2 brauchst du zwei Brüche.",
          "3. Bei einem Faktor der Potenz 3 brauchst du drei Brüche.",
          "4. Beispiel: Bei (x - 1)³ lautet der Ansatz A/(x - 1) + B/(x - 1)² + C/(x - 1)³.",
          "5. Danach bestimmst du die Konstanten wie üblich."
        ]
      },
      {
        titel: "Methode: Koeffizienten durch Einsetzen bestimmen",
        schritte: [
          "1. Multipliziere zuerst mit dem gemeinsamen Nenner.",
          "2. Wähle x-Werte, bei denen möglichst viele Terme verschwinden.",
          "3. Setze diese Werte ein.",
          "4. Löse die entstehenden einfachen Gleichungen.",
          "5. Falls noch Koeffizienten fehlen, verwende zusätzlich einen anderen x-Wert oder Koeffizientenvergleich."
        ]
      },
      {
        titel: "Methode: Koeffizientenvergleich",
        schritte: [
          "1. Multipliziere mit dem gemeinsamen Nenner.",
          "2. Multipliziere alle Klammern aus.",
          "3. Sortiere beide Seiten nach Potenzen von x.",
          "4. Vergleiche die Koeffizienten vor x², x, konstantem Term usw.",
          "5. Löse das entstehende Gleichungssystem."
        ]
      }
    ],
    merksaetze: [
      "Partialbruchzerlegung macht einen komplizierten rationalen Ausdruck zu mehreren einfachen Brüchen.",
      "Zuerst immer prüfen, ob der Bruch echt ist.",
      "Bei einem unechten Bruch zuerst Polynomdivision durchführen.",
      "Der Nenner bestimmt den Ansatz.",
      "Jeder einfache Linearfaktor erhält einen Bruch mit einer Konstanten im Zähler.",
      "Mehrfache Faktoren brauchen mehrere Brüche.",
      "Bei quadratischen Faktoren steht im Zähler meistens ein linearer Ausdruck.",
      "Nach dem Ansatz werden die unbekannten Koeffizienten bestimmt."
    ],
    typischeFehler: [
      {
        fehler: "Man vergisst die Polynomdivision bei unechten Brüchen.",
        korrektur:
          "Wenn der Zählergrad gleich gross oder grösser als der Nennergrad ist, muss zuerst Polynomdivision gemacht werden."
      },
      {
        fehler: "Man faktorisiert den Nenner nicht vollständig.",
        korrektur:
          "Ohne vollständige oder passende Faktorisierung ist der Partialbruchansatz meistens falsch."
      },
      {
        fehler: "Man verwendet bei mehrfachen Faktoren zu wenige Brüche.",
        korrektur:
          "Bei (x - a)² braucht man A/(x - a) und B/(x - a)². Bei (x - a)³ braucht man drei solche Stufen."
      },
      {
        fehler: "Man setzt nach dem Multiplizieren mit dem Nenner falsche x-Werte ein.",
        korrektur:
          "Man wählt Werte, die Faktoren zu 0 machen, damit möglichst viele Terme verschwinden."
      },
      {
        fehler: "Man denkt, A und B seien Variablen wie x.",
        korrektur:
          "A, B, C usw. sind feste unbekannte Zahlen, die bestimmt werden müssen."
      },
      {
        fehler: "Man vergisst am Schluss, die gefundenen Werte wieder in den Ansatz einzusetzen.",
        korrektur:
          "Die Lösung ist nicht nur A und B, sondern die fertige Zerlegung des ursprünglichen Bruchs."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Einfacher Ansatz",
        schwierigkeit: "einfach",
        aufgabe:
          "Zerlege den Bruch 5 / ((x - 1)(x + 4)) in Partialbrüche.",
        loesung: [
          "Der Nenner besteht aus den einfachen Linearfaktoren x - 1 und x + 4.",
          "Der Ansatz lautet 5 / ((x - 1)(x + 4)) = A/(x - 1) + B/(x + 4).",
          "Multipliziere mit dem Nenner: 5 = A(x + 4) + B(x - 1).",
          "Setze x = 1 ein: 5 = A · 5, also A = 1.",
          "Setze x = -4 ein: 5 = B · (-5), also B = -1.",
          "Die Zerlegung lautet 1/(x - 1) - 1/(x + 4)."
        ]
      },
      {
        titel: "Aufgabe 2: Zwei Linearfaktoren",
        schwierigkeit: "einfach",
        aufgabe:
          "Zerlege (3x + 7) / ((x + 1)(x + 3)) in Partialbrüche.",
        loesung: [
          "Der Ansatz lautet (3x + 7) / ((x + 1)(x + 3)) = A/(x + 1) + B/(x + 3).",
          "Multipliziere mit dem Nenner: 3x + 7 = A(x + 3) + B(x + 1).",
          "Setze x = -1 ein: 4 = A · 2, also A = 2.",
          "Setze x = -3 ein: -2 = B · (-2), also B = 1.",
          "Die Zerlegung lautet 2/(x + 1) + 1/(x + 3)."
        ]
      },
      {
        titel: "Aufgabe 3: Nenner zuerst faktorisieren",
        schwierigkeit: "mittel",
        aufgabe:
          "Zerlege (x + 1) / (x² - x - 6) in Partialbrüche.",
        loesung: [
          "Faktorisiere zuerst den Nenner: x² - x - 6 = (x - 3)(x + 2).",
          "Der Ansatz lautet (x + 1) / ((x - 3)(x + 2)) = A/(x - 3) + B/(x + 2).",
          "Multipliziere mit dem Nenner: x + 1 = A(x + 2) + B(x - 3).",
          "Setze x = 3 ein: 4 = A · 5, also A = 4/5.",
          "Setze x = -2 ein: -1 = B · (-5), also B = 1/5.",
          "Die Zerlegung lautet (4/5)/(x - 3) + (1/5)/(x + 2)."
        ]
      },
      {
        titel: "Aufgabe 4: Mehrfacher Faktor",
        schwierigkeit: "mittel",
        aufgabe:
          "Stelle nur den richtigen Ansatz für 1 / ((x - 2)²(x + 1)) auf.",
        loesung: [
          "Der Faktor x - 2 kommt zweimal vor.",
          "Deshalb braucht man A/(x - 2) und B/(x - 2)².",
          "Der Faktor x + 1 kommt einmal vor.",
          "Dafür braucht man C/(x + 1).",
          "Der vollständige Ansatz lautet A/(x - 2) + B/(x - 2)² + C/(x + 1)."
        ]
      },
      {
        titel: "Aufgabe 5: Unechter Bruch",
        schwierigkeit: "mittel",
        aufgabe:
          "Erkläre, was man bei (x² + 1) / (x - 1) zuerst machen muss.",
        loesung: [
          "Der Zählergrad ist 2.",
          "Der Nennergrad ist 1.",
          "Der Bruch ist also unecht.",
          "Man darf nicht direkt mit Partialbruchzerlegung beginnen.",
          "Zuerst muss eine Polynomdivision durchgeführt werden.",
          "Erst der verbleibende echte Restbruch kann weiter zerlegt werden."
        ]
      },
      {
        titel: "Aufgabe 6: Polynomdivision und Restbruch",
        schwierigkeit: "schwer",
        aufgabe:
          "Zerlege (x² + 3x + 5) / (x + 2) in einen Polynomteil und einen Restbruch.",
        loesung: [
          "Da der Zählergrad grösser ist als der Nennergrad, braucht man Polynomdivision.",
          "Teile x² + 3x + 5 durch x + 2.",
          "Der erste Term ist x, denn x · (x + 2) = x² + 2x.",
          "Subtrahiere: (x² + 3x + 5) - (x² + 2x) = x + 5.",
          "Der nächste Term ist 1, denn 1 · (x + 2) = x + 2.",
          "Subtrahiere: (x + 5) - (x + 2) = 3.",
          "Also gilt: (x² + 3x + 5)/(x + 2) = x + 1 + 3/(x + 2)."
        ]
      },
      {
        titel: "Aufgabe 7: Koeffizientenvergleich",
        schwierigkeit: "schwer",
        aufgabe:
          "Bestimme A und B im Ansatz (4x + 1)/((x - 1)(x + 2)) = A/(x - 1) + B/(x + 2) mit Koeffizientenvergleich.",
        loesung: [
          "Multipliziere mit dem Nenner: 4x + 1 = A(x + 2) + B(x - 1).",
          "Multipliziere aus: 4x + 1 = Ax + 2A + Bx - B.",
          "Fasse zusammen: 4x + 1 = (A + B)x + (2A - B).",
          "Vergleiche die Koeffizienten: A + B = 4 und 2A - B = 1.",
          "Aus A + B = 4 folgt B = 4 - A.",
          "Einsetzen ergibt 2A - (4 - A) = 1.",
          "Also 3A - 4 = 1, somit A = 5/3.",
          "Dann ist B = 4 - 5/3 = 7/3.",
          "Die Zerlegung lautet (5/3)/(x - 1) + (7/3)/(x + 2)."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist die Idee der Partialbruchzerlegung?",
        antwort:
          "Man zerlegt einen komplizierten rationalen Bruch in mehrere einfache Brüche. Dadurch wird der Ausdruck übersichtlicher und oft leichter integrierbar oder weiterverarbeitbar."
      },
      {
        frage: "Was muss man vor der Partialbruchzerlegung zuerst prüfen?",
        antwort:
          "Man muss prüfen, ob der Bruch echt ist. Wenn der Zählergrad gleich gross oder grösser als der Nennergrad ist, braucht man zuerst Polynomdivision."
      },
      {
        frage: "Wie bestimmt man den Ansatz?",
        antwort:
          "Der Ansatz hängt vom Nenner ab. Jeder Faktor im Nenner erzeugt passende Partialbrüche mit unbekannten Koeffizienten im Zähler."
      },
      {
        frage: "Warum faktorisiert man den Nenner?",
        antwort:
          "Nur durch die Faktorisierung erkennt man, aus welchen einfachen Bausteinen der Nenner besteht und welcher Partialbruchansatz nötig ist."
      },
      {
        frage: "Was ist ein Koeffizientenvergleich?",
        antwort:
          "Beim Koeffizientenvergleich schreibt man beide Seiten nach Potenzen von x geordnet und setzt dann die Koeffizienten gleicher Potenzen gleich."
      },
      {
        frage: "Wann braucht man mehrere Brüche für denselben Faktor?",
        antwort:
          "Wenn ein Faktor mehrfach vorkommt. Bei einem Faktor der Potenz 2 braucht man zwei Brüche, bei Potenz 3 drei Brüche und so weiter."
      }
    ],
    nachtVorTest: [
      "Kannst du erkennen, ob ein Bruch echt oder unecht ist?",
      "Weisst du, wann Polynomdivision nötig ist?",
      "Kannst du einen quadratischen Nenner faktorisieren?",
      "Kannst du den Ansatz bei einfachen Linearfaktoren aufstellen?",
      "Kannst du den Ansatz bei mehrfachen Faktoren aufstellen?",
      "Kannst du mit dem gemeinsamen Nenner multiplizieren?",
      "Kannst du Koeffizienten durch geschicktes Einsetzen bestimmen?",
      "Kannst du einen Koeffizientenvergleich durchführen?",
      "Setzt du am Schluss die gefundenen Werte wieder in die Zerlegung ein?"
    ]
  }

  {
    id: "moebiustransformationen",
    nummer: "4",
    titel: "Möbiustransformationen",
    kurzbeschreibung:
      "Möbiustransformationen verstehen, Fixpunkte berechnen, Bilder von Geraden und Kreisen bestimmen und Transformationen aus Bedingungen aufstellen.",
    lernziele: [
      "Du kennst die allgemeine Form einer Möbiustransformation.",
      "Du kannst einfache Möbiustransformationen wie Translation, Drehstreckung und Inversion erkennen.",
      "Du kannst erklären, warum Geraden und Kreise gemeinsam als verallgemeinerte Kreise betrachtet werden.",
      "Du kannst das Bild einer Geraden oder eines Kreises unter einer Möbiustransformation bestimmen.",
      "Du kannst Fixpunkte einer Möbiustransformation berechnen.",
      "Du kannst aus Bedingungen wie z₁ wird auf 0 abgebildet oder z₂ wird auf ∞ abgebildet eine Transformation aufstellen.",
      "Du verstehst die Rolle der Zahlen a, b, c und d in der Formel w = (az + b)/(cz + d).",
      "Du kannst prüfen, wann eine Möbiustransformation nicht definiert ist."
    ],
    theorie: [
      {
        titel: "Was ist eine Möbiustransformation?",
        text:
          "Eine Möbiustransformation ist eine Abbildung der Form w = (az + b)/(cz + d). Dabei sind a, b, c und d komplexe Zahlen. Wichtig ist, dass ad - bc nicht 0 sein darf, weil die Transformation sonst keine echte Möbiustransformation ist."
      },
      {
        titel: "Warum darf ad - bc nicht 0 sein?",
        text:
          "Wenn ad - bc = 0 gilt, sind Zähler und Nenner zu stark voneinander abhängig. Die Abbildung verliert dann ihre eigentliche Umkehrbarkeit und verhält sich nicht mehr wie eine Möbiustransformation."
      },
      {
        titel: "Nicht definierte Stelle",
        text:
          "Die Transformation ist dort nicht definiert, wo der Nenner 0 wird. Aus cz + d = 0 folgt z = -d/c, falls c nicht 0 ist. Dieser Punkt wird auf ∞ abgebildet."
      },
      {
        titel: "Unendlicher Punkt",
        text:
          "Bei Möbiustransformationen arbeitet man oft mit der erweiterten komplexen Ebene. Dort ergänzt man die komplexe Ebene um den Punkt ∞. Dadurch können auch Abbildungen wie 1/z sauber beschrieben werden."
      },
      {
        titel: "Verallgemeinerte Kreise",
        text:
          "Geraden und Kreise werden zusammen als verallgemeinerte Kreise betrachtet. Eine Gerade kann man sich als Kreis durch den unendlichen Punkt vorstellen."
      },
      {
        titel: "Wichtige Eigenschaft",
        text:
          "Möbiustransformationen bilden verallgemeinerte Kreise wieder auf verallgemeinerte Kreise ab. Das heisst: Aus einer Geraden oder einem Kreis wird wieder eine Gerade oder ein Kreis."
      },
      {
        titel: "Translation",
        text:
          "Eine Abbildung der Form w = z + b verschiebt jeden Punkt um denselben komplexen Wert b. Geometrisch ist das eine Verschiebung in der komplexen Ebene."
      },
      {
        titel: "Drehstreckung",
        text:
          "Eine Abbildung der Form w = az dreht und streckt die Ebene. Der Betrag von a bestimmt die Streckung, das Argument von a bestimmt die Drehung."
      },
      {
        titel: "Inversion",
        text:
          "Die Abbildung w = 1/z vertauscht grosse und kleine Abstände zum Ursprung und spiegelt zusätzlich an der reellen Achse. Sie ist eine zentrale Grundform vieler Möbiustransformationen."
      },
      {
        titel: "Fixpunkt",
        text:
          "Ein Fixpunkt ist ein Punkt, der durch die Transformation auf sich selbst abgebildet wird. Man findet ihn, indem man w = z setzt und die entstehende Gleichung löst."
      }
    ],
    methoden: [
      {
        titel: "Methode: Prüfen, ob eine Möbiustransformation vorliegt",
        schritte: [
          "1. Bringe die Abbildung in die Form w = (az + b)/(cz + d).",
          "2. Lies a, b, c und d ab.",
          "3. Berechne ad - bc.",
          "4. Wenn ad - bc nicht 0 ist, liegt eine echte Möbiustransformation vor.",
          "5. Wenn ad - bc = 0 ist, ist die Abbildung entartet und keine echte Möbiustransformation."
        ]
      },
      {
        titel: "Methode: Nicht definierte Stelle bestimmen",
        schritte: [
          "1. Betrachte den Nenner cz + d.",
          "2. Setze den Nenner gleich 0.",
          "3. Löse cz + d = 0 nach z auf.",
          "4. Dieser z-Wert wird auf ∞ abgebildet.",
          "5. Falls c = 0 ist, gibt es keine endliche Polstelle."
        ]
      },
      {
        titel: "Methode: Fixpunkte berechnen",
        schritte: [
          "1. Schreibe die Transformation als w = (az + b)/(cz + d).",
          "2. Setze w = z.",
          "3. Du erhältst z = (az + b)/(cz + d).",
          "4. Multipliziere mit dem Nenner.",
          "5. Bringe alles auf eine Seite.",
          "6. Löse die entstehende quadratische oder lineare Gleichung.",
          "7. Die Lösungen sind die Fixpunkte."
        ]
      },
      {
        titel: "Methode: Bild einer Geraden oder eines Kreises bestimmen",
        schritte: [
          "1. Schreibe die ursprüngliche Gerade oder den ursprünglichen Kreis als Gleichung in z.",
          "2. Bestimme die Umkehrabbildung oder löse die Möbiustransformation nach z auf.",
          "3. Setze diesen Ausdruck für z in die ursprüngliche Gleichung ein.",
          "4. Vereinfache die Gleichung in w.",
          "5. Erkenne, ob das Bild eine Gerade oder ein Kreis ist."
        ]
      },
      {
        titel: "Methode: Transformation aus drei Bildpunkten bestimmen",
        schritte: [
          "1. Nutze die allgemeine Form w = (az + b)/(cz + d).",
          "2. Setze die drei Bedingungen nacheinander ein.",
          "3. Wenn ein Punkt auf 0 abgebildet wird, muss der Zähler dort 0 sein.",
          "4. Wenn ein Punkt auf ∞ abgebildet wird, muss der Nenner dort 0 sein.",
          "5. Wenn ein Punkt auf einen normalen Wert abgebildet wird, setzt du diesen Wert direkt ein.",
          "6. Löse das entstehende Gleichungssystem für a, b, c und d bis auf einen gemeinsamen Faktor.",
          "7. Kontrolliere, ob ad - bc nicht 0 ist."
        ]
      },
      {
        titel: "Methode: Spezialfälle erkennen",
        schritte: [
          "1. Wenn c = 0 ist, ist die Transformation keine echte Bruchform, sondern eine lineare Abbildung.",
          "2. Wenn w = z + b gilt, handelt es sich um eine Translation.",
          "3. Wenn w = az gilt, handelt es sich um eine Drehstreckung.",
          "4. Wenn w = 1/z gilt, handelt es sich um eine Inversion.",
          "5. Kompliziertere Möbiustransformationen kann man oft als Kombination solcher einfachen Schritte verstehen."
        ]
      }
    ],
    merksaetze: [
      "Eine Möbiustransformation hat die Form w = (az + b)/(cz + d).",
      "Die Bedingung ad - bc ≠ 0 verhindert eine entartete Abbildung.",
      "Der Nenner bestimmt, welcher Punkt auf ∞ abgebildet wird.",
      "Der Zähler bestimmt, welcher Punkt auf 0 abgebildet wird.",
      "Möbiustransformationen bilden Geraden und Kreise wieder auf Geraden oder Kreise ab.",
      "Geraden und Kreise heissen zusammen verallgemeinerte Kreise.",
      "Fixpunkte findet man durch die Gleichung w = z.",
      "Die Koeffizienten a, b, c und d sind nur bis auf einen gemeinsamen Faktor eindeutig."
    ],
    typischeFehler: [
      {
        fehler: "Man vergisst die Bedingung ad - bc ≠ 0.",
        korrektur:
          "Diese Bedingung ist zentral. Ohne sie kann die Abbildung entarten und ist keine echte Möbiustransformation."
      },
      {
        fehler: "Man denkt, a, b, c und d seien eindeutig bestimmt.",
        korrektur:
          "Die Koeffizienten sind nur bis auf einen gemeinsamen Faktor bestimmt. Multipliziert man alle vier Koeffizienten mit derselben Zahl ungleich 0, beschreibt das dieselbe Transformation."
      },
      {
        fehler: "Man setzt bei einem Bildpunkt ∞ den Zähler gleich 0.",
        korrektur:
          "Wenn z auf ∞ abgebildet wird, muss der Nenner 0 werden, nicht der Zähler."
      },
      {
        fehler: "Man setzt bei einem Bildpunkt 0 den Nenner gleich 0.",
        korrektur:
          "Wenn z auf 0 abgebildet wird, muss der Zähler 0 sein, während der Nenner nicht 0 sein darf."
      },
      {
        fehler: "Man behandelt Geraden und Kreise als völlig getrennte Objekte.",
        korrektur:
          "Bei Möbiustransformationen betrachtet man Geraden und Kreise gemeinsam als verallgemeinerte Kreise."
      },
      {
        fehler: "Man berechnet Fixpunkte, indem man z = 0 setzt.",
        korrektur:
          "Fixpunkte berechnet man nicht durch z = 0, sondern durch w = z."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Koeffizienten ablesen",
        schwierigkeit: "einfach",
        aufgabe:
          "Gegeben ist w = (2z + 3)/(z - 4). Lies a, b, c und d ab und prüfe ad - bc.",
        loesung: [
          "Die allgemeine Form lautet w = (az + b)/(cz + d).",
          "Hier ist a = 2, b = 3, c = 1 und d = -4.",
          "Berechne ad - bc = 2 · (-4) - 3 · 1.",
          "Das ergibt -8 - 3 = -11.",
          "Da -11 nicht 0 ist, liegt eine echte Möbiustransformation vor."
        ]
      },
      {
        titel: "Aufgabe 2: Nicht definierte Stelle",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme die Stelle, an der w = (z + 1)/(z - 2) nicht definiert ist.",
        loesung: [
          "Die Transformation ist dort nicht definiert, wo der Nenner 0 ist.",
          "Der Nenner ist z - 2.",
          "Setze z - 2 = 0.",
          "Daraus folgt z = 2.",
          "Der Punkt z = 2 wird auf ∞ abgebildet."
        ]
      },
      {
        titel: "Aufgabe 3: Bild von 0",
        schwierigkeit: "einfach",
        aufgabe:
          "Berechne das Bild von z = 0 unter w = (3z - 6)/(z + 2).",
        loesung: [
          "Setze z = 0 in die Transformation ein.",
          "w = (3 · 0 - 6)/(0 + 2).",
          "Das ergibt w = -6/2.",
          "Also ist w = -3.",
          "Der Punkt 0 wird auf -3 abgebildet."
        ]
      },
      {
        titel: "Aufgabe 4: Fixpunkte",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Fixpunkte der Transformation w = 1/z.",
        loesung: [
          "Fixpunkte erfüllen w = z.",
          "Setze also z = 1/z.",
          "Multipliziere mit z, wobei z nicht 0 sein darf.",
          "Dann erhältst du z² = 1.",
          "Die Lösungen sind z = 1 und z = -1.",
          "Also hat die Transformation die Fixpunkte 1 und -1."
        ]
      },
      {
        titel: "Aufgabe 5: Transformation mit Bildpunkt 0",
        schwierigkeit: "mittel",
        aufgabe:
          "Eine Möbiustransformation soll z = 2 auf w = 0 abbilden. Welche Bedingung ergibt sich für a und b?",
        loesung: [
          "Die allgemeine Form lautet w = (az + b)/(cz + d).",
          "Wenn z = 2 auf w = 0 abgebildet wird, muss der Zähler 0 sein.",
          "Der Zähler ist az + b.",
          "Setze z = 2 ein: 2a + b = 0.",
          "Das ist die gesuchte Bedingung.",
          "Zusätzlich darf der Nenner an dieser Stelle nicht 0 sein."
        ]
      },
      {
        titel: "Aufgabe 6: Transformation mit Bildpunkt ∞",
        schwierigkeit: "mittel",
        aufgabe:
          "Eine Möbiustransformation soll z = -1 auf w = ∞ abbilden. Welche Bedingung ergibt sich für c und d?",
        loesung: [
          "Ein Punkt wird auf ∞ abgebildet, wenn der Nenner 0 wird.",
          "Der Nenner ist cz + d.",
          "Setze z = -1 ein.",
          "Dann gilt -c + d = 0.",
          "Also ist d = c.",
          "Der Zähler darf an dieser Stelle nicht gleichzeitig 0 sein."
        ]
      },
      {
        titel: "Aufgabe 7: Einfache Transformation aufstellen",
        schwierigkeit: "schwer",
        aufgabe:
          "Finde eine Möbiustransformation, die 1 auf 0 und 3 auf ∞ abbildet.",
        loesung: [
          "Wenn 1 auf 0 abgebildet wird, muss der Zähler bei z = 1 verschwinden.",
          "Ein passender Zähler ist z - 1.",
          "Wenn 3 auf ∞ abgebildet wird, muss der Nenner bei z = 3 verschwinden.",
          "Ein passender Nenner ist z - 3.",
          "Eine mögliche Transformation ist also w = (z - 1)/(z - 3).",
          "Diese Transformation ist nicht eindeutig, weil man sie noch mit einem Faktor ungleich 0 multiplizieren könnte."
        ]
      },
      {
        titel: "Aufgabe 8: Fixpunkte einer Bruchtransformation",
        schwierigkeit: "schwer",
        aufgabe:
          "Bestimme die Fixpunkte von w = (z + 2)/(z + 1).",
        loesung: [
          "Fixpunkte erfüllen w = z.",
          "Setze z = (z + 2)/(z + 1).",
          "Multipliziere mit z + 1: z(z + 1) = z + 2.",
          "Multipliziere aus: z² + z = z + 2.",
          "Subtrahiere z + 2 auf beiden Seiten: z² - 2 = 0.",
          "Also gilt z² = 2.",
          "Die Fixpunkte sind z = √2 und z = -√2."
        ]
      },
      {
        titel: "Aufgabe 9: Spezialform erkennen",
        schwierigkeit: "mittel",
        aufgabe:
          "Erkläre geometrisch, was die Abbildung w = 2iz macht.",
        loesung: [
          "Die Abbildung hat die Form w = az mit a = 2i.",
          "Der Betrag von a ist 2.",
          "Das bedeutet eine Streckung um den Faktor 2.",
          "Das Argument von i ist 90°.",
          "Das bedeutet eine Drehung um 90° gegen den Uhrzeigersinn.",
          "Also ist w = 2iz eine Drehstreckung: Drehung um 90° und Streckung mit Faktor 2."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine Möbiustransformation?",
        antwort:
          "Eine Möbiustransformation ist eine Abbildung der Form w = (az + b)/(cz + d), wobei ad - bc nicht 0 sein darf."
      },
      {
        frage: "Warum betrachtet man Geraden und Kreise gemeinsam?",
        antwort:
          "Weil Möbiustransformationen Geraden und Kreise wieder auf Geraden oder Kreise abbilden. Deshalb fasst man sie als verallgemeinerte Kreise zusammen."
      },
      {
        frage: "Was bedeutet es, wenn ein Punkt auf ∞ abgebildet wird?",
        antwort:
          "Das bedeutet, dass der Nenner der Möbiustransformation bei diesem Punkt 0 wird. Die Transformation hat dort eine Polstelle."
      },
      {
        frage: "Wie findet man einen Fixpunkt?",
        antwort:
          "Man setzt w = z und löst die entstehende Gleichung. Die Lösungen sind die Punkte, die durch die Transformation unverändert bleiben."
      },
      {
        frage: "Welche geometrische Bedeutung hat w = z + b?",
        antwort:
          "Diese Abbildung ist eine Translation. Jeder Punkt wird um denselben komplexen Wert b verschoben."
      },
      {
        frage: "Welche geometrische Bedeutung hat w = az?",
        antwort:
          "Diese Abbildung ist eine Drehstreckung. Der Betrag von a beschreibt die Streckung, das Argument von a beschreibt die Drehung."
      },
      {
        frage: "Welche Rolle spielen a, b, c und d?",
        antwort:
          "Sie bestimmen die konkrete Möbiustransformation. Allerdings sind sie nur bis auf einen gemeinsamen Faktor eindeutig."
      }
    ],
    nachtVorTest: [
      "Kennst du die Form w = (az + b)/(cz + d)?",
      "Weisst du, warum ad - bc nicht 0 sein darf?",
      "Kannst du bestimmen, wann der Nenner 0 wird?",
      "Weisst du, welcher Punkt auf ∞ abgebildet wird?",
      "Weisst du, welcher Punkt auf 0 abgebildet wird?",
      "Kannst du Fixpunkte durch w = z berechnen?",
      "Kannst du Translation, Drehstreckung und Inversion erkennen?",
      "Kannst du erklären, warum Geraden und Kreise als verallgemeinerte Kreise betrachtet werden?",
      "Kannst du aus einfachen Bildbedingungen eine Transformation aufstellen?"
    ]
  }
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_anwendung_mathematik(container) {
  if (!container) {
    console.error("render_anwendung_mathematik: Kein Container gefunden.");
    return;
  }

  injectAMStyles();

  container.innerHTML = `
    <section class="sf-am-page">
      <div class="sf-am-hero">
        <p class="sf-am-kicker">SchoolFools</p>
        <h1>Anwendung der Mathematik</h1>
        <p>
          Prüfungsvorbereitung mit selbst erstellten Erklärungen, Methoden,
          Aufgaben, Lösungen und mündlichen Prüfungsfragen.
        </p>
      </div>

      <div class="sf-am-layout">
        <aside class="sf-am-sidebar">
          <h2>Themen</h2>
          <div class="sf-am-topic-list">
            ${AM_THEMEN.map((thema, index) => `
              <button
                class="sf-am-topic-button ${index === 0 ? "active" : ""}"
                data-topic-id="${thema.id}">
                <span>${thema.nummer}</span>
                ${escapeHTML(thema.titel)}
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-am-content" id="sf-am-content"></main>
      </div>
    </section>
  `;

  const content = container.querySelector("#sf-am-content");
  const buttons = container.querySelectorAll(".sf-am-topic-button");

  function showTopic(topicId) {
    const thema = AM_THEMEN.find(t => t.id === topicId);
    if (!thema) return;

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.topicId === topicId);
    });

    content.innerHTML = renderAMTopic(thema);
    attachAMInteractions(content);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      showTopic(button.dataset.topicId);
    });
  });

  showTopic(AM_THEMEN[0].id);
}


/* =========================
   EINZELNES THEMA RENDERN
========================= */

function renderAMTopic(thema) {
  return `
    <article class="sf-am-topic">
      <div class="sf-am-topic-header">
        <p class="sf-am-kicker">Thema ${escapeHTML(thema.nummer)}</p>
        <h2>${escapeHTML(thema.titel)}</h2>
        <p>${escapeHTML(thema.kurzbeschreibung)}</p>
      </div>

      ${renderAMSection("Lernziele", renderList(thema.lernziele))}
      ${renderAMTheory(thema.theorie)}
      ${renderAMMethods(thema.methoden)}
      ${renderAMSection("Merksätze", renderList(thema.merksaetze))}
      ${renderAMErrors(thema.typischeFehler)}
      ${renderAMExercises(thema.aufgaben)}
      ${renderAMOral(thema.muendlich)}
      ${renderAMSection("Nacht-vor-dem-Test-Check", renderChecklist(thema.nachtVorTest))}

      <div class="sf-am-disclaimer">
        <strong>Hinweis:</strong>
        Alle Inhalte und Aufgaben auf dieser Seite sind selbst erstellt und dienen
        der Prüfungsvorbereitung. Es handelt sich nicht um kopierte Originalprüfungen
        oder fremde Schulunterlagen.
      </div>
    </article>
  `;
}


function renderAMSection(title, content) {
  return `
    <section class="sf-am-card">
      <h3>${escapeHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderAMTheory(items) {
  return `
    <section class="sf-am-card">
      <h3>Theorie einfach erklärt</h3>
      <div class="sf-am-grid">
        ${items.map(item => `
          <div class="sf-am-mini-card">
            <h4>${escapeHTML(item.titel)}</h4>
            <p>${escapeHTML(item.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderAMMethods(methoden) {
  return `
    <section class="sf-am-card">
      <h3>Methoden</h3>
      <div class="sf-am-accordion">
        ${methoden.map(methode => `
          <div class="sf-am-accordion-item">
            <button class="sf-am-accordion-toggle" type="button">
              <span>${escapeHTML(methode.titel)}</span>
              <span class="sf-am-plus">+</span>
            </button>
            <div class="sf-am-accordion-body">
              ${renderOrderedList(methode.schritte)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderAMErrors(errors) {
  return `
    <section class="sf-am-card">
      <h3>Typische Fehler</h3>
      <div class="sf-am-error-list">
        ${errors.map(item => `
          <div class="sf-am-error-card">
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


function renderAMExercises(exercises) {
  return `
    <section class="sf-am-card">
      <h3>Eigene Übungsaufgaben mit Lösung</h3>
      <div class="sf-am-exercises">
        ${exercises.map(exercise => `
          <div class="sf-am-exercise">
            <div class="sf-am-exercise-top">
              <h4>${escapeHTML(exercise.titel)}</h4>
              <span>${escapeHTML(exercise.schwierigkeit)}</span>
            </div>
            <p>${escapeHTML(exercise.aufgabe)}</p>
            <button class="sf-am-solution-button" type="button">
              Lösung anzeigen
            </button>
            <div class="sf-am-solution">
              ${renderOrderedList(exercise.loesung)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderAMOral(items) {
  return `
    <section class="sf-am-card">
      <h3>Mündliche Prüfungsfragen</h3>
      <div class="sf-am-oral-list">
        ${items.map(item => `
          <div class="sf-am-oral-card">
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

function renderList(items) {
  return `
    <ul class="sf-am-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}


function renderOrderedList(items) {
  return `
    <ol class="sf-am-ordered-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ol>
  `;
}


function renderChecklist(items) {
  return `
    <div class="sf-am-checklist">
      ${items.map(item => `
        <label>
          <input type="checkbox">
          <span>${escapeHTML(item)}</span>
        </label>
      `).join("")}
    </div>
  `;
}


function attachAMInteractions(root) {
  const accordionButtons = root.querySelectorAll(".sf-am-accordion-toggle");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".sf-am-accordion-item");
      item.classList.toggle("open");
    });
  });

  const solutionButtons = root.querySelectorAll(".sf-am-solution-button");

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

function injectAMStyles() {
  if (document.getElementById("sf-am-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-am-styles";
  style.textContent = `
    .sf-am-page {
      width: 100%;
      min-height: 100vh;
      background: #f6f7fb;
      color: #172033;
      font-family: Arial, Helvetica, sans-serif;
      padding: 24px;
      box-sizing: border-box;
    }

    .sf-am-hero {
      background: linear-gradient(135deg, #111827, #273449);
      color: white;
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    }

    .sf-am-kicker {
      margin: 0 0 8px 0;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.75;
      font-weight: 700;
    }

    .sf-am-hero h1 {
      margin: 0 0 12px 0;
      font-size: clamp(32px, 5vw, 56px);
      line-height: 1;
    }

    .sf-am-hero p {
      max-width: 780px;
      margin: 0;
      font-size: 18px;
      line-height: 1.6;
      opacity: 0.92;
    }

    .sf-am-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 24px;
      align-items: start;
    }

    .sf-am-sidebar {
      position: sticky;
      top: 20px;
      background: white;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-am-sidebar h2 {
      margin: 0 0 16px 0;
      font-size: 22px;
    }

    .sf-am-topic-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-am-topic-button {
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

    .sf-am-topic-button span {
      display: inline-flex;
      width: 28px;
      height: 28px;
      align-items: center;
      justify-content: center;
      background: #e5e7eb;
      border-radius: 999px;
      font-size: 13px;
    }

    .sf-am-topic-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
    }

    .sf-am-topic-button.active {
      background: #172033;
      color: white;
      border-color: #172033;
    }

    .sf-am-topic-button.active span {
      background: white;
      color: #172033;
    }

    .sf-am-content {
      min-width: 0;
    }

    .sf-am-topic-header {
      background: white;
      border-radius: 20px;
      padding: 26px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-am-topic-header h2 {
      margin: 0 0 10px 0;
      font-size: 34px;
    }

    .sf-am-topic-header p {
      margin: 0;
      font-size: 17px;
      line-height: 1.6;
      color: #4b5563;
    }

    .sf-am-card {
      background: white;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-am-card h3 {
      margin: 0 0 18px 0;
      font-size: 24px;
    }

    .sf-am-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .sf-am-mini-card,
    .sf-am-error-card,
    .sf-am-oral-card,
    .sf-am-exercise {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
      background: #f9fafb;
    }

    .sf-am-mini-card h4,
    .sf-am-error-card h4,
    .sf-am-oral-card h4,
    .sf-am-exercise h4 {
      margin: 0 0 8px 0;
      font-size: 18px;
    }

    .sf-am-mini-card p,
    .sf-am-error-card p,
    .sf-am-oral-card p,
    .sf-am-exercise p {
      margin: 0;
      line-height: 1.6;
      color: #374151;
    }

    .sf-am-list,
    .sf-am-ordered-list {
      margin: 0;
      padding-left: 22px;
      line-height: 1.8;
      color: #374151;
    }

    .sf-am-list li,
    .sf-am-ordered-list li {
      margin-bottom: 6px;
    }

    .sf-am-accordion {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .sf-am-accordion-item {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      background: #f9fafb;
    }

    .sf-am-accordion-toggle {
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

    .sf-am-plus {
      font-size: 24px;
      line-height: 1;
    }

    .sf-am-accordion-body {
      display: none;
      padding: 0 18px 18px 18px;
    }

    .sf-am-accordion-item.open .sf-am-accordion-body {
      display: block;
    }

    .sf-am-accordion-item.open .sf-am-plus {
      transform: rotate(45deg);
    }

    .sf-am-error-list,
    .sf-am-oral-list,
    .sf-am-exercises {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .sf-am-error-card h4:nth-of-type(1) {
      color: #991b1b;
    }

    .sf-am-error-card h4:nth-of-type(2) {
      margin-top: 14px;
      color: #166534;
    }

    .sf-am-exercise-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 12px;
      margin-bottom: 10px;
    }

    .sf-am-exercise-top span {
      background: #e5e7eb;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 13px;
      font-weight: 700;
      color: #374151;
      white-space: nowrap;
    }

    .sf-am-solution-button {
      margin-top: 14px;
      border: 0;
      background: #172033;
      color: white;
      border-radius: 12px;
      padding: 10px 14px;
      font-weight: 700;
      cursor: pointer;
    }

    .sf-am-solution {
      display: none;
      margin-top: 14px;
      padding: 16px;
      border-radius: 14px;
      background: white;
      border: 1px solid #e5e7eb;
    }

    .sf-am-solution.open {
      display: block;
    }

    .sf-am-checklist {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .sf-am-checklist label {
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

    .sf-am-checklist input {
      margin-top: 3px;
    }

    .sf-am-disclaimer {
      background: #fff7ed;
      border: 1px solid #fed7aa;
      color: #7c2d12;
      border-radius: 18px;
      padding: 18px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    @media (max-width: 900px) {
      .sf-am-layout {
        grid-template-columns: 1fr;
      }

      .sf-am-sidebar {
        position: static;
      }

      .sf-am-grid {
        grid-template-columns: 1fr;
      }

      .sf-am-page {
        padding: 14px;
      }

      .sf-am-hero {
        padding: 24px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_anwendung_mathematik = render_anwendung_mathematik;
