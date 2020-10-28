<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div class="nav-bar navbar-expand">
      <nav>
        <ul class="nav-links">
          <li class="link"><a href="index.html">Home</a></li>
          <li class="link"><a href="about.html">About Us</a></li>
          <li class="link"><a href="yoga.html">Yoga</a></li>
          <li class="link"><a href="pranayama.html">Pranayama</a></li>

        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
