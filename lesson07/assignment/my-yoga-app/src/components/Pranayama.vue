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
           <h2>Pranayama: The Yogic Breathing</h2>
         <p>If you’re feeling tired, heavy, dull, or emotionally off-balance, a few minutes of yogic breathing can energize, renew, and sustain you through your day or a challenging yoga class. There are a number of different breathing techniques in yoga that can influence and affect your experience in asana, relaxation, and meditation. Having a stronger connection and control of your breath will give you a deeper attunement of your physical, mental, and emotional bodies and help anchor your awareness in the present moment. Yogis believe that if you can master your breath through pranayama practices you can master your mind!</p>
         <div class="row">
           <div class="col-md-4" v-for="picture in pictures" v-bind:key="picture">
             <div class="thumbnail">

               <img v-bind:src="picture.img" />
               <div class="caption">
                 <p>{{ picture.contents}}</p>
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
pictures: [
           {
           img: require ("./images/pranayama.jpg") ,
           contents: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quisquam ab, dolorem. Reprehenderit ratione minus maxime nostrum, consequuntur illum enim, ea expedita, similique mollitia laudantium aut cum. Eaque at incidunt harum inventore ut, dolorem hic provident porro, ea quo et optio accusamus voluptatibus sequi ducimus omnis officia, error magnam. Doloremque!"

           },
           {
           img: require ("./images/pranayama.jpg") ,
            contents: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quisquam ab, dolorem. Reprehenderit ratione minus maxime nostrum, consequuntur illum enim, ea expedita, similique mollitia laudantium aut cum. Eaque at incidunt harum inventore ut, dolorem hic provident porro, ea quo et optio accusamus voluptatibus sequi ducimus omnis officia, error magnam. Doloremque!"
           },
           {
           img: require ("./images/pranayama.jpg") ,
            contents: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quisquam ab, dolorem. Reprehenderit ratione minus maxime nostrum, consequuntur illum enim, ea expedita, similique mollitia laudantium aut cum. Eaque at incidunt harum inventore ut, dolorem hic provident porro, ea quo et optio accusamus voluptatibus sequi ducimus omnis officia, error magnam. Doloremque!"
           }

         ]

  }
  }

  }




</script>
