import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const apikey = '1lLuOYBKhEeupF2Bjck0gYrrguMfCZi3';

axios.interceptors.request.use(config => {
    store.commit('startFetching')
    return config
})
  
axios.interceptors.response.use(response => {
    store.commit('stopFetching')
    return response
})

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        fetchingData: false,
        primerDato: null,
        segundoDato: null,
        primeraLista: [],
        segundaLista: [],
    },
    getters: {
        getFetchingData(state){
            return state.fetchingData;
        },
        getPrimerDato(state){
            return state.primerDato;
        },
        getPrimeraLista(state){
            return state.primeraLista;
        },
        getSegundoDato(state){
            return state.segundoDato;
        },
        getSegundaLista(state){
            return state.segundaLista;
        },
    },
    mutations: {
        reiniciar(state){
            state.primerDato = null;
            state.segundoDato = null;
        },
        startFetching(state){
            state.fetchingData = true;
        },
        stopFetching(state){
            state.fetchingData = false;
        },
        callApiPrimeraLista(state){
            //state.fetchingData = true;
            axios.get(
                'http://dataservice.accuweather.com/locations/v1/' +
                'regions?apikey=' + apikey + '&language=es-ar')
                .then(response => {
                    //state.fetchingData = false;
                    state.primeraLista = response.data.map(region => {
                        return region;
                    })
                })
                .catch(error =>{
                    console.log(error);
                    state.fetchingData = false;
                })
        },
        callApiSegundaLista(state){
            axios.get(
                'http://dataservice.accuweather.com/locations/v1/countries/' + state.primerDato.ID +
                '?apikey=' + apikey + '&language=es-ar')
                            .then(response => {
                                state.segundaLista = response.data.map(country => {
                                    return country;
                                })
                            })
                            .catch(error =>{
                                console.log(error);
                            })
        },
        setPrimerDato(state, value){
            state.primerDato = value;
        },
        setSegundoDato(state, value){
            state.segundoDato = value;
        },
    },
    actions: {
        fetchPrimeraLista(context){
            context.commit('callApiPrimeraLista');
        },
        fetchSegundaLista(context){
            context.commit('callApiSegundaLista');
        },
    }
});

export default store;