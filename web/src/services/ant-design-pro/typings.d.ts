// @ts-ignore
/* eslint-disable */

declare namespace API {
  //分页相关
  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  //登录相关
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type CurrentItem = {
    code?: number;
    data?: any;
    msg?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
  };

  type LoginResult = {
    code?: number;
    data?: any;
    msg?: string;
  };

  //Platform相关
  type GetPlatformListItem = {
    id: number;
    platform: string;
    username: string;
    password: string;
  };
  type PlatformListItem = {
    id?: number;
    username?: string;
    password?: string;
  };
  type PlatformList = {
    code: number;
    data: Data;
    msg: string;
  };

  //Policy相关
  type GetPolicyItem = {
    id: number;
    task?: string;
    platform?: string;
    rule?: string;
    created_time?: string;
    updated_time?: string;
    excute_time?: string;
  };

  type PolicyList = {
    code: number;
    data: Data;
    msg: string;
  };

  type PolicyItem = {
    id: number;
    task?: string;
    platform?: string;
    rule?: string;
    created_time?: string;
    updated_time?: string;
    excute_time?: string;
  };

  type PolicyListItem = {
    key?: number;
    name: string;
    username: string;
    password: string;
  };

  //fofalist
  type GetFofalistItem = {
    id: number;
    task: string;
    host: string;
    title: string;
    ip: string;
    domain: string;
    port: string;
    server: string;
    protocol: string;
    iswhite: boolean;
    created_time: string;
    updated_time: string;
  };

  type FofalistItem = {
    id: number;
    task: string;
    host: string;
    title: string;
    ip: string;
    domain: string;
    port: string;
    server: string;
    protocol: string;
    iswhite: boolean;
    created_time: string;
    updated_time: string;
  };

  type WelcomeItem = {
    day: string;
    value: number;
    data: undefined;
  };
}
