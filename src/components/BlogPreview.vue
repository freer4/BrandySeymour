<template>
    <div class="blog-spread">
        <RouterLink :to="{name: 'JourneyStatehouse'}">
            <img src="/images/ohioflags.jpg" />
            <span>Journey to the Statehouse Pt. 1</span>
        </RouterLink>
        <RouterLink :to="{name: 'JourneyStatehouse2'}">
            <img src="/images/ohioflags.jpg" />
            <span>Journey to the Statehouse Pt. 2</span>
        </RouterLink>
        <RouterLink :to="{name: 'JourneyStatehouse3'}">
            <img src="/images/ohioflags.jpg" />
            <span>Journey to the Statehouse Pt. 3</span>
        </RouterLink>
    </div>
</template>
