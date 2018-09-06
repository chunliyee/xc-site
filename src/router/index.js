import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home'
import Login from '@/view/login'
import forgetPwd from '@/view/forgetPwd'
import Base from '@/view/base'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/hw',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/forgetPwd',
            name: 'forgetPwd',
            component: forgetPwd
        },
        {
            path: '/base',
            name: 'base',
            component: Base
        }
    ]
})
