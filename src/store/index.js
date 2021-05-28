import Vue from 'vue';
import Vuex from 'vuex';

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
            state.primeraLista = [
                'Pais 1',
                'Pais 2',
                'Pais 3',
                'Pais 4',
            ];
        },
        callApiSegundaLista(state){
            state.segundaLista = [
                'Provincia 1',
                'Provincia 2',
                'Provincia 3',
                'Provincia 4',
            ];
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