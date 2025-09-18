-- Create types for diary
CREATE TYPE status AS ENUM ('draft', 'analyzing', 'analyzed');

-- If Exists Table Drop
DROP TABLE IF EXISTS diary cascade;
DROP TABLE IF EXISTS diary_analysis cascade;

CREATE TABLE diary (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) NOT NULL DEFAULT 'draft'
);

CREATE TABLE diary_analysis (
  id SERIAL PRIMARY KEY,
  diary_id INT NOT NULL REFERENCES diary(id) ON DELETE CASCADE,
  
  -- StressLevel
  stress_score SMALLINT CHECK (stress_score BETWEEN 1 AND 5),
  stress_explanation TEXT,
  
  -- EmotionalState
  emotion_category VARCHAR(50), -- e.g. happy, anxious, peaceful
  emotion_words TEXT[],         -- moodWords, PostgreSQL array
  emotion_intensity VARCHAR(20), -- e.g. low, medium, high
  
  -- Gratitude
  gratitude TEXT[],              -- gratitude list
  
  -- Themes
  themes TEXT[],                 -- recurring themes
  
  -- Positive/Negative Ratio
  positive_negative_ratio VARCHAR(20), -- e.g. "70/30", or "Mostly Positive"
  
  -- Summary & Feedback
  summary TEXT,
  feedback TEXT,
  
  -- Meta
  model_version VARCHAR(50) DEFAULT 'gemini-1.5', -- which model produced it
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);