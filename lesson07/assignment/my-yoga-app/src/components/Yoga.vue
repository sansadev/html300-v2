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
       <div id="accordion" class="mb-5">
         <div class="card">
           <div class="card-header bg-warning">
             <a class="card-link" data-toggle="collapse" href="#collapseOne">
               Yoga Philosophy
             </a>
           </div>
           <div id="collapseOne" class="collapse" data-parent="#accordion">
             <div class="card-body">
           The main philosophy of yoga is simple: mind, body and spirit are all one and cannot be clearly separated. Yet there is a multitude of philosophical ideas developed by looking into the deeper dimensions of the body, mind and spirit.
           </div>
         </div>
       </div>
       <div class="card">
         <div class="card-header bg-warning">
           <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
             Yoga Therapy
           </a>
         </div>
         <div id="collapseTwo" class="collapse" data-parent="#accordion">
           <div class="card-body">
             Yoga Therapy is the use of yoga postures, meditation and pranayama to help the body naturally heal and balance itself. Certain yogic practices have been shown to have specific healing qualities in addition to yoga’s inherent ability to create wellness and good health.
           </div>
         </div>
       </div>
       <div class="card">
         <div class="card-header bg-warning">
           <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
             Energy Anatomy
           </a>
         </div>
         <div id="collapseThree" class="collapse" data-parent="#accordion">
           <div class="card-body">
             Hatha and Tantra yogas have developed a rich description of the anatomy of the subtle or energy body, including the different types of energies, the nadi energy channels and chakra
             energy centers.
           </div>
         </div>
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


  }
  }

  }




</script>
