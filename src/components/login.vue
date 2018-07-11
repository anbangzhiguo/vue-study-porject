<template>
  <div :style ="note">
    <div class="login-box">
      <el-row>
        <el-col :span="24">
          <h2>三菱企业服务总线</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input id="name"  v-model="name" placeholder="请输入帐号">
            <template slot="prepend">帐号</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
            <template slot="prepend">密码</template>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
       margin-bottom: 0;
     }
  }
  .login-box {
    width: 400px;
    height: 300px;
    left:35%;
    padding: 20px;
    background-color: rgba(255,255,255,0.8);
    position: absolute;
    margin-top: 100px;
  }
</style>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      note: {
        backgroundImage: 'url(' + require("../assets/back.png") + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '100%',
        width: '100%',
      }
    }
  },
  methods:{
    check(){
      sessionStorage.setItem('auth','YES')
      this.$router.push("main")
    }
  }
}
</script>
