<template>
  <div class="Ification" >
    <div class="hot">{{item.name}}</div>
    <ul>
      <li v-for="(item,index) in item.list" :key="index" @click="skip(item.id)">
        <img :src="'https://pic.ecook.cn/web/'+item.imageid+'.jpg!wd320'" alt="">
        <div class="annotation">{{item.name}}</div>
        </li>
    </ul>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  props:["item"],
  methods:{
    skip(id){
      this.$router.push({
        path:"/particulars",
        query:{
          id,
        }
      })
    }
  },
}
</script>

<style lang="less">
.Ification{
  margin-top: 20px;
  .hot{
    text-align: center;
    font-size: 4vw;
    color: #666;
  }
  >ul{
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    >li:nth-of-type(4n+1){
      margin-left: 0;
    }
    >li{
      position: relative;
      margin: 10px 0;
      margin-left: 10px;
      width: calc((100% - 30px)/4);
      >img{
        width: 100%;
      }
      .annotation{
      background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(0,0,0,0.3) 30%,rgba(0,0,0,0.6) 60%,rgba(0,0,0,0.7) 100%);
        padding-bottom: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        width: 100%;
        color: #f4f5f0;
        font-size: 4vw;
      }
    }
  }
  .bottom{
    background: #f7f7f7;
    height: 8px;
    width: 100vw;
    margin-left: -15px;
  }
}
</style>