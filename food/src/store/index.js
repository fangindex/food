import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bool: true,
    somebody: null,
    collect: null,
    isLoading: false,
    loadingBool:false,
    land:JSON.parse(window.localStorage.getItem('land')) || null,
    registerlist:JSON.parse(window.localStorage.getItem('registerlist')) || [],
    newVegetable: JSON.parse(window.localStorage.getItem('newVegetable')) || [],

    vegetableList: JSON.parse(window.localStorage.getItem('vegetableList')) || [],
    collectList: JSON.parse(window.localStorage.getItem('collectList')) || [],
    PageBoxBool: true,
    recordList: JSON.parse(window.localStorage.getItem('recordList')) || [],
  },
  mutations: {
    registerlistT:function(state,obj){
      state.registerlist.push(obj);
      window.localStorage.setItem('registerlist', JSON.stringify(state.registerlist));
    },
    landing:function(state,obj){
      state.land = obj;
      window.localStorage.setItem('land', JSON.stringify(state.land));

    },
    lands:function(state){
      state.land = null;
      window.localStorage.removeItem('land');
    },
    boolT:function(state){
      state.loadingBool = true;
    },
    boolF:function(state){
      state.loadingBool = false;
    },
    zhen: function (state) {
      state.bool = true
    },
    jia: function (state) {
      state.bool = false
    },
    somebody: function (state, somebody) {
      state.somebody = somebody
    },
    collect: function (state, collect) {
      state.collect = collect;
    },
    vegetableListF: function (state, vegetable) {

      for (let i in vegetable.materialList) {
        let index = state.newVegetable.findIndex(item => item.name === vegetable.materialList[i].name);
        console.log(index)
        if (index !== -1) {
          state.newVegetable[index].dosage.unshift(vegetable.materialList[i].dosage);
          state.newVegetable[index].bigName.unshift(vegetable.name);
          state.newVegetable[index].id.unshift(vegetable.id);
        }
        else {
          let obj = {};
          obj.dosage = [vegetable.materialList[i].dosage];
          obj.bigName = [vegetable.name];
          obj.name = vegetable.materialList[i].name;
          obj.id = [vegetable.id];
          state.newVegetable.unshift(obj);
        }
      }
      state.vegetableList.unshift(vegetable);
      window.localStorage.setItem('vegetableList', JSON.stringify(state.vegetableList));
      window.localStorage.setItem('newVegetable', JSON.stringify(state.newVegetable));
    },
    vegetableListT: function (state, vegetable) {
      for (let i in state.newVegetable) {
        let index = state.newVegetable[i].id.indexOf(vegetable.id);
        if (index !== -1) {
          state.newVegetable[i].bigName.splice(index, 1);
          state.newVegetable[i].dosage.splice(index, 1);
          state.newVegetable[i].id.splice(index, 1);
        }
        // if (!state.newVegetable[i].bigName.length) {
        //   state.newVegetable.splice(i, 1);
        // }
      }
      state.newVegetable = state.newVegetable.filter(item=>item.bigName.length !== 0);
      let id = vegetable.id;
      state.vegetableList = state.vegetableList.filter(item => item.id != id)
      window.localStorage.setItem('newVegetable', JSON.stringify(state.newVegetable));
      window.localStorage.setItem('vegetableList', JSON.stringify(state.vegetableList))
    },
    collectListF: function (state, collect) {
      state.collectList.unshift(collect)
      window.localStorage.setItem('collectList', JSON.stringify(state.collectList))
    },
    collectListT: function (state, collect) {
      let id = collect.id;
      state.collectList = state.collectList.filter(item => item.id != id)
      window.localStorage.setItem('collectList', JSON.stringify(state.collectList))
    },
    empty: function (state) {
      state.vegetableList = [];
      state.newVegetable = [];
      window.localStorage.removeItem('vegetableList');
      window.localStorage.removeItem('newVegetable');
    },
    // emptys: function (state) {
    //   state.collectList = [];
    //   window.localStorage.removeItem('collectList');
    // },
    PageBoxBool: function (state) {
      state.PageBoxBool = !state.PageBoxBool;
    },
    recordList: function (state, obj) {
      // let record = JSON.parse(window.localStorage.getItem('recordList'))
      // console.log(record)
      console.log(obj)
      let key = obj.id;
      // console.log(obj)
      if (!state.recordList.length) {
        state.recordList.unshift(obj);
        window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
      }
      else {
        for (let i in state.recordList) {
          if (state.recordList[i].id === key) {
            state.recordList.splice(i, 1);
            state.recordList.unshift(obj);
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
            break;
          }

        }
        if (!state.recordList.find(item => item.id === key)) {
          state.recordList.unshift(obj);
          window.localStorage.setItem('recordList', JSON.stringify(state.recordList));

        }
      }
    },
    clear: function (state) {
      state.recordList = [];
      window.localStorage.removeItem('recordList');
    }
  },
  actions: {
  },
  modules: {
  }
})
