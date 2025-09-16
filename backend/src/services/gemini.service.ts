import { GEMINI_API_KEY, GEMINI_MODEL } from '@/config';
import pq from '@database';
import { ContentListUnion, GoogleGenAI, SafetyFilterLevel } from '@google/genai';
import Container, { Service } from 'typedi';
import { DiaryService } from './diary.service';

@Service()
export class GeminiService {
  readonly #diaryService = Container.get(DiaryService);
  readonly #contentAi = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  readonly #instructions = [
    { text: 'You are a professional text psychologist and emotional analyst specializing in diary content analysis.' },
    { text: 'When analyzing diary text, provide the following:' },
    { text: '1. Stress Level Assessment (1–5 scale) with explanation;' },
    {
      text: '2. Emotional State: categorize mood (Positive / Neutral / Negative) with specific mood words like Happy, Anxious, Reflective, etc. and intensity (low/medium/high);',
    },
    { text: '3. Gratitude Extraction: up to 5 items; if none explicit, infer indirect positives; if none, say gratitude is not clearly expressed.' },
    { text: '4. Themes & Key Topics: extract main topics or keywords from the diary entry.' },
    { text: '5. Positive/Negative Expression Ratio: estimate percentage or proportion.' },
    { text: '6. Summary of the day: 3–5 sentences focusing on main events, emotions, reflections.' },
    { text: '7. Supportive Feedback: gentle, encouraging, actionable advice.' },
    {
      text: 'If the text does not clearly show mood or stress, respond that emotional indicators are unclear and optionally give neutral or reflective inference.',
    },
    { text: "Always use a compassionate, non-judgmental tone. Avoid making assumptions. Respect the user's vulnerability." },
  ];

  async analyzeDiary(id: number) {
    const diary = await pq.query('SELECT * FROM diary WHERE id = $1', [id]).then(res => res.rows[0] ?? null);
    if (!diary) throw new Error('Diary not found');
    // await pq.query('UPDATE diary SET status = $1 WHERE id = $2', ['analyzing', id]);
    return await this.#contentAi.models.generateContent(this.#generateContentPayload(diary.content));
  }

  #generateContentPayload(contents: ContentListUnion) {
    // this.#contentAi.models.generateContent();
    return {
      model: GEMINI_MODEL,
      contents,
      config: {
        SafetyFilterLevel: SafetyFilterLevel.BLOCK_MEDIUM_AND_ABOVE,
        systemInstruction: {
          parts: [...this.#instructions],
        },
      },
      generationConfig: {
        temperature: 0.8,
        topP: 0.9,
        maxOutputTokens: 512,
      },
    };
  }
}
