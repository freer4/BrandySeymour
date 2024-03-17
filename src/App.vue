<template>
  <header class="site-header">
      <div class="logo">
        Brandy Seymour <span>for</span> Ohio
      </div>
      <a class="mobile-toggle" :class="{'active': mobileToggle}" @click.prevent="mobileToggle = !mobileToggle"><span></span><span></span><span></span></a>
      <nav class="main-nav" :class="{'open': mobileToggle}" @click="mobileToggle = false">
        <RouterLink :to="{name: 'District9'}">Home</RouterLink>
        <RouterLink :to="{name: 'About'}">About</RouterLink>
        <RouterLink :to="{name: 'Blog'}">Blog</RouterLink>
        <a class="button">Sign Up</a>
      </nav>
  </header>
  <div class="content">
    <RouterView />
  </div>
  <footer class="site-footer">
    <div>
      <nav>
        <RouterLink :to="{name: 'District9'}">Home</RouterLink>
        <RouterLink :to="{name: 'About'}">About</RouterLink>
        <RouterLink :to="{name: 'Blog'}">Blog</RouterLink>
        <RouterLink :to="{name: 'About'}">Press</RouterLink>
        <div class="socials">
          <a><i class="fa-solid fa-envelope"></i></a>
          <a><i class="fa-brands fa-square-facebook"></i></a>
          <a><i class="fa-brands fa-youtube"></i></a>
          <a><i class="fa-brands fa-instagram"></i></a>
          <a><i class="fa-brands fa-square-twitter"></i></a>
        </div>
      </nav>
    </div>
    <div>
      Probably some sort of disclaimer text that has to go here for candidates. 
    </div>
    <div>
      <img src="/images/district-9-map.jpg" alt="district 9 map, Williams, Defiance, Fulton, Lucal, Ottawa, Sandusky, Wood, and Erie counties" />
      <p>Image thanks to Ohio Secretary of State</p> 
    </div>
  </footer>

</template>

<script setup>
import "@/assets/scss/global.scss";
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'

const mobileToggle = ref(false);
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

@media (min-width: 1024px) {
}
</style>
