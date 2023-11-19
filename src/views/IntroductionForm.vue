<template>
  <form>
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input v-model="data.name" id="user-name" name="user-name" type="text" />
    </div>
    <div class="form-control">
      <label for="age">Your Age</label>
      <input v-model="data.age" id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="from">Where Are you from?</label>
      <select v-model="data.from" id="from" name="from">
        <option value="japan">Japan</option>
        <option value="china">China</option>
        <option value="others">Others</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input v-model="data.interested" id="interest-react" name="interest" value="react" type="checkbox" />
        <label for="interest-react">React.js</label>
      </div>
      <div>
        <input v-model="data.interested" id="interest-vue" name="interest" value="vue" type="checkbox" />
        <label for="interest-vue">Vue.js</label>
      </div>
      <div>
        <input v-model="data.interested" id="interest-angular" name="interest" value="angular" type="checkbox" />
        <label for="interest-angular">Angular.js</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input v-model="data.learn" id="how-video" name="how" value="video" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input v-model="data.learn" id="how-books" name="how" value="books" type="radio" />
        <label for="how-books">Books</label>
      </div>
      <div>
        <input v-model="data.learn" id="how-other" name="how" value="other" type="radio" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <button @click.prevent="save">Save Data</button>
    </div>
  </form>
</template>
<script setup lang="ts">
import { inject, ref } from 'vue';
import axios from 'axios';
import { IntroductionModel } from "../model/introductionModel"
import { historyFunctionKey } from '../injections/historyInjectionKey';

  /** 履歴追加処理のインジェクション */
  const addHistory = inject(historyFunctionKey, () => ({}));

  /** フォームデータ */
  const data = ref<IntroductionModel>({
    name: "",
    age: 0,
    from: "",
    interested: [],
    learn: [],
  })
  
  /**
   * セーブボタン押下時
   */
  const save = () => {
    axios.post("https://vue-practice-b85ac-default-rtdb.firebaseio.com/test.json", {
      data: data.value
    })
    .then(() => {
      clearForm();
      addHistory();
      alert("success")
    })
    .catch(() => {
      alert("failed")
    })
  }

  /**
   * 入力値クリア
   */
  const clearForm =  () => {
    data.value = {
      name: "",
      age: 0,
      from: "",
      interested: [],
      learn: [],
    }
  }
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>