<template>
  <div class="qf-sv-wrap">
    <div class="qf-sv-group">
      <span class="qf-sv-group-prefix">
        <slot name="prefix"></slot>
      </span>

      <div class="qf-sv-content">
        <slot></slot>
      </div>

      <span class="qf-sv-group-suffix">
        <slot name="suffix"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    name:'QfSv'
}
</script>

<style lang="less" scoped>
  .qf-sv {

    &-wrap {
      margin-bottom: 24px
    }

    &-group {
      position     : relative;
      display      : flex;
      border-bottom: 1px solid rgba(245, 245, 245, 1);
      margin-bottom: 12px;
      margin-right : 20px;
      height       : 65px;

      &-prefix {
        display     : flex;
        align-items : center;
        color       : #737780;
        margin-right: 38px;
        min-width   : 80px;
        font-size   : 16px;
      }

      &-suffix {
        display    : flex;
        align-items: center;
      }
    }

    &-content {
      display    : flex;
      align-items: center;
      width      : 100%;
      font-size  : 16px;
      color      : #333;
    }

  }
</style>