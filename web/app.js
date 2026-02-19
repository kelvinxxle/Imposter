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
