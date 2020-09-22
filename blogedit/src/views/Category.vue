<template>
  <div>
    <div class="categorymain">
      <div class="editcategory">
        <div class="editcategoryhead">{{ id ? "重命名" : "新建" }}标签</div>
        <el-form @submit.native.prevent="updatecategory" class="editcategoryform">
          <el-form-item class="categoryinput">
            <el-input placeholder="请输入标签" v-model="model.tagName"></el-input>
          </el-form-item>
          <el-form-item class="categorysubmit">
            <el-button size="mini" type="primary" native-type="submit">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="allcategory">
        <div class="allcategories">
          <div class="thecategory" v-for="(tags, i) in tags" :key="i">
            <div class="thecategoryname">{{ tags.tagName }}</div>
            <div class="categoryfunction">
              <el-button
                @click="
                  $router.push(`/Category/${tags.tagId}`).catch((err) => {})
                "
                size="mini"
                type="primary"
                icon="el-icon-edit"
                circle
              ></el-button>
              <el-button
                size="mini"
                class="categorydelete"
                type="danger"
                icon="el-icon-delete"
                circle
              ></el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.categorymain {
  width: 80%;
  top: 50px;
  margin: 0 auto;
  position: relative;
  .editcategory {
    position: relative;
    width: 100%;
    height: 100px;
    .editcategoryhead {
      padding-left: 10px;
      position: absolute;
      top: 0;
      line-height: 40px;
      text-align: left;
      font-weight: bold;
      border-radius: 10px 10px 0 0;
    }
    .editcategoryform {
      position: relative;
      width: 50%;
      left: 100px;
      display: flex;
      .categoryinput {
        width: 70%;
        height: 100%;
      }
      .categorysubmit {
        height: 100%;
        width: 15%;
        margin-left: 5%;
        button {
          width: 100%;
        }
      }
    }
  }
  .allcategory {
    position: relative;
    width: 100%;
    border-radius: 10px;
    background-color: rgb(243, 243, 243);
    box-shadow: 5px 5px 10px rgb(207, 207, 207);
    padding: 20px 0;
    .allcategories {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      width: 95%;
      margin: 30px auto;
      .thecategory {
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        width: 30%;
        margin: 10px 1.6%;
        box-shadow: 2px 2px 5px rgb(207, 207, 207);
        .thecategoryname {
          margin: 10px 5px;
          float: left;
          height: 30px;
          line-height: 30px;
          font-size: 0.8em;
          border-radius: 10px;
          padding: 0px 5px;
          color: #ecdec3;
          font-weight: 500;
          background-color: #49726c;
        }
        .categoryfunction {
          width: 20%;
          height: 100%;
          display: flex;
          margin-right: 10px;
          align-items: center;
          float: right;
          justify-content: space-around;
          align-content: space-around;
          .categoryedit {
            float: right;
          }
          .categorydelete {
            float: right;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  watch: {
    $route() {
      this.$router.go(0);
    },
  },
  props: {
    id: {},
  },
  data() {
    return {
      model: {
        tagName: "",
      },
      categoryname: "",
      tags: [],
    };
  },
  methods: {
    async gettags() {
      const res = await this.$http.get("tag/selectAllTag");
      this.tags = res.data.data;
      this.id && this.fetch();
    },
    async updatecategory() {
      await this.$http({
        method: "post",
        url: "/tag/insertTag",
        params: {
          tagName: this.model.tagName,
        },
      });
      this.$router.push("/category/create");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    fetch() {
      for (let i = 0; i < this.tags.length; i++) {
        if (this.id == this.tags[i].tagId) {
          this.model.tagName = this.tags[i].tagName;
          break;
        }
      }
    },
  },
  created() {
    this.gettags();
  },
};
</script>
