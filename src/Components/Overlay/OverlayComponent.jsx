import React from 'react';

export default function OverlayComponent({ onClose, content }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 text-black dark:text-white p-6 rounded-lg max-w-2xl w-full relative shadow-xl">
        <button onClick={onClose} className="absolute top-2 right-4 text-2xl font-bold">
          &times;
        </button>
        {content}
      </div>
    </div>
  );
}
