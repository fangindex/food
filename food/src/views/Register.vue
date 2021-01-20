<template>
  <div class="Register">
    <div class="Register-top">
      <svg
        @click="$router.back()"
        t="1609320074355"
        class="icon top-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2490"
        width="20"
        height="20"
      >
        <path
          d="M750.93333332 989.86666667c-9.6 0-19.30666667-3.41333333-26.66666665-10.24L246.4 536.74666667c-14.72-13.65333333-14.72-35.84 0-49.49333334L724.26666667 44.37333333c14.72-13.65333333 38.61333333-13.65333333 53.33333333 0 14.72 13.65333333 14.72 35.84 0 49.49333334L326.4 512l451.2 418.13333333c14.72 13.65333333 14.72 35.84 0 49.49333334-7.35999999 6.82666667-17.06666667 10.23999999-26.66666668 10.24z"
          fill="#666666"
          p-id="2491"
        ></path>
      </svg>
      注册
    </div>
    <div class="Register-center">
      <div class="Register-input">
        <div>用户名：</div>
        <input
          type="text"
          placeholder="请输入用户名"
          @input="name(names)"
          v-model="names"
        />
      </div>
      <div class="Register-input">
        <div>账号：</div>
        <input
          type="text"
          placeholder="请输入账号 (7-16位数字、英文)"
          @input="number(numbers)"
          v-model="numbers"
        />
      </div>
      <div class="Register-input">
        <div>设置密码：</div>
        <input
          type="password"
          placeholder="请输入登陆密码 (6-14位数字)"
          @input="password(passwords)"
          v-model="passwords"
        />
      </div>
      <div class="Register-input">
        <div>确认密码：</div>
        <input
          type="password"
          placeholder="请再次输入登陆密码"
          @input="newPassword(newPasswords)"
          v-model="newPasswords"
        />
      </div>
      <div class="center-icon">
        <svg
          @click="bool = !bool"
          v-if="bool"
          t="1610450394697"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5122"
          width="20"
          height="20"
        >
          <path
            d="M512 64a448 448 0 1 0 0 896A448 448 0 0 0 512 64z m193.472 301.696l-210.56 292.032a31.808 31.808 0 0 1-51.712 0l-124.672-172.8a8 8 0 0 1 6.464-12.736h46.912c10.24 0 19.84 4.928 25.92 13.312L468.992 584.32l157.184-218.048a32 32 0 0 1 25.92-13.248h46.912c6.464 0 10.24 7.36 6.464 12.672z"
            fill="#bfbfbf"
            p-id="5123"
          ></path>
        </svg>
        <svg
          @click="bool = !bool"
          v-else
          t="1610450394697"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5122"
          width="20"
          height="20"
        >
          <path
            d="M512 64a448 448 0 1 0 0 896A448 448 0 0 0 512 64z m193.472 301.696l-210.56 292.032a31.808 31.808 0 0 1-51.712 0l-124.672-172.8a8 8 0 0 1 6.464-12.736h46.912c10.24 0 19.84 4.928 25.92 13.312L468.992 584.32l157.184-218.048a32 32 0 0 1 25.92-13.248h46.912c6.464 0 10.24 7.36 6.464 12.672z"
            fill="#1afa29"
            p-id="5123"
          ></path>
        </svg>
        <div class="icon-text">
          阅读并同意<span>用户协议</span>和<span>隐私协议</span>
        </div>
      </div>
      <div class="accomplish">
        <button
          @click="submit"
          :style="{ background: btnBool ? '#fdc003' : 'rgb(156, 154, 154)' }"
        >
          注册
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";

export default {
  data() {
    return {
      bool: true,
      btnBool: false,
      inpBool: [false, false, false, false],
      names: "",
      numbers: "",
      passwords: "",
      newPasswords: "",
    };
  },
  updated() {
    if (this.inpBool.filter((item) => item).length === 4 && !this.bool) {
      this.btnBool = true;
    } else {
      this.btnBool = false;
    }
  },
  activated() {
    this.$store.commit("jia");
  },
  deactivated() {
    this.$store.commit("zhen");
    this.names = this.numbers = this.passwords = this.newPasswords = "";
    this.bool = true;
    this.btnBool = false;
    for (var i in this.inpBool) {
      this.inpBool[i] = false;
    }
  },
  computed: {
    registerlist() {
      return this.$store.state.registerlist;
    },
  },
  methods: {
    submit() {
      clearTimeout(window.time);
      if (this.btnBool) {
        if (this.registerlist.find((item) => item.number === this.numbers)) {
          Notify({ type: "danger", message: "账号名已经存在" });
          console.log(456456);
          return;
        }
        Notify({ type: "success", message: "注册成功" });
        window.time = setTimeout(() => {
          let a = {};
          a.name = this.names;
          a.number = this.numbers;
          a.password = this.passwords;
          this.$store.commit("registerlistT", a);
          this.$router.back();
          this.names = this.numbers = this.passwords = this.newPasswords = "";
          this.bool = true;
          this.btnBool = false;
          for (var i in this.inpBool) {
            this.inpBool[i] = false;
          }
        }, 3000);
      } else if (!this.inpBool[0]) {
        Notify({ type: "danger", message: "请输入用户名" });
      } else if (!this.inpBool[1]) {
        Notify({ type: "danger", message: "账号名错误" });
      } else if (!this.inpBool[2]) {
        Notify({ type: "danger", message: "密码错误" });
      } else {
        Notify({ type: "danger", message: "请勾选协议" });
      }
    },

    name(value) {
      if (value) {
        this.inpBool[0] = true;
      } else {
        this.inpBool[0] = false;
      }
    },
    number(value) {
      let uPattern = /^[a-zA-Z0-9]{7,16}$/;
      if (uPattern.test(value)) {
        this.inpBool[1] = true;
      } else {
        this.inpBool[1] = false;
      }
    },
    password(value) {
      let uPattern = /^[a-zA-Z0-9]{6,14}$/;
      if (uPattern.test(value)) {
        this.inpBool[2] = true;
      } else {
        this.inpBool[2] = false;
      }
      if (this.passwords === this.newPasswords) {
        this.inpBool[2] = true;
        this.inpBool[3] = true;
      } else {
        this.inpBool[2] = false;
        this.inpBool[3] = false;
      }
    },
    newPassword(value) {
      console.log(value);
      if (this.passwords === this.newPasswords) {
        this.inpBool[2] = true;
        this.inpBool[3] = true;
      } else {
        this.inpBool[2] = false;
        this.inpBool[3] = false;
      }
    },
  },
};
</script>

<style lang="less">
.Register {
  padding: 0 15px;
  padding-top: 50px;
  .Register-top {
    background: #fff;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    color: #666;
    font-size: 18px;
    z-index: 9;
    .top-icon {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }
  }
  .Register-center {
    .Register-input {
      margin-top: 20px;
      color: #666;
      font-size: 4vw;
      display: flex;
      > div {
        flex: 0.35;
        text-align: right;
      }
      > input {
        flex: 1;
        outline: none;
        border: none;
      }
    }
    .center-icon {
      margin-top: 40px;
      margin-bottom: 10px;
      display: flex;
      .icon {
        width: 5vw;
        height: 5vw;
      }
      .icon-text {
        margin-right: 2px;
        flex: 1;
        color: #8f8d8d;
        font-size: 3vw;
        > span {
          color: #fdc003;
        }
      }
    }
    .accomplish {
      width: 90vw;
      height: 10vw;
      > button {
        width: 100%;
        height: 100%;
        font-size: 5vw;
        outline: none;
        border: none;
        border-radius: 10px;
        color: rgb(224, 222, 222);
      }
    }
  }
}
</style>