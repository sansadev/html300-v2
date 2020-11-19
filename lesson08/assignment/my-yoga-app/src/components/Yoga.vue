<template>

<div class="grid-container">
<div class="header">
<header>
<div class="logo">
<img src="./images/yoga-chakra.jpg" id ="yoga-chakra" alt="man sitting in ayogic posture">
</div>
<h1>Yoga</h1>
</header>
</div>
<div class="nav-bar">
<nav>
<ul class="nav-links">
<li v-for="item in items" v-bind:key="item"><a v-bind:href="item.path">{{item.name}}</a></li>
</ul>
</nav>
</div>
<div>

<main class="main">
<div class="container">
<h2>LEARN ABOUT YOGA</h2>
<p class="text-danger"><a href="#" data-toggle="tooltip" title="In this section you learn about yoga!!">Yoga for beginners</a></p>
<p>Deepen your understanding of yoga by exploring the philosophical aspects of this ancient practice. Learn about the history of yoga, get an overview of the major yogic texts,
and learn more about the chakras, the body’s energy centers and their relationship to health and wellness. We’ve also included a section on using asanas to treat common ailments
and conditions as well as a compressive list of our articles on yoga.</p>


<div class="accordion">
<div v-for="pane in panes" v-bind:key="pane">
<div class="font-weight-bolder bg-info text-warning p-2 mt-2 pb-2" v-on:click="pane.open =!pane.open">{{ pane.title }}</div>

<p class="text-muted bg-light" v-if="pane.open">{{ pane.content }}</p>
</div>
</div>





</div>
</main>

</div>
<div class="footer">
<p class="footer-text">© Copyright 2020 Swati. All rights reserved.</p>
</div>

</div>
</template>
<script>
export default {

name: 'About',

data() {
return {

items: [{"name":"Home",
"path":"/"},
{"name":"About",
"path":"#/about"},
{"name":"Yoga",
"path":"#/yoga" },
{"name":"Pranayama",
"path":"#/pranayama"}
],

panes: {

q1:{
title: "Yoga Philosophy",
content: "The main philosophy of yoga is simple: mind, body and spirit are all one and cannot be clearly separated. Yet there is a multitude of philosophical ideas developed by looking into the deeper dimensions of the body, mind and spirit.",
open: true
},
q2:{
title: "Yoga Therapy",
content: "Yoga Therapy is the use of yoga postures, meditation and pranayama to help the body naturally heal and balance itself. Certain yogic practices have been shown to have specific healing qualities in addition to yoga’s inherent ability to create wellness and good health.",
open: false
},
q3:{
title: "Energy Anatomy",
content: " Hatha and Tantra yogas have developed a rich description of the anatomy of the subtle or energy body, including the different types of energies, the nadi energy channels and chakra energy centers.",
open: false
}

}







}
}

}




</script>
