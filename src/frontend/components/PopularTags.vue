<!-- src/components/PopularTags.vue -->
<template>
  <div class="popular-topics">
    <div class="header">
      <h3>向你推荐</h3>
      <a href="#" class="more-link">所有活动 ></a>
    </div>
    <ul class="topic-list">
      <li v-for="(topic, index) in topics" :key="index" class="topic-item">
        <img :src="topic.icon" alt="Topic Icon" class="topic-icon" />
        <span class="topic-title">{{ topic.title }}</span>
        <span class="arrow">></span>
      </li>
    </ul>
  </div>
</template>

<script>
import icon1 from '@/assets/xiaotubiao/1.png';
import icon2 from '@/assets/xiaotubiao/2.jpg';
import icon3 from '@/assets/xiaotubiao/3.png';
import icon4 from '@/assets/xiaotubiao/4.jpg';
import icon5 from '@/assets/xiaotubiao/5.png';
import icon6 from '@/assets/xiaotubiao/6.png';
import icon7 from '@/assets/xiaotubiao/7.jpg';
import icon8 from '@/assets/xiaotubiao/8.jpg';
export default {
  name: "PopularTopics",
  data() {
    return {
      topics: [
        { title: "AI 工具百宝箱", icon: icon1 },
        { title: "开源原子开发者工作坊", icon: icon2 },
        { title: "CSDN 博客", icon: icon3 },
        { title: "CSDN 2024年度技术大会议程", icon: icon4 },
        { title: "「新手规范充实挑战」创作教程", icon: icon5 },
        { title: "云原生系列定制峰会", icon: icon6 },
        { title: "HarmonyOS开发者社区", icon: icon7 },
        { title: "百度开发者社区", icon: icon8 },
        { title: "腾讯云开发者社区", icon: icon8 },
        // 更多条目
      ],
    };
  },
};
</script>

<style scoped>
.popular-topics {
  padding: 15px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 240px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.header h3 {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.more-link {
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
}

.more-link:hover {
  text-decoration: underline;
}

.topic-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.topic-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.topic-item:last-child {
  border-bottom: none;
}

.topic-item:hover {
  background-color: #f9f9f9;
}

.topic-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.topic-title {
  flex-grow: 1;
  font-size: 0.9rem;
  color: #333;
}

.arrow {
  color: #bbb;
}
</style>
