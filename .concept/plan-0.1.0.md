Hier ist ein strukturierter **Fahrplan (Roadmap)** für die Entwicklung der ersten Version von **SiTA**, basierend auf deinem aktuellen Branch `feature/electron-mvp`. Der Fokus liegt auf einem schrittweisen, didaktisch sinnvollen Aufbau – von der Home-Row über Erweiterung der mittleren Reihe bis zur kompletten Tastatur.

---

## 🚀 Version 1 – Lernpfad & Funktionsübersicht

### **1. Level 1: Ausgangsposition (Home‑Row)**

- ✅ Darstellung der Home‑Row (ASDF – JKLÖ)
- ✅ Interaktive Übung „Home‑Row‑Tippen“ (die aktuelle Übung)
- 📊 Feedback: Geschwindigkeit & Genauigkeit

---

### **2. Level 2: Ergänzung der Nachbartasten H und G**

- 🧭 Einführung: Warum H und G?
- 📝 Neue Übung: gemischte Sequenzen aus Home‑Row + H/G
- 🎨 Farbunterstützung: markiere H (hellgrau), G (hellgrau) vs. Home‑Row (weiß)
- 🎯 Ziele: Muskelgedächtnis für mittlere Zeile ausbauen

---

### **3. Level 3: Obere Buchstabenreihe (QWERTZ)**

- 📚 Erklärungstext + Grafik: obere Zeile (Q W E R T Z U I O P Ü)
- 🧪 Übung: Sequenzen aus Home‑Row + H/G + obere Zeile
- 🎖️ Meilensteine: Min. Genauigkeit & Geschwindigkeit definieren

---

### **4. Level 4: Untere Buchstabenreihe**

- 📘 Erklärung + Grafik: untere Zeile (Y X C V B N M , . –)
- 🧩 Übung: Kombination Home‑Row + H/G + obere + untere Reihe
- 🏁 Abschließende Übung: Volles Alphabet‑Tippen

---

### **5. Bonus-Level: Erweiterungen & Interaktivität**

- 🎹 On‑Screen‑Tastatur: visuelle Rückmeldung beim Tippen
- 🏆 Highscores/Bestzeiten speichern (z. B. per JSON in `userData`)
- 🌙 Dark Mode, Theme‑Auswahl
- 🎧 Soundeffekte für richtig/falsch

---

## 🛠️ Umsetzungs‑Details & Meilensteine

| Aufgabe                                  | Verzeichnis / Modul                                    |
| ---------------------------------------- | ------------------------------------------------------ |
| Erklärungstexte mit Layout teilen        | `src/lessons/lesson-0N/explanation.html` + `style.css` |
| Übungscode auslagern                     | `src/lessons/lesson-0N/exercise.js`, `exercise.html`   |
| Gemeinsames Style + Layout-Template      | `src/shared/style.css`, `src/shared/layout.html`       |
| On-screen Tastatur-Komponente (optional) | `src/common/keyboard.js` + `keyboard.css`              |
| JSON zur Nutzerstatistik / Fortschritt   | `src/shared/userData.js`                               |
| Dashboard für Level-Auswahl              | `src/index.html`, `dashboard.js`, `dashboard.css`      |

---

## 🗓️ Entwicklungsschritte

1. **Setup:** Erstelle `lesson-02`-Ordner für H/G mit `explanation.html + exercise(.js/.css)`.
2. **Übungscode:** Passe `exercise.js` zu generischen Sequenzen an (verschiedene Buchstabenmengen).
3. **Feedback erweitern:** Lade Statistik (Übungsanzahl, Genauigkeit, WPM).
4. **Lektion 03: Obere Reihe** – Inhalte + Übungen analog zu Level 2.
5. **Dashboard & Navigation:** Einbinden in `index.html` mit Start-Links zu Lektionen.
6. **Optional:** On-screen Tastatur visualisieren.
7. **Tests & Feinschliff:** Korrektheit, Responsivität, Fehlerbehandlung.
8. **Release v1:** mit Windows & Linux Build, Dokumentation & Anleitung.

---

## 🔧 Code-Architektur

- 🧩 **Separation of Concerns:** HTML (Struktur), CSS (Design), JS (Logik)
- 📦 **Lesson-Module:** isoliert und erweiterbar (`lesson-01/02/03/...`)
- 🧯 **Shared Utilities:** Fortschrittsverwaltung & UI-Komponenten
- 🤸 **Skalierbarkeit:** neue Level integrieren leicht möglich

---

## ✅ Fazit

Das Ziel – begleitet durch kompakte Erklärungen, sequenzielle Übungen und optional interaktive Elemente – ergibt ein stimmiges Lernprogramm. Der modulare Aufbau in `src/lessons` sichert Wartbarkeit und Erweiterbarkeit.

Sag Bescheid, wenn du z. B. gezielte Code-Snippets für das Dashboard brauchst oder Hilfe bei Statistik/On‑Screen‑Tastatur willst!
