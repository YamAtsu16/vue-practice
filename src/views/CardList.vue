<template>
  <div class="main">
    <h1>Card</h1>
    <div class="container">
      <Card title="Title" class="card">
        <div class="contents">
          <span>no message</span>
        </div>
        <template #footer>
          <div>footer</div>
        </template>
      </Card>
      <Card title="Icons" class="card">
        <div class="contents">
          <RocketIcon />
          <RocketIcon />
          <RocketIcon />
        </div>
      </Card>
      <Card title="Icons with Text" class="card">
        <div class="contents">
          <RocketIcon />
          <span class="with-text-card">Rocket</span>
          <RocketIcon />
        </div>
        <template #footer>
          Hello World!!
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
  import Card from '../components/Card.vue';
  import RocketIcon from '../components/RocketIcon.vue';
</script>
<style>
.main {
  text-align: center;
}
span {
  font-size: 18px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  margin-bottom: 24px;
}
.card .contents {
  margin-top: 8px;
  display: flex;
}
</style>
