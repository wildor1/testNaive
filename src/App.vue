<template>
  <nav>
    <a href="mailto:sales@XTrolley.com" id="A_9">sales@XTrolley.com</a>
    <router-link to="/">Home</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/admin">Admin</router-link>
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

  nav {
    padding: 30px;
    background-color: #336699;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>