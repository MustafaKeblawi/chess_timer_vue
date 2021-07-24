<template>
<div>{{time}}</div>
</template>

<script>

import { StopTimer } from '@/libraries/Timer/StopTimer.js';
import {msToString} from "@/libraries/Timer/TimeConvertors";
export default {
  name: "Timer.vue",
  data () {
    let timer = new StopTimer();
    return {
      timer,
      time: msToString(timer.getTimeLeft()),
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>