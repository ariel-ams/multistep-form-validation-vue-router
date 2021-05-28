<template>
  <div>
      <div>
          primer dato: <strong>{{ primerDato }}</strong>
      </div>
      <div>
          segundo dato: <strong>{{ segundoDato }}</strong>
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
            this.$route.push('/');
        }
    },
    computed:{
        ...mapGetters([
            'primerDato',
            'segundoDato'
        ])
    }
}
</script>

<style>

</style>