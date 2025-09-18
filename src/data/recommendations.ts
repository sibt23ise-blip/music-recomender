import { Song, Quote } from '../types';

export const musicDatabase: Record<string, Song[]> = {
  happy: [
    { id: '1', title: 'Good as Hell', artist: 'Lizzo', album: 'Cuz I Love You', duration: '2:39' },
    { id: '2', title: 'Happy', artist: 'Pharrell Williams', album: 'G I R L', duration: '3:53' },
    { id: '3', title: 'Can\'t Stop the Feeling', artist: 'Justin Timberlake', duration: '3:56' },
    { id: '4', title: 'Walking on Sunshine', artist: 'Katrina & The Waves', duration: '3:58' },
    { id: '5', title: 'Good Vibes', artist: 'Chris Janson', duration: '3:21' }
  ],
  sad: [
    { id: '6', title: 'Someone Like You', artist: 'Adele', album: '21', duration: '4:45' },
    { id: '7', title: 'Mad World', artist: 'Gary Jules', duration: '3:07' },
    { id: '8', title: 'Hurt', artist: 'Johnny Cash', duration: '3:38' },
    { id: '9', title: 'Black', artist: 'Pearl Jam', duration: '5:43' },
    { id: '10', title: 'Tears in Heaven', artist: 'Eric Clapton', duration: '4:32' }
  ],
  stressed: [
    { id: '11', title: 'Breathe Me', artist: 'Sia', duration: '4:30' },
    { id: '12', title: 'Weightless', artist: 'Marconi Union', duration: '8:08' },
    { id: '13', title: 'Clair de Lune', artist: 'Claude Debussy', duration: '5:20' },
    { id: '14', title: 'River', artist: 'Joni Mitchell', duration: '4:00' },
    { id: '15', title: 'Mad World', artist: 'Tears for Fears', duration: '3:37' }
  ],
  excited: [
    { id: '16', title: 'Uptown Funk', artist: 'Bruno Mars ft. Mark Ronson', duration: '4:30' },
    { id: '17', title: 'I Gotta Feeling', artist: 'Black Eyed Peas', duration: '4:49' },
    { id: '18', title: 'Thunder', artist: 'Imagine Dragons', duration: '3:07' },
    { id: '19', title: 'High Hopes', artist: 'Panic! At The Disco', duration: '3:01' },
    { id: '20', title: 'Shut Up and Dance', artist: 'Walk the Moon', duration: '3:09' }
  ],
  calm: [
    { id: '21', title: 'Aqueous Transmission', artist: 'Incubus', duration: '7:49' },
    { id: '22', title: 'Holocene', artist: 'Bon Iver', duration: '5:36' },
    { id: '23', title: 'Spiegel im Spiegel', artist: 'Arvo Pärt', duration: '6:00' },
    { id: '24', title: 'River', artist: 'Leon Bridges', duration: '3:42' },
    { id: '25', title: 'Mad About You', artist: 'Sting', duration: '3:56' }
  ],
  motivated: [
    { id: '26', title: 'Eye of the Tiger', artist: 'Survivor', duration: '4:04' },
    { id: '27', title: 'Stronger', artist: 'Kelly Clarkson', duration: '3:42' },
    { id: '28', title: 'Fight Song', artist: 'Rachel Platten', duration: '3:23' },
    { id: '29', title: 'Roar', artist: 'Katy Perry', duration: '3:43' },
    { id: '30', title: 'Titanium', artist: 'David Guetta ft. Sia', duration: '4:05' }
  ]
};

export const quotesDatabase: Record<string, Quote[]> = {
  happy: [
    { id: '1', text: 'Happiness is not something ready made. It comes from your own actions.', author: 'Dalai Lama' },
    { id: '2', text: 'The best way to cheer yourself up is to try to cheer somebody else up.', author: 'Mark Twain' },
    { id: '3', text: 'Happiness is when what you think, what you say, and what you do are in harmony.', author: 'Mahatma Gandhi' },
    { id: '4', text: 'Life is really simple, but we insist on making it complicated.', author: 'Confucius' },
    { id: '5', text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' }
  ],
  sad: [
    { id: '6', text: 'The wound is the place where the Light enters you.', author: 'Rumi' },
    { id: '7', text: 'You have been assigned this mountain to show others it can be moved.', author: 'Mel Robbins' },
    { id: '8', text: 'The darkest nights produce the brightest stars.', author: 'John Green' },
    { id: '9', text: 'Pain is temporary. Quitting lasts forever.', author: 'Lance Armstrong' },
    { id: '10', text: 'Every ending is a new beginning.', author: 'Marianne Williamson' }
  ],
  stressed: [
    { id: '11', text: 'You have power over your mind - not outside events. Realize this, and you will find strength.', author: 'Marcus Aurelius' },
    { id: '12', text: 'Stress is caused by being here but wanting to be there.', author: 'Eckhart Tolle' },
    { id: '13', text: 'The greatest weapon against stress is our ability to choose one thought over another.', author: 'William James' },
    { id: '14', text: 'Take time to make your soul happy.', author: 'Unknown' },
    { id: '15', text: 'Breathe in peace, breathe out stress.', author: 'Unknown' }
  ],
  excited: [
    { id: '16', text: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney' },
    { id: '17', text: 'Great things never come from comfort zones.', author: 'Unknown' },
    { id: '18', text: 'Dream it. Wish it. Do it.', author: 'Unknown' },
    { id: '19', text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
    { id: '20', text: 'Adventure is worthwhile in itself.', author: 'Amelia Earhart' }
  ],
  calm: [
    { id: '21', text: 'Peace comes from within. Do not seek it without.', author: 'Buddha' },
    { id: '22', text: 'Calmness is the cradle of power.', author: 'Josiah Gilbert Holland' },
    { id: '23', text: 'In the midst of winter, I found there was, within me, an invincible summer.', author: 'Albert Camus' },
    { id: '24', text: 'Silence is a source of great strength.', author: 'Lao Tzu' },
    { id: '25', text: 'Be still and know.', author: 'Psalm 46:10' }
  ],
  motivated: [
    { id: '26', text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill' },
    { id: '27', text: 'The only impossible journey is the one you never begin.', author: 'Tony Robbins' },
    { id: '28', text: 'Your limitation—it\'s only your imagination.', author: 'Unknown' },
    { id: '29', text: 'Push yourself, because no one else is going to do it for you.', author: 'Unknown' },
    { id: '30', text: 'Don\'t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' }
  ]
};