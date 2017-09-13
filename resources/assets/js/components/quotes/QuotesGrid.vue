<template>
    <div class="row">
        <quote v-for="quote in quotes" :key="quote">{{ quote }}</quote>
    </div>
</template>
<script>
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        components: {
            Quote
        }
    }
</script>
<style>

</style>
