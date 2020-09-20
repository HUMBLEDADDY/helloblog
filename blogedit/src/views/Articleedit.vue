<template>
  <div class="articleedit">
    <el-form label-width="120px">
      <el-form-item label="标签">
        <el-select class="select">
          <el-option></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="正文">
        <vue-editor class="input"></vue-editor>
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
  .select {
    float: left;
  }
}
</style>
