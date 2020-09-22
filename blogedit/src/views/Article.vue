<template>
  <div>
    <el-button class="add" type="primary" round>
      <i class="el-icon-plus"></i>
    </el-button>
    <div class="articles">
      <Article
        v-for="(articles, i) in articles"
        :key="i"
        :index="i"
        :articles="articles"
        v-on:refresh="getarticle()"
        class="article"
      ></Article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async getarticle() {
      const res = await this.$http.get("blog/recentBlogByPage");
      this.articles = res.data.data;
    },
  },
  created() {
    this.getarticle();
  },
};
</script>

<style lang="scss">
.add {
  position: absolute;
  margin: 10px;
  left: 2.5%;
  .el-icon-plus {
    font-size: 1.2em;
  }
}
.articles {
  padding: 20px 0;
  position: relative;
  width: 95%;
  top: 70px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: white;
}
</style>
