<template>
  <div style="background-color:#f4f4f4">
    <nav :class="header"
      style="width:100vw;background-color:rgba(255,255,255,0.8);border-bottom: 1px solid #e6e6e6;height: 70px;">
      <div class="flex justify-between menuTop w-screen" style="position: relative;z-index: 9999; margin:20px  0 ;">
        <div>
          <h3 class="text-2xl font-medium text-blue-500 mx-20">LiTight</h3>
        </div>
        <div class="flex flex-col lg:hidden hoverShow mx-20" @click="changeMenuState">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div
          class="box-border bg-white bg-opacity-90 flex flex-1 flex-col collapse  lg:bg-transparent  lg:flex-row lg:mx-20 lg:flex lg:flex-initial"
          :class="{ hidden: menuItems }" @click="changeMenuState">
          <router-link to="/" class="m-1  border-b border-solid border-gray-300 lg:border-b-0 ">首页</router-link>
          <!-- <a href="">Home</a> -->
          <router-link to="/products" class="m-1 border-b border-solid border-gray-300 lg:border-b-0">产品</router-link>
          <router-link to="/news" class="m-1 lg:hover:bg-opacity border-b border-solid border-gray-300 lg:border-b-0">
            信息文章
          </router-link>
          <router-link to="/about" class="m-1 lg:hover:bg-opacity border-b border-solid border-gray-300 lg:border-b-0">
            关于我们</router-link>
          <router-link to="/admin" class="m-1  lg:hover:bg-opacity border-b border-solid border-gray-300 lg:border-b-0">
            服务中心</router-link>
          <!-- <span style="padding:10px"> 中文 | EN </span> -->
        </div>
      </div>
    </nav>
    <!-- <header :class="header"> -->
    <!-- <header class="header flex flex-col xl:flex-row">
      
        </header> -->
    <div class="z-index:99">
      <router-view></router-view>
    </div>
    <!-- 
    https://www.apple.com.cn/
  https://www.yueicaster.co.jp/en
    https://www.opposhop.cn/
    https://www.huawei.com/
    https://www.ikea.cn/
    https://www.brateck.com/ 
  https://www.elesa-ganter.com.cn/zh-CN/chn  
-->
    <footer-view-vue />
  </div>
</template>


<script>
  import FooterViewVue from './components/FooterView.vue';
  export default {
    name: "App",
    data() {
      return {
        header: '',
        menuItems: true
      }
    },
    computed: {},
    mounted() {
      // window.addEventListener("scroll", this.init);
    },
    methods: {
      init() {
        if (document.documentElement.scrollTop > 37.5) {
          this.header = 'showHeader'
        } else {
          this.header = ''
        }
      },
      changeMenuState() {
        console.log('changeState')
        this.menuItems = !this.menuItems
      }
    },
    components: {
      FooterViewVue
    }
  };
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 20px;
  }

  .menuHide {
    display: none;
  }

  .navbar-collapse {
    align-items: center
  }

  .hoverShow:hover .menuHide {
    display: flex;
    flex-direction: column;
  }

  .menuTop {
    flex-wrap: wrap;
    align-items: center;
  }

  .header {
    width: 100%;
    height: 78px;
    line-height: 78px;
    background: rgba(255, 255, 255, 0.8);
    color: #000;
    text-align: right;
  }

  .showHeader {
    position: fixed;
    top: 0;
    animation: slide-down 0.7s;
    -moz-box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.349019607843137);
    -webkit-box-shadow: 2px 0px 10px rgb(0 0 0 / 35%);
    box-shadow: 2px 0px 10px rgb(0 0 0 / 35%);
    z-index: 9999;
  }

  .header a {
    color: #000;
    text-decoration: none;
  }

  .header span {
    margin: 40px;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: whitesmoke;
  }

  nav a {
    font-weight: bold;
    font-weight: 100;
    color: #333;
    text-decoration: none;
    padding: 0 20px;
  }

  nav a:hover {
    color: #aaa;
  }

  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  nav a.router-link-exact-active {
    text-decoration: none;
  }

  .n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
  }
</style>