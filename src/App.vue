<template>
  <div>
    <div class="wrapper">
      <div class="position">
        <span class="iconfont position__icon">&#xe7f1;</span>
        东南大学四牌楼校区中心楼
        <span class="iconfont position__notice">&#xe7c4;</span>
      </div>
    </div>
    <div class="docker">
      <div class="docker__item docker__item--active">
        <div class="iconfont">&#xe600;</div>
        <div class="docker__title">首页</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe698;</div>
      <div class="docker__title">购物车</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe7b3;</div>
        <div class="docker__title">订单</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">&#xe78b;</div>
        <div class="docker__title">我的</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/virables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid #F1F1F1;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
