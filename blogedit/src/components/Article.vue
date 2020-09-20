<template>
  <div>
    <div>
      <div class="thearticle">
        <div class="name">
          母猪的产后护理
        </div>

        <div class="time">
          <i class="el-icon-date"></i>
          <p>2020-09-17</p>
        </div>
        <div class="function">
          <router-link class="edit" tag="div" to="/Articleedit">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </router-link>
          <el-button
            class="delete"
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.thearticle {
  position: relative;
  margin: 0 auto;
  width: 95%;
  height: 80px;
  border-bottom: 1px solid rgb(235, 235, 235);
  display: block;
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
