export interface CodeWarsOverall {
  rank: number;
  name: string;
  color: string;
  score: number;
}

interface CodeWarsLanguage {
  rank: number;
  name: string;
  color: string;
  score: number;
}

interface CodeWarsLanguages {
  [language: string]: CodeWarsLanguage;
}

export interface CodeWarsRanks {
  overall: CodeWarsOverall;
  languages: CodeWarsLanguages[];
}

interface CodeWarsChallenges {
  totalAuthored: number;
  totalCompleted: number;
}

export interface CodeWarsUser {
  id: string;
  username: string;
  name: string | null;
  honor: number;
  clan: string | null;
  leaderboardPosition: number;
  skills: string[] | null;
  ranks: CodeWarsRanks;
  codeChallenges: CodeWarsChallenges;
}

export interface CodeWarsOverallProps {
  readonly item: Partial<CodeWarsUser>;
}
