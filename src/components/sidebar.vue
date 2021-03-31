<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      ref="menu"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#bfcbd9"
      :default-active="$route.path"
      active-text-color="#409EFF"
      :collapse-transition="false"
      mode="vertical"
      :collapse="!this.$root.sidebarOpened"
      @click="handleClick"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script>
module.exports = {
  components: {
    "sidebar-item": Vue.defineAsyncComponent(() =>
      loadModule("src/components/sidebaritem.vue", options)
    ),
  },
  mounted() {
    console.log("sidebar");
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    handleOpen(e) {},
    handleClose() {},
    handleClick(e) {},
  },
};
</script>
