<template>
  <div class="main">
    <div class="info">
      <div class="indexlogo"></div>
      <div class="logoname">HELLO</div>
      <div class="mydream">{{ words.join("") }}</div>
      <div class="writter">Designed by Z&B and IDK</div>
      <div class="studio">Proudly published with @领航工作室</div>
    </div>
    <div class="content">
      <div class="head">
        <div class="function">
          <router-link class="nav-link" tag="div" to="/">Home</router-link>
        </div>
        <div class="function">
          <router-link class="nav-link" tag="div" to="/category"
            >Group by tag</router-link
          >
        </div>
        <div class="function">
          <router-link class="nav-link" tag="div" to="/date"
            >Group by year</router-link
          >
        </div>
      </div>
      <div class="maincontent" v-loading="this.$Global.loading">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  width: 100%;
  height: 100vh;

  .info {
    background-color: #49726c;
    position: fixed;
    width: 20%;
    height: 100vh;
    float: left;
    border-right: 1px solid rgb(235, 235, 235);
    display: flex;
    align-items: center;
    flex-direction: column;
    .indexlogo {
      opacity: 0;
      animation: logoin 1s forwards;
      border: 1px solid black;
      width: 150px;
      height: 150px;
      border-radius: 150px;
      background-image: url(../assets/indexlogo.jpg);
      background-position: 16px 17px;
      background-size: 80%;
      background-color: rgb(236, 222, 195);
      background-repeat: no-repeat;
      position: relative;
      margin-top: 30vh;
    }
    .logoname {
      position: relative;
      margin-top: 2vh;
      letter-spacing: 5px;
      font-weight: bold;
      font-size: 1em;
      color: white;
    }
    .mydream {
      display: block;
      color: rgb(201, 201, 201);
      margin-top: 2vh;
      font-size: 0.9em;
      white-space: nowrap;
      animation: blink-caret 0.75s infinite;
      border-right: 2px solid transparent;

      overflow: hidden;
    }
    .writter,
    .studio {
      font-size: 0.3em;
      font-weight: lighter;
      color: rgb(53, 53, 53);
      position: absolute;
    }
    .writter {
      bottom: 50px;
    }
    .studio {
      bottom: 20px;
    }
  }
  .content {
    height: 100vh;
    width: 80%;
    position: relative;
    float: right;
    animation: contentin 1s forwards;
    .head {
      position: relative;
      height: 10vh;
      width: 100%;
      border-bottom: 1px solid rgb(235, 235, 235);
      display: flex;
      line-height: 10vh;
      left: -1px;
      z-index: 1000;
      .function {
        position: relative;
        width: 150px;
        transition: 1s;
        transform-style: preserve-3d;
        z-index: 10;
        .nav-link {
          color: rgb(102, 102, 102);
          font-size: 1.1em;
          transition: 1s;
          letter-spacing: 1px;
          cursor: pointer;
        }
      }
      .function:hover {
        width: 200px;
        transition: 1s;
      }
      .function:hover .nav-link {
        letter-spacing: 5px;
        color: #fff;
        transition: 1s;
      }
      .function:hover::after {
        top: -102%;
        transition: 1s;
      }
      .function::after {
        transform: translateZ(-1px);
        position: relative;
        transition: 1s;
        top: -202%;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: #49726c;
      }
    }
    .maincontent {
      background-color: #f5f5f5;
      height: 90vh;
    }
  }
}

@keyframes contentin {
  from {
    top: -50px;
  }
  to {
    top: 0px;
  }
}
@keyframes logoin {
  from {
    left: -50px;
    opacity: 0;
    transform: rotate(-80deg);
  }
  to {
    left: 0px;
    opacity: 1;
    transform: rotate(0deg);
  }
}
@keyframes typing {
  0% {
    width: 0;
  }
  50% {
    width: 13em;
  }
  100% {
    width: 0;
  }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from,
  to {
    border-right: 1px solid rgba(0, 0, 0, 0);
  }
  50% {
    border-right: 1px solid black;
  }
}
</style>

<script>
// @ is an alias to /src
import Global from "@/components/Global";
export default {
  name: "Home",
  data() {
    return {
      words: [], //字母数组push，pop的载体
      str: "May The Force Be With You", //str初始化
      letters: [], //str分解后的字母数组
      order: 1, //表示当前是第几句话
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
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function() {
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
          setTimeout(function() {
            that.begin();
          }, 300);
        }
      };
    },
  },
};
</script>
