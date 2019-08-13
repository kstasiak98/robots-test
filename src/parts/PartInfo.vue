<template>
<div>
  <h1>{{czesc.tytul}}</h1>
  <div>
    {{czesc.opis}}
  </div>
</div>
</template>

<script>
  export default {
    name: "PartInfo",
    data() {
      return {
        czesc: {
          tytul: 'Part Title',
          opis: 'Part Description',
        },
      }
    },
  }
</script>

<style scoped>

</style>
