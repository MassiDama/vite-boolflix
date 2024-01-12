<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    },
    computed: {
        rankingVote() {
            return Math.ceil(this.info.vote_average/2);
        }
    }
}

</script>

<template>
<div class="flip-container">
    <div class="flipper">
        <!-- parte poster del film || serie tv (front)  -->
        <div class="poster">
            <img :src=" `https://image.tmdb.org/t/p/w342/${info.poster_path}` " alt="">
        </div>
        <!--  parte descrizione del film || serie tv (back) -->
        <div class="info">
            <div> Titolo: <span> {{ info.title || info.name }}</span> </div>
            <div> Titolo originale: <span> {{ info.original_title || original_name }}</span> </div>
            <div class="lenguage"> </div>
            <!-- ciclo di 5 stelle + aggiunta di classe a seconda del rankingVote -->
            <div class="vote"> Voto:
                 <span v-for="i in 5" > 
                    <i :class=" i <= rankingVote ? 'fa-solid fa-star' : 'fa-regular fa-star' " ></i>
                </span> 
            </div>
            <div> Overview: <span> {{ info.overview }}</span></div>
            
        </div>
        
</div>
</div>
</template>

<style lang="scss" scoped>

.flip-container{
    width: 100%;
    height: 100%;
    // effetto rotazione
    perspective : 1000px;
    
}
.flipper{
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
    // effetto rotazione
    position : relative;
    transform-style: preserve-3d;
}

.poster{
    height : 100%;
    width : 100%;
    // effetto rotazione
    transition : 2s transform;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}

.info{
    background-color: #000;
    color: white;
    height: 100%;
    width : 100%;
    padding: 20px;
    // effetto rotazione
    position : absolute;
    top : 0;
    left : 0;
    z-index : 1;
    transform : rotateY(-180deg);
    transition : 2s transform;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    div {
        padding-bottom: 5px;

        span {
            font-size: small;
            color: rgba(255, 255, 255, 0.77);
        }
    }
}
.flip-container:hover .poster{
    transform : rotateY(180deg);
}
.flip-container:hover .info{
    transform : rotateY(0deg);
}

</style>