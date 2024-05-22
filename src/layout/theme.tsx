import { ConfigProvider } from 'antd';
import React from 'react';

const config = {
  token: {
    colorPrimary: '#9d4edc',
    colorInfo: '#9d4edc',
  },
  cssVar: {
    prefix: 'farm',
  },
};

const CustomTheme = ({ children }) => {
  return <ConfigProvider theme={config}>{children}</ConfigProvider>;
};

export default CustomTheme;
