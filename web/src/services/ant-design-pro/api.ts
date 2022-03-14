// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

//更新当前用户密码
export async function updatePass(options?: { [key: string]: any }) {
  return request<API.CurrentItem>('/editPass', {
    method: 'PUT',
    data: options,
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取platform GET /api/platform */
export async function platform(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.PlatformList>('/platform', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /platform */
export async function updatePlatform(options?: { [key: string]: any }) {
  return request<API.PlatformListItem>('/platform', {
    method: 'PUT',
    data: options,
  });
}

// policy
export async function policy(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.PolicyList>('/policy', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

//addpolicy
export async function addpolicy(options?: { [key: string]: any }) {
  return request<API.PolicyItem>('/policy', {
    method: 'POST',
    params: {
      ...options,
    },
    // ...(options || {}),
  });
}

//updatePolicy
export async function updatePolicy(options?: { [key: string]: any }) {
  return request<API.PlatformListItem>('/policy', {
    method: 'PUT',
    data: options,
  });
}

//removePolicy
export async function removePolicy(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/policy', {
    method: 'DELETE',
    data: {
      ...options,
    },
  });
}

//doPolicy
export async function doPolicy(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/policyDo', {
    method: 'POST',
    data: {
      ...options,
    },
  });
}

//fofalist
export async function fofalist(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.PolicyList>('/fofalist', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

//addfofawhite

export async function addfofawhite(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/fofalist', {
    method: 'POST',
    data: {
      ...options,
    },
  });
}

//welcome
export async function welcome(options?: { [key: string]: any }) {
  return request('/welcome', {
    method: 'GET',
  });
}


//hunterlist
export async function hunterlist(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.PolicyList>('/hunterlist', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

//addhunterwhite
export async function addhunterwhite(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/hunterlist', {
    method: 'POST',
    data: {
      ...options,
    },
  });
}