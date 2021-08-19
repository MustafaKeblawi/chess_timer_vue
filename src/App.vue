<template>
  <div id="app">
    {{times}}
    <SettingsPanel v-model="times" v-if="!started" @start="started = true"/>
    <Timer v-bind:durations="times"/>
  </div>
</template>

<script>
import Timer from '@/components/Timer'
import SettingsPanel from "@/components/SettingsPanel";
export default {
  name: 'App',
  components: {
    SettingsPanel,
    Timer
  },
  data () {
    return {
      times: [100000, 10000],
      started: false,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
