<template>
  <div>
    <Article
      v-for="(articles, i) in articles"
      :key="i"
      :index="i"
      :articles="articles"
      class="article"
    ></Article>
  </div>
</template>

<script>
import Global from "@/components/Global";
export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    async getarticle() {
      Global.loading = true;
      const res = await this.$http.get("blog/recentBlogByPage");
      this.articles = res.data.data;
      Global.loading = false;
    },
  },
  created() {
    this.getarticle();
  },
};
</script>
