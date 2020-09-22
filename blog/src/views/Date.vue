<template>
  <div>
    <Date
      v-for="(years, i) in this.years"
      :key="i"
      :index="i"
      :years="years"
      class="tag"
    >
    </Date>
  </div>
</template>

<script>
import Global from "@/components/Global";
export default {
  data() {
    return {
      years: {},
    };
  },
  methods: {
    async gettags() {
      Global.loading = true;
      const res = await this.$http.get("/blog/blogByYear");
      this.years = res.data.data;
      Global.loading = false;
    },
  },
  created() {
    this.gettags();
  },
};
</script>
<style lang="scss">
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
