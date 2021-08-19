<template>
  <div>
    <input type="number" v-model="hours" id="hours" placeholder="0" min="0">
    <input type="number" v-model="minutes" id="minutes" placeholder="0">
    <input type="number" v-model="seconds" id="seconds" placeholder="0">
  </div>
</template>

<script>
import {mod, toMs, msToHours, msToMinutes, msToSeconds} from "@/libraries/Timer/TimeConvertors";

export default {
  name: "TimeInput",
  props: {
    value: Number
  },
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  mounted() {
    if (!this.value) this.$emit("input", 0);
  },
  watch: {
    hours() {
      this.updateInput();
    },
    minutes(newVal) {
      this.minutes = mod(newVal, 60);
      this.updateInput();
    },
    seconds(newVal) {
      this.seconds = mod(newVal, 60);
      this.updateInput();
    },
    value() {
      this.updateValue();
    }
  },
  methods: {
    updateInput: function() {
      this.$emit("input", toMs(this.hours, this.minutes, this.seconds));
    },
    updateValue() {
      this.hours = msToHours(this.value);
      this.minutes = msToMinutes(this.value);
      this.seconds = msToSeconds(this.value);
    }
  }
}
</script>

<style scoped>

</style>