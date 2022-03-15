import React, { useState } from 'react';
import { queryState } from './service';
import { useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { Progress } from 'antd';
import ProCard from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import styles from './index.less';

const State: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  const { data: systeminfo } = useRequest(() => {
    return queryState();
  });

  return (
    <PageContainer>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <ProCard split={responsive ? 'horizontal' : 'vertical'} headerBordered bordered>
          <ProCard split="horizontal">
            <ProCard split="horizontal">
              <ProCard split="vertical">
                <ProCard split={responsive ? 'horizontal' : 'vertical'} bordered headerBordered>
                  <ProCard title="环境" colSpan="50%">
                    <div style={{ height: 260 }}>
                      <ProCard layout="center" style={{ height: 100 }}>
                        <ProCard title="操作系统:">{systeminfo?.os.goos}</ProCard>
                        <ProCard title="cpu数量:">{systeminfo?.os.numCpu}</ProCard>
                      </ProCard>
                      <ProCard layout="center" style={{ height: 150 }}>
                        <ProCard title="golang版本:">{systeminfo?.os.goVersion}</ProCard>
                        <ProCard title="goroutine数量:">{systeminfo?.os.numGoroutine}</ProCard>
                      </ProCard>
                    </div>
                  </ProCard>
                  <ProCard title="硬盘">
                    <div style={{ height: 260 }}>
                      <ProCard layout="center" style={{ height: 100 }}>
                        <ProCard title="总共 (MB)">{systeminfo?.disk.totalMb}</ProCard>
                        <ProCard title="已使用 (MB)">{systeminfo?.disk.usedMb}</ProCard>
                      </ProCard>
                      <ProCard layout="center" style={{ height: 150 }}>
                        <ProCard title="总共 (GB)">{systeminfo?.disk.totalGb}</ProCard>
                        <ProCard title="已使用 (GB)">{systeminfo?.disk.usedGb}</ProCard>
                      </ProCard>
                      <Progress percent={systeminfo?.disk.usedPercent} />
                    </div>
                  </ProCard>
                </ProCard>
              </ProCard>
              <ProCard split="vertical">
                <ProCard split={responsive ? 'horizontal' : 'vertical'} bordered headerBordered>
                  <ProCard title="CPU" colSpan="50%">
                    <div style={{ height: 260 }}>
                      <ProCard layout="center" style={{ height: 70 }} colSpan="50%">
                        <ProCard title="cpu核心数:">{systeminfo?.cpu.cores}</ProCard>
                      </ProCard>

                      {systeminfo?.cpu.cpus.map(
                        (item: { toFixed: (arg0: number) => number | undefined }, index: any) => {
                          return <Progress key={index} percent={item.toFixed(0)} />;
                        },
                      )}
                    </div>
                  </ProCard>
                  <ProCard title="内存">
                    <div style={{ height: 120 }}>
                      <ProCard layout="center" style={{ height: 100 }}>
                        <ProCard title="总共 (MB)">{systeminfo?.ram.totalMb}</ProCard>
                        <ProCard title="已使用 (MB)">{systeminfo?.ram.usedMb}</ProCard>
                      </ProCard>
                    </div>
                    <div className={styles.input}>
                      <Progress type="circle" percent={systeminfo?.ram.usedPercent} />
                    </div>
                  </ProCard>
                </ProCard>
              </ProCard>
            </ProCard>
          </ProCard>
        </ProCard>
      </RcResizeObserver>
    </PageContainer>
  );
};

export default State;
