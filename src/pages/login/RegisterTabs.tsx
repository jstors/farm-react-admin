import { Tabs } from '@arco-design/web-react';
import React from 'react';
import { REGISTER_TYPE, TAB_LIST } from './config'

const TabPane = Tabs.TabPane

const RegisterTabs = ({onTabChange}) => {
  
  const handleTab = (tabVal) => {
    onTabChange(tabVal)
  }
  return (
    <Tabs defaultActiveTab={REGISTER_TYPE.EMAIL} onChange={handleTab} className="w-1/2 tab">
      { TAB_LIST.filter(v => v.show).map(tab => {
        return <TabPane key={tab.key} title={tab.title}></TabPane>
      })}
    </Tabs>
  )
}

export default RegisterTabs;