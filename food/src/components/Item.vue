<template>

  <div class="box">
    <div class="big-img" @click="details(item)">
      <div class="zzc"></div>
      <div class="praise-collect">
        <div>
          <svg
            t="1609321580499"
            class="icon praise-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="6813"
            width="20"
            height="20"
          >
            <path
              d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253"
              fill="#ffffff"
              p-id="6814"
            ></path>
            <path
              d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
              fill="#ffffff"
              p-id="6815"
            ></path>
          </svg>
        </div>
        <div>{{ item.commentCount }}</div>
        <div>
          <svg
            t="1609321725576"
            class="icon collect-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7652"
            width="20"
            height="20"
          >
            <path
              d="M752.961492 942.423053c-9.69071 0-20.996197-3.229554-30.685883-8.074909l-209.966059-104.980983-211.57572 104.980983c-20.996197 11.304464-48.452525 9.689686-67.833944-4.846378-19.380396-14.544251-30.686906-40.386826-25.841552-64.602344l43.607171-226.110761L84.313779 483.733213c-17.765619-17.770735-24.225751-45.221948-17.765619-67.833945 8.075933-24.228821 27.456329-41.992393 53.29788-45.221947l230.956116-41.992393L454.167339 118.725008c11.310603-22.610974 33.921577-37.149085 58.143234-37.149084 24.226774 0 48.457642 14.538111 58.148352 37.149084l103.365182 209.95992 230.956116 40.379662c24.225751 3.230578 45.221948 20.999266 51.68208 45.225018 8.075933 24.225751 1.6158 50.067302-16.149819 67.833944L773.958712 638.788661l41.99137 226.110761c4.845355 25.840528-6.460132 50.068326-25.841552 64.602344-9.689686 8.076956-22.60995 12.921287-37.147038 12.921287z"
              p-id="7653"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <div>{{ item.collectCount }}</div>
      </div>
      <img
        :src="'https://pic.ecook.cn/web/' + item.imageid + '.jpg!wd320'"
        alt=""
      />
    </div>
    <div class="name">{{ item.name }}</div>
    <div class="small-img">
      <img
        :src="'https://pic.ecook.cn/web/' + item.authorimageid + '.jpg!wd320'"
        alt=""
      />
    </div>
    <div class="authorname">{{ item.authorname }}</div>
    <div class="text">{{ item.description }}</div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
  methods: {
    details(item) {
      var id = item.id;
      this.$store.commit("somebody", item.commentCount);
      this.$store.commit("collect", item.collectCount);
      this.$router.push({
        path: "/details",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="less">
.box {
  margin-bottom: 30px;
  .big-img {
    height: 55vw;

    position: relative;
    width: 100%;
    .zzc {
      box-shadow: 0px -55px 20px -20px rgba(0, 0, 0, 0.3) inset;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .praise-collect {
      position: absolute;
      bottom: 5px;
      right: 10px;
      display: flex;
      color: #fff;
      > div {
        flex: 1;
        line-height: 24px;
        .collect-icon {
          margin-left: 15px;
        }
        .collect-icon,
        .praise-icon {
          margin-right: 5px;
        }
      }
    }
    > img {
      width: 100%;
      height: 55vw;
    }
  }
  .name {
    font-size: 18px;
    text-align: center;
    color: #666;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
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
    color: #939393;
  }
  .text {
    text-align: center;
    padding: 0 20px;
    margin-top: 10px;
    color: #7b7b7b;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>