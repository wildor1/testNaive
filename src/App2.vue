<template>
  <header>
    <span>
      <a href="mailto:sales@XTrolley.com">
        <i class="iconfont icon-mail"></i>
        <span style="margin: 0 10px">Contact Us</span>
      </a>
    </span>
    <span> 中文 | EN </span>
  </header>
  <nav>
    <router-link class="class3" to="/">All Products</router-link>
    <!-- <div class="class4">
      <div class="hidepart">
        <div class="hideleft">
          <div class="leftitem leftitem1">医疗支架</div>
          <div class="leftitem leftitem2">户外支架</div>
          <div class="leftitem leftitem3">室内支架</div>
          <div class="leftitem leftitem4">车间台车</div>
          <div class="hideright">
            <div class="rightitem rightitem1">医疗我到底有多大</div>
            <div class="rightitem rightitem2">美容</div>
            <div class="rightitem rightitem3">家用</div>
          </div>
        </div>
      </div>
    </div> -->
    <router-link to="/">Products</router-link>
    <router-link to="/cart">DownLoads</router-link>
    <router-link to="/admin">AboutUs</router-link>
  </nav>
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
    height: 42px;
    line-height: 42px;
    padding-right: 20px;
    background: #111;
    color: #eee;
    text-align: right;
  }

  header a {
    color: #eee;
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

  .class4 {
    position: absolute;
    top: 92px;
    left: 50px;
    width: 100px;
    height: 100px;
    display: none;
    z-index: 100;
  }

  .class4:hover {
    display: block;
  }

  .class4>.hidepart {
    width: 900px;
    height: 700px;
    background: white;
  }

  .hidepart>.hideleft {
    width: 300px;
  }

  .hideright {
    /* float: right; */
    position: absolute;
    top: 90px;
    background: red;
    left: 300px;
    height: 500px;
    width: 1600px;
  }

  .class3:hover~.class4 {
    display: block;
  }

  .leftitem {
    position: relative;
    height: 50px;
    line-height: 50px;
    background: #aaa;
  }

  .rightitem {
    display: none;
    background: yellow;
  }

  .leftitem1:hover~.hideright>.rightitem1 {
    display: block;
  }

  .leftitem2:hover~.hideright>.rightitem2 {
    display: block;
  }

  .leftitem3:hover~.hideright>.rightitem3 {
    display: block;
  }

  .leftitem:hover {
    background: #fff;
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