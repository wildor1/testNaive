<template>
  <header>
    <span><a href="mailto:sales@XTrolley.com" ><i class="iconfont icon-mail" /><span style="margin:0 10px">Contact Us</span></a></span>
    <span> 中文 | EN </span>
  </header>
  <nav>
    <router-link to="/">News</router-link>
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
header span{
  margin: 40px;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around ;
  height: 50px;
  line-height: 50px;
  line-height: 35px;
  background-color: whitesmoke;
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