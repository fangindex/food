<template>

<transition
      name="transition"
    >
  <div class="inputbox">
    <div class="inputbox-box">
      <svg
        t="1609229793622"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2503"
        width="20"
        height="20"
        class="icon inputbox-icon"
      >
        <path
          d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
          p-id="2504"
          fill="#adadad"
        ></path>
      </svg>
      <div class="input">
        <input
          type="text"
          placeholder="搜索 菜谱/食材"
          @click="
            inputbox(box);
            bool = true;
          "
          @keydown.enter="
            search(box);
            bool = false;
          "
          v-model.trim="box"
          @input="
            inputbox(box);
            bool = true;
          "
        />
        <svg
          v-if="box"
          v-show="bool"
          t="1610011334620"
          class="icon input-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2533"
          width="16"
          height="16"
          @click="box = ''"
        >
          <path
            d="M499.0976 0C223.466057 0 0 223.466057 0 499.0976c0 275.602286 223.466057 499.068343 499.0976 499.068343 275.602286 0 499.068343-223.466057 499.068343-499.068343C998.165943 223.466057 774.729143 0 499.126857 0z m212.874971 658.753829a37.6832 37.6832 0 0 1 0 53.248 37.6832 37.6832 0 0 1-53.248 0l-159.656228-159.685486-159.656229 159.656228a37.653943 37.653943 0 0 1-53.248-53.248l159.685486-159.656228-159.656229-159.656229a37.653943 37.653943 0 0 1 53.248-53.248l159.626972 159.685486 159.656228-159.656229a37.653943 37.653943 0 0 1 53.248 53.248l-159.656228 159.626972 159.656228 159.685486z"
            fill="#666666"
            p-id="2534"
          ></path>
        </svg>
      </div>
      <div class="cancel" @click="PageBoxBools">取消</div>
    </div>
    <div v-if="!box" class="inputboxlist">
      <div class="search">
        <div class="search-icon">
          <svg
            t="1609933717088"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="12102"
            width="17"
            height="17"
          >
            <path
              d="M512 0a512 512 0 1 0 512 512 512 512 0 0 0-512-512z m254.1568 766.088533a30.037333 30.037333 0 0 1-42.496 0l-241.698133-241.698133V218.8288a30.037333 30.037333 0 0 1 60.074666 0v280.814933l224.0512 223.982934a30.037333 30.037333 0 0 1 0 42.496z m0 0"
              fill="#FDC05C"
              p-id="12103"
            ></path>
          </svg>
        </div>
        <div class="search-name">历史搜索</div>
      </div>
      <div
        class="historylist"
        v-for="(item, index) in historylist"
        :key="index"
        @click="
          search(item);
          box = item;
          bool = false;
        "
      >
        {{ item }}
      </div>
      <div class="eliminate" @click="clear">
        <div class="eliminate-icon">
          <svg
            t="1609934840228"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="14101"
            width="15"
            height="15"
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

        <div class="eliminate-name">清楚历史记录</div>
      </div>
    </div>
    <template v-else>
      <div class="loading" v-show="$root.InputBoxloading">
        <img
          class="main_img img-hover loading-img"
          data-imgurl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1744558263,856016303&amp;fm=26&amp;gp=0.jpg"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1744558263,856016303&amp;fm=26&amp;gp=0.jpg"
          style="
            background-color: rgb(255, 255, 255);
            width: 231px;
            height: 173px;
          "
        />
      </div>
      <div class="searchlist" v-if="bool" v-show="!$root.InputBoxloading">
        <div
          v-for="(item, index) in searchlist"
          :key="index"
          class="searchlist-name"
          @click="
            bool = false;
            box = item;
            search(box);
          "
        >
          {{ item }}
        </div>
      </div>
      <van-pull-refresh
          v-model="isLoading"
          success-text="刷新成功"
          @refresh="onRefresh"
          v-else
        >
      <div class="content" v-show="!$root.InputBoxloadings">
        <template v-if="contentList.length">
          <div
            v-for="(item, index) in contentList"
            :key="index"
            class="contentlist"
            @click="$router.push({ path: '/details', query: { id: item.id } })"
          >
            <div class="contentlist-img">
              <img
                :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
                alt=""
              />
            </div>
            <div class="contentlist-names">
              <div class="contentlist-name">
                {{ item.name }}
              </div>
              <div class="contentlist-editname">
                {{ item.editname }}
              </div>
              <div class="contentlist-lives">
                <span class="live">喜欢</span>
                <span>收藏</span>
              </div>
            </div>
          </div>
        </template>
        <div v-else class="none">沒有搜索到~</div>
      </div>
      </van-pull-refresh>
      <div class="loading" v-show="$root.InputBoxloadings">
        <img
          class="main_img img-hover loading-img"
          data-imgurl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1744558263,856016303&amp;fm=26&amp;gp=0.jpg"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1744558263,856016303&amp;fm=26&amp;gp=0.jpg"
          style="
            background-color: rgb(255, 255, 255);
            width: 231px;
            height: 173px;
          "
        />
      </div>
    </template>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      box: "",
      searchlist: [],
      bool: true,
      contentList: [],
      historylist: JSON.parse(window.localStorage.getItem("historylist")) || [],
      InputBoxcount: 0,
      InputBoxcounts: 0,
      isLoading: false,
    };
  },
  watch: {
    InputBoxcount() {
      if (this.InputBoxcount) {
        this.$root.InputBoxloading = false;
      }
    },
    InputBoxcounts(){
      if (this.InputBoxcounts) {
        this.$root.InputBoxloadings = false;
      }
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.request(this.box);
        this.$root.InputBoxloadings = false;
      }, 1000);
    },
    request(name){
      this.$root.InputBoxloadings = true;
        this.InputBoxcounts = 0;
      clearTimeout(window.timer);
      window.timer = setTimeout(() => {
        this.axios
          .get("/public/searchRecipe.shtml?queryString=" + name)
          .then((response) => {
            console.log(response.data.contentList);
            this.contentList = response.data.contentList;
        this.InputBoxcounts += 1;
          });
      }, 300);
    },
    clear() {
      this.historylist = [];
      window.localStorage.removeItem("historylist");
    },
    PageBoxBools() {
      this.$store.commit("PageBoxBool");
    },
    inputbox(name) {
      this.$root.InputBoxloading = true;
      clearTimeout(window.timer);
      window.timer = setTimeout(() => {
        this.axios
          .get("/public/prompt.shtml?queryString=" + name)
          .then((response) => {
            this.searchlist = response.data.list;
          });
        this.InputBoxcount += 1;
      }, 300);
    },
    search(name) {
      this.request(name);
      var key = name;
      if (key == "") {
        return;
      }
      if (this.historylist.indexOf(name) === -1) {
        this.historylist.unshift(name);
        window.localStorage.setItem(
          "historylist",
          JSON.stringify(this.historylist)
        );
      } else {
        for (var i = 0; i < this.historylist.length; i++) {
          if (this.historylist[i] === key) {
            this.historylist.splice(i, 1);
            this.historylist.unshift(key);
            window.localStorage.setItem(
              "historylist",
              JSON.stringify(this.historylist)
            );
            break;
          }
        }
      }
    },
  },
};
</script>

<style lang="less">
.inputbox {
  padding-top: 40px;
  padding-bottom: 20px;
  .inputbox-box {
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    color: #666;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    .inputbox-icon {
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 9;
    }
    .input {
      position: relative;
      .input-icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
      }
      flex: 1;
      > input {
        height: 100%;
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
        border: none;
        padding-bottom: 3px;
      }
    }
    .cancel {
      line-height: 30px;
      padding-right: 5px;
    }
  }
  .inputboxlist {
    .historylist {
      margin-top: 15px;
      padding: 5px;
      font-size: 14px;
      display: inline-block;
      color: #666;
      background: #dad6d6;
      margin-right: 10px;
      border-radius: 5px;
    }
    .search {
      margin-top: 15px;
      height: 25px;
      display: flex;
      align-items: center;
      .search-icon {
        padding-top: 4px;
      }
      .search-name {
        padding-left: 10px;
        flex: 1;
        color: #666;
        font-size: 15px;
      }
    }
    .eliminate {
      display: flex;
      justify-content: center;
      color: #666;
      margin-top: 20px;
      .eliminate-icon {
        padding-top: 3px;
      }
      .eliminate-name {
        padding-left: 5px;
      }
    }
  }

  .searchlist {
    margin-top: 10px;
    .searchlist-name {
      height: 50px;
      color: #666;
      line-height: 50px;
    }
  }
  .content {
    .contentlist {
      margin-top: 30px;
      display: flex;
      .contentlist-img {
        width: 28vw;
        height: 23vw;
        > img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      .contentlist-names {
        padding-left: 10px;
        flex: 1;
        display: flex;
        flex-direction: column;
        > div {
          flex: 1;
          line-height: calc(23vw / 3);
        }
        .contentlist-name {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #666;
          font-size: 18px;
        }
        .contentlist-editname {
          color: #acacac;
          font-size: 15px;
        }
        .contentlist-lives {
          color: #acacac;
          font-size: 15px;
          .live {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .none {
    width: 100%;
    height: 100%;
    line-height: 80vh;
    text-align: center;
    font-size: 18px;
  }
}
</style>