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
  },
   
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
  },

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
  },
   
  {
    id: "vollstaendige-induktion",
    nummer: "5",
    titel: "Vollständige Induktion",
    kurzbeschreibung:
      "Beweise für Aussagen über natürliche Zahlen mit Induktionsanfang, Induktionsannahme und Induktionsschritt.",
    lernziele: [
      "Du verstehst, wofür man vollständige Induktion verwendet.",
      "Du kannst den Induktionsanfang korrekt durchführen.",
      "Du kannst die Induktionsannahme sauber formulieren.",
      "Du kannst den Induktionsschritt von n auf n + 1 durchführen.",
      "Du kannst Summenformeln mit vollständiger Induktion beweisen.",
      "Du kannst Teilbarkeitsaussagen mit vollständiger Induktion beweisen.",
      "Du erkennst typische Fehler bei Induktionsbeweisen.",
      "Du kannst einen Induktionsbeweis klar und vollständig aufschreiben."
    ],
    theorie: [
      {
        titel: "Was ist vollständige Induktion?",
        text:
          "Die vollständige Induktion ist eine Beweismethode für Aussagen, die für natürliche Zahlen gelten sollen. Man zeigt zuerst, dass die Aussage am Anfang stimmt. Danach zeigt man: Wenn sie für eine Zahl n stimmt, dann stimmt sie auch für die nächste Zahl n + 1."
      },
      {
        titel: "Die Grundidee",
        text:
          "Man kann sich vollständige Induktion wie eine Reihe von Dominosteinen vorstellen. Der erste Stein muss fallen. Danach muss jeder Stein den nächsten umstossen. Dann fallen alle Steine."
      },
      {
        titel: "Induktionsanfang",
        text:
          "Beim Induktionsanfang prüft man die Aussage für den ersten erlaubten Wert, meistens n = 1 oder n = 0. Dieser Schritt ist notwendig, weil die ganze Beweiskette irgendwo starten muss."
      },
      {
        titel: "Induktionsannahme",
        text:
          "Bei der Induktionsannahme nimmt man an, dass die Aussage für ein beliebiges, aber festes n gilt. Diese Annahme darf man im Induktionsschritt verwenden."
      },
      {
        titel: "Induktionsschritt",
        text:
          "Im Induktionsschritt zeigt man, dass aus der Gültigkeit für n die Gültigkeit für n + 1 folgt. Man beweist also nicht direkt alles neu, sondern benutzt die Aussage für n als Werkzeug."
      },
      {
        titel: "Typische Struktur",
        text:
          "Ein vollständiger Induktionsbeweis besteht aus drei Teilen: Induktionsanfang, Induktionsannahme und Induktionsschritt. Am Ende schreibt man einen kurzen Schlusssatz."
      },
      {
        titel: "Wann braucht man Induktion?",
        text:
          "Induktion braucht man oft bei Summenformeln, Produktformeln, Teilbarkeitsaussagen, Ungleichungen und Aussagen über Folgen."
      },
      {
        titel: "Warum ist der Schritt n zu n + 1 wichtig?",
        text:
          "Der Schritt n zu n + 1 zeigt, dass die Aussage automatisch weiterwandert. Wenn sie einmal stimmt, dann stimmt sie auch für die nächste Zahl, dann wieder für die nächste und so weiter."
      }
    ],
    methoden: [
      {
        titel: "Methode: Standardbeweis mit vollständiger Induktion",
        schritte: [
          "1. Schreibe klar auf, welche Aussage A(n) bewiesen werden soll.",
          "2. Bestimme den Startwert, meistens n = 1 oder n = 0.",
          "3. Führe den Induktionsanfang durch.",
          "4. Formuliere die Induktionsannahme: Angenommen, A(n) gilt für ein beliebiges n.",
          "5. Formuliere das Induktionsziel: Zu zeigen ist A(n + 1).",
          "6. Starte mit der linken Seite oder der zu beweisenden Aussage für n + 1.",
          "7. Verwende an der passenden Stelle die Induktionsannahme.",
          "8. Forme so um, dass die gewünschte Aussage für n + 1 entsteht.",
          "9. Schreibe einen Schlusssatz."
        ]
      },
      {
        titel: "Methode: Summenformel beweisen",
        schritte: [
          "1. Prüfe die Formel für den ersten Wert.",
          "2. Nimm an, dass die Summenformel bis n gilt.",
          "3. Schreibe die Summe bis n + 1 als Summe bis n plus den neuen letzten Summanden.",
          "4. Ersetze die Summe bis n durch die Induktionsannahme.",
          "5. Fasse algebraisch zusammen.",
          "6. Zeige, dass genau die Formel mit n + 1 entsteht."
        ]
      },
      {
        titel: "Methode: Teilbarkeit beweisen",
        schritte: [
          "1. Prüfe die Teilbarkeit beim Startwert.",
          "2. Nimm an, dass der Ausdruck für n durch eine bestimmte Zahl teilbar ist.",
          "3. Betrachte den Ausdruck für n + 1.",
          "4. Forme ihn so um, dass der Ausdruck aus der Induktionsannahme vorkommt.",
          "5. Zeige, dass der übrige Teil ebenfalls durch die Zahl teilbar ist.",
          "6. Schliesse daraus, dass die Aussage auch für n + 1 gilt."
        ]
      },
      {
        titel: "Methode: Induktionsannahme richtig verwenden",
        schritte: [
          "1. Markiere zuerst genau, was du annehmen darfst.",
          "2. Suche im Ausdruck für n + 1 einen Teil, der wie die Aussage für n aussieht.",
          "3. Ersetze nur diesen Teil durch die Induktionsannahme.",
          "4. Verwende die Annahme nicht für n + 1, denn genau das musst du erst beweisen.",
          "5. Kontrolliere am Schluss, ob wirklich die Zielaussage für n + 1 erreicht wurde."
        ]
      }
    ],
    merksaetze: [
      "Vollständige Induktion beweist Aussagen über natürliche Zahlen.",
      "Der Induktionsanfang startet die Beweiskette.",
      "Die Induktionsannahme gilt nur für n, nicht automatisch für n + 1.",
      "Im Induktionsschritt zeigt man: Wenn A(n) gilt, dann gilt A(n + 1).",
      "Bei Summen ist die Summe bis n + 1 gleich Summe bis n plus neuer letzter Summand.",
      "Bei Teilbarkeit muss man den Ausdruck so umformen, dass die Induktionsannahme sichtbar wird.",
      "Ohne Induktionsanfang ist der Beweis unvollständig.",
      "Ohne Induktionsschritt ist nur ein einzelner Fall geprüft."
    ],
    typischeFehler: [
      {
        fehler: "Man vergisst den Induktionsanfang.",
        korrektur:
          "Der Induktionsanfang ist nötig, damit die Kette überhaupt startet. Ohne Startwert ist der Beweis nicht vollständig."
      },
      {
        fehler: "Man beweist nur ein paar Beispiele und denkt, das reicht.",
        korrektur:
          "Beispiele zeigen nur einzelne Fälle. Ein Induktionsbeweis zeigt alle natürlichen Zahlen ab dem Startwert."
      },
      {
        fehler: "Man verwendet die Aussage für n + 1 schon in der Annahme.",
        korrektur:
          "In der Induktionsannahme darf nur angenommen werden, dass die Aussage für n gilt. Die Aussage für n + 1 ist genau das Ziel."
      },
      {
        fehler: "Man formuliert nicht klar, was bewiesen werden soll.",
        korrektur:
          "Am Anfang sollte die Aussage A(n) klar definiert werden. Sonst wird der Induktionsschritt unübersichtlich."
      },
      {
        fehler: "Man ersetzt im Induktionsschritt einen falschen Teil durch die Induktionsannahme.",
        korrektur:
          "Die Induktionsannahme darf nur auf exakt den Ausdruck angewendet werden, der zur Aussage für n gehört."
      },
      {
        fehler: "Man schreibt keinen Schlusssatz.",
        korrektur:
          "Am Schluss sollte stehen, dass die Aussage wegen Induktionsanfang und Induktionsschritt für alle natürlichen Zahlen ab dem Startwert gilt."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Summenformel",
        schwierigkeit: "einfach",
        aufgabe:
          "Beweise mit vollständiger Induktion: 1 + 2 + 3 + ... + n = n(n + 1)/2 für alle n ≥ 1.",
        loesung: [
          "Induktionsanfang: Für n = 1 gilt links 1 und rechts 1 · 2 / 2 = 1. Die Aussage stimmt.",
          "Induktionsannahme: Angenommen, 1 + 2 + ... + n = n(n + 1)/2 gilt für ein beliebiges n.",
          "Induktionsziel: Zu zeigen ist 1 + 2 + ... + n + (n + 1) = (n + 1)(n + 2)/2.",
          "Beginne mit der linken Seite: 1 + 2 + ... + n + (n + 1).",
          "Verwende die Induktionsannahme: Das ist n(n + 1)/2 + (n + 1).",
          "Faktorisieren: n(n + 1)/2 + 2(n + 1)/2 = (n + 1)(n + 2)/2.",
          "Das ist genau die Formel für n + 1.",
          "Also gilt die Aussage für alle n ≥ 1."
        ]
      },
      {
        titel: "Aufgabe 2: Quadratsummen-ähnliche Struktur",
        schwierigkeit: "mittel",
        aufgabe:
          "Beweise mit vollständiger Induktion: 1 + 3 + 5 + ... + (2n - 1) = n² für alle n ≥ 1.",
        loesung: [
          "Induktionsanfang: Für n = 1 gilt links 1 und rechts 1² = 1. Die Aussage stimmt.",
          "Induktionsannahme: Angenommen, 1 + 3 + ... + (2n - 1) = n².",
          "Induktionsziel: Zu zeigen ist 1 + 3 + ... + (2n - 1) + (2(n + 1) - 1) = (n + 1)².",
          "Der neue letzte Summand ist 2(n + 1) - 1 = 2n + 1.",
          "Beginne mit links: 1 + 3 + ... + (2n - 1) + (2n + 1).",
          "Verwende die Induktionsannahme: n² + 2n + 1.",
          "Das ist (n + 1)².",
          "Damit ist die Aussage bewiesen."
        ]
      },
      {
        titel: "Aufgabe 3: Potenzformel",
        schwierigkeit: "mittel",
        aufgabe:
          "Beweise mit vollständiger Induktion: 2 + 4 + 8 + ... + 2ⁿ = 2ⁿ⁺¹ - 2 für alle n ≥ 1.",
        loesung: [
          "Induktionsanfang: Für n = 1 gilt links 2 und rechts 2² - 2 = 4 - 2 = 2.",
          "Induktionsannahme: Angenommen, 2 + 4 + ... + 2ⁿ = 2ⁿ⁺¹ - 2.",
          "Induktionsziel: Zu zeigen ist 2 + 4 + ... + 2ⁿ + 2ⁿ⁺¹ = 2ⁿ⁺² - 2.",
          "Beginne mit links: 2 + 4 + ... + 2ⁿ + 2ⁿ⁺¹.",
          "Verwende die Induktionsannahme: 2ⁿ⁺¹ - 2 + 2ⁿ⁺¹.",
          "Fasse zusammen: 2 · 2ⁿ⁺¹ - 2.",
          "Das ist 2ⁿ⁺² - 2.",
          "Damit ist die Aussage bewiesen."
        ]
      },
      {
        titel: "Aufgabe 4: Teilbarkeit",
        schwierigkeit: "mittel",
        aufgabe:
          "Beweise mit vollständiger Induktion: 3ⁿ - 1 ist für alle n ≥ 1 durch 2 teilbar.",
        loesung: [
          "Induktionsanfang: Für n = 1 gilt 3¹ - 1 = 2. Das ist durch 2 teilbar.",
          "Induktionsannahme: Angenommen, 3ⁿ - 1 ist durch 2 teilbar.",
          "Induktionsziel: Zu zeigen ist, dass 3ⁿ⁺¹ - 1 durch 2 teilbar ist.",
          "Forme um: 3ⁿ⁺¹ - 1 = 3 · 3ⁿ - 1.",
          "Schreibe 3 · 3ⁿ - 1 = 3(3ⁿ - 1) + 2.",
          "Nach Induktionsannahme ist 3ⁿ - 1 durch 2 teilbar.",
          "Also ist auch 3(3ⁿ - 1) durch 2 teilbar.",
          "Der Restterm 2 ist ebenfalls durch 2 teilbar.",
          "Damit ist 3ⁿ⁺¹ - 1 durch 2 teilbar."
        ]
      },
      {
        titel: "Aufgabe 5: Induktionsanfang erkennen",
        schwierigkeit: "einfach",
        aufgabe:
          "Welche Rolle spielt der Induktionsanfang in einem Induktionsbeweis?",
        loesung: [
          "Der Induktionsanfang zeigt, dass die Aussage beim ersten erlaubten Wert stimmt.",
          "Er startet die Beweiskette.",
          "Ohne Induktionsanfang hätte man nur gezeigt, dass aus einer wahren Aussage die nächste folgt.",
          "Aber man hätte nicht gezeigt, dass die erste Aussage überhaupt wahr ist."
        ]
      },
      {
        titel: "Aufgabe 6: Fehler finden",
        schwierigkeit: "schwer",
        aufgabe:
          "Ein Schüler schreibt: Angenommen, die Formel gilt für n + 1. Dann gilt sie auch für n + 1. Erkläre den Fehler.",
        loesung: [
          "Der Fehler liegt in der Induktionsannahme.",
          "Man darf nicht annehmen, dass die Aussage schon für n + 1 gilt.",
          "Genau das soll im Induktionsschritt erst bewiesen werden.",
          "Richtig wäre: Man nimmt an, dass die Aussage für n gilt.",
          "Dann zeigt man daraus, dass sie für n + 1 gilt."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist vollständige Induktion?",
        antwort:
          "Vollständige Induktion ist eine Beweismethode für Aussagen über natürliche Zahlen. Man zeigt zuerst einen Startfall und danach, dass aus der Aussage für n die Aussage für n + 1 folgt."
      },
      {
        frage: "Aus welchen drei Teilen besteht ein Induktionsbeweis?",
        antwort:
          "Ein Induktionsbeweis besteht aus Induktionsanfang, Induktionsannahme und Induktionsschritt."
      },
      {
        frage: "Was macht man im Induktionsanfang?",
        antwort:
          "Man überprüft die Aussage für den ersten erlaubten Wert, zum Beispiel n = 1 oder n = 0."
      },
      {
        frage: "Was ist die Induktionsannahme?",
        antwort:
          "Man nimmt an, dass die Aussage für ein beliebiges, aber festes n gilt. Diese Annahme darf man im Induktionsschritt verwenden."
      },
      {
        frage: "Was zeigt der Induktionsschritt?",
        antwort:
          "Der Induktionsschritt zeigt, dass aus der Gültigkeit der Aussage für n die Gültigkeit für n + 1 folgt."
      },
      {
        frage: "Warum reicht es nicht, nur n = 1, n = 2 und n = 3 zu prüfen?",
        antwort:
          "Weil Beispiele nur einzelne Fälle zeigen. Die vollständige Induktion beweist die Aussage für unendlich viele natürliche Zahlen."
      }
    ],
    nachtVorTest: [
      "Kannst du die Aussage A(n) klar formulieren?",
      "Weisst du, bei welchem n der Induktionsanfang starten muss?",
      "Kannst du den Induktionsanfang sauber ausrechnen?",
      "Kannst du die Induktionsannahme korrekt formulieren?",
      "Kannst du das Induktionsziel für n + 1 hinschreiben?",
      "Kannst du bei Summen den neuen letzten Summanden ergänzen?",
      "Kannst du die Induktionsannahme an der richtigen Stelle verwenden?",
      "Kannst du am Schluss einen vollständigen Schlusssatz schreiben?"
    ]
  },
   
  {
    id: "potenz-und-taylorreihen",
    nummer: "6",
    titel: "Potenz- und Taylorreihen",
    kurzbeschreibung:
      "Funktionen als unendliche Reihen darstellen, Taylorreihen entwickeln und Potenzreihen durch Ableiten, Integrieren und Umformen gewinnen.",
    lernziele: [
      "Du verstehst die Grundidee einer Potenzreihe.",
      "Du kannst eine Potenzreihe um einen Entwicklungspunkt x = a erkennen.",
      "Du kannst einfache Funktionen in eine Potenzreihe umformen.",
      "Du kannst die geometrische Reihe als wichtigste Grundreihe verwenden.",
      "Du kannst eine Taylorreihe mit Ableitungen aufstellen.",
      "Du kannst Taylorreihen um x = 0 und um x = a unterscheiden.",
      "Du kannst Potenzreihen ableiten und integrieren.",
      "Du kannst den Konvergenzbereich einfacher Potenzreihen bestimmen.",
      "Du kannst Funktionen der Form b/(c + x) in Potenzreihen entwickeln."
    ],
    theorie: [
      {
        titel: "Was ist eine Potenzreihe?",
        text:
          "Eine Potenzreihe ist eine unendliche Summe von Potenzen. Sie sieht ähnlich aus wie ein Polynom, hat aber unendlich viele Terme. Typisch ist eine Form wie a₀ + a₁(x - p) + a₂(x - p)² + a₃(x - p)³ und so weiter."
      },
      {
        titel: "Entwicklungspunkt",
        text:
          "Der Entwicklungspunkt ist der Punkt, um den die Reihe aufgebaut wird. Bei einer Reihe in Potenzen von x ist der Entwicklungspunkt 0. Bei einer Reihe in Potenzen von x - a ist der Entwicklungspunkt a."
      },
      {
        titel: "Warum braucht man Reihen?",
        text:
          "Mit Reihen kann man komplizierte Funktionen durch einfachere Potenzausdrücke annähern. Das ist besonders nützlich, wenn man Funktionen ableiten, integrieren oder lokal untersuchen will."
      },
      {
        titel: "Geometrische Reihe",
        text:
          "Die wichtigste Grundreihe ist 1/(1 - q) = 1 + q + q² + q³ + ... für |q| < 1. Viele Potenzreihen entstehen, indem man eine Funktion so umformt, dass diese Struktur sichtbar wird."
      },
      {
        titel: "Taylorreihe",
        text:
          "Die Taylorreihe stellt eine Funktion mithilfe ihrer Ableitungen an einem Punkt dar. Die Koeffizienten werden aus den Funktionswerten der Ableitungen am Entwicklungspunkt berechnet."
      },
      {
        titel: "Taylorreihe um 0",
        text:
          "Eine Taylorreihe um 0 nennt man auch Maclaurinreihe. Sie verwendet Potenzen von x und Ableitungen an der Stelle 0."
      },
      {
        titel: "Taylorreihe um a",
        text:
          "Bei einer Taylorreihe um a verwendet man Potenzen von x - a. Der Funktionswert und die Ableitungen werden an der Stelle a berechnet."
      },
      {
        titel: "Ableiten von Potenzreihen",
        text:
          "Potenzreihen dürfen innerhalb ihres Konvergenzbereichs gliedweise abgeleitet werden. Dabei wird jeder Term wie ein gewöhnlicher Potenzterm abgeleitet."
      },
      {
        titel: "Integrieren von Potenzreihen",
        text:
          "Potenzreihen dürfen innerhalb ihres Konvergenzbereichs gliedweise integriert werden. Dabei erhält jeder Term einen um eins höheren Exponenten und wird durch den neuen Exponenten geteilt."
      },
      {
        titel: "Konvergenzbereich",
        text:
          "Eine Potenzreihe gilt nicht automatisch für alle x-Werte. Meistens gibt es einen Bereich um den Entwicklungspunkt, in dem die Reihe konvergiert."
      }
    ],
    methoden: [
      {
        titel: "Methode: Taylorreihe mit Formel aufstellen",
        schritte: [
          "1. Bestimme den Entwicklungspunkt a.",
          "2. Berechne f(a).",
          "3. Berechne f'(a).",
          "4. Berechne f''(a).",
          "5. Berechne bei Bedarf weitere Ableitungen.",
          "6. Setze die Werte in die Taylorformel ein.",
          "7. Schreibe die Reihe in Potenzen von x - a.",
          "8. Vereinfache die ersten Terme."
        ]
      },
      {
        titel: "Methode: Potenzreihe aus geometrischer Reihe gewinnen",
        schritte: [
          "1. Erinnere dich an die Grundformel 1/(1 - q) = 1 + q + q² + q³ + ...",
          "2. Forme deine Funktion so um, dass im Nenner 1 - q steht.",
          "3. Lies q ab.",
          "4. Setze q in die geometrische Reihe ein.",
          "5. Vereinfache die ersten Terme.",
          "6. Bestimme die Bedingung |q| < 1."
        ]
      },
      {
        titel: "Methode: b/(c + x) um x = 0 entwickeln",
        schritte: [
          "1. Klammere im Nenner c aus.",
          "2. Schreibe c + x als c(1 + x/c).",
          "3. Ziehe den Faktor 1/c vor den Bruch.",
          "4. Schreibe 1/(1 + x/c) als 1/(1 - q) mit q = -x/c.",
          "5. Verwende die geometrische Reihe.",
          "6. Multipliziere am Ende mit b/c.",
          "7. Die Reihe gilt für |x/c| < 1."
        ]
      },
      {
        titel: "Methode: Potenzreihe um x = a entwickeln",
        schritte: [
          "1. Setze u = x - a.",
          "2. Schreibe x als a + u.",
          "3. Forme die Funktion vollständig in u um.",
          "4. Bringe den Ausdruck in eine bekannte Reihenform.",
          "5. Entwickle die Reihe in Potenzen von u.",
          "6. Ersetze am Schluss u wieder durch x - a."
        ]
      },
      {
        titel: "Methode: Potenzreihe ableiten",
        schritte: [
          "1. Schreibe die Potenzreihe klar als Summe von Potenztermen.",
          "2. Leite jeden Term einzeln ab.",
          "3. Reduziere den Exponenten jeweils um 1.",
          "4. Multipliziere mit dem ursprünglichen Exponenten.",
          "5. Beachte, dass der konstante Term beim Ableiten verschwindet."
        ]
      },
      {
        titel: "Methode: Potenzreihe integrieren",
        schritte: [
          "1. Schreibe die Reihe Term für Term auf.",
          "2. Integriere jeden Potenzterm einzeln.",
          "3. Erhöhe den Exponenten jeweils um 1.",
          "4. Teile durch den neuen Exponenten.",
          "5. Ergänze bei einer unbestimmten Stammfunktion eine Integrationskonstante."
        ]
      }
    ],
    merksaetze: [
      "Eine Potenzreihe ist wie ein Polynom mit unendlich vielen Termen.",
      "Der Entwicklungspunkt entscheidet, ob Potenzen von x oder von x - a vorkommen.",
      "Die geometrische Reihe ist die wichtigste Grundreihe.",
      "Viele Aufgaben lassen sich lösen, indem man eine Funktion in die Form 1/(1 - q) bringt.",
      "Bei Taylorreihen kommen die Ableitungen am Entwicklungspunkt in die Koeffizienten.",
      "Eine Taylorreihe um 0 verwendet Potenzen von x.",
      "Eine Taylorreihe um a verwendet Potenzen von x - a.",
      "Potenzreihen dürfen innerhalb ihres Konvergenzbereichs gliedweise abgeleitet und integriert werden.",
      "Der Konvergenzbereich gehört zur Reihe dazu und sollte nicht vergessen werden."
    ],
    typischeFehler: [
      {
        fehler: "Man entwickelt um den falschen Punkt.",
        korrektur:
          "Achte genau darauf, ob um x = 0 oder um x = a entwickelt werden soll. Bei x = a müssen Potenzen von x - a vorkommen."
      },
      {
        fehler: "Man vergisst die Fakultäten in der Taylorreihe.",
        korrektur:
          "In der Taylorreihe wird der Term mit der n-ten Ableitung durch n! geteilt."
      },
      {
        fehler: "Man verwendet die geometrische Reihe ohne die Form 1/(1 - q).",
        korrektur:
          "Vorher muss die Funktion wirklich in die passende Form gebracht werden. Erst dann darf man q einsetzen."
      },
      {
        fehler: "Man vergisst den Konvergenzbereich.",
        korrektur:
          "Die geometrische Reihe gilt nur für |q| < 1. Daraus muss man den gültigen x-Bereich bestimmen."
      },
      {
        fehler: "Man leitet eine Potenzreihe ab und lässt den konstanten Term stehen.",
        korrektur:
          "Der konstante Term wird beim Ableiten zu 0."
      },
      {
        fehler: "Man integriert und vergisst die Integrationskonstante.",
        korrektur:
          "Bei einer unbestimmten Stammfunktion gehört eine Konstante dazu."
      },
      {
        fehler: "Man verwechselt x und x - a.",
        korrektur:
          "Bei einer Entwicklung um a müssen die Terme in Potenzen von x - a geschrieben werden, nicht nur in Potenzen von x."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Geometrische Grundreihe",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe die ersten fünf Terme der Reihe für 1/(1 - x) auf.",
        loesung: [
          "Die geometrische Grundreihe lautet 1/(1 - q) = 1 + q + q² + q³ + ...",
          "Hier ist q = x.",
          "Also gilt 1/(1 - x) = 1 + x + x² + x³ + x⁴ + ...",
          "Die ersten fünf Terme sind 1, x, x², x³ und x⁴.",
          "Die Reihe gilt für |x| < 1."
        ]
      },
      {
        titel: "Aufgabe 2: Vorzeichen erkennen",
        schwierigkeit: "einfach",
        aufgabe:
          "Entwickle 1/(1 + x) als Potenzreihe um 0.",
        loesung: [
          "Bringe die Funktion in die Form 1/(1 - q).",
          "Es gilt 1 + x = 1 - (-x).",
          "Also ist q = -x.",
          "Setze q = -x in die geometrische Reihe ein.",
          "Man erhält 1 - x + x² - x³ + x⁴ - ...",
          "Die Reihe gilt für |x| < 1."
        ]
      },
      {
        titel: "Aufgabe 3: Funktion der Form b/(c + x)",
        schwierigkeit: "mittel",
        aufgabe:
          "Entwickle 3/(2 + x) als Potenzreihe um 0.",
        loesung: [
          "Klammere im Nenner 2 aus: 2 + x = 2(1 + x/2).",
          "Dann gilt 3/(2 + x) = 3/[2(1 + x/2)].",
          "Das ist 3/2 · 1/(1 + x/2).",
          "Schreibe 1 + x/2 als 1 - (-x/2).",
          "Also ist q = -x/2.",
          "Damit ist 1/(1 + x/2) = 1 - x/2 + x²/4 - x³/8 + ...",
          "Multipliziere mit 3/2.",
          "Die Reihe lautet 3/2 - 3x/4 + 3x²/8 - 3x³/16 + ...",
          "Die Reihe gilt für |x/2| < 1, also |x| < 2."
        ]
      },
      {
        titel: "Aufgabe 4: Taylorreihe erster Terme",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Taylorreihe von f(x) = eˣ um 0 bis zum Term mit x³.",
        loesung: [
          "Für f(x) = eˣ sind alle Ableitungen wieder eˣ.",
          "Am Punkt 0 gilt e⁰ = 1.",
          "Also sind f(0), f'(0), f''(0) und f'''(0) alle gleich 1.",
          "Die Taylorreihe beginnt mit f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3!.",
          "Einsetzen ergibt 1 + x + x²/2 + x³/6.",
          "Bis zum Term mit x³ lautet die Reihe also 1 + x + x²/2 + x³/6."
        ]
      },
      {
        titel: "Aufgabe 5: Taylorreihe um a",
        schwierigkeit: "mittel",
        aufgabe:
          "Entwickle f(x) = x² um a = 1 bis zum quadratischen Term.",
        loesung: [
          "Bei einer Entwicklung um a = 1 schreibt man Potenzen von x - 1.",
          "f(x) = x².",
          "f(1) = 1.",
          "f'(x) = 2x, also f'(1) = 2.",
          "f''(x) = 2, also f''(1) = 2.",
          "Die Taylorformel gibt f(x) = 1 + 2(x - 1) + 2/2 · (x - 1)².",
          "Also f(x) = 1 + 2(x - 1) + (x - 1)².",
          "Da x² ein Polynom zweiten Grades ist, ist diese Darstellung exakt."
        ]
      },
      {
        titel: "Aufgabe 6: Ableiten einer Potenzreihe",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite die Reihe 1 + x + x² + x³ + x⁴ + ... gliedweise ab.",
        loesung: [
          "Der konstante Term 1 wird beim Ableiten zu 0.",
          "x wird zu 1.",
          "x² wird zu 2x.",
          "x³ wird zu 3x².",
          "x⁴ wird zu 4x³.",
          "Die abgeleitete Reihe lautet 1 + 2x + 3x² + 4x³ + ...",
          "Das gilt innerhalb des ursprünglichen Konvergenzbereichs."
        ]
      },
      {
        titel: "Aufgabe 7: Integrieren einer Potenzreihe",
        schwierigkeit: "mittel",
        aufgabe:
          "Integriere die Reihe 1 - x + x² - x³ + ... gliedweise.",
        loesung: [
          "Integriere jeden Term einzeln.",
          "Das Integral von 1 ist x.",
          "Das Integral von -x ist -x²/2.",
          "Das Integral von x² ist x³/3.",
          "Das Integral von -x³ ist -x⁴/4.",
          "Die Stammfunktion beginnt also mit x - x²/2 + x³/3 - x⁴/4 + ... + C.",
          "C ist die Integrationskonstante."
        ]
      },
      {
        titel: "Aufgabe 8: Entwicklung um einen anderen Punkt",
        schwierigkeit: "schwer",
        aufgabe:
          "Entwickle 1/x um den Punkt a = 2 bis zu den ersten vier Termen.",
        loesung: [
          "Setze u = x - 2. Dann ist x = 2 + u.",
          "Damit gilt 1/x = 1/(2 + u).",
          "Klammere 2 aus: 1/(2 + u) = 1/[2(1 + u/2)].",
          "Das ist 1/2 · 1/(1 + u/2).",
          "Schreibe 1 + u/2 als 1 - (-u/2).",
          "Verwende die geometrische Reihe mit q = -u/2.",
          "Man erhält 1/(1 + u/2) = 1 - u/2 + u²/4 - u³/8 + ...",
          "Multipliziere mit 1/2.",
          "Das ergibt 1/2 - u/4 + u²/8 - u³/16 + ...",
          "Ersetze u wieder durch x - 2.",
          "Die Reihe lautet 1/2 - (x - 2)/4 + (x - 2)²/8 - (x - 2)³/16 + ..."
        ]
      },
      {
        titel: "Aufgabe 9: Konvergenzbereich",
        schwierigkeit: "schwer",
        aufgabe:
          "Bestimme den Konvergenzbereich der Reihe aus 3/(2 + x).",
        loesung: [
          "Bei der Entwicklung wurde q = -x/2 verwendet.",
          "Die geometrische Reihe gilt für |q| < 1.",
          "Also muss |-x/2| < 1 gelten.",
          "Das ist gleichbedeutend mit |x/2| < 1.",
          "Multipliziere mit 2: |x| < 2.",
          "Der Konvergenzbereich ist also -2 < x < 2."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine Potenzreihe?",
        antwort:
          "Eine Potenzreihe ist eine unendliche Summe von Potenzen, meistens in der Form a₀ + a₁(x - p) + a₂(x - p)² und so weiter."
      },
      {
        frage: "Was ist der Entwicklungspunkt?",
        antwort:
          "Der Entwicklungspunkt ist der Punkt, um den die Reihe aufgebaut wird. Bei einer Entwicklung um a erscheinen Potenzen von x - a."
      },
      {
        frage: "Was ist die wichtigste Grundreihe?",
        antwort:
          "Die wichtigste Grundreihe ist die geometrische Reihe 1/(1 - q) = 1 + q + q² + q³ + ... für |q| < 1."
      },
      {
        frage: "Was ist eine Taylorreihe?",
        antwort:
          "Eine Taylorreihe stellt eine Funktion mithilfe ihrer Ableitungen an einem bestimmten Entwicklungspunkt als Potenzreihe dar."
      },
      {
        frage: "Was ist der Unterschied zwischen Taylorreihe um 0 und um a?",
        antwort:
          "Bei einer Taylorreihe um 0 verwendet man Potenzen von x. Bei einer Taylorreihe um a verwendet man Potenzen von x - a."
      },
      {
        frage: "Warum ist der Konvergenzbereich wichtig?",
        antwort:
          "Weil eine Potenzreihe meistens nur in einem bestimmten Bereich wirklich gegen die Funktion konvergiert. Ausserhalb dieses Bereichs darf man die Reihe nicht einfach verwenden."
      },
      {
        frage: "Wie entwickelt man b/(c + x)?",
        antwort:
          "Man klammert c aus, bringt den Ausdruck in die Form 1/(1 - q) und verwendet dann die geometrische Reihe."
      }
    ],
    nachtVorTest: [
      "Kennst du die geometrische Reihe 1/(1 - q)?",
      "Weisst du, dass sie nur für |q| < 1 gilt?",
      "Kannst du eine Funktion in die Form 1/(1 - q) bringen?",
      "Kannst du b/(c + x) um 0 entwickeln?",
      "Kannst du zwischen Entwicklung um 0 und Entwicklung um a unterscheiden?",
      "Kannst du die ersten Terme einer Taylorreihe mit Ableitungen berechnen?",
      "Vergisst du die Fakultäten in der Taylorformel nicht?",
      "Kannst du Potenzreihen gliedweise ableiten?",
      "Kannst du Potenzreihen gliedweise integrieren?",
      "Bestimmst du am Schluss den Konvergenzbereich?"
    ]
  },
   
  {
    id: "differenzialgleichungen",
    nummer: "7",
    titel: "Differenzialgleichungen",
    kurzbeschreibung:
      "Differenzialgleichungen erkennen, Typen unterscheiden und mit passenden Standardmethoden lösen.",
    lernziele: [
      "Du verstehst, was eine Differenzialgleichung ist.",
      "Du kannst zwischen gewöhnlichen Gleichungen und Differenzialgleichungen unterscheiden.",
      "Du erkennst separierbare Differenzialgleichungen erster Ordnung.",
      "Du kannst separierbare Differenzialgleichungen lösen.",
      "Du erkennst lineare Differenzialgleichungen erster Ordnung.",
      "Du kannst eine lineare inhomogene Differenzialgleichung erster Ordnung mit Variation der Konstanten lösen.",
      "Du erkennst lineare homogene Differenzialgleichungen zweiter Ordnung mit konstanten Koeffizienten.",
      "Du kannst das charakteristische Polynom aufstellen.",
      "Du kannst reale und komplexe Lösungen des charakteristischen Polynoms interpretieren.",
      "Du kannst Anfangsbedingungen verwenden, um Konstanten zu bestimmen."
    ],
    theorie: [
      {
        titel: "Was ist eine Differenzialgleichung?",
        text:
          "Eine Differenzialgleichung ist eine Gleichung, in der eine unbekannte Funktion und eine oder mehrere ihrer Ableitungen vorkommen. Gesucht ist also nicht nur eine Zahl, sondern eine ganze Funktion."
      },
      {
        titel: "Ordnung einer Differenzialgleichung",
        text:
          "Die Ordnung einer Differenzialgleichung wird durch die höchste vorkommende Ableitung bestimmt. Wenn nur y' vorkommt, ist es eine Differenzialgleichung erster Ordnung. Wenn y'' vorkommt, ist es eine Differenzialgleichung zweiter Ordnung."
      },
      {
        titel: "Separierbare Differenzialgleichung",
        text:
          "Eine Differenzialgleichung ist separierbar, wenn man alle Terme mit y auf eine Seite und alle Terme mit x auf die andere Seite bringen kann. Danach integriert man beide Seiten."
      },
      {
        titel: "Lineare Differenzialgleichung erster Ordnung",
        text:
          "Eine lineare Differenzialgleichung erster Ordnung hat typischerweise die Form y' + p(x)y = q(x). Wenn q(x) nicht 0 ist, nennt man sie inhomogen."
      },
      {
        titel: "Homogene zugehörige Gleichung",
        text:
          "Zur inhomogenen Gleichung y' + p(x)y = q(x) betrachtet man zuerst die homogene Gleichung y' + p(x)y = 0. Diese löst man zuerst."
      },
      {
        titel: "Variation der Konstanten",
        text:
          "Bei der Variation der Konstanten ersetzt man die Konstante der homogenen Lösung durch eine unbekannte Funktion. Diese Funktion wird dann so bestimmt, dass die inhomogene Gleichung erfüllt ist."
      },
      {
        titel: "Lineare DGL zweiter Ordnung",
        text:
          "Eine lineare homogene Differenzialgleichung zweiter Ordnung mit konstanten Koeffizienten hat typischerweise die Form ay'' + by' + cy = 0."
      },
      {
        titel: "Charakteristisches Polynom",
        text:
          "Bei linearen homogenen Differenzialgleichungen zweiter Ordnung mit konstanten Koeffizienten setzt man y = e^(λx) an. Daraus entsteht ein quadratisches Polynom in λ, das charakteristische Polynom."
      },
      {
        titel: "Reelle Nullstellen",
        text:
          "Hat das charakteristische Polynom zwei verschiedene reelle Nullstellen λ₁ und λ₂, dann besteht die Lösung aus einer Kombination von e^(λ₁x) und e^(λ₂x)."
      },
      {
        titel: "Komplexe Nullstellen",
        text:
          "Hat das charakteristische Polynom komplexe Nullstellen μ ± βi, dann entsteht eine Schwingungsform mit e^(μx), cos(βx) und sin(βx)."
      },
      {
        titel: "Anfangsbedingungen",
        text:
          "Anfangsbedingungen geben konkrete Werte der Lösung oder ihrer Ableitung an. Mit ihnen bestimmt man die freien Konstanten in der allgemeinen Lösung."
      }
    ],
    methoden: [
      {
        titel: "Methode: DGL-Typ erkennen",
        schritte: [
          "1. Schaue zuerst, welche Ableitungen vorkommen.",
          "2. Wenn nur y' vorkommt, ist es eine DGL erster Ordnung.",
          "3. Wenn y'' vorkommt, ist es eine DGL zweiter Ordnung.",
          "4. Prüfe bei erster Ordnung, ob man x- und y-Terme trennen kann.",
          "5. Wenn ja, ist die DGL separierbar.",
          "6. Wenn sie die Form y' + p(x)y = q(x) hat, ist sie linear erster Ordnung.",
          "7. Wenn sie die Form ay'' + by' + cy = 0 hat, ist sie linear homogen zweiter Ordnung mit konstanten Koeffizienten."
        ]
      },
      {
        titel: "Methode: Separierbare DGL lösen",
        schritte: [
          "1. Schreibe y' als dy/dx.",
          "2. Bringe alle Terme mit y auf eine Seite.",
          "3. Bringe alle Terme mit x auf die andere Seite.",
          "4. Integriere beide Seiten.",
          "5. Fasse die Integrationskonstante zusammen.",
          "6. Löse wenn möglich nach y auf.",
          "7. Verwende Anfangsbedingungen, falls sie gegeben sind."
        ]
      },
      {
        titel: "Methode: Lineare DGL erster Ordnung lösen",
        schritte: [
          "1. Bringe die Gleichung in die Form y' + p(x)y = q(x).",
          "2. Löse zuerst die homogene Gleichung y' + p(x)y = 0.",
          "3. Erhalte eine Lösung mit einer Konstanten C.",
          "4. Ersetze C durch eine Funktion C(x).",
          "5. Setze diesen Ansatz in die inhomogene Gleichung ein.",
          "6. Bestimme C'(x).",
          "7. Integriere C'(x), um C(x) zu erhalten.",
          "8. Setze C(x) in den Ansatz ein.",
          "9. Verwende Anfangsbedingungen, falls vorhanden."
        ]
      },
      {
        titel: "Methode: Lineare homogene DGL zweiter Ordnung lösen",
        schritte: [
          "1. Bringe die Gleichung in die Form ay'' + by' + cy = 0.",
          "2. Stelle das charakteristische Polynom aλ² + bλ + c = 0 auf.",
          "3. Löse die quadratische Gleichung.",
          "4. Unterscheide zwischen zwei reellen Nullstellen, einer doppelten Nullstelle und komplexen Nullstellen.",
          "5. Schreibe die allgemeine Lösung passend zum Fall auf.",
          "6. Verwende Anfangsbedingungen, um die Konstanten zu bestimmen."
        ]
      },
      {
        titel: "Methode: Komplexe Nullstellen interpretieren",
        schritte: [
          "1. Schreibe die Nullstellen als λ = μ ± βi.",
          "2. Der Realteil μ steht im Exponentialfaktor e^(μx).",
          "3. Der Imaginärteil β steht in cos(βx) und sin(βx).",
          "4. Die Lösung hat die Form e^(μx)(A cos(βx) + B sin(βx)).",
          "5. Wenn μ negativ ist, wird die Schwingung gedämpft.",
          "6. Wenn μ positiv ist, wächst die Schwingung an.",
          "7. Wenn μ = 0 ist, bleibt die Amplitude konstant."
        ]
      },
      {
        titel: "Methode: Anfangsbedingungen verwenden",
        schritte: [
          "1. Bestimme zuerst die allgemeine Lösung.",
          "2. Setze den gegebenen x- oder t-Wert in die Lösung ein.",
          "3. Nutze die Bedingung für y, um eine Gleichung für die Konstanten zu erhalten.",
          "4. Falls auch y' gegeben ist, leite die allgemeine Lösung ab.",
          "5. Setze auch diese Bedingung ein.",
          "6. Löse das entstehende Gleichungssystem.",
          "7. Setze die Konstanten in die allgemeine Lösung ein."
        ]
      }
    ],
    merksaetze: [
      "Bei einer Differenzialgleichung ist eine Funktion gesucht, nicht nur eine Zahl.",
      "Die höchste Ableitung bestimmt die Ordnung.",
      "Separierbar bedeutet: y-Terme auf eine Seite, x-Terme auf die andere Seite.",
      "Eine lineare DGL erster Ordnung erkennt man oft an y' + p(x)y = q(x).",
      "Bei Variation der Konstanten wird aus C eine Funktion C(x).",
      "Bei linearen homogenen DGL zweiter Ordnung mit konstanten Koeffizienten braucht man das charakteristische Polynom.",
      "Reelle λ-Werte führen zu Exponentialfunktionen.",
      "Komplexe λ-Werte führen zu Schwingungen mit Sinus und Kosinus.",
      "Anfangsbedingungen bestimmen die freien Konstanten."
    ],
    typischeFehler: [
      {
        fehler: "Man erkennt den DGL-Typ nicht und verwendet sofort irgendeine Methode.",
        korrektur:
          "Zuerst immer den Typ bestimmen: separierbar, linear erster Ordnung oder linear homogen zweiter Ordnung."
      },
      {
        fehler: "Man trennt Variablen, obwohl die Gleichung nicht separierbar ist.",
        korrektur:
          "Trennung ist nur erlaubt, wenn man wirklich alle y-Terme auf eine Seite und alle x-Terme auf die andere Seite bringen kann."
      },
      {
        fehler: "Man vergisst beim Integrieren die Konstante.",
        korrektur:
          "Beim Lösen von Differenzialgleichungen entstehen Integrationskonstanten. Diese sind wichtig für die allgemeine Lösung."
      },
      {
        fehler: "Man löst bei einer inhomogenen linearen DGL nur die homogene Gleichung.",
        korrektur:
          "Die homogene Lösung ist nur der erste Schritt. Danach muss noch der inhomogene Teil berücksichtigt werden."
      },
      {
        fehler: "Man verwechselt λ mit y.",
        korrektur:
          "λ ist eine Hilfszahl aus dem charakteristischen Polynom. y ist die gesuchte Funktion."
      },
      {
        fehler: "Man schreibt bei komplexen Nullstellen nur e^(μx) hin.",
        korrektur:
          "Bei komplexen Nullstellen gehören immer cos(βx) und sin(βx) dazu."
      },
      {
        fehler: "Man setzt Anfangsbedingungen ein, bevor man die allgemeine Lösung gefunden hat.",
        korrektur:
          "Zuerst die allgemeine Lösung bestimmen, danach die Bedingungen einsetzen."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: DGL erkennen",
        schwierigkeit: "einfach",
        aufgabe:
          "Erkläre, warum y' = 3x² eine Differenzialgleichung erster Ordnung ist.",
        loesung: [
          "In der Gleichung kommt die Ableitung y' vor.",
          "Die höchste vorkommende Ableitung ist die erste Ableitung.",
          "Deshalb ist es eine Differenzialgleichung erster Ordnung.",
          "Gesucht ist eine Funktion y, deren Ableitung 3x² ist."
        ]
      },
      {
        titel: "Aufgabe 2: Einfache Integration",
        schwierigkeit: "einfach",
        aufgabe:
          "Löse die Differenzialgleichung y' = 4x.",
        loesung: [
          "Gesucht ist eine Funktion y, deren Ableitung 4x ist.",
          "Integriere beide Seiten nach x.",
          "y = ∫ 4x dx.",
          "Das ergibt y = 2x² + C.",
          "C ist die Integrationskonstante."
        ]
      },
      {
        titel: "Aufgabe 3: Separierbare DGL",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse die Differenzialgleichung y' = xy.",
        loesung: [
          "Schreibe y' als dy/dx.",
          "Dann gilt dy/dx = xy.",
          "Trenne die Variablen: dy/y = x dx.",
          "Integriere beide Seiten.",
          "Links erhält man ln|y|.",
          "Rechts erhält man x²/2 + C.",
          "Also gilt ln|y| = x²/2 + C.",
          "Durch Exponentieren erhält man y = K e^(x²/2), wobei K eine Konstante ist."
        ]
      },
      {
        titel: "Aufgabe 4: Anfangsbedingung",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse y' = 4x mit der Anfangsbedingung y(0) = 3.",
        loesung: [
          "Aus y' = 4x folgt durch Integration y = 2x² + C.",
          "Verwende nun y(0) = 3.",
          "Setze x = 0 ein: 3 = 2 · 0² + C.",
          "Also ist C = 3.",
          "Die spezielle Lösung lautet y = 2x² + 3."
        ]
      },
      {
        titel: "Aufgabe 5: Lineare DGL erster Ordnung erkennen",
        schwierigkeit: "mittel",
        aufgabe:
          "Erkläre, warum y' + 2y = x eine lineare inhomogene Differenzialgleichung erster Ordnung ist.",
        loesung: [
          "Es kommt nur die erste Ableitung y' vor.",
          "Also ist es eine Differenzialgleichung erster Ordnung.",
          "y und y' kommen nur linear vor, also nicht als y², sin(y) oder y · y'.",
          "Die rechte Seite ist x und nicht 0.",
          "Darum ist die Gleichung inhomogen."
        ]
      },
      {
        titel: "Aufgabe 6: Homogene DGL zweiter Ordnung",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse y'' - 5y' + 6y = 0.",
        loesung: [
          "Stelle das charakteristische Polynom auf.",
          "Für y'' - 5y' + 6y = 0 lautet es λ² - 5λ + 6 = 0.",
          "Faktorisiere: λ² - 5λ + 6 = (λ - 2)(λ - 3).",
          "Die Nullstellen sind λ₁ = 2 und λ₂ = 3.",
          "Bei zwei verschiedenen reellen Nullstellen lautet die allgemeine Lösung y = A e^(2x) + B e^(3x).",
          "A und B sind freie Konstanten."
        ]
      },
      {
        titel: "Aufgabe 7: Komplexe Nullstellen",
        schwierigkeit: "schwer",
        aufgabe:
          "Löse y'' + 4y = 0.",
        loesung: [
          "Das charakteristische Polynom lautet λ² + 4 = 0.",
          "Daraus folgt λ² = -4.",
          "Also sind die Nullstellen λ = 2i und λ = -2i.",
          "Das sind komplexe Nullstellen der Form μ ± βi mit μ = 0 und β = 2.",
          "Die allgemeine Lösung lautet y = A cos(2x) + B sin(2x)."
        ]
      },
      {
        titel: "Aufgabe 8: Gedämpfte Schwingung",
        schwierigkeit: "schwer",
        aufgabe:
          "Gib die allgemeine Lösung an, wenn das charakteristische Polynom die Nullstellen λ = -1 ± 3i hat.",
        loesung: [
          "Die Nullstellen haben die Form μ ± βi.",
          "Hier ist μ = -1 und β = 3.",
          "Der Realteil μ kommt in den Exponentialfaktor.",
          "Der Imaginärteil β kommt in Sinus und Kosinus.",
          "Die Lösung lautet y = e^(-x)(A cos(3x) + B sin(3x)).",
          "Weil μ negativ ist, handelt es sich um eine gedämpfte Schwingung."
        ]
      },
      {
        titel: "Aufgabe 9: Anfangsbedingungen bei zweiter Ordnung",
        schwierigkeit: "schwer",
        aufgabe:
          "Gegeben ist die allgemeine Lösung y = A e^x + B e^(-x). Verwende y(0) = 4 und y'(0) = 2, um A und B zu bestimmen.",
        loesung: [
          "Setze zuerst y(0) = 4 ein.",
          "y(0) = A e^0 + B e^0 = A + B.",
          "Also gilt A + B = 4.",
          "Leite die Lösung ab: y' = A e^x - B e^(-x).",
          "Setze y'(0) = 2 ein.",
          "y'(0) = A - B = 2.",
          "Nun löse das Gleichungssystem A + B = 4 und A - B = 2.",
          "Addiere beide Gleichungen: 2A = 6, also A = 3.",
          "Dann folgt B = 1.",
          "Die spezielle Lösung lautet y = 3e^x + e^(-x)."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine Differenzialgleichung?",
        antwort:
          "Eine Differenzialgleichung ist eine Gleichung, in der eine unbekannte Funktion und ihre Ableitungen vorkommen. Gesucht ist also eine Funktion."
      },
      {
        frage: "Was bedeutet die Ordnung einer Differenzialgleichung?",
        antwort:
          "Die Ordnung ist die höchste vorkommende Ableitung. Kommt y' als höchste Ableitung vor, ist es erste Ordnung. Kommt y'' vor, ist es zweite Ordnung."
      },
      {
        frage: "Wann ist eine Differenzialgleichung separierbar?",
        antwort:
          "Sie ist separierbar, wenn man alle Terme mit y auf eine Seite und alle Terme mit x auf die andere Seite bringen kann."
      },
      {
        frage: "Was ist eine lineare Differenzialgleichung erster Ordnung?",
        antwort:
          "Sie hat typischerweise die Form y' + p(x)y = q(x). Die Funktion y und ihre Ableitung kommen nur linear vor."
      },
      {
        frage: "Was bedeutet inhomogen?",
        antwort:
          "Inhomogen bedeutet, dass auf der rechten Seite oder als zusätzlicher Term eine Funktion steht, die nicht 0 ist."
      },
      {
        frage: "Was macht man bei der Variation der Konstanten?",
        antwort:
          "Man löst zuerst die homogene Gleichung und ersetzt dann die Konstante durch eine Funktion, die so bestimmt wird, dass die inhomogene Gleichung erfüllt ist."
      },
      {
        frage: "Wozu dient das charakteristische Polynom?",
        antwort:
          "Es verwandelt eine lineare homogene Differenzialgleichung zweiter Ordnung mit konstanten Koeffizienten in eine algebraische Gleichung für λ."
      },
      {
        frage: "Was bedeuten komplexe Nullstellen des charakteristischen Polynoms?",
        antwort:
          "Sie führen zu Lösungen mit Sinus und Kosinus. Der Realteil bestimmt Wachstum oder Dämpfung, der Imaginärteil bestimmt die Kreisfrequenz."
      }
    ],
    nachtVorTest: [
      "Kannst du erklären, was eine Differenzialgleichung ist?",
      "Kannst du die Ordnung einer DGL bestimmen?",
      "Kannst du separierbare Gleichungen erkennen?",
      "Kannst du Variablen korrekt trennen?",
      "Vergisst du beim Integrieren die Konstante nicht?",
      "Kannst du lineare DGL erster Ordnung erkennen?",
      "Weisst du, wie Variation der Konstanten grundsätzlich funktioniert?",
      "Kannst du das charakteristische Polynom bei DGL zweiter Ordnung aufstellen?",
      "Kannst du reelle Nullstellen in Exponentiallösungen übersetzen?",
      "Kannst du komplexe Nullstellen in Sinus-Kosinus-Lösungen übersetzen?",
      "Kannst du Anfangsbedingungen zur Bestimmung der Konstanten verwenden?"
    ]
  },
   
  {
    id: "lineare-algebra",
    nummer: "8",
    titel: "Lineare Algebra",
    kurzbeschreibung:
      "Matrizen als lineare Abbildungen verstehen, Matrizen multiplizieren, Eigenwerte und Eigenvektoren berechnen und Markov-Ketten anwenden.",
    lernziele: [
      "Du verstehst Matrizen als lineare Abbildungen.",
      "Du kannst eine Matrix auf einen Vektor anwenden.",
      "Du kannst Matrizen miteinander multiplizieren.",
      "Du kannst erklären, was eine lineare Abbildung geometrisch macht.",
      "Du kannst die Eigenwertgleichung aufstellen.",
      "Du kannst Eigenwerte mit dem charakteristischen Polynom berechnen.",
      "Du kannst Eigenvektoren zu einem Eigenwert bestimmen.",
      "Du verstehst die Bedeutung von Eigenwerten und Eigenvektoren.",
      "Du kannst einfache Markov-Ketten mit Übergangsmatrizen beschreiben.",
      "Du kannst Zustandsvektoren mit Übergangsmatrizen weiterentwickeln."
    ],
    theorie: [
      {
        titel: "Was ist lineare Algebra?",
        text:
          "Lineare Algebra untersucht Vektoren, Matrizen und lineare Abbildungen. Sie beschreibt, wie Objekte verschoben, gestreckt, gespiegelt, gedreht oder kombiniert werden können."
      },
      {
        titel: "Matrix als lineare Abbildung",
        text:
          "Eine Matrix kann man als Maschine verstehen, die einen Vektor nimmt und daraus einen neuen Vektor macht. Geometrisch kann eine Matrix zum Beispiel strecken, spiegeln, drehen oder scheren."
      },
      {
        titel: "Matrix mal Vektor",
        text:
          "Wenn eine Matrix mit einem Vektor multipliziert wird, entsteht ein neuer Vektor. Jede Zeile der Matrix wird mit dem Vektor verrechnet."
      },
      {
        titel: "Matrizenmultiplikation",
        text:
          "Bei der Matrizenmultiplikation wird jede Zeile der ersten Matrix mit jeder Spalte der zweiten Matrix kombiniert. Das Ergebnis beschreibt die Hintereinanderausführung zweier linearer Abbildungen."
      },
      {
        titel: "Reihenfolge bei Matrizen",
        text:
          "Die Reihenfolge der Matrizenmultiplikation ist wichtig. Im Allgemeinen gilt AB nicht gleich BA. Das bedeutet: Zwei Abbildungen in anderer Reihenfolge können ein anderes Ergebnis liefern."
      },
      {
        titel: "Eigenvektor",
        text:
          "Ein Eigenvektor ist ein Vektor, dessen Richtung durch die Matrix nicht verändert wird. Er darf höchstens gestreckt, gestaucht oder umgekehrt werden."
      },
      {
        titel: "Eigenwert",
        text:
          "Der Eigenwert sagt, mit welchem Faktor der Eigenvektor gestreckt oder gestaucht wird. Wenn der Eigenwert negativ ist, wird zusätzlich die Richtung umgekehrt."
      },
      {
        titel: "Eigenwertgleichung",
        text:
          "Die zentrale Gleichung lautet Av = λv. Dabei ist A die Matrix, v der Eigenvektor und λ der Eigenwert."
      },
      {
        titel: "Charakteristisches Polynom",
        text:
          "Eigenwerte berechnet man meistens mit det(A - λI) = 0. Diese Gleichung heisst charakteristische Gleichung."
      },
      {
        titel: "Eigenvektoren berechnen",
        text:
          "Wenn ein Eigenwert λ bekannt ist, setzt man ihn in A - λI ein und löst das Gleichungssystem (A - λI)v = 0. Die nichttrivialen Lösungen sind Eigenvektoren."
      },
      {
        titel: "Markov-Kette",
        text:
          "Eine Markov-Kette beschreibt ein System, das zwischen Zuständen wechselt. Die Wahrscheinlichkeiten für die Wechsel stehen in einer Übergangsmatrix."
      },
      {
        titel: "Zustandsvektor",
        text:
          "Ein Zustandsvektor gibt an, wie sich eine Gesamtmenge auf verschiedene Zustände verteilt. Multipliziert man ihn mit der Übergangsmatrix, erhält man den nächsten Zustand."
      }
    ],
    methoden: [
      {
        titel: "Methode: Matrix auf Vektor anwenden",
        schritte: [
          "1. Schreibe die Matrix und den Vektor sauber untereinander.",
          "2. Multipliziere die erste Zeile der Matrix mit dem Vektor.",
          "3. Addiere die Produkte. Das ergibt die erste Komponente des neuen Vektors.",
          "4. Multipliziere die zweite Zeile der Matrix mit dem Vektor.",
          "5. Addiere wieder die Produkte. Das ergibt die zweite Komponente.",
          "6. Fahre so für alle Zeilen fort.",
          "7. Schreibe den Ergebnisvektor auf."
        ]
      },
      {
        titel: "Methode: Matrizen multiplizieren",
        schritte: [
          "1. Prüfe zuerst, ob die Multiplikation erlaubt ist.",
          "2. Die Anzahl Spalten der ersten Matrix muss zur Anzahl Zeilen der zweiten Matrix passen.",
          "3. Berechne jeden Eintrag durch Zeile mal Spalte.",
          "4. Der Eintrag oben links entsteht aus erster Zeile mal erster Spalte.",
          "5. Der Eintrag oben rechts entsteht aus erster Zeile mal zweiter Spalte.",
          "6. Wiederhole das für alle Zeilen und Spalten.",
          "7. Kontrolliere die Dimension der Ergebnismatrix."
        ]
      },
      {
        titel: "Methode: Eigenwerte berechnen",
        schritte: [
          "1. Schreibe die Matrix A auf.",
          "2. Bilde A - λI.",
          "3. Berechne det(A - λI).",
          "4. Setze det(A - λI) = 0.",
          "5. Löse die entstehende Gleichung nach λ.",
          "6. Die Lösungen sind die Eigenwerte."
        ]
      },
      {
        titel: "Methode: Eigenvektoren berechnen",
        schritte: [
          "1. Nimm einen berechneten Eigenwert λ.",
          "2. Setze λ in A - λI ein.",
          "3. Löse das Gleichungssystem (A - λI)v = 0.",
          "4. Verwende einen freien Parameter, falls unendlich viele Lösungen entstehen.",
          "5. Schreibe einen Eigenvektor oder den ganzen Eigenraum auf.",
          "6. Wiederhole das für jeden Eigenwert."
        ]
      },
      {
        titel: "Methode: Markov-Kette berechnen",
        schritte: [
          "1. Bestimme die möglichen Zustände.",
          "2. Schreibe den Anfangszustand als Zustandsvektor.",
          "3. Stelle die Übergangsmatrix auf.",
          "4. Multipliziere Übergangsmatrix und Zustandsvektor.",
          "5. Das Ergebnis ist der Zustand nach einem Schritt.",
          "6. Für mehrere Schritte multiplizierst du wiederholt mit der Übergangsmatrix.",
          "7. Kontrolliere, ob die Einträge Wahrscheinlichkeiten bleiben und zusammen 1 ergeben."
        ]
      },
      {
        titel: "Methode: Stationären Zustand prüfen",
        schritte: [
          "1. Ein stationärer Zustand verändert sich durch die Übergangsmatrix nicht.",
          "2. Stelle die Gleichung P v = v auf.",
          "3. Bringe alles auf eine Seite: P v - v = 0.",
          "4. Schreibe das als (P - I)v = 0.",
          "5. Ergänze die Bedingung, dass die Einträge des Zustandsvektors zusammen 1 ergeben.",
          "6. Löse das Gleichungssystem.",
          "7. Der gefundene Vektor ist der stationäre Zustand."
        ]
      }
    ],
    merksaetze: [
      "Eine Matrix beschreibt eine lineare Abbildung.",
      "Matrix mal Vektor ergibt einen neuen Vektor.",
      "Matrizenmultiplikation bedeutet Hintereinanderausführung von Abbildungen.",
      "Bei Matrizen ist die Reihenfolge meistens entscheidend.",
      "Eigenvektoren behalten ihre Richtung.",
      "Eigenwerte geben den Streckungsfaktor eines Eigenvektors an.",
      "Eigenwerte findet man mit det(A - λI) = 0.",
      "Eigenvektoren findet man mit (A - λI)v = 0.",
      "Eine Markov-Kette beschreibt Zustandswechsel mit Wahrscheinlichkeiten.",
      "Ein stationärer Zustand bleibt nach Anwendung der Übergangsmatrix gleich."
    ],
    typischeFehler: [
      {
        fehler: "Man multipliziert Matrizen elementweise.",
        korrektur:
          "Matrizenmultiplikation funktioniert nicht elementweise. Jeder Eintrag entsteht aus Zeile mal Spalte."
      },
      {
        fehler: "Man vertauscht die Reihenfolge der Matrizen.",
        korrektur:
          "Bei Matrizen ist AB im Allgemeinen nicht gleich BA. Die Reihenfolge beschreibt die Reihenfolge der Abbildungen."
      },
      {
        fehler: "Man denkt, jeder Vektor sei ein Eigenvektor.",
        korrektur:
          "Ein Eigenvektor ist nur ein Vektor, dessen Richtung durch die Matrix erhalten bleibt."
      },
      {
        fehler: "Man setzt det(A) = 0 statt det(A - λI) = 0.",
        korrektur:
          "Für Eigenwerte braucht man das charakteristische Polynom det(A - λI), nicht einfach die Determinante von A."
      },
      {
        fehler: "Man verwendet den Eigenwert nicht mehr beim Berechnen des Eigenvektors.",
        korrektur:
          "Für jeden Eigenwert muss man (A - λI)v = 0 lösen. Der Eigenwert gehört also direkt in das Gleichungssystem."
      },
      {
        fehler: "Man nimmt den Nullvektor als Eigenvektor.",
        korrektur:
          "Der Nullvektor ist nie ein Eigenvektor, weil er keine Richtung hat."
      },
      {
        fehler: "Man vergisst bei Markov-Ketten, dass Wahrscheinlichkeiten zusammen 1 ergeben müssen.",
        korrektur:
          "Ein Zustandsvektor beschreibt Verteilungen. Deshalb müssen die Einträge normalerweise nichtnegativ sein und zusammen 1 ergeben."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Matrix mal Vektor",
        schwierigkeit: "einfach",
        aufgabe:
          "Berechne A v für A = [[2, 1], [0, 3]] und v = [4, 5].",
        loesung: [
          "Multipliziere die erste Zeile der Matrix mit dem Vektor.",
          "Erste Komponente: 2 · 4 + 1 · 5 = 8 + 5 = 13.",
          "Multipliziere die zweite Zeile der Matrix mit dem Vektor.",
          "Zweite Komponente: 0 · 4 + 3 · 5 = 15.",
          "Also ist A v = [13, 15]."
        ]
      },
      {
        titel: "Aufgabe 2: Geometrische Bedeutung",
        schwierigkeit: "einfach",
        aufgabe:
          "Was macht die Matrix A = [[1, 0], [0, -1]] geometrisch?",
        loesung: [
          "Die Matrix bildet einen Vektor [x, y] auf [x, -y] ab.",
          "Die x-Koordinate bleibt gleich.",
          "Die y-Koordinate wechselt das Vorzeichen.",
          "Das entspricht einer Spiegelung an der x-Achse."
        ]
      },
      {
        titel: "Aufgabe 3: Matrizenmultiplikation",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne AB für A = [[1, 2], [3, 4]] und B = [[2, 0], [1, 5]].",
        loesung: [
          "Der Eintrag oben links ist 1 · 2 + 2 · 1 = 4.",
          "Der Eintrag oben rechts ist 1 · 0 + 2 · 5 = 10.",
          "Der Eintrag unten links ist 3 · 2 + 4 · 1 = 10.",
          "Der Eintrag unten rechts ist 3 · 0 + 4 · 5 = 20.",
          "Also ist AB = [[4, 10], [10, 20]]."
        ]
      },
      {
        titel: "Aufgabe 4: Eigenwerte berechnen",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Eigenwerte der Matrix A = [[3, 0], [0, 5]].",
        loesung: [
          "Bilde A - λI = [[3 - λ, 0], [0, 5 - λ]].",
          "Berechne die Determinante: det(A - λI) = (3 - λ)(5 - λ).",
          "Setze die Determinante gleich 0.",
          "(3 - λ)(5 - λ) = 0.",
          "Daraus folgt λ = 3 oder λ = 5.",
          "Die Eigenwerte sind 3 und 5."
        ]
      },
      {
        titel: "Aufgabe 5: Eigenvektor zu einem Eigenwert",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme einen Eigenvektor zum Eigenwert λ = 3 der Matrix A = [[3, 0], [0, 5]].",
        loesung: [
          "Setze λ = 3 in A - λI ein.",
          "A - 3I = [[0, 0], [0, 2]].",
          "Löse (A - 3I)v = 0.",
          "Für v = [x, y] ergibt sich 2y = 0.",
          "Also ist y = 0, während x frei gewählt werden kann.",
          "Ein möglicher Eigenvektor ist [1, 0]."
        ]
      },
      {
        titel: "Aufgabe 6: Bedeutung Eigenwert",
        schwierigkeit: "mittel",
        aufgabe:
          "Erkläre, was es bedeutet, wenn A v = 4v gilt und v nicht der Nullvektor ist.",
        loesung: [
          "Die Gleichung hat die Form A v = λv.",
          "Hier ist λ = 4.",
          "Der Vektor v ist also ein Eigenvektor der Matrix A.",
          "Die Matrix verändert die Richtung von v nicht.",
          "Sie streckt v nur um den Faktor 4."
        ]
      },
      {
        titel: "Aufgabe 7: Charakteristisches Polynom",
        schwierigkeit: "schwer",
        aufgabe:
          "Bestimme die Eigenwerte von A = [[2, 1], [1, 2]].",
        loesung: [
          "Bilde A - λI = [[2 - λ, 1], [1, 2 - λ]].",
          "Berechne die Determinante: (2 - λ)(2 - λ) - 1 · 1.",
          "Das ergibt (2 - λ)² - 1.",
          "Setze gleich 0: (2 - λ)² - 1 = 0.",
          "Also gilt (2 - λ)² = 1.",
          "Daraus folgt 2 - λ = 1 oder 2 - λ = -1.",
          "Damit sind die Eigenwerte λ = 1 und λ = 3."
        ]
      },
      {
        titel: "Aufgabe 8: Markov-Kette ein Schritt",
        schwierigkeit: "mittel",
        aufgabe:
          "Ein System hat zwei Zustände. Die Übergangsmatrix ist P = [[0.8, 0.3], [0.2, 0.7]]. Der Anfangszustand ist v = [1, 0]. Berechne den nächsten Zustand P v.",
        loesung: [
          "Multipliziere P mit v.",
          "Erste Komponente: 0.8 · 1 + 0.3 · 0 = 0.8.",
          "Zweite Komponente: 0.2 · 1 + 0.7 · 0 = 0.2.",
          "Der nächste Zustand ist [0.8, 0.2].",
          "Die Summe der Einträge ist 1, also ist es wieder ein gültiger Zustandsvektor."
        ]
      },
      {
        titel: "Aufgabe 9: Markov-Kette zwei Schritte",
        schwierigkeit: "schwer",
        aufgabe:
          "Verwende P = [[0.8, 0.3], [0.2, 0.7]] und v = [1, 0]. Berechne den Zustand nach zwei Schritten.",
        loesung: [
          "Aus dem ersten Schritt erhält man v₁ = [0.8, 0.2].",
          "Berechne nun v₂ = P v₁.",
          "Erste Komponente: 0.8 · 0.8 + 0.3 · 0.2 = 0.64 + 0.06 = 0.70.",
          "Zweite Komponente: 0.2 · 0.8 + 0.7 · 0.2 = 0.16 + 0.14 = 0.30.",
          "Der Zustand nach zwei Schritten ist [0.70, 0.30]."
        ]
      },
      {
        titel: "Aufgabe 10: Stationärer Zustand verstehen",
        schwierigkeit: "schwer",
        aufgabe:
          "Was bedeutet es, wenn für eine Übergangsmatrix P und einen Zustandsvektor v die Gleichung P v = v gilt?",
        loesung: [
          "Die Gleichung bedeutet, dass sich der Zustand durch einen weiteren Schritt nicht verändert.",
          "Der Vektor v bleibt also stabil.",
          "Man nennt v einen stationären Zustand.",
          "Inhaltlich bedeutet das: Die Verteilung zwischen den Zuständen bleibt langfristig gleich, wenn das System bereits in dieser Verteilung ist."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was beschreibt eine Matrix geometrisch?",
        antwort:
          "Eine Matrix beschreibt eine lineare Abbildung. Sie kann Vektoren zum Beispiel strecken, drehen, spiegeln oder scheren."
      },
      {
        frage: "Was bedeutet Matrizenmultiplikation?",
        antwort:
          "Matrizenmultiplikation beschreibt die Hintereinanderausführung zweier linearer Abbildungen. Die Reihenfolge ist dabei wichtig."
      },
      {
        frage: "Was ist ein Eigenvektor?",
        antwort:
          "Ein Eigenvektor ist ein Vektor, dessen Richtung durch eine Matrix nicht verändert wird. Er wird nur gestreckt, gestaucht oder umgekehrt."
      },
      {
        frage: "Was ist ein Eigenwert?",
        antwort:
          "Der Eigenwert ist der Faktor, mit dem ein Eigenvektor durch die Matrix gestreckt oder gestaucht wird."
      },
      {
        frage: "Wie lautet die Eigenwertgleichung?",
        antwort:
          "Die Eigenwertgleichung lautet Av = λv. Dabei ist A die Matrix, v der Eigenvektor und λ der Eigenwert."
      },
      {
        frage: "Warum benutzt man det(A - λI) = 0?",
        antwort:
          "Damit es einen Eigenvektor ungleich dem Nullvektor gibt, muss das Gleichungssystem (A - λI)v = 0 nichttriviale Lösungen haben. Das passiert, wenn die Determinante 0 ist."
      },
      {
        frage: "Was ist eine Markov-Kette?",
        antwort:
          "Eine Markov-Kette beschreibt ein System, das zwischen verschiedenen Zuständen wechselt. Die Übergangswahrscheinlichkeiten stehen in einer Matrix."
      },
      {
        frage: "Was ist ein stationärer Zustand?",
        antwort:
          "Ein stationärer Zustand ist ein Zustandsvektor, der sich durch Anwendung der Übergangsmatrix nicht mehr verändert."
      }
    ],
    nachtVorTest: [
      "Kannst du erklären, was eine Matrix geometrisch macht?",
      "Kannst du Matrix mal Vektor berechnen?",
      "Kannst du zwei Matrizen multiplizieren?",
      "Prüfst du vor der Multiplikation die Dimensionen?",
      "Weisst du, warum die Reihenfolge bei Matrizen wichtig ist?",
      "Kannst du die Eigenwertgleichung Av = λv erklären?",
      "Kannst du det(A - λI) = 0 aufstellen?",
      "Kannst du Eigenwerte berechnen?",
      "Kannst du zu einem Eigenwert Eigenvektoren bestimmen?",
      "Weisst du, dass der Nullvektor kein Eigenvektor ist?",
      "Kannst du eine Markov-Kette mit Übergangsmatrix berechnen?",
      "Kannst du erklären, was ein stationärer Zustand bedeutet?"
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
