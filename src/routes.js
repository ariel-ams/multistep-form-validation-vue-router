import store from './store';
import PrimerPaso from "./components/PrimerPaso";
import SegundoPaso from './components/SegundoPaso';

export const routes = [
    {path: '/', component: PrimerPaso},
    {path: '/paso-2', component: SegundoPaso, beforeEnter: validarPaso2},
];

function validarPaso2(to, from, next) {
    if(store.getters.getPrimerDato){
        next();
    }else{
       // next('/');
    }
}