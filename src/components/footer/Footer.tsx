import React from 'react';
import { Layout, Typography } from 'antd';

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        Copyright © 1995–2023 Roy Luo™. All rights reserved.
      </Typography.Title>
    </Layout.Footer>
  );
};
