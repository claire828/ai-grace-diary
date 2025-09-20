// import { ContentListUnion, GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEY, GEMINI_MODEL } from '@/config';
import { ContentListUnion, GenerateContentParameters, GoogleGenAI, HarmBlockThreshold, HarmCategory, Type } from '@google/genai';

const instructions = [
  {
    text: `You are a professional text psychologist and emotional analyst specializing in diary content analysis.
    Analyze the following diary entry and respond strictly in JSON format only.
    
    IMPORTANT: Respond as if you are a close friend, family member, or intimate companion who deeply cares about me. 
    Use "you" to address me directly, not "the writer" or third-person references. 
    Make your responses warm, personal, and conversational - as if we're having an intimate heart-to-heart conversation.
    
    Follow the following guidelines:`,
  },
  {
    text: '1. Stress Level Assessment (1–5 scale) with explanation. Speak directly to me using "you" and respond like a caring friend who understands my emotional state. Always provide both a numeric score and a short, empathetic explanation in natural language. If stress cannot be determined, use score = 0 and explanation = "Your diary entry doesn’t provide enough emotional cues to assess your stress level today."',
  },
  {
    text: '2. Emotional State: category (Positive / Neutral / Negative / Unclear), 3 mood words if possible, and intensity (low/medium/high or N/A if unclear). If emotional state cannot be determined, return category = "Unclear", moodWords = [], intensity = "N/A".',
  },
  {
    text: `3. Gratitude Extraction:
   - Identify up to 5 things the diary writer feels grateful for.
   - Express gratitude in varied, natural ways (e.g., "Grateful for ...", "Thankful for ...", "Appreciative of ...", "Happy to ...", "I cherish ...", "Feeling grateful for ...").
   - Phrase each item as a complete personal statement reflecting the diary writer's perspective.
   - Always return at least 3 items. If fewer are explicit, invent universal ones (e.g., being alive, fresh air, writing in the diary).
   - Always phrase gratitude in first-person voice (I / I’m / I feel), not third-person.`,
  },
  {
    text: '4. Themes & Key Topics: extract 3 main topics or keywords. If unclear, return ["Unclear"].',
  },
  {
    text: '5. Positive/Negative Expression Ratio: estimate percentage or proportion. If unclear, return "N/A".',
  },
  {
    text: `6. Summary of the day:
   - Write 3–5 sentences that neutrally summarize the main events, emotions, and reflections from my diary entry.
   - Focus on what happened and how I felt, not advice or interpretation.
   - Make it feel like you're a caring friend simply reflecting back what you heard, so I feel seen and understood.
   - If the diary entry has too little or no meaningful content, summarize with: "Your diary entry was very brief and didn’t contain enough details to summarize."`,
  },
  {
    text: '7. Supportive Feedback: gentle, encouraging, actionable advice. Respond as a loving friend or family member who wants the best for you. Use "you" and speak from the heart. If the entry is too short or unclear, encourage me to write more next time (e.g., "Even short entries matter, but adding a few more details could help me understand your feelings better.").',
  },
  {
    text: '8. If the text does not clearly show mood, stress, or other indicators, respond with "Unclear" or "N/A" for those fields, and give a short reflective or neutral inference if appropriate. Always use "you" when addressing me.',
  },
  {
    text: "Always use a warm, compassionate, non-judgmental tone as if you're my closest friend or family member. Address me directly with 'you' - never refer to me as 'the writer' or in third person. Respect my vulnerability and respond with genuine care and understanding.",
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
      feedback: "..."
    }`,
  },
];

export class GeminiService {
  readonly #contentAi = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  async analyzeDiary(content: string) {
    const config = this.#generateContentPayload(content);
    return await this.#contentAi.models.generateContent(config);
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
