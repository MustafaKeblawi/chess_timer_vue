<template>
<div>{{time}}</div>
</template>

<script>

import {StopTimer} from "@/libraries/Timer/StopTimer";
import {msToString} from "@/libraries/Timer/TimeConvertors";

export default {
  name: "TimerWatch",
  props: {
    duration: Number,
    on: Boolean,
    frequency: Number
  },
  data () {
    return {
      timer: {type: StopTimer},
      time: String,
      interval: null
    }
  },
  methods: {
    start: function () {
      this.timer.start();
      this.interval = setInterval(
          () => {
            this.time = msToString(this.timer.getTimeLeft());
          },
          this.frequency
      );
    },
    stop: function () {
      this.timer.stop();
      if (this.interval) clearInterval(this.interval);
    }
  },
  mounted() {
    this.timer = new StopTimer(this.duration);
    this.time = msToString(this.timer.getTimeLeft());
    console.log(this.frequency)
    if (this.on) this.start();
  },
  watch: {
    on: function (newMode) {
      if (newMode)
        this.start();
      else
        this.stop();
    },
  }
}
</script>

<style scoped>

</style>