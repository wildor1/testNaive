<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>
        <header :class="header">
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
        </header>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <router-view />
      </n-layout-content>
      <!-- <nav>
    https://www.apple.com.cn/
    https://www.opposhop.cn/
    https://www.huawei.com/
    https://www.ikea.cn/
    https://www.brateck.com/
  </nav> -->

      <n-layout-footer>
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
      </n-layout-footer>
    </n-layout>

  </n-space>
</template>


<script>
export default {
  name: "App",
  data() {
    return { header: '' }
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