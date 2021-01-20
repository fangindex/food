<template>
  <div class="morehistory">
    <div class="morehistory-zzc" v-if="bool">
      <div class="small-zzc">
        <div class="top">
          <div>
            友情提醒
          </div>
          <div>
            确认删除所有浏览记录吗？
          </div>
        </div>
        <div class="bottom" @click="bool = false">
          <div @click="clear">确认</div>
          <div>取消</div>
        </div>
      </div>
    </div>
    <div class="morehistory-top">
      <div class="top-icon">
        <svg
          @click="$router.back()"
          t="1609320074355"
          class="icon"
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
      </div>

      <div class="top-name">浏览记录</div>
      <div class="top-icon" @click="bool = recordList.length ? true : false">
        <svg
          t="1609934840228"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="14101"
          width="20"
          height="20"
        >
          <path
            d="M634.50112 908.99968c0 0.59392-0.062464 1.171456-0.078848 1.7408 0.016384-0.444416 0.141312-0.859136 0.141312-1.296384 0-0.155648-0.047104-0.288768-0.062464-0.444416zM511.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32zM671.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32zM351.937536 895.881216c17.672192 0 32-14.327808 32-32V416c0-17.672192-14.327808-32-32-32s-32 14.327808-32 32v447.881216c0 17.672192 14.327808 32 32 32z"
            fill="#666666"
            p-id="14102"
          ></path>
          <path
            d="M864 160.008192h-64V64c0-35.351552-28.655616-64-64-64h-448c-35.342336 0-64 28.648448-64 64v96.008192h-64c-53.014528 0-96 42.984448-96 96v64h95.937536V928c0 53.014528 42.985472 96 96 96h512c53.015552 0 96-42.985472 96-96V320.008192H960v-64c0-53.016576-42.984448-96-96-96zM288 64h448v95.859712h-448V64z m511.937536 864c0 17.640448-14.358528 32-32 32h-512c-17.640448 0-32-14.359552-32-32V320.008192h576V928z m96-671.991808v15.98976h-768v-15.98976H128c0-17.649664 14.359552-32 32-32h704c17.641472 0 32 14.350336 32 32h-0.062464z"
            fill="#666666"
            p-id="14103"
          ></path>
        </svg>
      </div>
    </div>
    <div v-if="!recordList.length" class="not">暂无浏览记录</div>
    <template v-else>
      <div
        v-for="(item, index) in recordList"
        :key="index"
        class="recordList"
        @click="details(item.id)"
      >
        <div class="recordList-img">
          <img
            :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
            alt=""
          />
        </div>
        <div class="recordList-names">
          <div class="recordList-name">
            {{ item.name }}
          </div>
          <div class="recordList-authorname">
            {{ item.authorname }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
  },
  data() {
    return {
      bool: false,
    };
  },
  methods: {
    details(id) {
      this.$router.push({
        path: "/details",
        query: {
          id,
        },
      });
    },
    clear() {
      this.$store.commit("clear");
    },
  },
  activated() {
    this.$store.commit("jia");
  },
  deactivated() {
    this.$store.commit("zhen");
  },
};
</script>

<style lang="less">
.morehistory {
  padding: 0 15px;
  padding-top: 50px;
  .morehistory-zzc {
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
  .not {
    width: 100%;
    height: 100vh;
    color: #666;
    text-align: center;
    line-height: 80vh;
    font-size: 18px;
  }
  .morehistory-top {
    padding: 0 15px;
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
    display: flex;
    .top-name {
      flex: 1;
    }
    .top-icon {
      padding-top: 3px;
    }
  }
  .recordList {
    display: flex;
    height: 20vw;
    margin-top: 20px;
    .recordList-img {
      width: 25vw;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .recordList-names {
      flex: 1;
      display: flex;
      flex-direction: column;
      > div {
        line-height: calc(20vw / 2);
        flex: 1;
        width: 100%;
        padding-left: 15px;
      }
      .recordList-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        font-weight: bold;
      }
      .recordList-authorname {
        font-size: 16px;
        color: #666;
      }
    }
  }
}
</style>