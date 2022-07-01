<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <nav class="container flex justify-between px-4 py-8 mx-auto bg-white menuTop">
          <div>
            <h3 class="text-2xl font-medium text-blue-500">LOGO</h3>
          </div>
          <div class="flex flex-col lg:hidden hoverShow" style="height:30px" @click="changeMenuState">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <div class="space-x-8 navbar-collapse flex-col flex lg:flex-row lg:flex collapse menuItems" :class="{ hidden: menuItems }">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Blogs</a>
            <a href="">Our Team</a>
            <a href="">Contact Us</a>
          </div>
        </nav>
        <!-- <header :class="header"> -->
        <!-- <header class="header flex flex-col xl:flex-row">
          <span>
            <router-link class="class3" to="/">首页</router-link>
          </span>
          <span>
            <router-link to="/products">产品</router-link>
          </span>
          <span>
            <router-link to="/admin">服务中心</router-link>
          </span>
          <span>
            <router-link to="/about">关于我们</router-link>
          </span>
          <span> 中文 | EN </span>
        </header> -->
      </n-layout-header>
      <!-- <nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full" style="color:red">
        <div class="flex flex-no-shrink items-stretch h-12">
          <a href="#"
            class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Tailwind</a>
          <a href="#"
            class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Css</a>
          <button class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
          <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <a href="#"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item
              1</a>
            <a href="#"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item
              2</a>
            <a href="#"
              class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Item
              3</a>
          </div>
        </div>
      </nav> -->

      <!-- <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content> -->
      <!-- <nav>
    https://www.apple.com.cn/
    https://www.opposhop.cn/
    https://www.huawei.com/
    https://www.ikea.cn/
    https://www.brateck.com/
  </nav> -->

      <!-- <n-layout-footer>
        <div style="width: 80vw;height:500px">
          <div style="height:400px;">
            <div style="width:20vw;float: left; margin-top:60px;"> 关于立泰特 </div>
            <div style="width:20vw;float: left; margin-top:60px;">我们的产品 </div>
            <div style="width:20vw;float: left; margin-top:60px">服务与支持</div>
          </div>
          <div
            style=" width:100%;padding-top:6px; margin:6px 0px 0px 40px; border-top:1px solid #e2e2e2;text-align: left;">
            Copyright © 2022 LiTight Inc. 苏ICP备10214630

          </div>
        </div>
      </n-layout-footer> -->
    </n-layout>

  </n-space>
</template>


<script>
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
    window.addEventListener("scroll", this.init);
  },
  methods: {
    init() {
      if (document.documentElement.scrollTop > 160) {
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
  flex-basis: 100%;
  flex-grow: 1;
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

header {
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
  -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
  -webkit-box-shadow: 0px 0px 5px rgb(0 0 0 / 35%);
  box-shadow: 0px 0px 5px rgb(0 0 0 / 35%);
  z-index: 9999;
}

header a {
  color: #000;
  text-decoration: none;
}

header span {
  margin: 40px;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  line-height: 35px;
  background-color: whitesmoke;
}

.class3 {
  position: relative;
}

nav a {
  font-weight: bold;
  font-weight: 100;
  color: #333;
  text-decoration: none;
  padding: 10px;
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