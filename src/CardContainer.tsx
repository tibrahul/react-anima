import React from 'react';
import { Card, Typography } from 'antd';
import './App.css';
import Revnue from './images/revenue.svg';

const { Title, Paragraph } = Typography;

const cardData = [
  {
    title: 'Enhanced Revenues & Interactions',
    description: 'Monetize smallest sections or complete files across currencies beyond subscriptions & ads.',
    icon: Revnue, // Replace with the actual icon URL
  },
  {
    title: 'Reduced Churn Rate',
    description: 'Boost audience conversion by tapping into their instant gratification needs.',
    icon: require('./images/rate.png'), // Replace with the actual icon URL
  },
  {
    title: 'Plugin-Ready APIs & Embeds',
    description: 'Discover the future of content engagements through our proprietary technology.',
    icon: require('./images/plugin.png'), // Replace with the actual icon URL
  },
];

const CardContainer: React.FC = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} className="custom-card">
          <div>
            <img src={card.icon} alt="icon" className="icon" style={{
              objectFit: 'fill',
              borderRadius: 0
            }} />
          </div>
          <Title level={4} className="card-title">{card.title}</Title>
          <Paragraph className="card-description">{card.description}</Paragraph>
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
