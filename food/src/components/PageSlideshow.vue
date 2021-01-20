<template>
  <div class="pageslideshow">
    <div class="slideshow">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerlist" :key="index">
          <img
            :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
            @click="particulars(item)"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="meals">
      <div class="top">
        <div class="breakfast" @click="eat('7136465')">
          <div class="breakfast-name">
            早餐
          </div>
          <div class="breakfast-img">
            <img src="../assets/早餐.png" alt="">
          </div>
        </div>
        <div class="lunch" @click="eat('7136466')">
          <div class="lunch-name">
            午餐
          </div>
          <div class="lunch-img">
            <img src="../assets/午餐.png" alt="">
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="supper" @click="eat('246877422')">
          <div class="supper-name">
            晚餐
          </div>
          <div class="supper-img">
            <img src="../assets/晚餐.png" alt="">
          </div>
        </div>
        <div class="small">
          <div class="recipes" @click="eat('7136526')">
            <span>热门<br />菜谱</span>
          </div>
          <div class="categories" @click="categories">
            <span>全部<br />分类</span>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="top">精选推荐</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["bannerlist"],
  methods: {
    particulars(item) {
      var id = item.url.slice(item.url.indexOf("=") + 1, item.url.length);
      this.$router.push({
        path: "/particulars",
        query: {
          id,
        },
      });
    },
    eat(id) {
      this.$router.push({
        path: "/particulars",
        query: {
          id,
        },
      });
    },
    categories() {
      this.$router.push({
        path: "/classify",
      });
    },
  },
};
</script>

<style lang="less">
.pageslideshow {
  margin-top: 55px;
  width: 100%;
  .slideshow {
    .van-swipe-item {
      text-align: center;
      width: 100%;
      height: 55vw;
      > img {
        margin-top: -20px;
        width: 100%;
      }
    }
  }
  .meals {
    font-size: 4.5vw;

    .top {
      margin: 15px 0;
      display: flex;
      justify-content: space-between;
      > div {
        width: 48%;
        height: 21vw;
      }
      .breakfast {
        position: relative;
        .breakfast-name{
          position: absolute;
          top: 50%;
          left: 15%;
          transform: translateY(-50%);
          color: #666;
        }
        .breakfast-img{
          width: 100%;
          height: 100%;
          >img{
            width: 100%;
          height: 100%;
          }
        }
        // background: #a7d9e0;
      }
      .lunch {
        position: relative;
        .lunch-name{
          position: absolute;
          top: 50%;
          left: 15%;
          transform: translateY(-50%);
          color: #666;
        }
        .lunch-img{
          width: 100%;
          height: 100%;
          >img{
            width: 100%;
          height: 100%;
          }
        }
        // background: #fba5a6;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      > div {
        width: 48%;
        height: 21vw;
      }
      .supper {
        position: relative;
        .supper-name{
          position: absolute;
          top: 50%;
          left: 15%;
          transform: translateY(-50%);
          color: #666;
        }
        .supper-img{
          width: 100%;
          height: 100%;
          >img{
            width: 100%;
          height: 100%;
          }
        }
        // background: #f3ca78;
      }
      .small {
        display: flex;
        justify-content: space-between;
        > div {
          width: 46%;
          height: 21vw;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .recipes {
          background: #f68f6e;
        }
        .categories {
          background: #ccbba7;
        }
      }
    }
  }
  .recommend {
    .top {
      font-size: 18px;
      margin: 10px 0;
    }
  }
}
</style>