import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        primerDato: null,
        primeraLista: []
    },
    getters: {
        getPrimerDato(state){
            return state.primerDato;
        },
        getPrimeraLista(state){
            return state.primeraLista;
        }
    },
    mutations: {
        callApiPrimeraLista(state){
            state.primeraLista = [
                'Pais 1',
                'Pais 2',
                'Pais 3',
                'Pais 4',
            ];
        }
    },
    actions: {
        fetchPrimeraLista(context){
            context.commit('callApiPrimeraLista');
        }
    }
});

export default store;