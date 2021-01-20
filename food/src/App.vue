<template>
  <div id="app">
    <div>
      <HomeNav></HomeNav>
    </div>
    <transition :name="names">
      <keep-alive>
        <router-view  class="nss"/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import HomeNav from "@/components/HomeNav.vue";
export default {
  components: {
    HomeNav,
  },
  data() {
    return {
      names: "",
      id:null,
    };
  },
  watch: {
    $route(to, from) {
      if(to.meta.index === 0 && from.meta.index === 0){
        this.names = "";
        return
      }
      
      else if (to.meta.index < from.meta.index) {
        this.names = "right";
      } else {
        this.names = "left";
      }
    },
  },
};
</script>
<style lang="less">
.loading {
  height: 100vh;
  line-height: 100vh;
  text-align: center;
}
.nss{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0);
}

.left-enter-active {
  transition: .5s;
}
.left-leave {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(-100%);
}
.left-leave-active {
  transition: .5s;
}
.right-enter {
  transform: translateX(-100%);
}
.right-enter-active {
  transition: .5s;
}
.right-leave-to {
  transform: translateX(100%);
}
.right-leave-active {
  transition: .5s;
}
.van-toast__text{
  font-size: 16px;
}
</style>
