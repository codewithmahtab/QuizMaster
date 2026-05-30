// scripts/seed-questions.ts
// Run with: npx tsx scripts/seed-questions.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const questions = [
  // ── GENERAL KNOWLEDGE ──
  {
    text: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answerIndex: 2,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answerIndex: 1,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answerIndex: 3,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "Which country has the largest population?",
    options: ["USA", "India", "China", "Russia"],
    answerIndex: 1,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    answerIndex: 2,
    category: "general",
    difficulty: "medium",
  },
  {
    text: "In which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    answerIndex: 2,
    category: "general",
    difficulty: "medium",
  },
  {
    text: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answerIndex: 1,
    category: "general",
    difficulty: "medium",
  },
  {
    text: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    answerIndex: 2,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "What is the smallest country in the world?",
    options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
    answerIndex: 3,
    category: "general",
    difficulty: "medium",
  },
  {
    text: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    answerIndex: 2,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "How many sides does a hexagon have?",
    options: ["5", "6", "7", "8"],
    answerIndex: 1,
    category: "general",
    difficulty: "easy",
  },
  {
    text: "Which language has the most native speakers?",
    options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    answerIndex: 2,
    category: "general",
    difficulty: "medium",
  },
  {
    text: "What is the speed of light (approx)?",
    options: ["200,000 km/s", "300,000 km/s", "400,000 km/s", "500,000 km/s"],
    answerIndex: 1,
    category: "general",
    difficulty: "medium",
  },
  {
    text: "Which planet is the largest in our solar system?",
    options: ["Saturn", "Neptune", "Uranus", "Jupiter"],
    answerIndex: 3,
    category: "general",
    difficulty: "easy",
  },

  // ── SCIENCE ──
  {
    text: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answerIndex: 2,
    category: "science",
    difficulty: "easy",
  },
  {
    text: "What is the atomic number of Carbon?",
    options: ["4", "6", "8", "12"],
    answerIndex: 1,
    category: "science",
    difficulty: "medium",
  },
  {
    text: "What part of the cell contains DNA?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Cell Wall"],
    answerIndex: 1,
    category: "science",
    difficulty: "easy",
  },
  {
    text: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"],
    answerIndex: 2,
    category: "science",
    difficulty: "easy",
  },
  {
    text: "Which vitamin is produced when skin is exposed to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answerIndex: 3,
    category: "science",
    difficulty: "medium",
  },
  {
    text: "What force keeps planets in orbit around the sun?",
    options: ["Magnetism", "Gravity", "Friction", "Electricity"],
    answerIndex: 1,
    category: "science",
    difficulty: "easy",
  },
  {
    text: "What is H2O commonly known as?",
    options: ["Hydrogen Peroxide", "Water", "Salt", "Oxygen"],
    answerIndex: 1,
    category: "science",
    difficulty: "easy",
  },
  {
    text: "How many bones are in the adult human body?",
    options: ["196", "206", "216", "226"],
    answerIndex: 1,
    category: "science",
    difficulty: "medium",
  },
  {
    text: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answerIndex: 2,
    category: "science",
    difficulty: "medium",
  },
  {
    text: "What is the unit of electrical resistance?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answerIndex: 2,
    category: "science",
    difficulty: "medium",
  },

  // ── HISTORY ──
  {
    text: "Who was the first President of the United States?",
    options: [
      "John Adams",
      "Thomas Jefferson",
      "George Washington",
      "Benjamin Franklin",
    ],
    answerIndex: 2,
    category: "history",
    difficulty: "easy",
  },
  {
    text: "In which year did the Titanic sink?",
    options: ["1910", "1912", "1914", "1916"],
    answerIndex: 1,
    category: "history",
    difficulty: "easy",
  },
  {
    text: "Which empire was ruled by Julius Caesar?",
    options: ["Greek", "Roman", "Ottoman", "Byzantine"],
    answerIndex: 1,
    category: "history",
    difficulty: "easy",
  },
  {
    text: "When did the Berlin Wall fall?",
    options: ["1987", "1988", "1989", "1990"],
    answerIndex: 2,
    category: "history",
    difficulty: "medium",
  },
  {
    text: "Who was the first human to walk on the moon?",
    options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
    answerIndex: 2,
    category: "history",
    difficulty: "easy",
  },
  {
    text: "In which year did India gain independence from Britain?",
    options: ["1945", "1947", "1948", "1950"],
    answerIndex: 1,
    category: "history",
    difficulty: "medium",
  },
  {
    text: "Which country did Hitler belong to?",
    options: ["Germany", "Austria", "Poland", "Switzerland"],
    answerIndex: 1,
    category: "history",
    difficulty: "medium",
  },
  {
    text: "What ancient wonder was located in Alexandria?",
    options: [
      "Hanging Gardens",
      "Colossus of Rhodes",
      "Lighthouse",
      "Statue of Zeus",
    ],
    answerIndex: 2,
    category: "history",
    difficulty: "hard",
  },

  // ── SPORTS ──
  {
    text: "How many players are on a soccer/football team on the field?",
    options: ["9", "10", "11", "12"],
    answerIndex: 2,
    category: "sports",
    difficulty: "easy",
  },
  {
    text: "In which sport is the term 'love' used to mean zero?",
    options: ["Badminton", "Tennis", "Squash", "Table Tennis"],
    answerIndex: 1,
    category: "sports",
    difficulty: "easy",
  },
  {
    text: "Which country has won the most FIFA World Cups?",
    options: ["Germany", "Argentina", "Italy", "Brazil"],
    answerIndex: 3,
    category: "sports",
    difficulty: "medium",
  },
  {
    text: "How many rings are on the Olympic flag?",
    options: ["4", "5", "6", "7"],
    answerIndex: 1,
    category: "sports",
    difficulty: "easy",
  },
  {
    text: "What is the maximum score in a single bowling game?",
    options: ["250", "275", "300", "320"],
    answerIndex: 2,
    category: "sports",
    difficulty: "medium",
  },
  {
    text: "Which sport uses a puck?",
    options: ["Field Hockey", "Ice Hockey", "Lacrosse", "Polo"],
    answerIndex: 1,
    category: "sports",
    difficulty: "easy",
  },
  {
    text: "How long is a standard marathon in kilometers?",
    options: ["40km", "41km", "42.195km", "43km"],
    answerIndex: 2,
    category: "sports",
    difficulty: "medium",
  },

  // ── ENTERTAINMENT ──
  {
    text: "Which movie features the character Jack Sparrow?",
    options: [
      "Gladiator",
      "Pirates of the Caribbean",
      "The Dark Knight",
      "Avatar",
    ],
    answerIndex: 1,
    category: "entertainment",
    difficulty: "easy",
  },
  {
    text: "Who sang 'Thriller' in 1982?",
    options: ["Prince", "Michael Jackson", "David Bowie", "Madonna"],
    answerIndex: 1,
    category: "entertainment",
    difficulty: "easy",
  },
  {
    text: "Which TV show featured a chemistry teacher who makes drugs?",
    options: ["Dexter", "Ozark", "Breaking Bad", "The Wire"],
    answerIndex: 2,
    category: "entertainment",
    difficulty: "easy",
  },
  {
    text: "What is the highest-grossing film of all time (adjusted)?",
    options: ["Titanic", "Gone with the Wind", "Avatar", "Avengers: Endgame"],
    answerIndex: 1,
    category: "entertainment",
    difficulty: "hard",
  },
  {
    text: "Which band sang 'Bohemian Rhapsody'?",
    options: ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"],
    answerIndex: 2,
    category: "entertainment",
    difficulty: "easy",
  },
  {
    text: "In which fictional city does Batman live?",
    options: ["Metropolis", "Star City", "Gotham City", "Central City"],
    answerIndex: 2,
    category: "entertainment",
    difficulty: "easy",
  },
  {
    text: "How many Harry Potter books are there in the main series?",
    options: ["5", "6", "7", "8"],
    answerIndex: 2,
    category: "entertainment",
    difficulty: "easy",
  },
  {
    text: "Who directed the movie 'Inception'?",
    options: [
      "Steven Spielberg",
      "Christopher Nolan",
      "James Cameron",
      "Ridley Scott",
    ],
    answerIndex: 1,
    category: "entertainment",
    difficulty: "medium",
  },
  {
    text: "Which streaming service released 'Stranger Things'?",
    options: ["HBO", "Hulu", "Netflix", "Disney+"],
    answerIndex: 2,
    category: "entertainment",
    difficulty: "easy",
  },
  {
    text: "What is the name of the lion in 'The Lion King'?",
    options: ["Nala", "Rafiki", "Scar", "Simba"],
    answerIndex: 3,
    category: "entertainment",
    difficulty: "easy",
  },
];

async function main() {
  console.log("🌱 Seeding questions...");

  // Clear existing
  await prisma.question.deleteMany({});
  console.log("🗑️  Cleared existing questions");

  // Insert all
  const result = await prisma.question.createMany({
    data: questions,
  });

  console.log(`✅ Seeded ${result.count} questions successfully!`);
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
