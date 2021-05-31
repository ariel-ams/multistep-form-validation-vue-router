import store from './store';
import PrimerPaso from './components/PrimerPaso';
import SegundoPaso from './components/SegundoPaso';
import Resultado from './components/Resultado';

export const routes = [
    {path: '/', component: PrimerPaso, beforeEnter: reiniciarValores},
    {path: '/paso-2', component: SegundoPaso, beforeEnter: validarPaso1},
    {path: '/resultado', component: Resultado, beforeEnter: validarPaso2},
];

function reiniciarValores(to, from, next) {
    store.commit('reiniciar');
    next();
}

function validarPaso1(to, from, next) {
    if(store.getters.getPrimerDato){
        next();
    }
}

function validarPaso2(to, from, next) {
    if(store.getters.getSegundoDato){
        next();
    }
}