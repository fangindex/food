<template>
  <div class="classifybox">
    <div class="box">
      <svg
        t="1609229793622"
        class="icon box-icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2503"
        width="20"
        height="20"
      >
        <path
          d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
          p-id="2504"
          fill="#adadad"
        ></path>
      </svg>
      <input type="text" placeholder="搜索菜谱" @focus="PageBoxBool" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    PageBoxBool() {
      this.$store.commit("PageBoxBool");
    },
  },
};
</script>

<style lang="less">
.classifybox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9;
  .box {
    padding: 0 20px;
    width: 100vw;
    text-align: center;
    background: #fff;
    position: relative;
    .box-icon {
      position: absolute;
      top: 50%;
      left: 28px;
      transform: translateY(-50%);
    }
    input {
      padding-left: 35px;
      margin: 10px 0;
      width: 100%;
      outline: none;
      border: none;
      background: #f6f6f6;
      color: #adadad;
      font-size: 14px;
      border-radius: 20px;
      height: 30px;
    }
  }
}
</style>