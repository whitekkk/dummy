<template>
  <div class="plan">
    <img class="plan" src="../static/img/cap.png" width="950" />
    <div id="abs">
      <input type="text" v-model="user"><br>
      <input type="text" v-model="pass"><br>
    </div>
    <div id="rcorners2" @click="set"></div>
    <button @click="set()">xx</button>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  name: 'App',
  data () {
    return {
      hosts: 'http://localhost:3001',
      user: '',
      pass: '',
      count: 0,
      pic: '../static/img/cap.png'
    }
  },
  methods: {
    set () {
      var vm = this
      // console.log(this.$http)
      vm.$http.post(vm.hosts + '/hey', {user: this.user, pass: this.pass}).then((res) => {
      })
      this.user = ''
      this.pass = ''
      this.count++
      if (this.count > 0) {
        this.pic = '../static/img/cap2.png'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#rcorners2 {
    position: absolute;
    border-radius: 25px;
    /* border: 2px solid #73AD21; */
    width: 55px;
    height: 15px;
    left: 865px;
    top: 410px;
}

#plan {
  position: absolute;
  left: 0;
  top: 0;
}

#abs {
  position: absolute;
  z-index: 999;
  left: 763px;
  top: 357px;
}
</style>
