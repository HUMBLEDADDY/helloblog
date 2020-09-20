<template>
  <div>
    <div class="consolefunction">
      <div class="articlecount">
        <div>文章</div>
        <div class="thenumofarticle">100</div>
      </div>
      <div class="daycount"></div>
      <div class="latestarticle"></div>
      <div class="tips"></div>
    </div>
  </div>
</template>

<style lang="scss">
.consolefunction {
  padding: 40px;
  width: 80%;
  margin: 0 auto;
  .articlecount,
  .daycount {
    width: 250px;
    height: 150px;
    float: left;
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(207, 207, 207);
  }
  .latestarticle {
    position: relative;
    top: 170px;
    width: 520px;
    margin: 10px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(207, 207, 207);
  }
  .tips {
    position: relative;
    bottom: 420px;
    width: 520px;
    margin: 10px;
    height: 570px;
    float: right;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgb(207, 207, 207);
  }
}
</style>

<script>
export default {
  data() {
    return {
      thenumofarticle: "",
    };
  },
  mounted() {
    //页面初次加载后调用begin()开始动画
    this.begin();
  },
  methods: {
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      console.log(this.letters);
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 100);
      }
    },
    //开始删除的效果动画
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50);
      }
    },
    //输入字母
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        console.log(this.words);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function () {
            that.back();
          }, 2000);
        }
      };
    },
    //擦掉(删除)字母
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
          let that = this;
          setTimeout(function () {
            that.begin();
          }, 300);
        }
      };
    },
  },
};
</script>