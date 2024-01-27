import React from 'react'



const NavBar = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
          return ( <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                 <button onClick={() => onRouteChange('signout')} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-6 mt-6 text-white rounded ' href='#'> Sign out </button>
            </div>
          );
        } else {
            return (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button onClick={() => onRouteChange('signin')} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-6 mt-6 text-white rounded ' href='#'> Sign in </button>
                <button onClick={() => onRouteChange('register')} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-6 mt-6 text-white rounded ' href='#'> Register </button>            
            </div>
            );
        }
}




export default NavBar;
