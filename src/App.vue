<template>
  <div class="tab-container">
    <button @click="changeTab(1)">Tab1</button>
    <button @click="changeTab(2)">Tab2</button>
    <button @click="changeTab(3)">Tab3</button>
  </div>
  <component :is="currentComponent"></component>
</template>
<script setup lang="ts">
  import { computed, provide, ref } from "vue";
  import Person from "./views/Person.vue";
  import History from "./views/History.vue";
  import CardList from "./views/CardList.vue";
  import { HistoryModel } from "./model/histroryModel";
  import { historyKey, historyFunctionKey } from "./injections/historyInjectionKey"

  /** 表示コンポーネント識別ID */
  const componentId = ref(1);

  /** 表示コンポーネント */
  const currentComponent = computed(() => {
    switch(componentId.value) {
      case 1:
        return Person;
      case 2:
        return CardList;
      case 3:
        return History;
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
  
  /** 履歴リスト */
  const historyList = ref<HistoryModel[]>([{id: 0, date: ""}]);

  /** 履歴管理連番 */
  let seq = 1;

  /**
   * 履歴追加処理
   */
  const addHistory = () => {
    const newHistory: HistoryModel = {
      id: seq++,
      date: createDate(),
    }; 
    historyList.value.push(newHistory)
  }

  /**
   * 表示用に形式変換した日付を取得する
   */
  const createDate = (): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };

    const formatter = new Intl.DateTimeFormat('ja-JP', options);
    const formattedDate = formatter.format(new Date);

    return formattedDate
  }

  /** プロバイダー */
  provide(historyKey, historyList.value);
  provide(historyFunctionKey, addHistory);
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
</style>./injections/historyInjectionKey