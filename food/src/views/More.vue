<template>
  <div class="more">
    <div class="quit" v-show="land">
      <svg
        @click="newBool = true"
        t="1610936668144"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3652"
        width="30"
        height="30"
      >
        <path
          d="M448 480A224 224 0 1 1 672 256 224 224 0 0 1 448 480z m0-384A160 160 0 1 0 608 256 160 160 0 0 0 448 96z"
          fill="#666666"
          p-id="3653"
        ></path>
        <path
          d="M704 960H64a32.64 32.64 0 0 1-32-30.08V896C32 631.04 218.88 416 448 416a384 384 0 0 1 289.92 135.68 32 32 0 0 1 0 44.8 32 32 0 0 1-45.44 0A320 320 0 0 0 448 480c-192 0-352 186.88-352 416H704a32 32 0 0 1 0 64zM832 928a30.08 30.08 0 0 1-22.4-9.6 30.72 30.72 0 0 1 0-44.8L914.56 768l-104.96-105.6a31.36 31.36 0 0 1 44.8-44.8l128 128a30.72 30.72 0 0 1 0 44.8l-128 128a30.08 30.08 0 0 1-22.4 9.6z"
          fill="#666666"
          p-id="3654"
        ></path>
        <path
          d="M960 800H576a32 32 0 0 1 0-64h384a32 32 0 0 1 0 64z"
          fill="#666666"
          p-id="3655"
        ></path>
      </svg>
    </div>

    <div class="debarkation">
      <div class="debarkation-icon" v-if="!land">
        <svg
          t="1610447932257"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2542"
          width="100"
          height="100"
        >
          <path
            d="M512 42.667C251.733 42.667 42.667 251.733 42.667 512c0 147.2 68.266 279.467 172.8 364.8C296.533 942.933 398.933 981.333 512 981.333s215.467-38.4 296.533-104.533c106.667-85.333 172.8-217.6 172.8-364.8 0-260.267-209.066-469.333-469.333-469.333z m0 896c-93.867 0-179.2-29.867-249.6-81.067C290.133 744.533 392.533 661.333 512 661.333s221.867 83.2 249.6 196.267c-70.4 51.2-155.733 81.067-249.6 81.067zM341.333 448c0-93.867 76.8-170.667 170.667-170.667S682.667 354.133 682.667 448 605.867 618.667 512 618.667 341.333 541.867 341.333 448z m454.4 381.867c-27.733-89.6-96-162.134-183.466-192C680.533 601.6 725.333 531.2 725.333 450.133c0-117.333-96-213.333-213.333-213.333s-213.333 96-213.333 213.333c0 81.067 44.8 151.467 113.066 187.734-87.466 32-155.733 102.4-183.466 192C140.8 750.933 85.333 637.867 85.333 512c0-234.667 192-426.667 426.667-426.667s426.667 192 426.667 426.667c0 125.867-55.467 238.933-142.934 317.867z"
            fill="#666666"
            p-id="2543"
          ></path>
        </svg>
      </div>
      <div class="debarkation-img" v-else>
        <img
          src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&amp;fm=26&amp;gp=0.jpg"
          class="op-img-address-link-imgs"
        />
      </div>

      <div class="landing-register" v-if="!land">
        <div
          class="landing"
          :style="{ background: bools ? '#e4e4e4' : ' #666' }"
          @click="bools = false"
        >
          <router-link
            to="/landing"
            :style="{ color: bools ? '#555' : '#f1efef' }"
            >登陆</router-link
          >
        </div>
        <div
          class="register"
          :style="{ background: bools ? '#666' : ' #e4e4e4' }"
          @click="bools = true"
        >
          <router-link
            to="/register"
            :style="{ color: bools ? '#f1efef' : '#555' }"
            >注册</router-link
          >
        </div>
      </div>
      <div v-else class="landing-register-name">
        <div class="name">{{ land.name }}</div>
      </div>
    </div>
    <div class="more-bottom">
      <Kitchen @click.native="general('kitchen')"></Kitchen>
      <Collect @click.native="general('collect')"></Collect>
      <History @click.native="general('history')"></History>
      <Praise @click.native="bool = true"></Praise>
    </div>
    <div class="big-zzc" v-if="bool">
      <div class="small-zzc">
        <div class="top">感谢您的鼓励，我们一定继续努力！</div>
        <div class="bottom" @click="bool = false">确认</div>
      </div>
    </div>
    <div class="quit-zzc" v-if="newBool">
      <div class="small-zzc">
        <div class="top">
          <div>友情提醒</div>
          <div>确定要退出登陆吗？</div>
        </div>
        <div class="bottom" @click="newBool = false">
          <div @click="lands">确认</div>
          <div>取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Kitchen from "@/components/Kitchen.vue";
import Collect from "@/components/Collect.vue";
import History from "@/components/History.vue";
import Praise from "@/components/Praise.vue";
export default {
  components: {
    Kitchen,
    Collect,
    History,
    Praise,
  },
  computed: {
    land() {
      return this.$store.state.land;
    },
  },
  data() {
    return {
      bool: false,
      bools: false,
      newBool: false,
    };
  },
  methods: {
    general(str) {
      this.$router.push({
        path: str,
      });
    },
    lands() {
      this.$store.commit("lands");
    },
  },
  activated() {
    this.$store.commit("zhen");
  },
  deactivated() {
    this.$store.commit("jia");
  },
};
</script>

<style lang="less">
.more {
  padding: 0 15px;
  .quit {
    position: absolute;
    top: 0px;
    right: 10px;
    text-align: center;
    margin-top: 15px;
    > button {
      outline: none;
      background: #ccc;
      border: none;
      color: rgb(85, 83, 83);
      width: 100px;
      height: 35px;
      border-radius: 10px;
    }
  }
  .debarkation {
    position: absolute;
    top: 12%;
    left: 0;
    width: 100%;
    .debarkation-icon {
      text-align: center;
    }
    .landing-register-name .name,
    .debarkation-img {
      display: flex;
      justify-content: center;
    }
    .debarkation-img {
      > img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
    .landing-register-name {
      .name {
        margin-top: 20px;
        font-size: 30px;
        font-weight: bold;
      }
    }
    .landing-register {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      > div {
        width: 90px;
        height: 40px;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        background: #e4e4e4;
        font-weight: bold;
        > a {
          color: #555;
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .landing {
        > a {
          color: #f1efef;
        }
        background: #666;
        border-radius: 15px 0 0 15px;
      }
      .register {
        border-radius: 0 15px 15px 0;
      }
    }
  }
  .more-bottom {
    > div {
      padding-left: 5px;
    }
    margin-top: 40vh;
  }
  .big-zzc {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .small-zzc {
      border: 1px solid;
      width: 70vw;
      height: 150px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: #888;
      font-size: 18px;
      font-weight: bold;
      border-radius: 20px;
      .top {
        padding: 0 20px;
        padding-top: 30px;
        text-align: center;
        height: 100px;
      }
      .bottom {
        border-top: 2px solid;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
    }
  }
  .quit-zzc {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .small-zzc {
      border: 1px solid;
      width: 70vw;
      height: 150px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.9);
      color: #888;
      font-size: 18px;
      border-radius: 20px;
      .top {
        padding: 0 20px;
        padding-top: 25px;
        text-align: center;
        height: 100px;
        > div:first-child {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .bottom {
        border-top: 2px solid;
        height: 50px;
        line-height: 50px;
        text-align: center;
        display: flex;
        > div {
          flex: 1;
        }
        > div:first-child {
          border-right: 2px solid;
        }
      }
    }
  }
}
</style>