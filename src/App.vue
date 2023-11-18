<template>
  <div class="tab-container">
    <button @click="changeTab(1)">Tab1</button>
    <button @click="changeTab(2)">Tab2</button>
  </div>
  <component :is="currentComponent"></component>
</template>
<script setup lang="ts">
  import { computed, ref } from "vue";
  import Person from "./views/Person.vue";
  import CardList from "./views/CardList.vue";

  /** 表示コンポーネント識別ID */
  const componentId = ref(1);

  /** 表示コンポーネント */
  const currentComponent = computed(() => {
    switch(componentId.value) {
      case 1:
        return Person;
      case 2:
        return CardList;
      default:
        return Person;
    }
  })

  /**
   * タブ切り替え時
   * @param id 識別ID
   */
  const changeTab = (id: number) => {
    componentId.value = id;
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tab-container {
  margin-bottom: 20px;
}
</style>