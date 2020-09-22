<template>
  <div class="articleedit">
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="标签">
        <el-select style="float:left" v-model="model.tagList" multiple>
          <el-option
            v-for="item in tagList"
            :key="item.tagId"
            :label="item.tagName"
            :value="item.tagId"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="正文">
        <vue-editor
          useCustomImageHandler
          @image-added="handleImageAdded"
          v-model="model.blogContent"
          class="input"
        ></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
  },
  props: {
    blogId: {},
  },
  data() {
    return {
      model: {},
      input: "",
      tagList: [],
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      console.log("sfefsef");
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("/attachment/uploadFile", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.data.url);
      resetUploader();
    },
    async gettags() {
      const res = await this.$http.get("tag/selectAllTag");
      this.tagList = res.data.data;
    },
    async save() {
      if (this.blogId) {
        await this.$http.post(
          `/blog/updateBlog?blogId=${this.blogId}`,
          this.model
        );
      } else {
        await this.$http.post("/blog/insertBlog", this.model);
      }
      this.$router.push("/Article");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(
        `/blog/blogDetail?blogId=${this.blogId}`
      );
      this.model = res.data.data;
      for (let i = 0; i < this.model.tagList.length; i++) {
        this.model.tagList[i] = this.model.tagList[i].tagId;
      }
    },
  },
  created() {
    this.gettags();
    this.blogId && this.fetch();
  },
};
</script>
<style lang="scss">
.articleedit {
  background-color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgb(207, 207, 207);
  position: relative;
  top: 20px;
  width: 95%;
  padding-right: 100px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 10px;
  margin-bottom: 10px;
  .ql-editor {
    min-height: 280px;
  }
  .select {
    float: left;
  }
}
</style>
