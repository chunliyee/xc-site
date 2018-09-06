import api from '@/api'
// import Vue from 'vue'

const actions = {
    async getUserLists() {
        let userLists = await api._getUserLists()
        return userLists
    },
    /**
     * 通过用户ID获取用户信息
     *
     * @param {*} { commit }
     * @param {*} params
     * @returns
     */
    async getUserById({ commit }, params) {
        let userInfo = await api._getUserById(params)
        return userInfo
    }
}

export default actions
