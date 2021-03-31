<template>
  <div class="navbar">
    <div class="hamburger-container" @click="toggleSideBar">
      <i v-if="this.$root.sidebarOpened" class="el-icon-arrow-left"></i>
      <i class="el-icon-tickets"></i>
      <i v-if="!this.$root.sidebarOpened" class="el-icon-arrow-right"></i>
    </div>
    <breadcrump></breadcrump>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          class="user-avatar"
        />
        <i class="el-icon-caret-bottom"></i>
      </div>
      <template #dropdown>
        <el-dropdown-menu class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item> Home </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display: block" @click="logout">LogOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      sidebar: this.$root.sidebarOpened,
      device: "mobile",
    };
  },
  mounted() {
    console.log("navbar");
  },
  components: {
    breadcrump: Vue.defineAsyncComponent(() =>
      loadModule("src/components/Breadcrump/index.vue", options)
    ),
  },
  methods: {
    toggleSideBar() {
      this.$root.sidebarOpened = !this.$root.sidebarOpened;
      sidebar = this.$root.sidebarOpened;
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
}
.navbar {
  height: 50px;
  line-height: 50px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.el-icon-tickets {
  font-size: 24px;
}
.hamburger-container > .el-icon-arrow-left {
  top: -3px;
  position: relative;
}
.hamburger-container > .el-icon-arrow-right {
  top: -3px;
  position: relative;
}
.navbar .hamburger-container {
  line-height: 58px;
  height: 50px;
  float: left;
  padding: 0 10px;
  cursor: pointer;
}
.navbar .screenfull {
  position: absolute;
  right: 90px;
  top: 16px;
  color: red;
}
.navbar .avatar-container {
  height: 50px;
  display: inline-block;
  position: absolute;
  right: 35px;
}
.navbar .avatar-container .avatar-wrapper {
  cursor: pointer;
  margin-top: 5px;
  position: relative;
  line-height: initial;
}
.navbar .avatar-container .avatar-wrapper .user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.navbar .avatar-container .avatar-wrapper .el-icon-caret-bottom {
  position: absolute;
  right: -20px;
  top: 25px;
  font-size: 12px;
}
</style>
