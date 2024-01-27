import React from 'react'
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return (
      <div style={{width: '150px'}}>
        <Tilt>
        <div className='text-center' style={{ height: '100px', backgroundColor: 'cyan' }}>
          <h1>FaceRecognition</h1>
        </div>
        </Tilt>
        </div>
    );
}




export default Logo;
