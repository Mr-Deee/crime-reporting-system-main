import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width={radius * 2} height={radius * 2}>
        <circle
          className="progress-ring-circle"
          stroke="#3498db"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />
      </svg>
      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default CircularProgress;
