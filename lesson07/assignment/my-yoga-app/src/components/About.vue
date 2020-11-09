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
             <h1 class="glow">Nature</h1>
             <img class="img-fluid waterfall img-thumbnail"  src="./images/waterfall.jpg" alt="waterfall">
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
            "path":"/about"},
          {"name":"Yoga",
             "path":"#/yoga" },
          {"name":"Pranayama",
             "path":"#/pranayama"}
             ],


  }
  }

  }




</script>
