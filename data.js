/**
 * ============================================================
 *  SPORTS SANTA QUIZ — GAME DATA
 *  Edit this file to change photos, names & answers.
 *  No coding knowledge needed!
 * ============================================================
 *
 *  HOW TO ADD YOUR OWN PHOTO:
 *  1. Put your image file in the same folder as index.html
 *     e.g.  my_photo.jpg
 *  2. In the entry below, set:
 *        img: 'my_photo.jpg'
 *
 *  HOW TO CHANGE THE QUIZ QUESTION:
 *  - correct : the RIGHT answer (the real person's name)
 *  - wrong   : exactly 2 wrong names (red herrings)
 *  - hint    : shown after the answer is revealed
 *  - sport   : label shown in the modal header
 *
 *  THAT'S IT! Save the file, push to GitHub and it goes live.
 * ============================================================
 */

const DAYS = [

  // ── DAY 1 ──────────────────────────────────────────────────
  {
    day:     1,
    img:     'img_boxer.png',        // 👈 swap for your own file e.g. 'anthony_joshua.jpg'
    sport:   'Boxing 🥊',
    correct: 'Anthony Joshua',       // 👈 the right answer
    wrong:   ['Tyson Fury',          // 👈 two wrong answers (order doesn't matter)
              'David Haye'],
    hint:    'British heavyweight world champion & Olympic gold medallist',
  },

  // ── DAY 2 ──────────────────────────────────────────────────
  {
    day:     2,
    img:     'img_f1.png',
    sport:   'Formula 1 🏎️',
    correct: 'Lewis Hamilton',
    wrong:   ['Max Verstappen', 'Nico Rosberg'],
    hint:    '7-time Formula 1 world champion',
  },

  // ── DAY 3 ──────────────────────────────────────────────────
  {
    day:     3,
    img:     'img_golfer.png',
    sport:   'Golf ⛳',
    correct: 'Rory McIlroy',
    wrong:   ['Tiger Woods', 'Jon Rahm'],
    hint:    'Northern Irish golfer, 4 major titles',
  },

  // ── DAY 4 ──────────────────────────────────────────────────
  {
    day:     4,
    img:     'img_athlete.png',
    sport:   'Athletics 🏃',
    correct: 'Usain Bolt',
    wrong:   ['Mo Farah', 'Yohan Blake'],
    hint:    'The fastest man in history, triple Olympic champion',
  },

  // ── DAY 5 ──────────────────────────────────────────────────
  {
    day:     5,
    img:     'img_rugby.png',
    sport:   'Rugby Union 🏉',
    correct: 'Jonny Wilkinson',
    wrong:   ['Martin Johnson', 'Lawrence Dallaglio'],
    hint:    'Drop-kicked England to World Cup glory in 2003',
  },

  // ── DAY 6 ──────────────────────────────────────────────────
  {
    day:     6,
    img:     'img_swimmer.png',
    sport:   'Swimming 🏊',
    correct: 'Michael Phelps',
    wrong:   ['Adam Peaty', 'Ian Thorpe'],
    hint:    'Most decorated Olympian of all time with 23 gold medals',
  },

  // ── DAY 7 ──────────────────────────────────────────────────
  {
    day:     7,
    img:     'img_basketball.png',
    sport:   'Basketball 🏀',
    correct: 'LeBron James',
    wrong:   ['Michael Jordan', 'Kevin Durant'],
    hint:    'The King – 4-time NBA champion',
  },

  // ── DAY 8 ──────────────────────────────────────────────────
  {
    day:     8,
    img:     'img_snooker.png',
    sport:   'Snooker 🎱',
    correct: "Ronnie O'Sullivan",
    wrong:   ['Mark Selby', 'Judd Trump'],
    hint:    'The Rocket – 7-time World Snooker Champion',
  },

  // ── DAY 9 ──────────────────────────────────────────────────
  {
    day:     9,
    img:     'img_f1.png',
    sport:   'Formula 1 🏎️',
    correct: 'Max Verstappen',
    wrong:   ['Lewis Hamilton', 'Charles Leclerc'],
    hint:    'Dutch sensation, youngest ever F1 champion',
  },

  // ── DAY 10 ─────────────────────────────────────────────────
  {
    day:     10,
    img:     'img_boxer.png',
    sport:   'Boxing 🥊',
    correct: 'Tyson Fury',
    wrong:   ['Anthony Joshua', 'Oleksandr Usyk'],
    hint:    'The Gypsy King – WBC heavyweight champion from Manchester',
  },

  // ── DAY 11 ─────────────────────────────────────────────────
  {
    day:     11,
    img:     'img_golfer.png',
    sport:   'Golf ⛳',
    correct: 'Tiger Woods',
    wrong:   ['Rory McIlroy', 'Phil Mickelson'],
    hint:    '15-time major champion who changed golf forever',
  },

  // ── DAY 12 ─────────────────────────────────────────────────
  {
    day:     12,
    img:     'img_athlete.png',
    sport:   'Athletics 🏃',
    correct: 'Mo Farah',
    wrong:   ['Usain Bolt', 'Colin Jackson'],
    hint:    'British double Olympic champion at 5,000m and 10,000m',
  },

  // ── DAY 13 ─────────────────────────────────────────────────
  {
    day:     13,
    img:     'img_rugby.png',
    sport:   'Rugby Union 🏉',
    correct: 'Martin Johnson',
    wrong:   ['Jonny Wilkinson', 'Will Carling'],
    hint:    'England captain who lifted the Webb Ellis Cup in 2003',
  },

  // ── DAY 14 ─────────────────────────────────────────────────
  {
    day:     14,
    img:     'img_swimmer.png',
    sport:   'Swimming 🏊',
    correct: 'Adam Peaty',
    wrong:   ['Michael Phelps', 'Tom Dean'],
    hint:    'British breaststroke star & world record holder',
  },

  // ── DAY 15 ─────────────────────────────────────────────────
  {
    day:     15,
    img:     'img_basketball.png',
    sport:   'Basketball 🏀',
    correct: 'Michael Jordan',
    wrong:   ['LeBron James', 'Kobe Bryant'],
    hint:    'His Airness – 6 NBA titles, 6 Finals MVPs',
  },

  // ── DAY 16 ─────────────────────────────────────────────────
  {
    day:     16,
    img:     'img_snooker.png',
    sport:   'Snooker 🎱',
    correct: 'Judd Trump',
    wrong:   ["Ronnie O'Sullivan", 'Neil Robertson'],
    hint:    'Bristol-born world champion known for his attacking play',
  },

  // ── DAY 17 ─────────────────────────────────────────────────
  {
    day:     17,
    img:     'img_boxer.png',
    sport:   'Boxing 🥊',
    correct: 'David Haye',
    wrong:   ['Tyson Fury', 'Lennox Lewis'],
    hint:    'The Hayemaker – unified cruiserweight & WBA heavyweight champion',
  },

  // ── DAY 18 ─────────────────────────────────────────────────
  {
    day:     18,
    img:     'img_f1.png',
    sport:   'Formula 1 🏎️',
    correct: 'Sebastian Vettel',
    wrong:   ['Max Verstappen', 'Kimi Räikkönen'],
    hint:    '4-time consecutive world champion with Red Bull Racing',
  },

  // ── DAY 19 ─────────────────────────────────────────────────
  {
    day:     19,
    img:     'img_golfer.png',
    sport:   'Golf ⛳',
    correct: 'Phil Mickelson',
    wrong:   ['Tiger Woods', 'Dustin Johnson'],
    hint:    'Lefty – 6 major championships including 3 Masters titles',
  },

  // ── DAY 20 ─────────────────────────────────────────────────
  {
    day:     20,
    img:     'img_athlete.png',
    sport:   'Athletics 🏃',
    correct: 'Colin Jackson',
    wrong:   ['Mo Farah', 'Linford Christie'],
    hint:    'Welsh sprinter & world record holder in 110m hurdles',
  },

  // ── DAY 21 ─────────────────────────────────────────────────
  {
    day:     21,
    img:     'img_rugby.png',
    sport:   'Rugby Union 🏉',
    correct: "Brian O'Driscoll",
    wrong:   ['Martin Johnson', "Paul O'Connell"],
    hint:    "Ireland's greatest ever player, British Lions legend",
  },

  // ── DAY 22 ─────────────────────────────────────────────────
  {
    day:     22,
    img:     'img_swimmer.png',
    sport:   'Swimming 🏊',
    correct: 'Ian Thorpe',
    wrong:   ['Michael Phelps', 'Grant Hackett'],
    hint:    'The Thorpedo – Australian 5-time Olympic gold medallist',
  },

  // ── DAY 23 ─────────────────────────────────────────────────
  {
    day:     23,
    img:     'img_basketball.png',
    sport:   'Basketball 🏀',
    correct: 'Stephen Curry',
    wrong:   ['LeBron James', 'Kevin Durant'],
    hint:    'Golden State sharpshooter who revolutionised the three-point shot',
  },

  // ── DAY 24 ─────────────────────────────────────────────────
  {
    day:     24,
    img:     'img_snooker.png',
    sport:   'Snooker 🎱',
    correct: 'Mark Selby',
    wrong:   ["Ronnie O'Sullivan", 'John Higgins'],
    hint:    'The Jester from Leicester – 4-time World Snooker Champion',
  },

  // ── DAY 25 ─────────────────────────────────────────────────
  {
    day:     25,
    img:     'img_boxer.png',
    sport:   'Boxing 🥊',
    correct: 'Lennox Lewis',
    wrong:   ['Evander Holyfield', 'Riddick Bowe'],
    hint:    'British-Canadian legend – undisputed heavyweight champion of the world',
  },

];
