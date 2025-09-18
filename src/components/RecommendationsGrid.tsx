import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Song, Quote, ContentType, Emotion } from '../types';
import { MusicCard } from './MusicCard';
import { QuoteCard } from './QuoteCard';

interface RecommendationsGridProps {
  contentType: ContentType;
  selectedEmotion: Emotion;
  songs: Song[];
  quotes: Quote[];
  onRefresh: () => void;
  onPlaySong?: (song: Song) => void;
  onShareQuote?: (quote: Quote) => void;
}

export const RecommendationsGrid: React.FC<RecommendationsGridProps> = ({
  contentType,
  selectedEmotion,
  songs,
  quotes,
  onRefresh,
  onPlaySong,
  onShareQuote
}) => {
  const content = contentType === 'music' ? songs : quotes;
  const title = contentType === 'music' ? 'Recommended Songs' : 'Inspirational Quotes';
  
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {title} for {selectedEmotion.name} Mood
          </h3>
          <p className="text-white/80">
            Perfect {contentType} to match your {selectedEmotion.description.toLowerCase()}
          </p>
        </div>
        
        <button
          onClick={onRefresh}
          className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-200 border border-white/30"
        >
          <RefreshCw size={18} />
          <span className="font-semibold">Refresh</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((item) => (
          <div key={item.id}>
            {contentType === 'music' ? (
              <MusicCard song={item as Song} onPlay={onPlaySong} />
            ) : (
              <QuoteCard quote={item as Quote} onShare={onShareQuote} />
            )}
          </div>
        ))}
      </div>
      
      {content.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎵</div>
          <p className="text-white/80 text-lg">
            No recommendations found for this emotion. Try selecting a different mood!
          </p>
        </div>
      )}
    </div>
  );
};