import request from '../util/request';

export async function getMenu(data) {
  const result = await request({
    url: '/system/getMenu',
    method: 'post',
    data,
  });

  return result;
}

export async function test(data) {
  const result = await request({
    url: '/system/getMenu',
    method: 'post',
    data,
  });

  return result;
}
