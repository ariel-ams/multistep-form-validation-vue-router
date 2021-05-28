import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const apikey = '1lLuOYBKhEeupF2Bjck0gYrrguMfCZi3';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        primerDato: null,
        segundoDato: null,
        primeraLista: [],
        segundaLista: [],
    },
    getters: {
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
        callApiPrimeraLista(state){

            axios.get(
    'http://dataservice.accuweather.com/locations/v1/' +
    'regions?apikey=' + apikey + '&language=es-ar')
                .then(response => {
                    state.primeraLista = response.data.map(region => {
                        return region;
                    })
                })
                .catch(error =>{
                    console.log(error);
                })
        },
        callApiSegundaLista(state){
            axios.get(
                'http://dataservice.accuweather.com/locations/v1/countries/' + state.primerDato+
                '?apikey=' + apikey + '&language=es-ar')
                            .then(response => {
                                state.primeraLista = response.data.map(region => {
                                    return region;
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