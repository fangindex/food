<template>
  <div>
    <div class="loading" v-show="$root.Particularsloading">
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
    <transition>
      <div
        class="particulars"
        v-if="particularsList"
        v-show="!$root.Particularsloading"
      >
        <div class="top">
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
          {{ particularsList.name }}
        </div>
        <van-pull-refresh
          v-model="isLoading"
          success-text="刷新成功"
          @refresh="onRefresh"
        >
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell
              v-for="(item, index) in particularsList.list"
              :key="index"
            >
              <Item :key="index" :item="item" :index="index"></Item>
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </div>
    </transition>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      particularsList: [],
      Particularscount: 0,
      isLoading: false,
      count: 0,
      loading: false,
      finished: false,
      loadingbool: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        let name = this.$route.query.id;
        this.axios
          .get(
            "/public/getContentsBySubClassid.shtml?id=" +
              name +
              "&page=" +
              this.count
          )
          .then((response) => {
            let arr = response.data.list;
            if (this.loadingbool) {
              for (var i in arr) {
                this.particularsList.list.push(arr[i]);
              }
            }
            this.count += 1;
            this.loadingbool += 1;
            this.loading = false;
            if (this.particularsList.list.length >= 40) {
              this.finished = true;
              this.$store.commit("boolT");
              this.count = 0;
              this.loadingbool = 0;
            }
          });
      }, 1000);
    },
    random() {
      let num = Math.floor(Math.random() * 10);
      if (this.count === num) {
        return this.random(num);
      } else {
        return (this.count = num);
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.random();
        this.request();
        this.$root.Particularsloading = false;
      }, 1000);
    },
    request() {
      (this.particularsList = []), (this.Particularscount = 0);
      this.$root.Particularsloading = true;
      var name = this.$route.query.id;
      this.axios
        .get(
          "/public/getContentsBySubClassid.shtml?id=" +
            name +
            "&page=" +
            this.count
        )
        .then((response) => {
          this.particularsList = response.data;
          this.Particularscount += 1;
          this.finished = false;
        });
    },
  },
  activated() {
    this.$store.commit("jia");
    if (!this.loadingBool) {
      this.count = 0;
      this.request();
    }
  },
  computed: {
    loadingBool() {
      return this.$store.state.loadingBool;
    },
  },
  watch: {
    Particularscount() {
      if (this.Particularscount) {
        this.$root.Particularsloading = false;
      }
    },
  },
};
</script>

<style lang="less">
.particulars {
  margin-bottom: 20px;
  padding: 0 15px;
  padding-top: 50px;
  background: #fff;
  .top {
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
  .van-cell {
    padding: 0;
  }
}
</style>