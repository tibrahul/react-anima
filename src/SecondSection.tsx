import React, { useEffect, useLayoutEffect } from 'react';
import './App.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Point from './components/Point';
import Indicators from './components/Indicators';

gsap.registerPlugin(ScrollTrigger);

const pointsData = [
  {
    className: 'one',
    title: 'Title 1',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imgSrc: 'https://fakeimg.pl/350x200/?text=Hello1'
  },
  {
    className: 'two',
    title: 'Title 2',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imgSrc: 'https://fakeimg.pl/350x200/?text=Hello2'
  },
  {
    className: 'three',
    title: 'Title 3',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imgSrc: 'https://fakeimg.pl/350x200/?text=Hello3'
  },
  {
    className: 'four',
    title: 'Title 4',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imgSrc: 'https://fakeimg.pl/350x200/?text=Hello4'
  },
  {
    className: 'five',
    title: 'Title 5',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    imgSrc: 'https://fakeimg.pl/350x200/?text=Hello5'
  }
];

const SecondSection: React.FC = () => {
  useLayoutEffect(() => {
    const points = gsap.utils.toArray('.point');
    const indicators: any = gsap.utils.toArray('.indicator');

    const height = 100 * points.length;

    gsap.set('.indicators', { display: "flex" });

    const tl: any = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".philosophie",
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        id: "points"
      }
    });

    const pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophie .wrapper",
        start: "top top",
        end: "+=" + height + "%",
        scrub: true,
        pin: ".philosophie .wrapper",
        pinSpacing: true,
        id: "pinning",
        markers: true
      }
    });

    points.forEach((elem: any, i: number) => {
      gsap.set(elem, { position: "absolute", top: 0 });

      tl.to(indicators[i], { backgroundColor: "orange", duration: 0.25 }, i);
      tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i);
      tl.from(elem.querySelector('article'), { autoAlpha: 0, translateY: 100 }, i);
      tl.addLabel('position-' + i);

      if (i !== points.length - 1) {
        tl.to(indicators[i], { backgroundColor: "#adadad", duration: 0.25 }, i + 0.75);
        tl.to(elem.querySelector('article'), { autoAlpha: 0, translateY: -100 }, i + 0.75);
        tl.to(elem.querySelector('img'), { autoAlpha: 0 }, i + 0.75);
      }

      ScrollTrigger.create({
        trigger: ".philosophie",
        start: "top center-=" + ((110 * i) + 50) + '%',
        end: "+=33%",
        toggleClass: { targets: elem, className: "active" }
      });
    });

    indicators.forEach((indicator: any, i: number) => {
      indicator.addEventListener('click', () => {
        gsap.to(window, {
          duration: 1,
          scrollTo: tl.scrollTrigger.labelToScroll(`position-${i}`)
        });
      });
    });

  }, []);

  return (

    <section className="philosophie">
      <div className="wrapper">
        <Indicators count={pointsData.length} onClick={(index: number) => {
          gsap.to(window, {
            duration: 1,
            scrollTo: `#position-${index}`
          });
        }} />
        {pointsData.map((point, index) => (
          <Point
            key={index}
            className={point.className}
            title={point.title}
            text={point.text}
            imgSrc={point.imgSrc}
          />
        ))}
      </div>
    </section>

  );
};

export default SecondSection;
