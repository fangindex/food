<template>
  <div>
    <div class="loading" v-if="$root.Pageloading">
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
    <div class="page" v-else>
      <template v-if="!PageBoxBool">
        <InputBox></InputBox>
      </template>
      <template v-else>
        <PageBox></PageBox>
        <van-pull-refresh
          v-model="isLoading"
          success-text="刷新成功"
          @refresh="onRefresh"
        >
          <PageSlideshow :bannerlist="bannerlist"></PageSlideshow>
          <div class="bigBox">
            <Item
              v-for="(item, index) in excellentRecipe"
              :key="index"
              :item="item"
              :index="index"
            ></Item>
          </div>
          <div class="sand">我是有底线的</div>
        </van-pull-refresh>
      </template>
    </div>
  </div>
</template>

<script>
import PageBox from "@/components/PageBox.vue";
import InputBox from "@/components/InputBox.vue";
import PageSlideshow from "@/components/PageSlideshow.vue";
import Item from "@/components/Item.vue";

export default {
  components: {
    PageBox,
    PageSlideshow,
    Item,
    InputBox,
  },
  data() {
    return {
      bannerlist: [],
      excellentRecipe: [],
      Pagecount: 0,
      isLoading: false,
    };
  },
  computed: {
    PageBoxBool() {
      return this.$store.state.PageBoxBool;
    },
  },

  activated() {
    this.$store.commit("zhen");
  },
  created() {
    this.request();
  },
  watch: {
    Pagecount() {
      if (this.Pagecount === 2) {
        this.$root.Pageloading = false;
      }
    },
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.request();
        this.$root.Pageloading = false;
      }, 1000);
    },
    request() {
      this.$root.Pageloading = true;
      this.Pagecount = 0;
      this.axios.get("/public/getSecondaryHomeData.shtml").then((response) => {
        console.log(response.data.data.bannerlist);
        this.bannerlist = response.data.data.bannerlist;
        this.Pagecount += 1;
      });
      this.axios
        .get("/public/getSecondaryHomeData.shtml?app=common")
        .then((response) => {
          console.log(response.data.data.excellentRecipe);
          var arr = response.data.data.excellentRecipe;
          for (var k in arr) {
            var a = {};
            a.commentCount = arr[k].infos.likeCount;
            a.collectCount = arr[k].infos.collectionCount;
            a.imageid = arr[k].imageid;
            a.name = arr[k].name;
            a.authorname = arr[k].user.nickname;
            a.description = arr[k].description;
            a.id = arr[k].id;
            a.authorimageid = arr[k].user.imageid;
            this.excellentRecipe.push(a);
          }
          console.log(this.excellentRecipe);
          this.Pagecount += 1;
        });
    },
  },
};
</script>

<style lang="less">
.page {
  padding: 0 15px;
  .sand {
    text-align: center;
    font-size: 18px;
    color: #939393;
    margin-top: 50px;
    margin-bottom: 15vh;
  }
  .bigBox {
    .box:nth-child(1) {
      margin-top: 10px;
    }
  }
}
</style>