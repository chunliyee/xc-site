const mutations = {
    increment(state) {
        state.count++
    },
    // 设置用户信息
    SET_userInfo(state, result) {
        state.userInfo = result
    }
}

export default mutations
