# Ein strukturiertes Projekt

Wir bauen einen recht einfachen Taschenrechner. Das Ziel dieser Aufgabe soll nicht die Komplexität der App sein, sondern das Verständnis für das Modularisierung von Code und die anschließende Konfiguration des Projekts mit *Webpack*. Dies wird den Einstieg und das Lesen und weitere Konfigurationsdateien wie die von *vite* oder die *package.json* des **node package managers**. Die Grundfunktionen die vorhanden sein sollen werden eingangs gezeigt.


## Grundstruktur aufbauen und Modularisieren

1. Baue die gewohnte und bekannte Struktur des Projekts auf. 
2. Nun sollst diese gewohnte Struktur in weitere Ordner überführen. Es gibt einen *assets* Ordner, einen *modules* Ordner, einen *styles* Ordner, einen *templates* Ordner und die index.js. Diese Ordner und die *index.js* liegen im übergeordneten *src* Ordner.
3. Folgend werden einige grundlegende Anforderungen sowie Erklärungen mitgegeben, dir ist das Planen der Anwendung und ihrer Umsetzung überlassen:
    - Die *index.js* dient als sogenannter *entry-point*. Hier wird eine `main()` Funktion aufgerufen, welche alle anderen Funktionen ausführt.
    - Ziel ist es deinen Code in einzelnen Module zu unterteilen. Es gibt hier einige wichtige Regeln zu beachten:
      - Eine Funktion sollte immer nur eine Funktionalität erfüllen. *"Functions should do one thing. They should do it well. They should do it only" - Robert C. Martin*. Heißt, wenn du versucht, dass dein Funktion Inputfelder erst abgreift, als Array speichert und dann verrechnet, hast bereits zwei Funktionalitäten zu viel.
      - Modulnamen und Funktionamen sollten eine klare Struktur haben und für fremde LeserInnen schnell zu erfassen sein. Funktionen sollten mit einem Verb starten, dass die Funktionalität wiederspiegelt. Dabei sollten Namen aus dem Bereich der **Informatik** verwendent werden. Heißt konkret, wenn eine Funktion eine Rechnung durchführen soll auf einem Array könnte diese `performSubractOnArray` heißen. Dementsprechend sollten auch Modulnamen (Die Dateien in denen Funktionen liegen) entsprechend klar bezeichnet werden. Für das Beispiel, in dem mehrere Rechenfunktionen vorhanden sind, könnte sich `performArithmeticOperations.js`
      - Vermeide unterschiedliche Verbbezeichnungen für den gleich Vorgang. So wären das Abfragen eines *prompts* und die Durchführung trotz der unterschiedlichen Funktionalität mit `performXYZ...js` zu bezeichnen. Das Erstellen von einem 
      *DOM-Element* dazu im Gegensatz würden wir mit `createXYZ...js` bezeichnen.
      - Eine Funktion besitzt maximal 20 Zeilen an Code bei einer Zeichendichte von 80 Zeichen pro Zeile
    - Lasse deine App nebenbei im Live-Server laufen um zu überprüfen, du die `imports` und `exports` nutzt. Überlege wie das Nutzen von Modulen möglich ist.
    - Strukturiere deine Module in passende Ordner. Die Ordner sollten zusämmenhängende (z.B LocalStorage basierende Funktionen) Funktionalitäten zusammenfassen.

Solltest du nun das Projekt soweit in strukturierter Form aufgesetzt haben, mache ein Abnahme mit deiner/deinem TrainerIn. Passt die Abnahme, dann kannst du fortfahren.


## Bundeling und Weiteres mit Webpack
Webpack ist eine externes (also muss installiert werden) Tool um das Bündeln von Dateien wie JavaScript, CSS, SCSS, Bilder, URL-Pfade und vielem Weiterem zu vereinfachen. Im Hintergrund baut Webpack einen sogenannten *Dependency-Graphen*, welcher die Abhängigkeiten von Dateien zuordnen kann. *Plugins* sind Erweiterungen, die Funktionen wie einen eigenen Webserver (angebunden an einen Port z.B 3000), Transkompilierung in Babel für ältere Browser oder das Erzeugen eines Build auf Basis sogenannter *HTML-Templates* ermöglichen. Der Build ist der optimierte Code, welcher später auch im Produktionsprozess veröffentlicht wird. Dieser stellt einen wesentlichen Baustein im sogenannten *CI-CD* Zyklus dar. Wir werden im Kurs einige, aber wahrscheinlich nicht alle, Bausteine des Prozesses abdecken (Code,Build,Deploy). Es macht Sinn vor Beginn der eigenen Konfiguration das [Getting-Started](https://webpack.js.org/guides/getting-started/#using-a-configuration) einmal ausprobiert zu haben.

1. Initialisiere mit `npm init` ein leeres *npm package*
2. Installiere Webpack mit `npm install ...`
3. Installiere das *Path Modul*
4. Installiere das *Plugin html webpack*
5. Informiere dich wie du einen *styleloader* installieren kannst 
6. Informiere dich wie du einen *babelloader* installieren kannst
7. Kannst du dir erklären wieso du diese Installation gemacht hast? Lese die [Dokumentation](https://webpack.js.org/loaders/#root) und erfahre was *loader* sind und wofür wir *templates* brauchen. **Schicke dazu deiner Trainer oder deinem Trainer eine kurze Nachricht auf Slack.**
8. Erstelle eine `webpack.config.js` Datei
9. Importiere mit `require` das installierte *Path Modul* und das *HTML Plugin* und binde diese an Variablen
10. Für uns sind folgende Schlüssel relevant [mode](https://webpack.js.org/configuration/mode/#root),[entry](https://webpack.js.org/configuration/entry-context/#root),[output](https://webpack.js.org/concepts/output/#root),[devServer](https://webpack.js.org/configuration/dev-server/#root).
Es folgen außerdem zwei weitere *Objekte*, die vorgegeben werden

```js
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset/resource'
          },
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,

            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ],
                plugins: ["@babel/plugin-transform-runtime"],
                cacheDirectory: true
              }
            },
          }
        ],
    },
    plugins: [
       new HtmlWebpackPlugin({
          title: "Easy Calculator",
          filename: "index.html",
          template: 'src/templates/calculator.html'
       }),
       new BundleAnalyzerPlugin()
    ]
```
11. Mache dir (mit Hilfe der/des TrainerIn) ganz klar in den oberen Schritten passiert!
12. Füge nun der `package.json` einen `build` Befehl hinzu, welche der die `webpack.config.js` mit bei dem Build-Prozess beachtet (`npm build ...`). Anschließend geben wir noch einen `dev` Befehl für Webpack hinzu.
13. Teste mit `npm run build` aus, ob ein Build fehlerfrei gebaut wird.
14. Verläuft der Build positiv, kannst du die Links jeweils zum *script* und zur *css* heraus nehmen. Die CSS kann in der `index.js` mit `import "pfad/zur/css/style.css` eingebunden werden. Diese wird in der Index gebündelt und steht der HTML zur Verfügung.
15. Starte deine Anwendung im Terminal mit `npm run dev`

Du hast noch dein erstes *richtiges* Frontend Projekt aufgesetzt. Die Konfiguration von *webpack* in kommenden Unterricht *vite* kann mittels der *no-config* Option bei Erstellen eines Projekts geschehen. Jedoch sollte man mit Konfigurationsdateien umgehen können, da die Grundkonfiguration meist ergänzt werden muss. 
