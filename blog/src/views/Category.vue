<template>
  <div>
    <Category
      v-for="(tags, i) in this.tags"
      :key="i"
      :index="i"
      :tags="tags"
      class="tag"
    >
    </Category>
  </div>
</template>

<script>
import Global from "@/components/Global";
export default {
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    async gettags() {
      Global.loading = true;
      const res = await this.$http.get("blog/blogListByTag");
      this.tags = res.data.data;
      console.log(this.tags);
      Global.loading = false;
    },
  },
  created() {
    this.gettags();
  },
};
</script>
<style lang="scss">
.tag {
  overflow: hidden;
}
</style>
