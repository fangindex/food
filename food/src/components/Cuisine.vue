<template>
  <div class="cuisine">
    <div class="each">
      <div class="cuisine-top">
        <div class="img" @click="details(item.id)">
          <img
            :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
            alt=""
          />
        </div>
        <div class="name" @click="details(item.id)">
          {{ item.name }}
        </div>
        <div class="move" @click="vegetableListT(item)">移...个菜</div>
      </div>
      <div class="cuisine-bottom">
        <div
          class="materialList"
          v-for="(item, index) in item.materialList"
          :key="index"
        >
          <div class="materialList-name">
            {{ item.name }}
          </div>
          <div class="materialList-dosage">
            {{ item.dosage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  methods: {
    details(id) {
      this.$router.push({
        path: "/details",
        query: {
          id,
        },
      });
    },
    vegetableListT(vegetable) {
      this.$store.commit("vegetableListT", vegetable);
      clearTimeout(window.timer);
      let rem = document.querySelector(".remove");
      rem.style.opacity = "1";
      window.timer = setTimeout(() => {
        rem.style.opacity = "0";
      }, 1000);
    },
  },
};
</script>

<style lang="less">
.cuisine {
  margin-bottom: 40px;
  .each {
    width: 100%;
    .cuisine-top {
      display: flex;
      margin-bottom: 15px;
      .img {
        > img {
          width: 14vw;
          height: 14vw;
        }
      }
      .name {
        flex: 1;
        margin-left: 10px;
        font-size: 18px;
        height: 14vw;
        line-height: 14vw;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 10px;
      }
      .move {
        color: rgb(253, 192, 3);
        height: 14vw;
        line-height: 14vw;
      }
    }
    .cuisine-bottom {
      .materialList {
        display: flex;
        background: #e9e7e7;
        margin-top: 10px;
        color: #666;
        height: 40px;
        font-size: 16px;
        > div {
          flex: 1;
          line-height: 40px;
        }
        .materialList-name {
          text-align: left;
          padding-left: 10px;
        }
        .materialList-dosage {
          text-align: right;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>