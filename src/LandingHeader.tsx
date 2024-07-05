import React, { useState } from 'react';
import CanvasLogo from './images/logo.svg';
import { FaPowerOff } from 'react-icons/fa';
import { Layout, Menu, Button, Card, Row, Col, Space, MenuProps, Modal, Form, Input, Flex } from 'antd';
import { PiCaretDownBold } from 'react-icons/pi';

// import 'antd/dist/antd.css';
type MenuItem = Required<MenuProps>['items'][number];

const { Header: AntHeader, Content } = Layout;

const LandingHeader: React.FC = () => {

  const [current, setCurrent] = useState('mail');
  const navigateTo = (path: string) => {
    console.log(path);

  }


  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const menuItems = (naviagteTo: (path: string) => void): MenuItem[] => ([
    {
      label: 'Solutions',
      key: 'solutions',
    },
    {
      label: 'Pricing',
      key: 'pricing',
    },
    {
      key: 'wallet',
      label: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>Resource</span>
          <PiCaretDownBold style={{ marginLeft: 10 }} />
        </div>
      ),
    },
  ]);

  return (
    <AntHeader className="header" style={{
      background: 'transparent',
      borderBottom: 0, position: 'fixed', width: '100%', zIndex: 999999,
      fontFamily: 'Nunito, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '22px',
    }}>
      <img height={40} width={40} src={CanvasLogo} alt="Logo" />
      <Flex align='center'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menuItems(navigateTo)} style={{
          padding: '0 50px', background: 'transparent', borderBottom: 0, fontFamily: 'Nunito, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '22px',
        }} />
        <Button type="primary" style={{ color: '#fff', fontWeight: 700, height: 40, width: 150, fontSize: '18px' }}>Join Waitlist</Button>
      </Flex>
    </AntHeader>
  )
}

export default LandingHeader