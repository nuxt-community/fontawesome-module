<template>
  <div class="ficon-container">
    <div class="ficon-search-wrapper">
      <input v-model="query" class="ficon-search" placeholder="Search Icons">
    </div>
    <div class="ficon-preview-wrapper">
      <div v-for="icon in filteredIcons" :key="icon[1]" class="ficon-preview">
        <div class="ficon-card">
          <font-awesome-icon :icon="icon[1]" :class="size" />
          <span class="ficon-name">{{ icon[1] }}</span>
          <input
            class="ficon-name-input"
            type="text"
            readonly
            :value="`<font-awesome-icon icon='${icon[1]}' class='${size}' />`"
            @click="copy"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'fa-2x'
    },
    onClick: {
      type: Function,
      default: () => () => {}
    },
    icons: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      query: ''
    }
  },
  computed: {
    filteredIcons () {
      return this.icons.filter(([_, name]) => name.match(this.query))
    }
  },
  methods: {
    copy (e) {
      const el = e.target
      el.select()
      el.setSelectionRange(0, 99999)
      document.execCommand('copy')
      this.onClick(`Icon "${e.target.value}" copied to clipboard`)
    }
  }
}
</script>

<style scoped>
.ficon-container {
  padding: 25px;
  max-width: 1050px;
  margin: 0 auto;
  box-sizing: border-box;
}
.ficon-container * {
  box-sizing: inherit
}
.ficon-search-wrapper {
  margin: 10px 25px;
}
.ficon-sprite-title {
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family: monospace;
  letter-spacing: 0.1em;
}
.ficon-search {
  width: 100%;
  height: 50px;
  font-size: 20px;
  text-indent: 10px;
}
.ficon-preview-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.ficon-preview {
  width: 200px;
  height: 200px;
  padding: 10px;
  text-align: center;
}
.ficon-card {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.ficon-card:hover {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}
.ficon-name {
  margin-top: 10px;
  font-family: monospace;
  width: 100%;
  color: #333;
  background: #fff;
  overflow: hidden;
  padding: 2px;
  border-radius: 3px;
}
.ficon-name-input {
  position: absolute;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  cursor: copy;
}
</style>
