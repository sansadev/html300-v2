<template>
<div id="app">

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

</style>
