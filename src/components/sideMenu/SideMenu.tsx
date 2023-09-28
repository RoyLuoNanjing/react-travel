import React from 'react';
import styles from './SideMenu.module.css';
import { Menu } from 'antd';
import { sideMenuList } from './mockup';
import { GifOutlined } from '@ant-design/icons';

export const SideMenu: React.FC = () => {
  return (
    <Menu
      mode={'vertical'}
      items={sideMenuList.map((m) => ({
        labels: m.title,
        icon: <GifOutlined />,
        key: m.title,
        children: m.subMenu.map((sm) => ({
          label: sm.title,
          key: sm.title,
          icon: <GifOutlined />,
          children: sm.subMenu.map((sms) => ({
            label: sms,
            key: sms,
            icon: <GifOutlined />,
          })),
        })),
      }))}
      className={styles['side-menu']}></Menu>
  );
};
