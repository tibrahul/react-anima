import React from 'react';

interface PointProps {
  className: string;
  title: string;
  text: string;
  imgSrc: string;
}

const Point: React.FC<PointProps> = ({ className, title, text, imgSrc }) => (
  <div className={`point ${className}`}>
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
    <img src={imgSrc} alt={title} />
  </div>
);

export default Point;
