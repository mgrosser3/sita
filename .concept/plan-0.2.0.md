## ✅ Wann es **sinnvoll sein kann**, auf Vue oder React umzusteigen

| Vorteil                      | Beschreibung                                                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Komponentenstruktur**      | Wiederverwendbare UI-Bausteine wie `TypingExercise`, `LessonOverview`, `KeyboardDisplay` lassen sich klar und modular trennen. |
| **Zustandsverwaltung**       | Mit `useState`/`Vue reactive` kannst du z. B. Tippfortschritt, Fehler, aktuelle Übung etc. sauber verwalten.                   |
| **Routing & Navigation**     | Mehrseitige App mit z. B. `react-router`/`vue-router`: Lektionen → Übungen → Statistiken                                       |
| **Ökosystem**                | Viele vorgefertigte UI-Lösungen, Animationen, Tastatur-Handling, Accessibility, Testing etc.                                   |
| **Langfristige Wartbarkeit** | Besonders bei vielen Lektionen oder steigender Komplexität hilft ein Framework beim Strukturieren.                             |

---

## ❌ Wann du **bei Vanilla JS + HTML/CSS** bleiben kannst (wie aktuell)

| Vorteil                    | Beschreibung                                                             |
| -------------------------- | ------------------------------------------------------------------------ |
| **Einfacher Einstieg**     | Kein Build-Setup, keine Abstraktion – direkt im DOM arbeiten             |
| **Geringe Komplexität**    | Solange du nur eine Handvoll Seiten hast, ist die Logik gut überschaubar |
| **Performance**            | Keine zusätzlichen Framework-Overheads                                   |
| **Weniger Abhängigkeiten** | Weniger Probleme beim Bauen und Verteilen (gerade mit Electron)          |

---

## 🔍 Konkreter Bezug zu deinem Projekt „SiTA“

| Aktueller Zustand                                             | Framework sinnvoll? | Begründung                                     |
| ------------------------------------------------------------- | ------------------- | ---------------------------------------------- |
| Nur wenige HTML-Seiten, einfache Logik                        | **Nein**            | Dein MVP ist schlank, Vanilla JS reicht        |
| Viele Lektionen, UI-Komponenten wiederholen sich              | **Eher ja**         | Wiederverwendbare Components wären hilfreich   |
| Später Statistiken, Benutzerverwaltung, Fortschritt speichern | **Ja**              | Dann lohnt sich State-Management deutlich mehr |

---

## 🧭 Empfehlung

- 🎯 **Für dein MVP**: Fahre mit **Vanilla JS + modularem Aufbau** fort – es ist schnell, einfach und tut, was es soll.
- 🚀 **Für spätere Versionen / Skalierung**: Plane ggf. einen Wechsel zu **Vue** (einfacher Einstieg) oder **React** (größeres Ökosystem), besonders wenn du:

  - viele Lektionen/Seiten hast
  - Benutzerstatistiken speichern willst
  - dynamisch Inhalte laden/verwalten möchtest
