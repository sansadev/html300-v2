<script>
import PictureDetail from './PictureDetail.vue';


export default {

  name: 'Pranayama',
  components: {
   PictureDetail,
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

    ],
    show: true

  }
}

}

</script>

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
          <div v-if="show">
            <h1 class="text-info"> Yogic Lifestyle</h1>
          </div>
          <p class="bg-warning ml-2 mt-0 p-2" v-else>To know more about meditation see the videos!!</p>
          <button @click="show = !show" class="button btn-info p-2 m-2">Meditation</button>



          <h2 class="ml-0  pl-0 pt-2">Pranayama: The Yogic Breathing</h2>
          <p>If you’re feeling tired, heavy, dull, or emotionally off-balance, a few minutes of yogic breathing can energize, renew, and sustain you through your day or a challenging yoga class. There are a number of different breathing techniques in yoga that can influence and affect your experience in asana, relaxation, and meditation. Having a stronger connection and control of your breath will give you a deeper attunement of your physical, mental, and emotional bodies and help anchor your awareness in the present moment. Yogis believe that if you can master your breath through pranayama practices you can master your mind!</p>







<div class="row">
    <picture-detail
    v-for="picture in pictures"
    v-bind:picture="picture"
    v-bind:key="picture.img"
    >

  </picture-detail>

</div>








      </div>
    </main>
  </div>

  <div class="footer">
    <p class="footer-text">© Copyright 2020 Swati. All rights reserved.</p>
  </div>

</div>
</template>
