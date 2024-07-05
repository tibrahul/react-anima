import React from 'react';

interface IndicatorsProps {
  onClick: (index: number) => void;
  count: number;
}

const Indicators: React.FC<IndicatorsProps> = ({ onClick, count }) => (
  <div className="indicators">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="indicator" onClick={() => onClick(i)}></div>
    ))}
  </div>
);

export default Indicators;
