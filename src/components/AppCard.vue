<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    },
}

</script>

<template>
<div class="poster">
    <img :src=" `https://image.tmdb.org/t/p/w342/${info.poster_path}` " alt="">
</div>

</template>

<style lang="scss" scoped>

</style>