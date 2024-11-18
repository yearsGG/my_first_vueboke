<!-- src/components/Banner.vue -->
<template>
  <div class="banner">
    <!-- 左侧主要内容部分 -->
    <div class="main-content">
      <h3>头条</h3>
      <div class="headline">
        <img :src="headline.image" alt="Headline Image" class="headline-image" />
        <div class="headline-content">
          <h4>{{ headline.title }}</h4>
          <p>{{ headline.description }}</p>
        </div>
      </div>
    </div>

    <!-- 中间热点部分 -->
    <div class="hot-topics">
      <h3>热点</h3>
      <ul>
        <li v-for="(topic, index) in hotTopics" :key="index">
          <a href="#">{{ topic.title }}</a>
        </li>
      </ul>
    </div>

    <!-- 右侧广告部分 -->
    <div class="advertisement">
      <img :src="advertisement.image" alt="Advertisement" />
      <p>{{ advertisement.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      headline: {
        title: "OpenAI & Anthropic首席产品官公开讨论",
        description: "探讨如何在保持安全的同时实现AI的开放性和创新。",
        image: "https://example.com/headline.jpg", // 替换为实际图片链接
      },
      hotTopics: [
        { title: "不满来自 Linus！仅改 21 行代码的提案却未通过" },
        { title: "Python 官方否认弃用 JavaScript，GitHub Issue 热度飙升" },
        { title: "一文读懂普拉姆（Pruner）：大模型训练的革命性进展" },
        { title: "程序员用 Raspberry Pi 自制「超级计算机」，堪比服务器" },
        { title: "字节码让开发更高效，Code AI Agent 正在进化中" },
      ],
      advertisement: {
        text: "1024 Show Me 扣子模版征集活动",
        image: "https://example.com/ad.jpg", // 替换为实际广告图片链接
      },
    };
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.main-content, .hot-topics, .advertisement {
  flex: 1;
}

.main-content {
  display: flex;
  flex-direction: column;
}

.main-content h3, .hot-topics h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.headline {
  display: flex;
  gap: 15px;
}

.headline-image {
  width: 120px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.headline-content h4 {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
}

.headline-content p {
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
}

.hot-topics ul {
  list-style: none;
  padding: 0;
}

.hot-topics li {
  margin-bottom: 8px;
}

.hot-topics a {
  color: #007bff;
  text-decoration: none;
}

.hot-topics a:hover {
  text-decoration: underline;
}

.advertisement {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.advertisement img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
