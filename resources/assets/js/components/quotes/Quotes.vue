<template>
    <div class="container">
        <quotes-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></quotes-header>
        <quotes-form @quoteAdded="newQuote"></quotes-form>
        <quotes-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quotes-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info"> Info: Click on Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>
<script>
    import QuotesGrid from './QuotesGrid.vue';
    import QuotesForm from './Form.vue';
    import QuotesHeader from './QuoteHeader.vue';

    export default {
        data: () => ({
            quotes: [
                'Just an example'
            ],
            maxQuotes: 10
        }),
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert("You have to delete one item to add more");
                }
                this.quotes.push(quote);
            },
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            QuotesGrid,
            QuotesForm,
            QuotesHeader
        }
    }
</script>
<style>

</style>
