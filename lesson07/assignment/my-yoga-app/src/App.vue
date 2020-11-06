<template>
<div id="app">
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
<router-link to="/yoga">Yoga</router-link>
<router-link to="/pranayama">Pranayama</router-link>
<router-view></router-view>
<Home/>
<About/>
<Yoga/>
<Pranayama/>
</div>
</template>

<script>

import Home from './components/Home.vue'
import About from './components/About.vue'
import Yoga from './components/Yoga.vue'
import Pranayama from './components/Pranayama.vue'

export default {
name: 'App',
components: {
Home,
About,
Yoga,
Pranayama

}
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
