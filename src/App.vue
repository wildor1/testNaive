<template>
  <header>
    <span><a href="mailto:sales@XTrolley.com" ><i class="iconfont icon-mail" /><span style="margin:0 10px">Contact Us</span></a></span>
    <span> 中文 | EN </span>
  </header>
  <nav>
     <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
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
  /* display: flex; */
  /* width: 1600px; */
  /* flex-direction: row;
  justify-content: space-around ; */
  height: 50px;
  line-height: 50px;
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