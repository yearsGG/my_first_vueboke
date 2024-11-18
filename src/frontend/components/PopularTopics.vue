<!-- src/components/PopularTopics.vue -->
<template>
  <div class="footer">
    <div class="footer-links">
      <a href="#">关于我们</a>
      <a href="#">招贤纳士</a>
      <a href="#">商务合作</a>
      <a href="#">寻求报道</a>
      <span class="separator">|</span>
      <span>📞 400-660-0108</span>
      <span class="separator">|</span>
      <span>✉️ kefu@csdn.net</span>
      <span class="separator">|</span>
      <span>在线客服 工作时间 8:30-22:00</span>
    </div>

    <div class="footer-info">
      <p>
        公安备案号11010502030143 京ICP备19004658号 京网文【2020】1039-165号
        经营性网站备案信息 北京互联网违法和不良信息举报中心
        家长监护 网络110报警服务 中国互联网举报中心 Chrome商店下载
        账号管理规范 版权与免责声明 版权申请 出版物许可
        营业执照
      </p>
      <p>©1999-2024 北京创新乐知网络技术有限公司</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  padding: 20px;
  background-color: #f8f8f8;
  color: #888;
  font-size: 0.85rem;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #555;
}

.footer-links a {
  color: #555;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-links .separator {
  color: #ccc;
}

.footer-info {
  font-size: 0.75rem;
  color: #999;
  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
}
</style>
