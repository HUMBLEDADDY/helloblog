<template>
  <div>
    <div>
      <div class="thearticle">
        <div class="name">{{articles.title}}</div>

        <div class="time">
          <i class="el-icon-date"></i>
          <p>{{articles.blogPostTime}}</p>
        </div>
        <div class="function">
          <el-button
            type="primary"
            @click="$router.push(`/Articleedit/${articles.blogId}`).catch((err) => {})"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button class="delete" @click="remove()" type="danger" icon="el-icon-delete" circle></el-button>
        </div>
      </div>
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
  methods: {
    async remove() {
      this.$confirm(`是否要删除${this.articles.title}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$http({
          method: "post",
          url: "/blog/deleteBlog",
          params: {
            blogId: this.articles.blogId,
          },
        });
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.$emit("refresh");
      });
    },
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
  .function {
    width: 100px;
    height: 80px;
    display: flex;
    align-items: center;
    float: right;
    justify-content: space-around;
    align-content: space-around;
    .edit {
      float: right;
    }
    .delete {
      float: right;
    }
  }
}
</style>
