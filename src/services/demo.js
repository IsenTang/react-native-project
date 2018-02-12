import request from '../util/request'

export async function getMenu(data) {
    return await request({
        url: '/system/getMenu',
        method: 'post',
        data
    })
}