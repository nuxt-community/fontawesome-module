<template>
  <div class="ficon-container">
    <div class="ficon-search-wrapper">
      <input v-model="query" class="ficon-search" placeholder="Search Icons">
    </div>
    <div class="ficon-preview-wrapper">
      <div v-for="icon in filteredIcons" :key="icon[1]" class="ficon-preview">
        <div class="ficon-card">
          <font-awesome-icon :icon="icon[1]" class="fa-2x" />
          <span class="ficon-name">{{ icon[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
  }
}
</script>

<style scoped>
.ficon-container {
  max-width: 1050px;
  margin: 0 auto;
}
.ficon-search-wrapper {
  margin: 10px 25px;
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
  width: 150px;
  height: 150px;
  padding: 10px;
  text-align: center;
}
.ficon-card {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.ficon-name {
  margin-top: 10px;
  font-family: monospace;
}
</style>
