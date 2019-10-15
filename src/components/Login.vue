<template>
  <div class="login">
    <el-form ref="form" status-icon :rules="rules" :model="form" label-width="80px">
      <img class="logo" src="../assets/logo.jpeg" alt />
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="login">登录</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: ['blur', 'change']
          },
          {
            min: 3,
            max: 12,
            message: '长度在 3 到 12 个字符',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change']
          },
          {
            min: 3,
            max: 12,
            message: '长度在 3 到 12 个字符',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.form.resetFields()
    },
    login () {
      this.$refs.form.validate(isValid => {
        if (!isValid) return
        console.log('可以发送axios请求了')
        // 发送请求
        axios({
          method: 'post',
          url: 'http://localhost:8888/api/private/v1/login',
          data: this.form
        }).then(res => {
          console.log(res.data)
          // 解构赋值
          const { meta } = res.data
          if (meta.status === 200) {
            // this.$message('这是一条消息提示')  // 直接提示
            // this.$message.success(meta.msg)  // 指定类型提示
            // 配置完整对象
            this.$message({
              message: meta.msg,
              type: 'success'
            })
            // 跳转到首页
            // this.$router.push({ name: '路由名字' })
            this.$router.push('/index')
          } else {
            this.$message.error(meta.msg)
          }
        })
      })
    }
  }
}
</script>

<style lang='scss'>
.login {
  width: 100%;
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    background-color: #fff;
    padding: 20px;
    padding-top: 75px;
    margin: 0 auto;
    margin-top: 200px;
    border-radius: 20px;
    position: relative;
    .login-btn {
      margin-left: 80px;
      margin-right: 70px;
    }
    .logo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -60px;
    }
  }
}
</style>
