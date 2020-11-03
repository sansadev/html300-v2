<template>
<div>

<div class="grid-container">
<div class="header">
     <header>
          <div class="logo">
           <img src="image/yoga-chakra.jpg" id ="yoga-chakra" alt="man sitting in a yogic posture"/>

          </div>
         <h1>Yoga</h1>
       </header>
     </div>
     <!--navbar-->
     <div class="nav-bar navbar-expand">
       <nav>
         <ul class="nav-links">
           <li v-for="item in items" v-bind:key="item"><a href="#">{{item}}</a></li>
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
       <main class="main">
            <div class="card-container">
              <div class="city">
                <a href="#">
                  <div class="city-image">
                    <img src="image/yoga.jpg" alt="yoga"/>
                  </div>
                  <div class="description">
                    <h2>Karma Yoga</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, ipsam deleniti excepturi asperiores sit libero natus, porro, unde voluptates similique vel odio! Cum voluptatum optio dolore nobis dicta sapiente, inventore?</p>
                  </div>
                </a>
              </div>
              <div class="city">
                <a href="#">
                  <div class="city-image">
                    <img src="image/yoga.jpg" alt="yoga"/>
                  </div>
                  <div class="description">
                    <h2>Jnana Yoga</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum cumque facere eius rem? Voluptas dolorum voluptate, a ipsam fugiat beatae. Doloremque earum, commodi, accusamus assumenda culpa quam? Cumque, eaque.
                    </p>
                  </div>
                </a>
              </div>
              <div class="city">
                <a href="#">
                  <div class="city-image">
                    <img src="image/yoga.jpg" alt="yoga"/>
                  </div>
                  <div class="description">
                    <h2>Hatha Yoga</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quae praesentium facere ea minus id debitis veritatis aliquid ipsum aut, in iusto hic modi, saepe. Optio asperiores saepe sit natus.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </main>
    </div>
    <div class="footer">
        <p class="footer-text">© Copyright 2020 Swati. All rights reserved.</p>

      </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
  return {
  items: ["Home", "About", "Yoga", "Pranayama"]

  }
  }

  }
</script>
<style>


</style>
