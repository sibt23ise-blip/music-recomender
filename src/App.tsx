import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Emotion, ContentType, Song, Quote } from './types';
import { emotions } from './data/emotions';
import { EmotionSelector } from './components/EmotionSelector';
import { ContentToggle } from './components/ContentToggle';
import { RecommendationsGrid } from './components/RecommendationsGrid';
import { useRecommendations } from './hooks/useRecommendations';

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | null>(null);
  const [contentType, setContentType] = useState<ContentType>('music');
  const [recommendations, setRecommendations] = useState<{ songs: Song[]; quotes: Quote[] }>({
    songs: [],
    quotes: []
  });

  const { getRecommendations, refreshRecommendations, playSong, shareQuote } = useRecommendations();

  useEffect(() => {
    if (selectedEmotion) {
      const newRecommendations = getRecommendations(selectedEmotion);
      setRecommendations(newRecommendations);
    }
  }, [selectedEmotion, getRecommendations]);

  const handleRefresh = () => {
    refreshRecommendations();
  };

  const gradientClass = selectedEmotion 
    ? `bg-gradient-to-br ${selectedEmotion.bgGradient}` 
    : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500';

  return (
    <div className={`min-h-screen ${gradientClass} transition-all duration-700 p-6`}>
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
              <Heart className="text-white" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              MoodSync
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover music and quotes that perfectly match your current emotional state. 
            Let your feelings guide your next favorite song or inspiration.
          </p>
        </header>

        {/* Emotion Selector */}
        <EmotionSelector 
          emotions={emotions}
          selectedEmotion={selectedEmotion}
          onEmotionSelect={setSelectedEmotion}
        />

        {/* Content Toggle & Recommendations */}
        {selectedEmotion && (
          <div className="space-y-8">
            <ContentToggle 
              activeContent={contentType}
              onToggle={setContentType}
            />
            
            <RecommendationsGrid 
              contentType={contentType}
              selectedEmotion={selectedEmotion}
              songs={recommendations.songs}
              quotes={recommendations.quotes}
              onRefresh={handleRefresh}
              onPlaySong={playSong}
              onShareQuote={shareQuote}
            />
          </div>
        )}

        {/* Welcome State */}
        {!selectedEmotion && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🎭</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to Your Personal Mood Assistant
            </h2>
            <p className="text-xl text-white/80 max-w-lg mx-auto">
              Select your current emotion above to get personalized music and quote recommendations 
              that resonate with how you're feeling right now.
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-20 pb-6">
          <p className="text-white/60">
            Built with ❤️ to help you find the perfect soundtrack and inspiration for your mood
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;