<template>
  <div>
      <div>
          primer dato: <strong>{{ getPrimerDato.LocalizedName }}</strong>
      </div>
      <div>
          segundo dato: <strong>{{ getSegundoDato.LocalizedName }}</strong>
      </div>
      <div>
          <button @click="reiniciar">Reiniciar</button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    methods:{
        reiniciar(){
            this.$router.push('/');
        }
    },
    computed:{
        ...mapGetters([
            'getPrimerDato',
            'getSegundoDato'
        ])
    }
}
</script>

<style>

</style>