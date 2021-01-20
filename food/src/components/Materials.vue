<template>
  <div class="materials">
    <div
      v-for="(item, indexs) in newVegetable"
      :key="indexs"
      class="materialslist"
    >
      <div class="name">
        {{ item.name }}
      </div>
      <div
        class="materialList"
        v-for="(item, index) in item.dosage"
        :key="index"
      >
        <div class="materialList-name">
          {{ newVegetable[indexs].name
          }}<span>({{ newVegetable[indexs].bigName[index] }})</span>
        </div>
        <div class="materialList-dosage">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    newVegetable() {
      return this.$store.state.newVegetable;
    },
  },
};
</script>

<style lang="less">
.materials {
  .materialslist:first-child {
    .name {
      margin-top: 0;
    }
  }
  .name {
    font-size: 17px;
    font-weight: 550;
    padding-left: 10px;
    margin-bottom: 10px;
    margin-top: 25px;
  }
  .materialList {
    display: flex;
    background: #e9e7e7;
    margin-top: 5px;
    color: #666;
    height: 45px;
    font-size: 16px;
    .materialList-name,
    .materialList-dosage {
      line-height: 45px;
    }
    .materialList-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
      text-align: left;
      padding-left: 10px;
      padding-right: 15px;
      > span {
        margin-left: 10px;
      }
    }
    .materialList-dosage {
      text-align: right;
      padding-right: 10px;
    }
  }
}
</style>