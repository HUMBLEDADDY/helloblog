<template>
  <div>
    <div>
      <router-link
        tag="div"
        :to="`/article/${articles.blogId}`"
        class="thearticle"
      >
        <div
          class="name"
          :class="{ active: hover }"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          {{ articles.title }}
        </div>

        <div class="time">
          <i class="el-icon-date"></i>
          <p>{{ articles.blogPostTime }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="scss">
.thearticle {
  position: relative;
  margin: 0 auto;
  width: 95%;
  height: 80px;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: block;
  .name {
    font-size: 1em;
    font-weight: bold;
    position: relative;
    float: left;
    top: 20px;
    letter-spacing: 2px;
    padding-bottom: 3px;
    color: rgb(99, 99, 99);
  }
  .active {
    border-bottom: 2px solid rgb(99, 99, 99);
  }
  .time {
    position: absolute;
    top: 60px;
    bottom: 10px;
    .el-icon-date {
      float: left;
      color: rgb(161, 161, 161);
    }
    p {
      float: left;
      margin-left: 10px;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 0.8em;
      letter-spacing: 1px;
      color: rgb(161, 161, 161);
    }
  }
}
</style>
