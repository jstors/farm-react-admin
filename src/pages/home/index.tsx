import DefaultAvatar from '@/assets/avatar.png';
import { Avatar, Card, Grid, Link, List } from '@arco-design/web-react';
import { IconArrowRight, IconHeart, IconMessage, IconStar } from '@arco-design/web-react/icon';
import React from 'react';
import { dataSource } from './mock';

const Row = Grid.Row;
const Col = Grid.Col;

const WELCOME_TEXT = '欢迎回来,彦祖!';
const Home = () => {
  const projectList = [
    {
      title: 'Arco Card',
      extra: 'More',
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      extra: 'More',
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      extra: 'More',
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      extra: 'More',
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      extra: 'More',
      content: 'Card content',
    },
    {
      title: 'Arco Card',
      extra: 'More',
      content: 'Card content',
    },
  ];

  return (
    <div>
      <Row>
        <Col span={16}>
          {/* 用户头像&昵称 */}
          <div className="flex items-center">
            <Avatar size={72}>
              <img src={DefaultAvatar} alt="avatar" />
            </Avatar>
            <div className="flex flex-wrap ml-3">
              <h2 className="w-[100%] mb-3">{WELCOME_TEXT}</h2>
              <p className="text-gray-400">高级前端开发工程师 | 不用去公司－摸鱼技术部－前端开发</p>
            </div>
          </div>
          {/* 网格 */}
          <Card bordered={false} className="mt-6">
            {projectList?.map((item, index) => {
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <Card.Grid key={index} hoverable bordered={false}>
                  <Card title={item.title} extra={<IconArrowRight />} bordered={false}>
                    <p>{'Card allow to hover'}</p>
                  </Card>
                </Card.Grid>
              );
            })}
          </Card>
          {/* 动态 */}
          <div className="mt-6">
            <List
              pagination={{ pageSize: 6 }}
              dataSource={dataSource}
              render={(item, index) => (
                <List.Item
                  key={index}
                  className="p-[12px]"
                  actionLayout="vertical"
                  actions={[
                    <p className="mr-6" key={1}>
                      <IconMessage />
                      Reply
                    </p>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar shape="square">
                        <img alt="avatar" src={`${item.avatar}`} />
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col span={8}>col - 8 | push - 16</Col>
      </Row>
    </div>
  );
};

export default Home;
