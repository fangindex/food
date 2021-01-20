<template>
  <div>
    <div class="loading" v-if="$root.Classifyloading">
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
    <div class="classify" v-else>
      <template v-if="!PageBoxBool">
        <InputBox></InputBox>
      </template>
      <template v-else>
        <ClassifyBox></ClassifyBox>
        <van-pull-refresh
          v-model="isLoading"
          success-text="刷新成功"
          @refresh="onRefresh"
        >
          <div class="classify-ification">
            <Ification
              v-for="(item, index) in list"
              :key="index"
              :item="item"
            ></Ification>
          </div>
        </van-pull-refresh>
      </template>
    </div>
  </div>
</template>

<script>
import ClassifyBox from "@/components/ClassifyBox.vue";
import InputBox from "@/components/InputBox.vue";
import Ification from "@/components/Ification.vue";

export default {
  components: {
    ClassifyBox,
    Ification,
    InputBox,
  },
  data() {
    return {
      list: [],
      Classifycount: 0,
      isLoading:false
    };
  },
  computed: {
    PageBoxBool() {
      return this.$store.state.PageBoxBool;
    },
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.request();
        this.$root.Classifyloading = false;
      }, 1000);
    },
    request() {
      this.$root.Classifyloading = true;
      this.Classifycount = 0;
      this.axios.get("/public/getRecipeHomeData.shtml").then((response) => {
        console.log(response.data.list);
        this.list = response.data.list;
        this.Classifycount += 1;
      });
    },
  },
  created() {
    this.request();
  },
  activated() {
    this.$store.commit("zhen");
    this.$store.commit("boolF");
  },
  watch: {
    Classifycount() {
      if (this.Classifycount) {
        this.$root.Classifyloading = false;
      }
    },
  },
};
</script>

<style lang="less">
.classify {
  .classify-ification {
    margin-top: 60px;
  }
  padding: 0 15px;
  margin-bottom: 11vh;
}
</style>
