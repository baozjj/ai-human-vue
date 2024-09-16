<template>
  <TopBg />

  <div class="home-container">
    <a-flex gap="middle" vertical>
      <img style="border-radius: 15px" class="loc-img" src="@/assets/images/locImg.png" />

      <!-- 物业服务 -->
      <a-card>
        <a-flex gap="small" align="center">
          <img width="4" height="16" src="@/assets/images/index/juxing.png" alt="" />
          <img height="24" src="@/assets/images/card-title2.png" alt="" />
        </a-flex>
        <a-flex :gap="23" wrap="wrap" style="margin-top: 8px">
          <a-flex
            gap="small"
            vertical
            style="width: 60px"
            align="center"
            v-for="item in managementServiceArr"
            :key="item.title"
          >
            <div style="width: 40px" @click="navigateTo(item.route)">
              <img width="100%" :src="item.imgUrl" alt="" />
            </div>
            <span style="font-size: 12px">{{ item.title }}</span>
          </a-flex>
        </a-flex>
      </a-card>

      <!-- 自主服务 -->
      <a-card>
        <a-flex gap="small" align="center">
          <img width="4" height="16" src="@/assets/images/index/juxing.png" alt="" />
          <img height="24" src="@/assets/images/card-title1.png" alt="" />
        </a-flex>
        <a-flex :gap="23" wrap="wrap" style="margin-top: 8px">
          <a-flex
            gap="small"
            vertical
            style="width: 60px"
            align="center"
            v-for="item in selfServiceArr"
            :key="item.title"
          >
            <div style="width: 40px">
              <img width="100%" :src="item.imgUrl" alt="" />
            </div>
            <span style="font-size: 12px">{{ item.title }}</span>
          </a-flex>
        </a-flex>
      </a-card>
    </a-flex>
  </div>
  <div class="home-tabs">
    <img class="loc-img" src="@/assets/images/tabs.png" />
  </div>
</template>

<script setup lang="ts">
import TopBg from '@/components/TopBg/index.vue'
import { selfServiceArr, managementServiceArr } from '@/services/home/const'

import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}

console.log(12312312, router)
</script>

<style scoped lang="less">
.loc-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.home-container {
  padding: 20px;
  margin-top: 60px;
}

.home-tabs {
  position: fixed;
  bottom: 0;
  width: 100%;
}
:deep(.ant-card .ant-card-body) {
  padding: 12px;
}
</style>
