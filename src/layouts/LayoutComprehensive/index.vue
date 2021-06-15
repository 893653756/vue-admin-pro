<!-- 综合布局 -->
<template>
  <div class="layout">
    <div class="layout-side">
      <fy-logo />
      <fy-side-bar />
    </div>
    <div class="layout-body">
      <fy-header />
      <fy-nav />
      <fy-main />
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutComprehensive",
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;
  &-side {
    width: 250px;
    background-color: yellow;
  }
  &-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 0px;
    background-color: pink;
  }
}
</style>