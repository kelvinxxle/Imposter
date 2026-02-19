param(
  [string]$RepoPath = (Get-Location).Path
)
$ErrorActionPreference = 'Stop'
if (!(Test-Path $RepoPath)) { throw "RepoPath does not exist: $RepoPath" }
Set-Location $RepoPath
if (!(Test-Path '.git')) { throw "No .git directory found. Run this inside your Imposter repo." }
Write-Host "Restoring iPhone web app files in $RepoPath" -ForegroundColor Cyan

$files = @{}
$files['README.md'] = @'
# Imposter

A cross-platform starter that now includes:

- **iOS-native scaffold** with Swift + SwiftUI.
- **Mobile-first web app** you can run on iPhone from Safari without a Mac build.

## Repository layout

- `Package.swift` — SwiftPM package definition for `ImposterCore`.
- `Sources/ImposterCore` — domain models, use cases, services.
- `Tests/ImposterCoreTests` — Linux/macOS runnable tests for the core.
- `ios/ImposterApp` — SwiftUI app source template (open in Xcode on macOS).
- `web/` — installable PWA-style web app for iPhone/mobile browsers.

## Play on iPhone (web app)

1. Serve the `web` folder:

   ```bash
   cd web
   python3 -m http.server 8080
   ```

2. On your iPhone, open:

   `http://<your-computer-ip>:8080`

3. In Safari, tap **Share → Add to Home Screen**.
4. Launch from Home Screen for a full-screen app-like experience.

### Web game rules

- Configure players, imposters, timer, and category.
- Every player sees a word privately.
- **Civilians** share one word; **imposters** receive a closely related word.
- Discuss, vote, and reveal the result.


### One-shot Windows recovery script

If your local clone is missing `web/` files, run:

```powershell
pwsh -File scripts/restore-web-app.ps1 -RepoPath C:\Users\Kelvin\Imposter
```

Then commit and push:

```powershell
git add README.md web
git commit -m "Add iPhone-friendly Imposter web app"
git push origin main
```

## iOS-native development (optional)

If you want the native app path later:

```bash
swift test
```

Then wire `ios/ImposterApp` into an Xcode iOS target on macOS.

'@
$files['web/index.html'] = @'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Imposter" />
    <meta name="theme-color" content="#0b1020" />
    <title>Imposter — Mobile Web App</title>
    <link rel="manifest" href="manifest.webmanifest" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="app-shell">
      <header class="topbar">
        <h1>Imposter</h1>
        <p class="subtitle">Pass-and-play, built for iPhone web</p>
      </header>

      <section id="setupScreen" class="screen card active">
        <h2>New Round</h2>
        <label>Players
          <input id="playersInput" type="number" min="3" max="12" value="6" inputmode="numeric" />
        </label>
        <label>Imposters
          <input id="impostersInput" type="number" min="1" max="3" value="1" inputmode="numeric" />
        </label>
        <label>Discussion timer (minutes)
          <input id="minutesInput" type="number" min="1" max="20" value="5" inputmode="numeric" />
        </label>
        <label>Category
          <select id="categoryInput"></select>
        </label>
        <button id="startBtn" class="primary">Start round</button>
        <p id="setupError" class="error"></p>
      </section>

      <section id="passScreen" class="screen card">
        <h2>Pass the phone</h2>
        <p id="passMessage">Give the phone to Player 1.</p>
        <p class="hint">Make sure nobody else can see the screen.</p>
        <button id="revealBtn" class="primary">Reveal role</button>
      </section>

      <section id="revealScreen" class="screen card">
        <h2 id="revealTitle">Player 1</h2>
        <p id="roleLine" class="role"></p>
        <p id="hintLine" class="hint"></p>
        <button id="hideBtn" class="primary">Hide role</button>
      </section>

      <section id="discussionScreen" class="screen card">
        <h2>Discuss</h2>
        <p>Ask each other questions and find inconsistencies.</p>
        <div id="timer" class="timer">05:00</div>
        <div class="button-row">
          <button id="startTimerBtn" class="primary">Start timer</button>
          <button id="skipTimerBtn">Skip to vote</button>
        </div>
      </section>

      <section id="voteScreen" class="screen card">
        <h2>Vote</h2>
        <p>Who is an imposter? Enter one player number at a time.</p>
        <label>Voted player number
          <input id="voteInput" type="number" min="1" max="12" value="1" inputmode="numeric" />
        </label>
        <button id="revealResultBtn" class="primary">Reveal result</button>
      </section>

      <section id="resultScreen" class="screen card">
        <h2>Round result</h2>
        <p id="resultText"></p>
        <p id="answerText"></p>
        <div class="button-row">
          <button id="playAgainBtn" class="primary">Play again</button>
          <button id="newRoundBtn">New settings</button>
        </div>
      </section>
    </main>

    <script src="app.js"></script>
  </body>
</html>

'@
$files['web/app.js'] = @'
const WORDS = {
  Food: [
    ["Pizza", "Calzone"],
    ["Sushi", "Sashimi"],
    ["Burger", "Sandwich"],
    ["Ice Cream", "Gelato"],
    ["Coffee", "Tea"]
  ],
  Places: [
    ["Beach", "Pool"],
    ["Airport", "Train Station"],
    ["Cinema", "Theater"],
    ["Library", "Bookstore"],
    ["School", "University"]
  ],
  Objects: [
    ["Phone", "Tablet"],
    ["Laptop", "Desktop"],
    ["Watch", "Bracelet"],
    ["Camera", "Drone"],
    ["Headphones", "Speakers"]
  ]
};

const els = {
  setup: document.getElementById("setupScreen"),
  pass: document.getElementById("passScreen"),
  reveal: document.getElementById("revealScreen"),
  discussion: document.getElementById("discussionScreen"),
  vote: document.getElementById("voteScreen"),
  result: document.getElementById("resultScreen"),
  playersInput: document.getElementById("playersInput"),
  impostersInput: document.getElementById("impostersInput"),
  minutesInput: document.getElementById("minutesInput"),
  categoryInput: document.getElementById("categoryInput"),
  setupError: document.getElementById("setupError"),
  passMessage: document.getElementById("passMessage"),
  revealTitle: document.getElementById("revealTitle"),
  roleLine: document.getElementById("roleLine"),
  hintLine: document.getElementById("hintLine"),
  timer: document.getElementById("timer"),
  voteInput: document.getElementById("voteInput"),
  resultText: document.getElementById("resultText"),
  answerText: document.getElementById("answerText")
};

const state = {
  players: 6,
  impostersCount: 1,
  minutes: 5,
  category: "Food",
  currentPlayer: 0,
  roles: [],
  pair: ["", ""],
  timerMsLeft: 0,
  timerId: null
};

for (const category of Object.keys(WORDS)) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  els.categoryInput.append(option);
}

hydrateSettings();

function hydrateSettings() {
  const saved = localStorage.getItem("imposter-web-settings");
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    els.playersInput.value = String(parsed.players ?? 6);
    els.impostersInput.value = String(parsed.impostersCount ?? 1);
    els.minutesInput.value = String(parsed.minutes ?? 5);
    if (WORDS[parsed.category]) {
      els.categoryInput.value = parsed.category;
    }
  } catch {
    // ignore malformed local settings
  }
}

function persistSettings() {
  localStorage.setItem(
    "imposter-web-settings",
    JSON.stringify({
      players: state.players,
      impostersCount: state.impostersCount,
      minutes: state.minutes,
      category: state.category
    })
  );
}

function show(screen) {
  [els.setup, els.pass, els.reveal, els.discussion, els.vote, els.result].forEach((section) =>
    section.classList.remove("active")
  );
  screen.classList.add("active");
}

function buzz(ms = 35) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function setupRound() {
  state.players = Number(els.playersInput.value);
  state.impostersCount = Number(els.impostersInput.value);
  state.minutes = Number(els.minutesInput.value);
  state.category = els.categoryInput.value;

  if (state.players < 3 || state.players > 12) {
    els.setupError.textContent = "Players must be between 3 and 12.";
    return false;
  }
  if (state.impostersCount < 1 || state.impostersCount >= state.players) {
    els.setupError.textContent = "Imposters must be at least 1 and less than total players.";
    return false;
  }
  if (state.minutes < 1 || state.minutes > 20) {
    els.setupError.textContent = "Timer must be between 1 and 20 minutes.";
    return false;
  }

  const choices = WORDS[state.category];
  state.pair = choices[Math.floor(Math.random() * choices.length)];
  state.roles = Array.from({ length: state.players }, () => ({
    imposter: false,
    word: state.pair[0]
  }));

  const imposterIndexes = shuffle(Array.from({ length: state.players }, (_, i) => i)).slice(0, state.impostersCount);
  imposterIndexes.forEach((index) => {
    state.roles[index] = { imposter: true, word: state.pair[1] };
  });

  state.currentPlayer = 0;
  state.timerMsLeft = state.minutes * 60 * 1000;
  els.voteInput.max = String(state.players);
  els.voteInput.value = "1";
  els.setupError.textContent = "";
  persistSettings();
  renderTimer();
  return true;
}

function goPass() {
  els.passMessage.textContent = `Give the phone to Player ${state.currentPlayer + 1}.`;
  show(els.pass);
}

function revealRole() {
  const player = state.currentPlayer + 1;
  const role = state.roles[state.currentPlayer];
  els.revealTitle.textContent = `Player ${player}`;
  if (role.imposter) {
    els.roleLine.textContent = `Your word is: ${role.word}`;
    els.hintLine.textContent = "You are an IMPOSTER. Blend in and avoid getting voted out.";
  } else {
    els.roleLine.textContent = `Your word is: ${role.word}`;
    els.hintLine.textContent = "You are NOT an imposter. Describe without saying the word exactly.";
  }
  show(els.reveal);
  buzz();
}

function hideRole() {
  state.currentPlayer += 1;
  if (state.currentPlayer < state.players) {
    goPass();
    return;
  }
  show(els.discussion);
}

function renderTimer() {
  const clamped = Math.max(0, state.timerMsLeft);
  const mins = Math.floor(clamped / 60000)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor((clamped % 60000) / 1000)
    .toString()
    .padStart(2, "0");
  els.timer.textContent = `${mins}:${secs}`;
}

function stopTimer() {
  if (!state.timerId) return;
  clearInterval(state.timerId);
  state.timerId = null;
}

function startTimer() {
  if (state.timerId) return;
  state.timerId = setInterval(() => {
    state.timerMsLeft -= 1000;
    renderTimer();
    if (state.timerMsLeft <= 0) {
      stopTimer();
      buzz([80, 60, 80]);
      show(els.vote);
    }
  }, 1000);
}

function revealResult() {
  const vote = Number(els.voteInput.value) - 1;
  const votedRole = state.roles[vote];
  const imposters = state.roles
    .map((role, index) => (role.imposter ? index + 1 : null))
    .filter(Boolean)
    .join(", ");

  if (!votedRole) {
    els.resultText.textContent = "Invalid vote.";
  } else if (votedRole.imposter) {
    els.resultText.textContent = `Nice! Player ${vote + 1} was an imposter.`;
  } else {
    els.resultText.textContent = `Not quite. Player ${vote + 1} was innocent.`;
  }

  els.answerText.textContent = `Civilian word: ${state.pair[0]} • Imposter word: ${state.pair[1]} • Imposter(s): Player ${imposters}`;
  show(els.result);
}

document.getElementById("startBtn").addEventListener("click", () => {
  stopTimer();
  if (!setupRound()) return;
  goPass();
});

document.getElementById("revealBtn").addEventListener("click", revealRole);
document.getElementById("hideBtn").addEventListener("click", hideRole);
document.getElementById("startTimerBtn").addEventListener("click", startTimer);
document.getElementById("skipTimerBtn").addEventListener("click", () => {
  stopTimer();
  show(els.vote);
});
document.getElementById("revealResultBtn").addEventListener("click", revealResult);
document.getElementById("playAgainBtn").addEventListener("click", () => {
  stopTimer();
  if (!setupRound()) return;
  goPass();
});
document.getElementById("newRoundBtn").addEventListener("click", () => {
  stopTimer();
  show(els.setup);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      // noop
    });
  });
}

'@
$files['web/styles.css'] = @'
:root {
  color-scheme: dark;
  --bg: radial-gradient(circle at top, #1c2442 0%, #0b1020 60%);
  --card: rgba(24, 30, 55, 0.9);
  --text: #ecf0ff;
  --muted: #a6b0d6;
  --danger: #ff7b8a;
  --safe-top: env(safe-area-inset-top, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}

.app-shell {
  max-width: 520px;
  margin: 0 auto;
  min-height: 100vh;
  padding: calc(16px + var(--safe-top)) 16px calc(18px + var(--safe-bottom));
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.topbar h1 {
  margin: 0;
  font-size: 2rem;
}

.subtitle {
  margin: 2px 0 0;
  color: var(--muted);
}

.screen {
  display: none;
}

.screen.active {
  display: block;
  animation: slideIn 220ms ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  background: var(--card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 22px;
  padding: 18px;
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

h2 {
  margin-top: 0;
}

label {
  display: block;
  margin-bottom: 12px;
  color: var(--muted);
  font-size: 0.95rem;
}

input,
select,
button {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(8, 11, 22, 0.6);
  color: var(--text);
  font-size: 1rem;
  padding: 12px;
  margin-top: 6px;
}

input:focus,
select:focus,
button:focus {
  outline: 2px solid #79acff;
  outline-offset: 2px;
}

button {
  font-weight: 650;
  margin-top: 8px;
  min-height: 46px;
}

button.primary {
  background: linear-gradient(180deg, #79acff, #5f88f5);
  color: #09112a;
  border: none;
}

.button-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.timer {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 12px 0;
}

.role {
  font-size: 1.5rem;
  margin: 12px 0 6px;
}

.hint {
  color: var(--muted);
  margin-top: 0;
}

.error {
  color: var(--danger);
  min-height: 20px;
  margin: 8px 0 0;
}

'@
$files['web/manifest.webmanifest'] = @'
{
  "name": "Imposter",
  "short_name": "Imposter",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#0b1020",
  "theme_color": "#0b1020",
  "orientation": "portrait",
  "icons": [
    {
      "src": "icon.svg",
      "sizes": "512x512",
      "type": "image/svg+xml",
      "purpose": "any maskable"
    }
  ]
}

'@
$files['web/service-worker.js'] = @'
const CACHE_NAME = "imposter-web-v1";
const ASSETS = ["./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});

'@
$files['web/icon.svg'] = @'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#82b1ff"/>
      <stop offset="1" stop-color="#5d78f2"/>
    </linearGradient>
  </defs>
  <rect x="24" y="24" width="464" height="464" rx="100" fill="#111935"/>
  <circle cx="256" cy="190" r="95" fill="url(#g)"/>
  <rect x="146" y="280" width="220" height="140" rx="70" fill="url(#g)"/>
  <circle cx="236" cy="180" r="16" fill="#121935"/>
  <circle cx="276" cy="180" r="16" fill="#121935"/>
</svg>

'@

foreach ($path in $files.Keys) {
  $dir = Split-Path -Parent $path
  if ($dir -and !(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  Set-Content -Path $path -Value $files[$path] -NoNewline -Encoding UTF8
  Write-Host "Wrote $path" -ForegroundColor Green
}

Write-Host 'Done. Next steps:' -ForegroundColor Yellow
Write-Host '  git add README.md web'
Write-Host '  git commit -m "Add iPhone-friendly Imposter web app"'
Write-Host '  git push origin main'
