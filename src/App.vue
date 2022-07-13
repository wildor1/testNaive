<template>
<div>
 
      <router-view></router-view>
  
  </div>
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