<template>
    <div class="container">
        <quotes-form @quoteAdded="newQuote"></quotes-form>
        <quotes-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quotes-grid>
        <div class="col-sm-12 text-center">
            <div class="alert alert-info"> Info: Click on Quote to delete it!</div>
        </div>
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
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
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
