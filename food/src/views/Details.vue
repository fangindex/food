<template>
  <div>
    <div class="loading" v-show="$root.Detailsloading">
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
    <div class="details" v-if="detailsList" v-show="!$root.Detailsloading">
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
        菜谱详情

        <div class="collect">
          <div
            @click="
              bool = !bool;
              collectes(detailsList);
            "
          >
            <svg
              v-if="bool"
              t="1609327816366"
              class="icon"
              viewBox="0 0 1026 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4285"
              width="30"
              height="30"
            >
              <path
                d="M694.272 860.16c-8.192 0-14.336-2.048-22.528-6.144l-163.84-90.112-163.84 90.112c-16.384 8.192-34.816 8.192-51.2-4.096-14.336-12.288-22.528-30.72-18.432-49.152l30.72-190.464-133.12-135.168c-12.288-14.336-18.432-32.768-12.288-51.2 6.144-18.432 20.48-30.72 38.912-34.816l182.272-28.672 81.92-172.032C475.136 174.08 491.52 163.84 509.952 163.84c18.432 0 34.816 10.24 43.008 28.672l73.728 155.648c6.144 10.24 0 24.576-10.24 30.72-10.24 6.144-24.576 0-28.672-10.24L512 210.944c0-2.048-2.048-2.048-4.096-2.048s-4.096 0-4.096 2.048l-86.016 184.32c-4.096 6.144-10.24 12.288-16.384 12.288l-194.56 28.672c-2.048 0-2.048 2.048-4.096 4.096s0 4.096 2.048 4.096l139.264 143.36c4.096 6.144 8.192 12.288 6.144 20.48l-32.768 200.704c0 2.048 0 4.096 2.048 4.096 2.048 2.048 2.048 2.048 4.096 0l174.08-94.208c6.144-4.096 14.336-4.096 20.48 0l174.08 94.208h4.096c2.048-2.048 2.048-2.048 2.048-4.096l-32.768-200.704c-2.048-8.192 2.048-14.336 6.144-20.48l139.264-143.36c2.048-2.048 2.048-2.048 2.048-4.096s-2.048-2.048-4.096-4.096l-131.072-20.48c-12.288-2.048-20.48-14.336-18.432-26.624s12.288-20.48 24.576-18.432l131.072 20.48c18.432 2.048 32.768 16.384 38.912 34.816 6.144 18.432 0 38.912-12.288 51.2l-133.12 135.168 30.72 190.464c4.096 18.432-4.096 36.864-18.432 49.152-6.144 4.096-16.384 8.192-26.624 8.192z"
                p-id="4286"
                fill="#666666"
              ></path>
            </svg>
            <svg
              v-else
              t="1609328887042"
              class="icon collect-icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6327"
              width="20"
              height="20"
            >
              <path
                d="M773.458 1005.43c-14.403 0-30.597-4.132-45.599-11.638L513.567 886.61 297.948 993.618c-13.655 7.27-29.286 11.09-45.225 11.09a96.164 96.164 0 0 1-57.549-18.842c-30.177-22.646-45.64-61.85-38.502-97.566l44.099-228.777L31.744 501.996a104.059 104.059 0 0 1-26.281-100.66l0.338-1.162c12.288-36.828 42.772-62.633 79.734-67.584l234.839-42.7L425.779 75.811c16.932-33.895 51.37-55.675 87.788-55.675 37.99 0 73.318 22.6 88.13 56.29l105.068 213.4L941.64 330.89a95.672 95.672 0 0 1 78.264 68.373 98.97 98.97 0 0 1-24.474 101.002l-0.578 0.579-168.55 158.72L868.9 888.75c6.86 36.644-7.716 73.677-38.062 96.748a90.455 90.455 0 0 1-57.38 19.932z"
                p-id="6328"
                fill="#fdc003"
              ></path>
            </svg>
          </div>
          <div
            @click="
              bool = !bool;
              collectes(detailsList);
            "
            class="enshrine"
            :style="!bool ? { color: 'rgb(253, 192, 3)' } : { color: '#666' }"
          >
            收藏
          </div>
          <div
            @click="
              bools = !bools;
              vegetable(detailsList);
            "
          >
            <svg
              v-if="bools"
              t="1609328135240"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5156"
              width="25"
              height="25"
            >
              <path
                d="M166.990769 921.6c-10.502564 0-18.904615-7.351795-21.005128-17.854359L84.020513 507.273846c-1.050256-6.301538 1.050256-12.077949 4.726154-16.804102 4.201026-4.726154 9.977436-7.351795 15.753846-7.351795H918.974359c6.301538 0 12.077949 2.625641 15.753846 7.351795 4.201026 4.726154 5.77641 11.027692 4.726154 16.804102L875.388718 897.969231c-1.575385 9.977436-10.502564 17.329231-20.48 17.329231l-687.917949 6.301538z m687.917949-27.306667zM129.181538 525.128205l55.138462 354.461539 652.209231-5.776411 57.238974-348.685128H129.181538z"
                fill="#666666"
                p-id="5157"
              ></path>
              <path
                d="M903.220513 525.128205H120.779487C56.188718 525.128205 3.150769 472.090256 3.150769 406.974359v-6.301538c0-65.115897 53.037949-118.153846 118.153846-118.153847H903.220513c65.115897 0 118.153846 53.037949 118.153846 118.153847v6.301538c-0.525128 65.115897-53.563077 118.153846-118.153846 118.153846zM120.779487 324.529231c-42.010256 0-76.14359 34.133333-76.14359 76.14359v6.301538C44.635897 448.984615 78.769231 483.117949 120.779487 483.117949h782.441026c42.010256 0 76.14359-34.133333 76.14359-76.14359v-6.301538c0-42.010256-34.133333-76.14359-76.14359-76.14359H120.779487zM524.077949 723.101538c-224.754872 0-392.270769-35.18359-394.896411-35.708717-11.552821-2.625641-18.379487-13.653333-16.278974-25.206154 2.625641-11.552821 13.653333-18.379487 25.206154-16.278975 3.675897 0.525128 371.790769 78.244103 747.257436 0 11.552821-2.625641 22.580513 4.726154 24.681025 16.278975s-4.726154 22.580513-16.278974 24.681025c-128.65641 27.306667-256.787692 36.233846-369.690256 36.233846z"
                fill="#666666"
                p-id="5158"
              ></path>
              <path
                d="M310.350769 504.123077h42.010257v372.315897h-42.010257zM619.651282 504.123077h42.010256v372.315897h-42.010256zM775.089231 296.172308c-11.552821 0-21.005128-9.452308-21.005128-21.005129 0-70.892308-110.802051-130.756923-242.609231-130.756923S268.865641 204.274872 268.865641 275.167179c0 11.552821-9.452308 21.005128-21.005128 21.005129s-21.005128-9.452308-21.005128-21.005129C226.855385 178.54359 351.835897 102.4 511.474872 102.4c159.638974 0 284.619487 76.14359 284.619487 172.767179 0 11.552821-9.452308 21.005128-21.005128 21.005129z"
                fill="#666666"
                p-id="5159"
              ></path>
            </svg>
            <svg
              v-else
              t="1609328135240"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5156"
              width="25"
              height="25"
            >
              <path
                d="M166.990769 921.6c-10.502564 0-18.904615-7.351795-21.005128-17.854359L84.020513 507.273846c-1.050256-6.301538 1.050256-12.077949 4.726154-16.804102 4.201026-4.726154 9.977436-7.351795 15.753846-7.351795H918.974359c6.301538 0 12.077949 2.625641 15.753846 7.351795 4.201026 4.726154 5.77641 11.027692 4.726154 16.804102L875.388718 897.969231c-1.575385 9.977436-10.502564 17.329231-20.48 17.329231l-687.917949 6.301538z m687.917949-27.306667zM129.181538 525.128205l55.138462 354.461539 652.209231-5.776411 57.238974-348.685128H129.181538z"
                fill="#fdc003"
                p-id="5157"
              ></path>
              <path
                d="M903.220513 525.128205H120.779487C56.188718 525.128205 3.150769 472.090256 3.150769 406.974359v-6.301538c0-65.115897 53.037949-118.153846 118.153846-118.153847H903.220513c65.115897 0 118.153846 53.037949 118.153846 118.153847v6.301538c-0.525128 65.115897-53.563077 118.153846-118.153846 118.153846zM120.779487 324.529231c-42.010256 0-76.14359 34.133333-76.14359 76.14359v6.301538C44.635897 448.984615 78.769231 483.117949 120.779487 483.117949h782.441026c42.010256 0 76.14359-34.133333 76.14359-76.14359v-6.301538c0-42.010256-34.133333-76.14359-76.14359-76.14359H120.779487zM524.077949 723.101538c-224.754872 0-392.270769-35.18359-394.896411-35.708717-11.552821-2.625641-18.379487-13.653333-16.278974-25.206154 2.625641-11.552821 13.653333-18.379487 25.206154-16.278975 3.675897 0.525128 371.790769 78.244103 747.257436 0 11.552821-2.625641 22.580513 4.726154 24.681025 16.278975s-4.726154 22.580513-16.278974 24.681025c-128.65641 27.306667-256.787692 36.233846-369.690256 36.233846z"
                fill="#fdc003"
                p-id="5158"
              ></path>
              <path
                d="M310.350769 504.123077h42.010257v372.315897h-42.010257zM619.651282 504.123077h42.010256v372.315897h-42.010256zM775.089231 296.172308c-11.552821 0-21.005128-9.452308-21.005128-21.005129 0-70.892308-110.802051-130.756923-242.609231-130.756923S268.865641 204.274872 268.865641 275.167179c0 11.552821-9.452308 21.005128-21.005128 21.005129s-21.005128-9.452308-21.005128-21.005129C226.855385 178.54359 351.835897 102.4 511.474872 102.4c159.638974 0 284.619487 76.14359 284.619487 172.767179 0 11.552821-9.452308 21.005128-21.005128 21.005129z"
                fill="#fdc003"
                p-id="5159"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="big-img">
        <img
          :src="
            'https://pic.ecook.cn/web/' + detailsList.imageid + '.jpg!wd320'
          "
          alt=""
        />
      </div>
      <div class="name">{{ detailsList.name }}</div>
      <div class="somebody">
        已有{{ somebody }}人点赞 已有{{ collect }}人收藏
      </div>
      <div class="small-img">
        <img
          :src="
            'https://pic.ecook.cn/web/' +
            detailsList.authorimageid +
            '.jpg!wd320'
          "
          alt=""
        />
      </div>
      <div class="authorname">{{ detailsList.authorname }}</div>
      <div class="text">{{ detailsList.description }}</div>
      <div class="need">
        <div class="need-text">-需要材料-</div>
        <div
          v-for="(item, index) in detailsList.materialList"
          :key="index"
          class="materials"
          v-show="item.name"
        >
          <div class="materials-top">{{ item.name }}</div>
          <div class="materials-bottom">{{ item.dosage }}</div>
        </div>
      </div>
      <div class="step">
        <div class="step-text">-烹饪步骤-</div>
        <div
          class="step-img"
          v-for="(item, index) in detailsList.stepList"
          :key="index"
        >
          <div class="img-num">{{ index + 1 }}</div>
          <div class="img">
            <img
              :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
              alt=""
            />
          </div>
          <div class="img-text">{{ item.details }}</div>
        </div>
      </div>
      <div class="relatedList">
        <div class="relatedList-text">-菜谱相关-</div>
        <div
          class="relatedList-list"
          @click="relatedList(item)"
          v-for="(item, index) in getRecipeRelatedList"
          :key="index"
        >
          <div class="img">
            <img
              :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
              alt=""
            />
          </div>
          <div class="list-texts">
            <div class="list-name">{{ item.title }}</div>
            <div class="list-text">{{ item.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      detailsList: null,
      getRecipeRelatedList: [],
      bools: true,
      bool: true,
      id: null,
      newBool: [],
      greensBool: [],
      collects: [],
      Detailscount: 0,
    };
  },
  computed: {
    ...mapState(["somebody", "collect", "vegetableList", "collectList"]),
  },
  created() {
    this.conversion();
    this.$store.commit("jia");
    console.log(789);
  },
  activated() {
    this.$store.commit("jia");
  },
  watch: {
    $route() {
      if (this.$route.meta.isBool) {
        this.id = this.$route.query.id;
        this.conversion();
        // this.$store.commit("recordList", this.detailsList);
      }
    },
    Detailscount() {
      if (this.Detailscount === 2) {
        this.$root.Detailsloading = false;
      }
    },
  },
  methods: {
    relatedList(item) {
      this.id = item.url.slice(item.url.indexOf("=") + 1, item.url.length);
      console.log("..");
      this.$router.push({
        path: "/details",
        query: {
          id: this.id,
        },
      });
    },
    vegetable(vegetable) {
      if (!this.bools) {
        this.$store.commit("vegetableListF", vegetable);
      } else {
        this.$store.commit("vegetableListT", vegetable);
      }
    },
    collectes(collectes) {
      if (!this.bool) {
        let collecting = collectes;

        collecting.somebody = this.somebody;
        collecting.collect = this.collect;

        this.$store.commit("collectListF", collecting);
      } else {
        this.$store.commit("collectListT", collectes);
      }
    },
    conversion() {
      this.Detailscount = 0;
      this.$root.Detailsloading = true;
      var name = this.$route.query.id;
      this.axios
        .get("/public/getRecipeListByIds.shtml?ids=" + name)
        .then((response) => {
          console.log(response);
          this.detailsList = response.data.list[0];
          console.log(this.$route);
          // this.particularsList = response.data;
          this.$store.commit("recordList", this.detailsList);
          if (this.vegetableList.find((item) => item.id === name)) {
            this.bools = false;
          } else {
            this.bools = true;
          }

          if (this.collectList.find((item) => item.id === name)) {
            this.bool = false;
          } else {
            this.bool = true;
          }
          this.Detailscount += 1;
        });
      this.axios
        .get("/public/getRecipeRelatedList.shtml?id=" + name)
        .then((response) => {
          console.log(response.data.list);
          this.getRecipeRelatedList = response.data.list;
          // this.particularsList = response.data;
          this.Detailscount += 1;
        });
    },
  },
};
</script>

<style lang="less">
.details {
  width: 100%;
  padding-top: 50px;
  position: relative;
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
    .collect {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      height: 50px;
      > div {
        font-size: 15px;
        color: #666;
        float: left;
        line-height: 50px;
        .icon {
          vertical-align: middle;
        }
        .collect-icon {
          margin-right: 5px;
        }
      }
      .enshrine {
        padding-top: 2px;
        margin-right: 16px;
      }
    }
  }
  .big-img {
    width: 100vw;
    height: 65vw;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    margin: 10px;
    font-size: 20px;
    color: #666;
    text-align: center;
  }
  .somebody {
    font-size: 18px;
    color: #acacac;
    text-align: center;
    margin-bottom: 15px;
  }
  .small-img {
    text-align: center;
    > img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }
  }
  .authorname {
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  .text {
    padding: 0 20px;
    margin-top: 10px;
    color: #7b7b7b;
    text-align: center;
  }
  .need {
    margin-top: 30px;
    width: 100%;
    padding: 0 15px;

    .need-text {
      text-align: center;
      width: 100%;
      font-size: 20px;
      color: #666;
      margin-bottom: 10px;
    }
    .materials {
      display: flex;
      width: 100%;
      height: 35px;
      font-size: 16px;
      line-height: 35px;
      padding-left: 5px;
      .materials-top {
        flex: 1;
        color: #666;
      }
      .materials-bottom {
        flex: 0.7;
        color: #7f7f7f;
      }
    }
    .materials:nth-of-type(2n) {
      background: #e9e7e7;
    }
  }
  .step {
    margin-top: 30px;
    width: 100%;
    .step-text {
      text-align: center;
      text-align: center;
      width: 100%;
      font-size: 20px;
      color: #666;
      margin-bottom: 10px;
    }
    .step-img {
      width: 100%;
      padding: 0 30px;
      position: relative;
      .img {
        width: 100%;
        > img {
          width: 100%;
          height: 60vw;
        }
      }
      .img-num {
        position: absolute;
        top: 0;
        left: 0px;
        font-size: 22px;
        padding-left: 2px;
      }
      .img-text {
        color: #666;
        font-size: 18px;
        margin: 10px 0;
      }
    }
  }
  .relatedList {
    margin-top: 30px;
    width: 100%;
    .relatedList-text {
      text-align: center;
      text-align: center;
      width: 100%;
      font-size: 20px;
      color: #666;
      margin-bottom: 10px;
    }
    .relatedList-list {
      padding: 0 15px;
      display: flex;
      margin: 15px 0;
      .img {
        > img {
          border-radius: 10px;
          width: 65px;
          height: 60px;
        }
      }
      .list-texts {
        flex: 1;
        margin-left: 20px;
        .list-name {
          font-size: 16px;
          color: #444;
          margin: 6px 0;
        }
        .list-text {
          font-size: 14px;
          color: #7b7b7b;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>