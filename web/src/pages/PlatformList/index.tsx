import { PageContainer } from '@ant-design/pro-layout';
import React, { useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { message } from 'antd';
import { platform, updatePlatform } from '@/services/ant-design-pro/api';

const PlatformList: React.FC = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  useState<'top' | 'bottom' | 'hidden'>('hidden');

  const columns: ProColumns<API.GetPlatformListItem>[] = [
    {
      title: '平台名称',
      dataIndex: 'platform',
      editable: false,
      width: '15%',
    },
    {
      title: '账号',

      dataIndex: 'username',
      width: '25%',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },

    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <>
        <EditableProTable<API.GetPlatformListItem>
          rowKey="id"
          headerTitle={<hr />}
          recordCreatorProps={false}
          request={platform}
          columns={columns}
          editable={{
            type: 'multiple',
            editableKeys,
            onSave: async (rowKey, data) => {
              await updatePlatform({
                id: rowKey,
                username: data.username,
                password: data.password,
              });
              message.success('Configuration is successful');
            },
            onChange: setEditableRowKeys,
            actionRender: (row, config, dom) => [dom.save, dom.cancel],
          }}
        />
      </>
    </PageContainer>
  );
};

export default PlatformList;
