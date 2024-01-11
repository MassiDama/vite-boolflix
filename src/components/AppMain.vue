<script>
import { store } from '../store';
import AppCard from './AppCard.vue'

export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
<div class="container">
    <h1> Movies </h1>
    <div class="movies">
        <div class="movie-item" v-for="movie in store.movieList" :key="movie.id"> 
            <AppCard :info="movie" />
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 80%;
    margin: 0 auto;

    h1 {
        font-size: 35px;
        padding-top: 20px;
    }
}

</style>