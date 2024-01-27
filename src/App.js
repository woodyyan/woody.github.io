import logo from './logo.svg';
import './App.css';
import { Layout, Flex } from 'antd';
import avatar from './images/avatar.png'
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

const layoutStyle = {
  borderRadius: 2,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} alt="logo" width='160px' style={{ paddingTop: '10px' }} />
        <h1 style={{ color: 'black', textAlign: 'center' }}>
          这是
        </h1>
        <h6 style={{ color: 'black', textAlign: 'center' }}>
          日期
        </h6>
        {/* <div style={{ textAlign: "right" }}>
          <img src={avatar} alt="logo" height='40px' style={{ marginRight: '20px' }} />
          <img src={avatar} alt="logo" height='56px' />
        </div> */}
      </header>
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
          <Avatar size={64} icon={<UserOutlined />} />
          </Header>
          <Content style={contentStyle}>Content</Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Flex>
      <div style={{ background: "white" }}>
        <p >©WoodyStudio 2024 Commercial in Confidence</p>
      </div>
    </div>
  );
}

export default App;
