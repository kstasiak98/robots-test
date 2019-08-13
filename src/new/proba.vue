<template>
  <div>
    <h1>{{selectedPart.title}}</h1>
    <div>
      {{selectedPart.description}}
    </div>
  </div>
</template>

<script>

  import RobotAPI from "@/services/RobotAPI";

  export default {
    name: "proba",
    props: {
      partType: {
        type: String,
      },
      partId:{
        type: Number,String,
      }
    },
    data() {
      return {
      selectedPartIndex: 0,
      parts: 'heads',
    }

  },
    computed: {
      selectedPart() {
        const name = this.partType;
        // const ip = this.partId;
        return RobotAPI.getPartByKey(name, 0);
      },
          },

  }
</script>

<style scoped>

</style>
