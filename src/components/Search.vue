<template>
    <div class="search">
      <div class="search" id="main-search">
            <i class="fa fa-search"></i> <input type="text" placeholder="Search...">
      </div>
    </div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variable.less';

:focus {
    outline: 0 !important;
}
</style>
