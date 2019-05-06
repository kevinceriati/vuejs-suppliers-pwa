import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from "./components/SuppliersMap.vue"
import Supplier from "./components/Supplier.vue"
import * as VueGoogleMaps from 'vue2-google-maps'
import { store } from './store'
import './registerServiceWorker'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB_rUFcZii_mHfRgddtI0e_lgK6cQj7fG4',
        libraries: 'places',
    },
});

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/suppliers',
        component: SuppliersList
    }, {
        path: '/map',
        component: SuppliersMap
    }, {
        path: '/supplier',
        component: Supplier
    }]
})


Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

