const BUILTIN_CATEGORY_WORDS = {
  "Food & Drink": [
    "Pizza",
    "Burger",
    "Sushi",
    "Taco",
    "Pasta",
    "Ramen",
    "Salad",
    "Steak",
    "Pancakes",
    "Waffles",
    "Ice Cream",
    "Chocolate",
    "Coffee",
    "Tea",
    "Smoothie",
    "Donut",
    "Bagel",
    "Burrito",
    "Curry",
    "Dumplings",
    "Sandwich",
    "Fries",
    "Soup",
    "Cheesecake",
    "Lemonade"
  ],
  Places: [
    "Beach",
    "Airport",
    "Cinema",
    "Library",
    "School",
    "Hospital",
    "Restaurant",
    "Museum",
    "Zoo",
    "Stadium",
    "Mall",
    "Hotel",
    "Park",
    "Gym",
    "Coffee Shop",
    "Train Station",
    "Supermarket",
    "Office",
    "Factory",
    "Farm",
    "Amusement Park",
    "Theater",
    "Bridge",
    "Harbor",
    "Subway"
  ],
  Technology: [
    "Smartphone",
    "Laptop",
    "Tablet",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Headphones",
    "Microphone",
    "Webcam",
    "Router",
    "Server",
    "Cloud Storage",
    "App",
    "Website",
    "Bluetooth",
    "Wi-Fi",
    "USB Cable",
    "Smartwatch",
    "Drone",
    "VR Headset",
    "3D Printer",
    "Charger",
    "Battery",
    "Touchscreen",
    "Code Editor"
  ],
  Animals: [
    "Dog",
    "Cat",
    "Elephant",
    "Lion",
    "Tiger",
    "Bear",
    "Wolf",
    "Fox",
    "Rabbit",
    "Horse",
    "Cow",
    "Sheep",
    "Goat",
    "Penguin",
    "Dolphin",
    "Whale",
    "Shark",
    "Eagle",
    "Owl",
    "Snake",
    "Lizard",
    "Frog",
    "Butterfly",
    "Bee",
    "Octopus"
  ],
  Nature: [
    "Mountain",
    "River",
    "Lake",
    "Ocean",
    "Forest",
    "Desert",
    "Waterfall",
    "Canyon",
    "Volcano",
    "Island",
    "Glacier",
    "Valley",
    "Cliff",
    "Cave",
    "Rainforest",
    "Meadow",
    "Jungle",
    "Coral Reef",
    "Swamp",
    "Prairie",
    "Tornado",
    "Rainbow",
    "Thunder",
    "Sunrise",
    "Moonlight"
  ],
  Sports: [
    "Soccer",
    "Basketball",
    "Baseball",
    "Tennis",
    "Golf",
    "Hockey",
    "Volleyball",
    "Swimming",
    "Running",
    "Cycling",
    "Boxing",
    "Wrestling",
    "Skateboarding",
    "Surfing",
    "Skiing",
    "Snowboarding",
    "Badminton",
    "Table Tennis",
    "Cricket",
    "Rugby",
    "Karate",
    "Archery",
    "Fencing",
    "Bowling",
    "Gymnastics"
  ],
  Jobs: [
    "Doctor",
    "Nurse",
    "Teacher",
    "Engineer",
    "Lawyer",
    "Chef",
    "Pilot",
    "Firefighter",
    "Police Officer",
    "Farmer",
    "Scientist",
    "Designer",
    "Photographer",
    "Journalist",
    "Musician",
    "Actor",
    "Dentist",
    "Architect",
    "Mechanic",
    "Electrician",
    "Plumber",
    "Programmer",
    "Cashier",
    "Librarian",
    "Coach"
  ],
  "Movies & TV": [
    "Action Movie",
    "Comedy Movie",
    "Horror Movie",
    "Romance Movie",
    "Documentary",
    "Animated Movie",
    "Sci-Fi Movie",
    "Fantasy Movie",
    "Crime Series",
    "Reality Show",
    "Talk Show",
    "Game Show",
    "Sitcom",
    "Drama Series",
    "Thriller",
    "Superhero Movie",
    "Western",
    "Musical",
    "Film Director",
    "Movie Theater",
    "Popcorn",
    "Streaming Service",
    "Season Finale",
    "Trailer",
    "Soundtrack"
  ],
  Music: [
    "Guitar",
    "Piano",
    "Drums",
    "Violin",
    "Saxophone",
    "Trumpet",
    "Flute",
    "Cello",
    "Microphone",
    "Concert",
    "Choir",
    "DJ",
    "Playlist",
    "Album",
    "Single",
    "Melody",
    "Rhythm",
    "Lyrics",
    "Beat",
    "Headphones",
    "Speaker",
    "Festival",
    "Encore",
    "Studio",
    "Acoustic"
  ],
  School: [
    "Classroom",
    "Homework",
    "Exam",
    "Teacher",
    "Student",
    "Textbook",
    "Backpack",
    "Notebook",
    "Pencil",
    "Calculator",
    "Blackboard",
    "Desk",
    "Lunch Break",
    "Recess",
    "Science Lab",
    "Library",
    "Essay",
    "Project",
    "Semester",
    "Graduation",
    "Report Card",
    "School Bus",
    "Principal",
    "Tutor",
    "Quiz"
  ],
  Home: [
    "Kitchen",
    "Bedroom",
    "Living Room",
    "Bathroom",
    "Garage",
    "Sofa",
    "Table",
    "Chair",
    "Lamp",
    "Mirror",
    "Door",
    "Window",
    "Curtains",
    "Pillow",
    "Blanket",
    "Fridge",
    "Oven",
    "Microwave",
    "Vacuum",
    "Washing Machine",
    "Closet",
    "Shower",
    "Toothbrush",
    "Towel",
    "Bookshelf"
  ],
  Transportation: [
    "Car",
    "Bus",
    "Train",
    "Subway",
    "Tram",
    "Taxi",
    "Bicycle",
    "Motorcycle",
    "Airplane",
    "Helicopter",
    "Boat",
    "Ferry",
    "Scooter",
    "Skateboard",
    "Truck",
    "Van",
    "Traffic Light",
    "Parking Lot",
    "Highway",
    "Bridge",
    "Tunnel",
    "Gas Station",
    "Seatbelt",
    "Wheel",
    "Driver's License"
  ],
  Hobbies: [
    "Drawing",
    "Painting",
    "Reading",
    "Writing",
    "Photography",
    "Cooking",
    "Baking",
    "Gardening",
    "Fishing",
    "Hiking",
    "Camping",
    "Knitting",
    "Pottery",
    "Woodworking",
    "Chess",
    "Collecting Stamps",
    "Birdwatching",
    "Journaling",
    "Scrapbooking",
    "Calligraphy",
    "Puzzles",
    "Origami",
    "Model Building",
    "Podcasting",
    "Streaming"
  ],
  "Health & Fitness": [
    "Push-Up",
    "Sit-Up",
    "Squat",
    "Lunge",
    "Stretching",
    "Yoga",
    "Pilates",
    "Jogging",
    "Sprint",
    "Protein Shake",
    "Water Bottle",
    "Workout",
    "Treadmill",
    "Dumbbell",
    "Barbell",
    "Jump Rope",
    "Meditation",
    "Heart Rate",
    "Calories",
    "Sleep",
    "Vitamins",
    "Healthy Meal",
    "Rest Day",
    "Warm-Up",
    "Cooldown"
  ],
  Fashion: [
    "T-Shirt",
    "Jeans",
    "Jacket",
    "Sweater",
    "Dress",
    "Skirt",
    "Suit",
    "Sneakers",
    "Boots",
    "Hat",
    "Scarf",
    "Sunglasses",
    "Watch",
    "Necklace",
    "Bracelet",
    "Ring",
    "Backpack",
    "Handbag",
    "Belt",
    "Socks",
    "Gloves",
    "Tie",
    "Hoodie",
    "Perfume",
    "Makeup"
  ],
  Weather: [
    "Sunny",
    "Cloudy",
    "Rainy",
    "Stormy",
    "Windy",
    "Snowy",
    "Foggy",
    "Humid",
    "Dry",
    "Thunderstorm",
    "Lightning",
    "Rainbow",
    "Hail",
    "Blizzard",
    "Heatwave",
    "Cold Front",
    "Breeze",
    "Hurricane",
    "Tornado",
    "Drizzle",
    "Forecast",
    "Thermometer",
    "Umbrella",
    "Raincoat",
    "Sunscreen"
  ],
  Travel: [
    "Passport",
    "Suitcase",
    "Boarding Pass",
    "Customs",
    "Hotel",
    "Hostel",
    "Map",
    "Tour Guide",
    "Souvenir",
    "Tourist",
    "Currency Exchange",
    "Road Trip",
    "Backpacking",
    "Itinerary",
    "Beach Resort",
    "City Tour",
    "Cruise",
    "Camping Trip",
    "Travel Insurance",
    "Museum Ticket",
    "Landmark",
    "Postcard",
    "Rental Car",
    "Travel Adapter",
    "Airport Security"
  ],
  Science: [
    "Atom",
    "Molecule",
    "Cell",
    "DNA",
    "Gravity",
    "Energy",
    "Force",
    "Velocity",
    "Planet",
    "Galaxy",
    "Telescope",
    "Microscope",
    "Experiment",
    "Hypothesis",
    "Lab Coat",
    "Chemical Reaction",
    "Magnet",
    "Electricity",
    "Robot",
    "AI",
    "Solar System",
    "Ecosystem",
    "Photosynthesis",
    "Fossil",
    "Evolution"
  ],
  History: [
    "Ancient Egypt",
    "Roman Empire",
    "Medieval Castle",
    "Renaissance",
    "Industrial Revolution",
    "World War I",
    "World War II",
    "Cold War",
    "Pyramid",
    "Pharaoh",
    "Knight",
    "Samurai",
    "Explorer",
    "Revolution",
    "Declaration",
    "Empire",
    "Monarchy",
    "Artifact",
    "Archaeology",
    "Museum",
    "Map",
    "Treaty",
    "Colonial Era",
    "Ancient Greece",
    "Silk Road"
  ],
  Games: [
    "Chess",
    "Checkers",
    "Monopoly",
    "Scrabble",
    "Poker",
    "Sudoku",
    "Crossword",
    "Hide and Seek",
    "Tag",
    "Trivia",
    "Puzzle Game",
    "Racing Game",
    "Platform Game",
    "Shooter Game",
    "Strategy Game",
    "Role-Playing Game",
    "Controller",
    "Dice",
    "Board Game",
    "Card Game",
    "Arcade",
    "High Score",
    "Quest",
    "Level Up",
    "Game Console"
  ],
  "Art & Design": [
    "Canvas",
    "Sketchbook",
    "Paintbrush",
    "Watercolor",
    "Acrylic Paint",
    "Charcoal",
    "Palette",
    "Sculpture",
    "Gallery",
    "Mural",
    "Portrait",
    "Landscape",
    "Typography",
    "Logo",
    "Poster",
    "Storyboard",
    "Animation",
    "Illustration",
    "Color Theory",
    "Perspective",
    "Texture",
    "Pattern",
    "Ceramics",
    "Ink",
    "Digital Art"
  ]
};

const SETTINGS_KEY = "imposter-web-settings";
const MIN_PLAYERS = 3;
const MAX_PLAYERS = 12;
const DEFAULT_PLAYERS = 6;
const DEFAULT_IMPOSTERS = 1;
const DEFAULT_SELECTED_CATEGORIES = ["Food & Drink", "Places", "Technology"];
const MAX_PLAYER_NAME_LENGTH = 24;
const MAX_CATEGORY_NAME_LENGTH = 30;
const MAX_KEYWORD_LENGTH = 32;
const MIN_CUSTOM_KEYWORDS = 3;

const els = {
  setup: document.getElementById("setupScreen"),
  categories: document.getElementById("categoriesScreen"),
  pass: document.getElementById("passScreen"),
  reveal: document.getElementById("revealScreen"),
  discussion: document.getElementById("discussionScreen"),
  vote: document.getElementById("voteScreen"),
  result: document.getElementById("resultScreen"),
  playersInput: document.getElementById("playersInput"),
  impostersInput: document.getElementById("impostersInput"),
  playerNamesList: document.getElementById("playerNamesList"),
  categorySummary: document.getElementById("categorySummary"),
  openCategoriesBtn: document.getElementById("openCategoriesBtn"),
  categoryInputs: document.getElementById("categoryInputs"),
  selectAllCategoriesBtn: document.getElementById("selectAllCategoriesBtn"),
  clearCategoriesBtn: document.getElementById("clearCategoriesBtn"),
  customCategoryNameInput: document.getElementById("customCategoryNameInput"),
  customCategoryKeywordsInput: document.getElementById("customCategoryKeywordsInput"),
  saveCustomCategoryBtn: document.getElementById("saveCustomCategoryBtn"),
  customCategoryList: document.getElementById("customCategoryList"),
  categoryError: document.getElementById("categoryError"),
  doneCategoriesBtn: document.getElementById("doneCategoriesBtn"),
  setupError: document.getElementById("setupError"),
  revealProgress: document.getElementById("revealProgress"),
  playerRevealList: document.getElementById("playerRevealList"),
  revealTitle: document.getElementById("revealTitle"),
  roleLine: document.getElementById("roleLine"),
  hintLine: document.getElementById("hintLine"),
  discussionCategory: document.getElementById("discussionCategory"),
  discussionStarter: document.getElementById("discussionStarter"),
  voteInput: document.getElementById("voteInput"),
  resultText: document.getElementById("resultText"),
  answerText: document.getElementById("answerText"),
  startBtn: document.getElementById("startBtn"),
  hideBtn: document.getElementById("hideBtn"),
  toVoteBtn: document.getElementById("toVoteBtn"),
  revealResultBtn: document.getElementById("revealResultBtn"),
  playAgainBtn: document.getElementById("playAgainBtn"),
  newRoundBtn: document.getElementById("newRoundBtn")
};

const state = {
  players: DEFAULT_PLAYERS,
  impostersCount: DEFAULT_IMPOSTERS,
  selectedCategories: [...DEFAULT_SELECTED_CATEGORIES],
  customCategories: {},
  category: "",
  word: "",
  playerNames: [],
  startingPlayerIndex: 0,
  currentPlayer: -1,
  revealedPlayers: [],
  roles: []
};

initialize();

function initialize() {
  hydrateSettings();
  syncPlayerNameInputs(readIntegerInput(els.playersInput, DEFAULT_PLAYERS), state.playerNames);
  renderCategoryOptions();
  updateCategorySummary();
}

function defaultPlayerName(index) {
  return `Player ${index + 1}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function readIntegerInput(input, fallback) {
  const parsed = Number.parseInt(input.value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function readInteger(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function normalizeToken(value, maxLen) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLen);
}

function normalizePlayerName(value, index) {
  const safe = normalizeToken(value, MAX_PLAYER_NAME_LENGTH);
  return safe || defaultPlayerName(index);
}

function sanitizeCategoryName(value) {
  return normalizeToken(value, MAX_CATEGORY_NAME_LENGTH);
}

function sanitizeKeywordList(values) {
  const safeValues = Array.isArray(values) ? values : [];
  const keywords = [];
  const seen = new Set();

  safeValues.forEach((item) => {
    const keyword = normalizeToken(item, MAX_KEYWORD_LENGTH);
    if (!keyword) return;
    const key = keyword.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    keywords.push(keyword);
  });

  return keywords;
}

function parseKeywordsText(text) {
  return sanitizeKeywordList(String(text ?? "").split(/[\n,]/));
}

function sanitizeCustomCategories(raw) {
  const safeCategories = {};
  if (!raw || typeof raw !== "object") return safeCategories;

  Object.entries(raw).forEach(([name, keywords]) => {
    const safeName = sanitizeCategoryName(name);
    if (!safeName || BUILTIN_CATEGORY_WORDS[safeName]) return;

    const safeKeywords = Array.isArray(keywords) ? sanitizeKeywordList(keywords) : parseKeywordsText(keywords);
    if (safeKeywords.length < MIN_CUSTOM_KEYWORDS) return;

    safeCategories[safeName] = safeKeywords;
  });

  return safeCategories;
}

function sanitizeSavedPlayerNames(raw, playersCount) {
  const names = [];
  for (let index = 0; index < playersCount; index += 1) {
    names.push(normalizePlayerName(Array.isArray(raw) ? raw[index] : "", index));
  }
  return names;
}

function getAllCategoryWords() {
  return { ...BUILTIN_CATEGORY_WORDS, ...state.customCategories };
}

function getAllCategoryNames() {
  return [...Object.keys(BUILTIN_CATEGORY_WORDS), ...Object.keys(state.customCategories).sort((a, b) => a.localeCompare(b))];
}

function sanitizeSelectedCategories(rawSelected, categoryMap, fallbackToDefault) {
  const validNames = new Set(Object.keys(categoryMap));
  const selected = Array.isArray(rawSelected)
    ? rawSelected.map((name) => String(name).trim()).filter((name) => validNames.has(name))
    : [];
  const deduped = [...new Set(selected)];
  if (deduped.length > 0 || !fallbackToDefault) return deduped;

  const fallback = DEFAULT_SELECTED_CATEGORIES.filter((name) => validNames.has(name));
  if (fallback.length > 0) return fallback;

  const first = Object.keys(categoryMap)[0];
  return first ? [first] : [];
}

function readSavedSettings() {
  try {
    return localStorage.getItem(SETTINGS_KEY);
  } catch {
    return null;
  }
}

function writeSavedSettings(json) {
  try {
    localStorage.setItem(SETTINGS_KEY, json);
  } catch {
    // Storage can be unavailable on iOS private browsing or restricted settings.
  }
}

function hydrateSettings() {
  const saved = readSavedSettings();
  let parsed = null;

  if (saved) {
    try {
      parsed = JSON.parse(saved);
    } catch {
      parsed = null;
    }
  }

  state.customCategories = sanitizeCustomCategories(parsed?.customCategories);

  const allCategories = getAllCategoryWords();
  const players = clamp(readInteger(parsed?.players, DEFAULT_PLAYERS), MIN_PLAYERS, MAX_PLAYERS);
  const imposters = clamp(readInteger(parsed?.impostersCount, DEFAULT_IMPOSTERS), 1, Math.max(1, players - 1));
  state.playerNames = sanitizeSavedPlayerNames(parsed?.playerNames, players);
  state.selectedCategories = sanitizeSelectedCategories(parsed?.selectedCategories, allCategories, true);

  els.playersInput.value = String(players);
  els.impostersInput.value = String(imposters);
}

function normalizePlayerNames(playersCount) {
  const inputs = Array.from(els.playerNamesList.querySelectorAll("input"));
  const names = [];
  for (let index = 0; index < playersCount; index += 1) {
    names.push(normalizePlayerName(inputs[index]?.value ?? "", index));
  }
  return names;
}

function buildDraftSettings() {
  const players = clamp(readIntegerInput(els.playersInput, DEFAULT_PLAYERS), MIN_PLAYERS, MAX_PLAYERS);
  const imposters = clamp(readIntegerInput(els.impostersInput, DEFAULT_IMPOSTERS), 1, Math.max(1, players - 1));
  const selectedCategories = getSelectedCategories();

  return {
    players,
    impostersCount: imposters,
    playerNames: normalizePlayerNames(players),
    selectedCategories,
    customCategories: state.customCategories
  };
}

function persistDraftSettings() {
  writeSavedSettings(JSON.stringify(buildDraftSettings()));
}

function persistRoundSettings() {
  writeSavedSettings(
    JSON.stringify({
      players: state.players,
      impostersCount: state.impostersCount,
      playerNames: state.playerNames,
      selectedCategories: state.selectedCategories,
      customCategories: state.customCategories
    })
  );
}

function syncPlayerNameInputs(playersCount, seededNames = []) {
  const safeCount = clamp(playersCount, MIN_PLAYERS, MAX_PLAYERS);
  const previousNames = Array.from(els.playerNamesList.querySelectorAll("input")).map((input) => input.value);

  els.playerNamesList.textContent = "";
  for (let index = 0; index < safeCount; index += 1) {
    const label = document.createElement("label");
    label.className = "player-name-item";

    const nameLabel = document.createElement("span");
    nameLabel.textContent = `Player ${index + 1}`;

    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = MAX_PLAYER_NAME_LENGTH;
    input.autocomplete = "off";
    input.placeholder = defaultPlayerName(index);

    const seeded = seededNames[index];
    const previous = previousNames[index];
    input.value = normalizePlayerName(seeded ?? previous ?? defaultPlayerName(index), index);

    input.addEventListener("input", () => {
      clearSetupError();
      persistDraftSettings();
    });

    label.append(nameLabel, input);
    els.playerNamesList.append(label);
  }

  const maxImposters = Math.max(1, safeCount - 1);
  els.impostersInput.max = String(maxImposters);
  const currentImposters = readIntegerInput(els.impostersInput, DEFAULT_IMPOSTERS);
  if (currentImposters > maxImposters) {
    els.impostersInput.value = String(maxImposters);
  }
}

function renderCategoryOptions() {
  const categoryMap = getAllCategoryWords();
  state.selectedCategories = sanitizeSelectedCategories(state.selectedCategories, categoryMap, false);
  const selectedSet = new Set(state.selectedCategories);

  els.categoryInputs.textContent = "";
  getAllCategoryNames().forEach((category, index) => {
    const label = document.createElement("label");
    label.className = "category-option";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = category;
    input.id = `category-${index + 1}`;
    input.checked = selectedSet.has(category);
    input.addEventListener("change", () => {
      state.selectedCategories = getSelectedCategories();
      clearSetupError();
      clearCategoryError();
      updateCategorySummary();
      persistDraftSettings();
    });

    const text = document.createElement("span");
    text.textContent = category;

    label.append(input, text);
    els.categoryInputs.append(label);
  });

  renderCustomCategoryList();
  updateCategorySummary();
}

function renderCustomCategoryList() {
  const names = Object.keys(state.customCategories).sort((a, b) => a.localeCompare(b));
  els.customCategoryList.textContent = "";

  if (names.length === 0) {
    const empty = document.createElement("p");
    empty.className = "hint compact-hint";
    empty.textContent = "No custom categories yet.";
    els.customCategoryList.append(empty);
    return;
  }

  names.forEach((name) => {
    const row = document.createElement("div");
    row.className = "custom-category-item";

    const text = document.createElement("span");
    text.textContent = `${name} (${state.customCategories[name].length} keywords)`;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Delete";
    removeBtn.addEventListener("click", () => {
      delete state.customCategories[name];
      state.selectedCategories = state.selectedCategories.filter((category) => category !== name);
      clearCategoryError();
      clearSetupError();
      renderCategoryOptions();
      persistDraftSettings();
    });

    row.append(text, removeBtn);
    els.customCategoryList.append(row);
  });
}

function getCategoryCheckboxes() {
  return Array.from(els.categoryInputs.querySelectorAll('input[type="checkbox"]'));
}

function getSelectedCategories() {
  return getCategoryCheckboxes()
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function setAllCategories(checked) {
  getCategoryCheckboxes().forEach((checkbox) => {
    checkbox.checked = checked;
  });
  state.selectedCategories = checked ? getAllCategoryNames() : [];
  clearCategoryError();
  clearSetupError();
  updateCategorySummary();
  persistDraftSettings();
}

function updateCategorySummary() {
  const selected = state.selectedCategories;
  const customCount = Object.keys(state.customCategories).length;

  let summary;
  if (selected.length === 0) {
    summary = "No categories selected.";
  } else if (selected.length <= 3) {
    summary = `Selected: ${selected.join(", ")}.`;
  } else {
    summary = `Selected ${selected.length} categories.`;
  }

  const customNote = customCount === 0 ? "No custom categories yet." : `${customCount} custom categor${customCount === 1 ? "y" : "ies"}.`;
  els.categorySummary.textContent = `${summary} ${customNote}`;
}

function clearSetupError() {
  els.setupError.textContent = "";
}

function setCategoryError(message) {
  els.categoryError.textContent = message;
}

function clearCategoryError() {
  setCategoryError("");
}

function saveCustomCategory() {
  clearCategoryError();
  const name = sanitizeCategoryName(els.customCategoryNameInput.value);
  const keywords = parseKeywordsText(els.customCategoryKeywordsInput.value);

  if (!name) {
    setCategoryError("Enter a category name.");
    return;
  }
  const lowerName = name.toLowerCase();
  const builtinConflict = Object.keys(BUILTIN_CATEGORY_WORDS).some((category) => category.toLowerCase() === lowerName);
  if (builtinConflict) {
    setCategoryError("That category name already exists as a built-in category.");
    return;
  }
  if (keywords.length < MIN_CUSTOM_KEYWORDS) {
    setCategoryError(`Add at least ${MIN_CUSTOM_KEYWORDS} unique keywords.`);
    return;
  }

  const existingCustomName = Object.keys(state.customCategories).find((category) => category.toLowerCase() === lowerName);
  const targetName = existingCustomName || name;

  state.customCategories[targetName] = keywords;
  if (!state.selectedCategories.includes(targetName)) {
    state.selectedCategories.push(targetName);
  }

  els.customCategoryNameInput.value = "";
  els.customCategoryKeywordsInput.value = "";
  clearSetupError();
  renderCategoryOptions();
  persistDraftSettings();
}

function show(screen) {
  [els.setup, els.categories, els.pass, els.reveal, els.discussion, els.vote, els.result].forEach((section) =>
    section.classList.remove("active")
  );
  screen.classList.add("active");
}

function buzz(ms = 35) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function playerName(index) {
  return state.playerNames[index] || defaultPlayerName(index);
}

function playerNameWithNumber(index) {
  return `${playerName(index)} (Player ${index + 1})`;
}

function setupRound() {
  state.players = readIntegerInput(els.playersInput, DEFAULT_PLAYERS);
  state.impostersCount = readIntegerInput(els.impostersInput, DEFAULT_IMPOSTERS);

  if (state.players < MIN_PLAYERS || state.players > MAX_PLAYERS) {
    els.setupError.textContent = `Players must be between ${MIN_PLAYERS} and ${MAX_PLAYERS}.`;
    return false;
  }

  syncPlayerNameInputs(state.players);
  state.playerNames = normalizePlayerNames(state.players);

  if (state.impostersCount < 1 || state.impostersCount >= state.players) {
    els.setupError.textContent = "Imposters must be at least 1 and less than total players.";
    return false;
  }

  const allCategoryWords = getAllCategoryWords();
  state.selectedCategories = sanitizeSelectedCategories(getSelectedCategories(), allCategoryWords, false);
  if (state.selectedCategories.length === 0) {
    els.setupError.textContent = "Select at least one category.";
    return false;
  }

  state.category = randomFrom(state.selectedCategories);
  const words = allCategoryWords[state.category];
  if (!Array.isArray(words) || words.length === 0) {
    els.setupError.textContent = "Selected categories have no keywords.";
    return false;
  }
  state.word = randomFrom(words);

  state.roles = Array.from({ length: state.players }, () => ({
    imposter: false,
    word: state.word
  }));

  const imposterIndexes = shuffle(Array.from({ length: state.players }, (_, i) => i)).slice(0, state.impostersCount);
  imposterIndexes.forEach((index) => {
    state.roles[index] = { imposter: true, word: null };
  });

  state.currentPlayer = -1;
  state.revealedPlayers = Array.from({ length: state.players }, () => false);
  state.startingPlayerIndex = Math.floor(Math.random() * state.players);
  els.discussionCategory.textContent = `Category this round: ${state.category}`;
  els.discussionStarter.textContent = `${playerNameWithNumber(state.startingPlayerIndex)} starts this round.`;
  clearSetupError();
  renderVoteOptions();
  persistRoundSettings();
  return true;
}

function renderVoteOptions() {
  els.voteInput.textContent = "";
  state.playerNames.forEach((name, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${name} (Player ${index + 1})`;
    els.voteInput.append(option);
  });
}

function goPass() {
  renderPlayerRevealList();
  show(els.pass);
}

function renderPlayerRevealList() {
  els.playerRevealList.textContent = "";
  state.playerNames.forEach((name, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = state.revealedPlayers[index] ? `${name} (Viewed)` : name;
    button.disabled = state.revealedPlayers[index];
    if (state.revealedPlayers[index]) {
      button.classList.add("revealed-player");
    } else {
      button.addEventListener("click", () => revealRole(index));
    }
    els.playerRevealList.append(button);
  });

  const revealedCount = state.revealedPlayers.filter(Boolean).length;
  els.revealProgress.textContent = `${revealedCount}/${state.players} players have viewed roles.`;
}

function revealRole(index) {
  state.currentPlayer = index;
  const role = state.roles[index];
  els.revealTitle.textContent = playerNameWithNumber(index);

  if (role.imposter) {
    els.roleLine.textContent = "You are the IMPOSTER.";
    els.hintLine.textContent = `Category: ${state.category}. You do not get a keyword. Blend in and avoid getting voted out.`;
  } else {
    els.roleLine.textContent = `Keyword: ${role.word}`;
    els.hintLine.textContent = `Category: ${state.category}. You are NOT an imposter. Describe your keyword without saying it exactly.`;
  }

  show(els.reveal);
  buzz();
}

function hideRole() {
  if (!Number.isInteger(state.currentPlayer) || state.currentPlayer < 0 || state.currentPlayer >= state.players) {
    goPass();
    return;
  }

  state.revealedPlayers[state.currentPlayer] = true;
  state.currentPlayer = -1;

  if (!state.revealedPlayers.every(Boolean)) {
    goPass();
    return;
  }

  show(els.discussion);
}

function revealResult() {
  const vote = Number.parseInt(els.voteInput.value, 10);
  const votedRole = state.roles[vote];
  const votedName = Number.isInteger(vote) ? playerNameWithNumber(vote) : "Unknown player";
  const imposters = state.roles
    .map((role, index) => (role.imposter ? playerNameWithNumber(index) : null))
    .filter(Boolean);

  if (!votedRole) {
    els.resultText.textContent = "Invalid vote.";
  } else if (votedRole.imposter) {
    els.resultText.textContent = `Nice! ${votedName} was an imposter.`;
  } else {
    els.resultText.textContent = `Not quite. ${votedName} was innocent.`;
  }

  els.answerText.textContent = `Category: ${state.category} • Civilian keyword: ${state.word} • Imposter(s): ${imposters.join(", ")}`;
  show(els.result);
}

els.playersInput.addEventListener("input", () => {
  const players = clamp(readIntegerInput(els.playersInput, DEFAULT_PLAYERS), MIN_PLAYERS, MAX_PLAYERS);
  syncPlayerNameInputs(players);
  clearSetupError();
  persistDraftSettings();
});

els.impostersInput.addEventListener("input", () => {
  clearSetupError();
  persistDraftSettings();
});

els.openCategoriesBtn.addEventListener("click", () => {
  clearCategoryError();
  renderCategoryOptions();
  show(els.categories);
});

els.selectAllCategoriesBtn.addEventListener("click", () => setAllCategories(true));
els.clearCategoriesBtn.addEventListener("click", () => setAllCategories(false));
els.saveCustomCategoryBtn.addEventListener("click", saveCustomCategory);
els.doneCategoriesBtn.addEventListener("click", () => {
  clearCategoryError();
  state.selectedCategories = getSelectedCategories();
  updateCategorySummary();
  persistDraftSettings();
  show(els.setup);
});

els.startBtn.addEventListener("click", () => {
  if (!setupRound()) return;
  goPass();
});

els.hideBtn.addEventListener("click", hideRole);
els.toVoteBtn.addEventListener("click", () => show(els.vote));
els.revealResultBtn.addEventListener("click", revealResult);
els.playAgainBtn.addEventListener("click", () => {
  if (!setupRound()) return;
  goPass();
});
els.newRoundBtn.addEventListener("click", () => show(els.setup));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      // noop
    });
  });
}
