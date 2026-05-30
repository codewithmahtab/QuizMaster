// ─────────────────────────────────────────
// Match & Question Types
// ─────────────────────────────────────────

export type MatchType = "casual" | "ranked" | "coin_bet" | "daily" | "tournament";
export type MatchStatus = "pending" | "active" | "completed" | "abandoned";

export interface Question {
  id: string;
  text: string;
  options: string[];         // 4 options
  answerIndex: number;       // 0–3
  category: string;
  difficulty: "easy" | "medium" | "hard";
  explanation?: string | null;
}

// Question without the answer (sent to clients during active match)
export type QuestionForPlayer = Omit<Question, "answerIndex" | "explanation">;

export interface MatchSummary {
  id: string;
  type: MatchType;
  status: MatchStatus;
  player1Id: string;
  player2Id: string | null;
  winnerId: string | null;
  player1Score: number;
  player2Score: number;
  coinStake: number;
  createdAt: Date;
  completedAt: Date | null;
}

export interface MatchResult {
  matchId: string;
  winnerId: string | null;
  player1Score: number;
  player2Score: number;
  coinsEarned: number;
  xpEarned: number;
  rankedPointsChange: number;
}

export interface AnswerSubmission {
  matchId: string;
  questionIndex: number;
  selectedIndex: number;
  timeMs: number;           // milliseconds taken to answer
}
