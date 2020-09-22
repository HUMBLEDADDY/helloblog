<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f5f5f5"
      text-color="#555"
      active-text-color="#555"
    >
      <el-menu-item index="1">
        <router-link class="nav-link" tag="div" to="/">控制台</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <span class="nav-link">博文管理</span>
        </template>
        <router-link class="nav-link" tag="div" to="/Articleedit">
          <el-menu-item index="2-1">新增博文</el-menu-item>
        </router-link>
        <router-link class="nav-link" tag="div" to="/Article">
          <el-menu-item index="2-2">查看博文</el-menu-item>
        </router-link>
        <router-link class="nav-link" tag="div" to="/Category/create">
          <el-menu-item index="2-3">编辑标签</el-menu-item>
        </router-link>
      </el-submenu>
      <el-menu-item index="3">附件</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
* {
  user-select: none;
}
html {
  height: 100vh;
  .el-menu-demo {
    padding: 0 7%;
  }
  .nav-link {
    font-weight: bold;
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
