<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <button>
                <router-link to="/suppliers">Full liste</router-link>
            </button>
            <button>
                <router-link to="/map">Carte</router-link>
            </button>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
