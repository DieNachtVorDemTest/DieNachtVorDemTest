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
          "Ein rationaler Exponent ist ein Exponent, der als Bruch geschrieben werden kann. Zum Beispiel sind \\(\\frac{1}{2}\\), \\(\\frac{3}{4}\\) und \\(-\\frac{2}{5}\\) rationale Exponenten. Solche Potenzen hängen direkt mit Wurzeln zusammen."
      },
      {
        titel: "Grundregel für rationale Exponenten",
        text:
          "Für \\(a>0\\) gilt: \\(a^{\\frac{m}{n}}=\\sqrt[n]{a^m}\\). Der Nenner des Bruchs bestimmt also die Wurzel, der Zähler bestimmt die Potenz."
      },
      {
        titel: "Beispiele für rationale Exponenten",
        text:
          "\\(a^{\\frac{1}{2}}=\\sqrt{a}\\). \\(a^{\\frac{1}{3}}=\\sqrt[3]{a}\\). \\(a^{\\frac{2}{3}}=\\sqrt[3]{a^2}\\)."
      },
      {
        titel: "Negative Exponenten",
        text:
          "Ein negativer Exponent bedeutet Kehrwertbildung. Zum Beispiel gilt \\(a^{-n}=\\frac{1}{a^n}\\). Auch bei rationalen Exponenten gilt diese Regel."
      },
      {
        titel: "Definitionsbedingungen bei Wurzeln",
        text:
          "Im reellen Zahlenbereich darf unter einer geraden Wurzel kein negativer Ausdruck stehen. Deshalb ist \\(\\sqrt{x}\\) nur für \\(x\\ge 0\\) definiert. Ungerade Wurzeln wie \\(\\sqrt[3]{x}\\) sind hingegen für alle reellen Zahlen definiert."
      },
      {
        titel: "Potenzgesetze",
        text:
          "Potenzgesetze erlauben es, Terme mit gleicher Basis zu vereinfachen. Wichtig ist: Exponenten werden nur addiert oder subtrahiert, wenn die Basis gleich ist. Zum Beispiel gilt \\(a^m\\cdot a^n=a^{m+n}\\)."
      },
      {
        titel: "Was ist ein Logarithmus?",
        text:
          "Der Logarithmus ist die Umkehrung des Potenzierens. Die Aussage \\(\\log_a(b)=x\\) bedeutet: \\(a^x=b\\). Ein Logarithmus fragt also nach dem Exponenten."
      },
      {
        titel: "Definitionsbedingungen beim Logarithmus",
        text:
          "Bei \\(\\log_a(x)\\) muss die Basis \\(a\\) positiv sein, sie darf nicht \\(1\\) sein, und das Argument \\(x\\) muss positiv sein. Also gilt: \\(a>0\\), \\(a\\ne 1\\) und \\(x>0\\)."
      },
      {
        titel: "Logarithmengesetze",
        text:
          "Logarithmengesetze helfen beim Umformen von Produkten, Quotienten und Potenzen. Zum Beispiel gilt \\(\\log_a(xy)=\\log_a(x)+\\log_a(y)\\), aber es gibt kein Gesetz für \\(\\log_a(x+y)\\). Summen im Logarithmus dürfen also nicht einfach getrennt werden."
      },
      {
        titel: "Exponentialgleichungen",
        text:
          "Bei Exponentialgleichungen steht die Variable im Exponenten, zum Beispiel \\(3^x=50\\). Wenn möglich, stellt man zuerst gleiche Basen her. Wenn das nicht geht, logarithmiert man beide Seiten."
      }
    ],
    methoden: [
      {
        titel: "Methode: Potenz mit rationalem Exponenten umschreiben",
        schritte: [
          "1. Betrachte den Exponenten als Bruch, zum Beispiel \\(\\frac{m}{n}\\).",
          "2. Der Nenner \\(n\\) wird zum Wurzelexponenten.",
          "3. Der Zähler \\(m\\) bleibt als Potenz erhalten.",
          "4. Es gilt \\(a^{\\frac{m}{n}}=\\sqrt[n]{a^m}\\).",
          "5. Bei negativem Exponenten bildest du zusätzlich den Kehrwert.",
          "6. Prüfe bei geraden Wurzeln den Definitionsbereich."
        ]
      },
      {
        titel: "Methode: Potenzterme vereinfachen",
        schritte: [
          "1. Prüfe zuerst, ob die Basen gleich sind.",
          "2. Bei gleicher Basis und Multiplikation addierst du die Exponenten: \\(a^m\\cdot a^n=a^{m+n}\\).",
          "3. Bei gleicher Basis und Division subtrahierst du die Exponenten: \\(\\frac{a^m}{a^n}=a^{m-n}\\).",
          "4. Bei einer Potenz von einer Potenz multiplizierst du die Exponenten: \\((a^m)^n=a^{mn}\\).",
          "5. Vereinfache Brüche in den Exponenten vollständig."
        ]
      },
      {
        titel: "Methode: Exponentialgleichung mit gleicher Basis lösen",
        schritte: [
          "1. Schreibe beide Seiten als Potenzen mit gleicher Basis.",
          "2. Beispiel: \\(16=2^4\\).",
          "3. Wenn die Basen gleich sind, müssen die Exponenten gleich sein.",
          "4. Setze die Exponenten gleich.",
          "5. Löse die entstehende Gleichung nach \\(x\\).",
          "6. Kontrolliere das Ergebnis durch Einsetzen."
        ]
      },
      {
        titel: "Methode: Exponentialgleichung durch Logarithmieren lösen",
        schritte: [
          "1. Prüfe, ob sich gleiche Basen herstellen lassen.",
          "2. Wenn nicht, logarithmiere beide Seiten.",
          "3. Beispiel: Aus \\(3^x=50\\) wird \\(\\log(3^x)=\\log(50)\\).",
          "4. Ziehe den Exponenten mit dem Logarithmengesetz nach vorne: \\(x\\log(3)=\\log(50)\\).",
          "5. Löse nach \\(x\\) auf: \\(x=\\frac{\\log(50)}{\\log(3)}\\).",
          "6. Gib das Ergebnis exakt oder als Näherungswert an."
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
      "Der Nenner eines rationalen Exponenten bestimmt die Wurzel: \\(a^{\\frac{m}{n}}=\\sqrt[n]{a^m}\\).",
      "Ein negativer Exponent bedeutet Kehrwert: \\(a^{-n}=\\frac{1}{a^n}\\).",
      "Exponenten werden nur bei gleicher Basis addiert oder subtrahiert.",
      "Ein Logarithmus ist ein Exponent.",
      "\\(\\log_a(b)=x\\) bedeutet dasselbe wie \\(a^x=b\\).",
      "Das Argument eines Logarithmus muss immer positiv sein.",
      "Es gibt kein Logarithmengesetz für Summen: \\(\\log_a(x+y)\\ne\\log_a(x)+\\log_a(y)\\).",
      "Bei Exponentialgleichungen ohne gleiche Basis logarithmiert man beide Seiten."
    ],
    typischeFehler: [
      {
        fehler: "Man schreibt \\(x^{\\frac{2}{3}}\\) fälschlicherweise als \\(\\sqrt{x^3}\\).",
        korrektur:
          "Richtig ist: \\(x^{\\frac{2}{3}}=\\sqrt[3]{x^2}\\). Der Nenner des Exponenten bestimmt die Wurzel."
      },
      {
        fehler: "Man addiert Exponenten, obwohl die Basen verschieden sind.",
        korrektur:
          "Exponenten darf man bei der Multiplikation nur addieren, wenn die Basis gleich ist. \\(x^2\\cdot y^3\\) kann nicht zu einer einzigen Potenz zusammengefasst werden."
      },
      {
        fehler: "Man schreibt \\(\\log_a(x+y)=\\log_a(x)+\\log_a(y)\\).",
        korrektur:
          "Das ist falsch. Logarithmengesetze gelten für Produkte, Quotienten und Potenzen, aber nicht für Summen."
      },
      {
        fehler: "Man vergisst die Definitionsbedingung beim Logarithmus.",
        korrektur:
          "Das Argument eines Logarithmus muss positiv sein. Bei \\(\\log_a(x-2)\\) muss zum Beispiel \\(x-2>0\\), also \\(x>2\\), gelten."
      },
      {
        fehler: "Man logarithmiert nur eine Seite einer Gleichung.",
        korrektur:
          "Bei Gleichungen muss man immer beide Seiten gleich behandeln. Wenn du logarithmierst, dann beide Seiten."
      },
      {
        fehler: "Man vergisst bei negativen Exponenten den Kehrwert.",
        korrektur:
          "\\(a^{-n}\\) bedeutet \\(\\frac{1}{a^n}\\). Das Minus im Exponenten macht den Wert nicht einfach negativ."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Potenz als Wurzel schreiben",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe \\(x^{\\frac{3}{4}}\\) als Wurzelausdruck.",
        loesung: [
          "Der Exponent ist \\(\\frac{3}{4}\\).",
          "Der Nenner \\(4\\) wird zum Wurzelexponenten.",
          "Der Zähler \\(3\\) bleibt als Potenz erhalten.",
          "Also gilt: \\(x^{\\frac{3}{4}}=\\sqrt[4]{x^3}\\)."
        ]
      },
      {
        titel: "Aufgabe 2: Wurzel als Potenz schreiben",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe \\(\\sqrt[5]{a^2}\\) als Potenz.",
        loesung: [
          "Eine \\(n\\)-te Wurzel entspricht einem Exponenten mit Nenner \\(n\\).",
          "Hier ist der Wurzelexponent \\(5\\).",
          "Unter der Wurzel steht \\(a^2\\).",
          "Also gilt: \\(\\sqrt[5]{a^2}=a^{\\frac{2}{5}}\\)."
        ]
      },
      {
        titel: "Aufgabe 3: Potenzterm vereinfachen",
        schwierigkeit: "einfach",
        aufgabe:
          "Vereinfache \\(x^{\\frac{2}{5}}\\cdot x^{\\frac{3}{10}}\\).",
        loesung: [
          "Die Basis ist in beiden Faktoren \\(x\\).",
          "Bei gleicher Basis werden die Exponenten addiert.",
          "Also rechnet man \\(\\frac{2}{5}+\\frac{3}{10}\\).",
          "Schreibe \\(\\frac{2}{5}\\) als \\(\\frac{4}{10}\\).",
          "Dann ergibt sich \\(\\frac{4}{10}+\\frac{3}{10}=\\frac{7}{10}\\).",
          "Das Ergebnis ist \\(x^{\\frac{7}{10}}\\)."
        ]
      },
      {
        titel: "Aufgabe 4: Negative Exponenten",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe \\(a^{-3}\\) als Bruch.",
        loesung: [
          "Ein negativer Exponent bedeutet Kehrwert.",
          "\\(a^{-3}\\) ist deshalb \\(\\frac{1}{a^3}\\).",
          "Also gilt: \\(a^{-3}=\\frac{1}{a^3}\\)."
        ]
      },
      {
        titel: "Aufgabe 5: Logarithmus als Potenzgleichung",
        schwierigkeit: "einfach",
        aufgabe:
          "Schreibe \\(\\log_2(32)=5\\) als Potenzgleichung.",
        loesung: [
          "Ein Logarithmus ist ein Exponent.",
          "\\(\\log_2(32)=5\\) bedeutet: Die Basis \\(2\\) muss mit \\(5\\) potenziert werden.",
          "Also lautet die Potenzgleichung: \\(2^5=32\\)."
        ]
      },
      {
        titel: "Aufgabe 6: Einfache Logarithmusgleichung",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse \\(\\log_3(x)=4\\).",
        loesung: [
          "Schreibe die Gleichung als Potenzgleichung.",
          "\\(\\log_3(x)=4\\) bedeutet \\(3^4=x\\).",
          "\\(3^4=81\\).",
          "Also ist \\(x=81\\).",
          "Da \\(x>0\\) gilt, ist die Lösung gültig."
        ]
      },
      {
        titel: "Aufgabe 7: Exponentialgleichung mit gleicher Basis",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse \\(2^{x+1}=16\\).",
        loesung: [
          "Schreibe \\(16\\) als Potenz zur Basis \\(2\\).",
          "Es gilt \\(16=2^4\\).",
          "Damit steht \\(2^{x+1}=2^4\\).",
          "Bei gleicher Basis müssen die Exponenten gleich sein.",
          "Also gilt \\(x+1=4\\).",
          "Daraus folgt \\(x=3\\)."
        ]
      },
      {
        titel: "Aufgabe 8: Exponentialgleichung durch Logarithmieren",
        schwierigkeit: "mittel",
        aufgabe:
          "Löse \\(3^x=50\\).",
        loesung: [
          "Es lässt sich keine einfache gleiche Basis herstellen.",
          "Deshalb logarithmiert man beide Seiten.",
          "Aus \\(3^x=50\\) wird \\(\\log(3^x)=\\log(50)\\).",
          "Mit dem Logarithmengesetz wird daraus \\(x\\log(3)=\\log(50)\\).",
          "Teile durch \\(\\log(3)\\).",
          "Also gilt \\(x=\\frac{\\log(50)}{\\log(3)}\\).",
          "Näherungsweise ist \\(x\\approx 3.56\\)."
        ]
      },
      {
        titel: "Aufgabe 9: Logarithmusgleichung mit Definitionsbereich",
        schwierigkeit: "schwer",
        aufgabe:
          "Löse \\(\\log_2(x)+\\log_2(x-2)=3\\).",
        loesung: [
          "Zuerst bestimmt man den Definitionsbereich.",
          "Es muss \\(x>0\\) und \\(x-2>0\\) gelten.",
          "Also ist \\(x>2\\).",
          "Fasse die Logarithmen zusammen.",
          "\\(\\log_2(x)+\\log_2(x-2)=\\log_2(x(x-2))\\).",
          "Damit gilt \\(\\log_2(x(x-2))=3\\).",
          "Schreibe als Potenzgleichung: \\(x(x-2)=2^3\\).",
          "Also \\(x^2-2x=8\\).",
          "Bringe alles auf eine Seite: \\(x^2-2x-8=0\\).",
          "Faktorisieren ergibt \\((x-4)(x+2)=0\\).",
          "Die möglichen Lösungen sind \\(x=4\\) und \\(x=-2\\).",
          "Wegen \\(x>2\\) ist nur \\(x=4\\) gültig."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Was bedeutet ein rationaler Exponent?",
        antwort:
          "Ein rationaler Exponent ist ein Exponent in Bruchform. Bei \\(a^{\\frac{m}{n}}\\) beschreibt der Nenner \\(n\\) die Wurzel und der Zähler \\(m\\) die Potenz."
      },
      {
        frage: "Was bedeutet ein negativer Exponent?",
        antwort:
          "Ein negativer Exponent bedeutet, dass man den Kehrwert bildet. Zum Beispiel gilt \\(a^{-n}=\\frac{1}{a^n}\\)."
      },
      {
        frage: "Was ist ein Logarithmus?",
        antwort:
          "Ein Logarithmus ist ein Exponent. \\(\\log_a(b)=x\\) bedeutet, dass \\(a^x=b\\) gilt."
      },
      {
        frage: "Welche Bedingungen gelten für \\(\\log_a(x)\\)?",
        antwort:
          "Die Basis \\(a\\) muss positiv sein und darf nicht \\(1\\) sein. Das Argument \\(x\\) muss positiv sein. Also: \\(a>0\\), \\(a\\ne 1\\), \\(x>0\\)."
      },
      {
        frage: "Warum ist \\(\\log(x+y)\\) nicht gleich \\(\\log(x)+\\log(y)\\)?",
        antwort:
          "Weil es kein Logarithmengesetz für Summen gibt. Logarithmengesetze gelten für Produkte, Quotienten und Potenzen."
      },
      {
        frage: "Wann logarithmiert man bei Exponentialgleichungen?",
        antwort:
          "Man logarithmiert, wenn die Variable im Exponenten steht und man keine gleiche Basis herstellen kann, zum Beispiel bei \\(3^x=50\\)."
      }
    ],
    nachtVorTest: [
      "Kannst du \\(a^{\\frac{m}{n}}\\) als Wurzel schreiben?",
      "Weisst du, dass bei \\(a^{\\frac{m}{n}}\\) der Nenner die Wurzel bestimmt?",
      "Kannst du negative Exponenten als Kehrwert schreiben, zum Beispiel \\(a^{-n}=\\frac{1}{a^n}\\)?",
      "Kennst du die Potenzgesetze für gleiche Basen?",
      "Kannst du erklären, warum ein Logarithmus ein Exponent ist?",
      "Kannst du \\(\\log_a(b)=x\\) in \\(a^x=b\\) umschreiben?",
      "Prüfst du bei Logarithmusgleichungen den Definitionsbereich?",
      "Weisst du, dass \\(\\log(x+y)\\) nicht aufgeteilt werden darf?",
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
          "Nullstellen sind die \\(x\\)-Werte, bei denen der Funktionswert \\(0\\) ist. Man löst also die Gleichung \\(f(x)=0\\). Grafisch sind Nullstellen die Schnittpunkte des Graphen mit der \\(x\\)-Achse."
      },
      {
        titel: "y-Achsenabschnitt",
        text:
          "Den Schnittpunkt mit der \\(y\\)-Achse erhält man durch Einsetzen von \\(x=0\\). Der Punkt lautet dann \\((0\\mid f(0))\\)."
      },
      {
        titel: "Erste Ableitung",
        text:
          "Die erste Ableitung \\(f'(x)\\) beschreibt die Steigung des Graphen. Ist \\(f'(x)>0\\), steigt der Graph. Ist \\(f'(x)<0\\), fällt der Graph. Ist \\(f'(x)=0\\), kann dort eine Extremstelle oder ein Sattelpunkt liegen."
      },
      {
        titel: "Extremstellen",
        text:
          "Extremstellen sind Stellen, an denen ein Graph lokal besonders hoch oder besonders tief liegt. Mögliche Extremstellen findet man meistens mit \\(f'(x)=0\\)."
      },
      {
        titel: "Zweite Ableitung",
        text:
          "Die zweite Ableitung \\(f''(x)\\) beschreibt die Krümmung des Graphen. Ist \\(f''(x)>0\\), ist der Graph linksgekrümmt. Ist \\(f''(x)<0\\), ist der Graph rechtsgekrümmt."
      },
      {
        titel: "Hochpunkt und Tiefpunkt",
        text:
          "Wenn \\(f'(x_0)=0\\) und \\(f''(x_0)>0\\) gilt, liegt ein Tiefpunkt vor. Wenn \\(f'(x_0)=0\\) und \\(f''(x_0)<0\\) gilt, liegt ein Hochpunkt vor."
      },
      {
        titel: "Wendepunkt",
        text:
          "Ein Wendepunkt ist ein Punkt, an dem der Graph sein Krümmungsverhalten ändert. Mögliche Wendestellen findet man mit \\(f''(x)=0\\). Danach muss man prüfen, ob wirklich ein Krümmungswechsel stattfindet."
      },
      {
        titel: "Sattelpunkt",
        text:
          "Ein Sattelpunkt ist ein besonderer Wendepunkt mit waagrechter Tangente. Das bedeutet: \\(f'(x_0)=0\\) und gleichzeitig liegt ein Wendepunkt vor."
      },
      {
        titel: "Tangente",
        text:
          "Die Tangente an den Graphen bei \\(x_0\\) hat die Steigung \\(f'(x_0)\\). Ihre Gleichung lautet \\(y=f'(x_0)(x-x_0)+f(x_0)\\)."
      },
      {
        titel: "Monotonie",
        text:
          "Monotonie beschreibt, wo ein Graph steigt oder fällt. Dazu untersucht man das Vorzeichen der ersten Ableitung \\(f'(x)\\)."
      },
      {
        titel: "Krümmung",
        text:
          "Die Krümmung beschreibt, ob der Graph nach links oder rechts gebogen ist. Dazu untersucht man das Vorzeichen der zweiten Ableitung \\(f''(x)\\)."
      }
    ],
    methoden: [
      {
        titel: "Methode: Kurvendiskussion systematisch durchführen",
        schritte: [
          "1. Bestimme zuerst den Definitionsbereich.",
          "2. Untersuche mögliche Symmetrien.",
          "3. Berechne den \\(y\\)-Achsenabschnitt mit \\(f(0)\\).",
          "4. Berechne die Nullstellen mit \\(f(x)=0\\).",
          "5. Berechne die erste Ableitung \\(f'(x)\\).",
          "6. Bestimme mögliche Extremstellen mit \\(f'(x)=0\\).",
          "7. Berechne die zweite Ableitung \\(f''(x)\\).",
          "8. Entscheide mit \\(f''(x)\\), ob Hochpunkte oder Tiefpunkte vorliegen.",
          "9. Bestimme mögliche Wendestellen mit \\(f''(x)=0\\).",
          "10. Prüfe den Krümmungswechsel oder verwende \\(f'''(x)\\), falls sinnvoll.",
          "11. Berechne die \\(y\\)-Werte der gefundenen Punkte.",
          "12. Zeichne oder beschreibe den Graphen mit allen Informationen."
        ]
      }
    ],
   merksaetze: [
  "Nullstellen findet man mit \\(f(x)=0\\).",
  "Der \\(y\\)-Achsenabschnitt ist \\(f(0)\\).",
  "Die erste Ableitung \\(f'(x)\\) beschreibt die Steigung.",
  "Mögliche Extremstellen findet man mit \\(f'(x)=0\\).",
  "Bei \\(f''(x)>0\\) liegt ein Tiefpunkt vor, falls \\(f'(x)=0\\) gilt.",
  "Bei \\(f''(x)<0\\) liegt ein Hochpunkt vor, falls \\(f'(x)=0\\) gilt.",
  "Mögliche Wendepunkte findet man mit \\(f''(x)=0\\).",
  "Ein Wendepunkt braucht einen Krümmungswechsel.",
  "Ein Sattelpunkt ist ein Wendepunkt mit waagrechter Tangente.",
  "Die Tangente bei \\(x_0\\) hat die Steigung \\(f'(x_0)\\)."
],
typischeFehler: [
  {
    fehler: "Man setzt für Extremstellen die ursprüngliche Funktion \\(f(x)=0\\).",
    korrektur:
      "Für Extremstellen setzt man die erste Ableitung \\(f'(x)=0\\). Die Gleichung \\(f(x)=0\\) liefert Nullstellen, nicht Extremstellen."
  },
  {
    fehler: "Man berechnet nur den \\(x\\)-Wert eines Extrempunkts.",
    korrektur:
      "Ein Punkt braucht immer \\(x\\)- und \\(y\\)-Koordinate. Den \\(y\\)-Wert erhält man durch Einsetzen des \\(x\\)-Werts in die ursprüngliche Funktion."
  },
  {
    fehler: "Man denkt, \\(f'(x)=0\\) bedeutet automatisch Hochpunkt oder Tiefpunkt.",
    korrektur:
      "\\(f'(x)=0\\) bedeutet nur, dass eine waagrechte Tangente vorliegt. Es kann auch ein Sattelpunkt sein."
  },
  {
    fehler: "Man bestimmt Wendepunkte mit \\(f'(x)=0\\).",
    korrektur:
      "Wendepunkte untersucht man mit der zweiten Ableitung. Man setzt \\(f''(x)=0\\) und prüft den Krümmungswechsel."
  }
],
aufgaben: [
  {
    titel: "Aufgabe 1: y-Achsenabschnitt bestimmen",
    schwierigkeit: "einfach",
    aufgabe:
      "Gegeben ist \\(f(x)=x^2-4x+1\\). Bestimme den Schnittpunkt mit der \\(y\\)-Achse.",
    loesung: [
      "Für den \\(y\\)-Achsenabschnitt setzt man \\(x=0\\) ein.",
      "Also berechnet man \\(f(0)\\).",
      "\\(f(0)=0^2-4\\cdot 0+1\\).",
      "Das ergibt \\(f(0)=1\\).",
      "Der Schnittpunkt mit der \\(y\\)-Achse ist also \\((0\\mid 1)\\)."
    ]
  },
  {
    titel: "Aufgabe 2: Nullstellen berechnen",
    schwierigkeit: "einfach",
    aufgabe:
      "Bestimme die Nullstellen von \\(f(x)=x^2-6x+8\\).",
    loesung: [
      "Nullstellen findet man mit \\(f(x)=0\\).",
      "Also: \\(x^2-6x+8=0\\).",
      "Faktorisiere den Term.",
      "\\(x^2-6x+8=(x-2)(x-4)\\).",
      "Also ist \\(x=2\\) oder \\(x=4\\).",
      "Die Nullstellen sind \\((2\\mid 0)\\) und \\((4\\mid 0)\\)."
    ]
  },
  {
    titel: "Aufgabe 3: Extremstelle bestimmen",
    schwierigkeit: "mittel",
    aufgabe:
      "Untersuche \\(f(x)=x^2-4x+5\\) auf Extremstellen.",
    loesung: [
      "Zuerst berechnet man die erste Ableitung.",
      "\\(f'(x)=2x-4\\).",
      "Für mögliche Extremstellen setzt man \\(f'(x)=0\\).",
      "\\(2x-4=0\\).",
      "Daraus folgt \\(x=2\\).",
      "Nun berechnet man die zweite Ableitung.",
      "\\(f''(x)=2\\).",
      "Da \\(f''(2)=2>0\\) ist, liegt ein Tiefpunkt vor.",
      "Berechne den \\(y\\)-Wert mit \\(f(2)\\).",
      "\\(f(2)=2^2-4\\cdot2+5=1\\).",
      "Der Tiefpunkt ist \\(T(2\\mid 1)\\)."
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
      "Man setzt die Funktion gleich \\(0\\) und löst die Gleichung \\(f(x)=0\\)."
  },
  {
    frage: "Was sagt die erste Ableitung aus?",
    antwort:
      "Die erste Ableitung beschreibt die Steigung des Graphen."
  },
  {
    frage: "Was sagt die zweite Ableitung aus?",
    antwort:
      "Die zweite Ableitung beschreibt die Krümmung des Graphen und hilft bei Extrempunkten und Wendepunkten."
  }
],
nachtVorTest: [
  "Kannst du Nullstellen mit \\(f(x)=0\\) berechnen?",
  "Weisst du, dass \\(f(0)\\) den \\(y\\)-Achsenabschnitt liefert?",
  "Kannst du die erste Ableitung als Steigung erklären?",
  "Weisst du, dass mögliche Extremstellen mit \\(f'(x)=0\\) gefunden werden?",
  "Kannst du mit \\(f''(x)\\) entscheiden, ob ein Hochpunkt oder Tiefpunkt vorliegt?",
  "Weisst du, dass Wendepunkte mit \\(f''(x)=0\\) gesucht werden?",
  "Prüfst du beim Wendepunkt den Krümmungswechsel?",
  "Kannst du einen Sattelpunkt erklären?"
]
},
{
  id: "funktionen-parameter",
    nummer: "3",
    titel: "Funktionen mit Parametern",
    kurzbeschreibung:
      "Einfluss von Parametern auf Funktionsgraphen, besonders bei \\(g(x)=a\\cdot f(bx+c)+d\\) sowie bei quadratischen, trigonometrischen, Exponential- und Logarithmusfunktionen.",
    lernziele: [
      "Du kannst erklären, was ein Parameter in einer Funktion bedeutet.",
      "Du kannst den Einfluss von \\(a\\), \\(b\\), \\(c\\) und \\(d\\) auf einen Graphen beschreiben.",
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
          "Ein Parameter ist eine Zahl oder ein Buchstabe, der die Form oder Lage eines Graphen verändert. Im Gegensatz zur Variable \\(x\\) wird ein Parameter meistens als fest betrachtet."
      },
      {
        titel: "Grundidee",
        text:
          "Man beginnt mit einer bekannten Grundfunktion \\(f(x)\\), zum Beispiel \\(x^2\\), \\(\\sin(x)\\), \\(e^x\\) oder \\(\\log(x)\\). Durch Parameter wird dieser Grundgraph verschoben, gestreckt, gestaucht oder gespiegelt."
      },
      {
        titel: "Allgemeine Form",
        text:
          "Eine typische Schreibweise ist \\(g(x)=a\\cdot f(bx+c)+d\\). Die Parameter \\(a\\) und \\(d\\) wirken in \\(y\\)-Richtung. Die Parameter \\(b\\) und \\(c\\) wirken in \\(x\\)-Richtung."
      },
      {
        titel: "Parameter a",
        text:
          "Der Parameter \\(a\\) verändert den Graphen in \\(y\\)-Richtung. Ist \\(|a|>1\\), wird der Graph vertikal gestreckt. Ist \\(0<|a|<1\\), wird er vertikal gestaucht. Ist \\(a<0\\), wird der Graph zusätzlich an der \\(x\\)-Achse gespiegelt."
      },
      {
        titel: "Parameter d",
        text:
          "Der Parameter \\(d\\) verschiebt den Graphen nach oben oder unten. Bei \\(d>0\\) wird der Graph nach oben verschoben. Bei \\(d<0\\) wird er nach unten verschoben."
      },
      {
        titel: "Parameter b",
        text:
          "Der Parameter \\(b\\) verändert den Graphen in \\(x\\)-Richtung. Ist \\(|b|>1\\), wird der Graph horizontal gestaucht. Ist \\(0<|b|<1\\), wird er horizontal gestreckt. Ist \\(b<0\\), wird der Graph an der \\(y\\)-Achse gespiegelt."
      },
      {
        titel: "Parameter c",
        text:
          "Der Parameter \\(c\\) verschiebt den Graphen horizontal. Bei \\(f(x+c)\\) verschiebt sich der Graph nach links, wenn \\(c\\) positiv ist, und nach rechts, wenn \\(c\\) negativ ist. Das wirkt auf viele Schüler zuerst umgekehrt."
      },
      {
        titel: "Warum ist die x-Richtung ungewohnt?",
        text:
          "Veränderungen innerhalb der Klammer wirken auf die \\(x\\)-Werte. Deshalb erscheinen sie oft umgekehrt: \\(f(x-3)\\) verschiebt den Graphen nach rechts, obwohl ein Minuszeichen steht."
      },
      {
        titel: "Quadratische Funktionen mit Parametern",
        text:
          "Bei Funktionen wie \\(f(x)=a(x-u)^2+v\\) erkennt man den Scheitelpunkt direkt. Der Scheitelpunkt ist \\(S(u\\mid v)\\). Der Parameter \\(a\\) entscheidet über Öffnung, Streckung und Spiegelung."
      },
      {
        titel: "Trigonometrische Funktionen mit Parametern",
        text:
          "Bei Funktionen wie \\(f(x)=a\\cdot\\sin(bx+c)+d\\) verändert \\(a\\) die Amplitude, \\(b\\) die Periode, \\(c\\) die horizontale Verschiebung und \\(d\\) die Mittellinie."
      },
      {
        titel: "Exponentialfunktionen mit Parametern",
        text:
          "Bei Exponentialfunktionen verändern Parameter die Anfangshöhe, das Wachstum, die Verschiebung und die waagrechte Asymptote. Besonders \\(d\\) beeinflusst die waagrechte Asymptote."
      },
      {
        titel: "Logarithmusfunktionen mit Parametern",
        text:
          "Bei Logarithmusfunktionen beeinflussen Parameter die Lage des Graphen, den Definitionsbereich und die senkrechte Asymptote. Verschiebungen in \\(x\\)-Richtung sind hier besonders wichtig."
      }
    ],
   methoden: [
  {
    titel: "Methode: Parameter in \\(g(x)=a\\cdot f(bx+c)+d\\) deuten",
    schritte: [
      "1. Betrachte zuerst den Parameter \\(a\\) vor der Funktion.",
      "2. Entscheide, ob eine Streckung, Stauchung oder Spiegelung an der \\(x\\)-Achse vorliegt.",
      "3. Betrachte danach den Parameter \\(d\\) ausserhalb der Funktion.",
      "4. Bestimme die Verschiebung nach oben oder unten.",
      "5. Betrachte nun den Ausdruck innerhalb der Klammer.",
      "6. Entscheide, wie \\(b\\) den Graphen horizontal verändert.",
      "7. Bestimme zuletzt die horizontale Verschiebung durch \\(c\\).",
      "8. Beschreibe die Veränderungen in einer sinnvollen Reihenfolge."
    ]
  },
  {
    titel: "Methode: Verschiebung bei \\(f(x-u)\\) erkennen",
    schritte: [
      "1. Schaue genau auf den Ausdruck in der Klammer.",
      "2. Steht dort \\(x-u\\), wird der Graph um \\(u\\) nach rechts verschoben.",
      "3. Steht dort \\(x+u\\), wird der Graph um \\(u\\) nach links verschoben.",
      "4. Merke: Die horizontale Verschiebung wirkt scheinbar umgekehrt.",
      "5. Kontrolliere die Verschiebung, indem du überlegst, wann die Klammer \\(0\\) wird."
    ]
  },
  {
    titel: "Methode: Scheitelpunktform untersuchen",
    schritte: [
      "1. Bringe die Funktion in die Form \\(f(x)=a(x-u)^2+v\\).",
      "2. Lies den Scheitelpunkt \\(S(u\\mid v)\\) ab.",
      "3. Prüfe das Vorzeichen von \\(a\\).",
      "4. Bei \\(a>0\\) öffnet die Parabel nach oben.",
      "5. Bei \\(a<0\\) öffnet die Parabel nach unten.",
      "6. Prüfe die Grösse von \\(|a|\\) für Streckung oder Stauchung."
    ]
  },
  {
    titel: "Methode: Sinusfunktion mit Parametern untersuchen",
    schritte: [
      "1. Bringe die Funktion in die Form \\(f(x)=a\\cdot\\sin(bx+c)+d\\).",
      "2. Die Amplitude ist \\(|a|\\).",
      "3. Die Mittellinie ist \\(y=d\\).",
      "4. Die Periode ist \\(\\frac{2\\pi}{|b|}\\).",
      "5. Die horizontale Verschiebung erhält man, indem man \\(bx+c=0\\) löst.",
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
      "2. Setze das Argument grösser als \\(0\\), um den Definitionsbereich zu bestimmen.",
      "3. Bestimme daraus auch die senkrechte Asymptote.",
      "4. Prüfe Verschiebungen nach oben oder unten.",
      "5. Prüfe Streckung, Stauchung oder Spiegelung.",
      "6. Beschreibe den Graphen mit Definitionsbereich und Asymptote."
    ]
  }
],
merksaetze: [
  "Parameter verändern Form oder Lage eines Graphen.",
  "\\(a\\) wirkt vertikal: Streckung, Stauchung oder Spiegelung an der \\(x\\)-Achse.",
  "\\(d\\) verschiebt den Graphen nach oben oder unten.",
  "\\(b\\) wirkt horizontal: Stauchung, Streckung oder Spiegelung an der \\(y\\)-Achse.",
  "\\(c\\) bewirkt eine horizontale Verschiebung.",
  "\\(f(x-u)\\) verschiebt den Graphen nach rechts.",
  "\\(f(x+u)\\) verschiebt den Graphen nach links.",
  "Bei \\(f(x)=a(x-u)^2+v\\) ist der Scheitelpunkt \\(S(u\\mid v)\\).",
  "Bei Sinusfunktionen ist die Amplitude \\(|a|\\).",
  "Bei Sinusfunktionen ist die Periode \\(\\frac{2\\pi}{|b|}\\).",
  "Bei Exponentialfunktionen zeigt \\(d\\) oft die waagrechte Asymptote.",
  "Bei Logarithmusfunktionen bestimmt das Argument den Definitionsbereich."
],
typischeFehler: [
  {
    fehler: "Man denkt, \\(f(x-3)\\) verschiebe den Graphen nach links.",
    korrektur:
      "Richtig ist: \\(f(x-3)\\) verschiebt den Graphen nach rechts. Man kann prüfen, wann die Klammer \\(0\\) wird: \\(x-3=0\\) ergibt \\(x=3\\)."
  },
  {
    fehler: "Man verwechselt vertikale und horizontale Streckung.",
    korrektur:
      "Ein Faktor ausserhalb der Funktion wirkt vertikal. Ein Faktor innerhalb der Klammer wirkt horizontal."
  },
  {
    fehler: "Man vergisst bei negativem \\(a\\) die Spiegelung.",
    korrektur:
      "Ist \\(a<0\\), wird der Graph an der \\(x\\)-Achse gespiegelt. Danach kann zusätzlich eine Streckung oder Stauchung vorliegen."
  },
  {
    fehler: "Man liest den Scheitelpunkt aus \\(f(x)=a(x+2)^2-5\\) falsch ab.",
    korrektur:
      "Der Scheitelpunkt ist \\(S(-2\\mid -5)\\), nicht \\(S(2\\mid -5)\\). In der Klammer wirkt die Verschiebung umgekehrt."
  },
  {
    fehler: "Man sagt bei \\(\\sin(2x)\\), die Periode werde doppelt so gross.",
    korrektur:
      "Richtig ist: Die Periode wird halb so gross. Bei \\(\\sin(bx)\\) gilt die Periode \\(\\frac{2\\pi}{|b|}\\)."
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
      "Beschreibe, wie der Graph von \\(g(x)=x^2+4\\) aus dem Graphen von \\(f(x)=x^2\\) entsteht.",
    loesung: [
      "Die Grundfunktion ist \\(f(x)=x^2\\).",
      "Bei \\(g(x)=x^2+4\\) steht ausserhalb der Funktion \\(+4\\).",
      "Das bedeutet eine Verschiebung in \\(y\\)-Richtung.",
      "Der Graph wird um \\(4\\) Einheiten nach oben verschoben."
    ]
  },
  {
    titel: "Aufgabe 2: Horizontale Verschiebung",
    schwierigkeit: "einfach",
    aufgabe:
      "Beschreibe, wie der Graph von \\(g(x)=(x-5)^2\\) aus dem Graphen von \\(f(x)=x^2\\) entsteht.",
    loesung: [
      "Die Grundfunktion ist \\(f(x)=x^2\\).",
      "In der Klammer steht \\(x-5\\).",
      "Eine Form \\(f(x-u)\\) verschiebt den Graphen um \\(u\\) nach rechts.",
      "Also wird der Graph um \\(5\\) Einheiten nach rechts verschoben."
    ]
  },
  {
    titel: "Aufgabe 3: Spiegelung und Streckung",
    schwierigkeit: "einfach",
    aufgabe:
      "Beschreibe die Veränderung von \\(g(x)=-3x^2\\) gegenüber \\(f(x)=x^2\\).",
    loesung: [
      "Der Faktor vor \\(x^2\\) ist \\(-3\\).",
      "Der Betrag \\(3\\) bedeutet eine vertikale Streckung um den Faktor \\(3\\).",
      "Das Minuszeichen bedeutet eine Spiegelung an der \\(x\\)-Achse.",
      "Der Graph wird also gestreckt und nach unten geöffnet."
    ]
  },
  {
    titel: "Aufgabe 4: Scheitelpunkt ablesen",
    schwierigkeit: "mittel",
    aufgabe:
      "Bestimme den Scheitelpunkt von \\(f(x)=2(x-3)^2-7\\) und beschreibe die Öffnung.",
    loesung: [
      "Die Funktion steht in Scheitelpunktform.",
      "Die Form lautet \\(f(x)=a(x-u)^2+v\\).",
      "Hier ist \\(u=3\\) und \\(v=-7\\).",
      "Der Scheitelpunkt ist also \\(S(3\\mid -7)\\).",
      "Da \\(a=2\\) positiv ist, öffnet die Parabel nach oben.",
      "Da \\(|a|>1\\) ist, ist sie schmaler als die Normalparabel."
    ]
  },
  {
    titel: "Aufgabe 5: Allgemeine Transformation beschreiben",
    schwierigkeit: "mittel",
    aufgabe:
      "Beschreibe die Transformation von \\(g(x)=2\\cdot f(x+4)-1\\) gegenüber \\(f(x)\\).",
    loesung: [
      "Der Faktor \\(2\\) steht ausserhalb der Funktion.",
      "Das bedeutet eine vertikale Streckung um den Faktor \\(2\\).",
      "In der Klammer steht \\(x+4\\).",
      "Das bedeutet eine Verschiebung um \\(4\\) Einheiten nach links.",
      "Das \\(-1\\) ausserhalb der Funktion verschiebt den Graphen um \\(1\\) Einheit nach unten.",
      "Insgesamt: links \\(4\\), vertikal gestreckt mit Faktor \\(2\\), danach \\(1\\) nach unten."
    ]
  },
  {
    titel: "Aufgabe 6: Sinusfunktion untersuchen",
    schwierigkeit: "mittel",
    aufgabe:
      "Gegeben ist \\(f(x)=3\\cdot\\sin(2x)-1\\). Bestimme Amplitude, Periode und Mittellinie.",
    loesung: [
      "Die Funktion hat die Form \\(f(x)=a\\cdot\\sin(bx)+d\\).",
      "Hier ist \\(a=3\\).",
      "Die Amplitude ist \\(|a|=3\\).",
      "Hier ist \\(b=2\\).",
      "Die Periode ist \\(\\frac{2\\pi}{|b|}\\).",
      "Also ist die Periode \\(\\frac{2\\pi}{2}=\\pi\\).",
      "Hier ist \\(d=-1\\).",
      "Die Mittellinie ist \\(y=-1\\)."
    ]
  },
  {
    titel: "Aufgabe 7: Exponentialfunktion deuten",
    schwierigkeit: "mittel",
    aufgabe:
      "Beschreibe den Graphen von \\(g(x)=2\\cdot e^x+5\\) im Vergleich zu \\(f(x)=e^x\\).",
    loesung: [
      "Die Grundfunktion ist \\(f(x)=e^x\\).",
      "Der Faktor \\(2\\) steht vor \\(e^x\\).",
      "Das bedeutet eine vertikale Streckung um den Faktor \\(2\\).",
      "Das \\(+5\\) verschiebt den Graphen um \\(5\\) Einheiten nach oben.",
      "Die waagrechte Asymptote ist dadurch \\(y=5\\)."
    ]
  },
  {
    titel: "Aufgabe 8: Logarithmusfunktion mit Definitionsbereich",
    schwierigkeit: "mittel",
    aufgabe:
      "Bestimme den Definitionsbereich von \\(f(x)=\\log(x-4)\\) und beschreibe die Verschiebung gegenüber \\(\\log(x)\\).",
    loesung: [
      "Beim Logarithmus muss das Argument positiv sein.",
      "Also gilt \\(x-4>0\\).",
      "Daraus folgt \\(x>4\\).",
      "Der Definitionsbereich ist also \\(x>4\\).",
      "Gegenüber \\(\\log(x)\\) ist der Graph um \\(4\\) Einheiten nach rechts verschoben.",
      "Die senkrechte Asymptote ist \\(x=4\\)."
    ]
  },
  {
    titel: "Aufgabe 9: Parameter bestimmen",
    schwierigkeit: "schwer",
    aufgabe:
      "Eine Parabel hat den Scheitelpunkt \\(S(2\\mid -3)\\) und ist nach unten geöffnet. Gib eine mögliche Funktionsgleichung in Scheitelpunktform an.",
    loesung: [
      "Die Scheitelpunktform lautet \\(f(x)=a(x-u)^2+v\\).",
      "Der Scheitelpunkt \\(S(2\\mid -3)\\) bedeutet \\(u=2\\) und \\(v=-3\\).",
      "Also hat die Funktion die Form \\(f(x)=a(x-2)^2-3\\).",
      "Da die Parabel nach unten geöffnet ist, muss \\(a\\) negativ sein.",
      "Eine mögliche Wahl ist \\(a=-1\\).",
      "Eine mögliche Funktionsgleichung ist also \\(f(x)=-(x-2)^2-3\\)."
    ]
  },
  {
    titel: "Aufgabe 10: Verschiebung durch Klammer bestimmen",
    schwierigkeit: "schwer",
    aufgabe:
      "Beschreibe die Transformation von \\(g(x)=-0.5\\cdot f(3(x-2))+4\\) gegenüber \\(f(x)\\).",
    loesung: [
      "Der Faktor \\(-0.5\\) steht ausserhalb der Funktion.",
      "Der Betrag \\(0.5\\) bedeutet eine vertikale Stauchung.",
      "Das Minuszeichen bedeutet eine Spiegelung an der \\(x\\)-Achse.",
      "Innerhalb der Funktion steht \\(3(x-2)\\).",
      "Der Faktor \\(3\\) bewirkt eine horizontale Stauchung.",
      "Der Ausdruck \\(x-2\\) bewirkt eine Verschiebung um \\(2\\) Einheiten nach rechts.",
      "Das \\(+4\\) ausserhalb verschiebt den Graphen um \\(4\\) Einheiten nach oben.",
      "Insgesamt: horizontal gestaucht, \\(2\\) nach rechts, vertikal gestaucht, an der \\(x\\)-Achse gespiegelt und \\(4\\) nach oben verschoben."
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
    frage: "Was bewirkt der Parameter \\(a\\) in \\(a\\cdot f(x)\\)?",
    antwort:
      "Er verändert den Graphen in \\(y\\)-Richtung. Bei negativem \\(a\\) wird zusätzlich an der \\(x\\)-Achse gespiegelt."
  },
  {
    frage: "Was bewirkt der Parameter \\(d\\) in \\(f(x)+d\\)?",
    antwort:
      "Er verschiebt den Graphen nach oben oder unten. Bei positivem \\(d\\) nach oben, bei negativem \\(d\\) nach unten."
  },
  {
    frage: "Warum verschiebt \\(f(x-3)\\) den Graphen nach rechts?",
    antwort:
      "Weil der ursprüngliche \\(x\\)-Wert erst bei \\(x=3\\) erreicht wird. Man kann es sehen, indem man \\(x-3=0\\) setzt."
  },
  {
    frage: "Wie liest man den Scheitelpunkt aus \\(f(x)=a(x-u)^2+v\\) ab?",
    antwort:
      "Der Scheitelpunkt ist \\(S(u\\mid v)\\). Das Vorzeichen in der Klammer muss dabei richtig interpretiert werden."
  },
  {
    frage: "Was bedeutet bei einer Sinusfunktion die Amplitude?",
    antwort:
      "Die Amplitude ist der maximale Abstand des Graphen von seiner Mittellinie. Bei \\(a\\cdot\\sin(x)\\) ist sie \\(|a|\\)."
  },
  {
    frage: "Wie berechnet man die Periode von \\(\\sin(bx)\\)?",
    antwort:
      "Die Periode ist \\(\\frac{2\\pi}{|b|}\\). Ein grösseres \\(b\\) macht die Periode kleiner."
  },
  {
    frage: "Was muss man bei Logarithmusfunktionen immer prüfen?",
    antwort:
      "Man muss prüfen, für welche \\(x\\)-Werte das Argument positiv ist. Daraus folgen Definitionsbereich und oft auch die senkrechte Asymptote."
  }
],
nachtVorTest: [
  "Kannst du erklären, was ein Parameter ist?",
  "Weisst du, dass \\(a\\) den Graphen vertikal streckt, staucht oder spiegelt?",
  "Weisst du, dass \\(d\\) den Graphen nach oben oder unten verschiebt?",
  "Kannst du erklären, warum \\(f(x-3)\\) nach rechts verschoben wird?",
  "Kannst du den Scheitelpunkt aus \\(a(x-u)^2+v\\) ablesen?",
  "Kannst du bei negativem \\(a\\) die Spiegelung erkennen?",
  "Kannst du bei Sinusfunktionen die Amplitude bestimmen?",
  "Kannst du bei Sinusfunktionen die Periode mit \\(\\frac{2\\pi}{|b|}\\) berechnen?",
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
    "Du verstehst die geometrische Bedeutung als Spiegelung an der Geraden \\(y=x\\).",
    "Du kannst Definitionsmenge und Wertemenge einer Funktion bestimmen.",
    "Du weisst, dass bei der Umkehrfunktion Definitionsmenge und Wertemenge vertauscht werden.",
    "Du erkennst, wann eine Funktion überhaupt umkehrbar ist.",
    "Du kannst den Zusammenhang zwischen Exponentialfunktion und Logarithmusfunktion erklären.",
    "Du kannst bei quadratischen Funktionen eine Einschränkung des Definitionsbereichs vornehmen.",
    "Du erkennst typische Fehler beim Vertauschen von \\(x\\) und \\(y\\).",
    "Du kannst Umkehrfunktionen in Prüfungsaufgaben sauber begründen."
  ],
  theorie: [
    {
      titel: "Was ist eine Umkehrfunktion?",
      text:
        "Eine Umkehrfunktion macht die Wirkung einer Funktion rückgängig. Wenn eine Funktion \\(x\\) auf \\(y\\) abbildet, dann bildet die Umkehrfunktion dieses \\(y\\) wieder auf \\(x\\) zurück."
    },
    {
      titel: "Schreibweise",
      text:
        "Die Umkehrfunktion von \\(f\\) schreibt man meistens als \\(f^{-1}\\). Wichtig: \\(f^{-1}\\) bedeutet hier nicht \\(\\frac{1}{f}\\), sondern die inverse Funktion."
    },
    {
      titel: "Grundidee",
      text:
        "Wenn \\(f(a)=b\\) gilt, dann gilt bei der Umkehrfunktion \\(f^{-1}(b)=a\\). Die Eingabe und die Ausgabe werden also vertauscht."
    },
    {
      titel: "Geometrische Bedeutung",
      text:
        "Der Graph einer Funktion und der Graph ihrer Umkehrfunktion sind Spiegelbilder an der Geraden \\(y=x\\). Jeder Punkt \\((a\\mid b)\\) wird dabei zu \\((b\\mid a)\\)."
    },
    {
      titel: "Definitionsmenge und Wertemenge",
      text:
        "Die Definitionsmenge beschreibt, welche \\(x\\)-Werte erlaubt sind. Die Wertemenge beschreibt, welche \\(y\\)-Werte herauskommen können."
    },
    {
      titel: "Vertauschung bei der Umkehrfunktion",
      text:
        "Bei einer Umkehrfunktion werden Definitionsmenge und Wertemenge vertauscht. Die Wertemenge von \\(f\\) wird zur Definitionsmenge von \\(f^{-1}\\), und die Definitionsmenge von \\(f\\) wird zur Wertemenge von \\(f^{-1}\\)."
    },
    {
      titel: "Wann ist eine Funktion umkehrbar?",
      text:
        "Eine Funktion ist nur dann eindeutig umkehrbar, wenn jeder \\(y\\)-Wert höchstens einmal vorkommt. Anders gesagt: Zu jedem Funktionswert darf es nur einen passenden \\(x\\)-Wert geben."
    },
    {
      titel: "Warum ist \\(x^2\\) nicht direkt umkehrbar?",
      text:
        "Die Funktion \\(f(x)=x^2\\) ist auf ganz \\(\\mathbb{R}\\) nicht eindeutig umkehrbar, weil zum Beispiel \\(f(2)=4\\) und \\(f(-2)=4\\) gilt. Ein \\(y\\)-Wert gehört also zu zwei verschiedenen \\(x\\)-Werten."
    },
    {
      titel: "Einschränkung des Definitionsbereichs",
      text:
        "Man kann eine nicht eindeutig umkehrbare Funktion oft umkehrbar machen, indem man den Definitionsbereich einschränkt. Bei \\(f(x)=x^2\\) nimmt man zum Beispiel nur \\(x\\ge 0\\) oder nur \\(x\\le 0\\)."
    },
    {
      titel: "Exponentialfunktion und Logarithmusfunktion",
      text:
        "Exponentialfunktion und Logarithmusfunktion sind Umkehrfunktionen voneinander. Wenn \\(f(x)=a^x\\) gilt, dann ist die Umkehrfunktion \\(f^{-1}(x)=\\log_a(x)\\)."
    },
    {
      titel: "Definitionsmenge bei Exponentialfunktionen",
      text:
        "Eine Exponentialfunktion \\(f(x)=a^x\\) mit \\(a>0\\) und \\(a\\ne 1\\) ist für alle reellen \\(x\\) definiert. Ihre Werte sind aber immer positiv."
    },
    {
      titel: "Definitionsmenge bei Logarithmusfunktionen",
      text:
        "Eine Logarithmusfunktion \\(f(x)=\\log_a(x)\\) ist nur für \\(x>0\\) definiert. Ihre Werte können aber alle reellen Zahlen sein."
    }
  ],
  methoden: [
    {
      titel: "Methode: Umkehrfunktion algebraisch bestimmen",
      schritte: [
        "1. Schreibe die Funktion als \\(y=f(x)\\).",
        "2. Vertausche \\(x\\) und \\(y\\).",
        "3. Löse die neue Gleichung nach \\(y\\) auf.",
        "4. Schreibe das Ergebnis als \\(f^{-1}(x)\\).",
        "5. Bestimme oder beachte Definitionsmenge und Wertemenge.",
        "6. Prüfe bei Bedarf durch Einsetzen oder durch Verkettung."
      ]
    },
    {
      titel: "Methode: Umkehrbarkeit prüfen",
      schritte: [
        "1. Überlege, ob jeder \\(y\\)-Wert nur einmal vorkommt.",
        "2. Prüfe grafisch, ob jede waagrechte Linie den Graphen höchstens einmal schneidet.",
        "3. Prüfe rechnerisch, ob aus \\(f(x_1)=f(x_2)\\) zwingend \\(x_1=x_2\\) folgt.",
        "4. Wenn ein \\(y\\)-Wert mehrfach vorkommt, ist die Funktion nicht eindeutig umkehrbar.",
        "5. Überlege dann, ob der Definitionsbereich eingeschränkt werden kann."
      ]
    },
    {
      titel: "Methode: Umkehrfunktion geometrisch zeichnen",
      schritte: [
        "1. Zeichne den Graphen der ursprünglichen Funktion.",
        "2. Zeichne die Gerade \\(y=x\\) als Spiegelachse.",
        "3. Spiegle wichtige Punkte des Graphen an dieser Geraden.",
        "4. Aus einem Punkt \\((a\\mid b)\\) wird der Punkt \\((b\\mid a)\\).",
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
        "1. Schreibe die Funktion als \\(y=mx+q\\).",
        "2. Vertausche \\(x\\) und \\(y\\).",
        "3. Löse nach \\(y\\) auf.",
        "4. Achte darauf, dass \\(m\\ne 0\\) sein darf.",
        "5. Gib die Umkehrfunktion an."
      ]
    },
    {
      titel: "Methode: Exponentialfunktion umkehren",
      schritte: [
        "1. Schreibe die Funktion als \\(y=a^x\\).",
        "2. Vertausche \\(x\\) und \\(y\\).",
        "3. Du erhältst \\(x=a^y\\).",
        "4. Löse mit dem Logarithmus nach \\(y\\) auf.",
        "5. Es ergibt sich \\(y=\\log_a(x)\\).",
        "6. Beachte: Die Umkehrfunktion ist nur für \\(x>0\\) definiert."
      ]
    }
  ],
  merksaetze: [
    "Eine Umkehrfunktion macht die ursprüngliche Funktion rückgängig.",
    "\\(f^{-1}\\) bedeutet inverse Funktion, nicht Kehrwert.",
    "Bei der Umkehrfunktion werden \\(x\\) und \\(y\\) vertauscht.",
    "Grafisch ist die Umkehrfunktion die Spiegelung an \\(y=x\\).",
    "Aus dem Punkt \\((a\\mid b)\\) wird bei der Umkehrfunktion der Punkt \\((b\\mid a)\\).",
    "Definitionsmenge und Wertemenge werden bei der Umkehrfunktion vertauscht.",
    "Eine Funktion ist nur eindeutig umkehrbar, wenn jeder \\(y\\)-Wert höchstens einmal vorkommt.",
    "\\(x^2\\) ist auf ganz \\(\\mathbb{R}\\) nicht eindeutig umkehrbar.",
    "\\(a^x\\) und \\(\\log_a(x)\\) sind Umkehrfunktionen voneinander.",
    "Der Logarithmus ist nur für positive Argumente definiert."
  ],
  typischeFehler: [
    {
      fehler: "Man verwechselt \\(f^{-1}(x)\\) mit \\(\\frac{1}{f(x)}\\).",
      korrektur:
        "\\(f^{-1}(x)\\) bedeutet Umkehrfunktion. Es ist nicht der Kehrwert der Funktion."
    },
    {
      fehler: "Man vertauscht \\(x\\) und \\(y\\), löst aber danach nicht nach \\(y\\) auf.",
      korrektur:
        "Nach dem Vertauschen muss die Gleichung nach \\(y\\) aufgelöst werden. Erst dann hat man die Umkehrfunktion."
    },
    {
      fehler: "Man vergisst, Definitionsmenge und Wertemenge zu vertauschen.",
      korrektur:
        "Die Wertemenge von \\(f\\) wird zur Definitionsmenge von \\(f^{-1}\\). Das ist besonders bei Logarithmen und Wurzeln wichtig."
    },
    {
      fehler: "Man behauptet, \\(f(x)=x^2\\) sei auf ganz \\(\\mathbb{R}\\) einfach umkehrbar.",
      korrektur:
        "Das stimmt nicht, weil positive und negative \\(x\\)-Werte denselben Funktionswert ergeben können. Man muss den Definitionsbereich einschränken."
    },
    {
      fehler: "Man spiegelt den Graphen an der \\(x\\)-Achse statt an \\(y=x\\).",
      korrektur:
        "Die Umkehrfunktion entsteht durch Spiegelung an der Geraden \\(y=x\\), nicht an der \\(x\\)-Achse."
    },
    {
      fehler: "Man vergisst beim Logarithmus die Bedingung \\(x>0\\).",
      korrektur:
        "Da der Logarithmus die Umkehrfunktion einer Exponentialfunktion ist, ist sein Definitionsbereich nur \\(x>0\\)."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Einfache lineare Umkehrfunktion",
      schwierigkeit: "einfach",
      aufgabe:
        "Bestimme die Umkehrfunktion von \\(f(x)=2x+3\\).",
      loesung: [
        "Schreibe zuerst \\(y=2x+3\\).",
        "Vertausche \\(x\\) und \\(y\\).",
        "Dann erhält man \\(x=2y+3\\).",
        "Löse nach \\(y\\) auf.",
        "\\(x-3=2y\\).",
        "\\(y=\\frac{x-3}{2}\\).",
        "Also ist \\(f^{-1}(x)=\\frac{x-3}{2}\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Punkt spiegeln",
      schwierigkeit: "einfach",
      aufgabe:
        "Der Punkt \\(P(2\\mid 7)\\) liegt auf dem Graphen von \\(f\\). Welcher Punkt liegt auf dem Graphen von \\(f^{-1}\\)?",
      loesung: [
        "Bei der Umkehrfunktion werden \\(x\\)- und \\(y\\)-Koordinate vertauscht.",
        "Aus dem Punkt \\((2\\mid 7)\\) wird der Punkt \\((7\\mid 2)\\).",
        "Also liegt \\(P'(7\\mid 2)\\) auf dem Graphen von \\(f^{-1}\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Definitionsmenge und Wertemenge vertauschen",
      schwierigkeit: "einfach",
      aufgabe:
        "Eine Funktion \\(f\\) hat die Definitionsmenge \\(D=[0,\\infty)\\) und die Wertemenge \\(W=[-3,\\infty)\\). Gib Definitionsmenge und Wertemenge von \\(f^{-1}\\) an.",
      loesung: [
        "Bei der Umkehrfunktion werden Definitionsmenge und Wertemenge vertauscht.",
        "Die Wertemenge von \\(f\\) wird zur Definitionsmenge von \\(f^{-1}\\).",
        "Also ist \\(D_{f^{-1}}=[-3,\\infty)\\).",
        "Die Definitionsmenge von \\(f\\) wird zur Wertemenge von \\(f^{-1}\\).",
        "Also ist \\(W_{f^{-1}}=[0,\\infty)\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Umkehrfunktion mit Bruch",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme die Umkehrfunktion von \\(f(x)=\\frac{x-4}{3}\\).",
      loesung: [
        "Schreibe \\(y=\\frac{x-4}{3}\\).",
        "Vertausche \\(x\\) und \\(y\\).",
        "Dann gilt \\(x=\\frac{y-4}{3}\\).",
        "Multipliziere mit \\(3\\).",
        "\\(3x=y-4\\).",
        "Addiere \\(4\\).",
        "\\(y=3x+4\\).",
        "Also ist \\(f^{-1}(x)=3x+4\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Umkehrbarkeit von \\(x^2\\)",
      schwierigkeit: "mittel",
      aufgabe:
        "Erkläre, warum \\(f(x)=x^2\\) auf ganz \\(\\mathbb{R}\\) keine eindeutige Umkehrfunktion besitzt.",
      loesung: [
        "Eine Funktion ist eindeutig umkehrbar, wenn jeder \\(y\\)-Wert höchstens einmal vorkommt.",
        "Bei \\(f(x)=x^2\\) gilt aber \\(f(2)=4\\).",
        "Gleichzeitig gilt auch \\(f(-2)=4\\).",
        "Der Funktionswert \\(4\\) gehört also zu zwei verschiedenen \\(x\\)-Werten.",
        "Deshalb kann man nicht eindeutig zurückgehen.",
        "Also besitzt \\(f(x)=x^2\\) auf ganz \\(\\mathbb{R}\\) keine eindeutige Umkehrfunktion."
      ]
    },
    {
      titel: "Aufgabe 6: Eingeschränkte quadratische Funktion umkehren",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme die Umkehrfunktion von \\(f(x)=x^2\\) für \\(x\\ge 0\\).",
      loesung: [
        "Schreibe \\(y=x^2\\).",
        "Vertausche \\(x\\) und \\(y\\).",
        "Dann gilt \\(x=y^2\\).",
        "Löse nach \\(y\\) auf.",
        "Eigentlich ergibt sich \\(y=\\pm\\sqrt{x}\\).",
        "Da die ursprüngliche Funktion aber auf \\(x\\ge 0\\) eingeschränkt ist, nimmt man nur den positiven Ast.",
        "Also ist \\(f^{-1}(x)=\\sqrt{x}\\).",
        "Die Definitionsmenge der Umkehrfunktion ist \\(x\\ge 0\\)."
      ]
    },
    {
      titel: "Aufgabe 7: Exponentialfunktion umkehren",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme die Umkehrfunktion von \\(f(x)=2^x\\).",
      loesung: [
        "Schreibe \\(y=2^x\\).",
        "Vertausche \\(x\\) und \\(y\\).",
        "Dann gilt \\(x=2^y\\).",
        "Löse mit dem Logarithmus zur Basis \\(2\\) nach \\(y\\) auf.",
        "Daraus folgt \\(y=\\log_2(x)\\).",
        "Also ist \\(f^{-1}(x)=\\log_2(x)\\).",
        "Die Umkehrfunktion ist nur für \\(x>0\\) definiert."
      ]
    },
    {
      titel: "Aufgabe 8: Logarithmusfunktion umkehren",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme die Umkehrfunktion von \\(f(x)=\\log_3(x)\\).",
      loesung: [
        "Schreibe \\(y=\\log_3(x)\\).",
        "Vertausche \\(x\\) und \\(y\\).",
        "Dann gilt \\(x=\\log_3(y)\\).",
        "Schreibe die Logarithmusgleichung als Potenzgleichung.",
        "Aus \\(x=\\log_3(y)\\) folgt \\(3^x=y\\).",
        "Also ist \\(f^{-1}(x)=3^x\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Umkehrfunktion mit Verschiebung",
      schwierigkeit: "schwer",
      aufgabe:
        "Bestimme die Umkehrfunktion von \\(f(x)=3^x+5\\).",
      loesung: [
        "Schreibe \\(y=3^x+5\\).",
        "Vertausche \\(x\\) und \\(y\\).",
        "Dann gilt \\(x=3^y+5\\).",
        "Subtrahiere \\(5\\).",
        "\\(x-5=3^y\\).",
        "Löse mit dem Logarithmus zur Basis \\(3\\) nach \\(y\\) auf.",
        "\\(y=\\log_3(x-5)\\).",
        "Also ist \\(f^{-1}(x)=\\log_3(x-5)\\).",
        "Der Definitionsbereich der Umkehrfunktion ist \\(x>5\\)."
      ]
    },
    {
      titel: "Aufgabe 10: Umkehrfunktion kontrollieren",
      schwierigkeit: "schwer",
      aufgabe:
        "Gegeben ist \\(f(x)=4x-1\\) und \\(f^{-1}(x)=\\frac{x+1}{4}\\). Kontrolliere durch Verkettung, dass dies stimmt.",
      loesung: [
        "Man prüft, ob \\(f(f^{-1}(x))=x\\) gilt.",
        "Setze \\(f^{-1}(x)\\) in \\(f\\) ein.",
        "\\(f(f^{-1}(x))=4\\cdot\\frac{x+1}{4}-1\\).",
        "Das ergibt \\(x+1-1\\).",
        "Also \\(f(f^{-1}(x))=x\\).",
        "Man kann auch \\(f^{-1}(f(x))\\) prüfen.",
        "\\(f^{-1}(f(x))=\\frac{(4x-1)+1}{4}\\).",
        "Das ergibt \\(\\frac{4x}{4}=x\\).",
        "Damit ist die Umkehrfunktion korrekt."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was ist eine Umkehrfunktion?",
      antwort:
        "Eine Umkehrfunktion macht die ursprüngliche Funktion rückgängig. Wenn \\(f\\) den Wert \\(x\\) auf \\(y\\) abbildet, dann bildet \\(f^{-1}\\) den Wert \\(y\\) wieder auf \\(x\\) ab."
    },
    {
      frage: "Was bedeutet \\(f^{-1}\\)?",
      antwort:
        "\\(f^{-1}\\) bedeutet Umkehrfunktion. Es bedeutet nicht \\(\\frac{1}{f}\\)."
    },
    {
      frage: "Wie bestimmt man eine Umkehrfunktion algebraisch?",
      antwort:
        "Man schreibt \\(y=f(x)\\), vertauscht \\(x\\) und \\(y\\) und löst danach wieder nach \\(y\\) auf."
    },
    {
      frage: "Wie sieht die Umkehrfunktion geometrisch aus?",
      antwort:
        "Der Graph der Umkehrfunktion ist die Spiegelung des ursprünglichen Graphen an der Geraden \\(y=x\\)."
    },
    {
      frage: "Was passiert mit Definitionsmenge und Wertemenge?",
      antwort:
        "Sie werden vertauscht. Die Wertemenge von \\(f\\) wird zur Definitionsmenge von \\(f^{-1}\\) und die Definitionsmenge von \\(f\\) wird zur Wertemenge von \\(f^{-1}\\)."
    },
    {
      frage: "Warum ist \\(x^2\\) auf ganz \\(\\mathbb{R}\\) nicht umkehrbar?",
      antwort:
        "Weil verschiedene \\(x\\)-Werte denselben \\(y\\)-Wert ergeben können, zum Beispiel \\(2\\) und \\(-2\\). Deshalb ist das Zurückgehen nicht eindeutig."
    },
    {
      frage: "Welche Funktion ist die Umkehrfunktion von \\(a^x\\)?",
      antwort:
        "Die Umkehrfunktion von \\(a^x\\) ist \\(\\log_a(x)\\), sofern \\(a\\) positiv und nicht \\(1\\) ist."
    },
    {
      frage: "Welche Bedingung gilt beim Logarithmus?",
      antwort:
        "Das Argument des Logarithmus muss positiv sein. Deshalb ist \\(\\log_a(x)\\) nur für \\(x>0\\) definiert."
    }
  ],
  nachtVorTest: [
    "Kannst du erklären, was eine Umkehrfunktion macht?",
    "Weisst du, dass \\(f^{-1}\\) nicht \\(\\frac{1}{f}\\) bedeutet?",
    "Kannst du \\(x\\) und \\(y\\) vertauschen und danach nach \\(y\\) auflösen?",
    "Weisst du, dass der Graph an \\(y=x\\) gespiegelt wird?",
    "Kannst du aus \\((a\\mid b)\\) den gespiegelten Punkt \\((b\\mid a)\\) bilden?",
    "Weisst du, dass Definitionsmenge und Wertemenge vertauscht werden?",
    "Kannst du erklären, warum \\(x^2\\) auf ganz \\(\\mathbb{R}\\) nicht eindeutig umkehrbar ist?",
    "Kannst du eine Funktion durch Einschränkung des Definitionsbereichs umkehrbar machen?",
    "Kennst du den Zusammenhang zwischen \\(a^x\\) und \\(\\log_a(x)\\)?",
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
  },
     {
    id: "integrationstechniken",
    nummer: "8",
    titel: "Integrationstechniken",
    kurzbeschreibung:
      "Substitution, partielle Integration, einfache Umformungen vor dem Integrieren und Erkennen passender Integrationsmethoden.",
    lernziele: [
      "Du kannst erkennen, wann eine Substitution sinnvoll ist.",
      "Du kannst einfache Integrale mit Substitution lösen.",
      "Du verstehst die Rücksubstitution am Ende einer Substitution.",
      "Du kannst partielle Integration anwenden.",
      "Du erkennst Produkte, bei denen partielle Integration sinnvoll ist.",
      "Du kannst Integrale vor dem Rechnen vereinfachen.",
      "Du kannst entscheiden, ob Potenzregel, Substitution oder partielle Integration passt.",
      "Du kannst bestimmte Integrale mit Substitution berechnen.",
      "Du erkennst typische Fehler bei dx, du und Grenzen.",
      "Du kannst deine Stammfunktion durch Ableiten kontrollieren."
    ],
    theorie: [
      {
        titel: "Warum braucht man Integrationstechniken?",
        text:
          "Nicht jedes Integral lässt sich direkt mit der einfachen Potenzregel lösen. Wenn Funktionen verschachtelt oder multipliziert sind, braucht man zusätzliche Methoden wie Substitution oder partielle Integration."
      },
      {
        titel: "Substitution",
        text:
          "Substitution bedeutet, dass man einen komplizierten inneren Ausdruck durch eine neue Variable ersetzt. Dadurch wird das Integral oft einfacher."
      },
      {
        titel: "Grundidee der Substitution",
        text:
          "Wenn in einem Integral eine innere Funktion und ungefähr ihre Ableitung vorkommen, ist Substitution meistens sinnvoll. Man ersetzt die innere Funktion durch u."
      },
      {
        titel: "Rücksubstitution",
        text:
          "Nach dem Integrieren mit u muss man wieder zur ursprünglichen Variable x zurückkehren. Das nennt man Rücksubstitution."
      },
      {
        titel: "Substitution bei bestimmten Integralen",
        text:
          "Bei bestimmten Integralen kann man entweder die Grenzen mit substituieren oder nach der Rücksubstitution die ursprünglichen x-Grenzen verwenden. Wichtig ist, dass man nicht beides vermischt."
      },
      {
        titel: "Partielle Integration",
        text:
          "Partielle Integration verwendet man oft bei Produkten zweier Funktionen. Sie ist gewissermassen die Umkehrung der Produktregel."
      },
      {
        titel: "Formel der partiellen Integration",
        text:
          "Die Grundformel lautet: Integral von u · v' ist u · v minus Integral von u' · v. Man wählt also einen Faktor zum Ableiten und einen Faktor zum Integrieren."
      },
      {
        titel: "Wann partielle Integration?",
        text:
          "Partielle Integration ist oft sinnvoll bei Produkten wie x · eˣ, x · sin(x), x · cos(x) oder ln(x). Besonders hilfreich ist sie, wenn ein Faktor beim Ableiten einfacher wird."
      },
      {
        titel: "Vorher vereinfachen",
        text:
          "Viele Integrale wirken schwieriger, als sie sind. Man sollte zuerst ausmultiplizieren, kürzen, Potenzen umschreiben oder Brüche aufteilen, bevor man eine komplizierte Methode benutzt."
      },
      {
        titel: "Methode erkennen",
        text:
          "Direkte Integration passt bei einfachen Summen und Potenzen. Substitution passt bei verschachtelten Funktionen. Partielle Integration passt häufig bei Produkten."
      }
    ],
    methoden: [
      {
        titel: "Methode: Substitution durchführen",
        schritte: [
          "1. Suche einen inneren Ausdruck, der das Integral kompliziert macht.",
          "2. Setze diesen Ausdruck gleich u.",
          "3. Berechne die Ableitung du/dx.",
          "4. Forme nach dx oder nach dem passenden Ausdruck um.",
          "5. Ersetze im Integral alles durch u.",
          "6. Integriere das einfachere Integral.",
          "7. Ersetze am Schluss u wieder durch den ursprünglichen Ausdruck.",
          "8. Kontrolliere durch Ableiten."
        ]
      },
      {
        titel: "Methode: Substitution bei bestimmten Integralen",
        schritte: [
          "1. Wähle wie gewohnt eine Substitution u.",
          "2. Berechne du/dx.",
          "3. Ersetze den Integranden und dx passend.",
          "4. Ersetze auch die Grenzen durch neue u-Grenzen.",
          "5. Berechne das Integral vollständig in u.",
          "6. Setze die neuen Grenzen ein.",
          "7. Verwende dann keine x-Grenzen mehr."
        ]
      },
      {
        titel: "Methode: Partielle Integration anwenden",
        schritte: [
          "1. Erkenne ein Produkt zweier Funktionen.",
          "2. Wähle u so, dass u beim Ableiten einfacher wird.",
          "3. Wähle v' als den Teil, den du gut integrieren kannst.",
          "4. Berechne u' und v.",
          "5. Setze in die Formel Integral u · v' = u · v - Integral u' · v ein.",
          "6. Berechne das neue Integral.",
          "7. Füge beim unbestimmten Integral + C hinzu."
        ]
      },
      {
        titel: "Methode: Vor dem Integrieren vereinfachen",
        schritte: [
          "1. Prüfe, ob man ausmultiplizieren kann.",
          "2. Prüfe, ob man kürzen kann.",
          "3. Schreibe Wurzeln als Potenzen.",
          "4. Teile Brüche in mehrere einfachere Terme auf.",
          "5. Integriere erst danach.",
          "6. Kontrolliere, ob eine komplizierte Methode überhaupt nötig war."
        ]
      },
      {
        titel: "Methode: Passende Integrationstechnik erkennen",
        schritte: [
          "1. Ist es eine einfache Summe von Potenzen, integriere direkt.",
          "2. Steht eine verschachtelte Funktion mit innerer Ableitung da, verwende Substitution.",
          "3. Steht ein Produkt aus zwei unterschiedlichen Funktionen da, prüfe partielle Integration.",
          "4. Kommt ln(x) allein vor, kann partielle Integration mit 1 · ln(x) helfen.",
          "5. Wenn du unsicher bist, versuche zuerst zu vereinfachen."
        ]
      }
    ],
    merksaetze: [
      "Substitution ist die Umkehridee der Kettenregel.",
      "Partielle Integration ist die Umkehridee der Produktregel.",
      "Bei Substitution ersetzt man einen inneren Ausdruck durch u.",
      "Am Ende einer Substitution muss man wieder zurück zu x.",
      "Bei bestimmten Integralen darf man x-Grenzen und u-Grenzen nicht vermischen.",
      "Partielle Integration passt oft bei Produkten.",
      "Bei partieller Integration sollte u beim Ableiten einfacher werden.",
      "Vor dem Integrieren immer zuerst vereinfachen.",
      "Nicht jedes Produkt braucht partielle Integration.",
      "Jede Stammfunktion kann man durch Ableiten kontrollieren."
    ],
    typischeFehler: [
      {
        fehler: "Man substituiert u, vergisst aber dx passend zu ersetzen.",
        korrektur:
          "Bei der Substitution muss nicht nur der Ausdruck, sondern auch das Differential angepasst werden. Sonst ist die Rechnung unvollständig."
      },
      {
        fehler: "Man vergisst die Rücksubstitution.",
        korrektur:
          "Beim unbestimmten Integral muss am Schluss wieder x stehen, nicht u."
      },
      {
        fehler: "Man vermischt bei bestimmten Integralen alte x-Grenzen mit neuer u-Variable.",
        korrektur:
          "Wenn du die Grenzen substituierst, rechnest du vollständig mit u-Grenzen. Wenn du zurücksubstituierst, verwendest du die ursprünglichen x-Grenzen."
      },
      {
        fehler: "Man wählt bei partieller Integration u ungünstig.",
        korrektur:
          "u sollte beim Ableiten einfacher werden. Bei x · eˣ ist meistens u = x sinnvoll, weil x zu 1 wird."
      },
      {
        fehler: "Man vergisst das Minuszeichen in der Formel der partiellen Integration.",
        korrektur:
          "Die Formel lautet Integral u · v' = u · v minus Integral u' · v. Das Minus ist entscheidend."
      },
      {
        fehler: "Man verwendet eine komplizierte Methode, obwohl man zuerst kürzen könnte.",
        korrektur:
          "Vor jeder Integration sollte man prüfen, ob der Term durch Umformen einfacher wird."
      }
    ],
    aufgaben: [
      {
        titel: "Aufgabe 1: Einfaches Integral durch Vereinfachen",
        schwierigkeit: "einfach",
        aufgabe:
          "Berechne das unbestimmte Integral von f(x) = x(x + 2).",
        loesung: [
          "Zuerst vereinfacht man den Integranden.",
          "x(x + 2) = x² + 2x.",
          "Nun integriert man gliedweise.",
          "Eine Stammfunktion von x² ist x³ / 3.",
          "Eine Stammfunktion von 2x ist x².",
          "Also ist F(x) = x³ / 3 + x² + C."
        ]
      },
      {
        titel: "Aufgabe 2: Wurzel vor dem Integrieren umschreiben",
        schwierigkeit: "einfach",
        aufgabe:
          "Bestimme das unbestimmte Integral von √x.",
        loesung: [
          "Schreibe die Wurzel zuerst als Potenz.",
          "√x = x hoch 1/2.",
          "Erhöhe den Exponenten um 1.",
          "1/2 + 1 = 3/2.",
          "Teile durch den neuen Exponenten.",
          "Eine Stammfunktion ist x hoch 3/2 geteilt durch 3/2.",
          "Das ist 2/3 · x hoch 3/2.",
          "Also F(x) = 2/3 · x hoch 3/2 + C."
        ]
      },
      {
        titel: "Aufgabe 3: Substitution mit linearer innerer Funktion",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne das unbestimmte Integral von (2x + 1)⁵.",
        loesung: [
          "Setze u = 2x + 1.",
          "Dann ist du/dx = 2.",
          "Also gilt du = 2 dx.",
          "Damit ist dx = du / 2.",
          "Das Integral wird zu Integral u⁵ · 1/2 du.",
          "Das ist 1/2 · u⁶ / 6.",
          "Also 1/12 · u⁶.",
          "Nun zurücksubstituieren.",
          "F(x) = 1/12 · (2x + 1)⁶ + C."
        ]
      },
      {
        titel: "Aufgabe 4: Substitution bei e-Funktion",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne das unbestimmte Integral von 3e hoch 3x.",
        loesung: [
          "Man kann hier direkt erkennen, dass die innere Ableitung 3 ist.",
          "Setze u = 3x.",
          "Dann ist du = 3 dx.",
          "Das Integral von 3e hoch 3x dx wird zu Integral e hoch u du.",
          "Eine Stammfunktion von e hoch u ist e hoch u.",
          "Rücksubstitution ergibt e hoch 3x.",
          "Also ist F(x) = e hoch 3x + C."
        ]
      },
      {
        titel: "Aufgabe 5: Substitution mit Logarithmus",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne das unbestimmte Integral von 2 / (2x + 5).",
        loesung: [
          "Setze u = 2x + 5.",
          "Dann ist du = 2 dx.",
          "Der Zähler 2 passt genau zur inneren Ableitung.",
          "Das Integral wird zu Integral 1/u du.",
          "Eine Stammfunktion von 1/u ist ln(|u|).",
          "Rücksubstitution ergibt ln(|2x + 5|) + C."
        ]
      },
      {
        titel: "Aufgabe 6: Bestimmtes Integral mit Substitution",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne das Integral von 0 bis 1 von 2x · (x² + 1)³.",
        loesung: [
          "Setze u = x² + 1.",
          "Dann ist du = 2x dx.",
          "Nun müssen auch die Grenzen ersetzt werden.",
          "Für x = 0 gilt u = 0² + 1 = 1.",
          "Für x = 1 gilt u = 1² + 1 = 2.",
          "Das Integral wird zu Integral von 1 bis 2 von u³ du.",
          "Eine Stammfunktion ist u⁴ / 4.",
          "Setze die Grenzen ein.",
          "Das ergibt 2⁴ / 4 - 1⁴ / 4.",
          "Das ist 16/4 - 1/4 = 15/4."
        ]
      },
      {
        titel: "Aufgabe 7: Partielle Integration mit x · eˣ",
        schwierigkeit: "mittel",
        aufgabe:
          "Berechne das unbestimmte Integral von x · eˣ.",
        loesung: [
          "Verwende partielle Integration.",
          "Wähle u = x, weil x beim Ableiten einfacher wird.",
          "Dann ist u' = 1.",
          "Wähle v' = eˣ.",
          "Dann ist v = eˣ.",
          "Die Formel lautet Integral u · v' = u · v - Integral u' · v.",
          "Also ergibt sich x · eˣ - Integral 1 · eˣ dx.",
          "Das ist x · eˣ - eˣ + C.",
          "Also F(x) = eˣ(x - 1) + C."
        ]
      },
      {
        titel: "Aufgabe 8: Partielle Integration mit x · cos(x)",
        schwierigkeit: "schwer",
        aufgabe:
          "Berechne das unbestimmte Integral von x · cos(x).",
        loesung: [
          "Verwende partielle Integration.",
          "Wähle u = x.",
          "Dann ist u' = 1.",
          "Wähle v' = cos(x).",
          "Dann ist v = sin(x).",
          "Setze in die Formel ein.",
          "Integral x · cos(x) dx = x · sin(x) - Integral 1 · sin(x) dx.",
          "Eine Stammfunktion von sin(x) ist -cos(x).",
          "Also ist minus Integral sin(x) dx gleich plus cos(x).",
          "Damit ist F(x) = x · sin(x) + cos(x) + C."
        ]
      },
      {
        titel: "Aufgabe 9: Integral von ln(x)",
        schwierigkeit: "schwer",
        aufgabe:
          "Berechne das unbestimmte Integral von ln(x).",
        loesung: [
          "Man schreibt ln(x) als Produkt 1 · ln(x).",
          "Verwende partielle Integration.",
          "Wähle u = ln(x), weil die Ableitung einfacher wird.",
          "Dann ist u' = 1/x.",
          "Wähle v' = 1.",
          "Dann ist v = x.",
          "Die Formel ergibt x ln(x) - Integral x · 1/x dx.",
          "Das vereinfacht sich zu x ln(x) - Integral 1 dx.",
          "Also ist F(x) = x ln(x) - x + C."
        ]
      },
      {
        titel: "Aufgabe 10: Methode erkennen",
        schwierigkeit: "schwer",
        aufgabe:
          "Entscheide, welche Methode sinnvoll ist: Integral von 4x(x² + 3)⁶ dx. Berechne danach das Integral.",
        loesung: [
          "Der Ausdruck ist eine verschachtelte Funktion.",
          "Innen steht x² + 3.",
          "Die Ableitung davon ist 2x.",
          "Im Integral steht 4x, also ein Vielfaches der inneren Ableitung.",
          "Daher ist Substitution sinnvoll.",
          "Setze u = x² + 3.",
          "Dann ist du = 2x dx.",
          "Da 4x dx = 2du gilt, wird das Integral zu 2 · Integral u⁶ du.",
          "Das ergibt 2 · u⁷ / 7.",
          "Rücksubstitution ergibt F(x) = 2/7 · (x² + 3)⁷ + C."
        ]
      }
    ],
    muendlich: [
      {
        frage: "Wann ist Substitution sinnvoll?",
        antwort:
          "Substitution ist sinnvoll, wenn eine verschachtelte Funktion vorkommt und die innere Ableitung ebenfalls im Integral erscheint oder fast erscheint."
      },
      {
        frage: "Was ist die Grundidee der Substitution?",
        antwort:
          "Man ersetzt einen komplizierten inneren Ausdruck durch eine neue Variable u, damit das Integral einfacher wird."
      },
      {
        frage: "Was bedeutet Rücksubstitution?",
        antwort:
          "Nach dem Integrieren ersetzt man u wieder durch den ursprünglichen Ausdruck in x."
      },
      {
        frage: "Was muss man bei bestimmten Integralen mit Substitution beachten?",
        antwort:
          "Man muss entweder die Grenzen in u-Grenzen umrechnen oder nach der Rücksubstitution die ursprünglichen x-Grenzen verwenden. Man darf beides nicht vermischen."
      },
      {
        frage: "Wann verwendet man partielle Integration?",
        antwort:
          "Man verwendet sie häufig bei Produkten zweier Funktionen, besonders wenn ein Faktor beim Ableiten einfacher wird."
      },
      {
        frage: "Welche Ableitungsregel steckt hinter der partiellen Integration?",
        antwort:
          "Die partielle Integration ist die Umkehrung der Produktregel."
      },
      {
        frage: "Welche Ableitungsregel steckt hinter der Substitution?",
        antwort:
          "Die Substitution ist die Umkehrung der Kettenregel."
      },
      {
        frage: "Warum sollte man vor dem Integrieren vereinfachen?",
        antwort:
          "Weil viele Integrale durch Ausmultiplizieren, Kürzen oder Umschreiben viel einfacher werden und keine spezielle Methode brauchen."
      }
    ],
    nachtVorTest: [
      "Kannst du erkennen, wann Substitution sinnvoll ist?",
      "Findest du bei Substitution die innere Funktion u?",
      "Vergisst du bei Substitution nicht du und dx?",
      "Machst du am Ende die Rücksubstitution?",
      "Kannst du bei bestimmten Integralen die Grenzen korrekt umrechnen?",
      "Kennst du die Formel der partiellen Integration?",
      "Wählst du u so, dass es beim Ableiten einfacher wird?",
      "Vergisst du bei partieller Integration das Minuszeichen nicht?",
      "Prüfst du vor dem Integrieren, ob man vereinfachen kann?",
      "Kontrollierst du Stammfunktionen durch Ableiten?"
    ]
  },
     
{
  id: "rotationskoerper-volumen",
  nummer: "9",
  titel: "Volumen von Rotationskörpern",
  kurzbeschreibung:
    "Berechnung von Volumen, die entstehen, wenn ein Funktionsgraph um die x-Achse oder y-Achse rotiert. Schwerpunkt: Scheibenmethode, Ringmethode und korrekter Umgang mit Grenzen.",
  lernziele: [
    "Du kannst erklären, was ein Rotationskörper ist.",
    "Du verstehst, warum beim Rotationsvolumen der Faktor \\(\\pi\\) vorkommt.",
    "Du kannst das Volumen bei Rotation um die \\(x\\)-Achse berechnen.",
    "Du kannst die Formel \\(V=\\pi\\int_a^b (f(x))^2\\,dx\\) anwenden.",
    "Du kannst Rotationsvolumen mit äusserem und innerem Radius berechnen.",
    "Du erkennst den Unterschied zwischen Scheibenmethode und Ringmethode.",
    "Du kannst die Integrationsgrenzen aus einer Aufgabe bestimmen.",
    "Du kannst Einheiten bei Volumen korrekt interpretieren.",
    "Du erkennst typische Fehler beim Quadrieren der Funktion.",
    "Du kannst Rotationskörper in Prüfungsaufgaben geometrisch deuten."
  ],
  theorie: [
    {
      titel: "Was ist ein Rotationskörper?",
      text:
        "Ein Rotationskörper entsteht, wenn eine Fläche um eine Achse gedreht wird. Dreht man zum Beispiel die Fläche zwischen einem Funktionsgraphen und der \\(x\\)-Achse um die \\(x\\)-Achse, entsteht ein dreidimensionaler Körper."
    },
    {
      titel: "Grundidee der Volumenberechnung",
      text:
        "Man stellt sich den Rotationskörper aus sehr dünnen Kreisscheiben zusammengesetzt vor. Jede Scheibe hat ungefähr das Volumen Grundfläche mal Dicke."
    },
    {
      titel: "Warum kommt \\(\\pi\\) vor?",
      text:
        "Die Querschnitte des Rotationskörpers sind Kreise. Die Fläche eines Kreises ist \\(A=\\pi r^2\\). Deshalb erscheint beim Rotationsvolumen der Faktor \\(\\pi\\)."
    },
    {
      titel: "Rotation um die x-Achse",
      text:
        "Wenn der Graph von \\(f(x)\\) im Intervall \\([a,b]\\) um die \\(x\\)-Achse rotiert, ist der Radius einer Scheibe gleich \\(f(x)\\). Deshalb gilt \\(V=\\pi\\int_a^b (f(x))^2\\,dx\\)."
    },
    {
      titel: "Bedeutung des Radius",
      text:
        "Der Radius ist der Abstand des Graphen von der Rotationsachse. Bei Rotation um die \\(x\\)-Achse ist dieser Abstand meist der Funktionswert \\(f(x)\\)."
    },
    {
      titel: "Scheibenmethode",
      text:
        "Die Scheibenmethode verwendet man, wenn die rotierende Fläche direkt an der Rotationsachse liegt. Dann bestehen die Querschnitte aus vollen Kreisscheiben."
    },
    {
      titel: "Ringmethode",
      text:
        "Die Ringmethode verwendet man, wenn beim Rotieren ein Loch entsteht. Dann ist der Querschnitt kein voller Kreis, sondern ein Kreisring."
    },
    {
      titel: "Formel der Ringmethode",
      text:
        "Bei einem äusseren Radius \\(R(x)\\) und einem inneren Radius \\(r(x)\\) gilt \\(V=\\pi\\int_a^b\\left(R(x)^2-r(x)^2\\right)\\,dx\\)."
    },
    {
      titel: "Grenzen",
      text:
        "Die Integrationsgrenzen geben an, von wo bis wo die Fläche rotiert. Sie können direkt gegeben sein oder müssen aus Schnittpunkten berechnet werden."
    },
    {
      titel: "Volumeneinheiten",
      text:
        "Wenn die Längeneinheit zum Beispiel Zentimeter ist, dann ist die Volumeneinheit Kubikzentimeter. Allgemein gilt: Aus Längeneinheiten werden beim Volumen dritte Potenzen."
    }
  ],
  methoden: [
    {
      titel: "Methode: Rotationsvolumen um die \\(x\\)-Achse berechnen",
      schritte: [
        "Prüfe zuerst, um welche Achse rotiert wird.",
        "Bestimme die Funktion \\(f(x)\\), die den Radius beschreibt.",
        "Bestimme die Grenzen \\(a\\) und \\(b\\).",
        "Setze in die Formel \\(V=\\pi\\int_a^b (f(x))^2\\,dx\\) ein.",
        "Quadriere die ganze Funktion sorgfältig.",
        "Bestimme eine Stammfunktion.",
        "Setze obere und untere Grenze ein.",
        "Multipliziere das Ergebnis mit \\(\\pi\\)."
      ]
    },
    {
      titel: "Methode: Ringmethode anwenden",
      schritte: [
        "Prüfe, ob beim Rotieren ein Loch entsteht.",
        "Bestimme den äusseren Radius \\(R(x)\\).",
        "Bestimme den inneren Radius \\(r(x)\\).",
        "Setze in \\(V=\\pi\\int_a^b(R(x)^2-r(x)^2)\\,dx\\) ein.",
        "Quadriere beide Radien getrennt.",
        "Subtrahiere den inneren Kreis vom äusseren Kreis.",
        "Integriere den entstandenen Ausdruck.",
        "Setze die Grenzen ein und multipliziere mit \\(\\pi\\)."
      ]
    },
    {
      titel: "Methode: Grenzen aus Schnittpunkten bestimmen",
      schritte: [
        "Setze die beteiligten Funktionen gleich.",
        "Löse die Gleichung nach \\(x\\).",
        "Die erhaltenen \\(x\\)-Werte sind mögliche Integrationsgrenzen.",
        "Ordne die Grenzen von links nach rechts.",
        "Prüfe, ob genau das gesuchte Intervall beschrieben wird."
      ]
    },
    {
      titel: "Methode: Entscheiden zwischen Fläche und Volumen",
      schritte: [
        "Frage dich, ob nur eine zweidimensionale Fläche gesucht ist.",
        "Falls ja, brauchst du ein normales Integral ohne Quadrieren mit \\(\\pi\\).",
        "Frage dich, ob eine Fläche um eine Achse rotiert.",
        "Falls ja, entsteht ein Volumen.",
        "Dann brauchst du die Rotationsformel mit \\(\\pi\\) und einem quadrierten Radius."
      ]
    }
  ],
  merksaetze: [
    "Ein Rotationskörper entsteht durch Drehen einer Fläche um eine Achse.",
    "Bei Rotation um die \\(x\\)-Achse ist der Radius meistens \\(f(x)\\).",
    "Die Grundformel lautet \\(V=\\pi\\int_a^b(f(x))^2\\,dx\\).",
    "Der Funktionswert wird quadriert, weil die Kreisfläche \\(\\pi r^2\\) ist.",
    "Bei einem Loch verwendet man die Ringmethode.",
    "Bei der Ringmethode gilt: äusserer Kreis minus innerer Kreis.",
    "\\(V=\\pi\\int_a^b(R(x)^2-r(x)^2)\\,dx\\).",
    "Grenzen können direkt gegeben sein oder aus Schnittpunkten entstehen.",
    "Ein Rotationsvolumen ist keine normale Fläche.",
    "Volumen haben kubische Einheiten."
  ],
  typischeFehler: [
    {
      fehler: "Man vergisst den Faktor \\(\\pi\\).",
      korrektur:
        "Der Faktor \\(\\pi\\) gehört zur Kreisfläche \\(A=\\pi r^2\\). Deshalb muss er beim Rotationsvolumen vorkommen."
    },
    {
      fehler: "Man integriert \\(f(x)\\) statt \\((f(x))^2\\).",
      korrektur:
        "Beim Rotationsvolumen muss der Radius quadriert werden. Die richtige Formel enthält \\((f(x))^2\\)."
    },
    {
      fehler: "Man quadriert nur einzelne Teile der Funktion.",
      korrektur:
        "Wenn \\(f(x)=x+1\\), dann ist \\((f(x))^2=(x+1)^2\\), nicht \\(x^2+1\\)."
    },
    {
      fehler: "Man verwechselt Flächeninhalt und Rotationsvolumen.",
      korrektur:
        "Ein normales Integral berechnet eine Fläche. Ein Rotationsvolumen braucht zusätzlich \\(\\pi\\) und den quadrierten Radius."
    },
    {
      fehler: "Man zieht bei der Ringmethode die Radien ab, bevor man quadriert.",
      korrektur:
        "Richtig ist \\(R(x)^2-r(x)^2\\), nicht \\((R(x)-r(x))^2\\)."
    },
    {
      fehler: "Man verwendet falsche Grenzen.",
      korrektur:
        "Die Grenzen müssen genau das Intervall beschreiben, dessen Fläche rotiert. Falls sie nicht gegeben sind, müssen sie aus Schnittpunkten bestimmt werden."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Einfaches Rotationsvolumen",
      schwierigkeit: "einfach",
      aufgabe:
        "Die Fläche unter \\(f(x)=x\\) im Intervall \\([0,2]\\) rotiert um die \\(x\\)-Achse. Berechne das Volumen.",
      loesung: [
        "Bei Rotation um die \\(x\\)-Achse gilt \\(V=\\pi\\int_a^b(f(x))^2\\,dx\\).",
        "Hier ist \\(f(x)=x\\), \\(a=0\\) und \\(b=2\\).",
        "Also ist \\(V=\\pi\\int_0^2 x^2\\,dx\\).",
        "Eine Stammfunktion von \\(x^2\\) ist \\(\\frac{x^3}{3}\\).",
        "Setze die Grenzen ein: \\(\\frac{2^3}{3}-\\frac{0^3}{3}=\\frac{8}{3}\\).",
        "Also ist \\(V=\\frac{8\\pi}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Parabel rotiert um die x-Achse",
      schwierigkeit: "einfach",
      aufgabe:
        "Die Fläche unter \\(f(x)=x^2\\) im Intervall \\([0,1]\\) rotiert um die \\(x\\)-Achse. Berechne das Volumen.",
      loesung: [
        "Die Rotationsformel lautet \\(V=\\pi\\int_0^1(f(x))^2\\,dx\\).",
        "Setze \\(f(x)=x^2\\) ein.",
        "Dann gilt \\(V=\\pi\\int_0^1(x^2)^2\\,dx\\).",
        "Das ist \\(V=\\pi\\int_0^1x^4\\,dx\\).",
        "Eine Stammfunktion ist \\(\\frac{x^5}{5}\\).",
        "Einsetzen ergibt \\(\\frac{1^5}{5}-0=\\frac{1}{5}\\).",
        "Also ist \\(V=\\frac{\\pi}{5}\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Funktion mit Klammer quadrieren",
      schwierigkeit: "mittel",
      aufgabe:
        "Die Fläche unter \\(f(x)=x+1\\) im Intervall \\([0,2]\\) rotiert um die \\(x\\)-Achse. Berechne das Volumen.",
      loesung: [
        "Die Formel lautet \\(V=\\pi\\int_0^2(x+1)^2\\,dx\\).",
        "Quadriere zuerst die Klammer.",
        "\\((x+1)^2=x^2+2x+1\\).",
        "Also ist \\(V=\\pi\\int_0^2(x^2+2x+1)\\,dx\\).",
        "Eine Stammfunktion ist \\(\\frac{x^3}{3}+x^2+x\\).",
        "Setze \\(2\\) ein: \\(\\frac{8}{3}+4+2=\\frac{26}{3}\\).",
        "Setze \\(0\\) ein: \\(0\\).",
        "Also ist \\(V=\\frac{26\\pi}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Ringmethode",
      schwierigkeit: "mittel",
      aufgabe:
        "Die Fläche zwischen \\(f(x)=3\\) und \\(g(x)=1\\) im Intervall \\([0,4]\\) rotiert um die \\(x\\)-Achse. Berechne das Volumen.",
      loesung: [
        "Hier entsteht ein Körper mit Loch, also verwendet man die Ringmethode.",
        "Der äussere Radius ist \\(R(x)=3\\).",
        "Der innere Radius ist \\(r(x)=1\\).",
        "Die Formel lautet \\(V=\\pi\\int_0^4(R(x)^2-r(x)^2)\\,dx\\).",
        "Also \\(V=\\pi\\int_0^4(3^2-1^2)\\,dx\\).",
        "Das ergibt \\(V=\\pi\\int_0^4 8\\,dx\\).",
        "Eine Stammfunktion ist \\(8x\\).",
        "Einsetzen ergibt \\(8\\cdot4-8\\cdot0=32\\).",
        "Also ist \\(V=32\\pi\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Grenzen aus Nullstellen",
      schwierigkeit: "mittel",
      aufgabe:
        "Die Fläche zwischen \\(f(x)=4-x^2\\) und der \\(x\\)-Achse rotiert um die \\(x\\)-Achse. Berechne zuerst die Grenzen.",
      loesung: [
        "Die Grenzen entstehen aus den Nullstellen.",
        "Setze \\(4-x^2=0\\).",
        "Dann gilt \\(x^2=4\\).",
        "Also ist \\(x=-2\\) oder \\(x=2\\).",
        "Die Fläche liegt zwischen \\(-2\\) und \\(2\\).",
        "Für das Volumen würde man also \\(V=\\pi\\int_{-2}^{2}(4-x^2)^2\\,dx\\) verwenden."
      ]
    },
    {
      titel: "Aufgabe 6: Vollständige Volumenberechnung",
      schwierigkeit: "schwer",
      aufgabe:
        "Berechne das Volumen des Körpers, der entsteht, wenn die Fläche unter \\(f(x)=\\sqrt{x}\\) im Intervall \\([0,4]\\) um die \\(x\\)-Achse rotiert.",
      loesung: [
        "Die Formel lautet \\(V=\\pi\\int_0^4(f(x))^2\\,dx\\).",
        "Hier ist \\(f(x)=\\sqrt{x}\\).",
        "Dann ist \\((f(x))^2=(\\sqrt{x})^2=x\\).",
        "Also gilt \\(V=\\pi\\int_0^4x\\,dx\\).",
        "Eine Stammfunktion von \\(x\\) ist \\(\\frac{x^2}{2}\\).",
        "Setze die Grenzen ein.",
        "\\(\\frac{4^2}{2}-\\frac{0^2}{2}=8\\).",
        "Also ist \\(V=8\\pi\\)."
      ]
    },
    {
      titel: "Aufgabe 7: Ringmethode mit Funktionen",
      schwierigkeit: "schwer",
      aufgabe:
        "Die Fläche zwischen \\(f(x)=x+2\\) und \\(g(x)=1\\) im Intervall \\([0,2]\\) rotiert um die \\(x\\)-Achse. Berechne das Volumen.",
      loesung: [
        "Da die Fläche nicht direkt an der \\(x\\)-Achse liegt, entsteht ein Loch.",
        "Man verwendet die Ringmethode.",
        "Der äussere Radius ist \\(R(x)=x+2\\).",
        "Der innere Radius ist \\(r(x)=1\\).",
        "Also ist \\(V=\\pi\\int_0^2((x+2)^2-1^2)\\,dx\\).",
        "Quadriere: \\((x+2)^2=x^2+4x+4\\).",
        "Dann ist der Integrand \\(x^2+4x+4-1=x^2+4x+3\\).",
        "Eine Stammfunktion ist \\(\\frac{x^3}{3}+2x^2+3x\\).",
        "Setze \\(2\\) ein: \\(\\frac{8}{3}+8+6=\\frac{50}{3}\\).",
        "Setze \\(0\\) ein: \\(0\\).",
        "Also ist \\(V=\\frac{50\\pi}{3}\\)."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was ist ein Rotationskörper?",
      antwort:
        "Ein Rotationskörper entsteht, wenn eine Fläche um eine Achse gedreht wird. Dadurch entsteht ein dreidimensionaler Körper."
    },
    {
      frage: "Warum steht in der Formel für Rotationsvolumen ein \\(\\pi\\)?",
      antwort:
        "Weil die Querschnitte Kreise sind. Die Kreisfläche lautet \\(A=\\pi r^2\\)."
    },
    {
      frage: "Wie lautet die Formel bei Rotation um die \\(x\\)-Achse?",
      antwort:
        "Die Formel lautet \\(V=\\pi\\int_a^b(f(x))^2\\,dx\\), wenn \\(f(x)\\) den Radius beschreibt."
    },
    {
      frage: "Warum wird \\(f(x)\\) quadriert?",
      antwort:
        "Weil \\(f(x)\\) der Radius ist und die Kreisfläche vom Quadrat des Radius abhängt."
    },
    {
      frage: "Wann braucht man die Ringmethode?",
      antwort:
        "Man braucht die Ringmethode, wenn beim Rotieren ein Loch entsteht. Dann rechnet man äusserer Kreis minus innerer Kreis."
    },
    {
      frage: "Wie lautet die Formel der Ringmethode?",
      antwort:
        "Sie lautet \\(V=\\pi\\int_a^b(R(x)^2-r(x)^2)\\,dx\\), wobei \\(R(x)\\) der äussere und \\(r(x)\\) der innere Radius ist."
    },
    {
      frage: "Wie findet man die Grenzen?",
      antwort:
        "Die Grenzen sind entweder gegeben oder entstehen aus Schnittpunkten, zum Beispiel mit der \\(x\\)-Achse oder zwischen zwei Funktionen."
    }
  ],
  nachtVorTest: [
    "Kannst du erklären, was ein Rotationskörper ist?",
    "Kennst du die Formel \\(V=\\pi\\int_a^b(f(x))^2\\,dx\\)?",
    "Weisst du, warum \\(f(x)\\) quadriert wird?",
    "Vergisst du den Faktor \\(\\pi\\) nicht?",
    "Kannst du die Grenzen aus der Aufgabe erkennen?",
    "Kannst du Schnittpunkte als Grenzen berechnen?",
    "Erkennst du, wann die Ringmethode nötig ist?",
    "Kennst du die Formel \\(V=\\pi\\int_a^b(R(x)^2-r(x)^2)\\,dx\\)?",
    "Quadrierst du bei Klammern die ganze Funktion?",
    "Kannst du zwischen Flächeninhalt und Rotationsvolumen unterscheiden?"
  ]
},
   
{
  id: "flaeche-zwischen-zwei-kurven",
  nummer: "10",
  titel: "Fläche zwischen zwei Kurven",
  kurzbeschreibung:
    "Berechnung von Flächen zwischen zwei Funktionsgraphen, Bestimmung von Schnittpunkten, oberer und unterer Funktion sowie korrekter Umgang mit Teilintervallen.",
  lernziele: [
    "Du kannst erklären, was mit Fläche zwischen zwei Kurven gemeint ist.",
    "Du kannst Schnittpunkte zweier Funktionen berechnen.",
    "Du kannst entscheiden, welche Funktion oben und welche unten liegt.",
    "Du kannst die Formel \\(A=\\int_a^b (f(x)-g(x))\\,dx\\) anwenden.",
    "Du erkennst, wann man den Betrag eines Integrals braucht.",
    "Du kannst Flächen über mehrere Teilintervalle berechnen.",
    "Du kannst die Grenzen aus Schnittpunkten bestimmen.",
    "Du kannst zwischen orientierter Fläche und geometrischer Fläche unterscheiden.",
    "Du erkennst typische Fehler bei Vorzeichen und Reihenfolge der Funktionen.",
    "Du kannst Flächen zwischen Kurven in Prüfungsaufgaben systematisch lösen."
  ],
  theorie: [
    {
      titel: "Was bedeutet Fläche zwischen zwei Kurven?",
      text:
        "Die Fläche zwischen zwei Kurven ist der Bereich, der von zwei Funktionsgraphen eingeschlossen wird. Häufig sucht man den geometrischen Flächeninhalt zwischen einer oberen und einer unteren Funktion."
    },
    {
      titel: "Obere und untere Funktion",
      text:
        "Wenn im Intervall \\([a,b]\\) die Funktion \\(f(x)\\) oberhalb von \\(g(x)\\) liegt, dann ist die Höhe des kleinen Flächenstreifens \\(f(x)-g(x)\\)."
    },
    {
      titel: "Grundformel",
      text:
        "Liegt \\(f(x)\\) im ganzen Intervall oberhalb von \\(g(x)\\), dann gilt \\(A=\\int_a^b (f(x)-g(x))\\,dx\\). Man rechnet also obere Funktion minus untere Funktion."
    },
    {
      titel: "Warum obere minus untere Funktion?",
      text:
        "Der Abstand zwischen zwei Graphen in senkrechter Richtung ist die Differenz der \\(y\\)-Werte. Wenn \\(f(x)\\) oben liegt und \\(g(x)\\) unten liegt, ist dieser Abstand \\(f(x)-g(x)\\)."
    },
    {
      titel: "Schnittpunkte als Grenzen",
      text:
        "Wenn keine Grenzen gegeben sind, entstehen die Grenzen meistens aus den Schnittpunkten der beiden Graphen. Dazu setzt man die Funktionsgleichungen gleich."
    },
    {
      titel: "Schnittpunkte berechnen",
      text:
        "Schnittpunkte findet man durch \\(f(x)=g(x)\\). Die Lösungen dieser Gleichung sind die \\(x\\)-Koordinaten der Schnittpunkte. Die \\(y\\)-Koordinaten erhält man durch Einsetzen in eine der beiden Funktionen."
    },
    {
      titel: "Geometrischer Flächeninhalt",
      text:
        "Der geometrische Flächeninhalt ist immer positiv. Wenn ein Integral negativ wird, hat man wahrscheinlich untere minus obere Funktion gerechnet oder man muss den Betrag nehmen."
    },
    {
      titel: "Orientierter Flächeninhalt",
      text:
        "Ein Integral kann negativ sein, wenn der Integrand negativ ist. Für echte Flächen zwischen Kurven zählt man aber die Flächenstücke positiv."
    },
    {
      titel: "Wechsel der oberen Funktion",
      text:
        "Manchmal liegt in einem Teilintervall \\(f(x)\\) oben und in einem anderen Teilintervall \\(g(x)\\) oben. Dann muss man an den Schnittpunkten aufteilen."
    },
    {
      titel: "Fläche mit Betrag",
      text:
        "Allgemein kann man den geometrischen Flächeninhalt als \\(A=\\int_a^b |f(x)-g(x)|\\,dx\\) schreiben. Praktisch teilt man aber meistens an Schnittpunkten auf."
    },
    {
      titel: "Fläche zwischen Graph und x-Achse als Spezialfall",
      text:
        "Die Fläche zwischen einem Graphen und der \\(x\\)-Achse ist ein Spezialfall. Die \\(x\\)-Achse kann man als Funktion \\(g(x)=0\\) auffassen."
    },
    {
      titel: "Einheiten",
      text:
        "Wenn \\(x\\)- und \\(y\\)-Werte Längeneinheiten darstellen, dann ist der Flächeninhalt in Quadrateinheiten angegeben."
    }
  ],
  methoden: [
    {
      titel: "Methode: Fläche zwischen zwei Kurven berechnen",
      schritte: [
        "Bestimme zuerst die beiden Funktionen.",
        "Berechne die Schnittpunkte mit \\(f(x)=g(x)\\), falls die Grenzen nicht direkt gegeben sind.",
        "Bestimme die Integrationsgrenzen \\(a\\) und \\(b\\).",
        "Prüfe, welche Funktion im Intervall oben liegt.",
        "Bilde obere Funktion minus untere Funktion.",
        "Stelle das Integral \\(A=\\int_a^b(\\text{oben}-\\text{unten})\\,dx\\) auf.",
        "Bestimme eine Stammfunktion.",
        "Setze obere und untere Grenze ein.",
        "Gib den Flächeninhalt positiv an."
      ]
    },
    {
      titel: "Methode: Schnittpunkte bestimmen",
      schritte: [
        "Setze die beiden Funktionen gleich: \\(f(x)=g(x)\\).",
        "Bringe alle Terme auf eine Seite.",
        "Löse die entstandene Gleichung nach \\(x\\).",
        "Setze die \\(x\\)-Werte in eine der beiden Funktionen ein.",
        "Schreibe die Schnittpunkte als Punkte \\((x\\mid y)\\) auf.",
        "Verwende die \\(x\\)-Werte als mögliche Integrationsgrenzen."
      ]
    },
    {
      titel: "Methode: Obere Funktion erkennen",
      schritte: [
        "Wähle einen Testwert im betrachteten Intervall.",
        "Setze diesen Testwert in beide Funktionen ein.",
        "Vergleiche die beiden Funktionswerte.",
        "Die Funktion mit dem grösseren \\(y\\)-Wert liegt dort oben.",
        "Falls sich die Reihenfolge im Intervall ändert, teile das Intervall an den Schnittpunkten auf."
      ]
    },
    {
      titel: "Methode: Fläche über mehrere Teilintervalle",
      schritte: [
        "Bestimme alle Schnittpunkte im gegebenen Bereich.",
        "Sortiere die Schnittpunkte von links nach rechts.",
        "Teile das Intervall an diesen Stellen auf.",
        "Bestimme in jedem Teilintervall die obere und untere Funktion.",
        "Berechne für jedes Teilintervall ein eigenes Integral.",
        "Zähle alle Teilflächen positiv zusammen."
      ]
    },
    {
      titel: "Methode: Kontrolle des Ergebnisses",
      schritte: [
        "Prüfe, ob dein Flächeninhalt positiv ist.",
        "Falls das Ergebnis negativ ist, kontrolliere die Reihenfolge der Funktionen.",
        "Prüfe, ob du alle Schnittpunkte als Grenzen berücksichtigt hast.",
        "Skizziere grob die Graphen, falls die Aufgabe unübersichtlich ist.",
        "Kontrolliere die Stammfunktion durch Ableiten."
      ]
    }
  ],
  merksaetze: [
    "Fläche zwischen zwei Kurven bedeutet obere Funktion minus untere Funktion integrieren.",
    "Die Grundformel lautet \\(A=\\int_a^b(f(x)-g(x))\\,dx\\), wenn \\(f\\) oben liegt.",
    "Schnittpunkte findet man mit \\(f(x)=g(x)\\).",
    "Die \\(x\\)-Koordinaten der Schnittpunkte sind oft die Integrationsgrenzen.",
    "Der geometrische Flächeninhalt ist immer positiv.",
    "Wenn das Integral negativ ist, wurde wahrscheinlich die Reihenfolge vertauscht.",
    "Wechselt die obere Funktion, muss man das Intervall aufteilen.",
    "Allgemein gilt \\(A=\\int_a^b |f(x)-g(x)|\\,dx\\).",
    "Die Fläche zwischen Graph und \\(x\\)-Achse ist ein Spezialfall mit \\(g(x)=0\\).",
    "Eine Skizze hilft, obere und untere Funktion zu erkennen."
  ],
  typischeFehler: [
    {
      fehler: "Man rechnet untere Funktion minus obere Funktion.",
      korrektur:
        "Für den geometrischen Flächeninhalt rechnet man obere Funktion minus untere Funktion. Sonst wird das Integral negativ."
    },
    {
      fehler: "Man vergisst, die Schnittpunkte zu berechnen.",
      korrektur:
        "Wenn keine Grenzen gegeben sind, müssen die Grenzen meistens über \\(f(x)=g(x)\\) bestimmt werden."
    },
    {
      fehler: "Man nimmt die \\(y\\)-Koordinaten der Schnittpunkte als Integrationsgrenzen.",
      korrektur:
        "Bei Integration nach \\(x\\) verwendet man die \\(x\\)-Koordinaten als Grenzen."
    },
    {
      fehler: "Man integriert beide Funktionen getrennt und addiert sie.",
      korrektur:
        "Man muss die Differenz der Funktionen integrieren: obere Funktion minus untere Funktion."
    },
    {
      fehler: "Man ignoriert, dass sich die obere Funktion ändern kann.",
      korrektur:
        "Wenn sich die Graphen innerhalb des Intervalls schneiden, muss man häufig in Teilintervalle aufteilen."
    },
    {
      fehler: "Man gibt einen negativen Flächeninhalt an.",
      korrektur:
        "Ein geometrischer Flächeninhalt ist positiv. Ein negatives Integral muss als Betrag oder durch korrekte Reihenfolge behandelt werden."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Fläche zwischen zwei Geraden",
      schwierigkeit: "einfach",
      aufgabe:
        "Berechne die Fläche zwischen \\(f(x)=x+3\\) und \\(g(x)=x+1\\) im Intervall \\([0,4]\\).",
      loesung: [
        "Vergleiche die beiden Funktionen.",
        "\\(f(x)=x+3\\) liegt im ganzen Intervall \\(2\\) Einheiten über \\(g(x)=x+1\\).",
        "Also ist \\(f(x)-g(x)=(x+3)-(x+1)=2\\).",
        "Die Fläche ist \\(A=\\int_0^4 2\\,dx\\).",
        "Eine Stammfunktion von \\(2\\) ist \\(2x\\).",
        "Einsetzen ergibt \\(2\\cdot4-2\\cdot0=8\\).",
        "Die Fläche beträgt \\(8\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Fläche zwischen Parabel und Gerade",
      schwierigkeit: "einfach",
      aufgabe:
        "Berechne die Fläche zwischen \\(f(x)=4\\) und \\(g(x)=x^2\\) im Intervall \\([0,2]\\).",
      loesung: [
        "Im Intervall \\([0,2]\\) liegt \\(f(x)=4\\) oberhalb von \\(g(x)=x^2\\).",
        "Also rechnet man \\(A=\\int_0^2(4-x^2)\\,dx\\).",
        "Eine Stammfunktion ist \\(4x-\\frac{x^3}{3}\\).",
        "Setze \\(2\\) ein: \\(8-\\frac{8}{3}=\\frac{16}{3}\\).",
        "Setze \\(0\\) ein: \\(0\\).",
        "Die Fläche beträgt \\(\\frac{16}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Schnittpunkte als Grenzen",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme die eingeschlossene Fläche zwischen \\(f(x)=x+2\\) und \\(g(x)=x^2\\).",
      loesung: [
        "Zuerst berechnet man die Schnittpunkte.",
        "Setze \\(x+2=x^2\\).",
        "Bringe alles auf eine Seite: \\(x^2-x-2=0\\).",
        "Faktorisiere: \\((x-2)(x+1)=0\\).",
        "Also sind die Grenzen \\(x=-1\\) und \\(x=2\\).",
        "Wähle einen Testwert, zum Beispiel \\(x=0\\).",
        "\\(f(0)=2\\), \\(g(0)=0\\). Also liegt \\(f\\) oben.",
        "Die Fläche ist \\(A=\\int_{-1}^{2}((x+2)-x^2)\\,dx\\).",
        "Der Integrand ist \\(-x^2+x+2\\).",
        "Eine Stammfunktion ist \\(-\\frac{x^3}{3}+\\frac{x^2}{2}+2x\\).",
        "Einsetzen von \\(2\\) ergibt \\(-\\frac{8}{3}+2+4=\\frac{10}{3}\\).",
        "Einsetzen von \\(-1\\) ergibt \\(\\frac{1}{3}+\\frac{1}{2}-2=-\\frac{7}{6}\\).",
        "Die Fläche ist \\(\\frac{10}{3}-\\left(-\\frac{7}{6}\\right)=\\frac{27}{6}=\\frac{9}{2}\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Reihenfolge der Funktionen prüfen",
      schwierigkeit: "mittel",
      aufgabe:
        "Berechne die Fläche zwischen \\(f(x)=x^2\\) und \\(g(x)=2x\\) im Intervall \\([0,2]\\).",
      loesung: [
        "Zuerst prüft man, welche Funktion oben liegt.",
        "Wähle den Testwert \\(x=1\\).",
        "\\(f(1)=1\\), \\(g(1)=2\\).",
        "Also liegt \\(g(x)=2x\\) oberhalb von \\(f(x)=x^2\\).",
        "Die Fläche ist \\(A=\\int_0^2(2x-x^2)\\,dx\\).",
        "Eine Stammfunktion ist \\(x^2-\\frac{x^3}{3}\\).",
        "Setze \\(2\\) ein: \\(4-\\frac{8}{3}=\\frac{4}{3}\\).",
        "Setze \\(0\\) ein: \\(0\\).",
        "Die Fläche beträgt \\(\\frac{4}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Negatives Integral richtig deuten",
      schwierigkeit: "mittel",
      aufgabe:
        "Ein Schüler rechnet für die Fläche zwischen \\(f(x)=x^2\\) und \\(g(x)=2x\\) von \\(0\\) bis \\(2\\): \\(\\int_0^2(x^2-2x)\\,dx=-\\frac{4}{3}\\). Erkläre den Fehler.",
      loesung: [
        "Das Integral ist negativ, weil der Schüler untere Funktion minus obere Funktion gerechnet hat.",
        "Im Intervall \\([0,2]\\) liegt \\(g(x)=2x\\) oberhalb von \\(f(x)=x^2\\).",
        "Für die geometrische Fläche muss man also \\(2x-x^2\\) integrieren.",
        "Der Flächeninhalt ist positiv.",
        "Richtig ist \\(A=\\frac{4}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Fläche mit zwei Schnittpunkten",
      schwierigkeit: "mittel",
      aufgabe:
        "Berechne die Fläche zwischen \\(f(x)=6-x^2\\) und \\(g(x)=2\\).",
      loesung: [
        "Zuerst bestimmt man die Schnittpunkte.",
        "Setze \\(6-x^2=2\\).",
        "Dann gilt \\(4=x^2\\).",
        "Also ist \\(x=-2\\) oder \\(x=2\\).",
        "Im Intervall zwischen den Schnittpunkten liegt \\(f(x)=6-x^2\\) oberhalb von \\(g(x)=2\\).",
        "Die Fläche ist \\(A=\\int_{-2}^{2}((6-x^2)-2)\\,dx\\).",
        "Das ist \\(A=\\int_{-2}^{2}(4-x^2)\\,dx\\).",
        "Eine Stammfunktion ist \\(4x-\\frac{x^3}{3}\\).",
        "Einsetzen von \\(2\\) ergibt \\(8-\\frac{8}{3}=\\frac{16}{3}\\).",
        "Einsetzen von \\(-2\\) ergibt \\(-8+\\frac{8}{3}=-\\frac{16}{3}\\).",
        "Die Fläche ist \\(\\frac{16}{3}-\\left(-\\frac{16}{3}\\right)=\\frac{32}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 7: Aufteilen nötig",
      schwierigkeit: "schwer",
      aufgabe:
        "Berechne den geometrischen Flächeninhalt zwischen \\(f(x)=x\\) und \\(g(x)=0\\) im Intervall \\([-2,3]\\).",
      loesung: [
        "Hier ist \\(g(x)=0\\) die \\(x\\)-Achse.",
        "Die Funktion \\(f(x)=x\\) schneidet die \\(x\\)-Achse bei \\(x=0\\).",
        "Man muss also in zwei Intervalle aufteilen: \\([-2,0]\\) und \\([0,3]\\).",
        "Von \\(-2\\) bis \\(0\\) liegt \\(f(x)=x\\) unterhalb der \\(x\\)-Achse.",
        "Die Fläche dort ist \\(\\int_{-2}^{0}(0-x)\\,dx=\\int_{-2}^{0}(-x)\\,dx\\).",
        "Eine Stammfunktion ist \\(-\\frac{x^2}{2}\\).",
        "Das ergibt \\(0-(-2)=2\\).",
        "Von \\(0\\) bis \\(3\\) liegt \\(f(x)=x\\) oberhalb der \\(x\\)-Achse.",
        "Die Fläche dort ist \\(\\int_0^3 x\\,dx=\\frac{9}{2}\\).",
        "Der gesamte geometrische Flächeninhalt ist \\(2+\\frac{9}{2}=\\frac{13}{2}\\)."
      ]
    },
    {
      titel: "Aufgabe 8: Zwei Kurven mit Wechsel",
      schwierigkeit: "schwer",
      aufgabe:
        "Die Funktionen \\(f(x)=x^2\\) und \\(g(x)=1\\) begrenzen im Intervall \\([-2,2]\\) mehrere Flächenstücke. Erkläre, warum man aufteilen muss.",
      loesung: [
        "Zuerst berechnet man die Schnittpunkte.",
        "Setze \\(x^2=1\\).",
        "Dann ist \\(x=-1\\) oder \\(x=1\\).",
        "Diese Schnittpunkte liegen im Intervall \\([-2,2]\\).",
        "Zwischen \\(-1\\) und \\(1\\) gilt \\(x^2<1\\), also liegt \\(g(x)=1\\) oben.",
        "Ausserhalb dieses Bereichs gilt \\(x^2>1\\), also liegt \\(f(x)=x^2\\) oben.",
        "Deshalb muss man die Intervalle \\([-2,-1]\\), \\([-1,1]\\) und \\([1,2]\\) getrennt behandeln.",
        "Sonst würden positive und negative orientierte Flächen einander teilweise aufheben."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Wie berechnet man die Fläche zwischen zwei Kurven?",
      antwort:
        "Man integriert obere Funktion minus untere Funktion über das passende Intervall. Also \\(A=\\int_a^b(\\text{oben}-\\text{unten})\\,dx\\)."
    },
    {
      frage: "Wie findet man die Grenzen, wenn sie nicht gegeben sind?",
      antwort:
        "Man berechnet die Schnittpunkte der beiden Funktionen, indem man \\(f(x)=g(x)\\) setzt. Die \\(x\\)-Koordinaten sind die Grenzen."
    },
    {
      frage: "Warum muss man obere minus untere Funktion rechnen?",
      antwort:
        "Weil der senkrechte Abstand zwischen den Graphen aus der Differenz der \\(y\\)-Werte entsteht. Damit der Flächeninhalt positiv wird, nimmt man oben minus unten."
    },
    {
      frage: "Was macht man, wenn das Integral negativ wird?",
      antwort:
        "Dann hat man vermutlich die Funktionen in falscher Reihenfolge subtrahiert. Für den geometrischen Flächeninhalt nimmt man den positiven Wert oder rechnet obere minus untere Funktion."
    },
    {
      frage: "Wann muss man das Intervall aufteilen?",
      antwort:
        "Man muss aufteilen, wenn sich die Graphen innerhalb des Intervalls schneiden oder wenn die obere Funktion wechselt."
    },
    {
      frage: "Was ist der Unterschied zwischen orientierter Fläche und geometrischer Fläche?",
      antwort:
        "Die orientierte Fläche kann negativ sein. Die geometrische Fläche beschreibt echten Flächeninhalt und ist immer positiv."
    },
    {
      frage: "Wie hilft eine Skizze bei solchen Aufgaben?",
      antwort:
        "Eine Skizze hilft zu erkennen, welche Funktion oben liegt und ob man das Intervall an Schnittpunkten aufteilen muss."
    }
  ],
  nachtVorTest: [
    "Kannst du Schnittpunkte mit \\(f(x)=g(x)\\) berechnen?",
    "Verwendest du bei Integration nach \\(x\\) die \\(x\\)-Koordinaten als Grenzen?",
    "Kannst du erkennen, welche Funktion oben liegt?",
    "Rechnest du obere Funktion minus untere Funktion?",
    "Kennst du die Formel \\(A=\\int_a^b(f(x)-g(x))\\,dx\\), wenn \\(f\\) oben liegt?",
    "Weisst du, dass geometrische Flächeninhalte positiv sind?",
    "Merkst du, wenn ein negatives Integral nur ein Vorzeichenproblem ist?",
    "Kannst du an Schnittpunkten in Teilintervalle aufteilen?",
    "Kontrollierst du bei wechselnder oberer Funktion jedes Teilintervall einzeln?",
    "Kannst du die Fläche zwischen Graph und \\(x\\)-Achse als Spezialfall erklären?"
  ]
},
   
{
  id: "geraden-im-raum",
  nummer: "11",
  titel: "Geraden im Raum",
  kurzbeschreibung:
    "Parameterdarstellung von Geraden im dreidimensionalen Raum, Lagebeziehungen zwischen Geraden, Schnittpunkte, Abstand Punkt-Gerade und Abstand Gerade-Gerade.",
  lernziele: [
    "Du kannst eine Gerade im Raum in Parameterform darstellen.",
    "Du verstehst die Bedeutung von Stützvektor und Richtungsvektor.",
    "Du kannst prüfen, ob ein Punkt auf einer Geraden liegt.",
    "Du kannst die Lage zweier Geraden im Raum bestimmen.",
    "Du kannst parallele, identische, schneidende und windschiefe Geraden unterscheiden.",
    "Du kannst den Schnittpunkt zweier Geraden berechnen.",
    "Du kannst den Abstand eines Punktes zu einer Geraden berechnen.",
    "Du kannst den Abstand zweier windschiefer Geraden verstehen.",
    "Du kannst Gleichungssysteme aus Geradengleichungen korrekt aufstellen.",
    "Du erkennst typische Fehler bei Parametern, Vektoren und Lagebeziehungen."
  ],
  theorie: [
    {
      titel: "Gerade im Raum",
      text:
        "Eine Gerade im Raum besteht aus unendlich vielen Punkten. Im dreidimensionalen Raum beschreibt man sie meistens mit einer Parameterdarstellung."
    },
    {
      titel: "Parameterdarstellung einer Geraden",
      text:
        "Eine Gerade kann geschrieben werden als \\(g:\\vec{x}=\\vec{p}+t\\vec{v}\\). Dabei ist \\(\\vec{p}\\) ein Stützvektor, \\(\\vec{v}\\) ein Richtungsvektor und \\(t\\) ein reeller Parameter."
    },
    {
      titel: "Stützvektor",
      text:
        "Der Stützvektor zeigt vom Ursprung zu einem festen Punkt der Geraden. Er gibt also an, wo die Gerade im Raum verankert ist."
    },
    {
      titel: "Richtungsvektor",
      text:
        "Der Richtungsvektor gibt die Richtung der Geraden an. Durch verschiedene Werte des Parameters bewegt man sich entlang dieser Richtung."
    },
    {
      titel: "Parameter",
      text:
        "Der Parameter \\(t\\) ist eine reelle Zahl. Für jeden Wert von \\(t\\) erhält man einen anderen Punkt auf der Geraden."
    },
    {
      titel: "Punktprobe",
      text:
        "Um zu prüfen, ob ein Punkt auf einer Geraden liegt, setzt man seine Koordinaten in die Geradengleichung ein. Danach prüft man, ob für alle Koordinaten derselbe Parameterwert möglich ist."
    },
    {
      titel: "Lage zweier Geraden",
      text:
        "Zwei Geraden im Raum können identisch, parallel, schneidend oder windschief sein. Windschief bedeutet: Sie sind nicht parallel, schneiden sich aber trotzdem nicht."
    },
    {
      titel: "Parallele Geraden",
      text:
        "Zwei Geraden sind parallel, wenn ihre Richtungsvektoren Vielfache voneinander sind. Dann zeigen sie in dieselbe oder genau entgegengesetzte Richtung."
    },
    {
      titel: "Identische Geraden",
      text:
        "Zwei Geraden sind identisch, wenn sie parallel sind und zusätzlich ein Punkt der einen Geraden auch auf der anderen Geraden liegt."
    },
    {
      titel: "Schneidende Geraden",
      text:
        "Zwei Geraden schneiden sich, wenn es Parameterwerte gibt, für die beide Geradengleichungen denselben Punkt liefern."
    },
    {
      titel: "Windschiefe Geraden",
      text:
        "Windschiefe Geraden kommen nur im Raum vor. Sie sind nicht parallel und haben keinen Schnittpunkt."
    },
    {
      titel: "Abstand Punkt-Gerade",
      text:
        "Der Abstand eines Punktes zu einer Geraden ist die kürzeste Entfernung vom Punkt zur Geraden. Diese Entfernung steht senkrecht auf der Geraden."
    },
    {
      titel: "Abstand windschiefer Geraden",
      text:
        "Bei windschiefen Geraden misst man die kürzeste Verbindung zwischen beiden Geraden. Diese Verbindungsstrecke steht senkrecht auf beiden Richtungsvektoren."
    }
  ],
  methoden: [
    {
      titel: "Methode: Gerade durch Punkt und Richtungsvektor aufstellen",
      schritte: [
        "Wähle den gegebenen Punkt als Stützvektor.",
        "Verwende den gegebenen Richtungsvektor als Bewegungsrichtung.",
        "Schreibe die Gerade in der Form \\(\\vec{x}=\\vec{p}+t\\vec{v}\\).",
        "Achte darauf, dass \\(t\\in\\mathbb{R}\\) gilt.",
        "Kontrolliere, ob die Dimensionen stimmen, also ob alle Vektoren drei Koordinaten haben."
      ]
    },
    {
      titel: "Methode: Gerade durch zwei Punkte aufstellen",
      schritte: [
        "Wähle einen der beiden Punkte als Stützpunkt.",
        "Berechne den Richtungsvektor durch \\(\\vec{v}=\\overrightarrow{AB}=\\vec{b}-\\vec{a}\\).",
        "Setze Stützvektor und Richtungsvektor in \\(\\vec{x}=\\vec{a}+t\\vec{v}\\) ein.",
        "Der andere Punkt sollte durch einen passenden Parameterwert erreichbar sein.",
        "Kontrolliere deine Gerade durch Einsetzen des zweiten Punktes."
      ]
    },
    {
      titel: "Methode: Punktprobe bei einer Geraden",
      schritte: [
        "Setze die Koordinaten des Punktes für \\(\\vec{x}\\) ein.",
        "Vergleiche jede Koordinate mit der entsprechenden Koordinatengleichung.",
        "Löse aus jeder Koordinate nach dem Parameter.",
        "Prüfe, ob überall derselbe Parameterwert entsteht.",
        "Wenn ja, liegt der Punkt auf der Geraden.",
        "Wenn nein, liegt der Punkt nicht auf der Geraden."
      ]
    },
    {
      titel: "Methode: Lage zweier Geraden bestimmen",
      schritte: [
        "Vergleiche zuerst die Richtungsvektoren.",
        "Sind die Richtungsvektoren Vielfache voneinander, sind die Geraden parallel oder identisch.",
        "Prüfe dann, ob ein Stützpunkt der einen Geraden auf der anderen Geraden liegt.",
        "Falls ja, sind die Geraden identisch.",
        "Falls nein, sind sie echt parallel.",
        "Sind die Richtungsvektoren keine Vielfachen, setze die beiden Geradengleichungen gleich.",
        "Löse das Gleichungssystem.",
        "Gibt es eine Lösung, schneiden sich die Geraden.",
        "Gibt es keine Lösung, sind sie windschief."
      ]
    },
    {
      titel: "Methode: Schnittpunkt zweier Geraden berechnen",
      schritte: [
        "Schreibe beide Geraden mit unterschiedlichen Parametern, zum Beispiel \\(t\\) und \\(s\\).",
        "Setze die Geradengleichungen gleich.",
        "Vergleiche die drei Koordinaten.",
        "Du erhältst ein Gleichungssystem mit den Parametern.",
        "Löse das Gleichungssystem.",
        "Setze den gefundenen Parameter in eine der Geraden ein.",
        "Der entstehende Punkt ist der Schnittpunkt.",
        "Prüfe mit der anderen Geraden, ob der Punkt wirklich stimmt."
      ]
    },
    {
      titel: "Methode: Abstand Punkt-Gerade mit Lotidee",
      schritte: [
        "Wähle einen allgemeinen Punkt auf der Geraden mit Parameter \\(t\\).",
        "Bilde den Verbindungsvektor vom gegebenen Punkt zu diesem Geradenpunkt.",
        "Nutze die Bedingung, dass dieser Vektor senkrecht zum Richtungsvektor der Geraden steht.",
        "Setze das Skalarprodukt gleich \\(0\\).",
        "Löse nach dem Parameter.",
        "Setze den Parameter in die Gerade ein, um den Lotfusspunkt zu erhalten.",
        "Berechne den Abstand zwischen gegebenem Punkt und Lotfusspunkt."
      ]
    },
    {
      titel: "Methode: Abstand Punkt-Gerade mit Kreuzprodukt",
      schritte: [
        "Bilde den Vektor vom Stützpunkt der Geraden zum gegebenen Punkt.",
        "Berechne das Kreuzprodukt dieses Vektors mit dem Richtungsvektor der Geraden.",
        "Bestimme den Betrag des Kreuzprodukts.",
        "Teile durch den Betrag des Richtungsvektors.",
        "Die Formel lautet \\(d=\\frac{|(\\vec{a}-\\vec{p})\\times\\vec{v}|}{|\\vec{v}|}\\)."
      ]
    }
  ],
  merksaetze: [
    "Eine Gerade im Raum schreibt man meistens als \\(\\vec{x}=\\vec{p}+t\\vec{v}\\).",
    "\\(\\vec{p}\\) ist der Stützvektor.",
    "\\(\\vec{v}\\) ist der Richtungsvektor.",
    "Der Parameter \\(t\\) bewegt einen Punkt entlang der Geraden.",
    "Einen Richtungsvektor zwischen zwei Punkten erhält man durch Endpunkt minus Anfangspunkt.",
    "Ein Punkt liegt auf einer Geraden, wenn in allen Koordinaten derselbe Parameter passt.",
    "Parallele Geraden haben linear abhängige Richtungsvektoren.",
    "Identische Geraden sind parallel und besitzen mindestens einen gemeinsamen Punkt.",
    "Schneidende Geraden haben genau einen gemeinsamen Punkt.",
    "Windschiefe Geraden sind nicht parallel und schneiden sich nicht.",
    "Bei Schnittpunkten verwendet man für zwei Geraden verschiedene Parameter.",
    "Abstände stehen immer senkrecht auf der betreffenden Geraden."
  ],
  typischeFehler: [
    {
      fehler: "Man verwendet bei zwei Geraden denselben Parameter.",
      korrektur:
        "Zwei verschiedene Geraden brauchen beim Gleichsetzen verschiedene Parameter, zum Beispiel \\(t\\) und \\(s\\). Sonst zwingt man beide Geraden fälschlich zur gleichen Bewegung."
    },
    {
      fehler: "Man denkt, nicht parallele Geraden müssten sich im Raum immer schneiden.",
      korrektur:
        "Im Raum können Geraden auch windschief sein. Sie sind dann nicht parallel, schneiden sich aber trotzdem nicht."
    },
    {
      fehler: "Man verwechselt Stützvektor und Richtungsvektor.",
      korrektur:
        "Der Stützvektor zeigt zu einem festen Punkt der Geraden. Der Richtungsvektor gibt nur die Richtung an."
    },
    {
      fehler: "Man prüft bei der Punktprobe nur eine Koordinate.",
      korrektur:
        "Ein Punkt liegt nur dann auf der Geraden, wenn derselbe Parameter in allen drei Koordinaten funktioniert."
    },
    {
      fehler: "Man erkennt identische Geraden nur daran, dass die Richtungsvektoren gleich sind.",
      korrektur:
        "Gleiche oder parallele Richtungsvektoren reichen nicht. Zusätzlich muss ein Punkt der einen Geraden auf der anderen liegen."
    },
    {
      fehler: "Man berechnet den Abstand Punkt-Gerade mit irgendeinem Punkt der Geraden.",
      korrektur:
        "Der Abstand ist die kürzeste Entfernung. Man braucht den Lotfusspunkt oder eine passende Abstandsformel."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Gerade durch Punkt und Richtungsvektor",
      schwierigkeit: "einfach",
      aufgabe:
        "Stelle die Gerade durch den Punkt \\(P(1\\mid 2\\mid -1)\\) mit Richtungsvektor \\(\\vec{v}=\\begin{pmatrix}2\\\\0\\\\3\\end{pmatrix}\\) auf.",
      loesung: [
        "Der Punkt \\(P\\) liefert den Stützvektor.",
        "Also ist \\(\\vec{p}=\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}\\).",
        "Der Richtungsvektor ist gegeben.",
        "Die Gerade lautet deshalb:",
        "\\(g:\\vec{x}=\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}+t\\begin{pmatrix}2\\\\0\\\\3\\end{pmatrix}\\).",
        "Dabei gilt \\(t\\in\\mathbb{R}\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Gerade durch zwei Punkte",
      schwierigkeit: "einfach",
      aufgabe:
        "Stelle die Gerade durch \\(A(1\\mid 0\\mid 2)\\) und \\(B(4\\mid 2\\mid 5)\\) auf.",
      loesung: [
        "Wähle \\(A\\) als Stützpunkt.",
        "Berechne den Richtungsvektor \\(\\overrightarrow{AB}=B-A\\).",
        "\\(\\overrightarrow{AB}=\\begin{pmatrix}4-1\\\\2-0\\\\5-2\\end{pmatrix}=\\begin{pmatrix}3\\\\2\\\\3\\end{pmatrix}\\).",
        "Die Gerade lautet:",
        "\\(g:\\vec{x}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+t\\begin{pmatrix}3\\\\2\\\\3\\end{pmatrix}\\).",
        "Dabei gilt \\(t\\in\\mathbb{R}\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Punktprobe",
      schwierigkeit: "einfach",
      aufgabe:
        "Prüfe, ob der Punkt \\(Q(5\\mid 2\\mid 5)\\) auf der Geraden \\(g:\\vec{x}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\3\\end{pmatrix}\\) liegt.",
      loesung: [
        "Setze die Koordinaten von \\(Q\\) ein.",
        "Aus der ersten Koordinate folgt \\(5=1+2t\\).",
        "Daraus folgt \\(2t=4\\), also \\(t=2\\).",
        "Aus der zweiten Koordinate folgt \\(2=0+t\\), also \\(t=2\\).",
        "Aus der dritten Koordinate folgt \\(5=2+3t\\).",
        "Daraus folgt \\(3t=3\\), also \\(t=1\\).",
        "Die Parameterwerte sind nicht überall gleich.",
        "Also liegt \\(Q\\) nicht auf der Geraden."
      ]
    },
    {
      titel: "Aufgabe 4: Parallele Geraden erkennen",
      schwierigkeit: "mittel",
      aufgabe:
        "Untersuche, ob die Geraden mit Richtungsvektoren \\(\\vec{v}=\\begin{pmatrix}2\\\\4\\\\-2\\end{pmatrix}\\) und \\(\\vec{w}=\\begin{pmatrix}-1\\\\-2\\\\1\\end{pmatrix}\\) parallel sind.",
      loesung: [
        "Zwei Geraden sind parallel, wenn die Richtungsvektoren Vielfache voneinander sind.",
        "Vergleiche die Koordinaten.",
        "\\(\\begin{pmatrix}2\\\\4\\\\-2\\end{pmatrix}=-2\\begin{pmatrix}-1\\\\-2\\\\1\\end{pmatrix}\\).",
        "Also sind die Richtungsvektoren linear abhängig.",
        "Die zugehörigen Geraden sind parallel oder identisch.",
        "Ob sie identisch sind, müsste man zusätzlich mit einem Punkt prüfen."
      ]
    },
    {
      titel: "Aufgabe 5: Schnittpunkt zweier Geraden",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme den Schnittpunkt von \\(g:\\vec{x}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}\\) und \\(h:\\vec{x}=\\begin{pmatrix}3\\\\4\\\\2\\end{pmatrix}+s\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix}\\), falls er existiert.",
      loesung: [
        "Setze beide Geraden gleich.",
        "\\(\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\\\2\\end{pmatrix}+s\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix}\\).",
        "Vergleiche die Koordinaten.",
        "Erste Koordinate: \\(1+t=3-s\\).",
        "Zweite Koordinate: \\(2t=4\\).",
        "Dritte Koordinate: \\(2=2+s\\).",
        "Aus der zweiten Gleichung folgt \\(t=2\\).",
        "Aus der dritten Gleichung folgt \\(s=0\\).",
        "Prüfe die erste Gleichung: \\(1+2=3-0\\), also \\(3=3\\).",
        "Die Werte passen.",
        "Setze \\(t=2\\) in \\(g\\) ein.",
        "\\(\\vec{x}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+2\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}=\\begin{pmatrix}3\\\\4\\\\2\\end{pmatrix}\\).",
        "Der Schnittpunkt ist \\(S(3\\mid4\\mid2)\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Windschiefe Geraden erkennen",
      schwierigkeit: "mittel",
      aufgabe:
        "Untersuche die Lage von \\(g:\\vec{x}=\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) und \\(h:\\vec{x}=\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}+s\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\).",
      loesung: [
        "Zuerst vergleicht man die Richtungsvektoren.",
        "\\(\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) und \\(\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\) sind keine Vielfachen voneinander.",
        "Die Geraden sind also nicht parallel.",
        "Nun prüft man, ob sie sich schneiden.",
        "Setze die Geraden gleich.",
        "\\(\\begin{pmatrix}t\\\\0\\\\0\\end{pmatrix}=\\begin{pmatrix}0\\\\1+s\\\\1\\end{pmatrix}\\).",
        "Aus der dritten Koordinate folgt \\(0=1\\).",
        "Das ist unmöglich.",
        "Also gibt es keinen Schnittpunkt.",
        "Die Geraden sind nicht parallel und schneiden sich nicht.",
        "Also sind sie windschief."
      ]
    },
    {
      titel: "Aufgabe 7: Identische Geraden prüfen",
      schwierigkeit: "mittel",
      aufgabe:
        "Untersuche, ob \\(g:\\vec{x}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}\\) und \\(h:\\vec{x}=\\begin{pmatrix}3\\\\3\\\\2\\end{pmatrix}+s\\begin{pmatrix}4\\\\2\\\\-2\\end{pmatrix}\\) identisch sind.",
      loesung: [
        "Zuerst vergleicht man die Richtungsvektoren.",
        "\\(\\begin{pmatrix}4\\\\2\\\\-2\\end{pmatrix}=2\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}\\).",
        "Die Geraden sind also parallel oder identisch.",
        "Nun prüft man, ob der Stützpunkt von \\(h\\) auf \\(g\\) liegt.",
        "Setze \\(\\begin{pmatrix}3\\\\3\\\\2\\end{pmatrix}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+t\\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}\\).",
        "Erste Koordinate: \\(3=1+2t\\), also \\(t=1\\).",
        "Zweite Koordinate: \\(3=2+t\\), also \\(t=1\\).",
        "Dritte Koordinate: \\(2=3-t\\), also \\(t=1\\).",
        "Überall entsteht derselbe Parameterwert.",
        "Der Stützpunkt von \\(h\\) liegt auf \\(g\\).",
        "Also sind die Geraden identisch."
      ]
    },
    {
      titel: "Aufgabe 8: Abstand Punkt-Gerade mit Lotbedingung",
      schwierigkeit: "schwer",
      aufgabe:
        "Berechne den Abstand des Punktes \\(P(0\\mid2\\mid0)\\) zur Geraden \\(g:\\vec{x}=\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\).",
      loesung: [
        "Die Gerade ist die \\(x\\)-Achse.",
        "Ein allgemeiner Punkt auf der Geraden ist \\(G(t)=(t\\mid0\\mid0)\\).",
        "Der kürzeste Abstand vom Punkt \\(P(0\\mid2\\mid0)\\) zur \\(x\\)-Achse ist senkrecht zur Geraden.",
        "Man sieht hier direkt, dass der Lotfusspunkt \\((0\\mid0\\mid0)\\) ist.",
        "Der Abstand zwischen \\(P(0\\mid2\\mid0)\\) und \\((0\\mid0\\mid0)\\) ist \\(2\\).",
        "Also beträgt der Abstand \\(d=2\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Abstand Punkt-Gerade mit Kreuzprodukt",
      schwierigkeit: "schwer",
      aufgabe:
        "Berechne den Abstand des Punktes \\(A(0\\mid0\\mid1)\\) zur Geraden \\(g:\\vec{x}=\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\).",
      loesung: [
        "Der Stützpunkt der Geraden ist \\(P(0\\mid0\\mid0)\\).",
        "Der Richtungsvektor ist \\(\\vec{v}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\).",
        "Bilde den Vektor vom Stützpunkt zum Punkt \\(A\\): \\(\\overrightarrow{PA}=\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\\).",
        "Die Abstandsformel lautet \\(d=\\frac{|\\overrightarrow{PA}\\times\\vec{v}|}{|\\vec{v}|}\\).",
        "Das Kreuzprodukt von \\(\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\\) und \\(\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) hat den Betrag \\(1\\).",
        "Der Betrag von \\(\\vec{v}\\) ist ebenfalls \\(1\\).",
        "Also ist \\(d=\\frac{1}{1}=1\\)."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Wie stellt man eine Gerade im Raum dar?",
      antwort:
        "Eine Gerade im Raum stellt man meistens als \\(\\vec{x}=\\vec{p}+t\\vec{v}\\) dar. \\(\\vec{p}\\) ist ein Stützvektor, \\(\\vec{v}\\) ein Richtungsvektor und \\(t\\) ein Parameter."
    },
    {
      frage: "Was ist ein Stützvektor?",
      antwort:
        "Ein Stützvektor zeigt vom Ursprung zu einem festen Punkt der Geraden. Er gibt an, wo die Gerade im Raum liegt."
    },
    {
      frage: "Was ist ein Richtungsvektor?",
      antwort:
        "Ein Richtungsvektor gibt an, in welche Richtung die Gerade verläuft. Durch den Parameter bewegt man sich entlang dieses Vektors."
    },
    {
      frage: "Wie prüft man, ob ein Punkt auf einer Geraden liegt?",
      antwort:
        "Man setzt die Koordinaten des Punktes in die Geradengleichung ein und prüft, ob in allen Koordinaten derselbe Parameterwert entsteht."
    },
    {
      frage: "Welche Lagebeziehungen können zwei Geraden im Raum haben?",
      antwort:
        "Sie können identisch, parallel, schneidend oder windschief sein."
    },
    {
      frage: "Was bedeutet windschief?",
      antwort:
        "Windschiefe Geraden sind nicht parallel und schneiden sich nicht. Das ist nur im dreidimensionalen Raum möglich."
    },
    {
      frage: "Wie findet man den Schnittpunkt zweier Geraden?",
      antwort:
        "Man setzt die beiden Geradengleichungen mit verschiedenen Parametern gleich, löst das Gleichungssystem und setzt den gefundenen Parameter in eine Gerade ein."
    },
    {
      frage: "Wie erkennt man parallele Geraden?",
      antwort:
        "Parallele Geraden haben Richtungsvektoren, die Vielfache voneinander sind."
    },
    {
      frage: "Wann sind parallele Geraden identisch?",
      antwort:
        "Sie sind identisch, wenn zusätzlich ein Punkt der einen Geraden auf der anderen Geraden liegt."
    },
    {
      frage: "Was ist beim Abstand Punkt-Gerade wichtig?",
      antwort:
        "Der Abstand ist immer die kürzeste Verbindung. Diese steht senkrecht auf der Geraden."
    }
  ],
  nachtVorTest: [
    "Kannst du eine Gerade als \\(\\vec{x}=\\vec{p}+t\\vec{v}\\) schreiben?",
    "Weisst du, was Stützvektor und Richtungsvektor bedeuten?",
    "Kannst du aus zwei Punkten einen Richtungsvektor bilden?",
    "Machst du bei zwei Geraden verschiedene Parameter, zum Beispiel \\(t\\) und \\(s\\)?",
    "Kannst du eine Punktprobe korrekt durchführen?",
    "Prüfst du bei der Punktprobe alle drei Koordinaten?",
    "Kannst du parallele Richtungsvektoren erkennen?",
    "Unterscheidest du parallel und identisch?",
    "Kannst du einen Schnittpunkt durch Gleichsetzen berechnen?",
    "Weisst du, was windschiefe Geraden sind?",
    "Kannst du erklären, warum nicht parallele Geraden im Raum nicht zwingend schneiden?",
    "Weisst du, dass Abstände senkrecht gemessen werden?"
  ]
},
   
{
  id: "skalarprodukt-kreuzprodukt",
  nummer: "12",
  titel: "Skalarprodukt und Kreuzprodukt",
  kurzbeschreibung:
    "Skalarprodukt und Kreuzprodukt geometrisch und rechnerisch verstehen: Winkelberechnung, Orthogonalität, orthonormierte Basis, Vektorzerlegung und Flächenberechnung.",
  lernziele: [
    "Du kannst das Skalarprodukt zweier Vektoren berechnen.",
    "Du kannst mit dem Skalarprodukt Winkel zwischen Vektoren bestimmen.",
    "Du kannst Orthogonalität mit dem Skalarprodukt prüfen.",
    "Du verstehst den Zusammenhang zwischen Skalarprodukt und Projektion.",
    "Du kannst das Kreuzprodukt zweier Vektoren im Raum berechnen.",
    "Du kannst mit dem Kreuzprodukt einen Normalvektor bestimmen.",
    "Du kannst mit dem Kreuzprodukt Flächeninhalte von Parallelogrammen und Dreiecken berechnen.",
    "Du verstehst, was eine orthonormierte Basis ist.",
    "Du kannst Vektoren in einfache Komponenten zerlegen.",
    "Du erkennst typische Fehler bei Reihenfolge, Vorzeichen und Betrag."
  ],
  theorie: [
    {
      titel: "Was ist das Skalarprodukt?",
      text:
        "Das Skalarprodukt verknüpft zwei Vektoren und liefert als Ergebnis eine Zahl. Deshalb heisst das Ergebnis Skalar. Für \\(\\vec{a}=\\begin{pmatrix}a_1\\\\a_2\\\\a_3\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}b_1\\\\b_2\\\\b_3\\end{pmatrix}\\) gilt \\(\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2+a_3b_3\\)."
    },
    {
      titel: "Geometrische Bedeutung des Skalarprodukts",
      text:
        "Das Skalarprodukt misst, wie stark zwei Vektoren in dieselbe Richtung zeigen. Ist das Skalarprodukt positiv, zeigen sie eher in ähnliche Richtung. Ist es negativ, zeigen sie eher in entgegengesetzte Richtung."
    },
    {
      titel: "Skalarprodukt und Winkel",
      text:
        "Zwischen zwei Vektoren gilt \\(\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\cos(\\varphi)\\). Daraus kann man den Winkel \\(\\varphi\\) zwischen zwei Vektoren berechnen."
    },
    {
      titel: "Orthogonalität",
      text:
        "Zwei Vektoren stehen senkrecht aufeinander, wenn ihr Skalarprodukt \\(0\\) ist. Also gilt: \\(\\vec{a}\\perp\\vec{b}\\), wenn \\(\\vec{a}\\cdot\\vec{b}=0\\)."
    },
    {
      titel: "Betrag eines Vektors",
      text:
        "Der Betrag eines Vektors ist seine Länge. Für \\(\\vec{a}=\\begin{pmatrix}a_1\\\\a_2\\\\a_3\\end{pmatrix}\\) gilt \\(|\\vec{a}|=\\sqrt{a_1^2+a_2^2+a_3^2}\\)."
    },
    {
      titel: "Projektion",
      text:
        "Eine Projektion beschreibt den Anteil eines Vektors in Richtung eines anderen Vektors. Das Skalarprodukt ist dabei zentral, weil es Richtungsanteile misst."
    },
    {
      titel: "Was ist das Kreuzprodukt?",
      text:
        "Das Kreuzprodukt verknüpft zwei Vektoren im dreidimensionalen Raum und liefert wieder einen Vektor. Dieser neue Vektor steht senkrecht auf beiden ursprünglichen Vektoren."
    },
    {
      titel: "Kreuzprodukt als Normalvektor",
      text:
        "Wenn zwei Vektoren in einer Ebene liegen, dann ist ihr Kreuzprodukt ein Normalvektor dieser Ebene. Das ist besonders wichtig bei Ebenengleichungen."
    },
    {
      titel: "Betrag des Kreuzprodukts",
      text:
        "Der Betrag des Kreuzprodukts entspricht dem Flächeninhalt des Parallelogramms, das von den beiden Vektoren aufgespannt wird. Es gilt \\(|\\vec{a}\\times\\vec{b}|=|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\sin(\\varphi)\\)."
    },
    {
      titel: "Dreiecksfläche",
      text:
        "Ein Dreieck ist halb so gross wie das zugehörige Parallelogramm. Deshalb gilt für die Dreiecksfläche \\(A=\\frac{1}{2}|\\vec{a}\\times\\vec{b}|\\)."
    },
    {
      titel: "Orthonormierte Basis",
      text:
        "Eine orthonormierte Basis besteht aus Basisvektoren, die alle Länge \\(1\\) haben und paarweise senkrecht aufeinander stehen. Im Raum ist die Standardbasis ein typisches Beispiel."
    },
    {
      titel: "Vektorzerlegung",
      text:
        "Einen Vektor kann man in Richtungsanteile zerlegen. In einer orthonormierten Basis sind diese Anteile besonders einfach ablesbar, weil die Basisvektoren senkrecht zueinander stehen und Länge \\(1\\) haben."
    }
  ],
  methoden: [
    {
      titel: "Methode: Skalarprodukt berechnen",
      schritte: [
        "Schreibe beide Vektoren komponentenweise auf.",
        "Multipliziere die entsprechenden Koordinaten miteinander.",
        "Addiere alle Produkte.",
        "Das Ergebnis ist eine Zahl.",
        "Prüfe bei Bedarf das Vorzeichen des Ergebnisses."
      ]
    },
    {
      titel: "Methode: Winkel zwischen zwei Vektoren berechnen",
      schritte: [
        "Berechne zuerst das Skalarprodukt \\(\\vec{a}\\cdot\\vec{b}\\).",
        "Berechne die Beträge \\(|\\vec{a}|\\) und \\(|\\vec{b}|\\).",
        "Setze in \\(\\cos(\\varphi)=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}\\) ein.",
        "Berechne den Quotienten.",
        "Bestimme den Winkel mit \\(\\varphi=\\arccos(\\text{Quotient})\\).",
        "Achte darauf, ob dein Taschenrechner auf Grad oder Bogenmass eingestellt ist."
      ]
    },
    {
      titel: "Methode: Orthogonalität prüfen",
      schritte: [
        "Berechne das Skalarprodukt der beiden Vektoren.",
        "Wenn das Ergebnis \\(0\\) ist, sind die Vektoren orthogonal.",
        "Wenn das Ergebnis nicht \\(0\\) ist, sind sie nicht orthogonal.",
        "Achte darauf, alle Koordinaten korrekt zu multiplizieren und zu addieren."
      ]
    },
    {
      titel: "Methode: Kreuzprodukt berechnen",
      schritte: [
        "Schreibe die beiden Vektoren untereinander oder in die Kreuzproduktformel.",
        "Für \\(\\vec{a}=\\begin{pmatrix}a_1\\\\a_2\\\\a_3\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}b_1\\\\b_2\\\\b_3\\end{pmatrix}\\) gilt:",
        "\\(\\vec{a}\\times\\vec{b}=\\begin{pmatrix}a_2b_3-a_3b_2\\\\a_3b_1-a_1b_3\\\\a_1b_2-a_2b_1\\end{pmatrix}\\).",
        "Berechne jede Koordinate einzeln.",
        "Kontrolliere besonders das Vorzeichen der mittleren Koordinate.",
        "Prüfe bei Bedarf, ob der neue Vektor senkrecht auf beiden Ausgangsvektoren steht."
      ]
    },
    {
      titel: "Methode: Flächeninhalt eines Parallelogramms berechnen",
      schritte: [
        "Bestimme zwei aufspannende Vektoren des Parallelogramms.",
        "Berechne das Kreuzprodukt dieser beiden Vektoren.",
        "Berechne den Betrag des Kreuzprodukts.",
        "Dieser Betrag ist der Flächeninhalt des Parallelogramms.",
        "Gib das Ergebnis in Flächeneinheiten an."
      ]
    },
    {
      titel: "Methode: Flächeninhalt eines Dreiecks berechnen",
      schritte: [
        "Bestimme zwei Seitenvektoren des Dreiecks, die vom selben Punkt ausgehen.",
        "Berechne das Kreuzprodukt dieser beiden Vektoren.",
        "Berechne den Betrag des Kreuzprodukts.",
        "Teile den Betrag durch \\(2\\).",
        "Das Ergebnis ist der Flächeninhalt des Dreiecks."
      ]
    },
    {
      titel: "Methode: Orthonormierte Basis prüfen",
      schritte: [
        "Berechne die Länge jedes Basisvektors.",
        "Jeder Basisvektor muss Länge \\(1\\) haben.",
        "Berechne die Skalarprodukte zwischen verschiedenen Basisvektoren.",
        "Alle diese Skalarprodukte müssen \\(0\\) sein.",
        "Wenn beide Bedingungen erfüllt sind, ist die Basis orthonormiert."
      ]
    },
    {
      titel: "Methode: Normalvektor mit Kreuzprodukt bestimmen",
      schritte: [
        "Bestimme zwei nicht parallele Richtungsvektoren der Ebene.",
        "Berechne ihr Kreuzprodukt.",
        "Das Ergebnis steht senkrecht auf beiden Richtungsvektoren.",
        "Dieser Vektor ist ein Normalvektor der Ebene.",
        "Kontrolliere mit dem Skalarprodukt, ob der Normalvektor wirklich senkrecht auf beiden Richtungsvektoren steht."
      ]
    }
  ],
  merksaetze: [
    "Das Skalarprodukt zweier Vektoren ist eine Zahl.",
    "\\(\\vec{a}\\cdot\\vec{b}=a_1b_1+a_2b_2+a_3b_3\\).",
    "Das Skalarprodukt misst Richtungsähnlichkeit.",
    "Zwei Vektoren sind orthogonal, wenn ihr Skalarprodukt \\(0\\) ist.",
    "\\(\\vec{a}\\cdot\\vec{b}=|\\vec{a}|\\cdot|\\vec{b}|\\cdot\\cos(\\varphi)\\).",
    "Der Betrag eines Vektors ist seine Länge.",
    "Das Kreuzprodukt zweier Vektoren ist wieder ein Vektor.",
    "\\(\\vec{a}\\times\\vec{b}\\) steht senkrecht auf \\(\\vec{a}\\) und \\(\\vec{b}\\).",
    "Der Betrag des Kreuzprodukts ist die Fläche des aufgespannten Parallelogramms.",
    "Die Dreiecksfläche ist \\(\\frac{1}{2}|\\vec{a}\\times\\vec{b}|\\).",
    "Eine orthonormierte Basis besteht aus senkrechten Einheitsvektoren.",
    "Beim Kreuzprodukt ist die Reihenfolge wichtig: \\(\\vec{a}\\times\\vec{b}=-(\\vec{b}\\times\\vec{a})\\)."
  ],
  typischeFehler: [
    {
      fehler: "Man denkt, das Skalarprodukt sei ein Vektor.",
      korrektur:
        "Das Skalarprodukt liefert eine Zahl. Nur das Kreuzprodukt liefert einen Vektor."
    },
    {
      fehler: "Man prüft Orthogonalität mit dem Kreuzprodukt.",
      korrektur:
        "Orthogonalität prüft man normalerweise mit dem Skalarprodukt. Wenn \\(\\vec{a}\\cdot\\vec{b}=0\\), stehen die Vektoren senkrecht aufeinander."
    },
    {
      fehler: "Man vergisst beim Winkel die Beträge der Vektoren.",
      korrektur:
        "Für den Winkel braucht man \\(\\cos(\\varphi)=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}\\). Das Skalarprodukt allein reicht nicht."
    },
    {
      fehler: "Man verwechselt Gradmass und Bogenmass.",
      korrektur:
        "Beim Winkel mit \\(\\arccos\\) muss der Taschenrechner im passenden Modus sein. In Schulaufgaben ist oft Gradmass gefragt."
    },
    {
      fehler: "Man denkt, das Kreuzprodukt sei kommutativ.",
      korrektur:
        "Das Kreuzprodukt ist nicht kommutativ. Es gilt \\(\\vec{a}\\times\\vec{b}=-(\\vec{b}\\times\\vec{a})\\)."
    },
    {
      fehler: "Man vergisst bei der Dreiecksfläche den Faktor \\(\\frac{1}{2}\\).",
      korrektur:
        "Der Betrag des Kreuzprodukts gibt die Parallelogrammfläche. Die Dreiecksfläche ist nur halb so gross."
    },
    {
      fehler: "Man verwendet das Kreuzprodukt in zwei Dimensionen wie im Raum.",
      korrektur:
        "Das normale Kreuzprodukt mit Vektor als Ergebnis ist eine Operation im dreidimensionalen Raum."
    },
    {
      fehler: "Man nennt eine Basis orthonormiert, obwohl die Vektoren nur senkrecht sind.",
      korrektur:
        "Orthonormiert bedeutet zwei Dinge: Die Vektoren sind paarweise senkrecht und jeder Vektor hat Länge \\(1\\)."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Skalarprodukt berechnen",
      schwierigkeit: "einfach",
      aufgabe:
        "Berechne das Skalarprodukt von \\(\\vec{a}=\\begin{pmatrix}2\\\\-1\\\\3\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}4\\\\5\\\\-2\\end{pmatrix}\\).",
      loesung: [
        "Multipliziere die entsprechenden Koordinaten.",
        "\\(\\vec{a}\\cdot\\vec{b}=2\\cdot4+(-1)\\cdot5+3\\cdot(-2)\\).",
        "Das ergibt \\(8-5-6\\).",
        "Also ist \\(\\vec{a}\\cdot\\vec{b}=-3\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Orthogonalität prüfen",
      schwierigkeit: "einfach",
      aufgabe:
        "Prüfe, ob \\(\\vec{a}=\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}4\\\\-1\\\\2\\end{pmatrix}\\) orthogonal sind.",
      loesung: [
        "Berechne das Skalarprodukt.",
        "\\(\\vec{a}\\cdot\\vec{b}=1\\cdot4+2\\cdot(-1)+(-1)\\cdot2\\).",
        "Das ergibt \\(4-2-2=0\\).",
        "Da das Skalarprodukt \\(0\\) ist, sind die Vektoren orthogonal."
      ]
    },
    {
      titel: "Aufgabe 3: Betrag eines Vektors",
      schwierigkeit: "einfach",
      aufgabe:
        "Berechne den Betrag von \\(\\vec{v}=\\begin{pmatrix}2\\\\-3\\\\6\\end{pmatrix}\\).",
      loesung: [
        "Der Betrag ist die Länge des Vektors.",
        "\\(|\\vec{v}|=\\sqrt{2^2+(-3)^2+6^2}\\).",
        "Das ergibt \\(\\sqrt{4+9+36}\\).",
        "Also \\(|\\vec{v}|=\\sqrt{49}=7\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Winkel zwischen zwei Vektoren",
      schwierigkeit: "mittel",
      aufgabe:
        "Berechne den Winkel zwischen \\(\\vec{a}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\).",
      loesung: [
        "Berechne zuerst das Skalarprodukt.",
        "\\(\\vec{a}\\cdot\\vec{b}=1\\cdot1+0\\cdot1+0\\cdot0=1\\).",
        "Berechne die Beträge.",
        "\\(|\\vec{a}|=1\\).",
        "\\(|\\vec{b}|=\\sqrt{1^2+1^2+0^2}=\\sqrt{2}\\).",
        "Setze in die Winkelformel ein.",
        "\\(\\cos(\\varphi)=\\frac{1}{1\\cdot\\sqrt{2}}=\\frac{1}{\\sqrt{2}}\\).",
        "Daraus folgt \\(\\varphi=45^\\circ\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Kreuzprodukt berechnen",
      schwierigkeit: "mittel",
      aufgabe:
        "Berechne \\(\\vec{a}\\times\\vec{b}\\) für \\(\\vec{a}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}0\\\\1\\\\4\\end{pmatrix}\\).",
      loesung: [
        "Verwende die Formel für das Kreuzprodukt.",
        "Erste Koordinate: \\(a_2b_3-a_3b_2=2\\cdot4-3\\cdot1=8-3=5\\).",
        "Zweite Koordinate: \\(a_3b_1-a_1b_3=3\\cdot0-1\\cdot4= -4\\).",
        "Dritte Koordinate: \\(a_1b_2-a_2b_1=1\\cdot1-2\\cdot0=1\\).",
        "Also ist \\(\\vec{a}\\times\\vec{b}=\\begin{pmatrix}5\\\\-4\\\\1\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Normalvektor bestimmen",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme einen Normalvektor zu den Richtungsvektoren \\(\\vec{u}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}\\) und \\(\\vec{v}=\\begin{pmatrix}0\\\\3\\\\1\\end{pmatrix}\\).",
      loesung: [
        "Ein Normalvektor steht senkrecht auf beiden Richtungsvektoren.",
        "Man kann ihn mit dem Kreuzprodukt berechnen.",
        "\\(\\vec{u}\\times\\vec{v}=\\begin{pmatrix}0\\cdot1-2\\cdot3\\\\2\\cdot0-1\\cdot1\\\\1\\cdot3-0\\cdot0\\end{pmatrix}\\).",
        "Das ergibt \\(\\begin{pmatrix}-6\\\\-1\\\\3\\end{pmatrix}\\).",
        "Ein möglicher Normalvektor ist also \\(\\vec{n}=\\begin{pmatrix}-6\\\\-1\\\\3\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 7: Parallelogrammfläche",
      schwierigkeit: "mittel",
      aufgabe:
        "Berechne die Fläche des Parallelogramms, das von \\(\\vec{a}=\\begin{pmatrix}3\\\\0\\\\0\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}0\\\\4\\\\0\\end{pmatrix}\\) aufgespannt wird.",
      loesung: [
        "Die Parallelogrammfläche ist \\(|\\vec{a}\\times\\vec{b}|\\).",
        "Da die beiden Vektoren senkrecht sind, kann man hier auch direkt rechnen.",
        "Die Länge von \\(\\vec{a}\\) ist \\(3\\).",
        "Die Länge von \\(\\vec{b}\\) ist \\(4\\).",
        "Die Fläche ist \\(3\\cdot4=12\\).",
        "Also beträgt die Parallelogrammfläche \\(12\\)."
      ]
    },
    {
      titel: "Aufgabe 8: Dreiecksfläche mit Kreuzprodukt",
      schwierigkeit: "mittel",
      aufgabe:
        "Berechne die Fläche des Dreiecks mit den Punkten \\(A(0\\mid0\\mid0)\\), \\(B(2\\mid0\\mid0)\\) und \\(C(0\\mid3\\mid0)\\).",
      loesung: [
        "Bilde zwei Seitenvektoren, die vom selben Punkt ausgehen.",
        "\\(\\overrightarrow{AB}=\\begin{pmatrix}2\\\\0\\\\0\\end{pmatrix}\\).",
        "\\(\\overrightarrow{AC}=\\begin{pmatrix}0\\\\3\\\\0\\end{pmatrix}\\).",
        "Die Parallelogrammfläche wäre \\(|\\overrightarrow{AB}\\times\\overrightarrow{AC}|\\).",
        "Da die Vektoren senkrecht sind, beträgt die Parallelogrammfläche \\(2\\cdot3=6\\).",
        "Die Dreiecksfläche ist halb so gross.",
        "Also ist \\(A=\\frac{1}{2}\\cdot6=3\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Orthonormierte Basis prüfen",
      schwierigkeit: "schwer",
      aufgabe:
        "Prüfe, ob \\(\\vec{e}_1=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\), \\(\\vec{e}_2=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\), \\(\\vec{e}_3=\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\\) eine orthonormierte Basis bilden.",
      loesung: [
        "Zuerst prüft man die Längen.",
        "Alle drei Vektoren haben Länge \\(1\\).",
        "Nun prüft man die Skalarprodukte verschiedener Vektoren.",
        "\\(\\vec{e}_1\\cdot\\vec{e}_2=0\\), \\(\\vec{e}_1\\cdot\\vec{e}_3=0\\), \\(\\vec{e}_2\\cdot\\vec{e}_3=0\\).",
        "Die Vektoren stehen also paarweise senkrecht aufeinander.",
        "Da alle Länge \\(1\\) haben und paarweise orthogonal sind, bilden sie eine orthonormierte Basis."
      ]
    },
    {
      titel: "Aufgabe 10: Reihenfolge beim Kreuzprodukt",
      schwierigkeit: "schwer",
      aufgabe:
        "Gegeben sind \\(\\vec{a}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}\\) und \\(\\vec{b}=\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\). Berechne \\(\\vec{a}\\times\\vec{b}\\) und \\(\\vec{b}\\times\\vec{a}\\).",
      loesung: [
        "\\(\\vec{a}\\times\\vec{b}\\) ergibt \\(\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\\).",
        "\\(\\vec{b}\\times\\vec{a}\\) ergibt \\(\\begin{pmatrix}0\\\\0\\\\-1\\end{pmatrix}\\).",
        "Die beiden Ergebnisse sind entgegengesetzt.",
        "Das zeigt: Die Reihenfolge beim Kreuzprodukt ist wichtig.",
        "Es gilt \\(\\vec{a}\\times\\vec{b}=-(\\vec{b}\\times\\vec{a})\\)."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was ist das Skalarprodukt?",
      antwort:
        "Das Skalarprodukt verknüpft zwei Vektoren und liefert eine Zahl. Es wird komponentenweise berechnet und misst, wie stark zwei Vektoren in dieselbe Richtung zeigen."
    },
    {
      frage: "Wie prüft man, ob zwei Vektoren orthogonal sind?",
      antwort:
        "Man berechnet ihr Skalarprodukt. Ist es \\(0\\), dann stehen die Vektoren senkrecht aufeinander."
    },
    {
      frage: "Wie berechnet man den Winkel zwischen zwei Vektoren?",
      antwort:
        "Man verwendet \\(\\cos(\\varphi)=\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}|\\cdot|\\vec{b}|}\\) und berechnet danach \\(\\varphi\\) mit \\(\\arccos\\)."
    },
    {
      frage: "Was ist das Kreuzprodukt?",
      antwort:
        "Das Kreuzprodukt zweier Vektoren im Raum liefert einen neuen Vektor, der senkrecht auf beiden ursprünglichen Vektoren steht."
    },
    {
      frage: "Wofür verwendet man das Kreuzprodukt geometrisch?",
      antwort:
        "Man verwendet es zum Bestimmen von Normalvektoren und zur Berechnung von Flächeninhalten von Parallelogrammen und Dreiecken."
    },
    {
      frage: "Was bedeutet der Betrag des Kreuzprodukts?",
      antwort:
        "Der Betrag des Kreuzprodukts ist der Flächeninhalt des Parallelogramms, das von den beiden Vektoren aufgespannt wird."
    },
    {
      frage: "Wie berechnet man die Fläche eines Dreiecks mit dem Kreuzprodukt?",
      antwort:
        "Man bildet zwei Seitenvektoren, berechnet den Betrag ihres Kreuzprodukts und nimmt davon die Hälfte."
    },
    {
      frage: "Was ist eine orthonormierte Basis?",
      antwort:
        "Eine orthonormierte Basis besteht aus Basisvektoren, die alle Länge \\(1\\) haben und paarweise senkrecht aufeinander stehen."
    },
    {
      frage: "Warum ist die Reihenfolge beim Kreuzprodukt wichtig?",
      antwort:
        "Weil das Kreuzprodukt nicht kommutativ ist. Vertauscht man die Reihenfolge, kehrt sich die Richtung des Ergebnisvektors um."
    }
  ],
  nachtVorTest: [
    "Kannst du das Skalarprodukt komponentenweise berechnen?",
    "Weisst du, dass das Skalarprodukt eine Zahl ergibt?",
    "Kannst du Orthogonalität mit \\(\\vec{a}\\cdot\\vec{b}=0\\) prüfen?",
    "Kennst du die Winkelformel mit dem Skalarprodukt?",
    "Berechnest du bei der Winkelformel beide Beträge korrekt?",
    "Kannst du den Betrag eines Vektors berechnen?",
    "Kannst du das Kreuzprodukt zweier Vektoren berechnen?",
    "Weisst du, dass das Kreuzprodukt senkrecht auf beiden Ausgangsvektoren steht?",
    "Kannst du mit dem Kreuzprodukt einen Normalvektor bestimmen?",
    "Kennst du den Unterschied zwischen Skalarprodukt und Kreuzprodukt?",
    "Weisst du, dass der Betrag des Kreuzprodukts eine Parallelogrammfläche ist?",
    "Vergisst du bei Dreiecksflächen den Faktor \\(\\frac{1}{2}\\) nicht?",
    "Kannst du prüfen, ob eine Basis orthonormiert ist?",
    "Weisst du, dass die Reihenfolge beim Kreuzprodukt das Vorzeichen ändert?"
  ]
},
   
{
  id: "ebenen-im-raum",
  nummer: "13",
  titel: "Ebenen im Raum",
  kurzbeschreibung:
    "Ebenen im dreidimensionalen Raum verstehen: Parameterform, Normalenform, Koordinatenform, Ebenen durch Punkte, Normalvektor, Punktprobe und Lagebeziehungen.",
  lernziele: [
    "Du kannst eine Ebene im Raum in Parameterform darstellen.",
    "Du verstehst die Bedeutung von Stützvektor und Spannvektoren.",
    "Du kannst aus drei Punkten eine Ebenengleichung aufstellen.",
    "Du kannst einen Normalvektor mit dem Kreuzprodukt bestimmen.",
    "Du kannst eine Ebene in Normalenform schreiben.",
    "Du kannst eine Ebene in Koordinatenform schreiben.",
    "Du kannst prüfen, ob ein Punkt auf einer Ebene liegt.",
    "Du kannst zwischen Parameterform, Normalenform und Koordinatenform wechseln.",
    "Du kannst Lagebeziehungen zwischen Gerade und Ebene untersuchen.",
    "Du erkennst typische Fehler bei Spannvektoren, Normalvektoren und Punktproben."
  ],
  theorie: [
    {
      titel: "Was ist eine Ebene?",
      text:
        "Eine Ebene ist eine unendlich ausgedehnte Fläche im Raum. Sie ist zweidimensional, liegt aber im dreidimensionalen Raum. Man kann sie sich wie ein unbegrenzt grosses Blatt Papier vorstellen."
    },
    {
      titel: "Parameterform einer Ebene",
      text:
        "Eine Ebene kann in Parameterform geschrieben werden als \\(E:\\vec{x}=\\vec{p}+r\\vec{u}+s\\vec{v}\\). Dabei ist \\(\\vec{p}\\) ein Stützvektor und \\(\\vec{u}\\), \\(\\vec{v}\\) sind zwei Spannvektoren."
    },
    {
      titel: "Stützvektor",
      text:
        "Der Stützvektor zeigt vom Ursprung zu einem festen Punkt der Ebene. Er legt fest, wo die Ebene im Raum liegt."
    },
    {
      titel: "Spannvektoren",
      text:
        "Die Spannvektoren geben zwei verschiedene Richtungen innerhalb der Ebene an. Sie dürfen nicht parallel sein, sonst spannen sie keine Ebene auf."
    },
    {
      titel: "Warum braucht man zwei Parameter?",
      text:
        "Eine Gerade braucht einen Parameter, weil man sich nur in eine Richtung bewegt. Eine Ebene braucht zwei Parameter, weil man sich in zwei unabhängige Richtungen bewegen kann."
    },
    {
      titel: "Ebene durch drei Punkte",
      text:
        "Drei Punkte bestimmen eine Ebene, sofern sie nicht auf einer einzigen Geraden liegen. Aus den Punkten bildet man zwei Verbindungsvektoren, die als Spannvektoren dienen."
    },
    {
      titel: "Normalvektor",
      text:
        "Ein Normalvektor steht senkrecht auf der Ebene. Er steht also senkrecht auf allen Richtungen, die in der Ebene liegen."
    },
    {
      titel: "Normalvektor mit Kreuzprodukt",
      text:
        "Wenn \\(\\vec{u}\\) und \\(\\vec{v}\\) zwei Spannvektoren einer Ebene sind, dann ist \\(\\vec{n}=\\vec{u}\\times\\vec{v}\\) ein Normalvektor der Ebene."
    },
    {
      titel: "Normalenform",
      text:
        "Die Normalenform einer Ebene lautet \\(E:(\\vec{x}-\\vec{p})\\cdot\\vec{n}=0\\). Dabei ist \\(\\vec{p}\\) ein Punkt der Ebene und \\(\\vec{n}\\) ein Normalvektor."
    },
    {
      titel: "Koordinatenform",
      text:
        "Eine Ebene kann auch als \\(ax+by+cz=d\\) geschrieben werden. Der Vektor \\(\\vec{n}=\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}\\) ist dann ein Normalvektor der Ebene."
    },
    {
      titel: "Punktprobe",
      text:
        "Um zu prüfen, ob ein Punkt auf einer Ebene liegt, setzt man seine Koordinaten in die Ebenengleichung ein. Wenn die Gleichung stimmt, liegt der Punkt auf der Ebene."
    },
    {
      titel: "Lage von Gerade und Ebene",
      text:
        "Eine Gerade kann eine Ebene schneiden, parallel zur Ebene sein oder vollständig in der Ebene liegen. Das untersucht man, indem man die Gerade in die Ebene einsetzt."
    },
    {
      titel: "Lage zweier Ebenen",
      text:
        "Zwei Ebenen können parallel, identisch oder sich in einer Schnittgeraden schneiden. Besonders wichtig ist der Vergleich ihrer Normalvektoren."
    }
  ],
  methoden: [
    {
      titel: "Methode: Ebene durch Punkt und zwei Spannvektoren aufstellen",
      schritte: [
        "Wähle den gegebenen Punkt als Stützvektor.",
        "Verwende die zwei gegebenen Richtungsvektoren als Spannvektoren.",
        "Prüfe, ob die Spannvektoren nicht parallel sind.",
        "Schreibe die Ebene als \\(E:\\vec{x}=\\vec{p}+r\\vec{u}+s\\vec{v}\\).",
        "Gib an, dass \\(r,s\\in\\mathbb{R}\\) gelten."
      ]
    },
    {
      titel: "Methode: Ebene durch drei Punkte aufstellen",
      schritte: [
        "Wähle einen der drei Punkte als Stützpunkt.",
        "Bilde vom Stützpunkt aus zwei Verbindungsvektoren zu den anderen beiden Punkten.",
        "Verwende diese beiden Verbindungsvektoren als Spannvektoren.",
        "Prüfe, ob die Spannvektoren nicht Vielfache voneinander sind.",
        "Schreibe die Ebene in Parameterform auf.",
        "Kontrolliere, ob alle drei Punkte durch passende Parameterwerte erreichbar sind."
      ]
    },
    {
      titel: "Methode: Normalvektor bestimmen",
      schritte: [
        "Bestimme zwei Spannvektoren der Ebene.",
        "Berechne das Kreuzprodukt der beiden Spannvektoren.",
        "Das Ergebnis ist ein Normalvektor der Ebene.",
        "Kontrolliere mit dem Skalarprodukt, ob der Normalvektor senkrecht auf beiden Spannvektoren steht.",
        "Falls möglich, kürze den Normalvektor."
      ]
    },
    {
      titel: "Methode: Von Parameterform zu Koordinatenform",
      schritte: [
        "Bestimme zuerst zwei Spannvektoren der Ebene.",
        "Berechne mit dem Kreuzprodukt einen Normalvektor \\(\\vec{n}\\).",
        "Setze den Normalvektor als Koeffizienten in \\(ax+by+cz=d\\) ein.",
        "Setze einen bekannten Punkt der Ebene ein, um \\(d\\) zu bestimmen.",
        "Schreibe die Koordinatenform vollständig auf."
      ]
    },
    {
      titel: "Methode: Punktprobe in Koordinatenform",
      schritte: [
        "Setze die Koordinaten des Punktes in \\(ax+by+cz=d\\) ein.",
        "Berechne die linke Seite.",
        "Vergleiche das Ergebnis mit der rechten Seite.",
        "Wenn beide Seiten gleich sind, liegt der Punkt auf der Ebene.",
        "Wenn nicht, liegt der Punkt nicht auf der Ebene."
      ]
    },
    {
      titel: "Methode: Gerade mit Ebene schneiden",
      schritte: [
        "Schreibe die Gerade in Parameterform.",
        "Setze die Koordinaten der Geraden in die Koordinatenform der Ebene ein.",
        "Löse die entstehende Gleichung nach dem Geradenparameter.",
        "Wenn es genau eine Lösung gibt, schneidet die Gerade die Ebene.",
        "Setze den Parameter in die Gerade ein, um den Schnittpunkt zu erhalten.",
        "Wenn die Gleichung unmöglich ist, ist die Gerade parallel zur Ebene.",
        "Wenn die Gleichung immer wahr ist, liegt die Gerade vollständig in der Ebene."
      ]
    },
    {
      titel: "Methode: Lage zweier Ebenen mit Normalvektoren",
      schritte: [
        "Bestimme die Normalvektoren beider Ebenen.",
        "Prüfe, ob die Normalvektoren Vielfache voneinander sind.",
        "Sind sie keine Vielfachen, schneiden sich die Ebenen in einer Geraden.",
        "Sind sie Vielfache, sind die Ebenen parallel oder identisch.",
        "Prüfe dann mit einem Punkt der einen Ebene, ob er auf der anderen Ebene liegt.",
        "Falls ja, sind die Ebenen identisch.",
        "Falls nein, sind sie echt parallel."
      ]
    }
  ],
  merksaetze: [
    "Eine Ebene in Parameterform lautet \\(E:\\vec{x}=\\vec{p}+r\\vec{u}+s\\vec{v}\\).",
    "\\(\\vec{p}\\) ist ein Stützvektor der Ebene.",
    "\\(\\vec{u}\\) und \\(\\vec{v}\\) sind Spannvektoren der Ebene.",
    "Spannvektoren dürfen nicht parallel sein.",
    "Eine Ebene braucht zwei unabhängige Richtungen.",
    "Aus drei nicht kollinearen Punkten kann man eine Ebene bilden.",
    "Ein Normalvektor steht senkrecht auf der Ebene.",
    "Das Kreuzprodukt zweier Spannvektoren liefert einen Normalvektor.",
    "Die Normalenform lautet \\((\\vec{x}-\\vec{p})\\cdot\\vec{n}=0\\).",
    "Die Koordinatenform lautet \\(ax+by+cz=d\\).",
    "In \\(ax+by+cz=d\\) ist \\(\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}\\) ein Normalvektor.",
    "Bei der Punktprobe setzt man die Koordinaten des Punktes in die Ebenengleichung ein."
  ],
  typischeFehler: [
    {
      fehler: "Man verwendet zwei parallele Spannvektoren.",
      korrektur:
        "Zwei parallele Vektoren spannen nur eine Gerade auf, keine Ebene. Spannvektoren müssen linear unabhängig sein."
    },
    {
      fehler: "Man verwechselt Spannvektor und Normalvektor.",
      korrektur:
        "Spannvektoren liegen in der Ebene. Ein Normalvektor steht senkrecht auf der Ebene."
    },
    {
      fehler: "Man setzt bei einer Ebene nur einen Parameter ein.",
      korrektur:
        "Eine Ebene braucht in Parameterform zwei Parameter, zum Beispiel \\(r\\) und \\(s\\)."
    },
    {
      fehler: "Man denkt, drei beliebige Punkte bestimmen immer eine Ebene.",
      korrektur:
        "Drei Punkte bestimmen nur dann eindeutig eine Ebene, wenn sie nicht alle auf einer Geraden liegen."
    },
    {
      fehler: "Man liest aus \\(ax+by+cz=d\\) den Normalvektor falsch ab.",
      korrektur:
        "Der Normalvektor ist \\(\\vec{n}=\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}\\). Die rechte Seite \\(d\\) gehört nicht zum Normalvektor."
    },
    {
      fehler: "Man prüft bei der Punktprobe nur einzelne Koordinaten.",
      korrektur:
        "In Koordinatenform setzt man alle Koordinaten gleichzeitig in die Gleichung ein und prüft, ob die Gleichung stimmt."
    },
    {
      fehler: "Man vergisst bei Gerade-Ebene-Aufgaben den Schnittpunkt auszurechnen.",
      korrektur:
        "Der gefundene Parameter ist noch nicht der Schnittpunkt. Man muss ihn in die Geradengleichung einsetzen."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Ebene in Parameterform aufstellen",
      schwierigkeit: "einfach",
      aufgabe:
        "Stelle die Ebene durch den Punkt \\(P(1\\mid2\\mid3)\\) mit den Spannvektoren \\(\\vec{u}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}\\) und \\(\\vec{v}=\\begin{pmatrix}0\\\\1\\\\-1\\end{pmatrix}\\) auf.",
      loesung: [
        "Der Punkt \\(P\\) liefert den Stützvektor.",
        "Also ist \\(\\vec{p}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}\\).",
        "Die Spannvektoren sind gegeben.",
        "Die Ebene lautet:",
        "\\(E:\\vec{x}=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}+r\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+s\\begin{pmatrix}0\\\\1\\\\-1\\end{pmatrix}\\).",
        "Dabei gilt \\(r,s\\in\\mathbb{R}\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Ebene durch drei Punkte",
      schwierigkeit: "einfach",
      aufgabe:
        "Stelle eine Ebene durch die Punkte \\(A(1\\mid0\\mid0)\\), \\(B(3\\mid1\\mid0)\\) und \\(C(1\\mid2\\mid4)\\) in Parameterform auf.",
      loesung: [
        "Wähle \\(A\\) als Stützpunkt.",
        "Bilde \\(\\overrightarrow{AB}=B-A\\).",
        "\\(\\overrightarrow{AB}=\\begin{pmatrix}3-1\\\\1-0\\\\0-0\\end{pmatrix}=\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}\\).",
        "Bilde \\(\\overrightarrow{AC}=C-A\\).",
        "\\(\\overrightarrow{AC}=\\begin{pmatrix}1-1\\\\2-0\\\\4-0\\end{pmatrix}=\\begin{pmatrix}0\\\\2\\\\4\\end{pmatrix}\\).",
        "Die Ebene lautet:",
        "\\(E:\\vec{x}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}+r\\begin{pmatrix}2\\\\1\\\\0\\end{pmatrix}+s\\begin{pmatrix}0\\\\2\\\\4\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Punktprobe in Koordinatenform",
      schwierigkeit: "einfach",
      aufgabe:
        "Prüfe, ob der Punkt \\(P(2\\mid-1\\mid3)\\) auf der Ebene \\(E:2x-y+z=8\\) liegt.",
      loesung: [
        "Setze die Koordinaten von \\(P\\) in die Ebenengleichung ein.",
        "Links ergibt sich \\(2\\cdot2-(-1)+3\\).",
        "Das ist \\(4+1+3=8\\).",
        "Die rechte Seite ist ebenfalls \\(8\\).",
        "Die Gleichung stimmt.",
        "Also liegt \\(P\\) auf der Ebene."
      ]
    },
    {
      titel: "Aufgabe 4: Punkt liegt nicht auf Ebene",
      schwierigkeit: "einfach",
      aufgabe:
        "Prüfe, ob \\(Q(1\\mid2\\mid0)\\) auf der Ebene \\(E:x+2y-z=3\\) liegt.",
      loesung: [
        "Setze die Koordinaten von \\(Q\\) ein.",
        "Links ergibt sich \\(1+2\\cdot2-0\\).",
        "Das ist \\(1+4=5\\).",
        "Die rechte Seite ist \\(3\\).",
        "Da \\(5\\ne3\\) gilt, liegt \\(Q\\) nicht auf der Ebene."
      ]
    },
    {
      titel: "Aufgabe 5: Normalvektor aus Koordinatenform ablesen",
      schwierigkeit: "einfach",
      aufgabe:
        "Gib einen Normalvektor der Ebene \\(E:3x-4y+2z=7\\) an.",
      loesung: [
        "Bei einer Ebene in Koordinatenform \\(ax+by+cz=d\\) ist \\(\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}\\) ein Normalvektor.",
        "Hier sind \\(a=3\\), \\(b=-4\\), \\(c=2\\).",
        "Ein Normalvektor ist also \\(\\vec{n}=\\begin{pmatrix}3\\\\-4\\\\2\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Normalvektor mit Kreuzprodukt",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme einen Normalvektor zur Ebene mit den Spannvektoren \\(\\vec{u}=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}\\) und \\(\\vec{v}=\\begin{pmatrix}0\\\\1\\\\3\\end{pmatrix}\\).",
      loesung: [
        "Ein Normalvektor ergibt sich durch das Kreuzprodukt \\(\\vec{u}\\times\\vec{v}\\).",
        "Berechne die erste Koordinate: \\(2\\cdot3-0\\cdot1=6\\).",
        "Berechne die zweite Koordinate: \\(0\\cdot0-1\\cdot3=-3\\).",
        "Berechne die dritte Koordinate: \\(1\\cdot1-2\\cdot0=1\\).",
        "Also ist \\(\\vec{n}=\\begin{pmatrix}6\\\\-3\\\\1\\end{pmatrix}\\).",
        "Dieser Vektor steht senkrecht auf beiden Spannvektoren."
      ]
    },
    {
      titel: "Aufgabe 7: Parameterform in Koordinatenform umwandeln",
      schwierigkeit: "mittel",
      aufgabe:
        "Gegeben ist \\(E:\\vec{x}=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}+r\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}+s\\begin{pmatrix}0\\\\2\\\\1\\end{pmatrix}\\). Bestimme eine Koordinatenform.",
      loesung: [
        "Die Spannvektoren sind \\(\\vec{u}=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\) und \\(\\vec{v}=\\begin{pmatrix}0\\\\2\\\\1\\end{pmatrix}\\).",
        "Berechne einen Normalvektor mit \\(\\vec{u}\\times\\vec{v}\\).",
        "\\(\\vec{u}\\times\\vec{v}=\\begin{pmatrix}1\\cdot1-0\\cdot2\\\\0\\cdot0-1\\cdot1\\\\1\\cdot2-1\\cdot0\\end{pmatrix}=\\begin{pmatrix}1\\\\-1\\\\2\\end{pmatrix}\\).",
        "Die Koordinatenform hat also die Form \\(x-y+2z=d\\).",
        "Setze den Stützpunkt \\((1\\mid0\\mid2)\\) ein.",
        "\\(1-0+2\\cdot2=5\\).",
        "Also ist \\(d=5\\).",
        "Die Ebene lautet \\(E:x-y+2z=5\\)."
      ]
    },
    {
      titel: "Aufgabe 8: Gerade schneidet Ebene",
      schwierigkeit: "mittel",
      aufgabe:
        "Bestimme den Schnittpunkt der Geraden \\(g:\\vec{x}=\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}\\) mit der Ebene \\(E:x+y+z=7\\).",
      loesung: [
        "Ein allgemeiner Punkt der Geraden ist \\((1+t\\mid2t\\mid t)\\).",
        "Setze diese Koordinaten in die Ebene ein.",
        "\\((1+t)+2t+t=7\\).",
        "Das ergibt \\(1+4t=7\\).",
        "Also ist \\(4t=6\\) und damit \\(t=\\frac{3}{2}\\).",
        "Setze \\(t=\\frac{3}{2}\\) in die Gerade ein.",
        "Dann erhält man \\(x=1+\\frac{3}{2}=\\frac{5}{2}\\), \\(y=3\\), \\(z=\\frac{3}{2}\\).",
        "Der Schnittpunkt ist \\(S\\left(\\frac{5}{2}\\mid3\\mid\\frac{3}{2}\\right)\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Gerade parallel zur Ebene",
      schwierigkeit: "schwer",
      aufgabe:
        "Untersuche die Lage der Geraden \\(g:\\vec{x}=\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}+t\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}\\) zur Ebene \\(E:x+y+z=0\\).",
      loesung: [
        "Ein allgemeiner Punkt der Geraden ist \\((t\\mid -t\\mid1)\\).",
        "Setze in die Ebene ein.",
        "\\(t+(-t)+1=0\\).",
        "Das ergibt \\(1=0\\).",
        "Diese Gleichung ist unmöglich.",
        "Also hat die Gerade keinen Schnittpunkt mit der Ebene.",
        "Da beim Einsetzen eine unmögliche Gleichung entsteht, ist die Gerade parallel zur Ebene und liegt nicht in ihr."
      ]
    },
    {
      titel: "Aufgabe 10: Gerade liegt in Ebene",
      schwierigkeit: "schwer",
      aufgabe:
        "Untersuche die Lage der Geraden \\(g:\\vec{x}=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}+t\\begin{pmatrix}1\\\\-1\\\\1\\end{pmatrix}\\) zur Ebene \\(E:x+y-z=3\\).",
      loesung: [
        "Ein allgemeiner Punkt der Geraden ist \\((1+t\\mid2-t\\mid t)\\).",
        "Setze in die Ebene ein.",
        "\\((1+t)+(2-t)-t=3\\).",
        "Das vereinfacht sich zu \\(3-t=3\\).",
        "Daraus folgt \\(t=0\\).",
        "Es gibt genau einen Parameterwert.",
        "Also schneidet die Gerade die Ebene in genau einem Punkt.",
        "Setze \\(t=0\\) in die Gerade ein.",
        "Der Schnittpunkt ist \\(S(1\\mid2\\mid0)\\)."
      ]
    },
    {
      titel: "Aufgabe 11: Identische oder parallele Ebenen prüfen",
      schwierigkeit: "schwer",
      aufgabe:
        "Untersuche die Lage der Ebenen \\(E_1:2x-4y+6z=8\\) und \\(E_2:x-2y+3z=5\\).",
      loesung: [
        "Vergleiche zuerst die Normalvektoren.",
        "\\(\\vec{n}_1=\\begin{pmatrix}2\\\\-4\\\\6\\end{pmatrix}\\), \\(\\vec{n}_2=\\begin{pmatrix}1\\\\-2\\\\3\\end{pmatrix}\\).",
        "Es gilt \\(\\vec{n}_1=2\\vec{n}_2\\).",
        "Die Ebenen sind also parallel oder identisch.",
        "Multipliziert man die linke Seite von \\(E_2\\) mit \\(2\\), erhält man \\(2x-4y+6z\\).",
        "Die rechte Seite wäre dann \\(10\\), nicht \\(8\\).",
        "Also sind die Ebenen nicht identisch.",
        "Sie sind echt parallel."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Wie schreibt man eine Ebene in Parameterform?",
      antwort:
        "Eine Ebene schreibt man als \\(E:\\vec{x}=\\vec{p}+r\\vec{u}+s\\vec{v}\\). Dabei ist \\(\\vec{p}\\) ein Stützvektor und \\(\\vec{u}\\), \\(\\vec{v}\\) sind zwei Spannvektoren."
    },
    {
      frage: "Warum braucht eine Ebene zwei Parameter?",
      antwort:
        "Weil eine Ebene zwei unabhängige Richtungen besitzt. Man kann sich also in zwei Richtungen innerhalb der Ebene bewegen."
    },
    {
      frage: "Was ist ein Spannvektor?",
      antwort:
        "Ein Spannvektor ist ein Richtungsvektor, der in der Ebene liegt. Zwei nicht parallele Spannvektoren spannen die Ebene auf."
    },
    {
      frage: "Was ist ein Normalvektor?",
      antwort:
        "Ein Normalvektor steht senkrecht auf der Ebene. Er steht damit senkrecht auf allen Richtungsvektoren der Ebene."
    },
    {
      frage: "Wie erhält man einen Normalvektor aus zwei Spannvektoren?",
      antwort:
        "Man berechnet das Kreuzprodukt der beiden Spannvektoren. Das Ergebnis ist ein Vektor, der senkrecht auf beiden steht."
    },
    {
      frage: "Wie lautet die Normalenform einer Ebene?",
      antwort:
        "Die Normalenform lautet \\((\\vec{x}-\\vec{p})\\cdot\\vec{n}=0\\)."
    },
    {
      frage: "Wie erkennt man den Normalvektor in der Koordinatenform?",
      antwort:
        "Bei \\(ax+by+cz=d\\) ist \\(\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}\\) ein Normalvektor."
    },
    {
      frage: "Wie prüft man, ob ein Punkt auf einer Ebene liegt?",
      antwort:
        "Man setzt seine Koordinaten in die Ebenengleichung ein. Wenn die Gleichung stimmt, liegt der Punkt auf der Ebene."
    },
    {
      frage: "Welche Lagebeziehungen kann eine Gerade zu einer Ebene haben?",
      antwort:
        "Eine Gerade kann die Ebene schneiden, parallel zur Ebene sein oder vollständig in der Ebene liegen."
    },
    {
      frage: "Wie untersucht man Gerade und Ebene rechnerisch?",
      antwort:
        "Man setzt die Koordinaten der Geraden in die Ebenengleichung ein und untersucht die entstehende Gleichung."
    }
  ],
  nachtVorTest: [
    "Kannst du eine Ebene in Parameterform schreiben?",
    "Weisst du, was Stützvektor und Spannvektoren bedeuten?",
    "Weisst du, dass Spannvektoren nicht parallel sein dürfen?",
    "Kannst du aus drei Punkten zwei Spannvektoren bilden?",
    "Kannst du mit dem Kreuzprodukt einen Normalvektor bestimmen?",
    "Kennst du die Normalenform \\((\\vec{x}-\\vec{p})\\cdot\\vec{n}=0\\)?",
    "Kannst du aus \\(ax+by+cz=d\\) den Normalvektor ablesen?",
    "Kannst du eine Punktprobe bei einer Ebene durchführen?",
    "Kannst du Parameterform in Koordinatenform umwandeln?",
    "Kannst du eine Gerade in eine Ebene einsetzen?",
    "Erkennst du die Fälle Schnittpunkt, parallel und Gerade liegt in Ebene?",
    "Unterscheidest du Spannvektor und Normalvektor sicher?"
  ]
},
   {
  id: "kombinatorik-zaehlprinzip",
  nummer: "14",
  titel: "Kombinatorik",
  kurzbeschreibung:
    "Zählprinzip und die sechs Grundprobleme der Kombinatorik: Permutationen, Variationen und Kombinationen jeweils mit und ohne Wiederholung.",
  lernziele: [
    "Du kannst erklären, was Kombinatorik untersucht.",
    "Du verstehst das allgemeine Zählprinzip.",
    "Du kannst zwischen Permutation, Variation und Kombination unterscheiden.",
    "Du erkennst, ob die Reihenfolge wichtig ist oder nicht.",
    "Du erkennst, ob Wiederholung erlaubt ist oder nicht.",
    "Du kannst die sechs Grundprobleme der Kombinatorik unterscheiden.",
    "Du kannst Fakultäten sicher verwenden.",
    "Du kannst typische Urnenmodelle passend zuordnen.",
    "Du kannst kombinatorische Aufgaben systematisch analysieren.",
    "Du erkennst typische Fehler beim Verwechseln von Reihenfolge und Auswahl."
  ],
  theorie: [
    {
      titel: "Was ist Kombinatorik?",
      text:
        "Die Kombinatorik beschäftigt sich mit der Frage, wie viele Möglichkeiten es gibt, Dinge anzuordnen, auszuwählen oder zu verteilen. Man zählt also Möglichkeiten, ohne sie alle einzeln aufzuschreiben."
    },
    {
      titel: "Das Zählprinzip",
      text:
        "Wenn eine Entscheidung in mehreren Schritten getroffen wird und es im ersten Schritt \\(m\\) Möglichkeiten und im zweiten Schritt \\(n\\) Möglichkeiten gibt, dann gibt es insgesamt \\(m\\cdot n\\) Möglichkeiten."
    },
    {
      titel: "Beispiel zum Zählprinzip",
      text:
        "Wenn man \\(3\\) Hosen und \\(4\\) T-Shirts zur Auswahl hat, gibt es \\(3\\cdot4=12\\) mögliche Outfits. Jede Hose kann mit jedem T-Shirt kombiniert werden."
    },
    {
      titel: "Fakultät",
      text:
        "Die Fakultät \\(n!\\) bedeutet \\(n\\cdot(n-1)\\cdot(n-2)\\cdot\\ldots\\cdot1\\). Zum Beispiel ist \\(5!=5\\cdot4\\cdot3\\cdot2\\cdot1=120\\)."
    },
    {
      titel: "Permutation",
      text:
        "Eine Permutation ist eine Anordnung aller vorhandenen Objekte. Die Reihenfolge ist wichtig. Wenn alle Objekte verschieden sind, gibt es \\(n!\\) mögliche Anordnungen."
    },
    {
      titel: "Permutation mit Wiederholungen",
      text:
        "Wenn sich Objekte wiederholen, muss man durch die Fakultäten der Wiederholungszahlen teilen. Zum Beispiel gibt es bei Buchstaben mit Wiederholungen weniger verschiedene Anordnungen als bei lauter verschiedenen Buchstaben."
    },
    {
      titel: "Variation",
      text:
        "Bei einer Variation wählt man einige Objekte aus und ordnet sie an. Die Reihenfolge ist wichtig. Es werden also nicht unbedingt alle Objekte verwendet."
    },
    {
      titel: "Variation ohne Wiederholung",
      text:
        "Bei einer Variation ohne Wiederholung darf jedes Objekt höchstens einmal verwendet werden. Die Anzahl ist \\(\\frac{n!}{(n-k)!}\\), wenn man \\(k\\) Objekte aus \\(n\\) Objekten geordnet auswählt."
    },
    {
      titel: "Variation mit Wiederholung",
      text:
        "Bei einer Variation mit Wiederholung darf jedes Objekt mehrfach verwendet werden. Wenn es \\(n\\) Möglichkeiten pro Platz und \\(k\\) Plätze gibt, dann sind es \\(n^k\\) Möglichkeiten."
    },
    {
      titel: "Kombination",
      text:
        "Bei einer Kombination wählt man Objekte aus, ohne die Reihenfolge zu beachten. Es geht nur darum, welche Objekte gewählt werden, nicht in welcher Reihenfolge."
    },
    {
      titel: "Kombination ohne Wiederholung",
      text:
        "Bei einer Kombination ohne Wiederholung wählt man \\(k\\) Objekte aus \\(n\\) Objekten aus, wobei jedes Objekt höchstens einmal vorkommt. Die Anzahl ist \\(\\binom{n}{k}=\\frac{n!}{k!(n-k)!}\\)."
    },
    {
      titel: "Kombination mit Wiederholung",
      text:
        "Bei einer Kombination mit Wiederholung ist die Reihenfolge unwichtig, aber Objekte dürfen mehrfach vorkommen. Die Anzahl ist \\(\\binom{n+k-1}{k}\\)."
    },
    {
      titel: "Die zentrale Entscheidungsfrage",
      text:
        "Bei Kombinatorik fragt man immer zuerst: Ist die Reihenfolge wichtig? Danach fragt man: Darf ein Element mehrfach vorkommen? Diese zwei Fragen entscheiden meistens über die richtige Formel."
    }
  ],
  methoden: [
    {
      titel: "Methode: Kombinatorik-Aufgabe richtig einordnen",
      schritte: [
        "Lies genau, was gezählt werden soll.",
        "Prüfe zuerst, ob alle Objekte verwendet werden oder nur einige.",
        "Frage dich, ob die Reihenfolge wichtig ist.",
        "Frage dich, ob Wiederholung erlaubt ist.",
        "Ordne die Aufgabe einer Permutation, Variation oder Kombination zu.",
        "Wähle erst danach die passende Formel.",
        "Setze die Zahlen sauber ein.",
        "Kontrolliere, ob das Ergebnis ungefähr plausibel ist."
      ]
    },
    {
      titel: "Methode: Zählprinzip anwenden",
      schritte: [
        "Zerlege die Aufgabe in einzelne Entscheidungsschritte.",
        "Bestimme für jeden Schritt die Anzahl Möglichkeiten.",
        "Multipliziere die Möglichkeiten der einzelnen Schritte.",
        "Achte darauf, ob sich die Anzahl nach jedem Schritt verändert.",
        "Wenn Wiederholung verboten ist, wird die Anzahl Möglichkeiten oft kleiner.",
        "Wenn Wiederholung erlaubt ist, bleibt die Anzahl oft gleich."
      ]
    },
    {
      titel: "Methode: Permutation ohne Wiederholung",
      schritte: [
        "Prüfe, ob alle Objekte angeordnet werden.",
        "Prüfe, ob alle Objekte verschieden sind.",
        "Wenn ja, verwende \\(n!\\).",
        "Setze die Anzahl der Objekte für \\(n\\) ein.",
        "Berechne die Fakultät."
      ]
    },
    {
      titel: "Methode: Permutation mit Wiederholung",
      schritte: [
        "Prüfe, ob alle Objekte angeordnet werden.",
        "Zähle, wie viele Objekte insgesamt vorhanden sind.",
        "Zähle, welche Objekte mehrfach vorkommen.",
        "Verwende \\(\\frac{n!}{a!b!c!\\cdots}\\).",
        "Teile also durch die Fakultäten der Wiederholungszahlen.",
        "Berechne das Ergebnis."
      ]
    },
    {
      titel: "Methode: Variation ohne Wiederholung",
      schritte: [
        "Prüfe, ob nur \\(k\\) aus \\(n\\) Objekten gewählt werden.",
        "Prüfe, ob die Reihenfolge wichtig ist.",
        "Prüfe, ob Wiederholung verboten ist.",
        "Verwende dann \\(\\frac{n!}{(n-k)!}\\).",
        "Alternativ kannst du mit dem Zählprinzip rechnen: \\(n\\cdot(n-1)\\cdot\\ldots\\)."
      ]
    },
    {
      titel: "Methode: Variation mit Wiederholung",
      schritte: [
        "Prüfe, ob es \\(k\\) Plätze gibt.",
        "Prüfe, ob pro Platz jeweils \\(n\\) Möglichkeiten bestehen.",
        "Prüfe, ob Wiederholung erlaubt ist.",
        "Wenn die Reihenfolge wichtig ist, verwende \\(n^k\\).",
        "Berechne die Potenz."
      ]
    },
    {
      titel: "Methode: Kombination ohne Wiederholung",
      schritte: [
        "Prüfe, ob nur ausgewählt wird.",
        "Prüfe, ob die Reihenfolge unwichtig ist.",
        "Prüfe, ob jedes Objekt höchstens einmal vorkommen darf.",
        "Verwende \\(\\binom{n}{k}=\\frac{n!}{k!(n-k)!}\\).",
        "Berechne den Binomialkoeffizienten."
      ]
    },
    {
      titel: "Methode: Kombination mit Wiederholung",
      schritte: [
        "Prüfe, ob Reihenfolge unwichtig ist.",
        "Prüfe, ob Wiederholung erlaubt ist.",
        "Bestimme \\(n\\), die Anzahl verschiedener Objektarten.",
        "Bestimme \\(k\\), die Anzahl ausgewählter Objekte.",
        "Verwende \\(\\binom{n+k-1}{k}\\).",
        "Berechne den Binomialkoeffizienten."
      ]
    }
  ],
  merksaetze: [
    "Kombinatorik zählt Möglichkeiten.",
    "Beim Zählprinzip multipliziert man die Möglichkeiten der einzelnen Schritte.",
    "\\(n!\\) bedeutet \\(n\\cdot(n-1)\\cdot\\ldots\\cdot1\\).",
    "Permutation bedeutet: alle Objekte anordnen.",
    "Variation bedeutet: einige Objekte auswählen und anordnen.",
    "Kombination bedeutet: einige Objekte auswählen, Reihenfolge egal.",
    "Die wichtigste Frage lautet: Ist die Reihenfolge wichtig?",
    "Die zweite wichtige Frage lautet: Ist Wiederholung erlaubt?",
    "Variation mit Wiederholung hat die Formel \\(n^k\\).",
    "Variation ohne Wiederholung hat die Formel \\(\\frac{n!}{(n-k)!}\\).",
    "Kombination ohne Wiederholung hat die Formel \\(\\binom{n}{k}\\).",
    "Kombination mit Wiederholung hat die Formel \\(\\binom{n+k-1}{k}\\)."
  ],
  typischeFehler: [
    {
      fehler: "Man verwendet \\(\\binom{n}{k}\\), obwohl die Reihenfolge wichtig ist.",
      korrektur:
        "Wenn die Reihenfolge wichtig ist, handelt es sich nicht um eine Kombination, sondern meistens um eine Variation."
    },
    {
      fehler: "Man verwendet \\(n!\\), obwohl nicht alle Objekte angeordnet werden.",
      korrektur:
        "\\(n!\\) passt nur, wenn alle \\(n\\) Objekte angeordnet werden. Wenn nur \\(k\\) Objekte gewählt werden, braucht man eine Variation oder Kombination."
    },
    {
      fehler: "Man vergisst bei Wiederholungen zu teilen.",
      korrektur:
        "Bei Permutationen mit gleichen Objekten muss man durch die Fakultäten der Wiederholungszahlen teilen."
    },
    {
      fehler: "Man denkt, Auswahl und Anordnung seien dasselbe.",
      korrektur:
        "Bei einer Auswahl ist die Reihenfolge egal. Bei einer Anordnung ist die Reihenfolge wichtig."
    },
    {
      fehler: "Man verwendet \\(n^k\\), obwohl Wiederholung nicht erlaubt ist.",
      korrektur:
        "\\(n^k\\) gilt bei geordneten Auswahlen mit Wiederholung. Ohne Wiederholung nimmt die Anzahl Möglichkeiten nach jeder Wahl ab."
    },
    {
      fehler: "Man setzt \\(n\\) und \\(k\\) falsch ein.",
      korrektur:
        "\\(n\\) ist die Anzahl verfügbarer verschiedener Objekte. \\(k\\) ist die Anzahl der Plätze oder ausgewählten Objekte."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Einfaches Zählprinzip",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein Schüler hat \\(4\\) Pullover und \\(3\\) Hosen. Wie viele verschiedene Outfits aus einem Pullover und einer Hose kann er bilden?",
      loesung: [
        "Es gibt \\(4\\) Möglichkeiten für den Pullover.",
        "Zu jedem Pullover gibt es \\(3\\) Möglichkeiten für die Hose.",
        "Nach dem Zählprinzip multipliziert man.",
        "\\(4\\cdot3=12\\).",
        "Es gibt also \\(12\\) verschiedene Outfits."
      ]
    },
    {
      titel: "Aufgabe 2: Permutation ohne Wiederholung",
      schwierigkeit: "einfach",
      aufgabe:
        "Wie viele Möglichkeiten gibt es, \\(5\\) verschiedene Bücher in einer Reihe anzuordnen?",
      loesung: [
        "Alle \\(5\\) Bücher werden angeordnet.",
        "Die Reihenfolge ist wichtig.",
        "Alle Bücher sind verschieden.",
        "Also handelt es sich um eine Permutation ohne Wiederholung.",
        "Die Anzahl ist \\(5!\\).",
        "\\(5!=120\\).",
        "Es gibt \\(120\\) Möglichkeiten."
      ]
    },
    {
      titel: "Aufgabe 3: Variation ohne Wiederholung",
      schwierigkeit: "einfach",
      aufgabe:
        "Aus \\(6\\) Personen werden Präsident, Vizepräsident und Protokollführer gewählt. Eine Person darf nur ein Amt haben. Wie viele Möglichkeiten gibt es?",
      loesung: [
        "Es gibt \\(3\\) verschiedene Ämter.",
        "Die Reihenfolge beziehungsweise Rolle ist wichtig.",
        "Wiederholung ist nicht erlaubt.",
        "Für das erste Amt gibt es \\(6\\) Möglichkeiten.",
        "Für das zweite Amt bleiben \\(5\\) Möglichkeiten.",
        "Für das dritte Amt bleiben \\(4\\) Möglichkeiten.",
        "Also gibt es \\(6\\cdot5\\cdot4=120\\) Möglichkeiten."
      ]
    },
    {
      titel: "Aufgabe 4: Variation mit Wiederholung",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein Code besteht aus \\(4\\) Ziffern. Jede Ziffer von \\(0\\) bis \\(9\\) darf mehrfach vorkommen. Wie viele Codes gibt es?",
      loesung: [
        "Es gibt \\(10\\) mögliche Ziffern.",
        "Der Code hat \\(4\\) Stellen.",
        "Wiederholung ist erlaubt.",
        "Die Reihenfolge ist wichtig, weil zum Beispiel \\(1234\\) anders ist als \\(4321\\).",
        "Also gilt \\(10^4\\).",
        "\\(10^4=10000\\).",
        "Es gibt \\(10000\\) Codes."
      ]
    },
    {
      titel: "Aufgabe 5: Kombination ohne Wiederholung",
      schwierigkeit: "mittel",
      aufgabe:
        "Aus \\(8\\) Schülern werden \\(3\\) für eine Gruppe ausgewählt. Die Reihenfolge spielt keine Rolle. Wie viele Gruppen sind möglich?",
      loesung: [
        "Es werden \\(3\\) Personen aus \\(8\\) ausgewählt.",
        "Die Reihenfolge spielt keine Rolle.",
        "Wiederholung ist nicht möglich.",
        "Also verwendet man \\(\\binom{8}{3}\\).",
        "\\(\\binom{8}{3}=\\frac{8!}{3!5!}\\).",
        "Das ergibt \\(56\\).",
        "Es sind \\(56\\) Gruppen möglich."
      ]
    },
    {
      titel: "Aufgabe 6: Permutation mit Wiederholung",
      schwierigkeit: "mittel",
      aufgabe:
        "Wie viele verschiedene Anordnungen gibt es für die Buchstaben des Wortes \\(ANNA\\)?",
      loesung: [
        "Das Wort hat insgesamt \\(4\\) Buchstaben.",
        "Der Buchstabe \\(A\\) kommt \\(2\\)-mal vor.",
        "Der Buchstabe \\(N\\) kommt \\(2\\)-mal vor.",
        "Ohne Wiederholungen gäbe es \\(4!\\) Anordnungen.",
        "Da gleiche Buchstaben nicht unterscheidbar sind, teilt man durch \\(2!\\cdot2!\\).",
        "Also \\(\\frac{4!}{2!2!}=\\frac{24}{4}=6\\).",
        "Es gibt \\(6\\) verschiedene Anordnungen."
      ]
    },
    {
      titel: "Aufgabe 7: Kombination mit Wiederholung",
      schwierigkeit: "mittel",
      aufgabe:
        "In einer Bäckerei gibt es \\(5\\) Sorten Brötchen. Eine Person kauft \\(3\\) Brötchen. Sorten dürfen mehrfach gewählt werden, die Reihenfolge ist egal. Wie viele Möglichkeiten gibt es?",
      loesung: [
        "Es gibt \\(n=5\\) Sorten.",
        "Es werden \\(k=3\\) Brötchen gewählt.",
        "Wiederholung ist erlaubt.",
        "Die Reihenfolge ist egal.",
        "Also verwendet man \\(\\binom{n+k-1}{k}\\).",
        "Das ergibt \\(\\binom{5+3-1}{3}=\\binom{7}{3}\\).",
        "\\(\\binom{7}{3}=35\\).",
        "Es gibt \\(35\\) Möglichkeiten."
      ]
    },
    {
      titel: "Aufgabe 8: Formel erkennen",
      schwierigkeit: "mittel",
      aufgabe:
        "Aus \\(10\\) Läufern werden die ersten drei Plätze vergeben. Wie viele mögliche Podeste gibt es?",
      loesung: [
        "Es werden \\(3\\) Personen aus \\(10\\) ausgewählt.",
        "Die Reihenfolge ist wichtig, weil Platz \\(1\\), \\(2\\) und \\(3\\) verschieden sind.",
        "Wiederholung ist nicht möglich.",
        "Also handelt es sich um eine Variation ohne Wiederholung.",
        "Die Anzahl ist \\(\\frac{10!}{(10-3)!}\\).",
        "Das ist \\(10\\cdot9\\cdot8=720\\).",
        "Es gibt \\(720\\) mögliche Podeste."
      ]
    },
    {
      titel: "Aufgabe 9: Reihenfolge oder nicht?",
      schwierigkeit: "schwer",
      aufgabe:
        "Erkläre den Unterschied zwischen diesen zwei Situationen: A: Aus \\(7\\) Personen werden \\(2\\) Klassensprecher gewählt. B: Aus \\(7\\) Personen werden Präsident und Vizepräsident gewählt.",
      loesung: [
        "In Situation A spielt die Reihenfolge keine Rolle.",
        "Wenn Lara und Noah gewählt werden, ist es dieselbe Gruppe wie Noah und Lara.",
        "Also verwendet man eine Kombination: \\(\\binom{7}{2}\\).",
        "\\(\\binom{7}{2}=21\\).",
        "In Situation B spielt die Reihenfolge beziehungsweise Rolle eine Rolle.",
        "Lara als Präsidentin und Noah als Vizepräsident ist etwas anderes als umgekehrt.",
        "Also verwendet man eine Variation ohne Wiederholung.",
        "Das ergibt \\(7\\cdot6=42\\)."
      ]
    },
    {
      titel: "Aufgabe 10: Gemischte Kombinatorik",
      schwierigkeit: "schwer",
      aufgabe:
        "Ein Passwort besteht aus \\(2\\) verschiedenen Buchstaben aus \\(A,B,C,D\\) und danach \\(3\\) Ziffern von \\(0\\) bis \\(9\\), wobei Ziffern mehrfach vorkommen dürfen. Wie viele Passwörter gibt es?",
      loesung: [
        "Zuerst betrachtet man die Buchstaben.",
        "Es werden \\(2\\) verschiedene Buchstaben aus \\(4\\) gewählt.",
        "Die Reihenfolge ist wichtig, weil \\(AB\\) anders ist als \\(BA\\).",
        "Also gibt es \\(4\\cdot3=12\\) Möglichkeiten für die Buchstaben.",
        "Nun betrachtet man die Ziffern.",
        "Es gibt \\(3\\) Ziffernstellen.",
        "Pro Stelle gibt es \\(10\\) Möglichkeiten.",
        "Wiederholung ist erlaubt, also \\(10^3=1000\\).",
        "Nach dem Zählprinzip multipliziert man beide Teile.",
        "\\(12\\cdot1000=12000\\).",
        "Es gibt \\(12000\\) mögliche Passwörter."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was untersucht die Kombinatorik?",
      antwort:
        "Die Kombinatorik untersucht, wie viele Möglichkeiten es gibt, Objekte auszuwählen, anzuordnen oder zu kombinieren."
    },
    {
      frage: "Was besagt das Zählprinzip?",
      antwort:
        "Wenn eine Entscheidung aus mehreren unabhängigen Schritten besteht, multipliziert man die Anzahl Möglichkeiten der einzelnen Schritte."
    },
    {
      frage: "Was ist eine Permutation?",
      antwort:
        "Eine Permutation ist eine Anordnung aller vorhandenen Objekte. Die Reihenfolge ist dabei wichtig."
    },
    {
      frage: "Was ist eine Variation?",
      antwort:
        "Eine Variation ist eine geordnete Auswahl. Man wählt also einige Objekte aus und beachtet die Reihenfolge."
    },
    {
      frage: "Was ist eine Kombination?",
      antwort:
        "Eine Kombination ist eine ungeordnete Auswahl. Es zählt nur, welche Objekte gewählt werden, nicht ihre Reihenfolge."
    },
    {
      frage: "Was ist der wichtigste Unterschied zwischen Variation und Kombination?",
      antwort:
        "Bei der Variation ist die Reihenfolge wichtig. Bei der Kombination ist die Reihenfolge egal."
    },
    {
      frage: "Wann verwendet man \\(n^k\\)?",
      antwort:
        "Man verwendet \\(n^k\\), wenn es \\(k\\) Plätze gibt, pro Platz \\(n\\) Möglichkeiten bestehen, Wiederholung erlaubt ist und die Reihenfolge wichtig ist."
    },
    {
      frage: "Wann verwendet man \\(\\binom{n}{k}\\)?",
      antwort:
        "Man verwendet \\(\\binom{n}{k}\\), wenn man \\(k\\) Objekte aus \\(n\\) Objekten auswählt, die Reihenfolge egal ist und Wiederholung nicht erlaubt ist."
    }
  ],
  nachtVorTest: [
    "Kannst du erklären, was Kombinatorik zählt?",
    "Kennst du das Zählprinzip?",
    "Kannst du \\(n!\\) berechnen und erklären?",
    "Unterscheidest du Auswahl und Anordnung?",
    "Fragst du immer zuerst, ob die Reihenfolge wichtig ist?",
    "Fragst du danach, ob Wiederholung erlaubt ist?",
    "Kannst du Permutation, Variation und Kombination unterscheiden?",
    "Kennst du die Formel \\(n^k\\)?",
    "Kennst du die Formel \\(\\frac{n!}{(n-k)!}\\)?",
    "Kennst du die Formel \\(\\binom{n}{k}\\)?",
    "Kennst du die Formel \\(\\binom{n+k-1}{k}\\)?",
    "Kannst du bei Textaufgaben \\(n\\) und \\(k\\) richtig bestimmen?"
  ]
},
   {
  id: "zufallsexperimente-pfadregel-laplace",
  nummer: "15",
  titel: "Zufallsexperimente und Pfadregel",
  kurzbeschreibung:
    "Zufallsexperimente, Ereignisse, Ergebnisräume, Laplace-Experimente, Baumdiagramme, Pfadregel, Summenregel und Ereignisse als Teilmengen verstehen.",
  lernziele: [
    "Du kannst erklären, was ein Zufallsexperiment ist.",
    "Du kannst Ergebnismenge und Ereignis unterscheiden.",
    "Du kannst Ereignisse als Teilmengen der Ergebnismenge auffassen.",
    "Du verstehst Laplace-Experimente.",
    "Du kannst Wahrscheinlichkeiten bei Laplace-Experimenten berechnen.",
    "Du kannst Baumdiagramme zeichnen und interpretieren.",
    "Du kannst die Pfadregel anwenden.",
    "Du kannst die Summenregel bei mehreren günstigen Pfaden anwenden.",
    "Du kannst Gegenereignisse verwenden.",
    "Du erkennst typische Fehler bei Baumdiagrammen und Wahrscheinlichkeiten."
  ],
  theorie: [
    {
      titel: "Was ist ein Zufallsexperiment?",
      text:
        "Ein Zufallsexperiment ist ein Vorgang, dessen Ausgang nicht sicher vorhergesagt werden kann, obwohl alle möglichen Ergebnisse bekannt sein können. Beispiele sind Würfeln, Münzwurf oder das Ziehen einer Kugel aus einer Urne."
    },
    {
      titel: "Ergebnis",
      text:
        "Ein Ergebnis ist ein einzelner möglicher Ausgang eines Zufallsexperiments. Beim Würfeln ist zum Beispiel \\(4\\) ein Ergebnis."
    },
    {
      titel: "Ergebnismenge",
      text:
        "Die Ergebnismenge enthält alle möglichen Ergebnisse eines Zufallsexperiments. Sie wird oft mit \\(\\Omega\\) bezeichnet. Beim einmaligen Würfeln gilt \\(\\Omega=\\{1,2,3,4,5,6\\}\\)."
    },
    {
      titel: "Ereignis",
      text:
        "Ein Ereignis ist eine Menge von Ergebnissen. Zum Beispiel ist beim Würfeln das Ereignis 'gerade Zahl' die Menge \\(\\{2,4,6\\}\\). Ereignisse sind also Teilmengen der Ergebnismenge."
    },
    {
      titel: "Sicheres und unmögliches Ereignis",
      text:
        "Das sichere Ereignis enthält alle Ergebnisse, also die ganze Ergebnismenge \\(\\Omega\\). Das unmögliche Ereignis enthält kein Ergebnis und wird als leere Menge \\(\\emptyset\\) geschrieben."
    },
    {
      titel: "Laplace-Experiment",
      text:
        "Ein Laplace-Experiment ist ein Zufallsexperiment, bei dem alle Ergebnisse gleich wahrscheinlich sind. Ein fairer Würfel ist ein typisches Beispiel."
    },
    {
      titel: "Laplace-Wahrscheinlichkeit",
      text:
        "Bei einem Laplace-Experiment gilt \\(P(E)=\\frac{\\text{Anzahl günstige Ergebnisse}}{\\text{Anzahl mögliche Ergebnisse}}\\). Man zählt also günstige und mögliche Ergebnisse."
    },
    {
      titel: "Gegenereignis",
      text:
        "Das Gegenereignis zu \\(E\\) enthält alle Ergebnisse, die nicht zu \\(E\\) gehören. Es gilt \\(P(\\overline{E})=1-P(E)\\)."
    },
    {
      titel: "Baumdiagramm",
      text:
        "Ein Baumdiagramm stellt mehrstufige Zufallsexperimente dar. Jeder Ast zeigt eine mögliche Entwicklung des Experiments, und an jedem Ast steht eine Wahrscheinlichkeit."
    },
    {
      titel: "Pfad",
      text:
        "Ein Pfad ist ein vollständiger Weg durch ein Baumdiagramm. Er beschreibt eine konkrete Abfolge von Ergebnissen, zum Beispiel zuerst Kopf und danach Zahl."
    },
    {
      titel: "Pfadregel",
      text:
        "Die Pfadregel besagt: Die Wahrscheinlichkeit eines Pfades erhält man, indem man die Wahrscheinlichkeiten entlang dieses Pfades multipliziert."
    },
    {
      titel: "Summenregel",
      text:
        "Wenn ein Ereignis durch mehrere Pfade eintreten kann, berechnet man zuerst die Wahrscheinlichkeiten der einzelnen Pfade und addiert sie danach."
    },
    {
      titel: "Ziehen mit und ohne Zurücklegen",
      text:
        "Beim Ziehen mit Zurücklegen bleiben die Wahrscheinlichkeiten bei jedem Zug gleich. Beim Ziehen ohne Zurücklegen verändern sich die Wahrscheinlichkeiten nach jedem Zug."
    }
  ],
  methoden: [
    {
      titel: "Methode: Ergebnismenge bestimmen",
      schritte: [
        "Lies genau, welches Zufallsexperiment durchgeführt wird.",
        "Schreibe alle möglichen einzelnen Ergebnisse auf.",
        "Fasse diese Ergebnisse in einer Menge \\(\\Omega\\) zusammen.",
        "Prüfe, ob wirklich kein mögliches Ergebnis fehlt.",
        "Prüfe, ob kein unmögliches Ergebnis enthalten ist."
      ]
    },
    {
      titel: "Methode: Ereignis als Teilmenge aufschreiben",
      schritte: [
        "Bestimme zuerst die Ergebnismenge \\(\\Omega\\).",
        "Übersetze die Beschreibung des Ereignisses in konkrete Ergebnisse.",
        "Schreibe diese Ergebnisse als Menge auf.",
        "Prüfe, ob alle Elemente des Ereignisses auch in \\(\\Omega\\) liegen.",
        "Zähle bei Bedarf die günstigen Ergebnisse."
      ]
    },
    {
      titel: "Methode: Laplace-Wahrscheinlichkeit berechnen",
      schritte: [
        "Prüfe zuerst, ob alle Ergebnisse gleich wahrscheinlich sind.",
        "Bestimme die Anzahl aller möglichen Ergebnisse.",
        "Bestimme die Anzahl der günstigen Ergebnisse.",
        "Setze in \\(P(E)=\\frac{\\text{günstig}}{\\text{möglich}}\\) ein.",
        "Kürze den Bruch, falls möglich.",
        "Gib die Wahrscheinlichkeit als Bruch, Dezimalzahl oder Prozentwert an."
      ]
    },
    {
      titel: "Methode: Gegenereignis verwenden",
      schritte: [
        "Prüfe, ob das Gegenereignis leichter zu berechnen ist.",
        "Formuliere das Gegenereignis genau.",
        "Berechne \\(P(\\overline{E})\\).",
        "Verwende \\(P(E)=1-P(\\overline{E})\\).",
        "Kontrolliere, ob das Ergebnis zwischen \\(0\\) und \\(1\\) liegt."
      ]
    },
    {
      titel: "Methode: Baumdiagramm zeichnen",
      schritte: [
        "Bestimme die Anzahl der Stufen des Experiments.",
        "Zeichne für die erste Stufe alle möglichen Äste.",
        "Schreibe an jeden Ast die passende Wahrscheinlichkeit.",
        "Zeichne von jedem Ast aus die nächste Stufe.",
        "Passe die Wahrscheinlichkeiten an, falls ohne Zurücklegen gezogen wird.",
        "Kontrolliere, ob sich die Wahrscheinlichkeiten an jeder Verzweigung zu \\(1\\) addieren."
      ]
    },
    {
      titel: "Methode: Pfadregel anwenden",
      schritte: [
        "Wähle den gewünschten Pfad im Baumdiagramm.",
        "Lies alle Wahrscheinlichkeiten entlang dieses Pfades ab.",
        "Multipliziere diese Wahrscheinlichkeiten.",
        "Das Ergebnis ist die Wahrscheinlichkeit genau dieses Pfades.",
        "Achte darauf, nicht zu addieren, wenn es um einen einzelnen Pfad geht."
      ]
    },
    {
      titel: "Methode: Summenregel anwenden",
      schritte: [
        "Bestimme alle Pfade, die zum gesuchten Ereignis gehören.",
        "Berechne für jeden dieser Pfade die Wahrscheinlichkeit mit der Pfadregel.",
        "Addiere die Pfadwahrscheinlichkeiten.",
        "Das Ergebnis ist die Wahrscheinlichkeit des Ereignisses.",
        "Kontrolliere, ob du keinen günstigen Pfad vergessen hast."
      ]
    },
    {
      titel: "Methode: Ziehen ohne Zurücklegen",
      schritte: [
        "Bestimme die Anfangszahlen der Objekte.",
        "Berechne die Wahrscheinlichkeit für den ersten Zug.",
        "Passe danach Zähler und Nenner an.",
        "Berechne die Wahrscheinlichkeit für den zweiten Zug mit den neuen Zahlen.",
        "Multipliziere entlang eines Pfades.",
        "Addiere mehrere passende Pfade, falls das Ereignis auf verschiedene Arten eintreten kann."
      ]
    }
  ],
  merksaetze: [
    "Ein Zufallsexperiment hat einen nicht sicher vorhersehbaren Ausgang.",
    "Die Ergebnismenge \\(\\Omega\\) enthält alle möglichen Ergebnisse.",
    "Ein Ereignis ist eine Teilmenge der Ergebnismenge.",
    "Bei einem Laplace-Experiment sind alle Ergebnisse gleich wahrscheinlich.",
    "Bei Laplace gilt \\(P(E)=\\frac{\\text{günstige Ergebnisse}}{\\text{mögliche Ergebnisse}}\\).",
    "Das Gegenereignis berechnet man mit \\(P(\\overline{E})=1-P(E)\\).",
    "Ein Baumdiagramm beschreibt mehrstufige Zufallsexperimente.",
    "Entlang eines Pfades multipliziert man.",
    "Mehrere günstige Pfade addiert man.",
    "Mit Zurücklegen bleiben Wahrscheinlichkeiten gleich.",
    "Ohne Zurücklegen ändern sich Wahrscheinlichkeiten nach jedem Zug.",
    "Wahrscheinlichkeiten liegen immer zwischen \\(0\\) und \\(1\\)."
  ],
  typischeFehler: [
    {
      fehler: "Man verwechselt Ergebnis und Ereignis.",
      korrektur:
        "Ein Ergebnis ist ein einzelner Ausgang. Ein Ereignis ist eine Menge von Ergebnissen."
    },
    {
      fehler: "Man verwendet die Laplace-Formel, obwohl die Ergebnisse nicht gleich wahrscheinlich sind.",
      korrektur:
        "Die Formel günstige durch mögliche Ergebnisse gilt nur direkt, wenn alle Ergebnisse gleich wahrscheinlich sind."
    },
    {
      fehler: "Man addiert Wahrscheinlichkeiten entlang eines Pfades.",
      korrektur:
        "Entlang eines Pfades muss man multiplizieren. Addiert wird erst zwischen verschiedenen günstigen Pfaden."
    },
    {
      fehler: "Man multipliziert mehrere günstige Pfade miteinander.",
      korrektur:
        "Verschiedene günstige Pfade werden addiert, nicht multipliziert."
    },
    {
      fehler: "Man vergisst beim Ziehen ohne Zurücklegen die Wahrscheinlichkeiten anzupassen.",
      korrektur:
        "Ohne Zurücklegen verändert sich nach jedem Zug die Anzahl der verbleibenden Objekte."
    },
    {
      fehler: "Man berechnet das Gegenereignis, zieht aber am Ende nicht von \\(1\\) ab.",
      korrektur:
        "Wenn das Gegenereignis berechnet wurde, gilt für das gesuchte Ereignis \\(P(E)=1-P(\\overline{E})\\)."
    },
    {
      fehler: "Man gibt Wahrscheinlichkeiten grösser als \\(1\\) an.",
      korrektur:
        "Eine Wahrscheinlichkeit kann höchstens \\(1\\) sein. Prozentwerte können höchstens \\(100\\%\\) betragen."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Ergebnismenge beim Würfeln",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein fairer Würfel wird einmal geworfen. Gib die Ergebnismenge \\(\\Omega\\) an.",
      loesung: [
        "Beim einmaligen Würfeln sind die möglichen Ergebnisse die Augenzahlen \\(1\\) bis \\(6\\).",
        "Also lautet die Ergebnismenge:",
        "\\(\\Omega=\\{1,2,3,4,5,6\\}\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Ereignis als Teilmenge",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein fairer Würfel wird einmal geworfen. Schreibe das Ereignis \\(E\\): 'Es fällt eine gerade Zahl' als Menge.",
      loesung: [
        "Die geraden Augenzahlen beim Würfel sind \\(2\\), \\(4\\) und \\(6\\).",
        "Also ist das Ereignis:",
        "\\(E=\\{2,4,6\\}\\).",
        "Dieses Ereignis ist eine Teilmenge von \\(\\Omega\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Laplace-Wahrscheinlichkeit",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein fairer Würfel wird einmal geworfen. Berechne die Wahrscheinlichkeit, eine Zahl grösser als \\(4\\) zu würfeln.",
      loesung: [
        "Die möglichen Ergebnisse sind \\(1,2,3,4,5,6\\).",
        "Zahlen grösser als \\(4\\) sind \\(5\\) und \\(6\\).",
        "Es gibt also \\(2\\) günstige Ergebnisse.",
        "Insgesamt gibt es \\(6\\) mögliche Ergebnisse.",
        "Also gilt \\(P=\\frac{2}{6}=\\frac{1}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Gegenereignis",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein fairer Würfel wird einmal geworfen. Berechne die Wahrscheinlichkeit, keine \\(6\\) zu würfeln.",
      loesung: [
        "Das Ereignis 'eine \\(6\\)' hat die Wahrscheinlichkeit \\(\\frac{1}{6}\\).",
        "Das Gegenereignis ist 'keine \\(6\\)'.",
        "Also gilt \\(P(\\text{keine }6)=1-\\frac{1}{6}\\).",
        "Das ergibt \\(\\frac{5}{6}\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Zwei Münzwürfe",
      schwierigkeit: "einfach",
      aufgabe:
        "Eine faire Münze wird zweimal geworfen. Berechne die Wahrscheinlichkeit, zweimal Kopf zu erhalten.",
      loesung: [
        "Bei jedem Wurf ist die Wahrscheinlichkeit für Kopf \\(\\frac{1}{2}\\).",
        "Das Ereignis 'zweimal Kopf' entspricht einem einzelnen Pfad.",
        "Nach der Pfadregel multipliziert man entlang des Pfades.",
        "\\(P(KK)=\\frac{1}{2}\\cdot\\frac{1}{2}=\\frac{1}{4}\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Mindestens einmal Kopf",
      schwierigkeit: "mittel",
      aufgabe:
        "Eine faire Münze wird zweimal geworfen. Berechne die Wahrscheinlichkeit, mindestens einmal Kopf zu erhalten.",
      loesung: [
        "Das Ereignis 'mindestens einmal Kopf' kann über mehrere Pfade eintreten.",
        "Die möglichen günstigen Pfade sind \\(KK\\), \\(KZ\\) und \\(ZK\\).",
        "Jeder Pfad hat die Wahrscheinlichkeit \\(\\frac{1}{4}\\).",
        "Nach der Summenregel addiert man die günstigen Pfade.",
        "\\(P=\\frac{1}{4}+\\frac{1}{4}+\\frac{1}{4}=\\frac{3}{4}\\).",
        "Alternativ kann man das Gegenereignis 'kein Kopf' berechnen.",
        "Das ist nur \\(ZZ\\) mit Wahrscheinlichkeit \\(\\frac{1}{4}\\).",
        "Also \\(1-\\frac{1}{4}=\\frac{3}{4}\\)."
      ]
    },
    {
      titel: "Aufgabe 7: Urne mit Zurücklegen",
      schwierigkeit: "mittel",
      aufgabe:
        "In einer Urne liegen \\(3\\) rote und \\(2\\) blaue Kugeln. Es wird zweimal mit Zurücklegen gezogen. Berechne die Wahrscheinlichkeit für zweimal rot.",
      loesung: [
        "Insgesamt liegen \\(5\\) Kugeln in der Urne.",
        "Die Wahrscheinlichkeit für rot ist \\(\\frac{3}{5}\\).",
        "Da mit Zurücklegen gezogen wird, bleibt die Wahrscheinlichkeit beim zweiten Zug gleich.",
        "Nach der Pfadregel gilt:",
        "\\(P(RR)=\\frac{3}{5}\\cdot\\frac{3}{5}=\\frac{9}{25}\\)."
      ]
    },
    {
      titel: "Aufgabe 8: Urne ohne Zurücklegen",
      schwierigkeit: "mittel",
      aufgabe:
        "In einer Urne liegen \\(3\\) rote und \\(2\\) blaue Kugeln. Es wird zweimal ohne Zurücklegen gezogen. Berechne die Wahrscheinlichkeit für zweimal rot.",
      loesung: [
        "Beim ersten Zug ist die Wahrscheinlichkeit für rot \\(\\frac{3}{5}\\).",
        "Nach einer roten Kugel bleiben \\(2\\) rote Kugeln unter insgesamt \\(4\\) Kugeln übrig.",
        "Die Wahrscheinlichkeit für rot im zweiten Zug ist dann \\(\\frac{2}{4}\\).",
        "Nach der Pfadregel gilt:",
        "\\(P(RR)=\\frac{3}{5}\\cdot\\frac{2}{4}=\\frac{6}{20}=\\frac{3}{10}\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Genau eine rote Kugel",
      schwierigkeit: "mittel",
      aufgabe:
        "In einer Urne liegen \\(3\\) rote und \\(2\\) blaue Kugeln. Es wird zweimal ohne Zurücklegen gezogen. Berechne die Wahrscheinlichkeit für genau eine rote Kugel.",
      loesung: [
        "Genau eine rote Kugel kann auf zwei Arten eintreten.",
        "Erster günstiger Pfad: zuerst rot, dann blau.",
        "\\(P(RB)=\\frac{3}{5}\\cdot\\frac{2}{4}=\\frac{6}{20}\\).",
        "Zweiter günstiger Pfad: zuerst blau, dann rot.",
        "\\(P(BR)=\\frac{2}{5}\\cdot\\frac{3}{4}=\\frac{6}{20}\\).",
        "Nach der Summenregel addiert man beide Pfade.",
        "\\(P=\\frac{6}{20}+\\frac{6}{20}=\\frac{12}{20}=\\frac{3}{5}\\)."
      ]
    },
    {
      titel: "Aufgabe 10: Mindestens eine blaue Kugel",
      schwierigkeit: "schwer",
      aufgabe:
        "In einer Urne liegen \\(4\\) rote und \\(1\\) blaue Kugel. Es wird dreimal ohne Zurücklegen gezogen. Berechne die Wahrscheinlichkeit, mindestens einmal blau zu ziehen.",
      loesung: [
        "Hier ist das Gegenereignis einfacher.",
        "Das Gegenereignis zu 'mindestens einmal blau' ist 'keinmal blau'.",
        "Keinmal blau bedeutet: dreimal rot.",
        "Die Wahrscheinlichkeit für dreimal rot ist:",
        "\\(\\frac{4}{5}\\cdot\\frac{3}{4}\\cdot\\frac{2}{3}\\).",
        "Das kürzt sich zu \\(\\frac{2}{5}\\).",
        "Also ist die Wahrscheinlichkeit für mindestens einmal blau:",
        "\\(1-\\frac{2}{5}=\\frac{3}{5}\\)."
      ]
    },
    {
      titel: "Aufgabe 11: Baumdiagramm deuten",
      schwierigkeit: "schwer",
      aufgabe:
        "Ein Spiel hat zwei Stufen. In der ersten Stufe gewinnt man mit Wahrscheinlichkeit \\(0.6\\). Wenn man die erste Stufe gewinnt, gewinnt man die zweite mit Wahrscheinlichkeit \\(0.5\\). Wenn man die erste Stufe verliert, gewinnt man die zweite mit Wahrscheinlichkeit \\(0.2\\). Berechne die Wahrscheinlichkeit, beide Stufen zu gewinnen.",
      loesung: [
        "Das Ereignis 'beide Stufen gewinnen' ist ein einzelner Pfad.",
        "Man muss zuerst die erste Stufe gewinnen.",
        "Diese Wahrscheinlichkeit ist \\(0.6\\).",
        "Danach muss man die zweite Stufe gewinnen.",
        "Unter der Bedingung, dass die erste gewonnen wurde, beträgt diese Wahrscheinlichkeit \\(0.5\\).",
        "Nach der Pfadregel multipliziert man:",
        "\\(0.6\\cdot0.5=0.3\\).",
        "Die Wahrscheinlichkeit beträgt also \\(0.3\\) oder \\(30\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 12: Mehrere Pfade addieren",
      schwierigkeit: "schwer",
      aufgabe:
        "Verwende die Situation aus Aufgabe 11. Berechne die Wahrscheinlichkeit, genau eine der beiden Stufen zu gewinnen.",
      loesung: [
        "Genau eine Stufe gewinnen kann auf zwei Arten passieren.",
        "Erster Pfad: erste Stufe gewinnen, zweite verlieren.",
        "Das hat die Wahrscheinlichkeit \\(0.6\\cdot0.5=0.3\\), weil nach Gewinn der ersten Stufe die Verlustwahrscheinlichkeit der zweiten Stufe \\(1-0.5=0.5\\) ist.",
        "Zweiter Pfad: erste Stufe verlieren, zweite gewinnen.",
        "Das hat die Wahrscheinlichkeit \\(0.4\\cdot0.2=0.08\\).",
        "Nun addiert man beide günstigen Pfade.",
        "\\(0.3+0.08=0.38\\).",
        "Die Wahrscheinlichkeit beträgt \\(0.38\\) oder \\(38\\%\\)."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was ist ein Zufallsexperiment?",
      antwort:
        "Ein Zufallsexperiment ist ein Vorgang, dessen Ergebnis nicht sicher vorhergesagt werden kann, obwohl die möglichen Ergebnisse bekannt sein können."
    },
    {
      frage: "Was ist die Ergebnismenge?",
      antwort:
        "Die Ergebnismenge \\(\\Omega\\) enthält alle möglichen Ergebnisse eines Zufallsexperiments."
    },
    {
      frage: "Was ist ein Ereignis?",
      antwort:
        "Ein Ereignis ist eine Menge von Ergebnissen. Es ist also eine Teilmenge der Ergebnismenge."
    },
    {
      frage: "Was ist ein Laplace-Experiment?",
      antwort:
        "Ein Laplace-Experiment ist ein Zufallsexperiment, bei dem alle Ergebnisse gleich wahrscheinlich sind."
    },
    {
      frage: "Wie berechnet man eine Laplace-Wahrscheinlichkeit?",
      antwort:
        "Man teilt die Anzahl der günstigen Ergebnisse durch die Anzahl aller möglichen Ergebnisse."
    },
    {
      frage: "Was ist ein Gegenereignis?",
      antwort:
        "Das Gegenereignis enthält alle Ergebnisse, bei denen das ursprüngliche Ereignis nicht eintritt. Seine Wahrscheinlichkeit ist \\(1-P(E)\\)."
    },
    {
      frage: "Was besagt die Pfadregel?",
      antwort:
        "Die Pfadregel besagt, dass man die Wahrscheinlichkeiten entlang eines Pfades im Baumdiagramm multipliziert."
    },
    {
      frage: "Was besagt die Summenregel?",
      antwort:
        "Wenn ein Ereignis durch mehrere Pfade eintreten kann, berechnet man die einzelnen Pfadwahrscheinlichkeiten und addiert sie."
    },
    {
      frage: "Was ändert sich beim Ziehen ohne Zurücklegen?",
      antwort:
        "Nach jedem Zug verändert sich der Inhalt der Urne. Deshalb ändern sich auch die Wahrscheinlichkeiten für die nächsten Züge."
    }
  ],
  nachtVorTest: [
    "Kannst du erklären, was ein Zufallsexperiment ist?",
    "Kannst du eine Ergebnismenge \\(\\Omega\\) aufschreiben?",
    "Unterscheidest du Ergebnis und Ereignis?",
    "Weisst du, dass ein Ereignis eine Teilmenge von \\(\\Omega\\) ist?",
    "Kannst du ein Laplace-Experiment erkennen?",
    "Kennst du die Laplace-Formel \\(P(E)=\\frac{\\text{günstig}}{\\text{möglich}}\\)?",
    "Kannst du ein Gegenereignis verwenden?",
    "Kannst du ein Baumdiagramm lesen?",
    "Weisst du, dass man entlang eines Pfades multipliziert?",
    "Weisst du, dass man mehrere günstige Pfade addiert?",
    "Unterscheidest du Ziehen mit und ohne Zurücklegen?",
    "Kontrollierst du, ob deine Wahrscheinlichkeit zwischen \\(0\\) und \\(1\\) liegt?"
  ]
},
   {
  id: "bedingte-wahrscheinlichkeit",
  nummer: "16",
  titel: "Bedingte Wahrscheinlichkeit",
  kurzbeschreibung:
    "Bedingte Wahrscheinlichkeit verstehen und berechnen: Einschränkung der Grundmenge, Baumdiagramme, Vierfeldertafel, Formel \\(P(A\\mid B)\\), Umkehrung von Bedingungen und typische Denkfehler.",
  lernziele: [
    "Du kannst erklären, was bedingte Wahrscheinlichkeit bedeutet.",
    "Du verstehst die Schreibweise \\(P(A\\mid B)\\).",
    "Du kannst bedingte Wahrscheinlichkeiten aus Textaufgaben berechnen.",
    "Du kannst bedingte Wahrscheinlichkeiten aus Baumdiagrammen ablesen.",
    "Du kannst bedingte Wahrscheinlichkeiten aus Vierfeldertafeln bestimmen.",
    "Du verstehst den Unterschied zwischen \\(P(A\\mid B)\\) und \\(P(B\\mid A)\\).",
    "Du kannst die Formel \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\) anwenden.",
    "Du kannst prüfen, ob zwei Ereignisse unabhängig sind.",
    "Du kannst Gegenereignisse bei bedingten Wahrscheinlichkeiten verwenden.",
    "Du erkennst typische Fehler beim Vertauschen der Bedingung."
  ],
  theorie: [
    {
      titel: "Was bedeutet bedingte Wahrscheinlichkeit?",
      text:
        "Eine bedingte Wahrscheinlichkeit beschreibt die Wahrscheinlichkeit eines Ereignisses unter der Voraussetzung, dass ein anderes Ereignis bereits eingetreten ist. Die Grundmenge wird dadurch eingeschränkt."
    },
    {
      titel: "Schreibweise",
      text:
        "Die Schreibweise \\(P(A\\mid B)\\) bedeutet: Wahrscheinlichkeit von \\(A\\) unter der Bedingung, dass \\(B\\) eingetreten ist. Man liest: \\(P\\) von \\(A\\) gegeben \\(B\\)."
    },
    {
      titel: "Wichtig: Reihenfolge beachten",
      text:
        "\\(P(A\\mid B)\\) ist im Allgemeinen nicht dasselbe wie \\(P(B\\mid A)\\). Die Bedingung steht rechts vom senkrechten Strich und bestimmt, welche Fälle überhaupt noch betrachtet werden."
    },
    {
      titel: "Grundformel",
      text:
        "Die zentrale Formel lautet \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\), sofern \\(P(B)>0\\). Im Nenner steht immer die Wahrscheinlichkeit der Bedingung."
    },
    {
      titel: "Bedeutung von \\(A\\cap B\\)",
      text:
        "\\(A\\cap B\\) bedeutet, dass beide Ereignisse gleichzeitig eintreten. Man liest: \\(A\\) und \\(B\\)."
    },
    {
      titel: "Warum steht \\(P(B)\\) im Nenner?",
      text:
        "Wenn \\(B\\) bereits bekannt ist, betrachtet man nur noch die Fälle, in denen \\(B\\) eintritt. Deshalb wird die neue Grundmenge durch \\(B\\) bestimmt."
    },
    {
      titel: "Bedingte Wahrscheinlichkeit im Baumdiagramm",
      text:
        "In einem Baumdiagramm stehen bedingte Wahrscheinlichkeiten oft an den Ästen der zweiten Stufe. Zum Beispiel kann die Wahrscheinlichkeit für ein Ereignis in der zweiten Stufe davon abhängen, was in der ersten Stufe passiert ist."
    },
    {
      titel: "Bedingte Wahrscheinlichkeit in der Vierfeldertafel",
      text:
        "Bei einer Vierfeldertafel wählt man zuerst die Zeile oder Spalte, die der Bedingung entspricht. Innerhalb dieser eingeschränkten Gruppe bestimmt man dann den Anteil des gesuchten Ereignisses."
    },
    {
      titel: "Unabhängigkeit",
      text:
        "Zwei Ereignisse \\(A\\) und \\(B\\) sind unabhängig, wenn das Eintreten von \\(B\\) die Wahrscheinlichkeit von \\(A\\) nicht verändert. Dann gilt \\(P(A\\mid B)=P(A)\\)."
    },
    {
      titel: "Abhängigkeit",
      text:
        "Wenn \\(P(A\\mid B)\\ne P(A)\\) gilt, beeinflusst die Information \\(B\\) die Wahrscheinlichkeit von \\(A\\). Dann sind die Ereignisse abhängig."
    },
    {
      titel: "Gegenereignis unter einer Bedingung",
      text:
        "Auch bei bedingten Wahrscheinlichkeiten gilt: \\(P(\\overline{A}\\mid B)=1-P(A\\mid B)\\). Die Bedingung \\(B\\) bleibt dabei gleich."
    },
    {
      titel: "Typische Alltagssituation",
      text:
        "Bedingte Wahrscheinlichkeit tritt auf, wenn eine Zusatzinformation gegeben ist, zum Beispiel: Eine Person ist bereits ausgewählt worden und man weiss, dass sie eine bestimmte Eigenschaft besitzt. Dann fragt man nach einer weiteren Eigenschaft innerhalb dieser eingeschränkten Gruppe."
    }
  ],
  methoden: [
    {
      titel: "Methode: Bedingte Wahrscheinlichkeit mit Formel berechnen",
      schritte: [
        "Bestimme zuerst, welches Ereignis gesucht ist.",
        "Bestimme danach, welches Ereignis die Bedingung ist.",
        "Schreibe die Wahrscheinlichkeit in der Form \\(P(A\\mid B)\\).",
        "Berechne \\(P(A\\cap B)\\), also die Wahrscheinlichkeit, dass beide Ereignisse eintreten.",
        "Berechne \\(P(B)\\), also die Wahrscheinlichkeit der Bedingung.",
        "Setze in \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\) ein.",
        "Kürze oder vereinfache das Ergebnis."
      ]
    },
    {
      titel: "Methode: Bedingung richtig erkennen",
      schritte: [
        "Suche im Text nach Formulierungen wie 'unter der Bedingung', 'wenn bekannt ist' oder 'gegeben, dass'.",
        "Das Ereignis hinter dieser Zusatzinformation ist die Bedingung.",
        "Die Bedingung steht rechts vom Strich in \\(P(A\\mid B)\\).",
        "Das gesuchte Ereignis steht links vom Strich.",
        "Prüfe, ob du die Reihenfolge nicht vertauscht hast."
      ]
    },
    {
      titel: "Methode: Bedingte Wahrscheinlichkeit aus Vierfeldertafel",
      schritte: [
        "Bestimme zuerst die Bedingung.",
        "Wähle in der Vierfeldertafel die passende Zeile oder Spalte zur Bedingung.",
        "Diese Zeilen- oder Spaltensumme wird der Nenner.",
        "Bestimme innerhalb dieser Gruppe die Anzahl der günstigen Fälle.",
        "Diese günstigen Fälle werden der Zähler.",
        "Berechne den Bruch günstige Fälle durch alle Fälle der Bedingung."
      ]
    },
    {
      titel: "Methode: Bedingte Wahrscheinlichkeit im Baumdiagramm",
      schritte: [
        "Suche den Ast, der zur Bedingung gehört.",
        "Betrachte danach nur noch die weiteren Äste, die von dieser Bedingung ausgehen.",
        "Lies die passende Astwahrscheinlichkeit ab.",
        "Falls ein gemeinsames Ereignis gesucht ist, multipliziere entlang des ganzen Pfades.",
        "Falls nach einer bedingten Wahrscheinlichkeit gefragt ist, beachte, dass die Bedingung bereits vorausgesetzt wird."
      ]
    },
    {
      titel: "Methode: Unabhängigkeit prüfen",
      schritte: [
        "Berechne zuerst \\(P(A)\\).",
        "Berechne danach \\(P(A\\mid B)\\).",
        "Vergleiche beide Wahrscheinlichkeiten.",
        "Wenn \\(P(A\\mid B)=P(A)\\), sind die Ereignisse unabhängig.",
        "Wenn die Werte verschieden sind, sind die Ereignisse abhängig.",
        "Alternativ kann man prüfen, ob \\(P(A\\cap B)=P(A)\\cdot P(B)\\) gilt."
      ]
    },
    {
      titel: "Methode: Gegenereignis nutzen",
      schritte: [
        "Prüfe, ob das direkte Ereignis kompliziert ist.",
        "Formuliere das Gegenereignis innerhalb derselben Bedingung.",
        "Berechne \\(P(\\overline{A}\\mid B)\\).",
        "Verwende \\(P(A\\mid B)=1-P(\\overline{A}\\mid B)\\).",
        "Achte darauf, die Bedingung nicht zu verändern."
      ]
    }
  ],
  merksaetze: [
    "\\(P(A\\mid B)\\) bedeutet: Wahrscheinlichkeit von \\(A\\), wenn \\(B\\) bereits bekannt ist.",
    "Die Bedingung steht rechts vom senkrechten Strich.",
    "Die Formel lautet \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\).",
    "Im Nenner steht immer die Wahrscheinlichkeit der Bedingung.",
    "\\(A\\cap B\\) bedeutet: \\(A\\) und \\(B\\) treten gemeinsam ein.",
    "\\(P(A\\mid B)\\) ist meistens nicht gleich \\(P(B\\mid A)\\).",
    "Bei einer Vierfeldertafel wird die Bedingung zur neuen Grundmenge.",
    "Bei Unabhängigkeit gilt \\(P(A\\mid B)=P(A)\\).",
    "Bei Abhängigkeit verändert die Zusatzinformation die Wahrscheinlichkeit.",
    "Auch bedingt gilt: \\(P(\\overline{A}\\mid B)=1-P(A\\mid B)\\)."
  ],
  typischeFehler: [
    {
      fehler: "Man verwechselt \\(P(A\\mid B)\\) mit \\(P(B\\mid A)\\).",
      korrektur:
        "Die Reihenfolge ist entscheidend. Rechts vom Strich steht die Bedingung, also die neue eingeschränkte Grundmenge."
    },
    {
      fehler: "Man setzt im Nenner die falsche Wahrscheinlichkeit ein.",
      korrektur:
        "Im Nenner steht immer die Wahrscheinlichkeit der Bedingung. Bei \\(P(A\\mid B)\\) ist das \\(P(B)\\)."
    },
    {
      fehler: "Man nimmt bei einer Vierfeldertafel die Gesamtsumme als Nenner, obwohl eine Bedingung gegeben ist.",
      korrektur:
        "Bei bedingter Wahrscheinlichkeit betrachtet man nur die Gruppe, welche die Bedingung erfüllt. Diese Zeilen- oder Spaltensumme ist der Nenner."
    },
    {
      fehler: "Man denkt, eine bedingte Wahrscheinlichkeit müsse kleiner sein als die ursprüngliche Wahrscheinlichkeit.",
      korrektur:
        "Eine Bedingung kann eine Wahrscheinlichkeit kleiner, grösser oder gleich lassen. Es kommt auf den Zusammenhang der Ereignisse an."
    },
    {
      fehler: "Man addiert im Baumdiagramm entlang eines Pfades.",
      korrektur:
        "Entlang eines Pfades multipliziert man. Addiert wird nur zwischen verschiedenen günstigen Pfaden."
    },
    {
      fehler: "Man prüft Unabhängigkeit nur gefühlsmässig.",
      korrektur:
        "Unabhängigkeit prüft man rechnerisch, zum Beispiel mit \\(P(A\\mid B)=P(A)\\) oder \\(P(A\\cap B)=P(A)P(B)\\)."
    },
    {
      fehler: "Man verändert beim Gegenereignis auch die Bedingung.",
      korrektur:
        "Bei \\(P(\\overline{A}\\mid B)=1-P(A\\mid B)\\) bleibt die Bedingung \\(B\\) gleich."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Schreibweise verstehen",
      schwierigkeit: "einfach",
      aufgabe:
        "Erkläre in Worten, was \\(P(A\\mid B)\\) bedeutet.",
      loesung: [
        "\\(P(A\\mid B)\\) bedeutet die Wahrscheinlichkeit von \\(A\\) unter der Bedingung, dass \\(B\\) bereits eingetreten ist.",
        "Man liest: Wahrscheinlichkeit von \\(A\\) gegeben \\(B\\).",
        "Die Bedingung ist also \\(B\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Formel anwenden",
      schwierigkeit: "einfach",
      aufgabe:
        "Gegeben sind \\(P(A\\cap B)=0.18\\) und \\(P(B)=0.6\\). Berechne \\(P(A\\mid B)\\).",
      loesung: [
        "Verwende die Formel \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\).",
        "Setze die Werte ein.",
        "\\(P(A\\mid B)=\\frac{0.18}{0.6}\\).",
        "Das ergibt \\(0.3\\).",
        "Also ist \\(P(A\\mid B)=0.3\\), also \\(30\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Würfel mit Bedingung",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein fairer Würfel wird einmal geworfen. Es ist bekannt, dass eine gerade Zahl gefallen ist. Berechne die Wahrscheinlichkeit, dass eine \\(6\\) gefallen ist.",
      loesung: [
        "Die Bedingung ist: Es ist eine gerade Zahl gefallen.",
        "Die möglichen geraden Zahlen sind \\(\\{2,4,6\\}\\).",
        "Innerhalb dieser eingeschränkten Grundmenge ist nur \\(6\\) günstig.",
        "Also ist die Wahrscheinlichkeit \\(\\frac{1}{3}\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Nicht verwechseln",
      schwierigkeit: "einfach",
      aufgabe:
        "Erkläre, warum \\(P(A\\mid B)\\) im Allgemeinen nicht dasselbe ist wie \\(P(B\\mid A)\\).",
      loesung: [
        "Bei \\(P(A\\mid B)\\) ist \\(B\\) die Bedingung.",
        "Bei \\(P(B\\mid A)\\) ist \\(A\\) die Bedingung.",
        "Die betrachtete Grundmenge ist also jeweils eine andere.",
        "Deshalb können die Wahrscheinlichkeiten verschieden sein."
      ]
    },
    {
      titel: "Aufgabe 5: Vierfeldertafel mit Zahlen",
      schwierigkeit: "mittel",
      aufgabe:
        "In einer Klasse sind \\(12\\) Schülerinnen und Schüler im Sportkurs und \\(18\\) nicht im Sportkurs. Von den \\(12\\) im Sportkurs mögen \\(9\\) Mathematik. Von den \\(18\\) nicht im Sportkurs mögen \\(6\\) Mathematik. Eine Person wird zufällig gewählt. Berechne die Wahrscheinlichkeit, dass sie Mathematik mag, wenn bekannt ist, dass sie im Sportkurs ist.",
      loesung: [
        "Die Bedingung ist: Die Person ist im Sportkurs.",
        "Es gibt \\(12\\) Personen im Sportkurs.",
        "Von diesen \\(12\\) mögen \\(9\\) Mathematik.",
        "Also gilt \\(P(\\text{Mathematik}\\mid\\text{Sportkurs})=\\frac{9}{12}\\).",
        "Das kürzt sich zu \\(\\frac{3}{4}\\).",
        "Die Wahrscheinlichkeit beträgt also \\(75\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Umgekehrte Bedingung",
      schwierigkeit: "mittel",
      aufgabe:
        "Verwende die Angaben aus Aufgabe 5. Berechne die Wahrscheinlichkeit, dass eine Person im Sportkurs ist, wenn bekannt ist, dass sie Mathematik mag.",
      loesung: [
        "Jetzt ist die Bedingung: Die Person mag Mathematik.",
        "Insgesamt mögen \\(9+6=15\\) Personen Mathematik.",
        "Von diesen \\(15\\) sind \\(9\\) im Sportkurs.",
        "Also gilt \\(P(\\text{Sportkurs}\\mid\\text{Mathematik})=\\frac{9}{15}\\).",
        "Das kürzt sich zu \\(\\frac{3}{5}\\).",
        "Die Wahrscheinlichkeit beträgt also \\(60\\%\\).",
        "Das ist nicht dasselbe wie in Aufgabe 5, weil die Bedingung vertauscht wurde."
      ]
    },
    {
      titel: "Aufgabe 7: Baumdiagramm",
      schwierigkeit: "mittel",
      aufgabe:
        "Eine Maschine produziert zuerst mit Wahrscheinlichkeit \\(0.8\\) ein brauchbares Teil. Wenn ein Teil brauchbar ist, wird es mit Wahrscheinlichkeit \\(0.9\\) korrekt verpackt. Wenn ein Teil nicht brauchbar ist, wird es mit Wahrscheinlichkeit \\(0.2\\) trotzdem korrekt verpackt. Berechne die Wahrscheinlichkeit, dass ein Teil brauchbar und korrekt verpackt ist.",
      loesung: [
        "Gesucht ist ein gemeinsames Ereignis: brauchbar und korrekt verpackt.",
        "Das entspricht einem Pfad im Baumdiagramm.",
        "Die Wahrscheinlichkeit für brauchbar ist \\(0.8\\).",
        "Unter der Bedingung brauchbar ist die Wahrscheinlichkeit für korrekt verpackt \\(0.9\\).",
        "Nach der Pfadregel multipliziert man.",
        "\\(P=0.8\\cdot0.9=0.72\\).",
        "Die Wahrscheinlichkeit beträgt \\(72\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 8: Bedingte Wahrscheinlichkeit aus gemeinsamer Wahrscheinlichkeit",
      schwierigkeit: "mittel",
      aufgabe:
        "Bei einem Test gilt: \\(P(krank)=0.04\\) und \\(P(positiv\\mid krank)=0.95\\). Berechne \\(P(krank\\cap positiv)\\).",
      loesung: [
        "Hier ist die bedingte Wahrscheinlichkeit gegeben.",
        "Es gilt \\(P(positiv\\mid krank)=\\frac{P(krank\\cap positiv)}{P(krank)}\\).",
        "Forme nach \\(P(krank\\cap positiv)\\) um.",
        "\\(P(krank\\cap positiv)=P(krank)\\cdot P(positiv\\mid krank)\\).",
        "Setze ein: \\(0.04\\cdot0.95=0.038\\).",
        "Also ist \\(P(krank\\cap positiv)=0.038\\), also \\(3.8\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Unabhängigkeit prüfen",
      schwierigkeit: "mittel",
      aufgabe:
        "Gegeben sind \\(P(A)=0.4\\), \\(P(B)=0.5\\) und \\(P(A\\cap B)=0.2\\). Prüfe, ob \\(A\\) und \\(B\\) unabhängig sind.",
      loesung: [
        "Zwei Ereignisse sind unabhängig, wenn \\(P(A\\cap B)=P(A)\\cdot P(B)\\) gilt.",
        "Berechne \\(P(A)\\cdot P(B)=0.4\\cdot0.5=0.2\\).",
        "Das stimmt mit \\(P(A\\cap B)=0.2\\) überein.",
        "Also sind \\(A\\) und \\(B\\) unabhängig.",
        "Man könnte auch \\(P(A\\mid B)=\\frac{0.2}{0.5}=0.4\\) berechnen.",
        "Das ist gleich \\(P(A)\\)."
      ]
    },
    {
      titel: "Aufgabe 10: Abhängigkeit prüfen",
      schwierigkeit: "mittel",
      aufgabe:
        "Gegeben sind \\(P(A)=0.3\\), \\(P(B)=0.5\\) und \\(P(A\\cap B)=0.25\\). Prüfe, ob \\(A\\) und \\(B\\) unabhängig sind.",
      loesung: [
        "Berechne zuerst \\(P(A)\\cdot P(B)\\).",
        "\\(0.3\\cdot0.5=0.15\\).",
        "Gegeben ist aber \\(P(A\\cap B)=0.25\\).",
        "Da \\(0.25\\ne0.15\\), sind die Ereignisse nicht unabhängig.",
        "Die Ereignisse sind also abhängig."
      ]
    },
    {
      titel: "Aufgabe 11: Gegenereignis unter Bedingung",
      schwierigkeit: "schwer",
      aufgabe:
        "In einer Gruppe haben \\(40\\) Personen ein Haustier. Von diesen \\(40\\) haben \\(28\\) keinen Hund. Eine Person wird zufällig gewählt. Berechne die Wahrscheinlichkeit, dass sie einen Hund hat, wenn bekannt ist, dass sie ein Haustier hat.",
      loesung: [
        "Die Bedingung ist: Die Person hat ein Haustier.",
        "Innerhalb dieser Gruppe gibt es \\(40\\) Personen.",
        "Von diesen \\(40\\) haben \\(28\\) keinen Hund.",
        "Also haben \\(40-28=12\\) Personen einen Hund.",
        "Gesucht ist \\(P(\\text{Hund}\\mid\\text{Haustier})\\).",
        "Das ist \\(\\frac{12}{40}=\\frac{3}{10}\\).",
        "Die Wahrscheinlichkeit beträgt \\(30\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 12: Bedingung aus Text erkennen",
      schwierigkeit: "schwer",
      aufgabe:
        "In einer Schule spielen \\(30\\%\\) der Lernenden ein Instrument. Von den Instrument-Spielenden sind \\(40\\%\\) in einer Band. Berechne die Wahrscheinlichkeit, dass eine zufällig gewählte Person ein Instrument spielt und in einer Band ist.",
      loesung: [
        "Gegeben ist \\(P(Instrument)=0.30\\).",
        "Ausserdem ist \\(P(Band\\mid Instrument)=0.40\\) gegeben.",
        "Gesucht ist die gemeinsame Wahrscheinlichkeit \\(P(Instrument\\cap Band)\\).",
        "Verwende \\(P(Instrument\\cap Band)=P(Instrument)\\cdot P(Band\\mid Instrument)\\).",
        "Also \\(0.30\\cdot0.40=0.12\\).",
        "Die Wahrscheinlichkeit beträgt \\(0.12\\), also \\(12\\%\\)."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was bedeutet bedingte Wahrscheinlichkeit?",
      antwort:
        "Sie beschreibt die Wahrscheinlichkeit eines Ereignisses unter der Voraussetzung, dass ein anderes Ereignis bereits eingetreten ist."
    },
    {
      frage: "Wie liest man \\(P(A\\mid B)\\)?",
      antwort:
        "Man liest: Wahrscheinlichkeit von \\(A\\) gegeben \\(B\\). Das Ereignis \\(B\\) ist die Bedingung."
    },
    {
      frage: "Wie lautet die Formel für \\(P(A\\mid B)\\)?",
      antwort:
        "Die Formel lautet \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\), sofern \\(P(B)>0\\)."
    },
    {
      frage: "Was steht bei \\(P(A\\mid B)\\) im Nenner?",
      antwort:
        "Im Nenner steht die Wahrscheinlichkeit der Bedingung, also \\(P(B)\\)."
    },
    {
      frage: "Warum ist \\(P(A\\mid B)\\) nicht automatisch gleich \\(P(B\\mid A)\\)?",
      antwort:
        "Weil jeweils eine andere Bedingung vorliegt. Die betrachtete Grundmenge ist also verschieden."
    },
    {
      frage: "Wie berechnet man bedingte Wahrscheinlichkeit aus einer Vierfeldertafel?",
      antwort:
        "Man wählt zuerst die Zeile oder Spalte der Bedingung. Diese Summe ist der Nenner. Danach zählt man darin die günstigen Fälle."
    },
    {
      frage: "Wann sind zwei Ereignisse unabhängig?",
      antwort:
        "Sie sind unabhängig, wenn das Eintreten des einen Ereignisses die Wahrscheinlichkeit des anderen nicht verändert, also zum Beispiel \\(P(A\\mid B)=P(A)\\)."
    },
    {
      frage: "Wie kann man Unabhängigkeit noch prüfen?",
      antwort:
        "Man kann prüfen, ob \\(P(A\\cap B)=P(A)\\cdot P(B)\\) gilt."
    },
    {
      frage: "Was gilt für das Gegenereignis bei bedingter Wahrscheinlichkeit?",
      antwort:
        "Es gilt \\(P(\\overline{A}\\mid B)=1-P(A\\mid B)\\). Die Bedingung bleibt dabei gleich."
    }
  ],
  nachtVorTest: [
    "Kannst du erklären, was \\(P(A\\mid B)\\) bedeutet?",
    "Weisst du, dass die Bedingung rechts vom Strich steht?",
    "Kennst du die Formel \\(P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\)?",
    "Setzt du im Nenner wirklich die Wahrscheinlichkeit der Bedingung ein?",
    "Unterscheidest du \\(P(A\\mid B)\\) und \\(P(B\\mid A)\\)?",
    "Kannst du \\(A\\cap B\\) als 'A und B' erklären?",
    "Kannst du bedingte Wahrscheinlichkeit aus einer Vierfeldertafel berechnen?",
    "Kannst du bedingte Wahrscheinlichkeit aus einem Baumdiagramm ablesen?",
    "Kannst du Unabhängigkeit mit \\(P(A\\mid B)=P(A)\\) prüfen?",
    "Kannst du Unabhängigkeit mit \\(P(A\\cap B)=P(A)P(B)\\) prüfen?",
    "Veränderst du beim Gegenereignis nicht versehentlich die Bedingung?",
    "Kontrollierst du, ob deine Wahrscheinlichkeit zwischen \\(0\\) und \\(1\\) liegt?"
  ]
},
   {
  id: "satz-von-bayes",
  nummer: "17",
  titel: "Satz von Bayes",
  kurzbeschreibung:
    "Satz von Bayes verstehen und anwenden: umgekehrte bedingte Wahrscheinlichkeit, totale Wahrscheinlichkeit, Baumdiagramm rückwärts lesen und typische Aufgaben mit Tests und Diagnosen.",
  lernziele: [
    "Du kannst erklären, wozu der Satz von Bayes dient.",
    "Du verstehst den Unterschied zwischen \\(P(A\\mid B)\\) und \\(P(B\\mid A)\\).",
    "Du kannst eine bedingte Wahrscheinlichkeit umkehren.",
    "Du kannst den Satz von Bayes korrekt aufstellen.",
    "Du kannst die totale Wahrscheinlichkeit berechnen.",
    "Du kannst Bayes-Aufgaben mit Baumdiagrammen lösen.",
    "Du kannst Aufgaben mit Tests, Fehlerquoten und Diagnosen bearbeiten.",
    "Du erkennst, warum eine hohe Testgenauigkeit nicht automatisch eine hohe tatsächliche Wahrscheinlichkeit bedeutet.",
    "Du kannst Zähler und Nenner im Satz von Bayes richtig deuten.",
    "Du erkennst typische Fehler bei Grundrate, Bedingung und Nenner."
  ],
  theorie: [
    {
      titel: "Wozu braucht man den Satz von Bayes?",
      text:
        "Der Satz von Bayes hilft, eine bedingte Wahrscheinlichkeit umzudrehen. Oft kennt man zum Beispiel \\(P(B\\mid A)\\), möchte aber \\(P(A\\mid B)\\) berechnen."
    },
    {
      titel: "Typische Situation",
      text:
        "Ein Test ist positiv. Gesucht ist aber nicht die Wahrscheinlichkeit für einen positiven Test bei einer kranken Person, sondern die Wahrscheinlichkeit, dass eine positiv getestete Person tatsächlich krank ist."
    },
    {
      titel: "Grundformel",
      text:
        "Der Satz von Bayes lautet \\(P(A\\mid B)=\\frac{P(B\\mid A)\\cdot P(A)}{P(B)}\\), sofern \\(P(B)>0\\)."
    },
    {
      titel: "Bedeutung des Zählers",
      text:
        "Der Zähler \\(P(B\\mid A)\\cdot P(A)\\) beschreibt die gemeinsame Wahrscheinlichkeit von \\(A\\) und \\(B\\). Man kann ihn auch als \\(P(A\\cap B)\\) verstehen."
    },
    {
      titel: "Bedeutung des Nenners",
      text:
        "Der Nenner \\(P(B)\\) beschreibt die gesamte Wahrscheinlichkeit des beobachteten Ereignisses \\(B\\). Er umfasst alle Wege, auf denen \\(B\\) eintreten kann."
    },
    {
      titel: "Totale Wahrscheinlichkeit",
      text:
        "Wenn \\(B\\) auf verschiedene Arten eintreten kann, berechnet man \\(P(B)\\) durch Addition aller passenden Pfade. Zum Beispiel gilt \\(P(B)=P(B\\mid A)P(A)+P(B\\mid \\overline{A})P(\\overline{A})\\)."
    },
    {
      titel: "Bayes mit Gegenereignis",
      text:
        "Sehr häufig zerlegt man die Grundmenge in \\(A\\) und \\(\\overline{A}\\). Dann kann ein beobachtetes Ereignis \\(B\\) entweder mit \\(A\\) oder mit \\(\\overline{A}\\) eintreten."
    },
    {
      titel: "Baumdiagramm vorwärts und rückwärts",
      text:
        "Ein Baumdiagramm wird normalerweise vorwärts gelesen. Der Satz von Bayes erlaubt es, nachträglich rückwärts zu fragen: Wenn ein Endereignis bekannt ist, wie wahrscheinlich war ein bestimmter vorheriger Ast?"
    },
    {
      titel: "Grundrate",
      text:
        "Die Grundrate ist die ursprüngliche Wahrscheinlichkeit eines Ereignisses, bevor eine neue Information dazukommt. In Testaufgaben ist das oft die Häufigkeit einer Krankheit in der Bevölkerung."
    },
    {
      titel: "Warum die Grundrate wichtig ist",
      text:
        "Auch ein genauer Test kann bei seltenen Ereignissen viele falsch positive Resultate erzeugen. Deshalb muss man immer die Grundrate berücksichtigen."
    },
    {
      titel: "Falsch positiv und falsch negativ",
      text:
        "Falsch positiv bedeutet: Der Test ist positiv, obwohl das Ereignis eigentlich nicht vorliegt. Falsch negativ bedeutet: Der Test ist negativ, obwohl das Ereignis eigentlich vorliegt."
    },
    {
      titel: "Kernidee",
      text:
        "Bayes vergleicht einen günstigen Pfad mit allen Pfaden, die zur beobachteten Information passen. Deshalb ist der Nenner meist eine Summe mehrerer Pfade."
    }
  ],
  methoden: [
    {
      titel: "Methode: Satz von Bayes anwenden",
      schritte: [
        "Bestimme zuerst, was gesucht ist.",
        "Schreibe die gesuchte Wahrscheinlichkeit in der Form \\(P(A\\mid B)\\).",
        "Bestimme das Ereignis \\(A\\) und die beobachtete Information \\(B\\).",
        "Berechne den Zähler \\(P(B\\mid A)\\cdot P(A)\\).",
        "Berechne den Nenner \\(P(B)\\).",
        "Falls nötig, berechne \\(P(B)\\) mit der totalen Wahrscheinlichkeit.",
        "Setze alles in \\(P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}\\) ein.",
        "Vereinfache das Ergebnis und interpretiere es."
      ]
    },
    {
      titel: "Methode: Totale Wahrscheinlichkeit berechnen",
      schritte: [
        "Zerlege die Grundmenge in zwei Fälle, zum Beispiel \\(A\\) und \\(\\overline{A}\\).",
        "Berechne den Pfad, bei dem \\(A\\) und \\(B\\) eintreten.",
        "Berechne den Pfad, bei dem \\(\\overline{A}\\) und \\(B\\) eintreten.",
        "Addiere beide Pfade.",
        "Dann erhältst du \\(P(B)\\).",
        "Verwende diesen Wert als Nenner im Satz von Bayes."
      ]
    },
    {
      titel: "Methode: Bayes mit Baumdiagramm lösen",
      schritte: [
        "Zeichne zuerst die erste Stufe mit \\(A\\) und \\(\\overline{A}\\).",
        "Trage die Grundwahrscheinlichkeiten ein.",
        "Zeichne danach die zweite Stufe mit dem beobachteten Ereignis \\(B\\) und dem Gegenereignis.",
        "Multipliziere entlang der Pfade.",
        "Markiere alle Pfade, die zur beobachteten Information \\(B\\) passen.",
        "Setze den günstigen Pfad in den Zähler.",
        "Setze die Summe aller passenden Pfade in den Nenner."
      ]
    },
    {
      titel: "Methode: Testaufgabe lösen",
      schritte: [
        "Bestimme die Grundrate, zum Beispiel \\(P(krank)\\).",
        "Bestimme das Gegenereignis, zum Beispiel \\(P(nicht\\ krank)\\).",
        "Bestimme die Trefferquote, zum Beispiel \\(P(positiv\\mid krank)\\).",
        "Bestimme die Falsch-positiv-Rate, zum Beispiel \\(P(positiv\\mid nicht\\ krank)\\).",
        "Berechne alle positiven Pfade.",
        "Teile den richtig positiven Pfad durch alle positiven Pfade.",
        "Interpretiere das Ergebnis als Wahrscheinlichkeit nach positivem Test."
      ]
    },
    {
      titel: "Methode: Bedingung nicht vertauschen",
      schritte: [
        "Lies die Aufgabe langsam und markiere die gegebene Information.",
        "Die gegebene Information steht rechts vom Strich.",
        "Das gesuchte Ereignis steht links vom Strich.",
        "Prüfe, ob du wirklich \\(P(A\\mid B)\\) und nicht \\(P(B\\mid A)\\) berechnest.",
        "Kontrolliere den Nenner: Er muss zur Bedingung passen."
      ]
    },
    {
      titel: "Methode: Ergebnis plausibel prüfen",
      schritte: [
        "Prüfe, ob das Ergebnis zwischen \\(0\\) und \\(1\\) liegt.",
        "Prüfe, ob seltene Grundraten das Ergebnis stark beeinflussen.",
        "Überlege, ob viele falsch positive Fälle möglich sind.",
        "Vergleiche den günstigen Pfad mit allen passenden Pfaden.",
        "Formuliere das Ergebnis in einem Satz."
      ]
    }
  ],
  merksaetze: [
    "Bayes dreht bedingte Wahrscheinlichkeiten um.",
    "Die Formel lautet \\(P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}\\).",
    "Der Nenner ist die gesamte Wahrscheinlichkeit der Bedingung.",
    "Der Zähler ist der günstige Pfad.",
    "Der Nenner ist die Summe aller Pfade, die zur beobachteten Information passen.",
    "\\(P(A\\mid B)\\) ist nicht dasselbe wie \\(P(B\\mid A)\\).",
    "Die Grundrate darf nicht ignoriert werden.",
    "Bei seltenen Ereignissen können falsch positive Fälle stark ins Gewicht fallen.",
    "Totale Wahrscheinlichkeit bedeutet: alle möglichen passenden Pfade addieren.",
    "Ein Baumdiagramm hilft, Bayes-Aufgaben übersichtlich zu lösen."
  ],
  typischeFehler: [
    {
      fehler: "Man verwechselt \\(P(krank\\mid positiv)\\) mit \\(P(positiv\\mid krank)\\).",
      korrektur:
        "Das sind unterschiedliche Wahrscheinlichkeiten. \\(P(positiv\\mid krank)\\) beschreibt die Testtrefferquote. \\(P(krank\\mid positiv)\\) beschreibt die Wahrscheinlichkeit, nach positivem Test wirklich krank zu sein."
    },
    {
      fehler: "Man vergisst die Grundrate.",
      korrektur:
        "Die Grundrate \\(P(A)\\) gehört in den Zähler. Ohne sie überschätzt man oft die gesuchte Wahrscheinlichkeit."
    },
    {
      fehler: "Man setzt im Nenner nur den günstigen Pfad ein.",
      korrektur:
        "Im Nenner müssen alle Pfade stehen, die zur Bedingung passen. Bei positivem Test also alle positiven Tests, nicht nur die richtig positiven."
    },
    {
      fehler: "Man addiert nicht alle Möglichkeiten für \\(P(B)\\).",
      korrektur:
        "\\(P(B)\\) umfasst alle Fälle, in denen \\(B\\) eintreten kann. Diese Pfade müssen addiert werden."
    },
    {
      fehler: "Man denkt, ein sehr genauer Test bedeutet automatisch, dass ein positives Ergebnis fast sicher richtig ist.",
      korrektur:
        "Das stimmt bei seltenen Ereignissen nicht unbedingt. Falsch positive Ergebnisse können zahlenmässig trotzdem häufig sein."
    },
    {
      fehler: "Man verwendet die Falsch-negativ-Rate statt der Falsch-positiv-Rate.",
      korrektur:
        "Bei der Frage nach einem positiven Testergebnis braucht man alle positiven Pfade. Dazu gehört auch \\(P(positiv\\mid nicht\\ krank)\\)."
    },
    {
      fehler: "Man formuliert das Ergebnis nicht im Kontext.",
      korrektur:
        "Bei Bayes-Aufgaben ist die Interpretation wichtig: Das Ergebnis ist eine Wahrscheinlichkeit nach einer neuen Information."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Formel erkennen",
      schwierigkeit: "einfach",
      aufgabe:
        "Schreibe den Satz von Bayes für \\(P(A\\mid B)\\) auf.",
      loesung: [
        "Der Satz von Bayes lautet:",
        "\\(P(A\\mid B)=\\frac{P(B\\mid A)\\cdot P(A)}{P(B)}\\).",
        "Dabei muss \\(P(B)>0\\) gelten.",
        "Im Nenner steht die Wahrscheinlichkeit der Bedingung \\(B\\)."
      ]
    },
    {
      titel: "Aufgabe 2: Einsetzen in Bayes",
      schwierigkeit: "einfach",
      aufgabe:
        "Gegeben sind \\(P(B\\mid A)=0.8\\), \\(P(A)=0.3\\) und \\(P(B)=0.6\\). Berechne \\(P(A\\mid B)\\).",
      loesung: [
        "Verwende \\(P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}\\).",
        "Setze ein: \\(P(A\\mid B)=\\frac{0.8\\cdot0.3}{0.6}\\).",
        "Der Zähler ist \\(0.24\\).",
        "\\(0.24:0.6=0.4\\).",
        "Also ist \\(P(A\\mid B)=0.4\\), also \\(40\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Totale Wahrscheinlichkeit",
      schwierigkeit: "einfach",
      aufgabe:
        "Gegeben sind \\(P(A)=0.2\\), \\(P(\\overline{A})=0.8\\), \\(P(B\\mid A)=0.7\\) und \\(P(B\\mid\\overline{A})=0.1\\). Berechne \\(P(B)\\).",
      loesung: [
        "Verwende die totale Wahrscheinlichkeit.",
        "\\(P(B)=P(B\\mid A)P(A)+P(B\\mid\\overline{A})P(\\overline{A})\\).",
        "Setze ein: \\(P(B)=0.7\\cdot0.2+0.1\\cdot0.8\\).",
        "Das ergibt \\(0.14+0.08=0.22\\).",
        "Also ist \\(P(B)=0.22\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Bayes mit totaler Wahrscheinlichkeit",
      schwierigkeit: "mittel",
      aufgabe:
        "Verwende die Angaben aus Aufgabe 3 und berechne \\(P(A\\mid B)\\).",
      loesung: [
        "Gesucht ist \\(P(A\\mid B)\\).",
        "Der günstige Pfad ist \\(A\\) und \\(B\\).",
        "Dieser Pfad hat die Wahrscheinlichkeit \\(P(B\\mid A)P(A)=0.7\\cdot0.2=0.14\\).",
        "Aus Aufgabe 3 wissen wir \\(P(B)=0.22\\).",
        "Also gilt \\(P(A\\mid B)=\\frac{0.14}{0.22}\\).",
        "Das ist \\(\\frac{14}{22}=\\frac{7}{11}\\).",
        "Näherungsweise ist das \\(0.636\\), also etwa \\(63.6\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Medizinischer Test",
      schwierigkeit: "mittel",
      aufgabe:
        "Eine Krankheit betrifft \\(2\\%\\) einer Gruppe. Ein Test erkennt kranke Personen mit Wahrscheinlichkeit \\(90\\%\\). Bei gesunden Personen ist der Test mit Wahrscheinlichkeit \\(5\\%\\) fälschlicherweise positiv. Berechne die Wahrscheinlichkeit, dass eine positiv getestete Person wirklich krank ist.",
      loesung: [
        "Gesucht ist \\(P(krank\\mid positiv)\\).",
        "Die Grundrate ist \\(P(krank)=0.02\\).",
        "Also ist \\(P(gesund)=0.98\\).",
        "Richtig positiver Pfad: \\(0.02\\cdot0.90=0.018\\).",
        "Falsch positiver Pfad: \\(0.98\\cdot0.05=0.049\\).",
        "Alle positiven Tests zusammen: \\(0.018+0.049=0.067\\).",
        "Also gilt \\(P(krank\\mid positiv)=\\frac{0.018}{0.067}\\).",
        "Das ist ungefähr \\(0.269\\).",
        "Die Wahrscheinlichkeit beträgt also etwa \\(26.9\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Warum nicht 90 Prozent?",
      schwierigkeit: "mittel",
      aufgabe:
        "Erkläre mit Aufgabe 5, warum die gesuchte Wahrscheinlichkeit nicht einfach \\(90\\%\\) ist.",
      loesung: [
        "\\(90\\%\\) ist die Wahrscheinlichkeit, dass der Test positiv ist, wenn eine Person krank ist.",
        "Gesucht ist aber die umgekehrte Wahrscheinlichkeit: krank, wenn der Test positiv ist.",
        "Dazu muss man auch falsch positive Tests bei gesunden Personen berücksichtigen.",
        "Weil die Krankheit selten ist, gibt es viele gesunde Personen.",
        "Dadurch können relativ viele falsch positive Ergebnisse entstehen.",
        "Deshalb ist \\(P(krank\\mid positiv)\\) deutlich kleiner als \\(90\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 7: Qualitätskontrolle",
      schwierigkeit: "mittel",
      aufgabe:
        "In einer Fabrik stammen \\(70\\%\\) der Teile aus Maschine A und \\(30\\%\\) aus Maschine B. Maschine A produziert mit Wahrscheinlichkeit \\(4\\%\\) fehlerhafte Teile, Maschine B mit Wahrscheinlichkeit \\(10\\%\\). Ein Teil ist fehlerhaft. Berechne die Wahrscheinlichkeit, dass es von Maschine B stammt.",
      loesung: [
        "Gesucht ist \\(P(B\\mid fehlerhaft)\\).",
        "Pfad Maschine B und fehlerhaft: \\(0.30\\cdot0.10=0.03\\).",
        "Pfad Maschine A und fehlerhaft: \\(0.70\\cdot0.04=0.028\\).",
        "Alle fehlerhaften Teile zusammen: \\(0.03+0.028=0.058\\).",
        "Also gilt \\(P(B\\mid fehlerhaft)=\\frac{0.03}{0.058}\\).",
        "Das ist ungefähr \\(0.517\\).",
        "Die Wahrscheinlichkeit beträgt also etwa \\(51.7\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 8: E-Mail-Spam",
      schwierigkeit: "mittel",
      aufgabe:
        "\\(20\\%\\) aller E-Mails sind Spam. Ein Filter markiert Spam mit Wahrscheinlichkeit \\(95\\%\\) als verdächtig. Normale E-Mails werden mit Wahrscheinlichkeit \\(10\\%\\) fälschlich als verdächtig markiert. Berechne die Wahrscheinlichkeit, dass eine als verdächtig markierte E-Mail wirklich Spam ist.",
      loesung: [
        "Gesucht ist \\(P(Spam\\mid verdächtig)\\).",
        "Spam und verdächtig: \\(0.20\\cdot0.95=0.19\\).",
        "Nicht Spam und verdächtig: \\(0.80\\cdot0.10=0.08\\).",
        "Alle verdächtigen E-Mails: \\(0.19+0.08=0.27\\).",
        "Also ist \\(P(Spam\\mid verdächtig)=\\frac{0.19}{0.27}\\).",
        "Das ist ungefähr \\(0.704\\).",
        "Die Wahrscheinlichkeit beträgt also etwa \\(70.4\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Falsch positive Rate ändern",
      schwierigkeit: "schwer",
      aufgabe:
        "In Aufgabe 8 sinkt die Falsch-positiv-Rate von \\(10\\%\\) auf \\(2\\%\\). Berechne die neue Wahrscheinlichkeit, dass eine verdächtige E-Mail wirklich Spam ist.",
      loesung: [
        "Der Spam-Pfad bleibt gleich: \\(0.20\\cdot0.95=0.19\\).",
        "Der falsch verdächtige Pfad ist nun \\(0.80\\cdot0.02=0.016\\).",
        "Alle verdächtigen E-Mails: \\(0.19+0.016=0.206\\).",
        "Also ist \\(P(Spam\\mid verdächtig)=\\frac{0.19}{0.206}\\).",
        "Das ist ungefähr \\(0.922\\).",
        "Die Wahrscheinlichkeit beträgt also etwa \\(92.2\\%\\).",
        "Die Verbesserung ist gross, weil viel weniger normale E-Mails fälschlich markiert werden."
      ]
    },
    {
      titel: "Aufgabe 10: Seltene Grundrate",
      schwierigkeit: "schwer",
      aufgabe:
        "Ein Ereignis tritt nur mit Wahrscheinlichkeit \\(0.5\\%\\) auf. Ein Test erkennt das Ereignis mit \\(99\\%\\) Trefferquote. Bei Personen ohne Ereignis ist der Test mit \\(1\\%\\) fälschlich positiv. Berechne \\(P(Ereignis\\mid positiv)\\).",
      loesung: [
        "Gesucht ist \\(P(Ereignis\\mid positiv)\\).",
        "Die Grundrate ist \\(P(Ereignis)=0.005\\).",
        "Das Gegenereignis hat Wahrscheinlichkeit \\(0.995\\).",
        "Richtig positiver Pfad: \\(0.005\\cdot0.99=0.00495\\).",
        "Falsch positiver Pfad: \\(0.995\\cdot0.01=0.00995\\).",
        "Alle positiven Tests: \\(0.00495+0.00995=0.01490\\).",
        "Also gilt \\(P(Ereignis\\mid positiv)=\\frac{0.00495}{0.01490}\\).",
        "Das ist ungefähr \\(0.332\\).",
        "Die Wahrscheinlichkeit beträgt also etwa \\(33.2\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 11: Bayes aus einer Vierfeldertafel",
      schwierigkeit: "schwer",
      aufgabe:
        "In einer Gruppe von \\(1000\\) Personen haben \\(80\\) eine bestimmte Eigenschaft. Von diesen \\(80\\) erhalten \\(72\\) ein positives Ergebnis. Von den \\(920\\) Personen ohne Eigenschaft erhalten \\(46\\) ebenfalls ein positives Ergebnis. Berechne die Wahrscheinlichkeit, dass eine positiv getestete Person die Eigenschaft besitzt.",
      loesung: [
        "Gesucht ist der Anteil der Personen mit Eigenschaft unter allen positiv Getesteten.",
        "Positive Personen mit Eigenschaft: \\(72\\).",
        "Positive Personen ohne Eigenschaft: \\(46\\).",
        "Insgesamt positive Personen: \\(72+46=118\\).",
        "Also ist die gesuchte Wahrscheinlichkeit \\(\\frac{72}{118}\\).",
        "Das kürzt sich zu \\(\\frac{36}{59}\\).",
        "Näherungsweise ist das \\(0.610\\).",
        "Die Wahrscheinlichkeit beträgt also etwa \\(61.0\\%\\)."
      ]
    },
    {
      titel: "Aufgabe 12: Bayes allgemein formulieren",
      schwierigkeit: "schwer",
      aufgabe:
        "Gegeben sind \\(P(A)=p\\), \\(P(B\\mid A)=r\\) und \\(P(B\\mid\\overline{A})=s\\). Stelle eine Formel für \\(P(A\\mid B)\\) auf.",
      loesung: [
        "Zuerst gilt \\(P(\\overline{A})=1-p\\).",
        "Der günstige Pfad ist \\(A\\) und \\(B\\).",
        "Dieser Pfad hat Wahrscheinlichkeit \\(rp\\).",
        "Alle Wege zu \\(B\\) sind \\(rp+s(1-p)\\).",
        "Also gilt:",
        "\\(P(A\\mid B)=\\frac{rp}{rp+s(1-p)}\\)."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Wozu dient der Satz von Bayes?",
      antwort:
        "Er dient dazu, bedingte Wahrscheinlichkeiten umzudrehen. Man kann also aus \\(P(B\\mid A)\\) und weiteren Angaben \\(P(A\\mid B)\\) berechnen."
    },
    {
      frage: "Wie lautet der Satz von Bayes?",
      antwort:
        "Er lautet \\(P(A\\mid B)=\\frac{P(B\\mid A)P(A)}{P(B)}\\)."
    },
    {
      frage: "Was ist der Zähler im Satz von Bayes?",
      antwort:
        "Der Zähler ist der günstige gemeinsame Pfad \\(P(B\\mid A)P(A)\\), also \\(P(A\\cap B)\\)."
    },
    {
      frage: "Was ist der Nenner im Satz von Bayes?",
      antwort:
        "Der Nenner ist die gesamte Wahrscheinlichkeit der Bedingung \\(B\\), also alle Wege, auf denen \\(B\\) eintreten kann."
    },
    {
      frage: "Was bedeutet totale Wahrscheinlichkeit?",
      antwort:
        "Totale Wahrscheinlichkeit bedeutet, dass man alle möglichen Pfade addiert, die zu einem bestimmten Ereignis führen."
    },
    {
      frage: "Warum ist die Grundrate wichtig?",
      antwort:
        "Weil sie angibt, wie häufig ein Ereignis ursprünglich vorkommt. Besonders bei seltenen Ereignissen beeinflusst sie das Bayes-Ergebnis stark."
    },
    {
      frage: "Warum ist \\(P(krank\\mid positiv)\\) nicht dasselbe wie \\(P(positiv\\mid krank)\\)?",
      antwort:
        "Weil die Bedingung verschieden ist. Beim ersten weiss man, dass der Test positiv ist. Beim zweiten weiss man, dass die Person krank ist."
    },
    {
      frage: "Wie hilft ein Baumdiagramm bei Bayes?",
      antwort:
        "Man kann alle Pfade eintragen, entlang der Pfade multiplizieren und danach den günstigen Pfad durch alle passenden Pfade teilen."
    },
    {
      frage: "Was bedeutet falsch positiv?",
      antwort:
        "Falsch positiv bedeutet, dass ein Test positiv ausfällt, obwohl das gesuchte Ereignis eigentlich nicht vorliegt."
    }
  ],
  nachtVorTest: [
    "Kannst du den Satz von Bayes aufschreiben?",
    "Weisst du, dass Bayes bedingte Wahrscheinlichkeiten umdreht?",
    "Unterscheidest du \\(P(A\\mid B)\\) und \\(P(B\\mid A)\\)?",
    "Kannst du den günstigen Pfad für den Zähler bestimmen?",
    "Kannst du alle passenden Pfade für den Nenner addieren?",
    "Kennst du die Formel der totalen Wahrscheinlichkeit?",
    "Berücksichtigst du die Grundrate?",
    "Kannst du Testaufgaben mit richtig positiv und falsch positiv lösen?",
    "Weisst du, warum ein positiver Test nicht automatisch fast sicher richtig ist?",
    "Kannst du Bayes mit einem Baumdiagramm darstellen?",
    "Kontrollierst du, ob das Ergebnis zwischen \\(0\\) und \\(1\\) liegt?",
    "Kannst du dein Ergebnis in einem Satz interpretieren?"
  ]
},
   {
  id: "markov-ketten",
  nummer: "18",
  titel: "Markov-Ketten",
  kurzbeschreibung:
    "Markov-Ketten verstehen: Zustände, Übergangswahrscheinlichkeiten, Übergangsmatrix, Zustandsvektor, mehrstufige Entwicklungen und stationäre Verteilungen.",
  lernziele: [
    "Du kannst erklären, was eine Markov-Kette ist.",
    "Du verstehst den Begriff Zustand.",
    "Du kannst Übergangswahrscheinlichkeiten interpretieren.",
    "Du kannst eine Übergangsmatrix aufstellen.",
    "Du kannst einen Zustandsvektor verwenden.",
    "Du kannst Entwicklungen über mehrere Schritte berechnen.",
    "Du kannst Matrixmultiplikation bei Markov-Ketten anwenden.",
    "Du verstehst die Bedeutung einer stationären Verteilung.",
    "Du kannst einfache Langzeitverhalten untersuchen.",
    "Du erkennst typische Fehler bei Zeilen, Spalten und Wahrscheinlichkeiten."
  ],
  theorie: [
    {
      titel: "Was ist eine Markov-Kette?",
      text:
        "Eine Markov-Kette beschreibt ein System, das sich schrittweise zwischen verschiedenen Zuständen bewegt. Die Wahrscheinlichkeit für den nächsten Zustand hängt nur vom aktuellen Zustand ab, nicht von der ganzen Vergangenheit."
    },
    {
      titel: "Zustände",
      text:
        "Zustände sind die möglichen Situationen, in denen sich ein System befinden kann. Zum Beispiel kann das Wetter die Zustände sonnig und regnerisch haben."
    },
    {
      titel: "Übergang",
      text:
        "Ein Übergang beschreibt den Wechsel von einem Zustand in einen anderen Zustand. Zu jedem Übergang gehört eine Wahrscheinlichkeit."
    },
    {
      titel: "Übergangswahrscheinlichkeit",
      text:
        "Eine Übergangswahrscheinlichkeit gibt an, wie wahrscheinlich es ist, vom aktuellen Zustand in einen bestimmten nächsten Zustand zu wechseln."
    },
    {
      titel: "Markov-Eigenschaft",
      text:
        "Die Markov-Eigenschaft bedeutet: Für die Zukunft zählt nur der aktuelle Zustand. Wie man in diesen Zustand gekommen ist, spielt für den nächsten Schritt keine Rolle."
    },
    {
      titel: "Übergangsmatrix",
      text:
        "Die Übergangsmatrix fasst alle Übergangswahrscheinlichkeiten in einer Matrix zusammen. Sie zeigt, mit welcher Wahrscheinlichkeit man von einem Zustand zu einem anderen Zustand gelangt."
    },
    {
      titel: "Zeilensumme oder Spaltensumme",
      text:
        "Je nach Konvention stehen die Wahrscheinlichkeiten entweder zeilenweise oder spaltenweise. Wichtig ist, dass die Wahrscheinlichkeiten, die von einem Zustand ausgehen, zusammen \\(1\\) ergeben."
    },
    {
      titel: "Zustandsvektor",
      text:
        "Ein Zustandsvektor beschreibt, mit welcher Wahrscheinlichkeit oder mit welchem Anteil sich das System gerade in den einzelnen Zuständen befindet."
    },
    {
      titel: "Ein Schritt weiter",
      text:
        "Um den nächsten Zustand zu berechnen, multipliziert man den aktuellen Zustandsvektor mit der Übergangsmatrix. Die genaue Reihenfolge hängt davon ab, ob man mit Zeilenvektoren oder Spaltenvektoren arbeitet."
    },
    {
      titel: "Mehrere Schritte",
      text:
        "Mehrere Schritte berechnet man durch wiederholte Multiplikation mit der Übergangsmatrix. Nach zwei Schritten verwendet man zum Beispiel die Matrix zweimal."
    },
    {
      titel: "Stationäre Verteilung",
      text:
        "Eine stationäre Verteilung ist ein Zustandsvektor, der sich durch die Übergangsmatrix nicht mehr verändert. Das bedeutet: Nach einem weiteren Schritt bleiben die Anteile gleich."
    },
    {
      titel: "Langzeitverhalten",
      text:
        "Bei vielen Markov-Ketten nähert sich der Zustandsvektor nach vielen Schritten einer festen Verteilung an. Diese beschreibt das langfristige Verhalten des Systems."
    }
  ],
  methoden: [
    {
      titel: "Methode: Übergangsmatrix aufstellen",
      schritte: [
        "Bestimme zuerst alle Zustände des Systems.",
        "Lege eine feste Reihenfolge der Zustände fest.",
        "Trage für jeden Zustand ein, mit welcher Wahrscheinlichkeit man in die möglichen nächsten Zustände gelangt.",
        "Achte darauf, dass alle Wahrscheinlichkeiten, die von einem Zustand ausgehen, zusammen \\(1\\) ergeben.",
        "Schreibe die Wahrscheinlichkeiten in eine Matrix.",
        "Kontrolliere, ob keine Wahrscheinlichkeit negativ oder grösser als \\(1\\) ist."
      ]
    },
    {
      titel: "Methode: Einen Schritt berechnen",
      schritte: [
        "Schreibe den aktuellen Zustandsvektor auf.",
        "Schreibe die Übergangsmatrix auf.",
        "Multipliziere den Zustandsvektor mit der Übergangsmatrix in der passenden Reihenfolge.",
        "Berechne jede Komponente des neuen Zustandsvektors.",
        "Kontrolliere, ob die Summe der neuen Wahrscheinlichkeiten wieder \\(1\\) ergibt."
      ]
    },
    {
      titel: "Methode: Mehrere Schritte berechnen",
      schritte: [
        "Berechne zuerst den Zustand nach einem Schritt.",
        "Verwende diesen neuen Zustandsvektor als Ausgangspunkt für den nächsten Schritt.",
        "Multipliziere erneut mit der Übergangsmatrix.",
        "Wiederhole das so oft, wie Schritte verlangt sind.",
        "Alternativ kannst du Potenzen der Übergangsmatrix verwenden.",
        "Kontrolliere bei jedem Schritt, ob die Wahrscheinlichkeiten zusammen \\(1\\) ergeben."
      ]
    },
    {
      titel: "Methode: Stationäre Verteilung bestimmen",
      schritte: [
        "Bezeichne die gesuchte stationäre Verteilung mit unbekannten Variablen.",
        "Setze fest, dass sich diese Verteilung durch die Übergangsmatrix nicht verändert.",
        "Formuliere daraus ein Gleichungssystem.",
        "Füge die Bedingung hinzu, dass alle Wahrscheinlichkeiten zusammen \\(1\\) ergeben.",
        "Löse das Gleichungssystem.",
        "Prüfe, ob alle Werte zwischen \\(0\\) und \\(1\\) liegen."
      ]
    },
    {
      titel: "Methode: Baumdiagramm zu Markov-Kette übersetzen",
      schritte: [
        "Lies die möglichen Zustände aus dem Baumdiagramm ab.",
        "Bestimme für jeden Zustand die Übergangswahrscheinlichkeiten zum nächsten Schritt.",
        "Ordne die Zustände in einer festen Reihenfolge.",
        "Trage die Übergangswahrscheinlichkeiten in die Matrix ein.",
        "Kontrolliere, ob jede Zeile oder Spalte gemäss deiner Konvention die Summe \\(1\\) hat."
      ]
    },
    {
      titel: "Methode: Ergebnis interpretieren",
      schritte: [
        "Lies jede Komponente des Zustandsvektors einem Zustand zu.",
        "Formuliere das Ergebnis in Worten.",
        "Achte darauf, ob es sich um Wahrscheinlichkeit, Anteil oder Prozent handelt.",
        "Wenn nach Langzeitverhalten gefragt ist, vergleiche mehrere Zustandsvektoren.",
        "Prüfe, ob sich die Werte stabilisieren."
      ]
    }
  ],
  merksaetze: [
    "Eine Markov-Kette beschreibt Übergänge zwischen Zuständen.",
    "Die Zukunft hängt nur vom aktuellen Zustand ab.",
    "Übergangswahrscheinlichkeiten liegen zwischen \\(0\\) und \\(1\\).",
    "Alle Wahrscheinlichkeiten, die von einem Zustand ausgehen, ergeben zusammen \\(1\\).",
    "Eine Übergangsmatrix enthält alle Übergangswahrscheinlichkeiten.",
    "Ein Zustandsvektor beschreibt die aktuelle Verteilung auf die Zustände.",
    "Mehrere Schritte berechnet man durch wiederholte Matrixmultiplikation.",
    "Eine stationäre Verteilung verändert sich beim Übergang nicht.",
    "Bei Markov-Ketten ist die Reihenfolge der Zustände wichtig.",
    "Zeilen- und Spaltenkonvention dürfen nicht vermischt werden."
  ],
  typischeFehler: [
    {
      fehler: "Man vermischt Zeilen- und Spaltenkonvention.",
      korrektur:
        "Lege am Anfang fest, ob von einem Zustand ausgehende Wahrscheinlichkeiten in Zeilen oder Spalten stehen. Danach musst du konsequent bleiben."
    },
    {
      fehler: "Die Wahrscheinlichkeiten ergeben zusammen nicht \\(1\\).",
      korrektur:
        "Alle Übergangswahrscheinlichkeiten, die von einem Zustand ausgehen, müssen zusammen \\(1\\) ergeben."
    },
    {
      fehler: "Man verwechselt Zustandsvektor und Übergangsmatrix.",
      korrektur:
        "Der Zustandsvektor beschreibt die aktuelle Verteilung. Die Übergangsmatrix beschreibt die Regeln für den nächsten Schritt."
    },
    {
      fehler: "Man verwendet die falsche Reihenfolge der Zustände.",
      korrektur:
        "Die Reihenfolge der Zustände muss in Vektor und Matrix gleich bleiben. Sonst werden Wahrscheinlichkeiten falsch zugeordnet."
    },
    {
      fehler: "Man denkt, die stationäre Verteilung sei immer der Anfangszustand.",
      korrektur:
        "Die stationäre Verteilung ist ein Zustand, der sich nach einem Übergang nicht verändert. Sie muss nicht mit dem Anfangszustand übereinstimmen."
    },
    {
      fehler: "Man interpretiert Matrixeinträge ohne Bedingung.",
      korrektur:
        "Ein Matrixeintrag ist eine bedingte Wahrscheinlichkeit: Er beschreibt einen Übergang unter der Voraussetzung, dass man in einem bestimmten Zustand startet."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Zustände erkennen",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein einfaches Wettermodell hat die Zustände sonnig und regnerisch. Nenne die Zustände der Markov-Kette.",
      loesung: [
        "Die Zustände sind die möglichen Situationen des Systems.",
        "Hier gibt es zwei Zustände.",
        "Zustand 1: sonnig.",
        "Zustand 2: regnerisch."
      ]
    },
    {
      titel: "Aufgabe 2: Übergangswahrscheinlichkeiten prüfen",
      schwierigkeit: "einfach",
      aufgabe:
        "Von Zustand A geht das System mit Wahrscheinlichkeit \\(0.7\\) nach A und mit Wahrscheinlichkeit \\(0.3\\) nach B. Prüfe, ob diese Wahrscheinlichkeiten gültig sind.",
      loesung: [
        "Übergangswahrscheinlichkeiten müssen zwischen \\(0\\) und \\(1\\) liegen.",
        "\\(0.7\\) und \\(0.3\\) erfüllen diese Bedingung.",
        "Ausserdem müssen alle ausgehenden Wahrscheinlichkeiten zusammen \\(1\\) ergeben.",
        "\\(0.7+0.3=1\\).",
        "Die Wahrscheinlichkeiten sind also gültig."
      ]
    },
    {
      titel: "Aufgabe 3: Übergangsmatrix aufstellen",
      schwierigkeit: "einfach",
      aufgabe:
        "Ein System hat die Zustände A und B. Von A geht es mit Wahrscheinlichkeit \\(0.8\\) nach A und mit \\(0.2\\) nach B. Von B geht es mit \\(0.4\\) nach A und mit \\(0.6\\) nach B. Stelle eine zeilenweise Übergangsmatrix auf.",
      loesung: [
        "Die Reihenfolge der Zustände sei A, B.",
        "Die erste Zeile beschreibt Übergänge von A.",
        "Von A nach A: \\(0.8\\), von A nach B: \\(0.2\\).",
        "Die zweite Zeile beschreibt Übergänge von B.",
        "Von B nach A: \\(0.4\\), von B nach B: \\(0.6\\).",
        "Also ist die Matrix \\(P=\\begin{pmatrix}0.8&0.2\\\\0.4&0.6\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Einen Schritt berechnen",
      schwierigkeit: "mittel",
      aufgabe:
        "Gegeben ist der Zustandsvektor \\(v_0=(1,0)\\) und die Übergangsmatrix \\(P=\\begin{pmatrix}0.8&0.2\\\\0.4&0.6\\end{pmatrix}\\). Berechne \\(v_1=v_0P\\).",
      loesung: [
        "Der Startvektor ist \\(v_0=(1,0)\\).",
        "Multipliziere \\(v_0\\) mit \\(P\\).",
        "Erste Komponente: \\(1\\cdot0.8+0\\cdot0.4=0.8\\).",
        "Zweite Komponente: \\(1\\cdot0.2+0\\cdot0.6=0.2\\).",
        "Also ist \\(v_1=(0.8,0.2)\\).",
        "Die Summe ist \\(0.8+0.2=1\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Zweiten Schritt berechnen",
      schwierigkeit: "mittel",
      aufgabe:
        "Verwende \\(v_1=(0.8,0.2)\\) und \\(P=\\begin{pmatrix}0.8&0.2\\\\0.4&0.6\\end{pmatrix}\\). Berechne \\(v_2=v_1P\\).",
      loesung: [
        "Multipliziere \\(v_1\\) mit \\(P\\).",
        "Erste Komponente: \\(0.8\\cdot0.8+0.2\\cdot0.4\\).",
        "Das ist \\(0.64+0.08=0.72\\).",
        "Zweite Komponente: \\(0.8\\cdot0.2+0.2\\cdot0.6\\).",
        "Das ist \\(0.16+0.12=0.28\\).",
        "Also ist \\(v_2=(0.72,0.28)\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Matrixeintrag deuten",
      schwierigkeit: "mittel",
      aufgabe:
        "In der Matrix \\(P=\\begin{pmatrix}0.8&0.2\\\\0.4&0.6\\end{pmatrix}\\) werden Zeilen als Startzustände gelesen. Was bedeutet der Eintrag \\(0.4\\)?",
      loesung: [
        "Die Zeilen beschreiben die Startzustände.",
        "Die zweite Zeile gehört also zum Startzustand B.",
        "Die erste Spalte gehört zum Zielzustand A.",
        "Der Eintrag \\(0.4\\) bedeutet daher:",
        "Wenn das System aktuell in Zustand B ist, wechselt es im nächsten Schritt mit Wahrscheinlichkeit \\(0.4\\) nach Zustand A."
      ]
    },
    {
      titel: "Aufgabe 7: Stationäre Verteilung bei zwei Zuständen",
      schwierigkeit: "schwer",
      aufgabe:
        "Bestimme die stationäre Verteilung für \\(P=\\begin{pmatrix}0.8&0.2\\\\0.4&0.6\\end{pmatrix}\\) mit Zeilenvektoren.",
      loesung: [
        "Sei die stationäre Verteilung \\(v=(x,y)\\).",
        "Dann muss \\(vP=v\\) gelten.",
        "Also gilt \\((x,y)\\begin{pmatrix}0.8&0.2\\\\0.4&0.6\\end{pmatrix}=(x,y)\\).",
        "Daraus folgt für die erste Komponente: \\(0.8x+0.4y=x\\).",
        "Umformen ergibt \\(0.4y=0.2x\\), also \\(x=2y\\).",
        "Zusätzlich gilt \\(x+y=1\\).",
        "Setze \\(x=2y\\) ein: \\(2y+y=1\\).",
        "Also \\(3y=1\\), somit \\(y=\\frac{1}{3}\\).",
        "Dann ist \\(x=\\frac{2}{3}\\).",
        "Die stationäre Verteilung ist \\(v=\\left(\\frac{2}{3},\\frac{1}{3}\\right)\\)."
      ]
    },
    {
      titel: "Aufgabe 8: Langzeitverhalten interpretieren",
      schwierigkeit: "schwer",
      aufgabe:
        "Eine Markov-Kette hat langfristig die stationäre Verteilung \\(v=\\left(\\frac{2}{3},\\frac{1}{3}\\right)\\). Interpretiere das Ergebnis.",
      loesung: [
        "Die erste Komponente gehört zum ersten Zustand.",
        "Die zweite Komponente gehört zum zweiten Zustand.",
        "Langfristig befindet sich das System ungefähr mit Wahrscheinlichkeit \\(\\frac{2}{3}\\) im ersten Zustand.",
        "Mit Wahrscheinlichkeit \\(\\frac{1}{3}\\) befindet es sich im zweiten Zustand.",
        "In Prozent bedeutet das etwa \\(66.7\\%\\) im ersten Zustand und \\(33.3\\%\\) im zweiten Zustand."
      ]
    },
    {
      titel: "Aufgabe 9: Fehler in einer Übergangsmatrix finden",
      schwierigkeit: "mittel",
      aufgabe:
        "Ist \\(P=\\begin{pmatrix}0.5&0.6\\\\0.2&0.8\\end{pmatrix}\\) eine gültige zeilenweise Übergangsmatrix?",
      loesung: [
        "Bei einer zeilenweisen Übergangsmatrix muss jede Zeile die Summe \\(1\\) haben.",
        "Die erste Zeile hat Summe \\(0.5+0.6=1.1\\).",
        "Das ist grösser als \\(1\\).",
        "Die zweite Zeile hat Summe \\(0.2+0.8=1\\).",
        "Da die erste Zeile nicht gültig ist, ist die Matrix keine gültige Übergangsmatrix."
      ]
    },
    {
      titel: "Aufgabe 10: Anfangsverteilung deuten",
      schwierigkeit: "einfach",
      aufgabe:
        "Was bedeutet der Zustandsvektor \\(v=(0.25,0.75)\\) bei zwei Zuständen A und B?",
      loesung: [
        "Die erste Komponente gehört zu Zustand A.",
        "Die zweite Komponente gehört zu Zustand B.",
        "\\(0.25\\) bedeutet, dass das System mit Wahrscheinlichkeit \\(25\\%\\) in Zustand A ist.",
        "\\(0.75\\) bedeutet, dass das System mit Wahrscheinlichkeit \\(75\\%\\) in Zustand B ist.",
        "Die Summe ist \\(0.25+0.75=1\\), also ist der Zustandsvektor gültig."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was ist eine Markov-Kette?",
      antwort:
        "Eine Markov-Kette ist ein stochastisches Modell, bei dem ein System schrittweise zwischen Zuständen wechselt. Der nächste Zustand hängt nur vom aktuellen Zustand ab."
    },
    {
      frage: "Was bedeutet die Markov-Eigenschaft?",
      antwort:
        "Sie bedeutet, dass für den nächsten Schritt nur der aktuelle Zustand wichtig ist, nicht die gesamte Vorgeschichte."
    },
    {
      frage: "Was ist eine Übergangsmatrix?",
      antwort:
        "Eine Übergangsmatrix enthält alle Wahrscheinlichkeiten für den Übergang von einem Zustand in einen anderen Zustand."
    },
    {
      frage: "Was ist ein Zustandsvektor?",
      antwort:
        "Ein Zustandsvektor beschreibt, wie die Wahrscheinlichkeit oder der Anteil aktuell auf die verschiedenen Zustände verteilt ist."
    },
    {
      frage: "Wie berechnet man den nächsten Zustand?",
      antwort:
        "Man multipliziert den aktuellen Zustandsvektor mit der Übergangsmatrix, wobei man die gewählte Zeilen- oder Spaltenkonvention beachten muss."
    },
    {
      frage: "Was ist eine stationäre Verteilung?",
      antwort:
        "Eine stationäre Verteilung ist ein Zustandsvektor, der sich durch einen weiteren Übergang nicht verändert."
    },
    {
      frage: "Warum müssen Wahrscheinlichkeiten in einer Übergangsmatrix die Summe \\(1\\) ergeben?",
      antwort:
        "Weil von einem Zustand aus irgendein möglicher nächster Zustand eintreten muss. Die Gesamtwahrscheinlichkeit aller ausgehenden Möglichkeiten ist deshalb \\(1\\)."
    },
    {
      frage: "Was ist ein häufiger Fehler bei Markov-Ketten?",
      antwort:
        "Ein häufiger Fehler ist, Zeilen- und Spaltenkonvention zu vermischen oder die Reihenfolge der Zustände im Vektor und in der Matrix zu ändern."
    }
  ],
  nachtVorTest: [
    "Kannst du erklären, was eine Markov-Kette ist?",
    "Weisst du, was ein Zustand ist?",
    "Kannst du Übergangswahrscheinlichkeiten interpretieren?",
    "Kannst du eine Übergangsmatrix aufstellen?",
    "Kontrollierst du, ob die ausgehenden Wahrscheinlichkeiten zusammen \\(1\\) ergeben?",
    "Kannst du einen Zustandsvektor deuten?",
    "Kannst du einen Schritt mit Matrixmultiplikation berechnen?",
    "Kannst du mehrere Schritte durch wiederholte Multiplikation berechnen?",
    "Verwendest du konsequent dieselbe Reihenfolge der Zustände?",
    "Verwechselst du Zeilen- und Spaltenkonvention nicht?",
    "Kannst du erklären, was eine stationäre Verteilung ist?",
    "Kannst du ein Markov-Ergebnis in Worten interpretieren?"
  ]
},
   {
  id: "matrizen-lineare-gleichungssysteme",
  nummer: "19",
  titel: "Matrizen und lineare Gleichungssysteme",
  kurzbeschreibung:
    "Matrizen verstehen und anwenden: Matrixschreibweise, Addition, Multiplikation, Einheitsmatrix, inverse Matrix, lineare Gleichungssysteme und Gauß-Verfahren.",
  lernziele: [
    "Du kannst erklären, was eine Matrix ist.",
    "Du kannst die Dimension einer Matrix bestimmen.",
    "Du kannst Matrizen addieren und subtrahieren.",
    "Du kannst Matrizen mit Zahlen multiplizieren.",
    "Du kannst Matrizen miteinander multiplizieren.",
    "Du verstehst die Bedeutung der Einheitsmatrix.",
    "Du kannst lineare Gleichungssysteme als Matrix schreiben.",
    "Du kannst ein lineares Gleichungssystem mit dem Gauß-Verfahren lösen.",
    "Du kannst erkennen, ob ein Gleichungssystem eindeutig, unendlich viele oder keine Lösungen hat.",
    "Du erkennst typische Fehler bei Matrixmultiplikation und Zeilenumformungen."
  ],
  theorie: [
    {
      titel: "Was ist eine Matrix?",
      text:
        "Eine Matrix ist ein rechteckiges Zahlenschema aus Zeilen und Spalten. Man verwendet Matrizen, um Zahlen übersichtlich zu ordnen oder lineare Zusammenhänge kompakt darzustellen."
    },
    {
      titel: "Dimension einer Matrix",
      text:
        "Die Dimension einer Matrix gibt an, wie viele Zeilen und Spalten sie hat. Eine Matrix mit \\(m\\) Zeilen und \\(n\\) Spalten nennt man eine \\(m\\times n\\)-Matrix."
    },
    {
      titel: "Einträge einer Matrix",
      text:
        "Die einzelnen Zahlen in einer Matrix nennt man Einträge. Der Eintrag \\(a_{ij}\\) steht in der \\(i\\)-ten Zeile und der \\(j\\)-ten Spalte."
    },
    {
      titel: "Matrixaddition",
      text:
        "Matrizen kann man nur addieren, wenn sie dieselbe Dimension haben. Dann addiert man die entsprechenden Einträge miteinander."
    },
    {
      titel: "Multiplikation mit einer Zahl",
      text:
        "Multipliziert man eine Matrix mit einer Zahl, dann wird jeder einzelne Eintrag der Matrix mit dieser Zahl multipliziert."
    },
    {
      titel: "Matrixmultiplikation",
      text:
        "Bei der Matrixmultiplikation multipliziert man Zeilen der ersten Matrix mit Spalten der zweiten Matrix. Die Anzahl der Spalten der ersten Matrix muss zur Anzahl der Zeilen der zweiten Matrix passen."
    },
    {
      titel: "Warum ist Matrixmultiplikation nicht einfach eintragsweise?",
      text:
        "Bei der Matrixmultiplikation wird nicht einfach jeder Eintrag mit dem entsprechenden Eintrag multipliziert. Stattdessen entstehen die neuen Einträge durch Skalarprodukte von Zeilen und Spalten."
    },
    {
      titel: "Einheitsmatrix",
      text:
        "Die Einheitsmatrix ist eine quadratische Matrix mit Einsen auf der Hauptdiagonalen und Nullen sonst. Sie wirkt bei der Matrixmultiplikation ähnlich wie die Zahl \\(1\\) bei gewöhnlicher Multiplikation."
    },
    {
      titel: "Inverse Matrix",
      text:
        "Die inverse Matrix \\(A^{-1}\\) macht die Wirkung einer Matrix \\(A\\) rückgängig. Sie existiert nur bei bestimmten quadratischen Matrizen. Es gilt dann \\(A\\cdot A^{-1}=I\\)."
    },
    {
      titel: "Lineares Gleichungssystem",
      text:
        "Ein lineares Gleichungssystem besteht aus mehreren linearen Gleichungen mit mehreren Unbekannten. Es kann eindeutig lösbar sein, unendlich viele Lösungen besitzen oder keine Lösung haben."
    },
    {
      titel: "Matrixschreibweise eines Gleichungssystems",
      text:
        "Ein lineares Gleichungssystem kann man kompakt als \\(A\\vec{x}=\\vec{b}\\) schreiben. Dabei ist \\(A\\) die Koeffizientenmatrix, \\(\\vec{x}\\) der Vektor der Unbekannten und \\(\\vec{b}\\) der Ergebnisvektor."
    },
    {
      titel: "Gauß-Verfahren",
      text:
        "Beim Gauß-Verfahren formt man ein lineares Gleichungssystem durch erlaubte Zeilenumformungen so um, dass man die Lösungen leicht ablesen oder durch Rückwärtseinsetzen bestimmen kann."
    }
  ],
  methoden: [
    {
      titel: "Methode: Dimension einer Matrix bestimmen",
      schritte: [
        "Zähle zuerst die Anzahl der Zeilen.",
        "Zähle danach die Anzahl der Spalten.",
        "Schreibe die Dimension als Zeilen mal Spalten.",
        "Eine Matrix mit \\(2\\) Zeilen und \\(3\\) Spalten ist eine \\(2\\times3\\)-Matrix.",
        "Achte darauf, nicht Spalten und Zeilen zu vertauschen."
      ]
    },
    {
      titel: "Methode: Matrizen addieren",
      schritte: [
        "Prüfe zuerst, ob beide Matrizen dieselbe Dimension haben.",
        "Wenn nicht, ist die Addition nicht definiert.",
        "Wenn ja, addiere die entsprechenden Einträge.",
        "Der Eintrag oben links wird mit dem Eintrag oben links addiert.",
        "Führe das für alle Einträge durch.",
        "Die Ergebnismatrix hat dieselbe Dimension wie die Ausgangsmatrizen."
      ]
    },
    {
      titel: "Methode: Matrix mit einer Zahl multiplizieren",
      schritte: [
        "Nimm die gegebene Zahl als Faktor.",
        "Multipliziere jeden Eintrag der Matrix mit diesem Faktor.",
        "Achte besonders auf negative Vorzeichen.",
        "Schreibe die neue Matrix mit den berechneten Einträgen auf.",
        "Kontrolliere, ob die Dimension gleich geblieben ist."
      ]
    },
    {
      titel: "Methode: Matrizen multiplizieren",
      schritte: [
        "Prüfe zuerst, ob die Multiplikation überhaupt möglich ist.",
        "Die Spaltenzahl der ersten Matrix muss gleich der Zeilenzahl der zweiten Matrix sein.",
        "Der Eintrag in Zeile \\(i\\) und Spalte \\(j\\) entsteht aus Zeile \\(i\\) der ersten Matrix und Spalte \\(j\\) der zweiten Matrix.",
        "Multipliziere passende Einträge und addiere die Produkte.",
        "Wiederhole das für alle Zeilen-Spalten-Kombinationen.",
        "Die Ergebnismatrix hat so viele Zeilen wie die erste Matrix und so viele Spalten wie die zweite Matrix."
      ]
    },
    {
      titel: "Methode: Gleichungssystem als Matrix schreiben",
      schritte: [
        "Ordne die Unbekannten in einer festen Reihenfolge, zum Beispiel \\(x,y,z\\).",
        "Schreibe die Koeffizienten jeder Gleichung in eine Zeile der Matrix.",
        "Schreibe die Unbekannten als Vektor \\(\\vec{x}\\).",
        "Schreibe die rechten Seiten als Ergebnisvektor \\(\\vec{b}\\).",
        "Formuliere das System als \\(A\\vec{x}=\\vec{b}\\).",
        "Achte darauf, fehlende Variablen mit dem Koeffizienten \\(0\\) einzutragen."
      ]
    },
    {
      titel: "Methode: Gauß-Verfahren anwenden",
      schritte: [
        "Schreibe das Gleichungssystem als erweiterte Matrix.",
        "Verwende erlaubte Zeilenumformungen.",
        "Ziel ist es, unter den führenden Einträgen Nullen zu erzeugen.",
        "Bringe die Matrix in Dreiecksform oder Stufenform.",
        "Löse danach durch Rückwärtseinsetzen.",
        "Prüfe die Lösung durch Einsetzen in die ursprünglichen Gleichungen."
      ]
    },
    {
      titel: "Methode: Lösungsfälle erkennen",
      schritte: [
        "Führe das Gauß-Verfahren bis zur Stufenform durch.",
        "Entsteht eine widersprüchliche Zeile wie \\(0=5\\), gibt es keine Lösung.",
        "Entstehen freie Variablen ohne Widerspruch, gibt es unendlich viele Lösungen.",
        "Gibt es für jede Variable eine eindeutige Bestimmung, gibt es genau eine Lösung.",
        "Formuliere das Ergebnis klar als eindeutig, keine Lösung oder unendlich viele Lösungen."
      ]
    }
  ],
  merksaetze: [
    "Eine Matrix ist ein Zahlenschema aus Zeilen und Spalten.",
    "Die Dimension schreibt man als Zeilen mal Spalten.",
    "Matrizen können nur addiert werden, wenn sie dieselbe Dimension haben.",
    "Bei der Multiplikation mit einer Zahl wird jeder Eintrag multipliziert.",
    "Matrixmultiplikation bedeutet Zeile mal Spalte.",
    "Bei \\(A\\cdot B\\) muss die Spaltenzahl von \\(A\\) zur Zeilenzahl von \\(B\\) passen.",
    "Matrixmultiplikation ist im Allgemeinen nicht kommutativ.",
    "Die Einheitsmatrix wirkt wie die Zahl \\(1\\) bei Matrizen.",
    "Ein lineares Gleichungssystem kann als \\(A\\vec{x}=\\vec{b}\\) geschrieben werden.",
    "Beim Gauß-Verfahren sind Zeilenumformungen das zentrale Werkzeug."
  ],
  typischeFehler: [
    {
      fehler: "Man verwechselt Zeilen und Spalten bei der Dimension.",
      korrektur:
        "Die Dimension wird immer als Zeilen mal Spalten angegeben. Eine Matrix mit \\(3\\) Zeilen und \\(2\\) Spalten ist eine \\(3\\times2\\)-Matrix."
    },
    {
      fehler: "Man addiert Matrizen verschiedener Dimension.",
      korrektur:
        "Matrizenaddition ist nur möglich, wenn beide Matrizen exakt dieselbe Dimension haben."
    },
    {
      fehler: "Man multipliziert Matrizen eintragsweise.",
      korrektur:
        "Bei der Matrixmultiplikation rechnet man Zeile mal Spalte. Es werden Produkte addiert, nicht einfach entsprechende Einträge multipliziert."
    },
    {
      fehler: "Man denkt, \\(A\\cdot B\\) sei immer gleich \\(B\\cdot A\\).",
      korrektur:
        "Matrixmultiplikation ist im Allgemeinen nicht kommutativ. Die Reihenfolge ist wichtig."
    },
    {
      fehler: "Man vergisst fehlende Variablen beim Aufstellen der Koeffizientenmatrix.",
      korrektur:
        "Fehlt eine Variable in einer Gleichung, muss man den Koeffizienten \\(0\\) eintragen."
    },
    {
      fehler: "Man macht beim Gauß-Verfahren unerlaubte Spaltenumformungen.",
      korrektur:
        "Beim normalen Lösen eines Gleichungssystems verwendet man Zeilenumformungen. Spaltenumformungen verändern die Bedeutung der Variablen."
    },
    {
      fehler: "Man erkennt eine Widerspruchszeile nicht.",
      korrektur:
        "Eine Zeile wie \\(0x+0y+0z=4\\) ist unmöglich. Dann hat das Gleichungssystem keine Lösung."
    }
  ],
  aufgaben: [
    {
      titel: "Aufgabe 1: Dimension bestimmen",
      schwierigkeit: "einfach",
      aufgabe:
        "Bestimme die Dimension der Matrix \\(A=\\begin{pmatrix}1&2&3\\\\4&5&6\\end{pmatrix}\\).",
      loesung: [
        "Die Matrix hat \\(2\\) Zeilen.",
        "Sie hat \\(3\\) Spalten.",
        "Die Dimension lautet daher \\(2\\times3\\).",
        "Also ist \\(A\\) eine \\(2\\times3\\)-Matrix."
      ]
    },
    {
      titel: "Aufgabe 2: Matrizen addieren",
      schwierigkeit: "einfach",
      aufgabe:
        "Berechne \\(\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}+\\begin{pmatrix}5&1\\\\-2&0\\end{pmatrix}\\).",
      loesung: [
        "Beide Matrizen haben die Dimension \\(2\\times2\\).",
        "Man addiert die entsprechenden Einträge.",
        "Oben links: \\(1+5=6\\).",
        "Oben rechts: \\(3+1=4\\).",
        "Unten links: \\(2+(-2)=0\\).",
        "Unten rechts: \\(4+0=4\\).",
        "Das Ergebnis ist \\(\\begin{pmatrix}6&4\\\\0&4\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 3: Matrix mit Zahl multiplizieren",
      schwierigkeit: "einfach",
      aufgabe:
        "Berechne \\(3\\cdot\\begin{pmatrix}2&-1\\\\0&4\\end{pmatrix}\\).",
      loesung: [
        "Multipliziere jeden Eintrag mit \\(3\\).",
        "\\(3\\cdot2=6\\).",
        "\\(3\\cdot(-1)=-3\\).",
        "\\(3\\cdot0=0\\).",
        "\\(3\\cdot4=12\\).",
        "Das Ergebnis ist \\(\\begin{pmatrix}6&-3\\\\0&12\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 4: Matrixmultiplikation prüfen",
      schwierigkeit: "einfach",
      aufgabe:
        "Kann man eine \\(2\\times3\\)-Matrix mit einer \\(3\\times4\\)-Matrix multiplizieren? Welche Dimension hat das Ergebnis?",
      loesung: [
        "Bei \\(A\\cdot B\\) muss die Spaltenzahl von \\(A\\) gleich der Zeilenzahl von \\(B\\) sein.",
        "Die erste Matrix hat \\(3\\) Spalten.",
        "Die zweite Matrix hat \\(3\\) Zeilen.",
        "Die Multiplikation ist also möglich.",
        "Das Ergebnis hat die Zeilenzahl der ersten Matrix und die Spaltenzahl der zweiten Matrix.",
        "Also hat das Ergebnis die Dimension \\(2\\times4\\)."
      ]
    },
    {
      titel: "Aufgabe 5: Matrizen multiplizieren",
      schwierigkeit: "mittel",
      aufgabe:
        "Berechne \\(\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\cdot\\begin{pmatrix}2&0\\\\1&5\\end{pmatrix}\\).",
      loesung: [
        "Berechne jeden Eintrag durch Zeile mal Spalte.",
        "Oben links: \\(1\\cdot2+2\\cdot1=4\\).",
        "Oben rechts: \\(1\\cdot0+2\\cdot5=10\\).",
        "Unten links: \\(3\\cdot2+4\\cdot1=10\\).",
        "Unten rechts: \\(3\\cdot0+4\\cdot5=20\\).",
        "Das Ergebnis ist \\(\\begin{pmatrix}4&10\\\\10&20\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 6: Einheitsmatrix erkennen",
      schwierigkeit: "einfach",
      aufgabe:
        "Gib die \\(3\\times3\\)-Einheitsmatrix an.",
      loesung: [
        "Die Einheitsmatrix hat Einsen auf der Hauptdiagonalen.",
        "Alle anderen Einträge sind \\(0\\).",
        "Also ist \\(I=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 7: Gleichungssystem als Matrix schreiben",
      schwierigkeit: "mittel",
      aufgabe:
        "Schreibe das Gleichungssystem \\(2x+y=5\\), \\(3x-2y=4\\) in der Form \\(A\\vec{x}=\\vec{b}\\).",
      loesung: [
        "Die Unbekannten sind \\(x\\) und \\(y\\).",
        "Die Koeffizienten der ersten Gleichung sind \\(2\\) und \\(1\\).",
        "Die Koeffizienten der zweiten Gleichung sind \\(3\\) und \\(-2\\).",
        "Die rechte Seite ist \\(5\\) und \\(4\\).",
        "Also gilt \\(\\begin{pmatrix}2&1\\\\3&-2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}5\\\\4\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 8: Gauß-Verfahren einfach",
      schwierigkeit: "mittel",
      aufgabe:
        "Löse das Gleichungssystem \\(x+y=5\\), \\(2x-y=1\\).",
      loesung: [
        "Aus der ersten Gleichung folgt \\(y=5-x\\).",
        "Setze das in die zweite Gleichung ein.",
        "\\(2x-(5-x)=1\\).",
        "Das ergibt \\(2x-5+x=1\\).",
        "Also \\(3x=6\\).",
        "Daraus folgt \\(x=2\\).",
        "Setze \\(x=2\\) in \\(x+y=5\\) ein.",
        "Dann ist \\(2+y=5\\), also \\(y=3\\).",
        "Die Lösung ist \\((x,y)=(2,3)\\)."
      ]
    },
    {
      titel: "Aufgabe 9: Keine Lösung erkennen",
      schwierigkeit: "mittel",
      aufgabe:
        "Untersuche das Gleichungssystem \\(x+y=2\\), \\(2x+2y=7\\).",
      loesung: [
        "Multipliziert man die erste Gleichung mit \\(2\\), erhält man \\(2x+2y=4\\).",
        "Die zweite Gleichung lautet aber \\(2x+2y=7\\).",
        "Das kann nicht gleichzeitig stimmen.",
        "Die beiden Gleichungen widersprechen sich.",
        "Also hat das Gleichungssystem keine Lösung."
      ]
    },
    {
      titel: "Aufgabe 10: Unendlich viele Lösungen erkennen",
      schwierigkeit: "mittel",
      aufgabe:
        "Untersuche das Gleichungssystem \\(x+y=4\\), \\(2x+2y=8\\).",
      loesung: [
        "Die zweite Gleichung ist genau das Doppelte der ersten Gleichung.",
        "Sie enthält also keine neue Information.",
        "Es gibt nicht nur eine einzige Lösung.",
        "Alle Zahlenpaare mit \\(x+y=4\\) sind Lösungen.",
        "Zum Beispiel ist \\(y=4-x\\).",
        "Das Gleichungssystem hat unendlich viele Lösungen."
      ]
    },
    {
      titel: "Aufgabe 11: Fehlende Variable in Matrix",
      schwierigkeit: "schwer",
      aufgabe:
        "Schreibe \\(2x+3z=7\\), \\(x-y+z=1\\) als Matrixgleichung mit den Variablen \\(x,y,z\\).",
      loesung: [
        "Die Reihenfolge der Variablen ist \\(x,y,z\\).",
        "In der ersten Gleichung fehlt \\(y\\).",
        "Deshalb ist der Koeffizient von \\(y\\) gleich \\(0\\).",
        "Die erste Zeile der Koeffizientenmatrix ist \\((2,0,3)\\).",
        "Die zweite Zeile ist \\((1,-1,1)\\).",
        "Also gilt \\(\\begin{pmatrix}2&0&3\\\\1&-1&1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=\\begin{pmatrix}7\\\\1\\end{pmatrix}\\)."
      ]
    },
    {
      titel: "Aufgabe 12: Nicht kommutative Multiplikation",
      schwierigkeit: "schwer",
      aufgabe:
        "Zeige mit \\(A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\) und \\(B=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}\\), dass \\(A\\cdot B\\) nicht gleich \\(B\\cdot A\\) sein muss.",
      loesung: [
        "Berechne zuerst \\(A\\cdot B\\).",
        "\\(A\\cdot B=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}\\).",
        "Berechne nun \\(B\\cdot A\\).",
        "\\(B\\cdot A=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}\\).",
        "Die Ergebnisse sind verschieden.",
        "Also ist Matrixmultiplikation im Allgemeinen nicht kommutativ."
      ]
    }
  ],
  muendlich: [
    {
      frage: "Was ist eine Matrix?",
      antwort:
        "Eine Matrix ist ein rechteckiges Zahlenschema aus Zeilen und Spalten. Sie dient dazu, Zahlen oder lineare Zusammenhänge übersichtlich darzustellen."
    },
    {
      frage: "Wie bestimmt man die Dimension einer Matrix?",
      antwort:
        "Man zählt zuerst die Zeilen und dann die Spalten. Eine Matrix mit \\(m\\) Zeilen und \\(n\\) Spalten hat die Dimension \\(m\\times n\\)."
    },
    {
      frage: "Wann darf man zwei Matrizen addieren?",
      antwort:
        "Man darf zwei Matrizen nur addieren, wenn sie dieselbe Dimension haben. Dann addiert man die entsprechenden Einträge."
    },
    {
      frage: "Wie funktioniert Matrixmultiplikation?",
      antwort:
        "Man multipliziert Zeilen der ersten Matrix mit Spalten der zweiten Matrix. Jeder neue Eintrag entsteht durch ein Skalarprodukt."
    },
    {
      frage: "Welche Bedingung gilt für \\(A\\cdot B\\)?",
      antwort:
        "Die Anzahl der Spalten von \\(A\\) muss gleich der Anzahl der Zeilen von \\(B\\) sein."
    },
    {
      frage: "Was ist die Einheitsmatrix?",
      antwort:
        "Die Einheitsmatrix ist eine quadratische Matrix mit Einsen auf der Hauptdiagonalen und Nullen sonst. Sie wirkt bei der Matrixmultiplikation wie die Zahl \\(1\\)."
    },
    {
      frage: "Wie schreibt man ein lineares Gleichungssystem als Matrixgleichung?",
      antwort:
        "Man schreibt die Koeffizienten in eine Matrix \\(A\\), die Unbekannten in den Vektor \\(\\vec{x}\\) und die rechten Seiten in den Vektor \\(\\vec{b}\\). Dann gilt \\(A\\vec{x}=\\vec{b}\\)."
    },
    {
      frage: "Was macht man beim Gauß-Verfahren?",
      antwort:
        "Man formt ein Gleichungssystem mit erlaubten Zeilenumformungen so um, dass man die Lösungen leichter ablesen oder durch Rückwärtseinsetzen berechnen kann."
    },
    {
      frage: "Welche Lösungsfälle gibt es bei linearen Gleichungssystemen?",
      antwort:
        "Es kann genau eine Lösung, unendlich viele Lösungen oder keine Lösung geben."
    }
  ],
  nachtVorTest: [
    "Kannst du erklären, was eine Matrix ist?",
    "Kannst du die Dimension einer Matrix korrekt als Zeilen mal Spalten angeben?",
    "Weisst du, wann Matrizen addiert werden dürfen?",
    "Kannst du eine Matrix mit einer Zahl multiplizieren?",
    "Kannst du prüfen, ob zwei Matrizen multipliziert werden dürfen?",
    "Kannst du Matrixmultiplikation als Zeile mal Spalte durchführen?",
    "Weisst du, dass Matrixmultiplikation nicht immer kommutativ ist?",
    "Kennst du die Einheitsmatrix?",
    "Kannst du ein lineares Gleichungssystem als \\(A\\vec{x}=\\vec{b}\\) schreiben?",
    "Trägst du fehlende Variablen mit Koeffizient \\(0\\) ein?",
    "Kannst du das Gauß-Verfahren grundsätzlich anwenden?",
    "Kannst du die Fälle eindeutig, keine Lösung und unendlich viele Lösungen unterscheiden?"
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
                ${renderMathText(thema.titel)}
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
  typesetMathematik(content);
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
        <p class="sf-math-kicker">Thema ${renderMathText(thema.nummer)}</p>
        <h2>${renderMathText(thema.titel)}</h2>
        <p>${renderMathText(thema.kurzbeschreibung)}</p>
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
      <h3>${renderMathText(title)}</h3>
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
            <h4>${renderMathText(item.titel)}</h4>
            <p>${renderMathText(item.text)}</p>
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
              <span>${renderMathText(methode.titel)}</span>
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
            <p>${renderMathText(item.fehler)}</p>
            <h4>Korrektur</h4>
            <p>${renderMathText(item.korrektur)}</p>
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
              <h4>${renderMathText(exercise.titel)}</h4>
              <span>${renderMathText(exercise.schwierigkeit)}</span>
            </div>
            <p>${renderMathText(exercise.aufgabe)}</p>
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
            <h4>${renderMathText(item.frage)}</h4>
            <p>${renderMathText(item.antwort)}</p>
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
      ${items.map(item => `<li>${renderMathText(item)}</li>`).join("")}
    </ul>
  `;
}


function renderMathematikOrderedList(items) {
  return `
    <ol class="sf-math-ordered-list">
      ${items.map(item => `<li>${renderMathText(removeLeadingStepNumber(item))}</li>`).join("")}
    </ol>
  `;
}


function renderMathematikChecklist(items) {
  return `
    <div class="sf-math-checklist">
      ${items.map(item => `
        <label>
          <input type="checkbox">
          <span>${renderMathText(item)}</span>
        </label>
      `).join("")}
    </div>
  `;
}


function removeLeadingStepNumber(value) {
  return String(value).replace(/^\s*\d+\.\s*/, "");
}


function attachMathematikInteractions(root) {
  const accordionButtons = root.querySelectorAll(".sf-math-accordion-toggle");

  accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".sf-math-accordion-item");
      item.classList.toggle("open");

      typesetMathematik(item);
    });
  });

  const solutionButtons = root.querySelectorAll(".sf-math-solution-button");

  solutionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const solution = button.nextElementSibling;
      const isOpen = solution.classList.toggle("open");

      button.textContent = isOpen ? "Lösung ausblenden" : "Lösung anzeigen";

      if (isOpen) {
        typesetMathematik(solution);
      }
    });
  });
}


function typesetMathematik(element) {
  if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
    window.MathJax.typesetPromise([element]).catch(function(error) {
      console.error("MathJax Fehler:", error);
    });
  }
}


function renderMathText(value) {
  return escapeHTML(value);
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
  max-height: calc(100vh - 40px);
  overflow-y: auto;
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
  padding-right: 4px;
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

    .sf-math-card mjx-container {
      overflow-x: auto;
      overflow-y: hidden;
      max-width: 100%;
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
