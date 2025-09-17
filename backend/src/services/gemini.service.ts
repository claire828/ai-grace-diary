// import { ContentListUnion, GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEY, GEMINI_MODEL } from '@/config';
import { ContentListUnion, GenerateContentParameters, GoogleGenAI, HarmBlockThreshold, HarmCategory, Type } from '@google/genai';

const instructions = [
  {
    text: `You are a professional text psychologist and emotional analyst specializing in diary content analysis.
    Analyze the following diary entry and respond strictly in JSON format only.
    Follow the following guidelines:`,
  },
  {
    text: '1. Stress Level Assessment (1–5 scale) with explanation.',
  },
  {
    text: '2. Emotional State: category (Positive / Neutral / Negative), specific 3 mood words (e.g., Happy, Anxious, Reflective), and intensity (low/medium/high).',
  },
  {
    text: `3. Gratitude Extraction:
   - Identify up to 5 things the diary writer feels grateful for.
   - Express gratitude in varied, natural ways (e.g., "Grateful for ...", "Thankful for ...", "Appreciative of ...", "Happy to ...", "I cherish ...", "Feeling grateful for ...").
   - Phrase each item as a complete personal statement reflecting the diary writer's perspective.
   - Always return at least 3 items. If fewer are explicit, invent universal ones (e.g., being alive, fresh air, writing in the diary).`,
  },
  {
    text: '4. Themes & Key Topics: extract 3 main topics or keywords from the diary entry.',
  },
  {
    text: '5. Positive/Negative Expression Ratio: estimate percentage or proportion.',
  },
  {
    text: `6. Summary of the day:
   - Write 3–5 sentences summarizing the main events, emotions, and reflections of the diary entry.
   - Write in the first-person perspective as if the AI is the diary writer.
   - Use a compassionate and empathetic tone, reflecting the diary writer's feelings and experiences.
   - Make it feel like a polished, personal diary entry rather than a dry summary.`,
  },
  {
    text: '7. Supportive Feedback: gentle, encouraging, actionable advice.',
  },
  {
    text: '8. If the text does not clearly show mood or stress, respond that emotional indicators are unclear and optionally give neutral or reflective inference.',
  },
  {
    text: "Always use a compassionate, non-judgmental tone. Avoid making assumptions. Respect the user's vulnerability.",
  },
  {
    text: `Output JSON must match this schema:
    {
      stressLevel: { score: 1, explanation: "..." },
      emotionalState: { category: "Positive", moodWords: ["Happy"], intensity: "medium" },
      gratitude: [
        "Grateful for ...",
        "Thankful for ...",
        "Appreciative of ...",
        "Happy to ...",
        "I cherish ..."
      ],
      themes: ["..."],
      positiveNegativeRatio: "70/30",
      summary: "...",
      feedback": "..."
    }`,
  },
];

export class GeminiService {
  readonly #contentAi = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  async analyzeDiary(content: string) {
    const payload = this.#generateContentPayload(content);
    console.log('===send to gemini api====');
    return await this.#contentAi.models.generateContent(payload);
  }

  #generateContentPayload(contents: ContentListUnion): GenerateContentParameters {
    return {
      model: GEMINI_MODEL,
      contents,
      config: {
        systemInstruction: {
          parts: [...instructions],
        },
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
        ],
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            stressLevel: {
              type: Type.OBJECT,
              properties: {
                score: { type: Type.INTEGER, minimum: 1, maximum: 5 },
                explanation: { type: Type.STRING },
              },
              required: ['score', 'explanation'],
            },
            emotionalState: {
              type: Type.OBJECT,
              properties: {
                category: { type: Type.STRING, enum: ['Positive', 'Neutral', 'Negative'] },
                moodWords: {
                  type: Type.ARRAY,
                  items: { type: 'string' },
                },
                intensity: { type: Type.STRING, enum: ['low', 'medium', 'high'] },
              },
              required: ['category', 'moodWords', 'intensity'],
            },
            gratitude: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            themes: {
              type: Type.ARRAY,
              items: { type: 'string' },
            },
            positiveNegativeRatio: { type: Type.STRING },
            summary: { type: Type.STRING },
            feedback: { type: Type.STRING },
          },
          required: ['stressLevel', 'emotionalState', 'gratitude', 'themes', 'positiveNegativeRatio', 'summary', 'feedback'],
        },
        temperature: 0.8,
        topP: 0.9,
      },
    };
  }
}

export const geminiService = new GeminiService();
