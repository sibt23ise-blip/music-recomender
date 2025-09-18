export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration?: string;
  genre?: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  category?: string;
}

export interface Emotion {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: string;
  bgGradient: string;
}

export type ContentType = 'music' | 'quotes';