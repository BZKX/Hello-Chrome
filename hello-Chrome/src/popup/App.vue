<template>
    <div id="app" >
        <!--  下拉菜单_start -->
        <div class="theme">
            <el-dropdown>
                <span class="el-dropdown-link">
                  主题<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="setTheme('Moss')" class="Moss">Moss</el-dropdown-item>
                    <el-dropdown-item @click.native="setTheme('Granite')" class="Granite">Granite</el-dropdown-item>
                    <el-dropdown-item @click.native="setTheme('Docks')" class="Docks">Docks</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <!--  下拉菜单_end -->
        <div class="main-box" :style="{backgroundImage:`url(${imgUrl})`}">
            <svg class="icon nav-icon" aria-hidden="true">
                <use xlink:href="icon-search"></use>
            </svg>
        </div>
    </div>
</template>

<script>
  import MyButton from '../components/my-button';

  export default {
    components: { MyButton },
    data() {
      return {
        message: 'hello chrome',
        imgData: {},
        imgUrl: '',
      };
    },
    mounted() {
      window.document.documentElement.setAttribute('data-theme', 'Moss');
      this.$store.dispatch('getWeekImg').then(res => {
        console.log('res====>', res);
        if (res.errcode === 0) {
          this.imgData = res.data;
          this.imgUrl = `http://cn.bing.com${res.data.images[0].url}`;
        } else {
          this.$message.error('获取bing图片错误');
        }
      });
    },
    methods: {
      setTheme(themeName) {
        window.document.documentElement.setAttribute('data-theme', themeName);
      },
    },
  };
</script>
<style lang="scss">
    @import "../assets/style/colorDeploy";
    @import "../assets/style/common";

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        position: relative;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        @include themed($color-moss-dark);
        height: 100%;
        width: 100%;
    }

    .el-dropdown-menu.el-popper {
        padding: 0;
        overflow: hidden;
        border: none;

        .popper__arrow {
            display: none;
        }

        li{
            transition: all .3s ease-in-out;
            line-height: 40px;
            height: 40px;
            &:hover {
                height: 50px;
                line-height: 50px;
            }
        }
    }

    .Moss {
        background-color: #006270;
        color: #ffffff !important;
        &:hover {
            background-color: #009394 !important;
        }
    }

    .Granite {
        background-color: #3B7B9A;
        color: #ffffff !important;

        &:hover {
            background-color: #A5DEF1 !important;
            color: #073044 !important;
        }
    }

    .Docks {
        background-color: #43506c;
        color: #e9e9eb !important;

        &:hover {
            background-color: #3d619b !important;
        }
    }
</style>
