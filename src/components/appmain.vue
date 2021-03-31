<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
const { mounted } = require("../../src/components/Dashboard/index.vue");

module.exports = {
  mounted() {
    console.log("appmainView");
  },
};
</script>

<style >
.app-main {
  /*50 = navbar  */
  min-height: 100%;
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>
