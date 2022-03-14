import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { ProFormText, ProForm } from '@ant-design/pro-form';
import { useRequest } from 'umi';
import { queryCurrent } from './service';
import { message } from 'antd';
import { updatePass } from '@/services/ant-design-pro/api';
import styles from './index.less';
const Account: React.FC = () => {
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });

  const handleFinish = async (fields: API.CurrentUser) => {
    const hide = message.loading('正在修改密码');
    try {
      const msg = await updatePass({ ...fields });
      if (msg.msg === '旧密码错误') {
        message.error('旧密码错误');
      } else if (msg.msg === '两次密码不一致') {
        message.error('两次密码不一致');
      } else {
        message.success('密码修改成功');
      }
      hide();
      return true;
    } catch (error) {
      hide();
      message.error('密码修改失败,请重试!');
      return false;
    }
  };
  return (
    <PageContainer>
      <div>
        {loading ? null : (
          <ProForm
            className={styles.input}
            // layout="vertical"
            initialValues={{
              ...currentUser,
              name: currentUser?.name,
            }}
            onFinish={handleFinish}
          >
            <ProFormText disabled width="md" name="name" />

            <ProFormText.Password
              width="md"
              name="old-password"
              placeholder="请输入旧密码"
              rules={[
                {
                  required: true,
                  message: '请输入您的旧密码!',
                },
              ]}
            />
            <ProFormText.Password
              width="md"
              name="new-password"
              placeholder="请输入新密码"
              rules={[
                {
                  required: true,
                  message: '请输入您的新密码!',
                },
              ]}
            />
            <ProFormText.Password
              width="md"
              name="new-password2"
              placeholder="再次输入新密码"
              rules={[
                {
                  required: true,
                  message: '请再次输入您的新密码!',
                },
              ]}
            />
          </ProForm>
        )}
      </div>
    </PageContainer>
  );
};

export default Account;
