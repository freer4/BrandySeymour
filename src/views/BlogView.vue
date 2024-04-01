<template>
    <div class="blog-view">
        <h1>Our Journey</h1>
        <blog-preview></blog-preview>
    </div>
</template>

<script setup>
import BlogPreview from "../components/BlogPreview.vue";
</script>


<style lang="scss">
@import "@/assets/scss/variables.scss";
.blog-view{
    padding: $space-wide;
}
</style>