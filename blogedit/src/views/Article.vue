<template>
  <div>
    <el-button class="add" type="primary" round>
      <i class="el-icon-plus"></i>
    </el-button>
    <Article class="article"></Article>
    <Article class="article"></Article>
  </div>
</template>

<style lang="scss">
.add {
  position: absolute;
  margin: 10px;
  left: 20px;
  .el-icon-plus {
    font-size: 1.2em;
  }
}
.article {
  position: relative;
  top: 70px;
}
</style>
