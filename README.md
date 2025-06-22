# 🏛️ Roman Numeral Converter

Transform numbers into imperial legacy.

---

## ✨ Description

A clean, visually immersive web application that converts Arabic numbers into Roman numerals — wrapped in a dark mystic ambiance reminiscent of ancient temples and imperial scrolls.

> This project is part of the [freeCodeCamp JavaScript Algorithms and Data Structures Certification (v8)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/).

This project was built with:

* **HTML + TailwindCSS** for rapid and elegant styling
* **JavaScript** for number validation and conversion logic
* **Particles.js** for a flame-inspired animated background
* **Font Awesome** for UI accents

---

## 🔍 Features

* 🧼 Converts numbers from `1` to `3999` into Roman numerals
* 🚫 Error messages for invalid, negative, or out-of-bounds inputs
* 🔥 Animated background particles simulating sacred embers (particles.js)
* 🏛️ Immersive typeface: Gideon Roman (via local TTF)
* 🎨 Responsive and centered UI using Tailwind's utility-first approach

---

## 🧪 Validation Rules

| Case                    | Output message/result                              |
| ----------------------- | -------------------------------------------------- |
| Empty input             | `Please enter a valid number`                      |
| Negative or 0           | `Please enter a number greater than or equal to 1` |
| Greater than 3999       | `Please enter a number less than or equal to 3999` |
| Valid number (e.g. 649) | Roman numeral result (e.g. `DCXLIX`)               |

---

## 🗂️ File Overview

* `index.html` → Main HTML structure with Tailwind + particles setup
* `particles.json` → Configuration file for animated background (embers rising)
* `script.js` → Contains the conversion logic and DOM interaction
* `/fonts/GideonRoman-Regular.ttf` → Imported custom font
* `favicon.jpg` → Custom favicon in JPEG format

---

## 🚀 Setup & Usage

1. Clone or download the repository
2. Make sure your project structure looks like this:

```
project-folder/
├── index.html
├── script.js
├── particles.json
├── favicon.jpg
```

3. Open `index.html` in your browser

---

## 📸 Preview

> *A minimal converter centered in the page, floating above glowing particles like sparks of time past. With a single click, transform "1023" into "MXXIII" and feel the empire pulse again.*

---

## 📜 Credits

Crafted with care by Shirou — blending classical heritage with modern elegance.
Particles: [particles.js](https://vincentgarreau.com/particles.js/)
Framework: [TailwindCSS](https://tailwindcss.com/)

---

## 🏁 License

MIT — open to all who seek the wisdom of the ancients ⚔️
