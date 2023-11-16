<template>
  <li v-for="person in persons" :key="person.id" class="person-list">
    <span>{{ person.name }}</span>
    <span>age: {{ person.age }}</span>
    <button @click="onDeleteClick(person)">delete</button>
  </li>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue"
import { Person } from './PersonBase.vue';

const emit = defineEmits(["delete"])
defineProps<Props>()

type Props = {
  persons: Person[];
}

/**
 * 削除処理
 * @param person 削除データ
 */
const onDeleteClick = (person: Person) => {
  if (confirm("delete " + person.name + " ?")) {
    emit("delete", person)
  }
}

</script>
<style>
.person-list {
  list-style: none;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  background-color: rgb(255, 224, 184);
  padding: 10px 20px;
  width: 300px;
}
</style>