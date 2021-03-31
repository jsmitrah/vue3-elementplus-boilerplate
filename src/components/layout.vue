<template>
  <div :class="classObj" class="app-wrapper">
    <div class="drawer-bg" @click="handleClickOutside">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <nav-bar></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template> 


<script>
module.exports = {
  components: {
    "nav-bar": Vue.defineAsyncComponent(() =>
      loadModule("src/components/navbar.vue", options)
    ),
    "side-bar": Vue.defineAsyncComponent(() =>
      loadModule("src/components/sidebar.vue", options)
    ),
    "app-main": Vue.defineAsyncComponent(() =>
      loadModule("src/components/appmain.vue", options)
    ),
  },
  computed: {
    classObj() {
      return {
        hideSidebar: !this.$root.sidebarOpened,
        openSidebar: this.$root.sidebarOpened,
      };
    },
  },
  created() {},
  methods: {},
};
</script>

<style >
#app {
  height: 100%;
}
#app .hideSidebar .main-container {
  margin-left: 60px;
}
#app .hideSidebar .side-menu-text {
  display: none;
}
#app .main-container {
  min-height: 100%;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
}
#app .sidebar-container {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 210px !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  /* background: rgba(0, 0, 0, 0.1); */
  /* background-color: blue; */
  /* -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important; */
  /* -webkit-text-fill-color: #fff !important; */
}
.horizontal-collapse-transition {
  transition: 0s width ease-in-out, 0s padding-left ease-in-out,
    0s padding-right ease-in-out;
}

.scrollbar-wrapper {
  overflow-x: hidden !important;
}
.el-scrollbar__view {
  height: 100%;
}

.el-scrollbar__bar.is-vertical {
  right: 0px;
}

.is-horizontal {
  display: none;
}

a {
  display: inline-block;
  width: 100%;
  overflow: hidden;
}

.svg-icon {
  margin-right: 16px;
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}

#app .sidebar-container .el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}

#app .hideSidebar .sidebar-container {
  width: 54px !important;
}

#app .sidebar-container .scrollbar-wrapper {
  overflow-x: hidden !important;
}

.sidebar-container .scrollbar-wrapper .el-scrollbar__view {
  height: 100% !important;
}
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
}
.drawer-bg {
  /* background: #000; */
  /* opacity: 0.3; */
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
#app .hideSidebar .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
#app .hideSidebar .el-menu--collapse .el-submenu > .el-submenu__title > span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.scrollbar-wrapper {
  margin-left: -10px !important;
}
/* .el-menu--collapse .el-menu .el-submenu {
        min-width: 210px !important;
    }

    .el-submenu {
        overflow: hidden;
    }
    .el-submenu >.el-submenu__title {
        padding: 0 !important;
    }
    .el-submenu .svg-icon {
        margin-left: 20px;
    }

    .el-submenu .el-submenu__icon-arrow {
        display: none;
    }

     
    .hideSidebar .sidebar-container {
        width: 54px !important;
    }

    .hideSidebar .main-container {
        margin-left: 54px;
    }

    .hideSidebar .svg-icon {
        margin-right: 0px;
    }

    .hideSidebar .submenu-title-noDropdown {
        padding: 0 !important;
        position: relative;
    }
    .hideSidebar .submenu-title-noDropdown .el-tooltip {
        padding: 0 !important;
    }
    .hideSidebar .submenu-title-noDropdown .svg-icon {
        margin-left: 20px;
    } */
</style>
