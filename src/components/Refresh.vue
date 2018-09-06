<template>
    <div class="refresh">
      <ul class="nav navbar-nav refresh">
          <li class="divided">
                <a href="#" class="page-refresh"><i class="fa fa-refresh"></i></a>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'refresh',
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
