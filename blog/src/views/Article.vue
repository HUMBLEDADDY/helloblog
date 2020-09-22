<template>
  <div class="thearticleinfo">
    <div class="name">{{ this.modle.title }}</div>
    <div class="tags">
      <div
        v-for="(tags, i) in this.modle.tagList"
        :key="i"
        :index="i"
        class="tag"
      >
        {{ tags.tagName }}
      </div>
    </div>
    <div v-html="modle.blogContent" class="body"></div>
    <div class="time">
      <i class="el-icon-date"></i>
      <p>{{ this.modle.blogPostTime }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blogId: {},
  },
  data() {
    return {
      modle: {},
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(
        `/blog/blogDetail?blogId=${this.blogId}`
      );
      this.modle = res.data.data;
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<style lang="scss">
.thearticleinfo {
  position: relative;
  margin: 0 auto;
  width: 95%;
  padding-top: 20px;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: block;
  .tags {
    display: flex;
    position: relative;
    left: -5px;
    .tag {
      height: 25px;
      background-color: #49726c;
      margin: 0 5px;
      padding: 0 10px;
      line-height: 25px;
      border-radius: 10px;
      color: white;
      font-size: 0.5em;
    }
  }
  .name {
    font-size: 1em;
    font-weight: bold;
    position: relative;
    letter-spacing: 2px;
    padding-bottom: 3px;
    text-align: left;
    color: rgb(99, 99, 99);
  }
  .active {
    border-bottom: 2px solid rgb(99, 99, 99);
  }
  .body {
    position: relative;
    text-align: left;
    margin-top: 10px;
  }
  .time {
    height: 18px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 40px;
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
