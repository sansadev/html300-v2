<template>
<div>
<div class="grid-container">

<div class="header">
<header>
<div class="logo">
<img src="./images/yoga-chakra.jpg" id="yoga-chakra"/>

</div>
<h1>Yoga</h1>
</header>
</div>
<!--navbar-->
<div class="nav-bar navbar-expand">
<nav>
<ul class="nav-links">
<li v-for="item in items" v-bind:key="item"><a v-bind:href="item.path">{{item.name}}</a></li>
</ul>
</nav>
</div>
<div class="content">
<div class="sidebar">
<h2>Yoga Basics</h2>
<p>
Yoga is a vast collection of spiritual techniques and practices aimed at integrating mind, body and spirit to achieve a state of enlightenment or oneness
with the universe. What is normally thought of as “yoga” in the West is really Hatha Yoga, one of the many paths of yoga. The different paths of yoga
emphasize different approaches and techniques, but ultimately lead to the same goal of unification and enlightenment.Though yoga’s ultimate aim is lofty,
its essence is practical and scientific as it emphasizes direct experience and observable results.  It is not a religion, but a practice of personal
inquiry and exploration.  As the cultural and religious diversity of practitioners attest, yogic philosophy speaks to universal truths that can be
incorporated within any belief system.
</p>
</div>



 <section v-if="cards">
<div class="card-container">
<card
 v-for="card in cards"
 v-bind:card="card"
 v-bind:key="card.img"
 >

</card>
</div>
</section>





</div>
<div class="footer">
<p class="footer-text">© Copyright 2020 Swati. All rights reserved.</p>

</div>

</div>
</div>
</template>

<script>
import Card from './Card.vue';


export default {

name: 'Home',
components: {
 Card,
},
data() {
return {
items: [{"name":"Home",
          "path":"/"},
        {"name":"About",
          "path":"#/about"},
        {"name":"Yoga",
           "path":"#/yoga" },
        {"name":"Pranayama",
           "path":"#/pranayama"}],

cards: [
{
img: require ("./images/yoga.jpg"),
title: "Karma Yoga",
desc: "Karma yoga, also called Karma marga, is one of the three spiritual paths in Hinduism"
},

{
img: require ("./images/yoga.jpg") ,
title: "Jnana Yoga",
desc: "Jnana yoga, also known as Jnanamarga, is one of the several spiritual paths in Hinduism"
},

{
img: require ("./images/yoga.jpg"),
title: "Karma Yoga",
desc: "Haṭha yoga is a branch of yoga. The Sanskrit word  haṭha literally means force and thus alludes to a system of physical techniques"
}


]

}
}

}
</script>
<style>


</style>
