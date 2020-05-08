<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/">About</router-link>
      <router-link to="/">Reviews</router-link>
      <router-link to="/">Events</router-link>
      <router-link to="/">Contact</router-link>
      <a class="facebook-link" href="https://www.facebook.com/rjhcarlson/"><i class="fab fa-facebook-f"/></a>
    </div>
    <router-view/>
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  background-color: beige;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  width: 100%;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: black;
  margin-left: 30px;
}

#nav .facebook-link {
  margin-left: auto;
  margin-right: 30px;
}

#nav a.router-link-exact-active {
  color: #444400;
}
</style>
