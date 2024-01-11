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
      let myUrl = store.movieUrl;

      if (store.searchText !== "") {
        myUrl += `&query=${store.searchText}`;
      }

      // chiamata movie 
      axios
      .get(myUrl)
        .then((res => {
          store.movieList = res.data.results;
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
</template>

<style lang="scss">
@use './styles/general.scss' as * ;
@use './styles/partials/mixins' as * ;
@use './styles/partials/variables'



</style>
