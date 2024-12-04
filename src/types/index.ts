export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility';
  description: string;
  imageUrl: string;
}

export interface Workout {
  id: string;
  name: string;
  exercises: WorkoutExercise[];
  duration: number;
  date: string;
  calories?: number;
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: number;
  reps: number;
  weight?: number;
}

export interface WorkoutStats {
  totalWorkouts: number;
  totalExercises: number;
  favoriteCategory: string;
  totalCalories: number;
}