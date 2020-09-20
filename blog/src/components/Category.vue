<template>
  <div @mouseover="hover = true" @mouseleave="hover = false">
    <div class="thecategory">
      <div class="categoryname">母猪</div>

      <i class="el-icon-arrow-right" :class="{ active: hover }"></i>
    </div>
    <slot v-if="hover"></slot>
  </div>
</template>

<style lang="scss">
.thecategory {
  position: relative;
  margin: 0 auto;
  width: 95%;
  z-index: 1000;
  height: 50px;
  border-bottom: 1px solid rgb(235, 235, 235);
  background-color: white;
  .categoryname {
    font-size: 1em;
    font-weight: bold;
    position: relative;
    float: left;
    top: 20px;

    letter-spacing: 2px;
    padding-bottom: 3px;
    color: rgb(99, 99, 99);
  }
  .el-icon-arrow-right {
    font-size: 1.5em;
    line-height: 50px;
    float: right;
    margin-right: 20px;
    color: rgb(114, 114, 114);
    transition-duration: 0.5s;
  }
  .active {
    transition-duration: 0.5s;
    transform: rotate(90deg);
  }
}
</style>
<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>
