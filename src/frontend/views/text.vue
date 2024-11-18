<template>
  <div :class="backgroundClass" class="dynamic-background">


  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: '@/assets/img.png', // 默认图像
    };
  },
  computed: {
    backgroundClass() {
      return {
        'background-image': true,
        'custom-background': this.imageSrc // 根据条件添加类
      };
    }
  },
  methods: {
    changeBackground() {
      // 切换背景图像的逻辑
      this.imageSrc = this.imageSrc === 'https://example.com/image1.png'
          ? 'https://example.com/image2.png'
          : 'https://example.com/image1.png';
    }
  }
};
</script>

<style scoped>
.dynamic-background {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
}

.background-image.custom-background {
  background-image: url(@/assets/background.jpg);
}
</style>