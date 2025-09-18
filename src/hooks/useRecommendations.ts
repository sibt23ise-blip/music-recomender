import { useState, useCallback } from 'react';
import { Song, Quote, Emotion } from '../types';
import { musicDatabase, quotesDatabase } from '../data/recommendations';

export const useRecommendations = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getRecommendations = useCallback((emotion: Emotion) => {
    const songs = musicDatabase[emotion.id] || [];
    const quotes = quotesDatabase[emotion.id] || [];
    
    // Shuffle and limit to 6 items for better UX
    return {
      songs: shuffleArray(songs).slice(0, 6),
      quotes: shuffleArray(quotes).slice(0, 6)
    };
  }, [refreshKey]);

  const refreshRecommendations = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  const playSong = useCallback((song: Song) => {
    // In a real app, this would integrate with a music service
    console.log('Playing song:', song.title, 'by', song.artist);
    // You could integrate with Spotify Web Playback SDK or similar
  }, []);

  const shareQuote = useCallback((quote: Quote) => {
    if (navigator.share) {
      navigator.share({
        title: 'Inspirational Quote',
        text: `"${quote.text}" - ${quote.author}`
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    }
  }, []);

  return {
    getRecommendations,
    refreshRecommendations,
    playSong,
    shareQuote
  };
};