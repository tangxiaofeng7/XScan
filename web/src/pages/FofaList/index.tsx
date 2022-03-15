import React, { useState, useRef } from 'react';
import { FormattedMessage } from 'umi';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { fofalist, addfofawhite } from '@/services/ant-design-pro/api';
import { Button, message } from 'antd';

const handleAddwhite = async (selectedRows: API.FofalistItem[]) => {
  const hide = message.loading('正在加白');
  if (!selectedRows) return true;
  try {
    await addfofawhite({
      id: selectedRows.map((row) => row.id),
    });
    hide();
    message.success('拉入白名单成功');
    return true;
  } catch (error) {
    hide();
    message.error('拉入白名单失败,请重试');
    return false;
  }
};

const FofaList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.FofalistItem[]>([]);

  const columns: ProColumns<API.GetFofalistItem>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      hideInSearch: true,
      width: '7%',
    },
    {
      title: 'task',
      dataIndex: 'task',
      ellipsis: true,
    },
    {
      title: 'host',
      copyable: true,
      dataIndex: 'host',
      ellipsis: true,
    },
    {
      title: 'title',
      dataIndex: 'title',
      ellipsis: true,
    },
    {
      title: 'ip',
      dataIndex: 'ip',
      ellipsis: true,
    },
    {
      title: 'domain',
      dataIndex: 'domain',
      ellipsis: true,
    },
    {
      title: 'port',
      dataIndex: 'port',
      ellipsis: true,
    },

    {
      title: 'server',
      dataIndex: 'server',
      ellipsis: true,
    },
    {
      title: 'protocol',
      dataIndex: 'protocol',
      ellipsis: true,
    },

    {
      title: '操作',
      valueType: 'option',
      render: (text, record) => [
        <a
          key="editable"
          onClick={async () => {
            await addfofawhite({
              id: [record.id],
            });
            actionRef.current?.reloadAndRest?.();
          }}
        >
          加白
        </a>,
      ],
    },
  ];

  return (
    <PageContainer ghost>
      <ProTable<API.GetFofalistItem, API.PageParams>
        toolbar={{
          actions: [
            <Button
              key="id"
              type="primary"
              onClick={async () => {
                window.open(`/api/downfofaList`);
              }}
            >
              批量导出
            </Button>,
          ],
        }}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={fofalist}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />

      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            type="primary"
            onClick={async () => {
              await handleAddwhite(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量加白
          </Button>
        </FooterToolbar>
      )}
    </PageContainer>
  );
};

export default FofaList;
