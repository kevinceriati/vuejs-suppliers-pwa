<template>
    <div class="container">
        <h1>Liste Des Fournisseurs</h1>
        <button type="button" v-on:click="stockAll">Stock All</button>
        <button type="button" v-on:click="stockOk">Stock Ok</button>
        <button type="button" v-on:click="stockKo">Stock Ko</button>
        <div class="card" v-for="supplier in filterDatas" :key="supplier.id">
            <supplier v-bind:checkedAt="supplier.checkedAt" v-bind:name="supplier.name"
                      v-bind:status="supplier.status"></supplier>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex'
    import Supplier from "./Supplier";
    import {mapGetters} from 'vuex'

    export default {
        name: "SuppliersList",
        data: function () {
            return {
                filter: 'all'
            }
        },
        components: {
            Supplier
        },
        computed: {
            ...mapState([
                'suppliers',
            ]),

            ...mapGetters([
                'filteredByStateKo',
                'filteredByStateOk'
            ]),

            filterDatas: function() {
                if (this.filter === 'all') {
                    return this.suppliers
                }

                if (this.filter === 'ok') {
                    return this.filteredByStateKo
                }

                if (this.filter === 'ko') {
                    return this.filteredByStateOk
                }
                return this.suppliers
            }
        },
        mounted: function () {
            this.$store.dispatch('LOAD_SUPPLIERS_LIST')
        },

        methods: {
            stockAll: function () {
                this.filter = 'all'
            },

            stockOk: function () {
                this.filter = 'ok'
            },
            stockKo: function () {
                this.filter = 'ko'
            }
        }
    }

</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .card {
        width: 600px;
        border: 3px solid black;
        margin-top: 20px;
    }
</style>