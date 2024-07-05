import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';
import './App.css'; // Assuming you have the CSS in App.css
import ExploreService from './ExploreService';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import CaseStudyCard from './CaseStudyCard';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { title: 'UPLOAD', description: 'Drag, drop, add descriptions & upload.', image: 'https://i.vimeocdn.com/custom_asset/535e81585d41c90fe2bb59a0e45373a5?w=632&q=80' },
  { title: 'ADD THE MICRO LOGIC', description: 'Lock the peaks of your content & build unique interactions.', image: 'https://i.vimeocdn.com/custom_asset/a4707a19ba7387976753a6324d784fc3?w=632&q=80' },
  { title: 'CUSTOMIZE', description: 'Select from micro payments, promocodes, forms & more', image: 'https://i.vimeocdn.com/custom_asset/4715a7d22333d2c4e7391477d1e86722?w=632&q=80' },
  { title: 'EMBED', description: 'Extract your unique embed code to add on your website.', image: 'https://i.vimeocdn.com/custom_asset/535e81585d41c90fe2bb59a0e45373a5?w=632&q=80' },
  { title: 'EARN ', description: 'Earn audience engagement & build new revenue channels.', image: 'https://i.vimeocdn.com/custom_asset/535e81585d41c90fe2bb59a0e45373a5?w=632&q=80' }
];


const { Title, Paragraph } = Typography;

const ScrollAnimation: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLLIElement[]>([]);
  const rightElementsRef = useRef<HTMLDivElement[]>([]);
  let activeTab: number | undefined = undefined;

  useEffect(() => {
    const tabs: any = gsap.utils.toArray(tabsRef.current);
    const amount = tabs.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    tl.to(rightContentRef.current, {
      y: () => window.innerHeight - (rightContentRef.current?.scrollHeight || 0),
      ease: 'none',
      duration: 1,
    });

    tabs.forEach((tab: any, i: any) => {
      const position = i / (amount - 1);
      const link: any = tab.querySelector('a');
      const st: any = tl.scrollTrigger;

      tl.add(`tab-${i + 1}`, position).call(
        () => {
          if (activeTab !== undefined) {
            tabs[activeTab].classList.toggle('selected');
          }
          tab.classList.toggle('selected');
          activeTab = i;
        },
        undefined,
        position
      );

      link?.addEventListener('click', (e: any) => {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: {
            y: st.start + (st.end - st.start) * (position / tl.duration()),
          },
          duration: 0.4,
          ease: 'power1.inOut',
        });
      });
    });

    tl.to({}, { duration: 0.1 });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  // const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0.5, 1], [100, 0]);

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        style={{
          opacity,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'lightblue',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className='my-style' />
        <Title level={2}>Explore our solutions</Title>
        <ExploreService />
      </motion.div>
      <div ref={containerRef}>
        <div className='my-style' />
        <div style={{
          width: '100%',
          textAlign: 'center',
        }}>
          <Title level={2}>THE NEW STANDARD IN CONTENT INTERACTIONS</Title>
          <Typography>Better Workflow, Better Results</Typography>
        </div>
        <div className="container">
          <div className="left-container">
            <div className="left-content">
              <ul>
                {sections.map((section, index) => (
                  <li key={index} ref={(el) => (tabsRef.current[index] = el!)}>
                    <Title level={2}>{section.title}</Title>
                    <Paragraph>{section.description}</Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right-container">
            <div className="right-content" ref={rightContentRef}>
              {sections.map((num, index) => (
                <div
                  className="right-element"
                  key={index}
                  ref={(el) => (rightElementsRef.current[index] = el!)}
                >
                  <img src={num.image} alt="" height={450} width={385} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CaseStudyCard />
      <div style={{
        height: "100vh"
      }}>
        <div className='my-style' />
        <div style={{
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '90%'
        }}>
          <Title level={2}>DISCOVER THE MICRO ADVANTAGE</Title>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <div>
            <Title level={2}>The Future of Content Unlocking with Micro Precision Is Here</Title>
            <Button type="primary">
              Join For Free
            </Button>
          </div>
        </div>
      </div>

      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col lg={14} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Get Started for free</h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                    About
                  </a>
                </div>
                <div>
                  <a target="_blank " href="http://ant.design">
                    Contact us
                  </a>
                </div>
                <div>
                  <a href="http://mobile.ant.design">Watch demo</a>
                </div>

                <div>
                  <Button type="primary">
                    Join For Free
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center" style={{
                justifyContent: 'space-between'
              }}>
                <div>
                  <h2> 24/7 customer support </h2>
                  <p style={{ marginTop: '20px' }}> Our customer support team is available to help 24/7. </p>
                </div>
                <div>
                  <Button type="primary" style={{ backgroundColor: 'transparent' }}>
                    Contact Us
                  </Button>
                </div>
              </div>

            </Col>
          </Row>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px'
        }}>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '30px 0'
        }}>
          <span>©2024 Canvas Space Inc. All rights reserved</span>
        </div>
      </footer>
      {/*       
      
      
       */}
    </div>
  );
};

export default ScrollAnimation;

