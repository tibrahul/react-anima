import React from 'react';
import { Card, Row, Col, Typography, Button, Divider, Flex } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const CaseStudyCard = () => {
  return (
    <div style={{
      padding: '20px', textAlign: 'center',
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'center'
    }}>
      {/* <div className='my-style' /> */}
      <Title level={3} style={{ padding: '40px 0', fontWeight: 'bolder' }}>Unlocking New Possibilities with MICRO: Case Studies</Title>
      <div style={{ margin: '20px auto', maxWidth: '75vw', height: '60vh', position: 'relative' }} className='card-bg'>
        <Flex align='center' justify='center' style={{
          height: '100%',
          width: '100%',
          padding: '40px'
        }}>
          <Flex flex={1.5}>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                backgroundColor: '#e0e0e0',
                marginBottom: '20px'
              }}></div>
              <Title level={4}>
                <b>Canvas X Podcast Co, India</b>
              </Title>
              <Text>
                "Monetizing segments, and unlocking huge value for independent podcasters within the community. Powering a few handpicked shows within the network to gauge reactions and have the creators experience micro engagements and understand their audiences and their listening patterns better"
              </Text>
              <br />
              <br />
              <br />
              <Text type="secondary" style={{ color: '#000' }}>Founder, Podcast Production Company, India</Text>
            </div>
          </Flex>
          <Divider type='vertical' style={{ height: '50vh' }} />
          <Flex flex={1} align='center' justify='flex-start'>
            <div style={{ paddingLeft: '10px', textAlign: 'left' }}>
              <Title level={2} className='my-t' style={{
                marginBottom: 0,

              }}>80+</Title>
              <Title level={4} style={{ marginTop: 0, fontSize: '20px' }}>
                <b>Shows</b>
              </Title>
              <br />
              <Title level={2} className='my-t' style={{ marginBottom: 0 }}>50+</Title>
              <Title level={4} style={{ marginTop: 0, fontSize: '20px' }}>
                <b>increase in interactions</b>
              </Title>
            </div>
          </Flex>
        </Flex>
        <div style={{
          position: 'absolute',
          right: '20px',
          bottom: '20px'
        }}>
          <Button type="default" icon={<LeftOutlined />} shape="circle" style={{ marginRight: 8 }} />
          <Button type="default" icon={<RightOutlined />} shape="circle" />
        </div>
      </div>

    </div>
  );
};

export default CaseStudyCard;
