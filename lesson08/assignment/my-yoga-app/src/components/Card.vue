<script>
export default {
  name: 'card',
  props: ['card'],

}
</script>

<template>


  <div class="city">
    <a href="#">
      <div class="city-image">
        <img v-bind:src="card.img" />
      </div>
      <div class="description">
        <h2>{{card.title}}</h2>
        <p>{{card.desc}}</p>
      </div>
    </a>

  </div>

</template>
