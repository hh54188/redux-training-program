import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;
const { Item: MenuItem } = Menu;

import './AppHeader.less';


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header>
        <div className="logo">
          REACT MAKER
        </div>
        <Menu
          mode="horizontal"
          theme="dark"
          style={{ 
            lineHeight: '64px',
            display: 'flex',
            justifyContent: 'flex-end' 
          }}
        >
          <MenuItem key="mail">
            <a href="http://example.com" target="_blank">
              <Icon type="github" />
              <span>本工具源码</span>
            </a>
          </MenuItem>
          <MenuItem>
            <Icon type="info-circle-o" />
            <span>意见和建议</span>
          </MenuItem>
          <MenuItem key="app">
            <Icon type="user" />
            <span>关于我</span>
          </MenuItem>
          <MenuItem>
            <Icon type="coffee" />
            <span>捐助</span>
          </MenuItem>
          <MenuItem>
            <Icon type="global" />
            <span>English</span>
          </MenuItem>
        </Menu>          
      </Header>
    )
  }
}

export default AppHeader;