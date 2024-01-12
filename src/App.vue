<script>
// importazione axios
import axios from 'axios';

// importazione store
import { store } from './store';

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovie() {
      let mUrl = store.movieUrl;
      let sUrl = store.serieUrl;

      // chiamata movie 
      if (store.searchText !== "") {
        console.log("ho clicckato");
        mUrl += `&query=${store.searchText}`;
      }

      axios
      .get(mUrl)
        .then((res => {
          store.movieList = res.data.results;
        }))
        .catch((err) => {
          console.log("error", err);
        })

        // chiamata serie tv
        if (store.searchText !== "") {
          sUrl += `&query=${store.searchText}`;
        }

        axios
        .get(sUrl)
          .then((res => {
            store.serieList = res.data.results;
          }))
          .catch((err) => {
            console.log("error", err);
          })
        

    }
  }, 
  created() {
    this.getMovie();
  }
}

</script>

<template>
  <AppHeader @search="getMovie" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as * ;
@use './styles/partials/mixins' as * ;
@use './styles/partials/variables' as *;



</style>
