<!-- 搜索组件 -->
<template>
  <div>
      <section class="search">
        <header-top :title="title"></header-top>
        <form class="search_form" action="#">
          <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
          <input type="submit" name="submit" class="search_submit">
        </form>
      </section>
    </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop"
export default {
  name:'',
  data () {
    return {
      title:"搜索"
    }
  },
  components:{
    HeaderTop
  },

  computed:{},

  mounted(){},

  methods:{}
}

</script>
<style  scoped lang='stylus'>
@import "../../common/stylus/mixins.styl"
.search
  width 100%
  .search_form
    clearFix()
    margin-top 45px
    background-color #fff
    padding 12px 8px
    input
      height 35px
      padding 0 4px
      border-radius 2px
      font-weight bold
      outline none
      &.search_input
        float left
        width 79%
        border 4px solid #f2f2f2
        font-size 14px
        color #333
        background-color #f2f2f2
      &.search_submit
        float right
        width 18%
        border 4px solid #02a774
        font-size 16px
        color #fff
        background-color #02a774
</style>