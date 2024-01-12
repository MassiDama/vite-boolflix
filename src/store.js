import { reactive } from "vue";

export const store = reactive({
    // movie
    movieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=9719419b862d653e2df13bffde5061fc',
    movieList: [],
    
    searchText: "",

    // serie tv
    serieUrl: 'https://api.themoviedb.org/3/search/tv?api_key=9719419b862d653e2df13bffde5061fc',
    serieList: [],
})