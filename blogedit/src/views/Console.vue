<template>
  <div>
    <div class="consolefunction">
      <div class="count" style="position:absolute">
        <div class="articlecount">
          <div class="thearticlename">文章</div>
          <div class="thenumofarticle">{{ thenumberofarticle }}</div>
        </div>
        <div class="daycount">
          <div class="day">已运行天数</div>
          <div class="thedaycount">{{ thenumberofdate }}</div>
        </div>
      </div>

      <div class="latestarticle">
        <div class="latestarticlehead">最近博文</div>
        <Article
          v-for="(articles, i) in articles"
          :key="i"
          :index="i"
          :articles="articles"
          v-on:refresh="getarticle()"
          class="article"
        ></Article>
      </div>
      <div class="tips">
        <div class="tipshead">速记</div>
        <el-form @submit.native.prevent="insertMemo">
          <el-form-item>
            <el-input
              class="tipsinput"
              type="textarea"
              :rows="1"
              placeholder="请输入内容"
              resize="none"
              outline="none"
              maxlength="30"
              show-word-limit
              v-model="memoContent"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="tiplist">
        <div class="tiplisthead">速记清单</div>
        <div class="memos">
          <myScroll :ops="ops">
            <div
              v-for="(memo, i) in memo"
              :key="i"
              :index="i"
              class="memo"
              @mouseover="hover = i"
            >
              <div class="memocontent">
                {{ memo.memoContent }}
              </div>
              <div class="function" v-if="hover === i">
                <el-button
                  size="mini"
                  class="delete"
                  @click="remove(memo)"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                ></el-button>
              </div>
            </div>
          </myScroll>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.consolefunction {
  padding: 40px;
  width: 93%;
  margin: 0 auto;
  position: relative;
  .count {
    position: absolute;
    width: 42.5%;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    .articlecount,
    .daycount {
      position: relative;
      width: 48%;
      height: 150px;
      float: left;
      background-color: #49726c;
      border-radius: 10px;
      box-shadow: 5px 5px 10px rgb(207, 207, 207);
      text-align: left;
      padding-left: 20px;
      .thearticlename,
      .day {
        color: #81ccc1;
        font-weight: 600;
        margin-top: 50px;
      }
      .thenumofarticle,
      .thedaycount {
        margin-top: 20px;
        font-weight: 500;
        font-size: 2em;
        color: #153045;
      }
    }
  }

  .latestarticle {
    overflow: hidden;
    position: relative;
    top: 170px;
    width: 45%;
    margin: 10px;
    height: 380px;
    background-color: #fff;
    border-radius: 10px;
    padding-top: 50px;
    box-shadow: 5px 5px 10px rgb(207, 207, 207);
    .article {
      position: relative;
      top: 0;
    }
    .latestarticlehead {
      padding-left: 10px;
      position: absolute;
      top: 0;
      line-height: 50px;
      text-align: left;
      height: 50px;
      width: 100%;
      background-color: #ecdec3;
      color: #49726c;
      font-weight: bold;
      border-radius: 10px 10px 0 0;
    }
  }
  .tips {
    padding-top: 70px;
    position: relative;
    bottom: 400px;
    width: 50%;
    margin: 10px;
    height: 200px;
    float: right;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(207, 207, 207);
    .tipshead {
      padding-left: 10px;
      position: absolute;
      top: 0;
      line-height: 50px;
      text-align: left;
      height: 50px;
      width: 100%;
      background-color: #ecdec3;
      color: #49726c;
      font-weight: bold;
      border-radius: 10px 10px 0 0;
    }
    .tipsinput {
      width: 90%;
      margin: 0 auto;
      outline: none;
      span {
        height: 50%;
        line-height: 16.5px;
        top: 10px;
      }
    }
  }
  .tiplist {
    height: 330px;
    margin: 10px;
    bottom: 400px;
    position: relative;
    width: 50%;
    float: right;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(207, 207, 207);
    .tiplisthead {
      padding-left: 10px;
      position: absolute;
      top: 0;
      line-height: 50px;
      text-align: left;
      height: 50px;
      width: 100%;
      background-color: #ecdec3;
      color: #49726c;
      font-weight: bold;
      border-radius: 10px 10px 0 0;
    }
    .memos {
      height: 280px;
      margin-top: 50px;
      .memo {
        position: relative;
        margin: 0 auto;
        width: 95%;
        height: 40px;
        border-bottom: 1px solid rgb(235, 235, 235);
        .memocontent {
          line-height: 40px;
          position: relative;
          float: left;
          font-size: 1em;
          font-weight: bold;
          letter-spacing: 1px;
          color: rgb(99, 99, 99);
        }
        .function {
          width: 100px;
          height: 40px;
          display: flex;
          align-items: center;
          float: right;
          position: relative;
          justify-content: space-around;
          align-content: space-around;
          .delete {
            position: absolute;
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
  data() {
    return {
      ops: {
        // some configs....
      },
      articles: [],
      memoContent: "",
      thenumofarticle: 34,
      thenumberofarticle: 0,
      thenumofdate: 123,
      thenumberofdate: 0,
      memo: [],
      hover: -1,
    };
  },
  methods: {
    async remove(memo) {
      this.$confirm(`是否要删除${memo.memoContent}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        await this.$http({
          method: "post",
          url: "/memo/deleteMemo",
          params: {
            memoId: memo.memoId,
          },
        });
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.$emit("refresh");
      });
      this.recentMemo();
    },
    async getarticle() {
      const res = await this.$http.get("blog/recentBlogByPage");
      this.articles = res.data.data;
    },
    async insertMemo() {
      await this.$http({
        url: "/memo/insertMemo",
        method: "post",
        params: {
          memoContent: this.memoContent,
        },
      });
      this.recentMemo();
    },
    async count() {
      const res = await this.$http.get("/user/countInfo");
      this.thenumofarticle = res.data.data.blogMount;
      this.thenumofdate = res.data.data.registrationDate;
      this.begin();
    },
    async recentMemo() {
      const res = await this.$http.get("memo/recentMemo");
      this.memo = res.data.data;
    },
    begin() {
      var time = 1000 / this.thenumofarticle;
      var date = 1000 / this.thenumofdate;
      for (let i = 0; i <= this.thenumofarticle; i++) {
        setTimeout(() => {
          this.thenumberofarticle = i;
        }, i * time);
      }
      for (let i = 0; i <= this.thenumofdate; i++) {
        setTimeout(() => {
          this.thenumberofdate = i;
        }, i * date);
      }
    },
  },
  created() {
    this.getarticle();
    this.count();
    this.recentMemo();
  },
};
</script>
