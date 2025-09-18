import React from 'react';
import { Quote as QuoteIcon, Share } from 'lucide-react';
import { Quote } from '../types';

interface QuoteCardProps {
  quote: Quote;
  onShare?: (quote: Quote) => void;
}

export const QuoteCard: React.FC<QuoteCardProps> = ({ quote, onShare }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex-shrink-0">
          <QuoteIcon size={18} />
        </div>
        
        <div className="flex-1">
          <blockquote className="text-gray-800 text-lg leading-relaxed mb-4 italic">
            "{quote.text}"
          </blockquote>
          
          <div className="flex items-center justify-between">
            <div className="text-right">
              <p className="text-gray-600 font-semibold">— {quote.author}</p>
            </div>
            
            <button
              onClick={() => onShare?.(quote)}
              className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200"
              title="Share quote"
            >
              <Share size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};