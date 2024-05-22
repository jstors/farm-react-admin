import { ConfigProvider } from 'antd';
import React from 'react';
import { theme } from '../../global.config';

const CustomTheme = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default CustomTheme;
