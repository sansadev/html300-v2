<script>
export default {
  name: 'picture',
  props: ['picture'],


}
</script>

<template>

<div class="col-md-4">


 <div class="thumbnail">
      <img class="w-100 p-2" v-bind:src="picture.img" />
<div class="caption p-2">
 <p>{{ picture.contents}}</p>
</div>

</div>
</div>

</template>
