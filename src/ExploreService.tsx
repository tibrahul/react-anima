import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsFillMicFill, BsPlayFill } from "react-icons/bs";
import { Button, Descriptions, Flex, Image, Typography } from 'antd';
import { RiPlayLargeFill } from "react-icons/ri";
// import PhotosIcon from '../../../assets/images/photos.svg';
import { IoImagesOutline } from "react-icons/io5";
import { TbSquareLetterT } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";

const { Title } = Typography;
// const Home: React.FC = () => <div className="content">Home Content</div>;
// const About: React.FC = () => <div className="content">About Content</div>;
const Contact: React.FC<{
  info: {
    header: string;
    descriptionLine1: string;
    descriptionLine2: string;
    imageUrl: string;
  }
}> = ({
  info: {
    header,
    descriptionLine1,
    descriptionLine2,
    imageUrl
  }
}) => <div className="content-car">
      <Flex vertical={false} align='center' gap={'5vw'} style={{ textAlign: 'left' }}>
        <Flex vertical={true} style={{ maxWidth: "368px" }}>
          <Title level={3} style={{ fontWeight: 'bolder' }}>{header}</Title>
          <Title level={4} style={{ marginTop: 0, marginBottom: 30 }}>{descriptionLine1} {descriptionLine2}</Title>
          <Flex vertical={false} gap={10}>
            <Button type='primary'>Join For Free</Button>
            <Button type='dashed'>Explore API's</Button>
          </Flex>
        </Flex>
        <Image src={imageUrl} preview={false} style={{ height: 360, width: 640, objectFit: 'fill', borderRadius: 20 }} />
      </Flex>
    </div>;

const tabs = [
  {
    name: 'podcasts', label: 'Podcasts', icon: <BsFillMicFill size={25} />, info: {
      header: 'Audio',
      descriptionLine1: 'Sell seconds, melody, or high points.',
      descriptionLine2: 'Make every second count.',
      imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72'
    }
  },
  {
    name: 'video', label: 'Video', icon: <RiPlayLargeFill size={25} />, info: {
      header: 'Video',
      descriptionLine1: 'Sell seconds, melody, or high points.',
      descriptionLine2: 'Make every second count.',
      imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72'
    }
  },
  {
    name: 'photos', label: 'Photos', icon: <IoImagesOutline size={25} />, info: {
      header: 'Photos',
      descriptionLine1: 'Sell seconds, melody, or high points.',
      descriptionLine2: 'Make every second count.',
      imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72'
    }
  },
  {
    name: 'blogs', label: 'Blogs', icon: <TbSquareLetterT size={25} />, info: {
      header: 'Blogs',
      descriptionLine1: 'Sell seconds, melody, or high points.',
      descriptionLine2: 'Make every second count.',
      imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
    }
  },
  {
    name: 'webPages', label: 'Web Pages', icon: <FaLaptopCode size={25} />, info: {
      header: 'Web Pages',
      descriptionLine1: 'Sell seconds, melody, or high points.',
      descriptionLine2: 'Make every second count.',
      imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
    }
  },
  // {
  //   name: 'contact3', label: 'Contact3', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // },
  // {
  //   name: 'contact4', label: 'Contact4', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // },
  // {
  //   name: 'contact5', label: 'Contact5', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // },
  // {
  //   name: 'contact6', label: 'Contact6', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // },
  // {
  //   name: 'contact7', label: 'Contact7', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // },
  // {
  //   name: 'contact8', label: 'Contact8', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // },
  // {
  //   name: 'contact9', label: 'Contact9', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // },
  // {
  //   name: 'contact10', label: 'Contact10', icon: <BsFillMicFill size={25} />, info: {
  //     header: 'Audio',
  //     descriptionLine1: 'Sell seconds, melody, or high points.',
  //     descriptionLine2: 'Make every second count.',
  //     imageUrl: 'https://i.vimeocdn.com/custom_asset/5e0cbc203a0b0ea5f45c922fbe96ec72',
  //   }
  // }
];

const ExploreService: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('podcasts');
  const tabRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Center the initial active tab
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      activeTabElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }, [activeTab]);

  const getContentComponent = (tabName: string) => {
    const info = tabs.find(t => t.name === tabName) || { info: { header: '', descriptionLine1: '', descriptionLine2: '', imageUrl: '' } };

    return <Contact info={info.info} />
    // switch (tabName) {
    //   case 'home':
    //     return <Contact />;
    //   case 'about':
    //     return <Contact />;
    //   case 'contact':
    //     return <Contact />;
    //   default:
    //     return <Contact />;
    // }
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    const tabElement = tabRefs.current[tabName];
    console.log("  -> ", tabElement)
    if (tabElement) {
      tabElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  };

  return (
    <div className='tab-container'>
      <div className="explore">
        <div className="tab-nav" >
          {tabs.map(tab => (
            <div
              key={tab.name}
              ref={el => (tabRefs.current[tab.name] = el)}
              onClick={() => handleTabClick(tab.name)}
              className={`tab-circle ${activeTab === tab.name ? 'active' : ''}`}
            >
              <div className='icon-container'>
                {tab.icon}
              </div>
              <span>{tab.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="tab-content"
      > */}
      {getContentComponent(activeTab)}
      {/* </motion.div> */}
    </div>
  );
};

export default ExploreService;
