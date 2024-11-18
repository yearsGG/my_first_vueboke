<!-- src/components/InfiniteScrollList.vue -->
<template>
  <div class="infinite-scroll-list">
    <ul>
      <li v-for="item in visibleItems" :key="item.name">{{ item.name }}</li>
    </ul>
    <p v-if="allLoaded" class="no-more">没有更多内容了</p>
  </div>
</template>

<script>
export default {
  name: "InfiniteScrollList",
  data() {
    return {
      items: [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
        { name: 'Item 4' },
        { name: 'Item 5' },
        { name: 'Item 6' },
        { name: 'Item 7' },
        { name: 'Item 8' },
        { name: 'Item 9' },
        { name: 'Item 10' },
        { name: 'Item 11' },
        { name: 'Item 12' },
        { name: 'Item 13' },
        { name: 'Item 14' },
        { name: 'Item 15' },
        { name: 'Item 16' },
        { name: 'Item 17' },
        { name: 'Item 18' },
        { name: 'Item 19' },
        // ...添加更多数据以便于测试滚动加载
      ],
      visibleItems: [], // 当前显示的项目
      perPage: 10, // 每次加载的项目数量
      currentPage: 1, // 当前页码
      allLoaded: false // 是否加载完所有内容
    };
  },
  computed: {
    totalItems() {
      return this.items.length;
    }
  },
  mounted() {
    this.loadMoreItems(); // 初始化加载
    window.addEventListener('scroll', this.handleScroll); // 监听滚动事件
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll); // 组件销毁时移除监听
  },
  methods: {
    loadMoreItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      this.visibleItems = [...this.visibleItems, ...this.items.slice(start, end)];
      this.currentPage++;

      // 检查是否加载完所有内容
      if (this.visibleItems.length >= this.totalItems) {
        this.allLoaded = true;
      }
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomOfPage = windowHeight + scrollY >= documentHeight - 50; // 距底部50px时加载
      if (bottomOfPage && !this.allLoaded) {
        this.loadMoreItems();
      }
    }
  }
};
</script>

<style scoped>
.infinite-scroll-list {
  padding: 20px;
}
.no-more {
  color: #999;
  text-align: center;
  margin: 20px 0;
}
</style>
