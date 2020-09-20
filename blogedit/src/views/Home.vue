<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#66B1FF"
    >
      <el-menu-item index="1">
        <router-link class="nav-link" tag="div" to="/">控制台</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">博文管理</template>
        <router-link class="nav-link" tag="div" to="/Articleedit">
          <el-menu-item index="2-1">新增博文</el-menu-item>
        </router-link>
        <router-link class="nav-link" tag="div" to="/Article">
          <el-menu-item index="2-2">查看博文</el-menu-item>
        </router-link>
        <el-menu-item index="2-3">编辑标签</el-menu-item>
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
