import React from 'react';

const Modal = ({ isOpen, onClose, exercise }) => {
  if (!isOpen) return null;

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div className="bg-black w-4/5 my-8 max-w-md max-h-lvh rounded-lg p-6 mx-2   overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{exercise.name}</h2>
        <div className="mb-4">
          <strong>Equipment:</strong> {exercise.equipment}
        </div>
        <div className="mb-4">
          <strong>Instructions:</strong> {exercise.instructions}
        </div>
        <div className="mb-4">
          <strong>Type:</strong> {exercise.type}
        </div>
        <div className="mb-4">
          <strong>Muscle:</strong> {exercise.muscle}
        </div>
        <div className="mb-4">
          <strong>Difficulty:</strong> {exercise.difficulty}
        </div>
      </div>
    </div>
  );
};

export default Modal;
