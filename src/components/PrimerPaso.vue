<template>
  <div>
      <div>
          <select v-model="currentValue" @change="updatePrimerDato">
              <option :value="null">Seleccionar dato 1</option>
              <option :value="item" v-for="(item, i) in getPrimeraLista" :key="i">{{ item }}</option>
          </select>
      </div>

      <div>
          <button>Avanzar</button>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data(){
        return {
            currentValue: null
        }
    },
    created(){
        this.fetchPrimeraLista();
    },
    computed:{
        ...mapGetters([
            'getPrimeraLista'
        ])
    },
    methods:{
        ...mapActions([
            'fetchPrimeraLista'
        ]),
        updatePrimerDato(e){
            console.log(e.target.data);
        }
    }
}
</script>

<style>

</style>