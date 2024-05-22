import DefaultAvatar from '@/assets/avatar.png';
import { MyRadar } from '@/component/charts/Radar';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, List, Row } from 'antd';
import React from 'react';
import { listData } from './mock';

const WELCOME_TEXT = '欢迎回来,彦祖!';

const Home = () => {
  const projectList = [
    {
      title: '吃饭',
      key: 1,
      content: 'Card content',
    },
    {
      title: '睡觉',
      key: 2,
      content: 'Card content',
    },
    {
      title: '打豆豆',
      key: 3,
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      key: 4,
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      ket: 5,
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      key: 6,
      content: 'Card content',
    },
  ];

  return (
    <div>
      <Row>
        <Col span={15}>
          {/* 用户头像&昵称 */}
          <div className="flex items-center">
            <Avatar src={DefaultAvatar} size={72} />
            <div className="flex flex-wrap ml-3">
              <h2 className="w-[100%] mb-3">{WELCOME_TEXT}</h2>
              <p className="text-gray-400">高级前端开发工程师 | 不用去公司－摸鱼技术部－前端开发</p>
            </div>
          </div>
          {/* 网格 */}
          <Card className="mt-6" title="项目列表">
            {projectList?.map((item, index) => (
              <Card.Grid key={item.key}>
                <Card.Meta
                  title={
                    <div className="flex justify-between items-center">
                      <span>{item.title}</span>
                      <Button type="link">
                        <ArrowRightOutlined />
                      </Button>
                    </div>
                  }
                  description={item.content}
                />
              </Card.Grid>
            ))}
          </Card>
          {/* 动态 */}
          <div className="mt-6">
            <List
              itemLayout="horizontal"
              dataSource={listData}
              bordered
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col span={8} className="ml-3">
          {/* 雷达图 */}
          <div className="mt-[94px]">
            <Card
              title="工作雷达"
              extra={
                <Button type="link">
                  <ArrowRightOutlined />
                </Button>
              }
            >
              <MyRadar />
            </Card>
          </div>
          <Card
            title="成员"
            className="mt-6"
            extra={
              <Button type="link">
                <ArrowRightOutlined />
              </Button>
            }
          >
            <p>豆豆</p>
            <p>无名</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
