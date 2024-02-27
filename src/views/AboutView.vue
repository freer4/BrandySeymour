<template>
  <div class="about">
    <div class="image-treat">
      <img src="https://cataas.com/cat?height=1200&width=600" />
      <figure>Different Photo here, one of you outside in the community, somewhere iconic</figure>
    </div>
    <div>
      <h1>About Brandy Seymour</h1>

      <p>I was born in Columbus, OH and am a native here. My early life was spent growing up in the rural
      suburban farming community in Pataskala, OH. Having this fortunate experience built the person I am
      and the values that I hold dear. The great thing about Pataskala is that the community members always
      stood together and helped each other when the need arose. Neighbors and community members
      supported one another which led to a strong independent community. That is what I would like to see
      happen in Ohio District 9.</p>

      <p>Even though I grew up in that rural suburban farming community my parents were divorced when I
      was very young. My dad lived right here in District 9 and I would visit him on the weekends here. I
      know the history of what District 9 was then. It was a safe, bustling and successful community built by
      the WWII generation. Currently, I have lived in the district for the past 20 years. I have sadly been a
      witness to the decline into what the community has become in the present. It needs to be spruced up
      and that can only happen when we as a community come together. There is no place for division in a
      space where residents and businesses help one another and rebuild side-by-side.</p>

      <p>My career background is not a typical politician. I have spent most of my working career in a
      service-related capacity. My first job was at the famous Dairy Hut in Pataskala serving ice cream. I later
      moved onto working at United Dairy Farmer's in high school. After that I worked for Bally's Fitness Club
      as a receptionist and operations manager while going to Ohio University Lancaster full-time. Saving up
      from working, and money I received at birthdays, graduation, family, and friends were the funds I used
      to pay for my college education. I didn't finish my college education because it was too expensive and I
      didn't want to take out a loan to “get ahead” in life. Going into debt to get a “fair” education didn't
      seem like a smart move. I'm sure the young people of today can understand what I mean.</p>

      <p>From there I worked as an administrative assistant and in human resources for a company called
      Anton Airfood which was building out new restaurants inside of the Columbus airport. Although my
      true passions were in the arts. After that I mostly worked in food service hosting, waiting tables, and bar
      tending for many years. Those were my day jobs and my spare time was spent being a part of the Ohio
      Independent Film Community. I was happy pursuing artistic endeavors until Covid 19 hit. That took the
      joy out of filmmaking for me.</p>

      <p>Despite being an average resident I have always had an eye and an ear following political issues
      whether they be national, international, or economic. Just because I didn't finish college doesn't mean I
      stopped educating myself. In the past few days I have been petitioning to get onto the ballot as an
      independent. Currently, in our district for now the second election cycle there is no challenger to the
      current incumbent. This is what motivated me to take a leap of faith and throw my hat into the ring. A
      true Constitutional Republic only functions of we the citizens choose to get involved.</p>

      <p>I have talked with some amazing members within the community. From the Somali immigrant
      mothers who legally became Ohio citizens to the single American mothers who were born here and are
      struggling. We have such a patchwork of citizens here in Ohio district 9. There are still many struggling
      elderly, and passionate patriots who all really want the same thing. They have provided their concerns
      and some excellent feedback for me to take with me to the Ohio State House. Rebuilding a strong
      community together. That is what I am about.</p>

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
</template>

<script setup>
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@media (min-width: 1024px) {
  .about {
    display: flex;
    padding: 0 $space-wide;


    > div{
      width: 70%;
        &:first-child{
        width: 30%;
        flex: 1 auto;
      }
      +div{
        margin-left: $space-wide * 2;
      }
    }
  }
}
</style>
