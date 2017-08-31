<template>
    <div class="container">
        <div class="jumbotron">
            <h1 v-once>{{siteName}}</h1>
            <p>Starter Boilerplate SPA made with Laravel 5.4, JWT Auth, Vue 2, Vue-router 2, Vuex 2, Axios and love</p>
            <button @click="increase">Click me!</button>
            <p>{{ counterComputed }}</p>
            <div class="demo"
                @click="attachedRed = !attachedRed"
                :class="{red: attachedRed}"
            >

            </div>
        </div>
    </div>
</template>
<style>
    .demo {
        width: 50px;
        height: 50px;
        background-color: white;
    }
    .red {
        background-color: red;
    }
</style>
<script>
    import {siteName} from './../../config';

    export default {
        name: 'home',
        data: () => ({
            counter: 0,
            siteName: siteName,
            attachedRed: false
        }),
        watch: {
            counter() {
                let vm = this;
                return setTimeout(() => {
                    vm.counter = 0;
                }, 2000)
            }
        },
        computed: {
          counterComputed() {
            console.log('computed');
            return this.counter;
          }
        },
        methods: {
          increase(event) {
              this.counter++;
              console.log('increase');
          }
        },
        components: {}
    }
</script>