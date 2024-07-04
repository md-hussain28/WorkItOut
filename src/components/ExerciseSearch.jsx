import React, { useState } from 'react';
import Modal from './Modal';

const ExerciseSearch = () => {
  const [exercises, setExercises] = useState([]);
  const [type, setType] = useState('');
  const [muscle, setMuscle] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const apiKey = 'ip3X7nqJqVss0fvhx7cBZQ==GyNDyNTkFfWnT7t6';

  const fetchExercises = async () => {
    setLoading(true);
    setError(null);
    let url = 'https://api.api-ninjas.com/v1/exercises?';
    if (type) url += `type=${type}&`;
    if (muscle) url += `muscle=${muscle}&`;
    if (difficulty) url += `difficulty=${difficulty}&`;

    try {
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': apiKey,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setExercises(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchExercises();
  };

  const handleCardClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const closeModal = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="w-full min-h-screen pt-3 h-fit grid sm:grid-cols-6 gap-3 bg-slate-900">
      <div className="mx-2 sm:col-span-1">
        <h1 className="text-2xl font-bold mb-4 text-white">Find Exercises</h1>
        <form onSubmit={handleSubmit} className="mb-4 space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 text-white">Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded">
              <option value="">Select Type</option>
              <option value="cardio">Cardio</option>
              <option value="olympic_weightlifting">Olympic Weightlifting</option>
              <option value="plyometrics">Plyometrics</option>
              <option value="powerlifting">Powerlifting</option>
              <option value="strength">Strength</option>
              <option value="stretching">Stretching</option>
              <option value="strongman">Strongman</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-white">Muscle</label>
            <select value={muscle} onChange={(e) => setMuscle(e.target.value)} className="p-2 border rounded">
              <option value="">Select Muscle</option>
              <option value="abdominals">Abdominals</option>
              <option value="abductors">Abductors</option>
              <option value="adductors">Adductors</option>
              <option value="biceps">Biceps</option>
              <option value="calves">Calves</option>
              <option value="chest">Chest</option>
              <option value="forearms">Forearms</option>
              <option value="glutes">Glutes</option>
              <option value="hamstrings">Hamstrings</option>
              <option value="lats">Lats</option>
              <option value="lower_back">Lower Back</option>
              <option value="middle_back">Middle Back</option>
              <option value="neck">Neck</option>
              <option value="quadriceps">Quadriceps</option>
              <option value="traps">Traps</option>
              <option value="triceps">Triceps</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-white">Difficulty</label>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="p-2 border rounded">
              <option value="">Select Difficulty</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Search
          </button>
        </form>

        {loading && <p className="animate-pulse text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>

      <div className="container sm:col-span-5 mx-auto p-4 bg-red-700">
        <div className="h-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(exercise)}
              className="card bg-slate-700 p-4 rounded shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h2 className="text-xl text-cyan-400 font-bold mb-2">{exercise.name}</h2>
              <p className="text-gray-100">Equipments: {exercise.equipment}</p>
              <p className="text-gray-100 truncate">Instructions: {exercise.instructions}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={selectedExercise !== null} onClose={closeModal} exercise={selectedExercise} />
    </div>
  );
};

export default ExerciseSearch;
