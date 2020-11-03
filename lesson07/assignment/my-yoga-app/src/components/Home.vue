<template>
<div>

<div class="grid-container">
<div class="header">
     <header>
          <div class="logo">
           <img src="/image/yoga-chakra.jpg" id ="yoga-chakra" alt="man sitting in a yogic posture"/>

          </div>
         <h1>Yoga</h1>
       </header>
     </div>
     <!--navbar-->
     <div class="nav-bar navbar-expand">
       <nav>
         <ul class="nav-links">
           <li v-for="item in items"><a href="#">{{item}}</a></li>
        </ul>
       </nav>
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
html {
  box-sizing: border-box;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr;

}
.header {
  background-color: rgb(183, 110, 121);
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  #yoga-chakra {
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
 }

  h1 {

    display: flex;
    justify-content: center;
    color: white;
  }
  .nav-bar {
    background-color: rgb(31, 73, 227);
  }
  nav {

  height: 10vh;
  background: rgb(179, 83, 137);
  }
  .nav-links {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    margin-left: auto;

  }
  li a {
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    display: flex;
  }
  li a:hover {
   text-decoration: none;
   border-top: 4px solid white;
   border-bottom: 4px solid white;
   padding: 6px 0;
   color:$sidebar-heading;
 }

</style>
