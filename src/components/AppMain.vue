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

<div v-if=" store.searchText !== '' " class="container">
    <h1> Movies </h1>
    <div class="movies">
        <div class="movie-item" v-for="movie in store.movieList" :key="movie.id"> 
            <AppCard :info="movie" />
        </div>
    </div>

    <h1> TV Series</h1>
    <div class="movies">
        <div class="movie-item" v-for="serie in store.serieList" :key="serie.id"> 
            <AppCard :info="serie" />
        </div>
    </div>
</div>

<div class="empty-content" v-else>
    Fai la tua ricerca..
</div>
</template>

<style lang="scss" scoped>
.container {
    width: 90%;
    margin: 0 auto;

    h1 {
        font-size: 35px;
        padding-top: 20px;
    }

    .movies {
        display: flex;
        flex-wrap: wrap;

        .movie-item {
            width: calc(100% / 4);
            height: 100%;
        }
    }
}

.empty-content {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    padding-top: 100px;
    font-size: 50px;
}

</style>