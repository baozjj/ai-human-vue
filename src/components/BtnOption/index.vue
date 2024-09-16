<template>
  <a-flex gap="small" vertical style="width: 60px" align="center">
    <div style="width: 40px">
      <img width="100%" src="@/assets/images/index/chaoshibianli.png" alt="" />
    </div>
    <span style="font-size: 12px">{{ title }}</span>
  </a-flex>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    title?: string
    imgUrl?: string
  }>(),
  {
    title: '房屋管理',
    imgUrl: '@/assets/images/index/chaoshibianli.png'
  }
)
</script>

<style scoped></style>
