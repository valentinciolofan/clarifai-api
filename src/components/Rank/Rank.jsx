import React from 'react'


const Rank = ({ name, entries }) => {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
          {`${name} your current rank is ${entries}`}
        </div>
        <div className="text-3xl font-bold ml-2">#5</div>
      </div>
    );
  };
  
  export default Rank;
  


