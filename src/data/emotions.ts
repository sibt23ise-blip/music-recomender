import { Emotion } from '../types';

export const emotions: Emotion[] = [
  {
    id: 'happy',
    name: 'Happy',
    emoji: '😊',
    description: 'Feeling joyful and upbeat',
    color: 'text-yellow-600',
    bgGradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'sad',
    name: 'Sad',
    emoji: '😢',
    description: 'Feeling down or melancholy',
    color: 'text-blue-600',
    bgGradient: 'from-blue-400 to-indigo-600'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    emoji: '😰',
    description: 'Feeling overwhelmed or anxious',
    color: 'text-red-600',
    bgGradient: 'from-red-400 to-pink-500'
  },
  {
    id: 'excited',
    name: 'Excited',
    emoji: '🤩',
    description: 'Feeling energetic and enthusiastic',
    color: 'text-purple-600',
    bgGradient: 'from-purple-400 to-pink-500'
  },
  {
    id: 'calm',
    name: 'Calm',
    emoji: '😌',
    description: 'Feeling peaceful and relaxed',
    color: 'text-green-600',
    bgGradient: 'from-green-400 to-teal-500'
  },
  {
    id: 'motivated',
    name: 'Motivated',
    emoji: '💪',
    description: 'Feeling driven and determined',
    color: 'text-orange-600',
    bgGradient: 'from-orange-400 to-red-500'
  }
];