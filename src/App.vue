<template>
  <div id="app">
    <SettingsPanel/>
    <Timer/>
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
