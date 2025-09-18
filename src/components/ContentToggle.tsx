import React from 'react';
import { Music, Quote } from 'lucide-react';
import { ContentType } from '../types';

interface ContentToggleProps {
  activeContent: ContentType;
  onToggle: (type: ContentType) => void;
}

export const ContentToggle: React.FC<ContentToggleProps> = ({
  activeContent,
  onToggle
}) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 border border-white/30">
        <div className="flex">
          <button
            onClick={() => onToggle('music')}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
              ${activeContent === 'music'
                ? 'bg-white text-gray-800 shadow-lg'
                : 'text-white hover:bg-white/20'
              }
            `}
          >
            <Music size={18} />
            <span>Music</span>
          </button>
          
          <button
            onClick={() => onToggle('quotes')}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
              ${activeContent === 'quotes'
                ? 'bg-white text-gray-800 shadow-lg'
                : 'text-white hover:bg-white/20'
              }
            `}
          >
            <Quote size={18} />
            <span>Quotes</span>
          </button>
        </div>
      </div>
    </div>
  );
};