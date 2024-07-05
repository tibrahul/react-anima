import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const CardGrad: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const totalCards = cards.length;
    const scaleStep = 0.15 / totalCards;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cards-section',
        start: 'top top',
        end: '+=' + 50 * totalCards + '%',
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    cards.forEach((card, i) => {
      gsap.set(card, {
        y: -(15 * i),
        scale: 1 - scaleStep * i,
        zIndex: totalCards - i,
      });

      const otherCards = cards.filter((c, j) => j !== i);
      const nextCard = cards[i + 1];
      if (nextCard) {
        tl.to(
          card,
          {
            opacity: 0,
            scale: 1.1,
            y: 35,
          },
          '+=0.5'
        )
          .to(
            nextCard,
            {
              scale: 1,
              zIndex: '+=1',
              y: 0,
            },
            '<'
          )
          .to(
            otherCards,
            {
              y: '+=15',
              zIndex: '+=1',
              scale: '+=' + scaleStep,
            },
            '<'
          )
          .set(card, { zIndex: 0 })
          .to(card, {
            y: -15 * (totalCards - 1),
            scale: 0.85,
            opacity: 1,
          });
      }
    });
    tl.to({}, {});
  }, []);

  return (
    <div>
      <div className="cards">
        {['green', 'orange', 'red', 'blue', 'purple'].map((color, index) => (
          <div
            key={index}
            className={`card gradient-${color}`}
            ref={(el) => (cardsRef.current[index] = el!)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardGrad;
