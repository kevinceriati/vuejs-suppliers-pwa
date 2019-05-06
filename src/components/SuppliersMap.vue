<template>
    <div>
        <h1>Carte des Fournisseurs</h1>
        <div class="geolocation" v-on:click="geolocation()"></div>
<!--        <div v-if="loading"> chargement en cour</div>-->
<!--        <div class="test" v-else-if="error">erreur imposible de charger les donnée</div>-->
        <div class="container">
            <GmapMap
                    :center="{lat:currentPosition.lat, lng:currentPosition.lng}"
                    :zoom="17"
                    map-type-id="terrain"
                    style="width: 500px; height: 300px"
            >
                <GmapMarker
                        :key="index"
                        v-for="(m, index) in suppliers"
                        :position="{lat:parseFloat(m.latitude),
                                    lng:parseFloat(m.longitude)}"
                        :clickable="true"
                        :draggable="true"
                        @click="center=m.position"
                />
            </GmapMap>
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        name: "SuppliersMap",
        computed: mapState([
        'suppliers'
    ]),
    mounted: function () {
        this.$store.dispatch('LOAD_SUPPLIERS_LIST')
        this.geolocation()
    },

    data : function () {
            return {
            currentPosition : {lat: 0, lng: 0}
            }

    },
        methods: {
            geolocation : function() {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.currentPosition = {
                        lat:position.coords.latitude,
                        lng:position.coords.longitude
                    };
                });
            }
        }
    }


</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
    }
    /*.test {*/
    /*    color : red;*/
    /*}*/

</style>