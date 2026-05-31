# ⚡️ QuizMaster Pro

QuizMaster Pro is a modern, high-performance multiplayer trivia web application. Built with a focus on premium aesthetics and real-time engagement, players can battle opponents in 1v1 trivia matches, climb the global leaderboard, and earn coins to customize their profiles.

![QuizMaster Preview](https://via.placeholder.com/1200x600.png?text=Add+a+Screenshot+Here)

## ✨ Features

- **⚔️ Live 1v1 Matchmaking:** Real-time multiplayer battles where players race against the clock to answer questions and earn XP/Coins.
- **📈 Progression System:** Level up by gaining XP. Climb from Bronze to Grandmaster ranks based on your performance.
- **🪙 Live Economy & Shop:** Earn coins from winning matches, daily logins, and the spin wheel. Spend coins in the interactive shop to unlock premium Avatars and animated Profile Frames.
- **🎁 Daily Rewards & Spin Wheel:** Engage users with daily login streaks and a physics-based spin wheel for bonus coins.
- **🏆 Global Leaderboards:** See how you stack up against top players worldwide.
- **🎨 Premium UI/UX:** A stunning, fully responsive dark-mode interface built with Tailwind CSS, glassmorphism effects, and fluid Framer Motion animations.
- **🔐 Secure Authentication:** Seamless Google OAuth and email login powered by Clerk.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) installed.

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/codewithmahtab/QuizMaster.git
cd QuizMaster
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Environment Variables
Create a \`.env.local\` file in the root directory and add the following keys:
\`\`\`env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# MongoDB Connection
DATABASE_URL=your_mongodb_connection_string
\`\`\`

### 4. Setup the Database
Push the Prisma schema to your database and seed the initial data:
\`\`\`bash
npx prisma db push
npx tsx scripts/seed-questions.ts
node seedPersonAvatars.js
npx tsx scripts/seed-shop.ts
\`\`\`

### 5. Run the Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/codewithmahtab/QuizMaster/issues).

## 📄 License
This project is licensed under the MIT License.
