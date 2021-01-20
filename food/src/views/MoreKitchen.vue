<template>
  <div>
    <div class="loading" v-show="$root.MoreKitchenloading">
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
    <div class="morekitchen" v-show="!$root.MoreKitchenloading">
      <div class="morekitchen-top">
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
        厨房故事
      </div>
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <div>
          <KitchenItem
            v-for="(item, index) in getArticleList"
            :key="index"
            :item="item"
            :index="index"
          ></KitchenItem>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import KitchenItem from "@/components/KitchenItem.vue";
export default {
  components: {
    KitchenItem,
  },
  data() {
    return {
      getArticleList: [],
      MoreKitchencount: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.request();
        this.$root.MoreKitchenloading = false;
      }, 1000);
    },
    request() {
      this.$root.MoreKitchenloading = true;
      this.MoreKitchencount = 0;
      this.axios.get("/public/getArticleList.shtml").then((response) => {
        console.log(response.data.list);
        this.getArticleList = response.data.list;
        this.MoreKitchencount += 1;
      });
    },
  },
  created() {
    this.request();
  },
  activated() {
    this.$store.commit("jia");
  },
  deactivated() {
    this.$store.commit("zhen");
  },
  watch: {
    MoreKitchencount() {
      if (this.MoreKitchencount) {
        this.$root.MoreKitchenloading = false;
      }
    },
  },
};
</script>

<style lang="less">
.morekitchen {
  padding: 0 15px;
  padding-top: 50px;
  .morekitchen-top {
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
}
</style>