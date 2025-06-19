# 🧠 SiTA – Typing Trainer for the 10-Finger System

**SiTA** (short for **S**mart **i**nteractive **T**yping **A**pplication) is a cross-platform, open-source learning software designed to teach the **10-finger typing system** from the ground up.  
Built with [Electron](https://www.electronjs.org/), it provides a structured and interactive way to improve typing accuracy and speed.

---

## ✨ Features

- Interactive lessons and exercises for learning touch typing
- Focus on the **home row position** (starting hand posture)
- Gradual introduction of neighboring keys, upper and lower rows
- Visual feedback on typing accuracy and speed
- Cross-platform: **Windows**, **Linux**, **macOS**
- Open source and easily extendable

---

## 🚧 Current Development Stage

The current MVP is under active development in the [`feature/electron-mvp`](https://github.com/mgrosser3/sita/tree/feature/electron-mvp) branch.

Planned lesson sequence:

1. **Home row position** (ASDF – JKLÖ)
2. Add neighboring keys **H** and **G**
3. Add the **top row** (QWERTZ...)
4. Add the **bottom row** (YXCVM...)
5. Optional: Full word/sentence practice and numbers/special characters

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mgrosser3/sita.git
cd sita
git checkout feature/electron-mvp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application (development mode)

```bash
npm run start
```

---

## 📦 Build for Distribution

To package the app as a standalone desktop application (e.g. `.exe`, `.AppImage`, `.dmg`):

```bash
npm run dist
```

This uses [electron-builder](https://www.electron.build/) and outputs builds to the `dist/` directory.

> Note: macOS builds require a Mac environment due to Apple signing requirements.

---

## 📁 Project Structure

```
.
├── assets/         # Static files (images, icons)
├── src/
│   ├── lessons/    # Individual lessons with explanations & exercises
│   ├── shared/     # Common components, layouts, and styles
│   └── index.html  # Lesson overview/dashboard
├── main.js         # Electron main process entry point
├── package.json    # App configuration
└── README.md
```

---

## 🤝 Contributing

SiTA is released under the [MIT License](LICENSE) and welcomes community contributions!
Whether it's a new feature, bug fix, or suggestion — contributions are appreciated.

How to contribute:

1. Fork the project
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push and open a Pull Request

---

## 📜 License

This project is licensed under the **[MIT License](LICENSE)**.
You are free to use, modify, and distribute it.

---

## 👨‍💻 Author

**Michael Grosser**
📬 [github.com/mgrosser3](https://github.com/mgrosser3)

---

## 📸 Preview (optional)

> Add screenshots or GIF previews of the app in action here to showcase features.

---

```

---

Let me know if you'd like:
- A badge section (e.g., "Made with Electron", License, OS support)
- GitHub Actions CI config
- Markdown preview styling tweaks (e.g., for npm or GitHub Pages)

I'd also be happy to help you insert this into your repository directly or make a PR-ready version.
```
