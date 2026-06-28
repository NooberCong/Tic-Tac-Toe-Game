# Tic-Tac-Toe

A lightweight Progressive Web App (PWA) that lets you play Tic-Tac-Toe in your browser — installable on any device and fully playable offline.

## Features

- **Two game modes** — 2-player local mode or 1-player vs an unbeatable AI
- **AI powered by minimax** — the computer always plays optimally in 1-player mode
- **Score tracking** — running totals for both X and O across rounds
- **Play Again** — resets the board while keeping scores; the starting player alternates each round
- **Offline support** — a service worker caches assets so the game works without a network connection
- **Installable** — add to your home screen on Android/iOS or install as a desktop app via your browser's PWA prompt
- **Responsive** — adapts cleanly to phones, tablets, and desktops

## How to play

1. Open `index.html` in any modern browser (or serve it from any static host).
2. Click a square to place your mark. X always goes first.
3. The winning line flashes to signal the winner; scores update automatically.
4. Click **Play Again** to start the next round.
5. Click **Switch Mode** to toggle between 2P (two human players) and 1P (vs AI).

## Getting started

No build step or dependencies to install — the project is a single HTML file.

```bash
# Clone the repo
git clone https://github.com/NooberCong/Tic-Tac-Toe-PWA.git
cd Tic-Tac-Toe-PWA

# Open directly
open index.html          # macOS
start index.html         # Windows

# Or serve locally (avoids service-worker restrictions on file://)
npx serve .
# then visit http://localhost:3000
```

## Tech stack

| Layer | Detail |
|-------|--------|
| Markup & styles | HTML5, CSS3 (Flexbox, CSS animations) |
| Logic | Vanilla JavaScript (ES6+) |
| AI | Minimax algorithm |
| Offline | Service Worker + Cache API |
| Installable | Web App Manifest |
| Icons | Font Awesome 5 (CDN) |

## License

Feel free to use, modify, or distribute this project for any purpose.
