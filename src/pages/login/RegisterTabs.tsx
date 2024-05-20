import { Tabs } from '@arco-design/web-react';
import React from 'react';
import { REGISTER_TYPE, TAB_LIST } from './config';

const TabPane = Tabs.TabPane;

const RegisterTabs = ({ onTabChange }) => {
  const handleTab = (tabVal) => {
    onTabChange(tabVal);
  };
  return (
    <Tabs defaultActiveTab={REGISTER_TYPE.EMAIL} onChange={handleTab} className="tab">
      {TAB_LIST.map((tab) => {
        return <TabPane key={tab.value} title={tab.tabTitle} />;
      })}
    </Tabs>
  );
};

export default RegisterTabs;
