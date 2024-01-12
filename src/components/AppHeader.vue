<script>
import { store } from '../store';


export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <header>
        <div class="logo">
            BOOLFIX
        </div>
        <div class="search-bar">
            <input type="text" placeholder=" Inserisci un film " v-model="store.searchText" @keyup.enter="$emit('search')">
            <button type="submit" @click="$emit('search')">Search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header{
    width: 100%;
    height: 70px;
    background-color: black;
    color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
}
</style>
