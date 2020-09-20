<template>
  <div>
    <Category>
      <Article class="article"></Article>
      <Article class="article"></Article>
    </Category>
    <Category>
      <Article class="article"></Article>
      <Article class="article"></Article>
    </Category>
  </div>
</template>
<style lang="scss">
.article {
  z-index: 1;
  position: relative;
  animation: showarticle 0.5s forwards;
  opacity: 0;
}
@keyframes showarticle {
  from {
    top: -50px;
    opacity: 0;
  }
  to {
    top: 0px;
    opacity: 1;
  }
}
</style>
