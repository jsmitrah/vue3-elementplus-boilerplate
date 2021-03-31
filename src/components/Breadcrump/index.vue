<template>
  <el-breadcrumb class="app-breadcrumb">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="item.redirect === 'noredirect' || index == levelList.length - 1" class="no-redirect">{{
          item.meta.title
        }}</span>
        <span v-else @click="handleLink(item)" class="cursor">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
module.exports = {
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name);

      const first = matched[0];
      if (first && first.name !== 'dashboard') {
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched);
      }

      this.levelList = matched.filter((item) => item.meta && item.meta.title && item.meta.breadcrumb !== false);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(path);
    },
  },
};
</script>

<style>
.app-breadcrumb .el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
}
.app-breadcrumb .el-breadcrumb .no-redirect {
  color: #97a8be;
  cursor: text;
}
.cursor {
  cursor: pointer;
  color: #68afe0;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
</style>
