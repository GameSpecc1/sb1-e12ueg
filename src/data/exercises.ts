import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: '1',
    name: 'Push-ups',
    category: 'strength',
    description: 'Classic bodyweight exercise targeting chest, shoulders, and triceps',
    imageUrl: 'https://images.unsplash.com/photo-1598971639058-999901021c1a?auto=format&fit=crop&q=80&w=2376'
  },
  {
    id: '2',
    name: 'Squats',
    category: 'strength',
    description: 'Fundamental lower body exercise for strength and stability',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=2369'
  },
  {
    id: '3',
    name: 'Running',
    category: 'cardio',
    description: 'Effective cardiovascular exercise for endurance',
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=2370'
  }
];