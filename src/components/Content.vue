<template>
    <div class="middle">
        <div id="content" class="col-md-12" tabindex="5001" style="overflow: hidden; outline: none; padding-left: 265px;">
            <div class="pageheader">
                pageheader
            </div>
            <div class="main">
                main
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'middle',
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
.pageheader {
    margin-top: 60px;
}
</style>
