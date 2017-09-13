<template>
    <div class="container">
        <quotes-form @quoteAdded="newQuote"></quotes-form>
        <quotes-grid :quotes="quotes"></quotes-grid>
    </div>
</template>
<script>
    import QuotesGrid from './QuotesGrid.vue';
    import QuotesForm from './Form.vue';

    export default {
        data: () => ({
            quotes: [
                'Just an example'
            ],
            maxQuotes: 10
        }),
        methods: {
            newQuote(quote) {
                this.quotes.push(quote);
            }
        },
        components: {
            QuotesGrid,
            QuotesForm
        }
    }
</script>
<style>

</style>
