<template>
  <div class="bg-container">
    <img src="@/assets/images/index/indexBgTop.png" alt="背景图片" />
    <img style="margin-top: -1px" src="@/assets/images/index/indexBg.png" alt="背景图片" />
  </div>
</template>

<style scoped lang="less">
.bg-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}

.bg-container img {
  width: 100%; /* 图片宽度100% */
  height: auto; /* 高度根据图片比例自动调整 */
  object-fit: cover; /* 图片保持比例并覆盖容器 */
  display: block; /* 移除图片底部可能的空白间隙 */
}
</style>
