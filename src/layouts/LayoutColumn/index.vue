<!-- 通栏布局 -->
<template>
  <div class="layout">
    <div class="layout-header">
      <fy-logo />
      <fy-header />
    </div>
    <div class="layout-main">
      <fy-main />
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutColumn",
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    align-items: center;
  }
  &-main {
    flex: 1;
    height: 0px;
    overflow-y: auto;
  }
}
</style>