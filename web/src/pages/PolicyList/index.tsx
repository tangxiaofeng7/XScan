import { Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useRef } from 'react';
import { FormattedMessage } from 'umi';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import { ModalForm, ProFormText, ProFormSelect } from '@ant-design/pro-form';
import {
  policy,
  addpolicy,
  updatePolicy,
  removePolicy,
  doPolicy,
} from '@/services/ant-design-pro/api';

const handleAdd = async (fields: API.PolicyItem) => {
  const hide = message.loading('正在添加');
  try {
    await addpolicy({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

const handleRemove = async (selectedRows: API.PolicyItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await removePolicy({
      id: selectedRows.map((row) => row.id),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const PolicyList: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.PolicyItem[]>([]);

  const columns: ProColumns<API.GetPolicyItem>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      hideInSearch: true,
      editable: false,
      width: '7%',
    },
    {
      title: '项目',
      editable: false,
      dataIndex: 'task',
      ellipsis: true,
    },
    {
      title: '平台',
      dataIndex: 'platform',
      hideInSearch: false,
      valueEnum: {
        fofa: { text: 'fofa', status: 'Success' },
        hunter: { text: 'hunter', status: 'Success' },
        zoomeye: { text: 'zoomeye', status: 'Success' },
      },
      editable: false,
    },
    {
      title: '策略',
      dataIndex: 'rule',
      copyable: true,
      hideInSearch: true,
    },
    {
      title: '进度',
      hideInSearch: true,
      dataIndex: 'excute_time',
      valueType: 'progress',
      editable: false,
    },

    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,

        <Button
          disabled={record.excute_time === '0' ? false : true}
          key="excute"
          type="primary"
          danger
          onClick={async () => {
            console.log(record.excute_time);
            action?.reload();
            await doPolicy({
              id: record.id,
            });
            action?.reload();
          }}
        >
          执行
        </Button>,
      ],
    },
  ];

  return (
    <PageContainer ghost>
      <ProTable<API.GetPolicyItem, API.PageParams>
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={policy}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data) => {
            await updatePolicy({
              id: rowKey,
              rule: data.rule,
            });
            message.success('Configuration is successful');
            if (actionRef.current) {
              actionRef.current.reload();
            }
          },
          onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
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
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
        </FooterToolbar>
      )}

      <ModalForm
        title={'新建策略'}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.PolicyItem);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          label="项目"
          rules={[
            {
              required: true,
              message: '规则为必填项',
            },
          ]}
          width="md"
          name="task"
          placeholder="输入项目"
        />
        <ProFormSelect
          name="platform"
          label="平台"
          valueEnum={{
            fofa: 'Fofa',
            hunter: 'Hunter',
            zoomeye: 'Zoomeye',
            shodan: 'Shodan',
            quake: 'Quake',
          }}
          width="md"
          rules={[
            {
              required: true,
              message: '规则为必填项',
            },
          ]}
          placeholder="选择平台"
        />
        <ProFormText
          label="规则"
          rules={[
            {
              required: true,
              message: '规则为必填项',
            },
          ]}
          width="md"
          name="rule"
          placeholder="输入规则"
        />
      </ModalForm>
    </PageContainer>
  );
};

export default PolicyList;
