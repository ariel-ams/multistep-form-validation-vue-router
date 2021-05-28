<template>
  <div>
      <div>
          <select v-model="currentValue" @change="updateSegundoDato">
              <option :value="null">Seleccionar dato 2</option>
              <option :value="item" v-for="(item, i) in getSegundaLista" :key="i">{{ item }}</option>
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
        this.fetchSegundaLista();
    },
    computed:{
        ...mapGetters([
            'getSegundaLista'
        ])
    },
    methods:{
        ...mapActions([
            'fetchSegundaLista'
        ]),
        ...mapMutations([
            'setSegundoDato'
        ]),
        updateSegundoDato(){
            this.setSegundoDato(this.currentValue);
        },
        irAlSiguientePaso(){
            this.$router.push('/resultado');
        }
    }
}
</script>

<style>

</style>