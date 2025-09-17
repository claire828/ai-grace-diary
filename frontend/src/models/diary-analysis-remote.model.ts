export interface StressLevel {
  score: number
  explanation: string
}

export interface EmotionalState {
  category: string
  moodWords: string[]
  intensity: string
}

export interface DiaryAnalysisRemote {
  stressLevel: StressLevel
  emotionalState: EmotionalState
  gratitude: string[]
  themes: string[]
  positiveNegativeRatio: string
  summary: string
  feedback: string
}
