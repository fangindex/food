<template>
  <div class="Landing">
    <div class="Landing-top">
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
      登陆
    </div>
    <div class="Landing-center">
      <div class="Landing-input">
        <div>账号：</div>
        <input type="text" placeholder="请输入账号 " v-model="number" />
      </div>
      <div class="Landing-input">
        <div>密码：</div>
        <input
          type="password"
          placeholder="请输入登陆密码 "
          v-model="password"
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
          :style="{ background: btnBool ? '#fdc003' : 'rgb(156, 154, 154)' }"
          @click="submit"
        >
          登陆
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
      number: "",
      password: "",
      numberBool: false,
      passwordBool: false,
    };
  },
  methods: {
    passwords(){
      if (this.registerlist.find((item) => item.number === this.number)) {
        if (
          this.registerlist.find((item) => item.number === this.number)
            .password === this.password
        ) {
          this.passwordBool = true;
        } else {
          this.passwordBool = false;
        }
      }
    },
    submit() {
      clearTimeout(window.timer);

      if (this.btnBool) {
        Notify({ type: "success", message: "登陆成功" });
        window.timer = setTimeout(() => {
          this.$store.commit('landing',this.registerlist.find((item) => item.number === this.number))
          this.$router.back();
          this.number = this.password = "";
          this.bool = true;
          this.btnBool = false;
          this.numberBool = false;
          this.passwordBool = false;
        }, 3000);
      } else if (!this.numberBool) {
        Notify({ type: "danger", message: "账号名不存在" });
      } else if (!this.passwordBool) {
        Notify({ type: "danger", message: "密码错误" });
      } else {
        Notify({ type: "danger", message: "请勾选协议" });
      }
    },
  },
  updated() {
    if (this.passwordBool && this.numberBool && !this.bool) {
      this.btnBool = true;
    } else {
      this.btnBool = false;
    }
  },
  watch: {
    number() {
      if (this.registerlist.find((item) => item.number === this.number)) {
        this.numberBool = true;
      } else {
        this.numberBool = false;
      }
      this.passwords();
    },
    password() {
      this.passwords();
    },
  },
  computed: {
    registerlist() {
      return this.$store.state.registerlist;
    },
  },
  activated() {
    this.$store.commit("jia");
  },
  deactivated() {
    this.$store.commit("zhen");
    this.number = this.password = "";
    this.bool = true;
    this.btnBool = false;
    this.numberBool = false;
    this.passwordBool = false;
  },
};
</script>

<style lang="less">
.Landing {
  padding: 0 15px;
  padding-top: 60px;
  .Landing-top {
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
  .Landing-center {
    .Landing-input {
      margin-top: 30px;
      color: #666;
      font-size: 4vw;
      display: flex;
      > div {
        flex: 0.2;
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