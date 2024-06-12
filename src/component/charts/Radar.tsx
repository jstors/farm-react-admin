import { Radar, type RadarConfig } from '@ant-design/plots';
import { theme } from 'antd';
import React from 'react';

const { useToken } = theme;

const data = [
  { name: '需求', star: 731 },
  { name: '缺陷', star: 380 },
  { name: '会议', star: 414 },
  { name: '技术', star: 140 },
  { name: '分享', star: 660 },
  { name: '摸鱼', star: 185 },
];

export const MyRadar = ({ config = {} }) => {
  const { token } = useToken();

  const customConfig: RadarConfig = {
    data: data.map((d) => ({ ...d, star: Math.sqrt(d.star) })),
    xField: 'name',
    yField: 'star',
    colorField: token.colorPrimary,
    area: {
      style: {
        fill: token.colorPrimary,
        fillOpacity: 0.5,
      },
      line: {
        style: {
          fill: token.colorPrimaryBg,
        },
      },
    },
    scale: {
      x: {
        padding: 0.5,
        align: 0,
      },
      y: {
        nice: true,
      },
    },
    axis: {
      x: {
        title: false,
        grid: true,
      },
      y: {
        gridAreaFill: 'rgba(0, 0, 0, 0.04)',
        label: false,
        title: false,
      },
    },
    animate: { enter: { type: 'zoomIn' } },
    ...config,
  };
  return <Radar {...customConfig} />;
};
