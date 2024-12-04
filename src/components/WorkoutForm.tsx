import React, { useState } from 'react';
import { Exercise, WorkoutExercise } from '../types';
import { PlusCircle, Trash2 } from 'lucide-react';

interface WorkoutFormProps {
  exercises: Exercise[];
  onSave: (workout: { name: string; exercises: WorkoutExercise[] }) => void;
}

export function WorkoutForm({ exercises, onSave }: WorkoutFormProps) {
  const [workoutName, setWorkoutName] = useState('');
  const [selectedExercises, setSelectedExercises] = useState<WorkoutExercise[]>([]);

  const handleAddExercise = () => {
    setSelectedExercises([
      ...selectedExercises,
      { exerciseId: exercises[0].id, sets: 3, reps: 10 }
    ]);
  };

  const handleRemoveExercise = (index: number) => {
    setSelectedExercises(selectedExercises.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name: workoutName, exercises: selectedExercises });
    setWorkoutName('');
    setSelectedExercises([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Workout Name
        </label>
        <input
          type="text"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="space-y-4">
        {selectedExercises.map((exercise, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <select
              value={exercise.exerciseId}
              onChange={(e) => {
                const newExercises = [...selectedExercises];
                newExercises[index].exerciseId = e.target.value;
                setSelectedExercises(newExercises);
              }}
              className="flex-1 rounded-md border-gray-300"
            >
              {exercises.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Sets"
              value={exercise.sets}
              onChange={(e) => {
                const newExercises = [...selectedExercises];
                newExercises[index].sets = Number(e.target.value);
                setSelectedExercises(newExercises);
              }}
              className="w-20 rounded-md border-gray-300"
              min="1"
            />
            <input
              type="number"
              placeholder="Reps"
              value={exercise.reps}
              onChange={(e) => {
                const newExercises = [...selectedExercises];
                newExercises[index].reps = Number(e.target.value);
                setSelectedExercises(newExercises);
              }}
              className="w-20 rounded-md border-gray-300"
              min="1"
            />
            <button
              type="button"
              onClick={() => handleRemoveExercise(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleAddExercise}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <PlusCircle size={20} />
          Add Exercise
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Workout
        </button>
      </div>
    </form>
  );
}