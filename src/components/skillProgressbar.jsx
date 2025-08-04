import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillProgressBar = ({ percentage, label }) => {
  return (
    <div className="skill-item" >
      <div className="progress-circle-container" style={{maxWidth:200,maxHeight:200}} >
        <CircularProgressbar
          value={percentage}
          strokeWidth={10}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.25,
            textColor: '#fff',
            pathColor: `url(#gradient)`,
            trailColor: 'rgba(255, 255, 255, 0.2)',
            textSize: '16px',
            pathTransitionDuration: 0.5,
          })}
        />
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#4c00ff" />
              <stop offset="100%" stopColor="#7700ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h4 className="skill-label">{label}</h4>
    </div>
  );
};

export default SkillProgressBar;