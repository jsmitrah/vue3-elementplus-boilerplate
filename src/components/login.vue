<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <h3 class="title">vue-admin-template</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <i class="el-icon-message"></i>
        </span>
        <el-input
          v-model="loginForm.username"
          name="username"
          type="text"
          auto-complete="on"
          placeholder="username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <i class="el-icon-view"></i>
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="password"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleLogin"
        >
          Sign in
        </el-button>
      </el-form-item>
      <div class="tips">
        <span style="margin-right: 20px">username: admin</span>
        <span> password: admin</span>
      </div>
    </el-form>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "admin",
      },
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }],
      },
      loading: false,
      pwdType: "password",
      redirect: undefined,
    };
  },
  mounted() {
    console.log("moutedlogin", this.$router);
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$router.push("/dashboard");
    },
  },
};
</script>


<style>
/* reset element-ui css */
.login-container .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}
.login-container .el-input input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eee;
  height: 47px;
}
.login-container .el-input input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
  -webkit-text-fill-color: #fff !important;
}
.login-container .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
</style>

<style scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
}
.login-container .login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 520px;
  max-width: 100%;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}
.login-container .tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}
.login-container .tips span:first-of-type {
  margin-right: 16px;
}
.login-container .svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
.login-container .title {
  font-size: 26px;
  font-weight: 400;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.login-container .show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}
</style>
