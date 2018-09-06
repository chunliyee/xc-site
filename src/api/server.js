/**
 * 本模块用于西城站群系统后台管理端数据交互
 * 主要为底层接口路由的封装
 * 创建时间： 2018-7-29 09:53
 */

import { ajax } from './ajax'

/**
 * 获取用户列表
 * @returns
 */
async function _getUserLists() {
    let userLists = await ajax.get('/userList')
    return userLists
}

async function _getUserById(params) {
    let userInfo = await ajax.post('/getUser', params)
    return userInfo
}

export default {
    _getUserLists,
    _getUserById
}
