<template>
  <div class="part" :class="position">
    {{position}}
    <img @click="showPartInfo()" :src="selectedPart.src" title="arm"/>
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
  import RobotAPI from "@/services/RobotAPI";
  import PartIndexManager from "@/services/PartIndexManager";


  export default {
    props: {
      parts: {
        type: String,
        required: true,
      },
      position: {
        type:String,
        required: true,
      },
    },
    data() {
      return {
        selectedPartIndexArray: {headIndex: 0, torsoIndex: 0, armleftIndex: 0, armrightIndex: 0, basesIndex: 0},
        selectedPartIndex: 0,
      };
    },
    computed: {
      selectedPart() {
        return RobotAPI.getPartByKey(this.parts, this.selectedPartIndex);
      },
      witchPartIndex() {
        if(this.position == 'top') return 'headIndex';
        if(this.position == 'center') return 'torsoIndex';
        if(this.position == 'right') return 'armrightIndex';
        if(this.position == 'left') return 'armleftIndex';
        if(this.position == 'bottom') return 'basesIndex';
      },
    },
    created() {
      this.emitSelectedPart();
      console.log(this.witchPartIndex);
      console.log(this.selectedPartIndexArray[this.witchPartIndex]);
    },
    methods: {
      showPartInfo() {

          this.$router.push({
            name: 'Proba',
            params: {
              id: this.selectedPartIndex,
              partType: this.parts,
            }
          });
      },
      emitSelectedPart(){
        this.$emit('partSelected', this.selectedPart);

      },
      selectNextPart() {
        this.selectedPartIndex=this.selectedPartIndexArray[this.witchPartIndex];
        this.selectedPartIndex = PartIndexManager.getNextValidIndex(
          this.selectedPartIndex,
          this.parts.length,
        );
        this.selectedIndex[this.witchPartIndex]=this.selectedPartIndex;
        this.emitSelectedPart();
      },
      selectPreviousPart() {
        this.selectedPartIndex = PartIndexManager.getPreviousValidIndex(
          this.selectedPartIndex,
          this.parts.length,
        );
        this.emitSelectedPart();
      },
    },
  };

</script>

<style scoped>
  .part {
    position: relative;
    width:165px;
    height:165px;
    border: 3px solid #aaa;
  }
  .sale {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: white;
    background-color: red;
    padding: 3px;
  }
  .part-title {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: red;
    padding-top: 5px;
    top: -25px;
  }
  .part img {
    width:165px;
    cursor: pointer;
  }
  .top {
    border-bottom: none;
  }
  .left {
    border-right: none;
  }
  .right {
    border-left: none;
  }
  .bottom {
    border-top: none;
  }
  .left img {
    transform: rotate(-90deg);
  }
  .right img {
    transform: rotate(90deg);
  }
  .prev-selector {
    position: absolute;
    z-index:1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
  }
  .next-selector {
    position: absolute;
    z-index:1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
  }
  .left .prev-selector:after,  .right .prev-selector:after{
    content: '\25B2'
  }
  .left .next-selector:after, .right .next-selector:after {
    content: '\25BC'
  }
  .top .prev-selector:after, .bottom .prev-selector:after, .center .prev-selector:after{
    content: '\25C4'
  }
  .top .next-selector:after, .bottom .next-selector:after, .center .next-selector:after{
    content: '\25BA'
  }
  .center .prev-selector, .center .next-selector {
    opacity:0.8;
  }
  .left .prev-selector {
    top: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
  .left .next-selector {
    top: auto;
    bottom: -28px;
    left: -3px;
    width: 144px;
    height: 25px;
  }
  .right .prev-selector {
    top: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .right .next-selector {
    top: auto;
    bottom: -28px;
    left: 24px;
    width: 144px;
    height: 25px;
  }
  .highlight {
    border: 1px solid red;
  }
</style>
