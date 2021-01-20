<template>
  <div class="kitchenitem">
    <div class="kitchenitem-title">
      {{ item.title }}
    </div>
    <div class="kitchenitem-img">
      <img
        :src="'https://pic.ecook.cn/web/' + item.imageids + '.jpg!wd320'"
        alt=""
      />
    </div>
    <div class="kitchenitem-author">
      来自<span>{{ item.author }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item", "index"],
};
</script>

<style lang="less">
.kitchenitem {
    margin-bottom: 30px;
    .kitchenitem-img{
        height: 65vw;
        >img{
            width: 100%;
            height: 100%;
        }
    }
  .kitchenitem-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }
  .kitchenitem-author{
      margin-top: 5px;
      color: #acacac;
      font-size: 15px;
      >span{
          padding-left: 10px;
      }
  }
}
</style>