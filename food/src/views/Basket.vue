<template>
  <div class="basket">
    <div class="remove">移除成功</div>
    <div class="top">
      <div class="empty" @click="bool = vegetableList.length ? true : false">
        清空
      </div>
    </div>

    <van-tabs
      v-model="active"
      animated
      line-width="95"
      title-active-color="#fdc003"
      color="#fdc003"
      class="switchover"
    >
      <van-tab title="按材料查看">
        <div class="default" v-if="!vegetableList.length">
          <div>经常买完菜回家，才发现忘了买葱？</div>
          <div class="one">
            (把菜谱中的原料放进“菜篮子”里，买菜时就不会漏掉原料了)
          </div>
        </div>
        <Materials
          class="vegetable"
          v-else
        ></Materials>
      </van-tab>
      <van-tab title="按菜品查看">
        <div class="default" v-if="!vegetableList.length">
          <div>经常买完菜回家，才发现忘了买葱？</div>
          <div class="one">
            (把菜谱中的原料放进“菜篮子”里，买菜时就不会漏掉原料了)
          </div>
        </div>
        
          <Cuisine
            class="vegetable"
            :item="item"
            :index="index"
            v-for="(item, index) in vegetableList"
            :key="index"
          ></Cuisine>
      </van-tab>
    </van-tabs>
    <div class="basket-zzc" v-if="bool">
      <div class="small-zzc">
        <div class="zzc-top">
          <div>友情提醒</div>
          <div>确认清空所有菜品吗？</div>
        </div>
        <div class="zzc-bottom" @click="bool = false">
          <div @click="empty">确认</div>
          <div>取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Materials from "@/components/Materials.vue";
import Cuisine from "@/components/Cuisine.vue";
export default {
  components: {
    Materials,
    Cuisine,
  },
  data() {
    return {
      bool: false,
      active: null,
    };
  },
  computed: {
    vegetableList: function () {
      return this.$store.state.vegetableList;
    },
  },
  activated() {
    this.$store.commit("zhen");
  },
  methods: {
    empty() {
      this.$store.commit("empty");
    },
  },
};
</script>
<style lang="less">
.basket {
  padding-bottom: 11vh;
    width: 100vw;
  .remove {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    padding: 10px;
    color: rgb(202, 196, 196);
    border-radius: 10px;
    transition: all 1s;
    opacity: 0;
    z-index: 99;
  }
  .top {
    width: 100vw;
    height: 40px;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 5;
    .empty {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 9;
      background: #fff;
      color: #fdc003;
      font-size: 18px;
      text-align: right;
      padding: 8px 12px 5px 0;
    }
  }
  .basket-zzc {
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
      .zzc-top {
        padding: 0 20px;
        padding-top: 25px;
        text-align: center;
        height: 100px;
        > div:first-child {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .zzc-bottom {
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
  .switchover {
    .van-tabs__nav--line {
      position: fixed;
      width: 100vw;
      height: 45px;
      margin-top: 30px;
      background: #fff;
      z-index: 8;
    }
    .van-tab__text {
      font-size: 18px;
    }

    .van-tab__pane {
      margin-top: 40px;
      width: 100vw;
      padding: 15px 10px 20px;
    }
    .default {
      width: 100vw;
      margin-top: 20vh;
      > div {
        text-align: center;
        padding: 0 15px;
      }
      .one {
        color: #888;
        font-size: 14px;
      }
    }
  }
}
</style>
