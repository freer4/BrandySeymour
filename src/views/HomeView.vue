<template>
  <main>
    <div class="home-display">
      <div class="home-image">
        <img src="/images/BrandySeymourOhio.jpg">
      </div>
      <div class="home-info">
        <h1>Ohio 9th District</h1>
        <h2>Brandy Seymour</h2>
        <p class="slogan">
          <span>Rebuilding</span>
          a strong community
          <span>together</span>
        </p>
        <nav>
          <RouterLink :to="{name: 'About'}">Learn more about me &rsaquo;</RouterLink>
          <RouterLink :to="{name: 'Blog'}">Read up on my mission &rsaquo;</RouterLink>
          <div class="socials">
          <h4>Stay connected</h4>
            <a><i class="fa-solid fa-envelope"></i></a>
            <a><i class="fa-brands fa-square-facebook"></i></a>
            <a><i class="fa-brands fa-youtube"></i></a>
            <a><i class="fa-brands fa-instagram"></i></a>
            <a><i class="fa-brands fa-square-twitter"></i></a>
          </div>
        </nav>
      </div>
    </div>
    <div class="blog-spread">
      <RouterLink :to="{name: 'Article', params: {id: 1}}">
        <img src="https://cataas.com/cat" />
        <span>Title of Last Blog Post</span>
      </RouterLink>
      <RouterLink :to="{name: 'Article', params: {id: 1}}">
        <img src="https://cataas.com/cat" />
        <span>Title of Another Blog Post</span>
      </RouterLink>
      <RouterLink :to="{name: 'Article', params: {id: 1}}">
        <img src="https://cataas.com/cat" />
        <span>Title of First Blog Post</span>
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
</script>


<style lang="scss">
@import "@/assets/scss/variables.scss";

@media (min-width: 1024px) {
  .home-display{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .home-image{
      flex: 1 1 auto;
      width: 60%;
      align-self: auto;
      height: calc(100vh - 100px);
      overflow: hidden;
    }

    img{
      display: block;
      width: 100%;
    }

    .home-info{
      flex: 1 1 auto;
      width: 40%;
      text-align: center;
      min-width: 320px;
      padding: 0 $space-standard;

      h1{
        display: inline-block;
        border-bottom: 4px solid nth($yellows, 5);
      }
      h2{
        margin-top: $space-wide;
      }

      nav{
        text-align: left;
        font-size: 22px;
        line-height: 40px;
        padding: $space-wide $space-wide * 4;

        > a{
          display: block;
          text-decoration: none;
          color: nth($purples, 2);
        }

        .socials{
          margin-top: $space-wide;
        }
      }
    }

    .slogan{
      font-size: 45px;
      line-height: 85px;
      font-weight: 800;
      padding: $space-wide * 4 0;

      span{
        display: block;
      }
    }
  }
}
</style>

