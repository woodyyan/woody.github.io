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
  backgroundColor: '#282c34',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#282c34',
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
      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Avatar size={64} icon={<UserOutlined />} />
              Woody
            </Space>
          </Sider>
          <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Flex>
      <div style={{ background: "white" }}>
        <p >©WoodyStudio 2024 Commercial in Confidence</p>
      </div>
    </div>
  );
}

export default App;
