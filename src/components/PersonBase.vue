<template>
  <h1>人材管理</h1>
  <div class="container">
    <PersonPostForm @register="register"/>
    <div class="list-container">
      <ul >
        <PersonList :persons="persons" @delete="deletePerson"/>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
  import PersonPostForm from "./PersonPostForm.vue"
  import PersonList from "./PersonList.vue"
import { ref } from "vue";

  export type Person = {
    id: number,
    name: string,
    age: number,
  }

  /** 人材リスト */
  const persons = ref<Person[]>([]);

  /** 
   * リストに登録する
   */
  const register = (person: Person) => {
    persons.value.push(person);
  }

  /** リストから削除する */
  const deletePerson = (person: Person) => {
    persons.value = persons.value.filter((p: Person) => {
      return p.id !== person.id
    })
  }
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;;
}
</style>