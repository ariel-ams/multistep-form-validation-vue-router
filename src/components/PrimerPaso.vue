<template>
  <div>
      <div>
          <select v-model="currentValue" @change="updatePrimerDato">
              <option :value="null">Seleccionar dato 1</option>
              <option :value="item" v-for="item in getPrimeraLista" 
               :key="item.ID">{{ item.LocalizedName }}</option>
          </select>
      </div>

      <div>
          <button @click="irAlSiguientePaso">Avanzar</button>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

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
        ...mapMutations([
            'setPrimerDato'
        ]),
        updatePrimerDato(){
            this.setPrimerDato(this.currentValue);
        },
        irAlSiguientePaso(){
            this.$router.push('/paso-2');
        }
    }
}
</script>

<style>

</style>