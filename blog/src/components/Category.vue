<template>
  <div
    @mouseover="(hover = true), (anotherhover = true), (theheight = 0)"
    @mouseleave="
      (anotherhover = false), (theheight = 0 - tags.blogVOList.length * 80)
    "
  >
    <div class="thecategory">
      <div class="categoryname">{{ tags.tagName }}</div>

      <i class="el-icon-arrow-right" :class="{ active: anotherhover }"></i>
    </div>
    <div
      v-if="hover"
      v-bind:style="{ 'margin-top': theheight + 'px' }"
      class="article show"
    >
      <Article
        v-for="(articles, i) in tags.blogVOList"
        :key="i"
        :index="i"
        :articles="articles"
      ></Article>
    </div>
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
  background-color: #f5f5f5;
  .categoryname {
    font-size: 1.1em;
    font-weight: normal;
    color: #49726c;
    position: relative;
    float: left;
    top: 20px;
    letter-spacing: 2px;
    padding-bottom: 3px;
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
    transition: 1s;
    transform: rotate(90deg);
  }
}
.show {
  position: relative;
  transition: 1s;
  opacity: 0;
}
.article {
  z-index: 1;
  position: relative;
  animation: showarticle 0.5s forwards;
  opacity: 0;
}
@keyframes showarticle {
  from {
    top: -50px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}
</style>
<script>
export default {
  props: {
    tags: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
      anotherhover: false,
      theheight: 0,
    };
  },
};
</script>
