/* =========================================================
   SchoolFools – Mathematik
   Datei: mathematik.js

   Zweck:
   - Mathematik wird wie Anwendung der Mathematik direkt nach Themen organisiert
   - Keine GYM1/GYM2/GYM3/GYM4-Unterteilung mehr
   - Alle Themen werden später nur in MATHEMATIK_THEMEN ergänzt
   - Keine echten Prüfungsaufgaben
   - Keine kopierten Inhalte
   - Alles selbst erstellte Lerninhalte

   Benötigte Render-Funktion:
   render_mathematik(container)
========================================================= */


/* =========================
   DATENBANK DER THEMEN
========================= */

const MATHEMATIK_THEMEN = [
  {
    id: "logarithmen-potenzen",
    nummer: "1",
    titel: "Logarithmen und Potenzen",
    kurzbeschreibung:
      "Potenzen mit rationalen Exponenten, Wurzeln, Potenzgesetze, Logarithmen, Logarithmengesetze und Exponentialgleichungen verständlich erklärt.",
    lernziele: [
      "Du kannst Potenzen mit rationalen Exponenten als Wurzeln schreiben.",
      "Du kannst Wurzeln in Potenzschreibweise umformen.",
      "Du beherrschst die wichtigsten Potenzgesetze.",
      "Du verstehst den Logarithmus als Umkehrung des Potenzierens.",
      "Du kannst Logarithmusgleichungen lösen.",
      "Du kannst Exponentialgleichungen lösen.",
      "Du beachtest Definitionsbedingungen bei Wurzeln und Logarithmen.",
      "Du erkennst typische Prüfungsfallen bei Logarithmen und Potenzen."
    ],
    theorie: [
      {
        titel: "Potenzen mit rationalen Exponenten",
        text:
          "Ein rationaler Exponent ist ein Exponent, der als Bruch geschrieben werden kann. Zum Beispiel sind 1/2, 3/4 und -2/5 rationale Exponenten. Solche Potenzen hängen direkt mit Wurzeln zusammen."
      },
      {
        titel: "Grundregel für rationale Exponenten",
        text:
          "Für positive a gilt: a hoch m/n entspricht der n-ten Wurzel aus a hoch m. Der Nenner des Bruchs bestimmt also die Wurzel, der Zähler bestimmt die Potenz."
      },
      {
        titel: "Beispiele für rationale Exponenten",
        text:
          "a hoch 1/2 ist die Quadratwurzel aus a. a hoch 1/3 ist die dritte Wurzel aus a. a hoch 2/3 ist die dritte Wurzel aus a²."
      },
      {
        titel: "Negative Exponenten",
        text:
          "Ein negativer Exponent bedeutet Kehrwertbildung. Zum Beispiel gilt a hoch -n gleich 1 durch a hoch n. Auch bei rationalen Exponenten gilt diese Regel."
      },
      {
        titel: "Definitionsbedingungen bei Wurzeln",
        text:
          "Im reellen Zahlenbereich darf unter einer geraden Wurzel kein negativer Ausdruck stehen. Deshalb ist √x nur für x ≥ 0 definiert. Ungerade Wurzeln wie die dritte Wurzel sind hingegen für alle reellen Zahlen definiert."
      },
      {
        titel: "Potenzgesetze",
        text:
          "Potenzgesetze erlauben es, Terme mit gleicher Basis zu vereinfachen. Wichtig ist: Exponenten werden nur addiert oder subtrahiert, wenn die Basis gleich ist."
      },
      {
        titel: "Was ist ein Logarithmus?",
        text:
          "Der Logarithmus ist die Umkehrung des Potenzierens. Die Aussage logₐ(b) = x bedeutet: aˣ = b. Ein Logarithmus fragt also nach dem Exponenten."
      },
      {
        titel: "Definitionsbedingungen beim Logarithmus",
        text:
          "Bei logₐ(x) muss die Basis a positiv sein, sie darf nicht 1 sein, und das Argument x muss positiv sein. Besonders das Argument wird in Prüfungen oft vergessen."
      },
      {
        titel: "Logarithmengesetze",
        text:
          "Logarithmengesetze helfen beim Umformen von Produkten, Quotienten und Potenzen. Es gibt aber kein Gesetz für logₐ(x + y). Summen im Logarithmus dürfen also nicht einfach getrennt werden."
      },
      {
        titel: "Exponentialgleichungen",
        text:
          "Bei Exponentialgleichungen steht die Variable im Exponenten. Wenn möglich, stellt man zuerst gleiche Basen her. Wenn das nicht geht, logarithmiert man beide Seiten."
      }
    ],
    methoden: [
      {
        titel: "Methode: Potenz mit rationalem Exponenten umschreiben",
        schritte: [
          "1. Betrachte den Exponenten als Bruch.",
          "2. Der Nenner wird zum Wurzelexponenten.",
          "3. Der Zähler bleibt als Potenz erhalten.",
          "4. Bei negativem Exponenten bildest du zusätzlich den Kehrwert.",
          "5. Prüfe bei geraden Wurzeln den Definitionsbereich."
        ]
      },
      {
        titel: "Methode: Potenzterme vereinfachen",
        schritte: [
          "1. Prüfe zuerst, ob die Basen gleich sind.",
          "2. Bei gleicher Basis und Multiplikation addierst du die Exponenten.",
          "3. Bei gleicher Basis und Division subtrahierst du die Exponenten.",
          "4. Bei einer Potenz von einer Potenz multiplizierst du die Exponenten.",
          "5. Vereinfache Brüche in den Exponenten vollständig."
        ]
      },
      {
        titel: "Methode: Exponentialgleichung mit gleicher Basis lösen",
        schritte: [
          "1. Schreibe beide Seiten als Potenzen mit gleicher Basis.",
          "2. Wenn die Basen gleich sind, müssen die Exponenten gleich sein.",
          "3. Setze die Exponenten gleich.",
          "4. Löse die entstehende Gleichung nach x.",
          "5. Kontrolliere das Ergebnis durch Einsetzen."
        ]
      },
      {
        titel: "Methode: Exponentialgleichung durch Logarithmieren lösen",
        schritte: [
          "1. Prüfe, ob sich gleiche Basen herstellen lassen.",
          "2. Wenn nicht, logarithmiere beide Seiten.",
          "3. Ziehe den Exponenten mit dem Logarithmengesetz nach vorne.",
          "4. Löse nach x auf.",
          "5. Gib das Ergebnis exakt oder als Näherungswert an."
        ]
      },
      {
        titel: "Methode: Logarithmusgleichung lösen",
        schritte: [
          "1. Bestimme zuerst den Definitionsbereich.",
          "2. Fasse Logarithmen mit Logarithmengesetzen zusammen, falls möglich.",
          "3. Schreibe die Logarithmusgleichung als Potenzgleichung.",
          "4. Löse die entstehende Gleichung.",
          "5. Prüfe am Schluss, ob alle Lösungen im Definitionsbereich liegen."
        ]
      }
    ],
    merksaetze: [
      "Der Nenner eines rationalen Exponenten bestimmt die Wurzel.",
      "Ein negativer Exponent bedeutet Kehrwert.",
      "Exponenten werden nur bei gleicher Basis addiert oder subtrahiert.",
      "Ein Logarithmus ist ein Exponent.",
      "logₐ(b) = x bedeutet dasselbe wie aˣ = b.",
      "Das Argument eines Logarithmus muss immer positiv sein.",
      "Es gibt kein Logarithmengesetz für Summen.",
      "Bei Exponentialgleichungen ohne gleiche Basis logarithmiert man beide Seiten."
    ],
    typischeFehler: [
      {
        fehler: "Man schreibt x hoch 2/3 fälschlicherweise als √(x³).",
        korrektur:
          "Richtig ist: x hoch 2/3 bedeutet dritte Wurzel aus x². Der Nenner des Exponenten bestimmt die Wurzel."
      },
      {
        fehler: "Man addiert Exponenten, obwohl die Basen verschieden sind.",
        korrektur:
          "Exponenten darf man bei der Multiplikation nur addieren, wenn die Basis gleich ist. x² · y³ kann nicht zu einer einzigen Potenz zusammengefasst werden."
      },
      {
        fehler: "Man schreibt logₐ(x + y) = logₐ(x) + logₐ(y).",
        korrektur:
          "Das ist falsch. Logarithmengesetze gelten für Produkte, Quotienten und Potenzen, aber nicht für Summen."
      },
      {
        fehler: "Man vergisst die Definitionsbedingung beim Logarithmus.",
        korrektur:
          "Das Argument eines Logarithmus muss positiv sein. Lösungen, die das Argument negativ oder 0 machen, sind ungültig."
      },
      {
        fehler: "Man logarithmiert nur eine Seite einer Gleichung.",
        korrektur:
          "Bei Gleichungen muss man immer beide Seiten gleich behandeln. Wenn du logarithmierst, dann beide Seiten."
      },
      {
        fehler: "Man vergisst bei negativen Exponenten den Kehrwert.",
        korrektur:
          "a hoch -n bedeutet 1 durch a hoch n. Das Minus im Exponenten macht den Wert nicht einfach negativ."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Potenz als Wurzel schreiben",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe x hoch 3/4 als Wurzelausdruck.",
        loesung: [
          "Der Exponent ist 3/4.",
          "Der Nenner 4 wird zum Wurzelexponenten.",
          "Der Zähler 3 bleibt als Potenz erhalten.",
          "Also gilt: x hoch 3/4 ist die vierte Wurzel aus x³."
        ]
      },
      {
        titel: "Aufgabe 2: Wurzel als Potenz schreiben",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe die fünfte Wurzel aus a² als Potenz.",
        loesung: [
          "Eine n-te Wurzel entspricht einem Exponenten mit Nenner n.",
          "Hier ist der Wurzelexponent 5.",
          "Unter der Wurzel steht a².",
          "Also ist die fünfte Wurzel aus a² gleich a hoch 2/5."
        ]
      },
      {
        titel: "Aufgabe 3: Potenzterm vereinfachen",
        schwierigkeit: "einfach",
        aufgabe:
          "Vereinfache x hoch 2/5 mal x hoch 3/10.",
        loesung: [
          "Die Basis ist in beiden Faktoren x.",
          "Bei gleicher Basis werden die Exponenten addiert.",
          "Also rechnet man 2/5 + 3/10.",
          "Schreibe 2/5 als 4/10.",
          "Dann ergibt sich 4/10 + 3/10 = 7/10.",
          "Das Ergebnis ist x hoch 7/10."
        ]
      },
      {
        titel: "Aufgabe 4: Negative Exponenten",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe a hoch -3 als Bruch.",
        loesung: [
          "Ein negativer Exponent bedeutet Kehrwert.",
          "a hoch -3 ist deshalb 1 durch a hoch 3.",
          "Also gilt: a hoch -3 = 1/a³."
        ]
      },
      {
        titel: "Aufgabe 5: Logarithmus als Potenzgleichung",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe log₂(32) = 5 als Potenzgleichung.",
        loesung: [
          "Ein Logarithmus ist ein Exponent.",
          "log₂(32) = 5 bedeutet: Die Basis 2 muss mit 5 potenziert werden.",
          "Also lautet die Potenzgleichung: 2⁵ = 32."
        ]
      },
      {
        titel: "Aufgabe 6: Einfache Logarithmusgleichung",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse log₃(x) = 4.",
        loesung: [
          "Schreibe die Gleichung als Potenzgleichung.",
          "log₃(x) = 4 bedeutet 3⁴ = x.",
          "3⁴ = 81.",
          "Also ist x = 81.",
          "Da x positiv ist, ist die Lösung gültig."
        ]
      },
      {
        titel: "Aufgabe 7: Exponentialgleichung mit gleicher Basis",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse 2 hoch x+1 = 16.",
        loesung: [
          "Schreibe 16 als Potenz zur Basis 2.",
          "Es gilt 16 = 2⁴.",
          "Damit steht 2 hoch x+1 = 2⁴.",
          "Bei gleicher Basis müssen die Exponenten gleich sein.",
          "Also gilt x + 1 = 4.",
          "Daraus folgt x = 3."
        ]
      },
      {
        titel: "Aufgabe 8: Exponentialgleichung durch Logarithmieren",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse 3 hoch x = 50.",
        loesung: [
          "Es lässt sich keine einfache gleiche Basis herstellen.",
          "Deshalb logarithmiert man beide Seiten.",
          "Aus 3 hoch x = 50 wird log(3ˣ) = log(50).",
          "Mit dem Logarithmengesetz wird daraus x · log(3) = log(50).",
          "Teile durch log(3).",
          "Also gilt x = log(50) / log(3).",
          "Näherungsweise ist x ≈ 3.56."
        ]
      },
      {
        titel: "Aufgabe 9: Logarithmusgleichung mit Definitionsbereich",
        schwierigkeit: "schwer",
        aufgabe:
          "Löse log₂(x) + log₂(x - 2) = 3.",
        loesung: [
          "Zuerst bestimmt man den Definitionsbereich.",
          "Es muss x > 0 und x - 2 > 0 gelten.",
          "Also ist x > 2.",
          "Fasse die Logarithmen zusammen.",
          "log₂(x) + log₂(x - 2) = log₂(x(x - 2)).",
          "Damit gilt log₂(x(x - 2)) = 3.",
          "Schreibe als Potenzgleichung: x(x - 2) = 2³.",
          "Also x² - 2x = 8.",
          "Bringe alles auf eine Seite: x² - 2x - 8 = 0.",
          "Faktorisieren ergibt (x - 4)(x + 2) = 0.",
          "Die möglichen Lösungen sind x = 4 und x = -2.",
          "Wegen x > 2 ist nur x = 4 gültig."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was bedeutet ein rationaler Exponent?",
        antwort:
          "Ein rationaler Exponent ist ein Exponent in Bruchform. Der Nenner beschreibt die Wurzel, der Zähler beschreibt die Potenz."
      },
      {
        frage: "Was bedeutet ein negativer Exponent?",
        antwort:
          "Ein negativer Exponent bedeutet, dass man den Kehrwert bildet. Zum Beispiel ist a hoch -n gleich 1 durch a hoch n."
      },
      {
        frage: "Was ist ein Logarithmus?",
        antwort:
          "Ein Logarithmus ist ein Exponent. logₐ(b) = x bedeutet, dass a hoch x gleich b ist."
      },
      {
        frage: "Welche Bedingungen gelten für logₐ(x)?",
        antwort:
          "Die Basis a muss positiv sein und darf nicht 1 sein. Das Argument x muss positiv sein."
      },
      {
        frage: "Warum ist log(x + y) nicht gleich log(x) + log(y)?",
        antwort:
          "Weil es kein Logarithmengesetz für Summen gibt. Logarithmengesetze gelten für Produkte, Quotienten und Potenzen."
      },
      {
        frage: "Wann logarithmiert man bei Exponentialgleichungen?",
        antwort:
          "Man logarithmiert, wenn die Variable im Exponenten steht und man keine gleiche Basis herstellen kann."
      }
    ],
    nachtVorTest: [
      "Kannst du a hoch m/n als Wurzel schreiben?",
      "Weisst du, dass der Nenner des Exponenten die Wurzel bestimmt?",
      "Kannst du negative Exponenten als Kehrwert schreiben?",
      "Kennst du die Potenzgesetze für gleiche Basen?",
      "Kannst du erklären, warum ein Logarithmus ein Exponent ist?",
      "Kannst du logₐ(b) = x in aˣ = b umschreiben?",
      "Prüfst du bei Logarithmusgleichungen den Definitionsbereich?",
      "Weisst du, dass log(x + y) nicht aufgeteilt werden darf?",
      "Kannst du Exponentialgleichungen mit gleicher Basis lösen?",
      "Kannst du Exponentialgleichungen durch Logarithmieren lösen?"
    ]
  },
   
  {
    id: "kurvendiskussion",
    nummer: "2",
    titel: "Kurvendiskussion",
    kurzbeschreibung:
      "Nullstellen, Extremstellen, Wendepunkte, Sattelpunkte, Monotonie, Krümmung, Symmetrie, Tangenten und das systematische Untersuchen von Funktionsgraphen.",
    lernziele: [
      "Du kannst eine Funktion systematisch untersuchen.",
      "Du kannst Nullstellen berechnen und grafisch deuten.",
      "Du kannst Extremstellen mit der ersten und zweiten Ableitung bestimmen.",
      "Du kannst Wendepunkte mit der zweiten und dritten Ableitung untersuchen.",
      "Du erkennst den Unterschied zwischen Hochpunkt, Tiefpunkt, Wendepunkt und Sattelpunkt.",
      "Du kannst Monotonieintervalle bestimmen.",
      "Du kannst Krümmungsverhalten beschreiben.",
      "Du kannst Tangentengleichungen an einer bestimmten Stelle aufstellen.",
      "Du kannst aus Ableitungen Informationen über den Graphen gewinnen.",
      "Du erkennst typische Prüfungsfallen bei Kurvendiskussionen."
    ],
    theorie: [
      {
        titel: "Was ist eine Kurvendiskussion?",
        text:
          "Bei einer Kurvendiskussion untersucht man eine Funktion möglichst vollständig. Man fragt zum Beispiel: Wo schneidet der Graph die Achsen? Wo steigt oder fällt er? Wo hat er Hochpunkte, Tiefpunkte oder Wendepunkte?"
      },
      {
        titel: "Nullstellen",
        text:
          "Nullstellen sind die x-Werte, bei denen der Funktionswert 0 ist. Man löst also die Gleichung f(x) = 0. Grafisch sind Nullstellen die Schnittpunkte des Graphen mit der x-Achse."
      },
      {
        titel: "y-Achsenabschnitt",
        text:
          "Den Schnittpunkt mit der y-Achse erhält man durch Einsetzen von x = 0. Der Punkt lautet dann (0 | f(0))."
      },
      {
        titel: "Erste Ableitung",
        text:
          "Die erste Ableitung f'(x) beschreibt die Steigung des Graphen. Ist f'(x) positiv, steigt der Graph. Ist f'(x) negativ, fällt der Graph. Ist f'(x) = 0, kann dort eine Extremstelle oder ein Sattelpunkt liegen."
      },
      {
        titel: "Extremstellen",
        text:
          "Extremstellen sind Stellen, an denen ein Graph lokal besonders hoch oder besonders tief liegt. Mögliche Extremstellen findet man meistens mit f'(x) = 0."
      },
      {
        titel: "Zweite Ableitung",
        text:
          "Die zweite Ableitung f''(x) beschreibt die Krümmung des Graphen. Ist f''(x) positiv, ist der Graph linksgekrümmt. Ist f''(x) negativ, ist der Graph rechtsgekrümmt."
      },
      {
        titel: "Hochpunkt und Tiefpunkt",
        text:
          "Wenn f'(x₀) = 0 und f''(x₀) > 0 gilt, liegt ein Tiefpunkt vor. Wenn f'(x₀) = 0 und f''(x₀) < 0 gilt, liegt ein Hochpunkt vor."
      },
      {
        titel: "Wendepunkt",
        text:
          "Ein Wendepunkt ist ein Punkt, an dem der Graph sein Krümmungsverhalten ändert. Mögliche Wendestellen findet man mit f''(x) = 0. Danach muss man prüfen, ob wirklich ein Krümmungswechsel stattfindet."
      },
      {
        titel: "Sattelpunkt",
        text:
          "Ein Sattelpunkt ist ein besonderer Wendepunkt mit waagrechter Tangente. Das bedeutet: f'(x₀) = 0 und gleichzeitig liegt ein Wendepunkt vor."
      },
      {
        titel: "Tangente",
        text:
          "Die Tangente an den Graphen bei x₀ hat die Steigung f'(x₀). Ihre Gleichung lautet y = f'(x₀)(x - x₀) + f(x₀)."
      },
      {
        titel: "Monotonie",
        text:
          "Monotonie beschreibt, wo ein Graph steigt oder fällt. Dazu untersucht man das Vorzeichen der ersten Ableitung."
      },
      {
        titel: "Krümmung",
        text:
          "Die Krümmung beschreibt, ob der Graph nach links oder rechts gebogen ist. Dazu untersucht man das Vorzeichen der zweiten Ableitung."
      }
    ],
    methoden: [
      {
        titel: "Methode: Kurvendiskussion systematisch durchführen",
        schritte: [
          "1. Bestimme zuerst den Definitionsbereich.",
          "2. Untersuche mögliche Symmetrien.",
          "3. Berechne den y-Achsenabschnitt mit f(0).",
          "4. Berechne die Nullstellen mit f(x) = 0.",
          "5. Berechne die erste Ableitung f'(x).",
          "6. Bestimme mögliche Extremstellen mit f'(x) = 0.",
          "7. Berechne die zweite Ableitung f''(x).",
          "8. Entscheide mit f''(x), ob Hochpunkte oder Tiefpunkte vorliegen.",
          "9. Bestimme mögliche Wendestellen mit f''(x) = 0.",
          "10. Prüfe den Krümmungswechsel oder verwende f'''(x), falls sinnvoll.",
          "11. Berechne die y-Werte der gefundenen Punkte.",
          "12. Zeichne oder beschreibe den Graphen mit allen Informationen."
        ]
      },
      {
        titel: "Methode: Nullstellen berechnen",
        schritte: [
          "1. Setze die Funktion gleich 0.",
          "2. Vereinfache die Gleichung so weit wie möglich.",
          "3. Faktorisiere, falls möglich.",
          "4. Verwende bei quadratischen Gleichungen die passende Lösungsformel oder Faktorisierung.",
          "5. Prüfe, ob alle Lösungen im Definitionsbereich liegen.",
          "6. Schreibe die Nullstellen als Punkte auf der x-Achse."
        ]
      },
      {
        titel: "Methode: Extremstellen bestimmen",
        schritte: [
          "1. Berechne die erste Ableitung f'(x).",
          "2. Setze f'(x) = 0.",
          "3. Löse die Gleichung nach x.",
          "4. Berechne die zweite Ableitung f''(x).",
          "5. Setze die gefundenen x-Werte in f''(x) ein.",
          "6. Bei f''(x) > 0 liegt ein Tiefpunkt vor.",
          "7. Bei f''(x) < 0 liegt ein Hochpunkt vor.",
          "8. Berechne den y-Wert mit der ursprünglichen Funktion f(x)."
        ]
      },
      {
        titel: "Methode: Wendepunkte bestimmen",
        schritte: [
          "1. Berechne die zweite Ableitung f''(x).",
          "2. Setze f''(x) = 0.",
          "3. Löse die Gleichung nach x.",
          "4. Prüfe, ob ein Krümmungswechsel stattfindet.",
          "5. Alternativ kann man bei vielen Aufgaben prüfen, ob f'''(x) nicht 0 ist.",
          "6. Berechne den y-Wert mit der ursprünglichen Funktion f(x).",
          "7. Schreibe den Wendepunkt als Koordinate auf."
        ]
      },
      {
        titel: "Methode: Monotonieintervalle bestimmen",
        schritte: [
          "1. Berechne die erste Ableitung f'(x).",
          "2. Bestimme die kritischen Stellen mit f'(x) = 0.",
          "3. Teile die x-Achse durch diese Stellen in Intervalle.",
          "4. Wähle in jedem Intervall einen Testwert.",
          "5. Setze den Testwert in f'(x) ein.",
          "6. Ist f'(x) positiv, steigt die Funktion dort.",
          "7. Ist f'(x) negativ, fällt die Funktion dort."
        ]
      },
      {
        titel: "Methode: Tangentengleichung aufstellen",
        schritte: [
          "1. Bestimme die Stelle x₀.",
          "2. Berechne den Funktionswert f(x₀).",
          "3. Berechne die Ableitung f'(x).",
          "4. Berechne die Steigung m = f'(x₀).",
          "5. Setze alles in y = m(x - x₀) + f(x₀) ein.",
          "6. Vereinfache die Gleichung, falls verlangt."
        ]
      }
    ],
    merksaetze: [
      "Nullstellen findet man mit f(x) = 0.",
      "Der y-Achsenabschnitt ist f(0).",
      "Die erste Ableitung beschreibt die Steigung.",
      "Mögliche Extremstellen findet man mit f'(x) = 0.",
      "f''(x) > 0 bedeutet Tiefpunkt, falls f'(x) = 0 gilt.",
      "f''(x) < 0 bedeutet Hochpunkt, falls f'(x) = 0 gilt.",
      "Mögliche Wendepunkte findet man mit f''(x) = 0.",
      "Ein Wendepunkt braucht einen Krümmungswechsel.",
      "Ein Sattelpunkt ist ein Wendepunkt mit waagrechter Tangente.",
      "Die Tangente bei x₀ hat die Steigung f'(x₀)."
    ],
    typischeFehler: [
      {
        fehler: "Man setzt für Extremstellen die ursprüngliche Funktion f(x) = 0.",
        korrektur:
          "Für Extremstellen setzt man die erste Ableitung f'(x) = 0. Die Gleichung f(x) = 0 liefert Nullstellen, nicht Extremstellen."
      },
      {
        fehler: "Man berechnet nur den x-Wert eines Extrempunkts.",
        korrektur:
          "Ein Punkt braucht immer x- und y-Koordinate. Den y-Wert erhält man durch Einsetzen des x-Werts in die ursprüngliche Funktion f(x)."
      },
      {
        fehler: "Man denkt, f'(x) = 0 bedeutet automatisch Hochpunkt oder Tiefpunkt.",
        korrektur:
          "f'(x) = 0 bedeutet nur, dass eine waagrechte Tangente vorliegt. Es kann auch ein Sattelpunkt sein."
      },
      {
        fehler: "Man bestimmt Wendepunkte mit f'(x) = 0.",
        korrektur:
          "Wendepunkte untersucht man mit der zweiten Ableitung. Man setzt f''(x) = 0 und prüft den Krümmungswechsel."
      },
      {
        fehler: "Man verwechselt Funktionswert und Ableitungswert.",
        korrektur:
          "f(x) gibt die Höhe des Graphen an. f'(x) gibt die Steigung des Graphen an."
      },
      {
        fehler: "Man verwendet f''(x) zur Monotonie.",
        korrektur:
          "Monotonie untersucht man mit f'(x). Die zweite Ableitung beschreibt die Krümmung, nicht direkt das Steigen oder Fallen."
      },
      {
        fehler: "Man vergisst bei Tangenten den Punkt einzusetzen.",
        korrektur:
          "Für eine Tangente braucht man die Steigung f'(x₀) und den Punkt (x₀ | f(x₀)). Erst dann kann man die Tangentengleichung aufstellen."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: y-Achsenabschnitt bestimmen",
        schwierigkeit: "einfach",
        aufgabe:
          "Gegeben ist f(x) = x² - 4x + 1. Bestimme den Schnittpunkt mit der y-Achse.",
        loesung: [
          "Für den y-Achsenabschnitt setzt man x = 0 ein.",
          "Also berechnet man f(0).",
          "f(0) = 0² - 4 · 0 + 1.",
          "Das ergibt f(0) = 1.",
          "Der Schnittpunkt mit der y-Achse ist also (0 | 1)."
        ]
      },
      {
        titel: "Aufgabe 2: Nullstellen einer quadratischen Funktion",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme die Nullstellen von f(x) = x² - 6x + 8.",
        loesung: [
          "Nullstellen findet man mit f(x) = 0.",
          "Also: x² - 6x + 8 = 0.",
          "Faktorisiere den Term.",
          "x² - 6x + 8 = (x - 2)(x - 4).",
          "Damit gilt (x - 2)(x - 4) = 0.",
          "Also ist x = 2 oder x = 4.",
          "Die Nullstellen sind (2 | 0) und (4 | 0)."
        ]
      },
      {
        titel: "Aufgabe 3: Erste Ableitung und Steigung",
        schwierigkeit: "einfach",
        aufgabe:
          "Gegeben ist f(x) = x³ - 2x. Berechne die Steigung des Graphen bei x = 2.",
        loesung: [
          "Die Steigung erhält man mit der ersten Ableitung.",
          "f'(x) = 3x² - 2.",
          "Setze x = 2 ein.",
          "f'(2) = 3 · 2² - 2.",
          "f'(2) = 12 - 2 = 10.",
          "Die Steigung bei x = 2 ist also 10."
        ]
      },
      {
        titel: "Aufgabe 4: Extremstelle bestimmen",
        schwierigkeit: "mittel",
        aufgabe:
          "Untersuche f(x) = x² - 4x + 5 auf Extremstellen.",
        loesung: [
          "Zuerst berechnet man die erste Ableitung.",
          "f'(x) = 2x - 4.",
          "Für mögliche Extremstellen setzt man f'(x) = 0.",
          "2x - 4 = 0.",
          "Daraus folgt x = 2.",
          "Nun berechnet man die zweite Ableitung.",
          "f''(x) = 2.",
          "Da f''(2) = 2 > 0 ist, liegt ein Tiefpunkt vor.",
          "Berechne den y-Wert mit f(2).",
          "f(2) = 2² - 4 · 2 + 5 = 4 - 8 + 5 = 1.",
          "Der Tiefpunkt ist T(2 | 1)."
        ]
      },
      {
        titel: "Aufgabe 5: Hochpunkt oder Tiefpunkt?",
        schwierigkeit: "mittel",
        aufgabe:
          "Gegeben ist f(x) = -x² + 6x - 4. Bestimme den Extrempunkt.",
        loesung: [
          "Berechne zuerst die erste Ableitung.",
          "f'(x) = -2x + 6.",
          "Setze f'(x) = 0.",
          "-2x + 6 = 0.",
          "Daraus folgt x = 3.",
          "Berechne die zweite Ableitung.",
          "f''(x) = -2.",
          "Da f''(3) = -2 < 0 ist, liegt ein Hochpunkt vor.",
          "Berechne den y-Wert.",
          "f(3) = -3² + 6 · 3 - 4 = -9 + 18 - 4 = 5.",
          "Der Hochpunkt ist H(3 | 5)."
        ]
      },
      {
        titel: "Aufgabe 6: Wendepunkt bestimmen",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme den Wendepunkt von f(x) = x³ - 3x² + 2.",
        loesung: [
          "Für Wendepunkte betrachtet man die zweite Ableitung.",
          "Zuerst berechnet man f'(x) = 3x² - 6x.",
          "Dann berechnet man f''(x) = 6x - 6.",
          "Setze f''(x) = 0.",
          "6x - 6 = 0.",
          "Daraus folgt x = 1.",
          "Zur Kontrolle kann man die dritte Ableitung berechnen.",
          "f'''(x) = 6.",
          "Da f'''(1) = 6 nicht 0 ist, liegt ein Wendepunkt vor.",
          "Berechne den y-Wert.",
          "f(1) = 1³ - 3 · 1² + 2 = 1 - 3 + 2 = 0.",
          "Der Wendepunkt ist W(1 | 0)."
        ]
      },
      {
        titel: "Aufgabe 7: Sattelpunkt erkennen",
        schwierigkeit: "mittel",
        aufgabe:
          "Zeige, dass f(x) = x³ bei x = 0 einen Sattelpunkt besitzt.",
        loesung: [
          "Ein Sattelpunkt ist ein Wendepunkt mit waagrechter Tangente.",
          "Berechne die erste Ableitung.",
          "f'(x) = 3x².",
          "Setze x = 0 ein.",
          "f'(0) = 0, also ist die Tangente waagrecht.",
          "Berechne die zweite Ableitung.",
          "f''(x) = 6x.",
          "f''(0) = 0, also ist x = 0 eine mögliche Wendestelle.",
          "Links von 0 ist f''(x) negativ, rechts von 0 ist f''(x) positiv.",
          "Es findet also ein Krümmungswechsel statt.",
          "Der Funktionswert ist f(0) = 0.",
          "Damit liegt bei S(0 | 0) ein Sattelpunkt vor."
        ]
      },
      {
        titel: "Aufgabe 8: Monotonie untersuchen",
        schwierigkeit: "mittel",
        aufgabe:
          "Untersuche die Monotonie von f(x) = x² - 2x.",
        loesung: [
          "Berechne zuerst die erste Ableitung.",
          "f'(x) = 2x - 2.",
          "Bestimme die kritische Stelle mit f'(x) = 0.",
          "2x - 2 = 0.",
          "Daraus folgt x = 1.",
          "Nun prüft man die Intervalle links und rechts von 1.",
          "Für x < 1 ist f'(x) negativ.",
          "Für x > 1 ist f'(x) positiv.",
          "Also fällt die Funktion auf dem Intervall (-∞, 1).",
          "Sie steigt auf dem Intervall (1, ∞)."
        ]
      },
      {
        titel: "Aufgabe 9: Tangentengleichung aufstellen",
        schwierigkeit: "schwer",
        aufgabe:
          "Bestimme die Tangente an f(x) = x² + 2x bei x₀ = 1.",
        loesung: [
          "Zuerst berechnet man den Punkt auf dem Graphen.",
          "f(1) = 1² + 2 · 1 = 3.",
          "Der Berührpunkt ist also (1 | 3).",
          "Nun berechnet man die Ableitung.",
          "f'(x) = 2x + 2.",
          "Die Steigung an der Stelle x₀ = 1 ist f'(1) = 4.",
          "Die Tangentengleichung lautet y = m(x - x₀) + f(x₀).",
          "Setze m = 4, x₀ = 1 und f(x₀) = 3 ein.",
          "y = 4(x - 1) + 3.",
          "Vereinfacht ergibt das y = 4x - 1."
        ]
      },
      {
        titel: "Aufgabe 10: Vollständige kleine Kurvendiskussion",
        schwierigkeit: "schwer",
        aufgabe:
          "Untersuche f(x) = x³ - 3x auf Nullstellen, Extremstellen und Wendepunkt.",
        loesung: [
          "Zuerst berechnet man die Nullstellen.",
          "Setze f(x) = 0.",
          "x³ - 3x = 0.",
          "Faktorisiere x aus.",
          "x(x² - 3) = 0.",
          "Also ist x = 0 oder x² - 3 = 0.",
          "Daraus folgen die Nullstellen x = 0, x = √3 und x = -√3.",
          "Nun berechnet man die erste Ableitung.",
          "f'(x) = 3x² - 3.",
          "Für Extremstellen setzt man f'(x) = 0.",
          "3x² - 3 = 0.",
          "x² = 1.",
          "Also x = -1 oder x = 1.",
          "Berechne die zweite Ableitung.",
          "f''(x) = 6x.",
          "Bei x = -1 gilt f''(-1) = -6 < 0, also liegt ein Hochpunkt vor.",
          "Bei x = 1 gilt f''(1) = 6 > 0, also liegt ein Tiefpunkt vor.",
          "Berechne die y-Werte.",
          "f(-1) = (-1)³ - 3(-1) = -1 + 3 = 2.",
          "f(1) = 1³ - 3 · 1 = -2.",
          "Der Hochpunkt ist H(-1 | 2).",
          "Der Tiefpunkt ist T(1 | -2).",
          "Für den Wendepunkt setzt man f''(x) = 0.",
          "6x = 0, also x = 0.",
          "Da f'''(x) = 6 nicht 0 ist, liegt ein Wendepunkt vor.",
          "f(0) = 0.",
          "Der Wendepunkt ist W(0 | 0)."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was untersucht man bei einer Kurvendiskussion?",
        antwort:
          "Man untersucht wichtige Eigenschaften eines Funktionsgraphen, zum Beispiel Nullstellen, Extremstellen, Wendepunkte, Monotonie, Krümmung und Tangenten."
      },
      {
        frage: "Wie findet man Nullstellen?",
        antwort:
          "Man setzt die Funktion gleich 0 und löst die Gleichung f(x) = 0. Die Lösungen sind die x-Werte, bei denen der Graph die x-Achse schneidet."
      },
      {
        frage: "Was sagt die erste Ableitung aus?",
        antwort:
          "Die erste Ableitung beschreibt die Steigung des Graphen. Sie zeigt, ob der Graph steigt, fällt oder eine waagrechte Tangente hat."
      },
      {
        frage: "Wie findet man mögliche Extremstellen?",
        antwort:
          "Man berechnet die erste Ableitung und setzt f'(x) = 0. Danach prüft man mit der zweiten Ableitung oder einem Vorzeichenwechsel, ob ein Hochpunkt oder Tiefpunkt vorliegt."
      },
      {
        frage: "Was sagt die zweite Ableitung aus?",
        antwort:
          "Die zweite Ableitung beschreibt die Krümmung des Graphen. Sie hilft bei der Entscheidung, ob ein Extrempunkt ein Hochpunkt oder Tiefpunkt ist, und bei der Suche nach Wendepunkten."
      },
      {
        frage: "Was ist ein Wendepunkt?",
        antwort:
          "Ein Wendepunkt ist ein Punkt, an dem der Graph seine Krümmung wechselt, also zum Beispiel von rechtsgekrümmt zu linksgekrümmt."
      },
      {
        frage: "Was ist ein Sattelpunkt?",
        antwort:
          "Ein Sattelpunkt ist ein Wendepunkt mit waagrechter Tangente. Dort gilt also f'(x) = 0 und gleichzeitig findet ein Krümmungswechsel statt."
      },
      {
        frage: "Wie stellt man eine Tangente auf?",
        antwort:
          "Man berechnet zuerst den Punkt (x₀ | f(x₀)) und die Steigung f'(x₀). Danach setzt man beides in y = f'(x₀)(x - x₀) + f(x₀) ein."
      }
    ],
    nachtVorTest: [
      "Kannst du Nullstellen mit f(x) = 0 berechnen?",
      "Weisst du, dass f(0) den y-Achsenabschnitt liefert?",
      "Kannst du die erste Ableitung als Steigung erklären?",
      "Weisst du, dass mögliche Extremstellen mit f'(x) = 0 gefunden werden?",
      "Kannst du mit f''(x) entscheiden, ob ein Hochpunkt oder Tiefpunkt vorliegt?",
      "Weisst du, dass Wendepunkte mit f''(x) = 0 gesucht werden?",
      "Prüfst du beim Wendepunkt den Krümmungswechsel?",
      "Kannst du einen Sattelpunkt erklären?",
      "Kannst du Monotonieintervalle mit f'(x) bestimmen?",
      "Kannst du eine Tangentengleichung mit y = f'(x₀)(x - x₀) + f(x₀) aufstellen?"
    ]
  },
     {
    id: "funktionen-parameter",
    nummer: "3",
    titel: "Funktionen mit Parametern",
    kurzbeschreibung:
      "Einfluss von Parametern auf Funktionsgraphen, besonders bei g(x) = a · f(bx + c) + d sowie bei quadratischen, trigonometrischen, Exponential- und Logarithmusfunktionen.",
    lernziele: [
      "Du kannst erklären, was ein Parameter in einer Funktion bedeutet.",
      "Du kannst den Einfluss von a, b, c und d auf einen Graphen beschreiben.",
      "Du erkennst Streckung, Stauchung, Spiegelung und Verschiebung.",
      "Du kannst Funktionsgraphen ohne Wertetabelle transformieren.",
      "Du kannst quadratische Funktionen mit Parametern untersuchen.",
      "Du kannst trigonometrische Funktionen mit Parametern interpretieren.",
      "Du kannst Exponentialfunktionen mit Parametern deuten.",
      "Du kannst Logarithmusfunktionen mit Parametern deuten.",
      "Du kannst aus einer Funktionsgleichung den veränderten Graphen beschreiben.",
      "Du erkennst typische Fehler bei Klammern und Verschiebungen."
    ],
    theorie: [
      {
        titel: "Was ist ein Parameter?",
        text:
          "Ein Parameter ist eine Zahl oder ein Buchstabe, der die Form oder Lage eines Graphen verändert. Im Gegensatz zur Variable x wird ein Parameter meistens als fest betrachtet."
      },
      {
        titel: "Grundidee",
        text:
          "Man beginnt mit einer bekannten Grundfunktion f(x), zum Beispiel x², sin(x), eˣ oder log(x). Durch Parameter wird dieser Grundgraph verschoben, gestreckt, gestaucht oder gespiegelt."
      },
      {
        titel: "Allgemeine Form",
        text:
          "Eine typische Schreibweise ist g(x) = a · f(bx + c) + d. Die Parameter a und d wirken in y-Richtung. Die Parameter b und c wirken in x-Richtung."
      },
      {
        titel: "Parameter a",
        text:
          "Der Parameter a verändert den Graphen in y-Richtung. Ist |a| grösser als 1, wird der Graph vertikal gestreckt. Ist |a| zwischen 0 und 1, wird er vertikal gestaucht. Ist a negativ, wird der Graph zusätzlich an der x-Achse gespiegelt."
      },
      {
        titel: "Parameter d",
        text:
          "Der Parameter d verschiebt den Graphen nach oben oder unten. Bei d > 0 wird der Graph nach oben verschoben. Bei d < 0 wird er nach unten verschoben."
      },
      {
        titel: "Parameter b",
        text:
          "Der Parameter b verändert den Graphen in x-Richtung. Ist |b| grösser als 1, wird der Graph horizontal gestaucht. Ist |b| zwischen 0 und 1, wird er horizontal gestreckt. Ist b negativ, wird der Graph an der y-Achse gespiegelt."
      },
      {
        titel: "Parameter c",
        text:
          "Der Parameter c verschiebt den Graphen horizontal. Bei f(x + c) verschiebt sich der Graph nach links, wenn c positiv ist, und nach rechts, wenn c negativ ist. Das wirkt auf viele Schüler zuerst umgekehrt."
      },
      {
        titel: "Warum ist die x-Richtung ungewohnt?",
        text:
          "Veränderungen innerhalb der Klammer wirken auf die x-Werte. Deshalb erscheinen sie oft umgekehrt: f(x - 3) verschiebt den Graphen nach rechts, obwohl ein Minuszeichen steht."
      },
      {
        titel: "Quadratische Funktionen mit Parametern",
        text:
          "Bei Funktionen wie f(x) = a(x - u)² + v erkennt man den Scheitelpunkt direkt. Der Scheitelpunkt ist S(u | v). Der Parameter a entscheidet über Öffnung, Streckung und Spiegelung."
      },
      {
        titel: "Trigonometrische Funktionen mit Parametern",
        text:
          "Bei Funktionen wie f(x) = a · sin(bx + c) + d verändert a die Amplitude, b die Periode, c die horizontale Verschiebung und d die Mittellinie."
      },
      {
        titel: "Exponentialfunktionen mit Parametern",
        text:
          "Bei Exponentialfunktionen verändern Parameter die Anfangshöhe, das Wachstum, die Verschiebung und die waagrechte Asymptote. Besonders d beeinflusst die waagrechte Asymptote."
      },
      {
        titel: "Logarithmusfunktionen mit Parametern",
        text:
          "Bei Logarithmusfunktionen beeinflussen Parameter die Lage des Graphen, den Definitionsbereich und die senkrechte Asymptote. Verschiebungen in x-Richtung sind hier besonders wichtig."
      }
    ],
    methoden: [
      {
        titel: "Methode: Parameter in g(x) = a · f(bx + c) + d deuten",
        schritte: [
          "1. Betrachte zuerst den Parameter a vor der Funktion.",
          "2. Entscheide, ob eine Streckung, Stauchung oder Spiegelung an der x-Achse vorliegt.",
          "3. Betrachte danach den Parameter d ausserhalb der Funktion.",
          "4. Bestimme die Verschiebung nach oben oder unten.",
          "5. Betrachte nun den Ausdruck innerhalb der Klammer.",
          "6. Entscheide, wie b den Graphen horizontal verändert.",
          "7. Bestimme zuletzt die horizontale Verschiebung durch c.",
          "8. Beschreibe die Veränderungen in einer sinnvollen Reihenfolge."
        ]
      },
      {
        titel: "Methode: Verschiebung bei f(x - u) erkennen",
        schritte: [
          "1. Schaue genau auf den Ausdruck in der Klammer.",
          "2. Steht dort x - u, wird der Graph um u nach rechts verschoben.",
          "3. Steht dort x + u, wird der Graph um u nach links verschoben.",
          "4. Merke: Die horizontale Verschiebung wirkt scheinbar umgekehrt.",
          "5. Kontrolliere die Verschiebung, indem du überlegst, wann die Klammer 0 wird."
        ]
      },
      {
        titel: "Methode: Scheitelpunktform untersuchen",
        schritte: [
          "1. Bringe die Funktion in die Form f(x) = a(x - u)² + v.",
          "2. Lies den Scheitelpunkt S(u | v) ab.",
          "3. Prüfe das Vorzeichen von a.",
          "4. Bei a > 0 öffnet die Parabel nach oben.",
          "5. Bei a < 0 öffnet die Parabel nach unten.",
          "6. Prüfe die Grösse von |a| für Streckung oder Stauchung."
        ]
      },
      {
        titel: "Methode: Sinusfunktion mit Parametern untersuchen",
        schritte: [
          "1. Bringe die Funktion in die Form f(x) = a · sin(bx + c) + d.",
          "2. Die Amplitude ist |a|.",
          "3. Die Mittellinie ist y = d.",
          "4. Die Periode ist 2π / |b|.",
          "5. Die horizontale Verschiebung erhält man, indem man bx + c = 0 löst.",
          "6. Beschreibe danach den Graphen mit Amplitude, Periode, Verschiebung und Mittellinie."
        ]
      },
      {
        titel: "Methode: Exponentialfunktion mit Verschiebung deuten",
        schritte: [
          "1. Erkenne zuerst die Grundform der Exponentialfunktion.",
          "2. Prüfe den Faktor vor der Exponentialfunktion.",
          "3. Prüfe, ob der Graph nach oben oder unten verschoben wurde.",
          "4. Bestimme daraus die waagrechte Asymptote.",
          "5. Prüfe, ob eine Spiegelung vorliegt.",
          "6. Beschreibe das Wachstums- oder Zerfallsverhalten."
        ]
      },
      {
        titel: "Methode: Logarithmusfunktion mit Verschiebung deuten",
        schritte: [
          "1. Schaue zuerst auf das Argument des Logarithmus.",
          "2. Setze das Argument grösser als 0, um den Definitionsbereich zu bestimmen.",
          "3. Bestimme daraus auch die senkrechte Asymptote.",
          "4. Prüfe Verschiebungen nach oben oder unten.",
          "5. Prüfe Streckung, Stauchung oder Spiegelung.",
          "6. Beschreibe den Graphen mit Definitionsbereich und Asymptote."
        ]
      }
    ],
    merksaetze: [
      "Parameter verändern Form oder Lage eines Graphen.",
      "a wirkt vertikal: Streckung, Stauchung oder Spiegelung an der x-Achse.",
      "d verschiebt den Graphen nach oben oder unten.",
      "b wirkt horizontal: Stauchung, Streckung oder Spiegelung an der y-Achse.",
      "c bewirkt eine horizontale Verschiebung.",
      "f(x - u) verschiebt den Graphen nach rechts.",
      "f(x + u) verschiebt den Graphen nach links.",
      "Bei f(x) = a(x - u)² + v ist der Scheitelpunkt S(u | v).",
      "Bei Sinusfunktionen ist die Amplitude |a|.",
      "Bei Sinusfunktionen ist die Periode 2π / |b|.",
      "Bei Exponentialfunktionen zeigt d oft die waagrechte Asymptote.",
      "Bei Logarithmusfunktionen bestimmt das Argument den Definitionsbereich."
    ],
    typischeFehler: [
      {
        fehler: "Man denkt, f(x - 3) verschiebe den Graphen nach links.",
        korrektur:
          "Richtig ist: f(x - 3) verschiebt den Graphen nach rechts. Man kann prüfen, wann die Klammer 0 wird: x - 3 = 0 ergibt x = 3."
      },
      {
        fehler: "Man verwechselt vertikale und horizontale Streckung.",
        korrektur:
          "Ein Faktor ausserhalb der Funktion wirkt vertikal. Ein Faktor innerhalb der Klammer wirkt horizontal."
      },
      {
        fehler: "Man vergisst bei negativem a die Spiegelung.",
        korrektur:
          "Ist a negativ, wird der Graph an der x-Achse gespiegelt. Danach kann zusätzlich eine Streckung oder Stauchung vorliegen."
      },
      {
        fehler: "Man liest den Scheitelpunkt aus f(x) = a(x + 2)² - 5 falsch ab.",
        korrektur:
          "Der Scheitelpunkt ist S(-2 | -5), nicht S(2 | -5). In der Klammer wirkt die Verschiebung umgekehrt."
      },
      {
        fehler: "Man sagt bei sin(2x), die Periode werde doppelt so gross.",
        korrektur:
          "Richtig ist: Die Periode wird halb so gross. Bei sin(bx) gilt die Periode 2π / |b|."
      },
      {
        fehler: "Man ignoriert bei Logarithmusfunktionen den Definitionsbereich.",
        korrektur:
          "Beim Logarithmus muss das Argument positiv sein. Diese Bedingung bestimmt oft den Definitionsbereich und die senkrechte Asymptote."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Vertikale Verschiebung",
        schwierigkeit: "einfach",
        aufgabe:
          "Beschreibe, wie der Graph von g(x) = x² + 4 aus dem Graphen von f(x) = x² entsteht.",
        loesung: [
          "Die Grundfunktion ist f(x) = x².",
          "Bei g(x) = x² + 4 steht ausserhalb der Funktion plus 4.",
          "Das bedeutet eine Verschiebung in y-Richtung.",
          "Der Graph wird um 4 Einheiten nach oben verschoben."
        ]
      },
      {
        titel: "Aufgabe 2: Horizontale Verschiebung",
        schwierigkeit: "einfach",
        aufgabe:
          "Beschreibe, wie der Graph von g(x) = (x - 5)² aus dem Graphen von f(x) = x² entsteht.",
        loesung: [
          "Die Grundfunktion ist f(x) = x².",
          "In der Klammer steht x - 5.",
          "Eine Form f(x - u) verschiebt den Graphen um u nach rechts.",
          "Also wird der Graph um 5 Einheiten nach rechts verschoben."
        ]
      },
      {
        titel: "Aufgabe 3: Spiegelung und Streckung",
        schwierigkeit: "einfach",
        aufgabe:
          "Beschreibe die Veränderung von g(x) = -3x² gegenüber f(x) = x².",
        loesung: [
          "Der Faktor vor x² ist -3.",
          "Der Betrag 3 bedeutet eine vertikale Streckung um den Faktor 3.",
          "Das Minuszeichen bedeutet eine Spiegelung an der x-Achse.",
          "Der Graph wird also gestreckt und nach unten geöffnet."
        ]
      },
      {
        titel: "Aufgabe 4: Scheitelpunkt ablesen",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme den Scheitelpunkt von f(x) = 2(x - 3)² - 7 und beschreibe die Öffnung.",
        loesung: [
          "Die Funktion steht in Scheitelpunktform.",
          "Die Form lautet f(x) = a(x - u)² + v.",
          "Hier ist u = 3 und v = -7.",
          "Der Scheitelpunkt ist also S(3 | -7).",
          "Da a = 2 positiv ist, öffnet die Parabel nach oben.",
          "Da |a| > 1 ist, ist sie schmaler als die Normalparabel."
        ]
      },
      {
        titel: "Aufgabe 5: Allgemeine Transformation beschreiben",
        schwierigkeit: "mittel",
        aufgabe:
          "Beschreibe die Transformation von g(x) = 2 · f(x + 4) - 1 gegenüber f(x).",
        loesung: [
          "Der Faktor 2 steht ausserhalb der Funktion.",
          "Das bedeutet eine vertikale Streckung um den Faktor 2.",
          "In der Klammer steht x + 4.",
          "Das bedeutet eine Verschiebung um 4 Einheiten nach links.",
          "Das -1 ausserhalb der Funktion verschiebt den Graphen um 1 Einheit nach unten.",
          "Insgesamt: links 4, vertikal gestreckt mit Faktor 2, danach 1 nach unten."
        ]
      },
      {
        titel: "Aufgabe 6: Sinusfunktion untersuchen",
        schwierigkeit: "mittel",
        aufgabe:
          "Gegeben ist f(x) = 3 · sin(2x) - 1. Bestimme Amplitude, Periode und Mittellinie.",
        loesung: [
          "Die Funktion hat die Form f(x) = a · sin(bx) + d.",
          "Hier ist a = 3.",
          "Die Amplitude ist |a| = 3.",
          "Hier ist b = 2.",
          "Die Periode ist 2π / |b|.",
          "Also ist die Periode 2π / 2 = π.",
          "Hier ist d = -1.",
          "Die Mittellinie ist y = -1."
        ]
      },
      {
        titel: "Aufgabe 7: Exponentialfunktion deuten",
        schwierigkeit: "mittel",
        aufgabe:
          "Beschreibe den Graphen von g(x) = 2 · eˣ + 5 im Vergleich zu f(x) = eˣ.",
        loesung: [
          "Die Grundfunktion ist f(x) = eˣ.",
          "Der Faktor 2 steht vor eˣ.",
          "Das bedeutet eine vertikale Streckung um den Faktor 2.",
          "Das +5 verschiebt den Graphen um 5 Einheiten nach oben.",
          "Die waagrechte Asymptote ist dadurch y = 5."
        ]
      },
      {
        titel: "Aufgabe 8: Logarithmusfunktion mit Definitionsbereich",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme den Definitionsbereich von f(x) = log(x - 4) und beschreibe die Verschiebung gegenüber log(x).",
        loesung: [
          "Beim Logarithmus muss das Argument positiv sein.",
          "Also gilt x - 4 > 0.",
          "Daraus folgt x > 4.",
          "Der Definitionsbereich ist also x > 4.",
          "Gegenüber log(x) ist der Graph um 4 Einheiten nach rechts verschoben.",
          "Die senkrechte Asymptote ist x = 4."
        ]
      },
      {
        titel: "Aufgabe 9: Parameter bestimmen",
        schwierigkeit: "schwer",
        aufgabe:
          "Eine Parabel hat den Scheitelpunkt S(2 | -3) und ist nach unten geöffnet. Gib eine mögliche Funktionsgleichung in Scheitelpunktform an.",
        loesung: [
          "Die Scheitelpunktform lautet f(x) = a(x - u)² + v.",
          "Der Scheitelpunkt S(2 | -3) bedeutet u = 2 und v = -3.",
          "Also hat die Funktion die Form f(x) = a(x - 2)² - 3.",
          "Da die Parabel nach unten geöffnet ist, muss a negativ sein.",
          "Eine mögliche Wahl ist a = -1.",
          "Eine mögliche Funktionsgleichung ist also f(x) = -(x - 2)² - 3."
        ]
      },
      {
        titel: "Aufgabe 10: Verschiebung durch Klammer bestimmen",
        schwierigkeit: "schwer",
        aufgabe:
          "Beschreibe die Transformation von g(x) = -0.5 · f(3(x - 2)) + 4 gegenüber f(x).",
        loesung: [
          "Der Faktor -0.5 steht ausserhalb der Funktion.",
          "Der Betrag 0.5 bedeutet eine vertikale Stauchung.",
          "Das Minuszeichen bedeutet eine Spiegelung an der x-Achse.",
          "Innerhalb der Funktion steht 3(x - 2).",
          "Der Faktor 3 bewirkt eine horizontale Stauchung.",
          "Der Ausdruck x - 2 bewirkt eine Verschiebung um 2 Einheiten nach rechts.",
          "Das +4 ausserhalb verschiebt den Graphen um 4 Einheiten nach oben.",
          "Insgesamt: horizontal gestaucht, 2 nach rechts, vertikal gestaucht, an der x-Achse gespiegelt und 4 nach oben verschoben."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist ein Parameter?",
        antwort:
          "Ein Parameter ist eine feste Zahl oder ein Buchstabe, der die Form oder Lage eines Funktionsgraphen verändert."
      },
      {
        frage: "Was bewirkt der Parameter a in a · f(x)?",
        antwort:
          "Er verändert den Graphen in y-Richtung. Bei negativem a wird zusätzlich an der x-Achse gespiegelt."
      },
      {
        frage: "Was bewirkt der Parameter d in f(x) + d?",
        antwort:
          "Er verschiebt den Graphen nach oben oder unten. Bei positivem d nach oben, bei negativem d nach unten."
      },
      {
        frage: "Warum verschiebt f(x - 3) den Graphen nach rechts?",
        antwort:
          "Weil der ursprüngliche x-Wert erst bei x = 3 erreicht wird. Man kann es sehen, indem man x - 3 = 0 setzt."
      },
      {
        frage: "Wie liest man den Scheitelpunkt aus f(x) = a(x - u)² + v ab?",
        antwort:
          "Der Scheitelpunkt ist S(u | v). Das Vorzeichen in der Klammer muss dabei richtig interpretiert werden."
      },
      {
        frage: "Was bedeutet bei einer Sinusfunktion die Amplitude?",
        antwort:
          "Die Amplitude ist der maximale Abstand des Graphen von seiner Mittellinie. Bei a · sin(x) ist sie |a|."
      },
      {
        frage: "Wie berechnet man die Periode von sin(bx)?",
        antwort:
          "Die Periode ist 2π / |b|. Ein grösseres b macht die Periode kleiner."
      },
      {
        frage: "Was muss man bei Logarithmusfunktionen immer prüfen?",
        antwort:
          "Man muss prüfen, für welche x-Werte das Argument positiv ist. Daraus folgen Definitionsbereich und oft auch die senkrechte Asymptote."
      }
    ],
    nachtVorTest: [
      "Kannst du erklären, was ein Parameter ist?",
      "Weisst du, dass a den Graphen vertikal streckt, staucht oder spiegelt?",
      "Weisst du, dass d den Graphen nach oben oder unten verschiebt?",
      "Kannst du erklären, warum f(x - 3) nach rechts verschoben wird?",
      "Kannst du den Scheitelpunkt aus a(x - u)² + v ablesen?",
      "Kannst du bei negativem a die Spiegelung erkennen?",
      "Kannst du bei Sinusfunktionen die Amplitude bestimmen?",
      "Kannst du bei Sinusfunktionen die Periode mit 2π / |b| berechnen?",
      "Kannst du bei Exponentialfunktionen die waagrechte Asymptote erkennen?",
      "Kannst du bei Logarithmusfunktionen den Definitionsbereich bestimmen?"
    ]
  },
     {
    id: "umkehrfunktionen",
    nummer: "4",
    titel: "Umkehrfunktionen",
    kurzbeschreibung:
      "Umkehrfunktionen algebraisch und geometrisch verstehen, Definitionsmenge und Wertemenge korrekt vertauschen und besonders den Zusammenhang zwischen Exponential- und Logarithmusfunktionen erkennen.",
    lernziele: [
      "Du kannst erklären, was eine Umkehrfunktion ist.",
      "Du kannst eine Umkehrfunktion algebraisch bestimmen.",
      "Du verstehst die geometrische Bedeutung als Spiegelung an der Geraden y = x.",
      "Du kannst Definitionsmenge und Wertemenge einer Funktion bestimmen.",
      "Du weisst, dass bei der Umkehrfunktion Definitionsmenge und Wertemenge vertauscht werden.",
      "Du erkennst, wann eine Funktion überhaupt umkehrbar ist.",
      "Du kannst den Zusammenhang zwischen Exponentialfunktion und Logarithmusfunktion erklären.",
      "Du kannst bei quadratischen Funktionen eine Einschränkung des Definitionsbereichs vornehmen.",
      "Du erkennst typische Fehler beim Vertauschen von x und y.",
      "Du kannst Umkehrfunktionen in Prüfungsaufgaben sauber begründen."
    ],
    theorie: [
      {
        titel: "Was ist eine Umkehrfunktion?",
        text:
          "Eine Umkehrfunktion macht die Wirkung einer Funktion rückgängig. Wenn eine Funktion x auf y abbildet, dann bildet die Umkehrfunktion dieses y wieder auf x zurück."
      },
      {
        titel: "Schreibweise",
        text:
          "Die Umkehrfunktion von f schreibt man meistens als f⁻¹. Wichtig: f⁻¹ bedeutet hier nicht 1/f, sondern die inverse Funktion."
      },
      {
        titel: "Grundidee",
        text:
          "Wenn f(a) = b gilt, dann gilt bei der Umkehrfunktion f⁻¹(b) = a. Die Eingabe und die Ausgabe werden also vertauscht."
      },
      {
        titel: "Geometrische Bedeutung",
        text:
          "Der Graph einer Funktion und der Graph ihrer Umkehrfunktion sind Spiegelbilder an der Geraden y = x. Jeder Punkt (a | b) wird dabei zu (b | a)."
      },
      {
        titel: "Definitionsmenge und Wertemenge",
        text:
          "Die Definitionsmenge beschreibt, welche x-Werte erlaubt sind. Die Wertemenge beschreibt, welche y-Werte herauskommen können."
      },
      {
        titel: "Vertauschung bei der Umkehrfunktion",
        text:
          "Bei einer Umkehrfunktion werden Definitionsmenge und Wertemenge vertauscht. Die Wertemenge von f wird zur Definitionsmenge von f⁻¹, und die Definitionsmenge von f wird zur Wertemenge von f⁻¹."
      },
      {
        titel: "Wann ist eine Funktion umkehrbar?",
        text:
          "Eine Funktion ist nur dann eindeutig umkehrbar, wenn jeder y-Wert höchstens einmal vorkommt. Anders gesagt: Zu jedem Funktionswert darf es nur einen passenden x-Wert geben."
      },
      {
        titel: "Warum ist x² nicht direkt umkehrbar?",
        text:
          "Die Funktion f(x) = x² ist auf ganz ℝ nicht eindeutig umkehrbar, weil zum Beispiel f(2) = 4 und f(-2) = 4 gilt. Ein y-Wert gehört also zu zwei verschiedenen x-Werten."
      },
      {
        titel: "Einschränkung des Definitionsbereichs",
        text:
          "Man kann eine nicht eindeutig umkehrbare Funktion oft umkehrbar machen, indem man den Definitionsbereich einschränkt. Bei f(x) = x² nimmt man zum Beispiel nur x ≥ 0 oder nur x ≤ 0."
      },
      {
        titel: "Exponentialfunktion und Logarithmusfunktion",
        text:
          "Exponentialfunktion und Logarithmusfunktion sind Umkehrfunktionen voneinander. Wenn f(x) = aˣ gilt, dann ist die Umkehrfunktion f⁻¹(x) = logₐ(x)."
      },
      {
        titel: "Definitionsmenge bei Exponentialfunktionen",
        text:
          "Eine Exponentialfunktion f(x) = aˣ mit a > 0 und a ≠ 1 ist für alle reellen x definiert. Ihre Werte sind aber immer positiv."
      },
      {
        titel: "Definitionsmenge bei Logarithmusfunktionen",
        text:
          "Eine Logarithmusfunktion f(x) = logₐ(x) ist nur für x > 0 definiert. Ihre Werte können aber alle reellen Zahlen sein."
      }
    ],
    methoden: [
      {
        titel: "Methode: Umkehrfunktion algebraisch bestimmen",
        schritte: [
          "1. Schreibe die Funktion als y = f(x).",
          "2. Vertausche x und y.",
          "3. Löse die neue Gleichung nach y auf.",
          "4. Schreibe das Ergebnis als f⁻¹(x).",
          "5. Bestimme oder beachte Definitionsmenge und Wertemenge.",
          "6. Prüfe bei Bedarf durch Einsetzen oder durch Verkettung."
        ]
      },
      {
        titel: "Methode: Umkehrbarkeit prüfen",
        schritte: [
          "1. Überlege, ob jeder y-Wert nur einmal vorkommt.",
          "2. Prüfe grafisch, ob jede waagrechte Linie den Graphen höchstens einmal schneidet.",
          "3. Prüfe rechnerisch, ob aus f(x₁) = f(x₂) zwingend x₁ = x₂ folgt.",
          "4. Wenn ein y-Wert mehrfach vorkommt, ist die Funktion nicht eindeutig umkehrbar.",
          "5. Überlege dann, ob der Definitionsbereich eingeschränkt werden kann."
        ]
      },
      {
        titel: "Methode: Umkehrfunktion geometrisch zeichnen",
        schritte: [
          "1. Zeichne den Graphen der ursprünglichen Funktion.",
          "2. Zeichne die Gerade y = x als Spiegelachse.",
          "3. Spiegle wichtige Punkte des Graphen an dieser Geraden.",
          "4. Aus einem Punkt (a | b) wird der Punkt (b | a).",
          "5. Verbinde die gespiegelten Punkte passend zum neuen Graphen."
        ]
      },
      {
        titel: "Methode: Definitionsmenge und Wertemenge vertauschen",
        schritte: [
          "1. Bestimme die Definitionsmenge der ursprünglichen Funktion.",
          "2. Bestimme die Wertemenge der ursprünglichen Funktion.",
          "3. Die Wertemenge der ursprünglichen Funktion wird zur Definitionsmenge der Umkehrfunktion.",
          "4. Die Definitionsmenge der ursprünglichen Funktion wird zur Wertemenge der Umkehrfunktion.",
          "5. Schreibe beide Mengen sauber auf."
        ]
      },
      {
        titel: "Methode: Umkehrfunktion einer linearen Funktion",
        schritte: [
          "1. Schreibe die Funktion als y = mx + q.",
          "2. Vertausche x und y.",
          "3. Löse nach y auf.",
          "4. Achte darauf, dass m nicht 0 sein darf.",
          "5. Gib die Umkehrfunktion an."
        ]
      },
      {
        titel: "Methode: Exponentialfunktion umkehren",
        schritte: [
          "1. Schreibe die Funktion als y = aˣ.",
          "2. Vertausche x und y.",
          "3. Du erhältst x = aʸ.",
          "4. Löse mit dem Logarithmus nach y auf.",
          "5. Es ergibt sich y = logₐ(x).",
          "6. Beachte: Die Umkehrfunktion ist nur für x > 0 definiert."
        ]
      }
    ],
    merksaetze: [
      "Eine Umkehrfunktion macht die ursprüngliche Funktion rückgängig.",
      "f⁻¹ bedeutet inverse Funktion, nicht Kehrwert.",
      "Bei der Umkehrfunktion werden x und y vertauscht.",
      "Grafisch ist die Umkehrfunktion die Spiegelung an y = x.",
      "Aus dem Punkt (a | b) wird bei der Umkehrfunktion der Punkt (b | a).",
      "Definitionsmenge und Wertemenge werden bei der Umkehrfunktion vertauscht.",
      "Eine Funktion ist nur eindeutig umkehrbar, wenn jeder y-Wert höchstens einmal vorkommt.",
      "x² ist auf ganz ℝ nicht eindeutig umkehrbar.",
      "aˣ und logₐ(x) sind Umkehrfunktionen voneinander.",
      "Der Logarithmus ist nur für positive Argumente definiert."
    ],
    typischeFehler: [
      {
        fehler: "Man verwechselt f⁻¹(x) mit 1/f(x).",
        korrektur:
          "f⁻¹(x) bedeutet Umkehrfunktion. Es ist nicht der Kehrwert der Funktion."
      },
      {
        fehler: "Man vertauscht x und y, löst aber danach nicht nach y auf.",
        korrektur:
          "Nach dem Vertauschen muss die Gleichung nach y aufgelöst werden. Erst dann hat man die Umkehrfunktion."
      },
      {
        fehler: "Man vergisst, Definitionsmenge und Wertemenge zu vertauschen.",
        korrektur:
          "Die Wertemenge von f wird zur Definitionsmenge von f⁻¹. Das ist besonders bei Logarithmen und Wurzeln wichtig."
      },
      {
        fehler: "Man behauptet, f(x) = x² sei auf ganz ℝ einfach umkehrbar.",
        korrektur:
          "Das stimmt nicht, weil positive und negative x-Werte denselben Funktionswert ergeben können. Man muss den Definitionsbereich einschränken."
      },
      {
        fehler: "Man spiegelt den Graphen an der x-Achse statt an y = x.",
        korrektur:
          "Die Umkehrfunktion entsteht durch Spiegelung an der Geraden y = x, nicht an der x-Achse."
      },
      {
        fehler: "Man vergisst beim Logarithmus die Bedingung x > 0.",
        korrektur:
          "Da der Logarithmus die Umkehrfunktion einer Exponentialfunktion ist, ist sein Definitionsbereich nur x > 0."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Einfache lineare Umkehrfunktion",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme die Umkehrfunktion von f(x) = 2x + 3.",
        loesung: [
          "Schreibe zuerst y = 2x + 3.",
          "Vertausche x und y.",
          "Dann erhält man x = 2y + 3.",
          "Löse nach y auf.",
          "x - 3 = 2y.",
          "y = (x - 3) / 2.",
          "Also ist f⁻¹(x) = (x - 3) / 2."
        ]
      },
      {
        titel: "Aufgabe 2: Punkt spiegeln",
        schwierigkeit: "einfach",
        aufgabe:
          "Der Punkt P(2 | 7) liegt auf dem Graphen von f. Welcher Punkt liegt auf dem Graphen von f⁻¹?",
        loesung: [
          "Bei der Umkehrfunktion werden x- und y-Koordinate vertauscht.",
          "Aus dem Punkt (2 | 7) wird der Punkt (7 | 2).",
          "Also liegt P'(7 | 2) auf dem Graphen von f⁻¹."
        ]
      },
      {
        titel: "Aufgabe 3: Definitionsmenge und Wertemenge vertauschen",
        schwierigkeit: "einfach",
        aufgabe:
          "Eine Funktion f hat die Definitionsmenge D = [0, ∞) und die Wertemenge W = [-3, ∞). Gib Definitionsmenge und Wertemenge von f⁻¹ an.",
        loesung: [
          "Bei der Umkehrfunktion werden Definitionsmenge und Wertemenge vertauscht.",
          "Die Wertemenge von f wird zur Definitionsmenge von f⁻¹.",
          "Also ist D von f⁻¹ gleich [-3, ∞).",
          "Die Definitionsmenge von f wird zur Wertemenge von f⁻¹.",
          "Also ist W von f⁻¹ gleich [0, ∞)."
        ]
      },
      {
        titel: "Aufgabe 4: Umkehrfunktion mit Bruch",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Umkehrfunktion von f(x) = (x - 4) / 3.",
        loesung: [
          "Schreibe y = (x - 4) / 3.",
          "Vertausche x und y.",
          "Dann gilt x = (y - 4) / 3.",
          "Multipliziere mit 3.",
          "3x = y - 4.",
          "Addiere 4.",
          "y = 3x + 4.",
          "Also ist f⁻¹(x) = 3x + 4."
        ]
      },
      {
        titel: "Aufgabe 5: Umkehrbarkeit von x²",
        schwierigkeit: "mittel",
        aufgabe:
          "Erkläre, warum f(x) = x² auf ganz ℝ keine eindeutige Umkehrfunktion besitzt.",
        loesung: [
          "Eine Funktion ist eindeutig umkehrbar, wenn jeder y-Wert höchstens einmal vorkommt.",
          "Bei f(x) = x² gilt aber f(2) = 4.",
          "Gleichzeitig gilt auch f(-2) = 4.",
          "Der Funktionswert 4 gehört also zu zwei verschiedenen x-Werten.",
          "Deshalb kann man nicht eindeutig zurückgehen.",
          "Also besitzt f(x) = x² auf ganz ℝ keine eindeutige Umkehrfunktion."
        ]
      },
      {
        titel: "Aufgabe 6: Eingeschränkte quadratische Funktion umkehren",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Umkehrfunktion von f(x) = x² für x ≥ 0.",
        loesung: [
          "Schreibe y = x².",
          "Vertausche x und y.",
          "Dann gilt x = y².",
          "Löse nach y auf.",
          "Eigentlich ergibt sich y = ±√x.",
          "Da die ursprüngliche Funktion aber auf x ≥ 0 eingeschränkt ist, nimmt man nur den positiven Ast.",
          "Also ist f⁻¹(x) = √x.",
          "Die Definitionsmenge der Umkehrfunktion ist x ≥ 0."
        ]
      },
      {
        titel: "Aufgabe 7: Exponentialfunktion umkehren",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Umkehrfunktion von f(x) = 2ˣ.",
        loesung: [
          "Schreibe y = 2ˣ.",
          "Vertausche x und y.",
          "Dann gilt x = 2ʸ.",
          "Löse mit dem Logarithmus zur Basis 2 nach y auf.",
          "Daraus folgt y = log₂(x).",
          "Also ist f⁻¹(x) = log₂(x).",
          "Die Umkehrfunktion ist nur für x > 0 definiert."
        ]
      },
      {
        titel: "Aufgabe 8: Logarithmusfunktion umkehren",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Umkehrfunktion von f(x) = log₃(x).",
        loesung: [
          "Schreibe y = log₃(x).",
          "Vertausche x und y.",
          "Dann gilt x = log₃(y).",
          "Schreibe die Logarithmusgleichung als Potenzgleichung.",
          "Aus x = log₃(y) folgt 3ˣ = y.",
          "Also ist f⁻¹(x) = 3ˣ."
        ]
      },
      {
        titel: "Aufgabe 9: Umkehrfunktion mit Verschiebung",
        schwierigkeit: "schwer",
        aufgabe:
          "Bestimme die Umkehrfunktion von f(x) = 3ˣ + 5.",
        loesung: [
          "Schreibe y = 3ˣ + 5.",
          "Vertausche x und y.",
          "Dann gilt x = 3ʸ + 5.",
          "Subtrahiere 5.",
          "x - 5 = 3ʸ.",
          "Löse mit dem Logarithmus zur Basis 3 nach y auf.",
          "y = log₃(x - 5).",
          "Also ist f⁻¹(x) = log₃(x - 5).",
          "Der Definitionsbereich der Umkehrfunktion ist x > 5."
        ]
      },
      {
        titel: "Aufgabe 10: Umkehrfunktion kontrollieren",
        schwierigkeit: "schwer",
        aufgabe:
          "Gegeben ist f(x) = 4x - 1 und f⁻¹(x) = (x + 1) / 4. Kontrolliere durch Verkettung, dass dies stimmt.",
        loesung: [
          "Man prüft, ob f(f⁻¹(x)) = x gilt.",
          "Setze f⁻¹(x) in f ein.",
          "f(f⁻¹(x)) = 4 · ((x + 1) / 4) - 1.",
          "Das ergibt x + 1 - 1.",
          "Also f(f⁻¹(x)) = x.",
          "Man kann auch f⁻¹(f(x)) prüfen.",
          "f⁻¹(f(x)) = ((4x - 1) + 1) / 4.",
          "Das ergibt 4x / 4 = x.",
          "Damit ist die Umkehrfunktion korrekt."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine Umkehrfunktion?",
        antwort:
          "Eine Umkehrfunktion macht die ursprüngliche Funktion rückgängig. Wenn f den Wert x auf y abbildet, dann bildet f⁻¹ den Wert y wieder auf x ab."
      },
      {
        frage: "Was bedeutet f⁻¹?",
        antwort:
          "f⁻¹ bedeutet Umkehrfunktion. Es bedeutet nicht 1 durch f."
      },
      {
        frage: "Wie bestimmt man eine Umkehrfunktion algebraisch?",
        antwort:
          "Man schreibt y = f(x), vertauscht x und y und löst danach wieder nach y auf."
      },
      {
        frage: "Wie sieht die Umkehrfunktion geometrisch aus?",
        antwort:
          "Der Graph der Umkehrfunktion ist die Spiegelung des ursprünglichen Graphen an der Geraden y = x."
      },
      {
        frage: "Was passiert mit Definitionsmenge und Wertemenge?",
        antwort:
          "Sie werden vertauscht. Die Wertemenge von f wird zur Definitionsmenge von f⁻¹ und die Definitionsmenge von f wird zur Wertemenge von f⁻¹."
      },
      {
        frage: "Warum ist x² auf ganz ℝ nicht umkehrbar?",
        antwort:
          "Weil verschiedene x-Werte denselben y-Wert ergeben können, zum Beispiel 2 und -2. Deshalb ist das Zurückgehen nicht eindeutig."
      },
      {
        frage: "Welche Funktion ist die Umkehrfunktion von aˣ?",
        antwort:
          "Die Umkehrfunktion von aˣ ist logₐ(x), sofern a positiv und nicht 1 ist."
      },
      {
        frage: "Welche Bedingung gilt beim Logarithmus?",
        antwort:
          "Das Argument des Logarithmus muss positiv sein. Deshalb ist logₐ(x) nur für x > 0 definiert."
      }
    ],
    nachtVorTest: [
      "Kannst du erklären, was eine Umkehrfunktion macht?",
      "Weisst du, dass f⁻¹ nicht 1/f bedeutet?",
      "Kannst du x und y vertauschen und danach nach y auflösen?",
      "Weisst du, dass der Graph an y = x gespiegelt wird?",
      "Kannst du aus (a | b) den gespiegelten Punkt (b | a) bilden?",
      "Weisst du, dass Definitionsmenge und Wertemenge vertauscht werden?",
      "Kannst du erklären, warum x² auf ganz ℝ nicht eindeutig umkehrbar ist?",
      "Kannst du eine Funktion durch Einschränkung des Definitionsbereichs umkehrbar machen?",
      "Kennst du den Zusammenhang zwischen aˣ und logₐ(x)?",
      "Prüfst du beim Logarithmus immer, ob das Argument positiv ist?"
    ]
  },
     {
    id: "differentialrechnung",
    nummer: "5",
    titel: "Differentialrechnung",
    kurzbeschreibung:
      "Differenzenquotient, Differentialquotient, Steigung der Tangente, Ableitungsbegriff und zentrale Ableitungsregeln wie Faktorregel, Summenregel, Produktregel und Kettenregel.",
    lernziele: [
      "Du kannst den Differenzenquotienten erklären und berechnen.",
      "Du verstehst den Differentialquotienten als Grenzwert des Differenzenquotienten.",
      "Du kannst die Ableitung als momentane Änderungsrate interpretieren.",
      "Du kannst die Ableitung als Tangentensteigung deuten.",
      "Du kannst einfache Funktionen mit Ableitungsregeln ableiten.",
      "Du beherrschst Faktorregel, Summenregel und Potenzregel.",
      "Du kannst die Produktregel anwenden.",
      "Du kannst die Kettenregel anwenden.",
      "Du kannst Tangentengleichungen mithilfe der Ableitung aufstellen.",
      "Du erkennst typische Fehler beim Ableiten zusammengesetzter Funktionen."
    ],
    theorie: [
      {
        titel: "Was ist Differentialrechnung?",
        text:
          "Die Differentialrechnung untersucht, wie sich eine Funktion an einer bestimmten Stelle verändert. Zentral ist die Frage: Wie steil ist der Graph genau an einem Punkt?"
      },
      {
        titel: "Mittlere Änderungsrate",
        text:
          "Die mittlere Änderungsrate beschreibt die durchschnittliche Veränderung einer Funktion zwischen zwei x-Werten. Grafisch entspricht sie der Steigung einer Sekante."
      },
      {
        titel: "Differenzenquotient",
        text:
          "Der Differenzenquotient ist die Steigung zwischen zwei Punkten eines Graphen. Er lautet (f(x₂) - f(x₁)) / (x₂ - x₁)."
      },
      {
        titel: "Sekante",
        text:
          "Eine Sekante ist eine Gerade, die den Graphen in zwei Punkten schneidet. Ihre Steigung beschreibt die durchschnittliche Veränderung zwischen diesen beiden Punkten."
      },
      {
        titel: "Momentane Änderungsrate",
        text:
          "Die momentane Änderungsrate beschreibt die Veränderung genau an einer Stelle. Sie entsteht, wenn man die zwei Punkte des Differenzenquotienten immer näher zusammenrücken lässt."
      },
      {
        titel: "Differentialquotient",
        text:
          "Der Differentialquotient ist der Grenzwert des Differenzenquotienten. Er liefert die Ableitung an einer bestimmten Stelle."
      },
      {
        titel: "Tangente",
        text:
          "Eine Tangente berührt den Graphen lokal an einer Stelle. Ihre Steigung ist die Ableitung f'(x₀) an dieser Stelle."
      },
      {
        titel: "Ableitungsfunktion",
        text:
          "Die Ableitungsfunktion f'(x) ordnet jedem x-Wert die Steigung des Graphen an dieser Stelle zu. Sie beschreibt also, wie sich die Steigung entlang des Graphen verändert."
      },
      {
        titel: "Potenzregel",
        text:
          "Für Potenzfunktionen gilt: Die Ableitung von xⁿ ist n · xⁿ⁻¹. Der Exponent wird nach vorne gezogen und danach um 1 verringert."
      },
      {
        titel: "Faktorregel",
        text:
          "Ein konstanter Faktor bleibt beim Ableiten erhalten. Aus c · f(x) wird c · f'(x)."
      },
      {
        titel: "Summenregel",
        text:
          "Eine Summe wird gliedweise abgeleitet. Aus f(x) + g(x) wird f'(x) + g'(x)."
      },
      {
        titel: "Produktregel",
        text:
          "Bei einem Produkt zweier Funktionen darf man nicht einfach beide Funktionen einzeln ableiten und multiplizieren. Es gilt: (u · v)' = u' · v + u · v'."
      },
      {
        titel: "Kettenregel",
        text:
          "Die Kettenregel verwendet man bei verschachtelten Funktionen. Man leitet zuerst die äussere Funktion ab und multipliziert danach mit der Ableitung der inneren Funktion."
      }
    ],
    methoden: [
      {
        titel: "Methode: Differenzenquotient berechnen",
        schritte: [
          "1. Bestimme die beiden x-Werte x₁ und x₂.",
          "2. Berechne die zugehörigen Funktionswerte f(x₁) und f(x₂).",
          "3. Setze alles in (f(x₂) - f(x₁)) / (x₂ - x₁) ein.",
          "4. Vereinfache den Bruch.",
          "5. Interpretiere das Ergebnis als mittlere Änderungsrate oder Sekantensteigung."
        ]
      },
      {
        titel: "Methode: Differentialquotient verstehen",
        schritte: [
          "1. Starte mit dem Differenzenquotienten.",
          "2. Schreibe den zweiten x-Wert als x₀ + h.",
          "3. Der Quotient lautet dann (f(x₀ + h) - f(x₀)) / h.",
          "4. Lasse h gegen 0 gehen.",
          "5. Der Grenzwert ist die momentane Steigung bei x₀.",
          "6. Dieser Grenzwert heisst Differentialquotient."
        ]
      },
      {
        titel: "Methode: Funktion mit Potenzregel ableiten",
        schritte: [
          "1. Erkenne Terme der Form xⁿ.",
          "2. Ziehe den Exponenten n als Faktor nach vorne.",
          "3. Verringere den Exponenten um 1.",
          "4. Leite jeden Term einzeln ab.",
          "5. Konstanten ohne x fallen beim Ableiten weg."
        ]
      },
      {
        titel: "Methode: Faktor- und Summenregel anwenden",
        schritte: [
          "1. Zerlege die Funktion in einzelne Summanden.",
          "2. Behalte konstante Faktoren vor den Termen bei.",
          "3. Leite jeden Summanden einzeln ab.",
          "4. Fasse gleichartige Terme zusammen, falls möglich.",
          "5. Kontrolliere besonders Vorzeichen und Exponenten."
        ]
      },
      {
        titel: "Methode: Produktregel anwenden",
        schritte: [
          "1. Erkenne, dass die Funktion als Produkt u(x) · v(x) aufgebaut ist.",
          "2. Bestimme u(x) und v(x).",
          "3. Berechne u'(x) und v'(x).",
          "4. Setze in u' · v + u · v' ein.",
          "5. Vereinfache das Ergebnis, falls verlangt."
        ]
      },
      {
        titel: "Methode: Kettenregel anwenden",
        schritte: [
          "1. Erkenne die äussere Funktion und die innere Funktion.",
          "2. Leite die äussere Funktion ab und lasse die innere Funktion zunächst stehen.",
          "3. Multipliziere mit der Ableitung der inneren Funktion.",
          "4. Vereinfache das Ergebnis.",
          "5. Prüfe, ob nochmals eine Kettenregel nötig ist."
        ]
      },
      {
        titel: "Methode: Tangentengleichung aufstellen",
        schritte: [
          "1. Bestimme die Stelle x₀.",
          "2. Berechne den Punkt P(x₀ | f(x₀)).",
          "3. Berechne die Ableitung f'(x).",
          "4. Setze x₀ in f'(x) ein, um die Steigung m zu erhalten.",
          "5. Setze in y = m(x - x₀) + f(x₀) ein.",
          "6. Vereinfache die Gleichung."
        ]
      }
    ],
    merksaetze: [
      "Der Differenzenquotient beschreibt die Steigung einer Sekante.",
      "Der Differentialquotient ist der Grenzwert des Differenzenquotienten.",
      "Die Ableitung beschreibt die momentane Änderungsrate.",
      "Die Ableitung an einer Stelle ist die Tangentensteigung.",
      "Die Ableitung von xⁿ ist n · xⁿ⁻¹.",
      "Konstanten fallen beim Ableiten weg.",
      "Konstante Faktoren bleiben beim Ableiten erhalten.",
      "Summen werden gliedweise abgeleitet.",
      "Bei Produkten braucht man die Produktregel.",
      "Bei verschachtelten Funktionen braucht man die Kettenregel.",
      "Für Tangenten braucht man Punkt und Steigung."
    ],
    typischeFehler: [
      {
        fehler: "Man verwechselt Differenzenquotient und Differentialquotient.",
        korrektur:
          "Der Differenzenquotient beschreibt eine durchschnittliche Steigung zwischen zwei Punkten. Der Differentialquotient beschreibt die momentane Steigung an einem Punkt."
      },
      {
        fehler: "Man vergisst beim Ableiten, den Exponenten um 1 zu verringern.",
        korrektur:
          "Bei der Potenzregel wird der Exponent nach vorne gezogen und danach um 1 kleiner gemacht. Aus x⁵ wird 5x⁴."
      },
      {
        fehler: "Man leitet eine Konstante nicht zu 0 ab.",
        korrektur:
          "Eine reine Zahl hat keine Veränderung. Deshalb ist die Ableitung einer Konstante 0."
      },
      {
        fehler: "Man multipliziert bei Produkten einfach die einzelnen Ableitungen.",
        korrektur:
          "Das ist falsch. Bei Produkten gilt nicht (u · v)' = u' · v'. Richtig ist u' · v + u · v'."
      },
      {
        fehler: "Man vergisst bei der Kettenregel die innere Ableitung.",
        korrektur:
          "Bei verschachtelten Funktionen muss man immer mit der Ableitung der inneren Funktion multiplizieren."
      },
      {
        fehler: "Man setzt bei der Tangente nur die Steigung ein und vergisst den Punkt.",
        korrektur:
          "Eine Tangente braucht sowohl die Steigung als auch den Berührpunkt. Deshalb verwendet man y = m(x - x₀) + f(x₀)."
      },
      {
        fehler: "Man verwechselt f(x₀) mit f'(x₀).",
        korrektur:
          "f(x₀) ist der y-Wert des Punktes. f'(x₀) ist die Steigung an dieser Stelle."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Differenzenquotient berechnen",
        schwierigkeit: "einfach",
        aufgabe:
          "Gegeben ist f(x) = x². Berechne die mittlere Änderungsrate im Intervall von x = 1 bis x = 4.",
        loesung: [
          "Die mittlere Änderungsrate berechnet man mit dem Differenzenquotienten.",
          "Die Formel lautet (f(4) - f(1)) / (4 - 1).",
          "f(4) = 4² = 16.",
          "f(1) = 1² = 1.",
          "Also ergibt sich (16 - 1) / 3.",
          "Das ist 15 / 3 = 5.",
          "Die mittlere Änderungsrate beträgt 5."
        ]
      },
      {
        titel: "Aufgabe 2: Ableitung mit Potenzregel",
        schwierigkeit: "einfach",
        aufgabe:
          "Leite f(x) = x⁵ ab.",
        loesung: [
          "Verwende die Potenzregel.",
          "Die Ableitung von xⁿ ist n · xⁿ⁻¹.",
          "Hier ist n = 5.",
          "Also ist f'(x) = 5x⁴."
        ]
      },
      {
        titel: "Aufgabe 3: Faktor- und Summenregel",
        schwierigkeit: "einfach",
        aufgabe:
          "Leite f(x) = 3x⁴ - 2x² + 7 ab.",
        loesung: [
          "Leite jeden Summanden einzeln ab.",
          "Die Ableitung von 3x⁴ ist 12x³.",
          "Die Ableitung von -2x² ist -4x.",
          "Die Ableitung der Konstanten 7 ist 0.",
          "Also ist f'(x) = 12x³ - 4x."
        ]
      },
      {
        titel: "Aufgabe 4: Steigung an einer Stelle",
        schwierigkeit: "einfach",
        aufgabe:
          "Gegeben ist f(x) = x³ - x. Berechne die Steigung bei x = 2.",
        loesung: [
          "Die Steigung erhält man mit der ersten Ableitung.",
          "f'(x) = 3x² - 1.",
          "Setze x = 2 ein.",
          "f'(2) = 3 · 2² - 1.",
          "f'(2) = 12 - 1 = 11.",
          "Die Steigung bei x = 2 ist 11."
        ]
      },
      {
        titel: "Aufgabe 5: Produktregel",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = x² · (x + 3) ab, ohne zuerst auszumultiplizieren.",
        loesung: [
          "Die Funktion ist ein Produkt.",
          "Setze u(x) = x² und v(x) = x + 3.",
          "Dann ist u'(x) = 2x und v'(x) = 1.",
          "Die Produktregel lautet f'(x) = u' · v + u · v'.",
          "Also ist f'(x) = 2x(x + 3) + x² · 1.",
          "Vereinfacht ergibt das 2x² + 6x + x².",
          "Also f'(x) = 3x² + 6x."
        ]
      },
      {
        titel: "Aufgabe 6: Kettenregel",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = (2x + 1)⁴ ab.",
        loesung: [
          "Die äussere Funktion ist eine vierte Potenz.",
          "Die innere Funktion ist 2x + 1.",
          "Leite zuerst die äussere Funktion ab.",
          "Das ergibt 4(2x + 1)³.",
          "Nun multipliziert man mit der inneren Ableitung.",
          "Die Ableitung von 2x + 1 ist 2.",
          "Also ist f'(x) = 4(2x + 1)³ · 2.",
          "Damit ist f'(x) = 8(2x + 1)³."
        ]
      },
      {
        titel: "Aufgabe 7: Produktregel und Kettenregel kombiniert",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = x · (x² + 4)³ ab.",
        loesung: [
          "Die Funktion ist ein Produkt.",
          "Setze u(x) = x und v(x) = (x² + 4)³.",
          "Dann ist u'(x) = 1.",
          "Für v'(x) braucht man die Kettenregel.",
          "Die äussere Ableitung ergibt 3(x² + 4)².",
          "Die innere Ableitung von x² + 4 ist 2x.",
          "Also ist v'(x) = 3(x² + 4)² · 2x.",
          "Damit ist v'(x) = 6x(x² + 4)².",
          "Nun Produktregel: f'(x) = u' · v + u · v'.",
          "Also f'(x) = 1 · (x² + 4)³ + x · 6x(x² + 4)².",
          "Das ergibt f'(x) = (x² + 4)³ + 6x²(x² + 4)²."
        ]
      },
      {
        titel: "Aufgabe 8: Tangentengleichung",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme die Tangente an f(x) = x² + 1 bei x₀ = 2.",
        loesung: [
          "Zuerst berechnet man den Berührpunkt.",
          "f(2) = 2² + 1 = 5.",
          "Der Punkt ist P(2 | 5).",
          "Nun berechnet man die Ableitung.",
          "f'(x) = 2x.",
          "Die Steigung bei x₀ = 2 ist f'(2) = 4.",
          "Setze in y = m(x - x₀) + f(x₀) ein.",
          "y = 4(x - 2) + 5.",
          "Vereinfacht ergibt das y = 4x - 3."
        ]
      },
      {
        titel: "Aufgabe 9: Differentialquotient ausrechnen",
        schwierigkeit: "schwer",
        aufgabe:
          "Zeige mit dem Differentialquotienten, dass die Ableitung von f(x) = x² an der Stelle x₀ gleich 2x₀ ist.",
        loesung: [
          "Der Differentialquotient lautet lim h→0 von (f(x₀ + h) - f(x₀)) / h.",
          "Setze f(x) = x² ein.",
          "Dann erhält man ((x₀ + h)² - x₀²) / h.",
          "Multipliziere aus.",
          "(x₀ + h)² = x₀² + 2x₀h + h².",
          "Damit steht im Zähler x₀² + 2x₀h + h² - x₀².",
          "Das vereinfacht sich zu 2x₀h + h².",
          "Der Quotient ist also (2x₀h + h²) / h.",
          "Klammere h aus.",
          "Das ergibt h(2x₀ + h) / h.",
          "Kürze h.",
          "Es bleibt 2x₀ + h.",
          "Nun lässt man h gegen 0 gehen.",
          "Der Grenzwert ist 2x₀.",
          "Also ist die Ableitung von x² gleich 2x."
        ]
      },
      {
        titel: "Aufgabe 10: Ableitungsregeln erkennen",
        schwierigkeit: "schwer",
        aufgabe:
          "Leite f(x) = (x² + 1)(3x - 2)² ab und benenne die verwendeten Regeln.",
        loesung: [
          "Die Funktion ist ein Produkt aus zwei Faktoren.",
          "Man braucht also die Produktregel.",
          "Setze u(x) = x² + 1 und v(x) = (3x - 2)².",
          "Dann ist u'(x) = 2x.",
          "Für v'(x) braucht man die Kettenregel.",
          "Die äussere Ableitung ergibt 2(3x - 2).",
          "Die innere Ableitung von 3x - 2 ist 3.",
          "Also ist v'(x) = 6(3x - 2).",
          "Nun Produktregel einsetzen.",
          "f'(x) = u' · v + u · v'.",
          "Also f'(x) = 2x(3x - 2)² + (x² + 1) · 6(3x - 2).",
          "Verwendet wurden Produktregel, Kettenregel, Potenzregel und Summenregel."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist der Differenzenquotient?",
        antwort:
          "Der Differenzenquotient beschreibt die mittlere Änderungsrate einer Funktion zwischen zwei Stellen. Grafisch ist er die Steigung einer Sekante."
      },
      {
        frage: "Was ist der Differentialquotient?",
        antwort:
          "Der Differentialquotient ist der Grenzwert des Differenzenquotienten, wenn der Abstand der beiden Stellen gegen 0 geht. Er beschreibt die momentane Steigung."
      },
      {
        frage: "Was bedeutet die Ableitung geometrisch?",
        antwort:
          "Die Ableitung gibt die Steigung der Tangente an den Graphen an einer bestimmten Stelle an."
      },
      {
        frage: "Was bedeutet die Ableitung inhaltlich?",
        antwort:
          "Sie beschreibt die momentane Änderungsrate, also wie schnell sich ein Funktionswert genau an einer Stelle verändert."
      },
      {
        frage: "Wie lautet die Potenzregel?",
        antwort:
          "Die Ableitung von xⁿ ist n · xⁿ⁻¹. Der Exponent wird nach vorne gezogen und um 1 verringert."
      },
      {
        frage: "Wann braucht man die Produktregel?",
        antwort:
          "Man braucht die Produktregel, wenn zwei von x abhängige Funktionen miteinander multipliziert werden."
      },
      {
        frage: "Wann braucht man die Kettenregel?",
        antwort:
          "Man braucht die Kettenregel bei verschachtelten Funktionen, also wenn eine Funktion in eine andere Funktion eingesetzt ist."
      },
      {
        frage: "Wie stellt man eine Tangentengleichung auf?",
        antwort:
          "Man berechnet den Punkt P(x₀ | f(x₀)) und die Steigung m = f'(x₀). Danach setzt man in y = m(x - x₀) + f(x₀) ein."
      }
    ],
    nachtVorTest: [
      "Kannst du den Differenzenquotienten als Sekantensteigung erklären?",
      "Kannst du den Differentialquotienten als Grenzwert erklären?",
      "Weisst du, dass die Ableitung die Tangentensteigung ist?",
      "Kannst du die Potenzregel sicher anwenden?",
      "Weisst du, dass Konstanten beim Ableiten 0 werden?",
      "Kannst du Faktorregel und Summenregel anwenden?",
      "Erkennst du, wann die Produktregel nötig ist?",
      "Erkennst du, wann die Kettenregel nötig ist?",
      "Vergisst du bei der Kettenregel nicht die innere Ableitung?",
      "Kannst du eine Tangentengleichung mit Punkt und Steigung aufstellen?"
    ]
  },
     {
    id: "ableitung-spezieller-funktionen",
    nummer: "6",
    titel: "Ableitung spezieller Funktionen",
    kurzbeschreibung:
      "Ableitung von Exponentialfunktionen, Logarithmusfunktionen, Wurzelfunktionen, Potenzfunktionen mit rationalen Exponenten sowie trigonometrischen Funktionen.",
    lernziele: [
      "Du kannst Exponentialfunktionen ableiten.",
      "Du kennst die besondere Ableitung von eˣ.",
      "Du kannst Funktionen der Form aˣ ableiten.",
      "Du kannst Logarithmusfunktionen ableiten.",
      "Du kannst Wurzelfunktionen durch Potenzschreibweise ableiten.",
      "Du kannst Potenzfunktionen mit rationalen Exponenten ableiten.",
      "Du kannst sin(x), cos(x) und tan(x) ableiten.",
      "Du kannst bei speziellen Funktionen die Kettenregel anwenden.",
      "Du erkennst Definitionsbedingungen bei Wurzel- und Logarithmusfunktionen.",
      "Du erkennst typische Vorzeichenfehler bei trigonometrischen Ableitungen."
    ],
    theorie: [
      {
        titel: "Warum spezielle Ableitungen?",
        text:
          "Nicht alle Funktionen bestehen nur aus einfachen Potenzen wie x² oder x³. In vielen Aufgaben kommen Exponentialfunktionen, Logarithmen, Wurzeln und trigonometrische Funktionen vor. Für diese braucht man eigene Ableitungsregeln."
      },
      {
        titel: "Ableitung von eˣ",
        text:
          "Die Funktion eˣ ist besonders, weil ihre Ableitung wieder eˣ ist. Das bedeutet: f(x) = eˣ hat die Ableitung f'(x) = eˣ."
      },
      {
        titel: "Ableitung von e hoch u(x)",
        text:
          "Wenn im Exponenten nicht nur x steht, sondern ein Ausdruck u(x), braucht man die Kettenregel. Die Ableitung von e hoch u(x) ist e hoch u(x) mal u'(x)."
      },
      {
        titel: "Ableitung von aˣ",
        text:
          "Für eine Exponentialfunktion mit Basis a gilt: Die Ableitung von aˣ ist aˣ · ln(a), wobei a positiv und nicht 1 sein darf."
      },
      {
        titel: "Ableitung von ln(x)",
        text:
          "Die natürliche Logarithmusfunktion ln(x) hat die Ableitung 1/x. Dabei gilt x > 0."
      },
      {
        titel: "Ableitung von ln(u(x))",
        text:
          "Bei ln(u(x)) braucht man die Kettenregel. Die Ableitung ist u'(x) / u(x), solange u(x) positiv ist."
      },
      {
        titel: "Ableitung von logₐ(x)",
        text:
          "Die Ableitung von logₐ(x) ist 1 / (x · ln(a)). Die Basis a muss positiv sein und darf nicht 1 sein."
      },
      {
        titel: "Wurzelfunktionen ableiten",
        text:
          "Wurzeln kann man meistens einfacher ableiten, indem man sie als Potenzen schreibt. Zum Beispiel ist √x gleich x hoch 1/2."
      },
      {
        titel: "Rationale Exponenten",
        text:
          "Auch bei rationalen Exponenten gilt die Potenzregel. Die Ableitung von x hoch r ist r · x hoch r - 1, sofern der Ausdruck im betrachteten Bereich definiert ist."
      },
      {
        titel: "Ableitung von sin(x)",
        text:
          "Die Ableitung von sin(x) ist cos(x). Das bedeutet: Wenn f(x) = sin(x), dann ist f'(x) = cos(x)."
      },
      {
        titel: "Ableitung von cos(x)",
        text:
          "Die Ableitung von cos(x) ist -sin(x). Das Minuszeichen ist eine häufige Fehlerquelle."
      },
      {
        titel: "Ableitung von tan(x)",
        text:
          "Die Ableitung von tan(x) ist 1 / cos²(x). Diese Regel gilt nur dort, wo tan(x) definiert ist."
      }
    ],
    methoden: [
      {
        titel: "Methode: Exponentialfunktion e hoch u(x) ableiten",
        schritte: [
          "1. Erkenne die Form e hoch u(x).",
          "2. Bestimme die innere Funktion u(x).",
          "3. Leite die innere Funktion ab.",
          "4. Schreibe e hoch u(x) wieder hin.",
          "5. Multipliziere mit u'(x).",
          "6. Vereinfache das Ergebnis."
        ]
      },
      {
        titel: "Methode: Funktion a hoch x ableiten",
        schritte: [
          "1. Erkenne die Basis a.",
          "2. Prüfe, ob a positiv und nicht 1 ist.",
          "3. Verwende die Regel: Die Ableitung von aˣ ist aˣ · ln(a).",
          "4. Falls im Exponenten ein Ausdruck u(x) steht, verwende zusätzlich die Kettenregel.",
          "5. Vereinfache das Ergebnis."
        ]
      },
      {
        titel: "Methode: Logarithmusfunktion ableiten",
        schritte: [
          "1. Erkenne, ob es sich um ln(x), ln(u(x)) oder logₐ(x) handelt.",
          "2. Bei ln(x) ist die Ableitung 1/x.",
          "3. Bei ln(u(x)) ist die Ableitung u'(x) / u(x).",
          "4. Bei logₐ(x) ist die Ableitung 1 / (x · ln(a)).",
          "5. Beachte immer den Definitionsbereich."
        ]
      },
      {
        titel: "Methode: Wurzelfunktion ableiten",
        schritte: [
          "1. Schreibe die Wurzel als Potenz.",
          "2. Zum Beispiel wird √x zu x hoch 1/2.",
          "3. Wende die Potenzregel an.",
          "4. Ziehe den Exponenten nach vorne.",
          "5. Verringere den Exponenten um 1.",
          "6. Schreibe das Ergebnis bei Bedarf wieder als Wurzel."
        ]
      },
      {
        titel: "Methode: Trigonometrische Funktion ableiten",
        schritte: [
          "1. Erkenne, ob sin, cos oder tan vorkommt.",
          "2. Verwende die passende Grundregel.",
          "3. sin(x) wird zu cos(x).",
          "4. cos(x) wird zu -sin(x).",
          "5. tan(x) wird zu 1 / cos²(x).",
          "6. Falls in der Klammer mehr als x steht, verwende zusätzlich die Kettenregel."
        ]
      },
      {
        titel: "Methode: Spezielle Funktion mit Kettenregel ableiten",
        schritte: [
          "1. Erkenne die äussere spezielle Funktion.",
          "2. Bestimme die innere Funktion.",
          "3. Leite zuerst die äussere Funktion ab und lasse die innere Funktion stehen.",
          "4. Multipliziere mit der Ableitung der inneren Funktion.",
          "5. Kontrolliere Vorzeichen, Definitionsbereich und Klammern."
        ]
      }
    ],
    merksaetze: [
      "Die Ableitung von eˣ ist eˣ.",
      "Die Ableitung von e hoch u(x) ist e hoch u(x) mal u'(x).",
      "Die Ableitung von aˣ ist aˣ · ln(a).",
      "Die Ableitung von ln(x) ist 1/x.",
      "Die Ableitung von ln(u(x)) ist u'(x) / u(x).",
      "Die Ableitung von logₐ(x) ist 1 / (x · ln(a)).",
      "Wurzeln kann man als Potenzen schreiben.",
      "√x ist x hoch 1/2.",
      "Die Ableitung von sin(x) ist cos(x).",
      "Die Ableitung von cos(x) ist -sin(x).",
      "Die Ableitung von tan(x) ist 1 / cos²(x).",
      "Bei Klammern immer an die Kettenregel denken."
    ],
    typischeFehler: [
      {
        fehler: "Man leitet eˣ zu x · eˣ ab.",
        korrektur:
          "Das ist falsch. Die Ableitung von eˣ ist einfach eˣ."
      },
      {
        fehler: "Man vergisst bei e hoch 3x die innere Ableitung.",
        korrektur:
          "Bei e hoch 3x braucht man die Kettenregel. Die Ableitung ist 3e hoch 3x."
      },
      {
        fehler: "Man leitet 2ˣ zu x · 2ˣ⁻¹ ab.",
        korrektur:
          "Das wäre die Potenzregel, aber hier steht x im Exponenten. Richtig ist: Die Ableitung von 2ˣ ist 2ˣ · ln(2)."
      },
      {
        fehler: "Man leitet ln(x) zu ln'(x) = x ab.",
        korrektur:
          "Richtig ist: Die Ableitung von ln(x) ist 1/x."
      },
      {
        fehler: "Man vergisst bei ln(3x + 1) den Zähler durch die innere Ableitung.",
        korrektur:
          "Die Ableitung ist 3 / (3x + 1), nicht nur 1 / (3x + 1)."
      },
      {
        fehler: "Man leitet √x direkt falsch ab.",
        korrektur:
          "Schreibe zuerst √x = x hoch 1/2. Dann ergibt sich die Ableitung 1/2 · x hoch -1/2."
      },
      {
        fehler: "Man vergisst bei cos(x) das Minuszeichen.",
        korrektur:
          "Die Ableitung von cos(x) ist -sin(x)."
      },
      {
        fehler: "Man leitet sin(4x) zu cos(4x) ab.",
        korrektur:
          "Die innere Ableitung fehlt. Richtig ist 4cos(4x)."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: e-Funktion ableiten",
        schwierigkeit: "einfach",
        aufgabe:
          "Leite f(x) = eˣ ab.",
        loesung: [
          "Die Funktion eˣ ist eine besondere Exponentialfunktion.",
          "Ihre Ableitung ist wieder eˣ.",
          "Also gilt f'(x) = eˣ."
        ]
      },
      {
        titel: "Aufgabe 2: e-Funktion mit Faktor",
        schwierigkeit: "einfach",
        aufgabe:
          "Leite f(x) = 5eˣ ab.",
        loesung: [
          "Der Faktor 5 bleibt beim Ableiten erhalten.",
          "Die Ableitung von eˣ ist eˣ.",
          "Also ist f'(x) = 5eˣ."
        ]
      },
      {
        titel: "Aufgabe 3: e-Funktion mit Kettenregel",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = e hoch 4x ab.",
        loesung: [
          "Die Funktion hat die Form e hoch u(x).",
          "Die innere Funktion ist u(x) = 4x.",
          "Die innere Ableitung ist u'(x) = 4.",
          "Die Ableitung von e hoch u(x) ist e hoch u(x) mal u'(x).",
          "Also ist f'(x) = 4e hoch 4x."
        ]
      },
      {
        titel: "Aufgabe 4: Allgemeine Exponentialfunktion",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = 3ˣ ab.",
        loesung: [
          "Hier steht x im Exponenten.",
          "Es handelt sich um eine Exponentialfunktion mit Basis 3.",
          "Die Regel lautet: Die Ableitung von aˣ ist aˣ · ln(a).",
          "Also ist f'(x) = 3ˣ · ln(3)."
        ]
      },
      {
        titel: "Aufgabe 5: Natürlicher Logarithmus",
        schwierigkeit: "einfach",
        aufgabe:
          "Leite f(x) = ln(x) ab.",
        loesung: [
          "Die Grundregel lautet: Die Ableitung von ln(x) ist 1/x.",
          "Also ist f'(x) = 1/x.",
          "Dabei gilt x > 0."
        ]
      },
      {
        titel: "Aufgabe 6: Logarithmus mit Kettenregel",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = ln(2x - 5) ab.",
        loesung: [
          "Die Funktion hat die Form ln(u(x)).",
          "Die innere Funktion ist u(x) = 2x - 5.",
          "Die innere Ableitung ist u'(x) = 2.",
          "Die Regel lautet: Die Ableitung von ln(u(x)) ist u'(x) / u(x).",
          "Also ist f'(x) = 2 / (2x - 5).",
          "Der Definitionsbereich ist x > 2.5."
        ]
      },
      {
        titel: "Aufgabe 7: Wurzelfunktion ableiten",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = √x ab.",
        loesung: [
          "Schreibe die Wurzel als Potenz.",
          "√x = x hoch 1/2.",
          "Wende die Potenzregel an.",
          "Die Ableitung ist 1/2 · x hoch -1/2.",
          "Das kann man auch schreiben als 1 / (2√x).",
          "Also ist f'(x) = 1 / (2√x)."
        ]
      },
      {
        titel: "Aufgabe 8: Rationale Potenz ableiten",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = x hoch 3/2 ab.",
        loesung: [
          "Verwende die Potenzregel auch für rationale Exponenten.",
          "Der Exponent 3/2 wird nach vorne gezogen.",
          "Danach wird der Exponent um 1 verringert.",
          "3/2 - 1 = 1/2.",
          "Also ist f'(x) = 3/2 · x hoch 1/2.",
          "Das kann man auch als f'(x) = 3/2 · √x schreiben."
        ]
      },
      {
        titel: "Aufgabe 9: Sinus ableiten",
        schwierigkeit: "einfach",
        aufgabe:
          "Leite f(x) = sin(x) ab.",
        loesung: [
          "Die Ableitung von sin(x) ist cos(x).",
          "Also ist f'(x) = cos(x)."
        ]
      },
      {
        titel: "Aufgabe 10: Cosinus ableiten",
        schwierigkeit: "einfach",
        aufgabe:
          "Leite f(x) = cos(x) ab.",
        loesung: [
          "Die Ableitung von cos(x) ist -sin(x).",
          "Also ist f'(x) = -sin(x).",
          "Das Minuszeichen ist wichtig."
        ]
      },
      {
        titel: "Aufgabe 11: Trigonometrische Funktion mit Kettenregel",
        schwierigkeit: "mittel",
        aufgabe:
          "Leite f(x) = sin(3x + 1) ab.",
        loesung: [
          "Die äussere Funktion ist sin.",
          "Die innere Funktion ist 3x + 1.",
          "Die Ableitung von sin(u) ist cos(u) mal u'.",
          "Die innere Ableitung von 3x + 1 ist 3.",
          "Also ist f'(x) = 3cos(3x + 1)."
        ]
      },
      {
        titel: "Aufgabe 12: Gemischte spezielle Funktion",
        schwierigkeit: "schwer",
        aufgabe:
          "Leite f(x) = e hoch x · ln(x) ab.",
        loesung: [
          "Die Funktion ist ein Produkt.",
          "Setze u(x) = e hoch x und v(x) = ln(x).",
          "Dann ist u'(x) = e hoch x.",
          "Die Ableitung von ln(x) ist 1/x, also v'(x) = 1/x.",
          "Verwende die Produktregel: f'(x) = u' · v + u · v'.",
          "Also ist f'(x) = e hoch x · ln(x) + e hoch x · 1/x.",
          "Man kann e hoch x ausklammern.",
          "Dann erhält man f'(x) = e hoch x · (ln(x) + 1/x)."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist das Besondere an der Ableitung von eˣ?",
        antwort:
          "Die Ableitung von eˣ ist wieder eˣ. Die Funktion bleibt beim Ableiten unverändert."
      },
      {
        frage: "Wie leitet man e hoch u(x) ab?",
        antwort:
          "Man schreibt e hoch u(x) wieder hin und multipliziert mit der inneren Ableitung u'(x)."
      },
      {
        frage: "Wie lautet die Ableitung von aˣ?",
        antwort:
          "Die Ableitung von aˣ ist aˣ · ln(a), wobei a positiv und nicht 1 ist."
      },
      {
        frage: "Wie lautet die Ableitung von ln(x)?",
        antwort:
          "Die Ableitung von ln(x) ist 1/x. Dabei muss x positiv sein."
      },
      {
        frage: "Wie leitet man ln(u(x)) ab?",
        antwort:
          "Man verwendet die Kettenregel. Die Ableitung ist u'(x) / u(x)."
      },
      {
        frage: "Wie leitet man √x am einfachsten ab?",
        antwort:
          "Man schreibt √x zuerst als x hoch 1/2 und verwendet dann die Potenzregel."
      },
      {
        frage: "Wie lauten die Ableitungen von sin(x) und cos(x)?",
        antwort:
          "Die Ableitung von sin(x) ist cos(x). Die Ableitung von cos(x) ist -sin(x)."
      },
      {
        frage: "Wann braucht man bei speziellen Funktionen die Kettenregel?",
        antwort:
          "Man braucht sie immer dann, wenn in der Funktion nicht nur x steht, sondern ein zusammengesetzter Ausdruck wie 3x + 1 oder x² - 4."
      }
    ],
    nachtVorTest: [
      "Weisst du, dass die Ableitung von eˣ wieder eˣ ist?",
      "Kannst du e hoch u(x) mit der Kettenregel ableiten?",
      "Kennst du die Ableitung von aˣ?",
      "Weisst du, dass die Ableitung von ln(x) gleich 1/x ist?",
      "Kannst du ln(u(x)) zu u'(x) / u(x) ableiten?",
      "Schreibst du Wurzeln vor dem Ableiten als Potenzen?",
      "Kannst du x hoch 3/2 ableiten?",
      "Kennst du die Ableitung von sin(x)?",
      "Kennst du die Ableitung von cos(x) inklusive Minuszeichen?",
      "Denkst du bei sin(3x) oder ln(2x - 5) an die Kettenregel?"
    ]
  },
     {
    id: "integralrechnung",
    nummer: "7",
    titel: "Integralrechnung",
    kurzbeschreibung:
      "Stammfunktionen, unbestimmte und bestimmte Integrale, Flächenberechnung, Hauptsatz der Differential- und Integralrechnung sowie einfache Integrationsregeln.",
    lernziele: [
      "Du kannst erklären, was eine Stammfunktion ist.",
      "Du verstehst das unbestimmte Integral als Menge aller Stammfunktionen.",
      "Du kannst einfache Potenzfunktionen integrieren.",
      "Du kannst Summenregel und Faktorregel beim Integrieren anwenden.",
      "Du kannst bestimmte Integrale mit Stammfunktionen berechnen.",
      "Du verstehst den Hauptsatz der Differential- und Integralrechnung.",
      "Du kannst Flächen zwischen Graph und x-Achse berechnen.",
      "Du erkennst, wann man Beträge oder Teilintervalle bei Flächen braucht.",
      "Du kannst einfache e-Funktionen, trigonometrische Funktionen und rationale Potenzen integrieren.",
      "Du erkennst typische Fehler bei Integrationskonstante, Grenzen und Vorzeichen."
    ],
    theorie: [
      {
        titel: "Was ist Integralrechnung?",
        text:
          "Die Integralrechnung ist gewissermassen die Umkehrung der Differentialrechnung. Während man beim Ableiten von einer Funktion zur Steigungsfunktion kommt, sucht man beim Integrieren eine Funktion, deren Ableitung wieder die gegebene Funktion ist."
      },
      {
        titel: "Stammfunktion",
        text:
          "Eine Funktion F ist eine Stammfunktion von f, wenn F'(x) = f(x) gilt. Man sucht also eine Funktion, die beim Ableiten die gegebene Funktion ergibt."
      },
      {
        titel: "Unbestimmtes Integral",
        text:
          "Das unbestimmte Integral beschreibt alle Stammfunktionen einer Funktion. Deshalb schreibt man am Ende immer eine Integrationskonstante C dazu."
      },
      {
        titel: "Warum braucht man + C?",
        text:
          "Konstanten fallen beim Ableiten weg. Deshalb haben zum Beispiel x², x² + 5 und x² - 12 alle dieselbe Ableitung 2x. Beim Integrieren muss man diese mögliche Konstante mit + C berücksichtigen."
      },
      {
        titel: "Bestimmtes Integral",
        text:
          "Ein bestimmtes Integral hat feste Grenzen. Es liefert einen orientierten Flächeninhalt zwischen Graph und x-Achse. Flächen oberhalb der x-Achse zählen positiv, Flächen unterhalb der x-Achse negativ."
      },
      {
        titel: "Hauptsatz der Integralrechnung",
        text:
          "Wenn F eine Stammfunktion von f ist, dann gilt für das bestimmte Integral von a bis b: Man berechnet F(b) - F(a)."
      },
      {
        titel: "Orientierter Flächeninhalt",
        text:
          "Ein bestimmtes Integral kann negativ sein, wenn der Graph im betrachteten Intervall unterhalb der x-Achse liegt. Es ist also nicht automatisch der geometrische Flächeninhalt."
      },
      {
        titel: "Geometrischer Flächeninhalt",
        text:
          "Wenn der echte Flächeninhalt gesucht ist, muss man Flächen unterhalb der x-Achse positiv zählen. Dafür teilt man das Intervall an Nullstellen auf oder nimmt Beträge der Teilintegrale."
      },
      {
        titel: "Potenzregel beim Integrieren",
        text:
          "Die Stammfunktion von xⁿ ist xⁿ⁺¹ geteilt durch n + 1, solange n nicht -1 ist. Der Exponent wird also um 1 erhöht und durch den neuen Exponenten geteilt."
      },
      {
        titel: "Sonderfall 1/x",
        text:
          "Die Funktion 1/x hat nicht die Stammfunktion x⁰. Der Sonderfall lautet: Eine Stammfunktion von 1/x ist ln(|x|)."
      },
      {
        titel: "Faktorregel und Summenregel",
        text:
          "Konstante Faktoren bleiben beim Integrieren erhalten. Summen werden gliedweise integriert."
      },
      {
        titel: "Integral und Fläche",
        text:
          "Integrale werden oft verwendet, um Flächen zu berechnen. Dazu braucht man die Schnittpunkte mit der x-Achse oder die gegebenen Grenzen."
      }
    ],
    methoden: [
      {
        titel: "Methode: Einfache Stammfunktion bestimmen",
        schritte: [
          "1. Zerlege die Funktion in einzelne Summanden.",
          "2. Behandle konstante Faktoren separat.",
          "3. Erhöhe bei Potenzen den Exponenten um 1.",
          "4. Teile durch den neuen Exponenten.",
          "5. Integriere jeden Summanden einzeln.",
          "6. Schreibe beim unbestimmten Integral am Ende + C dazu.",
          "7. Kontrolliere durch Ableiten deiner Stammfunktion."
        ]
      },
      {
        titel: "Methode: Bestimmtes Integral berechnen",
        schritte: [
          "1. Bestimme zuerst eine Stammfunktion F(x) von f(x).",
          "2. Setze die obere Grenze in F ein.",
          "3. Setze die untere Grenze in F ein.",
          "4. Berechne F(obere Grenze) - F(untere Grenze).",
          "5. Vereinfache das Ergebnis.",
          "6. Interpretiere das Ergebnis als orientierten Flächeninhalt."
        ]
      },
      {
        titel: "Methode: Fläche zwischen Graph und x-Achse berechnen",
        schritte: [
          "1. Kläre, ob der echte geometrische Flächeninhalt gesucht ist.",
          "2. Bestimme die Nullstellen der Funktion im Intervall.",
          "3. Teile das Intervall an diesen Nullstellen auf.",
          "4. Berechne die bestimmten Integrale auf den Teilintervallen.",
          "5. Nimm bei negativen Teilintegralen den Betrag.",
          "6. Addiere die positiven Flächenstücke."
        ]
      },
      {
        titel: "Methode: Stammfunktion kontrollieren",
        schritte: [
          "1. Leite deine gefundene Stammfunktion ab.",
          "2. Vergleiche das Ergebnis mit der ursprünglichen Funktion.",
          "3. Stimmen beide überein, ist die Stammfunktion korrekt.",
          "4. Falls nicht, prüfe Exponenten, Faktoren und Vorzeichen.",
          "5. Vergiss nicht, dass + C beim Ableiten verschwindet."
        ]
      },
      {
        titel: "Methode: e-Funktion integrieren",
        schritte: [
          "1. Prüfe, ob es sich um eˣ oder e hoch kx handelt.",
          "2. Eine Stammfunktion von eˣ ist eˣ.",
          "3. Bei e hoch kx muss durch k geteilt werden.",
          "4. Kontrolliere durch Ableiten mit der Kettenregel.",
          "5. Füge beim unbestimmten Integral + C hinzu."
        ]
      },
      {
        titel: "Methode: Sinus und Cosinus integrieren",
        schritte: [
          "1. Merke: Eine Stammfunktion von cos(x) ist sin(x).",
          "2. Merke: Eine Stammfunktion von sin(x) ist -cos(x).",
          "3. Kontrolliere immer durch Ableiten.",
          "4. Bei inneren Faktoren wie sin(3x) muss zusätzlich durch den inneren Faktor geteilt werden.",
          "5. Achte besonders auf das Minuszeichen bei sin(x)."
        ]
      }
    ],
    merksaetze: [
      "Integrieren ist das Suchen einer Stammfunktion.",
      "F ist eine Stammfunktion von f, wenn F'(x) = f(x) gilt.",
      "Beim unbestimmten Integral gehört + C dazu.",
      "Beim bestimmten Integral rechnet man F(b) - F(a).",
      "Das bestimmte Integral ist ein orientierter Flächeninhalt.",
      "Flächen unterhalb der x-Achse zählen im Integral negativ.",
      "Für echte Flächeninhalte muss man negative Teilflächen positiv zählen.",
      "Die Stammfunktion von xⁿ ist xⁿ⁺¹ / (n + 1), falls n ≠ -1.",
      "Die Stammfunktion von 1/x ist ln(|x|).",
      "Eine Stammfunktion von eˣ ist eˣ.",
      "Eine Stammfunktion von cos(x) ist sin(x).",
      "Eine Stammfunktion von sin(x) ist -cos(x)."
    ],
    typischeFehler: [
      {
        fehler: "Man vergisst beim unbestimmten Integral die Konstante + C.",
        korrektur:
          "Beim unbestimmten Integral muss immer + C stehen, weil Konstanten beim Ableiten wegfallen."
      },
      {
        fehler: "Man berechnet beim bestimmten Integral F(a) - F(b).",
        korrektur:
          "Richtig ist obere Grenze minus untere Grenze, also F(b) - F(a)."
      },
      {
        fehler: "Man denkt, jedes bestimmte Integral sei automatisch ein positiver Flächeninhalt.",
        korrektur:
          "Ein bestimmtes Integral ist orientiert. Unterhalb der x-Achse wird die Fläche negativ gezählt."
      },
      {
        fehler: "Man verwendet die Potenzregel auch für 1/x falsch.",
        korrektur:
          "Für x hoch -1 gilt die normale Potenzregel beim Integrieren nicht. Die Stammfunktion von 1/x ist ln(|x|)."
      },
      {
        fehler: "Man erhöht den Exponenten, vergisst aber durch den neuen Exponenten zu teilen.",
        korrektur:
          "Aus x³ wird beim Integrieren x⁴/4, nicht nur x⁴."
      },
      {
        fehler: "Man vergisst bei e hoch 3x den Faktor 1/3.",
        korrektur:
          "Eine Stammfunktion von e hoch 3x ist 1/3 · e hoch 3x. Kontrolle durch Ableiten zeigt den Faktor 3."
      },
      {
        fehler: "Man integriert sin(x) zu cos(x).",
        korrektur:
          "Richtig ist: Eine Stammfunktion von sin(x) ist -cos(x), weil die Ableitung von -cos(x) gleich sin(x) ist."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Einfache Stammfunktion",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme eine Stammfunktion von f(x) = x³.",
        loesung: [
          "Verwende die Potenzregel für Integrale.",
          "Der Exponent 3 wird um 1 erhöht.",
          "Der neue Exponent ist 4.",
          "Danach teilt man durch 4.",
          "Eine Stammfunktion ist F(x) = x⁴ / 4.",
          "Beim unbestimmten Integral schreibt man allgemein F(x) = x⁴ / 4 + C."
        ]
      },
      {
        titel: "Aufgabe 2: Summenregel anwenden",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme das unbestimmte Integral von f(x) = 4x³ - 6x + 2.",
        loesung: [
          "Integriere jeden Summanden einzeln.",
          "Eine Stammfunktion von 4x³ ist x⁴.",
          "Eine Stammfunktion von -6x ist -3x².",
          "Eine Stammfunktion von 2 ist 2x.",
          "Also ist F(x) = x⁴ - 3x² + 2x + C."
        ]
      },
      {
        titel: "Aufgabe 3: Bestimmtes Integral",
        schwierigkeit: "einfach",
        aufgabe:
          "Berechne das Integral von f(x) = 2x im Intervall von 0 bis 3.",
        loesung: [
          "Eine Stammfunktion von f(x) = 2x ist F(x) = x².",
          "Nun berechnet man F(3) - F(0).",
          "F(3) = 3² = 9.",
          "F(0) = 0² = 0.",
          "Also ist das Integral 9 - 0 = 9."
        ]
      },
      {
        titel: "Aufgabe 4: Stammfunktion kontrollieren",
        schwierigkeit: "einfach",
        aufgabe:
          "Prüfe, ob F(x) = 2x³ - x² + 5 eine Stammfunktion von f(x) = 6x² - 2x ist.",
        loesung: [
          "Um eine Stammfunktion zu prüfen, leitet man F(x) ab.",
          "Die Ableitung von 2x³ ist 6x².",
          "Die Ableitung von -x² ist -2x.",
          "Die Ableitung von 5 ist 0.",
          "Also ist F'(x) = 6x² - 2x.",
          "Das stimmt mit f(x) überein.",
          "Also ist F(x) eine Stammfunktion von f(x)."
        ]
      },
      {
        titel: "Aufgabe 5: Fläche unter einer Parabel",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne den orientierten Flächeninhalt von f(x) = x² im Intervall von 0 bis 2.",
        loesung: [
          "Eine Stammfunktion von x² ist F(x) = x³ / 3.",
          "Berechne F(2) - F(0).",
          "F(2) = 2³ / 3 = 8/3.",
          "F(0) = 0.",
          "Das Integral ist 8/3.",
          "Da der Graph in diesem Intervall oberhalb der x-Achse liegt, ist auch der geometrische Flächeninhalt 8/3."
        ]
      },
      {
        titel: "Aufgabe 6: Integral mit negativer Fläche",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne das bestimmte Integral von f(x) = x im Intervall von -2 bis 0 und erkläre das Vorzeichen.",
        loesung: [
          "Eine Stammfunktion von f(x) = x ist F(x) = x² / 2.",
          "Berechne F(0) - F(-2).",
          "F(0) = 0.",
          "F(-2) = (-2)² / 2 = 2.",
          "Also ist das Integral 0 - 2 = -2.",
          "Das Ergebnis ist negativ, weil der Graph im Intervall von -2 bis 0 unterhalb der x-Achse liegt."
        ]
      },
      {
        titel: "Aufgabe 7: Echter Flächeninhalt",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne den geometrischen Flächeninhalt zwischen f(x) = x und der x-Achse im Intervall von -2 bis 2.",
        loesung: [
          "Die Funktion f(x) = x hat im Intervall eine Nullstelle bei x = 0.",
          "Man teilt deshalb das Intervall in [-2, 0] und [0, 2].",
          "Das Integral von -2 bis 0 ist -2.",
          "Der geometrische Flächeninhalt dieses Teils ist deshalb 2.",
          "Das Integral von 0 bis 2 ist 2.",
          "Dieser Teil liegt oberhalb der x-Achse.",
          "Der gesamte geometrische Flächeninhalt ist 2 + 2 = 4."
        ]
      },
      {
        titel: "Aufgabe 8: e-Funktion integrieren",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme eine Stammfunktion von f(x) = e hoch 2x.",
        loesung: [
          "Eine Stammfunktion von e hoch kx ist 1/k · e hoch kx.",
          "Hier ist k = 2.",
          "Also ist eine Stammfunktion F(x) = 1/2 · e hoch 2x.",
          "Kontrolle: Die Ableitung von 1/2 · e hoch 2x ist 1/2 · 2 · e hoch 2x = e hoch 2x.",
          "Allgemein schreibt man F(x) = 1/2 · e hoch 2x + C."
        ]
      },
      {
        titel: "Aufgabe 9: Trigonometrische Funktion integrieren",
        schwierigkeit: "mittel",
        aufgabe:
          "Bestimme eine Stammfunktion von f(x) = cos(x) - 2sin(x).",
        loesung: [
          "Eine Stammfunktion von cos(x) ist sin(x).",
          "Eine Stammfunktion von sin(x) ist -cos(x).",
          "Deshalb ist eine Stammfunktion von -2sin(x) gleich 2cos(x).",
          "Also ist F(x) = sin(x) + 2cos(x) + C.",
          "Kontrolle: Die Ableitung von sin(x) ist cos(x), die Ableitung von 2cos(x) ist -2sin(x)."
        ]
      },
      {
        titel: "Aufgabe 10: Integral mit Nullstelle im Intervall",
        schwierigkeit: "schwer",
        aufgabe:
          "Berechne den geometrischen Flächeninhalt zwischen f(x) = x² - 1 und der x-Achse im Intervall von 0 bis 2.",
        loesung: [
          "Zuerst bestimmt man die Nullstellen im Intervall.",
          "x² - 1 = 0 ergibt x = -1 oder x = 1.",
          "Im Intervall von 0 bis 2 liegt die Nullstelle x = 1.",
          "Deshalb teilt man das Intervall in [0, 1] und [1, 2].",
          "Eine Stammfunktion ist F(x) = x³ / 3 - x.",
          "Berechne das Integral von 0 bis 1.",
          "F(1) - F(0) = (1/3 - 1) - 0 = -2/3.",
          "Dieser Teil liegt unterhalb der x-Achse, daher zählt die Fläche positiv als 2/3.",
          "Berechne das Integral von 1 bis 2.",
          "F(2) - F(1) = (8/3 - 2) - (1/3 - 1).",
          "Das ist 2/3 - (-2/3) = 4/3.",
          "Der gesamte geometrische Flächeninhalt ist 2/3 + 4/3 = 2."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was ist eine Stammfunktion?",
        antwort:
          "Eine Stammfunktion F von f ist eine Funktion, deren Ableitung wieder f ergibt. Es gilt also F'(x) = f(x)."
      },
      {
        frage: "Warum schreibt man beim unbestimmten Integral + C?",
        antwort:
          "Weil Konstanten beim Ableiten verschwinden. Deshalb gibt es unendlich viele Stammfunktionen, die sich nur durch eine Konstante unterscheiden."
      },
      {
        frage: "Was ist der Unterschied zwischen unbestimmtem und bestimmtem Integral?",
        antwort:
          "Das unbestimmte Integral liefert eine Stammfunktion mit + C. Das bestimmte Integral hat Grenzen und liefert einen Zahlenwert."
      },
      {
        frage: "Wie berechnet man ein bestimmtes Integral mit einer Stammfunktion?",
        antwort:
          "Man bestimmt eine Stammfunktion F und berechnet dann obere Grenze minus untere Grenze, also F(b) - F(a)."
      },
      {
        frage: "Warum kann ein bestimmtes Integral negativ sein?",
        antwort:
          "Weil es einen orientierten Flächeninhalt beschreibt. Flächen unterhalb der x-Achse werden negativ gezählt."
      },
      {
        frage: "Wie berechnet man den echten geometrischen Flächeninhalt?",
        antwort:
          "Man teilt das Intervall an Nullstellen auf und zählt alle Teilflächen positiv, also bei negativen Integralen mit Betrag."
      },
      {
        frage: "Wie lautet die Potenzregel beim Integrieren?",
        antwort:
          "Die Stammfunktion von xⁿ ist xⁿ⁺¹ geteilt durch n + 1, solange n nicht -1 ist."
      },
      {
        frage: "Was ist der Sonderfall bei 1/x?",
        antwort:
          "Die Stammfunktion von 1/x ist ln(|x|). Hier funktioniert die normale Potenzregel nicht."
      }
    ],
    nachtVorTest: [
      "Kannst du erklären, was eine Stammfunktion ist?",
      "Schreibst du beim unbestimmten Integral immer + C?",
      "Kannst du eine Stammfunktion durch Ableiten kontrollieren?",
      "Kannst du die Potenzregel beim Integrieren anwenden?",
      "Weisst du, dass bei x hoch n durch n + 1 geteilt wird?",
      "Kennst du den Sonderfall 1/x mit ln(|x|)?",
      "Kannst du bestimmte Integrale mit F(b) - F(a) berechnen?",
      "Weisst du, dass bestimmte Integrale orientierte Flächeninhalte sind?",
      "Kannst du bei geometrischen Flächen an Nullstellen aufteilen?",
      "Kennst du Stammfunktionen von eˣ, sin(x) und cos(x)?"
    ]
  }
   
];


/* =========================
   RENDER-FUNKTION
========================= */

function render_mathematik(container) {
  if (!container) {
    console.error("render_mathematik: Kein Container gefunden.");
    return;
  }

  injectMathematikStyles();

  container.innerHTML = `
    <section class="sf-math-page">
      <div class="sf-math-hero">
        <h1>Mathematik</h1>
        <p>
          Prüfungsvorbereitung mit selbst erstellten Erklärungen, Methoden,
          Aufgaben, Lösungen und mündlichen Prüfungsfragen.
        </p>
      </div>

      <div class="sf-math-layout">
        <aside class="sf-math-sidebar">
          <h2>Themen</h2>
          <div class="sf-math-topic-list">
            ${MATHEMATIK_THEMEN.map((thema, index) => `
              <button
                class="sf-math-topic-button ${index === 0 ? "active" : ""}"
                data-topic-id="${thema.id}">
                <span>${thema.nummer}</span>
                ${escapeHTML(thema.titel)}
              </button>
            `).join("")}
          </div>
        </aside>

        <main class="sf-math-content" id="sf-math-content"></main>
      </div>
    </section>
  `;

  const content = container.querySelector("#sf-math-content");
  const buttons = container.querySelectorAll(".sf-math-topic-button");

  function showTopic(topicId) {
    const thema = MATHEMATIK_THEMEN.find(t => t.id === topicId);
    if (!thema) return;

    buttons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.topicId === topicId);
    });

    content.innerHTML = renderMathematikTopic(thema);
    attachMathematikInteractions(content);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      showTopic(button.dataset.topicId);
    });
  });

  showTopic(MATHEMATIK_THEMEN[0].id);
}


/* =========================
   EINZELNES THEMA RENDERN
========================= */

function renderMathematikTopic(thema) {
  return `
    <article class="sf-math-topic">
      <div class="sf-math-topic-header">
        <p class="sf-math-kicker">Thema ${escapeHTML(thema.nummer)}</p>
        <h2>${escapeHTML(thema.titel)}</h2>
        <p>${escapeHTML(thema.kurzbeschreibung)}</p>
      </div>

      ${renderMathematikSection("Lernziele", renderMathematikList(thema.lernziele))}
      ${renderMathematikTheory(thema.theorie)}
      ${renderMathematikMethods(thema.methoden)}
      ${renderMathematikSection("Merksätze", renderMathematikList(thema.merksaetze))}
      ${renderMathematikErrors(thema.typischeFehler)}
      ${renderMathematikExercises(thema.aufgaben)}
      ${renderMathematikOral(thema.muendlich)}
      ${renderMathematikSection("Nacht-vor-dem-Test-Check", renderMathematikChecklist(thema.nachtVorTest))}

      <div class="sf-math-disclaimer">
        <strong>Hinweis:</strong>
        Alle Inhalte und Aufgaben auf dieser Seite sind selbst erstellt und dienen
        der Prüfungsvorbereitung. Es handelt sich nicht um kopierte Originalprüfungen
        oder fremde Schulunterlagen.
      </div>
    </article>
  `;
}


function renderMathematikSection(title, content) {
  return `
    <section class="sf-math-card">
      <h3>${escapeHTML(title)}</h3>
      ${content}
    </section>
  `;
}


function renderMathematikTheory(items) {
  return `
    <section class="sf-math-card">
      <h3>Theorie einfach erklärt</h3>
      <div class="sf-math-grid">
        ${items.map(item => `
          <div class="sf-math-mini-card">
            <h4>${escapeHTML(item.titel)}</h4>
            <p>${escapeHTML(item.text)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathematikMethods(methoden) {
  return `
    <section class="sf-math-card">
      <h3>Methoden</h3>
      <div class="sf-math-accordion">
        ${methoden.map(methode => `
          <div class="sf-math-accordion-item">
            <button class="sf-math-accordion-toggle" type="button">
              <span>${escapeHTML(methode.titel)}</span>
              <span class="sf-math-plus">+</span>
            </button>
            <div class="sf-math-accordion-body">
              ${renderMathematikOrderedList(methode.schritte)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathematikErrors(errors) {
  return `
    <section class="sf-math-card">
      <h3>Typische Fehler</h3>
      <div class="sf-math-error-list">
        ${errors.map(item => `
          <div class="sf-math-error-card">
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


function renderMathematikExercises(exercises) {
  return `
    <section class="sf-math-card">
      <h3>Eigene Übungsaufgaben mit Lösung</h3>
      <div class="sf-math-exercises">
        ${exercises.map(exercise => `
          <div class="sf-math-exercise">
            <div class="sf-math-exercise-top">
              <h4>${escapeHTML(exercise.titel)}</h4>
              <span>${escapeHTML(exercise.schwierigkeit)}</span>
            </div>
            <p>${escapeHTML(exercise.aufgabe)}</p>
            <button class="sf-math-solution-button" type="button">
              Lösung anzeigen
            </button>
            <div class="sf-math-solution">
              ${renderMathematikOrderedList(exercise.loesung)}
            </div>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}


function renderMathematikOral(items) {
  return `
    <section class="sf-math-card">
      <h3>Mündliche Prüfungsfragen</h3>
      <div class="sf-math-oral-list">
        ${items.map(item => `
          <div class="sf-math-oral-card">
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

function renderMathematikList(items) {
  return `
    <ul class="sf-math-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ul>
  `;
}


function renderMathematikOrderedList(items) {
  return `
    <ol class="sf-math-ordered-list">
      ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
    </ol>
  `;
}


function renderMathematikChecklist(items) {
  return `
    <div class="sf-math-checklist">
      ${items.map(item => `
        <label>
          <input type="checkbox">
          <span>${escapeHTML(item)}</span>
        </label>
      `).join("")}
    </div>
  `;
}


function attachMathematikInteractions(root) {
  const accordionButtons = root.querySelectorAll(".sf-math-accordion-toggle");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".sf-math-accordion-item");
      item.classList.toggle("open");
    });
  });

  const solutionButtons = root.querySelectorAll(".sf-math-solution-button");

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

function injectMathematikStyles() {
  if (document.getElementById("sf-math-styles")) return;

  const style = document.createElement("style");
  style.id = "sf-math-styles";
  style.textContent = `
    .sf-math-page {
      width: 100%;
      background: #f6f7fb;
      color: #172033;
      font-family: Arial, Helvetica, sans-serif;
      padding: 24px;
      box-sizing: border-box;
      border-radius: 18px;
    }

    .sf-math-hero {
      background: linear-gradient(135deg, #111827, #273449);
      color: white;
      border-radius: 24px;
      padding: 32px;
      margin-bottom: 24px;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    }

    .sf-math-kicker {
      margin: 0 0 8px 0;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.75;
      font-weight: 700;
    }

    .sf-math-hero h1 {
      margin: 0 0 12px 0;
      font-size: clamp(32px, 5vw, 56px);
      line-height: 1;
    }

    .sf-math-hero p {
      max-width: 780px;
      margin: 0;
      font-size: 18px;
      line-height: 1.6;
      opacity: 0.92;
      color: white;
    }

    .sf-math-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 24px;
      align-items: start;
    }

    .sf-math-sidebar {
      position: sticky;
      top: 20px;
      background: white;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-math-sidebar h2 {
      margin: 0 0 16px 0;
      font-size: 22px;
      color: #172033;
    }

    .sf-math-topic-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .sf-math-topic-button {
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

    .sf-math-topic-button span {
      display: inline-flex;
      width: 28px;
      height: 28px;
      align-items: center;
      justify-content: center;
      background: #e5e7eb;
      border-radius: 999px;
      font-size: 13px;
      flex-shrink: 0;
    }

    .sf-math-topic-button:hover {
      transform: translateY(-1px);
      background: #eef2ff;
    }

    .sf-math-topic-button.active {
      background: #172033;
      color: white;
      border-color: #172033;
    }

    .sf-math-topic-button.active span {
      background: white;
      color: #172033;
    }

    .sf-math-content {
      min-width: 0;
    }

    .sf-math-topic-header {
      background: white;
      border-radius: 20px;
      padding: 26px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-math-topic-header h2 {
      margin: 0 0 10px 0;
      font-size: 34px;
      color: #172033;
    }

    .sf-math-topic-header p {
      margin: 0;
      font-size: 17px;
      line-height: 1.6;
      color: #4b5563;
    }

    .sf-math-card {
      background: white;
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 18px;
      box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
    }

    .sf-math-card h3 {
      margin: 0 0 18px 0;
      font-size: 24px;
      color: #172033;
    }

    .sf-math-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }

    .sf-math-mini-card,
    .sf-math-error-card,
    .sf-math-oral-card,
    .sf-math-exercise {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      padding: 18px;
      background: #f9fafb;
    }

    .sf-math-mini-card h4,
    .sf-math-error-card h4,
    .sf-math-oral-card h4,
    .sf-math-exercise h4 {
      margin: 0 0 8px 0;
      font-size: 18px;
      color: #172033;
    }

    .sf-math-mini-card p,
    .sf-math-error-card p,
    .sf-math-oral-card p,
    .sf-math-exercise p {
      margin: 0;
      line-height: 1.6;
      color: #374151;
    }

    .sf-math-list,
    .sf-math-ordered-list {
      margin: 0;
      padding-left: 22px;
      line-height: 1.8;
      color: #374151;
    }

    .sf-math-list li,
    .sf-math-ordered-list li {
      margin-bottom: 6px;
    }

    .sf-math-accordion {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .sf-math-accordion-item {
      border: 1px solid #e5e7eb;
      border-radius: 16px;
      overflow: hidden;
      background: #f9fafb;
    }

    .sf-math-accordion-toggle {
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
      text-align: left;
    }

    .sf-math-plus {
      font-size: 24px;
      line-height: 1;
    }

    .sf-math-accordion-body {
      display: none;
      padding: 0 18px 18px 18px;
    }

    .sf-math-accordion-item.open .sf-math-accordion-body {
      display: block;
    }

    .sf-math-accordion-item.open .sf-math-plus {
      transform: rotate(45deg);
    }

    .sf-math-error-list,
    .sf-math-oral-list,
    .sf-math-exercises {
      display: grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .sf-math-error-card h4:nth-of-type(1) {
      color: #991b1b;
    }

    .sf-math-error-card h4:nth-of-type(2) {
      margin-top: 14px;
      color: #166534;
    }

    .sf-math-exercise-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 12px;
      margin-bottom: 10px;
    }

    .sf-math-exercise-top span {
      background: #e5e7eb;
      border-radius: 999px;
      padding: 5px 10px;
      font-size: 13px;
      font-weight: 700;
      color: #374151;
      white-space: nowrap;
    }

    .sf-math-solution-button {
      margin-top: 14px;
      border: 0;
      background: #172033;
      color: white;
      border-radius: 12px;
      padding: 10px 14px;
      font-weight: 700;
      cursor: pointer;
    }

    .sf-math-solution {
      display: none;
      margin-top: 14px;
      padding: 16px;
      border-radius: 14px;
      background: white;
      border: 1px solid #e5e7eb;
    }

    .sf-math-solution.open {
      display: block;
    }

    .sf-math-checklist {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .sf-math-checklist label {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      padding: 12px;
      background: #f9fafb;
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      cursor: pointer;
      line-height: 1.5;
      color: #374151;
    }

    .sf-math-checklist input {
      margin-top: 3px;
    }

    .sf-math-disclaimer {
      background: #fff7ed;
      border: 1px solid #fed7aa;
      color: #7c2d12;
      border-radius: 18px;
      padding: 18px;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    @media (max-width: 900px) {
      .sf-math-layout {
        grid-template-columns: 1fr;
      }

      .sf-math-sidebar {
        position: static;
      }

      .sf-math-grid {
        grid-template-columns: 1fr;
      }

      .sf-math-page {
        padding: 14px;
      }

      .sf-math-hero {
        padding: 24px;
      }
    }
  `;

  document.head.appendChild(style);
}


/* =========================
   GLOBAL VERFÜGBAR MACHEN
========================= */

window.render_mathematik = render_mathematik;
