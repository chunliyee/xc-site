import axios from 'axios'
// import Vue from 'vue'

/**
 * 获取一个新的自定义的axios实例
 */
const ajaxUrl =
    process.env.NODE_ENV === 'development'
        ? window.config.Host.development // 开发环境中的后端地址
        // ? 'http://10.20.5.134:8080/sport' // 开发环境中的后端地址
        : process.env.NODE_ENV === 'production'
            ? window.config.Host.production // 生产环境中的后端地址
            // ? 'sport/' // 生产环境中的后端地址
            : window.config.Host.test // 测试环境的后端地址

export let ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    withCredentials: true
})
