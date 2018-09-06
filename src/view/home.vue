<template>
    <div class="home">
        <div class="frosted-glass">
        </div>
         <!-- Preloader -->
        <!-- <div class="mask"><div id="loader"></div></div> -->
        <!-- /Preloader -->

        <div id="wrap">
            <!-- Make page fluid -->
            <div class="row">
                <!-- Fixed navbar -->
                <div class="navbar navbar-default navbar-fixed-top navbar-transparent-black mm-fixed-top" role="navigation" id="navbar">
                    <!-- Branding -->
                    <Branding>
                    </Branding>
                    <!-- .nav-collapse -->
                    <div class="navbar-collapse">  
                        <!-- Page refresh -->
                        <Refresh>
                        </Refresh>
                        <!-- /Page refresh -->

                        <!-- Search -->
                        <Search>
                        </Search>
                        <!-- Search end -->

                        <!-- Sidebar -->
                        <Sidebar>
                        </Sidebar>
                        <!-- Sidebar end -->
                    </div>
                    <!--/.nav-collapse -->
                </div>
                <!-- Fixed navbar end -->
                <!-- Page content-->
                <Content>
                </Content>
                <!-- Page content end-->
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Refresh from '../components/Refresh'
import Branding from '../components/Branding'
import Content from '../components/Content'
export default {
    name: 'home',
    homeUrl: '/home',
    components: {
        Sidebar: Sidebar,
        Search: Search,
        Refresh: Refresh,
        Branding: Branding,
        Content: Content
    }
}
</script>

<style lang="less" scoped>
@import '../styles/variable.less';

.home {
    position: absolute;
    top: 0;
    background: url('../assets/home-bg.jpg') repeat;
    // background-color: blueviolet;
    background-position: left top;
    background-size: 100%, 100%;
    width: 100%;
    height: 100vh;
    .frosted-glass {
        width: 150%;
        height: 150%;
        background: inherit;
        -webkit-filter: blur(30px);   
        -moz-filter: blur(30px);   
        -ms-filter: blur(30px);   
        -o-filter: blur(30px);   
        filter: blur(30px);   
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=4, MakeShadow=false);
        position: fixed;
        top: -20%;
        left: -20%;
    }
    .fa {
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    .fa-bars:before {
        content: "\f0c9";
    }
}
</style>
