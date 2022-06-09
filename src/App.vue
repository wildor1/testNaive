<template>
  <header>
    <span><router-link class="class3" to="/">首页</router-link></span>
    <span><router-link to="/">Products</router-link></span>
    <span><router-link to="/cart">产品</router-link></span>
    <span><router-link to="/admin">服务中心</router-link></span>
    <span> 中文 | EN </span>
  </header>
  <!-- <nav>
    https://www.apple.com.cn/
    https://www.opposhop.cn/
    https://www.huawei.com/
    https://www.ikea.cn/
    https://www.brateck.com/
  </nav> -->
  <router-view />
</template>
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
    height: 78px;
    line-height: 78px;
    padding-right: 20px;
    background: rgba(255, 255, 255, 0.8);
    color: #000;
    text-align: right;
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

  nav a.router-link-exact-active {
    text-decoration: none;
  }
</style>