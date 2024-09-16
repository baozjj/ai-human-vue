<template>
  <div class="human-top"><LeftOutlined @click="navigateToHome" /> <span>数字人</span></div>
  <!-- http://localhost:21375/ -->
  <!-- https://human.kz88.us/ -->
  <!-- http://127.0.0.1:5500/index.html -->
  <iframe
    class="human-container"
    src="http://127.0.0.1:5500/index.html"
    width="100%"
    height="500px"
    allow="microphone;"
  ></iframe>
  <div class="home-tabs">
    <img class="loc-img" src="@/assets/images/tabs.png" />
  </div>
</template>

<script lang="ts" setup>
import {} from 'vue'
import { LeftOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}
</script>

<style scoped lang="less">
.human-top {
  width: 100%;
  height: 50px;
  padding: 16px;
  background-color: #fff;
  position: flex;
  justify-content: center;
  align-items: center;
}

.human-container {
  width: 100%;
  height: 535px;
  border: none;
  overflow: hidden;
  margin-top: 10px;
}
.loc-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
.home-tabs {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
