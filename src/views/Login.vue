<template>
  <div class="login">
    <h1>欢迎登录宝洁SFA系统</h1>
    <div class="login-wrap">
      <div class="login-wrap-head"></div>
      <div class="login-wrap-input">
        <div class="logo">
          <div class="logo-wrap "></div>
        </div>
        <div class="input-group" :class="{active:act_index === 1,error:errors.has('cno')}">
          <label for="">公司编号：</label>
          <input name="cno" v-validate="{required:true,max:6, min:4}" @focus="act_index=1" type="number" class="wrap-input" max="6" v-model="cno">

        </div>
        <div class="input-group" :class="{active:act_index === 2,error:errors.has('pno')}">
          <label for="">员工编号：</label>
          <input name="pno" v-validate="{required:true,max:12, min:4}" @focus="act_index=2" type="number" v-model="pno">

        </div>
        <div class="input-group" :class="{active:act_index === 3,error:errors.has('pwd')}">
          <label for="">登录密码：</label>
          <input name="pwd" v-validate="{required:true,max:12, min:4}" @focus="act_index=3" type="password" v-model="pwd">

        </div>
        <div class="auth-code">
          <label for="">验证码：</label>
          <input name="code" @focus="act_index=4" type=" text" class="code-input" :class="{active:act_index === 4,error:errors.has('code')}" v-model="code" v-validate="{required:true,max:4, min:4}">
          <img class=" codeimg" @click="UpdateImg" :src="src" alt="">
        </div>
        <div class="ck-row">
          <div class="ckbox-wrap" @click="remembSet" :class="{active:rememb}"><i class="icon iconfont " :class="{'icon-check-square':rememb,'icon-border':!rememb}"></i>
            <span>记住密码</span></div>
          <div class="ckbox-wrap" @click="autoLoginSet" :class="{active:autologin}"><i class="icon iconfont " :class="{'icon-check-square':autologin,'icon-border':!autologin}"></i> <span>自动登录</span></div>
        </div>
      </div>
    </div>
    <div class="login-b" @click="LoginBtnClick">
      <p class="btn-text">登录</p>
    </div>

  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      act_index: 1,
      rememb: false,
      autologin: false,
      src: "https://www.aicoder.com/mdcode",
      code: "",
      validataState: false,
      cno: "",
      pno: "",
      pwd: ""
    }
  },
  mounted() {
    //强制执行校验
    this.$validator.validate();
  },
  methods: {
    autoLoginSet() {
      //设置当前的autologin为true或者false
      this.autologin = !this.autologin;
      //另外设置rememb的值
      this.autologin && (this.rememb = true);
    },
    remembSet() {
      this.rememb = !this.rememb;
      this.rememb || (this.autologin = false)
    },
    LoginBtnClick() {
      //判断当前是否校验全部通过,以及判断验证码是否正确，需要向后台发送请求，后台需要返回校验结果
      if (this.errors.any()) {
        return;
      }
      // //向后台发送ajax请求，将验证码传过去进行校验，返回校验结果,若校验成功；
      this.$ajax.get("/login", {
        code: this.code
      }).then(res => {
        console.log(res.data);
        if (res.data.state == "1") {
          //弹出等待的遮罩，防止二次点击
          Indicator.open("正在登录...");
          //开始登录请求
          this.$ajax.post("/login", {
            CNO: this.cno,
            PNO: this.pno,
            Passwd: this.pwd
          }).then(res => {
            if (res.data.code == 1) {
              //登录成功
              //记住用户名和密码
              localStorage.setItem(
                "Login_data",
                JSON.stringify({
                  rememb: this.remembe,
                  autologin: this.autologin,
                  PNO: this.rememb ? this.PNO : "",
                  CNO: this.rememb ? this.cm_code : "",
                  Passwd: this.remembe ? this.passwd : ""
                })
              );
              //把当前登录的用户信息放到sesstionStoreage里面一份
              sessionStorage.setItem("LoginzUser", JSON.stringify(res.data.user));
              sessionStorage.setItem("LoginToken", res.data.token);
              //把当前登录的用户信息放到vueX
              this.$store.commit("initUser", res.data.user);
              //跳转到home页面
              this.$router.push("/home");
              console.log("登录成功");

            } else {
              Toast({
                message: "用户名密码不正确，登陆失败！",
                duration: 2000
              });
            }

          }).catch(e => {
            Toast({
              message: "登录异常失败！",
              duration: 2000
            })
          })
        }
        else {
          openToast("验证码错误，请重新输入");
        }
      })
        .catch(e => {
          //登录异常失败
          Toast({
            message: "验证码校验失败！",
            duration: 2000
          })
        });
      Indicator.close();
      //发送用户输入的用户名和密码进行登录
    },
    UpdateImg() {
      //点击验证码图片时，加时间戳，
      let date = new Date().getTime();
      this.src = this.src + "?a=" + date;
    }
  }
}

</script>
<style lang="scss" scoped>
</style>

