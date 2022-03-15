// import ProCard, { StatisticCard } from '@ant-design/pro-card';
import React, { useState, useEffect } from 'react';
import ProCard from '@ant-design/pro-card';
import { Line } from '@ant-design/charts';
import RcResizeObserver from 'rc-resize-observer';
import { welcome } from '@/services/ant-design-pro/api';

const Welcome: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    welcome().then((res) => {
      return setData(res.data);
    });
  }, []);

  const config = {
    data,
    height: 600,
    xField: 'day',
    yField: 'value',
    point: {
      size: 8,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  const [responsive, setResponsive] = useState(false);
  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard title="资产折线图" split={responsive ? 'horizontal' : 'vertical'} headerBordered>
        <Line {...config} />
      </ProCard>
    </RcResizeObserver>
  );
};

export default Welcome;
