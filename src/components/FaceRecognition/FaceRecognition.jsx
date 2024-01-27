import React from 'react'
import'./FaceRecognition.css'


const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='max-w-md mx-auto relative text-center'>
        <div className='absolute top-20 left-0 right-0 mx-auto'>
          <img id='inputimage' alt="Returned Image" src={imageUrl} className='w-500 h-auto' />
          <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
        </div>
      </div>
      
    );


}

export default FaceRecognition;