<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input-column">
        <span>name:</span>
        <input v-model="inputName" type="text" class="input">
      </div>
      <div class="input-column">
        <span>age:</span>
        <input v-model="inputAge" type="number" class="input">
      </div>
    </div>
    <button class="register-button" @click="register">register</button>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(["register"])

/** 連番（ID） */
let seq = 1;
/** 入力値（名前） */
const inputName = ref<string>("");
/** 入力値（年齢） */
const inputAge = ref<number>(0);

/**
 * 登録処理
 */
const register = () => {
  const person = {id: seq++, name: isNullOrEmpty(inputName.value) ? "unknown" : inputName.value, age: inputAge.value};
  emit("register", person);
  clearInput();
}

/**
 * 入力欄クリア
 */
const clearInput = () => {
  inputName.value = "";
  inputAge.value = 0;
}

/**
 * 与えられた値がNULLまたは空文字かを判定する
 * @param value 指定された値 
 */
const isNullOrEmpty = (value: string | number): boolean => {
  return value === null || value === "" ? true : false;
}

</script>
<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: antiquewhite;
  padding: 20px 0;
  width: 50%;
  margin-bottom: 10px;
  border-radius: 4px;
}
span {
  font-size: 20px;
  font-weight: bold;
}
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 20px;
}
.input-column {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
input {
  width: 120px;
  margin-bottom: 10px;
}
</style>