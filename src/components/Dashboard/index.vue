<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: savi</div>
    <div class="dashboard-text"><span>roles: admin</span></div>
  </div>
</template>


<script>
module.exports = {
  data() {
    return {
      info: null,
    };
  },
};
</script>

<style >
.dashboard-container {
  margin: 30px;
}
.dashboard-text {
  font-size: 30px;
  line-height: 46px;
}
</style>
