import React from 'react';
import { Play, Clock, Album } from 'lucide-react';
import { Song } from '../types';

interface MusicCardProps {
  song: Song;
  onPlay?: (song: Song) => void;
}

export const MusicCard: React.FC<MusicCardProps> = ({ song, onPlay }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">
            {song.title}
          </h3>
          <p className="text-gray-600 font-medium">
            {song.artist}
          </p>
        </div>
        
        <button
          onClick={() => onPlay?.(song)}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-110 shadow-lg"
        >
          <Play size={16} fill="currentColor" />
        </button>
      </div>
      
      <div className="space-y-2">
        {song.album && (
          <div className="flex items-center text-sm text-gray-500">
            <Album size={14} className="mr-2" />
            <span>{song.album}</span>
          </div>
        )}
        
        {song.duration && (
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={14} className="mr-2" />
            <span>{song.duration}</span>
          </div>
        )}
      </div>
    </div>
  );
};