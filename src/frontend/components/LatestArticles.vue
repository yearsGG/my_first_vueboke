// src/frontend/components/LatestArticles.vue
<template>
  <div class="latest-articles">
    <div class="article" v-for="(article, index) in displayedArticles" :key="index">
      <!-- 左侧图片部分 -->
      <div class="article-image" v-if="article.image">
        <img :src="article.image" alt="Article Image" />
      </div>
      <!-- 右侧内容部分 -->
      <div class="article-content">
        <h3 class="article-title">{{ article.title }}</h3>
        <p class="article-summary">{{ article.summary }}</p>
        <div class="article-meta">
          <span v-for="tag in article.tags" :key="tag" class="tag">#{{ tag }}</span>
          <span>作者: {{ article.author }}</span>
          <span>分类: {{ article.category }}</span>
        </div>
        <div class="article-actions">
          <span>👍 {{ article.likes }}</span>
          <span>💬 {{ article.comments }}</span>
          <span>🔗 {{ article.timestamp }}</span>
        </div>
      </div>
    </div>
    <p v-if="allLoaded" class="no-more">没有更多内容了</p>
  </div>
</template>

<script>
import apiClient from '../config/api';

export default {
  name: "LatestArticles",
  data() {
    return {
      articles: [],
      displayedArticles: [],
      isLoading: false,
      allLoaded: false,
      loadCount: 3, // 每次加载的数量
    };
  },
  created() {
    this.fetchArticles(); // 初始化加载文章数据
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await apiClient.get('/articles');
        console.log("API 响应数据:", response.data); // 打印 API 响应数据，确认包含图片文件名

        this.articles = response.data.map(article => ({
          ...article,
          image: article.image ? new URL(`../assets/datubiao/${article.image}`, import.meta.url).href : null
        }));
        this.displayedArticles = this.articles.slice(0, this.loadCount);
      } catch (error) {
        console.error("无法获取文章数据:", error);
        if (error.response) {
          console.log("响应错误:", error.response.data);
        } else if (error.request) {
          console.log("请求未收到响应:", error.request);
        } else {
          console.log("请求错误:", error.message);
        }
      }
    },
    loadMoreArticles() {
      if (this.isLoading || this.allLoaded) return;

      this.isLoading = true;
      const start = this.displayedArticles.length;
      const end = start + this.loadCount;

      if (end >= this.articles.length) {
        this.displayedArticles = this.articles;
        this.allLoaded = true;
      } else {
        this.displayedArticles = this.articles.slice(0, end);
      }
      this.isLoading = false;
    }
  }
};
</script>



<style scoped>
.latest-articles {
  padding: 20px;
  background-color: #f9f9f9;
}
/* 样式同之前保持不变 */

.article {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  transition: background 0.2s;
}

.article:hover {
  background-color: #f5f5f5;
}

.article-image img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}

.article-content {
  flex: 1;
}

.article-title {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 5px 0;
  cursor: pointer;
  transition: color 0.2s;
}

.article-title:hover {
  color: #007bff;
}

.article-summary {
  font-size: 0.95rem;
  color: #666;
  margin: 5px 0;
  line-height: 1.4;
}

.article-meta {
  font-size: 0.85rem;
  color: #999;
  margin: 5px 0;
}

.tag {
  margin-right: 5px;
  color: #007bff;
}

.article-actions {
  font-size: 0.85rem;
  color: #999;
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.load-more {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px auto;
  display: block;
}

.load-more:hover {
  background-color: #0056b3;
}

.no-more {
  color: #999;
  text-align: center;
  margin: 20px 0;
  font-size: 0.9rem;
}
</style>

