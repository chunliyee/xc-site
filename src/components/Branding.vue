<template>
    <div class="branding">
        <div class="navbar-header col-md-2">
            <a class="navbar-brand" href="#">
                <strong>MIN</strong>IMAL
            </a>
            <div class="sidebar-collapse">
                <a href="#">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'branding',
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
