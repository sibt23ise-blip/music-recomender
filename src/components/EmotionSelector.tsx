import React from 'react';
import { Emotion } from '../types';

interface EmotionSelectorProps {
  emotions: Emotion[];
  selectedEmotion: Emotion | null;
  onEmotionSelect: (emotion: Emotion) => void;
}

export const EmotionSelector: React.FC<EmotionSelectorProps> = ({
  emotions,
  selectedEmotion,
  onEmotionSelect
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        How are you feeling today?
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {emotions.map((emotion) => {
          const isSelected = selectedEmotion?.id === emotion.id;
          
          return (
            <button
              key={emotion.id}
              onClick={() => onEmotionSelect(emotion)}
              className={`
                relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105
                ${isSelected 
                  ? 'border-white bg-white shadow-xl scale-105' 
                  : 'border-white/30 bg-white/20 hover:bg-white/30 hover:border-white/50'
                }
                backdrop-blur-sm
              `}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{emotion.emoji}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {emotion.name}
                </div>
                <div className="text-xs text-gray-600 leading-tight">
                  {emotion.description}
                </div>
              </div>
              
              {isSelected && (
                <div className="absolute inset-0 rounded-xl ring-4 ring-white/50 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};