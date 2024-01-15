<script>

export default {
    name: 'AppCard',
    props: {
        info: Object
    },
    data() {
        return {
            flags: {
                it: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_the_Repubblica_Cisalpina.svg/220px-Flag_of_the_Repubblica_Cisalpina.svg.png",
                en: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
                ja: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/280px-Flag_of_Japan.svg.png",
                de: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2000px-Flag_of_Germany.svg.png",
                es: "https://italflag.it/wp-content/uploads/2021/11/Bandiera-Spagna.jpg"

            },

            flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/280px-Flag_of_Albania.svg.png',
        } 
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
            <!-- condizione bandiera lingue -->
            <div class="lenguage" v-if="flags[info.original_language]"> 
                <img :src=" flags[info.original_language] "  alt="">
            </div>
            <div class="lenguage" v-else> 
                <img :src="flag"  alt="">
            </div>

            <!-- ciclo di 5 stelle + aggiunta di classe a seconda del rankingVote -->
            <div class="vote"> Voto:
                 <span v-for="i in 5" > 
                    <i :class=" i <= rankingVote ? 'fa-solid fa-star' : 'fa-regular fa-star' " ></i>
                </span> 
            </div>
            <div> Overview: <span> {{ info.overview }} </span> </div>
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

    .lenguage {
        width: 150px;

        img {
            width: 100%;
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