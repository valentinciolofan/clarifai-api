import React from 'react'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <p className="text-center text-lg mb-4">
          This FaceRecognition App will detect faces in your pictures
        </p>
  
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 mr-2 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          onChange={onInputChange} />
          <button 
          className="py-2 px-4 bg-blue-500 text-white rounded-md" 
          onClick={onButtonSubmit}
            >Detect
          </button>
        </div>
      </div>
    );
};
  
  export default ImageLinkForm;
  