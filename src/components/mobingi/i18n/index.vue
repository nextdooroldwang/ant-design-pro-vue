<template>
  <a-dropdown>
    <a-icon type="global" class="svg-container" :style="iconStyle"/>
    <a-menu slot="overlay" @click="handleChangeLang">
      <a-menu-item key="en">English</a-menu-item>
      <a-menu-item key="ja">日本語</a-menu-item>
      <a-menu-item key="zh">中文</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>

export default {
  name: 'I18n',
  props: {
    iconStyle: {
      type: Object,
      default: () => { }
    }
  },
  methods: {
    handleChangeLang ({ key }) {
      this.$i18n.locale = key
      this.$store.dispatch('setLang', key)
      // this.$emit('on-change', lang)
      this.$message.success('Switch Language Success')
    }
  }
}
</script>

<style scoped>
.svg-container {
  cursor: pointer;
}
</style>
