import { request } from 'umi';
import type { Systeminfo } from './data';

export async function queryState(): Promise<{ data: Systeminfo }> {
  return request('/serverInfo');
}
