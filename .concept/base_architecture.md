## 📁 Projektstruktur-Vorschlag

```
sita/
├── assets/                # Bilder, Icons, Schriftarten etc.
│   ├── images/
│   └── fonts/
│
├── data/                  # Lektionen, Übungen, statische Inhalte
│   ├── lessons/
│   │   ├── lesson-01-home-row.json
│   │   ├── lesson-02-hg-row.json
│   │   └── ...
│   └── metadata.json      # Übersicht: Titel, Reihenfolge, etc.
│
├── src/                   # Anwendungscode
│   ├── components/        # UI-Komponenten (modular, später in Framework übertragbar)
│   │   ├── Keyboard.js
│   │   ├── TypingExercise.js
│   │   └── ProgressBar.js
│   │
│   ├── views/             # Seitenansichten (HTML + JS Initialisierung)
│   │   ├── Home.html
│   │   ├── LessonView.html
│   │   └── Stats.html
│   │
│   ├── controllers/       # Logik zur Steuerung der Anwendung
│   │   ├── LessonController.js
│   │   ├── TypingController.js
│   │   └── NavigationController.js
│   │
│   ├── styles/            # CSS-Dateien (ggf. später Tailwind, SCSS, etc.)
│   │   ├── main.css
│   │   └── components/
│   │       └── keyboard.css
│   │
│   └── main.js            # Einstiegspunkt für das Frontend
│
├── main.js                # Electron main process
├── preload.js             # Electron preload (optional für IPC)
├── package.json
└── README.md
```

---

## 💡 Vorteile dieser Struktur

| Bereich            | Vorteil                                                                              |
| ------------------ | ------------------------------------------------------------------------------------ |
| **`data/`**        | Trennung von Content & Code → Lektionen erweiterbar, sogar aus externen Quellen      |
| **`components/`**  | Modulare Bausteine (Keyboard, Übung etc.) → 1:1 in React/Vue übertragbar             |
| **`controllers/`** | Geschäftslogik bleibt klar getrennt von der UI                                       |
| **`views/`**       | Jede „Seite“ als eigenständige HTML-Ansicht → später von Router übernehmbar          |
| **`styles/`**      | CSS gut strukturiert, einfacher Austausch gegen SCSS oder Utility-Frameworks möglich |

---

## 📌 Beispiel: `lesson-01-home-row.json`

```json
{
  "id": "lesson-01",
  "title": "Home Row Basics",
  "description": "Learn the base position on the keyboard (ASDF - JKLÖ).",
  "exercises": [
    {
      "id": "ex-01",
      "text": "asdf jklö",
      "hint": "Focus on finger positioning."
    },
    {
      "id": "ex-02",
      "text": "fj fj fj dj",
      "hint": "Use index fingers for F and J."
    }
  ]
}
```

---

## 🔄 Späterer Umstieg auf Frameworks

Wenn du auf **Vue** oder **React** umsteigen willst, kannst du fast alles direkt übernehmen:

- `components/*.js` → Vue/React-Komponenten
- `controllers/*.js` → Composables / Services / Hooks
- `data/*.json` → bleibt gleich
- `views/*.html` → werden geroutete Seiten oder Single Page Components
