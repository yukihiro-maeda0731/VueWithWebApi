<template>
  <img :src="cat">
</template>

<script>

export default {
  name: 'RandomCat',
  data () {
    return {
      cat: null
    }
  },
  mounted () {
    this.$axios
      .get('https://aws.random.cat/meow')
      .then(response => (this.cat = response.data.file))
      .catch(error => (console.log(error)))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
