// import { ContentListUnion, GoogleGenAI } from '@google/genai';
import { ContentListUnion } from '@google/genai';

const instructions = [
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

export class GeminiService {
  // readonly #contentAi = new GoogleGenAI({ apiKey: '' });

  async analyzeDiary(content: string) {
    // const contentAi = new GoogleGenAI({ apiKey: 'AIzaSyC0rx4_Xb_1-2JeqrKsXaYTrFMXGF1Z6Vs' });
    const payload = this.#generateContentPayload(content);
    console.log('send to gemini api:', content);
    // return await this.#contentAi.models.generateContent(payload);
  }

  #generateContentPayload(contents: ContentListUnion) {
    return {
      model: 'gemini-2.0-flash',
      contents,
      systemInstruction: {
        parts: [...instructions],
      },
      safetySettings: [
        {
          category: 'HARM_CATEGORY_HARASSMENT',
          threshold: 'BLOCK_MEDIUM_AND_ABOVE',
        },
      ],
      generationConfig: {
        temperature: 0.8,
        topP: 0.9,
        maxOutputTokens: 512,
      },
    };
  }
}

// Export singleton instance
export const geminiService = new GeminiService();
