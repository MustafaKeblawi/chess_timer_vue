<template>
<div>
  Settings Panel
  <input type="number" min="2" v-model="playerCount">
  <TimeInput v-for="(_, index) in durations" :key="index" v-model="durations[index]"/>
  <button @click="start()">Start</button>
</div>
</template>

<script>
import TimeInput from "@/components/SettingsPanel/TimeInput";
export default {
  name: "SettingsPanel",
  components: {TimeInput},
  data: () => ({
    playerCount: 2,
    durations: [0 , 0]
  }),
  watch: {
    playerCount (newVal) {
      if (newVal < 2) return;
      if (newVal > this.durations.length)
        this.durations = this.durations.concat((new Array(newVal-this.durations.length)).fill(0));
      else
        this.durations = this.durations.slice(0, newVal);
    },
    durations () {
      this.$emit('input', this.durations);
    }
  },
  methods: {
    start () {
      this.$emit('start');
    }
  }
}
</script>

<style scoped>

</style>