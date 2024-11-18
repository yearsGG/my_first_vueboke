<!-- src/views/HomePage.vue -->
<template>
  <div class="home-page">
    <Banner />
    <div class="content">
      <main class="main-content">
        <LatestArticles ref="latestArticles" />
        <PopularTopics :topics="popularTopics" />
      </main>
      <PopularTags :tags="popularTags" />
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import LatestArticles from "../components/LatestArticles.vue";
import PopularTopics from "../components/PopularTopics.vue";
import PopularTags from "../components/PopularTags.vue";

export default {
  name: "HomePage",
  components: {
    Banner,
    LatestArticles,
    PopularTopics,
    PopularTags,
  },
  data() {
    return {
      popularTopics: ['Vue.js', 'JavaScript', 'Web开发', '性能优化'],
      popularTags: ['Vue3', '前端', 'JavaScript', '编程'],
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.offsetHeight - 50;

      if (scrollPosition >= threshold) {
        this.$refs.latestArticles.loadMoreArticles();
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.home-page {
  padding: 20px;
  background-color: #f9f9f9;
}
.content {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.main-content {
  flex: 3;
}
</style>
