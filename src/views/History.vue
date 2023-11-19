<template>
  <div class="main">
    <h1>History</h1>
    <ul>
      <li class="list" v-for="history in historyList" :key="history.id">
        <span v-if="history.id > 0">【更新日時】{{ history.date }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { HistoryModel } from '@/model/histroryModel';
import { historyKey } from '../injections/historyInjectionKey';
import { inject, ref } from 'vue';

/** 履歴リスト */
const historyList = ref<HistoryModel[]>(inject(historyKey, [] as HistoryModel[]));
</script>
<style>
.main {
  text-align: center;
}
.list {
  list-style: none;
}
</style>