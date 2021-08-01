<template>
  <div>
    <button @click="currentPlayer = 0" v-if="currentPlayer === null">Start</button>
    <div v-for="(duration, index) in durations" v-bind:key="index">
      <TimerWatch v-bind:duration="duration" v-bind:on="currentPlayer === index"/>
      <button @click="updateState(index)" v-bind:disabled="currentPlayer !== index">Player {{index+1}}</button>
    </div>
  </div>
</template>

<script>

import TimerWatch from "@/components/Timer/TimerWatch";
export default {
  name: "Timer.vue",
  components: {TimerWatch},
  props: {
    durations: Array,

  },
  data () {
    return {
      currentPlayer: null,
      playerCount: Number
    }
  },
  mounted() {
    this.playerCount = this.durations.length
    console.log(this.durations)
  },
  methods: {
    updateState: function (player) {
      if (this.currentPlayer === player)
        this.currentPlayer = (this.currentPlayer + 1) % this.playerCount;
      if (this.currentPlayer === null) this.currentPlayer = 0;
    }
  },
}
</script>

<style scoped>

</style>