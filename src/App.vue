<template>
  <div class="container">
    <div class="row">
      <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </div>
    <div class="row">
      <div class="col-sm d-flex justify-content-center">
        <LineChart></LineChart>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LineChart from "@/components/LineChart";

export default {
  name: 'App',
  components: {
    HelloWorld, LineChart
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

.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
