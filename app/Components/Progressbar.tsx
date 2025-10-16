
import React from 'react';

type ProgressProps ={
  progress:number,
  color:string,
  height?:string,

}


const ProgressBar = ({ progress, color = 'blue', height ='10px'}:ProgressProps) => {
  const fillerStyles = {
    width: `${progress}%`,
    backgroundColor: color,
    height: height,
    borderRadius: 'inherit', 
    transition: 'width 0.5s ease-in-out',
  };

  return (
    <div className='px-4'>
        <div className="progress-bar-container mb-12 mt-10 " style={{ height: height }}>
      <div className="progress-bar-filler" style={fillerStyles}>
        <p className='progress-bar-word'>You</p>
        <span className="progress-bar-label">{`${Math.floor(progress)}%`}</span>
      </div>
    </div>

    </div>
  
  );
};

export default ProgressBar;