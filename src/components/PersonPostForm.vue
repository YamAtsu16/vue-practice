<template>
  <div class="form-container">
    <span v-if="isValidName" class="error-message">Please enter a name with no more than {{ nameMaxLength }}</span>
    <div class="input-container">
      <div class="input-column">
        <span class="input-label">name:</span>
        <input v-model="inputName" type="text" class="input-name">
      </div>
      <div class="input-column">
        <span class="input-label">age:</span>
        <input v-model="inputAge" type="number" class="input-age">
      </div>
      <div>
        <button class="register-button" :disabled="isValidName" @click="register">register</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue';

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

/** 名前入力最大値 */
const nameMaxLength = 10;
/** 名前入力バリデーション */
const isValidName = computed(() => inputName.value.length > nameMaxLength ? true : false)

/** 入力欄の色 */
const color = computed(() => isValidName.value ? "red" : "white")

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
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.input-label {
  font-size: 20px;
  font-weight: bold;
}
.input-column {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
.input-name {
  width: 120px;
  margin-bottom: 10px;
  background-color: v-bind(color);
}
.input-age {
  width: 120px;
  margin-bottom: 10px;
}
.error-message {
  font-size: 12px;
  font-weight: bold;
  color: red;
  margin-bottom: 5px;
}
</style>