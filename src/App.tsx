import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';
import './App.css'; // Assuming you have the CSS in App.css
import { Button, Card, Col, Image, Row, Typography } from 'antd';
import CaseStudyCard from './CaseStudyCard';
import CardContainer from './CardContainer';
import LandingHeader from './LandingHeader';
import CardGrad from './CardGrad';
import './index.css'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = [
  { title: 'Content Suite', description: 'Earn from best parts of your text, audio, video, & images.', image: 'https://i.vimeocdn.com/custom_asset/535e81585d41c90fe2bb59a0e45373a5?w=632&q=80' },
  { title: 'Micro Lock Logic', description: 'Maximize value for your content peaks using micro payments, promocodes or any other business logic.', image: 'https://i.vimeocdn.com/custom_asset/a4707a19ba7387976753a6324d784fc3?w=632&q=80' },
  { title: 'Embed & Analytics', description: 'Extract data & customize consumer engagement, your way!', image: 'https://i.vimeocdn.com/custom_asset/4715a7d22333d2c4e7391477d1e86722?w=632&q=80' },
];


const { Title, Paragraph } = Typography;

const ScrollAnimation: React.FC = () => {
  const container = useRef(null);
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
        markers: false,
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
  // const y = useTransform(scrollYProgress, [0.5, 1], [100, 0]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 6]);

  return (
    <>
      <LandingHeader />
      <div>
        <motion.div
          style={{
            opacity,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '120px',
            // justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'lightblue',
            position: 'relative',
            zIndex: 1,
            scale: scale9,
            // overflowX: 'hidden'
          }}
        >
          <div className='my-style' />
          <Title level={2}>Unlocking Dynamic Content Interactionss</Title>
          <Title level={4} style={{ marginTop: 0, fontWeight: 400 }}>{`Elevate Revenues and Engagement with the Micro Gateway`}</Title>
          <div style={{ marginTop: 15 }}>
            <Button type="primary" style={{ height: 45, width: 145, fontWeight: 600, fontSize: 20 }}>
              Join For Free
            </Button>
            <Button style={{ backgroundColor: 'transparent', border: '1px solid #000', marginLeft: 40, height: 45, width: 145, fontWeight: 600, fontSize: 20 }}>
              Explore API’s
            </Button>
          </div>
          <Image src={`https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72`} preview={false} style={{ height: 360, width: 640, marginTop: 150, objectFit: 'fill', borderRadius: 5 }} />
        </motion.div>
        <div ref={containerRef} style={{ position: 'relative', paddingTop: '120px' }}>
          {/* <div className='my-style' /> */}
          <div style={{
            width: '100%',
            textAlign: 'center',
          }}>
            <Title level={2}>THE STRIPE FOR THE WORLD OF MICRO GATEWAY</Title>
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
          height: "90vh"
        }}>
          <div style={{
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '80%'
          }}>
            <Title level={2} style={{ fontWeight: 'bolder' }}>DISCOVER THE MICRO ADVANTAGE</Title>
            <CardContainer />
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
    </>
  );
};

export default ScrollAnimation;

