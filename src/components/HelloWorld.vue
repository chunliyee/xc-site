<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p v-for="item in userList" :key="item.id">
        <ul>
            <li>{{ item.id }}</li>
            <li>{{ item.name }}</li>
            <li>{{ item.password }}</li>
        </ul>
    </p>
  </div>
</template>

<script>
export default {
    name: 'Helloworld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            userList: []
        }
    },
    created() {
        this.getUserList()
    },
    methods: {
        getUserList() {
            const Vm = this
            Vm.$store.dispatch('getUserLists', {
            }).then(res => {
                console.log(res.data)
                this.userList = res.data
            })
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
