<template>
    <div class="donation-view">
        <form @submit.prevent="submit">
            <h1>Contribute to the Campaign for Brandy Seymour</h1>
            <p>By law, we need to collect some basic donor information. Please fill out 
                this form then click the button to be taken to our PayPal donation page. 
                We will never sell your personal information.</p>
            <label>
                Full Name
                <input type="text" v-model="name" />
            </label>
            <button type="submit">To PayPal Donations</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue"


const name = ref('');
const submit = () => {
    
}

</script>



<style lang="scss">
@import "@/assets/scss/variables.scss";
.donation-view{
    padding: $space-wide;

    label{
        display: block;
        width: 300px;
        max-width: 100%;
    }

    button{
        margin: $space-wide 0 0;
        font-size: 18px;
        padding: 0 $space-wide !important;
    }
}
</style>