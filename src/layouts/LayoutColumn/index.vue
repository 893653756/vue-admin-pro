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
    height: 54px;
    display: flex;
    align-items: center;
    background-color: yellow;
  }
  &-main {
    flex: 1;
    height: 0px;
    overflow-y: auto;
    background-color: pink;
  }
}
</style>